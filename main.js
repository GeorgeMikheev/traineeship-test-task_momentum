/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=function(t){return document.querySelector(t)},e=function(t,e,r){t.forEach((function(t){t.classList.add(e),t.classList.remove(r)}))};function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}function o(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==r(e)?e:e+""}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,c(n.key),n)}}function c(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:e+""}function u(t,e,r){return e=l(e),function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,s()?Reflect.construct(e,r||[],l(t).constructor):e.apply(t,r))}function s(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(s=function(){return!!t})()}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}const h=function(e){function r(e,n,o){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(i=u(this,r,[o])).time=t(".".concat(e)),i.date=t(".".concat(n)),i.monthNamesGenitive=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(r,e),n=r,(o=[{key:"transformationTimeFormat",value:function(t){return t<10?"0".concat(t.toString()):t.toString()}},{key:"createCurrentDatetime",value:function(){var t=this,e=new Date,r=this.transformationTimeFormat(e.getHours()),n=this.transformationTimeFormat(e.getMinutes()),o=this.transformationTimeFormat(e.getSeconds()),i=this.transformationTimeFormat(e.getDate()),a=this.monthNamesGenitive[e.getMonth()],c=e.toLocaleString("default",{weekday:"long"});this.time.textContent="".concat(r,":").concat(n,":").concat(o),this.date.textContent="".concat(i," ").concat(a,", ").concat(c),this.setImage(r),setInterval((function(){return t.createCurrentDatetime()}),1e3)}}])&&a(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(function(){return e=function e(r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.slider=t(".".concat(r))},(r=[{key:"setImage",value:function(t){var e;e=(t=Number(t))>=0&&t<6?"url(https://github.com/digitalSector47/traineeship-test-task/blob/main/images/01.jpg?raw=true)":t>=6&&t<12?"url(https://github.com/digitalSector47/traineeship-test-task/blob/main/images/02.jpg?raw=true)":t>=12&&t<18?"url(https://github.com/digitalSector47/traineeship-test-task/blob/main/images/03.jpg?raw=true)":"url(https://github.com/digitalSector47/traineeship-test-task/blob/main/images/04.jpg?raw=true)",this.slider.style.backgroundImage=e}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r}());function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,m(n.key),n)}}function v(t,e,r){return e&&y(t.prototype,e),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function m(t){var e=function(t,e){if("object"!=p(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==p(e)?e:e+""}const d=v((function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._id=e,this.isCompleted=!1,this.content=r}));function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,w(n.key),n)}}function w(t){var e=function(t,e){if("object"!=b(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==b(e)?e:e+""}var k=function(){return r=function e(r,n,o,i,a,c,u,s,l){var f=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.taskBlock=t(".".concat(r)),this.collapseButton=t(".".concat(n)),this.form=t(".".concat(o)),this.formInput=t(".".concat(i)),this.formButton=t(".".concat(a)),this.taskList=t(".".concat(c)),this.replacement=t(".".concat(u)),this.deleteCompleted=t(".".concat(s)),this.template=t("#".concat(l)),this.tasks=JSON.parse(localStorage.getItem("tasks"))||[],this.taskBlock.addEventListener("dblclick",(function(){return f.open()})),this.form.addEventListener("submit",(function(t){t.preventDefault(),f.addTask()})),this.deleteCompleted.addEventListener("click",(function(){return f.deleteCompletedTasks()}))},(n=[{key:"clouse",value:function(){var t=this;e([this.collapseButton,this.form,this.deleteCompleted],"clouse","open"),e([this.taskBlock],"clouse-state","open-state"),e([this.collapseButton,this.form,this.deleteCompleted],"inactive","active"),this.taskBlock.addEventListener("dblclick",(function(){return t.open()})),this.collapseButton.removeEventListener("click",(function(){return t.clouse()}))}},{key:"open",value:function(){var t=this;e([this.taskBlock],"open-state","clouse-state"),e([this.collapseButton,this.form,this.deleteCompleted],"active","inactive"),e([this.collapseButton,this.form,this.deleteCompleted],"open","clouse"),this.collapseButton.addEventListener("click",(function(){return t.clouse()})),this.collapseButton.removeEventListener("dbclick",(function(){return t.open()}))}},{key:"checkTasks",value:function(){this.tasks.length>0?e([this.replacement],"inactive","active"):e([this.replacement],"active","inactive")}},{key:"save",value:function(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}},{key:"createTask",value:function(t){var e=this,r=this.template.content.cloneNode(!0),n=r.querySelector(".task-list__text"),o=r.querySelector(".task-list__button"),i=r.querySelector(".task-list__checkbox");n.textContent=t.content[0].toUpperCase()+t.content.slice(1),t.isCompleted?i.setAttribute("checked",""):i.removeAttribute("checked"),this.taskList.append(r),this.checkTasks(),o.addEventListener("click",(function(r){e.deleteTask(t._id),r.target.closest(".task-list__item").remove(),e.checkTasks()})),i.addEventListener("change",(function(){return e.toggleTaskCompleted(t._id)}))}},{key:"addTask",value:function(){if(this.formInput.value){var t=new d(this.tasks.length,this.formInput.value);this.tasks.push(t),this.createTask(t),this.save(),this.formInput.value=""}}},{key:"setTask",value:function(){var t=this;this.tasks.forEach((function(e){return t.createTask(e)}))}},{key:"deleteTask",value:function(t){this.tasks=this.tasks.filter((function(e){return e._id!==t})),this.save()}},{key:"toggleTaskCompleted",value:function(t){var e=this.tasks.find((function(e){return e._id===t}));e&&(e.isCompleted?e.isCompleted=!1:e.isCompleted=!0,this.save())}},{key:"deleteCompletedTasks",value:function(){this.tasks=this.tasks.filter((function(t){return!t.isCompleted})),this.save(),this.taskList.innerHTML="",this.setTask()}}])&&g(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}();const _=k;function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function E(){E=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:x(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",y="executing",v="completed",m={};function d(){}function b(){}function g(){}var w={};s(w,a,(function(){return this}));var k=Object.getPrototypeOf,_=k&&k(k(G([])));_&&_!==r&&n.call(_,a)&&(w=_);var j=g.prototype=d.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==S(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function x(e,r,n){var o=h;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?v:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(S(e)+" is not iterable")}return b.prototype=g,o(j,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=s(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},L(O.prototype),s(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function j(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,O(n.key),n)}}function O(t){var e=function(t,e){if("object"!=S(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==S(e)?e:e+""}function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function P(){P=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:L(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",y="executing",v="completed",m={};function d(){}function b(){}function g(){}var w={};s(w,a,(function(){return this}));var k=Object.getPrototypeOf,_=k&&k(k(G([])));_&&_!==r&&n.call(_,a)&&(w=_);var S=g.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==x(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function L(e,r,n){var o=h;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?v:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(x(e)+" is not iterable")}return b.prototype=g,o(S,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=s(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},E(j.prototype),s(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(S),s(S,u,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function T(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,N(n.key),n)}}function N(t){var e=function(t,e){if("object"!=x(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==x(e)?e:e+""}function G(t,e,r){return e=I(e),function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,B()?Reflect.construct(e,r||[],I(t).constructor):e.apply(t,r))}function B(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(B=function(){return!!t})()}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}var F=new(function(e){function r(e,n,o,i,a,c){var u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(u=G(this,r,[e])).city=t(".".concat(n)),u.temperature=t(".".concat(o)),u.description=t(".".concat(i)),u.icon=t(".".concat(a)),u.error=t(".".concat(c)),u}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(r,e),n=r,o=[{key:"getGeolocationData",value:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){var r={lat:e.coords.latitude,lon:e.coords.longitude};localStorage.setItem("geolocationData",JSON.stringify(r));var n=JSON.parse(localStorage.getItem("geolocationData"));t.setWeatheData(n.lat,n.lon)}),(function(){return t.setWeatheData("45.0328","38.9769")}))}},{key:"setWeatheData",value:(i=P().mark((function t(e,r){var n;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getWeaterData(e,r);case 3:n=t.sent,this.city.textContent=n.data[0].city_name,this.temperature.textContent="".concat(Math.round(n.data[0].temp),"°C"),this.description.textContent=n.data[0].weather.description,this.icon.src="https://cdn.weatherbit.io/static/img/icons/".concat(n.data[0].weather.icon,".png"),this.icon.style.display="block",t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),this.error.textContent=t.t0,this.icon.style.display="none";case 15:case"end":return t.stop()}}),t,this,[[0,11]])})),a=function(){var t=this,e=arguments;return new Promise((function(r,n){var o=i.apply(t,e);function a(t){T(o,r,n,a,c,"next",t)}function c(t){T(o,r,n,a,c,"throw",t)}a(void 0)}))},function(t,e){return a.apply(this,arguments)})}],o&&C(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o,i,a}(function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.key=e},e=[{key:"getWeaterData",value:(r=E().mark((function t(e,r){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.weatherbit.io/v2.0/current?lat=".concat(e,"6&lon=").concat(r,"82&key=").concat(this.key,"&include=minutely&lang=ru")).then((function(t){return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})),n=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function a(t){j(i,n,o,a,c,"next",t)}function c(t){j(i,n,o,a,c,"throw",t)}a(void 0)}))},function(t,e){return n.apply(this,arguments)})}],e&&L(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r,n}()))("4d288aa8bf194103936969eddd208989","weather-block__title","weather-block__temperature","weather-block__description","weather-block__icon","weather-block__error"),A=new h("datetime-block__time","datetime-block__date","slider"),R=new _("task-block","clouse-button","widget-form","widget-form__input","widget-form__button","task-list","replacement","delete-completed","task-template");F.getGeolocationData(),A.createCurrentDatetime(),R.setTask()})();