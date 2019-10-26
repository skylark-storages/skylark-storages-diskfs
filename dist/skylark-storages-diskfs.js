/**
 * skylark-storages-diskfs - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,r){var t=r.define,n=r.require,a="function"==typeof t&&t.amd,s=!a&&"undefined"!=typeof exports;if(!a&&!t){var o={};t=r.define=function(e,r,t){"function"==typeof t?(o[e]={factory:t,deps:r.map(function(r){return function(e,r){if("."!==e[0])return e;var t=r.split("/"),n=e.split("/");t.pop();for(var a=0;a<n.length;a++)"."!=n[a]&&(".."==n[a]?t.pop():t.push(n[a]));return t.join("/")}(r,e)}),resolved:!1,exports:null},n(e)):o[e]={factory:null,resolved:!0,exports:t}},n=r.require=function(e){if(!o.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var t=o[e];if(!t.resolved){var a=[];t.deps.forEach(function(e){a.push(n(e))}),t.exports=t.factory.apply(r,a)||null,t.resolved=!0}return t.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,r){e("skylark-storages-diskfs/diskfs",["skylark-langx/skylark"],function(e){var r=function(){return r};return e.attach("storages.diskfs",r)}),e("skylark-storages-diskfs/download",["./diskfs"],function(e){return e.downlad=function(e,r){if(window.navigator.msSaveBlob)types.isString(e)&&(e=dataURItoBlob(e)),window.navigator.msSaveBlob(e,r);else{var t=document.createElement("a");e instanceof Blob&&(e=URL.createObjectURL(e)),t.href=e,t.setAttribute("download",r||"noname"),t.dispatchEvent(new CustomEvent("click"))}}}),e("skylark-storages-diskfs/read",["skylark-langx/Deferred","./diskfs"],function(e,r){return r.read=r.readFile=function(r,t){t=t||{};var n=new e,a=new FileReader;a.onload=function(e){n.resolve(e.target.result)},a.onerror=function(e){var r=e.target.error.code;2===r?alert("please don't open this page using protocol fill:///"):alert("error code: "+r)},t.asArrayBuffer?a.readAsArrayBuffer(r):t.asDataUrl?a.readAsDataURL(r):t.asText?a.readAsText(r):a.readAsArrayBuffer(r);return n.promise}}),e("skylark-storages-diskfs/select",["./diskfs"],function(e){var r,t=1/0;return e.select=function(e){var n=(e=e||{}).directory||!1,a=e.multiple||!1,s=e.picked;if(!r){var o=r=document.createElement("input");function i(e){for(var r=e.length;r--;)e[r].size>t&&e.splice(r,1);s(e)}o.type="file",o.style.position="fixed",o.style.left=0,o.style.top=0,o.style.opacity=.001,document.body.appendChild(o),o.onchange=function(e){var r=e.target.webkitEntries||e.target.entries;r&&r.length?webentry.all(r).then(function(e){i(e)}):i(Array.prototype.slice.call(e.target.files)),o.value=""}}r.multiple=a,r.webkitdirectory=n,r.click()}}),e("skylark-storages-diskfs/webentry",["skylark-langx/arrays","skylark-langx/Deferred","./diskfs"],function(e,r,t){var n=Array.prototype.concat,a=function(){function t(e,t){var n=new r,s=function(e){n.reject(e)};if(t=t||"",e.isFile)e.file(function(e){e.relativePath=t,n.resolve(e)},s);else if(e.isDirectory){var o=e.createReader();o.readEntries(function(r){a(r,t+e.name+"/").then(function(e){n.resolve(e)}).catch(s)},s)}else n.resolve([]);return n.promise}function a(a,s){return r.all(e.map(a,function(e){return t(e,s)})).then(function(){return n.apply([],arguments)})}return{one:t,all:a}}();return t.webentry=a}),e("skylark-storages-diskfs/main",["./diskfs","./download","./read","./select","./webentry"],function(e){return e}),e("skylark-storages-diskfs",["skylark-storages-diskfs/main"],function(e){return e})}(t),!a){var i=n("skylark-langx/skylark");s?module.exports=i:r.skylarkjs=i}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-storages-diskfs.js.map
