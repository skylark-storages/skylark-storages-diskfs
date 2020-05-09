/**
 * skylark-io-diskfs - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,n){var t=n.define,require=n.require,e="function"==typeof t&&t.amd,i=!e&&"undefined"!=typeof exports;if(!e&&!t){var o={};t=n.define=function(r,n,t){"function"==typeof t?(o[r]={factory:t,deps:n.map(function(n){return function(r,n){if("."!==r[0])return r;var t=n.split("/"),e=r.split("/");t.pop();for(var i=0;i<e.length;i++)"."!=e[i]&&(".."==e[i]?t.pop():t.push(e[i]));return t.join("/")}(n,r)}),resolved:!1,exports:null},require(r)):o[r]={factory:null,resolved:!0,exports:t}},require=n.require=function(r){if(!o.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=o[r];if(!module.resolved){var t=[];module.deps.forEach(function(r){t.push(require(r))}),module.exports=module.factory.apply(n,t)||null,module.resolved=!0}return module.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-langx-ns/_attach",[],function(){return function(r,n,t){"string"==typeof n&&(n=n.split("."));for(var e=n.length,i=r,o=0,a=n[o++];o<e;)i=i[a]=i[a]||{},a=n[o++];return i[a]=t}}),r("skylark-langx-ns/ns",["./_attach"],function(r){var n={attach:function(t,e){return r(n,t,e)}};return n}),r("skylark-langx-ns/main",["./ns"],function(r){return r}),r("skylark-langx-ns",["skylark-langx-ns/main"],function(r){return r}),r("skylark-langx/skylark",["skylark-langx-ns"],function(r){return r}),r("skylark-io-diskfs/diskfs",["skylark-langx/skylark"],function(r){var n=function(){return n};return r.attach("storages.diskfs",n)}),r("skylark-langx-types/types",["skylark-langx-ns"],function(r){var n,t=Array.isArray,e={}.toString,i=(n={},"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(r){n["[object "+r+"]"]=r.toLowerCase()}),function(r){return null==r?String(r):n[e.call(r)]||"object"}),o=t||function(r){return object&&object.constructor===Array};function a(r){var n;for(n in r)if(null!==r[n])return!1;return!0}function u(r){return"function"==i(r)}function s(r){return r&&r.nodeType}function l(r){return"number"==typeof r}function c(r){var n=typeof r;return"function"===n||"object"===n&&!!r}function f(r){return"string"==typeof r}function p(r){return r&&r==r.window}return r.attach("langx.types",{isArray:o,isArrayLike:function(r){return!f(r)&&!s(r)&&"number"==typeof r.length&&!u(r)},isBoolean:function(r){return!0===r||!1===r||"[object Boolean]"===e.call(r)},isDefined:function(r){return void 0!==r},isDocument:function(r){return null!=r&&r.nodeType==r.DOCUMENT_NODE},isElement:function(r){return!(!r||1!==r.nodeType)},isEmpty:a,isEmptyObject:a,isFunction:u,isHtmlNode:s,isNaN:function(r){return isNaN(r)},isNull:function(r){return null===r},isNumber:l,isNumeric:l,isObject:c,isPlainObject:function(r){return c(r)&&!p(r)&&Object.getPrototypeOf(r)==Object.prototype},isString:f,isSameOrigin:function(r){if(r){var n=location.protocol+"//"+location.hostname;return location.port&&(n+=":"+location.port),r.startsWith(n)}},isSymbol:function(r){return"symbol"==typeof r||isObjectLike(r)&&objectToString.call(r)==symbolTag},isUndefined:function(r){return void 0===r},isWindow:p,type:i})}),r("skylark-langx-types/main",["./types"],function(r){return r}),r("skylark-langx-types",["skylark-langx-types/main"],function(r){return r}),r("skylark-langx/types",["skylark-langx-types"],function(r){return r}),r("skylark-io-diskfs/download",["skylark-langx/types","./diskfs"],function(r,n){return n.downlad=function(n,t){if(window.navigator.msSaveBlob)r.isString(n)&&(n=dataURItoBlob(n)),window.navigator.msSaveBlob(n,t);else{var e=document.createElement("a");n instanceof Blob&&(n=URL.createObjectURL(n)),e.href=n,e.setAttribute("download",t||"noname"),e.dispatchEvent(new CustomEvent("click"))}}}),r("skylark-langx-numbers/numbers",["skylark-langx-ns","skylark-langx-types"],function(r,n){var t=n.isObject,e=n.isSymbol,i=1/0,o=1.7976931348623157e308,a=NaN,u=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;function p(r){if(!r)return 0===r?r:0;if((r=y(r))===i||r===-i){var n=r<0?-1:1;return n*o}return r==r?r:0}function y(r){if("number"==typeof r)return r;if(e(r))return a;if(t(r)){var n="function"==typeof r.valueOf?r.valueOf():r;r=t(n)?n+"":n}if("string"!=typeof r)return 0===r?r:+r;r=r.replace(u,"");var i=l.test(r);return i||c.test(r)?f(r.slice(2),i?2:8):s.test(r)?a:+r}return r.attach("langx.numbers",{toFinite:p,toNumber:y,toInteger:function(r){var n=p(r),t=n%1;return n==n?t?n-t:n:0}})}),r("skylark-langx-numbers/main",["./numbers"],function(r){return r}),r("skylark-langx-numbers",["skylark-langx-numbers/main"],function(r){return r}),r("skylark-langx-objects/objects",["skylark-langx-ns/ns","skylark-langx-ns/_attach","skylark-langx-types","skylark-langx-numbers"],function(r,n,t,e){var i,o,a=Object.prototype.hasOwnProperty,u=Array.prototype.slice,s=t.isBoolean,l=t.isFunction,c=t.isObject,f=t.isPlainObject,p=t.isArray,y=t.isArrayLike,v=t.isString,h=e.toInteger;var k,g,d="undefined"!=typeof Symbol?Symbol.prototype:null;function m(r){if(!c(r))return[];var n=[];for(var t in r)n.push(t);return n}function b(r,n){if(!p(n))return null!=r&&a.call(r,n);for(var t=n.length,e=0;e<t;e++){var i=n[e];if(null==r||!a.call(r,i))return!1;r=r[i]}return!!t}function x(r,n,t,e){for(var i in n)e&&void 0!==r[i]||(t&&(f(n[i])||p(n[i]))?(f(n[i])&&!f(r[i])&&(r[i]={}),p(n[i])&&!p(r[i])&&(r[i]=[]),x(r[i],n[i],t,e)):void 0!==n[i]&&(r[i]=n[i]));return r}function j(r){var n=u.call(arguments,0),t=n.shift(),e=!1;return s(n[n.length-1])&&(e=n.pop()),{target:t,sources:n,deep:e}}function _(){var r=j.apply(this,arguments);return r.sources.forEach(function(n){x(r.target,n,r.deep,!1)}),r.target}function w(r){for(var n=m(r),t=n.length,e=Array(t),i=0;i<t;i++)e[i]=r[n[i]];return e}return i=function(r,n,t,e){if(r===n)return 0!==r||1/r==1/n;if(null==r||null==n)return!1;if(r!=r)return n!=n;var i=typeof r;return("function"===i||"object"===i||"object"==typeof n)&&o(r,n,t,e)},o=function(r,n,t,e){var o=toString.call(r);if(o!==toString.call(n))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+r==""+n;case"[object Number]":return+r!=+r?+n!=+n:0==+r?1/+r==1/n:+r==+n;case"[object Date]":case"[object Boolean]":return+r==+n;case"[object Symbol]":return d.valueOf.call(r)===d.valueOf.call(n)}var a="[object Array]"===o;if(!a){if("object"!=typeof r||"object"!=typeof n)return!1;var u=r.constructor,s=n.constructor;if(u!==s&&!(l(u)&&u instanceof u&&l(s)&&s instanceof s)&&"constructor"in r&&"constructor"in n)return!1}t=t||[],e=e||[];for(var c=t.length;c--;)if(t[c]===r)return e[c]===n;if(t.push(r),e.push(n),a){if((c=r.length)!==n.length)return!1;for(;c--;)if(!i(r[c],n[c],t,e))return!1}else{var f,p=Object.keys(r);if(c=p.length,Object.keys(n).length!==c)return!1;for(;c--;)if(f=p[c],void 0===n[f]||!i(r[f],n[f],t,e))return!1}return t.pop(),e.pop(),!0},r.attach("langx.objects",{allKeys:m,attach:n,clone:function r(n,t){var e;if(void 0===n||null===n)e=n;else if(t&&n.clone)e=n.clone();else if(p(n)){e=[];for(var i=0;i<n.length;i++)e.push(r(n[i]))}else if(f(n))for(var o in e={},n)e[o]=r(n[o]);else e=n;return e},defaults:(k=m,g=!0,function(r){var n=arguments.length;if(g&&(r=Object(r)),n<2||null==r)return r;for(var t=1;t<n;t++)for(var e=arguments[t],i=k(e),o=i.length,a=0;a<o;a++){var u=i[a];g&&void 0!==r[u]||(r[u]=e[u])}return r}),each:function(r,n){var t,e,i,o;if(r)if(void 0===(t=r.length)){for(e in r)if(r.hasOwnProperty(e)&&(o=r[e],!1===n.call(o,e,o)))break}else for(i=0;i<t&&(o=r[i],!1!==n.call(o,i,o));i++);return this},extend:function(r){var n,t=u.call(arguments,1);"boolean"==typeof r&&(n=r,r=t.shift());0==t.length&&(t=[r],r=this);return t.forEach(function(t){_(r,t,n)}),r},has:b,isEqual:function(r,n){return i(r,n)},includes:function(r,n,t,e){r=y(r)?r:w(r),t=t&&!e?h(t):0;var i=r.length;t<0&&(t=nativeMax(i+t,0));return v(r)?t<=i&&r.indexOf(n,t)>-1:!!i&&baseIndexOf(r,n,t)>-1},isMatch:function(r,n){var t=t(n),e=t.length;if(null==r)return!e;for(var i=Object(r),o=0;o<e;o++){var a=t[o];if(n[a]!==i[a]||!(a in i))return!1}return!0},keys:function(r){if(c(r))return[];var n=[];for(var t in r)b(r,t)&&n.push(t);return n},mixin:_,omit:function(r,n,t){if(!r)return null;for(var e=_({},r),i=1;i<arguments.length;i++){var o=arguments[i];o in r&&delete e[o]}return e},pick:function(r,n,t){if(!r)return null;for(var e={},i=1;i<arguments.length;i++){var o=arguments[i];o in r&&(e[o]=r[o])}return e},removeItem:function(r,n){if(p(r)){var t=r.indexOf(n);-1!=t&&r.splice(t,1)}else if(f(r))for(var e in r)if(r[e]==n){delete r[e];break}return this},result:function(r,n,t){p(n)||(n=n.split("."));var e=n.length;if(!e)return l(t)?t.call(r):t;for(var i=0;i<e;i++){var o=null==r?void 0:r[n[i]];void 0===o&&(o=t,i=e),r=l(o)?o.call(r):o}return r},safeMixin:function(){var r=j.apply(this,arguments);return r.sources.forEach(function(n){x(r.target,n,r.deep,!0)}),r.target},values:w})}),r("skylark-langx-objects/main",["./objects"],function(r){return r}),r("skylark-langx-objects",["skylark-langx-objects/main"],function(r){return r}),r("skylark-langx-arrays/arrays",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects"],function(r,n,t){var e=Array.prototype.filter,i=Array.prototype.find,o=n.isArrayLike;function a(r,n,t,e){for(var i=r.length,o=t+(e?1:-1);e?o--:++o<i;)if(n(r[o],o,r))return o;return-1}function u(r){return r!=r}function s(r){if(o(r)){for(var n=[],t=0;t<r.length;t++){var e=r[t];if(o(e))for(var i=0;i<e.length;i++)n.push(e[i]);else n.push(e)}return n}return r}return r.attach("langx.arrays",{baseFindIndex:a,baseIndexOf:function(r,n,t){if(n!=n)return a(r,u,t);var e=t-1,i=r.length;for(;++e<i;)if(r[e]===n)return e;return-1},compact:function(r){return e.call(r,function(r){return null!=r})},first:function(r,n){return n?r.slice(0,n):r[0]},filter:function(r,n){return e.call(r,n)},find:function(r,n){return i.call(r,n)},flatten:s,grep:function(r,n){var e=[];return t.each(r,function(r,t){n(t,r)&&e.push(t)}),e},inArray:function(r,n){if(!n)return-1;var t;if(n.indexOf)return n.indexOf(r);t=n.length;for(;t--;)if(n[t]===r)return t;return-1},makeArray:function(r,n,t){if(o(r))return(t||[]).concat(Array.prototype.slice.call(r,n||0));return[r]},merge:function(r,n){var t=n.length,e=r.length,i=0;if("number"==typeof t)for(;i<t;i++)r[e++]=n[i];else for(;void 0!==n[i];)r[e++]=n[i++];return r.length=e,r},forEach:function(r,n){if(r.forEach)return r.forEach(n);for(var t=0;t<r.length;t++)n(r[t],t)},map:function(r,n){var t,e,i,a=[];if(o(r))for(e=0;e<r.length;e++)null!=(t=n.call(r[e],r[e],e))&&a.push(t);else for(i in r)null!=(t=n.call(r[i],r[i],i))&&a.push(t);return s(a)},reduce:function(r,n,t){return Array.prototype.reduce.call(r,n,t)},uniq:function(r){return e.call(r,function(n,t){return r.indexOf(n)==t})}})}),r("skylark-langx-arrays/main",["./arrays"],function(r){return r}),r("skylark-langx-arrays",["skylark-langx-arrays/main"],function(r){return r}),r("skylark-langx-funcs/funcs",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects"],function(r,n,t){var e=t.mixin,i=Array.prototype.slice,o=n.isFunction,a=n.isString;function u(r,n){var t=2 in arguments&&i.call(arguments,2);if(o(r)){return function(){return r.apply(n,t?t.concat(i.call(arguments)):arguments)}}if(a(n))return t?(t.unshift(r[n],r),u.apply(null,t)):u(r[n],r);throw new TypeError("expected function")}var s=function(){function r(){}return function(n,t){r.prototype=n;var i=new r;return r.prototype=null,t&&e(i,t),i}}(),l={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},c=/(.)^/,f={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},p=/\\|'|\r|\n|\t|\u2028|\u2029/g;return r.attach("langx.funcs",{bind:u,debounce:function(r,n){var t;return function(){var e=this,i=arguments;t&&clearTimeout(t),t=setTimeout(function(){t=null,r.apply(e,i)},n)}},delegate:s,defer:function(r){requestAnimationFrame?requestAnimationFrame(r):setTimeoutout(r);return this},negate:function(r){if("function"!=typeof r)throw new TypeError("Expected a function");return function(...n){return!r.apply(this,n)}},noop:function(){},proxy:u,returnTrue:function(){return!0},returnFalse:function(){return!1},templateSettings:l,template:function(r,n,e){var i;e=t.defaults({},e,l);var o=RegExp([(e.escape||c).source,(e.interpolate||c).source,(e.evaluate||c).source].join("|")+"|$","g"),a=0,s="__p+='";r.replace(o,function(n,t,e,i,o){return s+=r.slice(a,o).replace(p,function(r){return"\\"+f[r]}),t&&(s+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'"),e&&(s+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),i&&(s+="';\n"+i+"\n__p+='"),a=o+n.length,n}),s+="';\n",e.variable||(s="with(obj||{}){\n"+s+"}\n");s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{i=new Function(e.variable||"obj","_",s)}catch(r){throw r.source=s,r}if(n)return i(n,this);var y=u(function(r){return i.call(this,r,this)},this),v=e.variable||"obj";return y.source="function("+v+"){\n"+s+"}",y}})}),r("skylark-langx-funcs/main",["./funcs"],function(r){return r}),r("skylark-langx-funcs",["skylark-langx-funcs/main"],function(r){return r}),r("skylark-langx-async/Deferred",["skylark-langx-arrays","skylark-langx-funcs","skylark-langx-objects"],function(r,n,t){"use strict";var e=Array.prototype.slice,i=n.proxy,o=r.makeArray,a=t.result,u=t.mixin;u(Promise.prototype,{always:function(r){return this.then(r,r),this},done:function(){for(var r=0;r<arguments.length;r++)this.then(arguments[r]);return this},fail:function(r){return this.catch(r),this}});var s=function(){var r=this;this.promise=l(new Promise(function(n,t){r._resolve=n,r._reject=t}))};function l(r){if(r.isResolved)return r;var n=!0,t=!1,e=!1,i=r.then(function(r){return e=!0,n=!1,r},function(r){throw t=!0,n=!1,r});i.isResolved=function(){return e},i.isPending=function(){return n},i.isRejected=function(){return t},i.state=function(){return e?"resolved":t?"rejected":"pending"};var o=[],a=[];return i.then=function(r,n,t){return t&&this.progress(t),l(Promise.prototype.then.call(this,r&&function(n){return n&&void 0!==n.__ctx__?r.apply(n.__ctx__,n):r(n)},n&&function(r){return r&&void 0!==r.__ctx__?n.apply(r.__ctx__,r):n(r)}))},i.progress=function(r){return o.forEach(function(n){r(n)}),a.push(r),this},i.pipe=i.then,i.notify=function(r){try{return o.push(r),a.forEach(function(n){return n(r)})}catch(r){this.reject(r)}return this},i}return s.prototype.resolve=function(r){var n=e.call(arguments);return this.resolveWith(null,n)},s.prototype.resolveWith=function(r,n){return(n=n?o(n):[]).__ctx__=r,this._resolve(n),this._resolved=!0,this},s.prototype.notify=function(r){var n=a(this,"promise");return n.notify(r),this},s.prototype.reject=function(r){var n=e.call(arguments);return this.rejectWith(null,n)},s.prototype.rejectWith=function(r,n){return(n=n?o(n):[]).__ctx__=r,this._reject(n),this._rejected=!0,this},s.prototype.isResolved=function(){var r=a(this,"promise");return r.isResolved()},s.prototype.isRejected=function(){var r=a(this,"promise");return r.isRejected()},s.prototype.state=function(){var r=a(this,"promise");return r.state()},s.prototype.then=function(r,n,t){var e=a(this,"promise");return e.then(r,n,t)},s.prototype.progress=function(r){var n=a(this,"promise");return n.progress(r)},s.prototype.catch=function(r){var n=a(this,"promise");return n.catch(r)},s.prototype.always=function(){var r=a(this,"promise");return r.always.apply(r,arguments),this},s.prototype.done=function(){var r=a(this,"promise");return r.done.apply(r,arguments),this},s.prototype.fail=function(r){var n=a(this,"promise");return n.fail(r),this},s.all=function(r){var n=new s;return Promise.all(r).then(n.resolve.bind(n),n.reject.bind(n)),a(n,"promise")},s.first=function(r){return l(Promise.race(r))},s.when=function(r,n,t,e){var o=r&&"function"==typeof r.then,a=o&&r instanceof Promise;if(!o)return arguments.length>1?n?n(r):r:(new s).resolve(r);if(!a){var u=new s(r.cancel);r.then(i(u.resolve,u),i(u.reject,u),u.notify),r=u.promise}return n||t||e?r.then(n,t,e):r},s.reject=function(r){var n=new s;return n.reject(r),n.promise},s.immediate=s.resolve=function(r){var n=new s;return n.resolve.apply(n,arguments),n.promise},s.promise=function(r){var n=new s;return r(n.resolve.bind(n),n.reject.bind(n),n.progress.bind(n)),n.promise},s}),r("skylark-io-diskfs/read",["skylark-langx-async/Deferred","./diskfs"],function(r,n){return n.read=n.readFile=function(n,t){t=t||{};var e=new r,i=new FileReader;i.onload=function(r){e.resolve(r.target.result)},i.onerror=function(r){var n=r.target.error.code;2===n?alert("please don't open this page using protocol fill:///"):alert("error code: "+n)},t.asArrayBuffer?i.readAsArrayBuffer(n):t.asDataUrl?i.readAsDataURL(n):t.asText?i.readAsText(n):i.readAsArrayBuffer(n);return e.promise}}),r("skylark-langx/Deferred",["skylark-langx-async/Deferred"],function(r){return r}),r("skylark-io-diskfs/readImage",["skylark-langx/Deferred","./diskfs","./read"],function(r,n,t){return n.readImage=function(n){var e=new r,i=new Image;return i.onload=function(){e.resolve(i)},i.onerror=function(r){e.reject(r)},t(n,{asDataUrl:!0}).then(function(r){i.src=r}).catch(function(r){e.reject(r)}),e.promise}}),r("skylark-io-diskfs/select",["./diskfs"],function(r){var n,t=1/0;return r.select=function(r){var e=(r=r||{}).directory||!1,i=r.multiple||!1,o=r.accept||"",a=r.title||"",u=r.picked;if(!n){var s=n=document.createElement("input");function l(r){for(var n=r.length;n--;)r[n].size>t&&r.splice(n,1);u(r)}s.type="file",s.style.position="fixed",s.style.left=0,s.style.top=0,s.style.opacity=.001,document.body.appendChild(s),s.onchange=function(r){var n=r.target.webkitEntries||r.target.entries;n&&n.length?webentry.all(n).then(function(r){l(r)}):l(Array.prototype.slice.call(r.target.files)),s.value=""}}n.multiple=i,n.accept=o,n.title=a,n.webkitdirectory=e,n.click()}}),r("skylark-langx/arrays",["skylark-langx-arrays"],function(r){return r}),r("skylark-io-diskfs/webentry",["skylark-langx/arrays","skylark-langx/Deferred","./diskfs"],function(r,n,t){var e=Array.prototype.concat,i=function(){function t(r,t){var e=new n,o=function(r){e.reject(r)};if(t=t||"",r.isFile)r.file(function(r){r.relativePath=t,e.resolve(r)},o);else if(r.isDirectory){var a=r.createReader();a.readEntries(function(n){i(n,t+r.name+"/").then(function(r){e.resolve(r)}).catch(o)},o)}else e.resolve([]);return e.promise}function i(i,o){return n.all(r.map(i,function(r){return t(r,o)})).then(function(){return e.apply([],arguments)})}return{one:t,all:i}}();return t.webentry=i}),r("skylark-io-diskfs/main",["./diskfs","./download","./read","./readImage","./select","./webentry"],function(r){return r}),r("skylark-io-diskfs",["skylark-io-diskfs/main"],function(r){return r})}(t),!e){var a=require("skylark-langx-ns");i?module.exports=a:n.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-io-diskfs-all.js.map
