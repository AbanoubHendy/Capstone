var Client;(()=>{"use strict";var e={553:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(645),o=r.n(n),i=r(667),a=r.n(i),d=r(322),l=o()((function(e){return e[1]})),s=a()(d.Z);l.push([e.id,"body{background-image:url("+s+");background-size:cover;background-attachment:fixed;background-position:center}div#TravelHeader h1{font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;font-size:4em;margin-top:140px;color:darkkhaki;margin-left:60px}@media (min-width: 601px) and (max-width: 1250px){body{background-image:url("+s+");background-size:cover;background-attachment:fixed;background-position:center}div#TravelHeader h1{font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;font-size:3em;margin-top:100px;color:#979352;margin-left:35px}}@media (max-width: 600px){body{background-image:url("+s+");background-size:cover;background-attachment:fixed;background-position:center}div#TravelHeader h1{font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;font-size:2.4em;margin-top:80px;color:#868351;margin-left:25px}}\n",""]);const c=l},717:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"footer{text-align:center;height:130px;background-color:black;width:100%}footer #footpara{line-height:1.6em;color:green;width:80%;font-size:30px;font-family:Georgia, 'Times New Roman', Times, serif;color:burlywood;width:100%;padding-top:45px}@media (min-width: 601px) and (max-width: 1250px){footer{text-align:center;height:110px;position:absolute;bottom:0}footer p#footpara{line-height:1.3em;color:green;width:75%;font-size:1.4em;font-family:Georgia, 'Times New Roman', Times, serif;color:burlywood;width:100%;padding-top:40px}}@media (max-width: 600px){footer{text-align:center;height:80px;position:absolute;bottom:0}footer p#footpara{line-height:1.2em;color:green;width:95%;font-size:15px;font-size:10px;font-family:Georgia, 'Times New Roman', Times, serif;color:burlywood;width:100%;background-color:transparent;padding-top:40px}}\n",""]);const i=o},486:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,'div#app{display:flex;justify-content:center;grid-gap:1em;font-size:1.5em;font-family:"Oswald",sans-serif;margin-top:100px}section label{display:block;font-size:25px;color:coral}section input{display:block;height:40px;width:300px;background:#22b2da;font-size:0.8em;font-family:"Oswald",sans-serif;border:none;margin-top:5px;margin-bottom:30px}div#btnbox{text-align:center}button#generate{width:120px;height:40px;background:orangered;font-size:1.3em;font-family:\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;border:none;margin-bottom:50px;border-radius:15px}div.holderEntry{margin:auto;background-color:black;width:600px;opacity:0.9;color:white;margin-bottom:70px;font-size:1.7em;padding-top:10px;padding-left:10px}div.holderEntry section#FirstPart{width:40%;float:left}div.holderEntry section#FirstPart #countDown{font-size:0.6em;color:peru}div.holderEntry section#SecondPart{display:grid;grid-template-columns:repeat(4, 1fr);grid-gap:4px;font-size:0.7em;grid-template-areas:"tr tr tr tr"\r "as as as as"\r "er er er er"\r "rt rt rt rt"\r "zx cv cv cv"\r "bn bn nm nm"\r "jk jk kl kl"}div.holderEntry div#latitude{grid-area:tr;font-size:14px}div.holderEntry div#longitude{grid-area:as;font-size:14px}div.holderEntry div#country{grid-area:er}div.holderEntry div#theDate{grid-area:rt}div.holderEntry img#weatherImg{grid-area:zx;width:60px;height:60px;margin:auto;border-radius:50px}div.holderEntry div.weathertitle{margin-top:20px;grid-area:cv}div.holderEntry div#HighTemp{grid-area:bn;font-size:14px}div.holderEntry div#LowTemp{grid-area:nm;font-size:14px}div.holderEntry button#SaveTrip{grid-area:jk;height:30px;width:60%;background-color:orangered;border:none;border-radius:20px;margin:20px}div.holderEntry button#RemoveTrip{grid-area:kl;height:30px;width:60%;background-color:orangered;border:none;border-radius:20px;margin:20px}@media (min-width: 601px) and (max-width: 1250px){div#app{display:flex;justify-content:center;grid-gap:0.8em;font-size:1.2em;margin-top:80px}section label{display:block;font-size:20px;color:coral}section input{display:block;height:30px;width:240px;background:#22b2da;font-size:0.6em;border:none;margin-top:3px;margin-bottom:20px}div#btnbox{text-align:center}button#generate{width:90px;height:30px;background:orangered;font-size:1em;border:none;margin-bottom:40px;border-radius:15px}div.holderEntry{margin:auto;background-color:black;width:450px;opacity:0.9;color:white;font-size:1.5em;padding-top:7px;padding-left:7px}div.holderEntry div#countDown{font-size:0.5em}div.holderEntry div#latitude{grid-area:tr;font-size:12px}div.holderEntry div#longitude{grid-area:as;font-size:12px}div.holderEntry div#country{grid-area:er}div.holderEntry div#theDate{grid-area:rt}div.holderEntry img#weatherImg{grid-area:zx;width:45px;height:45px;margin:auto;border-radius:50px}div.holderEntry div.weathertitle{margin-top:16px;grid-area:cv}div.holderEntry div#HighTemp{grid-area:bn;font-size:12px}div.holderEntry div#LowTemp{grid-area:nm;font-size:12px}div.holderEntry button#SaveTrip{grid-area:jk;height:25px;width:70%;background-color:orangered;border:none;border-radius:20px;margin:15px;font-size:0.8em}div.holderEntry button#RemoveTrip{grid-area:kl;height:25px;width:70%;background-color:orangered;border:none;border-radius:20px;margin:15px;font-size:0.8em}}@media (max-width: 600px){div#app{display:flex;justify-content:center;grid-gap:0.6em;font-size:0.9em;margin-top:60px}section label{display:block;font-size:15px;color:coral}section input{display:block;height:25px;width:190px;background:#22b2da;font-size:0.5em;border:none;margin-top:2px;margin-bottom:20px}div#btnbox{text-align:center}button#generate{width:70px;height:20px;background:orangered;font-size:0.9em;border:none;margin-bottom:40px;border-radius:15px}div.holderEntry{margin:auto;background-color:black;width:300px;opacity:0.9;color:white;font-size:1.2em;padding-top:5px;padding-left:5px}div.holderEntry div#countDown{font-size:0.4em}div.holderEntry div#latitude{grid-area:tr;font-size:9px}div.holderEntry div#longitude{grid-area:as;font-size:9px}div.holderEntry div#country{grid-area:er}div.holderEntry div#theDate{grid-area:rt}div.holderEntry img#weatherImg{grid-area:zx;width:35px;height:35px;margin:auto;border-radius:50px}div.holderEntry div.weathertitle{margin-top:10px;grid-area:cv}div.holderEntry div#HighTemp{grid-area:bn;font-size:9px}div.holderEntry div#LowTemp{grid-area:nm;font-size:9px}div.holderEntry button#SaveTrip{grid-area:jk;height:20px;width:80%;background-color:orangered;border:none;border-radius:20px;margin:10px;font-size:0.7em}div.holderEntry button#RemoveTrip{grid-area:kl;height:20px;width:80%;background-color:orangered;border:none;border-radius:20px;margin:10px;font-size:0.7em}}\n',""]);const i=o},261:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,'nav h3{font-size:1.8em;margin-left:30px;color:tomato;margin-top:15px;margin-bottom:15px;float:left}nav ul{width:50%;float:right;display:flex;justify-content:space-evenly;align-items:center;list-style:none;cursor:pointer;font-family:"Times New Roman",Times,serif}nav ul#navbar__list{padding-top:15px}nav a{font-size:1.6em;font-weight:bold;text-decoration:none;color:#fff}header.page__header{background-color:#5f5d5d;position:fixed;top:0;width:100%}@media (min-width: 601px) and (max-width: 1250px){nav h3{font-size:1.6em;margin-left:20px;margin-top:15px;margin-bottom:15px;float:left}nav ul{width:55%;float:right;display:flex;justify-content:space-evenly;align-items:center;list-style:none}nav ul#navbar__list{padding-top:17px}nav a{font-size:1.3em;font-weight:bold;text-decoration:none;padding:0.8em}header.page__header{background-color:#5f5d5d;position:fixed;top:0;width:100%}}@media (max-width: 600px){nav h3{font-size:1.3em;margin-left:20px;margin-top:13px;margin-bottom:8px;float:left}nav ul{width:60%;display:flex;align-items:center;list-style:none}nav ul#navbar__list{padding-top:14px}nav a{font-size:1em;font-weight:bold;text-decoration:none;padding:0.3em}header.page__header{background-color:#5f5d5d;position:fixed;top:0;width:100%;z-index:5}}\n',""]);const i=o},230:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},322:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"images/Plane-3.jpg"},379:(e,t,r)=>{var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function a(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function d(e,t){for(var r={},n=[],o=0;o<e.length;o++){var d=e[o],l=t.base?d[0]+t.base:d[0],s=r[l]||0,c="".concat(l," ").concat(s);r[l]=s+1;var p=a(c),g={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(i[p].references++,i[p].updater(g)):i.push({identifier:c,updater:m(g,t),references:1}),n.push(c)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,c=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=c(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function g(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u=null,h=0;function m(e,t){var r,n,o;if(t.singleton){var i=h++;r=u||(u=l(t)),n=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=l(t),n=g.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=a(r[n]);i[o].references--}for(var l=d(e,t),s=0;s<r.length;s++){var c=a(r[s]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}r=l}}}}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})();var n={};(()=>{async function e(e){e.preventDefault();const r=document.getElementById("TravelDate").value;Client.CountDown(r);const n=document.getElementById("TravelCountry").value;console.log(n),await t("http://localhost:7000/Geoadd",{countryInput:n}).then((e=>{o(e)}))}r.r(n),r.d(n,{CountDown:()=>i,GenerateData:()=>e}),document.getElementById("generate").addEventListener("click",e);const t=async(e="http://localhost:7000/Geoadd",t={})=>{console.log("data => ",{url:e,data:t});const r=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await r.json();return console.log(e),e}catch(e){console.log("There Is An Error",e)}},o=async e=>{try{document.getElementById("latitude").innerHTML=`Lat: ${e.lat}`,document.getElementById("longitude").innerHTML=`Lon: ${e.lng}`,document.getElementById("country").innerHTML=`Country: ${e.countryName}`}catch(e){console.log("There Is An Error",e)}};function i(e){const t=document.getElementById("TravelCountry").value,r=new Date,n=new Date(e)-r,o=Math.floor(n/864e5)+1;console.log(o),document.getElementById("countDown").innerHTML=`Your Travel To ${t} Is After ${o} Days`,n<0&&(alert("Please Enter Your Travel Date Correct"),document.getElementById("countDown").innerHTML=""),""==e&&(alert("Please Enter Your Travel Date"),document.getElementById("countDown").innerHTML="")}var a=r(379),d=r.n(a),l=r(553);d()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var s=r(717);d()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;var c=r(486);d()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;var p=r(261);d()(p.Z,{insert:"head",singleton:!1}),p.Z.locals;var g=r(230);d()(g.Z,{insert:"head",singleton:!1}),g.Z.locals,r(322),r.p,alert("I exist")})(),Client=n})();