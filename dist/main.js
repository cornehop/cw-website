!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactBootstrap},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),a=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(a).concat([o]).join("\n")}var i,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var l=e[i];null!=l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="(".concat(l[2],") and (").concat(n,")")),t.push(l))}},t}},function(e,t,n){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function l(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],l={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(h(r.parts[i],t))}else{for(var l=[];i<r.parts.length;i++)l.push(h(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:l}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach(function(n){t.setAttribute(n,e.attributes[n])}),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var s,p=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}var m=null,d=0;function h(e,t){var n,r,o;if(t.singleton){var a=d++;n=m||(m=u(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=u(t),r=function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=l(e,t);return c(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var i=n[a],u=o[i.id];u&&(u.refs--,r.push(u))}e&&c(l(e,t),t);for(var s=0;s<r.length;s++){var p=r[s];if(0===p.refs){for(var f=0;f<p.parts.length;f++)p.parts[f]();delete o[p.id]}}}}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return r});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}}).call(this,n(13))},function(e,t,n){e.exports=n.p+"6d7465b4a36ffb681d8617094c662de0.png"},function(e,t,n){e.exports=n.p+"edc0418d607923d3631c98fc4ba5232b.jpg"},function(e,t,n){e.exports=n.p+"bafc4c2bad6af7ceab825d19c3d4fc54.png"},function(e,t,n){e.exports=n.p+"854b41827a306c4d32fca72c1e5f446c.pdf"},function(e,t,n){e.exports=n.p+"e43582695e8aab3c6bdb99d19061763a.pdf"},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(2)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Lato|Roboto+Slab&display=swap);",""]),t.push([e.i,"@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css);",""]),t.push([e.i,'body {\r\n  margin: 0;\r\n  font-family:  "Lato",Arial,Helvetica,sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  color: #707173;\r\n  min-width: 360px;\r\n}\r\n\r\nh1,h2,h3,h4,h5,h6{\r\n  font-family: "Roboto Slab","Lato",Arial,Helvetica,sans-serif;\r\n}\r\n\r\nh1,h2{\r\n  color: #D22630;\r\n}\r\n\r\nh3{\r\n  color: #707173;\r\n}\r\n\r\nh4{\r\n  color: #707173;\r\n  font-weight: normal;\r\n}\r\n\r\nh6{\r\n  color: #707173;\r\n  font-weight: normal;\r\n}\r\n\r\na{\r\n  color: #D22630;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover{\r\n  color: black;\r\n  text-decoration: none;\r\n}',""])},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],s=!1,p=-1;function f(){s&&c&&(s=!1,c.length?u=c.concat(u):p=-1,u.length&&m())}function m(){if(!s){var e=l(f);s=!0;for(var t=u.length;t;){for(c=u,u=[];++p<t;)c&&c[p].run();p=-1,t=u.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||s||l(m)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,'.cw-menu{\r\n    padding: 15px;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.content-paragraph{\r\n    margin-bottom: 3rem;\r\n    padding-left: 0;\r\n}\r\n\r\n.img-moldova-map{\r\n    min-height: 15rem;\r\n    max-height: 15rem;\r\n}\r\n\r\n.bg-primary{\r\n    background-color: #D22630!important;\r\n}\r\n\r\n.text-muted{\r\n    color: white !important;\r\n    font-style: italic;\r\n}\r\n\r\n.cw-infobar .card{\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.cw-infobar .card a{\r\n    color: white;\r\n}\r\n\r\n.cw-infobar .card a:hover{\r\n    color: black;\r\n}\r\n\r\n.cw-infobar .card-header{\r\n    background-color: unset;\r\n    border-bottom: none;\r\n    font-size: 2rem;\r\n    color: white;\r\n    font-family: "Roboto Slab","Lato",Arial,Helvetica,sans-serif;\r\n    padding: 15px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.cw-infobar .card-body{\r\n    color: white;\r\n    padding: 0;\r\n    padding-bottom: 1.25rem;\r\n}\r\n\r\n.cw-donate-btn{\r\n    color: black !important;\r\n    font-size: 1.3rem;\r\n    font-family: "Lato",Arial,Helvetica,sans-serif;\r\n    font-weight: bold;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.cw-newsletterblock-form{\r\n    margin-top: 1rem;\r\n}\r\n\r\n.cw-archive-container{\r\n    margin-top: 1rem;\r\n}',""])},function(e,t,n){var r=n(17);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"h1{\r\n    margin-bottom: 0;\r\n}\r\n\r\nh3{\r\n    margin-top: 0;\r\n}\r\n\r\n.cw-header{\r\n    background-position: right top;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: auto 250px;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    border-bottom-left-radius: 100% 100%;\r\n}\r\n\r\n.cw-header-titles{\r\n    padding: 1rem;\r\n}\r\n\r\n.cw-header-footer{\r\n    visibility: hidden; /* TODO CH REMOVE WHEN HEADER IS BEING FIXED */\r\n    margin-top: 10px;\r\n}\r\n\r\n.cw-header-image{\r\n    max-height: 120px;\r\n}",""])},function(e,t,n){"use strict";n.r(t);var r,o,a=n(0),i=n.n(a),l=n(4),c=n.n(l),u=(n(11),n(5)),s=(n(14),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Carlos Wessels"),i.a.createElement("h3",null,"Zendingswerker bij Operatie Mobilisatie in Moldavië"))},t}(i.a.Component),f=(n(16),n(1)),m=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return m(t,e),t.prototype.render=function(){return i.a.createElement(f.Carousel,{nextIcon:"",prevIcon:"",indicators:!1,controls:!1},i.a.createElement(f.Carousel.Item,null,i.a.createElement("h6",null,i.a.createElement("a",{href:"https://www.operatiemobilisatie.nl",target:"_blank",rel:"noopener noreferrer"},"Klik hier voor meer informatie over het werk van Operatie Mobilisatie in Nederland"))),i.a.createElement(f.Carousel.Item,null,i.a.createElement("h6",null,i.a.createElement("a",{href:"https://www.om.org/md/en",target:"_blank",rel:"noopener noreferrer"},"Klik hier voor meer informatie over het werk van Operatie Mobilisatie in Moldavië"))))},t}(i.a.Component),h=n(6),v=n.n(h),g=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y={backgroundImage:"url("+v.a+")"},b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:y,className:"container-fluid cw-header"},i.a.createElement("div",{className:"row cw-header-titles"},i.a.createElement("div",{className:"col-12"},i.a.createElement(p,null)),i.a.createElement("div",{className:"col-12 cw-header-footer"},i.a.createElement(d,null))))},t}(i.a.Component),w=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return w(t,e),t.prototype.render=function(){return i.a.createElement(f.Container,{fluid:!0},i.a.createElement(f.Row,null,i.a.createElement(f.Col,{xs:12},i.a.createElement("h2",null,this.props.pageTitle))),i.a.createElement(f.Row,null,i.a.createElement(f.Col,{xs:12},this.props.pageContent)))},t}(i.a.Component),E=n(7),C=n.n(E),O=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return O(t,e),t.prototype.renderMdtLink=function(){return i.a.createElement("a",{href:"https://www.om.org/en/ministry-profile/mission-discipleship-training",target:"_blank",rel:"noopener noreferrer"}," Mission Discipleship Training")},t.prototype.renderOmMoldovaLink=function(){return i.a.createElement("a",{href:"https://www.om.org/md/en",target:"_blank",rel:"noopener noreferrer"},"Operatie Mobilisatie in Moldavië")},t.prototype.getContentText=function(){return i.a.createElement("div",null,"Mijn naam is Carlos en sinds september 2019 werk ik als zendingswerker voor ",this.renderOmMoldovaLink(),". In Moldavië maak ik onderdeel uit van een team van Operatie Mobilisatie die het evangelie onder de mensen in Moldavië verspreiden. In eerste instantie zal ik voornamelijk op de achtergrond aan het werk zijn, in de hoofdstad Chișinău. Daarna ga ik een",this.renderMdtLink()," volgen, waarna ik als evangelist aan het werk kan gaan. Gedurende deze periode zal ik bezig zijn met het leren van de Roemeense taal zodat ik kan evangeliseren in de taal die de lokale bevolking spreekt.")},t.prototype.getPicture=function(){return i.a.createElement(f.Image,{src:C.a,fluid:!0,roundedCircle:!0})},t.prototype.render=function(){return i.a.createElement(f.Container,{className:"content-paragraph",fluid:!0},i.a.createElement(f.Row,null,i.a.createElement(f.Col,{className:"align-self-center",xs:6,sm:7,md:9,lg:10},this.getContentText()),i.a.createElement(f.Col,{className:"align-self-center",xs:6,sm:5,md:3,lg:2},this.getPicture())))},t}(i.a.Component),j=n(8),x=n.n(j),P=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return P(t,e),t.prototype.getContentText=function(){return i.a.createElement("div",null,"Moldavië ligt in Oost-Europa en is het armste land van Europa. Er wonen ongeveer 3.5 miljoen mensen in Moldavië, waarvan ongeveer 670.000 woonachtig zijn in de hoofdstad Chișinău. De voornaamste godsdienst is Oosters-Orthodox (90%), slechts 1% van de bevolking is protestants.")},t.prototype.getPicture=function(){return i.a.createElement(f.Image,{src:x.a,className:"img-moldova-map",fluid:!0,thumbnail:!0})},t.prototype.render=function(){return i.a.createElement(f.Container,{className:"content-paragraph",fluid:!0},i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,i.a.createElement("h4",null,"Moldavië"))),i.a.createElement(f.Row,null,i.a.createElement(f.Col,{className:"align-self-center text-left"},this.getPicture()),i.a.createElement(f.Col,{className:"align-self-center"},this.getContentText())))},t}(i.a.Component),M=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return M(t,e),t.prototype.getContentText=function(){return i.a.createElement("div",null,"Ik ben drie keer eerder in Moldavië geweest: in 2015 en 2017 met een jongerengroep vanuit de Nederlands Gereformeerde Kerk in Zeewolde; en in 2018 met een goede vriend waarbij ik het laatste gedeelte van de reis zelfstandig heb afgelegd. God heeft mij tijdens deze reis tot drie keer ingegeven om naar Moldavië te gaan, twee keer middels een gesprek met mensen die ik tijdens eerdere reizen had ontmoet en aan mij vroegen of ik voor een langere termijn wil komen, en de derde keer tijdens het bidden door middel van een lied dat op de achtergrond aan stond. Drie is het getal van de volheid en komt veel terug in de Bijbel, ik weet zeker dat God dit heeft gebruikt omdat getallen mij erg aanspreken. Na een proces van een aantal jaren voel ik me nu geroepen voor een langere tijd er te gaan wonen.")},t.prototype.render=function(){return i.a.createElement(f.Container,{className:"content-paragraph",fluid:!0},i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,i.a.createElement("h4",null,"Waarom Moldavië?"))),i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,this.getContentText())))},t}(i.a.Component),z=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),R=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return z(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,null),i.a.createElement(T,null),i.a.createElement(N,null))},t}(i.a.Component),A={HomePage:"Bună ziua (goedendag)!",ArchivePage:"Nieuwsbrieven",SupportBlock:"Steunt u mij?",NewsletterBlock:"Op de hoogte blijven?"},L=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return L(t,e),t.prototype.render=function(){return i.a.createElement(f.Card,{bg:"primary"},i.a.createElement(f.Card.Header,null,this.props.title),i.a.createElement(f.Card.Body,null,this.props.children))},t}(i.a.Component),H=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),B=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return H(t,e),t.prototype.getText=function(){return i.a.createElement("div",null,"Om mijn zendingswerk goed te kunnen uitvoeren heb ik u nodig. U kunt mij helpen door voor mij en het team in Moldavië te bidden. Verder kunt u mij financieel ondersteunen. Dit kan via de knop hieronder, deze brengt u naar mijn donatiepagina van OM.")},t.prototype.render=function(){return i.a.createElement(f.Container,{fluid:!0},i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,this.getText())),i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,i.a.createElement("a",{href:"https://www.operatiemobilisatie.nl/carloswessels",target:"_blank",rel:"noopener noreferrer",className:"btn btn-light btn-block cw-donate-btn"},"DONEREN"))))},t}(i.a.Component),I=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return I(t,e),t.prototype.getSubscribtionEmailLink=function(){var e="pr@carloswessels.nl";return i.a.createElement("a",{href:"mailto:pr@carloswessels.nl?subject=Abonneren op de nieuwsbrief"},e)},t.prototype.getText=function(){return i.a.createElement("div",null,"Gedurende mijn verblijf in Moldavië worden er regelmatig filmpjes en nieuwsbrieven gemaakt waarin ik vertel wat ik in Moldavië doe en meemaak. Wilt u hiervan op de hoogte blijven? Dan kunt u zich aanmelden door een e-mail te sturen naar: ",this.getSubscribtionEmailLink(),".")},t.prototype.render=function(){return i.a.createElement(f.Container,{fluid:!0},i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,this.getText())),i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,i.a.createElement("small",{className:"text-muted"},"* We zullen uw e-mailadres voor geen enkel ander doeleinde gebruiken dan het versturen van onze nieuwsbrief."))))},t}(i.a.Component),F=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),V=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return F(t,e),t.prototype.render=function(){return i.a.createElement(f.Container,{className:"cw-infobar",fluid:!0},i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,i.a.createElement(S,{title:A.SupportBlock},i.a.createElement(B,null)))),i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,i.a.createElement(S,{title:A.NewsletterBlock},i.a.createElement(D,null)))))},t}(i.a.Component);!function(e){e[e.newsletter=0]="newsletter",e[e.video=1]="video"}(o||(o={}));var W=function(e,t,n){this.file=e,this.itemType=t,this.name=n},G=n(9),U=n.n(G),K=n(10),J=n.n(K);var Z={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},q=a.createContext&&a.createContext(Z),Q=function(){return(Q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},X=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function $(e){return function(t){return a.createElement(Y,Q({attr:Q({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return a.createElement(t.tag,Q({key:n},t.attr),e(t.child))})}(e.child))}}function Y(e){var t=function(t){var n,r=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,i=e.title,l=X(e,["attr","title"]);return a.createElement("svg",Q({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:n,style:Q({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==q?a.createElement(q.Consumer,null,function(e){return t(e)}):t(Z)}var ee=function(e){return $({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"}}]})(e)};ee.displayName="FaRegFilePdf";var te=function(e){return $({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm228.687-211.303L224 305.374V268c0-11.046-8.954-20-20-20H100c-11.046 0-20 8.954-20 20v104c0 11.046 8.954 20 20 20h104c11.046 0 20-8.954 20-20v-37.374l52.687 52.674C286.704 397.318 304 390.28 304 375.986V264.011c0-14.311-17.309-21.319-27.313-11.314z"}}]})(e)};te.displayName="FaRegFileVideo";var ne=function(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"}}]})(e)};ne.displayName="FaRegQuestionCircle";var re=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),oe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return re(t,e),t.prototype.getFileTypeIcon=function(e){return e===o.newsletter?i.a.createElement(ee,null):e===o.video?i.a.createElement(te,null):i.a.createElement(ne,null)},t.prototype.getFileLink=function(e,t,n){return i.a.createElement("a",{href:n,target:"_blank"},e," ",t)},t.prototype.getTableContent=function(){var e,t=this,n=[];return((e=[]).push(new W(J.a,o.newsletter,"Nieuwsbrief juli 2019")),e.push(new W(U.a,o.newsletter,"Nieuwsbrief mei 2019")),console.log(e),e).map(function(e,r){var o=t.getFileTypeIcon(e.itemType),a=t.getFileLink(o,e.name,e.file);n.push(i.a.createElement("tr",{key:r},i.a.createElement("td",null,a)))}),n},t.prototype.render=function(){return i.a.createElement(f.Table,{striped:!0,bordered:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Titel"))),i.a.createElement("tbody",null,this.getTableContent()))},t}(i.a.Component),ae=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ie=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ae(t,e),t.prototype.render=function(){return i.a.createElement(f.Container,{className:"cw-archive-container",fluid:!0},i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,i.a.createElement(oe,null))))},t}(i.a.Component),le=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ce=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return le(t,e),t.prototype.getText=function(){return i.a.createElement("div",null,"Gedurende mijn verblijf in Moldavië worden er regelmatig filmpjes en nieuwsbrieven gemaakt waarin ik vertel wat ik in Moldavië doe en meemaak. Hieronder vind u een overzicht van de eerder verzonden items.")},t.prototype.render=function(){return i.a.createElement(f.Container,{fluid:!0,className:"content-paragraph"},i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,this.getText())),i.a.createElement(f.Row,null,i.a.createElement(ie,null)))},t}(i.a.Component),ue=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),se=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ue(t,e),t.prototype.render=function(){return i.a.createElement(f.ButtonGroup,{className:"cw-menu"},i.a.createElement(f.Button,{size:"lg",variant:"home"===this.props.currentPage?"outline-danger":"danger",onClick:this.props.homeClick},"Wie is Carlos?"),i.a.createElement(f.Button,{size:"lg",variant:"archive"===this.props.currentPage?"outline-danger":"danger",onClick:this.props.archiveClick},"Nieuwsbrieven"))},t}(i.a.Component),pe=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),fe=function(e){function t(t){var n=e.call(this,t)||this;return n.state={mainCurrentPage:"home",mainTitle:A.HomePage,mainContent:i.a.createElement(R,null)},n}return pe(t,e),t.prototype.setContent=function(e){"home"===e?this.setState({mainCurrentPage:e,mainTitle:A.HomePage,mainContent:i.a.createElement(R,null)}):"archive"===e&&this.setState({mainCurrentPage:e,mainTitle:A.ArchivePage,mainContent:i.a.createElement(ce,null)})},t.prototype.render=function(){var e=this;return i.a.createElement(f.Container,{fluid:!0},i.a.createElement(f.Row,null,i.a.createElement(f.Col,{xs:4},i.a.createElement(V,null)),i.a.createElement(f.Col,{xs:8},i.a.createElement(f.Container,{fluid:!0},i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,i.a.createElement(se,{currentPage:this.state.mainCurrentPage,homeClick:function(){return e.setContent("home")},archiveClick:function(){return e.setContent("archive")}}))),i.a.createElement(f.Row,null,i.a.createElement(f.Col,null,i.a.createElement(_,{pageTitle:this.state.mainTitle,pageContent:this.state.mainContent})))))))},t}(i.a.Component),me=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),de=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return me(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,null),i.a.createElement(fe,null))},t}(i.a.Component);c.a.render(i.a.createElement(de,null),document.getElementById("root")),u.a()}]);
//# sourceMappingURL=main.js.map