!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(1),r=o(i),a=n(3),s=o(a),c=n(7),u=o(c),f=n(9),l=o(f);(0,u.default)(),document.querySelector("html").classList.add("js-is-loaded"),document.querySelectorAll(".g-header__share").length&&(0,l.default)({facebook:".g-header__share-button--fb",twitter:".g-header__share-button--tw",mail:".g-header__share-button--ma"}),(0,s.default)(),r.default.init()},function(t,e,n){(function(e){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t,e,i){function r(e){var n=l,o=d;return l=d=void 0,g=e,m=t.apply(o,n)}function a(t){var n=t-v;return void 0===v||n>=e||n<0||y&&t-g>=p}function s(){var t=E();if(a(t))return c(t);h=setTimeout(s,function(t){var n=e-(t-v);return y?_(n,p-(t-g)):n}(t))}function c(t){return h=void 0,w&&l?r(t):(l=d=void 0,m)}function u(){var t=E(),n=a(t);if(l=arguments,d=this,v=t,n){if(void 0===h)return function(t){return g=t,h=setTimeout(s,e),b?r(t):m}(v);if(y)return h=setTimeout(s,e),r(v)}return void 0===h&&(h=setTimeout(s,e)),m}var l,d,p,m,h,v,g=0,b=!1,y=!1,w=!0;if("function"!=typeof t)throw new TypeError(f);return e=o(e)||0,n(i)&&(b=!!i.leading,p=(y="maxWait"in i)?k(o(i.maxWait)||0,e):p,w="trailing"in i?!!i.trailing:w),u.cancel=function(){void 0!==h&&clearTimeout(h),g=0,l=v=d=h=void 0},u.flush=function(){return void 0===h?m:c(E())},u}function n(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function o(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&x.call(t)==d}(t))return l;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(p,"");var o=h.test(t);return o||v.test(t)?g(t.slice(2),o?2:8):m.test(t)?l:+t}function i(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function r(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&q.call(t)==A}(t))return T;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(M,"");var n=j.test(t);return n||S.test(t)?L(t.slice(2),n?2:8):C.test(t)?T:+t}function a(t){t&&t.forEach(function(t){var e=Array.prototype.slice.call(t.addedNodes),n=Array.prototype.slice.call(t.removedNodes);if(function t(e){var n=void 0,o=void 0;for(n=0;n<e.length;n+=1){if((o=e[n]).dataset&&o.dataset.aos)return!0;if(o.children&&t(o.children))return!0}return!1}(e.concat(n)))return W()})}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return navigator.userAgent||navigator.vendor||window.opera||""}var u="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},f="Expected a function",l=NaN,d="[object Symbol]",p=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,v=/^0o[0-7]+$/i,g=parseInt,b="object"==typeof u&&u&&u.Object===Object&&u,y="object"==typeof self&&self&&self.Object===Object&&self,w=b||y||Function("return this")(),x=Object.prototype.toString,k=Math.max,_=Math.min,E=function(){return w.Date.now()},O=function(e,o,i){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return n(i)&&(r="leading"in i?!!i.leading:r,a="trailing"in i?!!i.trailing:a),t(e,o,{leading:r,maxWait:o,trailing:a})},T=NaN,A="[object Symbol]",M=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,S=/^0o[0-7]+$/i,L=parseInt,P="object"==typeof u&&u&&u.Object===Object&&u,H="object"==typeof self&&self&&self.Object===Object&&self,N=P||H||Function("return this")(),q=Object.prototype.toString,z=Math.max,R=Math.min,B=function(){return N.Date.now()},I=function(t,e,n){function o(e){var n=f,o=l;return f=l=void 0,v=e,p=t.apply(o,n)}function a(t){var n=t-h;return void 0===h||n>=e||n<0||b&&t-v>=d}function s(){var t=B();if(a(t))return c(t);m=setTimeout(s,function(t){var n=e-(t-h);return b?R(n,d-(t-v)):n}(t))}function c(t){return m=void 0,y&&f?o(t):(f=l=void 0,p)}function u(){var t=B(),n=a(t);if(f=arguments,l=this,h=t,n){if(void 0===m)return function(t){return v=t,m=setTimeout(s,e),g?o(t):p}(h);if(b)return m=setTimeout(s,e),o(h)}return void 0===m&&(m=setTimeout(s,e)),p}var f,l,d,p,m,h,v=0,g=!1,b=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return e=r(e)||0,i(n)&&(g=!!n.leading,d=(b="maxWait"in n)?z(r(n.maxWait)||0,e):d,y="trailing"in n?!!n.trailing:y),u.cancel=function(){void 0!==m&&clearTimeout(m),v=0,f=h=l=m=void 0},u.flush=function(){return void 0===m?p:c(B())},u},W=function(){},D={isSupported:function(){return!!s()},ready:function(t,e){var n=window.document,o=new(s())(a);W=e,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},F=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),$=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},V=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,U=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,X=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,K=new(function(){function t(){F(this,t)}return Y(t,[{key:"phone",value:function(){var t=c();return!(!V.test(t)&&!U.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=c();return!(!X.test(t)&&!G.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}()),J=function(t,e){var n=void 0;return K.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,{detail:e}):n=new CustomEvent(t,{detail:e}),document.dispatchEvent(n)},Q=function(t){return t.forEach(function(t,e){return function(t,e){var n=t.options,o=t.position,i=t.node,r=(t.data,function(){t.animated&&(function(t,e){e&&e.forEach(function(e){return t.classList.remove(e)})}(i,n.animatedClassNames),J("aos:out",i),t.options.id&&J("aos:in:"+t.options.id,i),t.animated=!1)});n.mirror&&e>=o.out&&!n.once?r():e>=o.in?t.animated||(function(t,e){e&&e.forEach(function(e){return t.classList.add(e)})}(i,n.animatedClassNames),J("aos:in",i),t.options.id&&J("aos:in:"+t.options.id,i),t.animated=!0):t.animated&&!n.once&&r()}(t,window.pageYOffset)})},Z=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}},tt=function(t,e,n){var o=t.getAttribute("data-aos-"+e);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},et=function(t,e){return t.forEach(function(t,n){var o=tt(t.node,"mirror",e.mirror),i=tt(t.node,"once",e.once),r=tt(t.node,"id"),a=e.useClassNames&&t.node.getAttribute("data-aos"),s=[e.animatedClassName].concat(a?a.split(" "):[]).filter(function(t){return"string"==typeof t});e.initClassName&&t.node.classList.add(e.initClassName),t.position={in:function(t,e,n){var o=window.innerHeight,i=tt(t,"anchor"),r=tt(t,"anchor-placement"),a=Number(tt(t,"offset",r?0:e)),s=r||n,c=t;i&&document.querySelectorAll(i)&&(c=document.querySelectorAll(i)[0]);var u=Z(c).top-o;switch(s){case"top-bottom":break;case"center-bottom":u+=c.offsetHeight/2;break;case"bottom-bottom":u+=c.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+c.offsetHeight/2;break;case"bottom-center":u+=o/2+c.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+c.offsetHeight;break;case"center-top":u+=o+c.offsetHeight/2}return u+a}(t.node,e.offset,e.anchorPlacement),out:o&&function(t,e){window.innerHeight;var n=tt(t,"anchor"),o=tt(t,"offset",e),i=t;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(t.node,e.offset)},t.options={once:i,mirror:o,animatedClassNames:s,id:r}}),t},nt=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(t){return{node:t}})},ot=[],it=!1,rt={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},at=function(){return document.all&&!window.atob},st=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(it=!0),it&&(ot=et(ot,rt),Q(ot),window.addEventListener("scroll",O(function(){Q(ot,rt.once)},rt.throttleDelay)))},ct=function(){if(ot=nt(),ft(rt.disable)||at())return ut();st()},ut=function(){ot.forEach(function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),rt.initClassName&&t.node.classList.remove(rt.initClassName),rt.animatedClassName&&t.node.classList.remove(rt.animatedClassName)})},ft=function(t){return!0===t||"mobile"===t&&K.mobile()||"phone"===t&&K.phone()||"tablet"===t&&K.tablet()||"function"==typeof t&&!0===t()};return{init:function(t){return rt=$(rt,t),ot=nt(),rt.disableMutationObserver||D.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),rt.disableMutationObserver=!0),rt.disableMutationObserver||D.ready("[data-aos]",ct),ft(rt.disable)||at()?ut():(document.querySelector("body").setAttribute("data-aos-easing",rt.easing),document.querySelector("body").setAttribute("data-aos-duration",rt.duration),document.querySelector("body").setAttribute("data-aos-delay",rt.delay),-1===["DOMContentLoaded","load"].indexOf(rt.startEvent)?document.addEventListener(rt.startEvent,function(){st(!0)}):window.addEventListener("load",function(){st(!0)}),"DOMContentLoaded"===rt.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&st(!0),window.addEventListener("resize",I(st,rt.debounceDelay,!0)),window.addEventListener("orientationchange",I(st,rt.debounceDelay,!0)),ot)},refresh:st,refreshHard:ct}})}).call(e,n(2))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),r=o(i),a=n(5),s=o(a),c=n(6),u=function(){(0,c.selectAll)(".sticky").forEach(function(t){return s.default.add(t)}),(0,r.default)().setup({step:".sticky",offset:window.innerWidth<600?.5:.1}).onStepEnter(function(t){var e=t.element;console.log("sticky enter"),(0,c.addClass)(e,"scrolly-fade-in")}).onStepExit(function(t){var e=t.element;(0,c.removeClass)(e,"scrolly-fade-in")}),(0,r.default)().setup({step:".move-box",offset:0}).onStepEnter(function(t){var e=t.element;(0,c.addClass)(e,"move-in-right")}).onStepExit(function(t){var e=t.element;(0,c.removeClass)(e,"move-in-right")})};e.default=u},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){for(var e=t.length,n=[],o=0;o<e;o+=1)n.push(t[o]);return n}function e(t){return t instanceof Element?t:"string"==typeof t?document.querySelector(t):null}function n(e,n){return void 0===n&&(n=document),"string"==typeof e?t(n.querySelectorAll(e)):e instanceof Element?t([e]):e instanceof NodeList?t(e):e instanceof Array?e:[]}function o(t){return"scrollama__debug-step--"+t.id+"-"+t.i}function i(t){return"scrollama__debug-offset--"+t.id}function r(t){var e=t.id,n=t.offsetVal,o=t.stepClass,r=document.createElement("div");r.setAttribute("id",i({id:e})),r.setAttribute("class","scrollama__debug-offset"),r.style.position="fixed",r.style.left="0",r.style.width="100%",r.style.height="0px",r.style.borderTop="2px dashed black",r.style.zIndex="9999";var a=document.createElement("p");a.innerText='".'+o+'" trigger: '+n,a.style.fontSize="12px",a.style.fontFamily="monospace",a.style.color="black",a.style.margin="0",a.style.padding="6px",r.appendChild(a),document.body.appendChild(r)}function a(t){r({id:t.id,offsetVal:t.offsetVal,stepClass:t.stepEl[0].getAttribute("class")})}function s(t){var e=t.id,n=t.offsetMargin,o=(t.offsetVal,i({id:e}));document.querySelector("#"+o).style.top=n+"px"}function c(t){var e=t.id,n=(t.stepOffsetHeight,t.offsetMargin);t.offsetVal;s({id:e,offsetMargin:n})}function u(t){var e=t.id,n=t.index,i=t.state,r=o({id:e,i:n}),a=document.querySelector("#"+r+"_above"),s=document.querySelector("#"+r+"_below"),c="enter"===i?"block":"none";a&&(a.style.display=c),s&&(s.style.display=c)}function f(){function t(){var t="abcdefghijklmnopqrstuv",e=t.length,n=(new Date).getTime();return""+[0,0,0].map(function(n){return t[Math.floor(Math.random()*e)]}).join("")+n}function o(t){var e=0;if(t.offsetParent)do{e+=t.offsetTop,t=t.offsetParent}while(t);return e<0?0:e}function i(){var t=document.body,e=document.documentElement;return Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)}function r(t){return+t.getAttribute("data-scrollama-index")}function s(){window.pageYOffset>at?st="down":window.pageYOffset<at&&(st="up"),at=window.pageYOffset}function f(){V=window.innerHeight,U=i(),K=W?W.getBoundingClientRect():null,$=Y*V,X=D?D.map(function(t){return t.offsetHeight}):[],G=D?D.map(o):[],Q&&J&&P(),Z&&c({id:F,stepOffsetHeight:X,offsetMargin:$,offsetVal:Y})}function l(t){t&&!Q?(J&&P(),Q=!0):t||(B.top&&B.top.disconnect(),B.bottom&&B.bottom.disconnect(),B.stepAbove&&B.stepAbove.forEach(function(t){return t.disconnect()}),B.stepBelow&&B.stepBelow.forEach(function(t){return t.disconnect()}),B.stepProgress&&B.stepProgress.forEach(function(t){return t.disconnect()}),B.viewportAbove&&B.viewportAbove.forEach(function(t){return t.disconnect()}),B.viewportBelow&&B.viewportBelow.forEach(function(t){return t.disconnect()}),Q=!1)}function d(t){for(var e=Math.ceil(t/et),n=[],o=1/e,i=0;i<e;i++)n.push(i*o);return n}function p(t,e){if("above"===e)for(var n=0;n<t;n++){var o=it[n];"enter"===o.state&&h(D[n],"down"),"up"===o.direction&&(m(D[n],"down",!1),h(D[n],"down"))}else if("below"===e)for(var i=it.length-1;i>t;i--){var r=it[i];"enter"===r.state&&h(D[i],"up"),"down"===r.direction&&(m(D[i],"up",!1),h(D[i],"up"))}}function m(t,e,n){void 0===n&&(n=!0);var o=r(t),i={element:t,index:o,direction:e};it[o].direction=e,it[o].state="enter",nt&&n&&"down"===e&&p(o,"above"),nt&&n&&"up"===e&&p(o,"below"),R.stepEnter&&"function"==typeof R.stepEnter&&!ct[o]&&(R.stepEnter(i,it),Z&&u({id:F,index:o,state:"enter"}),ot&&(ct[o]=!0)),tt&&("down"===e?v(t,0):v(t,1))}function h(t,e){var n=r(t),o={element:t,index:n,direction:e};it[n].direction=e,it[n].state="exit",tt&&("down"===e?v(t,1):v(t,0)),R.stepExit&&"function"==typeof R.stepExit&&(R.stepExit(o,it),Z&&u({id:F,index:n,state:"exit"}))}function v(t,e){var n=r(t),o={element:t,index:n,progress:e};R.stepProgress&&"function"==typeof R.stepProgress&&R.stepProgress(o)}function g(){var t={direction:st};rt.direction=st,rt.state="enter",R.containerEnter&&"function"==typeof R.containerEnter&&R.containerEnter(t)}function b(){var t={direction:st};rt.direction=st,rt.state="exit",R.containerExit&&"function"==typeof R.containerExit&&R.containerExit(t)}function y(t){s(),t.forEach(function(t){var e=t.isIntersecting,n=t.boundingClientRect,o=t.target,i=n.bottom,a=n.height,s=i-$,c=r(o),u=it[c];s>=-z&&(e&&"down"===st&&"enter"!==u.state?m(o,st):e||"up"!==st||"enter"!==u.state?!e&&s>=a&&"down"===st&&"enter"===u.state&&h(o,st):h(o,st))})}function w(t){s(),t.forEach(function(t){var e=t.isIntersecting,n=t.boundingClientRect,o=t.target,i=n.bottom,a=n.height,s=i-$,c=r(o),u=it[c];s>=-z&&s<a&&e&&"up"===st&&"enter"!==u.state?m(o,st):s<=z&&!e&&"down"===st&&"enter"===u.state&&h(o,st)})}function x(t){s(),t.forEach(function(t){var e=t.isIntersecting,n=t.target,o=r(n),i=it[o];e&&"down"===st&&"enter"!==i.state&&"down"!==i.direction&&(m(n,"down"),h(n,"down"))})}function k(t){s(),t.forEach(function(t){var e=t.isIntersecting,n=t.target,o=r(n),i=it[o];e&&"up"===st&&"enter"!==i.state&&"up"!==i.direction&&(m(n,"up"),h(n,"up"))})}function _(t){s(),t.forEach(function(t){var e=t.isIntersecting,n=t.intersectionRatio,o=t.boundingClientRect,i=t.target,r=o.bottom,a=r-$;e&&a>=-z&&v(i,+n.toFixed(3))})}function E(t){s();var e=t[0],n=e.isIntersecting,o=e.boundingClientRect;o.top;o.bottom>-z&&(n?g(st):"enter"===rt.state&&b(st))}function O(t){s();var e=t[0],n=e.isIntersecting;e.boundingClientRect.top<z&&(n?g(st):"enter"===rt.state&&b(st))}function T(){B.top&&B.top.unobserve(I);var t={root:null,rootMargin:V+"px 0px -"+V+"px 0px",threshold:0};B.top=new IntersectionObserver(E,t),B.top.observe(I)}function A(){B.bottom&&B.bottom.unobserve(I);var t={root:null,rootMargin:"-"+K.height+"px 0px "+K.height+"px 0px",threshold:0};B.bottom=new IntersectionObserver(O,t),B.bottom.observe(I)}function M(){B.stepAbove&&B.stepAbove.forEach(function(t){return t.disconnect()}),B.stepAbove=D.map(function(t,e){var n=X[e],o=-V+$,i=n+"px 0px "+o+"px 0px",r={root:null,rootMargin:i,threshold:0},a=new IntersectionObserver(y,r);return a.observe(t),a})}function C(){B.stepBelow&&B.stepBelow.forEach(function(t){return t.disconnect()}),B.stepBelow=D.map(function(t,e){var n=-$,o=U-V+X[e]+$,i=n+"px 0px "+o+"px 0px",r={root:null,rootMargin:i,threshold:0},a=new IntersectionObserver(w,r);return a.observe(t),a})}function j(){B.viewportAbove&&B.viewportAbove.forEach(function(t){return t.disconnect()}),B.viewportAbove=D.map(function(t,e){var n=G[e],o=-(V-$+X[e]),i=n+"px 0px "+o+"px 0px",r={root:null,rootMargin:i,threshold:0},a=new IntersectionObserver(x,r);return a.observe(t),a})}function S(){B.viewportBelow&&B.viewportBelow.forEach(function(t){return t.disconnect()}),B.viewportBelow=D.map(function(t,e){var n=-($+X[e]),o=U-G[e]-X[e]-$,i=n+"px 0px "+o+"px 0px",r={root:null,rootMargin:i,threshold:0},a=new IntersectionObserver(k,r);return a.observe(t),a})}function L(){B.stepProgress&&B.stepProgress.forEach(function(t){return t.disconnect()}),B.stepProgress=D.map(function(t,e){var n=X[e]-$,o=-V+$,i=n+"px 0px "+o+"px 0px",r=d(X[e]),a={root:null,rootMargin:i,threshold:r},s=new IntersectionObserver(_,a);return s.observe(t),s})}function P(){j(),S(),M(),C(),tt&&L(),I&&W&&(T(),A())}function H(){D.forEach(function(t,e){return t.setAttribute("data-scrollama-index",e)})}function N(){it=D.map(function(){return{direction:null,state:null}}),rt={direction:null,state:null}}function q(){Z&&a({id:F,stepEl:D,offsetVal:Y})}var z=1,R={},B={},I=null,W=null,D=null,F=null,Y=0,$=0,V=0,U=0,X=null,G=null,K=null,J=!1,Q=!1,Z=!1,tt=!1,et=0,nt=!1,ot=!1,it=null,rt=null,at=-1,st=null,ct=[],ut={};return ut.setup=function(o){var i=o.container,r=o.graphic,a=o.step,s=o.offset;void 0===s&&(s=.5);var c=o.progress;void 0===c&&(c=!1);var u=o.threshold;void 0===u&&(u=4);var d=o.debug;void 0===d&&(d=!1);var p=o.order;void 0===p&&(p=!0);var m=o.once;return void 0===m&&(m=!1),F=t(),D=n(a),I=i?e(i):null,W=r?e(r):null,D.length?(Z=d,tt=c,nt=p,ot=m,ut.offsetTrigger(s),et=Math.max(1,+u),J=!0,q(),H(),N(),f(),l(!0),ut):(console.error("scrollama error: no step elements"),ut)},ut.resize=function(){return f(),ut},ut.enable=function(){return l(!0),ut},ut.disable=function(){return l(!1),ut},ut.destroy=function(){l(!1),Object.keys(R).forEach(function(t){return R[t]=null}),Object.keys(B).forEach(function(t){return B[t]=null})},ut.offsetTrigger=function(t){return t&&!isNaN(t)?(Y=Math.min(Math.max(0,t),1),ut):Y},ut.onStepEnter=function(t){return R.stepEnter=t,ut},ut.onStepExit=function(t){return R.stepExit=t,ut},ut.onStepProgress=function(t){return R.stepProgress=t,ut},ut.onContainerEnter=function(t){return R.containerEnter=t,ut},ut.onContainerExit=function(t){return R.containerExit=t,ut},ut}return f})},function(t,e){!function(e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}function r(t){return parseFloat(t)||0}function a(t){for(var e=0;t;)e+=t.offsetTop,t=t.offsetParent;return e}function s(){function t(){e.pageXOffset!=p.left?(p.top=e.pageYOffset,p.left=e.pageXOffset,v.refreshAll()):e.pageYOffset!=p.top&&(p.top=e.pageYOffset,p.left=e.pageXOffset,m.forEach(function(t){return t._recalcPosition()}))}function o(){r=setInterval(function(){m.forEach(function(t){return t._fastCheck()})},500)}function i(){clearInterval(r)}if(!l){l=!0,t(),e.addEventListener("scroll",t),e.addEventListener("resize",v.refreshAll),e.addEventListener("orientationchange",v.refreshAll);var r=void 0,a=void 0,s=void 0;"hidden"in n?(a="hidden",s="visibilitychange"):"webkitHidden"in n&&(a="webkitHidden",s="webkitvisibilitychange"),s?(n[a]||o(),n.addEventListener(s,function(){n[a]?i():o()})):o()}}var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=!1,f=void 0!==e;f&&e.getComputedStyle?function(){var t=n.createElement("div");["","-webkit-","-moz-","-ms-"].some(function(e){try{t.style.position=e+"sticky"}catch(t){}return""!=t.style.position})&&(u=!0)}():u=!0;var l=!1,d="undefined"!=typeof ShadowRoot,p={top:null,left:null},m=[],h=function(){function t(e){if(o(this,t),!(e instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(m.some(function(t){return t._node===e}))throw new Error("Stickyfill is already applied to this node");this._node=e,this._stickyMode=null,this._active=!1,m.push(this),this.refresh()}return c(t,[{key:"refresh",value:function(){if(!u&&!this._removed){this._active&&this._deactivate();var t=this._node,o=getComputedStyle(t),s={position:o.position,top:o.top,display:o.display,marginTop:o.marginTop,marginBottom:o.marginBottom,marginLeft:o.marginLeft,marginRight:o.marginRight,cssFloat:o.cssFloat};if(!isNaN(parseFloat(s.top))&&"table-cell"!=s.display&&"none"!=s.display){this._active=!0;var c=t.style.position;"sticky"!=o.position&&"-webkit-sticky"!=o.position||(t.style.position="static");var f=t.parentNode,l=d&&f instanceof ShadowRoot?f.host:f,p=t.getBoundingClientRect(),m=l.getBoundingClientRect(),h=getComputedStyle(l);this._parent={node:l,styles:{position:l.style.position},offsetHeight:l.offsetHeight},this._offsetToWindow={left:p.left,right:n.documentElement.clientWidth-p.right},this._offsetToParent={top:p.top-m.top-r(h.borderTopWidth),left:p.left-m.left-r(h.borderLeftWidth),right:-p.right+m.right-r(h.borderRightWidth)},this._styles={position:c,top:t.style.top,bottom:t.style.bottom,left:t.style.left,right:t.style.right,width:t.style.width,marginTop:t.style.marginTop,marginLeft:t.style.marginLeft,marginRight:t.style.marginRight};var v=r(s.top);this._limits={start:p.top+e.pageYOffset-v,end:m.top+e.pageYOffset+l.offsetHeight-r(h.borderBottomWidth)-t.offsetHeight-v-r(s.marginBottom)};var g=h.position;"absolute"!=g&&"relative"!=g&&(l.style.position="relative"),this._recalcPosition();var b=this._clone={};b.node=n.createElement("div"),i(b.node.style,{width:p.right-p.left+"px",height:p.bottom-p.top+"px",marginTop:s.marginTop,marginBottom:s.marginBottom,marginLeft:s.marginLeft,marginRight:s.marginRight,cssFloat:s.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),f.insertBefore(b.node,t),b.docOffsetTop=a(b.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var t=p.top<=this._limits.start?"start":p.top>=this._limits.end?"end":"middle";if(this._stickyMode!=t){switch(t){case"start":i(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":i(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":i(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=t}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(a(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var t=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,i(this._node.style,this._styles),delete this._styles,m.some(function(e){return e!==t&&e._parent&&e._parent.node===t._parent.node})||i(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var t=this;this._deactivate(),m.some(function(e,n){if(e._node===t._node)return m.splice(n,1),!0}),this._removed=!0}}]),t}(),v={stickies:m,Sticky:h,forceSticky:function(){u=!1,s(),this.refreshAll()},addOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}for(var e=0;e<m.length;e++)if(m[e]._node===t)return m[e];return new h(t)},add:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length){for(var e=[],n=0;n<t.length;n++){(function(n){var o=t[n];o instanceof HTMLElement?m.some(function(t){if(t._node===o)return e.push(t),!0})||e.push(new h(o)):e.push(void 0)})(n)}return e}},refreshAll:function(){m.forEach(function(t){return t.refresh()})},removeOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}m.some(function(e){if(e._node===t)return e.remove(),!0})},remove:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length)for(var e=0;e<t.length;e++)!function(e){var n=t[e];m.some(function(t){if(t._node===n)return t.remove(),!0})}(e)},removeAll:function(){for(;m.length;)m[0].remove()}};u||s(),void 0!==t&&t.exports?t.exports=v:f&&(e.Stickyfill=v)}(window,document)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){for(var e=t.length,n=[],o=0;o<e;o+=1)n.push(t[o]);return n},i=function(t){return document.querySelector(t)},r=function(t){return o(document.querySelectorAll(t))},a=function(t,e){return o(t.querySelectorAll(e))},s=function(t,e){return t.classList.remove(e)},c=function(t,e){return t.classList.add(e)},u=function(t,e){return t.classList.contains(e)},f=function(t){document.body.scrollTop?document.body.scrollTop=t.offsetTop+1:document.documentElement.scrollTop=t.offsetTop+1};e.select=i,e.selectAll=r,e.find=a,e.removeClass=s,e.addClass=c,e.hasClass=u,e.jumpTo=f},function(t,e,n){"use strict";function o(){if(r.default.any())for(var t=document.styleSheets.length-1;t>=0;t-=1){var e=document.styleSheets[t];if(e.cssRules)for(var n=e.cssRules.length-1;n>=0;n-=1){var o=e.cssRules[n];o.selectorText&&(o.selectorText=o.selectorText.replace(":hover",":active"))}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=n(8),r=function(t){return t&&t.__esModule?t:{default:t}}(i)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return o.android()||o.blackberry()||o.ios()||o.opera()||o.windows()}};e.default=o},function(t,e,n){"use strict";function o(t){for(var e=t.facebook,n=t.twitter,o=t.mail,i=window.location.href,r=document.title,a=encodeURIComponent(r),s="mailto:?subject="+a+"&body="+a+"%0A%0A"+i,c=document.querySelectorAll(o),u=0;u<c.length;u+=1)c[u].setAttribute("href",s);for(var f="https://www.facebook.com/sharer/sharer.php?u="+encodeURI(i),l=document.querySelectorAll(e),d=0;d<l.length;d+=1)l[d].setAttribute("href",f);for(var p="https://twitter.com/intent/tweet?text="+a+"&via=BostonGlobe&url="+encodeURI(i),m=document.querySelectorAll(n),h=0;h<m.length;h+=1)m[h].setAttribute("href",p)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o}]);