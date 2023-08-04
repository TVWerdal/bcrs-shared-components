import{g as F}from"./_commonjsHelpers-042e6b4d.js";import{a as H}from"./index-c0b19069.js";var m={exports:{}},$=function r(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,s,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(s=n;s--!==0;)if(!r(t[s],e[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(s=n;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[s]))return!1;for(s=n;s--!==0;){var a=i[s];if(!r(t[a],e[a]))return!1}return!0}return t!==t&&e!==e};/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var J=function(t){return t!=null&&t.constructor!=null&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)};/*!
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */function _(r){return typeof Blob>"u"?!1:r instanceof Blob||Object.prototype.toString.call(r)==="[object Blob]"}var V=_,N=H,M=$,W=J,k=V,A=Object.prototype.toString;function w(r,t){for(var e=r.length,n=0;n<e;n++){var s=r[n];if(t(s))return s}}function T(r){return A.call(r)==="[object Function]"}function U(r){return r!==null&&typeof r=="object"}function z(r){return U(r)&&T(r.pipe)}function G(r){return A.call(r)==="[object ArrayBuffer]"}function x(r,t){return r?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):t}function K(r,t,e,n,s,i,a){return w(r[t.toLowerCase()],function(o){if(typeof o[0]=="string")return(B(e,o[0])||B(x(a,e),o[0]))&&R(t,n,s,o[1])&&y(i,o[2]);if(o[0]instanceof RegExp)return(o[0].test(e)||o[0].test(x(a,e)))&&R(t,n,s,o[1])&&y(i,o[2])})}function B(r,t){var e=r[0]==="/"?r.substr(1):r,n=t[0]==="/"?t.substr(1):t;return e===n}function R(r,t,e,n){var s=["delete","get","head","options"];if(s.indexOf(r.toLowerCase())>=0){var i=n?n.data:void 0,a=n?n.params:void 0;return y(e,a)&&g(t,i)}else return g(t,n)}function y(r,t){return t===void 0?!0:typeof t.asymmetricMatch=="function"?t.asymmetricMatch(r):M(r,t)}function g(r,t){if(t===void 0)return!0;var e;try{e=JSON.parse(r)}catch{}return y(e||r,t)}function Q(r,t){Object.keys(r.handlers).forEach(function(e){var n=r.handlers[e].indexOf(t);n>-1&&r.handlers[e].splice(n,1)})}function j(r,t,e,n){if(n>0){setTimeout(j,n,r,t,e);return}!e.config.validateStatus||e.config.validateStatus(e.status)?r(e):t(C("Request failed with status code "+e.status,e.config,e))}function C(r,t,e,n){if(typeof N.AxiosError=="function")return N.AxiosError.from(new Error(r),n,t,null,e);var s=new Error(r);return s.isAxiosError=!0,s.config=t,e!==void 0&&(s.response=e),n!==void 0&&(s.code=n),s.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},s}function X(r){var t=`Could not find mock for: 
`+JSON.stringify(r,["method","url"],2),e=new Error(t);return e.isCouldNotFindMockError=!0,e.url=r.url,e.method=r.method,e}var P={find:w,findHandler:K,purgeIfReplyOnce:Q,settle:j,isStream:z,isArrayBuffer:G,isFunction:T,isObjectOrArray:U,isBuffer:W,isBlob:k,isBodyOrParametersMatching:R,isEqual:M,createAxiosError:C,createCouldNotFindMockError:X},c=P;function Y(r){return c.isArrayBuffer(r)||c.isBuffer(r)||c.isStream(r)||c.isBlob(r)?r:c.isObjectOrArray(r)?JSON.parse(JSON.stringify(r)):r}function d(r,t){return{status:r[0],data:Y(r[1]),headers:r[2],config:t,request:{responseURL:t.url}}}function S(r,t,e,n){var s=n.baseURL;if(n.baseURL&&!/^https?:/.test(n.baseURL)&&(s=void 0),typeof r.originalAdapter=="function")return r.originalAdapter(n).then(t,e);r.axiosInstanceWithoutInterceptors(Object.assign({},n,{baseURL:s,adapter:r.originalAdapter,transformRequest:[],transformResponse:[]})).then(t,e)}function Z(r,t,e,n){var s=n.url||"";n.baseURL&&s.substr(0,n.baseURL.length)===n.baseURL&&(s=s.slice(n.baseURL.length)),delete n.adapter,r.history[n.method].push(n);var i=c.findHandler(r.handlers,n.method,s,n.data,n.params,n.headers&&n.headers.constructor.name==="AxiosHeaders"?Object.assign({},n.headers):n.headers,n.baseURL);if(i)if(i.length===7&&c.purgeIfReplyOnce(r,i),i.length===2)S(r,t,e,n);else if(typeof i[3]!="function")c.settle(t,e,d(i.slice(3),n),r.delayResponse);else{var a=i[3](n);typeof a.then!="function"?c.settle(t,e,d(a,n),r.delayResponse):a.then(function(o){o.config&&o.status?c.settle(t,e,d([o.status,o.data,o.headers],o.config),0):c.settle(t,e,d(o,n),r.delayResponse)},function(o){r.delayResponse>0?setTimeout(function(){e(o)},r.delayResponse):e(o)})}else switch(r.onNoMatch){case"passthrough":S(r,t,e,n);break;case"throwException":throw c.createCouldNotFindMockError(n);default:c.settle(t,e,{status:404,config:n},r.delayResponse)}}var rr=Z,tr=rr,l=P,b=["get","post","head","delete","patch","put","options","list","link","unlink"];function er(){return(function(r){var t=this;return new Promise(function(e,n){tr(t,e,n,r)})}).bind(this)}function q(){return b.reduce(function(r,t){return r[t]=[],r},{})}function L(){I.call(this),D.call(this)}function I(){this.handlers=q()}function D(){this.history=q()}function p(r,t){if(L.call(this),r)this.axiosInstance=r,this.axiosInstanceWithoutInterceptors=r.create?r.create():void 0,this.originalAdapter=r.defaults.adapter,this.delayResponse=t&&t.delayResponse>0?t.delayResponse:null,this.onNoMatch=t&&t.onNoMatch||null,r.defaults.adapter=this.adapter.call(this);else throw new Error("Please provide an instance of axios to mock")}p.prototype.adapter=er;p.prototype.restore=function(){this.axiosInstance&&(this.axiosInstance.defaults.adapter=this.originalAdapter,this.axiosInstance=void 0)};p.prototype.reset=L;p.prototype.resetHandlers=I;p.prototype.resetHistory=D;b.concat("any").forEach(function(r){var t="on"+r.charAt(0).toUpperCase()+r.slice(1);p.prototype[t]=function(a,n,s){var i=this,a=a===void 0?/.*/:a;function o(u,f,E){var v=[a,n,s,u,f,E];return O(r,i.handlers,v),i}function h(u,f,E){var v=[a,n,s,u,f,E,!0];return O(r,i.handlers,v),i}return{reply:o,replyOnce:h,passThrough:function(){var f=[a,n];return O(r,i.handlers,f),i},abortRequest:function(){return o(function(u){var f=l.createAxiosError("Request aborted",u,void 0,"ECONNABORTED");return Promise.reject(f)})},abortRequestOnce:function(){return h(function(u){var f=l.createAxiosError("Request aborted",u,void 0,"ECONNABORTED");return Promise.reject(f)})},networkError:function(){return o(function(u){var f=l.createAxiosError("Network Error",u);return Promise.reject(f)})},networkErrorOnce:function(){return h(function(u){var f=l.createAxiosError("Network Error",u);return Promise.reject(f)})},timeout:function(){return o(function(u){var f=l.createAxiosError(u.timeoutErrorMessage||"timeout of "+u.timeout+"ms exceeded",u,void 0,u.transitional&&u.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED");return Promise.reject(f)})},timeoutOnce:function(){return h(function(u){var f=l.createAxiosError(u.timeoutErrorMessage||"timeout of "+u.timeout+"ms exceeded",u,void 0,u.transitional&&u.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED");return Promise.reject(f)})}}}});function nr(r,t,e){for(var n=-1,s=0;s<t[r].length;s+=1){var i=t[r][s],a=i.length===7,o=i[0]instanceof RegExp&&e[0]instanceof RegExp?String(i[0])===String(e[0]):i[0]===e[0],h=o&&l.isEqual(i[1],e[1])&&l.isEqual(i[2],e[2]);h&&!a&&(n=s)}return n}function O(r,t,e){if(r==="any")b.forEach(function(s){t[s].push(e)});else{var n=nr(r,t,e);n>-1&&e.length<7?t[r].splice(n,1,e):t[r].push(e)}}m.exports=p;m.exports.default=p;var sr=m.exports;const ur=F(sr);export{ur as M};
//# sourceMappingURL=index-609d875f.js.map
