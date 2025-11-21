const sf=()=>{};var vc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=function(n,e){if(!n)throw Tn(e)},Tn=function(n){return new Error("Firebase Database ("+eh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rf=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const o=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},_o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=o>>2,p=(o&3)<<4|l>>4;let v=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(v=64)),i.push(t[m],t[p],t[v],t[R])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(th(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||p==null)throw new of;const v=o<<2|l>>4;if(i.push(v),d!==64){const R=l<<4&240|d>>2;if(i.push(R),p!==64){const b=d<<6&192|p;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class of extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nh=function(n){const e=th(n);return _o.encodeByteArray(e,!0)},cs=function(n){return nh(n).replace(/\./g,"")},ls=function(n){try{return _o.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(n){return ih(void 0,n)}function ih(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!cf(t)||(n[t]=ih(n[t],e[t]));return n}function cf(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=()=>lf().__FIREBASE_DEFAULTS__,uf=()=>{if(typeof process>"u"||typeof vc>"u")return;const n=vc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},df=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ls(n[1]);return e&&JSON.parse(e)},mo=()=>{try{return sf()||hf()||uf()||df()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sh=n=>{var e,t;return(t=(e=mo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},yo=n=>{const e=sh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},rh=()=>{var n;return(n=mo())==null?void 0:n.config},oh=n=>{var e;return(e=mo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ls(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[cs(JSON.stringify(t)),cs(JSON.stringify(a)),""].join(".")}const Qn={};function ff(){const n={prod:[],emulator:[]};for(const e of Object.keys(Qn))Qn[e]?n.emulator.push(e):n.prod.push(e);return n}function pf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ec=!1;function Ms(n,e){if(typeof window>"u"||typeof document>"u"||!bt(window.location.host)||Qn[n]===e||Qn[n]||Ec)return;Qn[n]=e;function t(v){return`__firebase__banner__${v}`}const i="__firebase__banner",o=ff().prod.length>0;function a(){const v=document.getElementById(i);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function u(v,R){v.setAttribute("width","24"),v.setAttribute("id",R),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Ec=!0,a()},v}function m(v,R){v.setAttribute("id",R),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function p(){const v=pf(i),R=t("text"),b=document.getElementById(R)||document.createElement("span"),N=t("learnmore"),O=document.getElementById(N)||document.createElement("a"),z=t("preprendIcon"),ee=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const Y=v.element;l(Y),m(O,N);const J=d();u(ee,z),Y.append(ee,b,O,J),document.body.appendChild(Y)}o?(b.innerText="Preview backend disconnected.",ee.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ee.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function gf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _f(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ah(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mf(){const n=Ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yf(){return eh.NODE_ADMIN===!0}function vf(){try{return typeof indexedDB=="object"}catch{return!1}}function Ef(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}function NI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="FirebaseError";class ze extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=If,Object.setPrototypeOf(this,ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?wf(o,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new ze(s,l,i)}}function wf(n,e){return n.replace(Tf,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Tf=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n){return JSON.parse(n)}function re(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=function(n){let e={},t={},i={},s="";try{const o=n.split(".");e=ui(ls(o[0])||""),t=ui(ls(o[1])||""),s=o[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Cf=function(n){const e=ch(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Sf=function(n){const e=ch(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function fn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Gr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function hs(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function wt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const o=n[s],a=e[s];if(Ic(o)&&Ic(a)){if(!wt(o,a))return!1}else if(o!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ic(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Yn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,o]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Jn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)i[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const v=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(v<<1|v>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],u=this.chain_[4],d,m;for(let p=0;p<80;p++){p<40?p<20?(d=l^o&(a^l),m=1518500249):(d=o^a^l,m=1859775393):p<60?(d=o&a|l&(o|a),m=2400959708):(d=o^a^l,m=3395469782);const v=(s<<5|s>>>27)+d+u+m+i[p]&4294967295;u=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=v}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const o=this.buf_;let a=this.inbuf_;for(;s<t;){if(a===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(o[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(o),a=0;break}}else for(;s<t;)if(o[a]=e[s],++a,++s,a===this.blockSize){this.compress_(o),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[s]>>o&255,++i;return e}}function Af(n,e){const t=new bf(n,e);return t.subscribe.bind(t)}class bf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Pf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Rr),s.error===void 0&&(s.error=Rr),s.complete===void 0&&(s.complete=Rr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Rr(){}function xs(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const o=s-55296;i++,A(i<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(i)-56320;s=65536+(o<<10)+a}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Fs=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=1e3,Of=2,Df=4*60*60*1e3,Lf=.5;function OI(n,e=Nf,t=Of){const i=e*Math.pow(t,n),s=Math.round(Lf*i*(Math.random()-.5)*2);return Math.min(Df,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n){return n&&n._delegate?n._delegate:n}class nt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new wi;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ff(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);i===l&&a.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:xf(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xf(n){return n===xt?void 0:n}function Ff(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Mf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Vf={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Wf=H.INFO,Bf={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Hf=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Bf[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Us{constructor(e){this.name=e,this._logLevel=Wf,this._logHandler=Hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const jf=(n,e)=>e.some(t=>n instanceof t);let wc,Tc;function $f(){return wc||(wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gf(){return Tc||(Tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lh=new WeakMap,qr=new WeakMap,hh=new WeakMap,Ar=new WeakMap,Io=new WeakMap;function qf(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(yt(n.result)),s()},a=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&lh.set(t,n)}).catch(()=>{}),Io.set(e,n),e}function zf(n){if(qr.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});qr.set(n,e)}let zr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Kf(n){zr=n(zr)}function Yf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(br(this),e,...t);return hh.set(i,e.sort?e.sort():[e]),yt(i)}:Gf().includes(n)?function(...e){return n.apply(br(this),e),yt(lh.get(this))}:function(...e){return yt(n.apply(br(this),e))}}function Jf(n){return typeof n=="function"?Yf(n):(n instanceof IDBTransaction&&zf(n),jf(n,$f())?new Proxy(n,zr):n)}function yt(n){if(n instanceof IDBRequest)return qf(n);if(Ar.has(n))return Ar.get(n);const e=Jf(n);return e!==n&&(Ar.set(n,e),Io.set(e,n)),e}const br=n=>Io.get(n);function Xf(n,e,{blocked:t,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),l=yt(a);return i&&a.addEventListener("upgradeneeded",u=>{i(yt(a.result),u.oldVersion,u.newVersion,yt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Qf=["get","getKey","getAll","getAllKeys","count"],Zf=["put","add","delete","clear"],Pr=new Map;function Cc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Pr.get(e))return Pr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Zf.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Qf.includes(t)))return;const o=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return i&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return Pr.set(e,o),o}Kf(n=>({...n,get:(e,t,i)=>Cc(e,t)||n.get(e,t,i),has:(e,t)=>!!Cc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tp(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function tp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kr="@firebase/app",Sc="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Us("@firebase/app"),np="@firebase/app-compat",ip="@firebase/analytics-compat",sp="@firebase/analytics",rp="@firebase/app-check-compat",op="@firebase/app-check",ap="@firebase/auth",cp="@firebase/auth-compat",lp="@firebase/database",hp="@firebase/data-connect",up="@firebase/database-compat",dp="@firebase/functions",fp="@firebase/functions-compat",pp="@firebase/installations",gp="@firebase/installations-compat",_p="@firebase/messaging",mp="@firebase/messaging-compat",yp="@firebase/performance",vp="@firebase/performance-compat",Ep="@firebase/remote-config",Ip="@firebase/remote-config-compat",wp="@firebase/storage",Tp="@firebase/storage-compat",Cp="@firebase/firestore",Sp="@firebase/ai",Rp="@firebase/firestore-compat",Ap="firebase",bp="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]",Pp={[Kr]:"fire-core",[np]:"fire-core-compat",[sp]:"fire-analytics",[ip]:"fire-analytics-compat",[op]:"fire-app-check",[rp]:"fire-app-check-compat",[ap]:"fire-auth",[cp]:"fire-auth-compat",[lp]:"fire-rtdb",[hp]:"fire-data-connect",[up]:"fire-rtdb-compat",[dp]:"fire-fn",[fp]:"fire-fn-compat",[pp]:"fire-iid",[gp]:"fire-iid-compat",[_p]:"fire-fcm",[mp]:"fire-fcm-compat",[yp]:"fire-perf",[vp]:"fire-perf-compat",[Ep]:"fire-rc",[Ip]:"fire-rc-compat",[wp]:"fire-gcs",[Tp]:"fire-gcs-compat",[Cp]:"fire-fst",[Rp]:"fire-fst-compat",[Sp]:"fire-vertex","fire-js":"fire-js",[Ap]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Map,kp=new Map,Jr=new Map;function Rc(n,e){try{n.container.addComponent(e)}catch(t){it.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tt(n){const e=n.name;if(Jr.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;Jr.set(e,n);for(const t of us.values())Rc(t,n);for(const t of kp.values())Rc(t,n);return!0}function Ci(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ue(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new Ti("app","Firebase",Np);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=bp;function Dp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Yr,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw vt.create("bad-app-name",{appName:String(s)});if(t||(t=rh()),!t)throw vt.create("no-options");const o=us.get(s);if(o){if(wt(t,o.options)&&wt(i,o.config))return o;throw vt.create("duplicate-app",{appName:s})}const a=new Uf(s);for(const u of Jr.values())a.addComponent(u);const l=new Op(t,i,a);return us.set(s,l),l}function Vs(n=Yr){const e=us.get(n);if(!e&&n===Yr&&rh())return Dp();if(!e)throw vt.create("no-app",{appName:n});return e}function ke(n,e,t){let i=Pp[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(a.join(" "));return}Tt(new nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="firebase-heartbeat-database",Mp=1,di="firebase-heartbeat-store";let kr=null;function uh(){return kr||(kr=Xf(Lp,Mp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(di)}catch(t){console.warn(t)}}}}).catch(n=>{throw vt.create("idb-open",{originalErrorMessage:n.message})})),kr}async function xp(n){try{const t=(await uh()).transaction(di),i=await t.objectStore(di).get(dh(n));return await t.done,i}catch(e){if(e instanceof ze)it.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(t.message)}}}async function Ac(n,e){try{const i=(await uh()).transaction(di,"readwrite");await i.objectStore(di).put(e,dh(n)),await i.done}catch(t){if(t instanceof ze)it.warn(t.message);else{const i=vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});it.warn(i.message)}}}function dh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=1024,Up=30;class Vp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Bp(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=bc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Up){const a=Hp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){it.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bc(),{heartbeatsToSend:i,unsentEntries:s}=Wp(this._heartbeatsCache.heartbeats),o=cs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return it.warn(t),""}}}function bc(){return new Date().toISOString().substring(0,10)}function Wp(n,e=Fp){const t=[];let i=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Pc(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Pc(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Bp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vf()?Ef().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ac(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ac(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pc(n){return cs(JSON.stringify({version:2,heartbeats:n})).length}function Hp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n){Tt(new nt("platform-logger",e=>new ep(e),"PRIVATE")),Tt(new nt("heartbeat",e=>new Vp(e),"PRIVATE")),ke(Kr,Sc,n),ke(Kr,Sc,"esm2020"),ke("fire-js","")}jp("");var $p="firebase",Gp="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke($p,Gp,"app");var kc={};const Nc="@firebase/database",Oc="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh="";function qp(n){fh=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ui(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ke(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zp(e)}}catch{}return new Kp},Vt=ph("localStorage"),Yp=ph("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Us("@firebase/database"),Jp=function(){let n=1;return function(){return n++}}(),gh=function(n){const e=kf(n),t=new Rf;t.update(e);const i=t.digest();return _o.encodeByteArray(i)},Si=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Si.apply(null,i):typeof i=="object"?e+=re(i):e+=i,e+=" "}return e};let Zn=null,Dc=!0;const Xp=function(n,e){A(!0,"Can't turn on custom loggers persistently."),an.logLevel=H.VERBOSE,Zn=an.log.bind(an)},he=function(...n){if(Dc===!0&&(Dc=!1,Zn===null&&Yp.get("logging_enabled")===!0&&Xp()),Zn){const e=Si.apply(null,n);Zn(e)}},Ri=function(n){return function(...e){he(n,...e)}},Xr=function(...n){const e="FIREBASE INTERNAL ERROR: "+Si(...n);an.error(e)},st=function(...n){const e=`FIREBASE FATAL ERROR: ${Si(...n)}`;throw an.error(e),new Error(e)},ve=function(...n){const e="FIREBASE WARNING: "+Si(...n);an.warn(e)},Qp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Zp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},pn="[MIN_NAME]",Gt="[MAX_NAME]",Qt=function(n,e){if(n===e)return 0;if(n===pn||e===Gt)return-1;if(e===pn||n===Gt)return 1;{const t=Lc(n),i=Lc(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},eg=function(n,e){return n===e?0:n<e?-1:1},$n=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+re(e))},To=function(n){if(typeof n!="object"||n===null)return re(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=re(e[i]),t+=":",t+=To(n[e[i]]);return t+="}",t},_h=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function de(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const mh=function(n){A(!wo(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,o,a,l,u;n===0?(o=0,a=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),o=l+i,a=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(o=0,a=Math.round(n/Math.pow(2,1-i-t))));const d=[];for(u=t;u;u-=1)d.push(a%2?1:0),a=Math.floor(a/2);for(u=e;u;u-=1)d.push(o%2?1:0),o=Math.floor(o/2);d.push(s?1:0),d.reverse();const m=d.join("");let p="";for(u=0;u<64;u+=8){let v=parseInt(m.substr(u,8),2).toString(16);v.length===1&&(v="0"+v),p=p+v}return p.toLowerCase()},tg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ng=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ig(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const sg=new RegExp("^-?(0*)\\d{1,10}$"),rg=-2147483648,og=2147483647,Lc=function(n){if(sg.test(n)){const e=Number(n);if(e>=rg&&e<=og)return e}return null},Cn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ve("Exception was thrown by user callback.",t),e},Math.floor(0))}},ag=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ei=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ue(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ve(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(he("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ve(e)}}class ns{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ns.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="5",yh="v",vh="s",Eh="r",Ih="f",wh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Th="ls",Ch="p",Qr="ac",Sh="websocket",Rh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t,i,s,o=!1,a="",l=!1,u=!1,d=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=o,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this.emulatorOptions=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function hg(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function bh(n,e,t){A(typeof e=="string","typeof type must == string"),A(typeof t=="object","typeof params must == object");let i;if(e===Sh)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Rh)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hg(n)&&(t.ns=n.namespace);const s=[];return de(t,(o,a)=>{s.push(o+"="+a)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.counters_={}}incrementCounter(e,t=1){Ke(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return af(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr={},Or={};function So(n){const e=n.toString();return Nr[e]||(Nr[e]=new ug),Nr[e]}function dg(n,e){const t=n.toString();return Or[t]||(Or[t]=e()),Or[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Cn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="start",pg="close",gg="pLPCommand",_g="pRTLPCB",Ph="id",kh="pw",Nh="ser",mg="cb",yg="seg",vg="ts",Eg="d",Ig="dframe",Oh=1870,Dh=30,wg=Oh-Dh,Tg=25e3,Cg=3e4;class on{constructor(e,t,i,s,o,a,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ri(e),this.stats_=So(t),this.urlFn=u=>(this.appCheckToken&&(u[Qr]=this.appCheckToken),bh(t,Rh,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new fg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Cg)),Zp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ro((...o)=>{const[a,l,u,d,m]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===Mc)this.id=l,this.password=u;else if(a===pg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...o)=>{const[a,l]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Mc]="t",i[Nh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[mg]=this.scriptTagHolder.uniqueCallbackIdentifier),i[yh]=Co,this.transportSessionId&&(i[vh]=this.transportSessionId),this.lastSessionId&&(i[Th]=this.lastSessionId),this.applicationId&&(i[Ch]=this.applicationId),this.appCheckToken&&(i[Qr]=this.appCheckToken),typeof location<"u"&&location.hostname&&wh.test(location.hostname)&&(i[Eh]=Ih);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){on.forceAllow_=!0}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){return on.forceAllow_?!0:!on.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tg()&&!ng()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=nh(t),s=_h(i,wg);for(let o=0;o<s.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[o]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Ig]="t",i[Ph]=e,i[kh]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=re(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ro{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jp(),window[gg+this.uniqueCallbackIdentifier]=e,window[_g+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ro.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){he("frame writing exception"),l.stack&&he(l.stack),he(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||he("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ph]=this.myID,e[kh]=this.myPW,e[Nh]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dh+i.length<=Oh;){const a=this.pendingSegs.shift();i=i+"&"+yg+s+"="+a.seg+"&"+vg+s+"="+a.ts+"&"+Eg+s+"="+a.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Tg)),o=()=>{clearTimeout(s),i()};this.addTag(e,o)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{he("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=16384,Rg=45e3;let ds=null;typeof MozWebSocket<"u"?ds=MozWebSocket:typeof WebSocket<"u"&&(ds=WebSocket);class Le{constructor(e,t,i,s,o,a,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ri(this.connId),this.stats_=So(t),this.connURL=Le.connectionURL_(t,a,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,o){const a={};return a[yh]=Co,typeof location<"u"&&location.hostname&&wh.test(location.hostname)&&(a[Eh]=Ih),t&&(a[vh]=t),i&&(a[Th]=i),s&&(a[Qr]=s),o&&(a[Ch]=o),bh(e,Sh,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vt.set("previous_websocket_failure",!0);try{let i;yf(),this.mySock=new ds(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ds!==null&&!Le.forceDisallow_}static previouslyFailed(){return Vt.isInMemoryStorage||Vt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=ui(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=_h(t,Sg);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rg))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Le.responsesRequiredToBeHealthy=2;Le.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{static get ALL_TRANSPORTS(){return[on,Le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Le&&Le.isAvailable();let i=t&&!Le.previouslyFailed();if(e.webSocketOnly&&(t||ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Le];else{const s=this.transports_=[];for(const o of fi.ALL_TRANSPORTS)o&&o.isAvailable()&&s.push(o);fi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=6e4,bg=5e3,Pg=10*1024,kg=100*1024,Dr="t",xc="d",Ng="s",Fc="r",Og="e",Uc="o",Vc="a",Wc="n",Bc="p",Dg="h";class Lg{constructor(e,t,i,s,o,a,l,u,d,m){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=o,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=u,this.onKill_=d,this.lastSessionId=m,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ri("c:"+this.id+":"),this.transportManager_=new fi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ei(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Pg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Dr in e){const t=e[Dr];t===Vc?this.upgradeIfSecondaryHealthy_():t===Fc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Uc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=$n("t",e),i=$n("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=$n("t",e),i=$n("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=$n(Dr,e);if(xc in e){const i=e[xc];if(t===Dg){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Wc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ng?this.onConnectionShutdown_(i):t===Fc?this.onReset_(i):t===Og?Xr("Server Error: "+i):t===Uc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Co!==i&&ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ei(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ag))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ei(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let o=0;o<s.length;o++)if(s[o].callback===t&&(!i||i===s[o].context)){s.splice(o,1);return}}validateEventType_(e){A(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Mh{static getInstance(){return new fs}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Eo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=32,jc=768;class j{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function B(){return new j("")}function M(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ct(n){return n.pieces_.length-n.pieceNum_}function q(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new j(n.pieces_,e)}function Ao(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Mg(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function pi(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function xh(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new j(e,0)}function X(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof j)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new j(t,0)}function F(n){return n.pieceNum_>=n.pieces_.length}function ye(n,e){const t=M(n),i=M(e);if(t===null)return e;if(t===i)return ye(q(n),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function xg(n,e){const t=pi(n,0),i=pi(e,0);for(let s=0;s<t.length&&s<i.length;s++){const o=Qt(t[s],i[s]);if(o!==0)return o}return t.length===i.length?0:t.length<i.length?-1:1}function bo(n,e){if(Ct(n)!==Ct(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Pe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ct(n)>Ct(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Fg{constructor(e,t){this.errorPrefix_=t,this.parts_=pi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Fs(this.parts_[i]);Fh(this)}}function Ug(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Fs(e),Fh(n)}function Vg(n){const e=n.parts_.pop();n.byteLength_-=Fs(e),n.parts_.length>0&&(n.byteLength_-=1)}function Fh(n){if(n.byteLength_>jc)throw new Error(n.errorPrefix_+"has a key path longer than "+jc+" bytes ("+n.byteLength_+").");if(n.parts_.length>Hc)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hc+") or object contains a cycle "+Ft(n))}function Ft(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Mh{static getInstance(){return new Po}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=1e3,Wg=60*5*1e3,$c=30*1e3,Bg=1.3,Hg=3e4,jg="server_kill",Gc=3;class tt extends Lh{constructor(e,t,i,s,o,a,l,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=o,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=tt.nextPersistentConnectionId_++,this.log_=Ri("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gn,this.maxReconnectDelay_=Wg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Po.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,o={r:s,a:e,b:t};this.log_(re(o)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new wi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),t.promise}listen(e,t,i,s){this.initConnection_();const o=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+o),this.listens.has(a)||this.listens.set(a,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(a).has(o),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(a).set(o,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const o={p:i},a="q";e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(a,o,l=>{const u=l.d,d=l.s;tt.warnOnListenWarnings_(u,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),d!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(d,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ke(e,"w")){const i=fn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',o=t._path.toString();ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Sf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$c)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Cf(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const o=s.s,a=s.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const o={p:e},a="n";s&&(o.q=i,o.t=s),this.sendRequest(a,o)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const o={p:t,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,o){this.initConnection_();const a={p:t,d:i};o!==void 0&&(a.h=o),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,o=>{this.log_(t+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(o.s,o.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Xr("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Hg&&(this.reconnectDelay_=Gn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Bg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+tt.nextConnectionId_++,o=this.lastSessionId;let a=!1,l=null;const u=function(){l?l.close():(a=!0,i())},d=function(p){A(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:u,sendRequest:d};const m=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,v]=await Promise.all([this.authTokenProvider_.getToken(m),this.appCheckTokenProvider_.getToken(m)]);a?he("getToken() completed but was canceled"):(he("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=v&&v.token,l=new Lg(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,R=>{ve(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(jg)},o))}catch(p){this.log_("Failed to get token: "+p),a||(this.repoInfo_.nodeAdmin&&ve(p),u())}}}interrupt(e){he("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){he("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gr(this.interruptReasons_)&&(this.reconnectDelay_=Gn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(o=>To(o)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new j(e).toString();let s;if(this.listens.has(i)){const o=this.listens.get(i);s=o.get(t),o.delete(t),o.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){he("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gc&&(this.reconnectDelay_=$c,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){he("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+fh.replace(/\./g,"-")]=1,Eo()?e["framework.cordova"]=1:ah()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fs.getInstance().currentlyOnline();return Gr(this.interruptReasons_)&&e}}tt.nextPersistentConnectionId_=0;tt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new x(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new x(pn,e),s=new x(pn,t);return this.compare(i,s)!==0}minPost(){return x.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji;class Uh extends Ws{static get __EMPTY_NODE(){return Ji}static set __EMPTY_NODE(e){Ji=e}compare(e,t){return Qt(e.name,t.name)}isDefinedOn(e){throw Tn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return x.MIN}maxPost(){return new x(Gt,Ji)}makePost(e,t){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new x(e,Ji)}toString(){return".key"}}const cn=new Uh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,i,s,o=null){this.isReverse_=s,this.resultGenerator_=o,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?i(e.key,t):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class le{constructor(e,t,i,s,o){this.key=e,this.value=t,this.color=i??le.RED,this.left=s??Te.EMPTY_NODE,this.right=o??Te.EMPTY_NODE}copy(e,t,i,s,o){return new le(e??this.key,t??this.value,i??this.color,s??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const o=i(e,s.key);return o<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):o===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Te.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}le.RED=!0;le.BLACK=!1;class $g{copy(e,t,i,s,o){return this}insert(e,t,i){return new le(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Te{constructor(e,t=Te.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Te(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,le.BLACK,null,null))}remove(e){return new Te(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,le.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Xi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Xi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Xi(this.root_,null,this.comparator_,!0,e)}}Te.EMPTY_NODE=new $g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n,e){return Qt(n.name,e.name)}function ko(n,e){return Qt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr;function qg(n){Zr=n}const Vh=function(n){return typeof n=="number"?"number:"+mh(n):"string:"+n},Wh=function(n){if(n.isLeafNode()){const e=n.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ke(e,".sv"),"Priority must be a string or number.")}else A(n===Zr||n.isEmpty(),"priority of unexpected type.");A(n===Zr||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qc;class ce{static set __childrenNodeConstructor(e){qc=e}static get __childrenNodeConstructor(){return qc}constructor(e,t=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wh(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:M(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=M(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(A(i!==".priority"||Ct(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Vh(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=mh(this.value_):e+=this.value_,this.lazyHash_=gh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ce.VALUE_TYPE_ORDER.indexOf(t),o=ce.VALUE_TYPE_ORDER.indexOf(i);return A(s>=0,"Unknown leaf type: "+t),A(o>=0,"Unknown leaf type: "+i),s===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bh,Hh;function zg(n){Bh=n}function Kg(n){Hh=n}class Yg extends Ws{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),o=i.compareTo(s);return o===0?Qt(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return x.MIN}maxPost(){return new x(Gt,new ce("[PRIORITY-POST]",Hh))}makePost(e,t){const i=Bh(e);return new x(t,new ce("[PRIORITY-POST]",i))}toString(){return".priority"}}const Q=new Yg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=Math.log(2);class Xg{constructor(e){const t=o=>parseInt(Math.log(o)/Jg,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ps=function(n,e,t,i){n.sort(e);const s=function(u,d){const m=d-u;let p,v;if(m===0)return null;if(m===1)return p=n[u],v=t?t(p):p,new le(v,p.node,le.BLACK,null,null);{const R=parseInt(m/2,10)+u,b=s(u,R),N=s(R+1,d);return p=n[R],v=t?t(p):p,new le(v,p.node,le.BLACK,b,N)}},o=function(u){let d=null,m=null,p=n.length;const v=function(b,N){const O=p-b,z=p;p-=b;const ee=s(O+1,z),Y=n[O],J=t?t(Y):Y;R(new le(J,Y.node,N,null,ee))},R=function(b){d?(d.left=b,d=b):(m=b,d=b)};for(let b=0;b<u.count;++b){const N=u.nextBitIsOne(),O=Math.pow(2,u.count-(b+1));N?v(O,le.BLACK):(v(O,le.BLACK),v(O,le.RED))}return m},a=new Xg(n.length),l=o(a);return new Te(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr;const rn={};class Qe{static get Default(){return A(rn&&Q,"ChildrenNode.ts has not been loaded"),Lr=Lr||new Qe({".priority":rn},{".priority":Q}),Lr}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=fn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Te?t:null}hasIndex(e){return Ke(this.indexSet_,e.toString())}addIndex(e,t){A(e!==cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const o=t.getIterator(x.Wrap);let a=o.getNext();for(;a;)s=s||e.isDefinedOn(a.node),i.push(a),a=o.getNext();let l;s?l=ps(i,e.getCompare()):l=rn;const u=e.toString(),d={...this.indexSet_};d[u]=e;const m={...this.indexes_};return m[u]=l,new Qe(m,d)}addToIndexes(e,t){const i=hs(this.indexes_,(s,o)=>{const a=fn(this.indexSet_,o);if(A(a,"Missing index implementation for "+o),s===rn)if(a.isDefinedOn(e.node)){const l=[],u=t.getIterator(x.Wrap);let d=u.getNext();for(;d;)d.name!==e.name&&l.push(d),d=u.getNext();return l.push(e),ps(l,a.getCompare())}else return rn;else{const l=t.get(e.name);let u=s;return l&&(u=u.remove(new x(e.name,l))),u.insert(e,e.node)}});return new Qe(i,this.indexSet_)}removeFromIndexes(e,t){const i=hs(this.indexes_,s=>{if(s===rn)return s;{const o=t.get(e.name);return o?s.remove(new x(e.name,o)):s}});return new Qe(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn;class D{static get EMPTY_NODE(){return qn||(qn=new D(new Te(ko),null,Qe.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Wh(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qn}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?qn:t}}getChild(e){const t=M(e);return t===null?this:this.getImmediateChild(t).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(A(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new x(e,t);let s,o;t.isEmpty()?(s=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(i,this.children_));const a=s.isEmpty()?qn:this.priorityNode_;return new D(s,a,o)}}updateChild(e,t){const i=M(e);if(i===null)return t;{A(M(e)!==".priority"||Ct(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(q(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,o=!0;if(this.forEachChild(Q,(a,l)=>{t[a]=l.val(e),i++,o&&D.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):o=!1}),!e&&o&&s<2*i){const a=[];for(const l in t)a[l]=t[l];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Vh(this.getPriority().val())+":"),this.forEachChild(Q,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":gh(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const o=s.getPredecessorKey(new x(e,t));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new x(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new x(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,x.Wrap);let o=s.peek();for(;o!=null&&t.compare(o,e)<0;)s.getNext(),o=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,x.Wrap);let o=s.peek();for(;o!=null&&t.compare(o,e)>0;)s.getNext(),o=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ai?-1:0}withIndex(e){if(e===cn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Q),s=t.getIterator(Q);let o=i.getNext(),a=s.getNext();for(;o&&a;){if(o.name!==a.name||!o.node.equals(a.node))return!1;o=i.getNext(),a=s.getNext()}return o===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===cn?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Qg extends D{constructor(){super(new Te(ko),D.EMPTY_NODE,Qe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const Ai=new Qg;Object.defineProperties(x,{MIN:{value:new x(pn,D.EMPTY_NODE)},MAX:{value:new x(Gt,Ai)}});Uh.__EMPTY_NODE=D.EMPTY_NODE;ce.__childrenNodeConstructor=D;qg(Ai);Kg(Ai);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=!0;function se(n,e=null){if(n===null)return D.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ce(t,se(e))}if(!(n instanceof Array)&&Zg){const t=[];let i=!1;if(de(n,(a,l)=>{if(a.substring(0,1)!=="."){const u=se(l);u.isEmpty()||(i=i||!u.getPriority().isEmpty(),t.push(new x(a,u)))}}),t.length===0)return D.EMPTY_NODE;const o=ps(t,Gg,a=>a.name,ko);if(i){const a=ps(t,Q.getCompare());return new D(o,se(e),new Qe({".priority":a},{".priority":Q}))}else return new D(o,se(e),Qe.Default)}else{let t=D.EMPTY_NODE;return de(n,(i,s)=>{if(Ke(n,i)&&i.substring(0,1)!=="."){const o=se(s);(o.isLeafNode()||!o.isEmpty())&&(t=t.updateImmediateChild(i,o))}}),t.updatePriority(se(e))}}zg(se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_ extends Ws{constructor(e){super(),this.indexPath_=e,A(!F(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),o=i.compareTo(s);return o===0?Qt(e.name,t.name):o}makePost(e,t){const i=se(e),s=D.EMPTY_NODE.updateChild(this.indexPath_,i);return new x(t,s)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,Ai);return new x(Gt,e)}toString(){return pi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends Ws{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Qt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return x.MIN}maxPost(){return x.MAX}makePost(e,t){const i=se(e);return new x(t,i)}toString(){return".value"}}const n_=new t_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(n){return{type:"value",snapshotNode:n}}function gn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function gi(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function _i(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function i_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.index_=e}updateChild(e,t,i,s,o,a){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(a!=null&&(i.isEmpty()?e.hasChild(t)?a.trackChildChange(gi(t,l)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?a.trackChildChange(gn(t,i)):a.trackChildChange(_i(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Q,(s,o)=>{t.hasChild(s)||i.trackChildChange(gi(s,o))}),t.isLeafNode()||t.forEachChild(Q,(s,o)=>{if(e.hasChild(s)){const a=e.getImmediateChild(s);a.equals(o)||i.trackChildChange(_i(s,o,a))}else i.trackChildChange(gn(s,o))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.indexedFilter_=new No(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mi.getStartPost_(e),this.endPost_=mi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,o,a){return this.matches(new x(t,i))||(i=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,o,a)}updateFullNode(e,t,i){t.isLeafNode()&&(t=D.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(D.EMPTY_NODE);const o=this;return t.forEachChild(Q,(a,l)=>{o.matches(new x(a,l))||(s=s.updateImmediateChild(a,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new mi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,o,a){return this.rangedFilter_.matches(new x(t,i))||(i=D.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,o,a):this.fullLimitUpdateChild_(e,t,i,o,a)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=D.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;o.hasNext()&&a<this.limit_;){const l=o.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),a++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(D.EMPTY_NODE);let o;this.reverse_?o=s.getReverseIterator(this.index_):o=s.getIterator(this.index_);let a=0;for(;o.hasNext();){const l=o.getNext();a<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?a++:s=s.updateImmediateChild(l.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,o){let a;if(this.reverse_){const p=this.index_.getCompare();a=(v,R)=>p(R,v)}else a=this.index_.getCompare();const l=e;A(l.numChildren()===this.limit_,"");const u=new x(t,i),d=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),m=this.rangedFilter_.matches(u);if(l.hasChild(t)){const p=l.getImmediateChild(t);let v=s.getChildAfterChild(this.index_,d,this.reverse_);for(;v!=null&&(v.name===t||l.hasChild(v.name));)v=s.getChildAfterChild(this.index_,v,this.reverse_);const R=v==null?1:a(v,u);if(m&&!i.isEmpty()&&R>=0)return o!=null&&o.trackChildChange(_i(t,i,p)),l.updateImmediateChild(t,i);{o!=null&&o.trackChildChange(gi(t,p));const N=l.updateImmediateChild(t,D.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(o!=null&&o.trackChildChange(gn(v.name,v.node)),N.updateImmediateChild(v.name,v.node)):N}}else return i.isEmpty()?e:m&&a(d,u)>=0?(o!=null&&(o.trackChildChange(gi(d.name,d.node)),o.trackChildChange(gn(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(d.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pn}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Q}copy(){const e=new Oo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function r_(n){return n.loadsAllData()?new No(n.getIndex()):n.hasLimit()?new s_(n):new mi(n)}function zc(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Q?t="$priority":n.index_===n_?t="$value":n.index_===cn?t="$key":(A(n.index_ instanceof e_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=re(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=re(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+re(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=re(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+re(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Kc(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Lh{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ri("p:rest:"),this.listens_={}}listen(e,t,i,s){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const a=gs.getListenId_(e,i),l={};this.listens_[a]=l;const u=zc(e._queryParams);this.restRequest_(o+".json",u,(d,m)=>{let p=m;if(d===404&&(p=null,d=null),d===null&&this.onDataUpdate_(o,p,!1,i),fn(this.listens_,a)===l){let v;d?d===401?v="permission_denied":v="rest_error:"+d:v="ok",s(v,null)}})}unlisten(e,t){const i=gs.getListenId_(e,t);delete this.listens_[i]}get(e){const t=zc(e._queryParams),i=e._path.toString(),s=new wi;return this.restRequest_(i+".json",t,(o,a)=>{let l=a;o===404&&(l=null,o=null),o===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,o])=>{s&&s.accessToken&&(t.auth=s.accessToken),o&&o.token&&(t.ac=o.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xt(t);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=ui(l.responseText)}catch{ve("Failed to parse JSON response for "+a+": "+l.responseText)}i(null,u)}else l.status!==401&&l.status!==404&&ve("Got unsuccessful REST response for "+a+" Status: "+l.status),i(l.status);i=null}},l.open("GET",a,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(){return{value:null,children:new Map}}function $h(n,e,t){if(F(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=M(e);n.children.has(i)||n.children.set(i,_s());const s=n.children.get(i);e=q(e),$h(s,e,t)}}function eo(n,e,t){n.value!==null?t(e,n.value):a_(n,(i,s)=>{const o=new j(e.toString()+"/"+i);eo(s,o,t)})}function a_(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&de(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=10*1e3,l_=30*1e3,h_=5*60*1e3;class u_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new c_(e);const i=Yc+(l_-Yc)*Math.random();ei(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;de(e,(s,o)=>{o>0&&Ke(this.statsToReport_,s)&&(t[s]=o,i=!0)}),i&&this.server_.reportStats(t),ei(this.reportStats_.bind(this),Math.floor(Math.random()*2*h_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Me||(Me={}));function Do(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Lo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Mo(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Me.ACK_USER_WRITE,this.source=Do()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new j(e));return new ms(B(),t,this.revert)}}else return A(M(this.path)===e,"operationForChild called for unrelated child."),new ms(q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.source=e,this.path=t,this.type=Me.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new yi(this.source,B()):new yi(this.source,q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Me.OVERWRITE}operationForChild(e){return F(this.path)?new qt(this.source,B(),this.snap.getImmediateChild(e)):new qt(this.source,q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Me.MERGE}operationForChild(e){if(F(this.path)){const t=this.children.subtree(new j(e));return t.isEmpty()?null:t.value?new qt(this.source,B(),t.value):new _n(this.source,B(),t)}else return A(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _n(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const t=M(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function f_(n,e,t,i){const s=[],o=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&o.push(i_(a.childName,a.snapshotNode))}),zn(n,s,"child_removed",e,i,t),zn(n,s,"child_added",e,i,t),zn(n,s,"child_moved",o,i,t),zn(n,s,"child_changed",e,i,t),zn(n,s,"value",e,i,t),s}function zn(n,e,t,i,s,o){const a=i.filter(l=>l.type===t);a.sort((l,u)=>g_(n,l,u)),a.forEach(l=>{const u=p_(n,l,o);s.forEach(d=>{d.respondsTo(l.type)&&e.push(d.createEvent(u,n.query_))})})}function p_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function g_(n,e,t){if(e.childName==null||t.childName==null)throw Tn("Should only compare child_ events.");const i=new x(e.childName,e.snapshotNode),s=new x(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n,e){return{eventCache:n,serverCache:e}}function ti(n,e,t,i){return Bs(new St(e,t,i),n.serverCache)}function Gh(n,e,t,i){return Bs(n.eventCache,new St(e,t,i))}function ys(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function zt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr;const __=()=>(Mr||(Mr=new Te(eg)),Mr);class G{static fromObject(e){let t=new G(null);return de(e,(i,s)=>{t=t.set(new j(i),s)}),t}constructor(e,t=__()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:B(),value:this.value};if(F(e))return null;{const i=M(e),s=this.children.get(i);if(s!==null){const o=s.findRootMostMatchingPathAndValue(q(e),t);return o!=null?{path:X(new j(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const t=M(e),i=this.children.get(t);return i!==null?i.subtree(q(e)):new G(null)}}set(e,t){if(F(e))return new G(t,this.children);{const i=M(e),o=(this.children.get(i)||new G(null)).set(q(e),t),a=this.children.insert(i,o);return new G(this.value,a)}}remove(e){if(F(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const t=M(e),i=this.children.get(t);if(i){const s=i.remove(q(e));let o;return s.isEmpty()?o=this.children.remove(t):o=this.children.insert(t,s),this.value===null&&o.isEmpty()?new G(null):new G(this.value,o)}else return this}}get(e){if(F(e))return this.value;{const t=M(e),i=this.children.get(t);return i?i.get(q(e)):null}}setTree(e,t){if(F(e))return t;{const i=M(e),o=(this.children.get(i)||new G(null)).setTree(q(e),t);let a;return o.isEmpty()?a=this.children.remove(i):a=this.children.insert(i,o),new G(this.value,a)}}fold(e){return this.fold_(B(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,o)=>{i[s]=o.fold_(X(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,B(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(F(e))return null;{const o=M(e),a=this.children.get(o);return a?a.findOnPath_(q(e),X(t,o),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,B(),t)}foreachOnPath_(e,t,i){if(F(e))return this;{this.value&&i(t,this.value);const s=M(e),o=this.children.get(s);return o?o.foreachOnPath_(q(e),X(t,s),i):new G(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(X(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.writeTree_=e}static empty(){return new Ve(new G(null))}}function ni(n,e,t){if(F(e))return new Ve(new G(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let o=i.value;const a=ye(s,e);return o=o.updateChild(a,t),new Ve(n.writeTree_.set(s,o))}else{const s=new G(t),o=n.writeTree_.setTree(e,s);return new Ve(o)}}}function to(n,e,t){let i=n;return de(t,(s,o)=>{i=ni(i,X(e,s),o)}),i}function Jc(n,e){if(F(e))return Ve.empty();{const t=n.writeTree_.setTree(e,new G(null));return new Ve(t)}}function no(n,e){return Zt(n,e)!=null}function Zt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ye(t.path,e)):null}function Xc(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Q,(i,s)=>{e.push(new x(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new x(i,s.value))}),e}function Et(n,e){if(F(e))return n;{const t=Zt(n,e);return t!=null?new Ve(new G(t)):new Ve(n.writeTree_.subtree(e))}}function io(n){return n.writeTree_.isEmpty()}function mn(n,e){return qh(B(),n.writeTree_,e)}function qh(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,o)=>{s===".priority"?(A(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):t=qh(X(n,s),o,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(X(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n,e){return Jh(e,n)}function m_(n,e,t,i,s){A(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=ni(n.visibleWrites,e,t)),n.lastWriteId=i}function y_(n,e,t,i){A(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=to(n.visibleWrites,e,t),n.lastWriteId=i}function v_(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function E_(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);A(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,o=!1,a=n.allWrites.length-1;for(;s&&a>=0;){const l=n.allWrites[a];l.visible&&(a>=t&&I_(l,i.path)?s=!1:Pe(i.path,l.path)&&(o=!0)),a--}if(s){if(o)return w_(n),!0;if(i.snap)n.visibleWrites=Jc(n.visibleWrites,i.path);else{const l=i.children;de(l,u=>{n.visibleWrites=Jc(n.visibleWrites,X(i.path,u))})}return!0}else return!1}function I_(n,e){if(n.snap)return Pe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Pe(X(n.path,t),e))return!0;return!1}function w_(n){n.visibleWrites=zh(n.allWrites,T_,B()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function T_(n){return n.visible}function zh(n,e,t){let i=Ve.empty();for(let s=0;s<n.length;++s){const o=n[s];if(e(o)){const a=o.path;let l;if(o.snap)Pe(t,a)?(l=ye(t,a),i=ni(i,l,o.snap)):Pe(a,t)&&(l=ye(a,t),i=ni(i,B(),o.snap.getChild(l)));else if(o.children){if(Pe(t,a))l=ye(t,a),i=to(i,l,o.children);else if(Pe(a,t))if(l=ye(a,t),F(l))i=to(i,B(),o.children);else{const u=fn(o.children,M(l));if(u){const d=u.getChild(q(l));i=ni(i,B(),d)}}}else throw Tn("WriteRecord should have .snap or .children")}}return i}function Kh(n,e,t,i,s){if(!i&&!s){const o=Zt(n.visibleWrites,e);if(o!=null)return o;{const a=Et(n.visibleWrites,e);if(io(a))return t;if(t==null&&!no(a,B()))return null;{const l=t||D.EMPTY_NODE;return mn(a,l)}}}else{const o=Et(n.visibleWrites,e);if(!s&&io(o))return t;if(!s&&t==null&&!no(o,B()))return null;{const a=function(d){return(d.visible||s)&&(!i||!~i.indexOf(d.writeId))&&(Pe(d.path,e)||Pe(e,d.path))},l=zh(n.allWrites,a,e),u=t||D.EMPTY_NODE;return mn(l,u)}}}function C_(n,e,t){let i=D.EMPTY_NODE;const s=Zt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Q,(o,a)=>{i=i.updateImmediateChild(o,a)}),i;if(t){const o=Et(n.visibleWrites,e);return t.forEachChild(Q,(a,l)=>{const u=mn(Et(o,new j(a)),l);i=i.updateImmediateChild(a,u)}),Xc(o).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}else{const o=Et(n.visibleWrites,e);return Xc(o).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}}function S_(n,e,t,i,s){A(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=X(e,t);if(no(n.visibleWrites,o))return null;{const a=Et(n.visibleWrites,o);return io(a)?s.getChild(t):mn(a,s.getChild(t))}}function R_(n,e,t,i){const s=X(e,t),o=Zt(n.visibleWrites,s);if(o!=null)return o;if(i.isCompleteForChild(t)){const a=Et(n.visibleWrites,s);return mn(a,i.getNode().getImmediateChild(t))}else return null}function A_(n,e){return Zt(n.visibleWrites,e)}function b_(n,e,t,i,s,o,a){let l;const u=Et(n.visibleWrites,e),d=Zt(u,B());if(d!=null)l=d;else if(t!=null)l=mn(u,t);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const m=[],p=a.getCompare(),v=o?l.getReverseIteratorFrom(i,a):l.getIteratorFrom(i,a);let R=v.getNext();for(;R&&m.length<s;)p(R,i)!==0&&m.push(R),R=v.getNext();return m}else return[]}function P_(){return{visibleWrites:Ve.empty(),allWrites:[],lastWriteId:-1}}function vs(n,e,t,i){return Kh(n.writeTree,n.treePath,e,t,i)}function xo(n,e){return C_(n.writeTree,n.treePath,e)}function Qc(n,e,t,i){return S_(n.writeTree,n.treePath,e,t,i)}function Es(n,e){return A_(n.writeTree,X(n.treePath,e))}function k_(n,e,t,i,s,o){return b_(n.writeTree,n.treePath,e,t,i,s,o)}function Fo(n,e,t){return R_(n.writeTree,n.treePath,e,t)}function Yh(n,e){return Jh(X(n.treePath,e),n.writeTree)}function Jh(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;A(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),A(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const o=s.type;if(t==="child_added"&&o==="child_removed")this.changeMap.set(i,_i(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&o==="child_changed")this.changeMap.set(i,gi(i,s.oldSnap));else if(t==="child_changed"&&o==="child_added")this.changeMap.set(i,gn(i,e.snapshotNode));else if(t==="child_changed"&&o==="child_changed")this.changeMap.set(i,_i(i,e.snapshotNode,s.oldSnap));else throw Tn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Xh=new O_;class Uo{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new St(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fo(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zt(this.viewCache_),o=k_(this.writes_,s,t,1,i,e);return o.length===0?null:o[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(n){return{filter:n}}function L_(n,e){A(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function M_(n,e,t,i,s){const o=new N_;let a,l;if(t.type===Me.OVERWRITE){const d=t;d.source.fromUser?a=so(n,e,d.path,d.snap,i,s,o):(A(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered()&&!F(d.path),a=Is(n,e,d.path,d.snap,i,s,l,o))}else if(t.type===Me.MERGE){const d=t;d.source.fromUser?a=F_(n,e,d.path,d.children,i,s,o):(A(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered(),a=ro(n,e,d.path,d.children,i,s,l,o))}else if(t.type===Me.ACK_USER_WRITE){const d=t;d.revert?a=W_(n,e,d.path,i,s,o):a=U_(n,e,d.path,d.affectedTree,i,s,o)}else if(t.type===Me.LISTEN_COMPLETE)a=V_(n,e,t.path,i,o);else throw Tn("Unknown operation type: "+t.type);const u=o.getChanges();return x_(e,a,u),{viewCache:a,changes:u}}function x_(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=ys(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&t.push(jh(ys(e)))}}function Qh(n,e,t,i,s,o){const a=e.eventCache;if(Es(i,t)!=null)return e;{let l,u;if(F(t))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=zt(e),m=d instanceof D?d:D.EMPTY_NODE,p=xo(i,m);l=n.filter.updateFullNode(e.eventCache.getNode(),p,o)}else{const d=vs(i,zt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),d,o)}else{const d=M(t);if(d===".priority"){A(Ct(t)===1,"Can't have a priority with additional path components");const m=a.getNode();u=e.serverCache.getNode();const p=Qc(i,t,m,u);p!=null?l=n.filter.updatePriority(m,p):l=a.getNode()}else{const m=q(t);let p;if(a.isCompleteForChild(d)){u=e.serverCache.getNode();const v=Qc(i,t,a.getNode(),u);v!=null?p=a.getNode().getImmediateChild(d).updateChild(m,v):p=a.getNode().getImmediateChild(d)}else p=Fo(i,d,e.serverCache);p!=null?l=n.filter.updateChild(a.getNode(),d,p,m,s,o):l=a.getNode()}}return ti(e,l,a.isFullyInitialized()||F(t),n.filter.filtersNodes())}}function Is(n,e,t,i,s,o,a,l){const u=e.serverCache;let d;const m=a?n.filter:n.filter.getIndexedFilter();if(F(t))d=m.updateFullNode(u.getNode(),i,null);else if(m.filtersNodes()&&!u.isFiltered()){const R=u.getNode().updateChild(t,i);d=m.updateFullNode(u.getNode(),R,null)}else{const R=M(t);if(!u.isCompleteForPath(t)&&Ct(t)>1)return e;const b=q(t),O=u.getNode().getImmediateChild(R).updateChild(b,i);R===".priority"?d=m.updatePriority(u.getNode(),O):d=m.updateChild(u.getNode(),R,O,b,Xh,null)}const p=Gh(e,d,u.isFullyInitialized()||F(t),m.filtersNodes()),v=new Uo(s,p,o);return Qh(n,p,t,s,v,l)}function so(n,e,t,i,s,o,a){const l=e.eventCache;let u,d;const m=new Uo(s,e,o);if(F(t))d=n.filter.updateFullNode(e.eventCache.getNode(),i,a),u=ti(e,d,!0,n.filter.filtersNodes());else{const p=M(t);if(p===".priority")d=n.filter.updatePriority(e.eventCache.getNode(),i),u=ti(e,d,l.isFullyInitialized(),l.isFiltered());else{const v=q(t),R=l.getNode().getImmediateChild(p);let b;if(F(v))b=i;else{const N=m.getCompleteChild(p);N!=null?Ao(v)===".priority"&&N.getChild(xh(v)).isEmpty()?b=N:b=N.updateChild(v,i):b=D.EMPTY_NODE}if(R.equals(b))u=e;else{const N=n.filter.updateChild(l.getNode(),p,b,v,m,a);u=ti(e,N,l.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function Zc(n,e){return n.eventCache.isCompleteForChild(e)}function F_(n,e,t,i,s,o,a){let l=e;return i.foreach((u,d)=>{const m=X(t,u);Zc(e,M(m))&&(l=so(n,l,m,d,s,o,a))}),i.foreach((u,d)=>{const m=X(t,u);Zc(e,M(m))||(l=so(n,l,m,d,s,o,a))}),l}function el(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ro(n,e,t,i,s,o,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,d;F(t)?d=i:d=new G(null).setTree(t,i);const m=e.serverCache.getNode();return d.children.inorderTraversal((p,v)=>{if(m.hasChild(p)){const R=e.serverCache.getNode().getImmediateChild(p),b=el(n,R,v);u=Is(n,u,new j(p),b,s,o,a,l)}}),d.children.inorderTraversal((p,v)=>{const R=!e.serverCache.isCompleteForChild(p)&&v.value===null;if(!m.hasChild(p)&&!R){const b=e.serverCache.getNode().getImmediateChild(p),N=el(n,b,v);u=Is(n,u,new j(p),N,s,o,a,l)}}),u}function U_(n,e,t,i,s,o,a){if(Es(s,t)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(i.value!=null){if(F(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return Is(n,e,t,u.getNode().getChild(t),s,o,l,a);if(F(t)){let d=new G(null);return u.getNode().forEachChild(cn,(m,p)=>{d=d.set(new j(m),p)}),ro(n,e,t,d,s,o,l,a)}else return e}else{let d=new G(null);return i.foreach((m,p)=>{const v=X(t,m);u.isCompleteForPath(v)&&(d=d.set(m,u.getNode().getChild(v)))}),ro(n,e,t,d,s,o,l,a)}}function V_(n,e,t,i,s){const o=e.serverCache,a=Gh(e,o.getNode(),o.isFullyInitialized()||F(t),o.isFiltered());return Qh(n,a,t,i,Xh,s)}function W_(n,e,t,i,s,o){let a;if(Es(i,t)!=null)return e;{const l=new Uo(i,e,s),u=e.eventCache.getNode();let d;if(F(t)||M(t)===".priority"){let m;if(e.serverCache.isFullyInitialized())m=vs(i,zt(e));else{const p=e.serverCache.getNode();A(p instanceof D,"serverChildren would be complete if leaf node"),m=xo(i,p)}m=m,d=n.filter.updateFullNode(u,m,o)}else{const m=M(t);let p=Fo(i,m,e.serverCache);p==null&&e.serverCache.isCompleteForChild(m)&&(p=u.getImmediateChild(m)),p!=null?d=n.filter.updateChild(u,m,p,q(t),l,o):e.eventCache.getNode().hasChild(m)?d=n.filter.updateChild(u,m,D.EMPTY_NODE,q(t),l,o):d=u,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=vs(i,zt(e)),a.isLeafNode()&&(d=n.filter.updateFullNode(d,a,o)))}return a=e.serverCache.isFullyInitialized()||Es(i,B())!=null,ti(e,d,a,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new No(i.getIndex()),o=r_(i);this.processor_=D_(o);const a=t.serverCache,l=t.eventCache,u=s.updateFullNode(D.EMPTY_NODE,a.getNode(),null),d=o.updateFullNode(D.EMPTY_NODE,l.getNode(),null),m=new St(u,a.isFullyInitialized(),s.filtersNodes()),p=new St(d,l.isFullyInitialized(),o.filtersNodes());this.viewCache_=Bs(p,m),this.eventGenerator_=new d_(this.query_)}get query(){return this.query_}}function H_(n){return n.viewCache_.serverCache.getNode()}function j_(n){return ys(n.viewCache_)}function $_(n,e){const t=zt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!F(e)&&!t.getImmediateChild(M(e)).isEmpty())?t.getChild(e):null}function tl(n){return n.eventRegistrations_.length===0}function G_(n,e){n.eventRegistrations_.push(e)}function nl(n,e,t){const i=[];if(t){A(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(o=>{const a=o.createCancelEvent(t,s);a&&i.push(a)})}if(e){let s=[];for(let o=0;o<n.eventRegistrations_.length;++o){const a=n.eventRegistrations_[o];if(!a.matches(e))s.push(a);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(o+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function il(n,e,t,i){e.type===Me.MERGE&&e.source.queryId!==null&&(A(zt(n.viewCache_),"We should always have a full cache before handling merges"),A(ys(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,o=M_(n.processor_,s,e,t,i);return L_(n.processor_,o.viewCache),A(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=o.viewCache,Zh(n,o.changes,o.viewCache.eventCache.getNode(),null)}function q_(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Q,(o,a)=>{i.push(gn(o,a))}),t.isFullyInitialized()&&i.push(jh(t.getNode())),Zh(n,i,t.getNode(),e)}function Zh(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return f_(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;class eu{constructor(){this.views=new Map}}function z_(n){A(!ws,"__referenceConstructor has already been defined"),ws=n}function K_(){return A(ws,"Reference.ts has not been loaded"),ws}function Y_(n){return n.views.size===0}function Vo(n,e,t,i){const s=e.source.queryId;if(s!==null){const o=n.views.get(s);return A(o!=null,"SyncTree gave us an op for an invalid query."),il(o,e,t,i)}else{let o=[];for(const a of n.views.values())o=o.concat(il(a,e,t,i));return o}}function tu(n,e,t,i,s){const o=e._queryIdentifier,a=n.views.get(o);if(!a){let l=vs(t,s?i:null),u=!1;l?u=!0:i instanceof D?(l=xo(t,i),u=!1):(l=D.EMPTY_NODE,u=!1);const d=Bs(new St(l,u,!1),new St(i,s,!1));return new B_(e,d)}return a}function J_(n,e,t,i,s,o){const a=tu(n,e,i,s,o);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,a),G_(a,t),q_(a,t)}function X_(n,e,t,i){const s=e._queryIdentifier,o=[];let a=[];const l=Rt(n);if(s==="default")for(const[u,d]of n.views.entries())a=a.concat(nl(d,t,i)),tl(d)&&(n.views.delete(u),d.query._queryParams.loadsAllData()||o.push(d.query));else{const u=n.views.get(s);u&&(a=a.concat(nl(u,t,i)),tl(u)&&(n.views.delete(s),u.query._queryParams.loadsAllData()||o.push(u.query)))}return l&&!Rt(n)&&o.push(new(K_())(e._repo,e._path)),{removed:o,events:a}}function nu(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function It(n,e){let t=null;for(const i of n.views.values())t=t||$_(i,e);return t}function iu(n,e){if(e._queryParams.loadsAllData())return js(n);{const i=e._queryIdentifier;return n.views.get(i)}}function su(n,e){return iu(n,e)!=null}function Rt(n){return js(n)!=null}function js(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;function Q_(n){A(!Ts,"__referenceConstructor has already been defined"),Ts=n}function Z_(){return A(Ts,"Reference.ts has not been loaded"),Ts}let em=1;class sl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=P_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ru(n,e,t,i,s){return m_(n.pendingWriteTree_,e,t,i,s),s?Sn(n,new qt(Do(),e,t)):[]}function tm(n,e,t,i){y_(n.pendingWriteTree_,e,t,i);const s=G.fromObject(t);return Sn(n,new _n(Do(),e,s))}function mt(n,e,t=!1){const i=v_(n.pendingWriteTree_,e);if(E_(n.pendingWriteTree_,e)){let o=new G(null);return i.snap!=null?o=o.set(B(),!0):de(i.children,a=>{o=o.set(new j(a),!0)}),Sn(n,new ms(i.path,o,t))}else return[]}function bi(n,e,t){return Sn(n,new qt(Lo(),e,t))}function nm(n,e,t){const i=G.fromObject(t);return Sn(n,new _n(Lo(),e,i))}function im(n,e){return Sn(n,new yi(Lo(),e))}function sm(n,e,t){const i=Bo(n,t);if(i){const s=Ho(i),o=s.path,a=s.queryId,l=ye(o,e),u=new yi(Mo(a),l);return jo(n,o,u)}else return[]}function Cs(n,e,t,i,s=!1){const o=e._path,a=n.syncPointTree_.get(o);let l=[];if(a&&(e._queryIdentifier==="default"||su(a,e))){const u=X_(a,e,t,i);Y_(a)&&(n.syncPointTree_=n.syncPointTree_.remove(o));const d=u.removed;if(l=u.events,!s){const m=d.findIndex(v=>v._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(o,(v,R)=>Rt(R));if(m&&!p){const v=n.syncPointTree_.subtree(o);if(!v.isEmpty()){const R=am(v);for(let b=0;b<R.length;++b){const N=R[b],O=N.query,z=lu(n,N);n.listenProvider_.startListening(ii(O),vi(n,O),z.hashFn,z.onComplete)}}}!p&&d.length>0&&!i&&(m?n.listenProvider_.stopListening(ii(e),null):d.forEach(v=>{const R=n.queryToTagMap.get($s(v));n.listenProvider_.stopListening(ii(v),R)}))}cm(n,d)}return l}function ou(n,e,t,i){const s=Bo(n,i);if(s!=null){const o=Ho(s),a=o.path,l=o.queryId,u=ye(a,e),d=new qt(Mo(l),u,t);return jo(n,a,d)}else return[]}function rm(n,e,t,i){const s=Bo(n,i);if(s){const o=Ho(s),a=o.path,l=o.queryId,u=ye(a,e),d=G.fromObject(t),m=new _n(Mo(l),u,d);return jo(n,a,m)}else return[]}function oo(n,e,t,i=!1){const s=e._path;let o=null,a=!1;n.syncPointTree_.foreachOnPath(s,(v,R)=>{const b=ye(v,s);o=o||It(R,b),a=a||Rt(R)});let l=n.syncPointTree_.get(s);l?(a=a||Rt(l),o=o||It(l,B())):(l=new eu,n.syncPointTree_=n.syncPointTree_.set(s,l));let u;o!=null?u=!0:(u=!1,o=D.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((R,b)=>{const N=It(b,B());N&&(o=o.updateImmediateChild(R,N))}));const d=su(l,e);if(!d&&!e._queryParams.loadsAllData()){const v=$s(e);A(!n.queryToTagMap.has(v),"View does not exist, but we have a tag");const R=lm();n.queryToTagMap.set(v,R),n.tagToQueryMap.set(R,v)}const m=Hs(n.pendingWriteTree_,s);let p=J_(l,e,t,m,o,u);if(!d&&!a&&!i){const v=iu(l,e);p=p.concat(hm(n,e,v))}return p}function Wo(n,e,t){const s=n.pendingWriteTree_,o=n.syncPointTree_.findOnPath(e,(a,l)=>{const u=ye(a,e),d=It(l,u);if(d)return d});return Kh(s,e,o,t,!0)}function om(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(d,m)=>{const p=ye(d,t);i=i||It(m,p)});let s=n.syncPointTree_.get(t);s?i=i||It(s,B()):(s=new eu,n.syncPointTree_=n.syncPointTree_.set(t,s));const o=i!=null,a=o?new St(i,!0,!1):null,l=Hs(n.pendingWriteTree_,e._path),u=tu(s,e,l,o?a.getNode():D.EMPTY_NODE,o);return j_(u)}function Sn(n,e){return au(e,n.syncPointTree_,null,Hs(n.pendingWriteTree_,B()))}function au(n,e,t,i){if(F(n.path))return cu(n,e,t,i);{const s=e.get(B());t==null&&s!=null&&(t=It(s,B()));let o=[];const a=M(n.path),l=n.operationForChild(a),u=e.children.get(a);if(u&&l){const d=t?t.getImmediateChild(a):null,m=Yh(i,a);o=o.concat(au(l,u,d,m))}return s&&(o=o.concat(Vo(s,n,i,t))),o}}function cu(n,e,t,i){const s=e.get(B());t==null&&s!=null&&(t=It(s,B()));let o=[];return e.children.inorderTraversal((a,l)=>{const u=t?t.getImmediateChild(a):null,d=Yh(i,a),m=n.operationForChild(a);m&&(o=o.concat(cu(m,l,u,d)))}),s&&(o=o.concat(Vo(s,n,i,t))),o}function lu(n,e){const t=e.query,i=vi(n,t);return{hashFn:()=>(H_(e)||D.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?sm(n,t._path,i):im(n,t._path);{const o=ig(s,t);return Cs(n,t,null,o)}}}}function vi(n,e){const t=$s(e);return n.queryToTagMap.get(t)}function $s(n){return n._path.toString()+"$"+n._queryIdentifier}function Bo(n,e){return n.tagToQueryMap.get(e)}function Ho(n){const e=n.indexOf("$");return A(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new j(n.substr(0,e))}}function jo(n,e,t){const i=n.syncPointTree_.get(e);A(i,"Missing sync point for query tag that we're tracking");const s=Hs(n.pendingWriteTree_,e);return Vo(i,t,s,null)}function am(n){return n.fold((e,t,i)=>{if(t&&Rt(t))return[js(t)];{let s=[];return t&&(s=nu(t)),de(i,(o,a)=>{s=s.concat(a)}),s}})}function ii(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Z_())(n._repo,n._path):n}function cm(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=$s(i),o=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(o)}}}function lm(){return em++}function hm(n,e,t){const i=e._path,s=vi(n,e),o=lu(n,t),a=n.listenProvider_.startListening(ii(e),s,o.hashFn,o.onComplete),l=n.syncPointTree_.subtree(i);if(s)A(!Rt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const u=l.fold((d,m,p)=>{if(!F(d)&&m&&Rt(m))return[js(m).query];{let v=[];return m&&(v=v.concat(nu(m).map(R=>R.query))),de(p,(R,b)=>{v=v.concat(b)}),v}});for(let d=0;d<u.length;++d){const m=u[d];n.listenProvider_.stopListening(ii(m),vi(n,m))}}return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new $o(t)}node(){return this.node_}}class Go{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=X(this.path_,e);return new Go(this.syncTree_,t)}node(){return Wo(this.syncTree_,this.path_)}}const um=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},rl=function(n,e,t){if(!n||typeof n!="object")return n;if(A(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return dm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return fm(n[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},dm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:A(!1,"Unexpected server value: "+n)}},fm=function(n,e,t){n.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&A(!1,"Unexpected increment value: "+i);const s=e.node();if(A(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const a=s.getValue();return typeof a!="number"?i:a+i},hu=function(n,e,t,i){return qo(e,new Go(t,n),i)},uu=function(n,e,t){return qo(n,new $o(e),t)};function qo(n,e,t){const i=n.getPriority().val(),s=rl(i,e.getImmediateChild(".priority"),t);let o;if(n.isLeafNode()){const a=n,l=rl(a.getValue(),e,t);return l!==a.getValue()||s!==a.getPriority().val()?new ce(l,se(s)):n}else{const a=n;return o=a,s!==a.getPriority().val()&&(o=o.updatePriority(new ce(s))),a.forEachChild(Q,(l,u)=>{const d=qo(u,e.getImmediateChild(l),t);d!==u&&(o=o.updateImmediateChild(l,d))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Ko(n,e){let t=e instanceof j?e:new j(e),i=n,s=M(t);for(;s!==null;){const o=fn(i.node.children,s)||{children:{},childCount:0};i=new zo(s,i,o),t=q(t),s=M(t)}return i}function Rn(n){return n.node.value}function du(n,e){n.node.value=e,ao(n)}function fu(n){return n.node.childCount>0}function pm(n){return Rn(n)===void 0&&!fu(n)}function Gs(n,e){de(n.node.children,(t,i)=>{e(new zo(t,n,i))})}function pu(n,e,t,i){t&&e(n),Gs(n,s=>{pu(s,e,!0)})}function gm(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Pi(n){return new j(n.parent===null?n.name:Pi(n.parent)+"/"+n.name)}function ao(n){n.parent!==null&&_m(n.parent,n.name,n)}function _m(n,e,t){const i=pm(t),s=Ke(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ao(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ao(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=/[\[\].#$\/\u0000-\u001F\u007F]/,ym=/[\[\].#$\u0000-\u001F\u007F]/,xr=10*1024*1024,Yo=function(n){return typeof n=="string"&&n.length!==0&&!mm.test(n)},gu=function(n){return typeof n=="string"&&n.length!==0&&!ym.test(n)},vm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gu(n)},Em=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!wo(n)||n&&typeof n=="object"&&Ke(n,".sv")},_u=function(n,e,t,i){i&&e===void 0||qs(xs(n,"value"),e,t)},qs=function(n,e,t){const i=t instanceof j?new Fg(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ft(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ft(i)+" with contents = "+e.toString());if(wo(e))throw new Error(n+"contains "+e.toString()+" "+Ft(i));if(typeof e=="string"&&e.length>xr/3&&Fs(e)>xr)throw new Error(n+"contains a string greater than "+xr+" utf8 bytes "+Ft(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,o=!1;if(de(e,(a,l)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(o=!0,!Yo(a)))throw new Error(n+" contains an invalid key ("+a+") "+Ft(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ug(i,a),qs(n,l,i),Vg(i)}),s&&o)throw new Error(n+' contains ".value" child '+Ft(i)+" in addition to actual children.")}},Im=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const o=pi(i);for(let a=0;a<o.length;a++)if(!(o[a]===".priority"&&a===o.length-1)){if(!Yo(o[a]))throw new Error(n+"contains an invalid key ("+o[a]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(xg);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&Pe(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},wm=function(n,e,t,i){const s=xs(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const o=[];de(e,(a,l)=>{const u=new j(a);if(qs(s,l,X(t,u)),Ao(u)===".priority"&&!Em(l))throw new Error(s+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(u)}),Im(s,o)},mu=function(n,e,t,i){if(!gu(t))throw new Error(xs(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Tm=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mu(n,e,t)},Jo=function(n,e){if(M(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Cm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!vm(t))throw new Error(xs(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zs(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],o=s.getPath();t!==null&&!bo(o,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:o}),t.events.push(s)}t&&n.eventLists_.push(t)}function yu(n,e,t){zs(n,t),vu(n,i=>bo(i,e))}function Ne(n,e,t){zs(n,t),vu(n,i=>Pe(i,e)||Pe(e,i))}function vu(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const o=s.path;e(o)?(Rm(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Rm(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Zn&&he("event: "+t.toString()),Cn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="repo_interrupt",bm=25;class Pm{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Sm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_s(),this.transactionQueueTree_=new zo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function km(n,e,t){if(n.stats_=So(n.repoInfo_),n.forceRestClient_||ag())n.server_=new gs(n.repoInfo_,(i,s,o,a)=>{ol(n,i,s,o,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>al(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new tt(n.repoInfo_,e,(i,s,o,a)=>{ol(n,i,s,o,a)},i=>{al(n,i)},i=>{Nm(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=dg(n.repoInfo_,()=>new u_(n.stats_,n.server_)),n.infoData_=new o_,n.infoSyncTree_=new sl({startListening:(i,s,o,a)=>{let l=[];const u=n.infoData_.getNode(i._path);return u.isEmpty()||(l=bi(n.infoSyncTree_,i._path,u),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),Xo(n,"connected",!1),n.serverSyncTree_=new sl({startListening:(i,s,o,a)=>(n.server_.listen(i,o,s,(l,u)=>{const d=a(l,u);Ne(n.eventQueue_,i._path,d)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Eu(n){const t=n.infoData_.getNode(new j(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ks(n){return um({timestamp:Eu(n)})}function ol(n,e,t,i,s){n.dataUpdateCount++;const o=new j(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(s)if(i){const u=hs(t,d=>se(d));a=rm(n.serverSyncTree_,o,u,s)}else{const u=se(t);a=ou(n.serverSyncTree_,o,u,s)}else if(i){const u=hs(t,d=>se(d));a=nm(n.serverSyncTree_,o,u)}else{const u=se(t);a=bi(n.serverSyncTree_,o,u)}let l=o;a.length>0&&(l=yn(n,o)),Ne(n.eventQueue_,l,a)}function al(n,e){Xo(n,"connected",e),e===!1&&Mm(n)}function Nm(n,e){de(e,(t,i)=>{Xo(n,t,i)})}function Xo(n,e,t){const i=new j("/.info/"+e),s=se(t);n.infoData_.updateSnapshot(i,s);const o=bi(n.infoSyncTree_,i,s);Ne(n.eventQueue_,i,o)}function Qo(n){return n.nextWriteId_++}function Om(n,e,t){const i=om(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const o=se(s).withIndex(e._queryParams.getIndex());oo(n.serverSyncTree_,e,t,!0);let a;if(e._queryParams.loadsAllData())a=bi(n.serverSyncTree_,e._path,o);else{const l=vi(n.serverSyncTree_,e);a=ou(n.serverSyncTree_,e._path,o,l)}return Ne(n.eventQueue_,e._path,a),Cs(n.serverSyncTree_,e,t,null,!0),o},s=>(ki(n,"get for query "+re(e)+" failed: "+s),Promise.reject(new Error(s))))}function Dm(n,e,t,i,s){ki(n,"set",{path:e.toString(),value:t,priority:i});const o=Ks(n),a=se(t,i),l=Wo(n.serverSyncTree_,e),u=uu(a,l,o),d=Qo(n),m=ru(n.serverSyncTree_,e,u,d,!0);zs(n.eventQueue_,m),n.server_.put(e.toString(),a.val(!0),(v,R)=>{const b=v==="ok";b||ve("set at "+e+" failed: "+v);const N=mt(n.serverSyncTree_,d,!b);Ne(n.eventQueue_,e,N),lo(n,s,v,R)});const p=ea(n,e);yn(n,p),Ne(n.eventQueue_,p,[])}function Lm(n,e,t,i){ki(n,"update",{path:e.toString(),value:t});let s=!0;const o=Ks(n),a={};if(de(t,(l,u)=>{s=!1,a[l]=hu(X(e,l),se(u),n.serverSyncTree_,o)}),s)he("update() called with empty data.  Don't do anything."),lo(n,i,"ok",void 0);else{const l=Qo(n),u=tm(n.serverSyncTree_,e,a,l);zs(n.eventQueue_,u),n.server_.merge(e.toString(),t,(d,m)=>{const p=d==="ok";p||ve("update at "+e+" failed: "+d);const v=mt(n.serverSyncTree_,l,!p),R=v.length>0?yn(n,e):e;Ne(n.eventQueue_,R,v),lo(n,i,d,m)}),de(t,d=>{const m=ea(n,X(e,d));yn(n,m)}),Ne(n.eventQueue_,e,[])}}function Mm(n){ki(n,"onDisconnectEvents");const e=Ks(n),t=_s();eo(n.onDisconnect_,B(),(s,o)=>{const a=hu(s,o,n.serverSyncTree_,e);$h(t,s,a)});let i=[];eo(t,B(),(s,o)=>{i=i.concat(bi(n.serverSyncTree_,s,o));const a=ea(n,s);yn(n,a)}),n.onDisconnect_=_s(),Ne(n.eventQueue_,B(),i)}function xm(n,e,t){let i;M(e._path)===".info"?i=oo(n.infoSyncTree_,e,t):i=oo(n.serverSyncTree_,e,t),yu(n.eventQueue_,e._path,i)}function co(n,e,t){let i;M(e._path)===".info"?i=Cs(n.infoSyncTree_,e,t):i=Cs(n.serverSyncTree_,e,t),yu(n.eventQueue_,e._path,i)}function Fm(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Am)}function ki(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),he(t,...e)}function lo(n,e,t,i){e&&Cn(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let o=s;i&&(o+=": "+i);const a=new Error(o);a.code=s,e(a)}})}function Iu(n,e,t){return Wo(n.serverSyncTree_,e,t)||D.EMPTY_NODE}function Zo(n,e=n.transactionQueueTree_){if(e||Ys(n,e),Rn(e)){const t=Tu(n,e);A(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Um(n,Pi(e),t)}else fu(e)&&Gs(e,t=>{Zo(n,t)})}function Um(n,e,t){const i=t.map(d=>d.currentWriteId),s=Iu(n,e,i);let o=s;const a=s.hash();for(let d=0;d<t.length;d++){const m=t[d];A(m.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),m.status=1,m.retryCount++;const p=ye(e,m.path);o=o.updateChild(p,m.currentOutputSnapshotRaw)}const l=o.val(!0),u=e;n.server_.put(u.toString(),l,d=>{ki(n,"transaction put response",{path:u.toString(),status:d});let m=[];if(d==="ok"){const p=[];for(let v=0;v<t.length;v++)t[v].status=2,m=m.concat(mt(n.serverSyncTree_,t[v].currentWriteId)),t[v].onComplete&&p.push(()=>t[v].onComplete(null,!0,t[v].currentOutputSnapshotResolved)),t[v].unwatcher();Ys(n,Ko(n.transactionQueueTree_,e)),Zo(n,n.transactionQueueTree_),Ne(n.eventQueue_,e,m);for(let v=0;v<p.length;v++)Cn(p[v])}else{if(d==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{ve("transaction at "+u.toString()+" failed: "+d);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=d}yn(n,e)}},a)}function yn(n,e){const t=wu(n,e),i=Pi(t),s=Tu(n,t);return Vm(n,s,i),i}function Vm(n,e,t){if(e.length===0)return;const i=[];let s=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],d=ye(t,u.path);let m=!1,p;if(A(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)m=!0,p=u.abortReason,s=s.concat(mt(n.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=bm)m=!0,p="maxretry",s=s.concat(mt(n.serverSyncTree_,u.currentWriteId,!0));else{const v=Iu(n,u.path,a);u.currentInputSnapshot=v;const R=e[l].update(v.val());if(R!==void 0){qs("transaction failed: Data returned ",R,u.path);let b=se(R);typeof R=="object"&&R!=null&&Ke(R,".priority")||(b=b.updatePriority(v.getPriority()));const O=u.currentWriteId,z=Ks(n),ee=uu(b,v,z);u.currentOutputSnapshotRaw=b,u.currentOutputSnapshotResolved=ee,u.currentWriteId=Qo(n),a.splice(a.indexOf(O),1),s=s.concat(ru(n.serverSyncTree_,u.path,ee,u.currentWriteId,u.applyLocally)),s=s.concat(mt(n.serverSyncTree_,O,!0))}else m=!0,p="nodata",s=s.concat(mt(n.serverSyncTree_,u.currentWriteId,!0))}Ne(n.eventQueue_,t,s),s=[],m&&(e[l].status=2,function(v){setTimeout(v,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(p),!1,null))))}Ys(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)Cn(i[l]);Zo(n,n.transactionQueueTree_)}function wu(n,e){let t,i=n.transactionQueueTree_;for(t=M(e);t!==null&&Rn(i)===void 0;)i=Ko(i,t),e=q(e),t=M(e);return i}function Tu(n,e){const t=[];return Cu(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Cu(n,e,t){const i=Rn(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Gs(e,s=>{Cu(n,s,t)})}function Ys(n,e){const t=Rn(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,du(e,t.length>0?t:void 0)}Gs(e,i=>{Ys(n,i)})}function ea(n,e){const t=Pi(wu(n,e)),i=Ko(n.transactionQueueTree_,e);return gm(i,s=>{Fr(n,s)}),Fr(n,i),pu(i,s=>{Fr(n,s)}),t}function Fr(n,e){const t=Rn(e);if(t){const i=[];let s=[],o=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(A(o===a-1,"All SENT items should be at beginning of queue."),o=a,t[a].status=3,t[a].abortReason="set"):(A(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),s=s.concat(mt(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&i.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));o===-1?du(e,void 0):t.length=o+1,Ne(n.eventQueue_,Pi(e),s);for(let a=0;a<i.length;a++)Cn(i[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Bm(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ve(`Invalid query segment '${t}' in query '${n}'`)}return e}const cl=function(n,e){const t=Hm(n),i=t.namespace;t.domain==="firebase.com"&&st(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&st("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Qp();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ah(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new j(t.pathString)}},Hm=function(n){let e="",t="",i="",s="",o="",a=!0,l="https",u=443;if(typeof n=="string"){let d=n.indexOf("//");d>=0&&(l=n.substring(0,d-1),n=n.substring(d+2));let m=n.indexOf("/");m===-1&&(m=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(m,p)),m<p&&(s=Wm(n.substring(m,p)));const v=Bm(n.substring(Math.min(n.length,p)));d=e.indexOf(":"),d>=0?(a=l==="https"||l==="wss",u=parseInt(e.substring(d+1),10)):d=e.length;const R=e.slice(0,d);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const b=e.indexOf(".");i=e.substring(0,b).toLowerCase(),t=e.substring(b+1),o=i}"ns"in v&&(o=v.ns)}return{host:e,port:u,domain:t,subdomain:i,secure:a,scheme:l,pathString:s,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",jm=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const o=new Array(8);for(s=7;s>=0;s--)o[s]=ll.charAt(t%64),t=Math.floor(t/64);A(t===0,"Cannot push at time == 0");let a=o.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)a+=ll.charAt(e[s]);return A(a.length===20,"nextPushId: Length should be 20."),a}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class Ru{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return F(this._path)?null:Ao(this._path)}get ref(){return new Ye(this._repo,this._path)}get _queryIdentifier(){const e=Kc(this._queryParams),t=To(e);return t==="{}"?"default":t}get _queryObject(){return Kc(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof na))return!1;const t=this._repo===e._repo,i=bo(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Mg(this._path)}}class Ye extends na{constructor(e,t){super(e,t,new Oo,!1)}get parent(){const e=xh(this._path);return e===null?null:new Ye(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class vn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new j(e),i=En(this.ref,e);return new vn(this._node.getChild(t),i,Q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new vn(s,En(this.ref,i),Q)))}hasChild(e){const t=new j(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function DI(n,e){return n=oe(n),n._checkNotDeleted("ref"),e!==void 0?En(n._root,e):n._root}function En(n,e){return n=oe(n),M(n._path)===null?Tm("child","path",e):mu("child","path",e),new Ye(n._repo,X(n._path,e))}function LI(n,e){n=oe(n),Jo("push",n._path),_u("push",e,n._path,!0);const t=Eu(n._repo),i=jm(t),s=En(n,i),o=En(n,i);let a;return a=Promise.resolve(o),s.then=a.then.bind(a),s.catch=a.then.bind(a,void 0),s}function MI(n){return Jo("remove",n._path),$m(n,null)}function $m(n,e){n=oe(n),Jo("set",n._path),_u("set",e,n._path,!1);const t=new wi;return Dm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function xI(n,e){wm("update",e,n._path);const t=new wi;return Lm(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function FI(n){n=oe(n);const e=new ta(()=>{}),t=new Ni(e);return Om(n._repo,n,t).then(i=>new vn(i,new Ye(n._repo,n._path),n._queryParams.getIndex()))}class Ni{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Su("value",this,new vn(e.snapshotNode,new Ye(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ru(this,e,t):null}matches(e){return e instanceof Ni?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ia{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ru(this,e,t):null}createEvent(e,t){A(e.childName!=null,"Child events should have a childName.");const i=En(new Ye(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Su(e.type,this,new vn(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ia?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Gm(n,e,t,i,s){let o;if(typeof i=="object"&&(o=void 0,s=i),typeof i=="function"&&(o=i),s&&s.onlyOnce){const u=t,d=(m,p)=>{co(n._repo,n,l),u(m,p)};d.userCallback=t.userCallback,d.context=t.context,t=d}const a=new ta(t,o||void 0),l=new Ni(a);return xm(n._repo,n,l),()=>co(n._repo,n,l)}function UI(n,e,t,i){return Gm(n,"value",e,t,i)}function VI(n,e,t){let i=null;const s=t?new ta(t):null;e==="value"?i=new Ni(s):e&&(i=new ia(e,s)),co(n._repo,n,i)}z_(Ye);Q_(Ye);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="FIREBASE_DATABASE_EMULATOR_HOST",ho={};let zm=!1;function Km(n,e,t,i){const s=e.lastIndexOf(":"),o=e.substring(0,s),a=bt(o);n.repoInfo_=new Ah(e,a,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function Ym(n,e,t,i,s){let o=i||n.options.databaseURL;o===void 0&&(n.options.projectId||st("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),he("Using default host for project ",n.options.projectId),o=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=cl(o,s),l=a.repoInfo,u;typeof process<"u"&&kc&&(u=kc[qm]),u?(o=`http://${u}?ns=${l.namespace}`,a=cl(o,s),l=a.repoInfo):a.repoInfo.secure;const d=new lg(n.name,n.options,e);Cm("Invalid Firebase Database URL",a),F(a.path)||st("Database URL must point to the root of a Firebase Database (not including a child path).");const m=Xm(l,n,d,new cg(n,t));return new Qm(m,n)}function Jm(n,e){const t=ho[e];(!t||t[n.key]!==n)&&st(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Fm(n),delete t[n.key]}function Xm(n,e,t,i){let s=ho[e.name];s||(s={},ho[e.name]=s);let o=s[n.toURLString()];return o&&st("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Pm(n,zm,t,i),s[n.toURLString()]=o,o}class Qm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(km(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ye(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Jm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&st("Cannot call "+e+" on a deleted database.")}}function WI(n=Vs(),e){const t=Ci(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=yo("database");i&&Zm(t,...i)}return t}function Zm(n,e,t,i={}){n=oe(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,o=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&wt(i,o.repoInfo_.emulatorOptions))return;st("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let a;if(o.repoInfo_.nodeAdmin)i.mockUserToken&&st('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new ns(ns.OWNER);else if(i.mockUserToken){const l=typeof i.mockUserToken=="string"?i.mockUserToken:vo(i.mockUserToken,n.app.options.projectId);a=new ns(l)}bt(e)&&(Ls(e),Ms("Database",!0)),Km(o,s,i,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(n){qp(Pt),Tt(new nt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return Ym(i,s,o,t)},"PUBLIC").setMultipleInstances(!0)),ke(Nc,Oc,n),ke(Nc,Oc,"esm2020")}tt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};tt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ey();function Au(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ty=Au,bu=new Ti("auth","Firebase",Au());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Us("@firebase/auth");function ny(n,...e){Ss.logLevel<=H.WARN&&Ss.warn(`Auth (${Pt}): ${n}`,...e)}function is(n,...e){Ss.logLevel<=H.ERROR&&Ss.error(`Auth (${Pt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,...e){throw ra(n,...e)}function Ce(n,...e){return ra(n,...e)}function sa(n,e,t){const i={...ty(),[e]:t};return new Ti("auth","Firebase",i).create(e,{appName:n.name})}function We(n){return sa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pu(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Oe(n,"argument-error"),sa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ra(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return bu.create(n,...e)}function k(n,e,...t){if(!n)throw ra(e,...t)}function Ze(n){const e="INTERNAL ASSERTION FAILED: "+n;throw is(e),new Error(e)}function rt(n,e){n||Ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function ku(){return hl()==="http:"||hl()==="https:"}function hl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ku()||_f()||"connection"in navigator)?navigator.onLine:!0}function sy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.shortDelay=e,this.longDelay=t,rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Eo()||ah()}get(){return iy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n,e){rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ay=new Oi(3e4,6e4);function Ie(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Se(n,e,t,i,s={}){return Ou(n,s,async()=>{let o={},a={};i&&(e==="GET"?a=i:o={body:JSON.stringify(i)});const l=Xt({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...o};return gf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&bt(n.emulatorConfig.host)&&(d.credentials="include"),Nu.fetch()(await Du(n,n.config.apiHost,t,l),d)})}async function Ou(n,e,t){n._canInitEmulator=!1;const i={...ry,...e};try{const s=new ly(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Xn(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xn(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Xn(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Xn(n,"user-disabled",a);const m=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw sa(n,m,d);Oe(n,m)}}catch(s){if(s instanceof ze)throw s;Oe(n,"network-request-failed",{message:String(s)})}}async function kt(n,e,t,i,s={}){const o=await Se(n,e,t,i,s);return"mfaPendingCredential"in o&&Oe(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Du(n,e,t,i){const s=`${e}${t}?${i}`,o=n,a=o.config.emulator?oa(n.config,s):`${n.config.apiScheme}://${s}`;return oy.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function cy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ly{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ce(this.auth,"network-request-failed")),ay.get())})}}function Xn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ce(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(n){return n!==void 0&&n.getResponse!==void 0}function dl(n){return n!==void 0&&n.enterprise!==void 0}class Lu{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(n){return(await Se(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Mu(n,e){return Se(n,"GET","/v2/recaptchaConfig",Ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(n,e){return Se(n,"POST","/v1/accounts:delete",e)}async function Rs(n,e){return Se(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dy(n,e=!1){const t=oe(n),i=await t.getIdToken(e),s=aa(i);k(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:si(Ur(s.auth_time)),issuedAtTime:si(Ur(s.iat)),expirationTime:si(Ur(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ur(n){return Number(n)*1e3}function aa(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return is("JWT malformed, contained fewer than 3 sections"),null;try{const s=ls(t);return s?JSON.parse(s):(is("Failed to decode base64 JWT payload"),null)}catch(s){return is("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fl(n){const e=aa(n);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ze&&fy(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function fy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(n){var p;const e=n.auth,t=await n.getIdToken(),i=await In(n,Rs(e,{idToken:t}));k(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=(p=s.providerUserInfo)!=null&&p.length?xu(s.providerUserInfo):[],a=_y(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fo(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function gy(n){const e=oe(n);await As(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _y(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function xu(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function my(n,e){const t=await Ou(n,{},async()=>{const i=Xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await Du(n,s,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:i};return n.emulatorConfig&&bt(n.emulatorConfig.host)&&(u.credentials="include"),Nu.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yy(n,e){return Se(n,"POST","/v2/accounts:revokeToken",Ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){k(e.length!==0,"internal-error");const t=fl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:o}=await my(e,t);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:o}=t,a=new ln;return i&&(k(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(k(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(k(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ln,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,e){k(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xe{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new py(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await In(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dy(this,e)}reload(){return gy(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await As(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ue(this.auth.app))return Promise.reject(We(this.auth));const e=await this.getIdToken();return await In(this,uy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:p,emailVerified:v,isAnonymous:R,providerData:b,stsTokenManager:N}=t;k(p&&N,e,"internal-error");const O=ln.fromJSON(this.name,N);k(typeof p=="string",e,"internal-error"),dt(i,e.name),dt(s,e.name),k(typeof v=="boolean",e,"internal-error"),k(typeof R=="boolean",e,"internal-error"),dt(o,e.name),dt(a,e.name),dt(l,e.name),dt(u,e.name),dt(d,e.name),dt(m,e.name);const z=new xe({uid:p,auth:e,email:s,emailVerified:v,displayName:i,isAnonymous:R,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:O,createdAt:d,lastLoginAt:m});return b&&Array.isArray(b)&&(z.providerData=b.map(ee=>({...ee}))),u&&(z._redirectEventId=u),z}static async _fromIdTokenResponse(e,t,i=!1){const s=new ln;s.updateFromServerResponse(t);const o=new xe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await As(o),o}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];k(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?xu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),l=new ln;l.updateFromIdToken(i);const u=new xe({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new fo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Map;function et(n){rt(n instanceof Function,"Expected a class definition");let e=pl.get(n);return e?(rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,pl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fu.type="NONE";const gl=Fu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n,e,t){return`firebase:${n}:${e}:${t}`}class hn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=ss(this.userKey,s.apiKey,o),this.fullPersistenceKey=ss("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Rs(this.auth,{idToken:e}).catch(()=>{});return t?xe._fromGetAccountInfoResponse(this.auth,t,e):null}return xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new hn(et(gl),e,i);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||et(gl);const a=ss(i,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(a);if(m){let p;if(typeof m=="string"){const v=await Rs(e,{idToken:m}).catch(()=>{});if(!v)break;p=await xe._fromGetAccountInfoResponse(e,v,m)}else p=xe._fromJSON(e,m);d!==o&&(l=p),o=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new hn(o,e,i):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new hn(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ju(e))return"Blackberry";if($u(e))return"Webos";if(Vu(e))return"Safari";if((e.includes("chrome/")||Wu(e))&&!e.includes("edge/"))return"Chrome";if(Hu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Uu(n=Ee()){return/firefox\//i.test(n)}function Vu(n=Ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wu(n=Ee()){return/crios\//i.test(n)}function Bu(n=Ee()){return/iemobile/i.test(n)}function Hu(n=Ee()){return/android/i.test(n)}function ju(n=Ee()){return/blackberry/i.test(n)}function $u(n=Ee()){return/webos/i.test(n)}function ca(n=Ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vy(n=Ee()){var e;return ca(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Ey(){return mf()&&document.documentMode===10}function Gu(n=Ee()){return ca(n)||Hu(n)||$u(n)||ju(n)||/windows phone/i.test(n)||Bu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n,e=[]){let t;switch(n){case"Browser":t=_l(Ee());break;case"Worker":t=`${_l(Ee())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(n,e={}){return Se(n,"GET","/v2/passwordPolicy",Ie(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=6;class Cy{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ty,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ml(this),this.idTokenSubscription=new ml(this),this.beforeStateQueue=new Iy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=et(t)),this._initializationPromise=this.queue(async()=>{var i,s,o;if(!this._deleted&&(this.persistenceManager=await hn.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Rs(this,{idToken:e}),i=await xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(ue(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await As(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ue(this.app))return Promise.reject(We(this));const t=e?oe(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ue(this.app)?Promise.reject(We(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ue(this.app)?Promise.reject(We(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wy(this),t=new Cy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await yy(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&et(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,i,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&ny(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Re(n){return oe(n)}class ml{constructor(e){this.auth=e,this.observer=null,this.addObserver=Af(t=>this.observer=t)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ry(n){Di=n}function la(n){return Di.loadJS(n)}function Ay(){return Di.recaptchaV2Script}function by(){return Di.recaptchaEnterpriseScript}function Py(){return Di.gapiScript}function zu(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=500,Ny=6e4,Qi=1e12;class Oy{constructor(e){this.auth=e,this.counter=Qi,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new My(e,this.auth.name,t||{})),this.counter++,i}reset(e){var i;const t=e||Qi;(i=this._widgets.get(t))==null||i.delete(),this._widgets.delete(t)}getResponse(e){var i;const t=e||Qi;return((i=this._widgets.get(t))==null?void 0:i.getResponse())||""}async execute(e){var i;const t=e||Qi;return(i=this._widgets.get(t))==null||i.execute(),""}}class Dy{constructor(){this.enterprise=new Ly}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ly{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class My{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;k(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=xy(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Ny)},ky))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function xy(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const Fy="recaptcha-enterprise",ri="NO_RECAPTCHA";class Ku{constructor(e){this.type=Fy,this.auth=Re(e)}async verify(e="verify",t=!1){async function i(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{Mu(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Lu(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(o,a,l){const u=window.grecaptcha;dl(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(ri)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Dy().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{i(this.auth).then(l=>{if(!t&&dl(window.grecaptcha))s(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=by();u.length!==0&&(u+=l),la(u).then(()=>{s(l,o,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Kn(n,e,t,i=!1,s=!1){const o=new Ku(n);let a;if(s)a=ri;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ht(n,e,t,i,s){var o,a;if(s==="EMAIL_PASSWORD_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Kn(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Kn(n,e,t,t==="getOobCode");return i(n,u)}else return Promise.reject(l)});else if(s==="PHONE_PROVIDER")if((a=n._getRecaptchaConfig())!=null&&a.isProviderEnabled("PHONE_PROVIDER")){const l=await Kn(n,e,t);return i(n,l).catch(async u=>{var d;if(((d=n._getRecaptchaConfig())==null?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const m=await Kn(n,e,t,!1,!0);return i(n,m)}return Promise.reject(u)})}else{const l=await Kn(n,e,t,!1,!0);return i(n,l)}else return Promise.reject(s+" provider is not supported.")}async function Uy(n){const e=Re(n),t=await Mu(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new Lu(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new Ku(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(n,e){const t=Ci(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(wt(o,e??{}))return s;Oe(s,"already-initialized")}return t.initialize({options:e})}function Wy(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function By(n,e,t){const i=Re(n);k(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=Yu(e),{host:a,port:l}=Hy(e),u=l===null?"":`:${l}`,d={url:`${o}//${a}${u}/`},m=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){k(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),k(wt(d,i.config.emulator)&&wt(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,bt(a)?(Ls(`${o}//${a}${u}`),Ms("Auth",!0)):jy()}function Yu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Hy(n){const e=Yu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:yl(i.substr(o.length+1))}}else{const[o,a]=i.split(":");return{host:o,port:yl(a)}}}function yl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function jy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,t){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}async function $y(n,e){return Se(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(n,e){return kt(n,"POST","/v1/accounts:signInWithPassword",Ie(n,e))}async function qy(n,e){return Se(n,"POST","/v1/accounts:sendOobCode",Ie(n,e))}async function zy(n,e){return qy(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(n,e){return kt(n,"POST","/v1/accounts:signInWithEmailLink",Ie(n,e))}async function Yy(n,e){return kt(n,"POST","/v1/accounts:signInWithEmailLink",Ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Js{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ei(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ei(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ht(e,t,"signInWithPassword",Gy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Ky(e,{email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ht(e,i,"signUpPassword",$y,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Yy(e,{idToken:t,email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(n,e){return kt(n,"POST","/v1/accounts:signInWithIdp",Ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="http://localhost";class Kt extends Js{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Oe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...o}=t;if(!i||!s)return null;const a=new Kt(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return un(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,un(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,un(e,t)}buildRequest(){const e={requestUri:Jy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(n,e){return Se(n,"POST","/v1/accounts:sendVerificationCode",Ie(n,e))}async function Xy(n,e){return kt(n,"POST","/v1/accounts:signInWithPhoneNumber",Ie(n,e))}async function Qy(n,e){const t=await kt(n,"POST","/v1/accounts:signInWithPhoneNumber",Ie(n,e));if(t.temporaryProof)throw Xn(n,"account-exists-with-different-credential",t);return t}const Zy={USER_NOT_FOUND:"user-not-found"};async function ev(n,e){const t={...e,operation:"REAUTH"};return kt(n,"POST","/v1/accounts:signInWithPhoneNumber",Ie(n,t),Zy)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Js{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new oi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new oi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Xy(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Qy(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return ev(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:o}=e;return!i&&!t&&!s&&!o?null:new oi({verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nv(n){const e=Yn(Jn(n)).link,t=e?Yn(Jn(e)).deep_link_id:null,i=Yn(Jn(n)).deep_link_id;return(i?Yn(Jn(i)).link:null)||i||t||e||n}class ha{constructor(e){const t=Yn(Jn(e)),i=t.apiKey??null,s=t.oobCode??null,o=tv(t.mode??null);k(i&&s&&o,"argument-error"),this.apiKey=i,this.operation=o,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=nv(e);try{return new ha(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,t){return Ei._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ha.parseLink(t);return k(i,"argument-error"),Ei._fromEmailAndCode(e,i.code,i.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends Xs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Li{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Kt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return pt.credential(t,i)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Li{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Li{constructor(){super("twitter.com")}static credential(e,t){return Kt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return _t.credential(t,i)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iv(n,e){return kt(n,"POST","/v1/accounts:signUp",Ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const o=await xe._fromIdTokenResponse(e,i,s),a=El(i);return new Yt({user:o,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=El(i);return new Yt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function El(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends ze{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,bs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new bs(e,t,i,s)}}function Ju(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?bs._fromErrorAndOperation(n,o,e,i):o})}async function sv(n,e,t=!1){const i=await In(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(n,e,t=!1){const{auth:i}=n;if(ue(i.app))return Promise.reject(We(i));const s="reauthenticate";try{const o=await In(n,Ju(i,s,e,n),t);k(o.idToken,i,"internal-error");const a=aa(o.idToken);k(a,i,"internal-error");const{sub:l}=a;return k(n.uid===l,i,"user-mismatch"),Yt._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Oe(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(n,e,t=!1){if(ue(n.app))return Promise.reject(We(n));const i="signIn",s=await Ju(n,i,e),o=await Yt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(o.user),o}async function Qu(n,e){return Xu(Re(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zu(n){const e=Re(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BI(n,e,t){const i=Re(n);await Ht(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",zy,"EMAIL_PASSWORD_PROVIDER")}async function HI(n,e,t){if(ue(n.app))return Promise.reject(We(n));const i=Re(n),a=await Ht(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iv,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Zu(n),u}),l=await Yt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function jI(n,e,t){return ue(n.app)?Promise.reject(We(n)):Qu(oe(n),An.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Zu(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov(n,e){return Se(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=oe(n),o={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await In(i,ov(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const l=i.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function av(n,e,t,i){return oe(n).onIdTokenChanged(e,t,i)}function cv(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function GI(n,e,t,i){return oe(n).onAuthStateChanged(e,t,i)}function qI(n){return oe(n).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:start",Ie(n,e))}const Ps="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ps,"1"),this.storage.removeItem(Ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=1e3,hv=10;class td extends ed{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},o=this.storage.getItem(i);Ey()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hv):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},lv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}td.type="LOCAL";const uv=td;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends ed{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nd.type="SESSION";const id=nd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Qs(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,o)),u=await dv(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const d=ua("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(v.data.response);break;default:clearTimeout(m),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){return window}function pv(n){te().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(){return typeof te().WorkerGlobalScope<"u"&&typeof te().importScripts=="function"}async function gv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _v(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function mv(){return da()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="firebaseLocalStorageDb",yv=1,ks="firebaseLocalStorage",rd="fbase_key";class Mi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zs(n,e){return n.transaction([ks],e?"readwrite":"readonly").objectStore(ks)}function vv(){const n=indexedDB.deleteDatabase(sd);return new Mi(n).toPromise()}function po(){const n=indexedDB.open(sd,yv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ks,{keyPath:rd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ks)?e(i):(i.close(),await vv(),e(await po()))})})}async function wl(n,e,t){const i=Zs(n,!0).put({[rd]:e,value:t});return new Mi(i).toPromise()}async function Ev(n,e){const t=Zs(n,!1).get(e),i=await new Mi(t).toPromise();return i===void 0?null:i.value}function Tl(n,e){const t=Zs(n,!0).delete(e);return new Mi(t).toPromise()}const Iv=800,wv=3;class od{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await po(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>wv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return da()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance(mv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await gv(),!this.activeServiceWorker)return;this.sender=new fv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_v()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await po();return await wl(e,Ps,"1"),await Tl(e,Ps),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>wl(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Ev(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Zs(s,!1).getAll();return new Mi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Iv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}od.type="LOCAL";const Tv=od;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n,e){return Se(n,"POST","/v2/accounts/mfaSignIn:start",Ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=zu("rcb"),Cv=new Oi(3e4,6e4);class Sv{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=te().grecaptcha)!=null&&e.render)}load(e,t=""){return k(Rv(t),e,"argument-error"),this.shouldResolveImmediately(t)&&ul(te().grecaptcha)?Promise.resolve(te().grecaptcha):new Promise((i,s)=>{const o=te().setTimeout(()=>{s(Ce(e,"network-request-failed"))},Cv.get());te()[Vr]=()=>{te().clearTimeout(o),delete te()[Vr];const l=te().grecaptcha;if(!l||!ul(l)){s(Ce(e,"internal-error"));return}const u=l.render;l.render=(d,m)=>{const p=u(d,m);return this.counter++,p},this.hostLanguage=t,i(l)};const a=`${Ay()}?${Xt({onload:Vr,render:"explicit",hl:t})}`;la(a).catch(()=>{clearTimeout(o),s(Ce(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=te().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Rv(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Av{async load(e){return new Oy(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="recaptcha",bv={theme:"light",type:"image"};class zI{constructor(e,t,i={...bv}){this.parameters=i,this.type=ai,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Re(e),this.isInvisible=this.parameters.size==="invisible",k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;k(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Av:new Sv,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(s=>{const o=a=>{a&&(this.tokenChangeListeners.delete(o),s(a))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=te()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(ku()&&!da(),this.auth,"internal-error"),await Pv(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await hy(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Pv(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=oi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function KI(n,e,t){if(ue(n.app))return Promise.reject(We(n));const i=Re(n),s=await Nv(i,e,oe(t));return new kv(s,o=>Qu(i,o))}async function Nv(n,e,t){var i;if(!n._getRecaptchaConfig())try{await Uy(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s){k(o.type==="enroll",n,"internal-error");const a={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ht(n,a,"mfaSmsEnrollment",async(m,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===ri){k((t==null?void 0:t.type)===ai,m,"argument-error");const v=await Wr(m,p,t);return Il(m,v)}return Il(m,p)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneSessionInfo.sessionInfo}else{k(o.type==="signin",n,"internal-error");const a=((i=s.multiFactorHint)==null?void 0:i.uid)||s.multiFactorUid;k(a,n,"missing-multi-factor-info");const l={mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ht(n,l,"mfaSmsSignIn",async(p,v)=>{if(v.phoneSignInInfo.captchaResponse===ri){k((t==null?void 0:t.type)===ai,p,"argument-error");const R=await Wr(p,v,t);return Cl(p,R)}return Cl(p,v)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ht(n,o,"sendVerificationCode",async(d,m)=>{if(m.captchaResponse===ri){k((t==null?void 0:t.type)===ai,d,"argument-error");const p=await Wr(d,m,t);return vl(d,p)}return vl(d,m)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{t==null||t._reset()}}async function Wr(n,e,t){k(t.type===ai,n,"argument-error");const i=await t.verify();k(typeof i=="string",n,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const o=s.phoneEnrollmentInfo.phoneNumber,a=s.phoneEnrollmentInfo.captchaResponse,l=s.phoneEnrollmentInfo.clientType,u=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:i,captchaResponse:a,clientType:l,recaptchaVersion:u}}),s}else if("phoneSignInInfo"in s){const o=s.phoneSignInInfo.captchaResponse,a=s.phoneSignInInfo.clientType,l=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:o,clientType:a,recaptchaVersion:l}}),s}else return Object.assign(s,{recaptchaToken:i}),s}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n,e){return e?et(e):(k(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends Js{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return un(e,this._buildIdpRequest())}_linkToIdToken(e,t){return un(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return un(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ov(n){return Xu(n.auth,new pa(n),n.bypassAuthState)}function Dv(n){const{auth:e,user:t}=n;return k(t,e,"internal-error"),rv(t,new pa(n),n.bypassAuthState)}async function Lv(n){const{auth:e,user:t}=n;return k(t,e,"internal-error"),sv(t,new pa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ov;case"linkViaPopup":case"linkViaRedirect":return Lv;case"reauthViaPopup":case"reauthViaRedirect":return Dv;default:Oe(this.auth,"internal-error")}}resolve(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=new Oi(2e3,1e4);async function YI(n,e,t){if(ue(n.app))return Promise.reject(Ce(n,"operation-not-supported-in-this-environment"));const i=Re(n);Pu(n,e,Xs);const s=fa(i,t);return new Wt(i,"signInViaPopup",e,s).executeNotNull()}class Wt extends ad{constructor(e,t,i,s,o){super(e,t,s,o),this.provider=i,this.authWindow=null,this.pollId=null,Wt.currentPopupAction&&Wt.currentPopupAction.cancel(),Wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){rt(this.filter.length===1,"Popup operations only handle one event");const e=ua();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mv.get())};e()}}Wt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="pendingRedirect",rs=new Map;class Fv extends ad{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=rs.get(this.auth._key());if(!e){try{const i=await Uv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}rs.set(this.auth._key(),e)}return this.bypassAuthState||rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uv(n,e){const t=ld(e),i=cd(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function Vv(n,e){return cd(n)._set(ld(e),"true")}function Wv(n,e){rs.set(n._key(),e)}function cd(n){return et(n._redirectPersistence)}function ld(n){return ss(xv,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(n,e,t){return Bv(n,e,t)}async function Bv(n,e,t){if(ue(n.app))return Promise.reject(We(n));const i=Re(n);Pu(n,e,Xs),await i._initializationPromise;const s=fa(i,t);return await Vv(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function XI(n,e){return await Re(n)._initializationPromise,hd(n,e,!1)}async function hd(n,e,t=!1){if(ue(n.app))return Promise.reject(We(n));const i=Re(n),s=fa(i,e),a=await new Fv(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=10*60*1e3;class jv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$v(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ud(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ce(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sl(e))}saveEventToCache(e){this.cachedEventUids.add(Sl(e)),this.lastProcessedEventTime=Date.now()}}function Sl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ud({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $v(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ud(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gv(n,e={}){return Se(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zv=/^https?/;async function Kv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Gv(n);for(const t of e)try{if(Yv(t))return}catch{}Oe(n,"unauthorized-domain")}function Yv(n){const e=uo(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!zv.test(t))return!1;if(qv.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new Oi(3e4,6e4);function Rl(){const n=te().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xv(n){return new Promise((e,t)=>{var s,o,a;function i(){Rl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rl(),t(Ce(n,"network-request-failed"))},timeout:Jv.get()})}if((o=(s=te().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=te().gapi)!=null&&a.load)i();else{const l=zu("iframefcb");return te()[l]=()=>{gapi.load?i():t(Ce(n,"network-request-failed"))},la(`${Py()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw os=null,e})}let os=null;function Qv(n){return os=os||Xv(n),os}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=new Oi(5e3,15e3),eE="__/auth/iframe",tE="emulator/auth/iframe",nE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sE(n){const e=n.config;k(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?oa(e,tE):`https://${n.config.authDomain}/${eE}`,i={apiKey:e.apiKey,appName:n.name,v:Pt},s=iE.get(n.config.apiHost);s&&(i.eid=s);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${Xt(i).slice(1)}`}async function rE(n){const e=await Qv(n),t=te().gapi;return k(t,n,"internal-error"),e.open({where:document.body,url:sE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nE,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const a=Ce(n,"network-request-failed"),l=te().setTimeout(()=>{o(a)},Zv.get());function u(){te().clearTimeout(l),s(i)}i.ping(u).then(u,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aE=500,cE=600,lE="_blank",hE="http://localhost";class Al{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uE(n,e,t,i=aE,s=cE){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u={...oE,width:i.toString(),height:s.toString(),top:o,left:a},d=Ee().toLowerCase();t&&(l=Wu(d)?lE:t),Uu(d)&&(e=e||hE,u.scrollbars="yes");const m=Object.entries(u).reduce((v,[R,b])=>`${v}${R}=${b},`,"");if(vy(d)&&l!=="_self")return dE(e||"",l),new Al(null);const p=window.open(e||"",l,m);k(p,n,"popup-blocked");try{p.focus()}catch{}return new Al(p)}function dE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="__/auth/handler",pE="emulator/auth/handler",gE=encodeURIComponent("fac");async function bl(n,e,t,i,s,o){k(n.config.authDomain,n,"auth-domain-config-required"),k(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Pt,eventId:s};if(e instanceof Xs){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Gr(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))a[m]=p}if(e instanceof Li){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await n._getAppCheckToken(),d=u?`#${gE}=${encodeURIComponent(u)}`:"";return`${_E(n)}?${Xt(l).slice(1)}${d}`}function _E({config:n}){return n.emulator?oa(n,pE):`https://${n.authDomain}/${fE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="webStorageSupport";class mE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=id,this._completeRedirectFn=hd,this._overrideRedirectResult=Wv}async _openPopup(e,t,i,s){var a;rt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await bl(e,t,i,uo(),s);return uE(e,o,ua())}async _openRedirect(e,t,i,s){await this._originValidation(e);const o=await bl(e,t,i,uo(),s);return pv(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(rt(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await rE(e),i=new jv(e);return t.register("authEvent",s=>(k(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Br,{type:Br},s=>{var a;const o=(a=s==null?void 0:s[0])==null?void 0:a[Br];o!==void 0&&t(!!o),Oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gu()||Vu()||ca()}}const yE=mE;var Pl="@firebase/auth",kl="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IE(n){Tt(new nt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;k(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qu(n)},d=new Sy(i,s,o,u);return Wy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Tt(new nt("auth-internal",e=>{const t=Re(e.getProvider("auth").getImmediate());return(i=>new vE(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ke(Pl,kl,EE(n)),ke(Pl,kl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=5*60,TE=oh("authIdTokenMaxAge")||wE;let Nl=null;const CE=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>TE)return;const s=t==null?void 0:t.token;Nl!==s&&(Nl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function QI(n=Vs()){const e=Ci(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Vy(n,{popupRedirectResolver:yE,persistence:[Tv,uv,id]}),i=oh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const a=CE(o.toString());cv(t,a,()=>a(t.currentUser)),av(t,l=>a(l))}}const s=sh("auth");return s&&By(t,`http://${s}`),t}function SE(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Ry({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const o=Ce("internal-error");o.customData=s,t(o)},i.type="text/javascript",i.charset="UTF-8",SE().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IE("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="firebasestorage.googleapis.com",RE="storageBucket",AE=2*60*1e3,bE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends ze{constructor(e,t,i=0){super(Hr(e),`Firebase Storage: ${t} (${Hr(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qe||(qe={}));function Hr(n){return"storage/"+n}function PE(){const n="An unknown error occurred, please check the error payload for server response.";return new Je(qe.UNKNOWN,n)}function kE(){return new Je(qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function NE(){return new Je(qe.CANCELED,"User canceled the upload/download.")}function OE(n){return new Je(qe.INVALID_URL,"Invalid URL '"+n+"'.")}function DE(n){return new Je(qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Ol(n){return new Je(qe.INVALID_ARGUMENT,n)}function fd(){return new Je(qe.APP_DELETED,"The Firebase app was deleted.")}function LE(n){return new Je(qe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Fe.makeFromUrl(e,t)}catch{return new Fe(e,"")}if(i.path==="")return i;throw DE(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function o(J){J.path.charAt(J.path.length-1)==="/"&&(J.path_=J.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function d(J){J.path_=decodeURIComponent(J.path)}const m="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",R=new RegExp(`^https?://${p}/${m}/b/${s}/o${v}`,"i"),b={bucket:1,path:3},N=t===dd?"(?:storage.googleapis.com|storage.cloud.google.com)":t,O="([^?#]*)",z=new RegExp(`^https?://${N}/${s}/${O}`,"i"),Y=[{regex:l,indices:u,postModify:o},{regex:R,indices:b,postModify:d},{regex:z,indices:{bucket:1,path:2},postModify:d}];for(let J=0;J<Y.length;J++){const Ae=Y[J],fe=Ae.regex.exec(e);if(fe){const I=fe[Ae.indices.bucket];let g=fe[Ae.indices.path];g||(g=""),i=new Fe(I,g),Ae.postModify(i);break}}if(i==null)throw OE(e);return i}}class ME{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(n,e,t){let i=1,s=null,o=null,a=!1,l=0;function u(){return l===2}let d=!1;function m(...O){d||(d=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,n(R,u())},O)}function v(){o&&clearTimeout(o)}function R(O,...z){if(d){v();return}if(O){v(),m.call(null,O,...z);return}if(u()||a){v(),m.call(null,O,...z);return}i<64&&(i*=2);let Y;l===1?(l=2,Y=0):Y=(i+Math.random())*1e3,p(Y)}let b=!1;function N(O){b||(b=!0,v(),!d&&(s!==null?(O||(l=2),clearTimeout(s),p(0)):O||(l=1)))}return p(0),o=setTimeout(()=>{a=!0,N(!0)},t),N}function FE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(n){return n!==void 0}function Dl(n,e,t,i){if(i<e)throw Ol(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Ol(`Invalid value for '${n}'. Expected ${t} or less.`)}function VE(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Ns;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ns||(Ns={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=e.indexOf(n)!==-1;return t||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t,i,s,o,a,l,u,d,m,p,v=!0,R=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=p,this.retry=v,this.isUsingEmulator=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,N)=>{this.resolve_=b,this.reject_=N,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Zi(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===Ns.NO_ERROR,u=o.getStatus();if(!l||WE(u,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===Ns.ABORT;i(!1,new Zi(!1,null,m));return}const d=this.successCodes_.indexOf(u)!==-1;i(!0,new Zi(d,o))})},t=(i,s)=>{const o=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());UE(u)?o(u):o()}catch(u){a(u)}else if(l!==null){const u=PE();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(s.canceled){const u=this.appDelete_?fd():NE();a(u)}else{const u=kE();a(u)}};this.canceled_?t(!1,new Zi(!1,null,!0)):this.backoffId_=xE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&FE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zi{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function HE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function jE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $E(n,e){e&&(n["X-Firebase-GMPID"]=e)}function GE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function qE(n,e,t,i,s,o,a=!0,l=!1){const u=VE(n.urlParams),d=n.url+u,m=Object.assign({},n.headers);return $E(m,e),HE(m,t),jE(m,o),GE(m,i),new BE(d,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function KE(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t){this._service=e,t instanceof Fe?this._location=t:this._location=Fe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Os(e,t)}get root(){const e=new Fe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return KE(this._location.path)}get storage(){return this._service}get parent(){const e=zE(this._location.path);if(e===null)return null;const t=new Fe(this._location.bucket,e);return new Os(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw LE(e)}}function Ll(n,e){const t=e==null?void 0:e[RE];return t==null?null:Fe.makeFromBucketSpec(t,n)}function YE(n,e,t,i={}){n.host=`${e}:${t}`;const s=bt(e);s&&(Ls(`https://${n.host}/b`),Ms("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:vo(o,n.app.options.projectId))}class JE{constructor(e,t,i,s,o,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=dd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=AE,this._maxUploadRetryTime=bE,this._requests=new Set,s!=null?this._bucket=Fe.makeFromBucketSpec(s,this._host):this._bucket=Ll(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Fe.makeFromBucketSpec(this._url,e):this._bucket=Ll(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Dl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Dl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Os(this,e)}_makeRequest(e,t,i,s,o=!0){if(this._deleted)return new ME(fd());{const a=qE(e,this._appId,i,s,t,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Ml="@firebase/storage",xl="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="storage";function ZI(n=Vs(),e){n=oe(n);const i=Ci(n,pd).getImmediate({identifier:e}),s=yo("storage");return s&&XE(i,...s),i}function XE(n,e,t,i={}){YE(n,e,t,i)}function QE(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new JE(t,i,s,e,Pt)}function ZE(){Tt(new nt(pd,QE,"PUBLIC").setMultipleInstances(!0)),ke(Ml,xl,""),ke(Ml,xl,"esm2020")}ZE();var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ga;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function y(){}y.prototype=g.prototype,I.F=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.D=function(w,E,C){for(var _=Array(arguments.length-2),we=2;we<arguments.length;we++)_[we-2]=arguments[we];return g.prototype[E].apply(w,_)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,y){y||(y=0);const w=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)w[E]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(E=0;E<16;++E)w[E]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],E=I.g[2];let C=I.g[3],_;_=g+(C^y&(E^C))+w[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=C+(E^g&(y^E))+w[1]+3905402710&4294967295,C=g+(_<<12&4294967295|_>>>20),_=E+(y^C&(g^y))+w[2]+606105819&4294967295,E=C+(_<<17&4294967295|_>>>15),_=y+(g^E&(C^g))+w[3]+3250441966&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(C^y&(E^C))+w[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=C+(E^g&(y^E))+w[5]+1200080426&4294967295,C=g+(_<<12&4294967295|_>>>20),_=E+(y^C&(g^y))+w[6]+2821735955&4294967295,E=C+(_<<17&4294967295|_>>>15),_=y+(g^E&(C^g))+w[7]+4249261313&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(C^y&(E^C))+w[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=C+(E^g&(y^E))+w[9]+2336552879&4294967295,C=g+(_<<12&4294967295|_>>>20),_=E+(y^C&(g^y))+w[10]+4294925233&4294967295,E=C+(_<<17&4294967295|_>>>15),_=y+(g^E&(C^g))+w[11]+2304563134&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(C^y&(E^C))+w[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=C+(E^g&(y^E))+w[13]+4254626195&4294967295,C=g+(_<<12&4294967295|_>>>20),_=E+(y^C&(g^y))+w[14]+2792965006&4294967295,E=C+(_<<17&4294967295|_>>>15),_=y+(g^E&(C^g))+w[15]+1236535329&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(E^C&(y^E))+w[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=C+(y^E&(g^y))+w[6]+3225465664&4294967295,C=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(C^g))+w[11]+643717713&4294967295,E=C+(_<<14&4294967295|_>>>18),_=y+(C^g&(E^C))+w[0]+3921069994&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^C&(y^E))+w[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=C+(y^E&(g^y))+w[10]+38016083&4294967295,C=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(C^g))+w[15]+3634488961&4294967295,E=C+(_<<14&4294967295|_>>>18),_=y+(C^g&(E^C))+w[4]+3889429448&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^C&(y^E))+w[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=C+(y^E&(g^y))+w[14]+3275163606&4294967295,C=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(C^g))+w[3]+4107603335&4294967295,E=C+(_<<14&4294967295|_>>>18),_=y+(C^g&(E^C))+w[8]+1163531501&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^C&(y^E))+w[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=C+(y^E&(g^y))+w[2]+4243563512&4294967295,C=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(C^g))+w[7]+1735328473&4294967295,E=C+(_<<14&4294967295|_>>>18),_=y+(C^g&(E^C))+w[12]+2368359562&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(y^E^C)+w[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=C+(g^y^E)+w[8]+2272392833&4294967295,C=g+(_<<11&4294967295|_>>>21),_=E+(C^g^y)+w[11]+1839030562&4294967295,E=C+(_<<16&4294967295|_>>>16),_=y+(E^C^g)+w[14]+4259657740&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^C)+w[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=C+(g^y^E)+w[4]+1272893353&4294967295,C=g+(_<<11&4294967295|_>>>21),_=E+(C^g^y)+w[7]+4139469664&4294967295,E=C+(_<<16&4294967295|_>>>16),_=y+(E^C^g)+w[10]+3200236656&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^C)+w[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=C+(g^y^E)+w[0]+3936430074&4294967295,C=g+(_<<11&4294967295|_>>>21),_=E+(C^g^y)+w[3]+3572445317&4294967295,E=C+(_<<16&4294967295|_>>>16),_=y+(E^C^g)+w[6]+76029189&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^C)+w[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=C+(g^y^E)+w[12]+3873151461&4294967295,C=g+(_<<11&4294967295|_>>>21),_=E+(C^g^y)+w[15]+530742520&4294967295,E=C+(_<<16&4294967295|_>>>16),_=y+(E^C^g)+w[2]+3299628645&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(E^(y|~C))+w[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=C+(y^(g|~E))+w[7]+1126891415&4294967295,C=g+(_<<10&4294967295|_>>>22),_=E+(g^(C|~y))+w[14]+2878612391&4294967295,E=C+(_<<15&4294967295|_>>>17),_=y+(C^(E|~g))+w[5]+4237533241&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~C))+w[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=C+(y^(g|~E))+w[3]+2399980690&4294967295,C=g+(_<<10&4294967295|_>>>22),_=E+(g^(C|~y))+w[10]+4293915773&4294967295,E=C+(_<<15&4294967295|_>>>17),_=y+(C^(E|~g))+w[1]+2240044497&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~C))+w[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=C+(y^(g|~E))+w[15]+4264355552&4294967295,C=g+(_<<10&4294967295|_>>>22),_=E+(g^(C|~y))+w[6]+2734768916&4294967295,E=C+(_<<15&4294967295|_>>>17),_=y+(C^(E|~g))+w[13]+1309151649&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~C))+w[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=C+(y^(g|~E))+w[11]+3174756917&4294967295,C=g+(_<<10&4294967295|_>>>22),_=E+(g^(C|~y))+w[2]+718787259&4294967295,E=C+(_<<15&4294967295|_>>>17),_=y+(C^(E|~g))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+C&4294967295}i.prototype.v=function(I,g){g===void 0&&(g=I.length);const y=g-this.blockSize,w=this.C;let E=this.h,C=0;for(;C<g;){if(E==0)for(;C<=y;)s(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<g;)if(w[E++]=I.charCodeAt(C++),E==this.blockSize){s(this,w),E=0;break}}else for(;C<g;)if(w[E++]=I[C++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=g},i.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;g=this.o*8;for(var y=I.length-8;y<I.length;++y)I[y]=g&255,g/=256;for(this.v(I),I=Array(16),g=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)I[g++]=this.g[y]>>>w&255;return I};function o(I,g){var y=l;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;const y=[];let w=!0;for(let E=I.length-1;E>=0;E--){const C=I[E]|0;w&&C==g||(y[E]=C,w=!1)}this.g=y}var l={};function u(I){return-128<=I&&I<128?o(I,function(g){return new a([g|0],g<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return O(d(-I));const g=[];let y=1;for(let w=0;I>=y;w++)g[w]=I/y|0,y*=4294967296;return new a(g,0)}function m(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return O(m(I.substring(1),g));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let w=p;for(let C=0;C<I.length;C+=8){var E=Math.min(8,I.length-C);const _=parseInt(I.substring(C,C+E),g);E<8?(E=d(Math.pow(g,E)),w=w.j(E).add(d(_))):(w=w.j(y),w=w.add(d(_)))}return w}var p=u(0),v=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(N(this))return-O(this).m();let I=0,g=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);I+=(w>=0?w:4294967296+w)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(b(this))return"0";if(N(this))return"-"+O(this).toString(I);const g=d(Math.pow(I,6));var y=this;let w="";for(;;){const E=J(y,g).g;y=z(y,E.j(g));let C=((y.g.length>0?y.g[0]:y.h)>>>0).toString(I);if(y=E,b(y))return C+w;for(;C.length<6;)C="0"+C;w=C+w}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function b(I){if(I.h!=0)return!1;for(let g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function N(I){return I.h==-1}n.l=function(I){return I=z(this,I),N(I)?-1:b(I)?0:1};function O(I){const g=I.g.length,y=[];for(let w=0;w<g;w++)y[w]=~I.g[w];return new a(y,~I.h).add(v)}n.abs=function(){return N(this)?O(this):this},n.add=function(I){const g=Math.max(this.g.length,I.g.length),y=[];let w=0;for(let E=0;E<=g;E++){let C=w+(this.i(E)&65535)+(I.i(E)&65535),_=(C>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);w=_>>>16,C&=65535,_&=65535,y[E]=_<<16|C}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(I,g){return I.add(O(g))}n.j=function(I){if(b(this)||b(I))return p;if(N(this))return N(I)?O(this).j(O(I)):O(O(this).j(I));if(N(I))return O(this.j(O(I)));if(this.l(R)<0&&I.l(R)<0)return d(this.m()*I.m());const g=this.g.length+I.g.length,y=[];for(var w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let E=0;E<I.g.length;E++){const C=this.i(w)>>>16,_=this.i(w)&65535,we=I.i(E)>>>16,Nt=I.i(E)&65535;y[2*w+2*E]+=_*Nt,ee(y,2*w+2*E),y[2*w+2*E+1]+=C*Nt,ee(y,2*w+2*E+1),y[2*w+2*E+1]+=_*we,ee(y,2*w+2*E+1),y[2*w+2*E+2]+=C*we,ee(y,2*w+2*E+2)}for(I=0;I<g;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=g;I<2*g;I++)y[I]=0;return new a(y,0)};function ee(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function Y(I,g){this.g=I,this.h=g}function J(I,g){if(b(g))throw Error("division by zero");if(b(I))return new Y(p,p);if(N(I))return g=J(O(I),g),new Y(O(g.g),O(g.h));if(N(g))return g=J(I,O(g)),new Y(O(g.g),g.h);if(I.g.length>30){if(N(I)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var y=v,w=g;w.l(I)<=0;)y=Ae(y),w=Ae(w);var E=fe(y,1),C=fe(w,1);for(w=fe(w,2),y=fe(y,2);!b(w);){var _=C.add(w);_.l(I)<=0&&(E=E.add(y),C=_),w=fe(w,1),y=fe(y,1)}return g=z(I,E.j(g)),new Y(E,g)}for(E=p;I.l(g)>=0;){for(y=Math.max(1,Math.floor(I.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),C=d(y),_=C.j(g);N(_)||_.l(I)>0;)y-=w,C=d(y),_=C.j(g);b(C)&&(C=v),E=E.add(C),I=z(I,_)}return new Y(E,I)}n.B=function(I){return J(this,I).h},n.and=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)&I.i(w);return new a(y,this.h&I.h)},n.or=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)|I.i(w);return new a(y,this.h|I.h)},n.xor=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)^I.i(w);return new a(y,this.h^I.h)};function Ae(I){const g=I.g.length+1,y=[];for(let w=0;w<g;w++)y[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(y,I.h)}function fe(I,g){const y=g>>5;g%=32;const w=I.g.length-y,E=[];for(let C=0;C<w;C++)E[C]=g>0?I.i(C+y)>>>g|I.i(C+y+1)<<32-g:I.i(C+y);return new a(E,I.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ga=a}).apply(typeof Fl<"u"?Fl:typeof self<"u"?self:typeof window<"u"?window:{});var es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=Object.defineProperty;function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof es=="object"&&es];for(var c=0;c<r.length;++c){var h=r[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=t(this);function s(r,c){if(c)e:{var h=i;r=r.split(".");for(var f=0;f<r.length-1;f++){var T=r[f];if(!(T in h))break e;h=h[T]}r=r[r.length-1],f=h[r],c=c(f),c!=f&&c!=null&&e(h,r,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(r){return r||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(r){return r||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(r){return r||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(r){var c=typeof r;return c=="object"&&r!=null||c=="function"}function u(r,c,h){return r.call.apply(r.bind,arguments)}function d(r,c,h){return d=u,d.apply(null,arguments)}function m(r,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),r.apply(this,f)}}function p(r,c){function h(){}h.prototype=c.prototype,r.Z=c.prototype,r.prototype=new h,r.prototype.constructor=r,r.Ob=function(f,T,S){for(var P=Array(arguments.length-2),L=2;L<arguments.length;L++)P[L-2]=arguments[L];return c.prototype[T].apply(f,P)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?r=>r&&AsyncContext.Snapshot.wrap(r):r=>r;function R(r){const c=r.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=r[f];return h}return[]}function b(r,c){for(let f=1;f<arguments.length;f++){const T=arguments[f];var h=typeof T;if(h=h!="object"?h:T?Array.isArray(T)?"array":h:"null",h=="array"||h=="object"&&typeof T.length=="number"){h=r.length||0;const S=T.length||0;r.length=h+S;for(let P=0;P<S;P++)r[h+P]=T[P]}else r.push(T)}}class N{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(r){a.setTimeout(()=>{throw r},0)}function z(){var r=I;let c=null;return r.g&&(c=r.g,r.g=r.g.next,r.g||(r.h=null),c.next=null),c}class ee{constructor(){this.h=this.g=null}add(c,h){const f=Y.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Y=new N(()=>new J,r=>r.reset());class J{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,fe=!1,I=new ee,g=()=>{const r=Promise.resolve(void 0);Ae=()=>{r.then(y)}};function y(){for(var r;r=z();){try{r.h.call(r.g)}catch(h){O(h)}var c=Y;c.j(r),c.h<100&&(c.h++,r.next=c.g,c.g=r)}fe=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(r,c){this.type=r,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var r=!1,c=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return r}();function _(r){return/^[\s\xa0]*$/.test(r)}function we(r,c){E.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r&&this.init(r,c)}p(we,E),we.prototype.init=function(r,c){const h=this.type=r.type,f=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;this.target=r.target||r.srcElement,this.g=c,c=r.relatedTarget,c||(h=="mouseover"?c=r.fromElement:h=="mouseout"&&(c=r.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=r.pointerType,this.state=r.state,this.i=r,r.defaultPrevented&&we.Z.h.call(this)},we.prototype.h=function(){we.Z.h.call(this);const r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var Nt="closure_listenable_"+(Math.random()*1e6|0),Td=0;function Cd(r,c,h,f,T){this.listener=r,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=T,this.key=++Td,this.da=this.fa=!1}function Ui(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function Vi(r,c,h){for(const f in r)c.call(h,r[f],f,r)}function Sd(r,c){for(const h in r)c.call(void 0,r[h],h,r)}function Ea(r){const c={};for(const h in r)c[h]=r[h];return c}const Ia="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wa(r,c){let h,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(h in f)r[h]=f[h];for(let S=0;S<Ia.length;S++)h=Ia[S],Object.prototype.hasOwnProperty.call(f,h)&&(r[h]=f[h])}}function Wi(r){this.src=r,this.g={},this.h=0}Wi.prototype.add=function(r,c,h,f,T){const S=r.toString();r=this.g[S],r||(r=this.g[S]=[],this.h++);const P=tr(r,c,f,T);return P>-1?(c=r[P],h||(c.fa=!1)):(c=new Cd(c,this.src,S,!!f,T),c.fa=h,r.push(c)),c};function er(r,c){const h=c.type;if(h in r.g){var f=r.g[h],T=Array.prototype.indexOf.call(f,c,void 0),S;(S=T>=0)&&Array.prototype.splice.call(f,T,1),S&&(Ui(c),r.g[h].length==0&&(delete r.g[h],r.h--))}}function tr(r,c,h,f){for(let T=0;T<r.length;++T){const S=r[T];if(!S.da&&S.listener==c&&S.capture==!!h&&S.ha==f)return T}return-1}var nr="closure_lm_"+(Math.random()*1e6|0),ir={};function Ta(r,c,h,f,T){if(Array.isArray(c)){for(let S=0;S<c.length;S++)Ta(r,c[S],h,f,T);return null}return h=Ra(h),r&&r[Nt]?r.J(c,h,l(f)?!!f.capture:!1,T):Rd(r,c,h,!1,f,T)}function Rd(r,c,h,f,T,S){if(!c)throw Error("Invalid event type");const P=l(T)?!!T.capture:!!T;let L=rr(r);if(L||(r[nr]=L=new Wi(r)),h=L.add(c,h,f,P,S),h.proxy)return h;if(f=Ad(),h.proxy=f,f.src=r,f.listener=h,r.addEventListener)C||(T=P),T===void 0&&(T=!1),r.addEventListener(c.toString(),f,T);else if(r.attachEvent)r.attachEvent(Sa(c.toString()),f);else if(r.addListener&&r.removeListener)r.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Ad(){function r(h){return c.call(r.src,r.listener,h)}const c=bd;return r}function Ca(r,c,h,f,T){if(Array.isArray(c))for(var S=0;S<c.length;S++)Ca(r,c[S],h,f,T);else f=l(f)?!!f.capture:!!f,h=Ra(h),r&&r[Nt]?(r=r.i,S=String(c).toString(),S in r.g&&(c=r.g[S],h=tr(c,h,f,T),h>-1&&(Ui(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete r.g[S],r.h--)))):r&&(r=rr(r))&&(c=r.g[c.toString()],r=-1,c&&(r=tr(c,h,f,T)),(h=r>-1?c[r]:null)&&sr(h))}function sr(r){if(typeof r!="number"&&r&&!r.da){var c=r.src;if(c&&c[Nt])er(c.i,r);else{var h=r.type,f=r.proxy;c.removeEventListener?c.removeEventListener(h,f,r.capture):c.detachEvent?c.detachEvent(Sa(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=rr(c))?(er(h,r),h.h==0&&(h.src=null,c[nr]=null)):Ui(r)}}}function Sa(r){return r in ir?ir[r]:ir[r]="on"+r}function bd(r,c){if(r.da)r=!0;else{c=new we(c,this);const h=r.listener,f=r.ha||r.src;r.fa&&sr(r),r=h.call(f,c)}return r}function rr(r){return r=r[nr],r instanceof Wi?r:null}var or="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ra(r){return typeof r=="function"?r:(r[or]||(r[or]=function(c){return r.handleEvent(c)}),r[or])}function pe(){w.call(this),this.i=new Wi(this),this.M=this,this.G=null}p(pe,w),pe.prototype[Nt]=!0,pe.prototype.removeEventListener=function(r,c,h,f){Ca(this,r,c,h,f)};function ge(r,c){var h,f=r.G;if(f)for(h=[];f;f=f.G)h.push(f);if(r=r.M,f=c.type||c,typeof c=="string")c=new E(c,r);else if(c instanceof E)c.target=c.target||r;else{var T=c;c=new E(f,r),wa(c,T)}T=!0;let S,P;if(h)for(P=h.length-1;P>=0;P--)S=c.g=h[P],T=Bi(S,f,!0,c)&&T;if(S=c.g=r,T=Bi(S,f,!0,c)&&T,T=Bi(S,f,!1,c)&&T,h)for(P=0;P<h.length;P++)S=c.g=h[P],T=Bi(S,f,!1,c)&&T}pe.prototype.N=function(){if(pe.Z.N.call(this),this.i){var r=this.i;for(const c in r.g){const h=r.g[c];for(let f=0;f<h.length;f++)Ui(h[f]);delete r.g[c],r.h--}}this.G=null},pe.prototype.J=function(r,c,h,f){return this.i.add(String(r),c,!1,h,f)},pe.prototype.K=function(r,c,h,f){return this.i.add(String(r),c,!0,h,f)};function Bi(r,c,h,f){if(c=r.i.g[String(c)],!c)return!0;c=c.concat();let T=!0;for(let S=0;S<c.length;++S){const P=c[S];if(P&&!P.da&&P.capture==h){const L=P.listener,ie=P.ha||P.src;P.fa&&er(r.i,P),T=L.call(ie,f)!==!1&&T}}return T&&!f.defaultPrevented}function Pd(r,c){if(typeof r!="function")if(r&&typeof r.handleEvent=="function")r=d(r.handleEvent,r);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(r,c||0)}function Aa(r){r.g=Pd(()=>{r.g=null,r.i&&(r.i=!1,Aa(r))},r.l);const c=r.h;r.h=null,r.m.apply(null,c)}class kd extends w{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Aa(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bn(r){w.call(this),this.h=r,this.g={}}p(bn,w);var ba=[];function Pa(r){Vi(r.g,function(c,h){this.g.hasOwnProperty(h)&&sr(c)},r),r.g={}}bn.prototype.N=function(){bn.Z.N.call(this),Pa(this)},bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ar=a.JSON.stringify,Nd=a.JSON.parse,Od=class{stringify(r){return a.JSON.stringify(r,void 0)}parse(r){return a.JSON.parse(r,void 0)}};function ka(){}function Dd(){}var Pn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function cr(){E.call(this,"d")}p(cr,E);function lr(){E.call(this,"c")}p(lr,E);var en={},Na=null;function hr(){return Na=Na||new pe}en.Ia="serverreachability";function Oa(r){E.call(this,en.Ia,r)}p(Oa,E);function kn(r){const c=hr();ge(c,new Oa(c))}en.STAT_EVENT="statevent";function Da(r,c){E.call(this,en.STAT_EVENT,r),this.stat=c}p(Da,E);function _e(r){const c=hr();ge(c,new Da(c,r))}en.Ja="timingevent";function La(r,c){E.call(this,en.Ja,r),this.size=c}p(La,E);function Nn(r,c){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){r()},c)}function On(){this.g=!0}On.prototype.ua=function(){this.g=!1};function Ld(r,c,h,f,T,S){r.info(function(){if(r.g)if(S){var P="",L=S.split("&");for(let $=0;$<L.length;$++){var ie=L[$].split("=");if(ie.length>1){const ae=ie[0];ie=ie[1];const He=ae.split("_");P=He.length>=2&&He[1]=="type"?P+(ae+"="+ie+"&"):P+(ae+"=redacted&")}}}else P=null;else P=S;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+c+`
`+h+`
`+P})}function Md(r,c,h,f,T,S,P){r.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+c+`
`+h+`
`+S+" "+P})}function tn(r,c,h,f){r.info(function(){return"XMLHTTP TEXT ("+c+"): "+Fd(r,h)+(f?" "+f:"")})}function xd(r,c){r.info(function(){return"TIMEOUT: "+c})}On.prototype.info=function(){};function Fd(r,c){if(!r.g)return c;if(!c)return null;try{const S=JSON.parse(c);if(S){for(r=0;r<S.length;r++)if(Array.isArray(S[r])){var h=S[r];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var T=f[0];if(T!="noop"&&T!="stop"&&T!="close")for(let P=1;P<f.length;P++)f[P]=""}}}}return ar(S)}catch{return c}}var ur={NO_ERROR:0,TIMEOUT:8},Ud={},Ma;function dr(){}p(dr,ka),dr.prototype.g=function(){return new XMLHttpRequest},Ma=new dr;function Dn(r){return encodeURIComponent(String(r))}function Vd(r){var c=1;r=r.split(":");const h=[];for(;c>0&&r.length;)h.push(r.shift()),c--;return r.length&&h.push(r.join(":")),h}function ot(r,c,h,f){this.j=r,this.i=c,this.l=h,this.S=f||1,this.V=new bn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new xa}function xa(){this.i=null,this.g="",this.h=!1}var Fa={},fr={};function pr(r,c,h){r.M=1,r.A=ji(Be(c)),r.u=h,r.R=!0,Ua(r,null)}function Ua(r,c){r.F=Date.now(),Hi(r),r.B=Be(r.A);var h=r.B,f=r.S;Array.isArray(f)||(f=[String(f)]),Xa(h.i,"t",f),r.C=0,h=r.j.L,r.h=new xa,r.g=gc(r.j,h?c:null,!r.u),r.P>0&&(r.O=new kd(d(r.Y,r,r.g),r.P)),c=r.V,h=r.g,f=r.ba;var T="readystatechange";Array.isArray(T)||(T&&(ba[0]=T.toString()),T=ba);for(let S=0;S<T.length;S++){const P=Ta(h,T[S],f||c.handleEvent,!1,c.h||c);if(!P)break;c.g[P.key]=P}c=r.J?Ea(r.J):{},r.u?(r.v||(r.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.B,r.v,r.u,c)):(r.v="GET",r.g.ea(r.B,r.v,null,c)),kn(),Ld(r.i,r.v,r.B,r.l,r.S,r.u)}ot.prototype.ba=function(r){r=r.target;const c=this.O;c&&lt(r)==3?c.j():this.Y(r)},ot.prototype.Y=function(r){try{if(r==this.g)e:{const L=lt(this.g),ie=this.g.ya(),$=this.g.ca();if(!(L<3)&&(L!=3||this.g&&(this.h.h||this.g.la()||sc(this.g)))){this.K||L!=4||ie==7||(ie==8||$<=0?kn(3):kn(2)),gr(this);var c=this.g.ca();this.X=c;var h=Wd(this);if(this.o=c==200,Md(this.i,this.v,this.B,this.l,this.S,L,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,T=this.g;if((f=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(f)){var S=f;break t}}S=null}if(r=S)tn(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_r(this,r);else{this.o=!1,this.m=3,_e(12),Ot(this),Ln(this);break e}}if(this.R){r=!0;let ae;for(;!this.K&&this.C<h.length;)if(ae=Bd(this,h),ae==fr){L==4&&(this.m=4,_e(14),r=!1),tn(this.i,this.l,null,"[Incomplete Response]");break}else if(ae==Fa){this.m=4,_e(15),tn(this.i,this.l,h,"[Invalid Chunk]"),r=!1;break}else tn(this.i,this.l,ae,null),_r(this,ae);if(Va(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),L!=4||h.length!=0||this.h.h||(this.m=1,_e(16),r=!1),this.o=this.o&&r,!r)tn(this.i,this.l,h,"[Invalid Chunked Response]"),Ot(this),Ln(this);else if(h.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Cr(P),P.P=!0,_e(11))}}else tn(this.i,this.l,h,null),_r(this,h);L==4&&Ot(this),this.o&&!this.K&&(L==4?uc(this.j,this):(this.o=!1,Hi(this)))}else tf(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,_e(12)):(this.m=0,_e(13)),Ot(this),Ln(this)}}}catch{}finally{}};function Wd(r){if(!Va(r))return r.g.la();const c=sc(r.g);if(c==="")return"";let h="";const f=c.length,T=lt(r.g)==4;if(!r.h.i){if(typeof TextDecoder>"u")return Ot(r),Ln(r),"";r.h.i=new a.TextDecoder}for(let S=0;S<f;S++)r.h.h=!0,h+=r.h.i.decode(c[S],{stream:!(T&&S==f-1)});return c.length=0,r.h.g+=h,r.C=0,r.h.g}function Va(r){return r.g?r.v=="GET"&&r.M!=2&&r.j.Aa:!1}function Bd(r,c){var h=r.C,f=c.indexOf(`
`,h);return f==-1?fr:(h=Number(c.substring(h,f)),isNaN(h)?Fa:(f+=1,f+h>c.length?fr:(c=c.slice(f,f+h),r.C=f+h,c)))}ot.prototype.cancel=function(){this.K=!0,Ot(this)};function Hi(r){r.T=Date.now()+r.H,Wa(r,r.H)}function Wa(r,c){if(r.D!=null)throw Error("WatchDog timer not null");r.D=Nn(d(r.aa,r),c)}function gr(r){r.D&&(a.clearTimeout(r.D),r.D=null)}ot.prototype.aa=function(){this.D=null;const r=Date.now();r-this.T>=0?(xd(this.i,this.B),this.M!=2&&(kn(),_e(17)),Ot(this),this.m=2,Ln(this)):Wa(this,this.T-r)};function Ln(r){r.j.I==0||r.K||uc(r.j,r)}function Ot(r){gr(r);var c=r.O;c&&typeof c.dispose=="function"&&c.dispose(),r.O=null,Pa(r.V),r.g&&(c=r.g,r.g=null,c.abort(),c.dispose())}function _r(r,c){try{var h=r.j;if(h.I!=0&&(h.g==r||mr(h.h,r))){if(!r.L&&mr(h.h,r)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<r.F)Ki(h),qi(h);else break e;Tr(h),_e(18)}}else h.xa=T[1],0<h.xa-h.K&&T[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Nn(d(h.Va,h),6e3));ja(h.h)<=1&&h.ta&&(h.ta=void 0)}else Lt(h,11)}else if((r.L||h.g==r)&&Ki(h),!_(c))for(T=h.Ba.g.parse(c),c=0;c<T.length;c++){let $=T[c];const ae=$[0];if(!(ae<=h.K))if(h.K=ae,$=$[1],h.I==2)if($[0]=="c"){h.M=$[1],h.ba=$[2];const He=$[3];He!=null&&(h.ka=He,h.j.info("VER="+h.ka));const Mt=$[4];Mt!=null&&(h.za=Mt,h.j.info("SVER="+h.za));const ht=$[5];ht!=null&&typeof ht=="number"&&ht>0&&(f=1.5*ht,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const ut=r.g;if(ut){const Yi=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yi){var S=f.h;S.g||Yi.indexOf("spdy")==-1&&Yi.indexOf("quic")==-1&&Yi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(yr(S,S.h),S.h=null))}if(f.G){const Sr=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Sr&&(f.wa=Sr,K(f.J,f.G,Sr))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-r.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var P=r;if(f.na=pc(f,f.L?f.ba:null,f.W),P.L){$a(f.h,P);var L=P,ie=f.O;ie&&(L.H=ie),L.D&&(gr(L),Hi(L)),f.g=P}else lc(f);h.i.length>0&&zi(h)}else $[0]!="stop"&&$[0]!="close"||Lt(h,7);else h.I==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?Lt(h,7):wr(h):$[0]!="noop"&&h.l&&h.l.qa($),h.A=0)}}kn(4)}catch{}}var Hd=class{constructor(r,c){this.g=r,this.map=c}};function Ba(r){this.l=r||10,a.PerformanceNavigationTiming?(r=a.performance.getEntriesByType("navigation"),r=r.length>0&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ha(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function ja(r){return r.h?1:r.g?r.g.size:0}function mr(r,c){return r.h?r.h==c:r.g?r.g.has(c):!1}function yr(r,c){r.g?r.g.add(c):r.h=c}function $a(r,c){r.h&&r.h==c?r.h=null:r.g&&r.g.has(c)&&r.g.delete(c)}Ba.prototype.cancel=function(){if(this.i=Ga(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Ga(r){if(r.h!=null)return r.i.concat(r.h.G);if(r.g!=null&&r.g.size!==0){let c=r.i;for(const h of r.g.values())c=c.concat(h.G);return c}return R(r.i)}var qa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jd(r,c){if(r){r=r.split("&");for(let h=0;h<r.length;h++){const f=r[h].indexOf("=");let T,S=null;f>=0?(T=r[h].substring(0,f),S=r[h].substring(f+1)):T=r[h],c(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function at(r){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;r instanceof at?(this.l=r.l,Mn(this,r.j),this.o=r.o,this.g=r.g,xn(this,r.u),this.h=r.h,vr(this,Qa(r.i)),this.m=r.m):r&&(c=String(r).match(qa))?(this.l=!1,Mn(this,c[1]||"",!0),this.o=Fn(c[2]||""),this.g=Fn(c[3]||"",!0),xn(this,c[4]),this.h=Fn(c[5]||"",!0),vr(this,c[6]||"",!0),this.m=Fn(c[7]||"")):(this.l=!1,this.i=new Vn(null,this.l))}at.prototype.toString=function(){const r=[];var c=this.j;c&&r.push(Un(c,za,!0),":");var h=this.g;return(h||c=="file")&&(r.push("//"),(c=this.o)&&r.push(Un(c,za,!0),"@"),r.push(Dn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&r.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&r.push("/"),r.push(Un(h,h.charAt(0)=="/"?qd:Gd,!0))),(h=this.i.toString())&&r.push("?",h),(h=this.m)&&r.push("#",Un(h,Kd)),r.join("")},at.prototype.resolve=function(r){const c=Be(this);let h=!!r.j;h?Mn(c,r.j):h=!!r.o,h?c.o=r.o:h=!!r.g,h?c.g=r.g:h=r.u!=null;var f=r.h;if(h)xn(c,r.u);else if(h=!!r.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var T=c.h.lastIndexOf("/");T!=-1&&(f=c.h.slice(0,T+1)+f)}if(T=f,T==".."||T==".")f="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){f=T.lastIndexOf("/",0)==0,T=T.split("/");const S=[];for(let P=0;P<T.length;){const L=T[P++];L=="."?f&&P==T.length&&S.push(""):L==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&P==T.length&&S.push("")):(S.push(L),f=!0)}f=S.join("/")}else f=T}return h?c.h=f:h=r.i.toString()!=="",h?vr(c,Qa(r.i)):h=!!r.m,h&&(c.m=r.m),c};function Be(r){return new at(r)}function Mn(r,c,h){r.j=h?Fn(c,!0):c,r.j&&(r.j=r.j.replace(/:$/,""))}function xn(r,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);r.u=c}else r.u=null}function vr(r,c,h){c instanceof Vn?(r.i=c,Yd(r.i,r.l)):(h||(c=Un(c,zd)),r.i=new Vn(c,r.l))}function K(r,c,h){r.i.set(c,h)}function ji(r){return K(r,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),r}function Fn(r,c){return r?c?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Un(r,c,h){return typeof r=="string"?(r=encodeURI(r).replace(c,$d),h&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function $d(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var za=/[#\/\?@]/g,Gd=/[#\?:]/g,qd=/[#\?]/g,zd=/[#\?@]/g,Kd=/#/g;function Vn(r,c){this.h=this.g=null,this.i=r||null,this.j=!!c}function Dt(r){r.g||(r.g=new Map,r.h=0,r.i&&jd(r.i,function(c,h){r.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Vn.prototype,n.add=function(r,c){Dt(this),this.i=null,r=nn(this,r);let h=this.g.get(r);return h||this.g.set(r,h=[]),h.push(c),this.h+=1,this};function Ka(r,c){Dt(r),c=nn(r,c),r.g.has(c)&&(r.i=null,r.h-=r.g.get(c).length,r.g.delete(c))}function Ya(r,c){return Dt(r),c=nn(r,c),r.g.has(c)}n.forEach=function(r,c){Dt(this),this.g.forEach(function(h,f){h.forEach(function(T){r.call(c,T,f,this)},this)},this)};function Ja(r,c){Dt(r);let h=[];if(typeof c=="string")Ya(r,c)&&(h=h.concat(r.g.get(nn(r,c))));else for(r=Array.from(r.g.values()),c=0;c<r.length;c++)h=h.concat(r[c]);return h}n.set=function(r,c){return Dt(this),this.i=null,r=nn(this,r),Ya(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[c]),this.h+=1,this},n.get=function(r,c){return r?(r=Ja(this,r),r.length>0?String(r[0]):c):c};function Xa(r,c,h){Ka(r,c),h.length>0&&(r.i=null,r.g.set(nn(r,c),R(h)),r.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const T=Dn(h);h=Ja(this,h);for(let S=0;S<h.length;S++){let P=T;h[S]!==""&&(P+="="+Dn(h[S])),r.push(P)}}return this.i=r.join("&")};function Qa(r){const c=new Vn;return c.i=r.i,r.g&&(c.g=new Map(r.g),c.h=r.h),c}function nn(r,c){return c=String(c),r.j&&(c=c.toLowerCase()),c}function Yd(r,c){c&&!r.j&&(Dt(r),r.i=null,r.g.forEach(function(h,f){const T=f.toLowerCase();f!=T&&(Ka(this,f),Xa(this,T,h))},r)),r.j=c}function Jd(r,c){const h=new On;if(a.Image){const f=new Image;f.onload=m(ct,h,"TestLoadImage: loaded",!0,c,f),f.onerror=m(ct,h,"TestLoadImage: error",!1,c,f),f.onabort=m(ct,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(ct,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=r}else c(!1)}function Xd(r,c){const h=new On,f=new AbortController,T=setTimeout(()=>{f.abort(),ct(h,"TestPingServer: timeout",!1,c)},1e4);fetch(r,{signal:f.signal}).then(S=>{clearTimeout(T),S.ok?ct(h,"TestPingServer: ok",!0,c):ct(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),ct(h,"TestPingServer: error",!1,c)})}function ct(r,c,h,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(h)}catch{}}function Qd(){this.g=new Od}function Er(r){this.i=r.Sb||null,this.h=r.ab||!1}p(Er,ka),Er.prototype.g=function(){return new $i(this.i,this.h)};function $i(r,c){pe.call(this),this.H=r,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p($i,pe),n=$i.prototype,n.open=function(r,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=r,this.D=c,this.readyState=1,Bn(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};r&&(c.body=r),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},n.Pa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Za(this)}else r.text().then(this.Oa.bind(this),this.ga.bind(this))};function Za(r){r.j.read().then(r.Ma.bind(r)).catch(r.ga.bind(r))}n.Ma=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var c=r.value?r.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!r.done}))&&(this.response=this.responseText+=c)}r.done?Wn(this):Bn(this),this.readyState==3&&Za(this)}},n.Oa=function(r){this.g&&(this.response=this.responseText=r,Wn(this))},n.Na=function(r){this.g&&(this.response=r,Wn(this))},n.ga=function(){this.g&&Wn(this)};function Wn(r){r.readyState=4,r.l=null,r.j=null,r.B=null,Bn(r)}n.setRequestHeader=function(r,c){this.A.append(r,c)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,r.push(h[0]+": "+h[1]),h=c.next();return r.join(`\r
`)};function Bn(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function ec(r){let c="";return Vi(r,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Ir(r,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=ec(h),typeof r=="string"?h!=null&&Dn(h):K(r,c,h))}function Z(r){pe.call(this),this.headers=new Map,this.L=r||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Z,pe);var Zd=/^https?$/i,ef=["POST","PUT"];n=Z.prototype,n.Fa=function(r){this.H=r},n.ea=function(r,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);c=c?c.toUpperCase():"GET",this.D=r,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ma.g(),this.g.onreadystatechange=v(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(r),!0),this.B=!1}catch(S){tc(this,S);return}if(r=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)h.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())h.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),T=a.FormData&&r instanceof a.FormData,!(Array.prototype.indexOf.call(ef,c,void 0)>=0)||f||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,P]of h)this.g.setRequestHeader(S,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(r),this.v=!1}catch(S){tc(this,S)}};function tc(r,c){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=c,r.o=5,nc(r),Gi(r)}function nc(r){r.A||(r.A=!0,ge(r,"complete"),ge(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=r||7,ge(this,"complete"),ge(this,"abort"),Gi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gi(this,!0)),Z.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ic(this):this.Xa())},n.Xa=function(){ic(this)};function ic(r){if(r.h&&typeof o<"u"){if(r.v&&lt(r)==4)setTimeout(r.Ca.bind(r),0);else if(ge(r,"readystatechange"),lt(r)==4){r.h=!1;try{const S=r.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=S===0){let P=String(r.D).match(qa)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),f=!Zd.test(P?P.toLowerCase():"")}h=f}if(h)ge(r,"complete"),ge(r,"success");else{r.o=6;try{var T=lt(r)>2?r.g.statusText:""}catch{T=""}r.l=T+" ["+r.ca()+"]",nc(r)}}finally{Gi(r)}}}}function Gi(r,c){if(r.g){r.m&&(clearTimeout(r.m),r.m=null);const h=r.g;r.g=null,c||ge(r,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function lt(r){return r.g?r.g.readyState:0}n.ca=function(){try{return lt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(r){if(this.g){var c=this.g.responseText;return r&&c.indexOf(r)==0&&(c=c.substring(r.length)),Nd(c)}};function sc(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.F){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function tf(r){const c={};r=(r.g&&lt(r)>=2&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<r.length;f++){if(_(r[f]))continue;var h=Vd(r[f]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=c[T]||[];c[T]=S,S.push(h)}Sd(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(r,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[r]||c}function rc(r){this.za=0,this.i=[],this.j=new On,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Hn("failFast",!1,r),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Hn("baseRetryDelayMs",5e3,r),this.Za=Hn("retryDelaySeedMs",1e4,r),this.Ta=Hn("forwardChannelMaxRetries",2,r),this.va=Hn("forwardChannelRequestTimeoutMs",2e4,r),this.ma=r&&r.xmlHttpFactory||void 0,this.Ua=r&&r.Rb||void 0,this.Aa=r&&r.useFetchStreams||!1,this.O=void 0,this.L=r&&r.supportsCrossDomainXhr||!1,this.M="",this.h=new Ba(r&&r.concurrentRequestLimit),this.Ba=new Qd,this.S=r&&r.fastHandshake||!1,this.R=r&&r.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=r&&r.Pb||!1,r&&r.ua&&this.j.ua(),r&&r.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&r&&r.detectBufferingProxy||!1,this.ia=void 0,r&&r.longPollingTimeout&&r.longPollingTimeout>0&&(this.ia=r.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=rc.prototype,n.ka=8,n.I=1,n.connect=function(r,c,h,f){_e(0),this.W=r,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=pc(this,null,this.W),zi(this)};function wr(r){if(oc(r),r.I==3){var c=r.V++,h=Be(r.J);if(K(h,"SID",r.M),K(h,"RID",c),K(h,"TYPE","terminate"),jn(r,h),c=new ot(r,r.j,c),c.M=2,c.A=ji(Be(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=gc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Hi(c)}fc(r)}function qi(r){r.g&&(Cr(r),r.g.cancel(),r.g=null)}function oc(r){qi(r),r.v&&(a.clearTimeout(r.v),r.v=null),Ki(r),r.h.cancel(),r.m&&(typeof r.m=="number"&&a.clearTimeout(r.m),r.m=null)}function zi(r){if(!Ha(r.h)&&!r.m){r.m=!0;var c=r.Ea;Ae||g(),fe||(Ae(),fe=!0),I.add(c,r),r.D=0}}function nf(r,c){return ja(r.h)>=r.h.j-(r.m?1:0)?!1:r.m?(r.i=c.G.concat(r.i),!0):r.I==1||r.I==2||r.D>=(r.Sa?0:r.Ta)?!1:(r.m=Nn(d(r.Ea,r,c),dc(r,r.D)),r.D++,!0)}n.Ea=function(r){if(this.m)if(this.m=null,this.I==1){if(!r){this.V=Math.floor(Math.random()*1e5),r=this.V++;const T=new ot(this,this.j,r);let S=this.o;if(this.U&&(S?(S=Ea(S),wa(S,this.U)):S=this.U),this.u!==null||this.R||(T.J=S,S=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=cc(this,T,c),h=Be(this.J),K(h,"RID",r),K(h,"CVER",22),this.G&&K(h,"X-HTTP-Session-Id",this.G),jn(this,h),S&&(this.R?c="headers="+Dn(ec(S))+"&"+c:this.u&&Ir(h,this.u,S)),yr(this.h,T),this.Ra&&K(h,"TYPE","init"),this.S?(K(h,"$req",c),K(h,"SID","null"),T.U=!0,pr(T,h,null)):pr(T,h,c),this.I=2}}else this.I==3&&(r?ac(this,r):this.i.length==0||Ha(this.h)||ac(this))};function ac(r,c){var h;c?h=c.l:h=r.V++;const f=Be(r.J);K(f,"SID",r.M),K(f,"RID",h),K(f,"AID",r.K),jn(r,f),r.u&&r.o&&Ir(f,r.u,r.o),h=new ot(r,r.j,h,r.D+1),r.u===null&&(h.J=r.o),c&&(r.i=c.G.concat(r.i)),c=cc(r,h,1e3),h.H=Math.round(r.va*.5)+Math.round(r.va*.5*Math.random()),yr(r.h,h),pr(h,f,c)}function jn(r,c){r.H&&Vi(r.H,function(h,f){K(c,f,h)}),r.l&&Vi({},function(h,f){K(c,f,h)})}function cc(r,c,h){h=Math.min(r.i.length,h);const f=r.l?d(r.l.Ka,r.l,r):null;e:{var T=r.i;let L=-1;for(;;){const ie=["count="+h];L==-1?h>0?(L=T[0].g,ie.push("ofs="+L)):L=0:ie.push("ofs="+L);let $=!0;for(let ae=0;ae<h;ae++){var S=T[ae].g;const He=T[ae].map;if(S-=L,S<0)L=Math.max(0,T[ae].g-100),$=!1;else try{S="req"+S+"_"||"";try{var P=He instanceof Map?He:Object.entries(He);for(const[Mt,ht]of P){let ut=ht;l(ht)&&(ut=ar(ht)),ie.push(S+Mt+"="+encodeURIComponent(ut))}}catch(Mt){throw ie.push(S+"type="+encodeURIComponent("_badmap")),Mt}}catch{f&&f(He)}}if($){P=ie.join("&");break e}}P=void 0}return r=r.i.splice(0,h),c.G=r,P}function lc(r){if(!r.g&&!r.v){r.Y=1;var c=r.Da;Ae||g(),fe||(Ae(),fe=!0),I.add(c,r),r.A=0}}function Tr(r){return r.g||r.v||r.A>=3?!1:(r.Y++,r.v=Nn(d(r.Da,r),dc(r,r.A)),r.A++,!0)}n.Da=function(){if(this.v=null,hc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var r=4*this.T;this.j.info("BP detection timer enabled: "+r),this.B=Nn(d(this.Wa,this),r)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_e(10),qi(this),hc(this))};function Cr(r){r.B!=null&&(a.clearTimeout(r.B),r.B=null)}function hc(r){r.g=new ot(r,r.j,"rpc",r.Y),r.u===null&&(r.g.J=r.o),r.g.P=0;var c=Be(r.na);K(c,"RID","rpc"),K(c,"SID",r.M),K(c,"AID",r.K),K(c,"CI",r.F?"0":"1"),!r.F&&r.ia&&K(c,"TO",r.ia),K(c,"TYPE","xmlhttp"),jn(r,c),r.u&&r.o&&Ir(c,r.u,r.o),r.O&&(r.g.H=r.O);var h=r.g;r=r.ba,h.M=1,h.A=ji(Be(c)),h.u=null,h.R=!0,Ua(h,r)}n.Va=function(){this.C!=null&&(this.C=null,qi(this),Tr(this),_e(19))};function Ki(r){r.C!=null&&(a.clearTimeout(r.C),r.C=null)}function uc(r,c){var h=null;if(r.g==c){Ki(r),Cr(r),r.g=null;var f=2}else if(mr(r.h,c))h=c.G,$a(r.h,c),f=1;else return;if(r.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var T=r.D;f=hr(),ge(f,new La(f,h)),zi(r)}else lc(r);else if(T=c.m,T==3||T==0&&c.X>0||!(f==1&&nf(r,c)||f==2&&Tr(r)))switch(h&&h.length>0&&(c=r.h,c.i=c.i.concat(h)),T){case 1:Lt(r,5);break;case 4:Lt(r,10);break;case 3:Lt(r,6);break;default:Lt(r,2)}}}function dc(r,c){let h=r.Qa+Math.floor(Math.random()*r.Za);return r.isActive()||(h*=2),h*c}function Lt(r,c){if(r.j.info("Error code "+c),c==2){var h=d(r.bb,r),f=r.Ua;const T=!f;f=new at(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Mn(f,"https"),ji(f),T?Jd(f.toString(),h):Xd(f.toString(),h)}else _e(2);r.I=0,r.l&&r.l.pa(c),fc(r),oc(r)}n.bb=function(r){r?(this.j.info("Successfully pinged google.com"),_e(2)):(this.j.info("Failed to ping google.com"),_e(1))};function fc(r){if(r.I=0,r.ja=[],r.l){const c=Ga(r.h);(c.length!=0||r.i.length!=0)&&(b(r.ja,c),b(r.ja,r.i),r.h.i.length=0,R(r.i),r.i.length=0),r.l.oa()}}function pc(r,c,h){var f=h instanceof at?Be(h):new at(h);if(f.g!="")c&&(f.g=c+"."+f.g),xn(f,f.u);else{var T=a.location;f=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;const S=new at(null);f&&Mn(S,f),c&&(S.g=c),T&&xn(S,T),h&&(S.h=h),f=S}return h=r.G,c=r.wa,h&&c&&K(f,h,c),K(f,"VER",r.ka),jn(r,f),f}function gc(r,c,h){if(c&&!r.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=r.Aa&&!r.ma?new Z(new Er({ab:h})):new Z(r.ma),c.Fa(r.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _c(){}n=_c.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function be(r,c){pe.call(this),this.g=new rc(c),this.l=r,this.h=c&&c.messageUrlParams||null,r=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(r?r["X-WebChannel-Content-Type"]=c.messageContentType:r={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(r?r["X-WebChannel-Client-Profile"]=c.sa:r={"X-WebChannel-Client-Profile":c.sa}),this.g.U=r,(r=c&&c.Qb)&&!_(r)&&(this.g.u=r),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,r=this.h,r!==null&&c in r&&(r=this.h,c in r&&delete r[c])),this.j=new sn(this)}p(be,pe),be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},be.prototype.close=function(){wr(this.g)},be.prototype.o=function(r){var c=this.g;if(typeof r=="string"){var h={};h.__data__=r,r=h}else this.v&&(h={},h.__data__=ar(r),r=h);c.i.push(new Hd(c.Ya++,r)),c.I==3&&zi(c)},be.prototype.N=function(){this.g.l=null,delete this.j,wr(this.g),delete this.g,be.Z.N.call(this)};function mc(r){cr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var c=r.__sm__;if(c){e:{for(const h in c){r=h;break e}r=void 0}(this.i=r)&&(r=this.i,c=c!==null&&r in c?c[r]:void 0),this.data=c}else this.data=r}p(mc,cr);function yc(){lr.call(this),this.status=1}p(yc,lr);function sn(r){this.g=r}p(sn,_c),sn.prototype.ra=function(){ge(this.g,"a")},sn.prototype.qa=function(r){ge(this.g,new mc(r))},sn.prototype.pa=function(r){ge(this.g,new yc)},sn.prototype.oa=function(){ge(this.g,"b")},be.prototype.send=be.prototype.o,be.prototype.open=be.prototype.m,be.prototype.close=be.prototype.close,ur.NO_ERROR=0,ur.TIMEOUT=8,ur.HTTP_ERROR=6,Ud.COMPLETE="complete",Dd.EventType=Pn,Pn.OPEN="a",Pn.CLOSE="b",Pn.ERROR="c",Pn.MESSAGE="d",pe.prototype.listen=pe.prototype.J,Z.prototype.listenOnce=Z.prototype.K,Z.prototype.getLastError=Z.prototype.Ha,Z.prototype.getLastErrorCode=Z.prototype.ya,Z.prototype.getStatus=Z.prototype.ca,Z.prototype.getResponseJson=Z.prototype.La,Z.prototype.getResponseText=Z.prototype.la,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Fa}).apply(typeof es<"u"?es:typeof self<"u"?self:typeof window<"u"?window:{});const Ul="@firebase/firestore",Vl="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Us("@firebase/firestore");function Ue(n,...e){if(wn.logLevel<=H.DEBUG){const t=e.map(_a);wn.debug(`Firestore (${xi}): ${n}`,...t)}}function gd(n,...e){if(wn.logLevel<=H.ERROR){const t=e.map(_a);wn.error(`Firestore (${xi}): ${n}`,...t)}}function eI(n,...e){if(wn.logLevel<=H.WARN){const t=e.map(_a);wn.warn(`Firestore (${xi}): ${n}`,...t)}}function _a(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,_d(n,i,t)}function _d(n,e,t){let i=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw gd(i),new Error(i)}function ci(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||_d(e,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class W extends ze{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(me.UNAUTHENTICATED))}shutdown(){}}class nI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class iI{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ci(this.o===void 0,42304);let i=this.i;const s=u=>this.i!==i?(i=this.i,t(u)):Promise.resolve();let o=new li;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new li,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{Ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new li)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(Ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ci(typeof i.accessToken=="string",31837,{l:i}),new md(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ci(e===null||typeof e=="string",2055,{h:e}),new me(e)}}class sI{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=me.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rI{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new sI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ci(this.o===void 0,3512);const i=o=>{o.error!=null&&Ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,Ue("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{Ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):Ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ci(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Wl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=aI(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<t&&(i+=e.charAt(s[o]%62))}return i}}function At(n,e){return n<e?-1:n>e?1:0}function lI(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),o=e.charAt(i);if(s!==o)return jr(s)===jr(o)?At(s,o):jr(s)?1:-1}return At(n.length,e.length)}const hI=55296,uI=57343;function jr(n){const e=n.charCodeAt(0);return e>=hI&&e<=uI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="__name__";class je{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ii(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Ii(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return je.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof je?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const o=je.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return At(e.length,t.length)}static compareSegments(e,t){const i=je.isNumericId(e),s=je.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?je.extractNumericId(e).compare(je.extractNumericId(t)):lI(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ga.fromString(e.substring(4,e.length-2))}}class De extends je{construct(e,t,i){return new De(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new De(t)}static emptyPath(){return new De([])}}const dI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends je{construct(e,t,i){return new Ut(e,t,i)}static isValidIdentifier(e){return dI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bl}static keyField(){return new Ut([Bl])}static fromServerFormat(e){const t=[];let i="",s=0;const o=()=>{if(i.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(o(),s++)}if(o(),a)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(t)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.path=e}static fromPath(e){return new Bt(De.fromString(e))}static fromName(e){return new Bt(De.fromString(e).popFirst(5))}static empty(){return new Bt(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return De.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Bt(new De(e.slice()))}}function fI(n,e,t,i){if(e===!0&&i===!0)throw new W(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function gI(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ii(12329,{type:typeof n})}function _I(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=gI(n);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n,e){const t={typeString:n};return e&&(t.value=e),t}function Fi(n,e){if(!pI(n))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,o="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const a=n[i];if(s&&typeof a!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${i}' field to equal '${o.value}'`;break}}if(t)throw new W(V.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=-62135596800,jl=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*jl);return new $e(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hl)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jl}_compareTo(e){return this.seconds===e.seconds?At(this.nanoseconds,e.nanoseconds):At(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fi(e,$e._jsonSchema))return new $e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$e._jsonSchemaVersion="firestore/timestamp/1.0",$e._jsonSchema={type:ne("string",$e._jsonSchemaVersion),seconds:ne("number"),nanoseconds:ne("number")};function mI(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new yI("Invalid base64 string: "+o):o}}(e);return new Jt(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new Jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return At(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const go="(default)";class Ds{constructor(e,t){this.projectId=e,this.database=t||go}static empty(){return new Ds("","")}get isDefaultDatabase(){return this.database===go}isEqual(e){return e instanceof Ds&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,t=null,i=[],s=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function EI(n){return new vI(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $l,U;(U=$l||($l={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ga([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=1048576;function $r(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,t,i=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&Ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,i,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,o){const a=Date.now()+i,l=new ma(e,t,a,s,o);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Gl,ql;(ql=Gl||(Gl={})).Ma="default",ql.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="firestore.googleapis.com",Kl=!0;class Yl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yd,this.ssl=Kl}else this.host=e.host,this.ssl=e.ssl??Kl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=II;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wI)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CI(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vd{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new tI;switch(i.type){case"firstParty":return new rI(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=zl.get(t);i&&(Ue("ComponentProvider","Removing Datastore"),zl.delete(t),i.terminate())}(this),Promise.resolve()}}function SI(n,e,t,i={}){var d;n=_I(n,vd);const s=bt(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(Ls(`https://${l}`),Ms("Firestore",!0)),o.host!==yd&&o.host!==l&&eI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...o,host:l,ssl:s,emulatorOptions:i};if(!wt(u,a)&&(n._setSettings(u),i.mockUserToken)){let m,p;if(typeof i.mockUserToken=="string")m=i.mockUserToken,p=me.MOCK_USER;else{m=vo(i.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const v=i.mockUserToken.sub||i.mockUserToken.user_id;if(!v)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new me(v)}n._authCredentials=new nI(new md(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ya(this.firestore,e,this._query)}}class Ge{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new va(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Fi(t,Ge._jsonSchema))return new Ge(e,i||null,new Bt(De.fromString(t.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:ne("string",Ge._jsonSchemaVersion),referencePath:ne("string")};class va extends ya{constructor(e,t,i){super(e,t,EI(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new Bt(e))}withConverter(e){return new va(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="AsyncQueue";class Xl{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new TI(this,"async_queue_retry"),this._c=()=>{const i=$r();i&&Ue(Jl,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=$r();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=$r();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new li;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!mI(e))throw e;Ue(Jl,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(i=>{throw this.nc=i,this.rc=!1,gd("INTERNAL UNHANDLED ERROR: ",Ql(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ma.createAndSchedule(this,e,t,i,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&Ii(47125,{Pc:Ql(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ql(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class RI extends vd{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Xl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xl(e),this._firestoreClient=void 0,await e}}}function ew(n,e){const t=typeof n=="object"?n:Vs(),i=typeof n=="string"?n:go,s=Ci(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=yo("firestore");o&&SI(s,...o)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xe(Jt.fromBase64String(e))}catch(t){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xe(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fi(e,Xe._jsonSchema))return Xe.fromBase64String(e.bytes)}}Xe._jsonSchemaVersion="firestore/bytes/1.0",Xe._jsonSchema={type:ne("string",Xe._jsonSchemaVersion),bytes:ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return At(this._lat,e._lat)||At(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:jt._jsonSchemaVersion}}static fromJSON(e){if(Fi(e,jt._jsonSchema))return new jt(e.latitude,e.longitude)}}jt._jsonSchemaVersion="firestore/geoPoint/1.0",jt._jsonSchema={type:ne("string",jt._jsonSchemaVersion),latitude:ne("number"),longitude:ne("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:$t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fi(e,$t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new $t(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$t._jsonSchemaVersion="firestore/vectorValue/1.0",$t._jsonSchema={type:ne("string",$t._jsonSchemaVersion),vectorValues:ne("object")};const AI=new RegExp("[~\\*/\\[\\]]");function bI(n,e,t){if(e.search(AI)>=0)throw Zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Ed(...e.split("."))._internalPath}catch{throw Zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Zl(n,e,t,i,s){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new W(V.INVALID_ARGUMENT,o+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,i,s,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class PI extends Id{data(){return super.data()}}function wd(n,e){return typeof e=="string"?bI(n,e):e instanceof Ed?e._internalPath:e._delegate._internalPath}class ts{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dn extends Id{constructor(e,t,i,s,o,a){super(e,t,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new as(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(wd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=dn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}dn._jsonSchemaVersion="firestore/documentSnapshot/1.0",dn._jsonSchema={type:ne("string",dn._jsonSchemaVersion),bundleSource:ne("string","DocumentSnapshot"),bundleName:ne("string"),bundle:ne("string")};class as extends dn{data(e={}){return super.data(e)}}class hi{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ts(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new as(this._firestore,this._userDataWriter,i.key,i,new ts(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new as(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ts(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new as(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ts(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:kI(l.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=cI.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),i.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function kI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ii(61501,{type:n})}}hi._jsonSchemaVersion="firestore/querySnapshot/1.0",hi._jsonSchema={type:ne("string",hi._jsonSchemaVersion),bundleSource:ne("string","QuerySnapshot"),bundleName:ne("string"),bundle:ne("string")};(function(e,t=!0){(function(s){xi=s})(Pt),Tt(new nt("firestore",(i,{instanceIdentifier:s,options:o})=>{const a=i.getProvider("app").getImmediate(),l=new RI(new iI(i.getProvider("auth-internal")),new oI(a,i.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ds(d.options.projectId,m)}(a,s),a);return o={useFetchStreams:t,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ke(Ul,Vl,e),ke(Ul,Vl,"esm2020")})();export{YI as A,jI as B,nt as C,DI as D,Ti as E,ze as F,gt as G,UI as H,VI as I,MI as J,xI as K,Us as L,FI as M,LI as N,$m as O,zI as R,_t as T,Tt as _,Ci as a,vf as b,OI as c,Vs as d,wt as e,NI as f,oe as g,Dp as h,_f as i,WI as j,QI as k,ZI as l,ew as m,ft as n,Xf as o,pt as p,GI as q,ke as r,KI as s,BI as t,qI as u,Ef as v,HI as w,$I as x,XI as y,JI as z};
