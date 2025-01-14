var A = Object.defineProperty;
var R = (r, e, t) =>
  e in r
    ? A(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (r[e] = t);
var w = (r, e, t) => R(r, typeof e != "symbol" ? e + "" : e, t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const c of o.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = t(n);
    fetch(n.href, o);
  }
})();
const x = {
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
  F = {
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
  l = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" },
  h = {
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
  g = {
    EdgeHTML: "EdgeHTML",
    Blink: "Blink",
    Trident: "Trident",
    Presto: "Presto",
    Gecko: "Gecko",
    WebKit: "WebKit",
  };
class s {
  static getFirstMatch(e, t) {
    const i = t.match(e);
    return (i && i.length > 0 && i[1]) || "";
  }
  static getSecondMatch(e, t) {
    const i = t.match(e);
    return (i && i.length > 1 && i[2]) || "";
  }
  static matchAndReturnConst(e, t, i) {
    if (e.test(t)) return i;
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
    const t = e
      .split(".")
      .splice(0, 2)
      .map((i) => parseInt(i, 10) || 0);
    if ((t.push(0), t[0] === 10))
      switch (t[1]) {
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
    const t = e
      .split(".")
      .splice(0, 2)
      .map((i) => parseInt(i, 10) || 0);
    if ((t.push(0), !(t[0] === 1 && t[1] < 5))) {
      if (t[0] === 1 && t[1] < 6) return "Cupcake";
      if (t[0] === 1 && t[1] >= 6) return "Donut";
      if (t[0] === 2 && t[1] < 2) return "Eclair";
      if (t[0] === 2 && t[1] === 2) return "Froyo";
      if (t[0] === 2 && t[1] > 2) return "Gingerbread";
      if (t[0] === 3) return "Honeycomb";
      if (t[0] === 4 && t[1] < 1) return "Ice Cream Sandwich";
      if (t[0] === 4 && t[1] < 4) return "Jelly Bean";
      if (t[0] === 4 && t[1] >= 4) return "KitKat";
      if (t[0] === 5) return "Lollipop";
      if (t[0] === 6) return "Marshmallow";
      if (t[0] === 7) return "Nougat";
      if (t[0] === 8) return "Oreo";
      if (t[0] === 9) return "Pie";
    }
  }
  static getVersionPrecision(e) {
    return e.split(".").length;
  }
  static compareVersions(e, t, i = !1) {
    const n = s.getVersionPrecision(e),
      o = s.getVersionPrecision(t);
    let c = Math.max(n, o),
      u = 0;
    const a = s.map([e, t], (f) => {
      const m = c - s.getVersionPrecision(f),
        v = f + new Array(m + 1).join(".0");
      return s
        .map(v.split("."), (b) => new Array(20 - b.length).join("0") + b)
        .reverse();
    });
    for (i && (u = c - Math.min(n, o)), c -= 1; c >= u; ) {
      if (a[0][c] > a[1][c]) return 1;
      if (a[0][c] === a[1][c]) {
        if (c === u) return 0;
        c -= 1;
      } else if (a[0][c] < a[1][c]) return -1;
    }
  }
  static map(e, t) {
    const i = [];
    let n;
    if (Array.prototype.map) return Array.prototype.map.call(e, t);
    for (n = 0; n < e.length; n += 1) i.push(t(e[n]));
    return i;
  }
  static find(e, t) {
    let i, n;
    if (Array.prototype.find) return Array.prototype.find.call(e, t);
    for (i = 0, n = e.length; i < n; i += 1) {
      const o = e[i];
      if (t(o, i)) return o;
    }
  }
  static assign(e, ...t) {
    const i = e;
    let n, o;
    if (Object.assign) return Object.assign(e, ...t);
    for (n = 0, o = t.length; n < o; n += 1) {
      const c = t[n];
      typeof c == "object" &&
        c !== null &&
        Object.keys(c).forEach((a) => {
          i[a] = c[a];
        });
    }
    return e;
  }
  static getBrowserAlias(e) {
    return x[e];
  }
  static getBrowserTypeByAlias(e) {
    return F[e] || "";
  }
}
const d = /version\/(\d+(\.?_?\d+)+)/i,
  B = [
    {
      test: [/googlebot/i],
      describe(r) {
        const e = { name: "Googlebot" },
          t =
            s.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, r) ||
            s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/opera/i],
      describe(r) {
        const e = { name: "Opera" },
          t =
            s.getFirstMatch(d, r) ||
            s.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/opr\/|opios/i],
      describe(r) {
        const e = { name: "Opera" },
          t =
            s.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, r) ||
            s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/SamsungBrowser/i],
      describe(r) {
        const e = { name: "Samsung Internet for Android" },
          t =
            s.getFirstMatch(d, r) ||
            s.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/Whale/i],
      describe(r) {
        const e = { name: "NAVER Whale Browser" },
          t =
            s.getFirstMatch(d, r) ||
            s.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/MZBrowser/i],
      describe(r) {
        const e = { name: "MZ Browser" },
          t =
            s.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, r) ||
            s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/focus/i],
      describe(r) {
        const e = { name: "Focus" },
          t =
            s.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, r) ||
            s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/swing/i],
      describe(r) {
        const e = { name: "Swing" },
          t =
            s.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, r) ||
            s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/coast/i],
      describe(r) {
        const e = { name: "Opera Coast" },
          t =
            s.getFirstMatch(d, r) ||
            s.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/opt\/\d+(?:.?_?\d+)+/i],
      describe(r) {
        const e = { name: "Opera Touch" },
          t =
            s.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, r) ||
            s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/yabrowser/i],
      describe(r) {
        const e = { name: "Yandex Browser" },
          t =
            s.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, r) ||
            s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/ucbrowser/i],
      describe(r) {
        const e = { name: "UC Browser" },
          t =
            s.getFirstMatch(d, r) ||
            s.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/Maxthon|mxios/i],
      describe(r) {
        const e = { name: "Maxthon" },
          t =
            s.getFirstMatch(d, r) ||
            s.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/epiphany/i],
      describe(r) {
        const e = { name: "Epiphany" },
          t =
            s.getFirstMatch(d, r) ||
            s.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/puffin/i],
      describe(r) {
        const e = { name: "Puffin" },
          t =
            s.getFirstMatch(d, r) ||
            s.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/sleipnir/i],
      describe(r) {
        const e = { name: "Sleipnir" },
          t =
            s.getFirstMatch(d, r) ||
            s.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/k-meleon/i],
      describe(r) {
        const e = { name: "K-Meleon" },
          t =
            s.getFirstMatch(d, r) ||
            s.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/micromessenger/i],
      describe(r) {
        const e = { name: "WeChat" },
          t =
            s.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, r) ||
            s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/qqbrowser/i],
      describe(r) {
        const e = {
            name: /qqbrowserlite/i.test(r) ? "QQ Browser Lite" : "QQ Browser",
          },
          t =
            s.getFirstMatch(
              /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
              r
            ) || s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/msie|trident/i],
      describe(r) {
        const e = { name: "Internet Explorer" },
          t = s.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/\sedg\//i],
      describe(r) {
        const e = { name: "Microsoft Edge" },
          t = s.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/edg([ea]|ios)/i],
      describe(r) {
        const e = { name: "Microsoft Edge" },
          t = s.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/vivaldi/i],
      describe(r) {
        const e = { name: "Vivaldi" },
          t = s.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/seamonkey/i],
      describe(r) {
        const e = { name: "SeaMonkey" },
          t = s.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/sailfish/i],
      describe(r) {
        const e = { name: "Sailfish" },
          t = s.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/silk/i],
      describe(r) {
        const e = { name: "Amazon Silk" },
          t = s.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/phantom/i],
      describe(r) {
        const e = { name: "PhantomJS" },
          t = s.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/slimerjs/i],
      describe(r) {
        const e = { name: "SlimerJS" },
          t = s.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
      describe(r) {
        const e = { name: "BlackBerry" },
          t =
            s.getFirstMatch(d, r) ||
            s.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/(web|hpw)[o0]s/i],
      describe(r) {
        const e = { name: "WebOS Browser" },
          t =
            s.getFirstMatch(d, r) ||
            s.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/bada/i],
      describe(r) {
        const e = { name: "Bada" },
          t = s.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/tizen/i],
      describe(r) {
        const e = { name: "Tizen" },
          t =
            s.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, r) ||
            s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/qupzilla/i],
      describe(r) {
        const e = { name: "QupZilla" },
          t =
            s.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, r) ||
            s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/firefox|iceweasel|fxios/i],
      describe(r) {
        const e = { name: "Firefox" },
          t = s.getFirstMatch(
            /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
            r
          );
        return t && (e.version = t), e;
      },
    },
    {
      test: [/electron/i],
      describe(r) {
        const e = { name: "Electron" },
          t = s.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/MiuiBrowser/i],
      describe(r) {
        const e = { name: "Miui" },
          t = s.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/chromium/i],
      describe(r) {
        const e = { name: "Chromium" },
          t =
            s.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, r) ||
            s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/chrome|crios|crmo/i],
      describe(r) {
        const e = { name: "Chrome" },
          t = s.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/GSA/i],
      describe(r) {
        const e = { name: "Google Search" },
          t = s.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test(r) {
        const e = !r.test(/like android/i),
          t = r.test(/android/i);
        return e && t;
      },
      describe(r) {
        const e = { name: "Android Browser" },
          t = s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/playstation 4/i],
      describe(r) {
        const e = { name: "PlayStation 4" },
          t = s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/safari|applewebkit/i],
      describe(r) {
        const e = { name: "Safari" },
          t = s.getFirstMatch(d, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/.*/i],
      describe(r) {
        const e = /^(.*)\/(.*) /,
          t = /^(.*)\/(.*)[ \t]\((.*)/,
          n = r.search("\\(") !== -1 ? t : e;
        return { name: s.getFirstMatch(n, r), version: s.getSecondMatch(n, r) };
      },
    },
  ],
  E = [
    {
      test: [/Roku\/DVP/],
      describe(r) {
        const e = s.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, r);
        return { name: h.Roku, version: e };
      },
    },
    {
      test: [/windows phone/i],
      describe(r) {
        const e = s.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, r);
        return { name: h.WindowsPhone, version: e };
      },
    },
    {
      test: [/windows /i],
      describe(r) {
        const e = s.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, r),
          t = s.getWindowsVersionName(e);
        return { name: h.Windows, version: e, versionName: t };
      },
    },
    {
      test: [/Macintosh(.*?) FxiOS(.*?)\//],
      describe(r) {
        const e = { name: h.iOS },
          t = s.getSecondMatch(/(Version\/)(\d[\d.]+)/, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/macintosh/i],
      describe(r) {
        const e = s
            .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, r)
            .replace(/[_\s]/g, "."),
          t = s.getMacOSVersionName(e),
          i = { name: h.MacOS, version: e };
        return t && (i.versionName = t), i;
      },
    },
    {
      test: [/(ipod|iphone|ipad)/i],
      describe(r) {
        const e = s
          .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, r)
          .replace(/[_\s]/g, ".");
        return { name: h.iOS, version: e };
      },
    },
    {
      test(r) {
        const e = !r.test(/like android/i),
          t = r.test(/android/i);
        return e && t;
      },
      describe(r) {
        const e = s.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, r),
          t = s.getAndroidVersionName(e),
          i = { name: h.Android, version: e };
        return t && (i.versionName = t), i;
      },
    },
    {
      test: [/(web|hpw)[o0]s/i],
      describe(r) {
        const e = s.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, r),
          t = { name: h.WebOS };
        return e && e.length && (t.version = e), t;
      },
    },
    {
      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
      describe(r) {
        const e =
          s.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, r) ||
          s.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, r) ||
          s.getFirstMatch(/\bbb(\d+)/i, r);
        return { name: h.BlackBerry, version: e };
      },
    },
    {
      test: [/bada/i],
      describe(r) {
        const e = s.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, r);
        return { name: h.Bada, version: e };
      },
    },
    {
      test: [/tizen/i],
      describe(r) {
        const e = s.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, r);
        return { name: h.Tizen, version: e };
      },
    },
    {
      test: [/linux/i],
      describe() {
        return { name: h.Linux };
      },
    },
    {
      test: [/CrOS/],
      describe() {
        return { name: h.ChromeOS };
      },
    },
    {
      test: [/PlayStation 4/],
      describe(r) {
        const e = s.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, r);
        return { name: h.PlayStation4, version: e };
      },
    },
  ],
  N = [
    {
      test: [/googlebot/i],
      describe() {
        return { type: "bot", vendor: "Google" };
      },
    },
    {
      test: [/huawei/i],
      describe(r) {
        const e = s.getFirstMatch(/(can-l01)/i, r) && "Nova",
          t = { type: l.mobile, vendor: "Huawei" };
        return e && (t.model = e), t;
      },
    },
    {
      test: [/nexus\s*(?:7|8|9|10).*/i],
      describe() {
        return { type: l.tablet, vendor: "Nexus" };
      },
    },
    {
      test: [/ipad/i],
      describe() {
        return { type: l.tablet, vendor: "Apple", model: "iPad" };
      },
    },
    {
      test: [/Macintosh(.*?) FxiOS(.*?)\//],
      describe() {
        return { type: l.tablet, vendor: "Apple", model: "iPad" };
      },
    },
    {
      test: [/kftt build/i],
      describe() {
        return { type: l.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
      },
    },
    {
      test: [/silk/i],
      describe() {
        return { type: l.tablet, vendor: "Amazon" };
      },
    },
    {
      test: [/tablet(?! pc)/i],
      describe() {
        return { type: l.tablet };
      },
    },
    {
      test(r) {
        const e = r.test(/ipod|iphone/i),
          t = r.test(/like (ipod|iphone)/i);
        return e && !t;
      },
      describe(r) {
        const e = s.getFirstMatch(/(ipod|iphone)/i, r);
        return { type: l.mobile, vendor: "Apple", model: e };
      },
    },
    {
      test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
      describe() {
        return { type: l.mobile, vendor: "Nexus" };
      },
    },
    {
      test: [/[^-]mobi/i],
      describe() {
        return { type: l.mobile };
      },
    },
    {
      test(r) {
        return r.getBrowserName(!0) === "blackberry";
      },
      describe() {
        return { type: l.mobile, vendor: "BlackBerry" };
      },
    },
    {
      test(r) {
        return r.getBrowserName(!0) === "bada";
      },
      describe() {
        return { type: l.mobile };
      },
    },
    {
      test(r) {
        return r.getBrowserName() === "windows phone";
      },
      describe() {
        return { type: l.mobile, vendor: "Microsoft" };
      },
    },
    {
      test(r) {
        const e = Number(String(r.getOSVersion()).split(".")[0]);
        return r.getOSName(!0) === "android" && e >= 3;
      },
      describe() {
        return { type: l.tablet };
      },
    },
    {
      test(r) {
        return r.getOSName(!0) === "android";
      },
      describe() {
        return { type: l.mobile };
      },
    },
    {
      test(r) {
        return r.getOSName(!0) === "macos";
      },
      describe() {
        return { type: l.desktop, vendor: "Apple" };
      },
    },
    {
      test(r) {
        return r.getOSName(!0) === "windows";
      },
      describe() {
        return { type: l.desktop };
      },
    },
    {
      test(r) {
        return r.getOSName(!0) === "linux";
      },
      describe() {
        return { type: l.desktop };
      },
    },
    {
      test(r) {
        return r.getOSName(!0) === "playstation 4";
      },
      describe() {
        return { type: l.tv };
      },
    },
    {
      test(r) {
        return r.getOSName(!0) === "roku";
      },
      describe() {
        return { type: l.tv };
      },
    },
  ],
  L = [
    {
      test(r) {
        return r.getBrowserName(!0) === "microsoft edge";
      },
      describe(r) {
        if (/\sedg\//i.test(r)) return { name: g.Blink };
        const t = s.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, r);
        return { name: g.EdgeHTML, version: t };
      },
    },
    {
      test: [/trident/i],
      describe(r) {
        const e = { name: g.Trident },
          t = s.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test(r) {
        return r.test(/presto/i);
      },
      describe(r) {
        const e = { name: g.Presto },
          t = s.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test(r) {
        const e = r.test(/gecko/i),
          t = r.test(/like gecko/i);
        return e && !t;
      },
      describe(r) {
        const e = { name: g.Gecko },
          t = s.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
    {
      test: [/(apple)?webkit\/537\.36/i],
      describe() {
        return { name: g.Blink };
      },
    },
    {
      test: [/(apple)?webkit/i],
      describe(r) {
        const e = { name: g.WebKit },
          t = s.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, r);
        return t && (e.version = t), e;
      },
    },
  ];
class S {
  constructor(e, t = !1) {
    if (e == null || e === "")
      throw new Error("UserAgent parameter can't be empty");
    (this._ua = e), (this.parsedResult = {}), t !== !0 && this.parse();
  }
  getUA() {
    return this._ua;
  }
  test(e) {
    return e.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    const e = s.find(B, (t) => {
      if (typeof t.test == "function") return t.test(this);
      if (t.test instanceof Array) return t.test.some((i) => this.test(i));
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
    const e = s.find(E, (t) => {
      if (typeof t.test == "function") return t.test(this);
      if (t.test instanceof Array) return t.test.some((i) => this.test(i));
      throw new Error("Browser's test function is not valid");
    });
    return (
      e && (this.parsedResult.os = e.describe(this.getUA())),
      this.parsedResult.os
    );
  }
  getOSName(e) {
    const { name: t } = this.getOS();
    return e ? String(t).toLowerCase() || "" : t || "";
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
    const { type: t } = this.getPlatform();
    return e ? String(t).toLowerCase() || "" : t || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    const e = s.find(N, (t) => {
      if (typeof t.test == "function") return t.test(this);
      if (t.test instanceof Array) return t.test.some((i) => this.test(i));
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
    const e = s.find(L, (t) => {
      if (typeof t.test == "function") return t.test(this);
      if (t.test instanceof Array) return t.test.some((i) => this.test(i));
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
    return s.assign({}, this.parsedResult);
  }
  satisfies(e) {
    const t = {};
    let i = 0;
    const n = {};
    let o = 0;
    if (
      (Object.keys(e).forEach((u) => {
        const a = e[u];
        typeof a == "string"
          ? ((n[u] = a), (o += 1))
          : typeof a == "object" && ((t[u] = a), (i += 1));
      }),
      i > 0)
    ) {
      const u = Object.keys(t),
        a = s.find(u, (m) => this.isOS(m));
      if (a) {
        const m = this.satisfies(t[a]);
        if (m !== void 0) return m;
      }
      const f = s.find(u, (m) => this.isPlatform(m));
      if (f) {
        const m = this.satisfies(t[f]);
        if (m !== void 0) return m;
      }
    }
    if (o > 0) {
      const u = Object.keys(n),
        a = s.find(u, (f) => this.isBrowser(f, !0));
      if (a !== void 0) return this.compareVersion(n[a]);
    }
  }
  isBrowser(e, t = !1) {
    const i = this.getBrowserName().toLowerCase();
    let n = e.toLowerCase();
    const o = s.getBrowserTypeByAlias(n);
    return t && o && (n = o.toLowerCase()), n === i;
  }
  compareVersion(e) {
    let t = [0],
      i = e,
      n = !1;
    const o = this.getBrowserVersion();
    if (typeof o == "string")
      return (
        e[0] === ">" || e[0] === "<"
          ? ((i = e.substr(1)),
            e[1] === "=" ? ((n = !0), (i = e.substr(2))) : (t = []),
            e[0] === ">" ? t.push(1) : t.push(-1))
          : e[0] === "="
          ? (i = e.substr(1))
          : e[0] === "~" && ((n = !0), (i = e.substr(1))),
        t.indexOf(s.compareVersions(o, i, n)) > -1
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
  is(e, t = !1) {
    return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
  }
  some(e = []) {
    return e.some((t) => this.is(t));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */ class _ {
  static getParser(e, t = !1) {
    if (typeof e != "string") throw new Error("UserAgent should be a string");
    return new S(e, t);
  }
  static parse(e) {
    return new S(e).getResult();
  }
  static get BROWSER_MAP() {
    return F;
  }
  static get ENGINE_MAP() {
    return g;
  }
  static get OS_MAP() {
    return h;
  }
  static get PLATFORMS_MAP() {
    return l;
  }
}
class C {
  constructor() {
    w(this, "button");
    w(this, "modal");
    w(this, "shareLinks");
    w(this, "currentURL");
    (this.currentURL = window.location.href),
      (this.button = document.getElementById("share")),
      (this.modal = document.createElement("div")),
      (this.shareLinks = [
        {
          name: "Facebook",
          href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            this.currentURL
          )}`,
        },
        {
          name: "Twitter",
          href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            this.currentURL
          )}&text=Check out this page!`,
        },
        {
          name: "LinkedIn",
          href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            this.currentURL
          )}&title=Check out this page!`,
        },
        {
          name: "WhatsApp",
          href: `https://wa.me/?text=${encodeURIComponent(
            `Check out this page! ${this.currentURL}`
          )}`,
        },
        {
          name: "Pinterest",
          href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
            this.currentURL
          )}&description=Check out this page!`,
        },
        {
          name: "Reddit",
          href: `https://reddit.com/submit?url=${encodeURIComponent(
            this.currentURL
          )}&title=Check out this page!`,
        },
        {
          name: "Telegram",
          href: `https://t.me/share/url?url=${encodeURIComponent(
            this.currentURL
          )}&text=Check out this page!`,
        },
        {
          name: "Email",
          href: `mailto:?subject=${encodeURIComponent(
            "Check out this page!"
          )}&body=${encodeURIComponent(
            `I found this page interesting and thought you might like it: ${this.currentURL}`
          )}`,
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
            <span class="text-sm">${e.name}</span>
            </a>
          `
            )
            .join("")}
        </div>
        <button id="copyLink" class="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
          🔗 Copy Link
        </button>
      </div>
    `),
      document.body.appendChild(this.modal);
  }
  attachEventListeners() {
    var e, t;
    this.button.addEventListener("click", () => this.openModal()),
      (e = this.modal.querySelector("#closeModal")) == null ||
        e.addEventListener("click", () => this.closeModal()),
      this.modal.addEventListener("click", (i) => {
        i.target === this.modal && this.closeModal();
      }),
      (t = this.modal.querySelector("#copyLink")) == null ||
        t.addEventListener("click", () => this.copyLink());
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
 */ const y = "0123456789abcdef";
class p {
  constructor(e) {
    this.bytes = e;
  }
  static ofInner(e) {
    if (e.length !== 16) throw new TypeError("not 128-bit length");
    return new p(e);
  }
  static fromFieldsV7(e, t, i, n) {
    if (
      !Number.isInteger(e) ||
      !Number.isInteger(t) ||
      !Number.isInteger(i) ||
      !Number.isInteger(n) ||
      e < 0 ||
      t < 0 ||
      i < 0 ||
      n < 0 ||
      e > 0xffffffffffff ||
      t > 4095 ||
      i > 1073741823 ||
      n > 4294967295
    )
      throw new RangeError("invalid field value");
    const o = new Uint8Array(16);
    return (
      (o[0] = e / 2 ** 40),
      (o[1] = e / 2 ** 32),
      (o[2] = e / 2 ** 24),
      (o[3] = e / 2 ** 16),
      (o[4] = e / 2 ** 8),
      (o[5] = e),
      (o[6] = 112 | (t >>> 8)),
      (o[7] = t),
      (o[8] = 128 | (i >>> 24)),
      (o[9] = i >>> 16),
      (o[10] = i >>> 8),
      (o[11] = i),
      (o[12] = n >>> 24),
      (o[13] = n >>> 16),
      (o[14] = n >>> 8),
      (o[15] = n),
      new p(o)
    );
  }
  static parse(e) {
    var t, i, n, o;
    let c;
    switch (e.length) {
      case 32:
        c =
          (t = /^[0-9a-f]{32}$/i.exec(e)) === null || t === void 0
            ? void 0
            : t[0];
        break;
      case 36:
        c =
          (i =
            /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(
              e
            )) === null || i === void 0
            ? void 0
            : i.slice(1, 6).join("");
        break;
      case 38:
        c =
          (n =
            /^\{([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})\}$/i.exec(
              e
            )) === null || n === void 0
            ? void 0
            : n.slice(1, 6).join("");
        break;
      case 45:
        c =
          (o =
            /^urn:uuid:([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(
              e
            )) === null || o === void 0
            ? void 0
            : o.slice(1, 6).join("");
        break;
    }
    if (c) {
      const u = new Uint8Array(16);
      for (let a = 0; a < 16; a += 4) {
        const f = parseInt(c.substring(2 * a, 2 * a + 8), 16);
        (u[a + 0] = f >>> 24),
          (u[a + 1] = f >>> 16),
          (u[a + 2] = f >>> 8),
          (u[a + 3] = f);
      }
      return new p(u);
    } else throw new SyntaxError("could not parse UUID string");
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.bytes.length; t++)
      (e += y.charAt(this.bytes[t] >>> 4)),
        (e += y.charAt(this.bytes[t] & 15)),
        (t === 3 || t === 5 || t === 7 || t === 9) && (e += "-");
    return e;
  }
  toHex() {
    let e = "";
    for (let t = 0; t < this.bytes.length; t++)
      (e += y.charAt(this.bytes[t] >>> 4)), (e += y.charAt(this.bytes[t] & 15));
    return e;
  }
  toJSON() {
    return this.toString();
  }
  getVariant() {
    const e = this.bytes[8] >>> 4;
    if (e < 0) throw new Error("unreachable");
    if (e <= 7) return this.bytes.every((t) => t === 0) ? "NIL" : "VAR_0";
    if (e <= 11) return "VAR_10";
    if (e <= 13) return "VAR_110";
    if (e <= 15)
      return this.bytes.every((t) => t === 255) ? "MAX" : "VAR_RESERVED";
    throw new Error("unreachable");
  }
  getVersion() {
    return this.getVariant() === "VAR_10" ? this.bytes[6] >>> 4 : void 0;
  }
  clone() {
    return new p(this.bytes.slice(0));
  }
  equals(e) {
    return this.compareTo(e) === 0;
  }
  compareTo(e) {
    for (let t = 0; t < 16; t++) {
      const i = this.bytes[t] - e.bytes[t];
      if (i !== 0) return Math.sign(i);
    }
    return 0;
  }
}
class P {
  constructor(e) {
    (this.timestamp = 0), (this.counter = 0), (this.random = e ?? V());
  }
  generate() {
    return this.generateOrResetCore(Date.now(), 1e4);
  }
  generateOrAbort() {
    return this.generateOrAbortCore(Date.now(), 1e4);
  }
  generateOrResetCore(e, t) {
    let i = this.generateOrAbortCore(e, t);
    return (
      i === void 0 &&
        ((this.timestamp = 0), (i = this.generateOrAbortCore(e, t))),
      i
    );
  }
  generateOrAbortCore(e, t) {
    if (!Number.isInteger(e) || e < 1 || e > 0xffffffffffff)
      throw new RangeError("`unixTsMs` must be a 48-bit positive integer");
    if (t < 0 || t > 0xffffffffffff)
      throw new RangeError("`rollbackAllowance` out of reasonable range");
    if (e > this.timestamp) (this.timestamp = e), this.resetCounter();
    else if (e + t >= this.timestamp)
      this.counter++,
        this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
    else return;
    return p.fromFieldsV7(
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
      (e[6] = 64 | (e[6] >>> 4)), (e[8] = 128 | (e[8] >>> 2)), p.ofInner(e)
    );
  }
}
const V = () => {
  if (typeof crypto < "u" && typeof crypto.getRandomValues < "u")
    return new I();
  if (typeof UUIDV7_DENY_WEAK_RNG < "u" && UUIDV7_DENY_WEAK_RNG)
    throw new Error("no cryptographically strong RNG available");
  return {
    nextUint32: () =>
      Math.trunc(Math.random() * 65536) * 65536 +
      Math.trunc(Math.random() * 65536),
  };
};
class I {
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
let k;
const U = () => T().toString(),
  T = () => (k || (k = new P())).generate(),
  O = "https://metalink-server.onrender.com",
  W = "https://metapaths.ar.io";
var M;
window.addEventListener("load", async () => {
  var v, b;
  const r = performance.getEntriesByType("navigation")[0],
    e = r.domContentLoadedEventEnd - r.startTime;
  console.log(`Page Load Time: ${e}ms`);
  const t = Date.now(),
    i = _.getParser(window.navigator.userAgent),
    n = Intl.DateTimeFormat().resolvedOptions().timeZone,
    o = [];
  window.Arweave && o.push("arweave"),
    window.solana && o.push("solana"),
    window.ethereum && o.push("ethereum"),
    console.log(`Wallet: ${o}`);
  const u =
      (await (await fetch("https://api.ipify.org?format=json")).json()).ip ||
      "",
    a =
      ((v = document.querySelector('meta[name="uuid"]')) == null
        ? void 0
        : v.getAttribute("content")) || "";
  M = U();
  const f =
      ((b = document.querySelector('meta[name="arns_name"]')) == null
        ? void 0
        : b.getAttribute("content")) || "",
    m = await fetch(`${O}/register_view`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pageId: M,
        id: a,
        loadtime: e.toString(),
        date: t.toString(),
        browser: i.getBrowserName(),
        os: i.getOSName(),
        timezone: n,
        name: f,
        wallet: o.join(","),
        ip: u,
      }),
    });
  console.log(await m.json());
});
document.addEventListener("DOMContentLoaded", async () => {
  new C(),
    document.addEventListener("click", async (r) => {
      if (
        r.target &&
        (r.target.tagName === "BUTTON" &&
          (r.target.id === "create" && window.open(W, "_blank"), r.target.id),
        r.target.closest("a"))
      ) {
        const e = r.target.closest("a");
        console.log(e);
        const t = e.getAttribute("id") || "",
          i = e.getAttribute("data-name") || "",
          n = await fetch(`${O}/register_click`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              viewId: M,
              id: t,
              name: i,
              date: Date.now().toString(),
            }),
          });
        console.log(await n.json());
      }
    });
});
