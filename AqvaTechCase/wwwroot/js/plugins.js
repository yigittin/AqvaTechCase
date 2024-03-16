"use strict";
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var i in r)("object"==typeof exports?exports:t)[i]=r[i]}}(self,(function(){return function(){var t={5529:function(t){t.exports=function(){"use strict";function t(t){return getComputedStyle(t)}function e(t,e){for(var r in e){var i=e[r];"number"==typeof i&&(i+="px"),t.style[r]=i}return t}function r(t){var e=document.createElement("div");return e.className=t,e}var i="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function n(t,e){if(!i)throw new Error("No element matching method supported");return i.call(t,e)}function l(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function o(t,e){return Array.prototype.filter.call(t.children,(function(t){return n(t,e)}))}var s="ps",a="ps__rtl",c={thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},h={focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}},u={x:null,y:null};function d(t,e){var r=t.element.classList,i=h.scrolling(e);r.contains(i)?clearTimeout(u[e]):r.add(i)}function f(t,e){u[e]=setTimeout((function(){return t.isAlive&&t.element.classList.remove(h.scrolling(e))}),t.settings.scrollingThreshold)}var p=function(t){this.element=t,this.handlers={}},b={isEmpty:{configurable:!0}};p.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},p.prototype.unbind=function(t,e){var r=this;this.handlers[t]=this.handlers[t].filter((function(i){return!(!e||i===e)||(r.element.removeEventListener(t,i,!1),!1)}))},p.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},b.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every((function(e){return 0===t.handlers[e].length}))},Object.defineProperties(p.prototype,b);var g=function(){this.eventElements=[]};function v(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function m(t,e,r,i,n){var l;if(void 0===i&&(i=!0),void 0===n&&(n=!1),"top"===e)l=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");l=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(t,e,r,i,n){var l=r[0],o=r[1],s=r[2],a=r[3],c=r[4],h=r[5];void 0===i&&(i=!0),void 0===n&&(n=!1);var u=t.element;t.reach[a]=null,u[s]<1&&(t.reach[a]="start"),u[s]>t[l]-t[o]-1&&(t.reach[a]="end"),e&&(u.dispatchEvent(v("ps-scroll-"+a)),e<0?u.dispatchEvent(v("ps-scroll-"+c)):e>0&&u.dispatchEvent(v("ps-scroll-"+h)),i&&function(t,e){d(t,e),f(t,e)}(t,a)),t.reach[a]&&(e||n)&&u.dispatchEvent(v("ps-"+a+"-reach-"+t.reach[a]))}(t,r,l,i,n)}function Y(t){return parseInt(t,10)||0}g.prototype.eventElement=function(t){var e=this.eventElements.filter((function(e){return e.element===t}))[0];return e||(e=new p(t),this.eventElements.push(e)),e},g.prototype.bind=function(t,e,r){this.eventElement(t).bind(e,r)},g.prototype.unbind=function(t,e,r){var i=this.eventElement(t);i.unbind(e,r),i.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(i),1)},g.prototype.unbindAll=function(){this.eventElements.forEach((function(t){return t.unbindAll()})),this.eventElements=[]},g.prototype.once=function(t,e,r){var i=this.eventElement(t),n=function(t){i.unbind(e,n),r(t)};i.bind(e,n)};var y={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function X(t){var r=t.element,i=Math.floor(r.scrollTop),n=r.getBoundingClientRect();t.containerWidth=Math.round(n.width),t.containerHeight=Math.round(n.height),t.contentWidth=r.scrollWidth,t.contentHeight=r.scrollHeight,r.contains(t.scrollbarXRail)||(o(r,c.rail("x")).forEach((function(t){return l(t)})),r.appendChild(t.scrollbarXRail)),r.contains(t.scrollbarYRail)||(o(r,c.rail("y")).forEach((function(t){return l(t)})),r.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=w(t,Y(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=Y((t.negativeScrollAdjustment+r.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=w(t,Y(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=Y(i*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),function(t,r){var i={width:r.railXWidth},n=Math.floor(t.scrollTop);r.isRtl?i.left=r.negativeScrollAdjustment+t.scrollLeft+r.containerWidth-r.contentWidth:i.left=t.scrollLeft,r.isScrollbarXUsingBottom?i.bottom=r.scrollbarXBottom-n:i.top=r.scrollbarXTop+n,e(r.scrollbarXRail,i);var l={top:n,height:r.railYHeight};r.isScrollbarYUsingRight?r.isRtl?l.right=r.contentWidth-(r.negativeScrollAdjustment+t.scrollLeft)-r.scrollbarYRight-r.scrollbarYOuterWidth-9:l.right=r.scrollbarYRight-t.scrollLeft:r.isRtl?l.left=r.negativeScrollAdjustment+t.scrollLeft+2*r.containerWidth-r.contentWidth-r.scrollbarYLeft-r.scrollbarYOuterWidth:l.left=r.scrollbarYLeft+t.scrollLeft,e(r.scrollbarYRail,l),e(r.scrollbarX,{left:r.scrollbarXLeft,width:r.scrollbarXWidth-r.railBorderXWidth}),e(r.scrollbarY,{top:r.scrollbarYTop,height:r.scrollbarYHeight-r.railBorderYWidth})}(r,t),t.scrollbarXActive?r.classList.add(h.active("x")):(r.classList.remove(h.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,r.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?r.classList.add(h.active("y")):(r.classList.remove(h.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,r.scrollTop=0)}function w(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function W(t,e){var r=e[0],i=e[1],n=e[2],l=e[3],o=e[4],s=e[5],a=e[6],c=e[7],u=e[8],p=t.element,b=null,g=null,v=null;function m(e){e.touches&&e.touches[0]&&(e[n]=e.touches[0].pageY),p[a]=b+v*(e[n]-g),d(t,c),X(t),e.stopPropagation(),e.type.startsWith("touch")&&e.changedTouches.length>1&&e.preventDefault()}function Y(){f(t,c),t[u].classList.remove(h.clicking),t.event.unbind(t.ownerDocument,"mousemove",m)}function y(e,o){b=p[a],o&&e.touches&&(e[n]=e.touches[0].pageY),g=e[n],v=(t[i]-t[r])/(t[l]-t[s]),o?t.event.bind(t.ownerDocument,"touchmove",m):(t.event.bind(t.ownerDocument,"mousemove",m),t.event.once(t.ownerDocument,"mouseup",Y),e.preventDefault()),t[u].classList.add(h.clicking),e.stopPropagation()}t.event.bind(t[o],"mousedown",(function(t){y(t)})),t.event.bind(t[o],"touchstart",(function(t){y(t,!0)}))}var L={"click-rail":function(t){t.element,t.event.bind(t.scrollbarY,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarYRail,"mousedown",(function(e){var r=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;t.element.scrollTop+=r*t.containerHeight,X(t),e.stopPropagation()})),t.event.bind(t.scrollbarX,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarXRail,"mousedown",(function(e){var r=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=r*t.containerWidth,X(t),e.stopPropagation()}))},"drag-thumb":function(t){W(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),W(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(t){var e=t.element;t.event.bind(t.ownerDocument,"keydown",(function(r){if(!(r.isDefaultPrevented&&r.isDefaultPrevented()||r.defaultPrevented)&&(n(e,":hover")||n(t.scrollbarX,":focus")||n(t.scrollbarY,":focus"))){var i=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(i){if("IFRAME"===i.tagName)i=i.contentDocument.activeElement;else for(;i.shadowRoot;)i=i.shadowRoot.activeElement;if(n(s=i,"input,[contenteditable]")||n(s,"select,[contenteditable]")||n(s,"textarea,[contenteditable]")||n(s,"button,[contenteditable]"))return}var l=0,o=0;switch(r.which){case 37:l=r.metaKey?-t.contentWidth:r.altKey?-t.containerWidth:-30;break;case 38:o=r.metaKey?t.contentHeight:r.altKey?t.containerHeight:30;break;case 39:l=r.metaKey?t.contentWidth:r.altKey?t.containerWidth:30;break;case 40:o=r.metaKey?-t.contentHeight:r.altKey?-t.containerHeight:-30;break;case 32:o=r.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:o=t.containerHeight;break;case 34:o=-t.containerHeight;break;case 36:o=t.contentHeight;break;case 35:o=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==l||t.settings.suppressScrollY&&0!==o||(e.scrollTop-=o,e.scrollLeft+=l,X(t),function(r,i){var n=Math.floor(e.scrollTop);if(0===r){if(!t.scrollbarYActive)return!1;if(0===n&&i>0||n>=t.contentHeight-t.containerHeight&&i<0)return!t.settings.wheelPropagation}var l=e.scrollLeft;if(0===i){if(!t.scrollbarXActive)return!1;if(0===l&&r<0||l>=t.contentWidth-t.containerWidth&&r>0)return!t.settings.wheelPropagation}return!0}(l,o)&&r.preventDefault())}var s}))},wheel:function(e){var r=e.element;function i(i){var n=function(t){var e=t.deltaX,r=-1*t.deltaY;return void 0!==e&&void 0!==r||(e=-1*t.wheelDeltaX/6,r=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,r*=10),e!=e&&r!=r&&(e=0,r=t.wheelDelta),t.shiftKey?[-r,-e]:[e,r]}(i),l=n[0],o=n[1];if(!function(e,i,n){if(!y.isWebKit&&r.querySelector("select:focus"))return!0;if(!r.contains(e))return!1;for(var l=e;l&&l!==r;){if(l.classList.contains(c.consuming))return!0;var o=t(l);if(n&&o.overflowY.match(/(scroll|auto)/)){var s=l.scrollHeight-l.clientHeight;if(s>0&&(l.scrollTop>0&&n<0||l.scrollTop<s&&n>0))return!0}if(i&&o.overflowX.match(/(scroll|auto)/)){var a=l.scrollWidth-l.clientWidth;if(a>0&&(l.scrollLeft>0&&i<0||l.scrollLeft<a&&i>0))return!0}l=l.parentNode}return!1}(i.target,l,o)){var s=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(o?r.scrollTop-=o*e.settings.wheelSpeed:r.scrollTop+=l*e.settings.wheelSpeed,s=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(l?r.scrollLeft+=l*e.settings.wheelSpeed:r.scrollLeft-=o*e.settings.wheelSpeed,s=!0):(r.scrollTop-=o*e.settings.wheelSpeed,r.scrollLeft+=l*e.settings.wheelSpeed),X(e),(s=s||function(t,i){var n=Math.floor(r.scrollTop),l=0===r.scrollTop,o=n+r.offsetHeight===r.scrollHeight,s=0===r.scrollLeft,a=r.scrollLeft+r.offsetWidth===r.scrollWidth;return!(Math.abs(i)>Math.abs(t)?l||o:s||a)||!e.settings.wheelPropagation}(l,o))&&!i.ctrlKey&&(i.stopPropagation(),i.preventDefault())}}void 0!==window.onwheel?e.event.bind(r,"wheel",i):void 0!==window.onmousewheel&&e.event.bind(r,"mousewheel",i)},touch:function(e){if(y.supportsTouch||y.supportsIePointer){var r=e.element,i={},n=0,l={},o=null;y.supportsTouch?(e.event.bind(r,"touchstart",u),e.event.bind(r,"touchmove",d),e.event.bind(r,"touchend",f)):y.supportsIePointer&&(window.PointerEvent?(e.event.bind(r,"pointerdown",u),e.event.bind(r,"pointermove",d),e.event.bind(r,"pointerup",f)):window.MSPointerEvent&&(e.event.bind(r,"MSPointerDown",u),e.event.bind(r,"MSPointerMove",d),e.event.bind(r,"MSPointerUp",f)))}function s(t,i){r.scrollTop-=i,r.scrollLeft-=t,X(e)}function a(t){return t.targetTouches?t.targetTouches[0]:t}function h(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function u(t){if(h(t)){var e=a(t);i.pageX=e.pageX,i.pageY=e.pageY,n=(new Date).getTime(),null!==o&&clearInterval(o)}}function d(o){if(h(o)){var u=a(o),d={pageX:u.pageX,pageY:u.pageY},f=d.pageX-i.pageX,p=d.pageY-i.pageY;if(function(e,i,n){if(!r.contains(e))return!1;for(var l=e;l&&l!==r;){if(l.classList.contains(c.consuming))return!0;var o=t(l);if(n&&o.overflowY.match(/(scroll|auto)/)){var s=l.scrollHeight-l.clientHeight;if(s>0&&(l.scrollTop>0&&n<0||l.scrollTop<s&&n>0))return!0}if(i&&o.overflowX.match(/(scroll|auto)/)){var a=l.scrollWidth-l.clientWidth;if(a>0&&(l.scrollLeft>0&&i<0||l.scrollLeft<a&&i>0))return!0}l=l.parentNode}return!1}(o.target,f,p))return;s(f,p),i=d;var b=(new Date).getTime(),g=b-n;g>0&&(l.x=f/g,l.y=p/g,n=b),function(t,i){var n=Math.floor(r.scrollTop),l=r.scrollLeft,o=Math.abs(t),s=Math.abs(i);if(s>o){if(i<0&&n===e.contentHeight-e.containerHeight||i>0&&0===n)return 0===window.scrollY&&i>0&&y.isChrome}else if(o>s&&(t<0&&l===e.contentWidth-e.containerWidth||t>0&&0===l))return!0;return!0}(f,p)&&o.preventDefault()}}function f(){e.settings.swipeEasing&&(clearInterval(o),o=setInterval((function(){e.isInitialized?clearInterval(o):l.x||l.y?Math.abs(l.x)<.01&&Math.abs(l.y)<.01?clearInterval(o):e.element?(s(30*l.x,30*l.y),l.x*=.8,l.y*=.8):clearInterval(o):clearInterval(o)}),10))}}},R=function(i,n){var l=this;if(void 0===n&&(n={}),"string"==typeof i&&(i=document.querySelector(i)),!i||!i.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var o in this.element=i,i.classList.add(s),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},n)this.settings[o]=n[o];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var u,d,f=function(){return i.classList.add(h.focus)},p=function(){return i.classList.remove(h.focus)};this.isRtl="rtl"===t(i).direction,!0===this.isRtl&&i.classList.add(a),this.isNegativeScroll=(u=i.scrollLeft,null,i.scrollLeft=-1,d=i.scrollLeft<0,i.scrollLeft=u,d),this.negativeScrollAdjustment=this.isNegativeScroll?i.scrollWidth-i.clientWidth:0,this.event=new g,this.ownerDocument=i.ownerDocument||document,this.scrollbarXRail=r(c.rail("x")),i.appendChild(this.scrollbarXRail),this.scrollbarX=r(c.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",f),this.event.bind(this.scrollbarX,"blur",p),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var b=t(this.scrollbarXRail);this.scrollbarXBottom=parseInt(b.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=Y(b.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=Y(b.borderLeftWidth)+Y(b.borderRightWidth),e(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=Y(b.marginLeft)+Y(b.marginRight),e(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=r(c.rail("y")),i.appendChild(this.scrollbarYRail),this.scrollbarY=r(c.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",f),this.event.bind(this.scrollbarY,"blur",p),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var v=t(this.scrollbarYRail);this.scrollbarYRight=parseInt(v.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=Y(v.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(e){var r=t(e);return Y(r.width)+Y(r.paddingLeft)+Y(r.paddingRight)+Y(r.borderLeftWidth)+Y(r.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=Y(v.borderTopWidth)+Y(v.borderBottomWidth),e(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=Y(v.marginTop)+Y(v.marginBottom),e(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:i.scrollLeft<=0?"start":i.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:i.scrollTop<=0?"start":i.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(t){return L[t](l)})),this.lastScrollTop=Math.floor(i.scrollTop),this.lastScrollLeft=i.scrollLeft,this.event.bind(this.element,"scroll",(function(t){return l.onScroll(t)})),X(this)};return R.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,e(this.scrollbarXRail,{display:"block"}),e(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=Y(t(this.scrollbarXRail).marginLeft)+Y(t(this.scrollbarXRail).marginRight),this.railYMarginHeight=Y(t(this.scrollbarYRail).marginTop)+Y(t(this.scrollbarYRail).marginBottom),e(this.scrollbarXRail,{display:"none"}),e(this.scrollbarYRail,{display:"none"}),X(this),m(this,"top",0,!1,!0),m(this,"left",0,!1,!0),e(this.scrollbarXRail,{display:""}),e(this.scrollbarYRail,{display:""}))},R.prototype.onScroll=function(t){this.isAlive&&(X(this),m(this,"top",this.element.scrollTop-this.lastScrollTop),m(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},R.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),l(this.scrollbarX),l(this.scrollbarY),l(this.scrollbarXRail),l(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},R.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(t){return!t.match(/^ps([-_].+|)$/)})).join(" ")},R}()}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var l=e[i]={exports:{}};return t[i].call(l.exports,l,l.exports,r),l.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.r(i),r.d(i,{PerfectScrollbar:function(){return e.a}});var t=r(5529),e=r.n(t)}(),i}()}));

/*! NProgress 0.2.0 (c) 2013, Rico Sta. Cruz
 *  http://ricostacruz.com/nprogress
 */
!function (n, e) { "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : n.NProgress = e() }(this, function () { function n(n, e, t) { return e > n ? e : n > t ? t : n } function e(n) { return 100 * (-1 + n) } function t(n, t, r) { var i; return i = "translate3d" === c.positionUsing ? { transform: "translate3d(" + e(n) + "%,0,0)" } : "translate" === c.positionUsing ? { transform: "translate(" + e(n) + "%,0)" } : { "margin-left": e(n) + "%" }, i.transition = "all " + t + "ms " + r, i } function r(n, e) { var t = "string" == typeof n ? n : o(n); return t.indexOf(" " + e + " ") >= 0 } function i(n, e) { var t = o(n), i = t + e; r(t, e) || (n.className = i.substring(1)) } function s(n, e) { var t, i = o(n); r(n, e) && (t = i.replace(" " + e + " ", " "), n.className = t.substring(1, t.length - 1)) } function o(n) { return (" " + (n.className || "") + " ").replace(/\s+/gi, " ") } function a(n) { n && n.parentNode && n.parentNode.removeChild(n) } var u = {}; u.version = "0.2.0"; var c = u.settings = { minimum: .08, easing: "ease", positionUsing: "", speed: 200, trickle: !0, trickleRate: .02, trickleSpeed: 800, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>' }; u.configure = function (n) { var e, t; for (e in n) t = n[e], void 0 !== t && n.hasOwnProperty(e) && (c[e] = t); return this }, u.status = null, u.set = function (e) { var r = u.isStarted(); e = n(e, c.minimum, 1), u.status = 1 === e ? null : e; var i = u.render(!r), s = i.querySelector(c.barSelector), o = c.speed, a = c.easing; return i.offsetWidth, l(function (n) { "" === c.positionUsing && (c.positionUsing = u.getPositioningCSS()), f(s, t(e, o, a)), 1 === e ? (f(i, { transition: "none", opacity: 1 }), i.offsetWidth, setTimeout(function () { f(i, { transition: "all " + o + "ms linear", opacity: 0 }), setTimeout(function () { u.remove(), n() }, o) }, o)) : setTimeout(n, o) }), this }, u.isStarted = function () { return "number" == typeof u.status }, u.start = function () { u.status || u.set(0); var n = function () { setTimeout(function () { u.status && (u.trickle(), n()) }, c.trickleSpeed) }; return c.trickle && n(), this }, u.done = function (n) { return n || u.status ? u.inc(.3 + .5 * Math.random()).set(1) : this }, u.inc = function (e) { var t = u.status; return t ? ("number" != typeof e && (e = (1 - t) * n(Math.random() * t, .1, .95)), t = n(t + e, 0, .994), u.set(t)) : u.start() }, u.trickle = function () { return u.inc(Math.random() * c.trickleRate) }, function () { var n = 0, e = 0; u.promise = function (t) { return t && "resolved" !== t.state() ? (0 === e && u.start(), n++, e++, t.always(function () { e--, 0 === e ? (n = 0, u.done()) : u.set((n - e) / n) }), this) : this } }(), u.render = function (n) { if (u.isRendered()) return document.getElementById("nprogress"); i(document.documentElement, "nprogress-busy"); var t = document.createElement("div"); t.id = "nprogress", t.innerHTML = c.template; var r, s = t.querySelector(c.barSelector), o = n ? "-100" : e(u.status || 0), l = document.querySelector(c.parent); return f(s, { transition: "all 0 linear", transform: "translate3d(" + o + "%,0,0)" }), c.showSpinner || (r = t.querySelector(c.spinnerSelector), r && a(r)), l != document.body && i(l, "nprogress-custom-parent"), l.appendChild(t), t }, u.remove = function () { s(document.documentElement, "nprogress-busy"), s(document.querySelector(c.parent), "nprogress-custom-parent"); var n = document.getElementById("nprogress"); n && a(n) }, u.isRendered = function () { return !!document.getElementById("nprogress") }, u.getPositioningCSS = function () { var n = document.body.style, e = "WebkitTransform" in n ? "Webkit" : "MozTransform" in n ? "Moz" : "msTransform" in n ? "ms" : "OTransform" in n ? "O" : ""; return e + "Perspective" in n ? "translate3d" : e + "Transform" in n ? "translate" : "margin" }; var l = function () { function n() { var t = e.shift(); t && t(n) } var e = []; return function (t) { e.push(t), 1 == e.length && n() } }(), f = function () { function n(n) { return n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (n, e) { return e.toUpperCase() }) } function e(n) { var e = document.body.style; if (n in e) return n; for (var t, r = i.length, s = n.charAt(0).toUpperCase() + n.slice(1); r--;)if (t = i[r] + s, t in e) return t; return n } function t(t) { return t = n(t), s[t] || (s[t] = e(t)) } function r(n, e, r) { e = t(e), n.style[e] = r } var i = ["Webkit", "O", "Moz", "ms"], s = {}; return function (n, e) { var t, i, s = arguments; if (2 == s.length) for (t in e) i = e[t], void 0 !== i && e.hasOwnProperty(t) && r(n, t, i); else r(n, s[1], s[2]) } }(); return u });

/*! 
 *  SweetAlert 2.1.2
 *  https://sweetalert2.github.io/
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Sweetalert2=t()}(this,function(){"use strict";const q="SweetAlert2:",H=e=>e.charAt(0).toUpperCase()+e.slice(1),i=e=>Array.prototype.slice.call(e),a=e=>{console.warn("".concat(q," ").concat("object"==typeof e?e.join(" "):e))},l=e=>{console.error("".concat(q," ").concat(e))},V=[],N=(e,t)=>{e='"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'),V.includes(e)||(V.push(e),a(e))},R=e=>"function"==typeof e?e():e,F=e=>e&&"function"==typeof e.toPromise,u=e=>F(e)?e.toPromise():Promise.resolve(e),U=e=>e&&Promise.resolve(e)===e,r={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},W=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],z={},_=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],K=e=>Object.prototype.hasOwnProperty.call(r,e),Y=e=>-1!==W.indexOf(e),Z=e=>z[e],J=e=>{!e.backdrop&&e.allowOutsideClick&&a('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const n in e)t=n,K(t)||a('Unknown parameter "'.concat(t,'"')),e.toast&&(t=n,_.includes(t)&&a('The parameter "'.concat(t,'" is incompatible with toasts'))),t=n,Z(t)&&N(t,Z(t));var t};var e=e=>{const t={};for(const n in e)t[e[n]]="swal2-"+e[n];return t};const p=e(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),o=e(["success","warning","info","question","error"]),m=()=>document.body.querySelector(".".concat(p.container)),t=e=>{const t=m();return t?t.querySelector(e):null},n=e=>t(".".concat(e)),g=()=>n(p.popup),s=()=>n(p.icon),X=()=>n(p.title),$=()=>n(p["html-container"]),G=()=>n(p.image),Q=()=>n(p["progress-steps"]),ee=()=>n(p["validation-message"]),h=()=>t(".".concat(p.actions," .").concat(p.confirm)),f=()=>t(".".concat(p.actions," .").concat(p.deny));const d=()=>t(".".concat(p.loader)),b=()=>t(".".concat(p.actions," .").concat(p.cancel)),v=()=>n(p.actions),te=()=>n(p.footer),ne=()=>n(p["timer-progress-bar"]),oe=()=>n(p.close),ie=()=>{const e=i(g().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e,t)=>{e=parseInt(e.getAttribute("tabindex")),t=parseInt(t.getAttribute("tabindex"));return t<e?1:e<t?-1:0});var t=i(g().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(e=>"-1"!==e.getAttribute("tabindex"));return(t=>{const n=[];for(let e=0;e<t.length;e++)-1===n.indexOf(t[e])&&n.push(t[e]);return n})(e.concat(t)).filter(e=>E(e))},ae=()=>w(document.body,p.shown)&&!w(document.body,p["toast-shown"])&&!w(document.body,p["no-backdrop"]),re=()=>g()&&w(g(),p.toast);function se(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];const n=ne();E(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition="width ".concat(e/1e3,"s linear"),n.style.width="0%"},10))}const c={previousBodyPadding:null},y=(t,e)=>{if(t.textContent="",e){const n=new DOMParser,o=n.parseFromString(e,"text/html");i(o.querySelector("head").childNodes).forEach(e=>{t.appendChild(e)}),i(o.querySelector("body").childNodes).forEach(e=>{t.appendChild(e)})}},w=(t,e)=>{if(!e)return!1;var n=e.split(/\s+/);for(let e=0;e<n.length;e++)if(!t.classList.contains(n[e]))return!1;return!0},ce=(t,n)=>{i(t.classList).forEach(e=>{Object.values(p).includes(e)||Object.values(o).includes(e)||Object.values(n.showClass).includes(e)||t.classList.remove(e)})},C=(e,t,n)=>{if(ce(e,t),t.customClass&&t.customClass[n]){if("string"!=typeof t.customClass[n]&&!t.customClass[n].forEach)return a("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(typeof t.customClass[n],'"'));A(e,t.customClass[n])}},le=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(".".concat(p.popup," > .").concat(p[t]));case"checkbox":return e.querySelector(".".concat(p.popup," > .").concat(p.checkbox," input"));case"radio":return e.querySelector(".".concat(p.popup," > .").concat(p.radio," input:checked"))||e.querySelector(".".concat(p.popup," > .").concat(p.radio," input:first-child"));case"range":return e.querySelector(".".concat(p.popup," > .").concat(p.range," input"));default:return e.querySelector(".".concat(p.popup," > .").concat(p.input))}},ue=e=>{var t;e.focus(),"file"!==e.type&&(t=e.value,e.value="",e.value=t)},de=(e,t,n)=>{e&&t&&(t="string"==typeof t?t.split(/\s+/).filter(Boolean):t).forEach(t=>{Array.isArray(e)?e.forEach(e=>{n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)})},A=(e,t)=>{de(e,t,!0)},k=(e,t)=>{de(e,t,!1)},P=(e,t)=>{var n=i(e.childNodes);for(let e=0;e<n.length;e++)if(w(n[e],t))return n[e]},pe=(e,t,n)=>{(n=n==="".concat(parseInt(n))?parseInt(n):n)||0===parseInt(n)?e.style[t]="number"==typeof n?"".concat(n,"px"):n:e.style.removeProperty(t)},B=function(e){e.style.display=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"flex"},x=e=>{e.style.display="none"},me=(e,t,n,o)=>{const i=e.querySelector(t);i&&(i.style[n]=o)},ge=(e,t,n)=>{t?B(e,n):x(e)},E=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),he=()=>!E(h())&&!E(f())&&!E(b()),fe=e=>!!(e.scrollHeight>e.clientHeight),be=e=>{const t=window.getComputedStyle(e);var e=parseFloat(t.getPropertyValue("animation-duration")||"0"),n=parseFloat(t.getPropertyValue("transition-duration")||"0");return 0<e||0<n},ve=()=>"undefined"==typeof window||"undefined"==typeof document,ye=100,T={},we=()=>{T.previousActiveElement&&T.previousActiveElement.focus?(T.previousActiveElement.focus(),T.previousActiveElement=null):document.body&&document.body.focus()},Ce=o=>new Promise(e=>{if(!o)return e();var t=window.scrollX,n=window.scrollY;T.restoreFocusTimeout=setTimeout(()=>{we(),e()},ye),window.scrollTo(t,n)}),Ae='\n <div aria-labelledby="'.concat(p.title,'" aria-describedby="').concat(p["html-container"],'" class="').concat(p.popup,'" tabindex="-1">\n   <button type="button" class="').concat(p.close,'"></button>\n   <ul class="').concat(p["progress-steps"],'"></ul>\n   <div class="').concat(p.icon,'"></div>\n   <img class="').concat(p.image,'" />\n   <h2 class="').concat(p.title,'" id="').concat(p.title,'"></h2>\n   <div class="').concat(p["html-container"],'" id="').concat(p["html-container"],'"></div>\n   <input class="').concat(p.input,'" />\n   <input type="file" class="').concat(p.file,'" />\n   <div class="').concat(p.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(p.select,'"></select>\n   <div class="').concat(p.radio,'"></div>\n   <label for="').concat(p.checkbox,'" class="').concat(p.checkbox,'">\n     <input type="checkbox" />\n     <span class="').concat(p.label,'"></span>\n   </label>\n   <textarea class="').concat(p.textarea,'"></textarea>\n   <div class="').concat(p["validation-message"],'" id="').concat(p["validation-message"],'"></div>\n   <div class="').concat(p.actions,'">\n     <div class="').concat(p.loader,'"></div>\n     <button type="button" class="').concat(p.confirm,'"></button>\n     <button type="button" class="').concat(p.deny,'"></button>\n     <button type="button" class="').concat(p.cancel,'"></button>\n   </div>\n   <div class="').concat(p.footer,'"></div>\n   <div class="').concat(p["timer-progress-bar-container"],'">\n     <div class="').concat(p["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),ke=()=>{const e=m();return!!e&&(e.remove(),k([document.documentElement,document.body],[p["no-backdrop"],p["toast-shown"],p["has-column"]]),!0)},S=()=>{T.currentInstance.resetValidationMessage()},Pe=()=>{const e=g(),t=P(e,p.input),n=P(e,p.file),o=e.querySelector(".".concat(p.range," input")),i=e.querySelector(".".concat(p.range," output")),a=P(e,p.select),r=e.querySelector(".".concat(p.checkbox," input")),s=P(e,p.textarea);t.oninput=S,n.onchange=S,a.onchange=S,r.onchange=S,s.oninput=S,o.oninput=()=>{S(),i.value=o.value},o.onchange=()=>{S(),o.nextSibling.value=o.value}},Be=e=>"string"==typeof e?document.querySelector(e):e,xe=e=>{const t=g();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},Ee=e=>{"rtl"===window.getComputedStyle(e).direction&&A(m(),p.rtl)},Te=(e,t)=>{if(e instanceof HTMLElement)t.appendChild(e);else if("object"==typeof e){var n=e,o=t;if(n.jquery)Se(o,n);else y(o,n.toString())}else e&&y(t,e)},Se=(t,n)=>{if(t.textContent="",0 in n)for(let e=0;e in n;e++)t.appendChild(n[e].cloneNode(!0));else t.appendChild(n.cloneNode(!0))},Le=(()=>{if(ve())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&void 0!==e.style[n])return t[n];return!1})(),Oe=(e,t)=>{var n,o,i,a,r,s=v(),c=d();(t.showConfirmButton||t.showDenyButton||t.showCancelButton?B:x)(s),C(s,t,"actions"),s=s,n=c,o=t,i=h(),a=f(),r=b(),je(i,"confirm",o),je(a,"deny",o),je(r,"cancel",o),function(e,t,n,o){if(!o.buttonsStyling)return k([e,t,n],p.styled);A([e,t,n],p.styled),o.confirmButtonColor&&(e.style.backgroundColor=o.confirmButtonColor,A(e,p["default-outline"]));o.denyButtonColor&&(t.style.backgroundColor=o.denyButtonColor,A(t,p["default-outline"]));o.cancelButtonColor&&(n.style.backgroundColor=o.cancelButtonColor,A(n,p["default-outline"]))}(i,a,r,o),o.reverseButtons&&(o.toast?(s.insertBefore(r,i),s.insertBefore(a,i)):(s.insertBefore(r,n),s.insertBefore(a,n),s.insertBefore(i,n))),y(c,t.loaderHtml),C(c,t,"loader")};function je(e,t,n){ge(e,n["show".concat(H(t),"Button")],"inline-block"),y(e,n["".concat(t,"ButtonText")]),e.setAttribute("aria-label",n["".concat(t,"ButtonAriaLabel")]),e.className=p[t],C(e,n,"".concat(t,"Button")),A(e,n["".concat(t,"ButtonClass")])}const Me=(e,t)=>{var n,o,i=m();i&&(o=i,"string"==typeof(n=t.backdrop)?o.style.background=n:n||A([document.documentElement,document.body],p["no-backdrop"]),o=i,(n=t.position)in p?A(o,p[n]):(a('The "position" parameter is not valid, defaulting to "center"'),A(o,p.center)),n=i,(o=t.grow)&&"string"==typeof o&&(o="grow-".concat(o))in p&&A(n,p[o]),C(i,t,"container"))};var L={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const De=["input","file","range","select","radio","checkbox","textarea"],Ie=(e,r)=>{const s=g();var t,e=L.innerParams.get(e);const c=!e||r.input!==e.input;De.forEach(e=>{var t=p[e];const n=P(s,t);{var o=r.inputAttributes;const i=le(g(),e);if(i){qe(i);for(const a in o)i.setAttribute(a,o[a])}}n.className=t,c&&x(n)}),r.input&&(c&&(e=>{if(!O[e.input])return l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));const t=Ne(e.input),n=O[e.input](t,e);B(n),setTimeout(()=>{ue(n)})})(r),e=r,t=Ne(e.input),e.customClass&&A(t,e.customClass.input))},qe=t=>{for(let e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},He=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},Ve=(e,t,n)=>{if(n.inputLabel){e.id=p.input;const i=document.createElement("label");var o=p["input-label"];i.setAttribute("for",e.id),i.className=o,A(i,n.customClass.inputLabel),i.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",i)}},Ne=e=>{e=p[e]||p.input;return P(g(),e)},O={},Re=(O.text=O.email=O.password=O.number=O.tel=O.url=(e,t)=>("string"==typeof t.inputValue||"number"==typeof t.inputValue?e.value=t.inputValue:U(t.inputValue)||a('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue,'"')),Ve(e,e,t),He(e,t),e.type=t.input,e),O.file=(e,t)=>(Ve(e,e,t),He(e,t),e),O.range=(e,t)=>{const n=e.querySelector("input"),o=e.querySelector("output");return n.value=t.inputValue,n.type=t.input,o.value=t.inputValue,Ve(n,e,t),e},O.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const n=document.createElement("option");y(n,t.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return Ve(e,e,t),e},O.radio=e=>(e.textContent="",e),O.checkbox=(e,t)=>{const n=le(g(),"checkbox");n.value="1",n.id=p.checkbox,n.checked=Boolean(t.inputValue);var o=e.querySelector("span");return y(o,t.inputPlaceholder),e},O.textarea=(n,e)=>{n.value=e.inputValue,He(n,e),Ve(n,n,e);return setTimeout(()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(g()).width);new MutationObserver(()=>{var e=n.offsetWidth+(e=n,parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight));e>t?g().style.width="".concat(e,"px"):g().style.width=null}).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n},(e,t)=>{const n=$();C(n,t,"htmlContainer"),t.html?(Te(t.html,n),B(n,"block")):t.text?(n.textContent=t.text,B(n,"block")):x(n),Ie(e,t)}),Fe=(e,t)=>{var n=te();ge(n,t.footer),t.footer&&Te(t.footer,n),C(n,t,"footer")},Ue=(e,t)=>{const n=oe();y(n,t.closeButtonHtml),C(n,t,"closeButton"),ge(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel)},We=(e,t)=>{var e=L.innerParams.get(e),n=s();return e&&t.icon===e.icon?(Ze(n,t),void ze(n,t)):t.icon||t.iconHtml?t.icon&&-1===Object.keys(o).indexOf(t.icon)?(l('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon,'"')),x(n)):(B(n),Ze(n,t),ze(n,t),void A(n,t.showClass.icon)):x(n)},ze=(e,t)=>{for(const n in o)t.icon!==n&&k(e,o[n]);A(e,o[t.icon]),Je(e,t),_e(),C(e,t,"icon")},_e=()=>{const e=g();var t=window.getComputedStyle(e).getPropertyValue("background-color");const n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<n.length;e++)n[e].style.backgroundColor=t},Ke='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',Ye='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',Ze=(e,t)=>{var n;e.textContent="",t.iconHtml?y(e,Xe(t.iconHtml)):"success"===t.icon?y(e,Ke):"error"===t.icon?y(e,Ye):(n={question:"?",warning:"!",info:"i"},y(e,Xe(n[t.icon])))},Je=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])me(e,n,"backgroundColor",t.iconColor);me(e,".swal2-success-ring","borderColor",t.iconColor)}},Xe=e=>'<div class="'.concat(p["icon-content"],'">').concat(e,"</div>"),$e=(e,t)=>{const n=G();if(!t.imageUrl)return x(n);B(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt),pe(n,"width",t.imageWidth),pe(n,"height",t.imageHeight),n.className=p.image,C(n,t,"image")},Ge=(e,o)=>{const i=Q();if(!o.progressSteps||0===o.progressSteps.length)return x(i);B(i),i.textContent="",o.currentProgressStep>=o.progressSteps.length&&a("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),o.progressSteps.forEach((e,t)=>{e=e,n=document.createElement("li"),A(n,p["progress-step"]),y(n,e);var n,e=n;i.appendChild(e),t===o.currentProgressStep&&A(e,p["active-progress-step"]),t!==o.progressSteps.length-1&&(n=(e=>{const t=document.createElement("li");return A(t,p["progress-step-line"]),e.progressStepsDistance&&(t.style.width=e.progressStepsDistance),t})(o),i.appendChild(n))})},Qe=(e,t)=>{const n=X();ge(n,t.title||t.titleText,"block"),t.title&&Te(t.title,n),t.titleText&&(n.innerText=t.titleText),C(n,t,"title")},et=(e,t)=>{var n=m();const o=g();t.toast?(pe(n,"width",t.width),o.style.width="100%",o.insertBefore(d(),s())):pe(o,"width",t.width),pe(o,"padding",t.padding),t.color&&(o.style.color=t.color),t.background&&(o.style.background=t.background),x(ee());n=o;(n.className="".concat(p.popup," ").concat(E(n)?t.showClass.popup:""),t.toast)?(A([document.documentElement,document.body],p["toast-shown"]),A(n,p.toast)):A(n,p.modal);C(n,t,"popup"),"string"==typeof t.customClass&&A(n,t.customClass);t.icon&&A(n,p["icon-".concat(t.icon)])},tt=(e,t)=>{et(e,t),Me(e,t),Ge(e,t),We(e,t),$e(e,t),Qe(e,t),Ue(e,t),Re(e,t),Oe(e,t),Fe(e,t),"function"==typeof t.didRender&&t.didRender(g())},j=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),nt=()=>{const e=i(document.body.children);e.forEach(e=>{e===m()||e.contains(m())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},ot=()=>{const e=i(document.body.children);e.forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},it=["swal-title","swal-html","swal-footer"],at=e=>{const n={};return i(e.querySelectorAll("swal-param")).forEach(e=>{M(e,["name","value"]);var t=e.getAttribute("name"),e=e.getAttribute("value");"boolean"==typeof r[t]&&"false"===e&&(n[t]=!1),"object"==typeof r[t]&&(n[t]=JSON.parse(e))}),n},rt=e=>{const n={};return i(e.querySelectorAll("swal-button")).forEach(e=>{M(e,["type","color","aria-label"]);var t=e.getAttribute("type");n["".concat(t,"ButtonText")]=e.innerHTML,n["show".concat(H(t),"Button")]=!0,e.hasAttribute("color")&&(n["".concat(t,"ButtonColor")]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(n["".concat(t,"ButtonAriaLabel")]=e.getAttribute("aria-label"))}),n},st=e=>{const t={},n=e.querySelector("swal-image");return n&&(M(n,["src","width","height","alt"]),n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt"))),t},ct=e=>{const t={},n=e.querySelector("swal-icon");return n&&(M(n,["type","color"]),n.hasAttribute("type")&&(t.icon=n.getAttribute("type")),n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color")),t.iconHtml=n.innerHTML),t},lt=e=>{const n={},t=e.querySelector("swal-input");t&&(M(t,["type","label","placeholder","value"]),n.input=t.getAttribute("type")||"text",t.hasAttribute("label")&&(n.inputLabel=t.getAttribute("label")),t.hasAttribute("placeholder")&&(n.inputPlaceholder=t.getAttribute("placeholder")),t.hasAttribute("value")&&(n.inputValue=t.getAttribute("value")));e=e.querySelectorAll("swal-input-option");return e.length&&(n.inputOptions={},i(e).forEach(e=>{M(e,["value"]);var t=e.getAttribute("value"),e=e.innerHTML;n.inputOptions[t]=e})),n},ut=(e,t)=>{const n={};for(const o in t){const i=t[o],a=e.querySelector(i);a&&(M(a,[]),n[i.replace(/^swal-/,"")]=a.innerHTML.trim())}return n},dt=e=>{const t=it.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);i(e.children).forEach(e=>{e=e.tagName.toLowerCase();-1===t.indexOf(e)&&a("Unrecognized element <".concat(e,">"))})},M=(t,n)=>{i(t.attributes).forEach(e=>{-1===n.indexOf(e.name)&&a(['Unrecognized attribute "'.concat(e.name,'" on <').concat(t.tagName.toLowerCase(),">."),"".concat(n.length?"Allowed attributes are: ".concat(n.join(", ")):"To set the value, use HTML within the element.")])})};var pt={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function mt(e){(t=e).inputValidator||Object.keys(pt).forEach(e=>{t.input===e&&(t.inputValidator=pt[e])}),e.showLoaderOnConfirm&&!e.preConfirm&&a("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),(n=e).target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(a('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />"));var t,n=e,e=ke();if(ve())l("SweetAlert2 requires document to initialize");else{const o=document.createElement("div"),i=(o.className=p.container,e&&A(o,p["no-transition"]),y(o,Ae),Be(n.target));i.appendChild(o),xe(n),Ee(i),Pe()}}class gt{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(e){var t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const ht=()=>{null===c.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(c.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(c.previousBodyPadding+(()=>{const e=document.createElement("div");e.className=p["scrollbar-measure"],document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t})(),"px"))},ft=()=>{null!==c.previousBodyPadding&&(document.body.style.paddingRight="".concat(c.previousBodyPadding,"px"),c.previousBodyPadding=null)},bt=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!w(document.body,p.iosfix)){var e,t=document.body.scrollTop;document.body.style.top="".concat(-1*t,"px"),A(document.body,p.iosfix);{const n=m();let t;n.ontouchstart=e=>{t=vt(e)},n.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}}{const o=navigator.userAgent,i=!!o.match(/iPad/i)||!!o.match(/iPhone/i),a=!!o.match(/WebKit/i),r=i&&a&&!o.match(/CriOS/i);r&&(e=44,g().scrollHeight>window.innerHeight-44&&(m().style.paddingBottom="".concat(44,"px")))}}},vt=e=>{var t,n=e.target,o=m();return!((t=e).touches&&t.touches.length&&"stylus"===t.touches[0].touchType||(t=e).touches&&1<t.touches.length)&&(n===o||!(fe(o)||"INPUT"===n.tagName||"TEXTAREA"===n.tagName||fe($())&&$().contains(n)))},yt=()=>{var e;w(document.body,p.iosfix)&&(e=parseInt(document.body.style.top,10),k(document.body,p.iosfix),document.body.style.top="",document.body.scrollTop=-1*e)},wt=10,Ct=e=>{const t=g();if(e.target===t){const n=m();t.removeEventListener(Le,Ct),n.style.overflowY="auto"}},At=(e,t)=>{Le&&be(t)?(e.style.overflowY="hidden",t.addEventListener(Le,Ct)):e.style.overflowY="auto"},kt=(e,t,n)=>{bt(),t&&"hidden"!==n&&ht(),setTimeout(()=>{e.scrollTop=0})},Pt=(e,t,n)=>{A(e,n.showClass.backdrop),t.style.setProperty("opacity","0","important"),B(t,"grid"),setTimeout(()=>{A(t,n.showClass.popup),t.style.removeProperty("opacity")},wt),A([document.documentElement,document.body],p.shown),n.heightAuto&&n.backdrop&&!n.toast&&A([document.documentElement,document.body],p["height-auto"])},D=e=>{let t=g();t||new wn,t=g();var n=d();if(re())x(s());else{var o=t;const i=v(),a=d();!e&&E(h())&&(e=h());B(i),e&&(x(e),a.setAttribute("data-button-to-replace",e.className));a.parentNode.insertBefore(a,e),A([o,i],p.loading)}B(n),t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()},Bt=(t,n)=>{const o=g(),i=e=>Et[n.input](o,Tt(e),n);F(n.inputOptions)||U(n.inputOptions)?(D(h()),u(n.inputOptions).then(e=>{t.hideLoading(),i(e)})):"object"==typeof n.inputOptions?i(n.inputOptions):l("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions))},xt=(t,n)=>{const o=t.getInput();x(o),u(n.inputValue).then(e=>{o.value="number"===n.input?parseFloat(e)||0:"".concat(e),B(o),o.focus(),t.hideLoading()}).catch(e=>{l("Error in inputValue promise: ".concat(e)),o.value="",B(o),o.focus(),t.hideLoading()})},Et={select:(e,t,i)=>{const a=P(e,p.select),r=(e,t,n)=>{const o=document.createElement("option");o.value=n,y(o,t),o.selected=St(n,i.inputValue),e.appendChild(o)};t.forEach(e=>{var t=e[0];const n=e[1];if(Array.isArray(n)){const o=document.createElement("optgroup");o.label=t,o.disabled=!1,a.appendChild(o),n.forEach(e=>r(o,e[1],e[0]))}else r(a,n,t)}),a.focus()},radio:(e,t,a)=>{const r=P(e,p.radio),n=(t.forEach(e=>{var t=e[0],e=e[1];const n=document.createElement("input"),o=document.createElement("label"),i=(n.type="radio",n.name=p.radio,n.value=t,St(t,a.inputValue)&&(n.checked=!0),document.createElement("span"));y(i,e),i.className=p.label,o.appendChild(n),o.appendChild(i),r.appendChild(o)}),r.querySelectorAll("input"));n.length&&n[0].focus()}},Tt=n=>{const o=[];return"undefined"!=typeof Map&&n instanceof Map?n.forEach((e,t)=>{let n=e;"object"==typeof n&&(n=Tt(n)),o.push([t,n])}):Object.keys(n).forEach(e=>{let t=n[e];"object"==typeof t&&(t=Tt(t)),o.push([e,t])}),o},St=(e,t)=>t&&t.toString()===e.toString();function Lt(){var e,t=L.innerParams.get(this);if(t){const n=L.domCache.get(this);x(n.loader),re()?t.icon&&B(s()):(t=n,(e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length?B(e[0],"inline-block"):he()&&x(t.actions)),k([n.popup,n.actions],p.loading),n.popup.removeAttribute("aria-busy"),n.popup.removeAttribute("data-loading"),n.confirmButton.disabled=!1,n.denyButton.disabled=!1,n.cancelButton.disabled=!1}}var Ot={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const jt=()=>h()&&h().click();const Mt=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},Dt=(e,t,n)=>{const o=ie();if(o.length)return(t+=n)===o.length?t=0:-1===t&&(t=o.length-1),o[t].focus();g().focus()},It=["ArrowRight","ArrowDown"],qt=["ArrowLeft","ArrowUp"],Ht=(e,n,t)=>{var o=L.innerParams.get(e);if(o&&(!n.isComposing&&229!==n.keyCode))if(o.stopKeydownPropagation&&n.stopPropagation(),"Enter"===n.key)e=e,s=n,i=o,R(i.allowEnterKey)&&s.target&&e.getInput()&&s.target.outerHTML===e.getInput().outerHTML&&(["textarea","file"].includes(i.input)||(jt(),s.preventDefault()));else if("Tab"===n.key){e=n;var i=o;var a=e.target,r=ie();let t=-1;for(let e=0;e<r.length;e++)if(a===r[e]){t=e;break}e.shiftKey?Dt(i,t,-1):Dt(i,t,1);e.stopPropagation(),e.preventDefault()}else if([...It,...qt].includes(n.key)){var s=n.key;const l=h(),u=f(),d=b();if([l,u,d].includes(document.activeElement)){var c=It.includes(s)?"nextElementSibling":"previousElementSibling";let t=document.activeElement;for(let e=0;e<v().children.length;e++){if(!(t=t[c]))return;if(E(t)&&t instanceof HTMLButtonElement)break}t instanceof HTMLButtonElement&&t.focus()}}else if("Escape"===n.key){e=n,n=o,o=t;if(R(n.allowEscapeKey)){e.preventDefault();o(j.esc)}}};function Vt(e,t,n,o){re()?Ut(e,o):(Ce(n).then(()=>Ut(e,o)),Mt(T)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),ae()&&(ft(),yt(),ot()),k([document.documentElement,document.body],[p.shown,p["height-auto"],p["no-backdrop"],p["toast-shown"]])}function Nt(e){e=void 0!==(n=e)?Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},n):{isConfirmed:!1,isDenied:!1,isDismissed:!0};const t=Ot.swalPromiseResolve.get(this);var n=(e=>{const t=g();if(!t)return false;const n=L.innerParams.get(e);if(!n||w(t,n.hideClass.popup))return false;k(t,n.showClass.popup),A(t,n.hideClass.popup);const o=m();return k(o,n.showClass.backdrop),A(o,n.hideClass.backdrop),Ft(e,t,n),true})(this);this.isAwaitingPromise()?e.isDismissed||(Rt(this),t(e)):n&&t(e)}const Rt=e=>{e.isAwaitingPromise()&&(L.awaitingPromise.delete(e),L.innerParams.get(e)||e._destroy())},Ft=(e,t,n)=>{var o,i,a,r=m(),s=Le&&be(t);"function"==typeof n.willClose&&n.willClose(t),s?(s=e,o=t,t=r,i=n.returnFocus,a=n.didClose,T.swalCloseEventFinishedCallback=Vt.bind(null,s,t,i,a),o.addEventListener(Le,function(e){e.target===o&&(T.swalCloseEventFinishedCallback(),delete T.swalCloseEventFinishedCallback)})):Vt(e,r,n.returnFocus,n.didClose)},Ut=(e,t)=>{setTimeout(()=>{"function"==typeof t&&t.bind(e.params)(),e._destroy()})};function Wt(e,t,n){const o=L.domCache.get(e);t.forEach(e=>{o[e].disabled=n})}function zt(e,t){if(!e)return!1;if("radio"===e.type){const n=e.parentNode.parentNode,o=n.querySelectorAll("input");for(let e=0;e<o.length;e++)o[e].disabled=t}else e.disabled=t}const _t=e=>{e.isAwaitingPromise()?(Kt(L,e),L.awaitingPromise.set(e,!0)):(Kt(Ot,e),Kt(L,e))},Kt=(e,t)=>{for(const n in e)e[n].delete(t)};e=Object.freeze({hideLoading:Lt,disableLoading:Lt,getInput:function(e){var t=L.innerParams.get(e||this);return(e=L.domCache.get(e||this))?le(e.popup,t.input):null},close:Nt,isAwaitingPromise:function(){return!!L.awaitingPromise.get(this)},rejectPromise:function(e){const t=Ot.swalPromiseReject.get(this);Rt(this),t&&t(e)},handleAwaitingPromise:Rt,closePopup:Nt,closeModal:Nt,closeToast:Nt,enableButtons:function(){Wt(this,["confirmButton","denyButton","cancelButton"],!1)},disableButtons:function(){Wt(this,["confirmButton","denyButton","cancelButton"],!0)},enableInput:function(){return zt(this.getInput(),!1)},disableInput:function(){return zt(this.getInput(),!0)},showValidationMessage:function(e){const t=L.domCache.get(this);var n=L.innerParams.get(this);y(t.validationMessage,e),t.validationMessage.className=p["validation-message"],n.customClass&&n.customClass.validationMessage&&A(t.validationMessage,n.customClass.validationMessage),B(t.validationMessage);const o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedby",p["validation-message"]),ue(o),A(o,p.inputerror))},resetValidationMessage:function(){var e=L.domCache.get(this);e.validationMessage&&x(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),k(t,p.inputerror))},getProgressSteps:function(){return L.domCache.get(this).progressSteps},update:function(e){var t=g(),n=L.innerParams.get(this);if(!t||w(t,n.hideClass.popup))return a("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");t=(t=>{const n={};return Object.keys(t).forEach(e=>{if(Y(e))n[e]=t[e];else a('Invalid parameter to update: "'.concat(e,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))}),n})(e),n=Object.assign({},n,t),tt(this,n),L.innerParams.set(this,n),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})},_destroy:function(){var e=L.domCache.get(this);const t=L.innerParams.get(this);t?(e.popup&&T.swalCloseEventFinishedCallback&&(T.swalCloseEventFinishedCallback(),delete T.swalCloseEventFinishedCallback),T.deferDisposalTimer&&(clearTimeout(T.deferDisposalTimer),delete T.deferDisposalTimer),"function"==typeof t.didDestroy&&t.didDestroy(),e=this,_t(e),delete e.params,delete T.keydownHandler,delete T.keydownTarget,delete T.currentInstance):_t(this)}});const Yt=(e,t)=>{var n=L.innerParams.get(e);if(!n.input)return l('The "input" parameter is needed to be set when using returnInputValueOn'.concat(H(t)));var o=((e,t)=>{const n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return n.checked?1:0;case"radio":return(o=n).checked?o.value:null;case"file":return(o=n).files.length?null!==o.getAttribute("multiple")?o.files:o.files[0]:null;default:return t.inputAutoTrim?n.value.trim():n.value}var o})(e,n);if(n.inputValidator){var i=e;var a=o;var r=t;const s=L.innerParams.get(i),c=(i.disableInput(),Promise.resolve().then(()=>u(s.inputValidator(a,s.validationMessage))));c.then(e=>{i.enableButtons(),i.enableInput(),e?i.showValidationMessage(e):("deny"===r?Zt:$t)(i,a)})}else e.getInput().checkValidity()?("deny"===t?Zt:$t)(e,o):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},Zt=(t,n)=>{const e=L.innerParams.get(t||void 0);if(e.showLoaderOnDeny&&D(f()),e.preDeny){L.awaitingPromise.set(t||void 0,!0);const o=Promise.resolve().then(()=>u(e.preDeny(n,e.validationMessage)));o.then(e=>{!1===e?(t.hideLoading(),Rt(t)):t.closePopup({isDenied:!0,value:void 0===e?n:e})}).catch(e=>Xt(t||void 0,e))}else t.closePopup({isDenied:!0,value:n})},Jt=(e,t)=>{e.closePopup({isConfirmed:!0,value:t})},Xt=(e,t)=>{e.rejectPromise(t)},$t=(t,n)=>{const e=L.innerParams.get(t||void 0);if(e.showLoaderOnConfirm&&D(),e.preConfirm){t.resetValidationMessage(),L.awaitingPromise.set(t||void 0,!0);const o=Promise.resolve().then(()=>u(e.preConfirm(n,e.validationMessage)));o.then(e=>{E(ee())||!1===e?(t.hideLoading(),Rt(t)):Jt(t,void 0===e?n:e)}).catch(e=>Xt(t||void 0,e))}else Jt(t,n)},Gt=(n,e,o)=>{e.popup.onclick=()=>{var e,t=L.innerParams.get(n);t&&((e=t).showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton||t.timer||t.input)||o(j.close)}};let Qt=!1;const en=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Qt=!0)}}},tn=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,e.target!==t.popup&&!t.popup.contains(e.target)||(Qt=!0)}}},nn=(n,o,i)=>{o.container.onclick=e=>{var t=L.innerParams.get(n);Qt?Qt=!1:e.target===o.container&&R(t.allowOutsideClick)&&i(j.backdrop)}},on=e=>"object"==typeof e&&e.jquery,an=e=>e instanceof Element||on(e);const rn=()=>{if(T.timeout){{const n=ne();var e=parseInt(window.getComputedStyle(n).width),t=(n.style.removeProperty("transition"),n.style.width="100%",parseInt(window.getComputedStyle(n).width)),e=e/t*100;n.style.removeProperty("transition"),n.style.width="".concat(e,"%")}return T.timeout.stop()}},sn=()=>{var e;if(T.timeout)return e=T.timeout.start(),se(e),e};let cn=!1;const ln={};const un=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const o in ln){var n=e.getAttribute(o);if(n)return void ln[o].fire({template:n})}};var dn=Object.freeze({isValidParameter:K,isUpdatableParameter:Y,isDeprecatedParameter:Z,argsToParams:n=>{const o={};return"object"!=typeof n[0]||an(n[0])?["title","html","icon"].forEach((e,t)=>{t=n[t];"string"==typeof t||an(t)?o[e]=t:void 0!==t&&l("Unexpected type of ".concat(e,'! Expected "string" or "Element", got ').concat(typeof t))}):Object.assign(o,n[0]),o},isVisible:()=>E(g()),clickConfirm:jt,clickDeny:()=>f()&&f().click(),clickCancel:()=>b()&&b().click(),getContainer:m,getPopup:g,getTitle:X,getHtmlContainer:$,getImage:G,getIcon:s,getInputLabel:()=>n(p["input-label"]),getCloseButton:oe,getActions:v,getConfirmButton:h,getDenyButton:f,getCancelButton:b,getLoader:d,getFooter:te,getTimerProgressBar:ne,getFocusableElements:ie,getValidationMessage:ee,isLoading:()=>g().hasAttribute("data-loading"),fire:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new this(...t)},mixin:function(n){class e extends this{_main(e,t){return super._main(e,Object.assign({},n,t))}}return e},showLoading:D,enableLoading:D,getTimerLeft:()=>T.timeout&&T.timeout.getTimerLeft(),stopTimer:rn,resumeTimer:sn,toggleTimer:()=>{var e=T.timeout;return e&&(e.running?rn:sn)()},increaseTimer:e=>{if(T.timeout)return e=T.timeout.increase(e),se(e,!0),e},isTimerRunning:()=>T.timeout&&T.timeout.isRunning(),bindClickHandler:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"data-swal-template";ln[e]=this,cn||(document.body.addEventListener("click",un),cn=!0)}});let pn;class I{constructor(){if("undefined"!=typeof window){pn=this;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(t)),o=(Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}}),this._main(this.params));L.promise.set(this,o)}}_main(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=(J(Object.assign({},t,e)),T.currentInstance&&(T.currentInstance._destroy(),ae()&&ot()),T.currentInstance=this,gn(e,t)),t=(mt(e),Object.freeze(e),T.timeout&&(T.timeout.stop(),delete T.timeout),clearTimeout(T.restoreFocusTimeout),hn(this));return tt(this,e),L.innerParams.set(this,e),mn(this,t,e)}then(e){const t=L.promise.get(this);return t.then(e)}finally(e){const t=L.promise.get(this);return t.finally(e)}}const mn=(l,u,d)=>new Promise((e,t)=>{const n=e=>{l.closePopup({isDismissed:!0,dismiss:e})};var o,i,a;Ot.swalPromiseResolve.set(l,e),Ot.swalPromiseReject.set(l,t),u.confirmButton.onclick=()=>{var e=l,t=L.innerParams.get(e);e.disableButtons(),t.input?Yt(e,"confirm"):$t(e,!0)},u.denyButton.onclick=()=>{var e=l,t=L.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?Yt(e,"deny"):Zt(e,!1)},u.cancelButton.onclick=()=>{var e=l,t=n;e.disableButtons(),t(j.cancel)},u.closeButton.onclick=()=>n(j.close),e=l,t=u,a=n,L.innerParams.get(e).toast?Gt(e,t,a):(en(t),tn(t),nn(e,t,a)),o=l,e=T,t=d,i=n,Mt(e),t.toast||(e.keydownHandler=e=>Ht(o,e,i),e.keydownTarget=t.keydownListenerCapture?window:g(),e.keydownListenerCapture=t.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0),a=l,"select"===(t=d).input||"radio"===t.input?Bt(a,t):["text","email","number","tel","textarea"].includes(t.input)&&(F(t.inputValue)||U(t.inputValue))&&(D(h()),xt(a,t));{var r=d;const s=m(),c=g();"function"==typeof r.willOpen&&r.willOpen(c),e=window.getComputedStyle(document.body).overflowY,Pt(s,c,r),setTimeout(()=>{At(s,c)},wt),ae()&&(kt(s,r.scrollbarPadding,e),nt()),re()||T.previousActiveElement||(T.previousActiveElement=document.activeElement),"function"==typeof r.didOpen&&setTimeout(()=>r.didOpen(c)),k(s,p["no-transition"])}fn(T,d,n),bn(u,d),setTimeout(()=>{u.container.scrollTop=0})}),gn=(e,t)=>{var n=(e=>{e="string"==typeof e.template?document.querySelector(e.template):e.template;if(!e)return{};e=e.content,dt(e),e=Object.assign(at(e),rt(e),st(e),ct(e),lt(e),ut(e,it));return e})(e);const o=Object.assign({},r,t,n,e);return o.showClass=Object.assign({},r.showClass,o.showClass),o.hideClass=Object.assign({},r.hideClass,o.hideClass),o},hn=e=>{var t={popup:g(),container:m(),actions:v(),confirmButton:h(),denyButton:f(),cancelButton:b(),loader:d(),closeButton:oe(),validationMessage:ee(),progressSteps:Q()};return L.domCache.set(e,t),t},fn=(e,t,n)=>{var o=ne();x(o),t.timer&&(e.timeout=new gt(()=>{n("timer"),delete e.timeout},t.timer),t.timerProgressBar&&(B(o),C(o,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&se(t.timer)})))},bn=(e,t)=>{if(!t.toast)return R(t.allowEnterKey)?void(vn(e,t)||Dt(t,-1,1)):yn()},vn=(e,t)=>t.focusDeny&&E(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&E(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!E(e.confirmButton))&&(e.confirmButton.focus(),!0),yn=()=>{document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()},wn=(Object.assign(I.prototype,e),Object.assign(I,dn),Object.keys(e).forEach(e=>{I[e]=function(){if(pn)return pn[e](...arguments)}}),I.DismissReason=j,I.version="11.4.8",I);return wn.default=wn}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);

/*! jQuery Validation Plugin - v1.19.5 - 7/1/2022
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}});var b=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};a.extend(a.expr.pseudos||a.expr[":"],{blank:function(c){return!b(""+a(c).val())},filled:function(c){var d=a(c).val();return null!==d&&!!b(""+d)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return void 0===a?"":a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()&&0===this.pendingRequest?(a(this.currentForm).trigger("submit"),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a["date"===b?"dateISO":c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(a,d){b[a]="function"==typeof d&&"normalizer"!==a?d(c):d}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var a;b[this]&&(Array.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(a=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(a[0]),Number(a[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c},maxlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d<=c},rangelength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c[0]&&d<=c[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var c,d={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,c){var e=a.port;"abort"===a.mode&&(d[e]&&d[e].abort(),d[e]=c)}):(c=a.ajax,a.ajax=function(b){var e=("mode"in b?b:a.ajaxSettings).mode,f=("port"in b?b:a.ajaxSettings).port;return"abort"===e?(d[f]&&d[f].abort(),d[f]=c.apply(this,arguments),d[f]):c.apply(this,arguments)}),a});

//
// SweetAlert2 Initialization
//

// Set Defaults
swal.mixin({
	width: 400,
	heightAuto: false,
	padding: '2.5rem',
	buttonsStyling: false,
	confirmButtonClass: 'btn btn-success',
	confirmButtonColor: null,
	cancelButtonClass: 'btn btn-secondary',
	cancelButtonColor: null
});

(function() {
  var $;

  $ = jQuery;

  $.bootstrapGrowl = function(message, options) {
    var $alert, css, offsetAmount;
    options = $.extend({}, $.bootstrapGrowl.default_options, options);
    $alert = $("<div>");
    $alert.attr("class", "bootstrap-growl alert");
    if (options.type) {
      $alert.addClass("alert-" + options.type);
    }
    if (options.allow_dismiss) {
      $alert.addClass("alert-dismissible");
        $alert.append("<button  class=\"btn-close\" data-bs-dismiss=\"alert\" type=\"button\"></button>");
    }
    $alert.append(message);
    if (options.top_offset) {
      options.offset = {
        from: "top",
        amount: options.top_offset
      };
    }
    offsetAmount = options.offset.amount;
    $(".bootstrap-growl").each(function() {
      return offsetAmount = Math.max(offsetAmount, parseInt($(this).css(options.offset.from)) + $(this).outerHeight() + options.stackup_spacing);
    });
    css = {
      "position": (options.ele === "body" ? "fixed" : "absolute"),
      "margin": 0,
      "z-index": "9999",
      "display": "none"
    };
    css[options.offset.from] = offsetAmount + "px";
    $alert.css(css);
    if (options.width !== "auto") {
      $alert.css("width", options.width + "px");
    }
    $(options.ele).append($alert);
    switch (options.align) {
      case "center":
        $alert.css({
          "left": "50%",
          "margin-left": "-" + ($alert.outerWidth() / 2) + "px"
        });
        break;
      case "left":
        $alert.css("left", "20px");
        break;
      default:
        $alert.css("right", "20px");
    }
    $alert.fadeIn();
    if (options.delay > 0) {
      $alert.delay(options.delay).fadeOut(function() {
        return $(this).alert("close");
      });
    }
    return $alert;
  };

  $.bootstrapGrowl.default_options = {
    ele: "body",
    type: "info",
    offset: {
      from: "top",
      amount: 20
    },
    align: "right",
    width: 250,
    delay: 4000,
    allow_dismiss: true,
    stackup_spacing: 10
  };

}).call(this);

/*!
 * Cropper v3.1.3
 * https://github.com/fengyuanchen/cropper
 *
 * Copyright (c) 2014-2017 Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2017-10-21T10:04:29.734Z
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
        typeof define === 'function' && define.amd ? define(['jquery'], factory) :
            (factory(global.jQuery));
}(this, (function ($) {
    'use strict';

    $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

    var WINDOW = typeof window !== 'undefined' ? window : {};
    var NAMESPACE = 'cropper';

    // Actions
    var ACTION_ALL = 'all';
    var ACTION_CROP = 'crop';
    var ACTION_MOVE = 'move';
    var ACTION_ZOOM = 'zoom';
    var ACTION_EAST = 'e';
    var ACTION_WEST = 'w';
    var ACTION_SOUTH = 's';
    var ACTION_NORTH = 'n';
    var ACTION_NORTH_EAST = 'ne';
    var ACTION_NORTH_WEST = 'nw';
    var ACTION_SOUTH_EAST = 'se';
    var ACTION_SOUTH_WEST = 'sw';

    // Classes
    var CLASS_CROP = NAMESPACE + '-crop';
    var CLASS_DISABLED = NAMESPACE + '-disabled';
    var CLASS_HIDDEN = NAMESPACE + '-hidden';
    var CLASS_HIDE = NAMESPACE + '-hide';
    var CLASS_INVISIBLE = NAMESPACE + '-invisible';
    var CLASS_MODAL = NAMESPACE + '-modal';
    var CLASS_MOVE = NAMESPACE + '-move';

    // Data keys
    var DATA_ACTION = 'action';
    var DATA_PREVIEW = 'preview';

    // Drag modes
    var DRAG_MODE_CROP = 'crop';
    var DRAG_MODE_MOVE = 'move';
    var DRAG_MODE_NONE = 'none';

    // Events
    var EVENT_CROP = 'crop';
    var EVENT_CROP_END = 'cropend';
    var EVENT_CROP_MOVE = 'cropmove';
    var EVENT_CROP_START = 'cropstart';
    var EVENT_DBLCLICK = 'dblclick';
    var EVENT_ERROR = 'error';
    var EVENT_LOAD = 'load';
    var EVENT_POINTER_DOWN = WINDOW.PointerEvent ? 'pointerdown' : 'touchstart mousedown';
    var EVENT_POINTER_MOVE = WINDOW.PointerEvent ? 'pointermove' : 'touchmove mousemove';
    var EVENT_POINTER_UP = WINDOW.PointerEvent ? ' pointerup pointercancel' : 'touchend touchcancel mouseup';
    var EVENT_READY = 'ready';
    var EVENT_RESIZE = 'resize';
    var EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll';
    var EVENT_ZOOM = 'zoom';

    // RegExps
    var REGEXP_ACTIONS = /^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/;
    var REGEXP_DATA_URL = /^data:/;
    var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
    var REGEXP_TAG_NAME = /^(img|canvas)$/i;

    var DEFAULTS = {
        // Define the view mode of the cropper
        viewMode: 0, // 0, 1, 2, 3

        // Define the dragging mode of the cropper
        dragMode: DRAG_MODE_CROP, // 'crop', 'move' or 'none'

        // Define the aspect ratio of the crop box
        aspectRatio: NaN,

        // An object with the previous cropping result data
        data: null,

        // A selector for adding extra containers to preview
        preview: '',

        // Re-render the cropper when resize the window
        responsive: true,

        // Restore the cropped area after resize the window
        restore: true,

        // Check if the current image is a cross-origin image
        checkCrossOrigin: true,

        // Check the current image's Exif Orientation information
        checkOrientation: true,

        // Show the black modal
        modal: true,

        // Show the dashed lines for guiding
        guides: true,

        // Show the center indicator for guiding
        center: true,

        // Show the white modal to highlight the crop box
        highlight: true,

        // Show the grid background
        background: true,

        // Enable to crop the image automatically when initialize
        autoCrop: true,

        // Define the percentage of automatic cropping area when initializes
        autoCropArea: 0.8,

        // Enable to move the image
        movable: true,

        // Enable to rotate the image
        rotatable: true,

        // Enable to scale the image
        scalable: true,

        // Enable to zoom the image
        zoomable: true,

        // Enable to zoom the image by dragging touch
        zoomOnTouch: true,

        // Enable to zoom the image by wheeling mouse
        zoomOnWheel: true,

        // Define zoom ratio when zoom the image by wheeling mouse
        wheelZoomRatio: 0.1,

        // Enable to move the crop box
        cropBoxMovable: true,

        // Enable to resize the crop box
        cropBoxResizable: true,

        // Toggle drag mode between "crop" and "move" when click twice on the cropper
        toggleDragModeOnDblclick: true,

        // Size limitation
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: 200,
        minContainerHeight: 100,

        // Shortcuts of events
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null
    };

    var TEMPLATE = '<div class="cropper-container">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-action="e"></span>' + '<span class="cropper-line line-n" data-action="n"></span>' + '<span class="cropper-line line-w" data-action="w"></span>' + '<span class="cropper-line line-s" data-action="s"></span>' + '<span class="cropper-point point-e" data-action="e"></span>' + '<span class="cropper-point point-n" data-action="n"></span>' + '<span class="cropper-point point-w" data-action="w"></span>' + '<span class="cropper-point point-s" data-action="s"></span>' + '<span class="cropper-point point-ne" data-action="ne"></span>' + '<span class="cropper-point point-nw" data-action="nw"></span>' + '<span class="cropper-point point-sw" data-action="sw"></span>' + '<span class="cropper-point point-se" data-action="se"></span>' + '</div>' + '</div>';

    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    /**
     * Check if the given value is a string.
     * @param {*} value - The value to check.
     * @returns {boolean} Returns `true` if the given value is a string, else `false`.
     */
    function isString(value) {
        return typeof value === 'string';
    }

    /**
     * Check if the given value is not a number.
     */
    var isNaN = Number.isNaN || WINDOW.isNaN;

    /**
     * Check if the given value is a number.
     * @param {*} value - The value to check.
     * @returns {boolean} Returns `true` if the given value is a number, else `false`.
     */
    function isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    /**
     * Check if the given value is undefined.
     * @param {*} value - The value to check.
     * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
     */
    function isUndefined(value) {
        return typeof value === 'undefined';
    }

    /**
     * Takes a function and returns a new one that will always have a particular context.
     * Custom proxy to avoid jQuery's guid.
     * @param {Function} fn - The target function.
     * @param {Object} context - The new context for the function.
     * @returns {Function} The new function.
     */
    function proxy(fn, context) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
        }

        return function () {
            for (var _len2 = arguments.length, args2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args2[_key2] = arguments[_key2];
            }

            return fn.apply(context, args.concat(args2));
        };
    }

    /**
     * Get the own enumerable properties of a given object.
     * @param {Object} obj - The target object.
     * @returns {Array} All the own enumerable properties of the given object.
     */
    var objectKeys = Object.keys || function objectKeys(obj) {
        var keys = [];

        $.each(obj, function (key) {
            keys.push(key);
        });

        return keys;
    };

    var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/i;

    /**
     * Normalize decimal number.
     * Check out {@link http://0.30000000000000004.com/ }
     * @param {number} value - The value to normalize.
     * @param {number} [times=100000000000] - The times for normalizing.
     * @returns {number} Returns the normalized number.
     */
    function normalizeDecimalNumber(value) {
        var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;

        return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
    }

    var location = WINDOW.location;

    var REGEXP_ORIGINS = /^(https?:)\/\/([^:/?#]+):?(\d*)/i;

    /**
     * Check if the given URL is a cross origin URL.
     * @param {string} url - The target URL.
     * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
     */
    function isCrossOriginURL(url) {
        var parts = url.match(REGEXP_ORIGINS);

        return parts && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
    }

    /**
     * Add timestamp to the given URL.
     * @param {string} url - The target URL.
     * @returns {string} The result URL.
     */
    function addTimestamp(url) {
        var timestamp = 'timestamp=' + new Date().getTime();

        return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
    }

    /**
     * Get transform values base on the given object.
     * @param {Object} obj - The target object.
     * @returns {string} A string contains transform values.
     */
    function getTransformValues(_ref) {
        var rotate = _ref.rotate,
            scaleX = _ref.scaleX,
            scaleY = _ref.scaleY,
            translateX = _ref.translateX,
            translateY = _ref.translateY;

        var values = [];

        if (isNumber(translateX) && translateX !== 0) {
            values.push('translateX(' + translateX + 'px)');
        }

        if (isNumber(translateY) && translateY !== 0) {
            values.push('translateY(' + translateY + 'px)');
        }

        // Rotate should come first before scale to match orientation transform
        if (isNumber(rotate) && rotate !== 0) {
            values.push('rotate(' + rotate + 'deg)');
        }

        if (isNumber(scaleX) && scaleX !== 1) {
            values.push('scaleX(' + scaleX + ')');
        }

        if (isNumber(scaleY) && scaleY !== 1) {
            values.push('scaleY(' + scaleY + ')');
        }

        return values.length ? values.join(' ') : 'none';
    }

    var navigator = WINDOW.navigator;

    var IS_SAFARI_OR_UIWEBVIEW = navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);

    /**
     * Get an image's natural sizes.
     * @param {string} image - The target image.
     * @param {Function} callback - The callback function.
     */
    function getImageNaturalSizes(image, callback) {
        // Modern browsers (except Safari)
        if (image.naturalWidth && !IS_SAFARI_OR_UIWEBVIEW) {
            callback(image.naturalWidth, image.naturalHeight);
            return;
        }

        var newImage = document.createElement('img');

        newImage.onload = function () {
            callback(newImage.width, newImage.height);
        };

        newImage.src = image.src;
    }

    /**
     * Get the max ratio of a group of pointers.
     * @param {string} pointers - The target pointers.
     * @returns {number} The result ratio.
     */
    function getMaxZoomRatio(pointers) {
        var pointers2 = $.extend({}, pointers);
        var ratios = [];

        $.each(pointers, function (pointerId, pointer) {
            delete pointers2[pointerId];

            $.each(pointers2, function (pointerId2, pointer2) {
                var x1 = Math.abs(pointer.startX - pointer2.startX);
                var y1 = Math.abs(pointer.startY - pointer2.startY);
                var x2 = Math.abs(pointer.endX - pointer2.endX);
                var y2 = Math.abs(pointer.endY - pointer2.endY);
                var z1 = Math.sqrt(x1 * x1 + y1 * y1);
                var z2 = Math.sqrt(x2 * x2 + y2 * y2);
                var ratio = (z2 - z1) / z1;

                ratios.push(ratio);
            });
        });

        ratios.sort(function (a, b) {
            return Math.abs(a) < Math.abs(b);
        });

        return ratios[0];
    }

    /**
     * Get a pointer from an event object.
     * @param {Object} event - The target event object.
     * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
     * @returns {Object} The result pointer contains start and/or end point coordinates.
     */
    function getPointer(_ref2, endOnly) {
        var pageX = _ref2.pageX,
            pageY = _ref2.pageY;

        var end = {
            endX: pageX,
            endY: pageY
        };

        if (endOnly) {
            return end;
        }

        return $.extend({
            startX: pageX,
            startY: pageY
        }, end);
    }

    /**
     * Get the center point coordinate of a group of pointers.
     * @param {Object} pointers - The target pointers.
     * @returns {Object} The center point coordinate.
     */
    function getPointersCenter(pointers) {
        var pageX = 0;
        var pageY = 0;
        var count = 0;

        $.each(pointers, function (pointerId, _ref3) {
            var startX = _ref3.startX,
                startY = _ref3.startY;

            pageX += startX;
            pageY += startY;
            count += 1;
        });

        pageX /= count;
        pageY /= count;

        return {
            pageX: pageX,
            pageY: pageY
        };
    }

    /**
     * Check if the given value is a finite number.
     */
    var isFinite = Number.isFinite || WINDOW.isFinite;

    /**
     * Get the max sizes in a rectangle under the given aspect ratio.
     * @param {Object} data - The original sizes.
     * @returns {Object} The result sizes.
     */
    function getContainSizes(_ref4) {
        var aspectRatio = _ref4.aspectRatio,
            height = _ref4.height,
            width = _ref4.width;

        var isValidNumber = function isValidNumber(value) {
            return isFinite(value) && value > 0;
        };

        if (isValidNumber(width) && isValidNumber(height)) {
            if (height * aspectRatio > width) {
                height = width / aspectRatio;
            } else {
                width = height * aspectRatio;
            }
        } else if (isValidNumber(width)) {
            height = width / aspectRatio;
        } else if (isValidNumber(height)) {
            width = height * aspectRatio;
        }

        return {
            width: width,
            height: height
        };
    }

    /**
     * Get the new sizes of a rectangle after rotated.
     * @param {Object} data - The original sizes.
     * @returns {Object} The result sizes.
     */
    function getRotatedSizes(_ref5) {
        var width = _ref5.width,
            height = _ref5.height,
            degree = _ref5.degree;

        degree = Math.abs(degree);

        if (degree % 180 === 90) {
            return {
                width: height,
                height: width
            };
        }

        var arc = degree % 90 * Math.PI / 180;
        var sinArc = Math.sin(arc);
        var cosArc = Math.cos(arc);

        return {
            width: width * cosArc + height * sinArc,
            height: width * sinArc + height * cosArc
        };
    }

    /**
     * Get a canvas which drew the given image.
     * @param {HTMLImageElement} image - The image for drawing.
     * @param {Object} imageData - The image data.
     * @param {Object} canvasData - The canvas data.
     * @param {Object} options - The options.
     * @returns {HTMLCanvasElement} The result canvas.
     */
    function getSourceCanvas(image, _ref6, _ref7, _ref8) {
        var imageNaturalWidth = _ref6.naturalWidth,
            imageNaturalHeight = _ref6.naturalHeight,
            _ref6$rotate = _ref6.rotate,
            rotate = _ref6$rotate === undefined ? 0 : _ref6$rotate,
            _ref6$scaleX = _ref6.scaleX,
            scaleX = _ref6$scaleX === undefined ? 1 : _ref6$scaleX,
            _ref6$scaleY = _ref6.scaleY,
            scaleY = _ref6$scaleY === undefined ? 1 : _ref6$scaleY;
        var aspectRatio = _ref7.aspectRatio,
            naturalWidth = _ref7.naturalWidth,
            naturalHeight = _ref7.naturalHeight;
        var _ref8$fillColor = _ref8.fillColor,
            fillColor = _ref8$fillColor === undefined ? 'transparent' : _ref8$fillColor,
            _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
            imageSmoothingEnabled = _ref8$imageSmoothingE === undefined ? true : _ref8$imageSmoothingE,
            _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
            imageSmoothingQuality = _ref8$imageSmoothingQ === undefined ? 'low' : _ref8$imageSmoothingQ,
            _ref8$maxWidth = _ref8.maxWidth,
            maxWidth = _ref8$maxWidth === undefined ? Infinity : _ref8$maxWidth,
            _ref8$maxHeight = _ref8.maxHeight,
            maxHeight = _ref8$maxHeight === undefined ? Infinity : _ref8$maxHeight,
            _ref8$minWidth = _ref8.minWidth,
            minWidth = _ref8$minWidth === undefined ? 0 : _ref8$minWidth,
            _ref8$minHeight = _ref8.minHeight,
            minHeight = _ref8$minHeight === undefined ? 0 : _ref8$minHeight;

        var maxSizes = getContainSizes({
            aspectRatio: aspectRatio,
            width: maxWidth,
            height: maxHeight
        });
        var minSizes = getContainSizes({
            aspectRatio: aspectRatio,
            width: minWidth,
            height: minHeight
        });
        var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
        var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var params = [-imageNaturalWidth / 2, -imageNaturalHeight / 2, imageNaturalWidth, imageNaturalHeight];

        canvas.width = normalizeDecimalNumber(width);
        canvas.height = normalizeDecimalNumber(height);
        context.fillStyle = fillColor;
        context.fillRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        context.rotate(rotate * Math.PI / 180);
        context.scale(scaleX, scaleY);
        context.imageSmoothingEnabled = !!imageSmoothingEnabled;
        context.imageSmoothingQuality = imageSmoothingQuality;
        context.drawImage.apply(context, [image].concat(_toConsumableArray($.map(params, function (param) {
            return Math.floor(normalizeDecimalNumber(param));
        }))));
        context.restore();
        return canvas;
    }

    var fromCharCode = String.fromCharCode;

    /**
     * Get string from char code in data view.
     * @param {DataView} dataView - The data view for read.
     * @param {number} start - The start index.
     * @param {number} length - The read length.
     * @returns {string} The read result.
     */

    function getStringFromCharCode(dataView, start, length) {
        var str = '';
        var i = void 0;

        length += start;

        for (i = start; i < length; i += 1) {
            str += fromCharCode(dataView.getUint8(i));
        }

        return str;
    }

    var REGEXP_DATA_URL_HEAD = /^data:.*,/;

    /**
     * Transform Data URL to array buffer.
     * @param {string} dataURL - The Data URL to transform.
     * @returns {ArrayBuffer} The result array buffer.
     */
    function dataURLToArrayBuffer(dataURL) {
        var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
        var binary = atob(base64);
        var arrayBuffer = new ArrayBuffer(binary.length);
        var uint8 = new Uint8Array(arrayBuffer);

        $.each(uint8, function (i) {
            uint8[i] = binary.charCodeAt(i);
        });

        return arrayBuffer;
    }

    /**
     * Transform array buffer to Data URL.
     * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
     * @param {string} mimeType - The mime type of the Data URL.
     * @returns {string} The result Data URL.
     */
    function arrayBufferToDataURL(arrayBuffer, mimeType) {
        var uint8 = new Uint8Array(arrayBuffer);
        var data = '';

        // TypedArray.prototype.forEach is not supported in some browsers.
        $.each(uint8, function (i, value) {
            data += fromCharCode(value);
        });

        return 'data:' + mimeType + ';base64,' + btoa(data);
    }

    /**
     * Get orientation value from given array buffer.
     * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
     * @returns {number} The read orientation value.
     */
    function getOrientation(arrayBuffer) {
        var dataView = new DataView(arrayBuffer);
        var orientation = void 0;
        var littleEndian = void 0;
        var app1Start = void 0;
        var ifdStart = void 0;

        // Only handle JPEG image (start by 0xFFD8)
        if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
            var length = dataView.byteLength;
            var offset = 2;

            while (offset < length) {
                if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
                    app1Start = offset;
                    break;
                }

                offset += 1;
            }
        }

        if (app1Start) {
            var exifIDCode = app1Start + 4;
            var tiffOffset = app1Start + 10;

            if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
                var endianness = dataView.getUint16(tiffOffset);

                littleEndian = endianness === 0x4949;

                if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
                    if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                        var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                        if (firstIFDOffset >= 0x00000008) {
                            ifdStart = tiffOffset + firstIFDOffset;
                        }
                    }
                }
            }
        }

        if (ifdStart) {
            var _length = dataView.getUint16(ifdStart, littleEndian);
            var _offset = void 0;
            var i = void 0;

            for (i = 0; i < _length; i += 1) {
                _offset = ifdStart + i * 12 + 2;

                if (dataView.getUint16(_offset, littleEndian) === 0x0112 /* Orientation */) {
                    // 8 is the offset of the current tag's value
                    _offset += 8;

                    // Get the original orientation value
                    orientation = dataView.getUint16(_offset, littleEndian);

                    // Override the orientation with its default value
                    dataView.setUint16(_offset, 1, littleEndian);
                    break;
                }
            }
        }

        return orientation;
    }

    /**
     * Parse Exif Orientation value.
     * @param {number} orientation - The orientation to parse.
     * @returns {Object} The parsed result.
     */
    function parseOrientation(orientation) {
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        switch (orientation) {
            // Flip horizontal
            case 2:
                scaleX = -1;
                break;

            // Rotate left 180°
            case 3:
                rotate = -180;
                break;

            // Flip vertical
            case 4:
                scaleY = -1;
                break;

            // Flip vertical and rotate right 90°
            case 5:
                rotate = 90;
                scaleY = -1;
                break;

            // Rotate right 90°
            case 6:
                rotate = 90;
                break;

            // Flip horizontal and rotate right 90°
            case 7:
                rotate = 90;
                scaleX = -1;
                break;

            // Rotate left 90°
            case 8:
                rotate = -90;
                break;

            default:
        }

        return {
            rotate: rotate,
            scaleX: scaleX,
            scaleY: scaleY
        };
    }

    var render = {
        render: function render() {
            this.initContainer();
            this.initCanvas();
            this.initCropBox();
            this.renderCanvas();

            if (this.cropped) {
                this.renderCropBox();
            }
        },
        initContainer: function initContainer() {
            var $element = this.$element,
                options = this.options,
                $container = this.$container,
                $cropper = this.$cropper;


            $cropper.addClass(CLASS_HIDDEN);
            $element.removeClass(CLASS_HIDDEN);

            $cropper.css(this.container = {
                width: Math.max($container.width(), Number(options.minContainerWidth) || 200),
                height: Math.max($container.height(), Number(options.minContainerHeight) || 100)
            });

            $element.addClass(CLASS_HIDDEN);
            $cropper.removeClass(CLASS_HIDDEN);
        },


        // Canvas (image wrapper)
        initCanvas: function initCanvas() {
            var container = this.container,
                image = this.image;
            var viewMode = this.options.viewMode;

            var rotated = Math.abs(image.rotate) % 180 === 90;
            var naturalWidth = rotated ? image.naturalHeight : image.naturalWidth;
            var naturalHeight = rotated ? image.naturalWidth : image.naturalHeight;
            var aspectRatio = naturalWidth / naturalHeight;
            var canvasWidth = container.width;
            var canvasHeight = container.height;

            if (container.height * aspectRatio > container.width) {
                if (viewMode === 3) {
                    canvasWidth = container.height * aspectRatio;
                } else {
                    canvasHeight = container.width / aspectRatio;
                }
            } else if (viewMode === 3) {
                canvasHeight = container.width / aspectRatio;
            } else {
                canvasWidth = container.height * aspectRatio;
            }

            var canvas = {
                aspectRatio: aspectRatio,
                naturalWidth: naturalWidth,
                naturalHeight: naturalHeight,
                width: canvasWidth,
                height: canvasHeight
            };

            canvas.left = (container.width - canvasWidth) / 2;
            canvas.top = (container.height - canvasHeight) / 2;
            canvas.oldLeft = canvas.left;
            canvas.oldTop = canvas.top;

            this.canvas = canvas;
            this.limited = viewMode === 1 || viewMode === 2;
            this.limitCanvas(true, true);
            this.initialImage = $.extend({}, image);
            this.initialCanvas = $.extend({}, canvas);
        },
        limitCanvas: function limitCanvas(isSizeLimited, isPositionLimited) {
            var options = this.options,
                container = this.container,
                canvas = this.canvas,
                cropBox = this.cropBox;
            var viewMode = options.viewMode;
            var aspectRatio = canvas.aspectRatio;

            var cropped = this.cropped && cropBox;

            if (isSizeLimited) {
                var minCanvasWidth = Number(options.minCanvasWidth) || 0;
                var minCanvasHeight = Number(options.minCanvasHeight) || 0;

                if (viewMode > 0) {
                    if (viewMode > 1) {
                        minCanvasWidth = Math.max(minCanvasWidth, container.width);
                        minCanvasHeight = Math.max(minCanvasHeight, container.height);

                        if (viewMode === 3) {
                            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                                minCanvasWidth = minCanvasHeight * aspectRatio;
                            } else {
                                minCanvasHeight = minCanvasWidth / aspectRatio;
                            }
                        }
                    } else if (minCanvasWidth) {
                        minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBox.width : 0);
                    } else if (minCanvasHeight) {
                        minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBox.height : 0);
                    } else if (cropped) {
                        minCanvasWidth = cropBox.width;
                        minCanvasHeight = cropBox.height;

                        if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                            minCanvasWidth = minCanvasHeight * aspectRatio;
                        } else {
                            minCanvasHeight = minCanvasWidth / aspectRatio;
                        }
                    }
                }

                var _getContainSizes = getContainSizes({
                    aspectRatio: aspectRatio,
                    width: minCanvasWidth,
                    height: minCanvasHeight
                });

                minCanvasWidth = _getContainSizes.width;
                minCanvasHeight = _getContainSizes.height;


                canvas.minWidth = minCanvasWidth;
                canvas.minHeight = minCanvasHeight;
                canvas.maxWidth = Infinity;
                canvas.maxHeight = Infinity;
            }

            if (isPositionLimited) {
                if (viewMode > 0) {
                    var newCanvasLeft = container.width - canvas.width;
                    var newCanvasTop = container.height - canvas.height;

                    canvas.minLeft = Math.min(0, newCanvasLeft);
                    canvas.minTop = Math.min(0, newCanvasTop);
                    canvas.maxLeft = Math.max(0, newCanvasLeft);
                    canvas.maxTop = Math.max(0, newCanvasTop);

                    if (cropped && this.limited) {
                        canvas.minLeft = Math.min(cropBox.left, cropBox.left + cropBox.width - canvas.width);
                        canvas.minTop = Math.min(cropBox.top, cropBox.top + cropBox.height - canvas.height);
                        canvas.maxLeft = cropBox.left;
                        canvas.maxTop = cropBox.top;

                        if (viewMode === 2) {
                            if (canvas.width >= container.width) {
                                canvas.minLeft = Math.min(0, newCanvasLeft);
                                canvas.maxLeft = Math.max(0, newCanvasLeft);
                            }

                            if (canvas.height >= container.height) {
                                canvas.minTop = Math.min(0, newCanvasTop);
                                canvas.maxTop = Math.max(0, newCanvasTop);
                            }
                        }
                    }
                } else {
                    canvas.minLeft = -canvas.width;
                    canvas.minTop = -canvas.height;
                    canvas.maxLeft = container.width;
                    canvas.maxTop = container.height;
                }
            }
        },
        renderCanvas: function renderCanvas(changed, transformed) {
            var canvas = this.canvas,
                image = this.image;


            if (transformed) {
                var _getRotatedSizes = getRotatedSizes({
                    width: image.naturalWidth * Math.abs(image.scaleX || 1),
                    height: image.naturalHeight * Math.abs(image.scaleY || 1),
                    degree: image.rotate || 0
                }),
                    naturalWidth = _getRotatedSizes.width,
                    naturalHeight = _getRotatedSizes.height;

                var width = canvas.width * (naturalWidth / canvas.naturalWidth);
                var height = canvas.height * (naturalHeight / canvas.naturalHeight);

                canvas.left -= (width - canvas.width) / 2;
                canvas.top -= (height - canvas.height) / 2;
                canvas.width = width;
                canvas.height = height;
                canvas.aspectRatio = naturalWidth / naturalHeight;
                canvas.naturalWidth = naturalWidth;
                canvas.naturalHeight = naturalHeight;
                this.limitCanvas(true, false);
            }

            if (canvas.width > canvas.maxWidth || canvas.width < canvas.minWidth) {
                canvas.left = canvas.oldLeft;
            }

            if (canvas.height > canvas.maxHeight || canvas.height < canvas.minHeight) {
                canvas.top = canvas.oldTop;
            }

            canvas.width = Math.min(Math.max(canvas.width, canvas.minWidth), canvas.maxWidth);
            canvas.height = Math.min(Math.max(canvas.height, canvas.minHeight), canvas.maxHeight);

            this.limitCanvas(false, true);

            canvas.left = Math.min(Math.max(canvas.left, canvas.minLeft), canvas.maxLeft);
            canvas.top = Math.min(Math.max(canvas.top, canvas.minTop), canvas.maxTop);
            canvas.oldLeft = canvas.left;
            canvas.oldTop = canvas.top;

            this.$canvas.css({
                width: canvas.width,
                height: canvas.height,
                transform: getTransformValues({
                    translateX: canvas.left,
                    translateY: canvas.top
                })
            });

            this.renderImage(changed);

            if (this.cropped && this.limited) {
                this.limitCropBox(true, true);
            }
        },
        renderImage: function renderImage(changed) {
            var canvas = this.canvas,
                image = this.image;

            var width = image.naturalWidth * (canvas.width / canvas.naturalWidth);
            var height = image.naturalHeight * (canvas.height / canvas.naturalHeight);

            $.extend(image, {
                width: width,
                height: height,
                left: (canvas.width - width) / 2,
                top: (canvas.height - height) / 2
            });

            this.$clone.css({
                width: image.width,
                height: image.height,
                transform: getTransformValues($.extend({
                    translateX: image.left,
                    translateY: image.top
                }, image))
            });

            if (changed) {
                this.output();
            }
        },
        initCropBox: function initCropBox() {
            var options = this.options,
                canvas = this.canvas;
            var aspectRatio = options.aspectRatio;

            var autoCropArea = Number(options.autoCropArea) || 0.8;
            var cropBox = {
                width: canvas.width,
                height: canvas.height
            };

            if (aspectRatio) {
                if (canvas.height * aspectRatio > canvas.width) {
                    cropBox.height = cropBox.width / aspectRatio;
                } else {
                    cropBox.width = cropBox.height * aspectRatio;
                }
            }

            this.cropBox = cropBox;
            this.limitCropBox(true, true);

            // Initialize auto crop area
            cropBox.width = Math.min(Math.max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
            cropBox.height = Math.min(Math.max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);

            // The width of auto crop area must large than "minWidth", and the height too. (#164)
            cropBox.width = Math.max(cropBox.minWidth, cropBox.width * autoCropArea);
            cropBox.height = Math.max(cropBox.minHeight, cropBox.height * autoCropArea);
            cropBox.left = canvas.left + (canvas.width - cropBox.width) / 2;
            cropBox.top = canvas.top + (canvas.height - cropBox.height) / 2;
            cropBox.oldLeft = cropBox.left;
            cropBox.oldTop = cropBox.top;

            this.initialCropBox = $.extend({}, cropBox);
        },
        limitCropBox: function limitCropBox(isSizeLimited, isPositionLimited) {
            var options = this.options,
                container = this.container,
                canvas = this.canvas,
                cropBox = this.cropBox,
                limited = this.limited;
            var aspectRatio = options.aspectRatio;


            if (isSizeLimited) {
                var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
                var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
                var maxCropBoxWidth = Math.min(container.width, limited ? canvas.width : container.width);
                var maxCropBoxHeight = Math.min(container.height, limited ? canvas.height : container.height);

                // The min/maxCropBoxWidth/Height must be less than container's width/Height
                minCropBoxWidth = Math.min(minCropBoxWidth, container.width);
                minCropBoxHeight = Math.min(minCropBoxHeight, container.height);

                if (aspectRatio) {
                    if (minCropBoxWidth && minCropBoxHeight) {
                        if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
                            minCropBoxHeight = minCropBoxWidth / aspectRatio;
                        } else {
                            minCropBoxWidth = minCropBoxHeight * aspectRatio;
                        }
                    } else if (minCropBoxWidth) {
                        minCropBoxHeight = minCropBoxWidth / aspectRatio;
                    } else if (minCropBoxHeight) {
                        minCropBoxWidth = minCropBoxHeight * aspectRatio;
                    }

                    if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
                        maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
                    } else {
                        maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
                    }
                }

                // The minWidth/Height must be less than maxWidth/Height
                cropBox.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
                cropBox.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
                cropBox.maxWidth = maxCropBoxWidth;
                cropBox.maxHeight = maxCropBoxHeight;
            }

            if (isPositionLimited) {
                if (limited) {
                    cropBox.minLeft = Math.max(0, canvas.left);
                    cropBox.minTop = Math.max(0, canvas.top);
                    cropBox.maxLeft = Math.min(container.width, canvas.left + canvas.width) - cropBox.width;
                    cropBox.maxTop = Math.min(container.height, canvas.top + canvas.height) - cropBox.height;
                } else {
                    cropBox.minLeft = 0;
                    cropBox.minTop = 0;
                    cropBox.maxLeft = container.width - cropBox.width;
                    cropBox.maxTop = container.height - cropBox.height;
                }
            }
        },
        renderCropBox: function renderCropBox() {
            var options = this.options,
                container = this.container,
                cropBox = this.cropBox;


            if (cropBox.width > cropBox.maxWidth || cropBox.width < cropBox.minWidth) {
                cropBox.left = cropBox.oldLeft;
            }

            if (cropBox.height > cropBox.maxHeight || cropBox.height < cropBox.minHeight) {
                cropBox.top = cropBox.oldTop;
            }

            cropBox.width = Math.min(Math.max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
            cropBox.height = Math.min(Math.max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);

            this.limitCropBox(false, true);

            cropBox.left = Math.min(Math.max(cropBox.left, cropBox.minLeft), cropBox.maxLeft);
            cropBox.top = Math.min(Math.max(cropBox.top, cropBox.minTop), cropBox.maxTop);
            cropBox.oldLeft = cropBox.left;
            cropBox.oldTop = cropBox.top;

            if (options.movable && options.cropBoxMovable) {
                // Turn to move the canvas when the crop box is equal to the container
                this.$face.data(DATA_ACTION, cropBox.width >= container.width && cropBox.height >= container.height ? ACTION_MOVE : ACTION_ALL);
            }

            this.$cropBox.css({
                width: cropBox.width,
                height: cropBox.height,
                transform: getTransformValues({
                    translateX: cropBox.left,
                    translateY: cropBox.top
                })
            });

            if (this.cropped && this.limited) {
                this.limitCanvas(true, true);
            }

            if (!this.disabled) {
                this.output();
            }
        },
        output: function output() {
            this.preview();

            if (this.completed) {
                this.trigger(EVENT_CROP, this.getData());
            }
        }
    };

    var preview = {
        initPreview: function initPreview() {
            var crossOrigin = this.crossOrigin;

            var url = crossOrigin ? this.crossOriginUrl : this.url;
            var image = document.createElement('img');

            if (crossOrigin) {
                image.crossOrigin = crossOrigin;
            }

            image.src = url;

            var $clone2 = $(image);

            this.$preview = $(this.options.preview);
            this.$clone2 = $clone2;
            this.$viewBox.html($clone2);
            this.$preview.each(function (i, element) {
                var $element = $(element);
                var img = document.createElement('img');

                // Save the original size for recover
                $element.data(DATA_PREVIEW, {
                    width: $element.width(),
                    height: $element.height(),
                    html: $element.html()
                });

                if (crossOrigin) {
                    img.crossOrigin = crossOrigin;
                }

                img.src = url;

                /**
                 * Override img element styles
                 * Add `display:block` to avoid margin top issue
                 * Add `height:auto` to override `height` attribute on IE8
                 * (Occur only when margin-top <= -height)
                 */
                img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';

                $element.html(img);
            });
        },
        resetPreview: function resetPreview() {
            this.$preview.each(function (i, element) {
                var $element = $(element);
                var data = $element.data(DATA_PREVIEW);

                $element.css({
                    width: data.width,
                    height: data.height
                }).html(data.html).removeData(DATA_PREVIEW);
            });
        },
        preview: function preview() {
            var image = this.image,
                canvas = this.canvas,
                cropBox = this.cropBox;
            var cropBoxWidth = cropBox.width,
                cropBoxHeight = cropBox.height;
            var width = image.width,
                height = image.height;

            var left = cropBox.left - canvas.left - image.left;
            var top = cropBox.top - canvas.top - image.top;

            if (!this.cropped || this.disabled) {
                return;
            }

            this.$clone2.css({
                width: width,
                height: height,
                transform: getTransformValues($.extend({
                    translateX: -left,
                    translateY: -top
                }, image))
            });

            this.$preview.each(function (i, element) {
                var $element = $(element);
                var data = $element.data(DATA_PREVIEW);
                var originalWidth = data.width;
                var originalHeight = data.height;
                var newWidth = originalWidth;
                var newHeight = originalHeight;
                var ratio = 1;

                if (cropBoxWidth) {
                    ratio = originalWidth / cropBoxWidth;
                    newHeight = cropBoxHeight * ratio;
                }

                if (cropBoxHeight && newHeight > originalHeight) {
                    ratio = originalHeight / cropBoxHeight;
                    newWidth = cropBoxWidth * ratio;
                    newHeight = originalHeight;
                }

                $element.css({
                    width: newWidth,
                    height: newHeight
                }).find('img').css({
                    width: width * ratio,
                    height: height * ratio,
                    transform: getTransformValues($.extend({
                        translateX: -left * ratio,
                        translateY: -top * ratio
                    }, image))
                });
            });
        }
    };

    var events = {
        bind: function bind() {
            var $element = this.$element,
                options = this.options,
                $cropper = this.$cropper;


            if ($.isFunction(options.cropstart)) {
                $element.on(EVENT_CROP_START, options.cropstart);
            }

            if ($.isFunction(options.cropmove)) {
                $element.on(EVENT_CROP_MOVE, options.cropmove);
            }

            if ($.isFunction(options.cropend)) {
                $element.on(EVENT_CROP_END, options.cropend);
            }

            if ($.isFunction(options.crop)) {
                $element.on(EVENT_CROP, options.crop);
            }

            if ($.isFunction(options.zoom)) {
                $element.on(EVENT_ZOOM, options.zoom);
            }

            $cropper.on(EVENT_POINTER_DOWN, proxy(this.cropStart, this));

            if (options.zoomable && options.zoomOnWheel) {
                $cropper.on(EVENT_WHEEL, proxy(this.wheel, this));
            }

            if (options.toggleDragModeOnDblclick) {
                $cropper.on(EVENT_DBLCLICK, proxy(this.dblclick, this));
            }

            $(document).on(EVENT_POINTER_MOVE, this.onCropMove = proxy(this.cropMove, this)).on(EVENT_POINTER_UP, this.onCropEnd = proxy(this.cropEnd, this));

            if (options.responsive) {
                $(window).on(EVENT_RESIZE, this.onResize = proxy(this.resize, this));
            }
        },
        unbind: function unbind() {
            var $element = this.$element,
                options = this.options,
                $cropper = this.$cropper;


            if ($.isFunction(options.cropstart)) {
                $element.off(EVENT_CROP_START, options.cropstart);
            }

            if ($.isFunction(options.cropmove)) {
                $element.off(EVENT_CROP_MOVE, options.cropmove);
            }

            if ($.isFunction(options.cropend)) {
                $element.off(EVENT_CROP_END, options.cropend);
            }

            if ($.isFunction(options.crop)) {
                $element.off(EVENT_CROP, options.crop);
            }

            if ($.isFunction(options.zoom)) {
                $element.off(EVENT_ZOOM, options.zoom);
            }

            $cropper.off(EVENT_POINTER_DOWN, this.cropStart);

            if (options.zoomable && options.zoomOnWheel) {
                $cropper.off(EVENT_WHEEL, this.wheel);
            }

            if (options.toggleDragModeOnDblclick) {
                $cropper.off(EVENT_DBLCLICK, this.dblclick);
            }

            $(document).off(EVENT_POINTER_MOVE, this.onCropMove).off(EVENT_POINTER_UP, this.onCropEnd);

            if (options.responsive) {
                $(window).off(EVENT_RESIZE, this.onResize);
            }
        }
    };

    var handlers = {
        resize: function resize() {
            var options = this.options,
                $container = this.$container,
                container = this.container;

            var minContainerWidth = Number(options.minContainerWidth) || 200;
            var minContainerHeight = Number(options.minContainerHeight) || 100;

            if (this.disabled || container.width <= minContainerWidth || container.height <= minContainerHeight) {
                return;
            }

            var ratio = $container.width() / container.width;

            // Resize when width changed or height changed
            if (ratio !== 1 || $container.height() !== container.height) {
                var canvasData = void 0;
                var cropBoxData = void 0;

                if (options.restore) {
                    canvasData = this.getCanvasData();
                    cropBoxData = this.getCropBoxData();
                }

                this.render();

                if (options.restore) {
                    this.setCanvasData($.each(canvasData, function (i, n) {
                        canvasData[i] = n * ratio;
                    }));
                    this.setCropBoxData($.each(cropBoxData, function (i, n) {
                        cropBoxData[i] = n * ratio;
                    }));
                }
            }
        },
        dblclick: function dblclick() {
            if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
                return;
            }

            this.setDragMode(this.$dragBox.hasClass(CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
        },
        wheel: function wheel(event) {
            var _this = this;

            var e = event.originalEvent || event;
            var ratio = Number(this.options.wheelZoomRatio) || 0.1;

            if (this.disabled) {
                return;
            }

            event.preventDefault();

            // Limit wheel speed to prevent zoom too fast
            if (this.wheeling) {
                return;
            }

            this.wheeling = true;

            setTimeout(function () {
                _this.wheeling = false;
            }, 50);

            var delta = 1;

            if (e.deltaY) {
                delta = e.deltaY > 0 ? 1 : -1;
            } else if (e.wheelDelta) {
                delta = -e.wheelDelta / 120;
            } else if (e.detail) {
                delta = e.detail > 0 ? 1 : -1;
            }

            this.zoom(-delta * ratio, event);
        },
        cropStart: function cropStart(e) {
            if (this.disabled) {
                return;
            }

            var options = this.options,
                pointers = this.pointers;
            var originalEvent = e.originalEvent;

            var action = void 0;

            if (originalEvent && originalEvent.changedTouches) {
                // Handle touch event
                $.each(originalEvent.changedTouches, function (i, touch) {
                    pointers[touch.identifier] = getPointer(touch);
                });
            } else {
                // Handle mouse event and pointer event
                pointers[originalEvent && originalEvent.pointerId || 0] = getPointer(originalEvent || e);
            }

            if (objectKeys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
                action = ACTION_ZOOM;
            } else {
                action = $(e.target).data(DATA_ACTION);
            }

            if (!REGEXP_ACTIONS.test(action)) {
                return;
            }

            if (this.trigger(EVENT_CROP_START, {
                originalEvent: originalEvent,
                action: action
            }).isDefaultPrevented()) {
                return;
            }

            e.preventDefault();

            this.action = action;
            this.cropping = false;

            if (action === ACTION_CROP) {
                this.cropping = true;
                this.$dragBox.addClass(CLASS_MODAL);
            }
        },
        cropMove: function cropMove(e) {
            var action = this.action;


            if (this.disabled || !action) {
                return;
            }

            var pointers = this.pointers;
            var originalEvent = e.originalEvent;


            e.preventDefault();

            if (this.trigger(EVENT_CROP_MOVE, {
                originalEvent: originalEvent,
                action: action
            }).isDefaultPrevented()) {
                return;
            }

            if (originalEvent && originalEvent.changedTouches) {
                $.each(originalEvent.changedTouches, function (i, touch) {
                    $.extend(pointers[touch.identifier], getPointer(touch, true));
                });
            } else {
                $.extend(pointers[originalEvent && originalEvent.pointerId || 0], getPointer(originalEvent || e, true));
            }

            this.change(e);
        },
        cropEnd: function cropEnd(e) {
            if (this.disabled) {
                return;
            }

            var action = this.action;
            var pointers = this.pointers;
            var originalEvent = e.originalEvent;


            if (originalEvent && originalEvent.changedTouches) {
                $.each(originalEvent.changedTouches, function (i, touch) {
                    delete pointers[touch.identifier];
                });
            } else {
                delete pointers[originalEvent && originalEvent.pointerId || 0];
            }

            if (!action) {
                return;
            }

            e.preventDefault();

            if (!objectKeys(pointers).length) {
                this.action = '';
            }

            if (this.cropping) {
                this.cropping = false;
                this.$dragBox.toggleClass(CLASS_MODAL, this.cropped && this.options.modal);
            }

            this.trigger(EVENT_CROP_END, {
                originalEvent: originalEvent,
                action: action
            });
        }
    };

    var change = {
        change: function change(e) {
            var options = this.options,
                pointers = this.pointers,
                container = this.container,
                canvas = this.canvas,
                cropBox = this.cropBox;
            var action = this.action;
            var aspectRatio = options.aspectRatio;
            var left = cropBox.left,
                top = cropBox.top,
                width = cropBox.width,
                height = cropBox.height;

            var right = left + width;
            var bottom = top + height;
            var minLeft = 0;
            var minTop = 0;
            var maxWidth = container.width;
            var maxHeight = container.height;
            var renderable = true;
            var offset = void 0;

            // Locking aspect ratio in "free mode" by holding shift key (#259)
            if (!aspectRatio && e.shiftKey) {
                aspectRatio = width && height ? width / height : 1;
            }

            if (this.limited) {
                minLeft = cropBox.minLeft;
                minTop = cropBox.minTop;

                maxWidth = minLeft + Math.min(container.width, canvas.width, canvas.left + canvas.width);
                maxHeight = minTop + Math.min(container.height, canvas.height, canvas.top + canvas.height);
            }

            var pointer = pointers[objectKeys(pointers)[0]];
            var range = {
                x: pointer.endX - pointer.startX,
                y: pointer.endY - pointer.startY
            };
            var check = function check(side) {
                switch (side) {
                    case ACTION_EAST:
                        if (right + range.x > maxWidth) {
                            range.x = maxWidth - right;
                        }

                        break;

                    case ACTION_WEST:
                        if (left + range.x < minLeft) {
                            range.x = minLeft - left;
                        }

                        break;

                    case ACTION_NORTH:
                        if (top + range.y < minTop) {
                            range.y = minTop - top;
                        }

                        break;

                    case ACTION_SOUTH:
                        if (bottom + range.y > maxHeight) {
                            range.y = maxHeight - bottom;
                        }

                        break;

                    default:
                }
            };

            switch (action) {
                // Move crop box
                case ACTION_ALL:
                    left += range.x;
                    top += range.y;
                    break;

                // Resize crop box
                case ACTION_EAST:
                    if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                        renderable = false;
                        break;
                    }

                    check(ACTION_EAST);
                    width += range.x;

                    if (aspectRatio) {
                        height = width / aspectRatio;
                        top -= range.x / aspectRatio / 2;
                    }

                    if (width < 0) {
                        action = ACTION_WEST;
                        width = 0;
                    }

                    break;

                case ACTION_NORTH:
                    if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                        renderable = false;
                        break;
                    }

                    check(ACTION_NORTH);
                    height -= range.y;
                    top += range.y;

                    if (aspectRatio) {
                        width = height * aspectRatio;
                        left += range.y * aspectRatio / 2;
                    }

                    if (height < 0) {
                        action = ACTION_SOUTH;
                        height = 0;
                    }

                    break;

                case ACTION_WEST:
                    if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                        renderable = false;
                        break;
                    }

                    check(ACTION_WEST);
                    width -= range.x;
                    left += range.x;

                    if (aspectRatio) {
                        height = width / aspectRatio;
                        top += range.x / aspectRatio / 2;
                    }

                    if (width < 0) {
                        action = ACTION_EAST;
                        width = 0;
                    }

                    break;

                case ACTION_SOUTH:
                    if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                        renderable = false;
                        break;
                    }

                    check(ACTION_SOUTH);
                    height += range.y;

                    if (aspectRatio) {
                        width = height * aspectRatio;
                        left -= range.y * aspectRatio / 2;
                    }

                    if (height < 0) {
                        action = ACTION_NORTH;
                        height = 0;
                    }

                    break;

                case ACTION_NORTH_EAST:
                    if (aspectRatio) {
                        if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
                            renderable = false;
                            break;
                        }

                        check(ACTION_NORTH);
                        height -= range.y;
                        top += range.y;
                        width = height * aspectRatio;
                    } else {
                        check(ACTION_NORTH);
                        check(ACTION_EAST);

                        if (range.x >= 0) {
                            if (right < maxWidth) {
                                width += range.x;
                            } else if (range.y <= 0 && top <= minTop) {
                                renderable = false;
                            }
                        } else {
                            width += range.x;
                        }

                        if (range.y <= 0) {
                            if (top > minTop) {
                                height -= range.y;
                                top += range.y;
                            }
                        } else {
                            height -= range.y;
                            top += range.y;
                        }
                    }

                    if (width < 0 && height < 0) {
                        action = ACTION_SOUTH_WEST;
                        height = 0;
                        width = 0;
                    } else if (width < 0) {
                        action = ACTION_NORTH_WEST;
                        width = 0;
                    } else if (height < 0) {
                        action = ACTION_SOUTH_EAST;
                        height = 0;
                    }

                    break;

                case ACTION_NORTH_WEST:
                    if (aspectRatio) {
                        if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
                            renderable = false;
                            break;
                        }

                        check(ACTION_NORTH);
                        height -= range.y;
                        top += range.y;
                        width = height * aspectRatio;
                        left += range.y * aspectRatio;
                    } else {
                        check(ACTION_NORTH);
                        check(ACTION_WEST);

                        if (range.x <= 0) {
                            if (left > minLeft) {
                                width -= range.x;
                                left += range.x;
                            } else if (range.y <= 0 && top <= minTop) {
                                renderable = false;
                            }
                        } else {
                            width -= range.x;
                            left += range.x;
                        }

                        if (range.y <= 0) {
                            if (top > minTop) {
                                height -= range.y;
                                top += range.y;
                            }
                        } else {
                            height -= range.y;
                            top += range.y;
                        }
                    }

                    if (width < 0 && height < 0) {
                        action = ACTION_SOUTH_EAST;
                        height = 0;
                        width = 0;
                    } else if (width < 0) {
                        action = ACTION_NORTH_EAST;
                        width = 0;
                    } else if (height < 0) {
                        action = ACTION_SOUTH_WEST;
                        height = 0;
                    }

                    break;

                case ACTION_SOUTH_WEST:
                    if (aspectRatio) {
                        if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
                            renderable = false;
                            break;
                        }

                        check(ACTION_WEST);
                        width -= range.x;
                        left += range.x;
                        height = width / aspectRatio;
                    } else {
                        check(ACTION_SOUTH);
                        check(ACTION_WEST);

                        if (range.x <= 0) {
                            if (left > minLeft) {
                                width -= range.x;
                                left += range.x;
                            } else if (range.y >= 0 && bottom >= maxHeight) {
                                renderable = false;
                            }
                        } else {
                            width -= range.x;
                            left += range.x;
                        }

                        if (range.y >= 0) {
                            if (bottom < maxHeight) {
                                height += range.y;
                            }
                        } else {
                            height += range.y;
                        }
                    }

                    if (width < 0 && height < 0) {
                        action = ACTION_NORTH_EAST;
                        height = 0;
                        width = 0;
                    } else if (width < 0) {
                        action = ACTION_SOUTH_EAST;
                        width = 0;
                    } else if (height < 0) {
                        action = ACTION_NORTH_WEST;
                        height = 0;
                    }

                    break;

                case ACTION_SOUTH_EAST:
                    if (aspectRatio) {
                        if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
                            renderable = false;
                            break;
                        }

                        check(ACTION_EAST);
                        width += range.x;
                        height = width / aspectRatio;
                    } else {
                        check(ACTION_SOUTH);
                        check(ACTION_EAST);

                        if (range.x >= 0) {
                            if (right < maxWidth) {
                                width += range.x;
                            } else if (range.y >= 0 && bottom >= maxHeight) {
                                renderable = false;
                            }
                        } else {
                            width += range.x;
                        }

                        if (range.y >= 0) {
                            if (bottom < maxHeight) {
                                height += range.y;
                            }
                        } else {
                            height += range.y;
                        }
                    }

                    if (width < 0 && height < 0) {
                        action = ACTION_NORTH_WEST;
                        height = 0;
                        width = 0;
                    } else if (width < 0) {
                        action = ACTION_SOUTH_WEST;
                        width = 0;
                    } else if (height < 0) {
                        action = ACTION_NORTH_EAST;
                        height = 0;
                    }

                    break;

                // Move canvas
                case ACTION_MOVE:
                    this.move(range.x, range.y);
                    renderable = false;
                    break;

                // Zoom canvas
                case ACTION_ZOOM:
                    this.zoom(getMaxZoomRatio(pointers), e.originalEvent);
                    renderable = false;
                    break;

                // Create crop box
                case ACTION_CROP:
                    if (!range.x || !range.y) {
                        renderable = false;
                        break;
                    }

                    offset = this.$cropper.offset();
                    left = pointer.startX - offset.left;
                    top = pointer.startY - offset.top;
                    width = cropBox.minWidth;
                    height = cropBox.minHeight;

                    if (range.x > 0) {
                        action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
                    } else if (range.x < 0) {
                        left -= width;
                        action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
                    }

                    if (range.y < 0) {
                        top -= height;
                    }

                    // Show the crop box if is hidden
                    if (!this.cropped) {
                        this.$cropBox.removeClass(CLASS_HIDDEN);
                        this.cropped = true;

                        if (this.limited) {
                            this.limitCropBox(true, true);
                        }
                    }

                    break;

                default:
            }

            if (renderable) {
                cropBox.width = width;
                cropBox.height = height;
                cropBox.left = left;
                cropBox.top = top;
                this.action = action;
                this.renderCropBox();
            }

            // Override
            $.each(pointers, function (i, p) {
                p.startX = p.endX;
                p.startY = p.endY;
            });
        }
    };

    function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    var methods = {
        // Show the crop box manually
        crop: function crop() {
            if (!this.ready || this.disabled) {
                return;
            }

            if (!this.cropped) {
                this.cropped = true;
                this.limitCropBox(true, true);

                if (this.options.modal) {
                    this.$dragBox.addClass(CLASS_MODAL);
                }

                this.$cropBox.removeClass(CLASS_HIDDEN);
            }

            this.setCropBoxData(this.initialCropBox);
        },


        // Reset the image and crop box to their initial states
        reset: function reset() {
            if (!this.ready || this.disabled) {
                return;
            }

            this.image = $.extend({}, this.initialImage);
            this.canvas = $.extend({}, this.initialCanvas);
            this.cropBox = $.extend({}, this.initialCropBox);
            this.renderCanvas();

            if (this.cropped) {
                this.renderCropBox();
            }
        },


        // Clear the crop box
        clear: function clear() {
            if (!this.cropped || this.disabled) {
                return;
            }

            $.extend(this.cropBox, {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            });

            this.cropped = false;
            this.renderCropBox();
            this.limitCanvas(true, true);

            // Render canvas after crop box rendered
            this.renderCanvas();
            this.$dragBox.removeClass(CLASS_MODAL);
            this.$cropBox.addClass(CLASS_HIDDEN);
        },


        /**
         * Replace the image's src and rebuild the cropper
         * @param {string} url - The new URL.
         * @param {boolean} [onlyColorChanged] - Indicate if the new image only changed color.
         */
        replace: function replace(url, onlyColorChanged) {
            if (!this.disabled && url) {
                if (this.isImg) {
                    this.$element.attr('src', url);
                }

                if (onlyColorChanged) {
                    this.url = url;
                    this.$clone.attr('src', url);

                    if (this.ready) {
                        this.$preview.find('img').add(this.$clone2).attr('src', url);
                    }
                } else {
                    if (this.isImg) {
                        this.replaced = true;
                    }

                    // Clear previous data
                    this.options.data = null;
                    this.load(url);
                }
            }
        },


        // Enable (unfreeze) the cropper
        enable: function enable() {
            if (this.ready) {
                this.disabled = false;
                this.$cropper.removeClass(CLASS_DISABLED);
            }
        },


        // Disable (freeze) the cropper
        disable: function disable() {
            if (this.ready) {
                this.disabled = true;
                this.$cropper.addClass(CLASS_DISABLED);
            }
        },


        // Destroy the cropper and remove the instance from the image
        destroy: function destroy() {
            var $element = this.$element;


            if (this.loaded) {
                if (this.isImg && this.replaced) {
                    $element.attr('src', this.originalUrl);
                }

                this.unbuild();
                $element.removeClass(CLASS_HIDDEN);
            } else if (this.isImg) {
                $element.off(EVENT_LOAD, this.start);
            } else if (this.$clone) {
                this.$clone.remove();
            }

            $element.removeData(NAMESPACE);
        },


        /**
         * Move the canvas with relative offsets
         * @param {number} offsetX - The relative offset distance on the x-axis.
         * @param {number} offsetY - The relative offset distance on the y-axis.
         */
        move: function move(offsetX, offsetY) {
            var _canvas = this.canvas,
                left = _canvas.left,
                top = _canvas.top;


            this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
        },


        /**
         * Move the canvas to an absolute point
         * @param {number} x - The x-axis coordinate.
         * @param {number} [y=x] - The y-axis coordinate.
         */
        moveTo: function moveTo(x, y) {
            var canvas = this.canvas;

            var changed = false;

            // If "y" is not present, its default value is "x"
            if (isUndefined(y)) {
                y = x;
            }

            x = Number(x);
            y = Number(y);

            if (this.ready && !this.disabled && this.options.movable) {
                if (isNumber(x)) {
                    canvas.left = x;
                    changed = true;
                }

                if (isNumber(y)) {
                    canvas.top = y;
                    changed = true;
                }

                if (changed) {
                    this.renderCanvas(true);
                }
            }
        },


        /**
         * Zoom the canvas with a relative ratio
         * @param {Number} ratio - The target ratio.
         * @param {Event} _event - The related event if any.
         */
        zoom: function zoom(ratio, _event) {
            var canvas = this.canvas;


            ratio = Number(ratio);

            if (ratio < 0) {
                ratio = 1 / (1 - ratio);
            } else {
                ratio = 1 + ratio;
            }

            this.zoomTo(canvas.width * ratio / canvas.naturalWidth, _event);
        },


        /**
         * Zoom the canvas to an absolute ratio
         * @param {number} ratio - The target ratio.
         * @param {Event} _event - The related event if any.
         */
        zoomTo: function zoomTo(ratio, _event) {
            var options = this.options,
                pointers = this.pointers,
                canvas = this.canvas;
            var width = canvas.width,
                height = canvas.height,
                naturalWidth = canvas.naturalWidth,
                naturalHeight = canvas.naturalHeight;


            ratio = Number(ratio);

            if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
                var newWidth = naturalWidth * ratio;
                var newHeight = naturalHeight * ratio;
                var originalEvent = void 0;

                if (_event) {
                    originalEvent = _event.originalEvent;
                }

                if (this.trigger(EVENT_ZOOM, {
                    originalEvent: originalEvent,
                    oldRatio: width / naturalWidth,
                    ratio: newWidth / naturalWidth
                }).isDefaultPrevented()) {
                    return;
                }

                if (originalEvent) {
                    var offset = this.$cropper.offset();
                    var center = pointers && objectKeys(pointers).length ? getPointersCenter(pointers) : {
                        pageX: _event.pageX || originalEvent.pageX || 0,
                        pageY: _event.pageY || originalEvent.pageY || 0
                    };

                    // Zoom from the triggering point of the event
                    canvas.left -= (newWidth - width) * ((center.pageX - offset.left - canvas.left) / width);
                    canvas.top -= (newHeight - height) * ((center.pageY - offset.top - canvas.top) / height);
                } else {
                    // Zoom from the center of the canvas
                    canvas.left -= (newWidth - width) / 2;
                    canvas.top -= (newHeight - height) / 2;
                }

                canvas.width = newWidth;
                canvas.height = newHeight;
                this.renderCanvas(true);
            }
        },


        /**
         * Rotate the canvas with a relative degree
         * @param {number} degree - The rotate degree.
         */
        rotate: function rotate(degree) {
            this.rotateTo((this.image.rotate || 0) + Number(degree));
        },


        /**
         * Rotate the canvas to an absolute degree
         * @param {number} degree - The rotate degree.
         */
        rotateTo: function rotateTo(degree) {
            degree = Number(degree);

            if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
                this.image.rotate = degree % 360;
                this.renderCanvas(true, true);
            }
        },


        /**
         * Scale the image on the x-axis.
         * @param {number} scaleX - The scale ratio on the x-axis.
         */
        scaleX: function scaleX(_scaleX) {
            var scaleY = this.image.scaleY;


            this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
        },


        /**
         * Scale the image on the y-axis.
         * @param {number} scaleY - The scale ratio on the y-axis.
         */
        scaleY: function scaleY(_scaleY) {
            var scaleX = this.image.scaleX;


            this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
        },


        /**
         * Scale the image
         * @param {number} scaleX - The scale ratio on the x-axis.
         * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
         */
        scale: function scale(scaleX) {
            var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
            var image = this.image;

            var transformed = false;

            scaleX = Number(scaleX);
            scaleY = Number(scaleY);

            if (this.ready && !this.disabled && this.options.scalable) {
                if (isNumber(scaleX)) {
                    image.scaleX = scaleX;
                    transformed = true;
                }

                if (isNumber(scaleY)) {
                    image.scaleY = scaleY;
                    transformed = true;
                }

                if (transformed) {
                    this.renderCanvas(true, true);
                }
            }
        },


        /**
         * Get the cropped area position and size data (base on the original image)
         * @param {boolean} [rounded=false] - Indicate if round the data values or not.
         * @returns {Object} The result cropped data.
         */
        getData: function getData() {
            var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var options = this.options,
                image = this.image,
                canvas = this.canvas,
                cropBox = this.cropBox;

            var data = void 0;

            if (this.ready && this.cropped) {
                data = {
                    x: cropBox.left - canvas.left,
                    y: cropBox.top - canvas.top,
                    width: cropBox.width,
                    height: cropBox.height
                };

                var ratio = image.width / image.naturalWidth;

                $.each(data, function (i, n) {
                    n /= ratio;
                    data[i] = rounded ? Math.round(n) : n;
                });
            } else {
                data = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
            }

            if (options.rotatable) {
                data.rotate = image.rotate || 0;
            }

            if (options.scalable) {
                data.scaleX = image.scaleX || 1;
                data.scaleY = image.scaleY || 1;
            }

            return data;
        },


        /**
         * Set the cropped area position and size with new data
         * @param {Object} data - The new data.
         */
        setData: function setData(data) {
            var options = this.options,
                image = this.image,
                canvas = this.canvas;

            var cropBoxData = {};

            if ($.isFunction(data)) {
                data = data.call(this.element);
            }

            if (this.ready && !this.disabled && $.isPlainObject(data)) {
                var transformed = false;

                if (options.rotatable) {
                    if (isNumber(data.rotate) && data.rotate !== image.rotate) {
                        image.rotate = data.rotate;
                        transformed = true;
                    }
                }

                if (options.scalable) {
                    if (isNumber(data.scaleX) && data.scaleX !== image.scaleX) {
                        image.scaleX = data.scaleX;
                        transformed = true;
                    }

                    if (isNumber(data.scaleY) && data.scaleY !== image.scaleY) {
                        image.scaleY = data.scaleY;
                        transformed = true;
                    }
                }

                if (transformed) {
                    this.renderCanvas(true, true);
                }

                var ratio = image.width / image.naturalWidth;

                if (isNumber(data.x)) {
                    cropBoxData.left = data.x * ratio + canvas.left;
                }

                if (isNumber(data.y)) {
                    cropBoxData.top = data.y * ratio + canvas.top;
                }

                if (isNumber(data.width)) {
                    cropBoxData.width = data.width * ratio;
                }

                if (isNumber(data.height)) {
                    cropBoxData.height = data.height * ratio;
                }

                this.setCropBoxData(cropBoxData);
            }
        },


        /**
         * Get the container size data.
         * @returns {Object} The result container data.
         */
        getContainerData: function getContainerData() {
            return this.ready ? $.extend({}, this.container) : {};
        },


        /**
         * Get the image position and size data.
         * @returns {Object} The result image data.
         */
        getImageData: function getImageData() {
            return this.loaded ? $.extend({}, this.image) : {};
        },


        /**
         * Get the canvas position and size data.
         * @returns {Object} The result canvas data.
         */
        getCanvasData: function getCanvasData() {
            var canvas = this.canvas;

            var data = {};

            if (this.ready) {
                $.each(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (i, n) {
                    data[n] = canvas[n];
                });
            }

            return data;
        },


        /**
         * Set the canvas position and size with new data.
         * @param {Object} data - The new canvas data.
         */
        setCanvasData: function setCanvasData(data) {
            var canvas = this.canvas;
            var aspectRatio = canvas.aspectRatio;


            if ($.isFunction(data)) {
                data = data.call(this.$element);
            }

            if (this.ready && !this.disabled && $.isPlainObject(data)) {
                if (isNumber(data.left)) {
                    canvas.left = data.left;
                }

                if (isNumber(data.top)) {
                    canvas.top = data.top;
                }

                if (isNumber(data.width)) {
                    canvas.width = data.width;
                    canvas.height = data.width / aspectRatio;
                } else if (isNumber(data.height)) {
                    canvas.height = data.height;
                    canvas.width = data.height * aspectRatio;
                }

                this.renderCanvas(true);
            }
        },


        /**
         * Get the crop box position and size data.
         * @returns {Object} The result crop box data.
         */
        getCropBoxData: function getCropBoxData() {
            var cropBox = this.cropBox;


            return this.ready && this.cropped ? {
                left: cropBox.left,
                top: cropBox.top,
                width: cropBox.width,
                height: cropBox.height
            } : {};
        },


        /**
         * Set the crop box position and size with new data.
         * @param {Object} data - The new crop box data.
         */
        setCropBoxData: function setCropBoxData(data) {
            var cropBox = this.cropBox;
            var aspectRatio = this.options.aspectRatio;

            var widthChanged = void 0;
            var heightChanged = void 0;

            if ($.isFunction(data)) {
                data = data.call(this.$element);
            }

            if (this.ready && this.cropped && !this.disabled && $.isPlainObject(data)) {
                if (isNumber(data.left)) {
                    cropBox.left = data.left;
                }

                if (isNumber(data.top)) {
                    cropBox.top = data.top;
                }

                if (isNumber(data.width) && data.width !== cropBox.width) {
                    widthChanged = true;
                    cropBox.width = data.width;
                }

                if (isNumber(data.height) && data.height !== cropBox.height) {
                    heightChanged = true;
                    cropBox.height = data.height;
                }

                if (aspectRatio) {
                    if (widthChanged) {
                        cropBox.height = cropBox.width / aspectRatio;
                    } else if (heightChanged) {
                        cropBox.width = cropBox.height * aspectRatio;
                    }
                }

                this.renderCropBox();
            }
        },


        /**
         * Get a canvas drawn the cropped image.
         * @param {Object} [options={}] - The config options.
         * @returns {HTMLCanvasElement} - The result canvas.
         */
        getCroppedCanvas: function getCroppedCanvas() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!this.ready || !window.HTMLCanvasElement) {
                return null;
            }

            var canvasData = this.canvas;

            var source = getSourceCanvas(this.$clone[0], this.image, canvasData, options);

            // Returns the source canvas if it is not cropped.
            if (!this.cropped) {
                return source;
            }

            var _getData = this.getData(),
                x = _getData.x,
                y = _getData.y,
                initialWidth = _getData.width,
                initialHeight = _getData.height;

            var aspectRatio = initialWidth / initialHeight;
            var maxSizes = getContainSizes({
                aspectRatio: aspectRatio,
                width: options.maxWidth || Infinity,
                height: options.maxHeight || Infinity
            });
            var minSizes = getContainSizes({
                aspectRatio: aspectRatio,
                width: options.minWidth || 0,
                height: options.minHeight || 0
            });

            var _getContainSizes = getContainSizes({
                aspectRatio: aspectRatio,
                width: options.width || initialWidth,
                height: options.height || initialHeight
            }),
                width = _getContainSizes.width,
                height = _getContainSizes.height;

            width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
            height = Math.min(maxSizes.height, Math.max(minSizes.height, height));

            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');

            canvas.width = normalizeDecimalNumber(width);
            canvas.height = normalizeDecimalNumber(height);
            context.fillStyle = options.fillColor || 'transparent';
            context.fillRect(0, 0, width, height);

            var _options$imageSmoothi = options.imageSmoothingEnabled,
                imageSmoothingEnabled = _options$imageSmoothi === undefined ? true : _options$imageSmoothi,
                imageSmoothingQuality = options.imageSmoothingQuality;


            context.imageSmoothingEnabled = imageSmoothingEnabled;

            if (imageSmoothingQuality) {
                context.imageSmoothingQuality = imageSmoothingQuality;
            }

            // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
            var sourceWidth = source.width;
            var sourceHeight = source.height;

            // Source canvas parameters
            var srcX = x;
            var srcY = y;
            var srcWidth = void 0;
            var srcHeight = void 0;

            // Destination canvas parameters
            var dstX = void 0;
            var dstY = void 0;
            var dstWidth = void 0;
            var dstHeight = void 0;

            if (srcX <= -initialWidth || srcX > sourceWidth) {
                srcX = 0;
                srcWidth = 0;
                dstX = 0;
                dstWidth = 0;
            } else if (srcX <= 0) {
                dstX = -srcX;
                srcX = 0;
                srcWidth = Math.min(sourceWidth, initialWidth + srcX);
                dstWidth = srcWidth;
            } else if (srcX <= sourceWidth) {
                dstX = 0;
                srcWidth = Math.min(initialWidth, sourceWidth - srcX);
                dstWidth = srcWidth;
            }

            if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
                srcY = 0;
                srcHeight = 0;
                dstY = 0;
                dstHeight = 0;
            } else if (srcY <= 0) {
                dstY = -srcY;
                srcY = 0;
                srcHeight = Math.min(sourceHeight, initialHeight + srcY);
                dstHeight = srcHeight;
            } else if (srcY <= sourceHeight) {
                dstY = 0;
                srcHeight = Math.min(initialHeight, sourceHeight - srcY);
                dstHeight = srcHeight;
            }

            // All the numerical parameters should be integer for `drawImage`
            // https://github.com/fengyuanchen/cropper/issues/476
            var params = [srcX, srcY, srcWidth, srcHeight];

            // Avoid "IndexSizeError"
            if (dstWidth > 0 && dstHeight > 0) {
                var scale = width / initialWidth;

                params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
            }

            context.drawImage.apply(context, [source].concat(_toConsumableArray$1($.map(params, function (param) {
                return Math.floor(normalizeDecimalNumber(param));
            }))));
            return canvas;
        },


        /**
         * Change the aspect ratio of the crop box.
         * @param {number} aspectRatio - The new aspect ratio.
         */
        setAspectRatio: function setAspectRatio(aspectRatio) {
            var options = this.options;


            if (!this.disabled && !isUndefined(aspectRatio)) {
                // 0 -> NaN
                options.aspectRatio = Math.max(0, aspectRatio) || NaN;

                if (this.ready) {
                    this.initCropBox();

                    if (this.cropped) {
                        this.renderCropBox();
                    }
                }
            }
        },


        /**
         * Change the drag mode.
         * @param {string} mode - The new drag mode.
         */
        setDragMode: function setDragMode(mode) {
            var options = this.options;

            var croppable = void 0;
            var movable = void 0;

            if (this.loaded && !this.disabled) {
                croppable = mode === DRAG_MODE_CROP;
                movable = options.movable && mode === DRAG_MODE_MOVE;
                mode = croppable || movable ? mode : DRAG_MODE_NONE;

                this.$dragBox.data(DATA_ACTION, mode).toggleClass(CLASS_CROP, croppable).toggleClass(CLASS_MOVE, movable);

                if (!options.cropBoxMovable) {
                    // Sync drag mode to crop box when it is not movable(#300)
                    this.$face.data(DATA_ACTION, mode).toggleClass(CLASS_CROP, croppable).toggleClass(CLASS_MOVE, movable);
                }
            }
        }
    };

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var Cropper = function () {
        /**
         * Create a new Cropper.
         * @param {Element} element - The target element for cropping.
         * @param {Object} [options={}] - The configuration options.
         */
        function Cropper(element) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, Cropper);

            if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
                throw new Error('The first argument is required and must be an <img> or <canvas> element.');
            }

            this.element = element;
            this.$element = $(element);
            this.options = $.extend({}, DEFAULTS, $.isPlainObject(options) && options);
            this.completed = false;
            this.cropped = false;
            this.disabled = false;
            this.isImg = false;
            this.limited = false;
            this.loaded = false;
            this.ready = false;
            this.replaced = false;
            this.wheeling = false;
            this.originalUrl = '';
            this.canvas = null;
            this.cropBox = null;
            this.pointers = {};
            this.init();
        }

        _createClass(Cropper, [{
            key: 'init',
            value: function init() {
                var $element = this.$element;

                var url = void 0;

                if ($element.is('img')) {
                    this.isImg = true;

                    // Should use `$.fn.attr` here. e.g.: "img/picture.jpg"
                    url = $element.attr('src') || '';
                    this.originalUrl = url;

                    // Stop when it's a blank image
                    if (!url) {
                        return;
                    }

                    // Should use `$.fn.prop` here. e.g.: "http://example.com/img/picture.jpg"
                    url = $element.prop('src');
                } else if ($element.is('canvas') && window.HTMLCanvasElement) {
                    url = $element[0].toDataURL();
                }

                this.load(url);
            }

            // A shortcut for triggering custom events

        }, {
            key: 'trigger',
            value: function trigger(type, data) {
                var e = $.Event(type, data);

                this.$element.trigger(e);

                return e;
            }
        }, {
            key: 'load',
            value: function load(url) {
                var _this = this;

                if (!url) {
                    return;
                }

                this.url = url;
                this.image = {};

                var $element = this.$element,
                    options = this.options;


                if (!options.checkOrientation || !window.ArrayBuffer) {
                    this.clone();
                    return;
                }

                // XMLHttpRequest disallows to open a Data URL in some browsers like IE11 and Safari
                if (REGEXP_DATA_URL.test(url)) {
                    if (REGEXP_DATA_URL_JPEG.test(url)) {
                        this.read(dataURLToArrayBuffer(url));
                    } else {
                        this.clone();
                    }

                    return;
                }

                var xhr = new XMLHttpRequest();

                xhr.onerror = function () {
                    _this.clone();
                };

                xhr.onload = function () {
                    _this.read(xhr.response);
                };

                if (options.checkCrossOrigin && isCrossOriginURL(url) && $element.prop('crossOrigin')) {
                    url = addTimestamp(url);
                }

                xhr.open('get', url);
                xhr.responseType = 'arraybuffer';
                xhr.withCredentials = $element.prop('crossOrigin') === 'use-credentials';
                xhr.send();
            }
        }, {
            key: 'read',
            value: function read(arrayBuffer) {
                var options = this.options,
                    image = this.image;

                var orientation = getOrientation(arrayBuffer);
                var rotate = 0;
                var scaleX = 1;
                var scaleY = 1;

                if (orientation > 1) {
                    this.url = arrayBufferToDataURL(arrayBuffer, 'image/jpeg');

                    var _parseOrientation = parseOrientation(orientation);

                    rotate = _parseOrientation.rotate;
                    scaleX = _parseOrientation.scaleX;
                    scaleY = _parseOrientation.scaleY;
                }

                if (options.rotatable) {
                    image.rotate = rotate;
                }

                if (options.scalable) {
                    image.scaleX = scaleX;
                    image.scaleY = scaleY;
                }

                this.clone();
            }
        }, {
            key: 'clone',
            value: function clone() {
                var $element = this.$element,
                    options = this.options,
                    url = this.url;

                var crossOrigin = '';
                var crossOriginUrl = void 0;

                if (options.checkCrossOrigin && isCrossOriginURL(url)) {
                    crossOrigin = $element.prop('crossOrigin');

                    if (crossOrigin) {
                        crossOriginUrl = url;
                    } else {
                        crossOrigin = 'anonymous';

                        // Bust cache (#148) when there is not a "crossOrigin" property
                        crossOriginUrl = addTimestamp(url);
                    }
                }

                this.crossOrigin = crossOrigin;
                this.crossOriginUrl = crossOriginUrl;

                var image = document.createElement('img');

                if (crossOrigin) {
                    image.crossOrigin = crossOrigin;
                }

                image.src = crossOriginUrl || url;

                var $clone = $(image);

                this.$clone = $clone;

                if (this.isImg) {
                    if (this.element.complete) {
                        this.start();
                    } else {
                        $element.one(EVENT_LOAD, $.proxy(this.start, this));
                    }
                } else {
                    $clone.one(EVENT_LOAD, $.proxy(this.start, this)).one(EVENT_ERROR, $.proxy(this.stop, this)).addClass(CLASS_HIDE).insertAfter($element);
                }
            }
        }, {
            key: 'start',
            value: function start() {
                var _this2 = this;

                var $clone = this.$clone;

                var $image = this.$element;

                if (!this.isImg) {
                    $clone.off(EVENT_ERROR, this.stop);
                    $image = $clone;
                }

                getImageNaturalSizes($image[0], function (naturalWidth, naturalHeight) {
                    $.extend(_this2.image, {
                        naturalWidth: naturalWidth,
                        naturalHeight: naturalHeight,
                        aspectRatio: naturalWidth / naturalHeight
                    });

                    _this2.loaded = true;
                    _this2.build();
                });
            }
        }, {
            key: 'stop',
            value: function stop() {
                this.$clone.remove();
                this.$clone = null;
            }
        }, {
            key: 'build',
            value: function build() {
                var _this3 = this;

                if (!this.loaded) {
                    return;
                }

                // Unbuild first when replace
                if (this.ready) {
                    this.unbuild();
                }

                var $element = this.$element,
                    options = this.options,
                    $clone = this.$clone;

                var $cropper = $(TEMPLATE);
                var $cropBox = $cropper.find('.' + NAMESPACE + '-crop-box');
                var $face = $cropBox.find('.' + NAMESPACE + '-face');

                // Create cropper elements
                this.$container = $element.parent();
                this.$cropper = $cropper;
                this.$canvas = $cropper.find('.' + NAMESPACE + '-canvas').append($clone);
                this.$dragBox = $cropper.find('.' + NAMESPACE + '-drag-box');
                this.$cropBox = $cropBox;
                this.$viewBox = $cropper.find('.' + NAMESPACE + '-view-box');
                this.$face = $face;

                // Hide the original image
                $element.addClass(CLASS_HIDDEN).after($cropper);

                // Show the clone image if is hidden
                if (!this.isImg) {
                    $clone.removeClass(CLASS_HIDE);
                }

                this.initPreview();
                this.bind();

                options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
                options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;

                this.cropped = options.autoCrop;

                if (options.autoCrop) {
                    if (options.modal) {
                        this.$dragBox.addClass(CLASS_MODAL);
                    }
                } else {
                    $cropBox.addClass(CLASS_HIDDEN);
                }

                if (!options.guides) {
                    $cropBox.find('.' + NAMESPACE + '-dashed').addClass(CLASS_HIDDEN);
                }

                if (!options.center) {
                    $cropBox.find('.' + NAMESPACE + '-center').addClass(CLASS_HIDDEN);
                }

                if (options.cropBoxMovable) {
                    $face.addClass(CLASS_MOVE).data(DATA_ACTION, ACTION_ALL);
                }

                if (!options.highlight) {
                    $face.addClass(CLASS_INVISIBLE);
                }

                if (options.background) {
                    $cropper.addClass(NAMESPACE + '-bg');
                }

                if (!options.cropBoxResizable) {
                    $cropBox.find('.' + NAMESPACE + '-line,.' + NAMESPACE + '-point').addClass(CLASS_HIDDEN);
                }

                this.setDragMode(options.dragMode);
                this.render();
                this.ready = true;
                this.setData(options.data);

                // Trigger the ready event asynchronously to keep `data('cropper')` is defined
                this.completing = setTimeout(function () {
                    if ($.isFunction(options.ready)) {
                        $element.one(EVENT_READY, options.ready);
                    }

                    _this3.trigger(EVENT_READY);
                    _this3.trigger(EVENT_CROP, _this3.getData());
                    _this3.completed = true;
                }, 0);
            }
        }, {
            key: 'unbuild',
            value: function unbuild() {
                if (!this.ready) {
                    return;
                }

                if (!this.completed) {
                    clearTimeout(this.completing);
                }

                this.ready = false;
                this.completed = false;
                this.initialImage = null;

                // Clear `initialCanvas` is necessary when replace
                this.initialCanvas = null;
                this.initialCropBox = null;
                this.container = null;
                this.canvas = null;

                // Clear `cropBox` is necessary when replace
                this.cropBox = null;
                this.unbind();

                this.resetPreview();
                this.$preview = null;

                this.$viewBox = null;
                this.$cropBox = null;
                this.$dragBox = null;
                this.$canvas = null;
                this.$container = null;

                this.$cropper.remove();
                this.$cropper = null;
            }

            /**
             * Change the default options.
             * @param {Object} options - The new default options.
             */

        }], [{
            key: 'setDefaults',
            value: function setDefaults(options) {
                $.extend(DEFAULTS, $.isPlainObject(options) && options);
            }
        }]);

        return Cropper;
    }();

    if ($.extend) {
        $.extend(Cropper.prototype, render, preview, events, handlers, change, methods);
    }

    if ($.fn) {
        var AnotherCropper = $.fn.cropper;

        $.fn.cropper = function jQueryCropper(option) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            var result = void 0;

            this.each(function (i, element) {
                var $element = $(element);
                var data = $element.data(NAMESPACE);

                if (!data) {
                    if (/destroy/.test(option)) {
                        return;
                    }

                    var options = $.extend({}, $element.data(), $.isPlainObject(option) && option);

                    data = new Cropper(element, options);
                    $element.data(NAMESPACE, data);
                }

                if (isString(option)) {
                    var fn = data[option];

                    if ($.isFunction(fn)) {
                        result = fn.apply(data, args);
                    }
                }
            });

            return isUndefined(result) ? this : result;
        };

        $.fn.cropper.Constructor = Cropper;
        $.fn.cropper.setDefaults = Cropper.setDefaults;
        $.fn.cropper.noConflict = function noConflict() {
            $.fn.cropper = AnotherCropper;
            return this;
        };
    }

})));

/* moment.js*/
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t() }(this, function () { "use strict"; var H; function f() { return H.apply(null, arguments) } function a(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) } function F(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) } function c(e, t) { return Object.prototype.hasOwnProperty.call(e, t) } function L(e) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length; for (var t in e) if (c(e, t)) return; return 1 } function o(e) { return void 0 === e } function u(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) } function V(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) } function G(e, t) { for (var n = [], s = e.length, i = 0; i < s; ++i)n.push(t(e[i], i)); return n } function E(e, t) { for (var n in t) c(t, n) && (e[n] = t[n]); return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e } function l(e, t, n, s) { return Pt(e, t, n, s, !0).utc() } function m(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidEra: null, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], era: null, meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf } function A(e) { if (null == e._isValid) { var t = m(e), n = j.call(t.parsedDateParts, function (e) { return null != e }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n); if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n; e._isValid = n } return e._isValid } function I(e) { var t = l(NaN); return null != e ? E(m(t), e) : m(t).userInvalidated = !0, t } var j = Array.prototype.some || function (e) { for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)if (s in t && e.call(this, t[s], s, t)) return !0; return !1 }, Z = f.momentProperties = [], z = !1; function $(e, t) { var n, s, i, r = Z.length; if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = m(t)), o(t._locale) || (e._locale = t._locale), 0 < r) for (n = 0; n < r; n++)o(i = t[s = Z[n]]) || (e[s] = i); return e } function q(e) { $(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === z && (z = !0, f.updateOffset(this), z = !1) } function h(e) { return e instanceof q || null != e && null != e._isAMomentObject } function B(e) { !1 === f.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) } function e(r, a) { var o = !0; return E(function () { if (null != f.deprecationHandler && f.deprecationHandler(null, r), o) { for (var e, t, n = [], s = arguments.length, i = 0; i < s; i++){ if (e = "", "object" == typeof arguments[i]) { for (t in e += "\n[" + i + "] ", arguments[0]) c(arguments[0], t) && (e += t + ": " + arguments[0][t] + ", "); e = e.slice(0, -2) } else e = arguments[i]; n.push(e) } B(r + "\nArguments: " + Array.prototype.slice.call(n).join("") + "\n" + (new Error).stack), o = !1 } return a.apply(this, arguments) }, a) } var J = {}; function Q(e, t) { null != f.deprecationHandler && f.deprecationHandler(e, t), J[e] || (B(t), J[e] = !0) } function d(e) { return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) } function X(e, t) { var n, s = E({}, e); for (n in t) c(t, n) && (F(e[n]) && F(t[n]) ? (s[n] = {}, E(s[n], e[n]), E(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]); for (n in e) c(e, n) && !c(t, n) && F(e[n]) && (s[n] = E({}, s[n])); return s } function K(e) { null != e && this.set(e) } f.suppressDeprecationWarnings = !1, f.deprecationHandler = null; var ee = Object.keys || function (e) { var t, n = []; for (t in e) c(e, t) && n.push(t); return n }; function r(e, t, n) { var s = "" + Math.abs(e); return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - s.length)).toString().substr(1) + s } var te = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ne = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, se = {}, ie = {}; function s(e, t, n, s) { var i = "string" == typeof s ? function () { return this[s]() } : s; e && (ie[e] = i), t && (ie[t[0]] = function () { return r(i.apply(this, arguments), t[1], t[2]) }), n && (ie[n] = function () { return this.localeData().ordinal(i.apply(this, arguments), e) }) } function re(e, t) { return e.isValid() ? (t = ae(t, e.localeData()), se[t] = se[t] || function (s) { for (var e, i = s.match(te), t = 0, r = i.length; t < r; t++)ie[i[t]] ? i[t] = ie[i[t]] : i[t] = (e = i[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, ""); return function (e) { for (var t = "", n = 0; n < r; n++)t += d(i[n]) ? i[n].call(e, s) : i[n]; return t } }(t), se[t](e)) : e.localeData().invalidDate() } function ae(e, t) { var n = 5; function s(e) { return t.longDateFormat(e) || e } for (ne.lastIndex = 0; 0 <= n && ne.test(e);)e = e.replace(ne, s), ne.lastIndex = 0, --n; return e } var oe = {}; function t(e, t) { var n = e.toLowerCase(); oe[n] = oe[n + "s"] = oe[t] = e } function _(e) { return "string" == typeof e ? oe[e] || oe[e.toLowerCase()] : void 0 } function ue(e) { var t, n, s = {}; for (n in e) c(e, n) && (t = _(n)) && (s[t] = e[n]); return s } var le = {}; function n(e, t) { le[e] = t } function he(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 } function y(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) } function g(e) { var e = +e, t = 0; return t = 0 != e && isFinite(e) ? y(e) : t } function de(t, n) { return function (e) { return null != e ? (fe(this, t, e), f.updateOffset(this, n), this) : ce(this, t) } } function ce(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN } function fe(e, t, n) { e.isValid() && !isNaN(n) && ("FullYear" === t && he(e.year()) && 1 === e.month() && 29 === e.date() ? (n = g(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), We(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)) } var i = /\d/, w = /\d\d/, me = /\d{3}/, _e = /\d{4}/, ye = /[+-]?\d{6}/, p = /\d\d?/, ge = /\d\d\d\d?/, we = /\d\d\d\d\d\d?/, pe = /\d{1,3}/, ve = /\d{1,4}/, ke = /[+-]?\d{1,6}/, Me = /\d+/, De = /[+-]?\d+/, Se = /Z|[+-]\d\d:?\d\d/gi, Ye = /Z|[+-]\d\d(?::?\d\d)?/gi, v = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i; function k(e, n, s) { be[e] = d(n) ? n : function (e, t) { return e && s ? s : n } } function Oe(e, t) { return c(be, e) ? be[e](t._strict, t._locale) : new RegExp(M(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) { return t || n || s || i }))) } function M(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var be = {}, xe = {}; function D(e, n) { var t, s, i = n; for ("string" == typeof e && (e = [e]), u(n) && (i = function (e, t) { t[n] = g(e) }), s = e.length, t = 0; t < s; t++)xe[e[t]] = i } function Te(e, i) { D(e, function (e, t, n, s) { n._w = n._w || {}, i(e, n._w, n, s) }) } var S, Y = 0, O = 1, b = 2, x = 3, T = 4, N = 5, Ne = 6, Pe = 7, Re = 8; function We(e, t) { if (isNaN(e) || isNaN(t)) return NaN; var n = (t % (n = 12) + n) % n; return e += (t - n) / 12, 1 == n ? he(e) ? 29 : 28 : 31 - n % 7 % 2 } S = Array.prototype.indexOf || function (e) { for (var t = 0; t < this.length; ++t)if (this[t] === e) return t; return -1 }, s("M", ["MM", 2], "Mo", function () { return this.month() + 1 }), s("MMM", 0, 0, function (e) { return this.localeData().monthsShort(this, e) }), s("MMMM", 0, 0, function (e) { return this.localeData().months(this, e) }), t("month", "M"), n("month", 8), k("M", p), k("MM", p, w), k("MMM", function (e, t) { return t.monthsShortRegex(e) }), k("MMMM", function (e, t) { return t.monthsRegex(e) }), D(["M", "MM"], function (e, t) { t[O] = g(e) - 1 }), D(["MMM", "MMMM"], function (e, t, n, s) { s = n._locale.monthsParse(e, s, n._strict); null != s ? t[O] = s : m(n).invalidMonth = e }); var Ce = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Ue = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), He = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Fe = v, Le = v; function Ve(e, t) { var n; if (e.isValid()) { if ("string" == typeof t) if (/^\d+$/.test(t)) t = g(t); else if (!u(t = e.localeData().monthsParse(t))) return; n = Math.min(e.date(), We(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n) } } function Ge(e) { return null != e ? (Ve(this, e), f.updateOffset(this, !0), this) : ce(this, "Month") } function Ee() { function e(e, t) { return t.length - e.length } for (var t, n = [], s = [], i = [], r = 0; r < 12; r++)t = l([2e3, r]), n.push(this.monthsShort(t, "")), s.push(this.months(t, "")), i.push(this.months(t, "")), i.push(this.monthsShort(t, "")); for (n.sort(e), s.sort(e), i.sort(e), r = 0; r < 12; r++)n[r] = M(n[r]), s[r] = M(s[r]); for (r = 0; r < 24; r++)i[r] = M(i[r]); this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i") } function Ae(e) { return he(e) ? 366 : 365 } s("Y", 0, 0, function () { var e = this.year(); return e <= 9999 ? r(e, 4) : "+" + e }), s(0, ["YY", 2], 0, function () { return this.year() % 100 }), s(0, ["YYYY", 4], 0, "year"), s(0, ["YYYYY", 5], 0, "year"), s(0, ["YYYYYY", 6, !0], 0, "year"), t("year", "y"), n("year", 1), k("Y", De), k("YY", p, w), k("YYYY", ve, _e), k("YYYYY", ke, ye), k("YYYYYY", ke, ye), D(["YYYYY", "YYYYYY"], Y), D("YYYY", function (e, t) { t[Y] = 2 === e.length ? f.parseTwoDigitYear(e) : g(e) }), D("YY", function (e, t) { t[Y] = f.parseTwoDigitYear(e) }), D("Y", function (e, t) { t[Y] = parseInt(e, 10) }), f.parseTwoDigitYear = function (e) { return g(e) + (68 < g(e) ? 1900 : 2e3) }; var Ie = de("FullYear", !0); function je(e, t, n, s, i, r, a) { var o; return e < 100 && 0 <= e ? (o = new Date(e + 400, t, n, s, i, r, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, s, i, r, a), o } function Ze(e) { var t; return e < 100 && 0 <= e ? ((t = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, t)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t } function ze(e, t, n) { n = 7 + t - n; return n - (7 + Ze(e, 0, n).getUTCDay() - t) % 7 - 1 } function $e(e, t, n, s, i) { var r, t = 1 + 7 * (t - 1) + (7 + n - s) % 7 + ze(e, s, i), n = t <= 0 ? Ae(r = e - 1) + t : t > Ae(e) ? (r = e + 1, t - Ae(e)) : (r = e, t); return { year: r, dayOfYear: n } } function qe(e, t, n) { var s, i, r = ze(e.year(), t, n), r = Math.floor((e.dayOfYear() - r - 1) / 7) + 1; return r < 1 ? s = r + P(i = e.year() - 1, t, n) : r > P(e.year(), t, n) ? (s = r - P(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = r), { week: s, year: i } } function P(e, t, n) { var s = ze(e, t, n), t = ze(e + 1, t, n); return (Ae(e) - s + t) / 7 } s("w", ["ww", 2], "wo", "week"), s("W", ["WW", 2], "Wo", "isoWeek"), t("week", "w"), t("isoWeek", "W"), n("week", 5), n("isoWeek", 5), k("w", p), k("ww", p, w), k("W", p), k("WW", p, w), Te(["w", "ww", "W", "WW"], function (e, t, n, s) { t[s.substr(0, 1)] = g(e) }); function Be(e, t) { return e.slice(t, 7).concat(e.slice(0, t)) } s("d", 0, "do", "day"), s("dd", 0, 0, function (e) { return this.localeData().weekdaysMin(this, e) }), s("ddd", 0, 0, function (e) { return this.localeData().weekdaysShort(this, e) }), s("dddd", 0, 0, function (e) { return this.localeData().weekdays(this, e) }), s("e", 0, 0, "weekday"), s("E", 0, 0, "isoWeekday"), t("day", "d"), t("weekday", "e"), t("isoWeekday", "E"), n("day", 11), n("weekday", 11), n("isoWeekday", 11), k("d", p), k("e", p), k("E", p), k("dd", function (e, t) { return t.weekdaysMinRegex(e) }), k("ddd", function (e, t) { return t.weekdaysShortRegex(e) }), k("dddd", function (e, t) { return t.weekdaysRegex(e) }), Te(["dd", "ddd", "dddd"], function (e, t, n, s) { s = n._locale.weekdaysParse(e, s, n._strict); null != s ? t.d = s : m(n).invalidWeekday = e }), Te(["d", "e", "E"], function (e, t, n, s) { t[s] = g(e) }); var Je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ke = v, et = v, tt = v; function nt() { function e(e, t) { return t.length - e.length } for (var t, n, s, i = [], r = [], a = [], o = [], u = 0; u < 7; u++)s = l([2e3, 1]).day(u), t = M(this.weekdaysMin(s, "")), n = M(this.weekdaysShort(s, "")), s = M(this.weekdays(s, "")), i.push(t), r.push(n), a.push(s), o.push(t), o.push(n), o.push(s); i.sort(e), r.sort(e), a.sort(e), o.sort(e), this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i") } function st() { return this.hours() % 12 || 12 } function it(e, t) { s(e, 0, 0, function () { return this.localeData().meridiem(this.hours(), this.minutes(), t) }) } function rt(e, t) { return t._meridiemParse } s("H", ["HH", 2], 0, "hour"), s("h", ["hh", 2], 0, st), s("k", ["kk", 2], 0, function () { return this.hours() || 24 }), s("hmm", 0, 0, function () { return "" + st.apply(this) + r(this.minutes(), 2) }), s("hmmss", 0, 0, function () { return "" + st.apply(this) + r(this.minutes(), 2) + r(this.seconds(), 2) }), s("Hmm", 0, 0, function () { return "" + this.hours() + r(this.minutes(), 2) }), s("Hmmss", 0, 0, function () { return "" + this.hours() + r(this.minutes(), 2) + r(this.seconds(), 2) }), it("a", !0), it("A", !1), t("hour", "h"), n("hour", 13), k("a", rt), k("A", rt), k("H", p), k("h", p), k("k", p), k("HH", p, w), k("hh", p, w), k("kk", p, w), k("hmm", ge), k("hmmss", we), k("Hmm", ge), k("Hmmss", we), D(["H", "HH"], x), D(["k", "kk"], function (e, t, n) { e = g(e); t[x] = 24 === e ? 0 : e }), D(["a", "A"], function (e, t, n) { n._isPm = n._locale.isPM(e), n._meridiem = e }), D(["h", "hh"], function (e, t, n) { t[x] = g(e), m(n).bigHour = !0 }), D("hmm", function (e, t, n) { var s = e.length - 2; t[x] = g(e.substr(0, s)), t[T] = g(e.substr(s)), m(n).bigHour = !0 }), D("hmmss", function (e, t, n) { var s = e.length - 4, i = e.length - 2; t[x] = g(e.substr(0, s)), t[T] = g(e.substr(s, 2)), t[N] = g(e.substr(i)), m(n).bigHour = !0 }), D("Hmm", function (e, t, n) { var s = e.length - 2; t[x] = g(e.substr(0, s)), t[T] = g(e.substr(s)) }), D("Hmmss", function (e, t, n) { var s = e.length - 4, i = e.length - 2; t[x] = g(e.substr(0, s)), t[T] = g(e.substr(s, 2)), t[N] = g(e.substr(i)) }); v = de("Hours", !0); var at, ot = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", w: "a week", ww: "%d weeks", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Ce, monthsShort: Ue, week: { dow: 0, doy: 6 }, weekdays: Je, weekdaysMin: Xe, weekdaysShort: Qe, meridiemParse: /[ap]\.?m?\.?/i }, R = {}, ut = {}; function lt(e) { return e && e.toLowerCase().replace("_", "-") } function ht(e) { for (var t, n, s, i, r = 0; r < e.length;){ for (t = (i = lt(e[r]).split("-")).length, n = (n = lt(e[r + 1])) ? n.split("-") : null; 0 < t;){ if (s = dt(i.slice(0, t).join("-"))) return s; if (n && n.length >= t && function (e, t) { for (var n = Math.min(e.length, t.length), s = 0; s < n; s += 1)if (e[s] !== t[s]) return s; return n }(i, n) >= t - 1) break; t-- } r++ } return at } function dt(t) { var e; if (void 0 === R[t] && "undefined" != typeof module && module && module.exports && null != t.match("^[^/\\\\]*$")) try { e = at._abbr, require("./locale/" + t), ct(e) } catch (e) { R[t] = null } return R[t] } function ct(e, t) { return e && ((t = o(t) ? mt(e) : ft(e, t)) ? at = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), at._abbr } function ft(e, t) { if (null === t) return delete R[e], null; var n, s = ot; if (t.abbr = e, null != R[e]) Q("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = R[e]._config; else if (null != t.parentLocale) if (null != R[t.parentLocale]) s = R[t.parentLocale]._config; else { if (null == (n = dt(t.parentLocale))) return ut[t.parentLocale] || (ut[t.parentLocale] = []), ut[t.parentLocale].push({ name: e, config: t }), null; s = n._config } return R[e] = new K(X(s, t)), ut[e] && ut[e].forEach(function (e) { ft(e.name, e.config) }), ct(e), R[e] } function mt(e) { var t; if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e)) return at; if (!a(e)) { if (t = dt(e)) return t; e = [e] } return ht(e) } function _t(e) { var t = e._a; return t && -2 === m(e).overflow && (t = t[O] < 0 || 11 < t[O] ? O : t[b] < 1 || t[b] > We(t[Y], t[O]) ? b : t[x] < 0 || 24 < t[x] || 24 === t[x] && (0 !== t[T] || 0 !== t[N] || 0 !== t[Ne]) ? x : t[T] < 0 || 59 < t[T] ? T : t[N] < 0 || 59 < t[N] ? N : t[Ne] < 0 || 999 < t[Ne] ? Ne : -1, m(e)._overflowDayOfYear && (t < Y || b < t) && (t = b), m(e)._overflowWeeks && -1 === t && (t = Pe), m(e)._overflowWeekday && -1 === t && (t = Re), m(e).overflow = t), e } var yt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, gt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, wt = /Z|[+-]\d\d(?::?\d\d)?/, pt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]], vt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], kt = /^\/?Date\((-?\d+)/i, Mt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Dt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 }; function St(e) { var t, n, s, i, r, a, o = e._i, u = yt.exec(o) || gt.exec(o), o = pt.length, l = vt.length; if (u) { for (m(e).iso = !0, t = 0, n = o; t < n; t++)if (pt[t][1].exec(u[1])) { i = pt[t][0], s = !1 !== pt[t][2]; break } if (null == i) e._isValid = !1; else { if (u[3]) { for (t = 0, n = l; t < n; t++)if (vt[t][1].exec(u[3])) { r = (u[2] || " ") + vt[t][0]; break } if (null == r) return void (e._isValid = !1) } if (s || null == r) { if (u[4]) { if (!wt.exec(u[4])) return void (e._isValid = !1); a = "Z" } e._f = i + (r || "") + (a || ""), Tt(e) } else e._isValid = !1 } } else e._isValid = !1 } function Yt(e, t, n, s, i, r) { e = [function (e) { e = parseInt(e, 10); { if (e <= 49) return 2e3 + e; if (e <= 999) return 1900 + e } return e }(e), Ue.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)]; return r && e.push(parseInt(r, 10)), e } function Ot(e) { var t, n, s, i, r = Mt.exec(e._i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")); r ? (t = Yt(r[4], r[3], r[2], r[5], r[6], r[7]), n = r[1], s = t, i = e, n && Qe.indexOf(n) !== new Date(s[0], s[1], s[2]).getDay() ? (m(i).weekdayMismatch = !0, i._isValid = !1) : (e._a = t, e._tzm = (n = r[8], s = r[9], i = r[10], n ? Dt[n] : s ? 0 : 60 * (((n = parseInt(i, 10)) - (s = n % 100)) / 100) + s), e._d = Ze.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), m(e).rfc2822 = !0)) : e._isValid = !1 } function bt(e, t, n) { return null != e ? e : null != t ? t : n } function xt(e) { var t, n, s, i, r, a, o, u, l, h, d, c = []; if (!e._d) { for (s = e, i = new Date(f.now()), n = s._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()], e._w && null == e._a[b] && null == e._a[O] && (null != (i = (s = e)._w).GG || null != i.W || null != i.E ? (u = 1, l = 4, r = bt(i.GG, s._a[Y], qe(W(), 1, 4).year), a = bt(i.W, 1), ((o = bt(i.E, 1)) < 1 || 7 < o) && (h = !0)) : (u = s._locale._week.dow, l = s._locale._week.doy, d = qe(W(), u, l), r = bt(i.gg, s._a[Y], d.year), a = bt(i.w, d.week), null != i.d ? ((o = i.d) < 0 || 6 < o) && (h = !0) : null != i.e ? (o = i.e + u, (i.e < 0 || 6 < i.e) && (h = !0)) : o = u), a < 1 || a > P(r, u, l) ? m(s)._overflowWeeks = !0 : null != h ? m(s)._overflowWeekday = !0 : (d = $e(r, a, o, u, l), s._a[Y] = d.year, s._dayOfYear = d.dayOfYear)), null != e._dayOfYear && (i = bt(e._a[Y], n[Y]), (e._dayOfYear > Ae(i) || 0 === e._dayOfYear) && (m(e)._overflowDayOfYear = !0), h = Ze(i, 0, e._dayOfYear), e._a[O] = h.getUTCMonth(), e._a[b] = h.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t)e._a[t] = c[t] = n[t]; for (; t < 7; t++)e._a[t] = c[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t]; 24 === e._a[x] && 0 === e._a[T] && 0 === e._a[N] && 0 === e._a[Ne] && (e._nextDay = !0, e._a[x] = 0), e._d = (e._useUTC ? Ze : je).apply(null, c), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[x] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (m(e).weekdayMismatch = !0) } } function Tt(e) { if (e._f === f.ISO_8601) St(e); else if (e._f === f.RFC_2822) Ot(e); else { e._a = [], m(e).empty = !0; for (var t, n, s, i, r, a = "" + e._i, o = a.length, u = 0, l = ae(e._f, e._locale).match(te) || [], h = l.length, d = 0; d < h; d++)n = l[d], (t = (a.match(Oe(n, e)) || [])[0]) && (0 < (s = a.substr(0, a.indexOf(t))).length && m(e).unusedInput.push(s), a = a.slice(a.indexOf(t) + t.length), u += t.length), ie[n] ? (t ? m(e).empty = !1 : m(e).unusedTokens.push(n), s = n, r = e, null != (i = t) && c(xe, s) && xe[s](i, r._a, r, s)) : e._strict && !t && m(e).unusedTokens.push(n); m(e).charsLeftOver = o - u, 0 < a.length && m(e).unusedInput.push(a), e._a[x] <= 12 && !0 === m(e).bigHour && 0 < e._a[x] && (m(e).bigHour = void 0), m(e).parsedDateParts = e._a.slice(0), m(e).meridiem = e._meridiem, e._a[x] = function (e, t, n) { if (null == n) return t; return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((e = e.isPM(n)) && t < 12 && (t += 12), t = e || 12 !== t ? t : 0) : t }(e._locale, e._a[x], e._meridiem), null !== (o = m(e).era) && (e._a[Y] = e._locale.erasConvertYear(o, e._a[Y])), xt(e), _t(e) } } function Nt(e) { var t, n, s, i = e._i, r = e._f; if (e._locale = e._locale || mt(e._l), null === i || void 0 === r && "" === i) return I({ nullInput: !0 }); if ("string" == typeof i && (e._i = i = e._locale.preparse(i)), h(i)) return new q(_t(i)); if (V(i)) e._d = i; else if (a(r)) !function (e) { var t, n, s, i, r, a, o = !1, u = e._f.length; if (0 === u) return m(e).invalidFormat = !0, e._d = new Date(NaN); for (i = 0; i < u; i++)r = 0, a = !1, t = $({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], Tt(t), A(t) && (a = !0), r = (r += m(t).charsLeftOver) + 10 * m(t).unusedTokens.length, m(t).score = r, o ? r < s && (s = r, n = t) : (null == s || r < s || a) && (s = r, n = t, a && (o = !0)); E(e, n || t) }(e); else if (r) Tt(e); else if (o(r = (i = e)._i)) i._d = new Date(f.now()); else V(r) ? i._d = new Date(r.valueOf()) : "string" == typeof r ? (n = i, null !== (t = kt.exec(n._i)) ? n._d = new Date(+t[1]) : (St(n), !1 === n._isValid && (delete n._isValid, Ot(n), !1 === n._isValid && (delete n._isValid, n._strict ? n._isValid = !1 : f.createFromInputFallback(n))))) : a(r) ? (i._a = G(r.slice(0), function (e) { return parseInt(e, 10) }), xt(i)) : F(r) ? (t = i)._d || (s = void 0 === (n = ue(t._i)).day ? n.date : n.day, t._a = G([n.year, n.month, s, n.hour, n.minute, n.second, n.millisecond], function (e) { return e && parseInt(e, 10) }), xt(t)) : u(r) ? i._d = new Date(r) : f.createFromInputFallback(i); return A(e) || (e._d = null), e } function Pt(e, t, n, s, i) { var r = {}; return !0 !== t && !1 !== t || (s = t, t = void 0), !0 !== n && !1 !== n || (s = n, n = void 0), (F(e) && L(e) || a(e) && 0 === e.length) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = i, r._l = n, r._i = e, r._f = t, r._strict = s, (i = new q(_t(Nt(i = r))))._nextDay && (i.add(1, "d"), i._nextDay = void 0), i } function W(e, t, n, s) { return Pt(e, t, n, s, !1) } f.createFromInputFallback = e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), f.ISO_8601 = function () { }, f.RFC_2822 = function () { }; ge = e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () { var e = W.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : I() }), we = e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () { var e = W.apply(null, arguments); return this.isValid() && e.isValid() ? this < e ? this : e : I() }); function Rt(e, t) { var n, s; if (!(t = 1 === t.length && a(t[0]) ? t[0] : t).length) return W(); for (n = t[0], s = 1; s < t.length; ++s)t[s].isValid() && !t[s][e](n) || (n = t[s]); return n } var Wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"]; function Ct(e) { var e = ue(e), t = e.year || 0, n = e.quarter || 0, s = e.month || 0, i = e.week || e.isoWeek || 0, r = e.day || 0, a = e.hour || 0, o = e.minute || 0, u = e.second || 0, l = e.millisecond || 0; this._isValid = function (e) { var t, n, s = !1, i = Wt.length; for (t in e) if (c(e, t) && (-1 === S.call(Wt, t) || null != e[t] && isNaN(e[t]))) return !1; for (n = 0; n < i; ++n)if (e[Wt[n]]) { if (s) return !1; parseFloat(e[Wt[n]]) !== g(e[Wt[n]]) && (s = !0) } return !0 }(e), this._milliseconds = +l + 1e3 * u + 6e4 * o + 1e3 * a * 60 * 60, this._days = +r + 7 * i, this._months = +s + 3 * n + 12 * t, this._data = {}, this._locale = mt(), this._bubble() } function Ut(e) { return e instanceof Ct } function Ht(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) } function Ft(e, n) { s(e, 0, 0, function () { var e = this.utcOffset(), t = "+"; return e < 0 && (e = -e, t = "-"), t + r(~~(e / 60), 2) + n + r(~~e % 60, 2) }) } Ft("Z", ":"), Ft("ZZ", ""), k("Z", Ye), k("ZZ", Ye), D(["Z", "ZZ"], function (e, t, n) { n._useUTC = !0, n._tzm = Vt(Ye, e) }); var Lt = /([\+\-]|\d\d)/gi; function Vt(e, t) { var t = (t || "").match(e); return null === t ? null : 0 === (t = 60 * (e = ((t[t.length - 1] || []) + "").match(Lt) || ["-", 0, 0])[1] + g(e[2])) ? 0 : "+" === e[0] ? t : -t } function Gt(e, t) { var n; return t._isUTC ? (t = t.clone(), n = (h(e) || V(e) ? e : W(e)).valueOf() - t.valueOf(), t._d.setTime(t._d.valueOf() + n), f.updateOffset(t, !1), t) : W(e).local() } function Et(e) { return -Math.round(e._d.getTimezoneOffset()) } function At() { return !!this.isValid() && (this._isUTC && 0 === this._offset) } f.updateOffset = function () { }; var It = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, jt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/; function C(e, t) { var n, s = e, i = null; return Ut(e) ? s = { ms: e._milliseconds, d: e._days, M: e._months } : u(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (i = It.exec(e)) ? (n = "-" === i[1] ? -1 : 1, s = { y: 0, d: g(i[b]) * n, h: g(i[x]) * n, m: g(i[T]) * n, s: g(i[N]) * n, ms: g(Ht(1e3 * i[Ne])) * n }) : (i = jt.exec(e)) ? (n = "-" === i[1] ? -1 : 1, s = { y: Zt(i[2], n), M: Zt(i[3], n), w: Zt(i[4], n), d: Zt(i[5], n), h: Zt(i[6], n), m: Zt(i[7], n), s: Zt(i[8], n) }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (t = function (e, t) { var n; if (!e.isValid() || !t.isValid()) return { milliseconds: 0, months: 0 }; t = Gt(t, e), e.isBefore(t) ? n = zt(e, t) : ((n = zt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months); return n }(W(s.from), W(s.to)), (s = {}).ms = t.milliseconds, s.M = t.months), i = new Ct(s), Ut(e) && c(e, "_locale") && (i._locale = e._locale), Ut(e) && c(e, "_isValid") && (i._isValid = e._isValid), i } function Zt(e, t) { e = e && parseFloat(e.replace(",", ".")); return (isNaN(e) ? 0 : e) * t } function zt(e, t) { var n = {}; return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n } function $t(s, i) { return function (e, t) { var n; return null === t || isNaN(+t) || (Q(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), qt(this, C(e, t), s), this } } function qt(e, t, n, s) { var i = t._milliseconds, r = Ht(t._days), t = Ht(t._months); e.isValid() && (s = null == s || s, t && Ve(e, ce(e, "Month") + t * n), r && fe(e, "Date", ce(e, "Date") + r * n), i && e._d.setTime(e._d.valueOf() + i * n), s && f.updateOffset(e, r || t)) } C.fn = Ct.prototype, C.invalid = function () { return C(NaN) }; Ce = $t(1, "add"), Je = $t(-1, "subtract"); function Bt(e) { return "string" == typeof e || e instanceof String } function Jt(e) { return h(e) || V(e) || Bt(e) || u(e) || function (t) { var e = a(t), n = !1; e && (n = 0 === t.filter(function (e) { return !u(e) && Bt(t) }).length); return e && n }(e) || function (e) { var t, n, s = F(e) && !L(e), i = !1, r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], a = r.length; for (t = 0; t < a; t += 1)n = r[t], i = i || c(e, n); return s && i }(e) || null == e } function Qt(e, t) { if (e.date() < t.date()) return -Qt(t, e); var n = 12 * (t.year() - e.year()) + (t.month() - e.month()), s = e.clone().add(n, "months"), t = t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(1 + n, "months") - s); return -(n + t) || 0 } function Xt(e) { return void 0 === e ? this._locale._abbr : (null != (e = mt(e)) && (this._locale = e), this) } f.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", f.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; Xe = e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) { return void 0 === e ? this.localeData() : this.locale(e) }); function Kt() { return this._locale } var en = 126227808e5; function tn(e, t) { return (e % t + t) % t } function nn(e, t, n) { return e < 100 && 0 <= e ? new Date(e + 400, t, n) - en : new Date(e, t, n).valueOf() } function sn(e, t, n) { return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - en : Date.UTC(e, t, n) } function rn(e, t) { return t.erasAbbrRegex(e) } function an() { for (var e = [], t = [], n = [], s = [], i = this.eras(), r = 0, a = i.length; r < a; ++r)t.push(M(i[r].name)), e.push(M(i[r].abbr)), n.push(M(i[r].narrow)), s.push(M(i[r].name)), s.push(M(i[r].abbr)), s.push(M(i[r].narrow)); this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i") } function on(e, t) { s(0, [e, e.length], 0, t) } function un(e, t, n, s, i) { var r; return null == e ? qe(this, s, i).year : (r = P(e, s, i), function (e, t, n, s, i) { e = $e(e, t, n, s, i), t = Ze(e.year, 0, e.dayOfYear); return this.year(t.getUTCFullYear()), this.month(t.getUTCMonth()), this.date(t.getUTCDate()), this }.call(this, e, t = r < t ? r : t, n, s, i)) } s("N", 0, 0, "eraAbbr"), s("NN", 0, 0, "eraAbbr"), s("NNN", 0, 0, "eraAbbr"), s("NNNN", 0, 0, "eraName"), s("NNNNN", 0, 0, "eraNarrow"), s("y", ["y", 1], "yo", "eraYear"), s("y", ["yy", 2], 0, "eraYear"), s("y", ["yyy", 3], 0, "eraYear"), s("y", ["yyyy", 4], 0, "eraYear"), k("N", rn), k("NN", rn), k("NNN", rn), k("NNNN", function (e, t) { return t.erasNameRegex(e) }), k("NNNNN", function (e, t) { return t.erasNarrowRegex(e) }), D(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, s) { s = n._locale.erasParse(e, s, n._strict); s ? m(n).era = s : m(n).invalidEra = e }), k("y", Me), k("yy", Me), k("yyy", Me), k("yyyy", Me), k("yo", function (e, t) { return t._eraYearOrdinalRegex || Me }), D(["y", "yy", "yyy", "yyyy"], Y), D(["yo"], function (e, t, n, s) { var i; n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Y] = n._locale.eraYearOrdinalParse(e, i) : t[Y] = parseInt(e, 10) }), s(0, ["gg", 2], 0, function () { return this.weekYear() % 100 }), s(0, ["GG", 2], 0, function () { return this.isoWeekYear() % 100 }), on("gggg", "weekYear"), on("ggggg", "weekYear"), on("GGGG", "isoWeekYear"), on("GGGGG", "isoWeekYear"), t("weekYear", "gg"), t("isoWeekYear", "GG"), n("weekYear", 1), n("isoWeekYear", 1), k("G", De), k("g", De), k("GG", p, w), k("gg", p, w), k("GGGG", ve, _e), k("gggg", ve, _e), k("GGGGG", ke, ye), k("ggggg", ke, ye), Te(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) { t[s.substr(0, 2)] = g(e) }), Te(["gg", "GG"], function (e, t, n, s) { t[s] = f.parseTwoDigitYear(e) }), s("Q", 0, "Qo", "quarter"), t("quarter", "Q"), n("quarter", 7), k("Q", i), D("Q", function (e, t) { t[O] = 3 * (g(e) - 1) }), s("D", ["DD", 2], "Do", "date"), t("date", "D"), n("date", 9), k("D", p), k("DD", p, w), k("Do", function (e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient }), D(["D", "DD"], b), D("Do", function (e, t) { t[b] = g(e.match(p)[0]) }); ve = de("Date", !0); s("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), t("dayOfYear", "DDD"), n("dayOfYear", 4), k("DDD", pe), k("DDDD", me), D(["DDD", "DDDD"], function (e, t, n) { n._dayOfYear = g(e) }), s("m", ["mm", 2], 0, "minute"), t("minute", "m"), n("minute", 14), k("m", p), k("mm", p, w), D(["m", "mm"], T); var ln, _e = de("Minutes", !1), ke = (s("s", ["ss", 2], 0, "second"), t("second", "s"), n("second", 15), k("s", p), k("ss", p, w), D(["s", "ss"], N), de("Seconds", !1)); for (s("S", 0, 0, function () { return ~~(this.millisecond() / 100) }), s(0, ["SS", 2], 0, function () { return ~~(this.millisecond() / 10) }), s(0, ["SSS", 3], 0, "millisecond"), s(0, ["SSSS", 4], 0, function () { return 10 * this.millisecond() }), s(0, ["SSSSS", 5], 0, function () { return 100 * this.millisecond() }), s(0, ["SSSSSS", 6], 0, function () { return 1e3 * this.millisecond() }), s(0, ["SSSSSSS", 7], 0, function () { return 1e4 * this.millisecond() }), s(0, ["SSSSSSSS", 8], 0, function () { return 1e5 * this.millisecond() }), s(0, ["SSSSSSSSS", 9], 0, function () { return 1e6 * this.millisecond() }), t("millisecond", "ms"), n("millisecond", 16), k("S", pe, i), k("SS", pe, w), k("SSS", pe, me), ln = "SSSS"; ln.length <= 9; ln += "S")k(ln, Me); function hn(e, t) { t[Ne] = g(1e3 * ("0." + e)) } for (ln = "S"; ln.length <= 9; ln += "S")D(ln, hn); ye = de("Milliseconds", !1), s("z", 0, 0, "zoneAbbr"), s("zz", 0, 0, "zoneName"); i = q.prototype; function dn(e) { return e } i.add = Ce, i.calendar = function (e, t) { 1 === arguments.length && (arguments[0] ? Jt(arguments[0]) ? (e = arguments[0], t = void 0) : function (e) { for (var t = F(e) && !L(e), n = !1, s = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], i = 0; i < s.length; i += 1)n = n || c(e, s[i]); return t && n }(arguments[0]) && (t = arguments[0], e = void 0) : t = e = void 0); var e = e || W(), n = Gt(e, this).startOf("day"), n = f.calendarFormat(this, n) || "sameElse", t = t && (d(t[n]) ? t[n].call(this, e) : t[n]); return this.format(t || this.localeData().calendar(n, this, W(e))) }, i.clone = function () { return new q(this) }, i.diff = function (e, t, n) { var s, i, r; if (!this.isValid()) return NaN; if (!(s = Gt(e, this)).isValid()) return NaN; switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = _(t)) { case "year": r = Qt(this, s) / 12; break; case "month": r = Qt(this, s); break; case "quarter": r = Qt(this, s) / 3; break; case "second": r = (this - s) / 1e3; break; case "minute": r = (this - s) / 6e4; break; case "hour": r = (this - s) / 36e5; break; case "day": r = (this - s - i) / 864e5; break; case "week": r = (this - s - i) / 6048e5; break; default: r = this - s }return n ? r : y(r) }, i.endOf = function (e) { var t, n; if (void 0 === (e = _(e)) || "millisecond" === e || !this.isValid()) return this; switch (n = this._isUTC ? sn : nn, e) { case "year": t = n(this.year() + 1, 0, 1) - 1; break; case "quarter": t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1; break; case "month": t = n(this.year(), this.month() + 1, 1) - 1; break; case "week": t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1; break; case "isoWeek": t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1; break; case "day": case "date": t = n(this.year(), this.month(), this.date() + 1) - 1; break; case "hour": t = this._d.valueOf(), t += 36e5 - tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1; break; case "minute": t = this._d.valueOf(), t += 6e4 - tn(t, 6e4) - 1; break; case "second": t = this._d.valueOf(), t += 1e3 - tn(t, 1e3) - 1 }return this._d.setTime(t), f.updateOffset(this, !0), this }, i.format = function (e) { return e = e || (this.isUtc() ? f.defaultFormatUtc : f.defaultFormat), e = re(this, e), this.localeData().postformat(e) }, i.from = function (e, t) { return this.isValid() && (h(e) && e.isValid() || W(e).isValid()) ? C({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, i.fromNow = function (e) { return this.from(W(), e) }, i.to = function (e, t) { return this.isValid() && (h(e) && e.isValid() || W(e).isValid()) ? C({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, i.toNow = function (e) { return this.to(W(), e) }, i.get = function (e) { return d(this[e = _(e)]) ? this[e]() : this }, i.invalidAt = function () { return m(this).overflow }, i.isAfter = function (e, t) { return e = h(e) ? e : W(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = _(t) || "millisecond") ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(t).valueOf()) }, i.isBefore = function (e, t) { return e = h(e) ? e : W(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = _(t) || "millisecond") ? this.valueOf() < e.valueOf() : this.clone().endOf(t).valueOf() < e.valueOf()) }, i.isBetween = function (e, t, n, s) { return e = h(e) ? e : W(e), t = h(t) ? t : W(t), !!(this.isValid() && e.isValid() && t.isValid()) && (("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))) }, i.isSame = function (e, t) { var e = h(e) ? e : W(e); return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = _(t) || "millisecond") ? this.valueOf() === e.valueOf() : (e = e.valueOf(), this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf())) }, i.isSameOrAfter = function (e, t) { return this.isSame(e, t) || this.isAfter(e, t) }, i.isSameOrBefore = function (e, t) { return this.isSame(e, t) || this.isBefore(e, t) }, i.isValid = function () { return A(this) }, i.lang = Xe, i.locale = Xt, i.localeData = Kt, i.max = we, i.min = ge, i.parsingFlags = function () { return E({}, m(this)) }, i.set = function (e, t) { if ("object" == typeof e) for (var n = function (e) { var t, n = []; for (t in e) c(e, t) && n.push({ unit: t, priority: le[t] }); return n.sort(function (e, t) { return e.priority - t.priority }), n }(e = ue(e)), s = n.length, i = 0; i < s; i++)this[n[i].unit](e[n[i].unit]); else if (d(this[e = _(e)])) return this[e](t); return this }, i.startOf = function (e) { var t, n; if (void 0 === (e = _(e)) || "millisecond" === e || !this.isValid()) return this; switch (n = this._isUTC ? sn : nn, e) { case "year": t = n(this.year(), 0, 1); break; case "quarter": t = n(this.year(), this.month() - this.month() % 3, 1); break; case "month": t = n(this.year(), this.month(), 1); break; case "week": t = n(this.year(), this.month(), this.date() - this.weekday()); break; case "isoWeek": t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)); break; case "day": case "date": t = n(this.year(), this.month(), this.date()); break; case "hour": t = this._d.valueOf(), t -= tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5); break; case "minute": t = this._d.valueOf(), t -= tn(t, 6e4); break; case "second": t = this._d.valueOf(), t -= tn(t, 1e3) }return this._d.setTime(t), f.updateOffset(this, !0), this }, i.subtract = Je, i.toArray = function () { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, i.toObject = function () { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, i.toDate = function () { return new Date(this.valueOf()) }, i.toISOString = function (e) { if (!this.isValid()) return null; var t = (e = !0 !== e) ? this.clone().utc() : this; return t.year() < 0 || 9999 < t.year() ? re(t, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : d(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", re(t, "Z")) : re(t, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, i.inspect = function () { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var e, t = "moment", n = ""; return this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", n = "Z"), t = "[" + t + '("]', e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", this.format(t + e + "-MM-DD[T]HH:mm:ss.SSS" + (n + '[")]')) }, "undefined" != typeof Symbol && null != Symbol.for && (i[Symbol.for("nodejs.util.inspect.custom")] = function () { return "Moment<" + this.format() + ">" }), i.toJSON = function () { return this.isValid() ? this.toISOString() : null }, i.toString = function () { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, i.unix = function () { return Math.floor(this.valueOf() / 1e3) }, i.valueOf = function () { return this._d.valueOf() - 6e4 * (this._offset || 0) }, i.creationData = function () { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, i.eraName = function () { for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n){ if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].name; if (t[n].until <= e && e <= t[n].since) return t[n].name } return "" }, i.eraNarrow = function () { for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n){ if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].narrow; if (t[n].until <= e && e <= t[n].since) return t[n].narrow } return "" }, i.eraAbbr = function () { for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n){ if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].abbr; if (t[n].until <= e && e <= t[n].since) return t[n].abbr } return "" }, i.eraYear = function () { for (var e, t, n = this.localeData().eras(), s = 0, i = n.length; s < i; ++s)if (e = n[s].since <= n[s].until ? 1 : -1, t = this.clone().startOf("day").valueOf(), n[s].since <= t && t <= n[s].until || n[s].until <= t && t <= n[s].since) return (this.year() - f(n[s].since).year()) * e + n[s].offset; return this.year() }, i.year = Ie, i.isLeapYear = function () { return he(this.year()) }, i.weekYear = function (e) { return un.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, i.isoWeekYear = function (e) { return un.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, i.quarter = i.quarters = function (e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, i.month = Ge, i.daysInMonth = function () { return We(this.year(), this.month()) }, i.week = i.weeks = function (e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") }, i.isoWeek = i.isoWeeks = function (e) { var t = qe(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") }, i.weeksInYear = function () { var e = this.localeData()._week; return P(this.year(), e.dow, e.doy) }, i.weeksInWeekYear = function () { var e = this.localeData()._week; return P(this.weekYear(), e.dow, e.doy) }, i.isoWeeksInYear = function () { return P(this.year(), 1, 4) }, i.isoWeeksInISOWeekYear = function () { return P(this.isoWeekYear(), 1, 4) }, i.date = ve, i.day = i.days = function (e) { if (!this.isValid()) return null != e ? this : NaN; var t, n, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - s, "d")) : s }, i.weekday = function (e) { if (!this.isValid()) return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") }, i.isoWeekday = function (e) { return this.isValid() ? null != e ? (t = e, n = this.localeData(), n = "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t, this.day(this.day() % 7 ? n : n - 7)) : this.day() || 7 : null != e ? this : NaN; var t, n }, i.dayOfYear = function (e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, i.hour = i.hours = v, i.minute = i.minutes = _e, i.second = i.seconds = ke, i.millisecond = i.milliseconds = ye, i.utcOffset = function (e, t, n) { var s, i = this._offset || 0; if (!this.isValid()) return null != e ? this : NaN; if (null == e) return this._isUTC ? i : Et(this); if ("string" == typeof e) { if (null === (e = Vt(Ye, e))) return this } else Math.abs(e) < 16 && !n && (e *= 60); return !this._isUTC && t && (s = Et(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), i !== e && (!t || this._changeInProgress ? qt(this, C(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, f.updateOffset(this, !0), this._changeInProgress = null)), this }, i.utc = function (e) { return this.utcOffset(0, e) }, i.local = function (e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Et(this), "m")), this }, i.parseZone = function () { var e; return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (e = Vt(Se, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)), this }, i.hasAlignedHourOffset = function (e) { return !!this.isValid() && (e = e ? W(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, i.isDST = function () { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, i.isLocal = function () { return !!this.isValid() && !this._isUTC }, i.isUtcOffset = function () { return !!this.isValid() && this._isUTC }, i.isUtc = At, i.isUTC = At, i.zoneAbbr = function () { return this._isUTC ? "UTC" : "" }, i.zoneName = function () { return this._isUTC ? "Coordinated Universal Time" : "" }, i.dates = e("dates accessor is deprecated. Use date instead.", ve), i.months = e("months accessor is deprecated. Use month instead", Ge), i.years = e("years accessor is deprecated. Use year instead", Ie), i.zone = e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) { return null != e ? (this.utcOffset(e = "string" != typeof e ? -e : e, t), this) : -this.utcOffset() }), i.isDSTShifted = e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () { if (!o(this._isDSTShifted)) return this._isDSTShifted; var e, t = {}; return $(t, this), (t = Nt(t))._a ? (e = (t._isUTC ? l : W)(t._a), this._isDSTShifted = this.isValid() && 0 < function (e, t, n) { for (var s = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), r = 0, a = 0; a < s; a++)(n && e[a] !== t[a] || !n && g(e[a]) !== g(t[a])) && r++; return r + i }(t._a, e.toArray())) : this._isDSTShifted = !1, this._isDSTShifted }); w = K.prototype; function cn(e, t, n, s) { var i = mt(), s = l().set(s, t); return i[n](s, e) } function fn(e, t, n) { if (u(e) && (t = e, e = void 0), e = e || "", null != t) return cn(e, t, n, "month"); for (var s = [], i = 0; i < 12; i++)s[i] = cn(e, i, n, "month"); return s } function mn(e, t, n, s) { t = ("boolean" == typeof e ? u(t) && (n = t, t = void 0) : (t = e, e = !1, u(n = t) && (n = t, t = void 0)), t || ""); var i, r = mt(), a = e ? r._week.dow : 0, o = []; if (null != n) return cn(t, (n + a) % 7, s, "day"); for (i = 0; i < 7; i++)o[i] = cn(t, (i + a) % 7, s, "day"); return o } w.calendar = function (e, t, n) { return d(e = this._calendar[e] || this._calendar.sameElse) ? e.call(t, n) : e }, w.longDateFormat = function (e) { var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()]; return t || !n ? t : (this._longDateFormat[e] = n.match(te).map(function (e) { return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e }).join(""), this._longDateFormat[e]) }, w.invalidDate = function () { return this._invalidDate }, w.ordinal = function (e) { return this._ordinal.replace("%d", e) }, w.preparse = dn, w.postformat = dn, w.relativeTime = function (e, t, n, s) { var i = this._relativeTime[n]; return d(i) ? i(e, t, n, s) : i.replace(/%d/i, e) }, w.pastFuture = function (e, t) { return d(e = this._relativeTime[0 < e ? "future" : "past"]) ? e(t) : e.replace(/%s/i, t) }, w.set = function (e) { var t, n; for (n in e) c(e, n) && (d(t = e[n]) ? this[n] = t : this["_" + n] = t); this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, w.eras = function (e, t) { for (var n, s = this._eras || mt("en")._eras, i = 0, r = s.length; i < r; ++i)switch ("string" == typeof s[i].since && (n = f(s[i].since).startOf("day"), s[i].since = n.valueOf()), typeof s[i].until) { case "undefined": s[i].until = 1 / 0; break; case "string": n = f(s[i].until).startOf("day").valueOf(), s[i].until = n.valueOf() }return s }, w.erasParse = function (e, t, n) { var s, i, r, a, o, u = this.eras(); for (e = e.toUpperCase(), s = 0, i = u.length; s < i; ++s)if (r = u[s].name.toUpperCase(), a = u[s].abbr.toUpperCase(), o = u[s].narrow.toUpperCase(), n) switch (t) { case "N": case "NN": case "NNN": if (a === e) return u[s]; break; case "NNNN": if (r === e) return u[s]; break; case "NNNNN": if (o === e) return u[s] } else if (0 <= [r, a, o].indexOf(e)) return u[s] }, w.erasConvertYear = function (e, t) { var n = e.since <= e.until ? 1 : -1; return void 0 === t ? f(e.since).year() : f(e.since).year() + (t - e.offset) * n }, w.erasAbbrRegex = function (e) { return c(this, "_erasAbbrRegex") || an.call(this), e ? this._erasAbbrRegex : this._erasRegex }, w.erasNameRegex = function (e) { return c(this, "_erasNameRegex") || an.call(this), e ? this._erasNameRegex : this._erasRegex }, w.erasNarrowRegex = function (e) { return c(this, "_erasNarrowRegex") || an.call(this), e ? this._erasNarrowRegex : this._erasRegex }, w.months = function (e, t) { return e ? (a(this._months) ? this._months : this._months[(this._months.isFormat || He).test(t) ? "format" : "standalone"])[e.month()] : a(this._months) ? this._months : this._months.standalone }, w.monthsShort = function (e, t) { return e ? (a(this._monthsShort) ? this._monthsShort : this._monthsShort[He.test(t) ? "format" : "standalone"])[e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, w.monthsParse = function (e, t, n) { var s, i; if (this._monthsParseExact) return function (e, t, n) { var s, i, r, e = e.toLocaleLowerCase(); if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)r = l([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase(); return n ? "MMM" === t ? -1 !== (i = S.call(this._shortMonthsParse, e)) ? i : null : -1 !== (i = S.call(this._longMonthsParse, e)) ? i : null : "MMM" === t ? -1 !== (i = S.call(this._shortMonthsParse, e)) || -1 !== (i = S.call(this._longMonthsParse, e)) ? i : null : -1 !== (i = S.call(this._longMonthsParse, e)) || -1 !== (i = S.call(this._shortMonthsParse, e)) ? i : null }.call(this, e, t, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++){ if (i = l([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (i = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s; if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s; if (!n && this._monthsParse[s].test(e)) return s } }, w.monthsRegex = function (e) { return this._monthsParseExact ? (c(this, "_monthsRegex") || Ee.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Le), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, w.monthsShortRegex = function (e) { return this._monthsParseExact ? (c(this, "_monthsRegex") || Ee.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, w.week = function (e) { return qe(e, this._week.dow, this._week.doy).week }, w.firstDayOfYear = function () { return this._week.doy }, w.firstDayOfWeek = function () { return this._week.dow }, w.weekdays = function (e, t) { return t = a(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"], !0 === e ? Be(t, this._week.dow) : e ? t[e.day()] : t }, w.weekdaysMin = function (e) { return !0 === e ? Be(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, w.weekdaysShort = function (e) { return !0 === e ? Be(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, w.weekdaysParse = function (e, t, n) { var s, i; if (this._weekdaysParseExact) return function (e, t, n) { var s, i, r, e = e.toLocaleLowerCase(); if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)r = l([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase(); return n ? "dddd" === t ? -1 !== (i = S.call(this._weekdaysParse, e)) ? i : null : "ddd" === t ? -1 !== (i = S.call(this._shortWeekdaysParse, e)) ? i : null : -1 !== (i = S.call(this._minWeekdaysParse, e)) ? i : null : "dddd" === t ? -1 !== (i = S.call(this._weekdaysParse, e)) || -1 !== (i = S.call(this._shortWeekdaysParse, e)) || -1 !== (i = S.call(this._minWeekdaysParse, e)) ? i : null : "ddd" === t ? -1 !== (i = S.call(this._shortWeekdaysParse, e)) || -1 !== (i = S.call(this._weekdaysParse, e)) || -1 !== (i = S.call(this._minWeekdaysParse, e)) ? i : null : -1 !== (i = S.call(this._minWeekdaysParse, e)) || -1 !== (i = S.call(this._weekdaysParse, e)) || -1 !== (i = S.call(this._shortWeekdaysParse, e)) ? i : null }.call(this, e, t, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++){ if (i = l([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (i = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s; if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s; if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s; if (!n && this._weekdaysParse[s].test(e)) return s } }, w.weekdaysRegex = function (e) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || nt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ke), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, w.weekdaysShortRegex = function (e) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || nt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = et), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, w.weekdaysMinRegex = function (e) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || nt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = tt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, w.isPM = function (e) { return "p" === (e + "").toLowerCase().charAt(0) }, w.meridiem = function (e, t, n) { return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM" }, ct("en", { eras: [{ since: "0001-01-01", until: 1 / 0, offset: 1, name: "Anno Domini", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC" }], dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) { var t = e % 10; return e + (1 === g(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th") } }), f.lang = e("moment.lang is deprecated. Use moment.locale instead.", ct), f.langData = e("moment.langData is deprecated. Use moment.localeData instead.", mt); var _n = Math.abs; function yn(e, t, n, s) { t = C(t, n); return e._milliseconds += s * t._milliseconds, e._days += s * t._days, e._months += s * t._months, e._bubble() } function gn(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) } function wn(e) { return 4800 * e / 146097 } function pn(e) { return 146097 * e / 4800 } function vn(e) { return function () { return this.as(e) } } pe = vn("ms"), me = vn("s"), Ce = vn("m"), we = vn("h"), ge = vn("d"), Je = vn("w"), v = vn("M"), _e = vn("Q"), ke = vn("y"); function kn(e) { return function () { return this.isValid() ? this._data[e] : NaN } } var ye = kn("milliseconds"), ve = kn("seconds"), Ie = kn("minutes"), w = kn("hours"), Mn = kn("days"), Dn = kn("months"), Sn = kn("years"); var Yn = Math.round, On = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 }; function bn(e, t, n, s) { var i = C(e).abs(), r = Yn(i.as("s")), a = Yn(i.as("m")), o = Yn(i.as("h")), u = Yn(i.as("d")), l = Yn(i.as("M")), h = Yn(i.as("w")), i = Yn(i.as("y")), r = (r <= n.ss ? ["s", r] : r < n.s && ["ss", r]) || a <= 1 && ["m"] || a < n.m && ["mm", a] || o <= 1 && ["h"] || o < n.h && ["hh", o] || u <= 1 && ["d"] || u < n.d && ["dd", u]; return (r = (r = null != n.w ? r || h <= 1 && ["w"] || h < n.w && ["ww", h] : r) || l <= 1 && ["M"] || l < n.M && ["MM", l] || i <= 1 && ["y"] || ["yy", i])[2] = t, r[3] = 0 < +e, r[4] = s, function (e, t, n, s, i) { return i.relativeTime(t || 1, !!n, e, s) }.apply(null, r) } var xn = Math.abs; function Tn(e) { return (0 < e) - (e < 0) || +e } function Nn() { if (!this.isValid()) return this.localeData().invalidDate(); var e, t, n, s, i, r, a, o = xn(this._milliseconds) / 1e3, u = xn(this._days), l = xn(this._months), h = this.asSeconds(); return h ? (e = y(o / 60), t = y(e / 60), o %= 60, e %= 60, n = y(l / 12), l %= 12, s = o ? o.toFixed(3).replace(/\.?0+$/, "") : "", i = Tn(this._months) !== Tn(h) ? "-" : "", r = Tn(this._days) !== Tn(h) ? "-" : "", a = Tn(this._milliseconds) !== Tn(h) ? "-" : "", (h < 0 ? "-" : "") + "P" + (n ? i + n + "Y" : "") + (l ? i + l + "M" : "") + (u ? r + u + "D" : "") + (t || e || o ? "T" : "") + (t ? a + t + "H" : "") + (e ? a + e + "M" : "") + (o ? a + s + "S" : "")) : "P0D" } var U = Ct.prototype; return U.isValid = function () { return this._isValid }, U.abs = function () { var e = this._data; return this._milliseconds = _n(this._milliseconds), this._days = _n(this._days), this._months = _n(this._months), e.milliseconds = _n(e.milliseconds), e.seconds = _n(e.seconds), e.minutes = _n(e.minutes), e.hours = _n(e.hours), e.months = _n(e.months), e.years = _n(e.years), this }, U.add = function (e, t) { return yn(this, e, t, 1) }, U.subtract = function (e, t) { return yn(this, e, t, -1) }, U.as = function (e) { if (!this.isValid()) return NaN; var t, n, s = this._milliseconds; if ("month" === (e = _(e)) || "quarter" === e || "year" === e) switch (t = this._days + s / 864e5, n = this._months + wn(t), e) { case "month": return n; case "quarter": return n / 3; case "year": return n / 12 } else switch (t = this._days + Math.round(pn(this._months)), e) { case "week": return t / 7 + s / 6048e5; case "day": return t + s / 864e5; case "hour": return 24 * t + s / 36e5; case "minute": return 1440 * t + s / 6e4; case "second": return 86400 * t + s / 1e3; case "millisecond": return Math.floor(864e5 * t) + s; default: throw new Error("Unknown unit " + e) } }, U.asMilliseconds = pe, U.asSeconds = me, U.asMinutes = Ce, U.asHours = we, U.asDays = ge, U.asWeeks = Je, U.asMonths = v, U.asQuarters = _e, U.asYears = ke, U.valueOf = function () { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN }, U._bubble = function () { var e = this._milliseconds, t = this._days, n = this._months, s = this._data; return 0 <= e && 0 <= t && 0 <= n || e <= 0 && t <= 0 && n <= 0 || (e += 864e5 * gn(pn(n) + t), n = t = 0), s.milliseconds = e % 1e3, e = y(e / 1e3), s.seconds = e % 60, e = y(e / 60), s.minutes = e % 60, e = y(e / 60), s.hours = e % 24, t += y(e / 24), n += e = y(wn(t)), t -= gn(pn(e)), e = y(n / 12), n %= 12, s.days = t, s.months = n, s.years = e, this }, U.clone = function () { return C(this) }, U.get = function (e) { return e = _(e), this.isValid() ? this[e + "s"]() : NaN }, U.milliseconds = ye, U.seconds = ve, U.minutes = Ie, U.hours = w, U.days = Mn, U.weeks = function () { return y(this.days() / 7) }, U.months = Dn, U.years = Sn, U.humanize = function (e, t) { if (!this.isValid()) return this.localeData().invalidDate(); var n = !1, s = On; return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (n = e), "object" == typeof t && (s = Object.assign({}, On, t), null != t.s && null == t.ss && (s.ss = t.s - 1)), e = this.localeData(), t = bn(this, !n, s, e), n && (t = e.pastFuture(+this, t)), e.postformat(t) }, U.toISOString = Nn, U.toString = Nn, U.toJSON = Nn, U.locale = Xt, U.localeData = Kt, U.toIsoString = e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Nn), U.lang = Xe, s("X", 0, 0, "unix"), s("x", 0, 0, "valueOf"), k("x", De), k("X", /[+-]?\d+(\.\d{1,3})?/), D("X", function (e, t, n) { n._d = new Date(1e3 * parseFloat(e)) }), D("x", function (e, t, n) { n._d = new Date(g(e)) }), f.version = "2.29.4", H = W, f.fn = i, f.min = function () { return Rt("isBefore", [].slice.call(arguments, 0)) }, f.max = function () { return Rt("isAfter", [].slice.call(arguments, 0)) }, f.now = function () { return Date.now ? Date.now() : +new Date }, f.utc = l, f.unix = function (e) { return W(1e3 * e) }, f.months = function (e, t) { return fn(e, t, "months") }, f.isDate = V, f.locale = ct, f.invalid = I, f.duration = C, f.isMoment = h, f.weekdays = function (e, t, n) { return mn(e, t, n, "weekdays") }, f.parseZone = function () { return W.apply(null, arguments).parseZone() }, f.localeData = mt, f.isDuration = Ut, f.monthsShort = function (e, t) { return fn(e, t, "monthsShort") }, f.weekdaysMin = function (e, t, n) { return mn(e, t, n, "weekdaysMin") }, f.defineLocale = ft, f.updateLocale = function (e, t) { var n, s; return null != t ? (s = ot, null != R[e] && null != R[e].parentLocale ? R[e].set(X(R[e]._config, t)) : (t = X(s = null != (n = dt(e)) ? n._config : s, t), null == n && (t.abbr = e), (s = new K(t)).parentLocale = R[e], R[e] = s), ct(e)) : null != R[e] && (null != R[e].parentLocale ? (R[e] = R[e].parentLocale, e === ct() && ct(e)) : null != R[e] && delete R[e]), R[e] }, f.locales = function () { return ee(R) }, f.weekdaysShort = function (e, t, n) { return mn(e, t, n, "weekdaysShort") }, f.normalizeUnits = _, f.relativeTimeRounding = function (e) { return void 0 === e ? Yn : "function" == typeof e && (Yn = e, !0) }, f.relativeTimeThreshold = function (e, t) { return void 0 !== On[e] && (void 0 === t ? On[e] : (On[e] = t, "s" === e && (On.ss = t - 1), !0)) }, f.calendarFormat = function (e, t) { return (e = e.diff(t, "days", !0)) < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse" }, f.prototype = i, f.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, f });

//
// jQuery MiniColors: A tiny color picker built on jQuery
//
// Developed by Cory LaViska for A Beautiful Site, LLC
//
// Licensed under the MIT license: http://opensource.org/licenses/MIT
//
!function (i) { "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof exports ? module.exports = i(require("jquery")) : i(jQuery) }(function (C) { "use strict"; function o(i) { var t = i.parent(); i.removeData("minicolors-initialized").removeData("minicolors-settings").removeProp("size").removeClass("minicolors-input"), t.before(i).remove() } function s(i) { var t = i.parent(), o = t.find(".minicolors-panel"), s = i.data("minicolors-settings"); !i.data("minicolors-initialized") || i.prop("disabled") || t.hasClass("minicolors-inline") || t.hasClass("minicolors-focus") || (a(), t.addClass("minicolors-focus"), o.animate ? o.stop(!0, !0).fadeIn(s.showSpeed, function () { s.show && s.show.call(i.get(0)) }) : (o.show(), s.show && s.show.call(i.get(0)))) } function a() { C(".minicolors-focus").each(function () { var i = C(this), t = i.find(".minicolors-input"), o = i.find(".minicolors-panel"), s = t.data("minicolors-settings"); o.animate ? o.fadeOut(s.hideSpeed, function () { s.hide && s.hide.call(t.get(0)), i.removeClass("minicolors-focus") }) : (o.hide(), s.hide && s.hide.call(t.get(0)), i.removeClass("minicolors-focus")) }) } function n(i, t, o) { var s, a, n, r, e, c = i.parents(".minicolors").find(".minicolors-input"), l = c.data("minicolors-settings"), h = i.find("[class$=-picker]"), d = i.offset().left, p = i.offset().top, u = Math.round(t.pageX - d), g = Math.round(t.pageY - p), m = o ? l.animationSpeed : 0; t.originalEvent.changedTouches && (u = t.originalEvent.changedTouches[0].pageX - d, g = t.originalEvent.changedTouches[0].pageY - p), u < 0 && (u = 0), g < 0 && (g = 0), u > i.width() && (u = i.width()), g > i.height() && (g = i.height()), i.parent().is(".minicolors-slider-wheel") && h.parent().is(".minicolors-grid") && (s = 75 - u, a = 75 - g, n = Math.sqrt(s * s + a * a), (r = Math.atan2(a, s)) < 0 && (r += 2 * Math.PI), 75 < n && (u = (n = 75) - 75 * Math.cos(r), g = 75 - 75 * Math.sin(r)), u = Math.round(u), g = Math.round(g)), e = { top: g + "px" }, i.is(".minicolors-grid") && (e.left = u + "px"), h.animate ? h.stop(!0).animate(e, m, l.animationEasing, function () { f(c, i) }) : (h.css(e), f(c, i)) } function f(i, t) { function o(i, t) { var o, s; return i.length && t ? (o = i.offset().left, s = i.offset().top, { x: o - t.offset().left + i.outerWidth() / 2, y: s - t.offset().top + i.outerHeight() / 2 }) : null } var s, a, n, r, e, c, l, h = i.val(), d = i.attr("data-opacity"), p = i.parent(), u = i.data("minicolors-settings"), g = p.find(".minicolors-input-swatch"), m = p.find(".minicolors-grid"), f = p.find(".minicolors-slider"), v = p.find(".minicolors-opacity-slider"), b = m.find("[class$=-picker]"), w = f.find("[class$=-picker]"), y = v.find("[class$=-picker]"), C = o(b, m), k = o(w, f), M = o(y, v); if (t.is(".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider")) { switch (u.control) { case "wheel": r = m.width() / 2 - C.x, e = m.height() / 2 - C.y, c = Math.sqrt(r * r + e * e), (l = Math.atan2(e, r)) < 0 && (l += 2 * Math.PI), 75 < c && (c = 75, C.x = 69 - 75 * Math.cos(l), C.y = 69 - 75 * Math.sin(l)), a = F(c / .75, 0, 100), h = q({ h: s = F(180 * l / Math.PI, 0, 360), s: a, b: n = F(100 - Math.floor(k.y * (100 / f.height())), 0, 100) }), f.css("backgroundColor", q({ h: s, s: a, b: 100 })); break; case "saturation": h = q({ h: s = F(parseInt(C.x * (360 / m.width()), 10), 0, 360), s: a = F(100 - Math.floor(k.y * (100 / f.height())), 0, 100), b: n = F(100 - Math.floor(C.y * (100 / m.height())), 0, 100) }), f.css("backgroundColor", q({ h: s, s: 100, b: n })), p.find(".minicolors-grid-inner").css("opacity", a / 100); break; case "brightness": h = q({ h: s = F(parseInt(C.x * (360 / m.width()), 10), 0, 360), s: a = F(100 - Math.floor(C.y * (100 / m.height())), 0, 100), b: n = F(100 - Math.floor(k.y * (100 / f.height())), 0, 100) }), f.css("backgroundColor", q({ h: s, s: a, b: 100 })), p.find(".minicolors-grid-inner").css("opacity", 1 - n / 100); break; default: h = q({ h: s = F(360 - parseInt(k.y * (360 / f.height()), 10), 0, 360), s: a = F(Math.floor(C.x * (100 / m.width())), 0, 100), b: n = F(100 - Math.floor(C.y * (100 / m.height())), 0, 100) }), m.css("backgroundColor", q({ h: s, s: 100, b: 100 })) }x(i, h, d = u.opacity ? parseFloat(1 - M.y / v.height()).toFixed(2) : 1) } else g.find("span").css({ backgroundColor: h, opacity: String(d) }), S(i, h, d) } function x(i, t, o) { var s, a = i.parent(), n = i.data("minicolors-settings"), r = a.find(".minicolors-input-swatch"); n.opacity && i.attr("data-opacity", o), t = "rgb" === n.format ? (s = T(t) ? I(t, !0) : L(M(t, !0)), o = "" === i.attr("data-opacity") ? 1 : F(parseFloat(i.attr("data-opacity")).toFixed(2), 0, 1), !isNaN(o) && n.opacity || (o = 1), i.minicolors("rgbObject").a <= 1 && s && n.opacity ? "rgba(" + s.r + ", " + s.g + ", " + s.b + ", " + parseFloat(o) + ")" : "rgb(" + s.r + ", " + s.g + ", " + s.b + ")") : (T(t) && (t = j(t)), k(t, n.letterCase)), i.val(t), r.find("span").css({ backgroundColor: t, opacity: String(o) }), S(i, t, o) } function d(i, t) { var o, s, a, n, r, e, c, l, h, d, p = i.parent(), u = i.data("minicolors-settings"), g = p.find(".minicolors-input-swatch"), m = p.find(".minicolors-grid"), f = p.find(".minicolors-slider"), v = p.find(".minicolors-opacity-slider"), b = m.find("[class$=-picker]"), w = f.find("[class$=-picker]"), y = v.find("[class$=-picker]"); switch (T(i.val()) ? (o = j(i.val()), (r = F(parseFloat(D(i.val())).toFixed(2), 0, 1)) && i.attr("data-opacity", r)) : o = k(M(i.val(), !0), u.letterCase), s = function (i) { var t = function (i) { var t = { h: 0, s: 0, b: 0 }, o = Math.min(i.r, i.g, i.b), s = Math.max(i.r, i.g, i.b), a = s - o; t.b = s, t.s = 0 !== s ? 255 * a / s : 0, 0 !== t.s ? i.r === s ? t.h = (i.g - i.b) / a : i.g === s ? t.h = 2 + (i.b - i.r) / a : t.h = 4 + (i.r - i.g) / a : t.h = -1; t.h *= 60, t.h < 0 && (t.h += 360); return t.s *= 100 / 255, t.b *= 100 / 255, t }(L(i)); 0 === t.s && (t.h = 360); return t }(o = o || k(z(u.defaultValue, !0), u.letterCase)), n = u.keywords ? C.map(u.keywords.split(","), function (i) { return i.toLowerCase().trim() }) : [], e = "" !== i.val() && -1 < C.inArray(i.val().toLowerCase(), n) ? k(i.val()) : T(i.val()) ? I(i.val()) : o, t || i.val(e), u.opacity && (a = "" === i.attr("data-opacity") ? 1 : F(parseFloat(i.attr("data-opacity")).toFixed(2), 0, 1), isNaN(a) && (a = 1), i.attr("data-opacity", a), g.find("span").css("opacity", String(a)), l = F(v.height() - v.height() * a, 0, v.height()), y.css("top", l + "px")), "transparent" === i.val().toLowerCase() && g.find("span").css("opacity", String(0)), g.find("span").css("backgroundColor", o), u.control) { case "wheel": h = F(Math.ceil(.75 * s.s), 0, m.height() / 2), d = s.h * Math.PI / 180, c = F(75 - Math.cos(d) * h, 0, m.width()), l = F(75 - Math.sin(d) * h, 0, m.height()), b.css({ top: l + "px", left: c + "px" }), l = 150 - s.b / (100 / m.height()), "" === o && (l = 0), w.css("top", l + "px"), f.css("backgroundColor", q({ h: s.h, s: s.s, b: 100 })); break; case "saturation": c = F(5 * s.h / 12, 0, 150), l = F(m.height() - Math.ceil(s.b / (100 / m.height())), 0, m.height()), b.css({ top: l + "px", left: c + "px" }), l = F(f.height() - s.s * (f.height() / 100), 0, f.height()), w.css("top", l + "px"), f.css("backgroundColor", q({ h: s.h, s: 100, b: s.b })), p.find(".minicolors-grid-inner").css("opacity", s.s / 100); break; case "brightness": c = F(5 * s.h / 12, 0, 150), l = F(m.height() - Math.ceil(s.s / (100 / m.height())), 0, m.height()), b.css({ top: l + "px", left: c + "px" }), l = F(f.height() - s.b * (f.height() / 100), 0, f.height()), w.css("top", l + "px"), f.css("backgroundColor", q({ h: s.h, s: s.s, b: 100 })), p.find(".minicolors-grid-inner").css("opacity", 1 - s.b / 100); break; default: c = F(Math.ceil(s.s / (100 / m.width())), 0, m.width()), l = F(m.height() - Math.ceil(s.b / (100 / m.height())), 0, m.height()), b.css({ top: l + "px", left: c + "px" }), l = F(f.height() - s.h / (360 / f.height()), 0, f.height()), w.css("top", l + "px"), m.css("backgroundColor", q({ h: s.h, s: 100, b: 100 })) }i.data("minicolors-initialized") && S(i, e, a) } function S(i, t, o) { var s, a, n, r = i.data("minicolors-settings"), e = i.data("minicolors-lastChange"); if (!e || e.value !== t || e.opacity !== o) { if (i.data("minicolors-lastChange", { value: t, opacity: o }), r.swatches && 0 !== r.swatches.length) { for (s = T(t) ? I(t, !0) : L(t), a = -1, n = 0; n < r.swatches.length; ++n)if (s.r === r.swatches[n].r && s.g === r.swatches[n].g && s.b === r.swatches[n].b && s.a === r.swatches[n].a) { a = n; break } i.parent().find(".minicolors-swatches .minicolors-swatch").removeClass("selected"), -1 !== a && i.parent().find(".minicolors-swatches .minicolors-swatch").eq(n).addClass("selected") } r.change && (r.changeDelay ? (clearTimeout(i.data("minicolors-changeTimeout")), i.data("minicolors-changeTimeout", setTimeout(function () { r.change.call(i.get(0), t, o) }, r.changeDelay))) : r.change.call(i.get(0), t, o)), i.trigger("change").trigger("input") } } function k(i, t) { return "uppercase" === t ? i.toUpperCase() : i.toLowerCase() } function M(i, t) { return !(i = i.replace(/^#/g, "")).match(/^[A-F0-9]{3,6}/gi) || 3 !== i.length && 6 !== i.length ? "" : (3 === i.length && t && (i = i[0] + i[0] + i[1] + i[1] + i[2] + i[2]), "#" + i) } function I(i, t) { var o = i.replace(/[^\d,.]/g, "").split(","); return o[0] = F(parseInt(o[0], 10), 0, 255), o[1] = F(parseInt(o[1], 10), 0, 255), o[2] = F(parseInt(o[2], 10), 0, 255), void 0 !== o[3] && (o[3] = F(parseFloat(o[3], 10), 0, 1)), t ? void 0 !== o[3] ? { r: o[0], g: o[1], b: o[2], a: o[3] } : { r: o[0], g: o[1], b: o[2] } : void 0 !== o[3] && o[3] <= 1 ? "rgba(" + o[0] + ", " + o[1] + ", " + o[2] + ", " + o[3] + ")" : "rgb(" + o[0] + ", " + o[1] + ", " + o[2] + ")" } function z(i, t) { return T(i) ? I(i) : M(i, t) } function F(i, t, o) { return i < t && (i = t), o < i && (i = o), i } function T(i) { var t = i.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i); return !(!t || 4 !== t.length) } function D(i) { return (i = i.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+(\.\d{1,2})?|\.\d{1,2})[\s+]?/i)) && 6 === i.length ? i[4] : "1" } function j(i) { return (i = i.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === i.length ? "#" + ("0" + parseInt(i[1], 10).toString(16)).slice(-2) + ("0" + parseInt(i[2], 10).toString(16)).slice(-2) + ("0" + parseInt(i[3], 10).toString(16)).slice(-2) : "" } function p(i) { var o = [i.r.toString(16), i.g.toString(16), i.b.toString(16)]; return C.each(o, function (i, t) { 1 === t.length && (o[i] = "0" + t) }), "#" + o.join("") } function q(i) { return p((t = i, n = {}, r = Math.round(t.h), e = Math.round(255 * t.s / 100), c = Math.round(255 * t.b / 100), 0 === e ? n.r = n.g = n.b = c : (a = r % 60 * ((o = c) - (s = (255 - e) * c / 255)) / 60, 360 === r && (r = 0), r < 60 ? (n.r = o, n.b = s, n.g = s + a) : r < 120 ? (n.g = o, n.b = s, n.r = o - a) : r < 180 ? (n.g = o, n.r = s, n.b = s + a) : r < 240 ? (n.b = o, n.r = s, n.g = o - a) : r < 300 ? (n.b = o, n.g = s, n.r = s + a) : r < 360 ? (n.r = o, n.g = s, n.b = o - a) : (n.r = 0, n.g = 0, n.b = 0)), { r: Math.round(n.r), g: Math.round(n.g), b: Math.round(n.b) })); var t, o, s, a, n, r, e, c } function L(i) { return { r: (i = parseInt(-1 < i.indexOf("#") ? i.substring(1) : i, 16)) >> 16, g: (65280 & i) >> 8, b: 255 & i } } C.minicolors = { defaults: { animationSpeed: 50, animationEasing: "swing", change: null, changeDelay: 0, control: "hue", defaultValue: "", format: "hex", hide: null, hideSpeed: 100, inline: !1, keywords: "", letterCase: "lowercase", opacity: !1, position: "bottom", show: null, showSpeed: 100, theme: "default", swatches: [] } }, C.extend(C.fn, { minicolors: function (i, t) { switch (i) { case "destroy": return C(this).each(function () { o(C(this)) }), C(this); case "hide": return a(), C(this); case "opacity": return void 0 === t ? C(this).attr("data-opacity") : (C(this).each(function () { d(C(this).attr("data-opacity", t)) }), C(this)); case "rgbObject": return function (i) { var t, o = C(i).attr("data-opacity"); { var s; t = T(C(i).val()) ? I(C(i).val(), !0) : (s = M(C(i).val(), !0), L(s)) } if (!t) return null; void 0 !== o && C.extend(t, { a: parseFloat(o) }); return t }(C(this)); case "rgbString": case "rgbaString": return function (i, t) { var o, s = C(i).attr("data-opacity"); { var a; o = T(C(i).val()) ? I(C(i).val(), !0) : (a = M(C(i).val(), !0), L(a)) } if (!o) return null; void 0 === s && (s = 1); return t ? "rgba(" + o.r + ", " + o.g + ", " + o.b + ", " + parseFloat(s) + ")" : "rgb(" + o.r + ", " + o.g + ", " + o.b + ")" }(C(this), "rgbaString" === i); case "settings": return void 0 === t ? C(this).data("minicolors-settings") : (C(this).each(function () { var i = C(this).data("minicolors-settings") || {}; o(C(this)), C(this).minicolors(C.extend(!0, i, t)) }), C(this)); case "show": return s(C(this).eq(0)), C(this); case "value": return void 0 === t ? C(this).val() : (C(this).each(function () { "object" == typeof t && null !== t ? (void 0 !== t.opacity && C(this).attr("data-opacity", F(t.opacity, 0, 1)), t.color && C(this).val(t.color)) : C(this).val(t), d(C(this)) }), C(this)); default: return "create" !== i && (t = i), C(this).each(function () { !function (t, i) { var o, s, a, n, r, e, c, l = C('<div class="minicolors" />'), h = C.minicolors.defaults; if (t.data("minicolors-initialized")) return; i = C.extend(!0, {}, h, i), l.addClass("minicolors-theme-" + i.theme).toggleClass("minicolors-with-opacity", i.opacity), void 0 !== i.position && C.each(i.position.split(" "), function () { l.addClass("minicolors-position-" + this) }); s = "rgb" === i.format ? i.opacity ? "25" : "20" : i.keywords ? "11" : "7"; t.addClass("minicolors-input").data("minicolors-initialized", !1).data("minicolors-settings", i).prop("size", s).wrap(l).after('<div class="minicolors-panel minicolors-slider-' + i.control + '"><div class="minicolors-slider minicolors-sprite"><div class="minicolors-picker"></div></div><div class="minicolors-opacity-slider minicolors-sprite"><div class="minicolors-picker"></div></div><div class="minicolors-grid minicolors-sprite"><div class="minicolors-grid-inner"></div><div class="minicolors-picker"><div></div></div></div></div>'), i.inline || (t.after('<span class="minicolors-swatch minicolors-sprite minicolors-input-swatch"><span class="minicolors-swatch-color"></span></span>'), t.next(".minicolors-input-swatch").on("click", function (i) { i.preventDefault(), t.trigger("focus") })); if ((e = t.parent().find(".minicolors-panel")).on("selectstart", function () { return !1 }).end(), i.swatches && 0 !== i.swatches.length) for (e.addClass("minicolors-with-swatches"), a = C('<ul class="minicolors-swatches"></ul>').appendTo(e), c = 0; c < i.swatches.length; ++c)n = "object" == typeof i.swatches[c] ? (o = i.swatches[c].name, i.swatches[c].color) : (o = "", i.swatches[c]), n = T(r = n) ? I(n, !0) : L(M(n, !0)), C('<li class="minicolors-swatch minicolors-sprite"><span class="minicolors-swatch-color"></span></li>').attr("title", o).appendTo(a).data("swatch-color", r).find(".minicolors-swatch-color").css({ backgroundColor: "transparent" !== r ? p(n) : "transparent", opacity: String(n.a) }), i.swatches[c] = n; i.inline && t.parent().addClass("minicolors-inline"); d(t, !1), t.data("minicolors-initialized", !0) }(C(this), t) }), C(this) } } }), C([document]).on("mousedown.minicolors touchstart.minicolors", function (i) { C(i.target).parents().add(i.target).hasClass("minicolors") || a() }).on("mousedown.minicolors touchstart.minicolors", ".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider", function (i) { var t = C(this); i.preventDefault(), C(i.delegateTarget).data("minicolors-target", t), n(t, i, !0) }).on("mousemove.minicolors touchmove.minicolors", function (i) { var t = C(i.delegateTarget).data("minicolors-target"); t && n(t, i) }).on("mouseup.minicolors touchend.minicolors", function () { C(this).removeData("minicolors-target") }).on("click.minicolors", ".minicolors-swatches li", function (i) { i.preventDefault(); var t = C(this), o = t.parents(".minicolors").find(".minicolors-input"), s = t.data("swatch-color"); x(o, s, D(s)), d(o) }).on("mousedown.minicolors touchstart.minicolors", ".minicolors-input-swatch", function (i) { var t = C(this).parent().find(".minicolors-input"); i.preventDefault(), s(t) }).on("focus.minicolors", ".minicolors-input", function () { var i = C(this); i.data("minicolors-initialized") && s(i) }).on("blur.minicolors", ".minicolors-input", function () { var i, t, o, s, a, n = C(this), r = n.data("minicolors-settings"); n.data("minicolors-initialized") && (i = r.keywords ? C.map(r.keywords.split(","), function (i) { return i.toLowerCase().trim() }) : [], a = "" !== n.val() && -1 < C.inArray(n.val().toLowerCase(), i) ? n.val() : null === (o = T(n.val()) ? I(n.val(), !0) : (t = M(n.val(), !0)) ? L(t) : null) ? r.defaultValue : "rgb" === r.format ? r.opacity ? I("rgba(" + o.r + "," + o.g + "," + o.b + "," + n.attr("data-opacity") + ")") : I("rgb(" + o.r + "," + o.g + "," + o.b + ")") : p(o), s = r.opacity ? n.attr("data-opacity") : 1, "transparent" === a.toLowerCase() && (s = 0), n.closest(".minicolors").find(".minicolors-input-swatch > span").css("opacity", String(s)), n.val(a), "" === n.val() && n.val(z(r.defaultValue, !0)), n.val(k(n.val(), r.letterCase))) }).on("keydown.minicolors", ".minicolors-input", function (i) { var t = C(this); if (t.data("minicolors-initialized")) switch (i.which) { case 9: a(); break; case 13: case 27: a(), t.blur() } }).on("keyup.minicolors", ".minicolors-input", function () { var i = C(this); i.data("minicolors-initialized") && d(i, !0) }).on("paste.minicolors", ".minicolors-input", function () { var i = C(this); i.data("minicolors-initialized") && setTimeout(function () { d(i, !0) }, 1) }) });