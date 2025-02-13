var mc = Object.defineProperty;
var Ca = (t) => {
  throw TypeError(t);
};
var yc = (t, e, r) =>
  e in t
    ? mc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[e] = r);
var F = (t, e, r) => yc(t, typeof e != "symbol" ? e + "" : e, r),
  us = (t, e, r) => e.has(t) || Ca("Cannot " + r);
var y = (t, e, r) => (
    us(t, e, "read from private field"), r ? r.call(t) : e.get(t)
  ),
  he = (t, e, r) =>
    e.has(t)
      ? Ca("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(t)
      : e.set(t, r),
  Y = (t, e, r, s) => (
    us(t, e, "write to private field"), s ? s.call(t, r) : e.set(t, r), r
  ),
  H = (t, e, r) => (us(t, e, "access private method"), r);
var pi = (t, e, r, s) => ({
  set _(a) {
    Y(t, e, a, r);
  },
  get _() {
    return y(t, e, s);
  },
});
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
  new MutationObserver((a) => {
    for (const c of a)
      if (c.type === "childList")
        for (const l of c.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && s(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(a) {
    const c = {};
    return (
      a.integrity && (c.integrity = a.integrity),
      a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function s(a) {
    if (a.ep) return;
    a.ep = !0;
    const c = r(a);
    fetch(a.href, c);
  }
})();
const vc = {
    "Amazon Silk": "amazon_silk",
    "Android Browser": "android",
    Bada: "bada",
    BlackBerry: "blackberry",
    Chrome: "chrome",
    Chromium: "chromium",
    Electron: "electron",
    Epiphany: "epiphany",
    Firefox: "firefox",
    Focus: "focus",
    Generic: "generic",
    "Google Search": "google_search",
    Googlebot: "googlebot",
    "Internet Explorer": "ie",
    "K-Meleon": "k_meleon",
    Maxthon: "maxthon",
    "Microsoft Edge": "edge",
    "MZ Browser": "mz",
    "NAVER Whale Browser": "naver",
    Opera: "opera",
    "Opera Coast": "opera_coast",
    PhantomJS: "phantomjs",
    Puffin: "puffin",
    QupZilla: "qupzilla",
    QQ: "qq",
    QQLite: "qqlite",
    Safari: "safari",
    Sailfish: "sailfish",
    "Samsung Internet for Android": "samsung_internet",
    SeaMonkey: "seamonkey",
    Sleipnir: "sleipnir",
    Swing: "swing",
    Tizen: "tizen",
    "UC Browser": "uc",
    Vivaldi: "vivaldi",
    "WebOS Browser": "webos",
    WeChat: "wechat",
    "Yandex Browser": "yandex",
    Roku: "roku",
  },
  fo = {
    amazon_silk: "Amazon Silk",
    android: "Android Browser",
    bada: "Bada",
    blackberry: "BlackBerry",
    chrome: "Chrome",
    chromium: "Chromium",
    electron: "Electron",
    epiphany: "Epiphany",
    firefox: "Firefox",
    focus: "Focus",
    generic: "Generic",
    googlebot: "Googlebot",
    google_search: "Google Search",
    ie: "Internet Explorer",
    k_meleon: "K-Meleon",
    maxthon: "Maxthon",
    edge: "Microsoft Edge",
    mz: "MZ Browser",
    naver: "NAVER Whale Browser",
    opera: "Opera",
    opera_coast: "Opera Coast",
    phantomjs: "PhantomJS",
    puffin: "Puffin",
    qupzilla: "QupZilla",
    qq: "QQ Browser",
    qqlite: "QQ Browser Lite",
    safari: "Safari",
    sailfish: "Sailfish",
    samsung_internet: "Samsung Internet for Android",
    seamonkey: "SeaMonkey",
    sleipnir: "Sleipnir",
    swing: "Swing",
    tizen: "Tizen",
    uc: "UC Browser",
    vivaldi: "Vivaldi",
    webos: "WebOS Browser",
    wechat: "WeChat",
    yandex: "Yandex Browser",
  },
  Ee = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" },
  Le = {
    WindowsPhone: "Windows Phone",
    Windows: "Windows",
    MacOS: "macOS",
    iOS: "iOS",
    Android: "Android",
    WebOS: "WebOS",
    BlackBerry: "BlackBerry",
    Bada: "Bada",
    Tizen: "Tizen",
    Linux: "Linux",
    ChromeOS: "Chrome OS",
    PlayStation4: "PlayStation 4",
    Roku: "Roku",
  },
  Yt = {
    EdgeHTML: "EdgeHTML",
    Blink: "Blink",
    Trident: "Trident",
    Presto: "Presto",
    Gecko: "Gecko",
    WebKit: "WebKit",
  };
class k {
  static getFirstMatch(e, r) {
    const s = r.match(e);
    return (s && s.length > 0 && s[1]) || "";
  }
  static getSecondMatch(e, r) {
    const s = r.match(e);
    return (s && s.length > 1 && s[2]) || "";
  }
  static matchAndReturnConst(e, r, s) {
    if (e.test(r)) return s;
  }
  static getWindowsVersionName(e) {
    switch (e) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  static getMacOSVersionName(e) {
    const r = e
      .split(".")
      .splice(0, 2)
      .map((s) => parseInt(s, 10) || 0);
    if ((r.push(0), r[0] === 10))
      switch (r[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
  }
  static getAndroidVersionName(e) {
    const r = e
      .split(".")
      .splice(0, 2)
      .map((s) => parseInt(s, 10) || 0);
    if ((r.push(0), !(r[0] === 1 && r[1] < 5))) {
      if (r[0] === 1 && r[1] < 6) return "Cupcake";
      if (r[0] === 1 && r[1] >= 6) return "Donut";
      if (r[0] === 2 && r[1] < 2) return "Eclair";
      if (r[0] === 2 && r[1] === 2) return "Froyo";
      if (r[0] === 2 && r[1] > 2) return "Gingerbread";
      if (r[0] === 3) return "Honeycomb";
      if (r[0] === 4 && r[1] < 1) return "Ice Cream Sandwich";
      if (r[0] === 4 && r[1] < 4) return "Jelly Bean";
      if (r[0] === 4 && r[1] >= 4) return "KitKat";
      if (r[0] === 5) return "Lollipop";
      if (r[0] === 6) return "Marshmallow";
      if (r[0] === 7) return "Nougat";
      if (r[0] === 8) return "Oreo";
      if (r[0] === 9) return "Pie";
    }
  }
  static getVersionPrecision(e) {
    return e.split(".").length;
  }
  static compareVersions(e, r, s = !1) {
    const a = k.getVersionPrecision(e),
      c = k.getVersionPrecision(r);
    let l = Math.max(a, c),
      u = 0;
    const f = k.map([e, r], (p) => {
      const b = l - k.getVersionPrecision(p),
        v = p + new Array(b + 1).join(".0");
      return k
        .map(v.split("."), (_) => new Array(20 - _.length).join("0") + _)
        .reverse();
    });
    for (s && (u = l - Math.min(a, c)), l -= 1; l >= u; ) {
      if (f[0][l] > f[1][l]) return 1;
      if (f[0][l] === f[1][l]) {
        if (l === u) return 0;
        l -= 1;
      } else if (f[0][l] < f[1][l]) return -1;
    }
  }
  static map(e, r) {
    const s = [];
    let a;
    if (Array.prototype.map) return Array.prototype.map.call(e, r);
    for (a = 0; a < e.length; a += 1) s.push(r(e[a]));
    return s;
  }
  static find(e, r) {
    let s, a;
    if (Array.prototype.find) return Array.prototype.find.call(e, r);
    for (s = 0, a = e.length; s < a; s += 1) {
      const c = e[s];
      if (r(c, s)) return c;
    }
  }
  static assign(e, ...r) {
    const s = e;
    let a, c;
    if (Object.assign) return Object.assign(e, ...r);
    for (a = 0, c = r.length; a < c; a += 1) {
      const l = r[a];
      typeof l == "object" &&
        l !== null &&
        Object.keys(l).forEach((f) => {
          s[f] = l[f];
        });
    }
    return e;
  }
  static getBrowserAlias(e) {
    return vc[e];
  }
  static getBrowserTypeByAlias(e) {
    return fo[e] || "";
  }
}
const pe = /version\/(\d+(\.?_?\d+)+)/i,
  wc = [
    {
      test: [/googlebot/i],
      describe(t) {
        const e = { name: "Googlebot" },
          r =
            k.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) ||
            k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/opera/i],
      describe(t) {
        const e = { name: "Opera" },
          r =
            k.getFirstMatch(pe, t) ||
            k.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/opr\/|opios/i],
      describe(t) {
        const e = { name: "Opera" },
          r =
            k.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) ||
            k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/SamsungBrowser/i],
      describe(t) {
        const e = { name: "Samsung Internet for Android" },
          r =
            k.getFirstMatch(pe, t) ||
            k.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/Whale/i],
      describe(t) {
        const e = { name: "NAVER Whale Browser" },
          r =
            k.getFirstMatch(pe, t) ||
            k.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/MZBrowser/i],
      describe(t) {
        const e = { name: "MZ Browser" },
          r =
            k.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) ||
            k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/focus/i],
      describe(t) {
        const e = { name: "Focus" },
          r =
            k.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) ||
            k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/swing/i],
      describe(t) {
        const e = { name: "Swing" },
          r =
            k.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) ||
            k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/coast/i],
      describe(t) {
        const e = { name: "Opera Coast" },
          r =
            k.getFirstMatch(pe, t) ||
            k.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/opt\/\d+(?:.?_?\d+)+/i],
      describe(t) {
        const e = { name: "Opera Touch" },
          r =
            k.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) ||
            k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/yabrowser/i],
      describe(t) {
        const e = { name: "Yandex Browser" },
          r =
            k.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) ||
            k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/ucbrowser/i],
      describe(t) {
        const e = { name: "UC Browser" },
          r =
            k.getFirstMatch(pe, t) ||
            k.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/Maxthon|mxios/i],
      describe(t) {
        const e = { name: "Maxthon" },
          r =
            k.getFirstMatch(pe, t) ||
            k.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/epiphany/i],
      describe(t) {
        const e = { name: "Epiphany" },
          r =
            k.getFirstMatch(pe, t) ||
            k.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/puffin/i],
      describe(t) {
        const e = { name: "Puffin" },
          r =
            k.getFirstMatch(pe, t) ||
            k.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/sleipnir/i],
      describe(t) {
        const e = { name: "Sleipnir" },
          r =
            k.getFirstMatch(pe, t) ||
            k.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/k-meleon/i],
      describe(t) {
        const e = { name: "K-Meleon" },
          r =
            k.getFirstMatch(pe, t) ||
            k.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/micromessenger/i],
      describe(t) {
        const e = { name: "WeChat" },
          r =
            k.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) ||
            k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/qqbrowser/i],
      describe(t) {
        const e = {
            name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser",
          },
          r =
            k.getFirstMatch(
              /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
              t
            ) || k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/msie|trident/i],
      describe(t) {
        const e = { name: "Internet Explorer" },
          r = k.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/\sedg\//i],
      describe(t) {
        const e = { name: "Microsoft Edge" },
          r = k.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/edg([ea]|ios)/i],
      describe(t) {
        const e = { name: "Microsoft Edge" },
          r = k.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/vivaldi/i],
      describe(t) {
        const e = { name: "Vivaldi" },
          r = k.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/seamonkey/i],
      describe(t) {
        const e = { name: "SeaMonkey" },
          r = k.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/sailfish/i],
      describe(t) {
        const e = { name: "Sailfish" },
          r = k.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/silk/i],
      describe(t) {
        const e = { name: "Amazon Silk" },
          r = k.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/phantom/i],
      describe(t) {
        const e = { name: "PhantomJS" },
          r = k.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/slimerjs/i],
      describe(t) {
        const e = { name: "SlimerJS" },
          r = k.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
      describe(t) {
        const e = { name: "BlackBerry" },
          r =
            k.getFirstMatch(pe, t) ||
            k.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/(web|hpw)[o0]s/i],
      describe(t) {
        const e = { name: "WebOS Browser" },
          r =
            k.getFirstMatch(pe, t) ||
            k.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/bada/i],
      describe(t) {
        const e = { name: "Bada" },
          r = k.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/tizen/i],
      describe(t) {
        const e = { name: "Tizen" },
          r =
            k.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) ||
            k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/qupzilla/i],
      describe(t) {
        const e = { name: "QupZilla" },
          r =
            k.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) ||
            k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/firefox|iceweasel|fxios/i],
      describe(t) {
        const e = { name: "Firefox" },
          r = k.getFirstMatch(
            /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
            t
          );
        return r && (e.version = r), e;
      },
    },
    {
      test: [/electron/i],
      describe(t) {
        const e = { name: "Electron" },
          r = k.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/MiuiBrowser/i],
      describe(t) {
        const e = { name: "Miui" },
          r = k.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/chromium/i],
      describe(t) {
        const e = { name: "Chromium" },
          r =
            k.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) ||
            k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/chrome|crios|crmo/i],
      describe(t) {
        const e = { name: "Chrome" },
          r = k.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/GSA/i],
      describe(t) {
        const e = { name: "Google Search" },
          r = k.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test(t) {
        const e = !t.test(/like android/i),
          r = t.test(/android/i);
        return e && r;
      },
      describe(t) {
        const e = { name: "Android Browser" },
          r = k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/playstation 4/i],
      describe(t) {
        const e = { name: "PlayStation 4" },
          r = k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/safari|applewebkit/i],
      describe(t) {
        const e = { name: "Safari" },
          r = k.getFirstMatch(pe, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/.*/i],
      describe(t) {
        const e = /^(.*)\/(.*) /,
          r = /^(.*)\/(.*)[ \t]\((.*)/,
          a = t.search("\\(") !== -1 ? r : e;
        return { name: k.getFirstMatch(a, t), version: k.getSecondMatch(a, t) };
      },
    },
  ],
  bc = [
    {
      test: [/Roku\/DVP/],
      describe(t) {
        const e = k.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
        return { name: Le.Roku, version: e };
      },
    },
    {
      test: [/windows phone/i],
      describe(t) {
        const e = k.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
        return { name: Le.WindowsPhone, version: e };
      },
    },
    {
      test: [/windows /i],
      describe(t) {
        const e = k.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t),
          r = k.getWindowsVersionName(e);
        return { name: Le.Windows, version: e, versionName: r };
      },
    },
    {
      test: [/Macintosh(.*?) FxiOS(.*?)\//],
      describe(t) {
        const e = { name: Le.iOS },
          r = k.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/macintosh/i],
      describe(t) {
        const e = k
            .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t)
            .replace(/[_\s]/g, "."),
          r = k.getMacOSVersionName(e),
          s = { name: Le.MacOS, version: e };
        return r && (s.versionName = r), s;
      },
    },
    {
      test: [/(ipod|iphone|ipad)/i],
      describe(t) {
        const e = k
          .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t)
          .replace(/[_\s]/g, ".");
        return { name: Le.iOS, version: e };
      },
    },
    {
      test(t) {
        const e = !t.test(/like android/i),
          r = t.test(/android/i);
        return e && r;
      },
      describe(t) {
        const e = k.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t),
          r = k.getAndroidVersionName(e),
          s = { name: Le.Android, version: e };
        return r && (s.versionName = r), s;
      },
    },
    {
      test: [/(web|hpw)[o0]s/i],
      describe(t) {
        const e = k.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t),
          r = { name: Le.WebOS };
        return e && e.length && (r.version = e), r;
      },
    },
    {
      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
      describe(t) {
        const e =
          k.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) ||
          k.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) ||
          k.getFirstMatch(/\bbb(\d+)/i, t);
        return { name: Le.BlackBerry, version: e };
      },
    },
    {
      test: [/bada/i],
      describe(t) {
        const e = k.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
        return { name: Le.Bada, version: e };
      },
    },
    {
      test: [/tizen/i],
      describe(t) {
        const e = k.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
        return { name: Le.Tizen, version: e };
      },
    },
    {
      test: [/linux/i],
      describe() {
        return { name: Le.Linux };
      },
    },
    {
      test: [/CrOS/],
      describe() {
        return { name: Le.ChromeOS };
      },
    },
    {
      test: [/PlayStation 4/],
      describe(t) {
        const e = k.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
        return { name: Le.PlayStation4, version: e };
      },
    },
  ],
  _c = [
    {
      test: [/googlebot/i],
      describe() {
        return { type: "bot", vendor: "Google" };
      },
    },
    {
      test: [/huawei/i],
      describe(t) {
        const e = k.getFirstMatch(/(can-l01)/i, t) && "Nova",
          r = { type: Ee.mobile, vendor: "Huawei" };
        return e && (r.model = e), r;
      },
    },
    {
      test: [/nexus\s*(?:7|8|9|10).*/i],
      describe() {
        return { type: Ee.tablet, vendor: "Nexus" };
      },
    },
    {
      test: [/ipad/i],
      describe() {
        return { type: Ee.tablet, vendor: "Apple", model: "iPad" };
      },
    },
    {
      test: [/Macintosh(.*?) FxiOS(.*?)\//],
      describe() {
        return { type: Ee.tablet, vendor: "Apple", model: "iPad" };
      },
    },
    {
      test: [/kftt build/i],
      describe() {
        return { type: Ee.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
      },
    },
    {
      test: [/silk/i],
      describe() {
        return { type: Ee.tablet, vendor: "Amazon" };
      },
    },
    {
      test: [/tablet(?! pc)/i],
      describe() {
        return { type: Ee.tablet };
      },
    },
    {
      test(t) {
        const e = t.test(/ipod|iphone/i),
          r = t.test(/like (ipod|iphone)/i);
        return e && !r;
      },
      describe(t) {
        const e = k.getFirstMatch(/(ipod|iphone)/i, t);
        return { type: Ee.mobile, vendor: "Apple", model: e };
      },
    },
    {
      test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
      describe() {
        return { type: Ee.mobile, vendor: "Nexus" };
      },
    },
    {
      test: [/[^-]mobi/i],
      describe() {
        return { type: Ee.mobile };
      },
    },
    {
      test(t) {
        return t.getBrowserName(!0) === "blackberry";
      },
      describe() {
        return { type: Ee.mobile, vendor: "BlackBerry" };
      },
    },
    {
      test(t) {
        return t.getBrowserName(!0) === "bada";
      },
      describe() {
        return { type: Ee.mobile };
      },
    },
    {
      test(t) {
        return t.getBrowserName() === "windows phone";
      },
      describe() {
        return { type: Ee.mobile, vendor: "Microsoft" };
      },
    },
    {
      test(t) {
        const e = Number(String(t.getOSVersion()).split(".")[0]);
        return t.getOSName(!0) === "android" && e >= 3;
      },
      describe() {
        return { type: Ee.tablet };
      },
    },
    {
      test(t) {
        return t.getOSName(!0) === "android";
      },
      describe() {
        return { type: Ee.mobile };
      },
    },
    {
      test(t) {
        return t.getOSName(!0) === "macos";
      },
      describe() {
        return { type: Ee.desktop, vendor: "Apple" };
      },
    },
    {
      test(t) {
        return t.getOSName(!0) === "windows";
      },
      describe() {
        return { type: Ee.desktop };
      },
    },
    {
      test(t) {
        return t.getOSName(!0) === "linux";
      },
      describe() {
        return { type: Ee.desktop };
      },
    },
    {
      test(t) {
        return t.getOSName(!0) === "playstation 4";
      },
      describe() {
        return { type: Ee.tv };
      },
    },
    {
      test(t) {
        return t.getOSName(!0) === "roku";
      },
      describe() {
        return { type: Ee.tv };
      },
    },
  ],
  Ec = [
    {
      test(t) {
        return t.getBrowserName(!0) === "microsoft edge";
      },
      describe(t) {
        if (/\sedg\//i.test(t)) return { name: Yt.Blink };
        const r = k.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
        return { name: Yt.EdgeHTML, version: r };
      },
    },
    {
      test: [/trident/i],
      describe(t) {
        const e = { name: Yt.Trident },
          r = k.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test(t) {
        return t.test(/presto/i);
      },
      describe(t) {
        const e = { name: Yt.Presto },
          r = k.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test(t) {
        const e = t.test(/gecko/i),
          r = t.test(/like gecko/i);
        return e && !r;
      },
      describe(t) {
        const e = { name: Yt.Gecko },
          r = k.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
    {
      test: [/(apple)?webkit\/537\.36/i],
      describe() {
        return { name: Yt.Blink };
      },
    },
    {
      test: [/(apple)?webkit/i],
      describe(t) {
        const e = { name: Yt.WebKit },
          r = k.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
        return r && (e.version = r), e;
      },
    },
  ];
class La {
  constructor(e, r = !1) {
    if (e == null || e === "")
      throw new Error("UserAgent parameter can't be empty");
    (this._ua = e), (this.parsedResult = {}), r !== !0 && this.parse();
  }
  getUA() {
    return this._ua;
  }
  test(e) {
    return e.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    const e = k.find(wc, (r) => {
      if (typeof r.test == "function") return r.test(this);
      if (r.test instanceof Array) return r.test.some((s) => this.test(s));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.browser = e.describe(this.getUA())),
      this.parsedResult.browser
    );
  }
  getBrowser() {
    return this.parsedResult.browser
      ? this.parsedResult.browser
      : this.parseBrowser();
  }
  getBrowserName(e) {
    return e
      ? String(this.getBrowser().name).toLowerCase() || ""
      : this.getBrowser().name || "";
  }
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  parseOS() {
    this.parsedResult.os = {};
    const e = k.find(bc, (r) => {
      if (typeof r.test == "function") return r.test(this);
      if (r.test instanceof Array) return r.test.some((s) => this.test(s));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.os = e.describe(this.getUA())),
      this.parsedResult.os
    );
  }
  getOSName(e) {
    const { name: r } = this.getOS();
    return e ? String(r).toLowerCase() || "" : r || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform
      ? this.parsedResult.platform
      : this.parsePlatform();
  }
  getPlatformType(e = !1) {
    const { type: r } = this.getPlatform();
    return e ? String(r).toLowerCase() || "" : r || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    const e = k.find(_c, (r) => {
      if (typeof r.test == "function") return r.test(this);
      if (r.test instanceof Array) return r.test.some((s) => this.test(s));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.platform = e.describe(this.getUA())),
      this.parsedResult.platform
    );
  }
  getEngine() {
    return this.parsedResult.engine
      ? this.parsedResult.engine
      : this.parseEngine();
  }
  getEngineName(e) {
    return e
      ? String(this.getEngine().name).toLowerCase() || ""
      : this.getEngine().name || "";
  }
  parseEngine() {
    this.parsedResult.engine = {};
    const e = k.find(Ec, (r) => {
      if (typeof r.test == "function") return r.test(this);
      if (r.test instanceof Array) return r.test.some((s) => this.test(s));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.engine = e.describe(this.getUA())),
      this.parsedResult.engine
    );
  }
  parse() {
    return (
      this.parseBrowser(),
      this.parseOS(),
      this.parsePlatform(),
      this.parseEngine(),
      this
    );
  }
  getResult() {
    return k.assign({}, this.parsedResult);
  }
  satisfies(e) {
    const r = {};
    let s = 0;
    const a = {};
    let c = 0;
    if (
      (Object.keys(e).forEach((u) => {
        const f = e[u];
        typeof f == "string"
          ? ((a[u] = f), (c += 1))
          : typeof f == "object" && ((r[u] = f), (s += 1));
      }),
      s > 0)
    ) {
      const u = Object.keys(r),
        f = k.find(u, (b) => this.isOS(b));
      if (f) {
        const b = this.satisfies(r[f]);
        if (b !== void 0) return b;
      }
      const p = k.find(u, (b) => this.isPlatform(b));
      if (p) {
        const b = this.satisfies(r[p]);
        if (b !== void 0) return b;
      }
    }
    if (c > 0) {
      const u = Object.keys(a),
        f = k.find(u, (p) => this.isBrowser(p, !0));
      if (f !== void 0) return this.compareVersion(a[f]);
    }
  }
  isBrowser(e, r = !1) {
    const s = this.getBrowserName().toLowerCase();
    let a = e.toLowerCase();
    const c = k.getBrowserTypeByAlias(a);
    return r && c && (a = c.toLowerCase()), a === s;
  }
  compareVersion(e) {
    let r = [0],
      s = e,
      a = !1;
    const c = this.getBrowserVersion();
    if (typeof c == "string")
      return (
        e[0] === ">" || e[0] === "<"
          ? ((s = e.substr(1)),
            e[1] === "=" ? ((a = !0), (s = e.substr(2))) : (r = []),
            e[0] === ">" ? r.push(1) : r.push(-1))
          : e[0] === "="
          ? (s = e.substr(1))
          : e[0] === "~" && ((a = !0), (s = e.substr(1))),
        r.indexOf(k.compareVersions(c, s, a)) > -1
      );
  }
  isOS(e) {
    return this.getOSName(!0) === String(e).toLowerCase();
  }
  isPlatform(e) {
    return this.getPlatformType(!0) === String(e).toLowerCase();
  }
  isEngine(e) {
    return this.getEngineName(!0) === String(e).toLowerCase();
  }
  is(e, r = !1) {
    return this.isBrowser(e, r) || this.isOS(e) || this.isPlatform(e);
  }
  some(e = []) {
    return e.some((r) => this.is(r));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */ class Ac {
  static getParser(e, r = !1) {
    if (typeof e != "string") throw new Error("UserAgent should be a string");
    return new La(e, r);
  }
  static parse(e) {
    return new La(e).getResult();
  }
  static get BROWSER_MAP() {
    return fo;
  }
  static get ENGINE_MAP() {
    return Yt;
  }
  static get OS_MAP() {
    return Le;
  }
  static get PLATFORMS_MAP() {
    return Ee;
  }
}
class Sc {
  constructor() {
    F(this, "button");
    F(this, "modal");
    F(this, "shareLinks");
    F(this, "currentURL");
    (this.currentURL = window.location.href),
      (this.button = document.getElementById("share")),
      (this.modal = document.createElement("div")),
      (this.shareLinks = [
        {
          name: "Facebook",
          href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            this.currentURL
          )}`,
          color: "#1877F2",
          logo: "T3cPbe1wogKONByXwP_GqmsTOeRyZxYNC0hCeotP6Qs",
        },
        {
          name: "X",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out my decentralized link page 👉 ${this.currentURL}

Own your content, control your presence. No intermediaries, just pure web3 freedom.

Powered by @metalinks_ar & @ar_io_network`)}`,
          color: "#000000",
          logo: "FlxhHjT8Hig4pvh8yFK6gg6PgEb9orNBMA5zGpHJx6Y",
        },
        {
          name: "WhatsApp",
          href: `https://wa.me/?text=${encodeURIComponent(
            `Check out this page! ${this.currentURL}`
          )}`,
          color: "#25D366",
          logo: "A_gJXmJAtBNa5WMaNZuSN2mfu1tNpEe0GNObygVUuKE",
        },
        {
          name: "Reddit",
          href: `https://reddit.com/submit?url=${encodeURIComponent(
            this.currentURL
          )}&title=Check out this page!`,
          color: "#FF4500",
          logo: "d_4_nfNJCU6OMMMOqtXJTj7-wNhOt0Vp8q_yvsZKnnk",
        },
        {
          name: "Telegram",
          href: `https://t.me/share/url?url=${encodeURIComponent(
            this.currentURL
          )}&text=Check out this page!`,
          color: "#0088CC",
          logo: "B-j3PSqKE6fjbHZXXnVT3viwr9TuyV5jFgvZRvKkjw0",
        },
        {
          name: "Email",
          href: `mailto:?subject=${encodeURIComponent(
            "Check out this page!"
          )}&body=${encodeURIComponent(
            `I found this page interesting and thought you might like it: ${this.currentURL}`
          )}`,
          color: "#D14836",
          logo: "srFV9JgSe_WsAVaThnQ06ZE77R8m1dQ-aVwsgW8syrk",
        },
      ]),
      this.init();
  }
  init() {
    this.createModal(), this.attachEventListeners();
  }
  createModal() {
    (this.modal.className =
      "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 hidden"),
      (this.modal.innerHTML = `
      <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md m-4">
        <button id="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer float-right">&times;</button>
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Share this page</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          ${this.shareLinks
            .map(
              (e) => `
            <a href="${e.href}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-3 rounded-full transition duration-300 ease-in-out">
             <img src="https://arweave.net/${e.logo}" width="20px" height="20px" class="text-[${e.color}]" /> 
            <span class="text-sm text-[${e.color}]">${e.name}</span>
            </a>
          `
            )
            .join("")}
        </div>
        <button id="copyLink" class="w-full flex items-center justify-center gap-x-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
          <img src="https://arweave.net/Y3YQpZK9WPgWT8kqC35X8ZDK7ikVq4cpPUmPA95gMuA" width="20px" height="20px" /> Copy Link
        </button>
      </div>
    `),
      document.body.appendChild(this.modal);
  }
  attachEventListeners() {
    var e, r;
    this.button.addEventListener("click", () => this.openModal()),
      (e = this.modal.querySelector("#closeModal")) == null ||
        e.addEventListener("click", () => this.closeModal()),
      this.modal.addEventListener("click", (s) => {
        s.target === this.modal && this.closeModal();
      }),
      (r = this.modal.querySelector("#copyLink")) == null ||
        r.addEventListener("click", () => this.copyLink());
  }
  openModal() {
    this.modal.classList.remove("hidden");
  }
  closeModal() {
    this.modal.classList.add("hidden");
  }
  copyLink() {
    navigator.clipboard
      .writeText(this.currentURL)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((e) => {
        console.error("Error copying link:", e);
      });
  }
}
/**
 * uuidv7: A JavaScript implementation of UUID version 7
 *
 * Copyright 2021-2024 LiosK
 *
 * @license Apache-2.0
 * @packageDocumentation
 */ const gi = "0123456789abcdef";
class fr {
  constructor(e) {
    this.bytes = e;
  }
  static ofInner(e) {
    if (e.length !== 16) throw new TypeError("not 128-bit length");
    return new fr(e);
  }
  static fromFieldsV7(e, r, s, a) {
    if (
      !Number.isInteger(e) ||
      !Number.isInteger(r) ||
      !Number.isInteger(s) ||
      !Number.isInteger(a) ||
      e < 0 ||
      r < 0 ||
      s < 0 ||
      a < 0 ||
      e > 0xffffffffffff ||
      r > 4095 ||
      s > 1073741823 ||
      a > 4294967295
    )
      throw new RangeError("invalid field value");
    const c = new Uint8Array(16);
    return (
      (c[0] = e / 2 ** 40),
      (c[1] = e / 2 ** 32),
      (c[2] = e / 2 ** 24),
      (c[3] = e / 2 ** 16),
      (c[4] = e / 2 ** 8),
      (c[5] = e),
      (c[6] = 112 | (r >>> 8)),
      (c[7] = r),
      (c[8] = 128 | (s >>> 24)),
      (c[9] = s >>> 16),
      (c[10] = s >>> 8),
      (c[11] = s),
      (c[12] = a >>> 24),
      (c[13] = a >>> 16),
      (c[14] = a >>> 8),
      (c[15] = a),
      new fr(c)
    );
  }
  static parse(e) {
    var r, s, a, c;
    let l;
    switch (e.length) {
      case 32:
        l =
          (r = /^[0-9a-f]{32}$/i.exec(e)) === null || r === void 0
            ? void 0
            : r[0];
        break;
      case 36:
        l =
          (s =
            /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(
              e
            )) === null || s === void 0
            ? void 0
            : s.slice(1, 6).join("");
        break;
      case 38:
        l =
          (a =
            /^\{([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})\}$/i.exec(
              e
            )) === null || a === void 0
            ? void 0
            : a.slice(1, 6).join("");
        break;
      case 45:
        l =
          (c =
            /^urn:uuid:([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(
              e
            )) === null || c === void 0
            ? void 0
            : c.slice(1, 6).join("");
        break;
    }
    if (l) {
      const u = new Uint8Array(16);
      for (let f = 0; f < 16; f += 4) {
        const p = parseInt(l.substring(2 * f, 2 * f + 8), 16);
        (u[f + 0] = p >>> 24),
          (u[f + 1] = p >>> 16),
          (u[f + 2] = p >>> 8),
          (u[f + 3] = p);
      }
      return new fr(u);
    } else throw new SyntaxError("could not parse UUID string");
  }
  toString() {
    let e = "";
    for (let r = 0; r < this.bytes.length; r++)
      (e += gi.charAt(this.bytes[r] >>> 4)),
        (e += gi.charAt(this.bytes[r] & 15)),
        (r === 3 || r === 5 || r === 7 || r === 9) && (e += "-");
    return e;
  }
  toHex() {
    let e = "";
    for (let r = 0; r < this.bytes.length; r++)
      (e += gi.charAt(this.bytes[r] >>> 4)),
        (e += gi.charAt(this.bytes[r] & 15));
    return e;
  }
  toJSON() {
    return this.toString();
  }
  getVariant() {
    const e = this.bytes[8] >>> 4;
    if (e < 0) throw new Error("unreachable");
    if (e <= 7) return this.bytes.every((r) => r === 0) ? "NIL" : "VAR_0";
    if (e <= 11) return "VAR_10";
    if (e <= 13) return "VAR_110";
    if (e <= 15)
      return this.bytes.every((r) => r === 255) ? "MAX" : "VAR_RESERVED";
    throw new Error("unreachable");
  }
  getVersion() {
    return this.getVariant() === "VAR_10" ? this.bytes[6] >>> 4 : void 0;
  }
  clone() {
    return new fr(this.bytes.slice(0));
  }
  equals(e) {
    return this.compareTo(e) === 0;
  }
  compareTo(e) {
    for (let r = 0; r < 16; r++) {
      const s = this.bytes[r] - e.bytes[r];
      if (s !== 0) return Math.sign(s);
    }
    return 0;
  }
}
class Tc {
  constructor(e) {
    (this.timestamp = 0), (this.counter = 0), (this.random = e ?? xc());
  }
  generate() {
    return this.generateOrResetCore(Date.now(), 1e4);
  }
  generateOrAbort() {
    return this.generateOrAbortCore(Date.now(), 1e4);
  }
  generateOrResetCore(e, r) {
    let s = this.generateOrAbortCore(e, r);
    return (
      s === void 0 &&
        ((this.timestamp = 0), (s = this.generateOrAbortCore(e, r))),
      s
    );
  }
  generateOrAbortCore(e, r) {
    if (!Number.isInteger(e) || e < 1 || e > 0xffffffffffff)
      throw new RangeError("`unixTsMs` must be a 48-bit positive integer");
    if (r < 0 || r > 0xffffffffffff)
      throw new RangeError("`rollbackAllowance` out of reasonable range");
    if (e > this.timestamp) (this.timestamp = e), this.resetCounter();
    else if (e + r >= this.timestamp)
      this.counter++,
        this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
    else return;
    return fr.fromFieldsV7(
      this.timestamp,
      Math.trunc(this.counter / 2 ** 30),
      this.counter & (2 ** 30 - 1),
      this.random.nextUint32()
    );
  }
  resetCounter() {
    this.counter =
      this.random.nextUint32() * 1024 + (this.random.nextUint32() & 1023);
  }
  generateV4() {
    const e = new Uint8Array(
      Uint32Array.of(
        this.random.nextUint32(),
        this.random.nextUint32(),
        this.random.nextUint32(),
        this.random.nextUint32()
      ).buffer
    );
    return (
      (e[6] = 64 | (e[6] >>> 4)), (e[8] = 128 | (e[8] >>> 2)), fr.ofInner(e)
    );
  }
}
const xc = () => {
  if (typeof crypto < "u" && typeof crypto.getRandomValues < "u")
    return new kc();
  if (typeof UUIDV7_DENY_WEAK_RNG < "u" && UUIDV7_DENY_WEAK_RNG)
    throw new Error("no cryptographically strong RNG available");
  return {
    nextUint32: () =>
      Math.trunc(Math.random() * 65536) * 65536 +
      Math.trunc(Math.random() * 65536),
  };
};
class kc {
  constructor() {
    (this.buffer = new Uint32Array(8)), (this.cursor = 65535);
  }
  nextUint32() {
    return (
      this.cursor >= this.buffer.length &&
        (crypto.getRandomValues(this.buffer), (this.cursor = 0)),
      this.buffer[this.cursor++]
    );
  }
}
let Ua;
const Bc = () => Oc().toString(),
  Oc = () => (Ua || (Ua = new Tc())).generate();
var Rc = {},
  Ic = Object.create,
  Qs = Object.defineProperty,
  Cc = Object.getOwnPropertyDescriptor,
  po = Object.getOwnPropertyNames,
  Lc = Object.getPrototypeOf,
  Uc = Object.prototype.hasOwnProperty,
  He = (t, e) =>
    function () {
      return e || (0, t[po(t)[0]])((e = { exports: {} }).exports, e), e.exports;
    },
  go = (t, e) => {
    for (var r in e) Qs(t, r, { get: e[r], enumerable: !0 });
  },
  Mc = (t, e, r, s) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let a of po(e))
        !Uc.call(t, a) &&
          a !== r &&
          Qs(t, a, {
            get: () => e[a],
            enumerable: !(s = Cc(e, a)) || s.enumerable,
          });
    return t;
  },
  Xs = (t, e, r) => (
    (r = t != null ? Ic(Lc(t)) : {}),
    Mc(Qs(r, "default", { value: t, enumerable: !0 }), t)
  ),
  Nc = He({
    "node_modules/obliterator/iterator.js"(t, e) {
      function r(s) {
        if (typeof s != "function")
          throw new Error("obliterator/iterator: expecting a function!");
        this.next = s;
      }
      typeof Symbol < "u" &&
        (r.prototype[Symbol.iterator] = function () {
          return this;
        }),
        (r.of = function () {
          var s = arguments,
            a = s.length,
            c = 0;
          return new r(function () {
            return c >= a ? { done: !0 } : { done: !1, value: s[c++] };
          });
        }),
        (r.empty = function () {
          var s = new r(function () {
            return { done: !0 };
          });
          return s;
        }),
        (r.fromSequence = function (s) {
          var a = 0,
            c = s.length;
          return new r(function () {
            return a >= c ? { done: !0 } : { done: !1, value: s[a++] };
          });
        }),
        (r.is = function (s) {
          return s instanceof r
            ? !0
            : typeof s == "object" && s !== null && typeof s.next == "function";
        }),
        (e.exports = r);
    },
  }),
  Pc = He({
    "node_modules/obliterator/support.js"(t) {
      (t.ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer < "u"),
        (t.SYMBOL_SUPPORT = typeof Symbol < "u");
    },
  }),
  Js = He({
    "node_modules/obliterator/foreach.js"(t, e) {
      var r = Pc(),
        s = r.ARRAY_BUFFER_SUPPORT,
        a = r.SYMBOL_SUPPORT;
      e.exports = function (l, u) {
        var f, p, b, v, _;
        if (!l) throw new Error("obliterator/forEach: invalid iterable.");
        if (typeof u != "function")
          throw new Error("obliterator/forEach: expecting a callback.");
        if (
          Array.isArray(l) ||
          (s && ArrayBuffer.isView(l)) ||
          typeof l == "string" ||
          l.toString() === "[object Arguments]"
        ) {
          for (b = 0, v = l.length; b < v; b++) u(l[b], b);
          return;
        }
        if (typeof l.forEach == "function") {
          l.forEach(u);
          return;
        }
        if (
          (a &&
            Symbol.iterator in l &&
            typeof l.next != "function" &&
            (l = l[Symbol.iterator]()),
          typeof l.next == "function")
        ) {
          for (f = l, b = 0; (_ = f.next()), _.done !== !0; )
            u(_.value, b), b++;
          return;
        }
        for (p in l) l.hasOwnProperty(p) && u(l[p], p);
      };
    },
  }),
  ea = He({
    "node_modules/mnemonist/utils/typed-arrays.js"(t) {
      var e = Math.pow(2, 8) - 1,
        r = Math.pow(2, 16) - 1,
        s = Math.pow(2, 32) - 1,
        a = Math.pow(2, 7) - 1,
        c = Math.pow(2, 15) - 1,
        l = Math.pow(2, 31) - 1;
      (t.getPointerArray = function (f) {
        var p = f - 1;
        if (p <= e) return Uint8Array;
        if (p <= r) return Uint16Array;
        if (p <= s) return Uint32Array;
        throw new Error(
          "mnemonist: Pointer Array of size > 4294967295 is not supported."
        );
      }),
        (t.getSignedPointerArray = function (f) {
          var p = f - 1;
          return p <= a
            ? Int8Array
            : p <= c
            ? Int16Array
            : p <= l
            ? Int32Array
            : Float64Array;
        }),
        (t.getNumberType = function (f) {
          return f === (f | 0)
            ? Math.sign(f) === -1
              ? f <= 127 && f >= -128
                ? Int8Array
                : f <= 32767 && f >= -32768
                ? Int16Array
                : Int32Array
              : f <= 255
              ? Uint8Array
              : f <= 65535
              ? Uint16Array
              : Uint32Array
            : Float64Array;
        });
      var u = {
        Uint8Array: 1,
        Int8Array: 2,
        Uint16Array: 3,
        Int16Array: 4,
        Uint32Array: 5,
        Int32Array: 6,
        Float32Array: 7,
        Float64Array: 8,
      };
      (t.getMinimalRepresentation = function (f, p) {
        var b = null,
          v = 0,
          _,
          E,
          w,
          A,
          S;
        for (A = 0, S = f.length; A < S; A++)
          (w = p ? p(f[A]) : f[A]),
            (E = t.getNumberType(w)),
            (_ = u[E.name]),
            _ > v && ((v = _), (b = E));
        return b;
      }),
        (t.isTypedArray = function (f) {
          return typeof ArrayBuffer < "u" && ArrayBuffer.isView(f);
        }),
        (t.concat = function () {
          var f = 0,
            p,
            b,
            v;
          for (p = 0, v = arguments.length; p < v; p++)
            f += arguments[p].length;
          var _ = new arguments[0].constructor(f);
          for (p = 0, b = 0; p < v; p++)
            _.set(arguments[p], b), (b += arguments[p].length);
          return _;
        }),
        (t.indices = function (f) {
          for (var p = t.getPointerArray(f), b = new p(f), v = 0; v < f; v++)
            b[v] = v;
          return b;
        });
    },
  }),
  mo = He({
    "node_modules/mnemonist/utils/iterables.js"(t) {
      var e = Js(),
        r = ea();
      function s(u) {
        return Array.isArray(u) || r.isTypedArray(u);
      }
      function a(u) {
        if (typeof u.length == "number") return u.length;
        if (typeof u.size == "number") return u.size;
      }
      function c(u) {
        var f = a(u),
          p = typeof f == "number" ? new Array(f) : [],
          b = 0;
        return (
          e(u, function (v) {
            p[b++] = v;
          }),
          p
        );
      }
      function l(u) {
        var f = a(u),
          p = typeof f == "number" ? r.getPointerArray(f) : Array,
          b = typeof f == "number" ? new Array(f) : [],
          v = typeof f == "number" ? new p(f) : [],
          _ = 0;
        return (
          e(u, function (E) {
            (b[_] = E), (v[_] = _++);
          }),
          [b, v]
        );
      }
      (t.isArrayLike = s),
        (t.guessLength = a),
        (t.toArray = c),
        (t.toArrayWithIndices = l);
    },
  }),
  jc = He({
    "node_modules/mnemonist/lru-cache.js"(t, e) {
      var r = Nc(),
        s = Js(),
        a = ea(),
        c = mo();
      function l(u, f, p) {
        if (
          (arguments.length < 2 && ((p = u), (u = null), (f = null)),
          (this.capacity = p),
          typeof this.capacity != "number" || this.capacity <= 0)
        )
          throw new Error(
            "mnemonist/lru-cache: capacity should be positive number."
          );
        if (
          !isFinite(this.capacity) ||
          Math.floor(this.capacity) !== this.capacity
        )
          throw new Error(
            "mnemonist/lru-cache: capacity should be a finite positive integer."
          );
        var b = a.getPointerArray(p);
        (this.forward = new b(p)),
          (this.backward = new b(p)),
          (this.K = typeof u == "function" ? new u(p) : new Array(p)),
          (this.V = typeof f == "function" ? new f(p) : new Array(p)),
          (this.size = 0),
          (this.head = 0),
          (this.tail = 0),
          (this.items = {});
      }
      (l.prototype.clear = function () {
        (this.size = 0), (this.head = 0), (this.tail = 0), (this.items = {});
      }),
        (l.prototype.splayOnTop = function (u) {
          var f = this.head;
          if (this.head === u) return this;
          var p = this.backward[u],
            b = this.forward[u];
          return (
            this.tail === u ? (this.tail = p) : (this.backward[b] = p),
            (this.forward[p] = b),
            (this.backward[f] = u),
            (this.head = u),
            (this.forward[u] = f),
            this
          );
        }),
        (l.prototype.set = function (u, f) {
          var p = this.items[u];
          if (typeof p < "u") {
            this.splayOnTop(p), (this.V[p] = f);
            return;
          }
          this.size < this.capacity
            ? (p = this.size++)
            : ((p = this.tail),
              (this.tail = this.backward[p]),
              delete this.items[this.K[p]]),
            (this.items[u] = p),
            (this.K[p] = u),
            (this.V[p] = f),
            (this.forward[p] = this.head),
            (this.backward[this.head] = p),
            (this.head = p);
        }),
        (l.prototype.setpop = function (u, f) {
          var p = null,
            b = null,
            v = this.items[u];
          return typeof v < "u"
            ? (this.splayOnTop(v),
              (p = this.V[v]),
              (this.V[v] = f),
              { evicted: !1, key: u, value: p })
            : (this.size < this.capacity
                ? (v = this.size++)
                : ((v = this.tail),
                  (this.tail = this.backward[v]),
                  (p = this.V[v]),
                  (b = this.K[v]),
                  delete this.items[b]),
              (this.items[u] = v),
              (this.K[v] = u),
              (this.V[v] = f),
              (this.forward[v] = this.head),
              (this.backward[this.head] = v),
              (this.head = v),
              b ? { evicted: !0, key: b, value: p } : null);
        }),
        (l.prototype.has = function (u) {
          return u in this.items;
        }),
        (l.prototype.get = function (u) {
          var f = this.items[u];
          if (!(typeof f > "u")) return this.splayOnTop(f), this.V[f];
        }),
        (l.prototype.peek = function (u) {
          var f = this.items[u];
          if (!(typeof f > "u")) return this.V[f];
        }),
        (l.prototype.forEach = function (u, f) {
          f = arguments.length > 1 ? f : this;
          for (
            var p = 0,
              b = this.size,
              v = this.head,
              _ = this.K,
              E = this.V,
              w = this.forward;
            p < b;

          )
            u.call(f, E[v], _[v], this), (v = w[v]), p++;
        }),
        (l.prototype.keys = function () {
          var u = 0,
            f = this.size,
            p = this.head,
            b = this.K,
            v = this.forward;
          return new r(function () {
            if (u >= f) return { done: !0 };
            var _ = b[p];
            return u++, u < f && (p = v[p]), { done: !1, value: _ };
          });
        }),
        (l.prototype.values = function () {
          var u = 0,
            f = this.size,
            p = this.head,
            b = this.V,
            v = this.forward;
          return new r(function () {
            if (u >= f) return { done: !0 };
            var _ = b[p];
            return u++, u < f && (p = v[p]), { done: !1, value: _ };
          });
        }),
        (l.prototype.entries = function () {
          var u = 0,
            f = this.size,
            p = this.head,
            b = this.K,
            v = this.V,
            _ = this.forward;
          return new r(function () {
            if (u >= f) return { done: !0 };
            var E = b[p],
              w = v[p];
            return u++, u < f && (p = _[p]), { done: !1, value: [E, w] };
          });
        }),
        typeof Symbol < "u" &&
          (l.prototype[Symbol.iterator] = l.prototype.entries),
        (l.prototype.inspect = function () {
          for (
            var u = new Map(), f = this.entries(), p;
            (p = f.next()), !p.done;

          )
            u.set(p.value[0], p.value[1]);
          return (
            Object.defineProperty(u, "constructor", {
              value: l,
              enumerable: !1,
            }),
            u
          );
        }),
        typeof Symbol < "u" &&
          (l.prototype[Symbol.for("nodejs.util.inspect.custom")] =
            l.prototype.inspect),
        (l.from = function (u, f, p, b) {
          if (arguments.length < 2) {
            if (((b = c.guessLength(u)), typeof b != "number"))
              throw new Error(
                "mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument."
              );
          } else arguments.length === 2 && ((b = f), (f = null), (p = null));
          var v = new l(f, p, b);
          return (
            s(u, function (_, E) {
              v.set(E, _);
            }),
            v
          );
        }),
        (e.exports = l);
    },
  }),
  Fc = He({
    "node_modules/mnemonist/lru-map.js"(t, e) {
      var r = jc(),
        s = Js(),
        a = ea(),
        c = mo();
      function l(u, f, p) {
        if (
          (arguments.length < 2 && ((p = u), (u = null), (f = null)),
          (this.capacity = p),
          typeof this.capacity != "number" || this.capacity <= 0)
        )
          throw new Error(
            "mnemonist/lru-map: capacity should be positive number."
          );
        if (
          !isFinite(this.capacity) ||
          Math.floor(this.capacity) !== this.capacity
        )
          throw new Error(
            "mnemonist/lru-map: capacity should be a finite positive integer."
          );
        var b = a.getPointerArray(p);
        (this.forward = new b(p)),
          (this.backward = new b(p)),
          (this.K = typeof u == "function" ? new u(p) : new Array(p)),
          (this.V = typeof f == "function" ? new f(p) : new Array(p)),
          (this.size = 0),
          (this.head = 0),
          (this.tail = 0),
          (this.items = new Map());
      }
      (l.prototype.clear = function () {
        (this.size = 0), (this.head = 0), (this.tail = 0), this.items.clear();
      }),
        (l.prototype.set = function (u, f) {
          var p = this.items.get(u);
          if (typeof p < "u") {
            this.splayOnTop(p), (this.V[p] = f);
            return;
          }
          this.size < this.capacity
            ? (p = this.size++)
            : ((p = this.tail),
              (this.tail = this.backward[p]),
              this.items.delete(this.K[p])),
            this.items.set(u, p),
            (this.K[p] = u),
            (this.V[p] = f),
            (this.forward[p] = this.head),
            (this.backward[this.head] = p),
            (this.head = p);
        }),
        (l.prototype.setpop = function (u, f) {
          var p = null,
            b = null,
            v = this.items.get(u);
          return typeof v < "u"
            ? (this.splayOnTop(v),
              (p = this.V[v]),
              (this.V[v] = f),
              { evicted: !1, key: u, value: p })
            : (this.size < this.capacity
                ? (v = this.size++)
                : ((v = this.tail),
                  (this.tail = this.backward[v]),
                  (p = this.V[v]),
                  (b = this.K[v]),
                  this.items.delete(b)),
              this.items.set(u, v),
              (this.K[v] = u),
              (this.V[v] = f),
              (this.forward[v] = this.head),
              (this.backward[this.head] = v),
              (this.head = v),
              b ? { evicted: !0, key: b, value: p } : null);
        }),
        (l.prototype.has = function (u) {
          return this.items.has(u);
        }),
        (l.prototype.get = function (u) {
          var f = this.items.get(u);
          if (!(typeof f > "u")) return this.splayOnTop(f), this.V[f];
        }),
        (l.prototype.peek = function (u) {
          var f = this.items.get(u);
          if (!(typeof f > "u")) return this.V[f];
        }),
        (l.prototype.splayOnTop = r.prototype.splayOnTop),
        (l.prototype.forEach = r.prototype.forEach),
        (l.prototype.keys = r.prototype.keys),
        (l.prototype.values = r.prototype.values),
        (l.prototype.entries = r.prototype.entries),
        typeof Symbol < "u" &&
          (l.prototype[Symbol.iterator] = l.prototype.entries),
        (l.prototype.inspect = r.prototype.inspect),
        (l.from = function (u, f, p, b) {
          if (arguments.length < 2) {
            if (((b = c.guessLength(u)), typeof b != "number"))
              throw new Error(
                "mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument."
              );
          } else arguments.length === 2 && ((b = f), (f = null), (p = null));
          var v = new l(f, p, b);
          return (
            s(u, function (_, E) {
              v.set(E, _);
            }),
            v
          );
        }),
        (e.exports = l);
    },
  }),
  Zc = He({
    "node_modules/ms/index.js"(t, e) {
      var r = 1e3,
        s = r * 60,
        a = s * 60,
        c = a * 24,
        l = c * 7,
        u = c * 365.25;
      e.exports = function (_, E) {
        E = E || {};
        var w = typeof _;
        if (w === "string" && _.length > 0) return f(_);
        if (w === "number" && isFinite(_)) return E.long ? b(_) : p(_);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(_)
        );
      };
      function f(_) {
        if (((_ = String(_)), !(_.length > 100))) {
          var E =
            /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
              _
            );
          if (E) {
            var w = parseFloat(E[1]),
              A = (E[2] || "ms").toLowerCase();
            switch (A) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return w * u;
              case "weeks":
              case "week":
              case "w":
                return w * l;
              case "days":
              case "day":
              case "d":
                return w * c;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return w * a;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return w * s;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return w * r;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return w;
              default:
                return;
            }
          }
        }
      }
      function p(_) {
        var E = Math.abs(_);
        return E >= c
          ? Math.round(_ / c) + "d"
          : E >= a
          ? Math.round(_ / a) + "h"
          : E >= s
          ? Math.round(_ / s) + "m"
          : E >= r
          ? Math.round(_ / r) + "s"
          : _ + "ms";
      }
      function b(_) {
        var E = Math.abs(_);
        return E >= c
          ? v(_, E, c, "day")
          : E >= a
          ? v(_, E, a, "hour")
          : E >= s
          ? v(_, E, s, "minute")
          : E >= r
          ? v(_, E, r, "second")
          : _ + " ms";
      }
      function v(_, E, w, A) {
        var S = E >= w * 1.5;
        return Math.round(_ / w) + " " + A + (S ? "s" : "");
      }
    },
  }),
  $c = He({
    "node_modules/debug/src/common.js"(t, e) {
      function r(s) {
        (c.debug = c),
          (c.default = c),
          (c.coerce = v),
          (c.disable = f),
          (c.enable = u),
          (c.enabled = p),
          (c.humanize = Zc()),
          (c.destroy = _),
          Object.keys(s).forEach((E) => {
            c[E] = s[E];
          }),
          (c.names = []),
          (c.skips = []),
          (c.formatters = {});
        function a(E) {
          let w = 0;
          for (let A = 0; A < E.length; A++)
            (w = (w << 5) - w + E.charCodeAt(A)), (w |= 0);
          return c.colors[Math.abs(w) % c.colors.length];
        }
        c.selectColor = a;
        function c(E) {
          let w,
            A = null,
            S,
            x;
          function C(...B) {
            if (!C.enabled) return;
            const L = C,
              z = Number(new Date()),
              V = z - (w || z);
            (L.diff = V),
              (L.prev = w),
              (L.curr = z),
              (w = z),
              (B[0] = c.coerce(B[0])),
              typeof B[0] != "string" && B.unshift("%O");
            let _e = 0;
            (B[0] = B[0].replace(/%([a-zA-Z%])/g, (Ye, lr) => {
              if (Ye === "%%") return "%";
              _e++;
              const Pt = c.formatters[lr];
              if (typeof Pt == "function") {
                const hr = B[_e];
                (Ye = Pt.call(L, hr)), B.splice(_e, 1), _e--;
              }
              return Ye;
            })),
              c.formatArgs.call(L, B),
              (L.log || c.log).apply(L, B);
          }
          return (
            (C.namespace = E),
            (C.useColors = c.useColors()),
            (C.color = c.selectColor(E)),
            (C.extend = l),
            (C.destroy = c.destroy),
            Object.defineProperty(C, "enabled", {
              enumerable: !0,
              configurable: !1,
              get: () =>
                A !== null
                  ? A
                  : (S !== c.namespaces &&
                      ((S = c.namespaces), (x = c.enabled(E))),
                    x),
              set: (B) => {
                A = B;
              },
            }),
            typeof c.init == "function" && c.init(C),
            C
          );
        }
        function l(E, w) {
          const A = c(this.namespace + (typeof w > "u" ? ":" : w) + E);
          return (A.log = this.log), A;
        }
        function u(E) {
          c.save(E), (c.namespaces = E), (c.names = []), (c.skips = []);
          let w;
          const A = (typeof E == "string" ? E : "").split(/[\s,]+/),
            S = A.length;
          for (w = 0; w < S; w++)
            A[w] &&
              ((E = A[w].replace(/\*/g, ".*?")),
              E[0] === "-"
                ? c.skips.push(new RegExp("^" + E.slice(1) + "$"))
                : c.names.push(new RegExp("^" + E + "$")));
        }
        function f() {
          const E = [
            ...c.names.map(b),
            ...c.skips.map(b).map((w) => "-" + w),
          ].join(",");
          return c.enable(""), E;
        }
        function p(E) {
          if (E[E.length - 1] === "*") return !0;
          let w, A;
          for (w = 0, A = c.skips.length; w < A; w++)
            if (c.skips[w].test(E)) return !1;
          for (w = 0, A = c.names.length; w < A; w++)
            if (c.names[w].test(E)) return !0;
          return !1;
        }
        function b(E) {
          return E.toString()
            .substring(2, E.toString().length - 2)
            .replace(/\.\*\?$/, "*");
        }
        function v(E) {
          return E instanceof Error ? E.stack || E.message : E;
        }
        function _() {
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          );
        }
        return c.enable(c.load()), c;
      }
      e.exports = r;
    },
  }),
  Dc = He({
    "node_modules/debug/src/browser.js"(t, e) {
      (t.formatArgs = s),
        (t.save = a),
        (t.load = c),
        (t.useColors = r),
        (t.storage = l()),
        (t.destroy = (() => {
          let f = !1;
          return () => {
            f ||
              ((f = !0),
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              ));
          };
        })()),
        (t.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]);
      function r() {
        if (
          typeof window < "u" &&
          window.process &&
          (window.process.type === "renderer" || window.process.__nwjs)
        )
          return !0;
        if (
          typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        )
          return !1;
        let f;
        return (
          (typeof document < "u" &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          (typeof window < "u" &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            (f = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
            parseInt(f[1], 10) >= 31) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
      }
      function s(f) {
        if (
          ((f[0] =
            (this.useColors ? "%c" : "") +
            this.namespace +
            (this.useColors ? " %c" : " ") +
            f[0] +
            (this.useColors ? "%c " : " ") +
            "+" +
            e.exports.humanize(this.diff)),
          !this.useColors)
        )
          return;
        const p = "color: " + this.color;
        f.splice(1, 0, p, "color: inherit");
        let b = 0,
          v = 0;
        f[0].replace(/%[a-zA-Z%]/g, (_) => {
          _ !== "%%" && (b++, _ === "%c" && (v = b));
        }),
          f.splice(v, 0, p);
      }
      t.log = console.debug || console.log || (() => {});
      function a(f) {
        try {
          f ? t.storage.setItem("debug", f) : t.storage.removeItem("debug");
        } catch {}
      }
      function c() {
        let f;
        try {
          f = t.storage.getItem("debug");
        } catch {}
        return (
          !f && typeof process < "u" && "env" in process && (f = Rc.DEBUG), f
        );
      }
      function l() {
        try {
          return localStorage;
        } catch {}
      }
      e.exports = $c()(t);
      var { formatters: u } = e.exports;
      u.j = function (f) {
        try {
          return JSON.stringify(f);
        } catch (p) {
          return "[UnexpectedJSONParseError]: " + p.message;
        }
      };
    },
  }),
  zc = He({
    "node_modules/base64-js/index.js"(t) {
      (t.byteLength = f), (t.toByteArray = b), (t.fromByteArray = E);
      var e = [],
        r = [],
        s = typeof Uint8Array < "u" ? Uint8Array : Array,
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (c = 0, l = a.length; c < l; ++c)
        (e[c] = a[c]), (r[a.charCodeAt(c)] = c);
      var c, l;
      (r[45] = 62), (r[95] = 63);
      function u(w) {
        var A = w.length;
        if (A % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var S = w.indexOf("=");
        S === -1 && (S = A);
        var x = S === A ? 0 : 4 - (S % 4);
        return [S, x];
      }
      function f(w) {
        var A = u(w),
          S = A[0],
          x = A[1];
        return ((S + x) * 3) / 4 - x;
      }
      function p(w, A, S) {
        return ((A + S) * 3) / 4 - S;
      }
      function b(w) {
        var A,
          S = u(w),
          x = S[0],
          C = S[1],
          B = new s(p(w, x, C)),
          L = 0,
          z = C > 0 ? x - 4 : x,
          V;
        for (V = 0; V < z; V += 4)
          (A =
            (r[w.charCodeAt(V)] << 18) |
            (r[w.charCodeAt(V + 1)] << 12) |
            (r[w.charCodeAt(V + 2)] << 6) |
            r[w.charCodeAt(V + 3)]),
            (B[L++] = (A >> 16) & 255),
            (B[L++] = (A >> 8) & 255),
            (B[L++] = A & 255);
        return (
          C === 2 &&
            ((A = (r[w.charCodeAt(V)] << 2) | (r[w.charCodeAt(V + 1)] >> 4)),
            (B[L++] = A & 255)),
          C === 1 &&
            ((A =
              (r[w.charCodeAt(V)] << 10) |
              (r[w.charCodeAt(V + 1)] << 4) |
              (r[w.charCodeAt(V + 2)] >> 2)),
            (B[L++] = (A >> 8) & 255),
            (B[L++] = A & 255)),
          B
        );
      }
      function v(w) {
        return (
          e[(w >> 18) & 63] + e[(w >> 12) & 63] + e[(w >> 6) & 63] + e[w & 63]
        );
      }
      function _(w, A, S) {
        for (var x, C = [], B = A; B < S; B += 3)
          (x =
            ((w[B] << 16) & 16711680) +
            ((w[B + 1] << 8) & 65280) +
            (w[B + 2] & 255)),
            C.push(v(x));
        return C.join("");
      }
      function E(w) {
        for (
          var A, S = w.length, x = S % 3, C = [], B = 16383, L = 0, z = S - x;
          L < z;
          L += B
        )
          C.push(_(w, L, L + B > z ? z : L + B));
        return (
          x === 1
            ? ((A = w[S - 1]), C.push(e[A >> 2] + e[(A << 4) & 63] + "=="))
            : x === 2 &&
              ((A = (w[S - 2] << 8) + w[S - 1]),
              C.push(e[A >> 10] + e[(A >> 4) & 63] + e[(A << 2) & 63] + "=")),
          C.join("")
        );
      }
    },
  }),
  Vc = He({
    "node_modules/ieee754/index.js"(t) {
      (t.read = function (e, r, s, a, c) {
        var l,
          u,
          f = c * 8 - a - 1,
          p = (1 << f) - 1,
          b = p >> 1,
          v = -7,
          _ = s ? c - 1 : 0,
          E = s ? -1 : 1,
          w = e[r + _];
        for (
          _ += E, l = w & ((1 << -v) - 1), w >>= -v, v += f;
          v > 0;
          l = l * 256 + e[r + _], _ += E, v -= 8
        );
        for (
          u = l & ((1 << -v) - 1), l >>= -v, v += a;
          v > 0;
          u = u * 256 + e[r + _], _ += E, v -= 8
        );
        if (l === 0) l = 1 - b;
        else {
          if (l === p) return u ? NaN : (w ? -1 : 1) * (1 / 0);
          (u = u + Math.pow(2, a)), (l = l - b);
        }
        return (w ? -1 : 1) * u * Math.pow(2, l - a);
      }),
        (t.write = function (e, r, s, a, c, l) {
          var u,
            f,
            p,
            b = l * 8 - c - 1,
            v = (1 << b) - 1,
            _ = v >> 1,
            E = c === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            w = a ? 0 : l - 1,
            A = a ? 1 : -1,
            S = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((f = isNaN(r) ? 1 : 0), (u = v))
                : ((u = Math.floor(Math.log(r) / Math.LN2)),
                  r * (p = Math.pow(2, -u)) < 1 && (u--, (p *= 2)),
                  u + _ >= 1 ? (r += E / p) : (r += E * Math.pow(2, 1 - _)),
                  r * p >= 2 && (u++, (p /= 2)),
                  u + _ >= v
                    ? ((f = 0), (u = v))
                    : u + _ >= 1
                    ? ((f = (r * p - 1) * Math.pow(2, c)), (u = u + _))
                    : ((f = r * Math.pow(2, _ - 1) * Math.pow(2, c)), (u = 0)));
            c >= 8;
            e[s + w] = f & 255, w += A, f /= 256, c -= 8
          );
          for (
            u = (u << c) | f, b += c;
            b > 0;
            e[s + w] = u & 255, w += A, u /= 256, b -= 8
          );
          e[s + w - A] |= S * 128;
        });
    },
  }),
  Wc = He({
    "node_modules/buffer/index.js"(t) {
      var e = zc(),
        r = Vc(),
        s =
          typeof Symbol == "function" && typeof Symbol.for == "function"
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (t.Buffer = u), (t.SlowBuffer = C), (t.INSPECT_MAX_BYTES = 50);
      var a = 2147483647;
      (t.kMaxLength = a),
        (u.TYPED_ARRAY_SUPPORT = c()),
        !u.TYPED_ARRAY_SUPPORT &&
          typeof console < "u" &&
          typeof console.error == "function" &&
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          );
      function c() {
        try {
          const n = new Uint8Array(1),
            i = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(i, Uint8Array.prototype),
            Object.setPrototypeOf(n, i),
            n.foo() === 42
          );
        } catch {
          return !1;
        }
      }
      Object.defineProperty(u.prototype, "parent", {
        enumerable: !0,
        get: function () {
          if (u.isBuffer(this)) return this.buffer;
        },
      }),
        Object.defineProperty(u.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.byteOffset;
          },
        });
      function l(n) {
        if (n > a)
          throw new RangeError(
            'The value "' + n + '" is invalid for option "size"'
          );
        const i = new Uint8Array(n);
        return Object.setPrototypeOf(i, u.prototype), i;
      }
      function u(n, i, o) {
        if (typeof n == "number") {
          if (typeof i == "string")
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return v(n);
        }
        return f(n, i, o);
      }
      u.poolSize = 8192;
      function f(n, i, o) {
        if (typeof n == "string") return _(n, i);
        if (ArrayBuffer.isView(n)) return w(n);
        if (n == null)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof n
          );
        if (
          le(n, ArrayBuffer) ||
          (n && le(n.buffer, ArrayBuffer)) ||
          (typeof SharedArrayBuffer < "u" &&
            (le(n, SharedArrayBuffer) ||
              (n && le(n.buffer, SharedArrayBuffer))))
        )
          return A(n, i, o);
        if (typeof n == "number")
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        const h = n.valueOf && n.valueOf();
        if (h != null && h !== n) return u.from(h, i, o);
        const d = S(n);
        if (d) return d;
        if (
          typeof Symbol < "u" &&
          Symbol.toPrimitive != null &&
          typeof n[Symbol.toPrimitive] == "function"
        )
          return u.from(n[Symbol.toPrimitive]("string"), i, o);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof n
        );
      }
      (u.from = function (n, i, o) {
        return f(n, i, o);
      }),
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array);
      function p(n) {
        if (typeof n != "number")
          throw new TypeError('"size" argument must be of type number');
        if (n < 0)
          throw new RangeError(
            'The value "' + n + '" is invalid for option "size"'
          );
      }
      function b(n, i, o) {
        return (
          p(n),
          n <= 0
            ? l(n)
            : i !== void 0
            ? typeof o == "string"
              ? l(n).fill(i, o)
              : l(n).fill(i)
            : l(n)
        );
      }
      u.alloc = function (n, i, o) {
        return b(n, i, o);
      };
      function v(n) {
        return p(n), l(n < 0 ? 0 : x(n) | 0);
      }
      (u.allocUnsafe = function (n) {
        return v(n);
      }),
        (u.allocUnsafeSlow = function (n) {
          return v(n);
        });
      function _(n, i) {
        if (
          ((typeof i != "string" || i === "") && (i = "utf8"), !u.isEncoding(i))
        )
          throw new TypeError("Unknown encoding: " + i);
        const o = B(n, i) | 0;
        let h = l(o);
        const d = h.write(n, i);
        return d !== o && (h = h.slice(0, d)), h;
      }
      function E(n) {
        const i = n.length < 0 ? 0 : x(n.length) | 0,
          o = l(i);
        for (let h = 0; h < i; h += 1) o[h] = n[h] & 255;
        return o;
      }
      function w(n) {
        if (le(n, Uint8Array)) {
          const i = new Uint8Array(n);
          return A(i.buffer, i.byteOffset, i.byteLength);
        }
        return E(n);
      }
      function A(n, i, o) {
        if (i < 0 || n.byteLength < i)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (n.byteLength < i + (o || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let h;
        return (
          i === void 0 && o === void 0
            ? (h = new Uint8Array(n))
            : o === void 0
            ? (h = new Uint8Array(n, i))
            : (h = new Uint8Array(n, i, o)),
          Object.setPrototypeOf(h, u.prototype),
          h
        );
      }
      function S(n) {
        if (u.isBuffer(n)) {
          const i = x(n.length) | 0,
            o = l(i);
          return o.length === 0 || n.copy(o, 0, 0, i), o;
        }
        if (n.length !== void 0)
          return typeof n.length != "number" || nt(n.length) ? l(0) : E(n);
        if (n.type === "Buffer" && Array.isArray(n.data)) return E(n.data);
      }
      function x(n) {
        if (n >= a)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              a.toString(16) +
              " bytes"
          );
        return n | 0;
      }
      function C(n) {
        return +n != n && (n = 0), u.alloc(+n);
      }
      (u.isBuffer = function (i) {
        return i != null && i._isBuffer === !0 && i !== u.prototype;
      }),
        (u.compare = function (i, o) {
          if (
            (le(i, Uint8Array) && (i = u.from(i, i.offset, i.byteLength)),
            le(o, Uint8Array) && (o = u.from(o, o.offset, o.byteLength)),
            !u.isBuffer(i) || !u.isBuffer(o))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (i === o) return 0;
          let h = i.length,
            d = o.length;
          for (let g = 0, m = Math.min(h, d); g < m; ++g)
            if (i[g] !== o[g]) {
              (h = i[g]), (d = o[g]);
              break;
            }
          return h < d ? -1 : d < h ? 1 : 0;
        }),
        (u.isEncoding = function (i) {
          switch (String(i).toLowerCase()) {
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
              return !0;
            default:
              return !1;
          }
        }),
        (u.concat = function (i, o) {
          if (!Array.isArray(i))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (i.length === 0) return u.alloc(0);
          let h;
          if (o === void 0)
            for (o = 0, h = 0; h < i.length; ++h) o += i[h].length;
          const d = u.allocUnsafe(o);
          let g = 0;
          for (h = 0; h < i.length; ++h) {
            let m = i[h];
            if (le(m, Uint8Array))
              g + m.length > d.length
                ? (u.isBuffer(m) || (m = u.from(m)), m.copy(d, g))
                : Uint8Array.prototype.set.call(d, m, g);
            else if (u.isBuffer(m)) m.copy(d, g);
            else
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            g += m.length;
          }
          return d;
        });
      function B(n, i) {
        if (u.isBuffer(n)) return n.length;
        if (ArrayBuffer.isView(n) || le(n, ArrayBuffer)) return n.byteLength;
        if (typeof n != "string")
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof n
          );
        const o = n.length,
          h = arguments.length > 2 && arguments[2] === !0;
        if (!h && o === 0) return 0;
        let d = !1;
        for (;;)
          switch (i) {
            case "ascii":
            case "latin1":
            case "binary":
              return o;
            case "utf8":
            case "utf-8":
              return rt(n).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return o * 2;
            case "hex":
              return o >>> 1;
            case "base64":
              return qt(n).length;
            default:
              if (d) return h ? -1 : rt(n).length;
              (i = ("" + i).toLowerCase()), (d = !0);
          }
      }
      u.byteLength = B;
      function L(n, i, o) {
        let h = !1;
        if (
          ((i === void 0 || i < 0) && (i = 0),
          i > this.length ||
            ((o === void 0 || o > this.length) && (o = this.length), o <= 0) ||
            ((o >>>= 0), (i >>>= 0), o <= i))
        )
          return "";
        for (n || (n = "utf8"); ; )
          switch (n) {
            case "hex":
              return rn(this, i, o);
            case "utf8":
            case "utf-8":
              return jt(this, i, o);
            case "ascii":
              return en(this, i, o);
            case "latin1":
            case "binary":
              return tn(this, i, o);
            case "base64":
              return Xr(this, i, o);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return nn(this, i, o);
            default:
              if (h) throw new TypeError("Unknown encoding: " + n);
              (n = (n + "").toLowerCase()), (h = !0);
          }
      }
      u.prototype._isBuffer = !0;
      function z(n, i, o) {
        const h = n[i];
        (n[i] = n[o]), (n[o] = h);
      }
      (u.prototype.swap16 = function () {
        const i = this.length;
        if (i % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let o = 0; o < i; o += 2) z(this, o, o + 1);
        return this;
      }),
        (u.prototype.swap32 = function () {
          const i = this.length;
          if (i % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let o = 0; o < i; o += 4)
            z(this, o, o + 3), z(this, o + 1, o + 2);
          return this;
        }),
        (u.prototype.swap64 = function () {
          const i = this.length;
          if (i % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let o = 0; o < i; o += 8)
            z(this, o, o + 7),
              z(this, o + 1, o + 6),
              z(this, o + 2, o + 5),
              z(this, o + 3, o + 4);
          return this;
        }),
        (u.prototype.toString = function () {
          const i = this.length;
          return i === 0
            ? ""
            : arguments.length === 0
            ? jt(this, 0, i)
            : L.apply(this, arguments);
        }),
        (u.prototype.toLocaleString = u.prototype.toString),
        (u.prototype.equals = function (i) {
          if (!u.isBuffer(i)) throw new TypeError("Argument must be a Buffer");
          return this === i ? !0 : u.compare(this, i) === 0;
        }),
        (u.prototype.inspect = function () {
          let i = "";
          const o = t.INSPECT_MAX_BYTES;
          return (
            (i = this.toString("hex", 0, o)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > o && (i += " ... "),
            "<Buffer " + i + ">"
          );
        }),
        s && (u.prototype[s] = u.prototype.inspect),
        (u.prototype.compare = function (i, o, h, d, g) {
          if (
            (le(i, Uint8Array) && (i = u.from(i, i.offset, i.byteLength)),
            !u.isBuffer(i))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof i
            );
          if (
            (o === void 0 && (o = 0),
            h === void 0 && (h = i ? i.length : 0),
            d === void 0 && (d = 0),
            g === void 0 && (g = this.length),
            o < 0 || h > i.length || d < 0 || g > this.length)
          )
            throw new RangeError("out of range index");
          if (d >= g && o >= h) return 0;
          if (d >= g) return -1;
          if (o >= h) return 1;
          if (((o >>>= 0), (h >>>= 0), (d >>>= 0), (g >>>= 0), this === i))
            return 0;
          let m = g - d,
            I = h - o;
          const W = Math.min(m, I),
            M = this.slice(d, g),
            U = i.slice(o, h);
          for (let j = 0; j < W; ++j)
            if (M[j] !== U[j]) {
              (m = M[j]), (I = U[j]);
              break;
            }
          return m < I ? -1 : I < m ? 1 : 0;
        });
      function V(n, i, o, h, d) {
        if (n.length === 0) return -1;
        if (
          (typeof o == "string"
            ? ((h = o), (o = 0))
            : o > 2147483647
            ? (o = 2147483647)
            : o < -2147483648 && (o = -2147483648),
          (o = +o),
          nt(o) && (o = d ? 0 : n.length - 1),
          o < 0 && (o = n.length + o),
          o >= n.length)
        ) {
          if (d) return -1;
          o = n.length - 1;
        } else if (o < 0)
          if (d) o = 0;
          else return -1;
        if ((typeof i == "string" && (i = u.from(i, h)), u.isBuffer(i)))
          return i.length === 0 ? -1 : _e(n, i, o, h, d);
        if (typeof i == "number")
          return (
            (i = i & 255),
            typeof Uint8Array.prototype.indexOf == "function"
              ? d
                ? Uint8Array.prototype.indexOf.call(n, i, o)
                : Uint8Array.prototype.lastIndexOf.call(n, i, o)
              : _e(n, [i], o, h, d)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function _e(n, i, o, h, d) {
        let g = 1,
          m = n.length,
          I = i.length;
        if (
          h !== void 0 &&
          ((h = String(h).toLowerCase()),
          h === "ucs2" || h === "ucs-2" || h === "utf16le" || h === "utf-16le")
        ) {
          if (n.length < 2 || i.length < 2) return -1;
          (g = 2), (m /= 2), (I /= 2), (o /= 2);
        }
        function W(U, j) {
          return g === 1 ? U[j] : U.readUInt16BE(j * g);
        }
        let M;
        if (d) {
          let U = -1;
          for (M = o; M < m; M++)
            if (W(n, M) === W(i, U === -1 ? 0 : M - U)) {
              if ((U === -1 && (U = M), M - U + 1 === I)) return U * g;
            } else U !== -1 && (M -= M - U), (U = -1);
        } else
          for (o + I > m && (o = m - I), M = o; M >= 0; M--) {
            let U = !0;
            for (let j = 0; j < I; j++)
              if (W(n, M + j) !== W(i, j)) {
                U = !1;
                break;
              }
            if (U) return M;
          }
        return -1;
      }
      (u.prototype.includes = function (i, o, h) {
        return this.indexOf(i, o, h) !== -1;
      }),
        (u.prototype.indexOf = function (i, o, h) {
          return V(this, i, o, h, !0);
        }),
        (u.prototype.lastIndexOf = function (i, o, h) {
          return V(this, i, o, h, !1);
        });
      function et(n, i, o, h) {
        o = Number(o) || 0;
        const d = n.length - o;
        h ? ((h = Number(h)), h > d && (h = d)) : (h = d);
        const g = i.length;
        h > g / 2 && (h = g / 2);
        let m;
        for (m = 0; m < h; ++m) {
          const I = parseInt(i.substr(m * 2, 2), 16);
          if (nt(I)) return m;
          n[o + m] = I;
        }
        return m;
      }
      function Ye(n, i, o, h) {
        return Fe(rt(i, n.length - o), n, o, h);
      }
      function lr(n, i, o, h) {
        return Fe(un(i), n, o, h);
      }
      function Pt(n, i, o, h) {
        return Fe(qt(i), n, o, h);
      }
      function hr(n, i, o, h) {
        return Fe(cn(i, n.length - o), n, o, h);
      }
      (u.prototype.write = function (i, o, h, d) {
        if (o === void 0) (d = "utf8"), (h = this.length), (o = 0);
        else if (h === void 0 && typeof o == "string")
          (d = o), (h = this.length), (o = 0);
        else if (isFinite(o))
          (o = o >>> 0),
            isFinite(h)
              ? ((h = h >>> 0), d === void 0 && (d = "utf8"))
              : ((d = h), (h = void 0));
        else
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        const g = this.length - o;
        if (
          ((h === void 0 || h > g) && (h = g),
          (i.length > 0 && (h < 0 || o < 0)) || o > this.length)
        )
          throw new RangeError("Attempt to write outside buffer bounds");
        d || (d = "utf8");
        let m = !1;
        for (;;)
          switch (d) {
            case "hex":
              return et(this, i, o, h);
            case "utf8":
            case "utf-8":
              return Ye(this, i, o, h);
            case "ascii":
            case "latin1":
            case "binary":
              return lr(this, i, o, h);
            case "base64":
              return Pt(this, i, o, h);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return hr(this, i, o, h);
            default:
              if (m) throw new TypeError("Unknown encoding: " + d);
              (d = ("" + d).toLowerCase()), (m = !0);
          }
      }),
        (u.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function Xr(n, i, o) {
        return i === 0 && o === n.length
          ? e.fromByteArray(n)
          : e.fromByteArray(n.slice(i, o));
      }
      function jt(n, i, o) {
        o = Math.min(n.length, o);
        const h = [];
        let d = i;
        for (; d < o; ) {
          const g = n[d];
          let m = null,
            I = g > 239 ? 4 : g > 223 ? 3 : g > 191 ? 2 : 1;
          if (d + I <= o) {
            let W, M, U, j;
            switch (I) {
              case 1:
                g < 128 && (m = g);
                break;
              case 2:
                (W = n[d + 1]),
                  (W & 192) === 128 &&
                    ((j = ((g & 31) << 6) | (W & 63)), j > 127 && (m = j));
                break;
              case 3:
                (W = n[d + 1]),
                  (M = n[d + 2]),
                  (W & 192) === 128 &&
                    (M & 192) === 128 &&
                    ((j = ((g & 15) << 12) | ((W & 63) << 6) | (M & 63)),
                    j > 2047 && (j < 55296 || j > 57343) && (m = j));
                break;
              case 4:
                (W = n[d + 1]),
                  (M = n[d + 2]),
                  (U = n[d + 3]),
                  (W & 192) === 128 &&
                    (M & 192) === 128 &&
                    (U & 192) === 128 &&
                    ((j =
                      ((g & 15) << 18) |
                      ((W & 63) << 12) |
                      ((M & 63) << 6) |
                      (U & 63)),
                    j > 65535 && j < 1114112 && (m = j));
            }
          }
          m === null
            ? ((m = 65533), (I = 1))
            : m > 65535 &&
              ((m -= 65536),
              h.push(((m >>> 10) & 1023) | 55296),
              (m = 56320 | (m & 1023))),
            h.push(m),
            (d += I);
        }
        return Jr(h);
      }
      var Ft = 4096;
      function Jr(n) {
        const i = n.length;
        if (i <= Ft) return String.fromCharCode.apply(String, n);
        let o = "",
          h = 0;
        for (; h < i; )
          o += String.fromCharCode.apply(String, n.slice(h, (h += Ft)));
        return o;
      }
      function en(n, i, o) {
        let h = "";
        o = Math.min(n.length, o);
        for (let d = i; d < o; ++d) h += String.fromCharCode(n[d] & 127);
        return h;
      }
      function tn(n, i, o) {
        let h = "";
        o = Math.min(n.length, o);
        for (let d = i; d < o; ++d) h += String.fromCharCode(n[d]);
        return h;
      }
      function rn(n, i, o) {
        const h = n.length;
        (!i || i < 0) && (i = 0), (!o || o < 0 || o > h) && (o = h);
        let d = "";
        for (let g = i; g < o; ++g) d += ln[n[g]];
        return d;
      }
      function nn(n, i, o) {
        const h = n.slice(i, o);
        let d = "";
        for (let g = 0; g < h.length - 1; g += 2)
          d += String.fromCharCode(h[g] + h[g + 1] * 256);
        return d;
      }
      u.prototype.slice = function (i, o) {
        const h = this.length;
        (i = ~~i),
          (o = o === void 0 ? h : ~~o),
          i < 0 ? ((i += h), i < 0 && (i = 0)) : i > h && (i = h),
          o < 0 ? ((o += h), o < 0 && (o = 0)) : o > h && (o = h),
          o < i && (o = i);
        const d = this.subarray(i, o);
        return Object.setPrototypeOf(d, u.prototype), d;
      };
      function K(n, i, o) {
        if (n % 1 !== 0 || n < 0) throw new RangeError("offset is not uint");
        if (n + i > o)
          throw new RangeError("Trying to access beyond buffer length");
      }
      (u.prototype.readUintLE = u.prototype.readUIntLE =
        function (i, o, h) {
          (i = i >>> 0), (o = o >>> 0), h || K(i, o, this.length);
          let d = this[i],
            g = 1,
            m = 0;
          for (; ++m < o && (g *= 256); ) d += this[i + m] * g;
          return d;
        }),
        (u.prototype.readUintBE = u.prototype.readUIntBE =
          function (i, o, h) {
            (i = i >>> 0), (o = o >>> 0), h || K(i, o, this.length);
            let d = this[i + --o],
              g = 1;
            for (; o > 0 && (g *= 256); ) d += this[i + --o] * g;
            return d;
          }),
        (u.prototype.readUint8 = u.prototype.readUInt8 =
          function (i, o) {
            return (i = i >>> 0), o || K(i, 1, this.length), this[i];
          }),
        (u.prototype.readUint16LE = u.prototype.readUInt16LE =
          function (i, o) {
            return (
              (i = i >>> 0),
              o || K(i, 2, this.length),
              this[i] | (this[i + 1] << 8)
            );
          }),
        (u.prototype.readUint16BE = u.prototype.readUInt16BE =
          function (i, o) {
            return (
              (i = i >>> 0),
              o || K(i, 2, this.length),
              (this[i] << 8) | this[i + 1]
            );
          }),
        (u.prototype.readUint32LE = u.prototype.readUInt32LE =
          function (i, o) {
            return (
              (i = i >>> 0),
              o || K(i, 4, this.length),
              (this[i] | (this[i + 1] << 8) | (this[i + 2] << 16)) +
                this[i + 3] * 16777216
            );
          }),
        (u.prototype.readUint32BE = u.prototype.readUInt32BE =
          function (i, o) {
            return (
              (i = i >>> 0),
              o || K(i, 4, this.length),
              this[i] * 16777216 +
                ((this[i + 1] << 16) | (this[i + 2] << 8) | this[i + 3])
            );
          }),
        (u.prototype.readBigUInt64LE = ge(function (i) {
          (i = i >>> 0), Se(i, "offset");
          const o = this[i],
            h = this[i + 7];
          (o === void 0 || h === void 0) && Ie(i, this.length - 8);
          const d =
              o +
              this[++i] * 2 ** 8 +
              this[++i] * 2 ** 16 +
              this[++i] * 2 ** 24,
            g =
              this[++i] +
              this[++i] * 2 ** 8 +
              this[++i] * 2 ** 16 +
              h * 2 ** 24;
          return BigInt(d) + (BigInt(g) << BigInt(32));
        })),
        (u.prototype.readBigUInt64BE = ge(function (i) {
          (i = i >>> 0), Se(i, "offset");
          const o = this[i],
            h = this[i + 7];
          (o === void 0 || h === void 0) && Ie(i, this.length - 8);
          const d =
              o * 2 ** 24 +
              this[++i] * 2 ** 16 +
              this[++i] * 2 ** 8 +
              this[++i],
            g =
              this[++i] * 2 ** 24 +
              this[++i] * 2 ** 16 +
              this[++i] * 2 ** 8 +
              h;
          return (BigInt(d) << BigInt(32)) + BigInt(g);
        })),
        (u.prototype.readIntLE = function (i, o, h) {
          (i = i >>> 0), (o = o >>> 0), h || K(i, o, this.length);
          let d = this[i],
            g = 1,
            m = 0;
          for (; ++m < o && (g *= 256); ) d += this[i + m] * g;
          return (g *= 128), d >= g && (d -= Math.pow(2, 8 * o)), d;
        }),
        (u.prototype.readIntBE = function (i, o, h) {
          (i = i >>> 0), (o = o >>> 0), h || K(i, o, this.length);
          let d = o,
            g = 1,
            m = this[i + --d];
          for (; d > 0 && (g *= 256); ) m += this[i + --d] * g;
          return (g *= 128), m >= g && (m -= Math.pow(2, 8 * o)), m;
        }),
        (u.prototype.readInt8 = function (i, o) {
          return (
            (i = i >>> 0),
            o || K(i, 1, this.length),
            this[i] & 128 ? (255 - this[i] + 1) * -1 : this[i]
          );
        }),
        (u.prototype.readInt16LE = function (i, o) {
          (i = i >>> 0), o || K(i, 2, this.length);
          const h = this[i] | (this[i + 1] << 8);
          return h & 32768 ? h | 4294901760 : h;
        }),
        (u.prototype.readInt16BE = function (i, o) {
          (i = i >>> 0), o || K(i, 2, this.length);
          const h = this[i + 1] | (this[i] << 8);
          return h & 32768 ? h | 4294901760 : h;
        }),
        (u.prototype.readInt32LE = function (i, o) {
          return (
            (i = i >>> 0),
            o || K(i, 4, this.length),
            this[i] |
              (this[i + 1] << 8) |
              (this[i + 2] << 16) |
              (this[i + 3] << 24)
          );
        }),
        (u.prototype.readInt32BE = function (i, o) {
          return (
            (i = i >>> 0),
            o || K(i, 4, this.length),
            (this[i] << 24) |
              (this[i + 1] << 16) |
              (this[i + 2] << 8) |
              this[i + 3]
          );
        }),
        (u.prototype.readBigInt64LE = ge(function (i) {
          (i = i >>> 0), Se(i, "offset");
          const o = this[i],
            h = this[i + 7];
          (o === void 0 || h === void 0) && Ie(i, this.length - 8);
          const d =
            this[i + 4] +
            this[i + 5] * 2 ** 8 +
            this[i + 6] * 2 ** 16 +
            (h << 24);
          return (
            (BigInt(d) << BigInt(32)) +
            BigInt(
              o + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24
            )
          );
        })),
        (u.prototype.readBigInt64BE = ge(function (i) {
          (i = i >>> 0), Se(i, "offset");
          const o = this[i],
            h = this[i + 7];
          (o === void 0 || h === void 0) && Ie(i, this.length - 8);
          const d =
            (o << 24) + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i];
          return (
            (BigInt(d) << BigInt(32)) +
            BigInt(
              this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + h
            )
          );
        })),
        (u.prototype.readFloatLE = function (i, o) {
          return (
            (i = i >>> 0), o || K(i, 4, this.length), r.read(this, i, !0, 23, 4)
          );
        }),
        (u.prototype.readFloatBE = function (i, o) {
          return (
            (i = i >>> 0), o || K(i, 4, this.length), r.read(this, i, !1, 23, 4)
          );
        }),
        (u.prototype.readDoubleLE = function (i, o) {
          return (
            (i = i >>> 0), o || K(i, 8, this.length), r.read(this, i, !0, 52, 8)
          );
        }),
        (u.prototype.readDoubleBE = function (i, o) {
          return (
            (i = i >>> 0), o || K(i, 8, this.length), r.read(this, i, !1, 52, 8)
          );
        });
      function te(n, i, o, h, d, g) {
        if (!u.isBuffer(n))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (i > d || i < g)
          throw new RangeError('"value" argument is out of bounds');
        if (o + h > n.length) throw new RangeError("Index out of range");
      }
      (u.prototype.writeUintLE = u.prototype.writeUIntLE =
        function (i, o, h, d) {
          if (((i = +i), (o = o >>> 0), (h = h >>> 0), !d)) {
            const I = Math.pow(2, 8 * h) - 1;
            te(this, i, o, h, I, 0);
          }
          let g = 1,
            m = 0;
          for (this[o] = i & 255; ++m < h && (g *= 256); )
            this[o + m] = (i / g) & 255;
          return o + h;
        }),
        (u.prototype.writeUintBE = u.prototype.writeUIntBE =
          function (i, o, h, d) {
            if (((i = +i), (o = o >>> 0), (h = h >>> 0), !d)) {
              const I = Math.pow(2, 8 * h) - 1;
              te(this, i, o, h, I, 0);
            }
            let g = h - 1,
              m = 1;
            for (this[o + g] = i & 255; --g >= 0 && (m *= 256); )
              this[o + g] = (i / m) & 255;
            return o + h;
          }),
        (u.prototype.writeUint8 = u.prototype.writeUInt8 =
          function (i, o, h) {
            return (
              (i = +i),
              (o = o >>> 0),
              h || te(this, i, o, 1, 255, 0),
              (this[o] = i & 255),
              o + 1
            );
          }),
        (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
          function (i, o, h) {
            return (
              (i = +i),
              (o = o >>> 0),
              h || te(this, i, o, 2, 65535, 0),
              (this[o] = i & 255),
              (this[o + 1] = i >>> 8),
              o + 2
            );
          }),
        (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
          function (i, o, h) {
            return (
              (i = +i),
              (o = o >>> 0),
              h || te(this, i, o, 2, 65535, 0),
              (this[o] = i >>> 8),
              (this[o + 1] = i & 255),
              o + 2
            );
          }),
        (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
          function (i, o, h) {
            return (
              (i = +i),
              (o = o >>> 0),
              h || te(this, i, o, 4, 4294967295, 0),
              (this[o + 3] = i >>> 24),
              (this[o + 2] = i >>> 16),
              (this[o + 1] = i >>> 8),
              (this[o] = i & 255),
              o + 4
            );
          }),
        (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
          function (i, o, h) {
            return (
              (i = +i),
              (o = o >>> 0),
              h || te(this, i, o, 4, 4294967295, 0),
              (this[o] = i >>> 24),
              (this[o + 1] = i >>> 16),
              (this[o + 2] = i >>> 8),
              (this[o + 3] = i & 255),
              o + 4
            );
          });
      function Zt(n, i, o, h, d) {
        Gt(i, h, d, n, o, 7);
        let g = Number(i & BigInt(4294967295));
        (n[o++] = g),
          (g = g >> 8),
          (n[o++] = g),
          (g = g >> 8),
          (n[o++] = g),
          (g = g >> 8),
          (n[o++] = g);
        let m = Number((i >> BigInt(32)) & BigInt(4294967295));
        return (
          (n[o++] = m),
          (m = m >> 8),
          (n[o++] = m),
          (m = m >> 8),
          (n[o++] = m),
          (m = m >> 8),
          (n[o++] = m),
          o
        );
      }
      function $t(n, i, o, h, d) {
        Gt(i, h, d, n, o, 7);
        let g = Number(i & BigInt(4294967295));
        (n[o + 7] = g),
          (g = g >> 8),
          (n[o + 6] = g),
          (g = g >> 8),
          (n[o + 5] = g),
          (g = g >> 8),
          (n[o + 4] = g);
        let m = Number((i >> BigInt(32)) & BigInt(4294967295));
        return (
          (n[o + 3] = m),
          (m = m >> 8),
          (n[o + 2] = m),
          (m = m >> 8),
          (n[o + 1] = m),
          (m = m >> 8),
          (n[o] = m),
          o + 8
        );
      }
      (u.prototype.writeBigUInt64LE = ge(function (i, o = 0) {
        return Zt(this, i, o, BigInt(0), BigInt("0xffffffffffffffff"));
      })),
        (u.prototype.writeBigUInt64BE = ge(function (i, o = 0) {
          return $t(this, i, o, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (u.prototype.writeIntLE = function (i, o, h, d) {
          if (((i = +i), (o = o >>> 0), !d)) {
            const W = Math.pow(2, 8 * h - 1);
            te(this, i, o, h, W - 1, -W);
          }
          let g = 0,
            m = 1,
            I = 0;
          for (this[o] = i & 255; ++g < h && (m *= 256); )
            i < 0 && I === 0 && this[o + g - 1] !== 0 && (I = 1),
              (this[o + g] = (((i / m) >> 0) - I) & 255);
          return o + h;
        }),
        (u.prototype.writeIntBE = function (i, o, h, d) {
          if (((i = +i), (o = o >>> 0), !d)) {
            const W = Math.pow(2, 8 * h - 1);
            te(this, i, o, h, W - 1, -W);
          }
          let g = h - 1,
            m = 1,
            I = 0;
          for (this[o + g] = i & 255; --g >= 0 && (m *= 256); )
            i < 0 && I === 0 && this[o + g + 1] !== 0 && (I = 1),
              (this[o + g] = (((i / m) >> 0) - I) & 255);
          return o + h;
        }),
        (u.prototype.writeInt8 = function (i, o, h) {
          return (
            (i = +i),
            (o = o >>> 0),
            h || te(this, i, o, 1, 127, -128),
            i < 0 && (i = 255 + i + 1),
            (this[o] = i & 255),
            o + 1
          );
        }),
        (u.prototype.writeInt16LE = function (i, o, h) {
          return (
            (i = +i),
            (o = o >>> 0),
            h || te(this, i, o, 2, 32767, -32768),
            (this[o] = i & 255),
            (this[o + 1] = i >>> 8),
            o + 2
          );
        }),
        (u.prototype.writeInt16BE = function (i, o, h) {
          return (
            (i = +i),
            (o = o >>> 0),
            h || te(this, i, o, 2, 32767, -32768),
            (this[o] = i >>> 8),
            (this[o + 1] = i & 255),
            o + 2
          );
        }),
        (u.prototype.writeInt32LE = function (i, o, h) {
          return (
            (i = +i),
            (o = o >>> 0),
            h || te(this, i, o, 4, 2147483647, -2147483648),
            (this[o] = i & 255),
            (this[o + 1] = i >>> 8),
            (this[o + 2] = i >>> 16),
            (this[o + 3] = i >>> 24),
            o + 4
          );
        }),
        (u.prototype.writeInt32BE = function (i, o, h) {
          return (
            (i = +i),
            (o = o >>> 0),
            h || te(this, i, o, 4, 2147483647, -2147483648),
            i < 0 && (i = 4294967295 + i + 1),
            (this[o] = i >>> 24),
            (this[o + 1] = i >>> 16),
            (this[o + 2] = i >>> 8),
            (this[o + 3] = i & 255),
            o + 4
          );
        }),
        (u.prototype.writeBigInt64LE = ge(function (i, o = 0) {
          return Zt(
            this,
            i,
            o,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (u.prototype.writeBigInt64BE = ge(function (i, o = 0) {
          return $t(
            this,
            i,
            o,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        }));
      function Dt(n, i, o, h, d, g) {
        if (o + h > n.length) throw new RangeError("Index out of range");
        if (o < 0) throw new RangeError("Index out of range");
      }
      function zt(n, i, o, h, d) {
        return (
          (i = +i),
          (o = o >>> 0),
          d || Dt(n, i, o, 4),
          r.write(n, i, o, h, 23, 4),
          o + 4
        );
      }
      (u.prototype.writeFloatLE = function (i, o, h) {
        return zt(this, i, o, !0, h);
      }),
        (u.prototype.writeFloatBE = function (i, o, h) {
          return zt(this, i, o, !1, h);
        });
      function Vt(n, i, o, h, d) {
        return (
          (i = +i),
          (o = o >>> 0),
          d || Dt(n, i, o, 8),
          r.write(n, i, o, h, 52, 8),
          o + 8
        );
      }
      (u.prototype.writeDoubleLE = function (i, o, h) {
        return Vt(this, i, o, !0, h);
      }),
        (u.prototype.writeDoubleBE = function (i, o, h) {
          return Vt(this, i, o, !1, h);
        }),
        (u.prototype.copy = function (i, o, h, d) {
          if (!u.isBuffer(i))
            throw new TypeError("argument should be a Buffer");
          if (
            (h || (h = 0),
            !d && d !== 0 && (d = this.length),
            o >= i.length && (o = i.length),
            o || (o = 0),
            d > 0 && d < h && (d = h),
            d === h || i.length === 0 || this.length === 0)
          )
            return 0;
          if (o < 0) throw new RangeError("targetStart out of bounds");
          if (h < 0 || h >= this.length)
            throw new RangeError("Index out of range");
          if (d < 0) throw new RangeError("sourceEnd out of bounds");
          d > this.length && (d = this.length),
            i.length - o < d - h && (d = i.length - o + h);
          const g = d - h;
          return (
            this === i && typeof Uint8Array.prototype.copyWithin == "function"
              ? this.copyWithin(o, h, d)
              : Uint8Array.prototype.set.call(i, this.subarray(h, d), o),
            g
          );
        }),
        (u.prototype.fill = function (i, o, h, d) {
          if (typeof i == "string") {
            if (
              (typeof o == "string"
                ? ((d = o), (o = 0), (h = this.length))
                : typeof h == "string" && ((d = h), (h = this.length)),
              d !== void 0 && typeof d != "string")
            )
              throw new TypeError("encoding must be a string");
            if (typeof d == "string" && !u.isEncoding(d))
              throw new TypeError("Unknown encoding: " + d);
            if (i.length === 1) {
              const m = i.charCodeAt(0);
              ((d === "utf8" && m < 128) || d === "latin1") && (i = m);
            }
          } else
            typeof i == "number"
              ? (i = i & 255)
              : typeof i == "boolean" && (i = Number(i));
          if (o < 0 || this.length < o || this.length < h)
            throw new RangeError("Out of range index");
          if (h <= o) return this;
          (o = o >>> 0),
            (h = h === void 0 ? this.length : h >>> 0),
            i || (i = 0);
          let g;
          if (typeof i == "number") for (g = o; g < h; ++g) this[g] = i;
          else {
            const m = u.isBuffer(i) ? i : u.from(i, d),
              I = m.length;
            if (I === 0)
              throw new TypeError(
                'The value "' + i + '" is invalid for argument "value"'
              );
            for (g = 0; g < h - o; ++g) this[g + o] = m[g % I];
          }
          return this;
        });
      var Ae = {};
      function tt(n, i, o) {
        Ae[n] = class extends o {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: i.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${n}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return n;
          }
          set code(d) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: d,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${n}]: ${this.message}`;
          }
        };
      }
      tt(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (n) {
          return n
            ? `${n} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        tt(
          "ERR_INVALID_ARG_TYPE",
          function (n, i) {
            return `The "${n}" argument must be of type number. Received type ${typeof i}`;
          },
          TypeError
        ),
        tt(
          "ERR_OUT_OF_RANGE",
          function (n, i, o) {
            let h = `The value of "${n}" is out of range.`,
              d = o;
            return (
              Number.isInteger(o) && Math.abs(o) > 2 ** 32
                ? (d = Wt(String(o)))
                : typeof o == "bigint" &&
                  ((d = String(o)),
                  (o > BigInt(2) ** BigInt(32) ||
                    o < -(BigInt(2) ** BigInt(32))) &&
                    (d = Wt(d)),
                  (d += "n")),
              (h += ` It must be ${i}. Received ${d}`),
              h
            );
          },
          RangeError
        );
      function Wt(n) {
        let i = "",
          o = n.length;
        const h = n[0] === "-" ? 1 : 0;
        for (; o >= h + 4; o -= 3) i = `_${n.slice(o - 3, o)}${i}`;
        return `${n.slice(0, o)}${i}`;
      }
      function sn(n, i, o) {
        Se(i, "offset"),
          (n[i] === void 0 || n[i + o] === void 0) && Ie(i, n.length - (o + 1));
      }
      function Gt(n, i, o, h, d, g) {
        if (n > o || n < i) {
          const m = typeof i == "bigint" ? "n" : "";
          let I;
          throw (
            (i === 0 || i === BigInt(0)
              ? (I = `>= 0${m} and < 2${m} ** ${(g + 1) * 8}${m}`)
              : (I = `>= -(2${m} ** ${(g + 1) * 8 - 1}${m}) and < 2 ** ${
                  (g + 1) * 8 - 1
                }${m}`),
            new Ae.ERR_OUT_OF_RANGE("value", I, n))
          );
        }
        sn(h, d, g);
      }
      function Se(n, i) {
        if (typeof n != "number")
          throw new Ae.ERR_INVALID_ARG_TYPE(i, "number", n);
      }
      function Ie(n, i, o) {
        throw Math.floor(n) !== n
          ? (Se(n, o), new Ae.ERR_OUT_OF_RANGE("offset", "an integer", n))
          : i < 0
          ? new Ae.ERR_BUFFER_OUT_OF_BOUNDS()
          : new Ae.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${i}`, n);
      }
      var an = /[^+/0-9A-Za-z-_]/g;
      function on(n) {
        if (
          ((n = n.split("=")[0]), (n = n.trim().replace(an, "")), n.length < 2)
        )
          return "";
        for (; n.length % 4 !== 0; ) n = n + "=";
        return n;
      }
      function rt(n, i) {
        i = i || 1 / 0;
        let o;
        const h = n.length;
        let d = null;
        const g = [];
        for (let m = 0; m < h; ++m) {
          if (((o = n.charCodeAt(m)), o > 55295 && o < 57344)) {
            if (!d) {
              if (o > 56319) {
                (i -= 3) > -1 && g.push(239, 191, 189);
                continue;
              } else if (m + 1 === h) {
                (i -= 3) > -1 && g.push(239, 191, 189);
                continue;
              }
              d = o;
              continue;
            }
            if (o < 56320) {
              (i -= 3) > -1 && g.push(239, 191, 189), (d = o);
              continue;
            }
            o = (((d - 55296) << 10) | (o - 56320)) + 65536;
          } else d && (i -= 3) > -1 && g.push(239, 191, 189);
          if (((d = null), o < 128)) {
            if ((i -= 1) < 0) break;
            g.push(o);
          } else if (o < 2048) {
            if ((i -= 2) < 0) break;
            g.push((o >> 6) | 192, (o & 63) | 128);
          } else if (o < 65536) {
            if ((i -= 3) < 0) break;
            g.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (o & 63) | 128);
          } else if (o < 1114112) {
            if ((i -= 4) < 0) break;
            g.push(
              (o >> 18) | 240,
              ((o >> 12) & 63) | 128,
              ((o >> 6) & 63) | 128,
              (o & 63) | 128
            );
          } else throw new Error("Invalid code point");
        }
        return g;
      }
      function un(n) {
        const i = [];
        for (let o = 0; o < n.length; ++o) i.push(n.charCodeAt(o) & 255);
        return i;
      }
      function cn(n, i) {
        let o, h, d;
        const g = [];
        for (let m = 0; m < n.length && !((i -= 2) < 0); ++m)
          (o = n.charCodeAt(m)),
            (h = o >> 8),
            (d = o % 256),
            g.push(d),
            g.push(h);
        return g;
      }
      function qt(n) {
        return e.toByteArray(on(n));
      }
      function Fe(n, i, o, h) {
        let d;
        for (d = 0; d < h && !(d + o >= i.length || d >= n.length); ++d)
          i[d + o] = n[d];
        return d;
      }
      function le(n, i) {
        return (
          n instanceof i ||
          (n != null &&
            n.constructor != null &&
            n.constructor.name != null &&
            n.constructor.name === i.name)
        );
      }
      function nt(n) {
        return n !== n;
      }
      var ln = (function () {
        const n = "0123456789abcdef",
          i = new Array(256);
        for (let o = 0; o < 16; ++o) {
          const h = o * 16;
          for (let d = 0; d < 16; ++d) i[h + d] = n[o] + n[d];
        }
        return i;
      })();
      function ge(n) {
        return typeof BigInt > "u" ? hn : n;
      }
      function hn() {
        throw new Error("BigInt not supported");
      }
    },
  }),
  Gc = { "@@functional/placeholder": !0 };
function ve(t) {
  return t === Gc;
}
function Ne(t) {
  return function e(r) {
    return arguments.length === 0 || ve(r) ? e : t.apply(this, arguments);
  };
}
function Be(t) {
  return function e(r, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return ve(r)
          ? e
          : Ne(function (a) {
              return t(r, a);
            });
      default:
        return ve(r) && ve(s)
          ? e
          : ve(r)
          ? Ne(function (a) {
              return t(a, s);
            })
          : ve(s)
          ? Ne(function (a) {
              return t(r, a);
            })
          : t(r, s);
    }
  };
}
function Yi(t, e) {
  switch (t) {
    case 0:
      return function () {
        return e.apply(this, arguments);
      };
    case 1:
      return function (r) {
        return e.apply(this, arguments);
      };
    case 2:
      return function (r, s) {
        return e.apply(this, arguments);
      };
    case 3:
      return function (r, s, a) {
        return e.apply(this, arguments);
      };
    case 4:
      return function (r, s, a, c) {
        return e.apply(this, arguments);
      };
    case 5:
      return function (r, s, a, c, l) {
        return e.apply(this, arguments);
      };
    case 6:
      return function (r, s, a, c, l, u) {
        return e.apply(this, arguments);
      };
    case 7:
      return function (r, s, a, c, l, u, f) {
        return e.apply(this, arguments);
      };
    case 8:
      return function (r, s, a, c, l, u, f, p) {
        return e.apply(this, arguments);
      };
    case 9:
      return function (r, s, a, c, l, u, f, p, b) {
        return e.apply(this, arguments);
      };
    case 10:
      return function (r, s, a, c, l, u, f, p, b, v) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error(
        "First argument to _arity must be a non-negative integer no greater than ten"
      );
  }
}
function yo(t, e, r) {
  return function () {
    for (
      var s = [], a = 0, c = t, l = 0, u = !1;
      l < e.length || a < arguments.length;

    ) {
      var f;
      l < e.length && (!ve(e[l]) || a >= arguments.length)
        ? (f = e[l])
        : ((f = arguments[a]), (a += 1)),
        (s[l] = f),
        ve(f) ? (u = !0) : (c -= 1),
        (l += 1);
    }
    return !u && c <= 0 ? r.apply(this, s) : Yi(Math.max(0, c), yo(t, s, r));
  };
}
var qc = Be(function (t, e) {
    return t === 1 ? Ne(e) : Yi(t, yo(t, [], e));
  }),
  vo = qc;
function ta(t) {
  return function e(r, s, a) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return ve(r)
          ? e
          : Be(function (c, l) {
              return t(r, c, l);
            });
      case 2:
        return ve(r) && ve(s)
          ? e
          : ve(r)
          ? Be(function (c, l) {
              return t(c, s, l);
            })
          : ve(s)
          ? Be(function (c, l) {
              return t(r, c, l);
            })
          : Ne(function (c) {
              return t(r, s, c);
            });
      default:
        return ve(r) && ve(s) && ve(a)
          ? e
          : ve(r) && ve(s)
          ? Be(function (c, l) {
              return t(c, l, a);
            })
          : ve(r) && ve(a)
          ? Be(function (c, l) {
              return t(c, s, l);
            })
          : ve(s) && ve(a)
          ? Be(function (c, l) {
              return t(r, c, l);
            })
          : ve(r)
          ? Ne(function (c) {
              return t(c, s, a);
            })
          : ve(s)
          ? Ne(function (c) {
              return t(r, c, a);
            })
          : ve(a)
          ? Ne(function (c) {
              return t(r, s, c);
            })
          : t(r, s, a);
    }
  };
}
var ra =
  Array.isArray ||
  function (t) {
    return (
      t != null &&
      t.length >= 0 &&
      Object.prototype.toString.call(t) === "[object Array]"
    );
  };
function Kc(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function na(t, e, r) {
  return function () {
    if (arguments.length === 0) return r();
    var s = arguments[arguments.length - 1];
    if (!ra(s)) {
      for (var a = 0; a < t.length; ) {
        if (typeof s[t[a]] == "function")
          return s[t[a]].apply(s, Array.prototype.slice.call(arguments, 0, -1));
        a += 1;
      }
      if (Kc(s)) {
        var c = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return c(s);
      }
    }
    return r.apply(this, arguments);
  };
}
function Hc(t) {
  return t && t["@@transducer/reduced"]
    ? t
    : { "@@transducer/value": t, "@@transducer/reduced": !0 };
}
var xn = {
  init: function () {
    return this.xf["@@transducer/init"]();
  },
  result: function (t) {
    return this.xf["@@transducer/result"](t);
  },
};
function Ma(t) {
  for (var e = [], r; !(r = t.next()).done; ) e.push(r.value);
  return e;
}
function Na(t, e, r) {
  for (var s = 0, a = r.length; s < a; ) {
    if (t(e, r[s])) return !0;
    s += 1;
  }
  return !1;
}
function Yc(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function Ti(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Qc(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
var cs = typeof Object.is == "function" ? Object.is : Qc,
  Pa = Object.prototype.toString,
  Xc = (function () {
    return Pa.call(arguments) === "[object Arguments]"
      ? function (t) {
          return Pa.call(t) === "[object Arguments]";
        }
      : function (t) {
          return Ti("callee", t);
        };
  })(),
  Jc = Xc,
  el = !{ toString: null }.propertyIsEnumerable("toString"),
  ja = [
    "constructor",
    "valueOf",
    "isPrototypeOf",
    "toString",
    "propertyIsEnumerable",
    "hasOwnProperty",
    "toLocaleString",
  ],
  Fa = (function () {
    return arguments.propertyIsEnumerable("length");
  })(),
  tl = function (t, e) {
    for (var r = 0; r < t.length; ) {
      if (t[r] === e) return !0;
      r += 1;
    }
    return !1;
  },
  rl = Ne(
    typeof Object.keys == "function" && !Fa
      ? function (t) {
          return Object(t) !== t ? [] : Object.keys(t);
        }
      : function (t) {
          if (Object(t) !== t) return [];
          var e,
            r,
            s = [],
            a = Fa && Jc(t);
          for (e in t) Ti(e, t) && (!a || e !== "length") && (s[s.length] = e);
          if (el)
            for (r = ja.length - 1; r >= 0; )
              (e = ja[r]), Ti(e, t) && !tl(s, e) && (s[s.length] = e), (r -= 1);
          return s;
        }
  ),
  Pr = rl,
  nl = Ne(function (t) {
    return t === null
      ? "Null"
      : t === void 0
      ? "Undefined"
      : Object.prototype.toString.call(t).slice(8, -1);
  }),
  Za = nl;
function $a(t, e, r, s) {
  var a = Ma(t),
    c = Ma(e);
  function l(u, f) {
    return ia(u, f, r.slice(), s.slice());
  }
  return !Na(
    function (u, f) {
      return !Na(l, f, u);
    },
    c,
    a
  );
}
function ia(t, e, r, s) {
  if (cs(t, e)) return !0;
  var a = Za(t);
  if (a !== Za(e)) return !1;
  if (
    typeof t["fantasy-land/equals"] == "function" ||
    typeof e["fantasy-land/equals"] == "function"
  )
    return (
      typeof t["fantasy-land/equals"] == "function" &&
      t["fantasy-land/equals"](e) &&
      typeof e["fantasy-land/equals"] == "function" &&
      e["fantasy-land/equals"](t)
    );
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return (
      typeof t.equals == "function" &&
      t.equals(e) &&
      typeof e.equals == "function" &&
      e.equals(t)
    );
  switch (a) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && Yc(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && cs(t.valueOf(), e.valueOf()))) return !1;
      break;
    case "Date":
      if (!cs(t.valueOf(), e.valueOf())) return !1;
      break;
    case "Error":
      return t.name === e.name && t.message === e.message;
    case "RegExp":
      if (
        !(
          t.source === e.source &&
          t.global === e.global &&
          t.ignoreCase === e.ignoreCase &&
          t.multiline === e.multiline &&
          t.sticky === e.sticky &&
          t.unicode === e.unicode
        )
      )
        return !1;
      break;
  }
  for (var c = r.length - 1; c >= 0; ) {
    if (r[c] === t) return s[c] === e;
    c -= 1;
  }
  switch (a) {
    case "Map":
      return t.size !== e.size
        ? !1
        : $a(t.entries(), e.entries(), r.concat([t]), s.concat([e]));
    case "Set":
      return t.size !== e.size
        ? !1
        : $a(t.values(), e.values(), r.concat([t]), s.concat([e]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return !1;
  }
  var l = Pr(t);
  if (l.length !== Pr(e).length) return !1;
  var u = r.concat([t]),
    f = s.concat([e]);
  for (c = l.length - 1; c >= 0; ) {
    var p = l[c];
    if (!(Ti(p, e) && ia(e[p], t[p], u, f))) return !1;
    c -= 1;
  }
  return !0;
}
var il = Be(function (t, e) {
    return ia(t, e, [], []);
  }),
  wo = il;
function sl(t, e, r) {
  var s, a;
  if (typeof t.indexOf == "function")
    switch (typeof e) {
      case "number":
        if (e === 0) {
          for (s = 1 / e; r < t.length; ) {
            if (((a = t[r]), a === 0 && 1 / a === s)) return r;
            r += 1;
          }
          return -1;
        } else if (e !== e) {
          for (; r < t.length; ) {
            if (((a = t[r]), typeof a == "number" && a !== a)) return r;
            r += 1;
          }
          return -1;
        }
        return t.indexOf(e, r);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return t.indexOf(e, r);
      case "object":
        if (e === null) return t.indexOf(e, r);
    }
  for (; r < t.length; ) {
    if (wo(t[r], e)) return r;
    r += 1;
  }
  return -1;
}
function al(t, e) {
  return sl(e, t, 0) >= 0;
}
function An(t, e) {
  for (var r = 0, s = e.length, a = Array(s); r < s; )
    (a[r] = t(e[r])), (r += 1);
  return a;
}
function ls(t) {
  var e = t
    .replace(/\\/g, "\\\\")
    .replace(/[\b]/g, "\\b")
    .replace(/\f/g, "\\f")
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t")
    .replace(/\v/g, "\\v")
    .replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var fn = function (t) {
    return (t < 10 ? "0" : "") + t;
  },
  ol =
    typeof Date.prototype.toISOString == "function"
      ? function (t) {
          return t.toISOString();
        }
      : function (t) {
          return (
            t.getUTCFullYear() +
            "-" +
            fn(t.getUTCMonth() + 1) +
            "-" +
            fn(t.getUTCDate()) +
            "T" +
            fn(t.getUTCHours()) +
            ":" +
            fn(t.getUTCMinutes()) +
            ":" +
            fn(t.getUTCSeconds()) +
            "." +
            (t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
            "Z"
          );
        },
  ul = ol;
function cl(t) {
  return function () {
    return !t.apply(this, arguments);
  };
}
function bo(t, e, r) {
  for (var s = 0, a = r.length; s < a; ) (e = t(e, r[s])), (s += 1);
  return e;
}
function ll(t, e) {
  for (var r = 0, s = e.length, a = []; r < s; )
    t(e[r]) && (a[a.length] = e[r]), (r += 1);
  return a;
}
function hl(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var fl = (function () {
  function t(e, r) {
    (this.xf = r), (this.f = e);
  }
  return (
    (t.prototype["@@transducer/init"] = xn.init),
    (t.prototype["@@transducer/result"] = xn.result),
    (t.prototype["@@transducer/step"] = function (e, r) {
      return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
    }),
    t
  );
})();
function dl(t) {
  return function (e) {
    return new fl(t, e);
  };
}
var pl = Be(
    na(["fantasy-land/filter", "filter"], dl, function (t, e) {
      return hl(e)
        ? bo(
            function (r, s) {
              return t(e[s]) && (r[s] = e[s]), r;
            },
            {},
            Pr(e)
          )
        : ll(t, e);
    })
  ),
  gl = pl,
  ml = Be(function (t, e) {
    return gl(cl(t), e);
  }),
  yl = ml;
function _o(t, e) {
  var r = function (c) {
      var l = e.concat([t]);
      return al(c, l) ? "<Circular>" : _o(c, l);
    },
    s = function (c, l) {
      return An(function (u) {
        return ls(u) + ": " + r(c[u]);
      }, l.slice().sort());
    };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + An(r, t).join(", ") + "))";
    case "[object Array]":
      return (
        "[" +
        An(r, t)
          .concat(
            s(
              t,
              yl(function (c) {
                return /^\d+$/.test(c);
              }, Pr(t))
            )
          )
          .join(", ") +
        "]"
      );
    case "[object Boolean]":
      return typeof t == "object"
        ? "new Boolean(" + r(t.valueOf()) + ")"
        : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : ls(ul(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object"
        ? "new Number(" + r(t.valueOf()) + ")"
        : 1 / t === -1 / 0
        ? "-0"
        : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object"
        ? "new String(" + r(t.valueOf()) + ")"
        : ls(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var a = t.toString();
        if (a !== "[object Object]") return a;
      }
      return "{" + s(t, Pr(t)).join(", ") + "}";
  }
}
var vl = Ne(function (t) {
    return _o(t, []);
  }),
  Da = vl,
  wl = Be(function (t, e) {
    if (t === e) return e;
    function r(u, f) {
      if (u > f != f > u) return f > u ? f : u;
    }
    var s = r(t, e);
    if (s !== void 0) return s;
    var a = r(typeof t, typeof e);
    if (a !== void 0) return a === typeof t ? t : e;
    var c = Da(t),
      l = r(c, Da(e));
    return l !== void 0 && l === c ? t : e;
  }),
  bl = wl,
  _l = (function () {
    function t(e, r) {
      (this.xf = r), (this.f = e);
    }
    return (
      (t.prototype["@@transducer/init"] = xn.init),
      (t.prototype["@@transducer/result"] = xn.result),
      (t.prototype["@@transducer/step"] = function (e, r) {
        return this.xf["@@transducer/step"](e, this.f(r));
      }),
      t
    );
  })(),
  El = function (t) {
    return function (e) {
      return new _l(t, e);
    };
  },
  Al = El,
  Sl = Be(
    na(["fantasy-land/map", "map"], Al, function (t, e) {
      switch (Object.prototype.toString.call(e)) {
        case "[object Function]":
          return vo(e.length, function () {
            return t.call(this, e.apply(this, arguments));
          });
        case "[object Object]":
          return bo(
            function (r, s) {
              return (r[s] = t(e[s])), r;
            },
            {},
            Pr(e)
          );
        default:
          return An(t, e);
      }
    })
  ),
  Tl = Sl,
  Eo =
    Number.isInteger ||
    function (t) {
      return t << 0 === t;
    };
function Ao(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function So(t, e) {
  var r = t < 0 ? e.length + t : t;
  return Ao(e) ? e.charAt(r) : e[r];
}
var xl = Be(function (t, e) {
    if (e != null) return Eo(t) ? So(t, e) : e[t];
  }),
  Qi = xl,
  kl = Be(function (t, e) {
    return Tl(Qi(t), e);
  }),
  Bl = kl,
  Ol = Ne(function (t) {
    return ra(t)
      ? !0
      : !t || typeof t != "object" || Ao(t)
      ? !1
      : t.length === 0
      ? !0
      : t.length > 0
      ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1)
      : !1;
  }),
  Rl = Ol,
  za = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function Il(t, e, r) {
  return function (s, a, c) {
    if (Rl(c)) return t(s, a, c);
    if (c == null) return a;
    if (typeof c["fantasy-land/reduce"] == "function")
      return e(s, a, c, "fantasy-land/reduce");
    if (c[za] != null) return r(s, a, c[za]());
    if (typeof c.next == "function") return r(s, a, c);
    if (typeof c.reduce == "function") return e(s, a, c, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function Cl(t, e, r) {
  for (var s = 0, a = r.length; s < a; ) {
    if (
      ((e = t["@@transducer/step"](e, r[s])), e && e["@@transducer/reduced"])
    ) {
      e = e["@@transducer/value"];
      break;
    }
    s += 1;
  }
  return t["@@transducer/result"](e);
}
var Ll = Be(function (t, e) {
    return Yi(t.length, function () {
      return t.apply(e, arguments);
    });
  }),
  Ul = Ll;
function Ml(t, e, r) {
  for (var s = r.next(); !s.done; ) {
    if (
      ((e = t["@@transducer/step"](e, s.value)), e && e["@@transducer/reduced"])
    ) {
      e = e["@@transducer/value"];
      break;
    }
    s = r.next();
  }
  return t["@@transducer/result"](e);
}
function Nl(t, e, r, s) {
  return t["@@transducer/result"](r[s](Ul(t["@@transducer/step"], t), e));
}
var Pl = Il(Cl, Nl, Ml),
  jl = Pl,
  Fl = (function () {
    function t(e) {
      this.f = e;
    }
    return (
      (t.prototype["@@transducer/init"] = function () {
        throw new Error("init not implemented on XWrap");
      }),
      (t.prototype["@@transducer/result"] = function (e) {
        return e;
      }),
      (t.prototype["@@transducer/step"] = function (e, r) {
        return this.f(e, r);
      }),
      t
    );
  })();
function Zl(t) {
  return new Fl(t);
}
var $l = ta(function (t, e, r) {
    return jl(typeof t == "function" ? Zl(t) : t, e, r);
  }),
  To = $l;
function Dl(t, e) {
  return function () {
    return e.call(this, t.apply(this, arguments));
  };
}
function xo(t, e) {
  return function () {
    var r = arguments.length;
    if (r === 0) return e();
    var s = arguments[r - 1];
    return ra(s) || typeof s[t] != "function"
      ? e.apply(this, arguments)
      : s[t].apply(s, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var zl = ta(
    xo("slice", function (t, e, r) {
      return Array.prototype.slice.call(r, t, e);
    })
  ),
  Vl = zl,
  Wl = Ne(xo("tail", Vl(1, 1 / 0))),
  Gl = Wl;
function ko() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return Yi(arguments[0].length, To(Dl, arguments[0], Gl(arguments)));
}
var ql = Be(function (t, e) {
    return vo(To(bl, 0, Bl("length", e)), function () {
      var r = arguments,
        s = this;
      return t.apply(
        s,
        An(function (a) {
          return a.apply(s, r);
        }, e)
      );
    });
  }),
  Kl = ql,
  Hl = Be(function (t, e) {
    return e == null || e !== e ? t : e;
  }),
  ws = Hl,
  Yl = (function () {
    function t(e, r) {
      (this.xf = r), (this.f = e), (this.found = !1);
    }
    return (
      (t.prototype["@@transducer/init"] = xn.init),
      (t.prototype["@@transducer/result"] = function (e) {
        return (
          this.found || (e = this.xf["@@transducer/step"](e, void 0)),
          this.xf["@@transducer/result"](e)
        );
      }),
      (t.prototype["@@transducer/step"] = function (e, r) {
        return (
          this.f(r) &&
            ((this.found = !0), (e = Hc(this.xf["@@transducer/step"](e, r)))),
          e
        );
      }),
      t
    );
  })();
function Ql(t) {
  return function (e) {
    return new Yl(t, e);
  };
}
var Xl = Be(
    na(["find"], Ql, function (t, e) {
      for (var r = 0, s = e.length; r < s; ) {
        if (t(e[r])) return e[r];
        r += 1;
      }
    })
  ),
  Jl = Xl,
  eh = Ne(function (t) {
    return Kl(function () {
      return Array.prototype.slice.call(arguments, 0);
    }, t);
  }),
  th = eh;
function rh(t, e) {
  for (var r = e, s = 0; s < t.length; s += 1) {
    if (r == null) return;
    var a = t[s];
    Eo(a) ? (r = So(a, r)) : (r = r[a]);
  }
  return r;
}
var nh = Be(rh),
  Bo = nh,
  ih = ta(function (t, e, r) {
    return wo(t, Qi(e, r));
  }),
  sh = ih,
  xi = class extends Error {
    constructor() {
      super(...arguments);
      F(this, "name", "InvalidSchedulerLocation");
    }
  },
  ah = class extends Error {
    constructor() {
      super(...arguments);
      F(this, "name", "SchedulerTagNotFound");
    }
  },
  oh = class extends Error {
    constructor() {
      super(...arguments);
      F(this, "name", "TransactionNotFound");
    }
  };
function sa(t = "") {
  return (t = t.trim()), t.endsWith("/") ? sa(t.slice(0, -1)) : t;
}
var uh = (t, { maxRetries: e = 0, delay: r = 300 }) => {
    let s = (a, c) =>
      Promise.resolve()
        .then(t)
        .catch((l) => {
          if (a >= e) return Promise.reject(l);
          let u = a + 1,
            f = c + c;
          return new Promise((p) => setTimeout(p, c)).then(() => s(u, f));
        });
    return s(0, r);
  },
  ch = (t) => {
    if (t.ok) return t;
    throw t;
  },
  lh = "Url",
  hh = "Time-To-Live",
  fh = "Scheduler",
  bs = (t) => ko(ws([]), Jl(sh(t, "name")), ws({}), Qi("value")),
  Oo = (t) =>
    ko(
      (e) => {
        if (!e) throw new oh(t);
        return e;
      },
      Qi("tags"),
      ws([])
    );
function Ro({
  fetch: t,
  GRAPHQL_URL: e,
  GRAPHQL_MAX_RETRIES: r = 0,
  GRAPHQL_RETRY_BACKOFF: s = 300,
}) {
  return async ({ query: a, variables: c }) =>
    uh(
      () =>
        t(e, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: a, variables: c }),
        })
          .then(ch)
          .then((l) => l.json()),
      { maxRetries: r, delay: s }
    );
}
function dh({
  fetch: t,
  GRAPHQL_URL: e,
  GRAPHQL_MAX_RETRIES: r,
  GRAPHQL_RETRY_BACKOFF: s,
}) {
  let a = Ro({
      fetch: t,
      GRAPHQL_URL: e,
      GRAPHQL_MAX_RETRIES: r,
      GRAPHQL_RETRY_BACKOFF: s,
    }),
    c = Io({
      fetch: t,
      GRAPHQL_URL: e,
      GRAPHQL_MAX_RETRIES: r,
      GRAPHQL_RETRY_BACKOFF: s,
    }),
    l = `
    query GetTransactions ($transactionIds: [ID!]!) {
      transactions(ids: $transactionIds) {
        edges {
          node {
            tags {
              name
              value
            }
          }
        }
      }
    }
  `,
    u = "https://su-router.ao-testnet.xyz";
  return async (f) =>
    (await t(`https://su-router.ao-testnet.xyz?process-id=${f}`).then((b) =>
      b.ok
        ? b
            .json()
            .then(({ address: v }) => ({ url: u, ttl: 1728e5, address: v }))
        : void 0
    )) ||
    a({ query: l, variables: { transactionIds: [f] } })
      .then(Bo(["data", "transactions", "edges", "0", "node"]))
      .then(Oo(`Process ${f} was not found on gateway`))
      .then(bs(fh))
      .then((b) => {
        if (!b) throw new ah('No "Scheduler" tag found on process');
        return c(b);
      });
}
function Io({
  fetch: t,
  GRAPHQL_URL: e,
  GRAPHQL_MAX_RETRIES: r,
  GRAPHQL_RETRY_BACKOFF: s,
}) {
  let a = Ro({
      fetch: t,
      GRAPHQL_URL: e,
      GRAPHQL_MAX_RETRIES: r,
      GRAPHQL_RETRY_BACKOFF: s,
    }),
    c = `
    query GetSchedulerLocation ($owner: String!) {
      transactions (
        owners: [$owner]
        tags: [
          { name: "Data-Protocol", values: ["ao"] },
          { name: "Type", values: ["Scheduler-Location"] }
        ]
        # Only need the most recent Scheduler-Location
        sort: HEIGHT_DESC
        first: 1
      ) {
        edges {
          node {
            tags {
              name
              value
            }
          }
        }
      }
    }
  `;
  return async (l) =>
    a({ query: c, variables: { owner: l } })
      .then(Bo(["data", "transactions", "edges", "0", "node"]))
      .then(Oo(`Could not find 'Scheduler-Location' owner by wallet ${l}`))
      .then(th([bs(lh), bs(hh)]))
      .then(([u, f]) => {
        if (!u) throw new xi('No "Url" tag found on Scheduler-Location');
        if (!f)
          throw new xi('No "Time-To-Live" tag found on Scheduler-Location');
        return { url: u, ttl: f, address: l };
      });
}
var xr =
    typeof performance == "object" &&
    performance &&
    typeof performance.now == "function"
      ? performance
      : Date,
  Co = new Set(),
  _s = typeof process == "object" && process ? process : {},
  Lo = (t, e, r, s) => {
    typeof _s.emitWarning == "function"
      ? _s.emitWarning(t, e, r, s)
      : console.error(`[${r}] ${e}: ${t}`);
  },
  ki = globalThis.AbortController,
  Va = globalThis.AbortSignal,
  co;
if (typeof ki > "u") {
  (Va = class {
    constructor() {
      F(this, "onabort");
      F(this, "_onabort", []);
      F(this, "reason");
      F(this, "aborted", !1);
    }
    addEventListener(r, s) {
      this._onabort.push(s);
    }
  }),
    (ki = class {
      constructor() {
        F(this, "signal", new Va());
        e();
      }
      abort(r) {
        var s, a;
        if (!this.signal.aborted) {
          (this.signal.reason = r), (this.signal.aborted = !0);
          for (let c of this.signal._onabort) c(r);
          (a = (s = this.signal).onabort) == null || a.call(s, r);
        }
      }
    });
  let t =
      ((co = _s.env) == null ? void 0 : co.LRU_CACHE_IGNORE_AC_WARNING) !== "1",
    e = () => {
      t &&
        ((t = !1),
        Lo(
          "AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.",
          "NO_ABORT_CONTROLLER",
          "ENOTSUP",
          e
        ));
    };
}
var ph = (t) => !Co.has(t),
  Qt = (t) => t && t === Math.floor(t) && t > 0 && isFinite(t),
  Uo = (t) =>
    Qt(t)
      ? t <= Math.pow(2, 8)
        ? Uint8Array
        : t <= Math.pow(2, 16)
        ? Uint16Array
        : t <= Math.pow(2, 32)
        ? Uint32Array
        : t <= Number.MAX_SAFE_INTEGER
        ? yi
        : null
      : null,
  yi = class extends Array {
    constructor(t) {
      super(t), this.fill(0);
    }
  },
  _t,
  Lr,
  gh =
    ((_t = class {
      constructor(e, r) {
        F(this, "heap");
        F(this, "length");
        if (!y(_t, Lr))
          throw new TypeError("instantiate Stack using Stack.create(n)");
        (this.heap = new r(e)), (this.length = 0);
      }
      static create(e) {
        let r = Uo(e);
        if (!r) return [];
        Y(_t, Lr, !0);
        let s = new _t(e, r);
        return Y(_t, Lr, !1), s;
      }
      push(e) {
        this.heap[this.length++] = e;
      }
      pop() {
        return this.heap[--this.length];
      }
    }),
    (Lr = new WeakMap()),
    he(_t, Lr, !1),
    _t),
  lo,
  ho,
  at,
  Ve,
  ot,
  ut,
  Ur,
  ke,
  ct,
  Te,
  ye,
  re,
  Ue,
  We,
  Ce,
  Oe,
  lt,
  Re,
  ht,
  ft,
  Ge,
  dt,
  nr,
  Me,
  D,
  Es,
  dr,
  Bt,
  oi,
  qe,
  Mo,
  pr,
  Mr,
  ui,
  Xt,
  Jt,
  As,
  vi,
  wi,
  me,
  Ss,
  gn,
  Nr,
  mh =
    ((Nr = class {
      constructor(e) {
        he(this, D);
        he(this, at);
        he(this, Ve);
        he(this, ot);
        he(this, ut);
        he(this, Ur);
        F(this, "ttl");
        F(this, "ttlResolution");
        F(this, "ttlAutopurge");
        F(this, "updateAgeOnGet");
        F(this, "updateAgeOnHas");
        F(this, "allowStale");
        F(this, "noDisposeOnSet");
        F(this, "noUpdateTTL");
        F(this, "maxEntrySize");
        F(this, "sizeCalculation");
        F(this, "noDeleteOnFetchRejection");
        F(this, "noDeleteOnStaleGet");
        F(this, "allowStaleOnFetchAbort");
        F(this, "allowStaleOnFetchRejection");
        F(this, "ignoreFetchAbort");
        he(this, ke);
        he(this, ct);
        he(this, Te);
        he(this, ye);
        he(this, re);
        he(this, Ue);
        he(this, We);
        he(this, Ce);
        he(this, Oe);
        he(this, lt);
        he(this, Re);
        he(this, ht);
        he(this, ft);
        he(this, Ge);
        he(this, dt);
        he(this, nr);
        he(this, Me);
        he(this, dr, () => {});
        he(this, Bt, () => {});
        he(this, oi, () => {});
        he(this, qe, () => !1);
        he(this, pr, (e) => {});
        he(this, Mr, (e, r, s) => {});
        he(this, ui, (e, r, s, a) => {
          if (s || a)
            throw new TypeError(
              "cannot set size without setting maxSize or maxEntrySize on cache"
            );
          return 0;
        });
        F(this, lo, "LRUCache");
        let {
          max: r = 0,
          ttl: s,
          ttlResolution: a = 1,
          ttlAutopurge: c,
          updateAgeOnGet: l,
          updateAgeOnHas: u,
          allowStale: f,
          dispose: p,
          disposeAfter: b,
          noDisposeOnSet: v,
          noUpdateTTL: _,
          maxSize: E = 0,
          maxEntrySize: w = 0,
          sizeCalculation: A,
          fetchMethod: S,
          noDeleteOnFetchRejection: x,
          noDeleteOnStaleGet: C,
          allowStaleOnFetchRejection: B,
          allowStaleOnFetchAbort: L,
          ignoreFetchAbort: z,
        } = e;
        if (r !== 0 && !Qt(r))
          throw new TypeError("max option must be a nonnegative integer");
        let V = r ? Uo(r) : Array;
        if (!V) throw new Error("invalid max value: " + r);
        if (
          (Y(this, at, r),
          Y(this, Ve, E),
          (this.maxEntrySize = w || y(this, Ve)),
          (this.sizeCalculation = A),
          this.sizeCalculation)
        ) {
          if (!y(this, Ve) && !this.maxEntrySize)
            throw new TypeError(
              "cannot set sizeCalculation without setting maxSize or maxEntrySize"
            );
          if (typeof this.sizeCalculation != "function")
            throw new TypeError("sizeCalculation set to non-function");
        }
        if (S !== void 0 && typeof S != "function")
          throw new TypeError("fetchMethod must be a function if specified");
        if (
          (Y(this, Ur, S),
          Y(this, nr, !!S),
          Y(this, Te, new Map()),
          Y(this, ye, new Array(r).fill(void 0)),
          Y(this, re, new Array(r).fill(void 0)),
          Y(this, Ue, new V(r)),
          Y(this, We, new V(r)),
          Y(this, Ce, 0),
          Y(this, Oe, 0),
          Y(this, lt, gh.create(r)),
          Y(this, ke, 0),
          Y(this, ct, 0),
          typeof p == "function" && Y(this, ot, p),
          typeof b == "function"
            ? (Y(this, ut, b), Y(this, Re, []))
            : (Y(this, ut, void 0), Y(this, Re, void 0)),
          Y(this, dt, !!y(this, ot)),
          Y(this, Me, !!y(this, ut)),
          (this.noDisposeOnSet = !!v),
          (this.noUpdateTTL = !!_),
          (this.noDeleteOnFetchRejection = !!x),
          (this.allowStaleOnFetchRejection = !!B),
          (this.allowStaleOnFetchAbort = !!L),
          (this.ignoreFetchAbort = !!z),
          this.maxEntrySize !== 0)
        ) {
          if (y(this, Ve) !== 0 && !Qt(y(this, Ve)))
            throw new TypeError(
              "maxSize must be a positive integer if specified"
            );
          if (!Qt(this.maxEntrySize))
            throw new TypeError(
              "maxEntrySize must be a positive integer if specified"
            );
          H(this, D, Mo).call(this);
        }
        if (
          ((this.allowStale = !!f),
          (this.noDeleteOnStaleGet = !!C),
          (this.updateAgeOnGet = !!l),
          (this.updateAgeOnHas = !!u),
          (this.ttlResolution = Qt(a) || a === 0 ? a : 1),
          (this.ttlAutopurge = !!c),
          (this.ttl = s || 0),
          this.ttl)
        ) {
          if (!Qt(this.ttl))
            throw new TypeError("ttl must be a positive integer if specified");
          H(this, D, Es).call(this);
        }
        if (y(this, at) === 0 && this.ttl === 0 && y(this, Ve) === 0)
          throw new TypeError(
            "At least one of max, maxSize, or ttl is required"
          );
        if (!this.ttlAutopurge && !y(this, at) && !y(this, Ve)) {
          let _e = "LRU_CACHE_UNBOUNDED";
          ph(_e) &&
            (Co.add(_e),
            Lo(
              "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.",
              "UnboundedCacheWarning",
              _e,
              Nr
            ));
        }
      }
      static unsafeExposeInternals(e) {
        return {
          starts: y(e, ft),
          ttls: y(e, Ge),
          sizes: y(e, ht),
          keyMap: y(e, Te),
          keyList: y(e, ye),
          valList: y(e, re),
          next: y(e, Ue),
          prev: y(e, We),
          get head() {
            return y(e, Ce);
          },
          get tail() {
            return y(e, Oe);
          },
          free: y(e, lt),
          isBackgroundFetch: (r) => {
            var s;
            return H((s = e), D, me).call(s, r);
          },
          backgroundFetch: (r, s, a, c) => {
            var l;
            return H((l = e), D, wi).call(l, r, s, a, c);
          },
          moveToTail: (r) => {
            var s;
            return H((s = e), D, gn).call(s, r);
          },
          indexes: (r) => {
            var s;
            return H((s = e), D, Xt).call(s, r);
          },
          rindexes: (r) => {
            var s;
            return H((s = e), D, Jt).call(s, r);
          },
          isStale: (r) => {
            var s;
            return y((s = e), qe).call(s, r);
          },
        };
      }
      get max() {
        return y(this, at);
      }
      get maxSize() {
        return y(this, Ve);
      }
      get calculatedSize() {
        return y(this, ct);
      }
      get size() {
        return y(this, ke);
      }
      get fetchMethod() {
        return y(this, Ur);
      }
      get dispose() {
        return y(this, ot);
      }
      get disposeAfter() {
        return y(this, ut);
      }
      getRemainingTTL(e) {
        return y(this, Te).has(e) ? 1 / 0 : 0;
      }
      *entries() {
        for (let e of H(this, D, Xt).call(this))
          y(this, re)[e] !== void 0 &&
            y(this, ye)[e] !== void 0 &&
            !H(this, D, me).call(this, y(this, re)[e]) &&
            (yield [y(this, ye)[e], y(this, re)[e]]);
      }
      *rentries() {
        for (let e of H(this, D, Jt).call(this))
          y(this, re)[e] !== void 0 &&
            y(this, ye)[e] !== void 0 &&
            !H(this, D, me).call(this, y(this, re)[e]) &&
            (yield [y(this, ye)[e], y(this, re)[e]]);
      }
      *keys() {
        for (let e of H(this, D, Xt).call(this)) {
          let r = y(this, ye)[e];
          r !== void 0 &&
            !H(this, D, me).call(this, y(this, re)[e]) &&
            (yield r);
        }
      }
      *rkeys() {
        for (let e of H(this, D, Jt).call(this)) {
          let r = y(this, ye)[e];
          r !== void 0 &&
            !H(this, D, me).call(this, y(this, re)[e]) &&
            (yield r);
        }
      }
      *values() {
        for (let e of H(this, D, Xt).call(this))
          y(this, re)[e] !== void 0 &&
            !H(this, D, me).call(this, y(this, re)[e]) &&
            (yield y(this, re)[e]);
      }
      *rvalues() {
        for (let e of H(this, D, Jt).call(this))
          y(this, re)[e] !== void 0 &&
            !H(this, D, me).call(this, y(this, re)[e]) &&
            (yield y(this, re)[e]);
      }
      [((ho = Symbol.iterator), (lo = Symbol.toStringTag), ho)]() {
        return this.entries();
      }
      find(e, r = {}) {
        for (let s of H(this, D, Xt).call(this)) {
          let a = y(this, re)[s],
            c = H(this, D, me).call(this, a) ? a.__staleWhileFetching : a;
          if (c !== void 0 && e(c, y(this, ye)[s], this))
            return this.get(y(this, ye)[s], r);
        }
      }
      forEach(e, r = this) {
        for (let s of H(this, D, Xt).call(this)) {
          let a = y(this, re)[s],
            c = H(this, D, me).call(this, a) ? a.__staleWhileFetching : a;
          c !== void 0 && e.call(r, c, y(this, ye)[s], this);
        }
      }
      rforEach(e, r = this) {
        for (let s of H(this, D, Jt).call(this)) {
          let a = y(this, re)[s],
            c = H(this, D, me).call(this, a) ? a.__staleWhileFetching : a;
          c !== void 0 && e.call(r, c, y(this, ye)[s], this);
        }
      }
      purgeStale() {
        let e = !1;
        for (let r of H(this, D, Jt).call(this, { allowStale: !0 }))
          y(this, qe).call(this, r) && (this.delete(y(this, ye)[r]), (e = !0));
        return e;
      }
      info(e) {
        let r = y(this, Te).get(e);
        if (r === void 0) return;
        let s = y(this, re)[r],
          a = H(this, D, me).call(this, s) ? s.__staleWhileFetching : s;
        if (a === void 0) return;
        let c = { value: a };
        if (y(this, Ge) && y(this, ft)) {
          let l = y(this, Ge)[r],
            u = y(this, ft)[r];
          if (l && u) {
            let f = l - (xr.now() - u);
            (c.ttl = f), (c.start = Date.now());
          }
        }
        return y(this, ht) && (c.size = y(this, ht)[r]), c;
      }
      dump() {
        let e = [];
        for (let r of H(this, D, Xt).call(this, { allowStale: !0 })) {
          let s = y(this, ye)[r],
            a = y(this, re)[r],
            c = H(this, D, me).call(this, a) ? a.__staleWhileFetching : a;
          if (c === void 0 || s === void 0) continue;
          let l = { value: c };
          if (y(this, Ge) && y(this, ft)) {
            l.ttl = y(this, Ge)[r];
            let u = xr.now() - y(this, ft)[r];
            l.start = Math.floor(Date.now() - u);
          }
          y(this, ht) && (l.size = y(this, ht)[r]), e.unshift([s, l]);
        }
        return e;
      }
      load(e) {
        this.clear();
        for (let [r, s] of e) {
          if (s.start) {
            let a = Date.now() - s.start;
            s.start = xr.now() - a;
          }
          this.set(r, s.value, s);
        }
      }
      set(e, r, s = {}) {
        var _, E, w, A, S;
        if (r === void 0) return this.delete(e), this;
        let {
            ttl: a = this.ttl,
            start: c,
            noDisposeOnSet: l = this.noDisposeOnSet,
            sizeCalculation: u = this.sizeCalculation,
            status: f,
          } = s,
          { noUpdateTTL: p = this.noUpdateTTL } = s,
          b = y(this, ui).call(this, e, r, s.size || 0, u);
        if (this.maxEntrySize && b > this.maxEntrySize)
          return (
            f && ((f.set = "miss"), (f.maxEntrySizeExceeded = !0)),
            this.delete(e),
            this
          );
        let v = y(this, ke) === 0 ? void 0 : y(this, Te).get(e);
        if (v === void 0)
          (v =
            y(this, ke) === 0
              ? y(this, Oe)
              : y(this, lt).length !== 0
              ? y(this, lt).pop()
              : y(this, ke) === y(this, at)
              ? H(this, D, vi).call(this, !1)
              : y(this, ke)),
            (y(this, ye)[v] = e),
            (y(this, re)[v] = r),
            y(this, Te).set(e, v),
            (y(this, Ue)[y(this, Oe)] = v),
            (y(this, We)[v] = y(this, Oe)),
            Y(this, Oe, v),
            pi(this, ke)._++,
            y(this, Mr).call(this, v, b, f),
            f && (f.set = "add"),
            (p = !1);
        else {
          H(this, D, gn).call(this, v);
          let x = y(this, re)[v];
          if (r !== x) {
            if (y(this, nr) && H(this, D, me).call(this, x)) {
              x.__abortController.abort(new Error("replaced"));
              let { __staleWhileFetching: C } = x;
              C !== void 0 &&
                !l &&
                (y(this, dt) &&
                  ((_ = y(this, ot)) == null || _.call(this, C, e, "set")),
                y(this, Me) &&
                  ((E = y(this, Re)) == null || E.push([C, e, "set"])));
            } else
              l ||
                (y(this, dt) &&
                  ((w = y(this, ot)) == null || w.call(this, x, e, "set")),
                y(this, Me) &&
                  ((A = y(this, Re)) == null || A.push([x, e, "set"])));
            if (
              (y(this, pr).call(this, v),
              y(this, Mr).call(this, v, b, f),
              (y(this, re)[v] = r),
              f)
            ) {
              f.set = "replace";
              let C =
                x && H(this, D, me).call(this, x) ? x.__staleWhileFetching : x;
              C !== void 0 && (f.oldValue = C);
            }
          } else f && (f.set = "update");
        }
        if (
          (a !== 0 && !y(this, Ge) && H(this, D, Es).call(this),
          y(this, Ge) &&
            (p || y(this, oi).call(this, v, a, c),
            f && y(this, Bt).call(this, f, v)),
          !l && y(this, Me) && y(this, Re))
        ) {
          let x = y(this, Re),
            C;
          for (; (C = x == null ? void 0 : x.shift()); )
            (S = y(this, ut)) == null || S.call(this, ...C);
        }
        return this;
      }
      pop() {
        var e;
        try {
          for (; y(this, ke); ) {
            let r = y(this, re)[y(this, Ce)];
            if ((H(this, D, vi).call(this, !0), H(this, D, me).call(this, r))) {
              if (r.__staleWhileFetching) return r.__staleWhileFetching;
            } else if (r !== void 0) return r;
          }
        } finally {
          if (y(this, Me) && y(this, Re)) {
            let r = y(this, Re),
              s;
            for (; (s = r == null ? void 0 : r.shift()); )
              (e = y(this, ut)) == null || e.call(this, ...s);
          }
        }
      }
      has(e, r = {}) {
        let { updateAgeOnHas: s = this.updateAgeOnHas, status: a } = r,
          c = y(this, Te).get(e);
        if (c !== void 0) {
          let l = y(this, re)[c];
          if (H(this, D, me).call(this, l) && l.__staleWhileFetching === void 0)
            return !1;
          if (y(this, qe).call(this, c))
            a && ((a.has = "stale"), y(this, Bt).call(this, a, c));
          else
            return (
              s && y(this, dr).call(this, c),
              a && ((a.has = "hit"), y(this, Bt).call(this, a, c)),
              !0
            );
        } else a && (a.has = "miss");
        return !1;
      }
      peek(e, r = {}) {
        let { allowStale: s = this.allowStale } = r,
          a = y(this, Te).get(e);
        if (a === void 0 || (!s && y(this, qe).call(this, a))) return;
        let c = y(this, re)[a];
        return H(this, D, me).call(this, c) ? c.__staleWhileFetching : c;
      }
      async fetch(e, r = {}) {
        let {
          allowStale: s = this.allowStale,
          updateAgeOnGet: a = this.updateAgeOnGet,
          noDeleteOnStaleGet: c = this.noDeleteOnStaleGet,
          ttl: l = this.ttl,
          noDisposeOnSet: u = this.noDisposeOnSet,
          size: f = 0,
          sizeCalculation: p = this.sizeCalculation,
          noUpdateTTL: b = this.noUpdateTTL,
          noDeleteOnFetchRejection: v = this.noDeleteOnFetchRejection,
          allowStaleOnFetchRejection: _ = this.allowStaleOnFetchRejection,
          ignoreFetchAbort: E = this.ignoreFetchAbort,
          allowStaleOnFetchAbort: w = this.allowStaleOnFetchAbort,
          context: A,
          forceRefresh: S = !1,
          status: x,
          signal: C,
        } = r;
        if (!y(this, nr))
          return (
            x && (x.fetch = "get"),
            this.get(e, {
              allowStale: s,
              updateAgeOnGet: a,
              noDeleteOnStaleGet: c,
              status: x,
            })
          );
        let B = {
            allowStale: s,
            updateAgeOnGet: a,
            noDeleteOnStaleGet: c,
            ttl: l,
            noDisposeOnSet: u,
            size: f,
            sizeCalculation: p,
            noUpdateTTL: b,
            noDeleteOnFetchRejection: v,
            allowStaleOnFetchRejection: _,
            allowStaleOnFetchAbort: w,
            ignoreFetchAbort: E,
            status: x,
            signal: C,
          },
          L = y(this, Te).get(e);
        if (L === void 0) {
          x && (x.fetch = "miss");
          let z = H(this, D, wi).call(this, e, L, B, A);
          return (z.__returned = z);
        } else {
          let z = y(this, re)[L];
          if (H(this, D, me).call(this, z)) {
            let Ye = s && z.__staleWhileFetching !== void 0;
            return (
              x && ((x.fetch = "inflight"), Ye && (x.returnedStale = !0)),
              Ye ? z.__staleWhileFetching : (z.__returned = z)
            );
          }
          let V = y(this, qe).call(this, L);
          if (!S && !V)
            return (
              x && (x.fetch = "hit"),
              H(this, D, gn).call(this, L),
              a && y(this, dr).call(this, L),
              x && y(this, Bt).call(this, x, L),
              z
            );
          let _e = H(this, D, wi).call(this, e, L, B, A),
            et = _e.__staleWhileFetching !== void 0 && s;
          return (
            x &&
              ((x.fetch = V ? "stale" : "refresh"),
              et && V && (x.returnedStale = !0)),
            et ? _e.__staleWhileFetching : (_e.__returned = _e)
          );
        }
      }
      get(e, r = {}) {
        let {
            allowStale: s = this.allowStale,
            updateAgeOnGet: a = this.updateAgeOnGet,
            noDeleteOnStaleGet: c = this.noDeleteOnStaleGet,
            status: l,
          } = r,
          u = y(this, Te).get(e);
        if (u !== void 0) {
          let f = y(this, re)[u],
            p = H(this, D, me).call(this, f);
          return (
            l && y(this, Bt).call(this, l, u),
            y(this, qe).call(this, u)
              ? (l && (l.get = "stale"),
                p
                  ? (l &&
                      s &&
                      f.__staleWhileFetching !== void 0 &&
                      (l.returnedStale = !0),
                    s ? f.__staleWhileFetching : void 0)
                  : (c || this.delete(e),
                    l && s && (l.returnedStale = !0),
                    s ? f : void 0))
              : (l && (l.get = "hit"),
                p
                  ? f.__staleWhileFetching
                  : (H(this, D, gn).call(this, u),
                    a && y(this, dr).call(this, u),
                    f))
          );
        } else l && (l.get = "miss");
      }
      delete(e) {
        var s, a, c, l;
        let r = !1;
        if (y(this, ke) !== 0) {
          let u = y(this, Te).get(e);
          if (u !== void 0)
            if (((r = !0), y(this, ke) === 1)) this.clear();
            else {
              y(this, pr).call(this, u);
              let f = y(this, re)[u];
              if (
                (H(this, D, me).call(this, f)
                  ? f.__abortController.abort(new Error("deleted"))
                  : (y(this, dt) || y(this, Me)) &&
                    (y(this, dt) &&
                      ((s = y(this, ot)) == null ||
                        s.call(this, f, e, "delete")),
                    y(this, Me) &&
                      ((a = y(this, Re)) == null || a.push([f, e, "delete"]))),
                y(this, Te).delete(e),
                (y(this, ye)[u] = void 0),
                (y(this, re)[u] = void 0),
                u === y(this, Oe))
              )
                Y(this, Oe, y(this, We)[u]);
              else if (u === y(this, Ce)) Y(this, Ce, y(this, Ue)[u]);
              else {
                let p = y(this, We)[u];
                y(this, Ue)[p] = y(this, Ue)[u];
                let b = y(this, Ue)[u];
                y(this, We)[b] = y(this, We)[u];
              }
              pi(this, ke)._--, y(this, lt).push(u);
            }
        }
        if (y(this, Me) && (c = y(this, Re)) != null && c.length) {
          let u = y(this, Re),
            f;
          for (; (f = u == null ? void 0 : u.shift()); )
            (l = y(this, ut)) == null || l.call(this, ...f);
        }
        return r;
      }
      clear() {
        var e, r, s;
        for (let a of H(this, D, Jt).call(this, { allowStale: !0 })) {
          let c = y(this, re)[a];
          if (H(this, D, me).call(this, c))
            c.__abortController.abort(new Error("deleted"));
          else {
            let l = y(this, ye)[a];
            y(this, dt) &&
              ((e = y(this, ot)) == null || e.call(this, c, l, "delete")),
              y(this, Me) &&
                ((r = y(this, Re)) == null || r.push([c, l, "delete"]));
          }
        }
        if (
          (y(this, Te).clear(),
          y(this, re).fill(void 0),
          y(this, ye).fill(void 0),
          y(this, Ge) &&
            y(this, ft) &&
            (y(this, Ge).fill(0), y(this, ft).fill(0)),
          y(this, ht) && y(this, ht).fill(0),
          Y(this, Ce, 0),
          Y(this, Oe, 0),
          (y(this, lt).length = 0),
          Y(this, ct, 0),
          Y(this, ke, 0),
          y(this, Me) && y(this, Re))
        ) {
          let a = y(this, Re),
            c;
          for (; (c = a == null ? void 0 : a.shift()); )
            (s = y(this, ut)) == null || s.call(this, ...c);
        }
      }
    }),
    (at = new WeakMap()),
    (Ve = new WeakMap()),
    (ot = new WeakMap()),
    (ut = new WeakMap()),
    (Ur = new WeakMap()),
    (ke = new WeakMap()),
    (ct = new WeakMap()),
    (Te = new WeakMap()),
    (ye = new WeakMap()),
    (re = new WeakMap()),
    (Ue = new WeakMap()),
    (We = new WeakMap()),
    (Ce = new WeakMap()),
    (Oe = new WeakMap()),
    (lt = new WeakMap()),
    (Re = new WeakMap()),
    (ht = new WeakMap()),
    (ft = new WeakMap()),
    (Ge = new WeakMap()),
    (dt = new WeakMap()),
    (nr = new WeakMap()),
    (Me = new WeakMap()),
    (D = new WeakSet()),
    (Es = function () {
      let e = new yi(y(this, at)),
        r = new yi(y(this, at));
      Y(this, Ge, e),
        Y(this, ft, r),
        Y(this, oi, (c, l, u = xr.now()) => {
          if (
            ((r[c] = l !== 0 ? u : 0), (e[c] = l), l !== 0 && this.ttlAutopurge)
          ) {
            let f = setTimeout(() => {
              y(this, qe).call(this, c) && this.delete(y(this, ye)[c]);
            }, l + 1);
            f.unref && f.unref();
          }
        }),
        Y(this, dr, (c) => {
          r[c] = e[c] !== 0 ? xr.now() : 0;
        }),
        Y(this, Bt, (c, l) => {
          if (e[l]) {
            let u = e[l],
              f = r[l];
            if (!u || !f) return;
            (c.ttl = u), (c.start = f), (c.now = s || a());
            let p = c.now - f;
            c.remainingTTL = u - p;
          }
        });
      let s = 0,
        a = () => {
          let c = xr.now();
          if (this.ttlResolution > 0) {
            s = c;
            let l = setTimeout(() => (s = 0), this.ttlResolution);
            l.unref && l.unref();
          }
          return c;
        };
      (this.getRemainingTTL = (c) => {
        let l = y(this, Te).get(c);
        if (l === void 0) return 0;
        let u = e[l],
          f = r[l];
        if (!u || !f) return 1 / 0;
        let p = (s || a()) - f;
        return u - p;
      }),
        Y(this, qe, (c) => {
          let l = r[c],
            u = e[c];
          return !!u && !!l && (s || a()) - l > u;
        });
    }),
    (dr = new WeakMap()),
    (Bt = new WeakMap()),
    (oi = new WeakMap()),
    (qe = new WeakMap()),
    (Mo = function () {
      let e = new yi(y(this, at));
      Y(this, ct, 0),
        Y(this, ht, e),
        Y(this, pr, (r) => {
          Y(this, ct, y(this, ct) - e[r]), (e[r] = 0);
        }),
        Y(this, ui, (r, s, a, c) => {
          if (H(this, D, me).call(this, s)) return 0;
          if (!Qt(a))
            if (c) {
              if (typeof c != "function")
                throw new TypeError("sizeCalculation must be a function");
              if (((a = c(s, r)), !Qt(a)))
                throw new TypeError(
                  "sizeCalculation return invalid (expect positive integer)"
                );
            } else
              throw new TypeError(
                "invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set."
              );
          return a;
        }),
        Y(this, Mr, (r, s, a) => {
          if (((e[r] = s), y(this, Ve))) {
            let c = y(this, Ve) - e[r];
            for (; y(this, ct) > c; ) H(this, D, vi).call(this, !0);
          }
          Y(this, ct, y(this, ct) + e[r]),
            a && ((a.entrySize = s), (a.totalCalculatedSize = y(this, ct)));
        });
    }),
    (pr = new WeakMap()),
    (Mr = new WeakMap()),
    (ui = new WeakMap()),
    (Xt = function* ({ allowStale: e = this.allowStale } = {}) {
      if (y(this, ke))
        for (
          let r = y(this, Oe);
          !(
            !H(this, D, As).call(this, r) ||
            ((e || !y(this, qe).call(this, r)) && (yield r), r === y(this, Ce))
          );

        )
          r = y(this, We)[r];
    }),
    (Jt = function* ({ allowStale: e = this.allowStale } = {}) {
      if (y(this, ke))
        for (
          let r = y(this, Ce);
          !(
            !H(this, D, As).call(this, r) ||
            ((e || !y(this, qe).call(this, r)) && (yield r), r === y(this, Oe))
          );

        )
          r = y(this, Ue)[r];
    }),
    (As = function (e) {
      return e !== void 0 && y(this, Te).get(y(this, ye)[e]) === e;
    }),
    (vi = function (e) {
      var c, l;
      let r = y(this, Ce),
        s = y(this, ye)[r],
        a = y(this, re)[r];
      return (
        y(this, nr) && H(this, D, me).call(this, a)
          ? a.__abortController.abort(new Error("evicted"))
          : (y(this, dt) || y(this, Me)) &&
            (y(this, dt) &&
              ((c = y(this, ot)) == null || c.call(this, a, s, "evict")),
            y(this, Me) &&
              ((l = y(this, Re)) == null || l.push([a, s, "evict"]))),
        y(this, pr).call(this, r),
        e &&
          ((y(this, ye)[r] = void 0),
          (y(this, re)[r] = void 0),
          y(this, lt).push(r)),
        y(this, ke) === 1
          ? (Y(this, Ce, Y(this, Oe, 0)), (y(this, lt).length = 0))
          : Y(this, Ce, y(this, Ue)[r]),
        y(this, Te).delete(s),
        pi(this, ke)._--,
        r
      );
    }),
    (wi = function (e, r, s, a) {
      let c = r === void 0 ? void 0 : y(this, re)[r];
      if (H(this, D, me).call(this, c)) return c;
      let l = new ki(),
        { signal: u } = s;
      u == null ||
        u.addEventListener("abort", () => l.abort(u.reason), {
          signal: l.signal,
        });
      let f = { signal: l.signal, options: s, context: a },
        p = (A, S = !1) => {
          let { aborted: x } = l.signal,
            C = s.ignoreFetchAbort && A !== void 0;
          if (
            (s.status &&
              (x && !S
                ? ((s.status.fetchAborted = !0),
                  (s.status.fetchError = l.signal.reason),
                  C && (s.status.fetchAbortIgnored = !0))
                : (s.status.fetchResolved = !0)),
            x && !C && !S)
          )
            return v(l.signal.reason);
          let B = E;
          return (
            y(this, re)[r] === E &&
              (A === void 0
                ? B.__staleWhileFetching
                  ? (y(this, re)[r] = B.__staleWhileFetching)
                  : this.delete(e)
                : (s.status && (s.status.fetchUpdated = !0),
                  this.set(e, A, f.options))),
            A
          );
        },
        b = (A) => (
          s.status &&
            ((s.status.fetchRejected = !0), (s.status.fetchError = A)),
          v(A)
        ),
        v = (A) => {
          let { aborted: S } = l.signal,
            x = S && s.allowStaleOnFetchAbort,
            C = x || s.allowStaleOnFetchRejection,
            B = C || s.noDeleteOnFetchRejection,
            L = E;
          if (
            (y(this, re)[r] === E &&
              (!B || L.__staleWhileFetching === void 0
                ? this.delete(e)
                : x || (y(this, re)[r] = L.__staleWhileFetching)),
            C)
          )
            return (
              s.status &&
                L.__staleWhileFetching !== void 0 &&
                (s.status.returnedStale = !0),
              L.__staleWhileFetching
            );
          if (L.__returned === L) throw A;
        },
        _ = (A, S) => {
          var C;
          let x = (C = y(this, Ur)) == null ? void 0 : C.call(this, e, c, f);
          x &&
            x instanceof Promise &&
            x.then((B) => A(B === void 0 ? void 0 : B), S),
            l.signal.addEventListener("abort", () => {
              (!s.ignoreFetchAbort || s.allowStaleOnFetchAbort) &&
                (A(void 0), s.allowStaleOnFetchAbort && (A = (B) => p(B, !0)));
            });
        };
      s.status && (s.status.fetchDispatched = !0);
      let E = new Promise(_).then(p, b),
        w = Object.assign(E, {
          __abortController: l,
          __staleWhileFetching: c,
          __returned: void 0,
        });
      return (
        r === void 0
          ? (this.set(e, w, { ...f.options, status: void 0 }),
            (r = y(this, Te).get(e)))
          : (y(this, re)[r] = w),
        w
      );
    }),
    (me = function (e) {
      if (!y(this, nr)) return !1;
      let r = e;
      return (
        !!r &&
        r instanceof Promise &&
        r.hasOwnProperty("__staleWhileFetching") &&
        r.__abortController instanceof ki
      );
    }),
    (Ss = function (e, r) {
      (y(this, We)[r] = e), (y(this, Ue)[e] = r);
    }),
    (gn = function (e) {
      e !== y(this, Oe) &&
        (e === y(this, Ce)
          ? Y(this, Ce, y(this, Ue)[e])
          : H(this, D, Ss).call(this, y(this, We)[e], y(this, Ue)[e]),
        H(this, D, Ss).call(this, y(this, Oe), e),
        Y(this, Oe, e));
    }),
    Nr);
function yh({ size: t }) {
  return new mh({
    max: t,
    maxSize: 5e6,
    sizeCalculation: (e) => JSON.stringify(e).length,
    allowStale: !0,
  });
}
function vh({ cache: t }) {
  return async (e) => {
    if (t.max) return t.get(e);
  };
}
function wh({ cache: t }) {
  return async (e, { url: r, address: s }, a) => {
    if (t.max) return t.set(e, { url: r, address: s }, { ttl: a });
  };
}
function bh({ cache: t }) {
  return async (e) => {
    if (t.max) return t.get(e);
  };
}
function _h({ cache: t }) {
  return async (e, r, s) => {
    if (t.max) return t.set(e, { url: r, address: e, ttl: s }, { ttl: s });
  };
}
function Eh({ fetch: t }) {
  return async (e, r) => {
    let s = await t(`${e}?process-id=${r}`, {
      method: "GET",
      redirect: "manual",
    });
    return [301, 302, 307, 308].includes(s.status)
      ? new URL(s.headers.get("Location")).origin
      : e;
  };
}
var ue;
(function (t) {
  t.assertEqual = (a) => a;
  function e(a) {}
  t.assertIs = e;
  function r(a) {
    throw new Error();
  }
  (t.assertNever = r),
    (t.arrayToEnum = (a) => {
      let c = {};
      for (let l of a) c[l] = l;
      return c;
    }),
    (t.getValidEnumValues = (a) => {
      let c = t.objectKeys(a).filter((u) => typeof a[a[u]] != "number"),
        l = {};
      for (let u of c) l[u] = a[u];
      return t.objectValues(l);
    }),
    (t.objectValues = (a) =>
      t.objectKeys(a).map(function (c) {
        return a[c];
      })),
    (t.objectKeys =
      typeof Object.keys == "function"
        ? (a) => Object.keys(a)
        : (a) => {
            let c = [];
            for (let l in a)
              Object.prototype.hasOwnProperty.call(a, l) && c.push(l);
            return c;
          }),
    (t.find = (a, c) => {
      for (let l of a) if (c(l)) return l;
    }),
    (t.isInteger =
      typeof Number.isInteger == "function"
        ? (a) => Number.isInteger(a)
        : (a) => typeof a == "number" && isFinite(a) && Math.floor(a) === a);
  function s(a, c = " | ") {
    return a.map((l) => (typeof l == "string" ? `'${l}'` : l)).join(c);
  }
  (t.joinValues = s),
    (t.jsonStringifyReplacer = (a, c) =>
      typeof c == "bigint" ? c.toString() : c);
})(ue || (ue = {}));
var Ts;
(function (t) {
  t.mergeShapes = (e, r) => ({ ...e, ...r });
})(Ts || (Ts = {}));
var Z = ue.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  tr = (t) => {
    switch (typeof t) {
      case "undefined":
        return Z.undefined;
      case "string":
        return Z.string;
      case "number":
        return isNaN(t) ? Z.nan : Z.number;
      case "boolean":
        return Z.boolean;
      case "function":
        return Z.function;
      case "bigint":
        return Z.bigint;
      case "symbol":
        return Z.symbol;
      case "object":
        return Array.isArray(t)
          ? Z.array
          : t === null
          ? Z.null
          : t.then &&
            typeof t.then == "function" &&
            t.catch &&
            typeof t.catch == "function"
          ? Z.promise
          : typeof Map < "u" && t instanceof Map
          ? Z.map
          : typeof Set < "u" && t instanceof Set
          ? Z.set
          : typeof Date < "u" && t instanceof Date
          ? Z.date
          : Z.object;
      default:
        return Z.unknown;
    }
  },
  R = ue.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  Ah = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:"),
  mt = class No extends Error {
    constructor(e) {
      super(),
        (this.issues = []),
        (this.addIssue = (s) => {
          this.issues = [...this.issues, s];
        }),
        (this.addIssues = (s = []) => {
          this.issues = [...this.issues, ...s];
        });
      let r = new.target.prototype;
      Object.setPrototypeOf
        ? Object.setPrototypeOf(this, r)
        : (this.__proto__ = r),
        (this.name = "ZodError"),
        (this.issues = e);
    }
    get errors() {
      return this.issues;
    }
    format(e) {
      let r =
          e ||
          function (c) {
            return c.message;
          },
        s = { _errors: [] },
        a = (c) => {
          for (let l of c.issues)
            if (l.code === "invalid_union") l.unionErrors.map(a);
            else if (l.code === "invalid_return_type") a(l.returnTypeError);
            else if (l.code === "invalid_arguments") a(l.argumentsError);
            else if (l.path.length === 0) s._errors.push(r(l));
            else {
              let u = s,
                f = 0;
              for (; f < l.path.length; ) {
                let p = l.path[f];
                f === l.path.length - 1
                  ? ((u[p] = u[p] || { _errors: [] }), u[p]._errors.push(r(l)))
                  : (u[p] = u[p] || { _errors: [] }),
                  (u = u[p]),
                  f++;
              }
            }
        };
      return a(this), s;
    }
    static assert(e) {
      if (!(e instanceof No)) throw new Error(`Not a ZodError: ${e}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, ue.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (r) => r.message) {
      let r = {},
        s = [];
      for (let a of this.issues)
        a.path.length > 0
          ? ((r[a.path[0]] = r[a.path[0]] || []), r[a.path[0]].push(e(a)))
          : s.push(e(a));
      return { formErrors: s, fieldErrors: r };
    }
    get formErrors() {
      return this.flatten();
    }
  };
mt.create = (t) => new mt(t);
var jr = (t, e) => {
    let r;
    switch (t.code) {
      case R.invalid_type:
        t.received === Z.undefined
          ? (r = "Required")
          : (r = `Expected ${t.expected}, received ${t.received}`);
        break;
      case R.invalid_literal:
        r = `Invalid literal value, expected ${JSON.stringify(
          t.expected,
          ue.jsonStringifyReplacer
        )}`;
        break;
      case R.unrecognized_keys:
        r = `Unrecognized key(s) in object: ${ue.joinValues(t.keys, ", ")}`;
        break;
      case R.invalid_union:
        r = "Invalid input";
        break;
      case R.invalid_union_discriminator:
        r = `Invalid discriminator value. Expected ${ue.joinValues(t.options)}`;
        break;
      case R.invalid_enum_value:
        r = `Invalid enum value. Expected ${ue.joinValues(
          t.options
        )}, received '${t.received}'`;
        break;
      case R.invalid_arguments:
        r = "Invalid function arguments";
        break;
      case R.invalid_return_type:
        r = "Invalid function return type";
        break;
      case R.invalid_date:
        r = "Invalid date";
        break;
      case R.invalid_string:
        typeof t.validation == "object"
          ? "includes" in t.validation
            ? ((r = `Invalid input: must include "${t.validation.includes}"`),
              typeof t.validation.position == "number" &&
                (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`))
            : "startsWith" in t.validation
            ? (r = `Invalid input: must start with "${t.validation.startsWith}"`)
            : "endsWith" in t.validation
            ? (r = `Invalid input: must end with "${t.validation.endsWith}"`)
            : ue.assertNever(t.validation)
          : t.validation !== "regex"
          ? (r = `Invalid ${t.validation}`)
          : (r = "Invalid");
        break;
      case R.too_small:
        t.type === "array"
          ? (r = `Array must contain ${
              t.exact ? "exactly" : t.inclusive ? "at least" : "more than"
            } ${t.minimum} element(s)`)
          : t.type === "string"
          ? (r = `String must contain ${
              t.exact ? "exactly" : t.inclusive ? "at least" : "over"
            } ${t.minimum} character(s)`)
          : t.type === "number"
          ? (r = `Number must be ${
              t.exact
                ? "exactly equal to "
                : t.inclusive
                ? "greater than or equal to "
                : "greater than "
            }${t.minimum}`)
          : t.type === "date"
          ? (r = `Date must be ${
              t.exact
                ? "exactly equal to "
                : t.inclusive
                ? "greater than or equal to "
                : "greater than "
            }${new Date(Number(t.minimum))}`)
          : (r = "Invalid input");
        break;
      case R.too_big:
        t.type === "array"
          ? (r = `Array must contain ${
              t.exact ? "exactly" : t.inclusive ? "at most" : "less than"
            } ${t.maximum} element(s)`)
          : t.type === "string"
          ? (r = `String must contain ${
              t.exact ? "exactly" : t.inclusive ? "at most" : "under"
            } ${t.maximum} character(s)`)
          : t.type === "number"
          ? (r = `Number must be ${
              t.exact
                ? "exactly"
                : t.inclusive
                ? "less than or equal to"
                : "less than"
            } ${t.maximum}`)
          : t.type === "bigint"
          ? (r = `BigInt must be ${
              t.exact
                ? "exactly"
                : t.inclusive
                ? "less than or equal to"
                : "less than"
            } ${t.maximum}`)
          : t.type === "date"
          ? (r = `Date must be ${
              t.exact
                ? "exactly"
                : t.inclusive
                ? "smaller than or equal to"
                : "smaller than"
            } ${new Date(Number(t.maximum))}`)
          : (r = "Invalid input");
        break;
      case R.custom:
        r = "Invalid input";
        break;
      case R.invalid_intersection_types:
        r = "Intersection results could not be merged";
        break;
      case R.not_multiple_of:
        r = `Number must be a multiple of ${t.multipleOf}`;
        break;
      case R.not_finite:
        r = "Number must be finite";
        break;
      default:
        (r = e.defaultError), ue.assertNever(t);
    }
    return { message: r };
  },
  Po = jr;
function Sh(t) {
  Po = t;
}
function Bi() {
  return Po;
}
var Oi = (t) => {
    let { data: e, path: r, errorMaps: s, issueData: a } = t,
      c = [...r, ...(a.path || [])],
      l = { ...a, path: c };
    if (a.message !== void 0) return { ...a, path: c, message: a.message };
    let u = "",
      f = s
        .filter((p) => !!p)
        .slice()
        .reverse();
    for (let p of f) u = p(l, { data: e, defaultError: u }).message;
    return { ...a, path: c, message: u };
  },
  Th = [];
function N(t, e) {
  let r = Bi(),
    s = Oi({
      issueData: e,
      data: t.data,
      path: t.path,
      errorMaps: [
        t.common.contextualErrorMap,
        t.schemaErrorMap,
        r,
        r === jr ? void 0 : jr,
      ].filter((a) => !!a),
    });
  t.common.issues.push(s);
}
var De = class jo {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      this.value === "valid" && (this.value = "dirty");
    }
    abort() {
      this.value !== "aborted" && (this.value = "aborted");
    }
    static mergeArray(e, r) {
      let s = [];
      for (let a of r) {
        if (a.status === "aborted") return ee;
        a.status === "dirty" && e.dirty(), s.push(a.value);
      }
      return { status: e.value, value: s };
    }
    static async mergeObjectAsync(e, r) {
      let s = [];
      for (let a of r) {
        let c = await a.key,
          l = await a.value;
        s.push({ key: c, value: l });
      }
      return jo.mergeObjectSync(e, s);
    }
    static mergeObjectSync(e, r) {
      let s = {};
      for (let a of r) {
        let { key: c, value: l } = a;
        if (c.status === "aborted" || l.status === "aborted") return ee;
        c.status === "dirty" && e.dirty(),
          l.status === "dirty" && e.dirty(),
          c.value !== "__proto__" &&
            (typeof l.value < "u" || a.alwaysSet) &&
            (s[c.value] = l.value);
      }
      return { status: e.value, value: s };
    }
  },
  ee = Object.freeze({ status: "aborted" }),
  Ri = (t) => ({ status: "dirty", value: t }),
  Pe = (t) => ({ status: "valid", value: t }),
  xs = (t) => t.status === "aborted",
  ks = (t) => t.status === "dirty",
  kn = (t) => t.status === "valid",
  Ii = (t) => typeof Promise < "u" && t instanceof Promise;
function Ci(t, e, r, s) {
  if (typeof e == "function" ? t !== e || !s : !e.has(t))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return e.get(t);
}
function Fo(t, e, r, s, a) {
  if (typeof e == "function" ? t !== e || !a : !e.has(t))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it"
    );
  return e.set(t, r), r;
}
var G;
(function (t) {
  (t.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
    (t.toString = (e) =>
      typeof e == "string" ? e : e == null ? void 0 : e.message);
})(G || (G = {}));
var mn,
  yn,
  St = class {
    constructor(e, r, s, a) {
      (this._cachedPath = []),
        (this.parent = e),
        (this.data = r),
        (this._path = s),
        (this._key = a);
    }
    get path() {
      return (
        this._cachedPath.length ||
          (this._key instanceof Array
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  },
  Wa = (t, e) => {
    if (kn(e)) return { success: !0, data: e.value };
    if (!t.common.issues.length)
      throw new Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let r = new mt(t.common.issues);
        return (this._error = r), this._error;
      },
    };
  };
function ne(t) {
  if (!t) return {};
  let {
    errorMap: e,
    invalid_type_error: r,
    required_error: s,
    description: a,
  } = t;
  if (e && (r || s))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return e
    ? { errorMap: e, description: a }
    : {
        errorMap: (c, l) => {
          var u, f;
          let { message: p } = t;
          return c.code === "invalid_enum_value"
            ? { message: p ?? l.defaultError }
            : typeof l.data > "u"
            ? {
                message:
                  (u = p ?? s) !== null && u !== void 0 ? u : l.defaultError,
              }
            : c.code !== "invalid_type"
            ? { message: l.defaultError }
            : {
                message:
                  (f = p ?? r) !== null && f !== void 0 ? f : l.defaultError,
              };
        },
        description: a,
      };
}
var se = class {
    constructor(e) {
      (this.spa = this.safeParseAsync),
        (this._def = e),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this));
    }
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return tr(e.data);
    }
    _getOrReturnCtx(e, r) {
      return (
        r || {
          common: e.parent.common,
          data: e.data,
          parsedType: tr(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        }
      );
    }
    _processInputParams(e) {
      return {
        status: new De(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: tr(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        },
      };
    }
    _parseSync(e) {
      let r = this._parse(e);
      if (Ii(r)) throw new Error("Synchronous parse encountered promise.");
      return r;
    }
    _parseAsync(e) {
      let r = this._parse(e);
      return Promise.resolve(r);
    }
    parse(e, r) {
      let s = this.safeParse(e, r);
      if (s.success) return s.data;
      throw s.error;
    }
    safeParse(e, r) {
      var s;
      let a = {
          common: {
            issues: [],
            async:
              (s = r == null ? void 0 : r.async) !== null && s !== void 0
                ? s
                : !1,
            contextualErrorMap: r == null ? void 0 : r.errorMap,
          },
          path: (r == null ? void 0 : r.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: tr(e),
        },
        c = this._parseSync({ data: e, path: a.path, parent: a });
      return Wa(a, c);
    }
    async parseAsync(e, r) {
      let s = await this.safeParseAsync(e, r);
      if (s.success) return s.data;
      throw s.error;
    }
    async safeParseAsync(e, r) {
      let s = {
          common: {
            issues: [],
            contextualErrorMap: r == null ? void 0 : r.errorMap,
            async: !0,
          },
          path: (r == null ? void 0 : r.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: tr(e),
        },
        a = this._parse({ data: e, path: s.path, parent: s }),
        c = await (Ii(a) ? a : Promise.resolve(a));
      return Wa(s, c);
    }
    refine(e, r) {
      let s = (a) =>
        typeof r == "string" || typeof r > "u"
          ? { message: r }
          : typeof r == "function"
          ? r(a)
          : r;
      return this._refinement((a, c) => {
        let l = e(a),
          u = () => c.addIssue({ code: R.custom, ...s(a) });
        return typeof Promise < "u" && l instanceof Promise
          ? l.then((f) => (f ? !0 : (u(), !1)))
          : l
          ? !0
          : (u(), !1);
      });
    }
    refinement(e, r) {
      return this._refinement((s, a) =>
        e(s) ? !0 : (a.addIssue(typeof r == "function" ? r(s, a) : r), !1)
      );
    }
    _refinement(e) {
      return new yt({
        schema: this,
        typeName: Q.ZodEffects,
        effect: { type: "refinement", refinement: e },
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    optional() {
      return Et.create(this, this._def);
    }
    nullable() {
      return sr.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return yr.create(this, this._def);
    }
    promise() {
      return $r.create(this, this._def);
    }
    or(e) {
      return Un.create([this, e], this._def);
    }
    and(e) {
      return Mn.create(this, e, this._def);
    }
    transform(e) {
      return new yt({
        ...ne(this._def),
        schema: this,
        typeName: Q.ZodEffects,
        effect: { type: "transform", transform: e },
      });
    }
    default(e) {
      let r = typeof e == "function" ? e : () => e;
      return new Fn({
        ...ne(this._def),
        innerType: this,
        defaultValue: r,
        typeName: Q.ZodDefault,
      });
    }
    brand() {
      return new aa({ typeName: Q.ZodBranded, type: this, ...ne(this._def) });
    }
    catch(e) {
      let r = typeof e == "function" ? e : () => e;
      return new Zn({
        ...ne(this._def),
        innerType: this,
        catchValue: r,
        typeName: Q.ZodCatch,
      });
    }
    describe(e) {
      let r = this.constructor;
      return new r({ ...this._def, description: e });
    }
    pipe(e) {
      return oa.create(this, e);
    }
    readonly() {
      return $n.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  xh = /^c[^\s-]{8,}$/i,
  kh = /^[0-9a-z]+$/,
  Bh = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  Oh =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Rh = /^[a-z0-9_-]{21}$/i,
  Ih =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Ch =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Lh = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
  hs,
  Uh =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Mh =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  Nh = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  Zo =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  Ph = new RegExp(`^${Zo}$`);
function $o(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    t.precision
      ? (e = `${e}\\.\\d{${t.precision}}`)
      : t.precision == null && (e = `${e}(\\.\\d+)?`),
    e
  );
}
function jh(t) {
  return new RegExp(`^${$o(t)}$`);
}
function Do(t) {
  let e = `${Zo}T${$o(t)}`,
    r = [];
  return (
    r.push(t.local ? "Z?" : "Z"),
    t.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (e = `${e}(${r.join("|")})`),
    new RegExp(`^${e}$`)
  );
}
function Fh(t, e) {
  return !!(
    ((e === "v4" || !e) && Uh.test(t)) ||
    ((e === "v6" || !e) && Mh.test(t))
  );
}
var Fr = class vn extends se {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== Z.string)
    ) {
      let a = this._getOrReturnCtx(e);
      return (
        N(a, {
          code: R.invalid_type,
          expected: Z.string,
          received: a.parsedType,
        }),
        ee
      );
    }
    let r = new De(),
      s;
    for (let a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value &&
          ((s = this._getOrReturnCtx(e, s)),
          N(s, {
            code: R.too_small,
            minimum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message,
          }),
          r.dirty());
      else if (a.kind === "max")
        e.data.length > a.value &&
          ((s = this._getOrReturnCtx(e, s)),
          N(s, {
            code: R.too_big,
            maximum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message,
          }),
          r.dirty());
      else if (a.kind === "length") {
        let c = e.data.length > a.value,
          l = e.data.length < a.value;
        (c || l) &&
          ((s = this._getOrReturnCtx(e, s)),
          c
            ? N(s, {
                code: R.too_big,
                maximum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message,
              })
            : l &&
              N(s, {
                code: R.too_small,
                minimum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message,
              }),
          r.dirty());
      } else if (a.kind === "email")
        Ch.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          N(s, {
            validation: "email",
            code: R.invalid_string,
            message: a.message,
          }),
          r.dirty());
      else if (a.kind === "emoji")
        hs || (hs = new RegExp(Lh, "u")),
          hs.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            N(s, {
              validation: "emoji",
              code: R.invalid_string,
              message: a.message,
            }),
            r.dirty());
      else if (a.kind === "uuid")
        Oh.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          N(s, {
            validation: "uuid",
            code: R.invalid_string,
            message: a.message,
          }),
          r.dirty());
      else if (a.kind === "nanoid")
        Rh.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          N(s, {
            validation: "nanoid",
            code: R.invalid_string,
            message: a.message,
          }),
          r.dirty());
      else if (a.kind === "cuid")
        xh.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          N(s, {
            validation: "cuid",
            code: R.invalid_string,
            message: a.message,
          }),
          r.dirty());
      else if (a.kind === "cuid2")
        kh.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          N(s, {
            validation: "cuid2",
            code: R.invalid_string,
            message: a.message,
          }),
          r.dirty());
      else if (a.kind === "ulid")
        Bh.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          N(s, {
            validation: "ulid",
            code: R.invalid_string,
            message: a.message,
          }),
          r.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          (s = this._getOrReturnCtx(e, s)),
            N(s, {
              validation: "url",
              code: R.invalid_string,
              message: a.message,
            }),
            r.dirty();
        }
      else
        a.kind === "regex"
          ? ((a.regex.lastIndex = 0),
            a.regex.test(e.data) ||
              ((s = this._getOrReturnCtx(e, s)),
              N(s, {
                validation: "regex",
                code: R.invalid_string,
                message: a.message,
              }),
              r.dirty()))
          : a.kind === "trim"
          ? (e.data = e.data.trim())
          : a.kind === "includes"
          ? e.data.includes(a.value, a.position) ||
            ((s = this._getOrReturnCtx(e, s)),
            N(s, {
              code: R.invalid_string,
              validation: { includes: a.value, position: a.position },
              message: a.message,
            }),
            r.dirty())
          : a.kind === "toLowerCase"
          ? (e.data = e.data.toLowerCase())
          : a.kind === "toUpperCase"
          ? (e.data = e.data.toUpperCase())
          : a.kind === "startsWith"
          ? e.data.startsWith(a.value) ||
            ((s = this._getOrReturnCtx(e, s)),
            N(s, {
              code: R.invalid_string,
              validation: { startsWith: a.value },
              message: a.message,
            }),
            r.dirty())
          : a.kind === "endsWith"
          ? e.data.endsWith(a.value) ||
            ((s = this._getOrReturnCtx(e, s)),
            N(s, {
              code: R.invalid_string,
              validation: { endsWith: a.value },
              message: a.message,
            }),
            r.dirty())
          : a.kind === "datetime"
          ? Do(a).test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            N(s, {
              code: R.invalid_string,
              validation: "datetime",
              message: a.message,
            }),
            r.dirty())
          : a.kind === "date"
          ? Ph.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            N(s, {
              code: R.invalid_string,
              validation: "date",
              message: a.message,
            }),
            r.dirty())
          : a.kind === "time"
          ? jh(a).test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            N(s, {
              code: R.invalid_string,
              validation: "time",
              message: a.message,
            }),
            r.dirty())
          : a.kind === "duration"
          ? Ih.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            N(s, {
              validation: "duration",
              code: R.invalid_string,
              message: a.message,
            }),
            r.dirty())
          : a.kind === "ip"
          ? Fh(e.data, a.version) ||
            ((s = this._getOrReturnCtx(e, s)),
            N(s, {
              validation: "ip",
              code: R.invalid_string,
              message: a.message,
            }),
            r.dirty())
          : a.kind === "base64"
          ? Nh.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            N(s, {
              validation: "base64",
              code: R.invalid_string,
              message: a.message,
            }),
            r.dirty())
          : ue.assertNever(a);
    return { status: r.value, value: e.data };
  }
  _regex(e, r, s) {
    return this.refinement((a) => e.test(a), {
      validation: r,
      code: R.invalid_string,
      ...G.errToObj(s),
    });
  }
  _addCheck(e) {
    return new vn({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...G.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...G.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...G.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...G.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...G.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...G.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...G.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...G.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...G.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...G.errToObj(e) });
  }
  datetime(e) {
    var r, s;
    return typeof e == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: e,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
              ? void 0
              : e.precision,
          offset:
            (r = e == null ? void 0 : e.offset) !== null && r !== void 0
              ? r
              : !1,
          local:
            (s = e == null ? void 0 : e.local) !== null && s !== void 0
              ? s
              : !1,
          ...G.errToObj(e == null ? void 0 : e.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string"
      ? this._addCheck({ kind: "time", precision: null, message: e })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
              ? void 0
              : e.precision,
          ...G.errToObj(e == null ? void 0 : e.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...G.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({ kind: "regex", regex: e, ...G.errToObj(r) });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...G.errToObj(r == null ? void 0 : r.message),
    });
  }
  startsWith(e, r) {
    return this._addCheck({ kind: "startsWith", value: e, ...G.errToObj(r) });
  }
  endsWith(e, r) {
    return this._addCheck({ kind: "endsWith", value: e, ...G.errToObj(r) });
  }
  min(e, r) {
    return this._addCheck({ kind: "min", value: e, ...G.errToObj(r) });
  }
  max(e, r) {
    return this._addCheck({ kind: "max", value: e, ...G.errToObj(r) });
  }
  length(e, r) {
    return this._addCheck({ kind: "length", value: e, ...G.errToObj(r) });
  }
  nonempty(e) {
    return this.min(1, G.errToObj(e));
  }
  trim() {
    return new vn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new vn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new vn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get minLength() {
    let e = null;
    for (let r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (let r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
};
Fr.create = (t) => {
  var e;
  return new Fr({
    checks: [],
    typeName: Q.ZodString,
    coerce:
      (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ne(t),
  });
};
function Zh(t, e) {
  let r = (t.toString().split(".")[1] || "").length,
    s = (e.toString().split(".")[1] || "").length,
    a = r > s ? r : s,
    c = parseInt(t.toFixed(a).replace(".", "")),
    l = parseInt(e.toFixed(a).replace(".", ""));
  return (c % l) / Math.pow(10, a);
}
var Bn = class Bs extends se {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== Z.number)
    ) {
      let a = this._getOrReturnCtx(e);
      return (
        N(a, {
          code: R.invalid_type,
          expected: Z.number,
          received: a.parsedType,
        }),
        ee
      );
    }
    let r,
      s = new De();
    for (let a of this._def.checks)
      a.kind === "int"
        ? ue.isInteger(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          N(r, {
            code: R.invalid_type,
            expected: "integer",
            received: "float",
            message: a.message,
          }),
          s.dirty())
        : a.kind === "min"
        ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
          ((r = this._getOrReturnCtx(e, r)),
          N(r, {
            code: R.too_small,
            minimum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message,
          }),
          s.dirty())
        : a.kind === "max"
        ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
          ((r = this._getOrReturnCtx(e, r)),
          N(r, {
            code: R.too_big,
            maximum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message,
          }),
          s.dirty())
        : a.kind === "multipleOf"
        ? Zh(e.data, a.value) !== 0 &&
          ((r = this._getOrReturnCtx(e, r)),
          N(r, {
            code: R.not_multiple_of,
            multipleOf: a.value,
            message: a.message,
          }),
          s.dirty())
        : a.kind === "finite"
        ? Number.isFinite(e.data) ||
          ((r = this._getOrReturnCtx(e, r)),
          N(r, { code: R.not_finite, message: a.message }),
          s.dirty())
        : ue.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, G.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, G.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, G.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, G.toString(r));
  }
  setLimit(e, r, s, a) {
    return new Bs({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: r, inclusive: s, message: G.toString(a) },
      ],
    });
  }
  _addCheck(e) {
    return new Bs({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: G.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: G.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: G.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: G.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: G.toString(e),
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: G.toString(r),
    });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: G.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: G.toString(e),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: G.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (let r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === "int" || (e.kind === "multipleOf" && ue.isInteger(e.value))
    );
  }
  get isFinite() {
    let e = null,
      r = null;
    for (let s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min"
        ? (r === null || s.value > r) && (r = s.value)
        : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
};
Bn.create = (t) =>
  new Bn({
    checks: [],
    typeName: Q.ZodNumber,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...ne(t),
  });
var On = class Os extends se {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = BigInt(e.data)),
      this._getType(e) !== Z.bigint)
    ) {
      let a = this._getOrReturnCtx(e);
      return (
        N(a, {
          code: R.invalid_type,
          expected: Z.bigint,
          received: a.parsedType,
        }),
        ee
      );
    }
    let r,
      s = new De();
    for (let a of this._def.checks)
      a.kind === "min"
        ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
          ((r = this._getOrReturnCtx(e, r)),
          N(r, {
            code: R.too_small,
            type: "bigint",
            minimum: a.value,
            inclusive: a.inclusive,
            message: a.message,
          }),
          s.dirty())
        : a.kind === "max"
        ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
          ((r = this._getOrReturnCtx(e, r)),
          N(r, {
            code: R.too_big,
            type: "bigint",
            maximum: a.value,
            inclusive: a.inclusive,
            message: a.message,
          }),
          s.dirty())
        : a.kind === "multipleOf"
        ? e.data % a.value !== BigInt(0) &&
          ((r = this._getOrReturnCtx(e, r)),
          N(r, {
            code: R.not_multiple_of,
            multipleOf: a.value,
            message: a.message,
          }),
          s.dirty())
        : ue.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, G.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, G.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, G.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, G.toString(r));
  }
  setLimit(e, r, s, a) {
    return new Os({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: r, inclusive: s, message: G.toString(a) },
      ],
    });
  }
  _addCheck(e) {
    return new Os({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: G.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: G.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: G.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: G.toString(e),
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: G.toString(r),
    });
  }
  get minValue() {
    let e = null;
    for (let r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
};
On.create = (t) => {
  var e;
  return new On({
    checks: [],
    typeName: Q.ZodBigInt,
    coerce:
      (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ne(t),
  });
};
var Rn = class extends se {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== Z.boolean)
    ) {
      let e = this._getOrReturnCtx(t);
      return (
        N(e, {
          code: R.invalid_type,
          expected: Z.boolean,
          received: e.parsedType,
        }),
        ee
      );
    }
    return Pe(t.data);
  }
};
Rn.create = (t) =>
  new Rn({
    typeName: Q.ZodBoolean,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...ne(t),
  });
var In = class zo extends se {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== Z.date)
    ) {
      let a = this._getOrReturnCtx(e);
      return (
        N(a, {
          code: R.invalid_type,
          expected: Z.date,
          received: a.parsedType,
        }),
        ee
      );
    }
    if (isNaN(e.data.getTime())) {
      let a = this._getOrReturnCtx(e);
      return N(a, { code: R.invalid_date }), ee;
    }
    let r = new De(),
      s;
    for (let a of this._def.checks)
      a.kind === "min"
        ? e.data.getTime() < a.value &&
          ((s = this._getOrReturnCtx(e, s)),
          N(s, {
            code: R.too_small,
            message: a.message,
            inclusive: !0,
            exact: !1,
            minimum: a.value,
            type: "date",
          }),
          r.dirty())
        : a.kind === "max"
        ? e.data.getTime() > a.value &&
          ((s = this._getOrReturnCtx(e, s)),
          N(s, {
            code: R.too_big,
            message: a.message,
            inclusive: !0,
            exact: !1,
            maximum: a.value,
            type: "date",
          }),
          r.dirty())
        : ue.assertNever(a);
    return { status: r.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new zo({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: G.toString(r),
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: G.toString(r),
    });
  }
  get minDate() {
    let e = null;
    for (let r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (let r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
};
In.create = (t) =>
  new In({
    checks: [],
    coerce: (t == null ? void 0 : t.coerce) || !1,
    typeName: Q.ZodDate,
    ...ne(t),
  });
var Li = class extends se {
  _parse(t) {
    if (this._getType(t) !== Z.symbol) {
      let e = this._getOrReturnCtx(t);
      return (
        N(e, {
          code: R.invalid_type,
          expected: Z.symbol,
          received: e.parsedType,
        }),
        ee
      );
    }
    return Pe(t.data);
  }
};
Li.create = (t) => new Li({ typeName: Q.ZodSymbol, ...ne(t) });
var Cn = class extends se {
  _parse(t) {
    if (this._getType(t) !== Z.undefined) {
      let e = this._getOrReturnCtx(t);
      return (
        N(e, {
          code: R.invalid_type,
          expected: Z.undefined,
          received: e.parsedType,
        }),
        ee
      );
    }
    return Pe(t.data);
  }
};
Cn.create = (t) => new Cn({ typeName: Q.ZodUndefined, ...ne(t) });
var Ln = class extends se {
  _parse(t) {
    if (this._getType(t) !== Z.null) {
      let e = this._getOrReturnCtx(t);
      return (
        N(e, {
          code: R.invalid_type,
          expected: Z.null,
          received: e.parsedType,
        }),
        ee
      );
    }
    return Pe(t.data);
  }
};
Ln.create = (t) => new Ln({ typeName: Q.ZodNull, ...ne(t) });
var Zr = class extends se {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return Pe(t.data);
  }
};
Zr.create = (t) => new Zr({ typeName: Q.ZodAny, ...ne(t) });
var gr = class extends se {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return Pe(t.data);
  }
};
gr.create = (t) => new gr({ typeName: Q.ZodUnknown, ...ne(t) });
var Lt = class extends se {
  _parse(t) {
    let e = this._getOrReturnCtx(t);
    return (
      N(e, { code: R.invalid_type, expected: Z.never, received: e.parsedType }),
      ee
    );
  }
};
Lt.create = (t) => new Lt({ typeName: Q.ZodNever, ...ne(t) });
var Ui = class extends se {
  _parse(t) {
    if (this._getType(t) !== Z.undefined) {
      let e = this._getOrReturnCtx(t);
      return (
        N(e, {
          code: R.invalid_type,
          expected: Z.void,
          received: e.parsedType,
        }),
        ee
      );
    }
    return Pe(t.data);
  }
};
Ui.create = (t) => new Ui({ typeName: Q.ZodVoid, ...ne(t) });
var yr = class bi extends se {
  _parse(e) {
    let { ctx: r, status: s } = this._processInputParams(e),
      a = this._def;
    if (r.parsedType !== Z.array)
      return (
        N(r, {
          code: R.invalid_type,
          expected: Z.array,
          received: r.parsedType,
        }),
        ee
      );
    if (a.exactLength !== null) {
      let l = r.data.length > a.exactLength.value,
        u = r.data.length < a.exactLength.value;
      (l || u) &&
        (N(r, {
          code: l ? R.too_big : R.too_small,
          minimum: u ? a.exactLength.value : void 0,
          maximum: l ? a.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: a.exactLength.message,
        }),
        s.dirty());
    }
    if (
      (a.minLength !== null &&
        r.data.length < a.minLength.value &&
        (N(r, {
          code: R.too_small,
          minimum: a.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: a.minLength.message,
        }),
        s.dirty()),
      a.maxLength !== null &&
        r.data.length > a.maxLength.value &&
        (N(r, {
          code: R.too_big,
          maximum: a.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: a.maxLength.message,
        }),
        s.dirty()),
      r.common.async)
    )
      return Promise.all(
        [...r.data].map((l, u) => a.type._parseAsync(new St(r, l, r.path, u)))
      ).then((l) => De.mergeArray(s, l));
    let c = [...r.data].map((l, u) =>
      a.type._parseSync(new St(r, l, r.path, u))
    );
    return De.mergeArray(s, c);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new bi({
      ...this._def,
      minLength: { value: e, message: G.toString(r) },
    });
  }
  max(e, r) {
    return new bi({
      ...this._def,
      maxLength: { value: e, message: G.toString(r) },
    });
  }
  length(e, r) {
    return new bi({
      ...this._def,
      exactLength: { value: e, message: G.toString(r) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
yr.create = (t, e) =>
  new yr({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Q.ZodArray,
    ...ne(e),
  });
function Or(t) {
  if (t instanceof Xe) {
    let e = {};
    for (let r in t.shape) {
      let s = t.shape[r];
      e[r] = Et.create(Or(s));
    }
    return new Xe({ ...t._def, shape: () => e });
  } else
    return t instanceof yr
      ? new yr({ ...t._def, type: Or(t.element) })
      : t instanceof Et
      ? Et.create(Or(t.unwrap()))
      : t instanceof sr
      ? sr.create(Or(t.unwrap()))
      : t instanceof ir
      ? ir.create(t.items.map((e) => Or(e)))
      : t;
}
var Xe = class it extends se {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(),
      r = ue.objectKeys(e);
    return (this._cached = { shape: e, keys: r });
  }
  _parse(e) {
    if (this._getType(e) !== Z.object) {
      let f = this._getOrReturnCtx(e);
      return (
        N(f, {
          code: R.invalid_type,
          expected: Z.object,
          received: f.parsedType,
        }),
        ee
      );
    }
    let { status: r, ctx: s } = this._processInputParams(e),
      { shape: a, keys: c } = this._getCached(),
      l = [];
    if (
      !(this._def.catchall instanceof Lt && this._def.unknownKeys === "strip")
    )
      for (let f in s.data) c.includes(f) || l.push(f);
    let u = [];
    for (let f of c) {
      let p = a[f],
        b = s.data[f];
      u.push({
        key: { status: "valid", value: f },
        value: p._parse(new St(s, b, s.path, f)),
        alwaysSet: f in s.data,
      });
    }
    if (this._def.catchall instanceof Lt) {
      let f = this._def.unknownKeys;
      if (f === "passthrough")
        for (let p of l)
          u.push({
            key: { status: "valid", value: p },
            value: { status: "valid", value: s.data[p] },
          });
      else if (f === "strict")
        l.length > 0 &&
          (N(s, { code: R.unrecognized_keys, keys: l }), r.dirty());
      else if (f !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let f = this._def.catchall;
      for (let p of l) {
        let b = s.data[p];
        u.push({
          key: { status: "valid", value: p },
          value: f._parse(new St(s, b, s.path, p)),
          alwaysSet: p in s.data,
        });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            let f = [];
            for (let p of u) {
              let b = await p.key,
                v = await p.value;
              f.push({ key: b, value: v, alwaysSet: p.alwaysSet });
            }
            return f;
          })
          .then((f) => De.mergeObjectSync(r, f))
      : De.mergeObjectSync(r, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      G.errToObj,
      new it({
        ...this._def,
        unknownKeys: "strict",
        ...(e !== void 0
          ? {
              errorMap: (r, s) => {
                var a, c, l, u;
                let f =
                  (l =
                    (c = (a = this._def).errorMap) === null || c === void 0
                      ? void 0
                      : c.call(a, r, s).message) !== null && l !== void 0
                    ? l
                    : s.defaultError;
                return r.code === "unrecognized_keys"
                  ? {
                      message:
                        (u = G.errToObj(e).message) !== null && u !== void 0
                          ? u
                          : f,
                    }
                  : { message: f };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new it({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new it({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new it({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    });
  }
  merge(e) {
    return new it({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: Q.ZodObject,
    });
  }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  catchall(e) {
    return new it({ ...this._def, catchall: e });
  }
  pick(e) {
    let r = {};
    return (
      ue.objectKeys(e).forEach((s) => {
        e[s] && this.shape[s] && (r[s] = this.shape[s]);
      }),
      new it({ ...this._def, shape: () => r })
    );
  }
  omit(e) {
    let r = {};
    return (
      ue.objectKeys(this.shape).forEach((s) => {
        e[s] || (r[s] = this.shape[s]);
      }),
      new it({ ...this._def, shape: () => r })
    );
  }
  deepPartial() {
    return Or(this);
  }
  partial(e) {
    let r = {};
    return (
      ue.objectKeys(this.shape).forEach((s) => {
        let a = this.shape[s];
        e && !e[s] ? (r[s] = a) : (r[s] = a.optional());
      }),
      new it({ ...this._def, shape: () => r })
    );
  }
  required(e) {
    let r = {};
    return (
      ue.objectKeys(this.shape).forEach((s) => {
        if (e && !e[s]) r[s] = this.shape[s];
        else {
          let a = this.shape[s];
          for (; a instanceof Et; ) a = a._def.innerType;
          r[s] = a;
        }
      }),
      new it({ ...this._def, shape: () => r })
    );
  }
  keyof() {
    return Ho(ue.objectKeys(this.shape));
  }
};
Xe.create = (t, e) =>
  new Xe({
    shape: () => t,
    unknownKeys: "strip",
    catchall: Lt.create(),
    typeName: Q.ZodObject,
    ...ne(e),
  });
Xe.strictCreate = (t, e) =>
  new Xe({
    shape: () => t,
    unknownKeys: "strict",
    catchall: Lt.create(),
    typeName: Q.ZodObject,
    ...ne(e),
  });
Xe.lazycreate = (t, e) =>
  new Xe({
    shape: t,
    unknownKeys: "strip",
    catchall: Lt.create(),
    typeName: Q.ZodObject,
    ...ne(e),
  });
var Un = class extends se {
  _parse(t) {
    let { ctx: e } = this._processInputParams(t),
      r = this._def.options;
    function s(a) {
      for (let l of a) if (l.result.status === "valid") return l.result;
      for (let l of a)
        if (l.result.status === "dirty")
          return e.common.issues.push(...l.ctx.common.issues), l.result;
      let c = a.map((l) => new mt(l.ctx.common.issues));
      return N(e, { code: R.invalid_union, unionErrors: c }), ee;
    }
    if (e.common.async)
      return Promise.all(
        r.map(async (a) => {
          let c = { ...e, common: { ...e.common, issues: [] }, parent: null };
          return {
            result: await a._parseAsync({
              data: e.data,
              path: e.path,
              parent: c,
            }),
            ctx: c,
          };
        })
      ).then(s);
    {
      let a,
        c = [];
      for (let u of r) {
        let f = { ...e, common: { ...e.common, issues: [] }, parent: null },
          p = u._parseSync({ data: e.data, path: e.path, parent: f });
        if (p.status === "valid") return p;
        p.status === "dirty" && !a && (a = { result: p, ctx: f }),
          f.common.issues.length && c.push(f.common.issues);
      }
      if (a) return e.common.issues.push(...a.ctx.common.issues), a.result;
      let l = c.map((u) => new mt(u));
      return N(e, { code: R.invalid_union, unionErrors: l }), ee;
    }
  }
  get options() {
    return this._def.options;
  }
};
Un.create = (t, e) => new Un({ options: t, typeName: Q.ZodUnion, ...ne(e) });
var er = (t) =>
    t instanceof Nn
      ? er(t.schema)
      : t instanceof yt
      ? er(t.innerType())
      : t instanceof Pn
      ? [t.value]
      : t instanceof ci
      ? t.options
      : t instanceof jn
      ? ue.objectValues(t.enum)
      : t instanceof Fn
      ? er(t._def.innerType)
      : t instanceof Cn
      ? [void 0]
      : t instanceof Ln
      ? [null]
      : t instanceof Et
      ? [void 0, ...er(t.unwrap())]
      : t instanceof sr
      ? [null, ...er(t.unwrap())]
      : t instanceof aa || t instanceof $n
      ? er(t.unwrap())
      : t instanceof Zn
      ? er(t._def.innerType)
      : [],
  Vo = class Wo extends se {
    _parse(e) {
      let { ctx: r } = this._processInputParams(e);
      if (r.parsedType !== Z.object)
        return (
          N(r, {
            code: R.invalid_type,
            expected: Z.object,
            received: r.parsedType,
          }),
          ee
        );
      let s = this.discriminator,
        a = r.data[s],
        c = this.optionsMap.get(a);
      return c
        ? r.common.async
          ? c._parseAsync({ data: r.data, path: r.path, parent: r })
          : c._parseSync({ data: r.data, path: r.path, parent: r })
        : (N(r, {
            code: R.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [s],
          }),
          ee);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(e, r, s) {
      let a = new Map();
      for (let c of r) {
        let l = er(c.shape[e]);
        if (!l.length)
          throw new Error(
            `A discriminator value for key \`${e}\` could not be extracted from all schema options`
          );
        for (let u of l) {
          if (a.has(u))
            throw new Error(
              `Discriminator property ${String(e)} has duplicate value ${String(
                u
              )}`
            );
          a.set(u, c);
        }
      }
      return new Wo({
        typeName: Q.ZodDiscriminatedUnion,
        discriminator: e,
        options: r,
        optionsMap: a,
        ...ne(s),
      });
    }
  };
function Rs(t, e) {
  let r = tr(t),
    s = tr(e);
  if (t === e) return { valid: !0, data: t };
  if (r === Z.object && s === Z.object) {
    let a = ue.objectKeys(e),
      c = ue.objectKeys(t).filter((u) => a.indexOf(u) !== -1),
      l = { ...t, ...e };
    for (let u of c) {
      let f = Rs(t[u], e[u]);
      if (!f.valid) return { valid: !1 };
      l[u] = f.data;
    }
    return { valid: !0, data: l };
  } else if (r === Z.array && s === Z.array) {
    if (t.length !== e.length) return { valid: !1 };
    let a = [];
    for (let c = 0; c < t.length; c++) {
      let l = t[c],
        u = e[c],
        f = Rs(l, u);
      if (!f.valid) return { valid: !1 };
      a.push(f.data);
    }
    return { valid: !0, data: a };
  } else
    return r === Z.date && s === Z.date && +t == +e
      ? { valid: !0, data: t }
      : { valid: !1 };
}
var Mn = class extends se {
  _parse(e) {
    let { status: r, ctx: s } = this._processInputParams(e),
      a = (c, l) => {
        if (xs(c) || xs(l)) return ee;
        let u = Rs(c.value, l.value);
        return u.valid
          ? ((ks(c) || ks(l)) && r.dirty(), { status: r.value, value: u.data })
          : (N(s, { code: R.invalid_intersection_types }), ee);
      };
    return s.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseAsync({
            data: s.data,
            path: s.path,
            parent: s,
          }),
        ]).then(([c, l]) => a(c, l))
      : a(
          this._def.left._parseSync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseSync({ data: s.data, path: s.path, parent: s })
        );
  }
};
Mn.create = (t, e, r) =>
  new Mn({ left: t, right: e, typeName: Q.ZodIntersection, ...ne(r) });
var ir = class Go extends se {
  _parse(e) {
    let { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== Z.array)
      return (
        N(s, {
          code: R.invalid_type,
          expected: Z.array,
          received: s.parsedType,
        }),
        ee
      );
    if (s.data.length < this._def.items.length)
      return (
        N(s, {
          code: R.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        ee
      );
    !this._def.rest &&
      s.data.length > this._def.items.length &&
      (N(s, {
        code: R.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      r.dirty());
    let a = [...s.data]
      .map((c, l) => {
        let u = this._def.items[l] || this._def.rest;
        return u ? u._parse(new St(s, c, s.path, l)) : null;
      })
      .filter((c) => !!c);
    return s.common.async
      ? Promise.all(a).then((c) => De.mergeArray(r, c))
      : De.mergeArray(r, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Go({ ...this._def, rest: e });
  }
};
ir.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ir({ items: t, typeName: Q.ZodTuple, rest: null, ...ne(e) });
};
var qo = class Is extends se {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: r, ctx: s } = this._processInputParams(e);
      if (s.parsedType !== Z.object)
        return (
          N(s, {
            code: R.invalid_type,
            expected: Z.object,
            received: s.parsedType,
          }),
          ee
        );
      let a = [],
        c = this._def.keyType,
        l = this._def.valueType;
      for (let u in s.data)
        a.push({
          key: c._parse(new St(s, u, s.path, u)),
          value: l._parse(new St(s, s.data[u], s.path, u)),
          alwaysSet: u in s.data,
        });
      return s.common.async
        ? De.mergeObjectAsync(r, a)
        : De.mergeObjectSync(r, a);
    }
    get element() {
      return this._def.valueType;
    }
    static create(e, r, s) {
      return r instanceof se
        ? new Is({ keyType: e, valueType: r, typeName: Q.ZodRecord, ...ne(s) })
        : new Is({
            keyType: Fr.create(),
            valueType: e,
            typeName: Q.ZodRecord,
            ...ne(r),
          });
    }
  },
  Mi = class extends se {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(t) {
      let { status: e, ctx: r } = this._processInputParams(t);
      if (r.parsedType !== Z.map)
        return (
          N(r, {
            code: R.invalid_type,
            expected: Z.map,
            received: r.parsedType,
          }),
          ee
        );
      let s = this._def.keyType,
        a = this._def.valueType,
        c = [...r.data.entries()].map(([l, u], f) => ({
          key: s._parse(new St(r, l, r.path, [f, "key"])),
          value: a._parse(new St(r, u, r.path, [f, "value"])),
        }));
      if (r.common.async) {
        let l = new Map();
        return Promise.resolve().then(async () => {
          for (let u of c) {
            let f = await u.key,
              p = await u.value;
            if (f.status === "aborted" || p.status === "aborted") return ee;
            (f.status === "dirty" || p.status === "dirty") && e.dirty(),
              l.set(f.value, p.value);
          }
          return { status: e.value, value: l };
        });
      } else {
        let l = new Map();
        for (let u of c) {
          let f = u.key,
            p = u.value;
          if (f.status === "aborted" || p.status === "aborted") return ee;
          (f.status === "dirty" || p.status === "dirty") && e.dirty(),
            l.set(f.value, p.value);
        }
        return { status: e.value, value: l };
      }
    }
  };
Mi.create = (t, e, r) =>
  new Mi({ valueType: e, keyType: t, typeName: Q.ZodMap, ...ne(r) });
var Ni = class Cs extends se {
  _parse(e) {
    let { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== Z.set)
      return (
        N(s, { code: R.invalid_type, expected: Z.set, received: s.parsedType }),
        ee
      );
    let a = this._def;
    a.minSize !== null &&
      s.data.size < a.minSize.value &&
      (N(s, {
        code: R.too_small,
        minimum: a.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: a.minSize.message,
      }),
      r.dirty()),
      a.maxSize !== null &&
        s.data.size > a.maxSize.value &&
        (N(s, {
          code: R.too_big,
          maximum: a.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: a.maxSize.message,
        }),
        r.dirty());
    let c = this._def.valueType;
    function l(f) {
      let p = new Set();
      for (let b of f) {
        if (b.status === "aborted") return ee;
        b.status === "dirty" && r.dirty(), p.add(b.value);
      }
      return { status: r.value, value: p };
    }
    let u = [...s.data.values()].map((f, p) =>
      c._parse(new St(s, f, s.path, p))
    );
    return s.common.async ? Promise.all(u).then((f) => l(f)) : l(u);
  }
  min(e, r) {
    return new Cs({
      ...this._def,
      minSize: { value: e, message: G.toString(r) },
    });
  }
  max(e, r) {
    return new Cs({
      ...this._def,
      maxSize: { value: e, message: G.toString(r) },
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
Ni.create = (t, e) =>
  new Ni({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: Q.ZodSet,
    ...ne(e),
  });
var Ko = class _i extends se {
    constructor() {
      super(...arguments), (this.validate = this.implement);
    }
    _parse(e) {
      let { ctx: r } = this._processInputParams(e);
      if (r.parsedType !== Z.function)
        return (
          N(r, {
            code: R.invalid_type,
            expected: Z.function,
            received: r.parsedType,
          }),
          ee
        );
      function s(u, f) {
        return Oi({
          data: u,
          path: r.path,
          errorMaps: [
            r.common.contextualErrorMap,
            r.schemaErrorMap,
            Bi(),
            jr,
          ].filter((p) => !!p),
          issueData: { code: R.invalid_arguments, argumentsError: f },
        });
      }
      function a(u, f) {
        return Oi({
          data: u,
          path: r.path,
          errorMaps: [
            r.common.contextualErrorMap,
            r.schemaErrorMap,
            Bi(),
            jr,
          ].filter((p) => !!p),
          issueData: { code: R.invalid_return_type, returnTypeError: f },
        });
      }
      let c = { errorMap: r.common.contextualErrorMap },
        l = r.data;
      if (this._def.returns instanceof $r) {
        let u = this;
        return Pe(async function (...f) {
          let p = new mt([]),
            b = await u._def.args.parseAsync(f, c).catch((_) => {
              throw (p.addIssue(s(f, _)), p);
            }),
            v = await Reflect.apply(l, this, b);
          return await u._def.returns._def.type.parseAsync(v, c).catch((_) => {
            throw (p.addIssue(a(v, _)), p);
          });
        });
      } else {
        let u = this;
        return Pe(function (...f) {
          let p = u._def.args.safeParse(f, c);
          if (!p.success) throw new mt([s(f, p.error)]);
          let b = Reflect.apply(l, this, p.data),
            v = u._def.returns.safeParse(b, c);
          if (!v.success) throw new mt([a(b, v.error)]);
          return v.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...e) {
      return new _i({ ...this._def, args: ir.create(e).rest(gr.create()) });
    }
    returns(e) {
      return new _i({ ...this._def, returns: e });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(e, r, s) {
      return new _i({
        args: e || ir.create([]).rest(gr.create()),
        returns: r || gr.create(),
        typeName: Q.ZodFunction,
        ...ne(s),
      });
    }
  },
  Nn = class extends se {
    get schema() {
      return this._def.getter();
    }
    _parse(t) {
      let { ctx: e } = this._processInputParams(t);
      return this._def
        .getter()
        ._parse({ data: e.data, path: e.path, parent: e });
    }
  };
Nn.create = (t, e) => new Nn({ getter: t, typeName: Q.ZodLazy, ...ne(e) });
var Pn = class extends se {
  _parse(t) {
    if (t.data !== this._def.value) {
      let e = this._getOrReturnCtx(t);
      return (
        N(e, {
          received: e.data,
          code: R.invalid_literal,
          expected: this._def.value,
        }),
        ee
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
};
Pn.create = (t, e) => new Pn({ value: t, typeName: Q.ZodLiteral, ...ne(e) });
function Ho(t, e) {
  return new ci({ values: t, typeName: Q.ZodEnum, ...ne(e) });
}
var ci = class Ls extends se {
  constructor() {
    super(...arguments), mn.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      let r = this._getOrReturnCtx(e),
        s = this._def.values;
      return (
        N(r, {
          expected: ue.joinValues(s),
          received: r.parsedType,
          code: R.invalid_type,
        }),
        ee
      );
    }
    if (
      (Ci(this, mn) || Fo(this, mn, new Set(this._def.values)),
      !Ci(this, mn).has(e.data))
    ) {
      let r = this._getOrReturnCtx(e),
        s = this._def.values;
      return (
        N(r, { received: r.data, code: R.invalid_enum_value, options: s }), ee
      );
    }
    return Pe(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let r of this._def.values) e[r] = r;
    return e;
  }
  get Values() {
    let e = {};
    for (let r of this._def.values) e[r] = r;
    return e;
  }
  get Enum() {
    let e = {};
    for (let r of this._def.values) e[r] = r;
    return e;
  }
  extract(e, r = this._def) {
    return Ls.create(e, { ...this._def, ...r });
  }
  exclude(e, r = this._def) {
    return Ls.create(
      this.options.filter((s) => !e.includes(s)),
      { ...this._def, ...r }
    );
  }
};
mn = new WeakMap();
ci.create = Ho;
var jn = class extends se {
  constructor() {
    super(...arguments), yn.set(this, void 0);
  }
  _parse(t) {
    let e = ue.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== Z.string && r.parsedType !== Z.number) {
      let s = ue.objectValues(e);
      return (
        N(r, {
          expected: ue.joinValues(s),
          received: r.parsedType,
          code: R.invalid_type,
        }),
        ee
      );
    }
    if (
      (Ci(this, yn) ||
        Fo(this, yn, new Set(ue.getValidEnumValues(this._def.values))),
      !Ci(this, yn).has(t.data))
    ) {
      let s = ue.objectValues(e);
      return (
        N(r, { received: r.data, code: R.invalid_enum_value, options: s }), ee
      );
    }
    return Pe(t.data);
  }
  get enum() {
    return this._def.values;
  }
};
yn = new WeakMap();
jn.create = (t, e) =>
  new jn({ values: t, typeName: Q.ZodNativeEnum, ...ne(e) });
var $r = class extends se {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    let { ctx: e } = this._processInputParams(t);
    if (e.parsedType !== Z.promise && e.common.async === !1)
      return (
        N(e, {
          code: R.invalid_type,
          expected: Z.promise,
          received: e.parsedType,
        }),
        ee
      );
    let r = e.parsedType === Z.promise ? e.data : Promise.resolve(e.data);
    return Pe(
      r.then((s) =>
        this._def.type.parseAsync(s, {
          path: e.path,
          errorMap: e.common.contextualErrorMap,
        })
      )
    );
  }
};
$r.create = (t, e) => new $r({ type: t, typeName: Q.ZodPromise, ...ne(e) });
var yt = class extends se {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Q.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    let { status: r, ctx: s } = this._processInputParams(e),
      a = this._def.effect || null,
      c = {
        addIssue: (l) => {
          N(s, l), l.fatal ? r.abort() : r.dirty();
        },
        get path() {
          return s.path;
        },
      };
    if (((c.addIssue = c.addIssue.bind(c)), a.type === "preprocess")) {
      let l = a.transform(s.data, c);
      if (s.common.async)
        return Promise.resolve(l).then(async (u) => {
          if (r.value === "aborted") return ee;
          let f = await this._def.schema._parseAsync({
            data: u,
            path: s.path,
            parent: s,
          });
          return f.status === "aborted"
            ? ee
            : f.status === "dirty" || r.value === "dirty"
            ? Ri(f.value)
            : f;
        });
      {
        if (r.value === "aborted") return ee;
        let u = this._def.schema._parseSync({
          data: l,
          path: s.path,
          parent: s,
        });
        return u.status === "aborted"
          ? ee
          : u.status === "dirty" || r.value === "dirty"
          ? Ri(u.value)
          : u;
      }
    }
    if (a.type === "refinement") {
      let l = (u) => {
        let f = a.refinement(u, c);
        if (s.common.async) return Promise.resolve(f);
        if (f instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return u;
      };
      if (s.common.async === !1) {
        let u = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        return u.status === "aborted"
          ? ee
          : (u.status === "dirty" && r.dirty(),
            l(u.value),
            { status: r.value, value: u.value });
      } else
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((u) =>
            u.status === "aborted"
              ? ee
              : (u.status === "dirty" && r.dirty(),
                l(u.value).then(() => ({ status: r.value, value: u.value })))
          );
    }
    if (a.type === "transform")
      if (s.common.async === !1) {
        let l = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        if (!kn(l)) return l;
        let u = a.transform(l.value, c);
        if (u instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: r.value, value: u };
      } else
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((l) =>
            kn(l)
              ? Promise.resolve(a.transform(l.value, c)).then((u) => ({
                  status: r.value,
                  value: u,
                }))
              : l
          );
    ue.assertNever(a);
  }
};
yt.create = (t, e, r) =>
  new yt({ schema: t, typeName: Q.ZodEffects, effect: e, ...ne(r) });
yt.createWithPreprocess = (t, e, r) =>
  new yt({
    schema: e,
    effect: { type: "preprocess", transform: t },
    typeName: Q.ZodEffects,
    ...ne(r),
  });
var Et = class extends se {
  _parse(e) {
    return this._getType(e) === Z.undefined
      ? Pe(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Et.create = (t, e) =>
  new Et({ innerType: t, typeName: Q.ZodOptional, ...ne(e) });
var sr = class extends se {
  _parse(e) {
    return this._getType(e) === Z.null
      ? Pe(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
sr.create = (t, e) =>
  new sr({ innerType: t, typeName: Q.ZodNullable, ...ne(e) });
var Fn = class extends se {
  _parse(t) {
    let { ctx: e } = this._processInputParams(t),
      r = e.data;
    return (
      e.parsedType === Z.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: e.path, parent: e })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
Fn.create = (t, e) =>
  new Fn({
    innerType: t,
    typeName: Q.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...ne(e),
  });
var Zn = class extends se {
  _parse(t) {
    let { ctx: e } = this._processInputParams(t),
      r = { ...e, common: { ...e.common, issues: [] } },
      s = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return Ii(s)
      ? s.then((a) => ({
          status: "valid",
          value:
            a.status === "valid"
              ? a.value
              : this._def.catchValue({
                  get error() {
                    return new mt(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new mt(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
Zn.create = (t, e) =>
  new Zn({
    innerType: t,
    typeName: Q.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...ne(e),
  });
var Pi = class extends se {
  _parse(t) {
    if (this._getType(t) !== Z.nan) {
      let e = this._getOrReturnCtx(t);
      return (
        N(e, { code: R.invalid_type, expected: Z.nan, received: e.parsedType }),
        ee
      );
    }
    return { status: "valid", value: t.data };
  }
};
Pi.create = (t) => new Pi({ typeName: Q.ZodNaN, ...ne(t) });
var $h = Symbol("zod_brand"),
  aa = class extends se {
    _parse(t) {
      let { ctx: e } = this._processInputParams(t),
        r = e.data;
      return this._def.type._parse({ data: r, path: e.path, parent: e });
    }
    unwrap() {
      return this._def.type;
    }
  },
  oa = class Yo extends se {
    _parse(e) {
      let { status: r, ctx: s } = this._processInputParams(e);
      if (s.common.async)
        return (async () => {
          let a = await this._def.in._parseAsync({
            data: s.data,
            path: s.path,
            parent: s,
          });
          return a.status === "aborted"
            ? ee
            : a.status === "dirty"
            ? (r.dirty(), Ri(a.value))
            : this._def.out._parseAsync({
                data: a.value,
                path: s.path,
                parent: s,
              });
        })();
      {
        let a = this._def.in._parseSync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        return a.status === "aborted"
          ? ee
          : a.status === "dirty"
          ? (r.dirty(), { status: "dirty", value: a.value })
          : this._def.out._parseSync({
              data: a.value,
              path: s.path,
              parent: s,
            });
      }
    }
    static create(e, r) {
      return new Yo({ in: e, out: r, typeName: Q.ZodPipeline });
    }
  },
  $n = class extends se {
    _parse(t) {
      let e = this._def.innerType._parse(t);
      return kn(e) && (e.value = Object.freeze(e.value)), e;
    }
    unwrap() {
      return this._def.innerType;
    }
  };
$n.create = (t, e) =>
  new $n({ innerType: t, typeName: Q.ZodReadonly, ...ne(e) });
function Qo(t, e = {}, r) {
  return t
    ? Zr.create().superRefine((s, a) => {
        var c, l;
        if (!t(s)) {
          let u =
              typeof e == "function"
                ? e(s)
                : typeof e == "string"
                ? { message: e }
                : e,
            f =
              (l = (c = u.fatal) !== null && c !== void 0 ? c : r) !== null &&
              l !== void 0
                ? l
                : !0,
            p = typeof u == "string" ? { message: u } : u;
          a.addIssue({ code: "custom", ...p, fatal: f });
        }
      })
    : Zr.create();
}
var Dh = { object: Xe.lazycreate },
  Q;
(function (t) {
  (t.ZodString = "ZodString"),
    (t.ZodNumber = "ZodNumber"),
    (t.ZodNaN = "ZodNaN"),
    (t.ZodBigInt = "ZodBigInt"),
    (t.ZodBoolean = "ZodBoolean"),
    (t.ZodDate = "ZodDate"),
    (t.ZodSymbol = "ZodSymbol"),
    (t.ZodUndefined = "ZodUndefined"),
    (t.ZodNull = "ZodNull"),
    (t.ZodAny = "ZodAny"),
    (t.ZodUnknown = "ZodUnknown"),
    (t.ZodNever = "ZodNever"),
    (t.ZodVoid = "ZodVoid"),
    (t.ZodArray = "ZodArray"),
    (t.ZodObject = "ZodObject"),
    (t.ZodUnion = "ZodUnion"),
    (t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (t.ZodIntersection = "ZodIntersection"),
    (t.ZodTuple = "ZodTuple"),
    (t.ZodRecord = "ZodRecord"),
    (t.ZodMap = "ZodMap"),
    (t.ZodSet = "ZodSet"),
    (t.ZodFunction = "ZodFunction"),
    (t.ZodLazy = "ZodLazy"),
    (t.ZodLiteral = "ZodLiteral"),
    (t.ZodEnum = "ZodEnum"),
    (t.ZodEffects = "ZodEffects"),
    (t.ZodNativeEnum = "ZodNativeEnum"),
    (t.ZodOptional = "ZodOptional"),
    (t.ZodNullable = "ZodNullable"),
    (t.ZodDefault = "ZodDefault"),
    (t.ZodCatch = "ZodCatch"),
    (t.ZodPromise = "ZodPromise"),
    (t.ZodBranded = "ZodBranded"),
    (t.ZodPipeline = "ZodPipeline"),
    (t.ZodReadonly = "ZodReadonly");
})(Q || (Q = {}));
var zh = (t, e = { message: `Input not instance of ${t.name}` }) =>
    Qo((r) => r instanceof t, e),
  Xo = Fr.create,
  Jo = Bn.create,
  Vh = Pi.create,
  Wh = On.create,
  eu = Rn.create,
  Gh = In.create,
  qh = Li.create,
  Kh = Cn.create,
  Hh = Ln.create,
  Yh = Zr.create,
  Qh = gr.create,
  Xh = Lt.create,
  Jh = Ui.create,
  ef = yr.create,
  tf = Xe.create,
  rf = Xe.strictCreate,
  nf = Un.create,
  sf = Vo.create,
  af = Mn.create,
  of = ir.create,
  uf = qo.create,
  cf = Mi.create,
  lf = Ni.create,
  hf = Ko.create,
  ff = Nn.create,
  df = Pn.create,
  pf = ci.create,
  gf = jn.create,
  mf = $r.create,
  Ga = yt.create,
  yf = Et.create,
  vf = sr.create,
  wf = yt.createWithPreprocess,
  bf = oa.create,
  _f = () => Xo().optional(),
  Ef = () => Jo().optional(),
  Af = () => eu().optional(),
  Sf = {
    string: (t) => Fr.create({ ...t, coerce: !0 }),
    number: (t) => Bn.create({ ...t, coerce: !0 }),
    boolean: (t) => Rn.create({ ...t, coerce: !0 }),
    bigint: (t) => On.create({ ...t, coerce: !0 }),
    date: (t) => In.create({ ...t, coerce: !0 }),
  },
  Tf = ee,
  fe = Object.freeze({
    __proto__: null,
    defaultErrorMap: jr,
    setErrorMap: Sh,
    getErrorMap: Bi,
    makeIssue: Oi,
    EMPTY_PATH: Th,
    addIssueToContext: N,
    ParseStatus: De,
    INVALID: ee,
    DIRTY: Ri,
    OK: Pe,
    isAborted: xs,
    isDirty: ks,
    isValid: kn,
    isAsync: Ii,
    get util() {
      return ue;
    },
    get objectUtil() {
      return Ts;
    },
    ZodParsedType: Z,
    getParsedType: tr,
    ZodType: se,
    datetimeRegex: Do,
    ZodString: Fr,
    ZodNumber: Bn,
    ZodBigInt: On,
    ZodBoolean: Rn,
    ZodDate: In,
    ZodSymbol: Li,
    ZodUndefined: Cn,
    ZodNull: Ln,
    ZodAny: Zr,
    ZodUnknown: gr,
    ZodNever: Lt,
    ZodVoid: Ui,
    ZodArray: yr,
    ZodObject: Xe,
    ZodUnion: Un,
    ZodDiscriminatedUnion: Vo,
    ZodIntersection: Mn,
    ZodTuple: ir,
    ZodRecord: qo,
    ZodMap: Mi,
    ZodSet: Ni,
    ZodFunction: Ko,
    ZodLazy: Nn,
    ZodLiteral: Pn,
    ZodEnum: ci,
    ZodNativeEnum: jn,
    ZodPromise: $r,
    ZodEffects: yt,
    ZodTransformer: yt,
    ZodOptional: Et,
    ZodNullable: sr,
    ZodDefault: Fn,
    ZodCatch: Zn,
    ZodNaN: Pi,
    BRAND: $h,
    ZodBranded: aa,
    ZodPipeline: oa,
    ZodReadonly: $n,
    custom: Qo,
    Schema: se,
    ZodSchema: se,
    late: Dh,
    get ZodFirstPartyTypeKind() {
      return Q;
    },
    coerce: Sf,
    any: Yh,
    array: ef,
    bigint: Wh,
    boolean: eu,
    date: Gh,
    discriminatedUnion: sf,
    effect: Ga,
    enum: pf,
    function: hf,
    instanceof: zh,
    intersection: af,
    lazy: ff,
    literal: df,
    map: cf,
    nan: Vh,
    nativeEnum: gf,
    never: Xh,
    null: Hh,
    nullable: vf,
    number: Jo,
    object: tf,
    oboolean: Af,
    onumber: Ef,
    optional: yf,
    ostring: _f,
    pipeline: bf,
    preprocess: wf,
    promise: mf,
    record: uf,
    set: lf,
    strictObject: rf,
    string: Xo,
    symbol: qh,
    transformer: Ga,
    tuple: of,
    undefined: Kh,
    union: nf,
    unknown: Qh,
    void: Jh,
    NEVER: Tf,
    ZodIssueCode: R,
    quotelessJson: Ah,
    ZodError: mt,
  }),
  tu = fe.object({ url: fe.string(), address: fe.string() }),
  ru = fe.object({
    url: fe.string(),
    address: fe.string(),
    ttl: fe.coerce.number(),
  }),
  xf = fe
    .function()
    .args(fe.string(), fe.string())
    .returns(fe.promise(fe.string())),
  kf = fe.function().args(fe.string()).returns(fe.promise(tu.nullish())),
  Bf = fe
    .function()
    .args(fe.string(), tu, fe.number())
    .returns(fe.promise(fe.any())),
  ua = fe.function().args(fe.string()).returns(fe.promise(ru.nullish())),
  ca = fe
    .function()
    .args(fe.string(), fe.string(), fe.number())
    .returns(fe.promise(fe.any())),
  Xi = fe.function().args(fe.string()).returns(fe.promise(ru)),
  Of = Xi;
function Rf({
  loadProcessScheduler: t,
  loadScheduler: e,
  cache: r,
  followRedirects: s,
  checkForRedirect: a,
}) {
  (t = Of.implement(t)), (e = Xi.implement(e)), (a = xf.implement(a));
  let c = kf.implement(r.getByProcess),
    l = ua.implement(r.getByOwner),
    u = Bf.implement(r.setByProcess),
    f = ca.implement(r.setByOwner);
  return (p, b) =>
    c(p).then(
      async (v) =>
        v ||
        Promise.resolve()
          .then(async () =>
            b
              ? (await l(b)) ||
                e(b).then((E) => (f(E.address, E.url, E.ttl), E))
              : t(p)
          )
          .then(async (_) => {
            let E = _.url;
            s && (E = await a(_.url, p));
            let w = { url: sa(E), address: _.address };
            return await u(p, w, _.ttl), w;
          })
    );
}
function If({ loadScheduler: t, cache: e }) {
  t = Xi.implement(t);
  let r = ua.implement(e.getByOwner),
    s = ca.implement(e.setByOwner);
  return (a) =>
    r(a).then((c) =>
      c
        ? { url: c.url }
        : t(a)
            .then((l) => s(a, l.url, l.ttl).then(() => ({ url: sa(l.url) })))
            .catch((l) => {
              if (!(l instanceof xi)) throw l;
            })
    );
}
function Cf({ loadScheduler: t, cache: e }) {
  t = Xi.implement(t);
  let r = ua.implement(e.getByOwner),
    s = ca.implement(e.setByOwner);
  return (a) =>
    r(a).then((c) =>
      c
        ? !0
        : t(a)
            .then((l) => s(a, l.url, l.ttl))
            .then(() => !0)
            .catch((l) => {
              if (l instanceof xi) return !1;
              throw l;
            })
    );
}
var Lf = 100,
  Uf = "https://arweave.net/graphql",
  Mf = 0,
  Nf = 300,
  Pf = !1;
function nu({
  cacheSize: t = Lf,
  followRedirects: e = Pf,
  GRAPHQL_URL: r = Uf,
  GRAPHQL_MAX_RETRIES: s = Mf,
  GRAPHQL_RETRY_BACKOFF: a = Nf,
} = {}) {
  let c = yh({ size: t }),
    l = Io({
      fetch,
      GRAPHQL_URL: r,
      GRAPHQL_MAX_RETRIES: s,
      GRAPHQL_RETRY_BACKOFF: a,
    }),
    u = {
      getByProcess: vh({ cache: c }),
      getByOwner: bh({ cache: c }),
      setByProcess: wh({ cache: c }),
      setByOwner: _h({ cache: c }),
    },
    f = Rf({
      loadProcessScheduler: dh({
        fetch,
        GRAPHQL_URL: r,
        GRAPHQL_MAX_RETRIES: s,
        GRAPHQL_RETRY_BACKOFF: a,
      }),
      loadScheduler: l,
      cache: u,
      followRedirects: e,
      checkForRedirect: Eh({ fetch }),
    }),
    p = Cf({ loadScheduler: l, cache: u }),
    b = If({ loadScheduler: l, cache: u });
  return { locate: f, validate: p, raw: b };
}
var jf = globalThis.GRAPHQL_URL || void 0,
  Ff = globalThis.SCHEDULER_UTILS_CACHE_SIZE || void 0,
  Zf = globalThis.SCHEDULER_UTILS_FOLLOW_REDIRECTS === "true" || void 0,
  $f = globalThis.GRAPHQL_MAX_RETRIES || void 0,
  Df = globalThis.GRAPHQL_RETRY_BACKOFF || void 0;
nu({
  GRAPHQL_URL: jf,
  cacheSize: Ff,
  followRedirects: Zf,
  GRAPHQL_MAX_RETRIES: $f,
  GRAPHQL_RETRY_BACKOFF: Df,
});
var Ot = (t) => ({
    fork: t,
    toPromise: () => new Promise((e, r) => t(r, e)),
    map: (e) => Ot((r, s) => t(r, (a) => s(e(a)))),
    bimap: (e, r) =>
      Ot((s, a) =>
        t(
          (c) => s(e(c)),
          (c) => a(r(c))
        )
      ),
    chain: (e) => Ot((r, s) => t(r, (a) => e(a).fork(r, s))),
    bichain: (e, r) =>
      Ot((s, a) =>
        t(
          (c) => e(c).fork(s, a),
          (c) => r(c).fork(s, a)
        )
      ),
    fold: (e, r) =>
      Ot((s, a) =>
        t(
          (c) => e(c).fork(s, a),
          (c) => r(c).fork(s, a)
        )
      ),
  }),
  oe = (t) => Ot((e, r) => r(t)),
  vr = (t) => Ot((e, r) => r(t)),
  cr = (t) => Ot((e, r) => e(t)),
  de =
    (t) =>
    (...e) =>
      Ot((r, s) =>
        t(...e)
          .then(s)
          .catch(r)
      );
function zf({ fetch: t, MU_URL: e, logger: r }) {
  const s = r.child("deployMessage");
  return (a) =>
    oe(a)
      .chain(
        de(({ processId: c, data: l, tags: u, anchor: f, signer: p }) =>
          p({ data: l, tags: u, target: c, anchor: f })
        )
      )
      .chain((c) =>
        oe(c)
          .chain(
            de(async (l) =>
              t(e, {
                method: "POST",
                headers: {
                  "Content-Type": "application/octet-stream",
                  Accept: "application/json",
                },
                redirect: "follow",
                body: l.raw,
              })
            )
          )
          .bichain(
            (l) =>
              cr(
                new Error(
                  `Error while communicating with MU: ${JSON.stringify(l)}`
                )
              ),
            de(async (l) => {
              if (l.ok) return l.json();
              throw new Error(`${l.status}: ${await l.text()}`);
            })
          )
          .bimap(
            s.tap("Error encountered when writing message via MU"),
            s.tap("Successfully wrote message via MU")
          )
          .map((l) => ({ res: l, messageId: c.id }))
      )
      .toPromise();
}
function Vf({ fetch: t, MU_URL: e, logger: r }) {
  const s = r.child("deployProcess");
  return (a) =>
    oe(a)
      .chain(de(({ data: c, tags: l, signer: u }) => u({ data: c, tags: l })))
      .chain((c) =>
        oe(c)
          .chain(
            de(async (l) =>
              t(e, {
                method: "POST",
                headers: {
                  "Content-Type": "application/octet-stream",
                  Accept: "application/json",
                },
                redirect: "follow",
                body: l.raw,
              })
            )
          )
          .bichain(
            (l) =>
              cr(
                new Error(
                  `Error while communicating with MU: ${JSON.stringify(l)}`
                )
              ),
            de(async (l) => {
              if (l.ok) return l.json();
              throw new Error(`${l.status}: ${await l.text()}`);
            })
          )
          .bimap(
            s.tap("Error encountered when deploying process via MU"),
            s.tap("Successfully deployed process via MU")
          )
          .map((l) => ({ res: l, processId: c.id }))
      )
      .toPromise();
}
function Wf({ fetch: t, MU_URL: e, logger: r }) {
  const s = r.child("deployMonitor");
  return (a) =>
    oe(a)
      .chain(
        de(({ processId: c, data: l, tags: u, anchor: f, signer: p }) =>
          p({ data: l, tags: u, target: c, anchor: f })
        )
      )
      .chain((c) =>
        oe(c)
          .chain(
            de(async (l) =>
              t(e + "/monitor/" + a.processId, {
                method: "POST",
                headers: {
                  "Content-Type": "application/octet-stream",
                  Accept: "application/json",
                },
                redirect: "follow",
                body: l.raw,
              })
            )
          )
          .bichain(
            (l) =>
              cr(
                new Error(
                  `Error while communicating with MU: ${JSON.stringify(l)}`
                )
              ),
            de(async (l) => {
              if (l.ok) return { ok: !0 };
              throw new Error(`${l.status}: ${await l.text()}`);
            })
          )
          .bimap(
            s.tap("Error encountered when subscribing to process via MU"),
            s.tap("Successfully subscribed to process via MU")
          )
          .map((l) => ({ res: l, messageId: c.id }))
      )
      .toPromise();
}
function Gf({ fetch: t, MU_URL: e, logger: r }) {
  const s = r.child("deployUnmonitor");
  return (a) =>
    oe(a)
      .chain(
        de(({ processId: c, data: l, tags: u, anchor: f, signer: p }) =>
          p({ data: l, tags: u, target: c, anchor: f })
        )
      )
      .chain((c) =>
        oe(c)
          .chain(
            de(async (l) =>
              t(e + "/monitor/" + a.processId, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/octet-stream",
                  Accept: "application/json",
                },
                redirect: "follow",
                body: l.raw,
              })
            )
          )
          .bichain(
            (l) =>
              cr(
                new Error(
                  `Error while communicating with MU: ${JSON.stringify(l)}`
                )
              ),
            de(async (l) => {
              if (l.ok) return { ok: !0 };
              throw new Error(`${l.status}: ${await l.text()}`);
            })
          )
          .bimap(
            s.tap("Error encountered when unsubscribing to process via MU"),
            s.tap("Successfully unsubscribed to process via MU")
          )
          .map((l) => ({ res: l, messageId: c.id }))
      )
      .toPromise();
}
function qf({ fetch: t, MU_URL: e, logger: r }) {
  const s = r.child("deployAssign");
  return (a) =>
    oe(a)
      .chain(
        de(async ({ process: c, message: l, baseLayer: u, exclude: f }) =>
          t(
            `${e}?process-id=${c}&assign=${l}${u ? "&base-layer" : ""}${
              f ? "&exclude=" + f.join(",") : ""
            }`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/octet-stream",
                Accept: "application/json",
              },
            }
          )
        )
      )
      .bichain(
        (c) =>
          cr(
            new Error(`Error while communicating with MU: ${JSON.stringify(c)}`)
          ),
        de(async (c) => {
          if (c.ok) return c.json();
          throw new Error(`${c.status}: ${await c.text()}`);
        })
      )
      .bimap(
        s.tap("Error encountered when writing assignment via MU"),
        s.tap("Successfully wrote assignment via MU")
      )
      .map((c) => ({ res: c, assignmentId: c.id }))
      .toPromise();
}
function Kf({ fetch: t, CU_URL: e, logger: r }) {
  return (s) =>
    oe(s)
      .map(r.tap("posting dryrun request to CU"))
      .chain(
        de((a) =>
          t(`${e}/dry-run?process-id=${a.Target}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
            body: JSON.stringify(a),
          }).then((c) => c.json())
        )
      )
      .toPromise();
}
function Hf({ fetch: t, CU_URL: e, logger: r }) {
  return ({ id: s, processId: a }) =>
    oe(`${e}/result/${s}?process-id=${a}`)
      .map(r.tap("fetching message result from CU"))
      .chain(
        de(async (c) =>
          t(c, {
            method: "GET",
            headers: { Accept: "application/json" },
            redirect: "follow",
          }).then((l) => l.json())
        )
      )
      .toPromise();
}
function Yf({ fetch: t, CU_URL: e, logger: r }) {
  return ({ process: s, from: a, to: c, sort: l, limit: u }) => {
    const f = new URL(`${e}/results/${s}`),
      p = new URLSearchParams(f.search);
    return (
      a && p.append("from", a),
      c && p.append("to", c),
      l && p.append("sort", l),
      u && p.append("limit", u),
      (f.search = p),
      oe(f.toString())
        .map(r.tap("fetching message result from CU"))
        .chain(
          de(async (b) =>
            t(b, {
              method: "GET",
              headers: { Accept: "application/json" },
              redirect: "follow",
            }).then((v) => v.json())
          )
        )
        .toPromise()
    );
  };
}
var Qf = Xs(Fc()),
  wn,
  Xf = ({ MAX_SIZE: t }) => wn || ((wn = new Qf.default(t)), wn),
  fs =
    ({ logger: t, fetch: e, cache: r = wn }) =>
    async ({ suUrl: s, processId: a }) =>
      r.has(a)
        ? r.get(a)
        : e(`${s}/processes/${a}`, { method: "GET", redirect: "follow" })
            .then(async (c) => {
              if (c.ok) return c.json();
              throw (
                (t(
                  "Error Encountered when fetching process meta from SU '%s' for process '%s'",
                  s,
                  a
                ),
                new Error(
                  `Encountered Error fetching scheduled messages from Scheduler Unit: ${
                    c.status
                  }: ${await c.text()}`
                ))
              );
            })
            .then(
              (c) => (
                t("Caching process meta for process '%s'", a),
                r.set(a, { tags: c.tags }),
                c
              )
            ),
  Jf = function () {
    return !1;
  },
  ed = Jf,
  td = function () {
    return !0;
  },
  iu = td,
  Ct = { "@@functional/placeholder": !0 };
function we(t) {
  return (
    t != null && typeof t == "object" && t["@@functional/placeholder"] === !0
  );
}
function xe(t) {
  return function e(r) {
    return arguments.length === 0 || we(r) ? e : t.apply(this, arguments);
  };
}
function be(t) {
  return function e(r, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return we(r)
          ? e
          : xe(function (a) {
              return t(r, a);
            });
      default:
        return we(r) && we(s)
          ? e
          : we(r)
          ? xe(function (a) {
              return t(a, s);
            })
          : we(s)
          ? xe(function (a) {
              return t(r, a);
            })
          : t(r, s);
    }
  };
}
function rd(t, e) {
  (t = t || []), (e = e || []);
  var r,
    s = t.length,
    a = e.length,
    c = [];
  for (r = 0; r < s; ) (c[c.length] = t[r]), (r += 1);
  for (r = 0; r < a; ) (c[c.length] = e[r]), (r += 1);
  return c;
}
function li(t, e) {
  switch (t) {
    case 0:
      return function () {
        return e.apply(this, arguments);
      };
    case 1:
      return function (r) {
        return e.apply(this, arguments);
      };
    case 2:
      return function (r, s) {
        return e.apply(this, arguments);
      };
    case 3:
      return function (r, s, a) {
        return e.apply(this, arguments);
      };
    case 4:
      return function (r, s, a, c) {
        return e.apply(this, arguments);
      };
    case 5:
      return function (r, s, a, c, l) {
        return e.apply(this, arguments);
      };
    case 6:
      return function (r, s, a, c, l, u) {
        return e.apply(this, arguments);
      };
    case 7:
      return function (r, s, a, c, l, u, f) {
        return e.apply(this, arguments);
      };
    case 8:
      return function (r, s, a, c, l, u, f, p) {
        return e.apply(this, arguments);
      };
    case 9:
      return function (r, s, a, c, l, u, f, p, b) {
        return e.apply(this, arguments);
      };
    case 10:
      return function (r, s, a, c, l, u, f, p, b, v) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error(
        "First argument to _arity must be a non-negative integer no greater than ten"
      );
  }
}
function su(t, e, r) {
  return function () {
    for (
      var s = [], a = 0, c = t, l = 0, u = !1;
      l < e.length || a < arguments.length;

    ) {
      var f;
      l < e.length && (!we(e[l]) || a >= arguments.length)
        ? (f = e[l])
        : ((f = arguments[a]), (a += 1)),
        (s[l] = f),
        we(f) ? (u = !0) : (c -= 1),
        (l += 1);
    }
    return !u && c <= 0 ? r.apply(this, s) : li(Math.max(0, c), su(t, s, r));
  };
}
var nd = be(function (e, r) {
    return e === 1 ? xe(r) : li(e, su(e, [], r));
  }),
  Ji = nd;
function Yr(t) {
  return function e(r, s, a) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return we(r)
          ? e
          : be(function (c, l) {
              return t(r, c, l);
            });
      case 2:
        return we(r) && we(s)
          ? e
          : we(r)
          ? be(function (c, l) {
              return t(c, s, l);
            })
          : we(s)
          ? be(function (c, l) {
              return t(r, c, l);
            })
          : xe(function (c) {
              return t(r, s, c);
            });
      default:
        return we(r) && we(s) && we(a)
          ? e
          : we(r) && we(s)
          ? be(function (c, l) {
              return t(c, l, a);
            })
          : we(r) && we(a)
          ? be(function (c, l) {
              return t(c, s, l);
            })
          : we(s) && we(a)
          ? be(function (c, l) {
              return t(r, c, l);
            })
          : we(r)
          ? xe(function (c) {
              return t(c, s, a);
            })
          : we(s)
          ? xe(function (c) {
              return t(r, c, a);
            })
          : we(a)
          ? xe(function (c) {
              return t(r, s, c);
            })
          : t(r, s, a);
    }
  };
}
var Dr =
  Array.isArray ||
  function (e) {
    return (
      e != null &&
      e.length >= 0 &&
      Object.prototype.toString.call(e) === "[object Array]"
    );
  };
function id(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function es(t, e, r) {
  return function () {
    if (arguments.length === 0) return r();
    var s = arguments[arguments.length - 1];
    if (!Dr(s)) {
      for (var a = 0; a < t.length; ) {
        if (typeof s[t[a]] == "function")
          return s[t[a]].apply(s, Array.prototype.slice.call(arguments, 0, -1));
        a += 1;
      }
      if (id(s)) {
        var c = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return c(s);
      }
    }
    return r.apply(this, arguments);
  };
}
var Tt = {
  init: function () {
    return this.xf["@@transducer/init"]();
  },
  result: function (t) {
    return this.xf["@@transducer/result"](t);
  },
};
function qa(t) {
  for (var e = [], r; !(r = t.next()).done; ) e.push(r.value);
  return e;
}
function Ka(t, e, r) {
  for (var s = 0, a = r.length; s < a; ) {
    if (t(e, r[s])) return !0;
    s += 1;
  }
  return !1;
}
function sd(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function zr(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ad(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
var ds = typeof Object.is == "function" ? Object.is : ad,
  Ha = Object.prototype.toString,
  od = (function () {
    return Ha.call(arguments) === "[object Arguments]"
      ? function (e) {
          return Ha.call(e) === "[object Arguments]";
        }
      : function (e) {
          return zr("callee", e);
        };
  })(),
  ud = od,
  cd = !{ toString: null }.propertyIsEnumerable("toString"),
  Ya = [
    "constructor",
    "valueOf",
    "isPrototypeOf",
    "toString",
    "propertyIsEnumerable",
    "hasOwnProperty",
    "toLocaleString",
  ],
  Qa = (function () {
    return arguments.propertyIsEnumerable("length");
  })(),
  ld = function (e, r) {
    for (var s = 0; s < e.length; ) {
      if (e[s] === r) return !0;
      s += 1;
    }
    return !1;
  },
  hd = xe(
    typeof Object.keys == "function" && !Qa
      ? function (e) {
          return Object(e) !== e ? [] : Object.keys(e);
        }
      : function (e) {
          if (Object(e) !== e) return [];
          var r,
            s,
            a = [],
            c = Qa && ud(e);
          for (r in e) zr(r, e) && (!c || r !== "length") && (a[a.length] = r);
          if (cd)
            for (s = Ya.length - 1; s >= 0; )
              (r = Ya[s]), zr(r, e) && !ld(a, r) && (a[a.length] = r), (s -= 1);
          return a;
        }
  ),
  Vr = hd,
  fd = xe(function (e) {
    return e === null
      ? "Null"
      : e === void 0
      ? "Undefined"
      : Object.prototype.toString.call(e).slice(8, -1);
  }),
  Xa = fd;
function Ja(t, e, r, s) {
  var a = qa(t),
    c = qa(e);
  function l(u, f) {
    return la(u, f, r.slice(), s.slice());
  }
  return !Ka(
    function (u, f) {
      return !Ka(l, f, u);
    },
    c,
    a
  );
}
function la(t, e, r, s) {
  if (ds(t, e)) return !0;
  var a = Xa(t);
  if (a !== Xa(e)) return !1;
  if (
    typeof t["fantasy-land/equals"] == "function" ||
    typeof e["fantasy-land/equals"] == "function"
  )
    return (
      typeof t["fantasy-land/equals"] == "function" &&
      t["fantasy-land/equals"](e) &&
      typeof e["fantasy-land/equals"] == "function" &&
      e["fantasy-land/equals"](t)
    );
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return (
      typeof t.equals == "function" &&
      t.equals(e) &&
      typeof e.equals == "function" &&
      e.equals(t)
    );
  switch (a) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && sd(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && ds(t.valueOf(), e.valueOf()))) return !1;
      break;
    case "Date":
      if (!ds(t.valueOf(), e.valueOf())) return !1;
      break;
    case "Error":
      return t.name === e.name && t.message === e.message;
    case "RegExp":
      if (
        !(
          t.source === e.source &&
          t.global === e.global &&
          t.ignoreCase === e.ignoreCase &&
          t.multiline === e.multiline &&
          t.sticky === e.sticky &&
          t.unicode === e.unicode
        )
      )
        return !1;
      break;
  }
  for (var c = r.length - 1; c >= 0; ) {
    if (r[c] === t) return s[c] === e;
    c -= 1;
  }
  switch (a) {
    case "Map":
      return t.size !== e.size
        ? !1
        : Ja(t.entries(), e.entries(), r.concat([t]), s.concat([e]));
    case "Set":
      return t.size !== e.size
        ? !1
        : Ja(t.values(), e.values(), r.concat([t]), s.concat([e]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return !1;
  }
  var l = Vr(t);
  if (l.length !== Vr(e).length) return !1;
  var u = r.concat([t]),
    f = s.concat([e]);
  for (c = l.length - 1; c >= 0; ) {
    var p = l[c];
    if (!(zr(p, e) && la(e[p], t[p], u, f))) return !1;
    c -= 1;
  }
  return !0;
}
var dd = be(function (e, r) {
    return la(e, r, [], []);
  }),
  Sn = dd;
function pd(t, e, r) {
  var s, a;
  if (typeof t.indexOf == "function")
    switch (typeof e) {
      case "number":
        if (e === 0) {
          for (s = 1 / e; r < t.length; ) {
            if (((a = t[r]), a === 0 && 1 / a === s)) return r;
            r += 1;
          }
          return -1;
        } else if (e !== e) {
          for (; r < t.length; ) {
            if (((a = t[r]), typeof a == "number" && a !== a)) return r;
            r += 1;
          }
          return -1;
        }
        return t.indexOf(e, r);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return t.indexOf(e, r);
      case "object":
        if (e === null) return t.indexOf(e, r);
    }
  for (; r < t.length; ) {
    if (Sn(t[r], e)) return r;
    r += 1;
  }
  return -1;
}
function au(t, e) {
  return pd(e, t, 0) >= 0;
}
function Ei(t, e) {
  for (var r = 0, s = e.length, a = Array(s); r < s; )
    (a[r] = t(e[r])), (r += 1);
  return a;
}
function ps(t) {
  var e = t
    .replace(/\\/g, "\\\\")
    .replace(/[\b]/g, "\\b")
    .replace(/\f/g, "\\f")
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t")
    .replace(/\v/g, "\\v")
    .replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var dn = function (e) {
    return (e < 10 ? "0" : "") + e;
  },
  gd =
    typeof Date.prototype.toISOString == "function"
      ? function (e) {
          return e.toISOString();
        }
      : function (e) {
          return (
            e.getUTCFullYear() +
            "-" +
            dn(e.getUTCMonth() + 1) +
            "-" +
            dn(e.getUTCDate()) +
            "T" +
            dn(e.getUTCHours()) +
            ":" +
            dn(e.getUTCMinutes()) +
            ":" +
            dn(e.getUTCSeconds()) +
            "." +
            (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
            "Z"
          );
        },
  md = gd;
function yd(t) {
  return function () {
    return !t.apply(this, arguments);
  };
}
function ou(t, e, r) {
  for (var s = 0, a = r.length; s < a; ) (e = t(e, r[s])), (s += 1);
  return e;
}
function vd(t, e) {
  for (var r = 0, s = e.length, a = []; r < s; )
    t(e[r]) && (a[a.length] = e[r]), (r += 1);
  return a;
}
function wd(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var bd = (function () {
  function t(e, r) {
    (this.xf = r), (this.f = e);
  }
  return (
    (t.prototype["@@transducer/init"] = Tt.init),
    (t.prototype["@@transducer/result"] = Tt.result),
    (t.prototype["@@transducer/step"] = function (e, r) {
      return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
    }),
    t
  );
})();
function _d(t) {
  return function (e) {
    return new bd(t, e);
  };
}
var Ed = be(
    es(["fantasy-land/filter", "filter"], _d, function (t, e) {
      return wd(e)
        ? ou(
            function (r, s) {
              return t(e[s]) && (r[s] = e[s]), r;
            },
            {},
            Vr(e)
          )
        : vd(t, e);
    })
  ),
  Ad = Ed,
  Sd = be(function (e, r) {
    return Ad(yd(e), r);
  }),
  Td = Sd;
function uu(t, e) {
  var r = function (l) {
      var u = e.concat([t]);
      return au(l, u) ? "<Circular>" : uu(l, u);
    },
    s = function (c, l) {
      return Ei(function (u) {
        return ps(u) + ": " + r(c[u]);
      }, l.slice().sort());
    };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + Ei(r, t).join(", ") + "))";
    case "[object Array]":
      return (
        "[" +
        Ei(r, t)
          .concat(
            s(
              t,
              Td(function (c) {
                return /^\d+$/.test(c);
              }, Vr(t))
            )
          )
          .join(", ") +
        "]"
      );
    case "[object Boolean]":
      return typeof t == "object"
        ? "new Boolean(" + r(t.valueOf()) + ")"
        : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : ps(md(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object"
        ? "new Number(" + r(t.valueOf()) + ")"
        : 1 / t === -1 / 0
        ? "-0"
        : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object"
        ? "new String(" + r(t.valueOf()) + ")"
        : ps(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var a = t.toString();
        if (a !== "[object Object]") return a;
      }
      return "{" + s(t, Vr(t)).join(", ") + "}";
  }
}
var xd = xe(function (e) {
    return uu(e, []);
  }),
  Cr = xd,
  kd = be(function (e, r) {
    if (e === r) return r;
    function s(f, p) {
      if (f > p != p > f) return p > f ? p : f;
    }
    var a = s(e, r);
    if (a !== void 0) return a;
    var c = s(typeof e, typeof r);
    if (c !== void 0) return c === typeof e ? e : r;
    var l = Cr(e),
      u = s(l, Cr(r));
    return u !== void 0 && u === l ? e : r;
  }),
  Bd = kd,
  Od = (function () {
    function t(e, r) {
      (this.xf = r), (this.f = e);
    }
    return (
      (t.prototype["@@transducer/init"] = Tt.init),
      (t.prototype["@@transducer/result"] = Tt.result),
      (t.prototype["@@transducer/step"] = function (e, r) {
        return this.xf["@@transducer/step"](e, this.f(r));
      }),
      t
    );
  })(),
  Rd = function (e) {
    return function (r) {
      return new Od(e, r);
    };
  },
  cu = Rd,
  Id = be(
    es(["fantasy-land/map", "map"], cu, function (e, r) {
      switch (Object.prototype.toString.call(r)) {
        case "[object Function]":
          return Ji(r.length, function () {
            return e.call(this, r.apply(this, arguments));
          });
        case "[object Object]":
          return ou(
            function (s, a) {
              return (s[a] = e(r[a])), s;
            },
            {},
            Vr(r)
          );
        default:
          return Ei(e, r);
      }
    })
  ),
  ha = Id,
  ts =
    Number.isInteger ||
    function (e) {
      return e << 0 === e;
    };
function ji(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function lu(t, e) {
  var r = t < 0 ? e.length + t : t;
  return ji(e) ? e.charAt(r) : e[r];
}
var Cd = be(function (e, r) {
    if (r != null) return ts(e) ? lu(e, r) : r[e];
  }),
  wr = Cd,
  Ld = xe(function (e) {
    return Dr(e)
      ? !0
      : !e || typeof e != "object" || ji(e)
      ? !1
      : e.length === 0
      ? !0
      : e.length > 0
      ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1)
      : !1;
  }),
  fa = Ld,
  eo = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function Ud(t, e, r) {
  return function (a, c, l) {
    if (fa(l)) return t(a, c, l);
    if (l == null) return c;
    if (typeof l["fantasy-land/reduce"] == "function")
      return e(a, c, l, "fantasy-land/reduce");
    if (l[eo] != null) return r(a, c, l[eo]());
    if (typeof l.next == "function") return r(a, c, l);
    if (typeof l.reduce == "function") return e(a, c, l, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function hu(t, e, r) {
  for (var s = 0, a = r.length; s < a; ) {
    if (
      ((e = t["@@transducer/step"](e, r[s])), e && e["@@transducer/reduced"])
    ) {
      e = e["@@transducer/value"];
      break;
    }
    s += 1;
  }
  return t["@@transducer/result"](e);
}
var Md = be(function (e, r) {
    return li(e.length, function () {
      return e.apply(r, arguments);
    });
  }),
  Nd = Md;
function Pd(t, e, r) {
  for (var s = r.next(); !s.done; ) {
    if (
      ((e = t["@@transducer/step"](e, s.value)), e && e["@@transducer/reduced"])
    ) {
      e = e["@@transducer/value"];
      break;
    }
    s = r.next();
  }
  return t["@@transducer/result"](e);
}
function jd(t, e, r, s) {
  return t["@@transducer/result"](r[s](Nd(t["@@transducer/step"], t), e));
}
var Fd = Ud(hu, jd, Pd),
  fu = Fd,
  Zd = (function () {
    function t(e) {
      this.f = e;
    }
    return (
      (t.prototype["@@transducer/init"] = function () {
        throw new Error("init not implemented on XWrap");
      }),
      (t.prototype["@@transducer/result"] = function (e) {
        return e;
      }),
      (t.prototype["@@transducer/step"] = function (e, r) {
        return this.f(e, r);
      }),
      t
    );
  })();
function $d(t) {
  return new Zd(t);
}
var Dd = Yr(function (t, e, r) {
    return fu(typeof t == "function" ? $d(t) : t, e, r);
  }),
  Dn = Dd,
  zd = xe(function (e) {
    return function () {
      return e;
    };
  }),
  du = zd,
  Vd = be(function (e, r) {
    return rd(r, [e]);
  }),
  Wd = Vd,
  Gd = xe(function (e) {
    return Ji(e.length, e);
  }),
  Qr = Gd;
function qd(t, e, r) {
  if (ts(t) && Dr(r)) {
    var s = [].concat(r);
    return (s[t] = e), s;
  }
  var a = {};
  for (var c in r) a[c] = r[c];
  return (a[t] = e), a;
}
var Kd = xe(function (e) {
    return e == null;
  }),
  Fi = Kd,
  Hd = Yr(function t(e, r, s) {
    if (e.length === 0) return r;
    var a = e[0];
    if (e.length > 1) {
      var c =
        !Fi(s) && zr(a, s) && typeof s[a] == "object"
          ? s[a]
          : ts(e[1])
          ? []
          : {};
      r = t(Array.prototype.slice.call(e, 1), r, c);
    }
    return qd(a, r, s);
  }),
  Yd = Hd,
  Qd = Yr(function (e, r, s) {
    return Yd([e], r, s);
  }),
  $e = Qd;
function Us(t) {
  var e = Object.prototype.toString.call(t);
  return (
    e === "[object Function]" ||
    e === "[object AsyncFunction]" ||
    e === "[object GeneratorFunction]" ||
    e === "[object AsyncGeneratorFunction]"
  );
}
function Xd(t) {
  return function (r) {
    for (var s, a, c, l = [], u = 0, f = r.length; u < f; ) {
      if (fa(r[u]))
        for (s = r[u], c = 0, a = s.length; c < a; )
          (l[l.length] = s[c]), (c += 1);
      else l[l.length] = r[u];
      u += 1;
    }
    return l;
  };
}
function Jd(t) {
  return { "@@transducer/value": t, "@@transducer/reduced": !0 };
}
var pu = "@@transducer/init",
  Ms = "@@transducer/step",
  gu = "@@transducer/result",
  ep = (function () {
    function t(e) {
      this.xf = e;
    }
    return (
      (t.prototype[pu] = Tt.init),
      (t.prototype[gu] = Tt.result),
      (t.prototype[Ms] = function (e, r) {
        var s = this.xf[Ms](e, r);
        return s["@@transducer/reduced"] ? Jd(s) : s;
      }),
      t
    );
  })(),
  tp = (function () {
    function t(e) {
      this.xf = new ep(e);
    }
    return (
      (t.prototype[pu] = Tt.init),
      (t.prototype[gu] = Tt.result),
      (t.prototype[Ms] = function (e, r) {
        return fa(r) ? fu(this.xf, e, r) : hu(this.xf, e, [r]);
      }),
      t
    );
  })(),
  rp = function (e) {
    return new tp(e);
  },
  np = rp;
function ip(t) {
  return function (e) {
    return cu(t)(np(e));
  };
}
var sp = be(
    es(["fantasy-land/chain", "chain"], ip, function (e, r) {
      return typeof r == "function"
        ? function (s) {
            return e(r(s))(s);
          }
        : Xd()(ha(e, r));
    })
  ),
  ap = sp;
function op(t, e) {
  return function () {
    return e.call(this, t.apply(this, arguments));
  };
}
function mu(t, e) {
  return function () {
    var r = arguments.length;
    if (r === 0) return e();
    var s = arguments[r - 1];
    return Dr(s) || typeof s[t] != "function"
      ? e.apply(this, arguments)
      : s[t].apply(s, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var up = Yr(
    mu("slice", function (e, r, s) {
      return Array.prototype.slice.call(s, e, r);
    })
  ),
  cp = up,
  lp = xe(mu("tail", cp(1, 1 / 0))),
  hp = lp;
function ar() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return li(arguments[0].length, Dn(op, arguments[0], hp(arguments)));
}
function fp(t) {
  return t;
}
var dp = xe(fp),
  Er = dp,
  pp = be(function (e, r) {
    if (Dr(e)) {
      if (Dr(r)) return e.concat(r);
      throw new TypeError(Cr(r) + " is not an array");
    }
    if (ji(e)) {
      if (ji(r)) return e + r;
      throw new TypeError(Cr(r) + " is not a string");
    }
    if (e != null && Us(e["fantasy-land/concat"]))
      return e["fantasy-land/concat"](r);
    if (e != null && Us(e.concat)) return e.concat(r);
    throw new TypeError(
      Cr(e) + ' does not have a method named "concat" or "fantasy-land/concat"'
    );
  }),
  gp = pp,
  mp = xe(function (e) {
    var r = Dn(
      Bd,
      0,
      ha(function (s) {
        return s[0].length;
      }, e)
    );
    return li(r, function () {
      for (var s = 0; s < e.length; ) {
        if (e[s][0].apply(this, arguments))
          return e[s][1].apply(this, arguments);
        s += 1;
      }
    });
  }),
  yu = mp,
  yp = be(function (e, r) {
    return r == null || r !== r ? e : r;
  }),
  rs = yp,
  vp = be(function (e, r) {
    if (e.length === 0 || Fi(r)) return !1;
    for (var s = r, a = 0; a < e.length; )
      if (!Fi(s) && zr(e[a], s)) (s = s[e[a]]), (a += 1);
      else return !1;
    return !0;
  }),
  wp = vp,
  bp = be(function (e, r) {
    return wp([e], r);
  }),
  _p = bp,
  Ep = Yr(function (e, r, s) {
    return Ji(Math.max(e.length, r.length, s.length), function () {
      return e.apply(this, arguments)
        ? r.apply(this, arguments)
        : s.apply(this, arguments);
    });
  }),
  vu = Ep,
  Ap = be(au),
  Sp = Ap,
  Tp = be(function (e, r) {
    return Ji(e + 1, function () {
      var s = arguments[e];
      if (s != null && Us(s[r]))
        return s[r].apply(s, Array.prototype.slice.call(arguments, 0, e));
      throw new TypeError(Cr(s) + ' does not have a method named "' + r + '"');
    });
  }),
  xp = Tp,
  kp = be(function (e, r) {
    return (
      r instanceof e ||
      (r != null &&
        (r.constructor === e || (e.name === "Object" && typeof r == "object")))
    );
  }),
  Tn = kp,
  Bp = xe(function (e) {
    return !Fi(e);
  }),
  gs = Bp,
  Op = xp(1, "join"),
  Rp = Op;
function Ip(t, e) {
  for (var r = e, s = 0; s < t.length; s += 1) {
    if (r == null) return;
    var a = t[s];
    ts(a) ? (r = lu(a, r)) : (r = r[a]);
  }
  return r;
}
var Cp = be(Ip),
  Lp = Cp,
  Up = Yr(function (e, r, s) {
    return rs(e, wr(r, s));
  }),
  Mp = Up,
  Np = (function () {
    function t(e, r) {
      (this.xf = r), (this.f = e);
    }
    return (
      (t.prototype["@@transducer/init"] = Tt.init),
      (t.prototype["@@transducer/result"] = Tt.result),
      (t.prototype["@@transducer/step"] = function (e, r) {
        return this.f(r), this.xf["@@transducer/step"](e, r);
      }),
      t
    );
  })();
function Pp(t) {
  return function (e) {
    return new Np(t, e);
  };
}
var jp = be(
    es([], Pp, function (e, r) {
      return e(r), r;
    })
  ),
  Fp = jp,
  ce;
(function (t) {
  t.assertEqual = (a) => a;
  function e(a) {}
  t.assertIs = e;
  function r(a) {
    throw new Error();
  }
  (t.assertNever = r),
    (t.arrayToEnum = (a) => {
      const c = {};
      for (const l of a) c[l] = l;
      return c;
    }),
    (t.getValidEnumValues = (a) => {
      const c = t.objectKeys(a).filter((u) => typeof a[a[u]] != "number"),
        l = {};
      for (const u of c) l[u] = a[u];
      return t.objectValues(l);
    }),
    (t.objectValues = (a) =>
      t.objectKeys(a).map(function (c) {
        return a[c];
      })),
    (t.objectKeys =
      typeof Object.keys == "function"
        ? (a) => Object.keys(a)
        : (a) => {
            const c = [];
            for (const l in a)
              Object.prototype.hasOwnProperty.call(a, l) && c.push(l);
            return c;
          }),
    (t.find = (a, c) => {
      for (const l of a) if (c(l)) return l;
    }),
    (t.isInteger =
      typeof Number.isInteger == "function"
        ? (a) => Number.isInteger(a)
        : (a) => typeof a == "number" && isFinite(a) && Math.floor(a) === a);
  function s(a, c = " | ") {
    return a.map((l) => (typeof l == "string" ? `'${l}'` : l)).join(c);
  }
  (t.joinValues = s),
    (t.jsonStringifyReplacer = (a, c) =>
      typeof c == "bigint" ? c.toString() : c);
})(ce || (ce = {}));
var Ns;
(function (t) {
  t.mergeShapes = (e, r) => ({ ...e, ...r });
})(Ns || (Ns = {}));
var $ = ce.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  rr = (t) => {
    switch (typeof t) {
      case "undefined":
        return $.undefined;
      case "string":
        return $.string;
      case "number":
        return isNaN(t) ? $.nan : $.number;
      case "boolean":
        return $.boolean;
      case "function":
        return $.function;
      case "bigint":
        return $.bigint;
      case "symbol":
        return $.symbol;
      case "object":
        return Array.isArray(t)
          ? $.array
          : t === null
          ? $.null
          : t.then &&
            typeof t.then == "function" &&
            t.catch &&
            typeof t.catch == "function"
          ? $.promise
          : typeof Map < "u" && t instanceof Map
          ? $.map
          : typeof Set < "u" && t instanceof Set
          ? $.set
          : typeof Date < "u" && t instanceof Date
          ? $.date
          : $.object;
      default:
        return $.unknown;
    }
  },
  O = ce.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  Zp = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:"),
  Qe = class wu extends Error {
    constructor(e) {
      super(),
        (this.issues = []),
        (this.addIssue = (s) => {
          this.issues = [...this.issues, s];
        }),
        (this.addIssues = (s = []) => {
          this.issues = [...this.issues, ...s];
        });
      const r = new.target.prototype;
      Object.setPrototypeOf
        ? Object.setPrototypeOf(this, r)
        : (this.__proto__ = r),
        (this.name = "ZodError"),
        (this.issues = e);
    }
    get errors() {
      return this.issues;
    }
    format(e) {
      const r =
          e ||
          function (c) {
            return c.message;
          },
        s = { _errors: [] },
        a = (c) => {
          for (const l of c.issues)
            if (l.code === "invalid_union") l.unionErrors.map(a);
            else if (l.code === "invalid_return_type") a(l.returnTypeError);
            else if (l.code === "invalid_arguments") a(l.argumentsError);
            else if (l.path.length === 0) s._errors.push(r(l));
            else {
              let u = s,
                f = 0;
              for (; f < l.path.length; ) {
                const p = l.path[f];
                f === l.path.length - 1
                  ? ((u[p] = u[p] || { _errors: [] }), u[p]._errors.push(r(l)))
                  : (u[p] = u[p] || { _errors: [] }),
                  (u = u[p]),
                  f++;
              }
            }
        };
      return a(this), s;
    }
    static assert(e) {
      if (!(e instanceof wu)) throw new Error(`Not a ZodError: ${e}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, ce.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (r) => r.message) {
      const r = {},
        s = [];
      for (const a of this.issues)
        a.path.length > 0
          ? ((r[a.path[0]] = r[a.path[0]] || []), r[a.path[0]].push(e(a)))
          : s.push(e(a));
      return { formErrors: s, fieldErrors: r };
    }
    get formErrors() {
      return this.flatten();
    }
  };
Qe.create = (t) => new Qe(t);
var Wr = (t, e) => {
    let r;
    switch (t.code) {
      case O.invalid_type:
        t.received === $.undefined
          ? (r = "Required")
          : (r = `Expected ${t.expected}, received ${t.received}`);
        break;
      case O.invalid_literal:
        r = `Invalid literal value, expected ${JSON.stringify(
          t.expected,
          ce.jsonStringifyReplacer
        )}`;
        break;
      case O.unrecognized_keys:
        r = `Unrecognized key(s) in object: ${ce.joinValues(t.keys, ", ")}`;
        break;
      case O.invalid_union:
        r = "Invalid input";
        break;
      case O.invalid_union_discriminator:
        r = `Invalid discriminator value. Expected ${ce.joinValues(t.options)}`;
        break;
      case O.invalid_enum_value:
        r = `Invalid enum value. Expected ${ce.joinValues(
          t.options
        )}, received '${t.received}'`;
        break;
      case O.invalid_arguments:
        r = "Invalid function arguments";
        break;
      case O.invalid_return_type:
        r = "Invalid function return type";
        break;
      case O.invalid_date:
        r = "Invalid date";
        break;
      case O.invalid_string:
        typeof t.validation == "object"
          ? "includes" in t.validation
            ? ((r = `Invalid input: must include "${t.validation.includes}"`),
              typeof t.validation.position == "number" &&
                (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`))
            : "startsWith" in t.validation
            ? (r = `Invalid input: must start with "${t.validation.startsWith}"`)
            : "endsWith" in t.validation
            ? (r = `Invalid input: must end with "${t.validation.endsWith}"`)
            : ce.assertNever(t.validation)
          : t.validation !== "regex"
          ? (r = `Invalid ${t.validation}`)
          : (r = "Invalid");
        break;
      case O.too_small:
        t.type === "array"
          ? (r = `Array must contain ${
              t.exact ? "exactly" : t.inclusive ? "at least" : "more than"
            } ${t.minimum} element(s)`)
          : t.type === "string"
          ? (r = `String must contain ${
              t.exact ? "exactly" : t.inclusive ? "at least" : "over"
            } ${t.minimum} character(s)`)
          : t.type === "number"
          ? (r = `Number must be ${
              t.exact
                ? "exactly equal to "
                : t.inclusive
                ? "greater than or equal to "
                : "greater than "
            }${t.minimum}`)
          : t.type === "date"
          ? (r = `Date must be ${
              t.exact
                ? "exactly equal to "
                : t.inclusive
                ? "greater than or equal to "
                : "greater than "
            }${new Date(Number(t.minimum))}`)
          : (r = "Invalid input");
        break;
      case O.too_big:
        t.type === "array"
          ? (r = `Array must contain ${
              t.exact ? "exactly" : t.inclusive ? "at most" : "less than"
            } ${t.maximum} element(s)`)
          : t.type === "string"
          ? (r = `String must contain ${
              t.exact ? "exactly" : t.inclusive ? "at most" : "under"
            } ${t.maximum} character(s)`)
          : t.type === "number"
          ? (r = `Number must be ${
              t.exact
                ? "exactly"
                : t.inclusive
                ? "less than or equal to"
                : "less than"
            } ${t.maximum}`)
          : t.type === "bigint"
          ? (r = `BigInt must be ${
              t.exact
                ? "exactly"
                : t.inclusive
                ? "less than or equal to"
                : "less than"
            } ${t.maximum}`)
          : t.type === "date"
          ? (r = `Date must be ${
              t.exact
                ? "exactly"
                : t.inclusive
                ? "smaller than or equal to"
                : "smaller than"
            } ${new Date(Number(t.maximum))}`)
          : (r = "Invalid input");
        break;
      case O.custom:
        r = "Invalid input";
        break;
      case O.invalid_intersection_types:
        r = "Intersection results could not be merged";
        break;
      case O.not_multiple_of:
        r = `Number must be a multiple of ${t.multipleOf}`;
        break;
      case O.not_finite:
        r = "Number must be finite";
        break;
      default:
        (r = e.defaultError), ce.assertNever(t);
    }
    return { message: r };
  },
  bu = Wr;
function $p(t) {
  bu = t;
}
function Zi() {
  return bu;
}
var $i = (t) => {
    const { data: e, path: r, errorMaps: s, issueData: a } = t,
      c = [...r, ...(a.path || [])],
      l = { ...a, path: c };
    if (a.message !== void 0) return { ...a, path: c, message: a.message };
    let u = "";
    const f = s
      .filter((p) => !!p)
      .slice()
      .reverse();
    for (const p of f) u = p(l, { data: e, defaultError: u }).message;
    return { ...a, path: c, message: u };
  },
  Dp = [];
function P(t, e) {
  const r = Zi(),
    s = $i({
      issueData: e,
      data: t.data,
      path: t.path,
      errorMaps: [
        t.common.contextualErrorMap,
        t.schemaErrorMap,
        r,
        r === Wr ? void 0 : Wr,
      ].filter((a) => !!a),
    });
  t.common.issues.push(s);
}
var ze = class _u {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      this.value === "valid" && (this.value = "dirty");
    }
    abort() {
      this.value !== "aborted" && (this.value = "aborted");
    }
    static mergeArray(e, r) {
      const s = [];
      for (const a of r) {
        if (a.status === "aborted") return J;
        a.status === "dirty" && e.dirty(), s.push(a.value);
      }
      return { status: e.value, value: s };
    }
    static async mergeObjectAsync(e, r) {
      const s = [];
      for (const a of r) {
        const c = await a.key,
          l = await a.value;
        s.push({ key: c, value: l });
      }
      return _u.mergeObjectSync(e, s);
    }
    static mergeObjectSync(e, r) {
      const s = {};
      for (const a of r) {
        const { key: c, value: l } = a;
        if (c.status === "aborted" || l.status === "aborted") return J;
        c.status === "dirty" && e.dirty(),
          l.status === "dirty" && e.dirty(),
          c.value !== "__proto__" &&
            (typeof l.value < "u" || a.alwaysSet) &&
            (s[c.value] = l.value);
      }
      return { status: e.value, value: s };
    }
  },
  J = Object.freeze({ status: "aborted" }),
  Ir = (t) => ({ status: "dirty", value: t }),
  je = (t) => ({ status: "valid", value: t }),
  Ps = (t) => t.status === "aborted",
  js = (t) => t.status === "dirty",
  zn = (t) => t.status === "valid",
  Vn = (t) => typeof Promise < "u" && t instanceof Promise;
function Di(t, e, r, s) {
  if (typeof e == "function" ? t !== e || !s : !e.has(t))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return e.get(t);
}
function Eu(t, e, r, s, a) {
  if (typeof e == "function" ? t !== e || !a : !e.has(t))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it"
    );
  return e.set(t, r), r;
}
var q;
(function (t) {
  (t.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
    (t.toString = (e) =>
      typeof e == "string" ? e : e == null ? void 0 : e.message);
})(q || (q = {}));
var bn,
  _n,
  xt = class {
    constructor(t, e, r, s) {
      (this._cachedPath = []),
        (this.parent = t),
        (this.data = e),
        (this._path = r),
        (this._key = s);
    }
    get path() {
      return (
        this._cachedPath.length ||
          (this._key instanceof Array
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  },
  to = (t, e) => {
    if (zn(e)) return { success: !0, data: e.value };
    if (!t.common.issues.length)
      throw new Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        const r = new Qe(t.common.issues);
        return (this._error = r), this._error;
      },
    };
  };
function ie(t) {
  if (!t) return {};
  const {
    errorMap: e,
    invalid_type_error: r,
    required_error: s,
    description: a,
  } = t;
  if (e && (r || s))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return e
    ? { errorMap: e, description: a }
    : {
        errorMap: (l, u) => {
          var f, p;
          const { message: b } = t;
          return l.code === "invalid_enum_value"
            ? { message: b ?? u.defaultError }
            : typeof u.data > "u"
            ? {
                message:
                  (f = b ?? s) !== null && f !== void 0 ? f : u.defaultError,
              }
            : l.code !== "invalid_type"
            ? { message: u.defaultError }
            : {
                message:
                  (p = b ?? r) !== null && p !== void 0 ? p : u.defaultError,
              };
        },
        description: a,
      };
}
var ae = class {
    constructor(t) {
      (this.spa = this.safeParseAsync),
        (this._def = t),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this));
    }
    get description() {
      return this._def.description;
    }
    _getType(t) {
      return rr(t.data);
    }
    _getOrReturnCtx(t, e) {
      return (
        e || {
          common: t.parent.common,
          data: t.data,
          parsedType: rr(t.data),
          schemaErrorMap: this._def.errorMap,
          path: t.path,
          parent: t.parent,
        }
      );
    }
    _processInputParams(t) {
      return {
        status: new ze(),
        ctx: {
          common: t.parent.common,
          data: t.data,
          parsedType: rr(t.data),
          schemaErrorMap: this._def.errorMap,
          path: t.path,
          parent: t.parent,
        },
      };
    }
    _parseSync(t) {
      const e = this._parse(t);
      if (Vn(e)) throw new Error("Synchronous parse encountered promise.");
      return e;
    }
    _parseAsync(t) {
      const e = this._parse(t);
      return Promise.resolve(e);
    }
    parse(t, e) {
      const r = this.safeParse(t, e);
      if (r.success) return r.data;
      throw r.error;
    }
    safeParse(t, e) {
      var r;
      const s = {
          common: {
            issues: [],
            async:
              (r = e == null ? void 0 : e.async) !== null && r !== void 0
                ? r
                : !1,
            contextualErrorMap: e == null ? void 0 : e.errorMap,
          },
          path: (e == null ? void 0 : e.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: t,
          parsedType: rr(t),
        },
        a = this._parseSync({ data: t, path: s.path, parent: s });
      return to(s, a);
    }
    async parseAsync(t, e) {
      const r = await this.safeParseAsync(t, e);
      if (r.success) return r.data;
      throw r.error;
    }
    async safeParseAsync(t, e) {
      const r = {
          common: {
            issues: [],
            contextualErrorMap: e == null ? void 0 : e.errorMap,
            async: !0,
          },
          path: (e == null ? void 0 : e.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: t,
          parsedType: rr(t),
        },
        s = this._parse({ data: t, path: r.path, parent: r }),
        a = await (Vn(s) ? s : Promise.resolve(s));
      return to(r, a);
    }
    refine(t, e) {
      const r = (s) =>
        typeof e == "string" || typeof e > "u"
          ? { message: e }
          : typeof e == "function"
          ? e(s)
          : e;
      return this._refinement((s, a) => {
        const c = t(s),
          l = () => a.addIssue({ code: O.custom, ...r(s) });
        return typeof Promise < "u" && c instanceof Promise
          ? c.then((u) => (u ? !0 : (l(), !1)))
          : c
          ? !0
          : (l(), !1);
      });
    }
    refinement(t, e) {
      return this._refinement((r, s) =>
        t(r) ? !0 : (s.addIssue(typeof e == "function" ? e(r, s) : e), !1)
      );
    }
    _refinement(t) {
      return new vt({
        schema: this,
        typeName: X.ZodEffects,
        effect: { type: "refinement", refinement: t },
      });
    }
    superRefine(t) {
      return this._refinement(t);
    }
    optional() {
      return At.create(this, this._def);
    }
    nullable() {
      return ur.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return br.create(this, this._def);
    }
    promise() {
      return Kr.create(this, this._def);
    }
    or(t) {
      return Qn.create([this, t], this._def);
    }
    and(t) {
      return Xn.create(this, t, this._def);
    }
    transform(t) {
      return new vt({
        ...ie(this._def),
        schema: this,
        typeName: X.ZodEffects,
        effect: { type: "transform", transform: t },
      });
    }
    default(t) {
      const e = typeof t == "function" ? t : () => t;
      return new ri({
        ...ie(this._def),
        innerType: this,
        defaultValue: e,
        typeName: X.ZodDefault,
      });
    }
    brand() {
      return new da({ typeName: X.ZodBranded, type: this, ...ie(this._def) });
    }
    catch(t) {
      const e = typeof t == "function" ? t : () => t;
      return new ni({
        ...ie(this._def),
        innerType: this,
        catchValue: e,
        typeName: X.ZodCatch,
      });
    }
    describe(t) {
      const e = this.constructor;
      return new e({ ...this._def, description: t });
    }
    pipe(t) {
      return pa.create(this, t);
    }
    readonly() {
      return ii.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  zp = /^c[^\s-]{8,}$/i,
  Vp = /^[0-9a-z]+$/,
  Wp = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  Gp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  qp = /^[a-z0-9_-]{21}$/i,
  Kp =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Hp =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Yp = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
  ms,
  Qp =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Xp =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  Jp = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  Au =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  eg = new RegExp(`^${Au}$`);
function Su(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    t.precision
      ? (e = `${e}\\.\\d{${t.precision}}`)
      : t.precision == null && (e = `${e}(\\.\\d+)?`),
    e
  );
}
function tg(t) {
  return new RegExp(`^${Su(t)}$`);
}
function Tu(t) {
  let e = `${Au}T${Su(t)}`;
  const r = [];
  return (
    r.push(t.local ? "Z?" : "Z"),
    t.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (e = `${e}(${r.join("|")})`),
    new RegExp(`^${e}$`)
  );
}
function rg(t, e) {
  return !!(
    ((e === "v4" || !e) && Qp.test(t)) ||
    ((e === "v6" || !e) && Xp.test(t))
  );
}
var Gr = class En extends ae {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== $.string)
    ) {
      const c = this._getOrReturnCtx(e);
      return (
        P(c, {
          code: O.invalid_type,
          expected: $.string,
          received: c.parsedType,
        }),
        J
      );
    }
    const s = new ze();
    let a;
    for (const c of this._def.checks)
      if (c.kind === "min")
        e.data.length < c.value &&
          ((a = this._getOrReturnCtx(e, a)),
          P(a, {
            code: O.too_small,
            minimum: c.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "max")
        e.data.length > c.value &&
          ((a = this._getOrReturnCtx(e, a)),
          P(a, {
            code: O.too_big,
            maximum: c.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "length") {
        const l = e.data.length > c.value,
          u = e.data.length < c.value;
        (l || u) &&
          ((a = this._getOrReturnCtx(e, a)),
          l
            ? P(a, {
                code: O.too_big,
                maximum: c.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: c.message,
              })
            : u &&
              P(a, {
                code: O.too_small,
                minimum: c.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: c.message,
              }),
          s.dirty());
      } else if (c.kind === "email")
        Hp.test(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          P(a, {
            validation: "email",
            code: O.invalid_string,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "emoji")
        ms || (ms = new RegExp(Yp, "u")),
          ms.test(e.data) ||
            ((a = this._getOrReturnCtx(e, a)),
            P(a, {
              validation: "emoji",
              code: O.invalid_string,
              message: c.message,
            }),
            s.dirty());
      else if (c.kind === "uuid")
        Gp.test(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          P(a, {
            validation: "uuid",
            code: O.invalid_string,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "nanoid")
        qp.test(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          P(a, {
            validation: "nanoid",
            code: O.invalid_string,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "cuid")
        zp.test(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          P(a, {
            validation: "cuid",
            code: O.invalid_string,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "cuid2")
        Vp.test(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          P(a, {
            validation: "cuid2",
            code: O.invalid_string,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "ulid")
        Wp.test(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          P(a, {
            validation: "ulid",
            code: O.invalid_string,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "url")
        try {
          new URL(e.data);
        } catch {
          (a = this._getOrReturnCtx(e, a)),
            P(a, {
              validation: "url",
              code: O.invalid_string,
              message: c.message,
            }),
            s.dirty();
        }
      else
        c.kind === "regex"
          ? ((c.regex.lastIndex = 0),
            c.regex.test(e.data) ||
              ((a = this._getOrReturnCtx(e, a)),
              P(a, {
                validation: "regex",
                code: O.invalid_string,
                message: c.message,
              }),
              s.dirty()))
          : c.kind === "trim"
          ? (e.data = e.data.trim())
          : c.kind === "includes"
          ? e.data.includes(c.value, c.position) ||
            ((a = this._getOrReturnCtx(e, a)),
            P(a, {
              code: O.invalid_string,
              validation: { includes: c.value, position: c.position },
              message: c.message,
            }),
            s.dirty())
          : c.kind === "toLowerCase"
          ? (e.data = e.data.toLowerCase())
          : c.kind === "toUpperCase"
          ? (e.data = e.data.toUpperCase())
          : c.kind === "startsWith"
          ? e.data.startsWith(c.value) ||
            ((a = this._getOrReturnCtx(e, a)),
            P(a, {
              code: O.invalid_string,
              validation: { startsWith: c.value },
              message: c.message,
            }),
            s.dirty())
          : c.kind === "endsWith"
          ? e.data.endsWith(c.value) ||
            ((a = this._getOrReturnCtx(e, a)),
            P(a, {
              code: O.invalid_string,
              validation: { endsWith: c.value },
              message: c.message,
            }),
            s.dirty())
          : c.kind === "datetime"
          ? Tu(c).test(e.data) ||
            ((a = this._getOrReturnCtx(e, a)),
            P(a, {
              code: O.invalid_string,
              validation: "datetime",
              message: c.message,
            }),
            s.dirty())
          : c.kind === "date"
          ? eg.test(e.data) ||
            ((a = this._getOrReturnCtx(e, a)),
            P(a, {
              code: O.invalid_string,
              validation: "date",
              message: c.message,
            }),
            s.dirty())
          : c.kind === "time"
          ? tg(c).test(e.data) ||
            ((a = this._getOrReturnCtx(e, a)),
            P(a, {
              code: O.invalid_string,
              validation: "time",
              message: c.message,
            }),
            s.dirty())
          : c.kind === "duration"
          ? Kp.test(e.data) ||
            ((a = this._getOrReturnCtx(e, a)),
            P(a, {
              validation: "duration",
              code: O.invalid_string,
              message: c.message,
            }),
            s.dirty())
          : c.kind === "ip"
          ? rg(e.data, c.version) ||
            ((a = this._getOrReturnCtx(e, a)),
            P(a, {
              validation: "ip",
              code: O.invalid_string,
              message: c.message,
            }),
            s.dirty())
          : c.kind === "base64"
          ? Jp.test(e.data) ||
            ((a = this._getOrReturnCtx(e, a)),
            P(a, {
              validation: "base64",
              code: O.invalid_string,
              message: c.message,
            }),
            s.dirty())
          : ce.assertNever(c);
    return { status: s.value, value: e.data };
  }
  _regex(e, r, s) {
    return this.refinement((a) => e.test(a), {
      validation: r,
      code: O.invalid_string,
      ...q.errToObj(s),
    });
  }
  _addCheck(e) {
    return new En({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...q.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...q.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...q.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...q.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...q.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...q.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...q.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...q.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...q.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...q.errToObj(e) });
  }
  datetime(e) {
    var r, s;
    return typeof e == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: e,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
              ? void 0
              : e.precision,
          offset:
            (r = e == null ? void 0 : e.offset) !== null && r !== void 0
              ? r
              : !1,
          local:
            (s = e == null ? void 0 : e.local) !== null && s !== void 0
              ? s
              : !1,
          ...q.errToObj(e == null ? void 0 : e.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string"
      ? this._addCheck({ kind: "time", precision: null, message: e })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
              ? void 0
              : e.precision,
          ...q.errToObj(e == null ? void 0 : e.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...q.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({ kind: "regex", regex: e, ...q.errToObj(r) });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...q.errToObj(r == null ? void 0 : r.message),
    });
  }
  startsWith(e, r) {
    return this._addCheck({ kind: "startsWith", value: e, ...q.errToObj(r) });
  }
  endsWith(e, r) {
    return this._addCheck({ kind: "endsWith", value: e, ...q.errToObj(r) });
  }
  min(e, r) {
    return this._addCheck({ kind: "min", value: e, ...q.errToObj(r) });
  }
  max(e, r) {
    return this._addCheck({ kind: "max", value: e, ...q.errToObj(r) });
  }
  length(e, r) {
    return this._addCheck({ kind: "length", value: e, ...q.errToObj(r) });
  }
  nonempty(e) {
    return this.min(1, q.errToObj(e));
  }
  trim() {
    return new En({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new En({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new En({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
};
Gr.create = (t) => {
  var e;
  return new Gr({
    checks: [],
    typeName: X.ZodString,
    coerce:
      (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ie(t),
  });
};
function ng(t, e) {
  const r = (t.toString().split(".")[1] || "").length,
    s = (e.toString().split(".")[1] || "").length,
    a = r > s ? r : s,
    c = parseInt(t.toFixed(a).replace(".", "")),
    l = parseInt(e.toFixed(a).replace(".", ""));
  return (c % l) / Math.pow(10, a);
}
var Wn = class Fs extends ae {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== $.number)
    ) {
      const c = this._getOrReturnCtx(e);
      return (
        P(c, {
          code: O.invalid_type,
          expected: $.number,
          received: c.parsedType,
        }),
        J
      );
    }
    let s;
    const a = new ze();
    for (const c of this._def.checks)
      c.kind === "int"
        ? ce.isInteger(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          P(s, {
            code: O.invalid_type,
            expected: "integer",
            received: "float",
            message: c.message,
          }),
          a.dirty())
        : c.kind === "min"
        ? (c.inclusive ? e.data < c.value : e.data <= c.value) &&
          ((s = this._getOrReturnCtx(e, s)),
          P(s, {
            code: O.too_small,
            minimum: c.value,
            type: "number",
            inclusive: c.inclusive,
            exact: !1,
            message: c.message,
          }),
          a.dirty())
        : c.kind === "max"
        ? (c.inclusive ? e.data > c.value : e.data >= c.value) &&
          ((s = this._getOrReturnCtx(e, s)),
          P(s, {
            code: O.too_big,
            maximum: c.value,
            type: "number",
            inclusive: c.inclusive,
            exact: !1,
            message: c.message,
          }),
          a.dirty())
        : c.kind === "multipleOf"
        ? ng(e.data, c.value) !== 0 &&
          ((s = this._getOrReturnCtx(e, s)),
          P(s, {
            code: O.not_multiple_of,
            multipleOf: c.value,
            message: c.message,
          }),
          a.dirty())
        : c.kind === "finite"
        ? Number.isFinite(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          P(s, { code: O.not_finite, message: c.message }),
          a.dirty())
        : ce.assertNever(c);
    return { status: a.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, q.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, q.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, q.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, q.toString(r));
  }
  setLimit(e, r, s, a) {
    return new Fs({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: r, inclusive: s, message: q.toString(a) },
      ],
    });
  }
  _addCheck(e) {
    return new Fs({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: q.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: q.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: q.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: q.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: q.toString(e),
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: q.toString(r),
    });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: q.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: q.toString(e),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: q.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === "int" || (e.kind === "multipleOf" && ce.isInteger(e.value))
    );
  }
  get isFinite() {
    let e = null,
      r = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min"
        ? (r === null || s.value > r) && (r = s.value)
        : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
};
Wn.create = (t) =>
  new Wn({
    checks: [],
    typeName: X.ZodNumber,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...ie(t),
  });
var Gn = class Zs extends ae {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = BigInt(e.data)),
      this._getType(e) !== $.bigint)
    ) {
      const c = this._getOrReturnCtx(e);
      return (
        P(c, {
          code: O.invalid_type,
          expected: $.bigint,
          received: c.parsedType,
        }),
        J
      );
    }
    let s;
    const a = new ze();
    for (const c of this._def.checks)
      c.kind === "min"
        ? (c.inclusive ? e.data < c.value : e.data <= c.value) &&
          ((s = this._getOrReturnCtx(e, s)),
          P(s, {
            code: O.too_small,
            type: "bigint",
            minimum: c.value,
            inclusive: c.inclusive,
            message: c.message,
          }),
          a.dirty())
        : c.kind === "max"
        ? (c.inclusive ? e.data > c.value : e.data >= c.value) &&
          ((s = this._getOrReturnCtx(e, s)),
          P(s, {
            code: O.too_big,
            type: "bigint",
            maximum: c.value,
            inclusive: c.inclusive,
            message: c.message,
          }),
          a.dirty())
        : c.kind === "multipleOf"
        ? e.data % c.value !== BigInt(0) &&
          ((s = this._getOrReturnCtx(e, s)),
          P(s, {
            code: O.not_multiple_of,
            multipleOf: c.value,
            message: c.message,
          }),
          a.dirty())
        : ce.assertNever(c);
    return { status: a.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, q.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, q.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, q.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, q.toString(r));
  }
  setLimit(e, r, s, a) {
    return new Zs({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: r, inclusive: s, message: q.toString(a) },
      ],
    });
  }
  _addCheck(e) {
    return new Zs({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: q.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: q.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: q.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: q.toString(e),
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: q.toString(r),
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
};
Gn.create = (t) => {
  var e;
  return new Gn({
    checks: [],
    typeName: X.ZodBigInt,
    coerce:
      (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ie(t),
  });
};
var qn = class extends ae {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== $.boolean)
    ) {
      const r = this._getOrReturnCtx(t);
      return (
        P(r, {
          code: O.invalid_type,
          expected: $.boolean,
          received: r.parsedType,
        }),
        J
      );
    }
    return je(t.data);
  }
};
qn.create = (t) =>
  new qn({
    typeName: X.ZodBoolean,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...ie(t),
  });
var Kn = class xu extends ae {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== $.date)
    ) {
      const c = this._getOrReturnCtx(e);
      return (
        P(c, {
          code: O.invalid_type,
          expected: $.date,
          received: c.parsedType,
        }),
        J
      );
    }
    if (isNaN(e.data.getTime())) {
      const c = this._getOrReturnCtx(e);
      return P(c, { code: O.invalid_date }), J;
    }
    const s = new ze();
    let a;
    for (const c of this._def.checks)
      c.kind === "min"
        ? e.data.getTime() < c.value &&
          ((a = this._getOrReturnCtx(e, a)),
          P(a, {
            code: O.too_small,
            message: c.message,
            inclusive: !0,
            exact: !1,
            minimum: c.value,
            type: "date",
          }),
          s.dirty())
        : c.kind === "max"
        ? e.data.getTime() > c.value &&
          ((a = this._getOrReturnCtx(e, a)),
          P(a, {
            code: O.too_big,
            message: c.message,
            inclusive: !0,
            exact: !1,
            maximum: c.value,
            type: "date",
          }),
          s.dirty())
        : ce.assertNever(c);
    return { status: s.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new xu({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: q.toString(r),
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: q.toString(r),
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
};
Kn.create = (t) =>
  new Kn({
    checks: [],
    coerce: (t == null ? void 0 : t.coerce) || !1,
    typeName: X.ZodDate,
    ...ie(t),
  });
var zi = class extends ae {
  _parse(t) {
    if (this._getType(t) !== $.symbol) {
      const r = this._getOrReturnCtx(t);
      return (
        P(r, {
          code: O.invalid_type,
          expected: $.symbol,
          received: r.parsedType,
        }),
        J
      );
    }
    return je(t.data);
  }
};
zi.create = (t) => new zi({ typeName: X.ZodSymbol, ...ie(t) });
var Hn = class extends ae {
  _parse(t) {
    if (this._getType(t) !== $.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        P(r, {
          code: O.invalid_type,
          expected: $.undefined,
          received: r.parsedType,
        }),
        J
      );
    }
    return je(t.data);
  }
};
Hn.create = (t) => new Hn({ typeName: X.ZodUndefined, ...ie(t) });
var Yn = class extends ae {
  _parse(t) {
    if (this._getType(t) !== $.null) {
      const r = this._getOrReturnCtx(t);
      return (
        P(r, {
          code: O.invalid_type,
          expected: $.null,
          received: r.parsedType,
        }),
        J
      );
    }
    return je(t.data);
  }
};
Yn.create = (t) => new Yn({ typeName: X.ZodNull, ...ie(t) });
var qr = class extends ae {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return je(t.data);
  }
};
qr.create = (t) => new qr({ typeName: X.ZodAny, ...ie(t) });
var mr = class extends ae {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return je(t.data);
  }
};
mr.create = (t) => new mr({ typeName: X.ZodUnknown, ...ie(t) });
var Ut = class extends ae {
  _parse(t) {
    const e = this._getOrReturnCtx(t);
    return (
      P(e, { code: O.invalid_type, expected: $.never, received: e.parsedType }),
      J
    );
  }
};
Ut.create = (t) => new Ut({ typeName: X.ZodNever, ...ie(t) });
var Vi = class extends ae {
  _parse(t) {
    if (this._getType(t) !== $.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        P(r, {
          code: O.invalid_type,
          expected: $.void,
          received: r.parsedType,
        }),
        J
      );
    }
    return je(t.data);
  }
};
Vi.create = (t) => new Vi({ typeName: X.ZodVoid, ...ie(t) });
var br = class Ai extends ae {
  _parse(e) {
    const { ctx: r, status: s } = this._processInputParams(e),
      a = this._def;
    if (r.parsedType !== $.array)
      return (
        P(r, {
          code: O.invalid_type,
          expected: $.array,
          received: r.parsedType,
        }),
        J
      );
    if (a.exactLength !== null) {
      const l = r.data.length > a.exactLength.value,
        u = r.data.length < a.exactLength.value;
      (l || u) &&
        (P(r, {
          code: l ? O.too_big : O.too_small,
          minimum: u ? a.exactLength.value : void 0,
          maximum: l ? a.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: a.exactLength.message,
        }),
        s.dirty());
    }
    if (
      (a.minLength !== null &&
        r.data.length < a.minLength.value &&
        (P(r, {
          code: O.too_small,
          minimum: a.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: a.minLength.message,
        }),
        s.dirty()),
      a.maxLength !== null &&
        r.data.length > a.maxLength.value &&
        (P(r, {
          code: O.too_big,
          maximum: a.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: a.maxLength.message,
        }),
        s.dirty()),
      r.common.async)
    )
      return Promise.all(
        [...r.data].map((l, u) => a.type._parseAsync(new xt(r, l, r.path, u)))
      ).then((l) => ze.mergeArray(s, l));
    const c = [...r.data].map((l, u) =>
      a.type._parseSync(new xt(r, l, r.path, u))
    );
    return ze.mergeArray(s, c);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Ai({
      ...this._def,
      minLength: { value: e, message: q.toString(r) },
    });
  }
  max(e, r) {
    return new Ai({
      ...this._def,
      maxLength: { value: e, message: q.toString(r) },
    });
  }
  length(e, r) {
    return new Ai({
      ...this._def,
      exactLength: { value: e, message: q.toString(r) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
br.create = (t, e) =>
  new br({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: X.ZodArray,
    ...ie(e),
  });
function Rr(t) {
  if (t instanceof Je) {
    const e = {};
    for (const r in t.shape) {
      const s = t.shape[r];
      e[r] = At.create(Rr(s));
    }
    return new Je({ ...t._def, shape: () => e });
  } else
    return t instanceof br
      ? new br({ ...t._def, type: Rr(t.element) })
      : t instanceof At
      ? At.create(Rr(t.unwrap()))
      : t instanceof ur
      ? ur.create(Rr(t.unwrap()))
      : t instanceof or
      ? or.create(t.items.map((e) => Rr(e)))
      : t;
}
var Je = class st extends ae {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const e = this._def.shape(),
      r = ce.objectKeys(e);
    return (this._cached = { shape: e, keys: r });
  }
  _parse(e) {
    if (this._getType(e) !== $.object) {
      const p = this._getOrReturnCtx(e);
      return (
        P(p, {
          code: O.invalid_type,
          expected: $.object,
          received: p.parsedType,
        }),
        J
      );
    }
    const { status: s, ctx: a } = this._processInputParams(e),
      { shape: c, keys: l } = this._getCached(),
      u = [];
    if (
      !(this._def.catchall instanceof Ut && this._def.unknownKeys === "strip")
    )
      for (const p in a.data) l.includes(p) || u.push(p);
    const f = [];
    for (const p of l) {
      const b = c[p],
        v = a.data[p];
      f.push({
        key: { status: "valid", value: p },
        value: b._parse(new xt(a, v, a.path, p)),
        alwaysSet: p in a.data,
      });
    }
    if (this._def.catchall instanceof Ut) {
      const p = this._def.unknownKeys;
      if (p === "passthrough")
        for (const b of u)
          f.push({
            key: { status: "valid", value: b },
            value: { status: "valid", value: a.data[b] },
          });
      else if (p === "strict")
        u.length > 0 &&
          (P(a, { code: O.unrecognized_keys, keys: u }), s.dirty());
      else if (p !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const p = this._def.catchall;
      for (const b of u) {
        const v = a.data[b];
        f.push({
          key: { status: "valid", value: b },
          value: p._parse(new xt(a, v, a.path, b)),
          alwaysSet: b in a.data,
        });
      }
    }
    return a.common.async
      ? Promise.resolve()
          .then(async () => {
            const p = [];
            for (const b of f) {
              const v = await b.key,
                _ = await b.value;
              p.push({ key: v, value: _, alwaysSet: b.alwaysSet });
            }
            return p;
          })
          .then((p) => ze.mergeObjectSync(s, p))
      : ze.mergeObjectSync(s, f);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      q.errToObj,
      new st({
        ...this._def,
        unknownKeys: "strict",
        ...(e !== void 0
          ? {
              errorMap: (r, s) => {
                var a, c, l, u;
                const f =
                  (l =
                    (c = (a = this._def).errorMap) === null || c === void 0
                      ? void 0
                      : c.call(a, r, s).message) !== null && l !== void 0
                    ? l
                    : s.defaultError;
                return r.code === "unrecognized_keys"
                  ? {
                      message:
                        (u = q.errToObj(e).message) !== null && u !== void 0
                          ? u
                          : f,
                    }
                  : { message: f };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new st({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new st({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new st({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    });
  }
  merge(e) {
    return new st({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: X.ZodObject,
    });
  }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  catchall(e) {
    return new st({ ...this._def, catchall: e });
  }
  pick(e) {
    const r = {};
    return (
      ce.objectKeys(e).forEach((s) => {
        e[s] && this.shape[s] && (r[s] = this.shape[s]);
      }),
      new st({ ...this._def, shape: () => r })
    );
  }
  omit(e) {
    const r = {};
    return (
      ce.objectKeys(this.shape).forEach((s) => {
        e[s] || (r[s] = this.shape[s]);
      }),
      new st({ ...this._def, shape: () => r })
    );
  }
  deepPartial() {
    return Rr(this);
  }
  partial(e) {
    const r = {};
    return (
      ce.objectKeys(this.shape).forEach((s) => {
        const a = this.shape[s];
        e && !e[s] ? (r[s] = a) : (r[s] = a.optional());
      }),
      new st({ ...this._def, shape: () => r })
    );
  }
  required(e) {
    const r = {};
    return (
      ce.objectKeys(this.shape).forEach((s) => {
        if (e && !e[s]) r[s] = this.shape[s];
        else {
          let c = this.shape[s];
          for (; c instanceof At; ) c = c._def.innerType;
          r[s] = c;
        }
      }),
      new st({ ...this._def, shape: () => r })
    );
  }
  keyof() {
    return Cu(ce.objectKeys(this.shape));
  }
};
Je.create = (t, e) =>
  new Je({
    shape: () => t,
    unknownKeys: "strip",
    catchall: Ut.create(),
    typeName: X.ZodObject,
    ...ie(e),
  });
Je.strictCreate = (t, e) =>
  new Je({
    shape: () => t,
    unknownKeys: "strict",
    catchall: Ut.create(),
    typeName: X.ZodObject,
    ...ie(e),
  });
Je.lazycreate = (t, e) =>
  new Je({
    shape: t,
    unknownKeys: "strip",
    catchall: Ut.create(),
    typeName: X.ZodObject,
    ...ie(e),
  });
var Qn = class extends ae {
  _parse(t) {
    const { ctx: e } = this._processInputParams(t),
      r = this._def.options;
    function s(a) {
      for (const l of a) if (l.result.status === "valid") return l.result;
      for (const l of a)
        if (l.result.status === "dirty")
          return e.common.issues.push(...l.ctx.common.issues), l.result;
      const c = a.map((l) => new Qe(l.ctx.common.issues));
      return P(e, { code: O.invalid_union, unionErrors: c }), J;
    }
    if (e.common.async)
      return Promise.all(
        r.map(async (a) => {
          const c = { ...e, common: { ...e.common, issues: [] }, parent: null };
          return {
            result: await a._parseAsync({
              data: e.data,
              path: e.path,
              parent: c,
            }),
            ctx: c,
          };
        })
      ).then(s);
    {
      let a;
      const c = [];
      for (const u of r) {
        const f = { ...e, common: { ...e.common, issues: [] }, parent: null },
          p = u._parseSync({ data: e.data, path: e.path, parent: f });
        if (p.status === "valid") return p;
        p.status === "dirty" && !a && (a = { result: p, ctx: f }),
          f.common.issues.length && c.push(f.common.issues);
      }
      if (a) return e.common.issues.push(...a.ctx.common.issues), a.result;
      const l = c.map((u) => new Qe(u));
      return P(e, { code: O.invalid_union, unionErrors: l }), J;
    }
  }
  get options() {
    return this._def.options;
  }
};
Qn.create = (t, e) => new Qn({ options: t, typeName: X.ZodUnion, ...ie(e) });
var kt = (t) =>
    t instanceof Jn
      ? kt(t.schema)
      : t instanceof vt
      ? kt(t.innerType())
      : t instanceof ei
      ? [t.value]
      : t instanceof hi
      ? t.options
      : t instanceof ti
      ? ce.objectValues(t.enum)
      : t instanceof ri
      ? kt(t._def.innerType)
      : t instanceof Hn
      ? [void 0]
      : t instanceof Yn
      ? [null]
      : t instanceof At
      ? [void 0, ...kt(t.unwrap())]
      : t instanceof ur
      ? [null, ...kt(t.unwrap())]
      : t instanceof da || t instanceof ii
      ? kt(t.unwrap())
      : t instanceof ni
      ? kt(t._def.innerType)
      : [],
  ku = class Bu extends ae {
    _parse(e) {
      const { ctx: r } = this._processInputParams(e);
      if (r.parsedType !== $.object)
        return (
          P(r, {
            code: O.invalid_type,
            expected: $.object,
            received: r.parsedType,
          }),
          J
        );
      const s = this.discriminator,
        a = r.data[s],
        c = this.optionsMap.get(a);
      return c
        ? r.common.async
          ? c._parseAsync({ data: r.data, path: r.path, parent: r })
          : c._parseSync({ data: r.data, path: r.path, parent: r })
        : (P(r, {
            code: O.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [s],
          }),
          J);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(e, r, s) {
      const a = new Map();
      for (const c of r) {
        const l = kt(c.shape[e]);
        if (!l.length)
          throw new Error(
            `A discriminator value for key \`${e}\` could not be extracted from all schema options`
          );
        for (const u of l) {
          if (a.has(u))
            throw new Error(
              `Discriminator property ${String(e)} has duplicate value ${String(
                u
              )}`
            );
          a.set(u, c);
        }
      }
      return new Bu({
        typeName: X.ZodDiscriminatedUnion,
        discriminator: e,
        options: r,
        optionsMap: a,
        ...ie(s),
      });
    }
  };
function $s(t, e) {
  const r = rr(t),
    s = rr(e);
  if (t === e) return { valid: !0, data: t };
  if (r === $.object && s === $.object) {
    const a = ce.objectKeys(e),
      c = ce.objectKeys(t).filter((u) => a.indexOf(u) !== -1),
      l = { ...t, ...e };
    for (const u of c) {
      const f = $s(t[u], e[u]);
      if (!f.valid) return { valid: !1 };
      l[u] = f.data;
    }
    return { valid: !0, data: l };
  } else if (r === $.array && s === $.array) {
    if (t.length !== e.length) return { valid: !1 };
    const a = [];
    for (let c = 0; c < t.length; c++) {
      const l = t[c],
        u = e[c],
        f = $s(l, u);
      if (!f.valid) return { valid: !1 };
      a.push(f.data);
    }
    return { valid: !0, data: a };
  } else
    return r === $.date && s === $.date && +t == +e
      ? { valid: !0, data: t }
      : { valid: !1 };
}
var Xn = class extends ae {
  _parse(t) {
    const { status: e, ctx: r } = this._processInputParams(t),
      s = (a, c) => {
        if (Ps(a) || Ps(c)) return J;
        const l = $s(a.value, c.value);
        return l.valid
          ? ((js(a) || js(c)) && e.dirty(), { status: e.value, value: l.data })
          : (P(r, { code: O.invalid_intersection_types }), J);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([a, c]) => s(a, c))
      : s(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r })
        );
  }
};
Xn.create = (t, e, r) =>
  new Xn({ left: t, right: e, typeName: X.ZodIntersection, ...ie(r) });
var or = class Ou extends ae {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== $.array)
      return (
        P(s, {
          code: O.invalid_type,
          expected: $.array,
          received: s.parsedType,
        }),
        J
      );
    if (s.data.length < this._def.items.length)
      return (
        P(s, {
          code: O.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        J
      );
    !this._def.rest &&
      s.data.length > this._def.items.length &&
      (P(s, {
        code: O.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      r.dirty());
    const c = [...s.data]
      .map((l, u) => {
        const f = this._def.items[u] || this._def.rest;
        return f ? f._parse(new xt(s, l, s.path, u)) : null;
      })
      .filter((l) => !!l);
    return s.common.async
      ? Promise.all(c).then((l) => ze.mergeArray(r, l))
      : ze.mergeArray(r, c);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Ou({ ...this._def, rest: e });
  }
};
or.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new or({ items: t, typeName: X.ZodTuple, rest: null, ...ie(e) });
};
var Ru = class Ds extends ae {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      const { status: r, ctx: s } = this._processInputParams(e);
      if (s.parsedType !== $.object)
        return (
          P(s, {
            code: O.invalid_type,
            expected: $.object,
            received: s.parsedType,
          }),
          J
        );
      const a = [],
        c = this._def.keyType,
        l = this._def.valueType;
      for (const u in s.data)
        a.push({
          key: c._parse(new xt(s, u, s.path, u)),
          value: l._parse(new xt(s, s.data[u], s.path, u)),
          alwaysSet: u in s.data,
        });
      return s.common.async
        ? ze.mergeObjectAsync(r, a)
        : ze.mergeObjectSync(r, a);
    }
    get element() {
      return this._def.valueType;
    }
    static create(e, r, s) {
      return r instanceof ae
        ? new Ds({ keyType: e, valueType: r, typeName: X.ZodRecord, ...ie(s) })
        : new Ds({
            keyType: Gr.create(),
            valueType: e,
            typeName: X.ZodRecord,
            ...ie(r),
          });
    }
  },
  Wi = class extends ae {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(t) {
      const { status: e, ctx: r } = this._processInputParams(t);
      if (r.parsedType !== $.map)
        return (
          P(r, {
            code: O.invalid_type,
            expected: $.map,
            received: r.parsedType,
          }),
          J
        );
      const s = this._def.keyType,
        a = this._def.valueType,
        c = [...r.data.entries()].map(([l, u], f) => ({
          key: s._parse(new xt(r, l, r.path, [f, "key"])),
          value: a._parse(new xt(r, u, r.path, [f, "value"])),
        }));
      if (r.common.async) {
        const l = new Map();
        return Promise.resolve().then(async () => {
          for (const u of c) {
            const f = await u.key,
              p = await u.value;
            if (f.status === "aborted" || p.status === "aborted") return J;
            (f.status === "dirty" || p.status === "dirty") && e.dirty(),
              l.set(f.value, p.value);
          }
          return { status: e.value, value: l };
        });
      } else {
        const l = new Map();
        for (const u of c) {
          const f = u.key,
            p = u.value;
          if (f.status === "aborted" || p.status === "aborted") return J;
          (f.status === "dirty" || p.status === "dirty") && e.dirty(),
            l.set(f.value, p.value);
        }
        return { status: e.value, value: l };
      }
    }
  };
Wi.create = (t, e, r) =>
  new Wi({ valueType: e, keyType: t, typeName: X.ZodMap, ...ie(r) });
var Gi = class zs extends ae {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== $.set)
      return (
        P(s, { code: O.invalid_type, expected: $.set, received: s.parsedType }),
        J
      );
    const a = this._def;
    a.minSize !== null &&
      s.data.size < a.minSize.value &&
      (P(s, {
        code: O.too_small,
        minimum: a.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: a.minSize.message,
      }),
      r.dirty()),
      a.maxSize !== null &&
        s.data.size > a.maxSize.value &&
        (P(s, {
          code: O.too_big,
          maximum: a.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: a.maxSize.message,
        }),
        r.dirty());
    const c = this._def.valueType;
    function l(f) {
      const p = new Set();
      for (const b of f) {
        if (b.status === "aborted") return J;
        b.status === "dirty" && r.dirty(), p.add(b.value);
      }
      return { status: r.value, value: p };
    }
    const u = [...s.data.values()].map((f, p) =>
      c._parse(new xt(s, f, s.path, p))
    );
    return s.common.async ? Promise.all(u).then((f) => l(f)) : l(u);
  }
  min(e, r) {
    return new zs({
      ...this._def,
      minSize: { value: e, message: q.toString(r) },
    });
  }
  max(e, r) {
    return new zs({
      ...this._def,
      maxSize: { value: e, message: q.toString(r) },
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
Gi.create = (t, e) =>
  new Gi({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: X.ZodSet,
    ...ie(e),
  });
var Iu = class Si extends ae {
    constructor() {
      super(...arguments), (this.validate = this.implement);
    }
    _parse(e) {
      const { ctx: r } = this._processInputParams(e);
      if (r.parsedType !== $.function)
        return (
          P(r, {
            code: O.invalid_type,
            expected: $.function,
            received: r.parsedType,
          }),
          J
        );
      function s(u, f) {
        return $i({
          data: u,
          path: r.path,
          errorMaps: [
            r.common.contextualErrorMap,
            r.schemaErrorMap,
            Zi(),
            Wr,
          ].filter((p) => !!p),
          issueData: { code: O.invalid_arguments, argumentsError: f },
        });
      }
      function a(u, f) {
        return $i({
          data: u,
          path: r.path,
          errorMaps: [
            r.common.contextualErrorMap,
            r.schemaErrorMap,
            Zi(),
            Wr,
          ].filter((p) => !!p),
          issueData: { code: O.invalid_return_type, returnTypeError: f },
        });
      }
      const c = { errorMap: r.common.contextualErrorMap },
        l = r.data;
      if (this._def.returns instanceof Kr) {
        const u = this;
        return je(async function (...f) {
          const p = new Qe([]),
            b = await u._def.args.parseAsync(f, c).catch((E) => {
              throw (p.addIssue(s(f, E)), p);
            }),
            v = await Reflect.apply(l, this, b);
          return await u._def.returns._def.type.parseAsync(v, c).catch((E) => {
            throw (p.addIssue(a(v, E)), p);
          });
        });
      } else {
        const u = this;
        return je(function (...f) {
          const p = u._def.args.safeParse(f, c);
          if (!p.success) throw new Qe([s(f, p.error)]);
          const b = Reflect.apply(l, this, p.data),
            v = u._def.returns.safeParse(b, c);
          if (!v.success) throw new Qe([a(b, v.error)]);
          return v.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...e) {
      return new Si({ ...this._def, args: or.create(e).rest(mr.create()) });
    }
    returns(e) {
      return new Si({ ...this._def, returns: e });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(e, r, s) {
      return new Si({
        args: e || or.create([]).rest(mr.create()),
        returns: r || mr.create(),
        typeName: X.ZodFunction,
        ...ie(s),
      });
    }
  },
  Jn = class extends ae {
    get schema() {
      return this._def.getter();
    }
    _parse(t) {
      const { ctx: e } = this._processInputParams(t);
      return this._def
        .getter()
        ._parse({ data: e.data, path: e.path, parent: e });
    }
  };
Jn.create = (t, e) => new Jn({ getter: t, typeName: X.ZodLazy, ...ie(e) });
var ei = class extends ae {
  _parse(t) {
    if (t.data !== this._def.value) {
      const e = this._getOrReturnCtx(t);
      return (
        P(e, {
          received: e.data,
          code: O.invalid_literal,
          expected: this._def.value,
        }),
        J
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
};
ei.create = (t, e) => new ei({ value: t, typeName: X.ZodLiteral, ...ie(e) });
function Cu(t, e) {
  return new hi({ values: t, typeName: X.ZodEnum, ...ie(e) });
}
var hi = class Vs extends ae {
  constructor() {
    super(...arguments), bn.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e),
        s = this._def.values;
      return (
        P(r, {
          expected: ce.joinValues(s),
          received: r.parsedType,
          code: O.invalid_type,
        }),
        J
      );
    }
    if (
      (Di(this, bn) || Eu(this, bn, new Set(this._def.values)),
      !Di(this, bn).has(e.data))
    ) {
      const r = this._getOrReturnCtx(e),
        s = this._def.values;
      return (
        P(r, { received: r.data, code: O.invalid_enum_value, options: s }), J
      );
    }
    return je(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values) e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values) e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values) e[r] = r;
    return e;
  }
  extract(e, r = this._def) {
    return Vs.create(e, { ...this._def, ...r });
  }
  exclude(e, r = this._def) {
    return Vs.create(
      this.options.filter((s) => !e.includes(s)),
      { ...this._def, ...r }
    );
  }
};
bn = new WeakMap();
hi.create = Cu;
var ti = class extends ae {
  constructor() {
    super(...arguments), _n.set(this, void 0);
  }
  _parse(t) {
    const e = ce.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== $.string && r.parsedType !== $.number) {
      const s = ce.objectValues(e);
      return (
        P(r, {
          expected: ce.joinValues(s),
          received: r.parsedType,
          code: O.invalid_type,
        }),
        J
      );
    }
    if (
      (Di(this, _n) ||
        Eu(this, _n, new Set(ce.getValidEnumValues(this._def.values))),
      !Di(this, _n).has(t.data))
    ) {
      const s = ce.objectValues(e);
      return (
        P(r, { received: r.data, code: O.invalid_enum_value, options: s }), J
      );
    }
    return je(t.data);
  }
  get enum() {
    return this._def.values;
  }
};
_n = new WeakMap();
ti.create = (t, e) =>
  new ti({ values: t, typeName: X.ZodNativeEnum, ...ie(e) });
var Kr = class extends ae {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: e } = this._processInputParams(t);
    if (e.parsedType !== $.promise && e.common.async === !1)
      return (
        P(e, {
          code: O.invalid_type,
          expected: $.promise,
          received: e.parsedType,
        }),
        J
      );
    const r = e.parsedType === $.promise ? e.data : Promise.resolve(e.data);
    return je(
      r.then((s) =>
        this._def.type.parseAsync(s, {
          path: e.path,
          errorMap: e.common.contextualErrorMap,
        })
      )
    );
  }
};
Kr.create = (t, e) => new Kr({ type: t, typeName: X.ZodPromise, ...ie(e) });
var vt = class extends ae {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === X.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: e, ctx: r } = this._processInputParams(t),
      s = this._def.effect || null,
      a = {
        addIssue: (c) => {
          P(r, c), c.fatal ? e.abort() : e.dirty();
        },
        get path() {
          return r.path;
        },
      };
    if (((a.addIssue = a.addIssue.bind(a)), s.type === "preprocess")) {
      const c = s.transform(r.data, a);
      if (r.common.async)
        return Promise.resolve(c).then(async (l) => {
          if (e.value === "aborted") return J;
          const u = await this._def.schema._parseAsync({
            data: l,
            path: r.path,
            parent: r,
          });
          return u.status === "aborted"
            ? J
            : u.status === "dirty" || e.value === "dirty"
            ? Ir(u.value)
            : u;
        });
      {
        if (e.value === "aborted") return J;
        const l = this._def.schema._parseSync({
          data: c,
          path: r.path,
          parent: r,
        });
        return l.status === "aborted"
          ? J
          : l.status === "dirty" || e.value === "dirty"
          ? Ir(l.value)
          : l;
      }
    }
    if (s.type === "refinement") {
      const c = (l) => {
        const u = s.refinement(l, a);
        if (r.common.async) return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return l;
      };
      if (r.common.async === !1) {
        const l = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return l.status === "aborted"
          ? J
          : (l.status === "dirty" && e.dirty(),
            c(l.value),
            { status: e.value, value: l.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((l) =>
            l.status === "aborted"
              ? J
              : (l.status === "dirty" && e.dirty(),
                c(l.value).then(() => ({ status: e.value, value: l.value })))
          );
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const c = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!zn(c)) return c;
        const l = s.transform(c.value, a);
        if (l instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: e.value, value: l };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((c) =>
            zn(c)
              ? Promise.resolve(s.transform(c.value, a)).then((l) => ({
                  status: e.value,
                  value: l,
                }))
              : c
          );
    ce.assertNever(s);
  }
};
vt.create = (t, e, r) =>
  new vt({ schema: t, typeName: X.ZodEffects, effect: e, ...ie(r) });
vt.createWithPreprocess = (t, e, r) =>
  new vt({
    schema: e,
    effect: { type: "preprocess", transform: t },
    typeName: X.ZodEffects,
    ...ie(r),
  });
var At = class extends ae {
  _parse(t) {
    return this._getType(t) === $.undefined
      ? je(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
};
At.create = (t, e) =>
  new At({ innerType: t, typeName: X.ZodOptional, ...ie(e) });
var ur = class extends ae {
  _parse(t) {
    return this._getType(t) === $.null
      ? je(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ur.create = (t, e) =>
  new ur({ innerType: t, typeName: X.ZodNullable, ...ie(e) });
var ri = class extends ae {
  _parse(t) {
    const { ctx: e } = this._processInputParams(t);
    let r = e.data;
    return (
      e.parsedType === $.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: e.path, parent: e })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ri.create = (t, e) =>
  new ri({
    innerType: t,
    typeName: X.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...ie(e),
  });
var ni = class extends ae {
  _parse(t) {
    const { ctx: e } = this._processInputParams(t),
      r = { ...e, common: { ...e.common, issues: [] } },
      s = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return Vn(s)
      ? s.then((a) => ({
          status: "valid",
          value:
            a.status === "valid"
              ? a.value
              : this._def.catchValue({
                  get error() {
                    return new Qe(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new Qe(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ni.create = (t, e) =>
  new ni({
    innerType: t,
    typeName: X.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...ie(e),
  });
var qi = class extends ae {
  _parse(t) {
    if (this._getType(t) !== $.nan) {
      const r = this._getOrReturnCtx(t);
      return (
        P(r, { code: O.invalid_type, expected: $.nan, received: r.parsedType }),
        J
      );
    }
    return { status: "valid", value: t.data };
  }
};
qi.create = (t) => new qi({ typeName: X.ZodNaN, ...ie(t) });
var ig = Symbol("zod_brand"),
  da = class extends ae {
    _parse(t) {
      const { ctx: e } = this._processInputParams(t),
        r = e.data;
      return this._def.type._parse({ data: r, path: e.path, parent: e });
    }
    unwrap() {
      return this._def.type;
    }
  },
  pa = class Lu extends ae {
    _parse(e) {
      const { status: r, ctx: s } = this._processInputParams(e);
      if (s.common.async)
        return (async () => {
          const c = await this._def.in._parseAsync({
            data: s.data,
            path: s.path,
            parent: s,
          });
          return c.status === "aborted"
            ? J
            : c.status === "dirty"
            ? (r.dirty(), Ir(c.value))
            : this._def.out._parseAsync({
                data: c.value,
                path: s.path,
                parent: s,
              });
        })();
      {
        const a = this._def.in._parseSync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        return a.status === "aborted"
          ? J
          : a.status === "dirty"
          ? (r.dirty(), { status: "dirty", value: a.value })
          : this._def.out._parseSync({
              data: a.value,
              path: s.path,
              parent: s,
            });
      }
    }
    static create(e, r) {
      return new Lu({ in: e, out: r, typeName: X.ZodPipeline });
    }
  },
  ii = class extends ae {
    _parse(t) {
      const e = this._def.innerType._parse(t),
        r = (s) => (zn(s) && (s.value = Object.freeze(s.value)), s);
      return Vn(e) ? e.then((s) => r(s)) : r(e);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
ii.create = (t, e) =>
  new ii({ innerType: t, typeName: X.ZodReadonly, ...ie(e) });
function Uu(t, e = {}, r) {
  return t
    ? qr.create().superRefine((s, a) => {
        var c, l;
        if (!t(s)) {
          const u =
              typeof e == "function"
                ? e(s)
                : typeof e == "string"
                ? { message: e }
                : e,
            f =
              (l = (c = u.fatal) !== null && c !== void 0 ? c : r) !== null &&
              l !== void 0
                ? l
                : !0,
            p = typeof u == "string" ? { message: u } : u;
          a.addIssue({ code: "custom", ...p, fatal: f });
        }
      })
    : qr.create();
}
var sg = { object: Je.lazycreate },
  X;
(function (t) {
  (t.ZodString = "ZodString"),
    (t.ZodNumber = "ZodNumber"),
    (t.ZodNaN = "ZodNaN"),
    (t.ZodBigInt = "ZodBigInt"),
    (t.ZodBoolean = "ZodBoolean"),
    (t.ZodDate = "ZodDate"),
    (t.ZodSymbol = "ZodSymbol"),
    (t.ZodUndefined = "ZodUndefined"),
    (t.ZodNull = "ZodNull"),
    (t.ZodAny = "ZodAny"),
    (t.ZodUnknown = "ZodUnknown"),
    (t.ZodNever = "ZodNever"),
    (t.ZodVoid = "ZodVoid"),
    (t.ZodArray = "ZodArray"),
    (t.ZodObject = "ZodObject"),
    (t.ZodUnion = "ZodUnion"),
    (t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (t.ZodIntersection = "ZodIntersection"),
    (t.ZodTuple = "ZodTuple"),
    (t.ZodRecord = "ZodRecord"),
    (t.ZodMap = "ZodMap"),
    (t.ZodSet = "ZodSet"),
    (t.ZodFunction = "ZodFunction"),
    (t.ZodLazy = "ZodLazy"),
    (t.ZodLiteral = "ZodLiteral"),
    (t.ZodEnum = "ZodEnum"),
    (t.ZodEffects = "ZodEffects"),
    (t.ZodNativeEnum = "ZodNativeEnum"),
    (t.ZodOptional = "ZodOptional"),
    (t.ZodNullable = "ZodNullable"),
    (t.ZodDefault = "ZodDefault"),
    (t.ZodCatch = "ZodCatch"),
    (t.ZodPromise = "ZodPromise"),
    (t.ZodBranded = "ZodBranded"),
    (t.ZodPipeline = "ZodPipeline"),
    (t.ZodReadonly = "ZodReadonly");
})(X || (X = {}));
var ag = (t, e = { message: `Input not instance of ${t.name}` }) =>
    Uu((r) => r instanceof t, e),
  Mu = Gr.create,
  Nu = Wn.create,
  og = qi.create,
  ug = Gn.create,
  Pu = qn.create,
  cg = Kn.create,
  lg = zi.create,
  hg = Hn.create,
  fg = Yn.create,
  dg = qr.create,
  pg = mr.create,
  gg = Ut.create,
  mg = Vi.create,
  yg = br.create,
  vg = Je.create,
  wg = Je.strictCreate,
  bg = Qn.create,
  _g = ku.create,
  Eg = Xn.create,
  Ag = or.create,
  Sg = Ru.create,
  Tg = Wi.create,
  xg = Gi.create,
  kg = Iu.create,
  Bg = Jn.create,
  Og = ei.create,
  Rg = hi.create,
  Ig = ti.create,
  Cg = Kr.create,
  ro = vt.create,
  Lg = At.create,
  Ug = ur.create,
  Mg = vt.createWithPreprocess,
  Ng = pa.create,
  Pg = () => Mu().optional(),
  jg = () => Nu().optional(),
  Fg = () => Pu().optional(),
  Zg = {
    string: (t) => Gr.create({ ...t, coerce: !0 }),
    number: (t) => Wn.create({ ...t, coerce: !0 }),
    boolean: (t) => qn.create({ ...t, coerce: !0 }),
    bigint: (t) => Gn.create({ ...t, coerce: !0 }),
    date: (t) => Kn.create({ ...t, coerce: !0 }),
  },
  $g = J,
  T = Object.freeze({
    __proto__: null,
    defaultErrorMap: Wr,
    setErrorMap: $p,
    getErrorMap: Zi,
    makeIssue: $i,
    EMPTY_PATH: Dp,
    addIssueToContext: P,
    ParseStatus: ze,
    INVALID: J,
    DIRTY: Ir,
    OK: je,
    isAborted: Ps,
    isDirty: js,
    isValid: zn,
    isAsync: Vn,
    get util() {
      return ce;
    },
    get objectUtil() {
      return Ns;
    },
    ZodParsedType: $,
    getParsedType: rr,
    ZodType: ae,
    datetimeRegex: Tu,
    ZodString: Gr,
    ZodNumber: Wn,
    ZodBigInt: Gn,
    ZodBoolean: qn,
    ZodDate: Kn,
    ZodSymbol: zi,
    ZodUndefined: Hn,
    ZodNull: Yn,
    ZodAny: qr,
    ZodUnknown: mr,
    ZodNever: Ut,
    ZodVoid: Vi,
    ZodArray: br,
    ZodObject: Je,
    ZodUnion: Qn,
    ZodDiscriminatedUnion: ku,
    ZodIntersection: Xn,
    ZodTuple: or,
    ZodRecord: Ru,
    ZodMap: Wi,
    ZodSet: Gi,
    ZodFunction: Iu,
    ZodLazy: Jn,
    ZodLiteral: ei,
    ZodEnum: hi,
    ZodNativeEnum: ti,
    ZodPromise: Kr,
    ZodEffects: vt,
    ZodTransformer: vt,
    ZodOptional: At,
    ZodNullable: ur,
    ZodDefault: ri,
    ZodCatch: ni,
    ZodNaN: qi,
    BRAND: ig,
    ZodBranded: da,
    ZodPipeline: pa,
    ZodReadonly: ii,
    custom: Uu,
    Schema: ae,
    ZodSchema: ae,
    late: sg,
    get ZodFirstPartyTypeKind() {
      return X;
    },
    coerce: Zg,
    any: dg,
    array: yg,
    bigint: ug,
    boolean: Pu,
    date: cg,
    discriminatedUnion: _g,
    effect: ro,
    enum: Rg,
    function: kg,
    instanceof: ag,
    intersection: Eg,
    lazy: Bg,
    literal: Og,
    map: Tg,
    nan: og,
    nativeEnum: Ig,
    never: gg,
    null: fg,
    nullable: Ug,
    number: Nu,
    object: vg,
    oboolean: Fg,
    onumber: jg,
    optional: Lg,
    ostring: Pg,
    pipeline: Ng,
    preprocess: Mg,
    promise: Cg,
    record: Sg,
    set: xg,
    strictObject: wg,
    string: Mu,
    symbol: lg,
    transformer: ro,
    tuple: Ag,
    undefined: hg,
    union: bg,
    unknown: pg,
    void: mg,
    NEVER: $g,
    ZodIssueCode: O,
    quotelessJson: Zp,
    ZodError: Qe,
  });
function Dg({ fetch: t, GRAPHQL_URL: e, logger: r }) {
  const s = `
    query GetTransactions ($transactionIds: [ID!]!) {
      transactions(ids: $transactionIds) {
        edges {
          node {
            owner {
              address
            }
            tags {
              name
              value
            }
            block {
              id
              height
              timestamp
            }
          }
        }
      }
    }`,
    a = T.object({
      data: T.object({
        transactions: T.object({
          edges: T.array(T.object({ node: T.record(T.any()) })),
        }),
      }),
    });
  return (c) =>
    oe(c)
      .chain(
        de((l) =>
          t(e, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query: s,
              variables: { transactionIds: [l] },
            }),
          })
            .then(async (u) => {
              if (u.ok) return u.json();
              throw (
                (r(
                  'Error Encountered when querying gateway for transaction "%s"',
                  l
                ),
                new Error(`${u.status}: ${await u.text()}`))
              );
            })
            .then(a.parse)
            .then(Lp(["data", "transactions", "edges", "0", "node"]))
        )
      )
      .toPromise();
}
var zg = Xs(Dc()),
  ju = (t = "@permaweb/aoconnect") => {
    const e = (0, zg.default)(t);
    return (
      (e.child = (r) => ju(`${e.namespace}:${r}`)),
      (e.tap = (r, ...s) => Fp((...a) => e(r, ...s, ...a))),
      e
    );
  },
  Fu = ({ url: t, path: e }) =>
    e
      ? e.startsWith("/")
        ? Fu({ url: t, path: e.slice(1) })
        : ((t = new URL(t)), (t.pathname += e), t.toString())
      : t;
function Vg(t) {
  return ar(
    rs([]),
    Dn((e, r) => ar(Mp([], r.name), Wd(r.value), $e(r.name, Ct, e))(e), {}),
    ha((e) => (e.length > 1 ? e : e[0]))
  )(t);
}
function no(t) {
  return yu([
    [Tn(String), Sn(t)],
    [Tn(Array), Sp(t)],
    [iu, ed],
  ]);
}
function Ar(t) {
  let e;
  return (
    Tn(Qe, t)
      ? ((e = new Error(Wg(t))), (e.stack += t.stack))
      : Tn(Error, t)
      ? (e = t)
      : _p("message", t)
      ? (e = new Error(t.message))
      : Tn(String, t)
      ? (e = new Error(t))
      : (e = new Error("An error occurred")),
    e
  );
}
function Wg(t) {
  return ar(
    (e) =>
      (function r(s, a, c) {
        return Dn(
          (l, u) =>
            ar(
              yu([
                [
                  Sn(O.invalid_arguments),
                  () => r(u.argumentsError, 422, "Invalid Arguments"),
                ],
                [
                  Sn(O.invalid_return_type),
                  () => r(u.returnTypeError, 500, "Invalid Return"),
                ],
                [
                  Sn(O.invalid_union),
                  () => ap((f) => r(f, 400, "Invalid Union"), u.unionErrors),
                ],
                [iu, () => [{ ...u, status: a, contextCode: c }]],
              ]),
              gp(l)
            )(u.code),
          [],
          s.issues
        );
      })(e, 400, ""),
    (e) =>
      Dn(
        (r, s) => {
          const { message: a, path: c, contextCode: l } = s,
            u = c[1] || c[0],
            f = l ? `${l} ` : "";
          return r.push(`${f}'${u}': ${a}.`), r;
        },
        [],
        e
      ),
    Rp(" | ")
  )(t);
}
var Gg = T.object({
  id: T.string().min(1, { message: "message is required to be a message id" }),
  processId: T.string().min(1, {
    message: "process is required to be a process id",
  }),
});
function qg() {
  return (t) =>
    oe(t)
      .map(Gg.parse)
      .map(() => t);
}
var fi = T.object({ name: T.string(), value: T.string() }),
  Kg = T.function()
    .args(
      T.object({
        Id: T.string(),
        Target: T.string(),
        Owner: T.string(),
        Anchor: T.string().optional(),
        Data: T.any().default("1234"),
        Tags: T.array(T.object({ name: T.string(), value: T.string() })),
      })
    )
    .returns(T.promise(T.any())),
  Hg = T.function()
    .args(
      T.object({
        id: T.string().min(1, { message: "message id is required" }),
        processId: T.string().min(1, { message: "process id is required" }),
      })
    )
    .returns(T.promise(T.any())),
  Yg = T.function()
    .args(
      T.object({
        process: T.string().min(1, { message: "process id is required" }),
        from: T.string().optional(),
        to: T.string().optional(),
        sort: T.enum(["ASC", "DESC"]).default("ASC"),
        limit: T.number().optional(),
      })
    )
    .returns(
      T.promise(
        T.object({
          edges: T.array(
            T.object({
              cursor: T.string(),
              node: T.object({
                Output: T.any().optional(),
                Messages: T.array(T.any()).optional(),
                Spawns: T.array(T.any()).optional(),
                Error: T.any().optional(),
              }),
            })
          ),
        })
      )
    ),
  Zu = T.function()
    .args(
      T.object({
        processId: T.string(),
        data: T.any(),
        tags: T.array(fi),
        anchor: T.string().optional(),
        signer: T.any(),
      })
    )
    .returns(T.promise(T.object({ messageId: T.string() }).passthrough())),
  Qg = T.function()
    .args(T.object({ data: T.any(), tags: T.array(fi), signer: T.any() }))
    .returns(T.promise(T.object({ processId: T.string() }).passthrough())),
  Xg = T.function()
    .args(
      T.object({
        process: T.string(),
        message: T.string(),
        baseLayer: T.boolean().optional(),
        exclude: T.array(T.string()).optional(),
      })
    )
    .returns(T.promise(T.object({ assignmentId: T.string() }).passthrough())),
  $u = Zu;
T.function()
  .args(T.object({ suUrl: T.string().url(), processId: T.string() }))
  .returns(T.promise(T.object({ tags: T.array(fi) }).passthrough()));
T.function()
  .args(T.string())
  .returns(T.promise(T.object({ url: T.string() })));
var Jg = T.function().args(T.string()).returns(T.promise(T.boolean())),
  em = T.function()
    .args(T.string())
    .returns(T.promise(T.object({ tags: T.array(fi) }).passthrough())),
  ns = T.function()
    .args(
      T.object({
        data: T.any(),
        tags: T.array(fi),
        target: T.string().optional(),
        anchor: T.string().optional(),
      })
    )
    .returns(T.promise(T.object({ id: T.string(), raw: T.any() })));
function tm({ loadResult: t }) {
  return (
    (t = de(Hg.implement(t))),
    (e) => oe({ id: e.id, processId: e.processId }).chain(t)
  );
}
function rm(t) {
  const e = qg(),
    r = tm(t);
  return ({ message: s, process: a }) =>
    oe({ id: s, processId: a })
      .chain(e)
      .chain(r)
      .map(t.logger.tap('readResult result for message "%s": %O', s))
      .map((c) => c)
      .bimap(Ar, Er)
      .toPromise();
}
var _r =
    (...t) =>
    (e) =>
      t.reduce((r, s) => s(r), e),
  ga = (t) => (e) => e ?? t,
  nm = (t) => (e) => _r((r) => r && r[e], ga(t)),
  im = (t) => (e) => {
    const r = {};
    for (const s in e) e.hasOwnProperty(s) && (r[s] = t(e[s], s, e));
    return r;
  },
  sm =
    (t) =>
    (...e) =>
      !t(...e),
  is = (t) => (e) => {
    const r = e.findIndex((a) => a.name === "Data-Protocol" && a.value === t);
    if (r === -1) return [0, 0];
    let s = e.findIndex(
      (a, c) => c > r && a.name === "Data-Protocol" && a.value !== t
    );
    return s === -1 && (s = e.length), [r, s];
  },
  ma = (t) => {
    let e = t.findIndex((r) => r.name === "Data-Protocol");
    return e === -1 && (e = t.length), e;
  },
  Du = (t) => (e) => e.name === t,
  ya = (t, e) => _r(is(t), ([r, s]) => e.slice(r, s))(e),
  zu = (t, e, r) =>
    _r(
      (s) => ya(t, s),
      (s) => s.filter(Du(e))
    )(r),
  am = (t, e, r) =>
    _r(
      (s) => zu(t, e, s),
      (s) => s[0]
    )(r),
  ss = (t, e) => (
    (e = e.filter((r) => r.name !== "Data-Protocol" || r.value !== t)),
    e.length ? [{ name: "Data-Protocol", value: t }, ...e] : []
  ),
  om = (t, e, r) => {
    const [s, a] = is(t)(r);
    let [c, l, u] = [r.slice(0, s), r.slice(s, a), r.slice(a)];
    return (
      l.length || ((e = ss(t, e)), (c = u), (u = [])), [c, l, e, u].flat(1)
    );
  },
  um = (t, e) => {
    const r = ma(e),
      [s, a] = [e.slice(0, r), e.slice(r)];
    return [s, t, a].flat(1);
  },
  Vu = (t, e, r) => {
    const [s, a] = is(t)(r);
    let [c, l] = [r.slice(0, s), r.slice(a)];
    return (
      l.length === r.length && ((c = l), (l = [])), [c, ss(t, e), l].flat(1)
    );
  },
  cm = (t, e) => Vu(t, [], e),
  lm = (t, e, r) => {
    const [s, a] = is(t)(r),
      [c, l, u] = [r.slice(0, s), r.slice(s, a), r.slice(a)];
    return [c, ss(t, l.filter(sm(Du(e)))), u].flat(1);
  },
  va = (t, e = !1) =>
    _r(
      ga([]),
      (r) =>
        r.reduce(
          (s, a) =>
            _r(
              nm([])(a.name),
              (c) => (c.push(a.value), c),
              (c) => ((s[a.name] = c), s)
            )(s),
          {}
        ),
      im((r) => (e ? r : r[0]))
    )(t),
  Wu = (t, e, r) =>
    _r(
      ga([]),
      (s) => ya(t, s),
      (s) => va(s, r)
    )(e),
  hm = (t, e) => Wu(t, e, !0),
  fm = (t, e) => Wu(t, e, !1),
  dm = (t) => {
    const e = ma(t);
    return va(t.slice(0, e), !1);
  },
  pm = (t) => {
    const e = ma(t);
    return va(t.slice(0, e), !0);
  },
  Gu = (t) => ({
    findAll: (e) => ya(t, e),
    findAllByName: (e, r) => zu(t, e, r),
    findByName: (e, r) => am(t, e, r),
    create: (e) => ss(t, e),
    update: (e, r) => Vu(t, e, r),
    concat: (e, r) => om(t, e, r),
    removeAll: (e) => cm(t, e),
    removeAllByName: (e, r) => lm(t, e, r),
    parse: (e) => fm(t, e),
    parseAll: (e) => hm(t, e),
    concatUnassoc: um,
    parseUnassoc: dm,
    parseAllUnassoc: pm,
  }),
  wa = Gu("ao"),
  io = Qr(wa.removeAllByName),
  gm = Qr(wa.concat),
  so = Qr(wa.concatUnassoc),
  mm = T.array(T.object({ name: T.string(), value: T.string() }));
function ym() {
  return (t) =>
    oe(t.tags)
      .map(rs([]))
      .map(io("Variant"))
      .map(io("Type"))
      .map(
        gm([
          { name: "Variant", value: "ao.TN.1" },
          { name: "Type", value: "Message" },
        ])
      )
      .map(mm.parse)
      .map($e("tags", Ct, t));
}
function vm({ logger: t }) {
  return (e) =>
    oe(e)
      .chain(
        vu(
          du(e.data),
          () => vr(e),
          () =>
            vr(" ")
              .map($e("data", Ct, e))
              .map((r) =>
                ar(
                  wr("tags"),
                  so([{ name: "Content-Type", value: "text/plain" }]),
                  $e("tags", Ct, r)
                )(r)
              )
              .map(t.tap('added pseudo-random string as message "data"'))
        )
      )
      .map((r) =>
        ar(
          wr("tags"),
          so([{ name: "SDK", value: "aoconnect" }]),
          $e("tags", Ct, r)
        )(r)
      );
}
function wm(t) {
  const e = ym(),
    r = vm(t),
    s = Zu.implement(t.deployMessage);
  return (a) =>
    oe(a)
      .chain(e)
      .chain(r)
      .chain(
        de(({ id: c, data: l, tags: u, anchor: f, signer: p }) =>
          s({
            processId: c,
            data: l,
            tags: u,
            anchor: f,
            signer: ns.implement(p),
          })
        )
      )
      .map((c) => $e("messageId", c.messageId, a));
}
function bm(t) {
  const e = wm(t);
  return ({ process: r, data: s, tags: a, anchor: c, signer: l }) =>
    oe({ id: r, data: s, tags: a, anchor: c, signer: l })
      .chain(e)
      .map((u) => u.messageId)
      .bimap(Ar, Er)
      .toPromise();
}
var pn = (t, e, r) => (s) => e(s[t]) ? vr(s) : cr(`Tag '${t}': ${r}`);
function _m({ loadTransactionMeta: t, logger: e }) {
  return (
    (t = de(em.implement(t))),
    (r) =>
      oe(r)
        .chain(t)
        .map(wr("tags"))
        .map(Vg)
        .chain(
          pn("Data-Protocol", no("ao"), "value 'ao' was not found on module")
        )
        .chain(
          pn("Type", no("Module"), "value 'Module' was not found on module")
        )
        .chain(pn("Module-Format", gs, "was not found on module"))
        .chain(pn("Input-Encoding", gs, "was not found on module"))
        .chain(pn("Output-Encoding", gs, "was not found on module"))
        .bimap(
          e.tap("Verifying module source failed: %s"),
          e.tap("Verified module source")
        )
  );
}
function Em({ logger: t, validateScheduler: e }) {
  return (
    (e = de(Jg.implement(e))),
    (r) =>
      oe(r)
        .chain((s) =>
          e(s).chain((a) =>
            a ? vr(s) : cr(`Valid Scheduler-Location owned by ${s} not found`)
          )
        )
        .bimap(
          t.tap("Verifying scheduler failed: %s"),
          t.tap("Verified scheduler")
        )
  );
}
function Am({ logger: t }) {
  return (e) =>
    oe(e)
      .map(t.tap("Checking for signer"))
      .chain((r) => (r ? vr(r) : cr("signer not found")));
}
function Sm(t) {
  const e = t.logger.child("verifyInput");
  t = { ...t, logger: e };
  const r = _m(t),
    s = Em(t),
    a = Am(t);
  return (c) =>
    oe(c)
      .chain((l) => r(l.module).map(() => l))
      .chain((l) => s(l.scheduler))
      .map(() => c)
      .chain((l) => a(l.signer).map(() => l))
      .bimap(
        e.tap("Error when verify input: %s"),
        e.tap("Successfully verified inputs")
      );
}
var ba = Gu("ao"),
  mi = Qr(ba.removeAllByName),
  Tm = Qr(ba.concat),
  ao = Qr(ba.concatUnassoc),
  xm = T.array(T.object({ name: T.string(), value: T.string() }));
function km() {
  return (t) =>
    oe(t)
      .map(wr("tags"))
      .map(rs([]))
      .map(mi("Variant"))
      .map(mi("Type"))
      .map(mi("Module"))
      .map(mi("Scheduler"))
      .map(
        Tm([
          { name: "Variant", value: "ao.TN.1" },
          { name: "Type", value: "Process" },
          { name: "Module", value: t.module },
          { name: "Scheduler", value: t.scheduler },
        ])
      )
      .map(xm.parse)
      .map($e("tags", Ct, t));
}
function Bm({ logger: t }) {
  return (e) =>
    oe(e)
      .chain(
        vu(
          du(e.data),
          () => vr(e),
          () =>
            vr(" ")
              .map($e("data", Ct, e))
              .map((r) =>
                ar(
                  wr("tags"),
                  ao([{ name: "Content-Type", value: "text/plain" }]),
                  $e("tags", Ct, r)
                )(r)
              )
              .map(t.tap('added pseudo-random string as process "data"'))
        )
      )
      .map((r) =>
        ar(
          wr("tags"),
          ao([{ name: "SDK", value: "aoconnect" }]),
          $e("tags", Ct, r)
        )(r)
      );
}
function Om(t) {
  const e = t.logger.child("uploadProcess");
  t = { ...t, logger: e };
  const r = km(),
    s = Bm(t),
    a = Qg.implement(t.deployProcess);
  return (c) =>
    oe(c)
      .chain(r)
      .chain(s)
      .chain(
        de(({ data: l, tags: u, signer: f }) =>
          a({ data: l, tags: u, signer: ns.implement(f) })
        )
      )
      .map((l) => $e("processId", l.processId, c));
}
function Rm(t) {
  const e = Sm(t),
    r = Om(t);
  return ({ module: s, scheduler: a, signer: c, tags: l, data: u }) =>
    oe({ module: s, scheduler: a, signer: c, tags: l, data: u })
      .chain(e)
      .chain(r)
      .map((f) => f.processId)
      .bimap(Ar, Er)
      .toPromise();
}
function Im(t) {
  const e = $u.implement(t.deployMonitor);
  return (r) =>
    oe(r)
      .chain(
        de(({ id: s, signer: a }) =>
          e({ processId: s, signer: ns.implement(a), data: " ", tags: [] })
        )
      )
      .map((s) => $e("monitorId", s.messageId, r));
}
function Cm(t) {
  const e = Im(t);
  return ({ process: r, signer: s }) =>
    oe({ id: r, signer: s })
      .chain(e)
      .map((a) => a.monitorId)
      .bimap(Ar, Er)
      .toPromise();
}
function Lm(t) {
  const e = $u.implement(t.deployUnmonitor);
  return (r) =>
    oe(r)
      .chain(
        de(({ id: s, signer: a }) =>
          e({ processId: s, signer: ns.implement(a), data: " ", tags: [] })
        )
      )
      .map((s) => $e("monitorId", s.messageId, r));
}
function Um(t) {
  const e = Lm(t);
  return ({ process: r, signer: s }) =>
    oe({ id: r, signer: s })
      .chain(e)
      .map((a) => a.monitorId)
      .bimap(Ar, Er)
      .toPromise();
}
var Mm = T.object({
  process: T.string().min(1, { message: "process identifier is required" }),
  from: T.string().optional(),
  to: T.string().optional(),
  sort: T.enum(["ASC", "DESC"]).default("ASC"),
  limit: T.number().optional(),
});
function Nm() {
  return (t) =>
    oe(t)
      .map(Mm.parse)
      .map(() => t);
}
function Pm({ queryResults: t }) {
  return (
    (t = de(Yg.implement(t))),
    (e) =>
      oe({
        process: e.process,
        from: e.from,
        to: e.to,
        sort: e.sort,
        limit: e.limit,
      }).chain(t)
  );
}
function jm(t) {
  const e = Nm(),
    r = Pm(t);
  return ({ process: s, from: a, to: c, sort: l, limit: u }) =>
    oe({ process: s, from: a, to: c, sort: l, limit: u })
      .chain(e)
      .chain(r)
      .map(t.logger.tap('readResults result for message "%s": %O', s))
      .map((f) => f)
      .bimap(Ar, Er)
      .toPromise();
}
var Fm = T.object({
  Id: T.string(),
  Target: T.string(),
  Owner: T.string(),
  Anchor: T.string().optional(),
  Data: T.any().default("1234"),
  Tags: T.array(T.object({ name: T.string(), value: T.string() })),
});
function Zm() {
  return (t) =>
    oe(t)
      .map(Fm.parse)
      .map(
        (e) => (
          (e.Tags = e.Tags.concat([
            { name: "Data-Protocol", value: "ao" },
            { name: "Type", value: "Message" },
            { name: "Variant", value: "ao.TN.1" },
          ])),
          e
        )
      );
}
function $m({ dryrunFetch: t }) {
  return de(Kg.implement(t));
}
function Dm(t) {
  const e = Zm(),
    r = $m(t);
  return (s) => oe(s).map(zm).chain(e).chain(r).toPromise();
}
function zm({ process: t, data: e, tags: r, anchor: s, ...a }) {
  return {
    Id: "1234",
    Owner: "1234",
    ...a,
    Target: t,
    Data: e || "1234",
    Tags: r || [],
    Anchor: s || "0",
  };
}
function Vm(t) {
  const e = Xg.implement(t.deployAssign);
  return (r) =>
    oe(r)
      .chain(
        de(({ process: s, message: a, baseLayer: c, exclude: l }) =>
          e({ process: s, message: a, baseLayer: c, exclude: l })
        )
      )
      .map((s) => $e("assignmentId", s.assignmentId, r));
}
function Wm(t) {
  const e = Vm(t);
  return ({ process: r, message: s, baseLayer: a, exclude: c }) =>
    oe({ process: r, message: s, baseLayer: a, exclude: c })
      .chain(e)
      .map((l) => l.assignmentId)
      .bimap(Ar, Er)
      .toPromise();
}
var Gm = "https://arweave.net",
  qm = "https://mu.ao-testnet.xyz",
  Km = "https://cu.ao-testnet.xyz";
function Hm({
  GRAPHQL_URL: t,
  GRAPHQL_MAX_RETRIES: e,
  GRAPHQL_RETRY_BACKOFF: r,
  GATEWAY_URL: s = Gm,
  MU_URL: a = qm,
  CU_URL: c = Km,
} = {}) {
  const l = ju();
  t || (t = Fu({ url: s, path: "/graphql" }));
  const { validate: u } = nu({
      cacheSize: 100,
      GRAPHQL_URL: t,
      GRAPHQL_MAX_RETRIES: e,
      GRAPHQL_RETRY_BACKOFF: r,
    }),
    f = Xf({ MAX_SIZE: 25 }),
    p = l.child("result"),
    b = rm({ loadResult: Hf({ fetch, CU_URL: c, logger: p }), logger: p }),
    v = l.child("message"),
    _ = bm({
      loadProcessMeta: fs({ fetch, cache: f, logger: v }),
      deployMessage: zf({ fetch, MU_URL: a, logger: v }),
      logger: v,
    }),
    E = l.child("spawn"),
    w = Rm({
      loadTransactionMeta: Dg({ fetch, GRAPHQL_URL: t, logger: E }),
      validateScheduler: u,
      deployProcess: Vf({ fetch, MU_URL: a, logger: E }),
      logger: E,
    }),
    A = l.child("monitor"),
    S = Cm({
      loadProcessMeta: fs({ fetch, cache: f, logger: A }),
      deployMonitor: Wf({ fetch, MU_URL: a, logger: A }),
      logger: A,
    }),
    x = l.child("unmonitor"),
    C = Um({
      loadProcessMeta: fs({ fetch, cache: f, logger: x }),
      deployUnmonitor: Gf({ fetch, MU_URL: a, logger: x }),
      logger: A,
    }),
    B = l.child("results"),
    L = jm({ queryResults: Yf({ fetch, CU_URL: c, logger: B }), logger: B }),
    z = l.child("dryrun"),
    V = Dm({ dryrunFetch: Kf({ fetch, CU_URL: c, logger: z }), logger: z }),
    _e = l.child("assign"),
    et = Wm({ deployAssign: qf({ fetch, MU_URL: a, logger: _e }), logger: v });
  return {
    result: b,
    results: L,
    message: _,
    spawn: w,
    monitor: S,
    unmonitor: C,
    dryrun: V,
    assign: et,
  };
}
var qu = {};
go(qu, { createDataItemSigner: () => by });
var Ku = Xs(Wc()),
  Hu = {};
go(Hu, {
  AVSCTap: () => di,
  ArweaveSigner: () => Aa,
  DataItem: () => si,
  MAX_TAG_BYTES: () => as,
  MIN_BINARY_SIZE: () => xa,
  SIG_CONFIG: () => Hr,
  SignatureConfig: () => Ze,
  Signer: () => Ju,
  createData: () => nc,
  default: () => yy,
  deserializeTags: () => Ki,
  indexToType: () => Sa,
  serializeTags: () => Ta,
  tagsExceedLimit: () => rc,
  warparbundles: () => vy,
});
var Ym = Object.create,
  _a = Object.defineProperty,
  Qm = Object.getOwnPropertyDescriptor,
  Xm = Object.getOwnPropertyNames,
  Jm = Object.getPrototypeOf,
  ey = Object.prototype.hasOwnProperty,
  Mt = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
  ty = (t, e) => {
    for (var r in e) _a(t, r, { get: e[r], enumerable: !0 });
  },
  ry = (t, e, r, s) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let a of Xm(e))
        !ey.call(t, a) &&
          a !== r &&
          _a(t, a, {
            get: () => e[a],
            enumerable: !(s = Qm(e, a)) || s.enumerable,
          });
    return t;
  },
  Sr = (t, e, r) => (
    (r = t != null ? Ym(Jm(t)) : {}),
    ry(_a(r, "default", { value: t, enumerable: !0 }), t)
  ),
  ny = Mt((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 });
    function e(r) {
      var s = 4,
        a = r.length,
        c = a % s;
      if (!c) return r;
      var l = a,
        u = s - c,
        f = a + u,
        p = Buffer.alloc(f);
      for (p.write(r); u--; ) p.write("=", l++);
      return p.toString();
    }
    t.default = e;
  }),
  iy = Mt((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = ny();
    function r(f, p) {
      return (
        p === void 0 && (p = "utf8"),
        Buffer.isBuffer(f)
          ? c(f.toString("base64"))
          : c(Buffer.from(f, p).toString("base64"))
      );
    }
    function s(f, p) {
      return (
        p === void 0 && (p = "utf8"), Buffer.from(a(f), "base64").toString(p)
      );
    }
    function a(f) {
      return (
        (f = f.toString()), e.default(f).replace(/\-/g, "+").replace(/_/g, "/")
      );
    }
    function c(f) {
      return f.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function l(f) {
      return Buffer.from(a(f), "base64");
    }
    var u = r;
    (u.encode = r),
      (u.decode = s),
      (u.toBase64 = a),
      (u.fromBase64 = c),
      (u.toBuffer = l),
      (t.default = u);
  }),
  Ea = Mt((t, e) => {
    (e.exports = iy().default), (e.exports.default = e.exports);
  }),
  Yu = Mt((t) => {
    (t.byteLength = f), (t.toByteArray = b), (t.fromByteArray = E);
    var e = [],
      r = [],
      s = typeof Uint8Array < "u" ? Uint8Array : Array,
      a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (c = 0, l = a.length; c < l; ++c)
      (e[c] = a[c]), (r[a.charCodeAt(c)] = c);
    var c, l;
    (r[45] = 62), (r[95] = 63);
    function u(w) {
      var A = w.length;
      if (A % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var S = w.indexOf("=");
      S === -1 && (S = A);
      var x = S === A ? 0 : 4 - (S % 4);
      return [S, x];
    }
    function f(w) {
      var A = u(w),
        S = A[0],
        x = A[1];
      return ((S + x) * 3) / 4 - x;
    }
    function p(w, A, S) {
      return ((A + S) * 3) / 4 - S;
    }
    function b(w) {
      var A,
        S = u(w),
        x = S[0],
        C = S[1],
        B = new s(p(w, x, C)),
        L = 0,
        z = C > 0 ? x - 4 : x,
        V;
      for (V = 0; V < z; V += 4)
        (A =
          (r[w.charCodeAt(V)] << 18) |
          (r[w.charCodeAt(V + 1)] << 12) |
          (r[w.charCodeAt(V + 2)] << 6) |
          r[w.charCodeAt(V + 3)]),
          (B[L++] = (A >> 16) & 255),
          (B[L++] = (A >> 8) & 255),
          (B[L++] = A & 255);
      return (
        C === 2 &&
          ((A = (r[w.charCodeAt(V)] << 2) | (r[w.charCodeAt(V + 1)] >> 4)),
          (B[L++] = A & 255)),
        C === 1 &&
          ((A =
            (r[w.charCodeAt(V)] << 10) |
            (r[w.charCodeAt(V + 1)] << 4) |
            (r[w.charCodeAt(V + 2)] >> 2)),
          (B[L++] = (A >> 8) & 255),
          (B[L++] = A & 255)),
        B
      );
    }
    function v(w) {
      return (
        e[(w >> 18) & 63] + e[(w >> 12) & 63] + e[(w >> 6) & 63] + e[w & 63]
      );
    }
    function _(w, A, S) {
      for (var x, C = [], B = A; B < S; B += 3)
        (x =
          ((w[B] << 16) & 16711680) +
          ((w[B + 1] << 8) & 65280) +
          (w[B + 2] & 255)),
          C.push(v(x));
      return C.join("");
    }
    function E(w) {
      for (
        var A, S = w.length, x = S % 3, C = [], B = 16383, L = 0, z = S - x;
        L < z;
        L += B
      )
        C.push(_(w, L, L + B > z ? z : L + B));
      return (
        x === 1
          ? ((A = w[S - 1]), C.push(e[A >> 2] + e[(A << 4) & 63] + "=="))
          : x === 2 &&
            ((A = (w[S - 2] << 8) + w[S - 1]),
            C.push(e[A >> 10] + e[(A >> 4) & 63] + e[(A << 2) & 63] + "=")),
        C.join("")
      );
    }
  }),
  Qu = Mt((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.b64UrlDecode =
        t.b64UrlEncode =
        t.bufferTob64Url =
        t.bufferTob64 =
        t.b64UrlToBuffer =
        t.stringToB64Url =
        t.stringToBuffer =
        t.bufferToString =
        t.b64UrlToString =
        t.concatBuffers =
          void 0);
    var e = Yu();
    function r(_) {
      let E = 0;
      for (let S = 0; S < _.length; S++) E += _[S].byteLength;
      let w = new Uint8Array(E),
        A = 0;
      w.set(new Uint8Array(_[0]), A), (A += _[0].byteLength);
      for (let S = 1; S < _.length; S++)
        w.set(new Uint8Array(_[S]), A), (A += _[S].byteLength);
      return w;
    }
    t.concatBuffers = r;
    function s(_) {
      let E = u(_);
      return a(E);
    }
    t.b64UrlToString = s;
    function a(_) {
      return new TextDecoder("utf-8", { fatal: !0 }).decode(_);
    }
    t.bufferToString = a;
    function c(_) {
      return new TextEncoder().encode(_);
    }
    t.stringToBuffer = c;
    function l(_) {
      return p(c(_));
    }
    t.stringToB64Url = l;
    function u(_) {
      return new Uint8Array(e.toByteArray(v(_)));
    }
    t.b64UrlToBuffer = u;
    function f(_) {
      return e.fromByteArray(new Uint8Array(_));
    }
    t.bufferTob64 = f;
    function p(_) {
      return b(f(_));
    }
    t.bufferTob64Url = p;
    function b(_) {
      return _.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
    }
    t.b64UrlEncode = b;
    function v(_) {
      _ = _.replace(/\-/g, "+").replace(/\_/g, "/");
      let E;
      return (
        _.length % 4 == 0 ? (E = 0) : (E = 4 - (_.length % 4)),
        _.concat("=".repeat(E))
      );
    }
    t.b64UrlDecode = v;
  }),
  sy = Mt((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = Qu(),
      r = class {
        constructor() {
          F(this, "keyLength", 4096);
          F(this, "publicExponent", 65537);
          F(this, "hashAlgorithm", "sha256");
          F(this, "driver");
          if (!this.detectWebCrypto())
            throw new Error("SubtleCrypto not available!");
          this.driver = crypto.subtle;
        }
        async generateJWK() {
          let s = await this.driver.generateKey(
              {
                name: "RSA-PSS",
                modulusLength: 4096,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: { name: "SHA-256" },
              },
              !0,
              ["sign"]
            ),
            a = await this.driver.exportKey("jwk", s.privateKey);
          return {
            kty: a.kty,
            e: a.e,
            n: a.n,
            d: a.d,
            p: a.p,
            q: a.q,
            dp: a.dp,
            dq: a.dq,
            qi: a.qi,
          };
        }
        async sign(s, a, { saltLength: c } = {}) {
          let l = await this.driver.sign(
            { name: "RSA-PSS", saltLength: 32 },
            await this.jwkToCryptoKey(s),
            a
          );
          return new Uint8Array(l);
        }
        async hash(s, a = "SHA-256") {
          let c = await this.driver.digest(a, s);
          return new Uint8Array(c);
        }
        async verify(s, a, c) {
          let l = { kty: "RSA", e: "AQAB", n: s },
            u = await this.jwkToPublicCryptoKey(l),
            f = await this.driver.digest("SHA-256", a),
            p = await this.driver.verify(
              { name: "RSA-PSS", saltLength: 0 },
              u,
              c,
              a
            ),
            b = await this.driver.verify(
              { name: "RSA-PSS", saltLength: 32 },
              u,
              c,
              a
            ),
            v = await this.driver.verify(
              {
                name: "RSA-PSS",
                saltLength:
                  Math.ceil((u.algorithm.modulusLength - 1) / 8) -
                  f.byteLength -
                  2,
              },
              u,
              c,
              a
            );
          return p || b || v;
        }
        async jwkToCryptoKey(s) {
          return this.driver.importKey(
            "jwk",
            s,
            { name: "RSA-PSS", hash: { name: "SHA-256" } },
            !1,
            ["sign"]
          );
        }
        async jwkToPublicCryptoKey(s) {
          return this.driver.importKey(
            "jwk",
            s,
            { name: "RSA-PSS", hash: { name: "SHA-256" } },
            !1,
            ["verify"]
          );
        }
        detectWebCrypto() {
          if (typeof crypto > "u") return !1;
          let s = crypto == null ? void 0 : crypto.subtle;
          return s === void 0
            ? !1
            : ["generateKey", "importKey", "exportKey", "digest", "sign"].every(
                (a) => typeof s[a] == "function"
              );
        }
        async encrypt(s, a, c) {
          let l = await this.driver.importKey(
              "raw",
              typeof a == "string" ? e.stringToBuffer(a) : a,
              { name: "PBKDF2", length: 32 },
              !1,
              ["deriveKey"]
            ),
            u = await this.driver.deriveKey(
              {
                name: "PBKDF2",
                salt: c ? e.stringToBuffer(c) : e.stringToBuffer("salt"),
                iterations: 1e5,
                hash: "SHA-256",
              },
              l,
              { name: "AES-CBC", length: 256 },
              !1,
              ["encrypt", "decrypt"]
            ),
            f = new Uint8Array(16);
          crypto.getRandomValues(f);
          let p = await this.driver.encrypt({ name: "AES-CBC", iv: f }, u, s);
          return e.concatBuffers([f, p]);
        }
        async decrypt(s, a, c) {
          let l = await this.driver.importKey(
              "raw",
              typeof a == "string" ? e.stringToBuffer(a) : a,
              { name: "PBKDF2", length: 32 },
              !1,
              ["deriveKey"]
            ),
            u = await this.driver.deriveKey(
              {
                name: "PBKDF2",
                salt: c ? e.stringToBuffer(c) : e.stringToBuffer("salt"),
                iterations: 1e5,
                hash: "SHA-256",
              },
              l,
              { name: "AES-CBC", length: 256 },
              !1,
              ["encrypt", "decrypt"]
            ),
            f = s.slice(0, 16),
            p = await this.driver.decrypt(
              { name: "AES-CBC", iv: f },
              u,
              s.slice(16)
            );
          return e.concatBuffers([p]);
        }
      };
    t.default = r;
  }),
  ay = Mt((t) => {
    (t.read = function (e, r, s, a, c) {
      var l,
        u,
        f = c * 8 - a - 1,
        p = (1 << f) - 1,
        b = p >> 1,
        v = -7,
        _ = s ? c - 1 : 0,
        E = s ? -1 : 1,
        w = e[r + _];
      for (
        _ += E, l = w & ((1 << -v) - 1), w >>= -v, v += f;
        v > 0;
        l = l * 256 + e[r + _], _ += E, v -= 8
      );
      for (
        u = l & ((1 << -v) - 1), l >>= -v, v += a;
        v > 0;
        u = u * 256 + e[r + _], _ += E, v -= 8
      );
      if (l === 0) l = 1 - b;
      else {
        if (l === p) return u ? NaN : (w ? -1 : 1) * (1 / 0);
        (u = u + Math.pow(2, a)), (l = l - b);
      }
      return (w ? -1 : 1) * u * Math.pow(2, l - a);
    }),
      (t.write = function (e, r, s, a, c, l) {
        var u,
          f,
          p,
          b = l * 8 - c - 1,
          v = (1 << b) - 1,
          _ = v >> 1,
          E = c === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          w = a ? 0 : l - 1,
          A = a ? 1 : -1,
          S = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
        for (
          r = Math.abs(r),
            isNaN(r) || r === 1 / 0
              ? ((f = isNaN(r) ? 1 : 0), (u = v))
              : ((u = Math.floor(Math.log(r) / Math.LN2)),
                r * (p = Math.pow(2, -u)) < 1 && (u--, (p *= 2)),
                u + _ >= 1 ? (r += E / p) : (r += E * Math.pow(2, 1 - _)),
                r * p >= 2 && (u++, (p /= 2)),
                u + _ >= v
                  ? ((f = 0), (u = v))
                  : u + _ >= 1
                  ? ((f = (r * p - 1) * Math.pow(2, c)), (u = u + _))
                  : ((f = r * Math.pow(2, _ - 1) * Math.pow(2, c)), (u = 0)));
          c >= 8;
          e[s + w] = f & 255, w += A, f /= 256, c -= 8
        );
        for (
          u = (u << c) | f, b += c;
          b > 0;
          e[s + w] = u & 255, w += A, u /= 256, b -= 8
        );
        e[s + w - A] |= S * 128;
      });
  }),
  Ws = Mt((t) => {
    var e = Yu(),
      r = ay(),
      s =
        typeof Symbol == "function" && typeof Symbol.for == "function"
          ? Symbol.for("nodejs.util.inspect.custom")
          : null;
    (t.Buffer = u), (t.SlowBuffer = C), (t.INSPECT_MAX_BYTES = 50);
    var a = 2147483647;
    (t.kMaxLength = a),
      (u.TYPED_ARRAY_SUPPORT = c()),
      !u.TYPED_ARRAY_SUPPORT &&
        typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
    function c() {
      try {
        let n = new Uint8Array(1),
          i = {
            foo: function () {
              return 42;
            },
          };
        return (
          Object.setPrototypeOf(i, Uint8Array.prototype),
          Object.setPrototypeOf(n, i),
          n.foo() === 42
        );
      } catch {
        return !1;
      }
    }
    Object.defineProperty(u.prototype, "parent", {
      enumerable: !0,
      get: function () {
        if (u.isBuffer(this)) return this.buffer;
      },
    }),
      Object.defineProperty(u.prototype, "offset", {
        enumerable: !0,
        get: function () {
          if (u.isBuffer(this)) return this.byteOffset;
        },
      });
    function l(n) {
      if (n > a)
        throw new RangeError(
          'The value "' + n + '" is invalid for option "size"'
        );
      let i = new Uint8Array(n);
      return Object.setPrototypeOf(i, u.prototype), i;
    }
    function u(n, i, o) {
      if (typeof n == "number") {
        if (typeof i == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return v(n);
      }
      return f(n, i, o);
    }
    u.poolSize = 8192;
    function f(n, i, o) {
      if (typeof n == "string") return _(n, i);
      if (ArrayBuffer.isView(n)) return w(n);
      if (n == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof n
        );
      if (
        le(n, ArrayBuffer) ||
        (n && le(n.buffer, ArrayBuffer)) ||
        (typeof SharedArrayBuffer < "u" &&
          (le(n, SharedArrayBuffer) || (n && le(n.buffer, SharedArrayBuffer))))
      )
        return A(n, i, o);
      if (typeof n == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      let h = n.valueOf && n.valueOf();
      if (h != null && h !== n) return u.from(h, i, o);
      let d = S(n);
      if (d) return d;
      if (
        typeof Symbol < "u" &&
        Symbol.toPrimitive != null &&
        typeof n[Symbol.toPrimitive] == "function"
      )
        return u.from(n[Symbol.toPrimitive]("string"), i, o);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof n
      );
    }
    (u.from = function (n, i, o) {
      return f(n, i, o);
    }),
      Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
      Object.setPrototypeOf(u, Uint8Array);
    function p(n) {
      if (typeof n != "number")
        throw new TypeError('"size" argument must be of type number');
      if (n < 0)
        throw new RangeError(
          'The value "' + n + '" is invalid for option "size"'
        );
    }
    function b(n, i, o) {
      return (
        p(n),
        n <= 0
          ? l(n)
          : i !== void 0
          ? typeof o == "string"
            ? l(n).fill(i, o)
            : l(n).fill(i)
          : l(n)
      );
    }
    u.alloc = function (n, i, o) {
      return b(n, i, o);
    };
    function v(n) {
      return p(n), l(n < 0 ? 0 : x(n) | 0);
    }
    (u.allocUnsafe = function (n) {
      return v(n);
    }),
      (u.allocUnsafeSlow = function (n) {
        return v(n);
      });
    function _(n, i) {
      if (
        ((typeof i != "string" || i === "") && (i = "utf8"), !u.isEncoding(i))
      )
        throw new TypeError("Unknown encoding: " + i);
      let o = B(n, i) | 0,
        h = l(o),
        d = h.write(n, i);
      return d !== o && (h = h.slice(0, d)), h;
    }
    function E(n) {
      let i = n.length < 0 ? 0 : x(n.length) | 0,
        o = l(i);
      for (let h = 0; h < i; h += 1) o[h] = n[h] & 255;
      return o;
    }
    function w(n) {
      if (le(n, Uint8Array)) {
        let i = new Uint8Array(n);
        return A(i.buffer, i.byteOffset, i.byteLength);
      }
      return E(n);
    }
    function A(n, i, o) {
      if (i < 0 || n.byteLength < i)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (n.byteLength < i + (o || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let h;
      return (
        i === void 0 && o === void 0
          ? (h = new Uint8Array(n))
          : o === void 0
          ? (h = new Uint8Array(n, i))
          : (h = new Uint8Array(n, i, o)),
        Object.setPrototypeOf(h, u.prototype),
        h
      );
    }
    function S(n) {
      if (u.isBuffer(n)) {
        let i = x(n.length) | 0,
          o = l(i);
        return o.length === 0 || n.copy(o, 0, 0, i), o;
      }
      if (n.length !== void 0)
        return typeof n.length != "number" || nt(n.length) ? l(0) : E(n);
      if (n.type === "Buffer" && Array.isArray(n.data)) return E(n.data);
    }
    function x(n) {
      if (n >= a)
        throw new RangeError(
          "Attempt to allocate Buffer larger than maximum size: 0x" +
            a.toString(16) +
            " bytes"
        );
      return n | 0;
    }
    function C(n) {
      return +n != n && (n = 0), u.alloc(+n);
    }
    (u.isBuffer = function (n) {
      return n != null && n._isBuffer === !0 && n !== u.prototype;
    }),
      (u.compare = function (n, i) {
        if (
          (le(n, Uint8Array) && (n = u.from(n, n.offset, n.byteLength)),
          le(i, Uint8Array) && (i = u.from(i, i.offset, i.byteLength)),
          !u.isBuffer(n) || !u.isBuffer(i))
        )
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        if (n === i) return 0;
        let o = n.length,
          h = i.length;
        for (let d = 0, g = Math.min(o, h); d < g; ++d)
          if (n[d] !== i[d]) {
            (o = n[d]), (h = i[d]);
            break;
          }
        return o < h ? -1 : h < o ? 1 : 0;
      }),
      (u.isEncoding = function (n) {
        switch (String(n).toLowerCase()) {
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
            return !0;
          default:
            return !1;
        }
      }),
      (u.concat = function (n, i) {
        if (!Array.isArray(n))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (n.length === 0) return u.alloc(0);
        let o;
        if (i === void 0)
          for (i = 0, o = 0; o < n.length; ++o) i += n[o].length;
        let h = u.allocUnsafe(i),
          d = 0;
        for (o = 0; o < n.length; ++o) {
          let g = n[o];
          if (le(g, Uint8Array))
            d + g.length > h.length
              ? (u.isBuffer(g) || (g = u.from(g)), g.copy(h, d))
              : Uint8Array.prototype.set.call(h, g, d);
          else if (u.isBuffer(g)) g.copy(h, d);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          d += g.length;
        }
        return h;
      });
    function B(n, i) {
      if (u.isBuffer(n)) return n.length;
      if (ArrayBuffer.isView(n) || le(n, ArrayBuffer)) return n.byteLength;
      if (typeof n != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
            typeof n
        );
      let o = n.length,
        h = arguments.length > 2 && arguments[2] === !0;
      if (!h && o === 0) return 0;
      let d = !1;
      for (;;)
        switch (i) {
          case "ascii":
          case "latin1":
          case "binary":
            return o;
          case "utf8":
          case "utf-8":
            return rt(n).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return o * 2;
          case "hex":
            return o >>> 1;
          case "base64":
            return qt(n).length;
          default:
            if (d) return h ? -1 : rt(n).length;
            (i = ("" + i).toLowerCase()), (d = !0);
        }
    }
    u.byteLength = B;
    function L(n, i, o) {
      let h = !1;
      if (
        ((i === void 0 || i < 0) && (i = 0),
        i > this.length ||
          ((o === void 0 || o > this.length) && (o = this.length), o <= 0) ||
          ((o >>>= 0), (i >>>= 0), o <= i))
      )
        return "";
      for (n || (n = "utf8"); ; )
        switch (n) {
          case "hex":
            return rn(this, i, o);
          case "utf8":
          case "utf-8":
            return jt(this, i, o);
          case "ascii":
            return en(this, i, o);
          case "latin1":
          case "binary":
            return tn(this, i, o);
          case "base64":
            return Xr(this, i, o);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return nn(this, i, o);
          default:
            if (h) throw new TypeError("Unknown encoding: " + n);
            (n = (n + "").toLowerCase()), (h = !0);
        }
    }
    u.prototype._isBuffer = !0;
    function z(n, i, o) {
      let h = n[i];
      (n[i] = n[o]), (n[o] = h);
    }
    (u.prototype.swap16 = function () {
      let n = this.length;
      if (n % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let i = 0; i < n; i += 2) z(this, i, i + 1);
      return this;
    }),
      (u.prototype.swap32 = function () {
        let n = this.length;
        if (n % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let i = 0; i < n; i += 4) z(this, i, i + 3), z(this, i + 1, i + 2);
        return this;
      }),
      (u.prototype.swap64 = function () {
        let n = this.length;
        if (n % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let i = 0; i < n; i += 8)
          z(this, i, i + 7),
            z(this, i + 1, i + 6),
            z(this, i + 2, i + 5),
            z(this, i + 3, i + 4);
        return this;
      }),
      (u.prototype.toString = function () {
        let n = this.length;
        return n === 0
          ? ""
          : arguments.length === 0
          ? jt(this, 0, n)
          : L.apply(this, arguments);
      }),
      (u.prototype.toLocaleString = u.prototype.toString),
      (u.prototype.equals = function (n) {
        if (!u.isBuffer(n)) throw new TypeError("Argument must be a Buffer");
        return this === n ? !0 : u.compare(this, n) === 0;
      }),
      (u.prototype.inspect = function () {
        let n = "",
          i = t.INSPECT_MAX_BYTES;
        return (
          (n = this.toString("hex", 0, i)
            .replace(/(.{2})/g, "$1 ")
            .trim()),
          this.length > i && (n += " ... "),
          "<Buffer " + n + ">"
        );
      }),
      s && (u.prototype[s] = u.prototype.inspect),
      (u.prototype.compare = function (n, i, o, h, d) {
        if (
          (le(n, Uint8Array) && (n = u.from(n, n.offset, n.byteLength)),
          !u.isBuffer(n))
        )
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
              typeof n
          );
        if (
          (i === void 0 && (i = 0),
          o === void 0 && (o = n ? n.length : 0),
          h === void 0 && (h = 0),
          d === void 0 && (d = this.length),
          i < 0 || o > n.length || h < 0 || d > this.length)
        )
          throw new RangeError("out of range index");
        if (h >= d && i >= o) return 0;
        if (h >= d) return -1;
        if (i >= o) return 1;
        if (((i >>>= 0), (o >>>= 0), (h >>>= 0), (d >>>= 0), this === n))
          return 0;
        let g = d - h,
          m = o - i,
          I = Math.min(g, m),
          W = this.slice(h, d),
          M = n.slice(i, o);
        for (let U = 0; U < I; ++U)
          if (W[U] !== M[U]) {
            (g = W[U]), (m = M[U]);
            break;
          }
        return g < m ? -1 : m < g ? 1 : 0;
      });
    function V(n, i, o, h, d) {
      if (n.length === 0) return -1;
      if (
        (typeof o == "string"
          ? ((h = o), (o = 0))
          : o > 2147483647
          ? (o = 2147483647)
          : o < -2147483648 && (o = -2147483648),
        (o = +o),
        nt(o) && (o = d ? 0 : n.length - 1),
        o < 0 && (o = n.length + o),
        o >= n.length)
      ) {
        if (d) return -1;
        o = n.length - 1;
      } else if (o < 0)
        if (d) o = 0;
        else return -1;
      if ((typeof i == "string" && (i = u.from(i, h)), u.isBuffer(i)))
        return i.length === 0 ? -1 : _e(n, i, o, h, d);
      if (typeof i == "number")
        return (
          (i = i & 255),
          typeof Uint8Array.prototype.indexOf == "function"
            ? d
              ? Uint8Array.prototype.indexOf.call(n, i, o)
              : Uint8Array.prototype.lastIndexOf.call(n, i, o)
            : _e(n, [i], o, h, d)
        );
      throw new TypeError("val must be string, number or Buffer");
    }
    function _e(n, i, o, h, d) {
      let g = 1,
        m = n.length,
        I = i.length;
      if (
        h !== void 0 &&
        ((h = String(h).toLowerCase()),
        h === "ucs2" || h === "ucs-2" || h === "utf16le" || h === "utf-16le")
      ) {
        if (n.length < 2 || i.length < 2) return -1;
        (g = 2), (m /= 2), (I /= 2), (o /= 2);
      }
      function W(U, j) {
        return g === 1 ? U[j] : U.readUInt16BE(j * g);
      }
      let M;
      if (d) {
        let U = -1;
        for (M = o; M < m; M++)
          if (W(n, M) === W(i, U === -1 ? 0 : M - U)) {
            if ((U === -1 && (U = M), M - U + 1 === I)) return U * g;
          } else U !== -1 && (M -= M - U), (U = -1);
      } else
        for (o + I > m && (o = m - I), M = o; M >= 0; M--) {
          let U = !0;
          for (let j = 0; j < I; j++)
            if (W(n, M + j) !== W(i, j)) {
              U = !1;
              break;
            }
          if (U) return M;
        }
      return -1;
    }
    (u.prototype.includes = function (n, i, o) {
      return this.indexOf(n, i, o) !== -1;
    }),
      (u.prototype.indexOf = function (n, i, o) {
        return V(this, n, i, o, !0);
      }),
      (u.prototype.lastIndexOf = function (n, i, o) {
        return V(this, n, i, o, !1);
      });
    function et(n, i, o, h) {
      o = Number(o) || 0;
      let d = n.length - o;
      h ? ((h = Number(h)), h > d && (h = d)) : (h = d);
      let g = i.length;
      h > g / 2 && (h = g / 2);
      let m;
      for (m = 0; m < h; ++m) {
        let I = parseInt(i.substr(m * 2, 2), 16);
        if (nt(I)) return m;
        n[o + m] = I;
      }
      return m;
    }
    function Ye(n, i, o, h) {
      return Fe(rt(i, n.length - o), n, o, h);
    }
    function lr(n, i, o, h) {
      return Fe(un(i), n, o, h);
    }
    function Pt(n, i, o, h) {
      return Fe(qt(i), n, o, h);
    }
    function hr(n, i, o, h) {
      return Fe(cn(i, n.length - o), n, o, h);
    }
    (u.prototype.write = function (n, i, o, h) {
      if (i === void 0) (h = "utf8"), (o = this.length), (i = 0);
      else if (o === void 0 && typeof i == "string")
        (h = i), (o = this.length), (i = 0);
      else if (isFinite(i))
        (i = i >>> 0),
          isFinite(o)
            ? ((o = o >>> 0), h === void 0 && (h = "utf8"))
            : ((h = o), (o = void 0));
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      let d = this.length - i;
      if (
        ((o === void 0 || o > d) && (o = d),
        (n.length > 0 && (o < 0 || i < 0)) || i > this.length)
      )
        throw new RangeError("Attempt to write outside buffer bounds");
      h || (h = "utf8");
      let g = !1;
      for (;;)
        switch (h) {
          case "hex":
            return et(this, n, i, o);
          case "utf8":
          case "utf-8":
            return Ye(this, n, i, o);
          case "ascii":
          case "latin1":
          case "binary":
            return lr(this, n, i, o);
          case "base64":
            return Pt(this, n, i, o);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return hr(this, n, i, o);
          default:
            if (g) throw new TypeError("Unknown encoding: " + h);
            (h = ("" + h).toLowerCase()), (g = !0);
        }
    }),
      (u.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0),
        };
      });
    function Xr(n, i, o) {
      return i === 0 && o === n.length
        ? e.fromByteArray(n)
        : e.fromByteArray(n.slice(i, o));
    }
    function jt(n, i, o) {
      o = Math.min(n.length, o);
      let h = [],
        d = i;
      for (; d < o; ) {
        let g = n[d],
          m = null,
          I = g > 239 ? 4 : g > 223 ? 3 : g > 191 ? 2 : 1;
        if (d + I <= o) {
          let W, M, U, j;
          switch (I) {
            case 1:
              g < 128 && (m = g);
              break;
            case 2:
              (W = n[d + 1]),
                (W & 192) === 128 &&
                  ((j = ((g & 31) << 6) | (W & 63)), j > 127 && (m = j));
              break;
            case 3:
              (W = n[d + 1]),
                (M = n[d + 2]),
                (W & 192) === 128 &&
                  (M & 192) === 128 &&
                  ((j = ((g & 15) << 12) | ((W & 63) << 6) | (M & 63)),
                  j > 2047 && (j < 55296 || j > 57343) && (m = j));
              break;
            case 4:
              (W = n[d + 1]),
                (M = n[d + 2]),
                (U = n[d + 3]),
                (W & 192) === 128 &&
                  (M & 192) === 128 &&
                  (U & 192) === 128 &&
                  ((j =
                    ((g & 15) << 18) |
                    ((W & 63) << 12) |
                    ((M & 63) << 6) |
                    (U & 63)),
                  j > 65535 && j < 1114112 && (m = j));
          }
        }
        m === null
          ? ((m = 65533), (I = 1))
          : m > 65535 &&
            ((m -= 65536),
            h.push(((m >>> 10) & 1023) | 55296),
            (m = 56320 | (m & 1023))),
          h.push(m),
          (d += I);
      }
      return Jr(h);
    }
    var Ft = 4096;
    function Jr(n) {
      let i = n.length;
      if (i <= Ft) return String.fromCharCode.apply(String, n);
      let o = "",
        h = 0;
      for (; h < i; )
        o += String.fromCharCode.apply(String, n.slice(h, (h += Ft)));
      return o;
    }
    function en(n, i, o) {
      let h = "";
      o = Math.min(n.length, o);
      for (let d = i; d < o; ++d) h += String.fromCharCode(n[d] & 127);
      return h;
    }
    function tn(n, i, o) {
      let h = "";
      o = Math.min(n.length, o);
      for (let d = i; d < o; ++d) h += String.fromCharCode(n[d]);
      return h;
    }
    function rn(n, i, o) {
      let h = n.length;
      (!i || i < 0) && (i = 0), (!o || o < 0 || o > h) && (o = h);
      let d = "";
      for (let g = i; g < o; ++g) d += ln[n[g]];
      return d;
    }
    function nn(n, i, o) {
      let h = n.slice(i, o),
        d = "";
      for (let g = 0; g < h.length - 1; g += 2)
        d += String.fromCharCode(h[g] + h[g + 1] * 256);
      return d;
    }
    u.prototype.slice = function (n, i) {
      let o = this.length;
      (n = ~~n),
        (i = i === void 0 ? o : ~~i),
        n < 0 ? ((n += o), n < 0 && (n = 0)) : n > o && (n = o),
        i < 0 ? ((i += o), i < 0 && (i = 0)) : i > o && (i = o),
        i < n && (i = n);
      let h = this.subarray(n, i);
      return Object.setPrototypeOf(h, u.prototype), h;
    };
    function K(n, i, o) {
      if (n % 1 !== 0 || n < 0) throw new RangeError("offset is not uint");
      if (n + i > o)
        throw new RangeError("Trying to access beyond buffer length");
    }
    (u.prototype.readUintLE = u.prototype.readUIntLE =
      function (n, i, o) {
        (n = n >>> 0), (i = i >>> 0), o || K(n, i, this.length);
        let h = this[n],
          d = 1,
          g = 0;
        for (; ++g < i && (d *= 256); ) h += this[n + g] * d;
        return h;
      }),
      (u.prototype.readUintBE = u.prototype.readUIntBE =
        function (n, i, o) {
          (n = n >>> 0), (i = i >>> 0), o || K(n, i, this.length);
          let h = this[n + --i],
            d = 1;
          for (; i > 0 && (d *= 256); ) h += this[n + --i] * d;
          return h;
        }),
      (u.prototype.readUint8 = u.prototype.readUInt8 =
        function (n, i) {
          return (n = n >>> 0), i || K(n, 1, this.length), this[n];
        }),
      (u.prototype.readUint16LE = u.prototype.readUInt16LE =
        function (n, i) {
          return (
            (n = n >>> 0),
            i || K(n, 2, this.length),
            this[n] | (this[n + 1] << 8)
          );
        }),
      (u.prototype.readUint16BE = u.prototype.readUInt16BE =
        function (n, i) {
          return (
            (n = n >>> 0),
            i || K(n, 2, this.length),
            (this[n] << 8) | this[n + 1]
          );
        }),
      (u.prototype.readUint32LE = u.prototype.readUInt32LE =
        function (n, i) {
          return (
            (n = n >>> 0),
            i || K(n, 4, this.length),
            (this[n] | (this[n + 1] << 8) | (this[n + 2] << 16)) +
              this[n + 3] * 16777216
          );
        }),
      (u.prototype.readUint32BE = u.prototype.readUInt32BE =
        function (n, i) {
          return (
            (n = n >>> 0),
            i || K(n, 4, this.length),
            this[n] * 16777216 +
              ((this[n + 1] << 16) | (this[n + 2] << 8) | this[n + 3])
          );
        }),
      (u.prototype.readBigUInt64LE = ge(function (n) {
        (n = n >>> 0), Se(n, "offset");
        let i = this[n],
          o = this[n + 7];
        (i === void 0 || o === void 0) && Ie(n, this.length - 8);
        let h =
            i + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24,
          d =
            this[++n] + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + o * 2 ** 24;
        return BigInt(h) + (BigInt(d) << BigInt(32));
      })),
      (u.prototype.readBigUInt64BE = ge(function (n) {
        (n = n >>> 0), Se(n, "offset");
        let i = this[n],
          o = this[n + 7];
        (i === void 0 || o === void 0) && Ie(n, this.length - 8);
        let h =
            i * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n],
          d =
            this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + o;
        return (BigInt(h) << BigInt(32)) + BigInt(d);
      })),
      (u.prototype.readIntLE = function (n, i, o) {
        (n = n >>> 0), (i = i >>> 0), o || K(n, i, this.length);
        let h = this[n],
          d = 1,
          g = 0;
        for (; ++g < i && (d *= 256); ) h += this[n + g] * d;
        return (d *= 128), h >= d && (h -= Math.pow(2, 8 * i)), h;
      }),
      (u.prototype.readIntBE = function (n, i, o) {
        (n = n >>> 0), (i = i >>> 0), o || K(n, i, this.length);
        let h = i,
          d = 1,
          g = this[n + --h];
        for (; h > 0 && (d *= 256); ) g += this[n + --h] * d;
        return (d *= 128), g >= d && (g -= Math.pow(2, 8 * i)), g;
      }),
      (u.prototype.readInt8 = function (n, i) {
        return (
          (n = n >>> 0),
          i || K(n, 1, this.length),
          this[n] & 128 ? (255 - this[n] + 1) * -1 : this[n]
        );
      }),
      (u.prototype.readInt16LE = function (n, i) {
        (n = n >>> 0), i || K(n, 2, this.length);
        let o = this[n] | (this[n + 1] << 8);
        return o & 32768 ? o | 4294901760 : o;
      }),
      (u.prototype.readInt16BE = function (n, i) {
        (n = n >>> 0), i || K(n, 2, this.length);
        let o = this[n + 1] | (this[n] << 8);
        return o & 32768 ? o | 4294901760 : o;
      }),
      (u.prototype.readInt32LE = function (n, i) {
        return (
          (n = n >>> 0),
          i || K(n, 4, this.length),
          this[n] |
            (this[n + 1] << 8) |
            (this[n + 2] << 16) |
            (this[n + 3] << 24)
        );
      }),
      (u.prototype.readInt32BE = function (n, i) {
        return (
          (n = n >>> 0),
          i || K(n, 4, this.length),
          (this[n] << 24) |
            (this[n + 1] << 16) |
            (this[n + 2] << 8) |
            this[n + 3]
        );
      }),
      (u.prototype.readBigInt64LE = ge(function (n) {
        (n = n >>> 0), Se(n, "offset");
        let i = this[n],
          o = this[n + 7];
        (i === void 0 || o === void 0) && Ie(n, this.length - 8);
        let h =
          this[n + 4] +
          this[n + 5] * 2 ** 8 +
          this[n + 6] * 2 ** 16 +
          (o << 24);
        return (
          (BigInt(h) << BigInt(32)) +
          BigInt(
            i + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24
          )
        );
      })),
      (u.prototype.readBigInt64BE = ge(function (n) {
        (n = n >>> 0), Se(n, "offset");
        let i = this[n],
          o = this[n + 7];
        (i === void 0 || o === void 0) && Ie(n, this.length - 8);
        let h =
          (i << 24) + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n];
        return (
          (BigInt(h) << BigInt(32)) +
          BigInt(
            this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + o
          )
        );
      })),
      (u.prototype.readFloatLE = function (n, i) {
        return (
          (n = n >>> 0), i || K(n, 4, this.length), r.read(this, n, !0, 23, 4)
        );
      }),
      (u.prototype.readFloatBE = function (n, i) {
        return (
          (n = n >>> 0), i || K(n, 4, this.length), r.read(this, n, !1, 23, 4)
        );
      }),
      (u.prototype.readDoubleLE = function (n, i) {
        return (
          (n = n >>> 0), i || K(n, 8, this.length), r.read(this, n, !0, 52, 8)
        );
      }),
      (u.prototype.readDoubleBE = function (n, i) {
        return (
          (n = n >>> 0), i || K(n, 8, this.length), r.read(this, n, !1, 52, 8)
        );
      });
    function te(n, i, o, h, d, g) {
      if (!u.isBuffer(n))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (i > d || i < g)
        throw new RangeError('"value" argument is out of bounds');
      if (o + h > n.length) throw new RangeError("Index out of range");
    }
    (u.prototype.writeUintLE = u.prototype.writeUIntLE =
      function (n, i, o, h) {
        if (((n = +n), (i = i >>> 0), (o = o >>> 0), !h)) {
          let m = Math.pow(2, 8 * o) - 1;
          te(this, n, i, o, m, 0);
        }
        let d = 1,
          g = 0;
        for (this[i] = n & 255; ++g < o && (d *= 256); )
          this[i + g] = (n / d) & 255;
        return i + o;
      }),
      (u.prototype.writeUintBE = u.prototype.writeUIntBE =
        function (n, i, o, h) {
          if (((n = +n), (i = i >>> 0), (o = o >>> 0), !h)) {
            let m = Math.pow(2, 8 * o) - 1;
            te(this, n, i, o, m, 0);
          }
          let d = o - 1,
            g = 1;
          for (this[i + d] = n & 255; --d >= 0 && (g *= 256); )
            this[i + d] = (n / g) & 255;
          return i + o;
        }),
      (u.prototype.writeUint8 = u.prototype.writeUInt8 =
        function (n, i, o) {
          return (
            (n = +n),
            (i = i >>> 0),
            o || te(this, n, i, 1, 255, 0),
            (this[i] = n & 255),
            i + 1
          );
        }),
      (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
        function (n, i, o) {
          return (
            (n = +n),
            (i = i >>> 0),
            o || te(this, n, i, 2, 65535, 0),
            (this[i] = n & 255),
            (this[i + 1] = n >>> 8),
            i + 2
          );
        }),
      (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
        function (n, i, o) {
          return (
            (n = +n),
            (i = i >>> 0),
            o || te(this, n, i, 2, 65535, 0),
            (this[i] = n >>> 8),
            (this[i + 1] = n & 255),
            i + 2
          );
        }),
      (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
        function (n, i, o) {
          return (
            (n = +n),
            (i = i >>> 0),
            o || te(this, n, i, 4, 4294967295, 0),
            (this[i + 3] = n >>> 24),
            (this[i + 2] = n >>> 16),
            (this[i + 1] = n >>> 8),
            (this[i] = n & 255),
            i + 4
          );
        }),
      (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
        function (n, i, o) {
          return (
            (n = +n),
            (i = i >>> 0),
            o || te(this, n, i, 4, 4294967295, 0),
            (this[i] = n >>> 24),
            (this[i + 1] = n >>> 16),
            (this[i + 2] = n >>> 8),
            (this[i + 3] = n & 255),
            i + 4
          );
        });
    function Zt(n, i, o, h, d) {
      Gt(i, h, d, n, o, 7);
      let g = Number(i & BigInt(4294967295));
      (n[o++] = g),
        (g = g >> 8),
        (n[o++] = g),
        (g = g >> 8),
        (n[o++] = g),
        (g = g >> 8),
        (n[o++] = g);
      let m = Number((i >> BigInt(32)) & BigInt(4294967295));
      return (
        (n[o++] = m),
        (m = m >> 8),
        (n[o++] = m),
        (m = m >> 8),
        (n[o++] = m),
        (m = m >> 8),
        (n[o++] = m),
        o
      );
    }
    function $t(n, i, o, h, d) {
      Gt(i, h, d, n, o, 7);
      let g = Number(i & BigInt(4294967295));
      (n[o + 7] = g),
        (g = g >> 8),
        (n[o + 6] = g),
        (g = g >> 8),
        (n[o + 5] = g),
        (g = g >> 8),
        (n[o + 4] = g);
      let m = Number((i >> BigInt(32)) & BigInt(4294967295));
      return (
        (n[o + 3] = m),
        (m = m >> 8),
        (n[o + 2] = m),
        (m = m >> 8),
        (n[o + 1] = m),
        (m = m >> 8),
        (n[o] = m),
        o + 8
      );
    }
    (u.prototype.writeBigUInt64LE = ge(function (n, i = 0) {
      return Zt(this, n, i, BigInt(0), BigInt("0xffffffffffffffff"));
    })),
      (u.prototype.writeBigUInt64BE = ge(function (n, i = 0) {
        return $t(this, n, i, BigInt(0), BigInt("0xffffffffffffffff"));
      })),
      (u.prototype.writeIntLE = function (n, i, o, h) {
        if (((n = +n), (i = i >>> 0), !h)) {
          let I = Math.pow(2, 8 * o - 1);
          te(this, n, i, o, I - 1, -I);
        }
        let d = 0,
          g = 1,
          m = 0;
        for (this[i] = n & 255; ++d < o && (g *= 256); )
          n < 0 && m === 0 && this[i + d - 1] !== 0 && (m = 1),
            (this[i + d] = (((n / g) >> 0) - m) & 255);
        return i + o;
      }),
      (u.prototype.writeIntBE = function (n, i, o, h) {
        if (((n = +n), (i = i >>> 0), !h)) {
          let I = Math.pow(2, 8 * o - 1);
          te(this, n, i, o, I - 1, -I);
        }
        let d = o - 1,
          g = 1,
          m = 0;
        for (this[i + d] = n & 255; --d >= 0 && (g *= 256); )
          n < 0 && m === 0 && this[i + d + 1] !== 0 && (m = 1),
            (this[i + d] = (((n / g) >> 0) - m) & 255);
        return i + o;
      }),
      (u.prototype.writeInt8 = function (n, i, o) {
        return (
          (n = +n),
          (i = i >>> 0),
          o || te(this, n, i, 1, 127, -128),
          n < 0 && (n = 255 + n + 1),
          (this[i] = n & 255),
          i + 1
        );
      }),
      (u.prototype.writeInt16LE = function (n, i, o) {
        return (
          (n = +n),
          (i = i >>> 0),
          o || te(this, n, i, 2, 32767, -32768),
          (this[i] = n & 255),
          (this[i + 1] = n >>> 8),
          i + 2
        );
      }),
      (u.prototype.writeInt16BE = function (n, i, o) {
        return (
          (n = +n),
          (i = i >>> 0),
          o || te(this, n, i, 2, 32767, -32768),
          (this[i] = n >>> 8),
          (this[i + 1] = n & 255),
          i + 2
        );
      }),
      (u.prototype.writeInt32LE = function (n, i, o) {
        return (
          (n = +n),
          (i = i >>> 0),
          o || te(this, n, i, 4, 2147483647, -2147483648),
          (this[i] = n & 255),
          (this[i + 1] = n >>> 8),
          (this[i + 2] = n >>> 16),
          (this[i + 3] = n >>> 24),
          i + 4
        );
      }),
      (u.prototype.writeInt32BE = function (n, i, o) {
        return (
          (n = +n),
          (i = i >>> 0),
          o || te(this, n, i, 4, 2147483647, -2147483648),
          n < 0 && (n = 4294967295 + n + 1),
          (this[i] = n >>> 24),
          (this[i + 1] = n >>> 16),
          (this[i + 2] = n >>> 8),
          (this[i + 3] = n & 255),
          i + 4
        );
      }),
      (u.prototype.writeBigInt64LE = ge(function (n, i = 0) {
        return Zt(
          this,
          n,
          i,
          -BigInt("0x8000000000000000"),
          BigInt("0x7fffffffffffffff")
        );
      })),
      (u.prototype.writeBigInt64BE = ge(function (n, i = 0) {
        return $t(
          this,
          n,
          i,
          -BigInt("0x8000000000000000"),
          BigInt("0x7fffffffffffffff")
        );
      }));
    function Dt(n, i, o, h, d, g) {
      if (o + h > n.length) throw new RangeError("Index out of range");
      if (o < 0) throw new RangeError("Index out of range");
    }
    function zt(n, i, o, h, d) {
      return (
        (i = +i),
        (o = o >>> 0),
        d || Dt(n, i, o, 4),
        r.write(n, i, o, h, 23, 4),
        o + 4
      );
    }
    (u.prototype.writeFloatLE = function (n, i, o) {
      return zt(this, n, i, !0, o);
    }),
      (u.prototype.writeFloatBE = function (n, i, o) {
        return zt(this, n, i, !1, o);
      });
    function Vt(n, i, o, h, d) {
      return (
        (i = +i),
        (o = o >>> 0),
        d || Dt(n, i, o, 8),
        r.write(n, i, o, h, 52, 8),
        o + 8
      );
    }
    (u.prototype.writeDoubleLE = function (n, i, o) {
      return Vt(this, n, i, !0, o);
    }),
      (u.prototype.writeDoubleBE = function (n, i, o) {
        return Vt(this, n, i, !1, o);
      }),
      (u.prototype.copy = function (n, i, o, h) {
        if (!u.isBuffer(n)) throw new TypeError("argument should be a Buffer");
        if (
          (o || (o = 0),
          !h && h !== 0 && (h = this.length),
          i >= n.length && (i = n.length),
          i || (i = 0),
          h > 0 && h < o && (h = o),
          h === o || n.length === 0 || this.length === 0)
        )
          return 0;
        if (i < 0) throw new RangeError("targetStart out of bounds");
        if (o < 0 || o >= this.length)
          throw new RangeError("Index out of range");
        if (h < 0) throw new RangeError("sourceEnd out of bounds");
        h > this.length && (h = this.length),
          n.length - i < h - o && (h = n.length - i + o);
        let d = h - o;
        return (
          this === n && typeof Uint8Array.prototype.copyWithin == "function"
            ? this.copyWithin(i, o, h)
            : Uint8Array.prototype.set.call(n, this.subarray(o, h), i),
          d
        );
      }),
      (u.prototype.fill = function (n, i, o, h) {
        if (typeof n == "string") {
          if (
            (typeof i == "string"
              ? ((h = i), (i = 0), (o = this.length))
              : typeof o == "string" && ((h = o), (o = this.length)),
            h !== void 0 && typeof h != "string")
          )
            throw new TypeError("encoding must be a string");
          if (typeof h == "string" && !u.isEncoding(h))
            throw new TypeError("Unknown encoding: " + h);
          if (n.length === 1) {
            let g = n.charCodeAt(0);
            ((h === "utf8" && g < 128) || h === "latin1") && (n = g);
          }
        } else
          typeof n == "number"
            ? (n = n & 255)
            : typeof n == "boolean" && (n = Number(n));
        if (i < 0 || this.length < i || this.length < o)
          throw new RangeError("Out of range index");
        if (o <= i) return this;
        (i = i >>> 0), (o = o === void 0 ? this.length : o >>> 0), n || (n = 0);
        let d;
        if (typeof n == "number") for (d = i; d < o; ++d) this[d] = n;
        else {
          let g = u.isBuffer(n) ? n : u.from(n, h),
            m = g.length;
          if (m === 0)
            throw new TypeError(
              'The value "' + n + '" is invalid for argument "value"'
            );
          for (d = 0; d < o - i; ++d) this[d + i] = g[d % m];
        }
        return this;
      });
    var Ae = {};
    function tt(n, i, o) {
      Ae[n] = class extends o {
        constructor() {
          super(),
            Object.defineProperty(this, "message", {
              value: i.apply(this, arguments),
              writable: !0,
              configurable: !0,
            }),
            (this.name = `${this.name} [${n}]`),
            this.stack,
            delete this.name;
        }
        get code() {
          return n;
        }
        set code(h) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: h,
            writable: !0,
          });
        }
        toString() {
          return `${this.name} [${n}]: ${this.message}`;
        }
      };
    }
    tt(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function (n) {
        return n
          ? `${n} is outside of buffer bounds`
          : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ),
      tt(
        "ERR_INVALID_ARG_TYPE",
        function (n, i) {
          return `The "${n}" argument must be of type number. Received type ${typeof i}`;
        },
        TypeError
      ),
      tt(
        "ERR_OUT_OF_RANGE",
        function (n, i, o) {
          let h = `The value of "${n}" is out of range.`,
            d = o;
          return (
            Number.isInteger(o) && Math.abs(o) > 2 ** 32
              ? (d = Wt(String(o)))
              : typeof o == "bigint" &&
                ((d = String(o)),
                (o > BigInt(2) ** BigInt(32) ||
                  o < -(BigInt(2) ** BigInt(32))) &&
                  (d = Wt(d)),
                (d += "n")),
            (h += ` It must be ${i}. Received ${d}`),
            h
          );
        },
        RangeError
      );
    function Wt(n) {
      let i = "",
        o = n.length,
        h = n[0] === "-" ? 1 : 0;
      for (; o >= h + 4; o -= 3) i = `_${n.slice(o - 3, o)}${i}`;
      return `${n.slice(0, o)}${i}`;
    }
    function sn(n, i, o) {
      Se(i, "offset"),
        (n[i] === void 0 || n[i + o] === void 0) && Ie(i, n.length - (o + 1));
    }
    function Gt(n, i, o, h, d, g) {
      if (n > o || n < i) {
        let m = typeof i == "bigint" ? "n" : "",
          I;
        throw (
          (i === 0 || i === BigInt(0)
            ? (I = `>= 0${m} and < 2${m} ** ${(g + 1) * 8}${m}`)
            : (I = `>= -(2${m} ** ${(g + 1) * 8 - 1}${m}) and < 2 ** ${
                (g + 1) * 8 - 1
              }${m}`),
          new Ae.ERR_OUT_OF_RANGE("value", I, n))
        );
      }
      sn(h, d, g);
    }
    function Se(n, i) {
      if (typeof n != "number")
        throw new Ae.ERR_INVALID_ARG_TYPE(i, "number", n);
    }
    function Ie(n, i, o) {
      throw Math.floor(n) !== n
        ? (Se(n, o), new Ae.ERR_OUT_OF_RANGE("offset", "an integer", n))
        : i < 0
        ? new Ae.ERR_BUFFER_OUT_OF_BOUNDS()
        : new Ae.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${i}`, n);
    }
    var an = /[^+/0-9A-Za-z-_]/g;
    function on(n) {
      if (((n = n.split("=")[0]), (n = n.trim().replace(an, "")), n.length < 2))
        return "";
      for (; n.length % 4 !== 0; ) n = n + "=";
      return n;
    }
    function rt(n, i) {
      i = i || 1 / 0;
      let o,
        h = n.length,
        d = null,
        g = [];
      for (let m = 0; m < h; ++m) {
        if (((o = n.charCodeAt(m)), o > 55295 && o < 57344)) {
          if (!d) {
            if (o > 56319) {
              (i -= 3) > -1 && g.push(239, 191, 189);
              continue;
            } else if (m + 1 === h) {
              (i -= 3) > -1 && g.push(239, 191, 189);
              continue;
            }
            d = o;
            continue;
          }
          if (o < 56320) {
            (i -= 3) > -1 && g.push(239, 191, 189), (d = o);
            continue;
          }
          o = (((d - 55296) << 10) | (o - 56320)) + 65536;
        } else d && (i -= 3) > -1 && g.push(239, 191, 189);
        if (((d = null), o < 128)) {
          if ((i -= 1) < 0) break;
          g.push(o);
        } else if (o < 2048) {
          if ((i -= 2) < 0) break;
          g.push((o >> 6) | 192, (o & 63) | 128);
        } else if (o < 65536) {
          if ((i -= 3) < 0) break;
          g.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (o & 63) | 128);
        } else if (o < 1114112) {
          if ((i -= 4) < 0) break;
          g.push(
            (o >> 18) | 240,
            ((o >> 12) & 63) | 128,
            ((o >> 6) & 63) | 128,
            (o & 63) | 128
          );
        } else throw new Error("Invalid code point");
      }
      return g;
    }
    function un(n) {
      let i = [];
      for (let o = 0; o < n.length; ++o) i.push(n.charCodeAt(o) & 255);
      return i;
    }
    function cn(n, i) {
      let o,
        h,
        d,
        g = [];
      for (let m = 0; m < n.length && !((i -= 2) < 0); ++m)
        (o = n.charCodeAt(m)),
          (h = o >> 8),
          (d = o % 256),
          g.push(d),
          g.push(h);
      return g;
    }
    function qt(n) {
      return e.toByteArray(on(n));
    }
    function Fe(n, i, o, h) {
      let d;
      for (d = 0; d < h && !(d + o >= i.length || d >= n.length); ++d)
        i[d + o] = n[d];
      return d;
    }
    function le(n, i) {
      return (
        n instanceof i ||
        (n != null &&
          n.constructor != null &&
          n.constructor.name != null &&
          n.constructor.name === i.name)
      );
    }
    function nt(n) {
      return n !== n;
    }
    var ln = (function () {
      let n = "0123456789abcdef",
        i = new Array(256);
      for (let o = 0; o < 16; ++o) {
        let h = o * 16;
        for (let d = 0; d < 16; ++d) i[h + d] = n[o] + n[d];
      }
      return i;
    })();
    function ge(n) {
      return typeof BigInt > "u" ? hn : n;
    }
    function hn() {
      throw new Error("BigInt not supported");
    }
  }),
  oy = Mt((t, e) => {
    typeof window < "u"
      ? ((window.global = window),
        (global.fetch = window.fetch),
        (e.exports = { Buffer: Ws().Buffer, Crypto: window.crypto }))
      : (e.exports = { Buffer: Ws().Buffer, Crypto: crypto });
  }),
  Xu = {};
ty(Xu, {
  AVSCTap: () => di,
  ArweaveSigner: () => Aa,
  DataItem: () => si,
  MAX_TAG_BYTES: () => as,
  MIN_BINARY_SIZE: () => xa,
  SIG_CONFIG: () => Hr,
  SignatureConfig: () => Ze,
  Signer: () => Ju,
  createData: () => nc,
  deserializeTags: () => Ki,
  indexToType: () => Sa,
  serializeTags: () => Ta,
  tagsExceedLimit: () => rc,
});
var Ju = class {
    constructor() {
      F(this, "signer");
      F(this, "publicKey");
      F(this, "signatureType");
      F(this, "signatureLength");
      F(this, "ownerLength");
      F(this, "pem");
    }
    static verify(t, e, r, s) {
      throw new Error("You must implement verify method on child");
    }
  },
  uy = Sr(Ea()),
  pt = Sr(Qu());
async function ec(t) {
  if (Array.isArray(t)) {
    let a = (0, pt.concatBuffers)([
      (0, pt.stringToBuffer)("list"),
      (0, pt.stringToBuffer)(t.length.toString()),
    ]);
    return await tc(t, await Rt().hash(a, "SHA-384"));
  }
  let e = t,
    r = (0, pt.concatBuffers)([
      (0, pt.stringToBuffer)("blob"),
      (0, pt.stringToBuffer)(e.byteLength.toString()),
    ]),
    s = (0, pt.concatBuffers)([
      await Rt().hash(r, "SHA-384"),
      await Rt().hash(e, "SHA-384"),
    ]);
  return await Rt().hash(s, "SHA-384");
}
async function tc(t, e) {
  if (t.length < 1) return e;
  let r = (0, pt.concatBuffers)([e, await ec(t[0])]),
    s = await Rt().hash(r, "SHA-384");
  return await tc(t.slice(1), s);
}
var ys = Sr(sy()),
  cy = ys.default.default ? ys.default.default : ys.default,
  ly = class extends cy {
    getPublicKey(t) {
      throw new Error("Unimplemented");
    }
  },
  hy;
function Rt() {
  return hy ?? (hy = new ly());
}
var Ze;
(function (t) {
  (t[(t.ARWEAVE = 1)] = "ARWEAVE"),
    (t[(t.ED25519 = 2)] = "ED25519"),
    (t[(t.ETHEREUM = 3)] = "ETHEREUM"),
    (t[(t.SOLANA = 4)] = "SOLANA"),
    (t[(t.INJECTEDAPTOS = 5)] = "INJECTEDAPTOS"),
    (t[(t.MULTIAPTOS = 6)] = "MULTIAPTOS"),
    (t[(t.TYPEDETHEREUM = 7)] = "TYPEDETHEREUM");
})(Ze || (Ze = {}));
var Hr = {
    [Ze.ARWEAVE]: { sigLength: 512, pubLength: 512, sigName: "arweave" },
    [Ze.ED25519]: { sigLength: 64, pubLength: 32, sigName: "ed25519" },
    [Ze.ETHEREUM]: { sigLength: 65, pubLength: 65, sigName: "ethereum" },
    [Ze.SOLANA]: { sigLength: 64, pubLength: 32, sigName: "solana" },
    [Ze.INJECTEDAPTOS]: {
      sigLength: 64,
      pubLength: 32,
      sigName: "injectedAptos",
    },
    [Ze.MULTIAPTOS]: {
      sigLength: 64 * 32 + 4,
      pubLength: 32 * 32 + 1,
      sigName: "multiAptos",
    },
    [Ze.TYPEDETHEREUM]: {
      sigLength: 65,
      pubLength: 42,
      sigName: "typedEthereum",
    },
  },
  Aa = class {
    constructor(t) {
      F(this, "signatureType", 1);
      F(this, "ownerLength", Hr[1].pubLength);
      F(this, "signatureLength", Hr[1].sigLength);
      F(this, "jwk");
      F(this, "pk");
      (this.pk = t.n), (this.jwk = t);
    }
    get publicKey() {
      return uy.default.toBuffer(this.pk);
    }
    sign(t) {
      return Rt().sign(this.jwk, t);
    }
    static async verify(t, e, r) {
      return await Rt().verify(t, e, r);
    }
  },
  Sa = { 1: Aa },
  wt = Sr(Ea());
async function Gs(t) {
  return ec([
    (0, pt.stringToBuffer)("dataitem"),
    (0, pt.stringToBuffer)("1"),
    (0, pt.stringToBuffer)(t.signatureType.toString()),
    t.rawOwner,
    t.rawTarget,
    t.rawAnchor,
    t.rawTags,
    t.rawData,
  ]);
}
async function fy(t, e) {
  let r = await Gs(t),
    s = await e.sign(r),
    a = await Rt().hash(s);
  return { signature: Buffer.from(s), id: Buffer.from(a) };
}
async function dy(t, e) {
  let { signature: r, id: s } = await fy(t, e);
  return t.getRaw().set(r, 2), s;
}
var di = class {
  constructor(t = Buffer.alloc(as), e = 0) {
    F(this, "buf");
    F(this, "pos");
    (this.buf = t), (this.pos = e);
  }
  writeTags(t) {
    if (!Array.isArray(t)) throw new Error("input must be array");
    let e = t.length,
      r;
    if (e)
      for (this.writeLong(e), r = 0; r < e; r++) {
        let s = t[r];
        if (
          (s == null ? void 0 : s.name) === void 0 ||
          (s == null ? void 0 : s.value) === void 0
        )
          throw new Error(
            `Invalid tag format for ${s}, expected {name:string, value: string}`
          );
        this.writeString(s.name), this.writeString(s.value);
      }
    this.writeLong(0);
  }
  toBuffer() {
    let t = Buffer.alloc(this.pos);
    if (this.pos > this.buf.length)
      throw new Error(`Too many tag bytes (${this.pos} > ${this.buf.length})`);
    return this.buf.copy(t, 0, 0, this.pos), t;
  }
  tagsExceedLimit() {
    return this.pos > this.buf.length;
  }
  writeLong(t) {
    let e = this.buf,
      r,
      s;
    if (t >= -1073741824 && t < 1073741824) {
      s = t >= 0 ? t << 1 : (~t << 1) | 1;
      do (e[this.pos] = s & 127), (s >>= 7);
      while (s && (e[this.pos++] |= 128));
    } else {
      r = t >= 0 ? t * 2 : -t * 2 - 1;
      do (e[this.pos] = r & 127), (r /= 128);
      while (r >= 1 && (e[this.pos++] |= 128));
    }
    this.pos++, (this.buf = e);
  }
  writeString(t) {
    let e = Buffer.byteLength(t),
      r = this.buf;
    this.writeLong(e);
    let s = this.pos;
    if (((this.pos += e), !(this.pos > r.length))) {
      if (e > 64) this.buf.write(t, this.pos - e, e, "utf8");
      else {
        let a, c, l, u;
        for (a = 0, c = e; a < c; a++)
          (l = t.charCodeAt(a)),
            l < 128
              ? (r[s++] = l)
              : l < 2048
              ? ((r[s++] = (l >> 6) | 192), (r[s++] = (l & 63) | 128))
              : (l & 64512) === 55296 &&
                ((u = t.charCodeAt(a + 1)) & 64512) === 56320
              ? ((l = 65536 + ((l & 1023) << 10) + (u & 1023)),
                a++,
                (r[s++] = (l >> 18) | 240),
                (r[s++] = ((l >> 12) & 63) | 128),
                (r[s++] = ((l >> 6) & 63) | 128),
                (r[s++] = (l & 63) | 128))
              : ((r[s++] = (l >> 12) | 224),
                (r[s++] = ((l >> 6) & 63) | 128),
                (r[s++] = (l & 63) | 128));
      }
      this.buf = r;
    }
  }
  readLong() {
    let t = 0,
      e = 0,
      r = this.buf,
      s,
      a,
      c,
      l;
    do (s = r[this.pos++]), (a = s & 128), (t |= (s & 127) << e), (e += 7);
    while (a && e < 28);
    if (a) {
      (c = t), (l = 268435456);
      do (s = r[this.pos++]), (c += (s & 127) * l), (l *= 128);
      while (s & 128);
      return (c % 2 ? -(c + 1) : c) / 2;
    }
    return (t >> 1) ^ -(t & 1);
  }
  skipLong() {
    let t = this.buf;
    for (; t[this.pos++] & 128; );
  }
  readTags() {
    let t = [],
      e;
    for (; (e = this.readLong()); )
      for (e < 0 && ((e = -e), this.skipLong()); e--; ) {
        let r = this.readString(),
          s = this.readString();
        t.push({ name: r, value: s });
      }
    return t;
  }
  readString() {
    let t = this.readLong(),
      e = this.pos,
      r = this.buf;
    if (((this.pos += t), !(this.pos > r.length)))
      return this.buf.slice(e, e + t).toString();
  }
};
function Ta(t) {
  let e = new di();
  return e.writeTags(t), e.toBuffer();
}
function rc(t) {
  let e = new di();
  return e.writeTags(t), e.tagsExceedLimit();
}
function Ki(t) {
  return new di(t).readTags();
}
function Kt(t) {
  let e = 0;
  for (let r = t.length - 1; r >= 0; r--) e = e * 256 + t[r];
  return e;
}
function py(t) {
  if (t > 29) throw new Error("Short too long");
  let e = [0, 0];
  for (let r = 0; r < e.length; r++) {
    let s = t & 255;
    (e[r] = s), (t = (t - s) / 256);
  }
  return Uint8Array.from(e);
}
function oo(t) {
  let e = [0, 0, 0, 0, 0, 0, 0, 0];
  for (let r = 0; r < e.length; r++) {
    let s = t & 255;
    (e[r] = s), (t = (t - s) / 256);
  }
  return Uint8Array.from(e);
}
var gy = Sr(oy()),
  kr = Sr(Ws()),
  as = 4096,
  xa = 80,
  si = class {
    constructor(t) {
      F(this, "binary");
      F(this, "_id");
      this.binary = t;
    }
    static isDataItem(t) {
      return t.binary !== void 0;
    }
    get signatureType() {
      let t = Kt(this.binary.subarray(0, 2));
      if ((Ze == null ? void 0 : Ze[t]) !== void 0) return t;
      throw new Error("Unknown signature type: " + t);
    }
    async isValid() {
      return si.verify(this.binary);
    }
    get id() {
      return (async () => wt.default.encode(await this.rawId))();
    }
    set id(t) {
      this._id = wt.default.toBuffer(t);
    }
    get rawId() {
      return (async () =>
        kr.Buffer.from(
          await gy.Crypto.subtle.digest("SHA-256", this.rawSignature)
        ))();
    }
    set rawId(t) {
      this._id = t;
    }
    get rawSignature() {
      return this.binary.subarray(2, 2 + this.signatureLength);
    }
    get signature() {
      return wt.default.encode(this.rawSignature);
    }
    set rawOwner(t) {
      if (t.byteLength != this.ownerLength)
        throw new Error(
          `Expected raw owner (pubkey) to be ${this.ownerLength} bytes, got ${t.byteLength} bytes.`
        );
      this.binary.set(t, 2 + this.signatureLength);
    }
    get rawOwner() {
      return this.binary.subarray(
        2 + this.signatureLength,
        2 + this.signatureLength + this.ownerLength
      );
    }
    get signatureLength() {
      return Hr[this.signatureType].sigLength;
    }
    get owner() {
      return wt.default.encode(this.rawOwner);
    }
    get ownerLength() {
      return Hr[this.signatureType].pubLength;
    }
    get rawTarget() {
      let t = this.getTargetStart();
      return this.binary[t] == 1
        ? this.binary.subarray(t + 1, t + 33)
        : kr.Buffer.alloc(0);
    }
    get target() {
      return wt.default.encode(this.rawTarget);
    }
    get rawAnchor() {
      let t = this.getAnchorStart();
      return this.binary[t] == 1
        ? this.binary.subarray(t + 1, t + 33)
        : kr.Buffer.alloc(0);
    }
    get anchor() {
      return this.rawAnchor.toString();
    }
    get rawTags() {
      let t = this.getTagsStart(),
        e = Kt(this.binary.subarray(t + 8, t + 16));
      return this.binary.subarray(t + 16, t + 16 + e);
    }
    get tags() {
      let t = this.getTagsStart();
      if (Kt(this.binary.subarray(t, t + 8)) == 0) return [];
      let e = Kt(this.binary.subarray(t + 8, t + 16));
      return Ki(kr.Buffer.from(this.binary.subarray(t + 16, t + 16 + e)));
    }
    get tagsB64Url() {
      return this.tags.map((t) => ({
        name: wt.default.encode(t.name),
        value: wt.default.encode(t.value),
      }));
    }
    getStartOfData() {
      let t = this.getTagsStart(),
        e = this.binary.subarray(t + 8, t + 16),
        r = Kt(e);
      return t + 16 + r;
    }
    get rawData() {
      let t = this.getTagsStart(),
        e = this.binary.subarray(t + 8, t + 16),
        r = Kt(e),
        s = t + 16 + r;
      return this.binary.subarray(s, this.binary.length);
    }
    get data() {
      return wt.default.encode(this.rawData);
    }
    getRaw() {
      return this.binary;
    }
    async sign(t) {
      return (this._id = await dy(this, t)), this.rawId;
    }
    async setSignature(t) {
      this.binary.set(t, 2), (this._id = kr.Buffer.from(await Rt().hash(t)));
    }
    isSigned() {
      var t;
      return (((t = this._id) == null ? void 0 : t.length) ?? 0) > 0;
    }
    toJSON() {
      return {
        signature: this.signature,
        owner: this.owner,
        target: this.target,
        tags: this.tags.map((t) => ({
          name: wt.default.encode(t.name),
          value: wt.default.encode(t.value),
        })),
        data: this.data,
      };
    }
    static async verify(t) {
      if (t.byteLength < xa) return !1;
      let e = new si(t),
        r = e.signatureType,
        s = e.getTagsStart(),
        a = Kt(t.subarray(s, s + 8)),
        c = t.subarray(s + 8, s + 16),
        l = Kt(c);
      if (l > as) return !1;
      if (a > 0)
        try {
          if (Ki(kr.Buffer.from(t.subarray(s + 16, s + 16 + l))).length !== a)
            return !1;
        } catch {
          return !1;
        }
      let u = Sa[r],
        f = await Gs(e);
      return await u.verify(e.rawOwner, f, e.rawSignature);
    }
    async getSignatureData() {
      return Gs(this);
    }
    getTagsStart() {
      let t = this.getTargetStart(),
        e = this.binary[t] == 1,
        r = t + (e ? 33 : 1),
        s = this.binary[r] == 1;
      return (r += s ? 33 : 1), r;
    }
    getTargetStart() {
      return 2 + this.signatureLength + this.ownerLength;
    }
    getAnchorStart() {
      let t = this.getTargetStart() + 1,
        e = this.binary[this.getTargetStart()] == 1;
      return (t += e ? 32 : 0), t;
    }
  },
  my = Sr(Ea());
function nc(t, e, r) {
  var B, L;
  let s = e.publicKey,
    a = r != null && r.target ? my.default.toBuffer(r.target) : null,
    c = 1 + ((a == null ? void 0 : a.byteLength) ?? 0),
    l = r != null && r.anchor ? Buffer.from(r.anchor) : null,
    u = 1 + ((l == null ? void 0 : l.byteLength) ?? 0),
    f =
      (((B = r == null ? void 0 : r.tags) == null ? void 0 : B.length) ?? 0) > 0
        ? Ta(r.tags)
        : null,
    p = 16 + (f ? f.byteLength : 0),
    b = Buffer.from(t),
    v = b.byteLength,
    _ = 2 + e.signatureLength + e.ownerLength + c + u + p + v,
    E = Buffer.alloc(_);
  if (
    (E.set(py(e.signatureType), 0),
    E.set(new Uint8Array(e.signatureLength).fill(0), 2),
    s.byteLength !== e.ownerLength)
  )
    throw new Error(
      `Owner must be ${e.ownerLength} bytes, but was incorrectly ${s.byteLength}`
    );
  E.set(s, 2 + e.signatureLength);
  let w = 2 + e.signatureLength + e.ownerLength;
  if (((E[w] = a ? 1 : 0), a)) {
    if (a.byteLength !== 32)
      throw new Error(
        `Target must be 32 bytes but was incorrectly ${a.byteLength}`
      );
    E.set(a, w + 1);
  }
  let A = w + c,
    S = A + 1;
  if (((E[A] = l ? 1 : 0), l)) {
    if (((S += l.byteLength), l.byteLength !== 32))
      throw new Error("Anchor must be 32 bytes");
    E.set(l, A + 1);
  }
  E.set(
    oo(((L = r == null ? void 0 : r.tags) == null ? void 0 : L.length) ?? 0),
    S
  );
  let x = oo((f == null ? void 0 : f.byteLength) ?? 0);
  E.set(x, S + 8), f && E.set(f, S + 16);
  let C = S + p;
  return E.set(b, C), new si(E);
}
var ka = { ...Xu };
globalThis.arbundles ?? (globalThis.arbundles = ka);
var yy = ka,
  vy = ka;
globalThis.Buffer || (globalThis.Buffer = Ku.Buffer);
var { DataItem: wy } = Hu;
function by(t) {
  return async ({
    data: r,
    tags: s,
    target: a,
    anchor: c,
    createDataItem: l = (u) => new wy(u),
  }) => {
    const u = await t.signDataItem({ data: r, tags: s, target: a, anchor: c }),
      f = l(Ku.Buffer.from(u));
    return { id: await f.id, raw: await f.getRaw() };
  };
}
var _y = globalThis.GATEWAY_URL || void 0,
  Ey = globalThis.MU_URL || void 0,
  Ay = globalThis.CU_URL || void 0,
  Sy = globalThis.GRAPHQL_URL || void 0,
  Ty = globalThis.GRAPHQL_MAX_RETRIES || void 0,
  xy = globalThis.GRAPHQL_RETRY_BACKOFF || void 0,
  {
    result: cv,
    results: lv,
    message: ic,
    spawn: hv,
    monitor: fv,
    unmonitor: dv,
    dryrun: pv,
    assign: gv,
  } = Hm({
    GATEWAY_URL: _y,
    MU_URL: Ey,
    CU_URL: Ay,
    GRAPHQL_URL: Sy,
    GRAPHQL_MAX_RETRIES: Ty,
    GRAPHQL_RETRY_BACKOFF: xy,
  });
qu.createDataItemSigner;
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

warp-arbundles/build/web/esm/bundle.js:
  (*! Bundled license information:
  
  ieee754/index.js:
    (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  
  buffer/index.js:
    (*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     *)
  *)
*/ var ky = Object.create,
  Ba = Object.defineProperty,
  By = Object.getOwnPropertyDescriptor,
  Oy = Object.getOwnPropertyNames,
  Ry = Object.getPrototypeOf,
  Iy = Object.prototype.hasOwnProperty,
  Nt = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
  Cy = (t, e) => {
    for (var r in e) Ba(t, r, { get: e[r], enumerable: !0 });
  },
  Ly = (t, e, r, s) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let a of Oy(e))
        !Iy.call(t, a) &&
          a !== r &&
          Ba(t, a, {
            get: () => e[a],
            enumerable: !(s = By(e, a)) || s.enumerable,
          });
    return t;
  },
  Tr = (t, e, r) => (
    (r = t != null ? ky(Ry(t)) : {}),
    Ly(Ba(r, "default", { value: t, enumerable: !0 }), t)
  ),
  Uy = Nt((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 });
    function e(r) {
      var s = 4,
        a = r.length,
        c = a % s;
      if (!c) return r;
      var l = a,
        u = s - c,
        f = a + u,
        p = Buffer.alloc(f);
      for (p.write(r); u--; ) p.write("=", l++);
      return p.toString();
    }
    t.default = e;
  }),
  My = Nt((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = Uy();
    function r(f, p) {
      return (
        p === void 0 && (p = "utf8"),
        Buffer.isBuffer(f)
          ? c(f.toString("base64"))
          : c(Buffer.from(f, p).toString("base64"))
      );
    }
    function s(f, p) {
      return (
        p === void 0 && (p = "utf8"), Buffer.from(a(f), "base64").toString(p)
      );
    }
    function a(f) {
      return (
        (f = f.toString()), e.default(f).replace(/\-/g, "+").replace(/_/g, "/")
      );
    }
    function c(f) {
      return f.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function l(f) {
      return Buffer.from(a(f), "base64");
    }
    var u = r;
    (u.encode = r),
      (u.decode = s),
      (u.toBase64 = a),
      (u.fromBase64 = c),
      (u.toBuffer = l),
      (t.default = u);
  }),
  Oa = Nt((t, e) => {
    (e.exports = My().default), (e.exports.default = e.exports);
  }),
  sc = Nt((t) => {
    (t.byteLength = f), (t.toByteArray = b), (t.fromByteArray = E);
    var e = [],
      r = [],
      s = typeof Uint8Array < "u" ? Uint8Array : Array,
      a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (c = 0, l = a.length; c < l; ++c)
      (e[c] = a[c]), (r[a.charCodeAt(c)] = c);
    var c, l;
    (r[45] = 62), (r[95] = 63);
    function u(w) {
      var A = w.length;
      if (A % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var S = w.indexOf("=");
      S === -1 && (S = A);
      var x = S === A ? 0 : 4 - (S % 4);
      return [S, x];
    }
    function f(w) {
      var A = u(w),
        S = A[0],
        x = A[1];
      return ((S + x) * 3) / 4 - x;
    }
    function p(w, A, S) {
      return ((A + S) * 3) / 4 - S;
    }
    function b(w) {
      var A,
        S = u(w),
        x = S[0],
        C = S[1],
        B = new s(p(w, x, C)),
        L = 0,
        z = C > 0 ? x - 4 : x,
        V;
      for (V = 0; V < z; V += 4)
        (A =
          (r[w.charCodeAt(V)] << 18) |
          (r[w.charCodeAt(V + 1)] << 12) |
          (r[w.charCodeAt(V + 2)] << 6) |
          r[w.charCodeAt(V + 3)]),
          (B[L++] = (A >> 16) & 255),
          (B[L++] = (A >> 8) & 255),
          (B[L++] = A & 255);
      return (
        C === 2 &&
          ((A = (r[w.charCodeAt(V)] << 2) | (r[w.charCodeAt(V + 1)] >> 4)),
          (B[L++] = A & 255)),
        C === 1 &&
          ((A =
            (r[w.charCodeAt(V)] << 10) |
            (r[w.charCodeAt(V + 1)] << 4) |
            (r[w.charCodeAt(V + 2)] >> 2)),
          (B[L++] = (A >> 8) & 255),
          (B[L++] = A & 255)),
        B
      );
    }
    function v(w) {
      return (
        e[(w >> 18) & 63] + e[(w >> 12) & 63] + e[(w >> 6) & 63] + e[w & 63]
      );
    }
    function _(w, A, S) {
      for (var x, C = [], B = A; B < S; B += 3)
        (x =
          ((w[B] << 16) & 16711680) +
          ((w[B + 1] << 8) & 65280) +
          (w[B + 2] & 255)),
          C.push(v(x));
      return C.join("");
    }
    function E(w) {
      for (
        var A, S = w.length, x = S % 3, C = [], B = 16383, L = 0, z = S - x;
        L < z;
        L += B
      )
        C.push(_(w, L, L + B > z ? z : L + B));
      return (
        x === 1
          ? ((A = w[S - 1]), C.push(e[A >> 2] + e[(A << 4) & 63] + "=="))
          : x === 2 &&
            ((A = (w[S - 2] << 8) + w[S - 1]),
            C.push(e[A >> 10] + e[(A >> 4) & 63] + e[(A << 2) & 63] + "=")),
        C.join("")
      );
    }
  }),
  ac = Nt((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.b64UrlDecode =
        t.b64UrlEncode =
        t.bufferTob64Url =
        t.bufferTob64 =
        t.b64UrlToBuffer =
        t.stringToB64Url =
        t.stringToBuffer =
        t.bufferToString =
        t.b64UrlToString =
        t.concatBuffers =
          void 0);
    var e = sc();
    function r(_) {
      let E = 0;
      for (let S = 0; S < _.length; S++) E += _[S].byteLength;
      let w = new Uint8Array(E),
        A = 0;
      w.set(new Uint8Array(_[0]), A), (A += _[0].byteLength);
      for (let S = 1; S < _.length; S++)
        w.set(new Uint8Array(_[S]), A), (A += _[S].byteLength);
      return w;
    }
    t.concatBuffers = r;
    function s(_) {
      let E = u(_);
      return a(E);
    }
    t.b64UrlToString = s;
    function a(_) {
      return new TextDecoder("utf-8", { fatal: !0 }).decode(_);
    }
    t.bufferToString = a;
    function c(_) {
      return new TextEncoder().encode(_);
    }
    t.stringToBuffer = c;
    function l(_) {
      return p(c(_));
    }
    t.stringToB64Url = l;
    function u(_) {
      return new Uint8Array(e.toByteArray(v(_)));
    }
    t.b64UrlToBuffer = u;
    function f(_) {
      return e.fromByteArray(new Uint8Array(_));
    }
    t.bufferTob64 = f;
    function p(_) {
      return b(f(_));
    }
    t.bufferTob64Url = p;
    function b(_) {
      return _.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
    }
    t.b64UrlEncode = b;
    function v(_) {
      _ = _.replace(/\-/g, "+").replace(/\_/g, "/");
      let E;
      return (
        _.length % 4 == 0 ? (E = 0) : (E = 4 - (_.length % 4)),
        _.concat("=".repeat(E))
      );
    }
    t.b64UrlDecode = v;
  }),
  Ny = Nt((t) => {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = ac(),
      r = class {
        constructor() {
          F(this, "keyLength", 4096);
          F(this, "publicExponent", 65537);
          F(this, "hashAlgorithm", "sha256");
          F(this, "driver");
          if (!this.detectWebCrypto())
            throw new Error("SubtleCrypto not available!");
          this.driver = crypto.subtle;
        }
        async generateJWK() {
          let s = await this.driver.generateKey(
              {
                name: "RSA-PSS",
                modulusLength: 4096,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: { name: "SHA-256" },
              },
              !0,
              ["sign"]
            ),
            a = await this.driver.exportKey("jwk", s.privateKey);
          return {
            kty: a.kty,
            e: a.e,
            n: a.n,
            d: a.d,
            p: a.p,
            q: a.q,
            dp: a.dp,
            dq: a.dq,
            qi: a.qi,
          };
        }
        async sign(s, a, { saltLength: c } = {}) {
          let l = await this.driver.sign(
            { name: "RSA-PSS", saltLength: 32 },
            await this.jwkToCryptoKey(s),
            a
          );
          return new Uint8Array(l);
        }
        async hash(s, a = "SHA-256") {
          let c = await this.driver.digest(a, s);
          return new Uint8Array(c);
        }
        async verify(s, a, c) {
          let l = { kty: "RSA", e: "AQAB", n: s },
            u = await this.jwkToPublicCryptoKey(l),
            f = await this.driver.digest("SHA-256", a),
            p = await this.driver.verify(
              { name: "RSA-PSS", saltLength: 0 },
              u,
              c,
              a
            ),
            b = await this.driver.verify(
              { name: "RSA-PSS", saltLength: 32 },
              u,
              c,
              a
            ),
            v = await this.driver.verify(
              {
                name: "RSA-PSS",
                saltLength:
                  Math.ceil((u.algorithm.modulusLength - 1) / 8) -
                  f.byteLength -
                  2,
              },
              u,
              c,
              a
            );
          return p || b || v;
        }
        async jwkToCryptoKey(s) {
          return this.driver.importKey(
            "jwk",
            s,
            { name: "RSA-PSS", hash: { name: "SHA-256" } },
            !1,
            ["sign"]
          );
        }
        async jwkToPublicCryptoKey(s) {
          return this.driver.importKey(
            "jwk",
            s,
            { name: "RSA-PSS", hash: { name: "SHA-256" } },
            !1,
            ["verify"]
          );
        }
        detectWebCrypto() {
          if (typeof crypto > "u") return !1;
          let s = crypto == null ? void 0 : crypto.subtle;
          return s === void 0
            ? !1
            : ["generateKey", "importKey", "exportKey", "digest", "sign"].every(
                (a) => typeof s[a] == "function"
              );
        }
        async encrypt(s, a, c) {
          let l = await this.driver.importKey(
              "raw",
              typeof a == "string" ? e.stringToBuffer(a) : a,
              { name: "PBKDF2", length: 32 },
              !1,
              ["deriveKey"]
            ),
            u = await this.driver.deriveKey(
              {
                name: "PBKDF2",
                salt: c ? e.stringToBuffer(c) : e.stringToBuffer("salt"),
                iterations: 1e5,
                hash: "SHA-256",
              },
              l,
              { name: "AES-CBC", length: 256 },
              !1,
              ["encrypt", "decrypt"]
            ),
            f = new Uint8Array(16);
          crypto.getRandomValues(f);
          let p = await this.driver.encrypt({ name: "AES-CBC", iv: f }, u, s);
          return e.concatBuffers([f, p]);
        }
        async decrypt(s, a, c) {
          let l = await this.driver.importKey(
              "raw",
              typeof a == "string" ? e.stringToBuffer(a) : a,
              { name: "PBKDF2", length: 32 },
              !1,
              ["deriveKey"]
            ),
            u = await this.driver.deriveKey(
              {
                name: "PBKDF2",
                salt: c ? e.stringToBuffer(c) : e.stringToBuffer("salt"),
                iterations: 1e5,
                hash: "SHA-256",
              },
              l,
              { name: "AES-CBC", length: 256 },
              !1,
              ["encrypt", "decrypt"]
            ),
            f = s.slice(0, 16),
            p = await this.driver.decrypt(
              { name: "AES-CBC", iv: f },
              u,
              s.slice(16)
            );
          return e.concatBuffers([p]);
        }
      };
    t.default = r;
  }),
  Py = Nt((t) => {
    (t.read = function (e, r, s, a, c) {
      var l,
        u,
        f = c * 8 - a - 1,
        p = (1 << f) - 1,
        b = p >> 1,
        v = -7,
        _ = s ? c - 1 : 0,
        E = s ? -1 : 1,
        w = e[r + _];
      for (
        _ += E, l = w & ((1 << -v) - 1), w >>= -v, v += f;
        v > 0;
        l = l * 256 + e[r + _], _ += E, v -= 8
      );
      for (
        u = l & ((1 << -v) - 1), l >>= -v, v += a;
        v > 0;
        u = u * 256 + e[r + _], _ += E, v -= 8
      );
      if (l === 0) l = 1 - b;
      else {
        if (l === p) return u ? NaN : (w ? -1 : 1) * (1 / 0);
        (u = u + Math.pow(2, a)), (l = l - b);
      }
      return (w ? -1 : 1) * u * Math.pow(2, l - a);
    }),
      (t.write = function (e, r, s, a, c, l) {
        var u,
          f,
          p,
          b = l * 8 - c - 1,
          v = (1 << b) - 1,
          _ = v >> 1,
          E = c === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          w = a ? 0 : l - 1,
          A = a ? 1 : -1,
          S = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
        for (
          r = Math.abs(r),
            isNaN(r) || r === 1 / 0
              ? ((f = isNaN(r) ? 1 : 0), (u = v))
              : ((u = Math.floor(Math.log(r) / Math.LN2)),
                r * (p = Math.pow(2, -u)) < 1 && (u--, (p *= 2)),
                u + _ >= 1 ? (r += E / p) : (r += E * Math.pow(2, 1 - _)),
                r * p >= 2 && (u++, (p /= 2)),
                u + _ >= v
                  ? ((f = 0), (u = v))
                  : u + _ >= 1
                  ? ((f = (r * p - 1) * Math.pow(2, c)), (u = u + _))
                  : ((f = r * Math.pow(2, _ - 1) * Math.pow(2, c)), (u = 0)));
          c >= 8;
          e[s + w] = f & 255, w += A, f /= 256, c -= 8
        );
        for (
          u = (u << c) | f, b += c;
          b > 0;
          e[s + w] = u & 255, w += A, u /= 256, b -= 8
        );
        e[s + w - A] |= S * 128;
      });
  }),
  qs = Nt((t) => {
    var e = sc(),
      r = Py(),
      s =
        typeof Symbol == "function" && typeof Symbol.for == "function"
          ? Symbol.for("nodejs.util.inspect.custom")
          : null;
    (t.Buffer = u), (t.SlowBuffer = C), (t.INSPECT_MAX_BYTES = 50);
    var a = 2147483647;
    (t.kMaxLength = a),
      (u.TYPED_ARRAY_SUPPORT = c()),
      !u.TYPED_ARRAY_SUPPORT &&
        typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
    function c() {
      try {
        let n = new Uint8Array(1),
          i = {
            foo: function () {
              return 42;
            },
          };
        return (
          Object.setPrototypeOf(i, Uint8Array.prototype),
          Object.setPrototypeOf(n, i),
          n.foo() === 42
        );
      } catch {
        return !1;
      }
    }
    Object.defineProperty(u.prototype, "parent", {
      enumerable: !0,
      get: function () {
        if (u.isBuffer(this)) return this.buffer;
      },
    }),
      Object.defineProperty(u.prototype, "offset", {
        enumerable: !0,
        get: function () {
          if (u.isBuffer(this)) return this.byteOffset;
        },
      });
    function l(n) {
      if (n > a)
        throw new RangeError(
          'The value "' + n + '" is invalid for option "size"'
        );
      let i = new Uint8Array(n);
      return Object.setPrototypeOf(i, u.prototype), i;
    }
    function u(n, i, o) {
      if (typeof n == "number") {
        if (typeof i == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return v(n);
      }
      return f(n, i, o);
    }
    u.poolSize = 8192;
    function f(n, i, o) {
      if (typeof n == "string") return _(n, i);
      if (ArrayBuffer.isView(n)) return w(n);
      if (n == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof n
        );
      if (
        le(n, ArrayBuffer) ||
        (n && le(n.buffer, ArrayBuffer)) ||
        (typeof SharedArrayBuffer < "u" &&
          (le(n, SharedArrayBuffer) || (n && le(n.buffer, SharedArrayBuffer))))
      )
        return A(n, i, o);
      if (typeof n == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      let h = n.valueOf && n.valueOf();
      if (h != null && h !== n) return u.from(h, i, o);
      let d = S(n);
      if (d) return d;
      if (
        typeof Symbol < "u" &&
        Symbol.toPrimitive != null &&
        typeof n[Symbol.toPrimitive] == "function"
      )
        return u.from(n[Symbol.toPrimitive]("string"), i, o);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof n
      );
    }
    (u.from = function (n, i, o) {
      return f(n, i, o);
    }),
      Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
      Object.setPrototypeOf(u, Uint8Array);
    function p(n) {
      if (typeof n != "number")
        throw new TypeError('"size" argument must be of type number');
      if (n < 0)
        throw new RangeError(
          'The value "' + n + '" is invalid for option "size"'
        );
    }
    function b(n, i, o) {
      return (
        p(n),
        n <= 0
          ? l(n)
          : i !== void 0
          ? typeof o == "string"
            ? l(n).fill(i, o)
            : l(n).fill(i)
          : l(n)
      );
    }
    u.alloc = function (n, i, o) {
      return b(n, i, o);
    };
    function v(n) {
      return p(n), l(n < 0 ? 0 : x(n) | 0);
    }
    (u.allocUnsafe = function (n) {
      return v(n);
    }),
      (u.allocUnsafeSlow = function (n) {
        return v(n);
      });
    function _(n, i) {
      if (
        ((typeof i != "string" || i === "") && (i = "utf8"), !u.isEncoding(i))
      )
        throw new TypeError("Unknown encoding: " + i);
      let o = B(n, i) | 0,
        h = l(o),
        d = h.write(n, i);
      return d !== o && (h = h.slice(0, d)), h;
    }
    function E(n) {
      let i = n.length < 0 ? 0 : x(n.length) | 0,
        o = l(i);
      for (let h = 0; h < i; h += 1) o[h] = n[h] & 255;
      return o;
    }
    function w(n) {
      if (le(n, Uint8Array)) {
        let i = new Uint8Array(n);
        return A(i.buffer, i.byteOffset, i.byteLength);
      }
      return E(n);
    }
    function A(n, i, o) {
      if (i < 0 || n.byteLength < i)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (n.byteLength < i + (o || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let h;
      return (
        i === void 0 && o === void 0
          ? (h = new Uint8Array(n))
          : o === void 0
          ? (h = new Uint8Array(n, i))
          : (h = new Uint8Array(n, i, o)),
        Object.setPrototypeOf(h, u.prototype),
        h
      );
    }
    function S(n) {
      if (u.isBuffer(n)) {
        let i = x(n.length) | 0,
          o = l(i);
        return o.length === 0 || n.copy(o, 0, 0, i), o;
      }
      if (n.length !== void 0)
        return typeof n.length != "number" || nt(n.length) ? l(0) : E(n);
      if (n.type === "Buffer" && Array.isArray(n.data)) return E(n.data);
    }
    function x(n) {
      if (n >= a)
        throw new RangeError(
          "Attempt to allocate Buffer larger than maximum size: 0x" +
            a.toString(16) +
            " bytes"
        );
      return n | 0;
    }
    function C(n) {
      return +n != n && (n = 0), u.alloc(+n);
    }
    (u.isBuffer = function (n) {
      return n != null && n._isBuffer === !0 && n !== u.prototype;
    }),
      (u.compare = function (n, i) {
        if (
          (le(n, Uint8Array) && (n = u.from(n, n.offset, n.byteLength)),
          le(i, Uint8Array) && (i = u.from(i, i.offset, i.byteLength)),
          !u.isBuffer(n) || !u.isBuffer(i))
        )
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        if (n === i) return 0;
        let o = n.length,
          h = i.length;
        for (let d = 0, g = Math.min(o, h); d < g; ++d)
          if (n[d] !== i[d]) {
            (o = n[d]), (h = i[d]);
            break;
          }
        return o < h ? -1 : h < o ? 1 : 0;
      }),
      (u.isEncoding = function (n) {
        switch (String(n).toLowerCase()) {
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
            return !0;
          default:
            return !1;
        }
      }),
      (u.concat = function (n, i) {
        if (!Array.isArray(n))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (n.length === 0) return u.alloc(0);
        let o;
        if (i === void 0)
          for (i = 0, o = 0; o < n.length; ++o) i += n[o].length;
        let h = u.allocUnsafe(i),
          d = 0;
        for (o = 0; o < n.length; ++o) {
          let g = n[o];
          if (le(g, Uint8Array))
            d + g.length > h.length
              ? (u.isBuffer(g) || (g = u.from(g)), g.copy(h, d))
              : Uint8Array.prototype.set.call(h, g, d);
          else if (u.isBuffer(g)) g.copy(h, d);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          d += g.length;
        }
        return h;
      });
    function B(n, i) {
      if (u.isBuffer(n)) return n.length;
      if (ArrayBuffer.isView(n) || le(n, ArrayBuffer)) return n.byteLength;
      if (typeof n != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
            typeof n
        );
      let o = n.length,
        h = arguments.length > 2 && arguments[2] === !0;
      if (!h && o === 0) return 0;
      let d = !1;
      for (;;)
        switch (i) {
          case "ascii":
          case "latin1":
          case "binary":
            return o;
          case "utf8":
          case "utf-8":
            return rt(n).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return o * 2;
          case "hex":
            return o >>> 1;
          case "base64":
            return qt(n).length;
          default:
            if (d) return h ? -1 : rt(n).length;
            (i = ("" + i).toLowerCase()), (d = !0);
        }
    }
    u.byteLength = B;
    function L(n, i, o) {
      let h = !1;
      if (
        ((i === void 0 || i < 0) && (i = 0),
        i > this.length ||
          ((o === void 0 || o > this.length) && (o = this.length), o <= 0) ||
          ((o >>>= 0), (i >>>= 0), o <= i))
      )
        return "";
      for (n || (n = "utf8"); ; )
        switch (n) {
          case "hex":
            return rn(this, i, o);
          case "utf8":
          case "utf-8":
            return jt(this, i, o);
          case "ascii":
            return en(this, i, o);
          case "latin1":
          case "binary":
            return tn(this, i, o);
          case "base64":
            return Xr(this, i, o);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return nn(this, i, o);
          default:
            if (h) throw new TypeError("Unknown encoding: " + n);
            (n = (n + "").toLowerCase()), (h = !0);
        }
    }
    u.prototype._isBuffer = !0;
    function z(n, i, o) {
      let h = n[i];
      (n[i] = n[o]), (n[o] = h);
    }
    (u.prototype.swap16 = function () {
      let n = this.length;
      if (n % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let i = 0; i < n; i += 2) z(this, i, i + 1);
      return this;
    }),
      (u.prototype.swap32 = function () {
        let n = this.length;
        if (n % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let i = 0; i < n; i += 4) z(this, i, i + 3), z(this, i + 1, i + 2);
        return this;
      }),
      (u.prototype.swap64 = function () {
        let n = this.length;
        if (n % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let i = 0; i < n; i += 8)
          z(this, i, i + 7),
            z(this, i + 1, i + 6),
            z(this, i + 2, i + 5),
            z(this, i + 3, i + 4);
        return this;
      }),
      (u.prototype.toString = function () {
        let n = this.length;
        return n === 0
          ? ""
          : arguments.length === 0
          ? jt(this, 0, n)
          : L.apply(this, arguments);
      }),
      (u.prototype.toLocaleString = u.prototype.toString),
      (u.prototype.equals = function (n) {
        if (!u.isBuffer(n)) throw new TypeError("Argument must be a Buffer");
        return this === n ? !0 : u.compare(this, n) === 0;
      }),
      (u.prototype.inspect = function () {
        let n = "",
          i = t.INSPECT_MAX_BYTES;
        return (
          (n = this.toString("hex", 0, i)
            .replace(/(.{2})/g, "$1 ")
            .trim()),
          this.length > i && (n += " ... "),
          "<Buffer " + n + ">"
        );
      }),
      s && (u.prototype[s] = u.prototype.inspect),
      (u.prototype.compare = function (n, i, o, h, d) {
        if (
          (le(n, Uint8Array) && (n = u.from(n, n.offset, n.byteLength)),
          !u.isBuffer(n))
        )
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
              typeof n
          );
        if (
          (i === void 0 && (i = 0),
          o === void 0 && (o = n ? n.length : 0),
          h === void 0 && (h = 0),
          d === void 0 && (d = this.length),
          i < 0 || o > n.length || h < 0 || d > this.length)
        )
          throw new RangeError("out of range index");
        if (h >= d && i >= o) return 0;
        if (h >= d) return -1;
        if (i >= o) return 1;
        if (((i >>>= 0), (o >>>= 0), (h >>>= 0), (d >>>= 0), this === n))
          return 0;
        let g = d - h,
          m = o - i,
          I = Math.min(g, m),
          W = this.slice(h, d),
          M = n.slice(i, o);
        for (let U = 0; U < I; ++U)
          if (W[U] !== M[U]) {
            (g = W[U]), (m = M[U]);
            break;
          }
        return g < m ? -1 : m < g ? 1 : 0;
      });
    function V(n, i, o, h, d) {
      if (n.length === 0) return -1;
      if (
        (typeof o == "string"
          ? ((h = o), (o = 0))
          : o > 2147483647
          ? (o = 2147483647)
          : o < -2147483648 && (o = -2147483648),
        (o = +o),
        nt(o) && (o = d ? 0 : n.length - 1),
        o < 0 && (o = n.length + o),
        o >= n.length)
      ) {
        if (d) return -1;
        o = n.length - 1;
      } else if (o < 0)
        if (d) o = 0;
        else return -1;
      if ((typeof i == "string" && (i = u.from(i, h)), u.isBuffer(i)))
        return i.length === 0 ? -1 : _e(n, i, o, h, d);
      if (typeof i == "number")
        return (
          (i = i & 255),
          typeof Uint8Array.prototype.indexOf == "function"
            ? d
              ? Uint8Array.prototype.indexOf.call(n, i, o)
              : Uint8Array.prototype.lastIndexOf.call(n, i, o)
            : _e(n, [i], o, h, d)
        );
      throw new TypeError("val must be string, number or Buffer");
    }
    function _e(n, i, o, h, d) {
      let g = 1,
        m = n.length,
        I = i.length;
      if (
        h !== void 0 &&
        ((h = String(h).toLowerCase()),
        h === "ucs2" || h === "ucs-2" || h === "utf16le" || h === "utf-16le")
      ) {
        if (n.length < 2 || i.length < 2) return -1;
        (g = 2), (m /= 2), (I /= 2), (o /= 2);
      }
      function W(U, j) {
        return g === 1 ? U[j] : U.readUInt16BE(j * g);
      }
      let M;
      if (d) {
        let U = -1;
        for (M = o; M < m; M++)
          if (W(n, M) === W(i, U === -1 ? 0 : M - U)) {
            if ((U === -1 && (U = M), M - U + 1 === I)) return U * g;
          } else U !== -1 && (M -= M - U), (U = -1);
      } else
        for (o + I > m && (o = m - I), M = o; M >= 0; M--) {
          let U = !0;
          for (let j = 0; j < I; j++)
            if (W(n, M + j) !== W(i, j)) {
              U = !1;
              break;
            }
          if (U) return M;
        }
      return -1;
    }
    (u.prototype.includes = function (n, i, o) {
      return this.indexOf(n, i, o) !== -1;
    }),
      (u.prototype.indexOf = function (n, i, o) {
        return V(this, n, i, o, !0);
      }),
      (u.prototype.lastIndexOf = function (n, i, o) {
        return V(this, n, i, o, !1);
      });
    function et(n, i, o, h) {
      o = Number(o) || 0;
      let d = n.length - o;
      h ? ((h = Number(h)), h > d && (h = d)) : (h = d);
      let g = i.length;
      h > g / 2 && (h = g / 2);
      let m;
      for (m = 0; m < h; ++m) {
        let I = parseInt(i.substr(m * 2, 2), 16);
        if (nt(I)) return m;
        n[o + m] = I;
      }
      return m;
    }
    function Ye(n, i, o, h) {
      return Fe(rt(i, n.length - o), n, o, h);
    }
    function lr(n, i, o, h) {
      return Fe(un(i), n, o, h);
    }
    function Pt(n, i, o, h) {
      return Fe(qt(i), n, o, h);
    }
    function hr(n, i, o, h) {
      return Fe(cn(i, n.length - o), n, o, h);
    }
    (u.prototype.write = function (n, i, o, h) {
      if (i === void 0) (h = "utf8"), (o = this.length), (i = 0);
      else if (o === void 0 && typeof i == "string")
        (h = i), (o = this.length), (i = 0);
      else if (isFinite(i))
        (i = i >>> 0),
          isFinite(o)
            ? ((o = o >>> 0), h === void 0 && (h = "utf8"))
            : ((h = o), (o = void 0));
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      let d = this.length - i;
      if (
        ((o === void 0 || o > d) && (o = d),
        (n.length > 0 && (o < 0 || i < 0)) || i > this.length)
      )
        throw new RangeError("Attempt to write outside buffer bounds");
      h || (h = "utf8");
      let g = !1;
      for (;;)
        switch (h) {
          case "hex":
            return et(this, n, i, o);
          case "utf8":
          case "utf-8":
            return Ye(this, n, i, o);
          case "ascii":
          case "latin1":
          case "binary":
            return lr(this, n, i, o);
          case "base64":
            return Pt(this, n, i, o);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return hr(this, n, i, o);
          default:
            if (g) throw new TypeError("Unknown encoding: " + h);
            (h = ("" + h).toLowerCase()), (g = !0);
        }
    }),
      (u.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0),
        };
      });
    function Xr(n, i, o) {
      return i === 0 && o === n.length
        ? e.fromByteArray(n)
        : e.fromByteArray(n.slice(i, o));
    }
    function jt(n, i, o) {
      o = Math.min(n.length, o);
      let h = [],
        d = i;
      for (; d < o; ) {
        let g = n[d],
          m = null,
          I = g > 239 ? 4 : g > 223 ? 3 : g > 191 ? 2 : 1;
        if (d + I <= o) {
          let W, M, U, j;
          switch (I) {
            case 1:
              g < 128 && (m = g);
              break;
            case 2:
              (W = n[d + 1]),
                (W & 192) === 128 &&
                  ((j = ((g & 31) << 6) | (W & 63)), j > 127 && (m = j));
              break;
            case 3:
              (W = n[d + 1]),
                (M = n[d + 2]),
                (W & 192) === 128 &&
                  (M & 192) === 128 &&
                  ((j = ((g & 15) << 12) | ((W & 63) << 6) | (M & 63)),
                  j > 2047 && (j < 55296 || j > 57343) && (m = j));
              break;
            case 4:
              (W = n[d + 1]),
                (M = n[d + 2]),
                (U = n[d + 3]),
                (W & 192) === 128 &&
                  (M & 192) === 128 &&
                  (U & 192) === 128 &&
                  ((j =
                    ((g & 15) << 18) |
                    ((W & 63) << 12) |
                    ((M & 63) << 6) |
                    (U & 63)),
                  j > 65535 && j < 1114112 && (m = j));
          }
        }
        m === null
          ? ((m = 65533), (I = 1))
          : m > 65535 &&
            ((m -= 65536),
            h.push(((m >>> 10) & 1023) | 55296),
            (m = 56320 | (m & 1023))),
          h.push(m),
          (d += I);
      }
      return Jr(h);
    }
    var Ft = 4096;
    function Jr(n) {
      let i = n.length;
      if (i <= Ft) return String.fromCharCode.apply(String, n);
      let o = "",
        h = 0;
      for (; h < i; )
        o += String.fromCharCode.apply(String, n.slice(h, (h += Ft)));
      return o;
    }
    function en(n, i, o) {
      let h = "";
      o = Math.min(n.length, o);
      for (let d = i; d < o; ++d) h += String.fromCharCode(n[d] & 127);
      return h;
    }
    function tn(n, i, o) {
      let h = "";
      o = Math.min(n.length, o);
      for (let d = i; d < o; ++d) h += String.fromCharCode(n[d]);
      return h;
    }
    function rn(n, i, o) {
      let h = n.length;
      (!i || i < 0) && (i = 0), (!o || o < 0 || o > h) && (o = h);
      let d = "";
      for (let g = i; g < o; ++g) d += ln[n[g]];
      return d;
    }
    function nn(n, i, o) {
      let h = n.slice(i, o),
        d = "";
      for (let g = 0; g < h.length - 1; g += 2)
        d += String.fromCharCode(h[g] + h[g + 1] * 256);
      return d;
    }
    u.prototype.slice = function (n, i) {
      let o = this.length;
      (n = ~~n),
        (i = i === void 0 ? o : ~~i),
        n < 0 ? ((n += o), n < 0 && (n = 0)) : n > o && (n = o),
        i < 0 ? ((i += o), i < 0 && (i = 0)) : i > o && (i = o),
        i < n && (i = n);
      let h = this.subarray(n, i);
      return Object.setPrototypeOf(h, u.prototype), h;
    };
    function K(n, i, o) {
      if (n % 1 !== 0 || n < 0) throw new RangeError("offset is not uint");
      if (n + i > o)
        throw new RangeError("Trying to access beyond buffer length");
    }
    (u.prototype.readUintLE = u.prototype.readUIntLE =
      function (n, i, o) {
        (n = n >>> 0), (i = i >>> 0), o || K(n, i, this.length);
        let h = this[n],
          d = 1,
          g = 0;
        for (; ++g < i && (d *= 256); ) h += this[n + g] * d;
        return h;
      }),
      (u.prototype.readUintBE = u.prototype.readUIntBE =
        function (n, i, o) {
          (n = n >>> 0), (i = i >>> 0), o || K(n, i, this.length);
          let h = this[n + --i],
            d = 1;
          for (; i > 0 && (d *= 256); ) h += this[n + --i] * d;
          return h;
        }),
      (u.prototype.readUint8 = u.prototype.readUInt8 =
        function (n, i) {
          return (n = n >>> 0), i || K(n, 1, this.length), this[n];
        }),
      (u.prototype.readUint16LE = u.prototype.readUInt16LE =
        function (n, i) {
          return (
            (n = n >>> 0),
            i || K(n, 2, this.length),
            this[n] | (this[n + 1] << 8)
          );
        }),
      (u.prototype.readUint16BE = u.prototype.readUInt16BE =
        function (n, i) {
          return (
            (n = n >>> 0),
            i || K(n, 2, this.length),
            (this[n] << 8) | this[n + 1]
          );
        }),
      (u.prototype.readUint32LE = u.prototype.readUInt32LE =
        function (n, i) {
          return (
            (n = n >>> 0),
            i || K(n, 4, this.length),
            (this[n] | (this[n + 1] << 8) | (this[n + 2] << 16)) +
              this[n + 3] * 16777216
          );
        }),
      (u.prototype.readUint32BE = u.prototype.readUInt32BE =
        function (n, i) {
          return (
            (n = n >>> 0),
            i || K(n, 4, this.length),
            this[n] * 16777216 +
              ((this[n + 1] << 16) | (this[n + 2] << 8) | this[n + 3])
          );
        }),
      (u.prototype.readBigUInt64LE = ge(function (n) {
        (n = n >>> 0), Se(n, "offset");
        let i = this[n],
          o = this[n + 7];
        (i === void 0 || o === void 0) && Ie(n, this.length - 8);
        let h =
            i + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24,
          d =
            this[++n] + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + o * 2 ** 24;
        return BigInt(h) + (BigInt(d) << BigInt(32));
      })),
      (u.prototype.readBigUInt64BE = ge(function (n) {
        (n = n >>> 0), Se(n, "offset");
        let i = this[n],
          o = this[n + 7];
        (i === void 0 || o === void 0) && Ie(n, this.length - 8);
        let h =
            i * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n],
          d =
            this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + o;
        return (BigInt(h) << BigInt(32)) + BigInt(d);
      })),
      (u.prototype.readIntLE = function (n, i, o) {
        (n = n >>> 0), (i = i >>> 0), o || K(n, i, this.length);
        let h = this[n],
          d = 1,
          g = 0;
        for (; ++g < i && (d *= 256); ) h += this[n + g] * d;
        return (d *= 128), h >= d && (h -= Math.pow(2, 8 * i)), h;
      }),
      (u.prototype.readIntBE = function (n, i, o) {
        (n = n >>> 0), (i = i >>> 0), o || K(n, i, this.length);
        let h = i,
          d = 1,
          g = this[n + --h];
        for (; h > 0 && (d *= 256); ) g += this[n + --h] * d;
        return (d *= 128), g >= d && (g -= Math.pow(2, 8 * i)), g;
      }),
      (u.prototype.readInt8 = function (n, i) {
        return (
          (n = n >>> 0),
          i || K(n, 1, this.length),
          this[n] & 128 ? (255 - this[n] + 1) * -1 : this[n]
        );
      }),
      (u.prototype.readInt16LE = function (n, i) {
        (n = n >>> 0), i || K(n, 2, this.length);
        let o = this[n] | (this[n + 1] << 8);
        return o & 32768 ? o | 4294901760 : o;
      }),
      (u.prototype.readInt16BE = function (n, i) {
        (n = n >>> 0), i || K(n, 2, this.length);
        let o = this[n + 1] | (this[n] << 8);
        return o & 32768 ? o | 4294901760 : o;
      }),
      (u.prototype.readInt32LE = function (n, i) {
        return (
          (n = n >>> 0),
          i || K(n, 4, this.length),
          this[n] |
            (this[n + 1] << 8) |
            (this[n + 2] << 16) |
            (this[n + 3] << 24)
        );
      }),
      (u.prototype.readInt32BE = function (n, i) {
        return (
          (n = n >>> 0),
          i || K(n, 4, this.length),
          (this[n] << 24) |
            (this[n + 1] << 16) |
            (this[n + 2] << 8) |
            this[n + 3]
        );
      }),
      (u.prototype.readBigInt64LE = ge(function (n) {
        (n = n >>> 0), Se(n, "offset");
        let i = this[n],
          o = this[n + 7];
        (i === void 0 || o === void 0) && Ie(n, this.length - 8);
        let h =
          this[n + 4] +
          this[n + 5] * 2 ** 8 +
          this[n + 6] * 2 ** 16 +
          (o << 24);
        return (
          (BigInt(h) << BigInt(32)) +
          BigInt(
            i + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24
          )
        );
      })),
      (u.prototype.readBigInt64BE = ge(function (n) {
        (n = n >>> 0), Se(n, "offset");
        let i = this[n],
          o = this[n + 7];
        (i === void 0 || o === void 0) && Ie(n, this.length - 8);
        let h =
          (i << 24) + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n];
        return (
          (BigInt(h) << BigInt(32)) +
          BigInt(
            this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + o
          )
        );
      })),
      (u.prototype.readFloatLE = function (n, i) {
        return (
          (n = n >>> 0), i || K(n, 4, this.length), r.read(this, n, !0, 23, 4)
        );
      }),
      (u.prototype.readFloatBE = function (n, i) {
        return (
          (n = n >>> 0), i || K(n, 4, this.length), r.read(this, n, !1, 23, 4)
        );
      }),
      (u.prototype.readDoubleLE = function (n, i) {
        return (
          (n = n >>> 0), i || K(n, 8, this.length), r.read(this, n, !0, 52, 8)
        );
      }),
      (u.prototype.readDoubleBE = function (n, i) {
        return (
          (n = n >>> 0), i || K(n, 8, this.length), r.read(this, n, !1, 52, 8)
        );
      });
    function te(n, i, o, h, d, g) {
      if (!u.isBuffer(n))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (i > d || i < g)
        throw new RangeError('"value" argument is out of bounds');
      if (o + h > n.length) throw new RangeError("Index out of range");
    }
    (u.prototype.writeUintLE = u.prototype.writeUIntLE =
      function (n, i, o, h) {
        if (((n = +n), (i = i >>> 0), (o = o >>> 0), !h)) {
          let m = Math.pow(2, 8 * o) - 1;
          te(this, n, i, o, m, 0);
        }
        let d = 1,
          g = 0;
        for (this[i] = n & 255; ++g < o && (d *= 256); )
          this[i + g] = (n / d) & 255;
        return i + o;
      }),
      (u.prototype.writeUintBE = u.prototype.writeUIntBE =
        function (n, i, o, h) {
          if (((n = +n), (i = i >>> 0), (o = o >>> 0), !h)) {
            let m = Math.pow(2, 8 * o) - 1;
            te(this, n, i, o, m, 0);
          }
          let d = o - 1,
            g = 1;
          for (this[i + d] = n & 255; --d >= 0 && (g *= 256); )
            this[i + d] = (n / g) & 255;
          return i + o;
        }),
      (u.prototype.writeUint8 = u.prototype.writeUInt8 =
        function (n, i, o) {
          return (
            (n = +n),
            (i = i >>> 0),
            o || te(this, n, i, 1, 255, 0),
            (this[i] = n & 255),
            i + 1
          );
        }),
      (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
        function (n, i, o) {
          return (
            (n = +n),
            (i = i >>> 0),
            o || te(this, n, i, 2, 65535, 0),
            (this[i] = n & 255),
            (this[i + 1] = n >>> 8),
            i + 2
          );
        }),
      (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
        function (n, i, o) {
          return (
            (n = +n),
            (i = i >>> 0),
            o || te(this, n, i, 2, 65535, 0),
            (this[i] = n >>> 8),
            (this[i + 1] = n & 255),
            i + 2
          );
        }),
      (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
        function (n, i, o) {
          return (
            (n = +n),
            (i = i >>> 0),
            o || te(this, n, i, 4, 4294967295, 0),
            (this[i + 3] = n >>> 24),
            (this[i + 2] = n >>> 16),
            (this[i + 1] = n >>> 8),
            (this[i] = n & 255),
            i + 4
          );
        }),
      (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
        function (n, i, o) {
          return (
            (n = +n),
            (i = i >>> 0),
            o || te(this, n, i, 4, 4294967295, 0),
            (this[i] = n >>> 24),
            (this[i + 1] = n >>> 16),
            (this[i + 2] = n >>> 8),
            (this[i + 3] = n & 255),
            i + 4
          );
        });
    function Zt(n, i, o, h, d) {
      Gt(i, h, d, n, o, 7);
      let g = Number(i & BigInt(4294967295));
      (n[o++] = g),
        (g = g >> 8),
        (n[o++] = g),
        (g = g >> 8),
        (n[o++] = g),
        (g = g >> 8),
        (n[o++] = g);
      let m = Number((i >> BigInt(32)) & BigInt(4294967295));
      return (
        (n[o++] = m),
        (m = m >> 8),
        (n[o++] = m),
        (m = m >> 8),
        (n[o++] = m),
        (m = m >> 8),
        (n[o++] = m),
        o
      );
    }
    function $t(n, i, o, h, d) {
      Gt(i, h, d, n, o, 7);
      let g = Number(i & BigInt(4294967295));
      (n[o + 7] = g),
        (g = g >> 8),
        (n[o + 6] = g),
        (g = g >> 8),
        (n[o + 5] = g),
        (g = g >> 8),
        (n[o + 4] = g);
      let m = Number((i >> BigInt(32)) & BigInt(4294967295));
      return (
        (n[o + 3] = m),
        (m = m >> 8),
        (n[o + 2] = m),
        (m = m >> 8),
        (n[o + 1] = m),
        (m = m >> 8),
        (n[o] = m),
        o + 8
      );
    }
    (u.prototype.writeBigUInt64LE = ge(function (n, i = 0) {
      return Zt(this, n, i, BigInt(0), BigInt("0xffffffffffffffff"));
    })),
      (u.prototype.writeBigUInt64BE = ge(function (n, i = 0) {
        return $t(this, n, i, BigInt(0), BigInt("0xffffffffffffffff"));
      })),
      (u.prototype.writeIntLE = function (n, i, o, h) {
        if (((n = +n), (i = i >>> 0), !h)) {
          let I = Math.pow(2, 8 * o - 1);
          te(this, n, i, o, I - 1, -I);
        }
        let d = 0,
          g = 1,
          m = 0;
        for (this[i] = n & 255; ++d < o && (g *= 256); )
          n < 0 && m === 0 && this[i + d - 1] !== 0 && (m = 1),
            (this[i + d] = (((n / g) >> 0) - m) & 255);
        return i + o;
      }),
      (u.prototype.writeIntBE = function (n, i, o, h) {
        if (((n = +n), (i = i >>> 0), !h)) {
          let I = Math.pow(2, 8 * o - 1);
          te(this, n, i, o, I - 1, -I);
        }
        let d = o - 1,
          g = 1,
          m = 0;
        for (this[i + d] = n & 255; --d >= 0 && (g *= 256); )
          n < 0 && m === 0 && this[i + d + 1] !== 0 && (m = 1),
            (this[i + d] = (((n / g) >> 0) - m) & 255);
        return i + o;
      }),
      (u.prototype.writeInt8 = function (n, i, o) {
        return (
          (n = +n),
          (i = i >>> 0),
          o || te(this, n, i, 1, 127, -128),
          n < 0 && (n = 255 + n + 1),
          (this[i] = n & 255),
          i + 1
        );
      }),
      (u.prototype.writeInt16LE = function (n, i, o) {
        return (
          (n = +n),
          (i = i >>> 0),
          o || te(this, n, i, 2, 32767, -32768),
          (this[i] = n & 255),
          (this[i + 1] = n >>> 8),
          i + 2
        );
      }),
      (u.prototype.writeInt16BE = function (n, i, o) {
        return (
          (n = +n),
          (i = i >>> 0),
          o || te(this, n, i, 2, 32767, -32768),
          (this[i] = n >>> 8),
          (this[i + 1] = n & 255),
          i + 2
        );
      }),
      (u.prototype.writeInt32LE = function (n, i, o) {
        return (
          (n = +n),
          (i = i >>> 0),
          o || te(this, n, i, 4, 2147483647, -2147483648),
          (this[i] = n & 255),
          (this[i + 1] = n >>> 8),
          (this[i + 2] = n >>> 16),
          (this[i + 3] = n >>> 24),
          i + 4
        );
      }),
      (u.prototype.writeInt32BE = function (n, i, o) {
        return (
          (n = +n),
          (i = i >>> 0),
          o || te(this, n, i, 4, 2147483647, -2147483648),
          n < 0 && (n = 4294967295 + n + 1),
          (this[i] = n >>> 24),
          (this[i + 1] = n >>> 16),
          (this[i + 2] = n >>> 8),
          (this[i + 3] = n & 255),
          i + 4
        );
      }),
      (u.prototype.writeBigInt64LE = ge(function (n, i = 0) {
        return Zt(
          this,
          n,
          i,
          -BigInt("0x8000000000000000"),
          BigInt("0x7fffffffffffffff")
        );
      })),
      (u.prototype.writeBigInt64BE = ge(function (n, i = 0) {
        return $t(
          this,
          n,
          i,
          -BigInt("0x8000000000000000"),
          BigInt("0x7fffffffffffffff")
        );
      }));
    function Dt(n, i, o, h, d, g) {
      if (o + h > n.length) throw new RangeError("Index out of range");
      if (o < 0) throw new RangeError("Index out of range");
    }
    function zt(n, i, o, h, d) {
      return (
        (i = +i),
        (o = o >>> 0),
        d || Dt(n, i, o, 4),
        r.write(n, i, o, h, 23, 4),
        o + 4
      );
    }
    (u.prototype.writeFloatLE = function (n, i, o) {
      return zt(this, n, i, !0, o);
    }),
      (u.prototype.writeFloatBE = function (n, i, o) {
        return zt(this, n, i, !1, o);
      });
    function Vt(n, i, o, h, d) {
      return (
        (i = +i),
        (o = o >>> 0),
        d || Dt(n, i, o, 8),
        r.write(n, i, o, h, 52, 8),
        o + 8
      );
    }
    (u.prototype.writeDoubleLE = function (n, i, o) {
      return Vt(this, n, i, !0, o);
    }),
      (u.prototype.writeDoubleBE = function (n, i, o) {
        return Vt(this, n, i, !1, o);
      }),
      (u.prototype.copy = function (n, i, o, h) {
        if (!u.isBuffer(n)) throw new TypeError("argument should be a Buffer");
        if (
          (o || (o = 0),
          !h && h !== 0 && (h = this.length),
          i >= n.length && (i = n.length),
          i || (i = 0),
          h > 0 && h < o && (h = o),
          h === o || n.length === 0 || this.length === 0)
        )
          return 0;
        if (i < 0) throw new RangeError("targetStart out of bounds");
        if (o < 0 || o >= this.length)
          throw new RangeError("Index out of range");
        if (h < 0) throw new RangeError("sourceEnd out of bounds");
        h > this.length && (h = this.length),
          n.length - i < h - o && (h = n.length - i + o);
        let d = h - o;
        return (
          this === n && typeof Uint8Array.prototype.copyWithin == "function"
            ? this.copyWithin(i, o, h)
            : Uint8Array.prototype.set.call(n, this.subarray(o, h), i),
          d
        );
      }),
      (u.prototype.fill = function (n, i, o, h) {
        if (typeof n == "string") {
          if (
            (typeof i == "string"
              ? ((h = i), (i = 0), (o = this.length))
              : typeof o == "string" && ((h = o), (o = this.length)),
            h !== void 0 && typeof h != "string")
          )
            throw new TypeError("encoding must be a string");
          if (typeof h == "string" && !u.isEncoding(h))
            throw new TypeError("Unknown encoding: " + h);
          if (n.length === 1) {
            let g = n.charCodeAt(0);
            ((h === "utf8" && g < 128) || h === "latin1") && (n = g);
          }
        } else
          typeof n == "number"
            ? (n = n & 255)
            : typeof n == "boolean" && (n = Number(n));
        if (i < 0 || this.length < i || this.length < o)
          throw new RangeError("Out of range index");
        if (o <= i) return this;
        (i = i >>> 0), (o = o === void 0 ? this.length : o >>> 0), n || (n = 0);
        let d;
        if (typeof n == "number") for (d = i; d < o; ++d) this[d] = n;
        else {
          let g = u.isBuffer(n) ? n : u.from(n, h),
            m = g.length;
          if (m === 0)
            throw new TypeError(
              'The value "' + n + '" is invalid for argument "value"'
            );
          for (d = 0; d < o - i; ++d) this[d + i] = g[d % m];
        }
        return this;
      });
    var Ae = {};
    function tt(n, i, o) {
      Ae[n] = class extends o {
        constructor() {
          super(),
            Object.defineProperty(this, "message", {
              value: i.apply(this, arguments),
              writable: !0,
              configurable: !0,
            }),
            (this.name = `${this.name} [${n}]`),
            this.stack,
            delete this.name;
        }
        get code() {
          return n;
        }
        set code(h) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: h,
            writable: !0,
          });
        }
        toString() {
          return `${this.name} [${n}]: ${this.message}`;
        }
      };
    }
    tt(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function (n) {
        return n
          ? `${n} is outside of buffer bounds`
          : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ),
      tt(
        "ERR_INVALID_ARG_TYPE",
        function (n, i) {
          return `The "${n}" argument must be of type number. Received type ${typeof i}`;
        },
        TypeError
      ),
      tt(
        "ERR_OUT_OF_RANGE",
        function (n, i, o) {
          let h = `The value of "${n}" is out of range.`,
            d = o;
          return (
            Number.isInteger(o) && Math.abs(o) > 2 ** 32
              ? (d = Wt(String(o)))
              : typeof o == "bigint" &&
                ((d = String(o)),
                (o > BigInt(2) ** BigInt(32) ||
                  o < -(BigInt(2) ** BigInt(32))) &&
                  (d = Wt(d)),
                (d += "n")),
            (h += ` It must be ${i}. Received ${d}`),
            h
          );
        },
        RangeError
      );
    function Wt(n) {
      let i = "",
        o = n.length,
        h = n[0] === "-" ? 1 : 0;
      for (; o >= h + 4; o -= 3) i = `_${n.slice(o - 3, o)}${i}`;
      return `${n.slice(0, o)}${i}`;
    }
    function sn(n, i, o) {
      Se(i, "offset"),
        (n[i] === void 0 || n[i + o] === void 0) && Ie(i, n.length - (o + 1));
    }
    function Gt(n, i, o, h, d, g) {
      if (n > o || n < i) {
        let m = typeof i == "bigint" ? "n" : "",
          I;
        throw (
          (i === 0 || i === BigInt(0)
            ? (I = `>= 0${m} and < 2${m} ** ${(g + 1) * 8}${m}`)
            : (I = `>= -(2${m} ** ${(g + 1) * 8 - 1}${m}) and < 2 ** ${
                (g + 1) * 8 - 1
              }${m}`),
          new Ae.ERR_OUT_OF_RANGE("value", I, n))
        );
      }
      sn(h, d, g);
    }
    function Se(n, i) {
      if (typeof n != "number")
        throw new Ae.ERR_INVALID_ARG_TYPE(i, "number", n);
    }
    function Ie(n, i, o) {
      throw Math.floor(n) !== n
        ? (Se(n, o), new Ae.ERR_OUT_OF_RANGE("offset", "an integer", n))
        : i < 0
        ? new Ae.ERR_BUFFER_OUT_OF_BOUNDS()
        : new Ae.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${i}`, n);
    }
    var an = /[^+/0-9A-Za-z-_]/g;
    function on(n) {
      if (((n = n.split("=")[0]), (n = n.trim().replace(an, "")), n.length < 2))
        return "";
      for (; n.length % 4 !== 0; ) n = n + "=";
      return n;
    }
    function rt(n, i) {
      i = i || 1 / 0;
      let o,
        h = n.length,
        d = null,
        g = [];
      for (let m = 0; m < h; ++m) {
        if (((o = n.charCodeAt(m)), o > 55295 && o < 57344)) {
          if (!d) {
            if (o > 56319) {
              (i -= 3) > -1 && g.push(239, 191, 189);
              continue;
            } else if (m + 1 === h) {
              (i -= 3) > -1 && g.push(239, 191, 189);
              continue;
            }
            d = o;
            continue;
          }
          if (o < 56320) {
            (i -= 3) > -1 && g.push(239, 191, 189), (d = o);
            continue;
          }
          o = (((d - 55296) << 10) | (o - 56320)) + 65536;
        } else d && (i -= 3) > -1 && g.push(239, 191, 189);
        if (((d = null), o < 128)) {
          if ((i -= 1) < 0) break;
          g.push(o);
        } else if (o < 2048) {
          if ((i -= 2) < 0) break;
          g.push((o >> 6) | 192, (o & 63) | 128);
        } else if (o < 65536) {
          if ((i -= 3) < 0) break;
          g.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (o & 63) | 128);
        } else if (o < 1114112) {
          if ((i -= 4) < 0) break;
          g.push(
            (o >> 18) | 240,
            ((o >> 12) & 63) | 128,
            ((o >> 6) & 63) | 128,
            (o & 63) | 128
          );
        } else throw new Error("Invalid code point");
      }
      return g;
    }
    function un(n) {
      let i = [];
      for (let o = 0; o < n.length; ++o) i.push(n.charCodeAt(o) & 255);
      return i;
    }
    function cn(n, i) {
      let o,
        h,
        d,
        g = [];
      for (let m = 0; m < n.length && !((i -= 2) < 0); ++m)
        (o = n.charCodeAt(m)),
          (h = o >> 8),
          (d = o % 256),
          g.push(d),
          g.push(h);
      return g;
    }
    function qt(n) {
      return e.toByteArray(on(n));
    }
    function Fe(n, i, o, h) {
      let d;
      for (d = 0; d < h && !(d + o >= i.length || d >= n.length); ++d)
        i[d + o] = n[d];
      return d;
    }
    function le(n, i) {
      return (
        n instanceof i ||
        (n != null &&
          n.constructor != null &&
          n.constructor.name != null &&
          n.constructor.name === i.name)
      );
    }
    function nt(n) {
      return n !== n;
    }
    var ln = (function () {
      let n = "0123456789abcdef",
        i = new Array(256);
      for (let o = 0; o < 16; ++o) {
        let h = o * 16;
        for (let d = 0; d < 16; ++d) i[h + d] = n[o] + n[d];
      }
      return i;
    })();
    function ge(n) {
      return typeof BigInt > "u" ? hn : n;
    }
    function hn() {
      throw new Error("BigInt not supported");
    }
  }),
  jy = Nt((t, e) => {
    typeof window < "u"
      ? ((window.global = window),
        (global.fetch = window.fetch),
        (e.exports = { Buffer: qs().Buffer, Crypto: window.crypto }))
      : (e.exports = { Buffer: qs().Buffer, Crypto: crypto });
  }),
  oc = {};
Cy(oc, {
  AVSCTap: () => os,
  ArweaveSigner: () => Ra,
  DataItem: () => Hi,
  MAX_TAG_BYTES: () => Ia,
  MIN_BINARY_SIZE: () => fc,
  SIG_CONFIG: () => ai,
  SignatureConfig: () => Ke,
  Signer: () => Fy,
  createData: () => dc,
  deserializeTags: () => Hs,
  indexToType: () => lc,
  serializeTags: () => hc,
  tagsExceedLimit: () => Gy,
});
var Fy = class {
    constructor() {
      F(this, "signer");
      F(this, "publicKey");
      F(this, "signatureType");
      F(this, "signatureLength");
      F(this, "ownerLength");
      F(this, "pem");
    }
    static verify(t, e, r, s) {
      throw new Error("You must implement verify method on child");
    }
  },
  Zy = Tr(Oa()),
  gt = Tr(ac());
async function uc(t) {
  if (Array.isArray(t)) {
    let a = (0, gt.concatBuffers)([
      (0, gt.stringToBuffer)("list"),
      (0, gt.stringToBuffer)(t.length.toString()),
    ]);
    return await cc(t, await It().hash(a, "SHA-384"));
  }
  let e = t,
    r = (0, gt.concatBuffers)([
      (0, gt.stringToBuffer)("blob"),
      (0, gt.stringToBuffer)(e.byteLength.toString()),
    ]),
    s = (0, gt.concatBuffers)([
      await It().hash(r, "SHA-384"),
      await It().hash(e, "SHA-384"),
    ]);
  return await It().hash(s, "SHA-384");
}
async function cc(t, e) {
  if (t.length < 1) return e;
  let r = (0, gt.concatBuffers)([e, await uc(t[0])]),
    s = await It().hash(r, "SHA-384");
  return await cc(t.slice(1), s);
}
var vs = Tr(Ny()),
  $y = vs.default.default ? vs.default.default : vs.default,
  Dy = class extends $y {
    getPublicKey(t) {
      throw new Error("Unimplemented");
    }
  },
  zy;
function It() {
  return zy ?? (zy = new Dy());
}
var Ke;
(function (t) {
  (t[(t.ARWEAVE = 1)] = "ARWEAVE"),
    (t[(t.ED25519 = 2)] = "ED25519"),
    (t[(t.ETHEREUM = 3)] = "ETHEREUM"),
    (t[(t.SOLANA = 4)] = "SOLANA"),
    (t[(t.INJECTEDAPTOS = 5)] = "INJECTEDAPTOS"),
    (t[(t.MULTIAPTOS = 6)] = "MULTIAPTOS"),
    (t[(t.TYPEDETHEREUM = 7)] = "TYPEDETHEREUM");
})(Ke || (Ke = {}));
var ai = {
    [Ke.ARWEAVE]: { sigLength: 512, pubLength: 512, sigName: "arweave" },
    [Ke.ED25519]: { sigLength: 64, pubLength: 32, sigName: "ed25519" },
    [Ke.ETHEREUM]: { sigLength: 65, pubLength: 65, sigName: "ethereum" },
    [Ke.SOLANA]: { sigLength: 64, pubLength: 32, sigName: "solana" },
    [Ke.INJECTEDAPTOS]: {
      sigLength: 64,
      pubLength: 32,
      sigName: "injectedAptos",
    },
    [Ke.MULTIAPTOS]: {
      sigLength: 64 * 32 + 4,
      pubLength: 32 * 32 + 1,
      sigName: "multiAptos",
    },
    [Ke.TYPEDETHEREUM]: {
      sigLength: 65,
      pubLength: 42,
      sigName: "typedEthereum",
    },
  },
  Ra = class {
    constructor(t) {
      F(this, "signatureType", 1);
      F(this, "ownerLength", ai[1].pubLength);
      F(this, "signatureLength", ai[1].sigLength);
      F(this, "jwk");
      F(this, "pk");
      (this.pk = t.n), (this.jwk = t);
    }
    get publicKey() {
      return Zy.default.toBuffer(this.pk);
    }
    sign(t) {
      return It().sign(this.jwk, t);
    }
    static async verify(t, e, r) {
      return await It().verify(t, e, r);
    }
  },
  lc = { 1: Ra },
  bt = Tr(Oa());
async function Ks(t) {
  return uc([
    (0, gt.stringToBuffer)("dataitem"),
    (0, gt.stringToBuffer)("1"),
    (0, gt.stringToBuffer)(t.signatureType.toString()),
    t.rawOwner,
    t.rawTarget,
    t.rawAnchor,
    t.rawTags,
    t.rawData,
  ]);
}
async function Vy(t, e) {
  let r = await Ks(t),
    s = await e.sign(r),
    a = await It().hash(s);
  return { signature: Buffer.from(s), id: Buffer.from(a) };
}
async function Wy(t, e) {
  let { signature: r, id: s } = await Vy(t, e);
  return t.getRaw().set(r, 2), s;
}
var os = class {
  constructor(t = Buffer.alloc(Ia), e = 0) {
    F(this, "buf");
    F(this, "pos");
    (this.buf = t), (this.pos = e);
  }
  writeTags(t) {
    if (!Array.isArray(t)) throw new Error("input must be array");
    let e = t.length,
      r;
    if (e)
      for (this.writeLong(e), r = 0; r < e; r++) {
        let s = t[r];
        if (
          (s == null ? void 0 : s.name) === void 0 ||
          (s == null ? void 0 : s.value) === void 0
        )
          throw new Error(
            `Invalid tag format for ${s}, expected {name:string, value: string}`
          );
        this.writeString(s.name), this.writeString(s.value);
      }
    this.writeLong(0);
  }
  toBuffer() {
    let t = Buffer.alloc(this.pos);
    if (this.pos > this.buf.length)
      throw new Error(`Too many tag bytes (${this.pos} > ${this.buf.length})`);
    return this.buf.copy(t, 0, 0, this.pos), t;
  }
  tagsExceedLimit() {
    return this.pos > this.buf.length;
  }
  writeLong(t) {
    let e = this.buf,
      r,
      s;
    if (t >= -1073741824 && t < 1073741824) {
      s = t >= 0 ? t << 1 : (~t << 1) | 1;
      do (e[this.pos] = s & 127), (s >>= 7);
      while (s && (e[this.pos++] |= 128));
    } else {
      r = t >= 0 ? t * 2 : -t * 2 - 1;
      do (e[this.pos] = r & 127), (r /= 128);
      while (r >= 1 && (e[this.pos++] |= 128));
    }
    this.pos++, (this.buf = e);
  }
  writeString(t) {
    let e = Buffer.byteLength(t),
      r = this.buf;
    this.writeLong(e);
    let s = this.pos;
    if (((this.pos += e), !(this.pos > r.length))) {
      if (e > 64) this.buf.write(t, this.pos - e, e, "utf8");
      else {
        let a, c, l, u;
        for (a = 0, c = e; a < c; a++)
          (l = t.charCodeAt(a)),
            l < 128
              ? (r[s++] = l)
              : l < 2048
              ? ((r[s++] = (l >> 6) | 192), (r[s++] = (l & 63) | 128))
              : (l & 64512) === 55296 &&
                ((u = t.charCodeAt(a + 1)) & 64512) === 56320
              ? ((l = 65536 + ((l & 1023) << 10) + (u & 1023)),
                a++,
                (r[s++] = (l >> 18) | 240),
                (r[s++] = ((l >> 12) & 63) | 128),
                (r[s++] = ((l >> 6) & 63) | 128),
                (r[s++] = (l & 63) | 128))
              : ((r[s++] = (l >> 12) | 224),
                (r[s++] = ((l >> 6) & 63) | 128),
                (r[s++] = (l & 63) | 128));
      }
      this.buf = r;
    }
  }
  readLong() {
    let t = 0,
      e = 0,
      r = this.buf,
      s,
      a,
      c,
      l;
    do (s = r[this.pos++]), (a = s & 128), (t |= (s & 127) << e), (e += 7);
    while (a && e < 28);
    if (a) {
      (c = t), (l = 268435456);
      do (s = r[this.pos++]), (c += (s & 127) * l), (l *= 128);
      while (s & 128);
      return (c % 2 ? -(c + 1) : c) / 2;
    }
    return (t >> 1) ^ -(t & 1);
  }
  skipLong() {
    let t = this.buf;
    for (; t[this.pos++] & 128; );
  }
  readTags() {
    let t = [],
      e;
    for (; (e = this.readLong()); )
      for (e < 0 && ((e = -e), this.skipLong()); e--; ) {
        let r = this.readString(),
          s = this.readString();
        t.push({ name: r, value: s });
      }
    return t;
  }
  readString() {
    let t = this.readLong(),
      e = this.pos,
      r = this.buf;
    if (((this.pos += t), !(this.pos > r.length)))
      return this.buf.slice(e, e + t).toString();
  }
};
function hc(t) {
  let e = new os();
  return e.writeTags(t), e.toBuffer();
}
function Gy(t) {
  let e = new os();
  return e.writeTags(t), e.tagsExceedLimit();
}
function Hs(t) {
  return new os(t).readTags();
}
function Ht(t) {
  let e = 0;
  for (let r = t.length - 1; r >= 0; r--) e = e * 256 + t[r];
  return e;
}
function qy(t) {
  if (t > 29) throw new Error("Short too long");
  let e = [0, 0];
  for (let r = 0; r < e.length; r++) {
    let s = t & 255;
    (e[r] = s), (t = (t - s) / 256);
  }
  return Uint8Array.from(e);
}
function uo(t) {
  let e = [0, 0, 0, 0, 0, 0, 0, 0];
  for (let r = 0; r < e.length; r++) {
    let s = t & 255;
    (e[r] = s), (t = (t - s) / 256);
  }
  return Uint8Array.from(e);
}
var Ky = Tr(jy()),
  Br = Tr(qs()),
  Ia = 4096,
  fc = 80,
  Hi = class {
    constructor(t) {
      F(this, "binary");
      F(this, "_id");
      this.binary = t;
    }
    static isDataItem(t) {
      return t.binary !== void 0;
    }
    get signatureType() {
      let t = Ht(this.binary.subarray(0, 2));
      if ((Ke == null ? void 0 : Ke[t]) !== void 0) return t;
      throw new Error("Unknown signature type: " + t);
    }
    async isValid() {
      return Hi.verify(this.binary);
    }
    get id() {
      return (async () => bt.default.encode(await this.rawId))();
    }
    set id(t) {
      this._id = bt.default.toBuffer(t);
    }
    get rawId() {
      return (async () =>
        Br.Buffer.from(
          await Ky.Crypto.subtle.digest("SHA-256", this.rawSignature)
        ))();
    }
    set rawId(t) {
      this._id = t;
    }
    get rawSignature() {
      return this.binary.subarray(2, 2 + this.signatureLength);
    }
    get signature() {
      return bt.default.encode(this.rawSignature);
    }
    set rawOwner(t) {
      if (t.byteLength != this.ownerLength)
        throw new Error(
          `Expected raw owner (pubkey) to be ${this.ownerLength} bytes, got ${t.byteLength} bytes.`
        );
      this.binary.set(t, 2 + this.signatureLength);
    }
    get rawOwner() {
      return this.binary.subarray(
        2 + this.signatureLength,
        2 + this.signatureLength + this.ownerLength
      );
    }
    get signatureLength() {
      return ai[this.signatureType].sigLength;
    }
    get owner() {
      return bt.default.encode(this.rawOwner);
    }
    get ownerLength() {
      return ai[this.signatureType].pubLength;
    }
    get rawTarget() {
      let t = this.getTargetStart();
      return this.binary[t] == 1
        ? this.binary.subarray(t + 1, t + 33)
        : Br.Buffer.alloc(0);
    }
    get target() {
      return bt.default.encode(this.rawTarget);
    }
    get rawAnchor() {
      let t = this.getAnchorStart();
      return this.binary[t] == 1
        ? this.binary.subarray(t + 1, t + 33)
        : Br.Buffer.alloc(0);
    }
    get anchor() {
      return this.rawAnchor.toString();
    }
    get rawTags() {
      let t = this.getTagsStart(),
        e = Ht(this.binary.subarray(t + 8, t + 16));
      return this.binary.subarray(t + 16, t + 16 + e);
    }
    get tags() {
      let t = this.getTagsStart();
      if (Ht(this.binary.subarray(t, t + 8)) == 0) return [];
      let e = Ht(this.binary.subarray(t + 8, t + 16));
      return Hs(Br.Buffer.from(this.binary.subarray(t + 16, t + 16 + e)));
    }
    get tagsB64Url() {
      return this.tags.map((t) => ({
        name: bt.default.encode(t.name),
        value: bt.default.encode(t.value),
      }));
    }
    getStartOfData() {
      let t = this.getTagsStart(),
        e = this.binary.subarray(t + 8, t + 16),
        r = Ht(e);
      return t + 16 + r;
    }
    get rawData() {
      let t = this.getTagsStart(),
        e = this.binary.subarray(t + 8, t + 16),
        r = Ht(e),
        s = t + 16 + r;
      return this.binary.subarray(s, this.binary.length);
    }
    get data() {
      return bt.default.encode(this.rawData);
    }
    getRaw() {
      return this.binary;
    }
    async sign(t) {
      return (this._id = await Wy(this, t)), this.rawId;
    }
    async setSignature(t) {
      this.binary.set(t, 2), (this._id = Br.Buffer.from(await It().hash(t)));
    }
    isSigned() {
      var t;
      return (((t = this._id) == null ? void 0 : t.length) ?? 0) > 0;
    }
    toJSON() {
      return {
        signature: this.signature,
        owner: this.owner,
        target: this.target,
        tags: this.tags.map((t) => ({
          name: bt.default.encode(t.name),
          value: bt.default.encode(t.value),
        })),
        data: this.data,
      };
    }
    static async verify(t) {
      if (t.byteLength < fc) return !1;
      let e = new Hi(t),
        r = e.signatureType,
        s = e.getTagsStart(),
        a = Ht(t.subarray(s, s + 8)),
        c = t.subarray(s + 8, s + 16),
        l = Ht(c);
      if (l > Ia) return !1;
      if (a > 0)
        try {
          if (Hs(Br.Buffer.from(t.subarray(s + 16, s + 16 + l))).length !== a)
            return !1;
        } catch {
          return !1;
        }
      let u = lc[r],
        f = await Ks(e);
      return await u.verify(e.rawOwner, f, e.rawSignature);
    }
    async getSignatureData() {
      return Ks(this);
    }
    getTagsStart() {
      let t = this.getTargetStart(),
        e = this.binary[t] == 1,
        r = t + (e ? 33 : 1),
        s = this.binary[r] == 1;
      return (r += s ? 33 : 1), r;
    }
    getTargetStart() {
      return 2 + this.signatureLength + this.ownerLength;
    }
    getAnchorStart() {
      let t = this.getTargetStart() + 1,
        e = this.binary[this.getTargetStart()] == 1;
      return (t += e ? 32 : 0), t;
    }
  },
  Hy = Tr(Oa());
function dc(t, e, r) {
  var B, L;
  let s = e.publicKey,
    a = r != null && r.target ? Hy.default.toBuffer(r.target) : null,
    c = 1 + ((a == null ? void 0 : a.byteLength) ?? 0),
    l = r != null && r.anchor ? Buffer.from(r.anchor) : null,
    u = 1 + ((l == null ? void 0 : l.byteLength) ?? 0),
    f =
      (((B = r == null ? void 0 : r.tags) == null ? void 0 : B.length) ?? 0) > 0
        ? hc(r.tags)
        : null,
    p = 16 + (f ? f.byteLength : 0),
    b = Buffer.from(t),
    v = b.byteLength,
    _ = 2 + e.signatureLength + e.ownerLength + c + u + p + v,
    E = Buffer.alloc(_);
  if (
    (E.set(qy(e.signatureType), 0),
    E.set(new Uint8Array(e.signatureLength).fill(0), 2),
    s.byteLength !== e.ownerLength)
  )
    throw new Error(
      `Owner must be ${e.ownerLength} bytes, but was incorrectly ${s.byteLength}`
    );
  E.set(s, 2 + e.signatureLength);
  let w = 2 + e.signatureLength + e.ownerLength;
  if (((E[w] = a ? 1 : 0), a)) {
    if (a.byteLength !== 32)
      throw new Error(
        `Target must be 32 bytes but was incorrectly ${a.byteLength}`
      );
    E.set(a, w + 1);
  }
  let A = w + c,
    S = A + 1;
  if (((E[A] = l ? 1 : 0), l)) {
    if (((S += l.byteLength), l.byteLength !== 32))
      throw new Error("Anchor must be 32 bytes");
    E.set(l, A + 1);
  }
  E.set(
    uo(((L = r == null ? void 0 : r.tags) == null ? void 0 : L.length) ?? 0),
    S
  );
  let x = uo((f == null ? void 0 : f.byteLength) ?? 0);
  E.set(x, S + 8), f && E.set(f, S + 16);
  let C = S + p;
  return E.set(b, C), new Hi(E);
}
var Yy = { ...oc };
globalThis.arbundles ?? (globalThis.arbundles = Yy);
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/ const pc = "FHE6jw1z5F5-fl8pC0SGnZYVIqIlktdVSDHVGnYeUyo",
  Qy = "https://metalinks.ar.io";
var Ys;
const Xy =
    '{"kty":"RSA","n":"0nMraZeMPqyEAcWsqFNCTr6ga_QxZRdYKROuamIkjEzpNHjR5KwaKRd5KAU3cnWfHcWhQCqUnv74y98ZBeYOE3vDz4qA8c9jVuRPcABCAAeg78-DFus0pcPpYmw2jQ2898CT88NO2DjgWCP-kjIKFuFD3WLNxykcynj5cW0CGeBv-Y4Tf1bEq7uJFpwUE1aq13oMJ8CBs8LwxwiB8Z5-XkJMjl9l_m1bv7H-3r_L90mup-vf_6QkpYoIFEK33DHbdBgxNiRkzCs_O6tQ65J_pth2MoO8W4nFyrqe-QxoZGmwvgw7HkRrRqDJxvtL0KP0u2vtrpWISKnkAEmQHjJBA-kiS74wLAtaBi8hW-wV99EJOSPXA4T_wj2SZENwPZ5Mdhx6wd_MYS8m-cpsNNQ7Ue4po0f_jOOWrwpsSK_XZI366i7zJDj66yDOfRelNCBcHnbSXKTX1BrnvXErk4C_6MpZpDdGiZRDcNiFvUaeZp352Wputy0EdXkCUgcNiMqwdgLAeN40NL4t29JzQCVyvlYxOEHFj6_Ku_DORpUlVpqyu7V1-uKh7cK83074iQISytWtsEkwpEvvtJCtp6ieC9LBZh426uPSDnj-QVXkZwpns6sKgGtMZLOnNPd-5yMZCrGjKd6RHARJj9yLltNncdyazW6dV3GVYhnyRl7vsns","e":"AQAB","d":"YhpC_f2h6GN2Q_c4ldz-F4Qgd0KFtijMNZXRpBDtFaQSwB2kRpN9vHMPTPsljktLac8DbMyMrJOSOkNdQFUucaGrtXdMxaxWFB7o8v6DxczIlpHm-4uYZr-tb26ffWCOmvWgYq1Ed2IIHr5kwRTnhCPthWm2IGXHYJFFQr08kgCAYlZ7O0yg8KdC8BHBAATSLhFcUjmYnMo-gKG0JYSrRthkJKhO_OxQrUtV0tOYysWD0A6SRHLpjGuMeZliaRiqwvM2GZWckVqFpxSk67PGouncK48igo92bxtQ2SsSDOEB_Y3pDyJ42ZtBhGsHvBJ6FtZonY5iUfE0cnfYYWMuz8H0v2MjbDAyGZVAfnjMXseRlpbn0Ez7SR1YAKdhLSFqi-IL6N07bgk8U8G-_Mw-jAO2hHuMWsoOF7m_OPOpfBu-Fi1-nXzhZ0Zq19M3VMmozJUlma0oraNkdJcyef_7KSkBpTRYvT9eyzE9FsFSKYLcadAWg5ywKKOhKxFB8dN5Wo-3wFiADWcVlpU_eLOhMhGBXqHk2awRiiHJvI4gCXS5bJj-s_YVjNX6Bat3te84MfYglOfIHAGGlhRDcaMyCUBcO6xYDn_Zw34ECYoXTeh-DiA0Ws2cDbhV0OoOQWU-lBSOLivPZGW4A9yUegSyL01msQ7nw082aBh6_dlUXlE","p":"63BBg4Su9f8l7CspXPDlMEH7eKz74Mni3z5vbAlXkwHmL4D6pJMqlWLutKwP_RhPuQ2XE0U2BQw6ps1CzdZ61QhcrkAObB7QeH0c9Hel6co-mwRpr7TwpsPeGQfZzhUkiRVyBfej_WtKj_haXbghljU4ZM2-YZ7Zs2-W08Gc5QSOQUMTZ6MXhbGBMJDUnmVIGVicf1CCwgUr_kjX0TXWdu00VheuYykIBb36dde9dIEj_uv73KP_SVEOS0mZoOYvoGw1HR9c4roDCL2Ep8k-J-jNsvYv1uUE_yoiEdzsSLcGqXsLKo2k5rRDrdYriAYL3-en_uHspr64Lqih7hW4UQ","q":"5NQ9AH8OsbYMLhzZvvBitTiqV-Fl8VB2238sjuL3Zs-5PptkO-MfoG2_EsLd7SSOgjJ3L_co25vmB65VwO8jPOcw0vNwvVIe5ANPN_QrAwBQrFY-hKVfZTCwatz2ZDhq-CCAZAwEyiXcc2UI3Ad3erYUood_DN5PKdC79ZfwsfSbK49abNbKg16uOnJUxrNRJve0MCIjaFzwAPf8pBi7RawRqDN3juHW8JGk4xJLjBwdOyobBTmZw4MuLjeKB6MbzGQqWamAwcenBQPeDPfiy6lj3rGQ0EbqwatZD2luSBez-Oukh3aJNdatsdeF7FvQPDEbtg4QI2APmhbDVnmXCw","dp":"o_WhKj4Uuivd9QJ548e_VEQfJIMTRhBSdrW8UriOzEneS-a-pi320eH76saIu_FaU70rILhqTkmd7tuzUjWzhPg10wO5B4LOG5rFt1o7qPy3bK0-DKctkHWHDldxTxtaPj05Ev7KrYkye-CwzeOVQE3_3_OISeOeKF_l4cJLyRHLH5few6XIk8px9ahm6YgPFden5OHkrcl8QbHo2kFsAZZfhDUptNS2SYlsCvUbcy8cKkOdOqLa_ev80GGJI4wqTsYMlyNoRFzWEBgrcc2sA48U8TSRTE5hlHF7GIWJ53nOoeiWdiP-Wsve9gjYd_n9-wgQ7mfXrqfTDGtTmcJ2gQ","dq":"yC4zP1_nhudvOFfc1QCOGWL9AewYtkZh9BsI6-b572MA9xgRU6KZZEsdwFfgtTgpwxRK2BcsExIK5eVI94M8HGdTevekRLq2c1nBz302s2VvLZQ1FO1myqsRairrETmZun8UUnGBLyZ3-CsG2RVfHGZ1HsnSB3vjXP1RsMO-uK73n9_EhzpP5yTI3jBuoXT1JVXEt-blesLy4qYOya8pBQZGXBLKIKDI26NNz6eNl4BwwfVPtf5x2WvE1oGXqp6yDtgBhHaYQO1b2zNK6aVhLjF9QK-ts8aWT96KBsWAyGiT9MqQIEE-P28SfGXCrsaTIFUFnPoofAnpHC-VquyriQ","qi":"cMQkqm7A7v9UmZ3zC6H0VGdxaqCM0tnls75qp711XLEIYE8ZbX4MM7OVzlLWdTKSdKIgO4L3fYkKoJ3LNkhVJ52RNzSFjhHMgvXJZDqjqrPCTlwMxItwl-Y6PEw2XYx59_3RSyP28Tmle13EQ_0iUIdR4Xnlx7h3Dm4yc1kDO0dudJ9A1-Rex0W4yOqOOhGDnGnrFLOM9E2Hsn0RknSM73VWqBezSVXkCqVMHsiZL96O0ViGIOAAaqkoys2r9jpU55upKv6WA7XJ1lcWb371QUDi9KpsMa-Pzm3mLjOfR1snL4qGs_aKvbs-wyfbIO6_tFkNIbRnLuN4cpWYgdQF3w"}',
  gc = Jy(Xy);
window.addEventListener("load", async () => {
  var b, v;
  const t = performance.getEntriesByType("navigation")[0],
    e = t.domContentLoadedEventEnd - t.startTime;
  console.log(`Page Load Time: ${e}ms`);
  const r = Date.now(),
    s = Ac.getParser(window.navigator.userAgent),
    a = Intl.DateTimeFormat().resolvedOptions().timeZone,
    c = [];
  window.Arweave && c.push("arweave"),
    window.solana && c.push("solana"),
    window.ethereum && c.push("ethereum"),
    console.log(`Wallet: ${c}`);
  const u =
      (await (await fetch("https://api.ipify.org?format=json")).json()).ip ||
      "",
    f =
      ((b = document.querySelector('meta[name="uuid"]')) == null
        ? void 0
        : b.getAttribute("content")) || "";
  Ys = Bc();
  const p =
    ((v = document.querySelector('meta[name="arns_name"]')) == null
      ? void 0
      : v.getAttribute("content")) || "";
  await ic({
    signer: gc,
    process: pc,
    tags: [
      { name: "Action", value: "register_view" },
      { name: "id", value: f },
      { name: "pageid", value: Ys },
      { name: "date", value: r.toString() },
      { name: "browser", value: s.getBrowserName() },
      { name: "os", value: s.getOSName() },
      { name: "ip", value: u },
      { name: "timezone", value: a },
      { name: "loadtime", value: e.toString() },
      { name: "wallet", value: c.join(",") },
      { name: "name", value: p },
    ],
  });
});
document.addEventListener("DOMContentLoaded", async () => {
  new Sc(),
    document.addEventListener("click", async (t) => {
      if (
        t.target &&
        (t.target.tagName === "BUTTON" &&
          (t.target.id === "create" && window.open(Qy, "_blank"), t.target.id),
        t.target.closest("a"))
      ) {
        const e = t.target.closest("a");
        console.log(e);
        const r = e.getAttribute("id") || "",
          s = e.getAttribute("data-name") || "";
        await ic({
          process: pc,
          signer: gc,
          tags: [
            { name: "Action", value: "register_click" },
            { name: "id", value: r },
            { name: "viewid", value: Ys },
            { name: "date", value: Date.now().toString() },
            { name: "name", value: s },
          ],
        });
      }
    });
});
function Jy(t) {
  return async ({ data: r, tags: s, target: a, anchor: c }) => {
    const l = new Ra(JSON.parse(t)),
      u = dc(r, l, { tags: s, target: a, anchor: c });
    return u
      .sign(l)
      .then(async () => ({ id: await u.id, raw: await u.getRaw() }));
  };
}
