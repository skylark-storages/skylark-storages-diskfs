/**
 * skylark-storages-diskfs - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,t){var r=t.define,s=t.require,i="function"==typeof r&&r.amd,n=!i&&"undefined"!=typeof exports;if(!i&&!r){var o={};r=t.define=function(e,t,r){"function"==typeof r?(o[e]={factory:r,deps:t.map(function(t){return function(e,t){if("."!==e[0])return e;var r=t.split("/"),s=e.split("/");r.pop();for(var i=0;i<s.length;i++)"."!=s[i]&&(".."==s[i]?r.pop():r.push(s[i]));return r.join("/")}(t,e)}),resolved:!1,exports:null},s(e)):o[e]={factory:null,resolved:!0,exports:r}},s=t.require=function(e){if(!o.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var r=o[e];if(!r.resolved){var i=[];r.deps.forEach(function(e){i.push(s(e))}),r.exports=r.factory.apply(t,i)||null,r.resolved=!0}return r.exports}}if(!r)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,t){e("skylark-storages-diskfs/diskfs",["skylark-langx/skylark"],function(e){var t=function(){return t};return e.attach("storages.diskfs",t)}),e("skylark-storages-diskfs/download",["./diskfs"],function(e){return e.downlad=function(e,t){if(window.navigator.msSaveBlob)types.isString(e)&&(e=dataURItoBlob(e)),window.navigator.msSaveBlob(e,t);else{var r=document.createElement("a");e instanceof Blob&&(e=URL.createObjectURL(e)),r.href=e,r.setAttribute("download",t||"noname"),r.dispatchEvent(new CustomEvent("click"))}}}),e("skylark-storages-diskfs/webentry",["skylark-langx/arrays","skylark-langx/Deferred","./diskfs"],function(e,t,r){var s=Array.prototype.concat,i=function(){function r(e,r){var s=new t,n=function(e){s.reject(e)};if(r=r||"",e.isFile)e.file(function(e){e.relativePath=r,s.resolve(e)},n);else if(e.isDirectory){var o=e.createReader();o.readEntries(function(t){i(t,r+e.name+"/").then(function(e){s.resolve(e)}).catch(n)},n)}else s.resolve([]);return s.promise}function i(i,n){return t.all(e.map(i,function(e){return r(e,n)})).then(function(){return s.apply([],arguments)})}return{one:r,all:i}}();return r.webentry=i}),e("skylark-storages-diskfs/dropzone",["skylark-langx/arrays","skylark-langx/Deferred","skylark-utils-dom/styler","skylark-utils-dom/eventer","./diskfs","./webentry"],function(e,t,r,s,i,n){return i.dropzone=function(t,i){var o=(i=i||{}).hoverClass||"dropzone",a=i.dropped,l=0;return s.on(t,"dragenter",function(e){e.dataTransfer&&e.dataTransfer.types.indexOf("Files")>-1&&(s.stop(e),l++,r.addClass(t,o))}),s.on(t,"dragover",function(e){e.dataTransfer&&e.dataTransfer.types.indexOf("Files")>-1&&s.stop(e)}),s.on(t,"dragleave",function(e){e.dataTransfer&&e.dataTransfer.types.indexOf("Files")>-1&&0==--l&&r.removeClass(t,o)}),s.on(t,"drop",function(i){if(i.dataTransfer&&i.dataTransfer.types.indexOf("Files")>-1&&(r.removeClass(t,o),s.stop(i),a)){var l=i.dataTransfer.items;l&&l.length&&(l[0].webkitGetAsEntry||l[0].getAsEntry)?n.all(e.map(l,function(e){return e.webkitGetAsEntry?e.webkitGetAsEntry():e.getAsEntry()})).then(a):a(i.dataTransfer.files)}}),this}}),e("skylark-storages-diskfs/pastezone",["skylark-langx/objects","skylark-utils-dom/eventer","./diskfs"],function(e,t,r){return r.pastezone=function(r,s){(s=s||{}).hoverClass;var i=s.pasted;return t.on(r,"paste",function(t){var r=t.originalEvent&&t.originalEvent.clipboardData&&t.originalEvent.clipboardData.items,s=[];r&&r.length&&e.each(r,function(e,t){var r=t.getAsFile&&t.getAsFile();r&&s.push(r)}),i&&s.length&&i(s)}),this}}),e("skylark-storages-diskfs/select",["./diskfs"],function(e){var t,r=1/0;return e.select=function(e){var s=(e=e||{}).directory||!1,i=e.multiple||!1,n=e.picked;if(!t){var o=t=document.createElement("input");function a(e){for(var t=e.length;t--;)e[t].size>r&&e.splice(t,1);n(e)}o.type="file",o.style.position="fixed",o.style.left=0,o.style.top=0,o.style.opacity=.001,document.body.appendChild(o),o.onchange=function(e){var t=e.target.webkitEntries||e.target.entries;t&&t.length?webentry.all(t).then(function(e){a(e)}):a(Array.prototype.slice.call(e.target.files)),o.value=""}}t.multiple=i,t.webkitdirectory=s,t.click()}}),e("skylark-storages-diskfs/picker",["skylark-langx/objects","skylark-utils-dom/eventer","./diskfs","./select"],function(e,t,r,s){return r.picker=function(e,r){return t.on(e,"click",function(e){e.preventDefault(),s(r)}),this}}),e("skylark-storages-diskfs/read",["skylark-langx/Deferred","./diskfs"],function(e,t){return t.read=t.readFile=function(t,r){r=r||{};var s=new e,i=new FileReader;i.onload=function(e){s.resolve(e.target.result)},i.onerror=function(e){var t=e.target.error.code;2===t?alert("please don't open this page using protocol fill:///"):alert("error code: "+t)},r.asArrayBuffer?i.readAsArrayBuffer(t):r.asDataUrl?i.readAsDataURL(t):r.asText?i.readAsText(t):i.readAsArrayBuffer(t);return s.promise}}),e("skylark-storages-diskfs/upload",["skylark-langx/types","skylark-langx/objects","skylark-langx/arrays","skylark-langx/Deferred","skylark-langx/Xhr","./diskfs"],function(e,t,r,s,i,n){return n.upload=function(r){var n=t.mixin({contentRange:null,paramName:void 0,singleFileUploads:!0,limitMultiFileUploads:void 0,limitMultiFileUploadSize:void 0,limitMultiFileUploadSizeOverhead:512,sequentialUploads:!1,limitConcurrentUploads:void 0,multipart:!0,maxChunkSize:void 0,uploadedBytes:void 0,recalculateProgress:!0,progressInterval:100,bitrateInterval:500,autoUpload:!0,messages:{uploadedBytes:"Uploaded bytes exceed file size"},i18n:function(e,r){return e=this.messages[e]||e.toString(),r&&t.each(r,function(t,r){e=e.replace("{"+t+"}",r)}),e},formData:function(e){return e.serializeArray()},add:function(e,t){if(e.isDefaultPrevented())return!1;(t.autoUpload||!1!==t.autoUpload&&$(this).fileupload("option","autoUpload"))&&t.process().done(function(){t.submit()})},processData:!1,contentType:!1,cache:!1},r),o=function(){var e=Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice;return e.apply(this,arguments)},a=function(e){return i.request(e.url,e)};function l(r){var s,i=r.files[0],n=r.multipart,o="array"===e.type(r.paramName)?r.paramName[0]:r.paramName;r.headers=t.mixin({},r.headers),r.contentRange&&(r.headers["Content-Range"]=r.contentRange),n?(s=new FormData,r.blob?s.append(o,r.blob,i.name):t.each(r.files,function(t,i){s.append("array"===e.type(r.paramName)&&r.paramName[t]||o,i,i.uploadName||i.name)}),r.data=s):(r.headers["Content-Disposition"]='attachment; filename="'+encodeURI(i.name)+'"',r.contentType=i.type||"application/octet-stream",r.data=r.blob||i),r.blob=null}function d(e,r){e.uploadedBytes=e.uploadedBytes||0;var i,n,d=e.files[0],u=d.size,p=e.uploadedBytes,c=e.maxChunkSize||u,f=o,h=new s,g=h.promise;return!(!f||!(p||c<u)||e.data)&&(!!r||(p>=u?(d.error=e.i18n("uploadedBytes"),this._getXHRPromise(!1,e.context,[null,"error",d.error])):(n=function(){var r=t.mixin({},e),s=r._progress.loaded;r.blob=f.call(d,p,p+c,d.type),r.chunkSize=r.blob.size,r.contentRange="bytes "+p+"-"+(p+r.chunkSize-1)+"/"+u,l(r),i=a(r).done(function(t,i,o){p=function(e){var t=e.getResponseHeader("Range"),r=t&&t.split("-"),s=r&&r.length>1&&parseInt(r[1],10);return s&&s+1}(o)||p+r.chunkSize,s+r.chunkSize-r._progress.loaded&&h.progress({lengthComputable:!0,loaded:p-r.uploadedBytes,total:p-r.uploadedBytes}),e.uploadedBytes=r.uploadedBytes=p,r.result=t,r.textStatus=i,r.jqXHR=o,p<u?n():h.resolveWith(r.context,[t,i,o])}).fail(function(e,t,s){r.jqXHR=e,r.textStatus=t,r.errorThrown=s,h.rejectWith(r.context,[e,t,s])})},g.abort=function(){return i.abort()},n(),g)))}u=n,u.type=u.type||"POST",d(u,!0)||u.data||l(u),n._bitrateTimer=new function(){this.timestamp=Date.now?Date.now():(new Date).getTime(),this.loaded=0,this.bitrate=0,this.getBitrate=function(e,t,r){var s=e-this.timestamp;return(!this.bitrate||!r||s>r)&&(this.bitrate=(t-this.loaded)*(1e3/s)*8,this.loaded=t,this.timestamp=e),this.bitrate}};var u;var p=d(n)||a(n);return p.options=n,p}}),e("skylark-storages-diskfs/uploader",["skylark-langx/langx","skylark-utils-dom/eventer","skylark-utils-dom/query","./diskfs","./dropzone","./pastezone","./picker","./upload"],function(e,t,r,s,i,n,o,a){"use strict";var l=e.Deferred,d=e.Evented.inherit({options:{dropZone:r(document),pasteZone:r(document),picker:void 0,paramName:void 0,singleFileUploads:!0,limitMultiFileUploads:void 0,limitMultiFileUploadSize:void 0,limitMultiFileUploadSizeOverhead:512,sequentialUploads:!1,limitConcurrentUploads:void 0,postMessage:void 0,multipart:!0,maxChunkSize:void 0,uploadedBytes:void 0,recalculateProgress:!0,progressInterval:100,bitrateInterval:500,autoUpload:!1,messages:{uploadedBytes:"Uploaded bytes exceed file size"},i18n:function(t,r){return t=this.messages[t]||t.toString(),r&&e.each(r,function(e,r){t=t.replace("{"+e+"}",r)}),t},formData:function(e){return e.serializeArray()},add:function(e,t){if(e.isDefaultPrevented())return!1;(t.autoUpload||!1!==t.autoUpload&&r(this).fileupload("instance").option("autoUpload"))&&t.process().done(function(){t.submit()})},processData:!1,contentType:!1,cache:!1},_specialOptions:["picker","dropZone","pasteZone","multipart","filesContainer","uploadTemplateId","downloadTemplateId"],_BitrateTimer:function(){this.timestamp=Date.now?Date.now():(new Date).getTime(),this.loaded=0,this.bitrate=0,this.getBitrate=function(e,t,r){var s=e-this.timestamp;return(!this.bitrate||!r||s>r)&&(this.bitrate=(t-this.loaded)*(1e3/s)*8,this.loaded=t,this.timestamp=e),this.bitrate}},_getTotal:function(t){var r=0;return e.each(t,function(e,t){r+=t.size||1}),r},_initProgressObject:function(t){var r={loaded:0,total:0,bitrate:0};t._progress?e.extend(t._progress,r):t._progress=r},_initResponseObject:function(e){var t;if(e._response)for(t in e._response)e._response.hasOwnProperty(t)&&delete e._response[t];else e._response={}},_onProgress:function(e,r){if(e.lengthComputable){var s,i=Date.now?Date.now():(new Date).getTime();if(r._time&&r.progressInterval&&i-r._time<r.progressInterval&&e.loaded!==e.total)return;r._time=i,s=Math.floor(e.loaded/e.total*(r.chunkSize||r._progress.total))+(r.uploadedBytes||0),this._progress.loaded+=s-r._progress.loaded,this._progress.bitrate=this._bitrateTimer.getBitrate(i,this._progress.loaded,r.bitrateInterval),r._progress.loaded=r.loaded=s,r._progress.bitrate=r.bitrate=r._bitrateTimer.getBitrate(i,s,r.bitrateInterval),this._trigger("progress",t.create("progress",{delegatedEvent:e}),r),this._trigger("progressall",t.create("progressall",{delegatedEvent:e}),this._progress)}},_getParamName:function(t){r(t.picker);var s=t.paramName;return e.isArray(s)||(s=[s]),s},_getDeferredState:function(e){return e.state?e.state():e.isResolved()?"resolved":e.isRejected()?"rejected":"pending"},_enhancePromise:function(e){return e.success=e.done,e.error=e.fail,e.complete=e.always,e},_getXHRPromise:function(e,t,r){var s=new l,i=s.promise;return t=t||this.options.context||i,!0===e?s.resolveWith(t,r):!1===e&&s.rejectWith(t,r),i.abort=s.promise,this._enhancePromise(i)},_addConvenienceMethods:function(e,r){var s=this,i=function(e){return(new l).resolveWith(s,e).promise};r.process=function(e,t){return(e||t)&&(r._processQueue=this._processQueue=(this._processQueue||i([this])).pipe(function(){return r.errorThrown?(new l).rejectWith(s,[r]).promise:i(arguments)}).pipe(e,t)),this._processQueue||i([this])},r.submit=function(){return"pending"!==this.state()&&(r.jqXHR=this.jqXHR=!1!==s._trigger("submit",t.create("submit",{delegatedEvent:e}),this)&&s._onSend(e,this)),this.jqXHR||s._getXHRPromise()},r.abort=function(){return this.jqXHR?this.jqXHR.abort():(this.errorThrown="abort",s._trigger("fail",null,this),s._getXHRPromise(!1))},r.state=function(){return this.jqXHR?s._getDeferredState(this.jqXHR):this._processQueue?s._getDeferredState(this._processQueue):void 0},r.processing=function(){return!this.jqXHR&&this._processQueue&&"pending"===s._getDeferredState(this._processQueue)},r.progress=function(){return this._progress},r.response=function(){return this._response}},_beforeSend:function(e,t){0===this._active&&(this._trigger("start"),this._bitrateTimer=new this._BitrateTimer,this._progress.loaded=this._progress.total=0,this._progress.bitrate=0),this._initResponseObject(t),this._initProgressObject(t),t._progress.loaded=t.loaded=t.uploadedBytes||0,t._progress.total=t.total=this._getTotal(t.files)||1,t._progress.bitrate=t.bitrate=0,this._active+=1,this._progress.loaded+=t.loaded,this._progress.total+=t.total},_onDone:function(e,r,s,i){var n=i._progress.total,o=i._response;i._progress.loaded<n&&this._onProgress(t.create("progress",{lengthComputable:!0,loaded:n,total:n}),i),o.result=i.result=e,o.textStatus=i.textStatus=r,o.jqXHR=i.jqXHR=s,this._trigger("done",null,i)},_onFail:function(e,t,r,s){var i=s._response;s.recalculateProgress&&(this._progress.loaded-=s._progress.loaded,this._progress.total-=s._progress.total),i.jqXHR=s.jqXHR=e,i.textStatus=s.textStatus=t,i.errorThrown=s.errorThrown=r,this._trigger("fail",null,s)},_trigger:function(e,r,s){var i=t.proxy(r);return i.type=e,i.data=s,this.trigger(i,s)},_onAlways:function(e,t,r,s){this._trigger("always",null,s)},_onSend:function(e,t){t.submit||this._addConvenienceMethods(e,t);var r,s=this;return this._beforeSend(e,t),s._sending+=1,t.url=s.options.url,t.dataType=s.options.dataType,t.xhrFields=s.options.xhrFields,(r=a(t)).progress(function(e){s._onProgress(e,r.options)}).done(function(e,t){s._onDone(e,t,r,r.options)}).fail(function(e,t){s._onFail(r,t,e,r.options)}).always(function(){s._sending-=1,s._active-=1,s._trigger("stop")}),r},_onAdd:function(r,s){var i,n,o,a,l=this,d=!0,u=e.extend({},this.options,s),p=s.files,c=p.length,f=u.limitMultiFileUploads,h=u.limitMultiFileUploadSize,g=u.limitMultiFileUploadSizeOverhead,m=0,v=this._getParamName(u),_=0;if(!h||c&&void 0!==p[0].size||(h=void 0),u.singleFileUploads||f||h)if(u.singleFileUploads||h||!f)if(!u.singleFileUploads&&h)for(o=[],i=[],a=0;a<c;a+=1)m+=p[a].size+g,(a+1===c||m+p[a+1].size+g>h||f&&a+1-_>=f)&&(o.push(p.slice(_,a+1)),(n=v.slice(_,a+1)).length||(n=v),i.push(n),_=a+1,m=0);else i=v;else for(o=[],i=[],a=0;a<c;a+=f)o.push(p.slice(a,a+f)),(n=v.slice(a,a+f)).length||(n=v),i.push(n);else o=[p],i=[v];return s.originalFiles=p,e.each(o||p,function(n,a){var u=e.extend({},s);return u.files=o?a:[a],u.paramName=i[n],l._initResponseObject(u),l._initProgressObject(u),l._addConvenienceMethods(r,u),d=l._trigger("add",t.create("add",{delegatedEvent:r}),u)}),d},_initEventHandlers:function(){var e=this;i(this.options.dropZone[0],{dropped:function(t){var r={};r.files=t,e._onAdd(null,r)}}),n(this.options.pasteZone[0],{pasted:function(t){var r={};r.files=t,e._onAdd(null,r)}}),o(this.options.picker[0],{multiple:!0,picked:function(t){var r={};r.files=t,e._onAdd(null,r)}})},_destroyEventHandlers:function(){},_setOption:function(t,r){var s=-1!==e.inArray(t,this._specialOptions);s&&this._destroyEventHandlers(),this._super(t,r),s&&(this._initSpecialOptions(),this._initEventHandlers())},_initSpecialOptions:function(){var e=this.options;e.picker&&(e.picker instanceof r||(e.picker=r(e.picker,this._elm))),e.dropZone&&(e.dropZone instanceof r||(e.dropZone=r(e.dropZone,this._elm))),e.pasteZone&&(e.pasteZone instanceof r||(e.pasteZone=r(e.pasteZone,this._elm)))},_getRegExp:function(e){var t=e.split("/"),r=t.pop();return t.shift(),new RegExp(t.join("/"),r)},_isRegExpOption:function(t,r){return"url"!==t&&"string"===e.type(r)&&/^\/.*\/[igm]{0,3}$/.test(r)},_construct:function(t,r){this._elm=t,this.options=e.mixin({},this.options,r),this._initSpecialOptions(),this._slots=[],this._sequence=this._getXHRPromise(!0),this._sending=this._active=0,this._initProgressObject(this),this._initEventHandlers()},active:function(){return this._active},progress:function(){return this._progress},add:function(t){t&&!this.options.disabled&&(t.files=e.makeArray(t.files),this._onAdd(null,t))},send:function(t){return t&&!this.options.disabled&&(t.files=e.makeArray(t.files),t.files.length)?this._onSend(null,t):this._getXHRPromise(!1,t&&t.context)}});return s.uploader=function(t,r){var s=new d(t,r);return s.on("all",function(t,i){var n=t.type;e.isFunction(r[n])&&r[n].call(s._elm,t,i)}),s}}),e("skylark-storages-diskfs/main",["./diskfs","./download","./dropzone","./pastezone","./picker","./read","./select","./upload","./uploader","./webentry"],function(e){return e}),e("skylark-storages-diskfs",["skylark-storages-diskfs/main"],function(e){return e})}(r),!i){var a=s("skylark-langx/skylark");n?module.exports=a:t.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-storages-diskfs.js.map