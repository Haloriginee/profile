parcelRequire=function(e,r,t,n)
{var i,o="function"==typeof parcelRequire&&parcelRequire,
u="function"==typeof require&&require;
function f(t,n)
  {if(!r[t])
    {if(!e[t])
      {var i="function"==typeof parcelRequire&&parcelRequire;
      if(!n&&i)return i(t,!0);
      if(o)return o(t,!0);
      if(u&&"string"==typeof t)
      return u(t);
      var c=new Error("Cannot find module '"+t+"'");
      throw c.code="MODULE_NOT_FOUND",c}
      p.resolve=function(r)
      {return e[t][1][r]||r},
      p.cache={};var l=r[t]=new f.Module(t);
      e[t][0].call(l.exports,p,l,l.exports,this)}
      return r[t].exports;function p(e)
      {return f(p.resolve(e))}}
      f.isParcelRequire=!0,
      f.Module=function(e){this.id=e,this.bundle=f,
        this.exports={}},
        f.modules=e,
        f.cache=r,
        f.parent=o,
        f.register=function(r,t)
        {e[r]=[function(e,r){r.exports=t},{}]};
        for(var c=0;c<t.length;c++)
        try{f(t[c])}
        catch(e){i||(i=e)}
        if(t.length){var l=f(t[t.length-1]);
          "object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function()
          {return l}):n&&(this[n]=l)}
          if(parcelRequire=f,i)throw i;
          return f}
          ({"gxn7":[function(require,module,exports) {
},{"./../fonts/jetbrains-mono/web/woff2/JetBrainsMono-Regular.woff2":[["JetBrainsMono-Regular.2c7b4557.woff2","XOwE"],"XOwE"],
"./../fonts/jetbrains-mono/web/woff/JetBrainsMono-Regular.woff":[["JetBrainsMono-Regular.4b8e6034.woff","Ob0I"],"Ob0I"],
"./../fonts/jetbrains-mono/JetBrainsMono-Variable.ttf":[["JetBrainsMono-Variable.3cc1f995.ttf","cup2"],"cup2"],
"./../fonts/inter/Inter-VariableFont_slnt,wght.ttf":[["Inter-VariableFont_slnt,wght.374f8963.ttf","GKFQ"],"GKFQ"]}],
"fjgY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showConsoleMessage=void 0;
var o={load:function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.size,t=void 0===n?320:n,i=e.color,s=void 0===i?"transparent":i,r=e.cb,a=new FileReader;
a.addEventListener("load",function(){var o="background: url('"+a.result+"') left top no-repeat; font-size: "+t+"px; background-size: contain; background-color:"+s;
console.log("%c     ",o),r&&r()},!1),fetch(o).then(function(o){return o.blob()}).then(function(o){if(0===o.type.indexOf("image"))
{if(o.size>8192&&navigator.userAgent.indexOf("Firefox")>0)throw new Error("Image size too big to be displayed in Firefox.");
return o}throw new Error("Valid image not found.")})
.then(function(o){return a.readAsDataURL(o)})
.catch(function(o){return console
  .warn(o.message)})}},
  e=function(){console.info("%cHey! 👋","font-size: 2rem;");
  o.load("/assets/images/bear-coding--animated.svg",{size:80,cb:function()
    {console.info("Wanna chat about code? Something else?"),
    console.info("Ping me on Twitter! https://twitter.com/Haloriginee"),
    console.info("Mail me @ herezy2006@gmail.com.dev"),
    console.info("Check out fun stuff !"),
    console.info("Thanks for stopping by"),
    console.info("%cStay awesome!","font-size: 1.5rem; font-style: italic;"),
    console.info("font-size: 0.875rem; font-family: monospace;"),
    console.info(" 🤫","font-size: 0.875rem; font-family: monospace;")}})}
    ;exports.showConsoleMessage=e;
},{}],"wUY9":[function(require,module,exports) {
var e=document.querySelector(".theme-toggle"),
t=function(){if(window.__setTheme){var t=window.localStorage.getItem(THEMES.KEY)===THEMES.DARK?THEMES.LIGHT:THEMES.DARK;
  e.setAttribute("aria-pressed",t!==THEMES.DARK),e.setAttribute("data-sound","SWITCH_".concat(t===THEMES.DARK?"OFF":"ON","_ALT")),window.__setTheme(t)}};e&&((window.LIGHT_QUERY.matches&&!window.INITIAL_THEME||!window.LIGHT_QUERY.matches&&window.INITIAL_THEME)&&(e.setAttribute("aria-pressed",!0),
  e.setAttribute("data-sounnd","SWITCH_OFF_ALT")),
  e.addEventListener("click",t));
},{}],"yg4m":[function(require,module,exports) {
var e=document.querySelector(".nav__button"),t=document
.querySelector(".nav__content"),
n=document.querySelector(".nav__toggle-control"),
r=document.querySelector(".nav__cloak"),
o=document.querySelector(".nav__toggle"),
a=document.querySelector(".nav__settings"),
c=document.querySelector(".settings-toggle"),
i=function e(n){t.contains(n.target)||(window.removeEventListener("click",e),u())},
d=function e(t){a.contains(t.target)||(window.removeEventListener("click",e),l())},
s=function(e,t,n,r,o){return function(){var a="false"===e.getAttribute("aria-expanded");
e.setAttribute("aria-expanded",a),e.setAttribute("aria-pressed",a),
t.style.setProperty(n,a?1:0),
r&&e.setAttribute("data-sound","".concat(r).concat(a?"OFF":"ON")),
a?window.addEventListener("click",o):a||window.removeEventListener("click",o)}},
u=s(e,document.documentElement,"--nav-open",void 0,i);e&&(e.addEventListener("click",u),n.style.display=r.style.display=o.style.display="none");
var l=s(c,a,"--a","SWITCH_",d);
c&&c.addEventListener("click",l);
var v=document.querySelector(".audio-toggle"),g="MUTED";
if(v){var _="true"===window.localStorage.getItem(g);
v.setAttribute("aria-pressed",!!_),window.__MUTED=_,v.setAttribute("data-sound","PHASER_".concat(_?"UP":"DOWN")),
v.addEventListener("click",function(){var e="false"===v.getAttribute("aria-pressed");
window.localStorage.setItem(g,e),
v.setAttribute("aria-pressed",e),
v.setAttribute("data-sound","PHASER_".concat(e?"UP":"DOWN"))})}
},{}],"cFOO":[function(require,module,exports) {
"use strict";require("../styles/index.critical.styl");
var e=require("../modules/consoleimg");
require("../_includes/components/light-toggle"),
require("../_includes/components/nav"),
document.body.classList.remove("no-js"),
(0,e.showConsoleMessage)();
var s,o={SQUEAK_IN:new Audio("/assets/audio/squeak-in.mp3"),
SQUEAK_OUT:new Audio("/assets/audio/squeak-out.mp3"),
SWITCH_ON:new Audio("/assets/audio/switch-on--two.mp3"),
SWITCH_OFF:new Audio("/assets/audio/switch-off--two.mp3"),
SWITCH_ON_ALT:new Audio("/assets/audio/switch-on--one.mp3"),
SWITCH_OFF_ALT:new Audio("/assets/audio/switch-off--one.mp3"),
PHASER_UP:new Audio("/assets/audio/phaser-up.mp3"),
PHASER_DOWN:new Audio("/assets/audio/phaser-down.mp3"),
CLICK:new Audio("/assets/audio/click--two.mp3"),
POP:new Audio("/assets/audio/pop.mp3"),
SHOCK:new Audio("/assets/audio/shock.mp3"),
SIGH:new Audio("/assets/audio/sigh.mp3"),
CHIP:new Audio("/assets/audio/chip.mp3")};
o.PHASER_DOWN.addEventListener("ended",function(){return window.__MUTED=!0});
var t=200,i=document.querySelectorAll("[data-sound]");
i.forEach(function(e){var i=e.getAttribute("data-sound").split(","),
u=e.getAttribute("data-sound-trigger").split(",");
if(!i.length||!u.length)throw Error("Noisy: No trigger or sound detected");
for(var n=function(i){var n=u[i];
  e.addEventListener(n,function(){var a=e.getAttribute("data-sound").split(",");
  "PHASER_UP"===a[0]&&(window.__MUTED=!1),window.__MUTED||("mouseup"===n?"mousedown"===u[i-1]&&o[a[i-1]].paused?o[a[i]||a[0]].play():(clearTimeout(s),s=setTimeout(function(){return o[a[i]||a[0]].play()},t)):o[a[i]||a[0]].play())})},a=0;a<u.length;a++)n(a)});
},{"../styles/index.critical.styl":"gxn7","../modules/consoleimg":"fjgY","../_includes/components/light-toggle":"wUY9","../_includes/components/nav":"yg4m"}]},{},["cFOO"], null)


const magic = document.querySelector('.magic');
const yes_btn = document.querySelector('.yes_btn');
const no_btn = document.querySelector('.no_btn');

no_btn.addEventListener('click', () => {
    no_btn.style.position = 'absolute';

    const random_left = Math.floor(Math.random() * magic.clientWidth);
    const random_top = Math.floor(Math.random() * magic.clientHeight);

    if (random_left >= magic.clientWidth / 2)
        no_btn.style.left = `${random_left - no_btn.clientWidth}px`;

    if (random_top >= magic.clientHeight / 2)
        no_btn.style.top = `${random_top - no_btn.clientHeight}px`;
})

    yes_btn.addEventListener('click', () => {
    magic.innerHTML = `<h2>
                            I knew it!!! <br>
                            Lool 😂😂😂 <br>

                            </h2>`
})
