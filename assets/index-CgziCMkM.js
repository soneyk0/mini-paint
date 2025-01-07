(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ue={},Ki=[],Nn=()=>{},YT=()=>!1,Jl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Hh=n=>n.startsWith("onUpdate:"),Mt=Object.assign,Gh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},XT=Object.prototype.hasOwnProperty,Oe=(n,e)=>XT.call(n,e),fe=Array.isArray,Qi=n=>Zl(n)==="[object Map]",g_=n=>Zl(n)==="[object Set]",ge=n=>typeof n=="function",st=n=>typeof n=="string",hs=n=>typeof n=="symbol",Ke=n=>n!==null&&typeof n=="object",m_=n=>(Ke(n)||ge(n))&&ge(n.then)&&ge(n.catch),__=Object.prototype.toString,Zl=n=>__.call(n),JT=n=>Zl(n).slice(8,-1),y_=n=>Zl(n)==="[object Object]",zh=n=>st(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ao=Wh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ec=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},ZT=/-(\w)/g,cn=ec(n=>n.replace(ZT,(e,t)=>t?t.toUpperCase():"")),ew=/\B([A-Z])/g,Ci=ec(n=>n.replace(ew,"-$1").toLowerCase()),tc=ec(n=>n.charAt(0).toUpperCase()+n.slice(1)),Zc=ec(n=>n?`on${tc(n)}`:""),ks=(n,e)=>!Object.is(n,e),za=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},v_=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},xu=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let hp;const nc=()=>hp||(hp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qo(n){if(fe(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],i=st(s)?iw(s):Qo(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(st(n)||Ke(n))return n}const tw=/;(?![^(]*\))/g,nw=/:([^]+)/,sw=/\/\*[^]*?\*\//g;function iw(n){const e={};return n.replace(sw,"").split(tw).forEach(t=>{if(t){const s=t.split(nw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Kh(n){let e="";if(st(n))e=n;else if(fe(n))for(let t=0;t<n.length;t++){const s=Kh(n[t]);s&&(e+=s+" ")}else if(Ke(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const rw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ow=Wh(rw);function E_(n){return!!n||n===""}const T_=n=>!!(n&&n.__v_isRef===!0),ci=n=>st(n)?n:n==null?"":fe(n)||Ke(n)&&(n.toString===__||!ge(n.toString))?T_(n)?ci(n.value):JSON.stringify(n,w_,2):String(n),w_=(n,e)=>T_(e)?w_(n,e.value):Qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,i],r)=>(t[eu(s,r)+" =>"]=i,t),{})}:g_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>eu(t))}:hs(e)?eu(e):Ke(e)&&!fe(e)&&!y_(e)?String(e):e,eu=(n,e="")=>{var t;return hs(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class aw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function lw(){return Yt}let $e;const tu=new WeakSet;class I_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tu.has(this)&&(tu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||A_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dp(this),R_(this);const e=$e,t=mn;$e=this,mn=!0;try{return this.fn()}finally{S_(this),$e=e,mn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xh(e);this.deps=this.depsTail=void 0,dp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Lu(this)&&this.run()}get dirty(){return Lu(this)}}let C_=0,lo,co;function A_(n,e=!1){if(n.flags|=8,e){n.next=co,co=n;return}n.next=lo,lo=n}function Qh(){C_++}function Yh(){if(--C_>0)return;if(co){let e=co;for(co=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;lo;){let e=lo;for(lo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function R_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function S_(n){let e,t=n.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),Xh(s),cw(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}n.deps=e,n.depsTail=t}function Lu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(b_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function b_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===So))return;n.globalVersion=So;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Lu(n)){n.flags&=-3;return}const t=$e,s=mn;$e=n,mn=!0;try{R_(n);const i=n.fn(n._value);(e.version===0||ks(i,n._value))&&(n._value=i,e.version++)}catch(i){throw e.version++,i}finally{$e=t,mn=s,S_(n),n.flags&=-3}}function Xh(n,e=!1){const{dep:t,prevSub:s,nextSub:i}=n;if(s&&(s.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Xh(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function cw(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let mn=!0;const P_=[];function Ws(){P_.push(mn),mn=!1}function Hs(){const n=P_.pop();mn=n===void 0?!0:n}function dp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=$e;$e=void 0;try{e()}finally{$e=t}}}let So=0;class uw{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!mn||$e===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==$e)t=this.activeLink=new uw($e,this),$e.deps?(t.prevDep=$e.depsTail,$e.depsTail.nextDep=t,$e.depsTail=t):$e.deps=$e.depsTail=t,k_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=$e.depsTail,t.nextDep=void 0,$e.depsTail.nextDep=t,$e.depsTail=t,$e.deps===t&&($e.deps=s)}return t}trigger(e){this.version++,So++,this.notify(e)}notify(e){Qh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Yh()}}}function k_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)k_(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Mu=new WeakMap,ui=Symbol(""),Vu=Symbol(""),bo=Symbol("");function St(n,e,t){if(mn&&$e){let s=Mu.get(n);s||Mu.set(n,s=new Map);let i=s.get(t);i||(s.set(t,i=new Jh),i.map=s,i.key=t),i.track()}}function Qn(n,e,t,s,i,r){const o=Mu.get(n);if(!o){So++;return}const a=c=>{c&&c.trigger()};if(Qh(),e==="clear")o.forEach(a);else{const c=fe(n),u=c&&zh(t);if(c&&t==="length"){const d=Number(s);o.forEach((f,g)=>{(g==="length"||g===bo||!hs(g)&&g>=d)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(bo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(ui)),Qi(n)&&a(o.get(Vu)));break;case"delete":c||(a(o.get(ui)),Qi(n)&&a(o.get(Vu)));break;case"set":Qi(n)&&a(o.get(ui));break}}Yh()}function Mi(n){const e=ye(n);return e===n?e:(St(e,"iterate",bo),an(n)?e:e.map(bt))}function sc(n){return St(n=ye(n),"iterate",bo),n}const hw={__proto__:null,[Symbol.iterator](){return nu(this,Symbol.iterator,bt)},concat(...n){return Mi(this).concat(...n.map(e=>fe(e)?Mi(e):e))},entries(){return nu(this,"entries",n=>(n[1]=bt(n[1]),n))},every(n,e){return Hn(this,"every",n,e,void 0,arguments)},filter(n,e){return Hn(this,"filter",n,e,t=>t.map(bt),arguments)},find(n,e){return Hn(this,"find",n,e,bt,arguments)},findIndex(n,e){return Hn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Hn(this,"findLast",n,e,bt,arguments)},findLastIndex(n,e){return Hn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Hn(this,"forEach",n,e,void 0,arguments)},includes(...n){return su(this,"includes",n)},indexOf(...n){return su(this,"indexOf",n)},join(n){return Mi(this).join(n)},lastIndexOf(...n){return su(this,"lastIndexOf",n)},map(n,e){return Hn(this,"map",n,e,void 0,arguments)},pop(){return Gr(this,"pop")},push(...n){return Gr(this,"push",n)},reduce(n,...e){return fp(this,"reduce",n,e)},reduceRight(n,...e){return fp(this,"reduceRight",n,e)},shift(){return Gr(this,"shift")},some(n,e){return Hn(this,"some",n,e,void 0,arguments)},splice(...n){return Gr(this,"splice",n)},toReversed(){return Mi(this).toReversed()},toSorted(n){return Mi(this).toSorted(n)},toSpliced(...n){return Mi(this).toSpliced(...n)},unshift(...n){return Gr(this,"unshift",n)},values(){return nu(this,"values",bt)}};function nu(n,e,t){const s=sc(n),i=s[e]();return s!==n&&!an(n)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=t(r.value)),r}),i}const dw=Array.prototype;function Hn(n,e,t,s,i,r){const o=sc(n),a=o!==n&&!an(n),c=o[e];if(c!==dw[e]){const f=c.apply(n,r);return a?bt(f):f}let u=t;o!==n&&(a?u=function(f,g){return t.call(this,bt(f),g,n)}:t.length>2&&(u=function(f,g){return t.call(this,f,g,n)}));const d=c.call(o,u,s);return a&&i?i(d):d}function fp(n,e,t,s){const i=sc(n);let r=t;return i!==n&&(an(n)?t.length>3&&(r=function(o,a,c){return t.call(this,o,a,c,n)}):r=function(o,a,c){return t.call(this,o,bt(a),c,n)}),i[e](r,...s)}function su(n,e,t){const s=ye(n);St(s,"iterate",bo);const i=s[e](...t);return(i===-1||i===!1)&&td(t[0])?(t[0]=ye(t[0]),s[e](...t)):i}function Gr(n,e,t=[]){Ws(),Qh();const s=ye(n)[e].apply(n,t);return Yh(),Hs(),s}const fw=Wh("__proto__,__v_isRef,__isVue"),N_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(hs));function pw(n){hs(n)||(n=String(n));const e=ye(this);return St(e,"has",n),e.hasOwnProperty(n)}class O_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return r;if(t==="__v_raw")return s===(i?r?Cw:M_:r?L_:x_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=fe(e);if(!i){let c;if(o&&(c=hw[t]))return c;if(t==="hasOwnProperty")return pw}const a=Reflect.get(e,t,Lt(e)?e:s);return(hs(t)?N_.has(t):fw(t))||(i||St(e,"get",t),r)?a:Lt(a)?o&&zh(t)?a:a.value:Ke(a)?i?F_(a):In(a):a}}class D_ extends O_{constructor(e=!1){super(!1,e)}set(e,t,s,i){let r=e[t];if(!this._isShallow){const c=di(r);if(!an(s)&&!di(s)&&(r=ye(r),s=ye(s)),!fe(e)&&Lt(r)&&!Lt(s))return c?!1:(r.value=s,!0)}const o=fe(e)&&zh(t)?Number(t)<e.length:Oe(e,t),a=Reflect.set(e,t,s,Lt(e)?e:i);return e===ye(i)&&(o?ks(s,r)&&Qn(e,"set",t,s):Qn(e,"add",t,s)),a}deleteProperty(e,t){const s=Oe(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&s&&Qn(e,"delete",t,void 0),i}has(e,t){const s=Reflect.has(e,t);return(!hs(t)||!N_.has(t))&&St(e,"has",t),s}ownKeys(e){return St(e,"iterate",fe(e)?"length":ui),Reflect.ownKeys(e)}}class gw extends O_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const mw=new D_,_w=new gw,yw=new D_(!0);const Fu=n=>n,Da=n=>Reflect.getPrototypeOf(n);function vw(n,e,t){return function(...s){const i=this.__v_raw,r=ye(i),o=Qi(r),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=i[n](...s),d=t?Fu:e?Uu:bt;return!e&&St(r,"iterate",c?Vu:ui),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:a?[d(f[0]),d(f[1])]:d(f),done:g}},[Symbol.iterator](){return this}}}}function xa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ew(n,e){const t={get(i){const r=this.__v_raw,o=ye(r),a=ye(i);n||(ks(i,a)&&St(o,"get",i),St(o,"get",a));const{has:c}=Da(o),u=e?Fu:n?Uu:bt;if(c.call(o,i))return u(r.get(i));if(c.call(o,a))return u(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!n&&St(ye(i),"iterate",ui),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=ye(r),a=ye(i);return n||(ks(i,a)&&St(o,"has",i),St(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,c=ye(a),u=e?Fu:n?Uu:bt;return!n&&St(c,"iterate",ui),a.forEach((d,f)=>i.call(r,u(d),u(f),o))}};return Mt(t,n?{add:xa("add"),set:xa("set"),delete:xa("delete"),clear:xa("clear")}:{add(i){!e&&!an(i)&&!di(i)&&(i=ye(i));const r=ye(this);return Da(r).has.call(r,i)||(r.add(i),Qn(r,"add",i,i)),this},set(i,r){!e&&!an(r)&&!di(r)&&(r=ye(r));const o=ye(this),{has:a,get:c}=Da(o);let u=a.call(o,i);u||(i=ye(i),u=a.call(o,i));const d=c.call(o,i);return o.set(i,r),u?ks(r,d)&&Qn(o,"set",i,r):Qn(o,"add",i,r),this},delete(i){const r=ye(this),{has:o,get:a}=Da(r);let c=o.call(r,i);c||(i=ye(i),c=o.call(r,i)),a&&a.call(r,i);const u=r.delete(i);return c&&Qn(r,"delete",i,void 0),u},clear(){const i=ye(this),r=i.size!==0,o=i.clear();return r&&Qn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=vw(i,n,e)}),t}function Zh(n,e){const t=Ew(n,e);return(s,i,r)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?s:Reflect.get(Oe(t,i)&&i in s?t:s,i,r)}const Tw={get:Zh(!1,!1)},ww={get:Zh(!1,!0)},Iw={get:Zh(!0,!1)};const x_=new WeakMap,L_=new WeakMap,M_=new WeakMap,Cw=new WeakMap;function Aw(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rw(n){return n.__v_skip||!Object.isExtensible(n)?0:Aw(JT(n))}function In(n){return di(n)?n:ed(n,!1,mw,Tw,x_)}function V_(n){return ed(n,!1,yw,ww,L_)}function F_(n){return ed(n,!0,_w,Iw,M_)}function ed(n,e,t,s,i){if(!Ke(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=i.get(n);if(r)return r;const o=Rw(n);if(o===0)return n;const a=new Proxy(n,o===2?s:t);return i.set(n,a),a}function Yi(n){return di(n)?Yi(n.__v_raw):!!(n&&n.__v_isReactive)}function di(n){return!!(n&&n.__v_isReadonly)}function an(n){return!!(n&&n.__v_isShallow)}function td(n){return n?!!n.__v_raw:!1}function ye(n){const e=n&&n.__v_raw;return e?ye(e):n}function Sw(n){return!Oe(n,"__v_skip")&&Object.isExtensible(n)&&v_(n,"__v_skip",!0),n}const bt=n=>Ke(n)?In(n):n,Uu=n=>Ke(n)?F_(n):n;function Lt(n){return n?n.__v_isRef===!0:!1}function He(n){return U_(n,!1)}function bw(n){return U_(n,!0)}function U_(n,e){return Lt(n)?n:new Pw(n,e)}class Pw{constructor(e,t){this.dep=new Jh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ye(e),this._value=t?e:bt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||an(e)||di(e);e=s?e:ye(e),ks(e,t)&&(this._rawValue=e,this._value=s?e:bt(e),this.dep.trigger())}}function ts(n){return Lt(n)?n.value:n}const kw={get:(n,e,t)=>e==="__v_raw"?n:ts(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const i=n[e];return Lt(i)&&!Lt(t)?(i.value=t,!0):Reflect.set(n,e,t,s)}};function B_(n){return Yi(n)?n:new Proxy(n,kw)}class Nw{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Jh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=So-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return A_(this,!0),!0}get value(){const e=this.dep.track();return b_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ow(n,e,t=!1){let s,i;return ge(n)?s=n:(s=n.get,i=n.set),new Nw(s,i,t)}const La={},fl=new WeakMap;let si;function Dw(n,e=!1,t=si){if(t){let s=fl.get(t);s||fl.set(t,s=[]),s.push(n)}}function xw(n,e,t=Ue){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:c}=t,u=F=>i?F:an(F)||i===!1||i===0?Yn(F,1):Yn(F);let d,f,g,_,A=!1,N=!1;if(Lt(n)?(f=()=>n.value,A=an(n)):Yi(n)?(f=()=>u(n),A=!0):fe(n)?(N=!0,A=n.some(F=>Yi(F)||an(F)),f=()=>n.map(F=>{if(Lt(F))return F.value;if(Yi(F))return u(F);if(ge(F))return c?c(F,2):F()})):ge(n)?e?f=c?()=>c(n,2):n:f=()=>{if(g){Ws();try{g()}finally{Hs()}}const F=si;si=d;try{return c?c(n,3,[_]):n(_)}finally{si=F}}:f=Nn,e&&i){const F=f,se=i===!0?1/0:i;f=()=>Yn(F(),se)}const k=lw(),x=()=>{d.stop(),k&&k.active&&Gh(k.effects,d)};if(r&&e){const F=e;e=(...se)=>{F(...se),x()}}let D=N?new Array(n.length).fill(La):La;const V=F=>{if(!(!(d.flags&1)||!d.dirty&&!F))if(e){const se=d.run();if(i||A||(N?se.some((X,v)=>ks(X,D[v])):ks(se,D))){g&&g();const X=si;si=d;try{const v=[se,D===La?void 0:N&&D[0]===La?[]:D,_];c?c(e,3,v):e(...v),D=se}finally{si=X}}}else d.run()};return a&&a(V),d=new I_(f),d.scheduler=o?()=>o(V,!1):V,_=F=>Dw(F,!1,d),g=d.onStop=()=>{const F=fl.get(d);if(F){if(c)c(F,4);else for(const se of F)se();fl.delete(d)}},e?s?V(!0):D=d.run():o?o(V.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function Yn(n,e=1/0,t){if(e<=0||!Ke(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Lt(n))Yn(n.value,e,t);else if(fe(n))for(let s=0;s<n.length;s++)Yn(n[s],e,t);else if(g_(n)||Qi(n))n.forEach(s=>{Yn(s,e,t)});else if(y_(n)){for(const s in n)Yn(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Yn(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yo(n,e,t,s){try{return s?n(...s):n()}catch(i){ic(i,e,t)}}function Mn(n,e,t,s){if(ge(n)){const i=Yo(n,e,t,s);return i&&m_(i)&&i.catch(r=>{ic(r,e,t)}),i}if(fe(n)){const i=[];for(let r=0;r<n.length;r++)i.push(Mn(n[r],e,t,s));return i}}function ic(n,e,t,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ue;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const d=a.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](n,c,u)===!1)return}a=a.parent}if(r){Ws(),Yo(r,null,10,[n,c,u]),Hs();return}}Lw(n,t,i,s,o)}function Lw(n,e,t,s=!0,i=!1){if(i)throw n;console.error(n)}const qt=[];let Rn=-1;const Xi=[];let ws=null,Vi=0;const $_=Promise.resolve();let pl=null;function Xo(n){const e=pl||$_;return n?e.then(this?n.bind(this):n):e}function Mw(n){let e=Rn+1,t=qt.length;for(;e<t;){const s=e+t>>>1,i=qt[s],r=Po(i);r<n||r===n&&i.flags&2?e=s+1:t=s}return e}function nd(n){if(!(n.flags&1)){const e=Po(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=Po(t)?qt.push(n):qt.splice(Mw(e),0,n),n.flags|=1,q_()}}function q_(){pl||(pl=$_.then(W_))}function Vw(n){fe(n)?Xi.push(...n):ws&&n.id===-1?ws.splice(Vi+1,0,n):n.flags&1||(Xi.push(n),n.flags|=1),q_()}function pp(n,e,t=Rn+1){for(;t<qt.length;t++){const s=qt[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;qt.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function j_(n){if(Xi.length){const e=[...new Set(Xi)].sort((t,s)=>Po(t)-Po(s));if(Xi.length=0,ws){ws.push(...e);return}for(ws=e,Vi=0;Vi<ws.length;Vi++){const t=ws[Vi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ws=null,Vi=0}}const Po=n=>n.id==null?n.flags&2?-1:1/0:n.id;function W_(n){try{for(Rn=0;Rn<qt.length;Rn++){const e=qt[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Yo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<qt.length;Rn++){const e=qt[Rn];e&&(e.flags&=-2)}Rn=-1,qt.length=0,j_(),pl=null,(qt.length||Xi.length)&&W_()}}let yt=null,H_=null;function gl(n){const e=yt;return yt=n,H_=n&&n.type.__scopeId||null,e}function ns(n,e=yt,t){if(!e||n._n)return n;const s=(...i)=>{s._d&&Ap(-1);const r=gl(e);let o;try{o=n(...i)}finally{gl(r),s._d&&Ap(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function uo(n,e){if(yt===null)return n;const t=cc(yt),s=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,c=Ue]=e[i];r&&(ge(r)&&(r={mounted:r,updated:r}),r.deep&&Yn(o),s.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function ti(n,e,t,s){const i=n.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Ws(),Mn(c,t,8,[n.el,a,n,e]),Hs())}}const Fw=Symbol("_vte"),Uw=n=>n.__isTeleport;function sd(n,e){n.shapeFlag&6&&n.component?(n.transition=e,sd(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function zt(n,e){return ge(n)?Mt({name:n.name},e,{setup:n}):n}function G_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ml(n,e,t,s,i=!1){if(fe(n)){n.forEach((A,N)=>ml(A,e&&(fe(e)?e[N]:e),t,s,i));return}if(Ji(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ml(n,e,t,s.component.subTree);return}const r=s.shapeFlag&4?cc(s.component):s.el,o=i?null:r,{i:a,r:c}=n,u=e&&e.r,d=a.refs===Ue?a.refs={}:a.refs,f=a.setupState,g=ye(f),_=f===Ue?()=>!1:A=>Oe(g,A);if(u!=null&&u!==c&&(st(u)?(d[u]=null,_(u)&&(f[u]=null)):Lt(u)&&(u.value=null)),ge(c))Yo(c,a,12,[o,d]);else{const A=st(c),N=Lt(c);if(A||N){const k=()=>{if(n.f){const x=A?_(c)?f[c]:d[c]:c.value;i?fe(x)&&Gh(x,r):fe(x)?x.includes(r)||x.push(r):A?(d[c]=[r],_(c)&&(f[c]=d[c])):(c.value=[r],n.k&&(d[n.k]=c.value))}else A?(d[c]=o,_(c)&&(f[c]=o)):N&&(c.value=o,n.k&&(d[n.k]=o))};o?(k.id=-1,Qt(k,t)):k()}}}nc().requestIdleCallback;nc().cancelIdleCallback;const Ji=n=>!!n.type.__asyncLoader,z_=n=>n.type.__isKeepAlive;function Bw(n,e){K_(n,"a",e)}function $w(n,e){K_(n,"da",e)}function K_(n,e,t=Dt){const s=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(rc(e,s,t),t){let i=t.parent;for(;i&&i.parent;)z_(i.parent.vnode)&&qw(s,e,t,i),i=i.parent}}function qw(n,e,t,s){const i=rc(e,n,s,!0);oc(()=>{Gh(s[e],i)},t)}function rc(n,e,t=Dt,s=!1){if(t){const i=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ws();const a=Zo(t),c=Mn(e,t,n,o);return a(),Hs(),c});return s?i.unshift(r):i.push(r),r}}const ds=n=>(e,t=Dt)=>{(!Oo||n==="sp")&&rc(n,(...s)=>e(...s),t)},jw=ds("bm"),Jo=ds("m"),Ww=ds("bu"),Hw=ds("u"),Q_=ds("bum"),oc=ds("um"),Gw=ds("sp"),zw=ds("rtg"),Kw=ds("rtc");function Qw(n,e=Dt){rc("ec",n,e)}const Yw="components";function id(n,e){return Jw(Yw,n,!0,e)||n}const Xw=Symbol.for("v-ndc");function Jw(n,e,t=!0,s=!1){const i=yt||Dt;if(i){const r=i.type;{const a=VI(r,!1);if(a&&(a===e||a===cn(e)||a===tc(cn(e))))return r}const o=gp(i[n]||r[n],e)||gp(i.appContext[n],e);return!o&&s?r:o}}function gp(n,e){return n&&(n[e]||n[cn(e)]||n[tc(cn(e))])}function mp(n,e,t,s){let i;const r=t,o=fe(n);if(o||st(n)){const a=o&&Yi(n);let c=!1;a&&(c=!an(n),n=sc(n)),i=new Array(n.length);for(let u=0,d=n.length;u<d;u++)i[u]=e(c?bt(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){i=new Array(n);for(let a=0;a<n;a++)i[a]=e(a+1,a,void 0,r)}else if(Ke(n))if(n[Symbol.iterator])i=Array.from(n,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(n);i=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const d=a[c];i[c]=e(n[d],d,c,r)}}else i=[];return i}function Bu(n,e,t={},s,i){if(yt.ce||yt.parent&&Ji(yt.parent)&&yt.parent.ce)return e!=="default"&&(t.name=e),tt(),No(Pt,null,[he("slot",t,s)],64);let r=n[e];r&&r._c&&(r._d=!1),tt();const o=r&&Y_(r(t)),a=t.key||o&&o.key,c=No(Pt,{key:(a&&!hs(a)?a:`_${e}`)+""},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),c}function Y_(n){return n.some(e=>fi(e)?!(e.type===Vs||e.type===Pt&&!Y_(e.children)):!0)?n:null}const $u=n=>n?m0(n)?cc(n):$u(n.parent):null,ho=Mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$u(n.parent),$root:n=>$u(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>J_(n),$forceUpdate:n=>n.f||(n.f=()=>{nd(n.update)}),$nextTick:n=>n.n||(n.n=Xo.bind(n.proxy)),$watch:n=>vI.bind(n)}),iu=(n,e)=>n!==Ue&&!n.__isScriptSetup&&Oe(n,e),Zw={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return t[e];case 3:return r[e]}else{if(iu(s,e))return o[e]=1,s[e];if(i!==Ue&&Oe(i,e))return o[e]=2,i[e];if((u=n.propsOptions[0])&&Oe(u,e))return o[e]=3,r[e];if(t!==Ue&&Oe(t,e))return o[e]=4,t[e];qu&&(o[e]=0)}}const d=ho[e];let f,g;if(d)return e==="$attrs"&&St(n.attrs,"get",""),d(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Ue&&Oe(t,e))return o[e]=4,t[e];if(g=c.config.globalProperties,Oe(g,e))return g[e]},set({_:n},e,t){const{data:s,setupState:i,ctx:r}=n;return iu(i,e)?(i[e]=t,!0):s!==Ue&&Oe(s,e)?(s[e]=t,!0):Oe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!t[o]||n!==Ue&&Oe(n,o)||iu(e,o)||(a=r[0])&&Oe(a,o)||Oe(s,o)||Oe(ho,o)||Oe(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Oe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _p(n){return fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let qu=!0;function eI(n){const e=J_(n),t=n.proxy,s=n.ctx;qu=!1,e.beforeCreate&&yp(e.beforeCreate,n,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:u,created:d,beforeMount:f,mounted:g,beforeUpdate:_,updated:A,activated:N,deactivated:k,beforeDestroy:x,beforeUnmount:D,destroyed:V,unmounted:F,render:se,renderTracked:X,renderTriggered:v,errorCaptured:y,serverPrefetch:T,expose:C,inheritAttrs:R,components:b,directives:I,filters:ht}=e;if(u&&tI(u,s,null),o)for(const ve in o){const me=o[ve];ge(me)&&(s[ve]=me.bind(t))}if(i){const ve=i.call(t,t);Ke(ve)&&(n.data=In(ve))}if(qu=!0,r)for(const ve in r){const me=r[ve],Et=ge(me)?me.bind(t,t):ge(me.get)?me.get.bind(t,t):Nn,hn=!ge(me)&&ge(me.set)?me.set.bind(t):Nn,tn=Me({get:Et,set:hn});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Ye=>tn.value=Ye})}if(a)for(const ve in a)X_(a[ve],s,t,ve);if(c){const ve=ge(c)?c.call(t):c;Reflect.ownKeys(ve).forEach(me=>{Ka(me,ve[me])})}d&&yp(d,n,"c");function Be(ve,me){fe(me)?me.forEach(Et=>ve(Et.bind(t))):me&&ve(me.bind(t))}if(Be(jw,f),Be(Jo,g),Be(Ww,_),Be(Hw,A),Be(Bw,N),Be($w,k),Be(Qw,y),Be(Kw,X),Be(zw,v),Be(Q_,D),Be(oc,F),Be(Gw,T),fe(C))if(C.length){const ve=n.exposed||(n.exposed={});C.forEach(me=>{Object.defineProperty(ve,me,{get:()=>t[me],set:Et=>t[me]=Et})})}else n.exposed||(n.exposed={});se&&n.render===Nn&&(n.render=se),R!=null&&(n.inheritAttrs=R),b&&(n.components=b),I&&(n.directives=I),T&&G_(n)}function tI(n,e,t=Nn){fe(n)&&(n=ju(n));for(const s in n){const i=n[s];let r;Ke(i)?"default"in i?r=ss(i.from||s,i.default,!0):r=ss(i.from||s):r=ss(i),Lt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function yp(n,e,t){Mn(fe(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function X_(n,e,t,s){let i=s.includes(".")?h0(t,s):()=>t[s];if(st(n)){const r=e[n];ge(r)&&Ya(i,r)}else if(ge(n))Ya(i,n.bind(t));else if(Ke(n))if(fe(n))n.forEach(r=>X_(r,e,t,s));else{const r=ge(n.handler)?n.handler.bind(t):e[n.handler];ge(r)&&Ya(i,r,n)}}function J_(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!t&&!s?c=e:(c={},i.length&&i.forEach(u=>_l(c,u,o,!0)),_l(c,e,o)),Ke(e)&&r.set(e,c),c}function _l(n,e,t,s=!1){const{mixins:i,extends:r}=e;r&&_l(n,r,t,!0),i&&i.forEach(o=>_l(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const a=nI[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const nI={data:vp,props:Ep,emits:Ep,methods:eo,computed:eo,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:eo,directives:eo,watch:iI,provide:vp,inject:sI};function vp(n,e){return e?n?function(){return Mt(ge(n)?n.call(this,this):n,ge(e)?e.call(this,this):e)}:e:n}function sI(n,e){return eo(ju(n),ju(e))}function ju(n){if(fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Bt(n,e){return n?[...new Set([].concat(n,e))]:e}function eo(n,e){return n?Mt(Object.create(null),n,e):e}function Ep(n,e){return n?fe(n)&&fe(e)?[...new Set([...n,...e])]:Mt(Object.create(null),_p(n),_p(e??{})):e}function iI(n,e){if(!n)return e;if(!e)return n;const t=Mt(Object.create(null),n);for(const s in e)t[s]=Bt(n[s],e[s]);return t}function Z_(){return{app:null,config:{isNativeTag:YT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rI=0;function oI(n,e){return function(s,i=null){ge(s)||(s=Mt({},s)),i!=null&&!Ke(i)&&(i=null);const r=Z_(),o=new WeakSet,a=[];let c=!1;const u=r.app={_uid:rI++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:UI,get config(){return r.config},set config(d){},use(d,...f){return o.has(d)||(d&&ge(d.install)?(o.add(d),d.install(u,...f)):ge(d)&&(o.add(d),d(u,...f))),u},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),u},component(d,f){return f?(r.components[d]=f,u):r.components[d]},directive(d,f){return f?(r.directives[d]=f,u):r.directives[d]},mount(d,f,g){if(!c){const _=u._ceVNode||he(s,i);return _.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),n(_,d,g),c=!0,u._container=d,d.__vue_app__=u,cc(_.component)}},onUnmount(d){a.push(d)},unmount(){c&&(Mn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(d,f){return r.provides[d]=f,u},runWithContext(d){const f=Zi;Zi=u;try{return d()}finally{Zi=f}}};return u}}let Zi=null;function Ka(n,e){if(Dt){let t=Dt.provides;const s=Dt.parent&&Dt.parent.provides;s===t&&(t=Dt.provides=Object.create(s)),t[n]=e}}function ss(n,e,t=!1){const s=Dt||yt;if(s||Zi){const i=Zi?Zi._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&ge(e)?e.call(s&&s.proxy):e}}const e0={},t0=()=>Object.create(e0),n0=n=>Object.getPrototypeOf(n)===e0;function aI(n,e,t,s=!1){const i={},r=t0();n.propsDefaults=Object.create(null),s0(n,e,i,r);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=s?i:V_(i):n.type.props?n.props=i:n.props=r,n.attrs=r}function lI(n,e,t,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=n,a=ye(i),[c]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let f=0;f<d.length;f++){let g=d[f];if(ac(n.emitsOptions,g))continue;const _=e[g];if(c)if(Oe(r,g))_!==r[g]&&(r[g]=_,u=!0);else{const A=cn(g);i[A]=Wu(c,a,A,_,n,!1)}else _!==r[g]&&(r[g]=_,u=!0)}}}else{s0(n,e,i,r)&&(u=!0);let d;for(const f in a)(!e||!Oe(e,f)&&((d=Ci(f))===f||!Oe(e,d)))&&(c?t&&(t[f]!==void 0||t[d]!==void 0)&&(i[f]=Wu(c,a,f,void 0,n,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!Oe(e,f))&&(delete r[f],u=!0)}u&&Qn(n.attrs,"set","")}function s0(n,e,t,s){const[i,r]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(ao(c))continue;const u=e[c];let d;i&&Oe(i,d=cn(c))?!r||!r.includes(d)?t[d]=u:(a||(a={}))[d]=u:ac(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=ye(t),u=a||Ue;for(let d=0;d<r.length;d++){const f=r[d];t[f]=Wu(i,c,f,u[f],n,!Oe(u,f))}}return o}function Wu(n,e,t,s,i,r){const o=n[t];if(o!=null){const a=Oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=i;if(t in u)s=u[t];else{const d=Zo(i);s=u[t]=c.call(null,e),d()}}else s=c;i.ce&&i.ce._setProp(t,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ci(t))&&(s=!0))}return s}const cI=new WeakMap;function i0(n,e,t=!1){const s=t?cI:e.propsCache,i=s.get(n);if(i)return i;const r=n.props,o={},a=[];let c=!1;if(!ge(n)){const d=f=>{c=!0;const[g,_]=i0(f,e,!0);Mt(o,g),_&&a.push(..._)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!r&&!c)return Ke(n)&&s.set(n,Ki),Ki;if(fe(r))for(let d=0;d<r.length;d++){const f=cn(r[d]);Tp(f)&&(o[f]=Ue)}else if(r)for(const d in r){const f=cn(d);if(Tp(f)){const g=r[d],_=o[f]=fe(g)||ge(g)?{type:g}:Mt({},g),A=_.type;let N=!1,k=!0;if(fe(A))for(let x=0;x<A.length;++x){const D=A[x],V=ge(D)&&D.name;if(V==="Boolean"){N=!0;break}else V==="String"&&(k=!1)}else N=ge(A)&&A.name==="Boolean";_[0]=N,_[1]=k,(N||Oe(_,"default"))&&a.push(f)}}const u=[o,a];return Ke(n)&&s.set(n,u),u}function Tp(n){return n[0]!=="$"&&!ao(n)}const r0=n=>n[0]==="_"||n==="$stable",rd=n=>fe(n)?n.map(Sn):[Sn(n)],uI=(n,e,t)=>{if(e._n)return e;const s=ns((...i)=>rd(e(...i)),t);return s._c=!1,s},o0=(n,e,t)=>{const s=n._ctx;for(const i in n){if(r0(i))continue;const r=n[i];if(ge(r))e[i]=uI(i,r,s);else if(r!=null){const o=rd(r);e[i]=()=>o}}},a0=(n,e)=>{const t=rd(e);n.slots.default=()=>t},l0=(n,e,t)=>{for(const s in e)(t||s!=="_")&&(n[s]=e[s])},hI=(n,e,t)=>{const s=n.slots=t0();if(n.vnode.shapeFlag&32){const i=e._;i?(l0(s,e,t),t&&v_(s,"_",i,!0)):o0(e,s)}else e&&a0(n,e)},dI=(n,e,t)=>{const{vnode:s,slots:i}=n;let r=!0,o=Ue;if(s.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:l0(i,e,t):(r=!e.$stable,o0(e,i)),o=e}else e&&(a0(n,e),o={default:1});if(r)for(const a in i)!r0(a)&&o[a]==null&&delete i[a]},Qt=RI;function fI(n){return pI(n)}function pI(n,e){const t=nc();t.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:g,setScopeId:_=Nn,insertStaticContent:A}=n,N=(E,w,S,M=null,$=null,U=null,z=void 0,H=null,W=!!w.dynamicChildren)=>{if(E===w)return;E&&!zr(E,w)&&(M=L(E),Ye(E,$,U,!0),E=null),w.patchFlag===-2&&(W=!1,w.dynamicChildren=null);const{type:j,ref:oe,shapeFlag:Y}=w;switch(j){case lc:k(E,w,S,M);break;case Vs:x(E,w,S,M);break;case ou:E==null&&D(w,S,M,z);break;case Pt:b(E,w,S,M,$,U,z,H,W);break;default:Y&1?se(E,w,S,M,$,U,z,H,W):Y&6?I(E,w,S,M,$,U,z,H,W):(Y&64||Y&128)&&j.process(E,w,S,M,$,U,z,H,W,te)}oe!=null&&$&&ml(oe,E&&E.ref,U,w||E,!w)},k=(E,w,S,M)=>{if(E==null)s(w.el=a(w.children),S,M);else{const $=w.el=E.el;w.children!==E.children&&u($,w.children)}},x=(E,w,S,M)=>{E==null?s(w.el=c(w.children||""),S,M):w.el=E.el},D=(E,w,S,M)=>{[E.el,E.anchor]=A(E.children,w,S,M,E.el,E.anchor)},V=({el:E,anchor:w},S,M)=>{let $;for(;E&&E!==w;)$=g(E),s(E,S,M),E=$;s(w,S,M)},F=({el:E,anchor:w})=>{let S;for(;E&&E!==w;)S=g(E),i(E),E=S;i(w)},se=(E,w,S,M,$,U,z,H,W)=>{w.type==="svg"?z="svg":w.type==="math"&&(z="mathml"),E==null?X(w,S,M,$,U,z,H,W):T(E,w,$,U,z,H,W)},X=(E,w,S,M,$,U,z,H)=>{let W,j;const{props:oe,shapeFlag:Y,transition:ne,dirs:le}=E;if(W=E.el=o(E.type,U,oe&&oe.is,oe),Y&8?d(W,E.children):Y&16&&y(E.children,W,null,M,$,ru(E,U),z,H),le&&ti(E,null,M,"created"),v(W,E,E.scopeId,z,M),oe){for(const _e in oe)_e!=="value"&&!ao(_e)&&r(W,_e,null,oe[_e],U,M);"value"in oe&&r(W,"value",null,oe.value,U),(j=oe.onVnodeBeforeMount)&&An(j,M,E)}le&&ti(E,null,M,"beforeMount");const ae=gI($,ne);ae&&ne.beforeEnter(W),s(W,w,S),((j=oe&&oe.onVnodeMounted)||ae||le)&&Qt(()=>{j&&An(j,M,E),ae&&ne.enter(W),le&&ti(E,null,M,"mounted")},$)},v=(E,w,S,M,$)=>{if(S&&_(E,S),M)for(let U=0;U<M.length;U++)_(E,M[U]);if($){let U=$.subTree;if(w===U||f0(U.type)&&(U.ssContent===w||U.ssFallback===w)){const z=$.vnode;v(E,z,z.scopeId,z.slotScopeIds,$.parent)}}},y=(E,w,S,M,$,U,z,H,W=0)=>{for(let j=W;j<E.length;j++){const oe=E[j]=H?Is(E[j]):Sn(E[j]);N(null,oe,w,S,M,$,U,z,H)}},T=(E,w,S,M,$,U,z)=>{const H=w.el=E.el;let{patchFlag:W,dynamicChildren:j,dirs:oe}=w;W|=E.patchFlag&16;const Y=E.props||Ue,ne=w.props||Ue;let le;if(S&&ni(S,!1),(le=ne.onVnodeBeforeUpdate)&&An(le,S,w,E),oe&&ti(w,E,S,"beforeUpdate"),S&&ni(S,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&d(H,""),j?C(E.dynamicChildren,j,H,S,M,ru(w,$),U):z||me(E,w,H,null,S,M,ru(w,$),U,!1),W>0){if(W&16)R(H,Y,ne,S,$);else if(W&2&&Y.class!==ne.class&&r(H,"class",null,ne.class,$),W&4&&r(H,"style",Y.style,ne.style,$),W&8){const ae=w.dynamicProps;for(let _e=0;_e<ae.length;_e++){const Ce=ae[_e],Tt=Y[Ce],dt=ne[Ce];(dt!==Tt||Ce==="value")&&r(H,Ce,Tt,dt,$,S)}}W&1&&E.children!==w.children&&d(H,w.children)}else!z&&j==null&&R(H,Y,ne,S,$);((le=ne.onVnodeUpdated)||oe)&&Qt(()=>{le&&An(le,S,w,E),oe&&ti(w,E,S,"updated")},M)},C=(E,w,S,M,$,U,z)=>{for(let H=0;H<w.length;H++){const W=E[H],j=w[H],oe=W.el&&(W.type===Pt||!zr(W,j)||W.shapeFlag&70)?f(W.el):S;N(W,j,oe,null,M,$,U,z,!0)}},R=(E,w,S,M,$)=>{if(w!==S){if(w!==Ue)for(const U in w)!ao(U)&&!(U in S)&&r(E,U,w[U],null,$,M);for(const U in S){if(ao(U))continue;const z=S[U],H=w[U];z!==H&&U!=="value"&&r(E,U,H,z,$,M)}"value"in S&&r(E,"value",w.value,S.value,$)}},b=(E,w,S,M,$,U,z,H,W)=>{const j=w.el=E?E.el:a(""),oe=w.anchor=E?E.anchor:a("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:le}=w;le&&(H=H?H.concat(le):le),E==null?(s(j,S,M),s(oe,S,M),y(w.children||[],S,oe,$,U,z,H,W)):Y>0&&Y&64&&ne&&E.dynamicChildren?(C(E.dynamicChildren,ne,S,$,U,z,H),(w.key!=null||$&&w===$.subTree)&&c0(E,w,!0)):me(E,w,S,oe,$,U,z,H,W)},I=(E,w,S,M,$,U,z,H,W)=>{w.slotScopeIds=H,E==null?w.shapeFlag&512?$.ctx.activate(w,S,M,z,W):ht(w,S,M,$,U,z,W):Qe(E,w,W)},ht=(E,w,S,M,$,U,z)=>{const H=E.component=OI(E,M,$);if(z_(E)&&(H.ctx.renderer=te),DI(H,!1,z),H.asyncDep){if($&&$.registerDep(H,Be,z),!E.el){const W=H.subTree=he(Vs);x(null,W,w,S)}}else Be(H,E,w,S,$,U,z)},Qe=(E,w,S)=>{const M=w.component=E.component;if(CI(E,w,S))if(M.asyncDep&&!M.asyncResolved){ve(M,w,S);return}else M.next=w,M.update();else w.el=E.el,M.vnode=w},Be=(E,w,S,M,$,U,z)=>{const H=()=>{if(E.isMounted){let{next:Y,bu:ne,u:le,parent:ae,vnode:_e}=E;{const wt=u0(E);if(wt){Y&&(Y.el=_e.el,ve(E,Y,z)),wt.asyncDep.then(()=>{E.isUnmounted||H()});return}}let Ce=Y,Tt;ni(E,!1),Y?(Y.el=_e.el,ve(E,Y,z)):Y=_e,ne&&za(ne),(Tt=Y.props&&Y.props.onVnodeBeforeUpdate)&&An(Tt,ae,Y,_e),ni(E,!0);const dt=Ip(E),nn=E.subTree;E.subTree=dt,N(nn,dt,f(nn.el),L(nn),E,$,U),Y.el=dt.el,Ce===null&&AI(E,dt.el),le&&Qt(le,$),(Tt=Y.props&&Y.props.onVnodeUpdated)&&Qt(()=>An(Tt,ae,Y,_e),$)}else{let Y;const{el:ne,props:le}=w,{bm:ae,m:_e,parent:Ce,root:Tt,type:dt}=E,nn=Ji(w);ni(E,!1),ae&&za(ae),!nn&&(Y=le&&le.onVnodeBeforeMount)&&An(Y,Ce,w),ni(E,!0);{Tt.ce&&Tt.ce._injectChildStyle(dt);const wt=E.subTree=Ip(E);N(null,wt,S,M,E,$,U),w.el=wt.el}if(_e&&Qt(_e,$),!nn&&(Y=le&&le.onVnodeMounted)){const wt=w;Qt(()=>An(Y,Ce,wt),$)}(w.shapeFlag&256||Ce&&Ji(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&E.a&&Qt(E.a,$),E.isMounted=!0,w=S=M=null}};E.scope.on();const W=E.effect=new I_(H);E.scope.off();const j=E.update=W.run.bind(W),oe=E.job=W.runIfDirty.bind(W);oe.i=E,oe.id=E.uid,W.scheduler=()=>nd(oe),ni(E,!0),j()},ve=(E,w,S)=>{w.component=E;const M=E.vnode.props;E.vnode=w,E.next=null,lI(E,w.props,M,S),dI(E,w.children,S),Ws(),pp(E),Hs()},me=(E,w,S,M,$,U,z,H,W=!1)=>{const j=E&&E.children,oe=E?E.shapeFlag:0,Y=w.children,{patchFlag:ne,shapeFlag:le}=w;if(ne>0){if(ne&128){hn(j,Y,S,M,$,U,z,H,W);return}else if(ne&256){Et(j,Y,S,M,$,U,z,H,W);return}}le&8?(oe&16&&Wt(j,$,U),Y!==j&&d(S,Y)):oe&16?le&16?hn(j,Y,S,M,$,U,z,H,W):Wt(j,$,U,!0):(oe&8&&d(S,""),le&16&&y(Y,S,M,$,U,z,H,W))},Et=(E,w,S,M,$,U,z,H,W)=>{E=E||Ki,w=w||Ki;const j=E.length,oe=w.length,Y=Math.min(j,oe);let ne;for(ne=0;ne<Y;ne++){const le=w[ne]=W?Is(w[ne]):Sn(w[ne]);N(E[ne],le,S,null,$,U,z,H,W)}j>oe?Wt(E,$,U,!0,!1,Y):y(w,S,M,$,U,z,H,W,Y)},hn=(E,w,S,M,$,U,z,H,W)=>{let j=0;const oe=w.length;let Y=E.length-1,ne=oe-1;for(;j<=Y&&j<=ne;){const le=E[j],ae=w[j]=W?Is(w[j]):Sn(w[j]);if(zr(le,ae))N(le,ae,S,null,$,U,z,H,W);else break;j++}for(;j<=Y&&j<=ne;){const le=E[Y],ae=w[ne]=W?Is(w[ne]):Sn(w[ne]);if(zr(le,ae))N(le,ae,S,null,$,U,z,H,W);else break;Y--,ne--}if(j>Y){if(j<=ne){const le=ne+1,ae=le<oe?w[le].el:M;for(;j<=ne;)N(null,w[j]=W?Is(w[j]):Sn(w[j]),S,ae,$,U,z,H,W),j++}}else if(j>ne)for(;j<=Y;)Ye(E[j],$,U,!0),j++;else{const le=j,ae=j,_e=new Map;for(j=ae;j<=ne;j++){const ft=w[j]=W?Is(w[j]):Sn(w[j]);ft.key!=null&&_e.set(ft.key,j)}let Ce,Tt=0;const dt=ne-ae+1;let nn=!1,wt=0;const ms=new Array(dt);for(j=0;j<dt;j++)ms[j]=0;for(j=le;j<=Y;j++){const ft=E[j];if(Tt>=dt){Ye(ft,$,U,!0);continue}let sn;if(ft.key!=null)sn=_e.get(ft.key);else for(Ce=ae;Ce<=ne;Ce++)if(ms[Ce-ae]===0&&zr(ft,w[Ce])){sn=Ce;break}sn===void 0?Ye(ft,$,U,!0):(ms[sn-ae]=j+1,sn>=wt?wt=sn:nn=!0,N(ft,w[sn],S,null,$,U,z,H,W),Tt++)}const Dr=nn?mI(ms):Ki;for(Ce=Dr.length-1,j=dt-1;j>=0;j--){const ft=ae+j,sn=w[ft],_a=ft+1<oe?w[ft+1].el:M;ms[j]===0?N(null,sn,S,_a,$,U,z,H,W):nn&&(Ce<0||j!==Dr[Ce]?tn(sn,S,_a,2):Ce--)}}},tn=(E,w,S,M,$=null)=>{const{el:U,type:z,transition:H,children:W,shapeFlag:j}=E;if(j&6){tn(E.component.subTree,w,S,M);return}if(j&128){E.suspense.move(w,S,M);return}if(j&64){z.move(E,w,S,te);return}if(z===Pt){s(U,w,S);for(let Y=0;Y<W.length;Y++)tn(W[Y],w,S,M);s(E.anchor,w,S);return}if(z===ou){V(E,w,S);return}if(M!==2&&j&1&&H)if(M===0)H.beforeEnter(U),s(U,w,S),Qt(()=>H.enter(U),$);else{const{leave:Y,delayLeave:ne,afterLeave:le}=H,ae=()=>s(U,w,S),_e=()=>{Y(U,()=>{ae(),le&&le()})};ne?ne(U,ae,_e):_e()}else s(U,w,S)},Ye=(E,w,S,M=!1,$=!1)=>{const{type:U,props:z,ref:H,children:W,dynamicChildren:j,shapeFlag:oe,patchFlag:Y,dirs:ne,cacheIndex:le}=E;if(Y===-2&&($=!1),H!=null&&ml(H,null,S,E,!0),le!=null&&(w.renderCache[le]=void 0),oe&256){w.ctx.deactivate(E);return}const ae=oe&1&&ne,_e=!Ji(E);let Ce;if(_e&&(Ce=z&&z.onVnodeBeforeUnmount)&&An(Ce,w,E),oe&6)Cn(E.component,S,M);else{if(oe&128){E.suspense.unmount(S,M);return}ae&&ti(E,null,w,"beforeUnmount"),oe&64?E.type.remove(E,w,S,te,M):j&&!j.hasOnce&&(U!==Pt||Y>0&&Y&64)?Wt(j,w,S,!1,!0):(U===Pt&&Y&384||!$&&oe&16)&&Wt(W,w,S),M&&Xe(E)}(_e&&(Ce=z&&z.onVnodeUnmounted)||ae)&&Qt(()=>{Ce&&An(Ce,w,E),ae&&ti(E,null,w,"unmounted")},S)},Xe=E=>{const{type:w,el:S,anchor:M,transition:$}=E;if(w===Pt){gs(S,M);return}if(w===ou){F(E);return}const U=()=>{i(S),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(E.shapeFlag&1&&$&&!$.persisted){const{leave:z,delayLeave:H}=$,W=()=>z(S,U);H?H(E.el,U,W):W()}else U()},gs=(E,w)=>{let S;for(;E!==w;)S=g(E),i(E),E=S;i(w)},Cn=(E,w,S)=>{const{bum:M,scope:$,job:U,subTree:z,um:H,m:W,a:j}=E;wp(W),wp(j),M&&za(M),$.stop(),U&&(U.flags|=8,Ye(z,E,w,S)),H&&Qt(H,w),Qt(()=>{E.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Wt=(E,w,S,M=!1,$=!1,U=0)=>{for(let z=U;z<E.length;z++)Ye(E[z],w,S,M,$)},L=E=>{if(E.shapeFlag&6)return L(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=g(E.anchor||E.el),S=w&&w[Fw];return S?g(S):w};let J=!1;const Q=(E,w,S)=>{E==null?w._vnode&&Ye(w._vnode,null,null,!0):N(w._vnode||null,E,w,null,null,null,S),w._vnode=E,J||(J=!0,pp(),j_(),J=!1)},te={p:N,um:Ye,m:tn,r:Xe,mt:ht,mc:y,pc:me,pbc:C,n:L,o:n};return{render:Q,hydrate:void 0,createApp:oI(Q)}}function ru({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ni({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function gI(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function c0(n,e,t=!1){const s=n.children,i=e.children;if(fe(s)&&fe(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Is(i[r]),a.el=o.el),!t&&a.patchFlag!==-2&&c0(o,a)),a.type===lc&&(a.el=o.el)}}function mI(n){const e=n.slice(),t=[0];let s,i,r,o,a;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(i=t[t.length-1],n[i]<u){e[s]=i,t.push(s);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<u?r=a+1:o=a;u<n[t[r]]&&(r>0&&(e[s]=t[r-1]),t[r]=s)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function u0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:u0(e)}function wp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const _I=Symbol.for("v-scx"),yI=()=>ss(_I);function Qa(n,e){return od(n,null,e)}function Ya(n,e,t){return od(n,e,t)}function od(n,e,t=Ue){const{immediate:s,deep:i,flush:r,once:o}=t,a=Mt({},t),c=e&&s||!e&&r!=="post";let u;if(Oo){if(r==="sync"){const _=yI();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Nn,_.resume=Nn,_.pause=Nn,_}}const d=Dt;a.call=(_,A,N)=>Mn(_,d,A,N);let f=!1;r==="post"?a.scheduler=_=>{Qt(_,d&&d.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(_,A)=>{A?_():nd(_)}),a.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const g=xw(n,e,a);return Oo&&(u?u.push(g):c&&g()),g}function vI(n,e,t){const s=this.proxy,i=st(n)?n.includes(".")?h0(s,n):()=>s[n]:n.bind(s,s);let r;ge(e)?r=e:(r=e.handler,t=e);const o=Zo(this),a=od(i,r.bind(s),t);return o(),a}function h0(n,e){const t=e.split(".");return()=>{let s=n;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const EI=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${cn(e)}Modifiers`]||n[`${Ci(e)}Modifiers`];function TI(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||Ue;let i=t;const r=e.startsWith("update:"),o=r&&EI(s,e.slice(7));o&&(o.trim&&(i=t.map(d=>st(d)?d.trim():d)),o.number&&(i=t.map(xu)));let a,c=s[a=Zc(e)]||s[a=Zc(cn(e))];!c&&r&&(c=s[a=Zc(Ci(e))]),c&&Mn(c,n,6,i);const u=s[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Mn(u,n,6,i)}}function d0(n,e,t=!1){const s=e.emitsCache,i=s.get(n);if(i!==void 0)return i;const r=n.emits;let o={},a=!1;if(!ge(n)){const c=u=>{const d=d0(u,e,!0);d&&(a=!0,Mt(o,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!a?(Ke(n)&&s.set(n,null),null):(fe(r)?r.forEach(c=>o[c]=null):Mt(o,r),Ke(n)&&s.set(n,o),o)}function ac(n,e){return!n||!Jl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(n,e[0].toLowerCase()+e.slice(1))||Oe(n,Ci(e))||Oe(n,e))}function Ip(n){const{type:e,vnode:t,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:c,render:u,renderCache:d,props:f,data:g,setupState:_,ctx:A,inheritAttrs:N}=n,k=gl(n);let x,D;try{if(t.shapeFlag&4){const F=i||s,se=F;x=Sn(u.call(se,F,d,f,_,g,A)),D=a}else{const F=e;x=Sn(F.length>1?F(f,{attrs:a,slots:o,emit:c}):F(f,null)),D=e.props?a:wI(a)}}catch(F){fo.length=0,ic(F,n,1),x=he(Vs)}let V=x;if(D&&N!==!1){const F=Object.keys(D),{shapeFlag:se}=V;F.length&&se&7&&(r&&F.some(Hh)&&(D=II(D,r)),V=pi(V,D,!1,!0))}return t.dirs&&(V=pi(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(t.dirs):t.dirs),t.transition&&sd(V,t.transition),x=V,gl(k),x}const wI=n=>{let e;for(const t in n)(t==="class"||t==="style"||Jl(t))&&((e||(e={}))[t]=n[t]);return e},II=(n,e)=>{const t={};for(const s in n)(!Hh(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function CI(n,e,t){const{props:s,children:i,component:r}=n,{props:o,children:a,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?Cp(s,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const g=d[f];if(o[g]!==s[g]&&!ac(u,g))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Cp(s,o,u):!0:!!o;return!1}function Cp(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==n[r]&&!ac(t,r))return!0}return!1}function AI({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const f0=n=>n.__isSuspense;function RI(n,e){e&&e.pendingBranch?fe(n)?e.effects.push(...n):e.effects.push(n):Vw(n)}const Pt=Symbol.for("v-fgt"),lc=Symbol.for("v-txt"),Vs=Symbol.for("v-cmt"),ou=Symbol.for("v-stc"),fo=[];let Jt=null;function tt(n=!1){fo.push(Jt=n?null:[])}function SI(){fo.pop(),Jt=fo[fo.length-1]||null}let ko=1;function Ap(n,e=!1){ko+=n,n<0&&Jt&&e&&(Jt.hasOnce=!0)}function p0(n){return n.dynamicChildren=ko>0?Jt||Ki:null,SI(),ko>0&&Jt&&Jt.push(n),n}function $t(n,e,t,s,i,r){return p0(re(n,e,t,s,i,r,!0))}function No(n,e,t,s,i){return p0(he(n,e,t,s,i,!0))}function fi(n){return n?n.__v_isVNode===!0:!1}function zr(n,e){return n.type===e.type&&n.key===e.key}const g0=({key:n})=>n??null,Xa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?st(n)||Lt(n)||ge(n)?{i:yt,r:n,k:e,f:!!t}:n:null);function re(n,e=null,t=null,s=0,i=null,r=n===Pt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&g0(e),ref:e&&Xa(e),scopeId:H_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:yt};return a?(ad(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=st(t)?8:16),ko>0&&!o&&Jt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Jt.push(c),c}const he=bI;function bI(n,e=null,t=null,s=0,i=null,r=!1){if((!n||n===Xw)&&(n=Vs),fi(n)){const a=pi(n,e,!0);return t&&ad(a,t),ko>0&&!r&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(n)]=a:Jt.push(a)),a.patchFlag=-2,a}if(FI(n)&&(n=n.__vccOpts),e){e=PI(e);let{class:a,style:c}=e;a&&!st(a)&&(e.class=Kh(a)),Ke(c)&&(td(c)&&!fe(c)&&(c=Mt({},c)),e.style=Qo(c))}const o=st(n)?1:f0(n)?128:Uw(n)?64:Ke(n)?4:ge(n)?2:0;return re(n,e,t,s,i,o,r,!0)}function PI(n){return n?td(n)||n0(n)?Mt({},n):n:null}function pi(n,e,t=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:c}=n,u=e?fs(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&g0(u),ref:e&&e.ref?t&&r?fe(r)?r.concat(Xa(e)):[r,Xa(e)]:Xa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Pt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&pi(n.ssContent),ssFallback:n.ssFallback&&pi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&sd(d,c.clone(d)),d}function gi(n=" ",e=0){return he(lc,null,n,e)}function Hu(n="",e=!1){return e?(tt(),No(Vs,null,n)):he(Vs,null,n)}function Sn(n){return n==null||typeof n=="boolean"?he(Vs):fe(n)?he(Pt,null,n.slice()):fi(n)?Is(n):he(lc,null,String(n))}function Is(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:pi(n)}function ad(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(fe(e))t=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ad(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!n0(e)?e._ctx=yt:i===3&&yt&&(yt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:yt},t=32):(e=String(e),s&64?(t=16,e=[gi(e)]):t=8);n.children=e,n.shapeFlag|=t}function fs(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Kh([e.class,s.class]));else if(i==="style")e.style=Qo([e.style,s.style]);else if(Jl(i)){const r=e[i],o=s[i];o&&r!==o&&!(fe(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function An(n,e,t,s=null){Mn(n,e,7,[t,s])}const kI=Z_();let NI=0;function OI(n,e,t){const s=n.type,i=(e?e.appContext:n.appContext)||kI,r={uid:NI++,vnode:n,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new aw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:i0(s,i),emitsOptions:d0(s,i),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:s.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=TI.bind(null,r),n.ce&&n.ce(r),r}let Dt=null,yl,Gu;{const n=nc(),e=(t,s)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};yl=e("__VUE_INSTANCE_SETTERS__",t=>Dt=t),Gu=e("__VUE_SSR_SETTERS__",t=>Oo=t)}const Zo=n=>{const e=Dt;return yl(n),n.scope.on(),()=>{n.scope.off(),yl(e)}},Rp=()=>{Dt&&Dt.scope.off(),yl(null)};function m0(n){return n.vnode.shapeFlag&4}let Oo=!1;function DI(n,e=!1,t=!1){e&&Gu(e);const{props:s,children:i}=n.vnode,r=m0(n);aI(n,s,r,e),hI(n,i,t);const o=r?xI(n,e):void 0;return e&&Gu(!1),o}function xI(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zw);const{setup:s}=t;if(s){Ws();const i=n.setupContext=s.length>1?MI(n):null,r=Zo(n),o=Yo(s,n,0,[n.props,i]),a=m_(o);if(Hs(),r(),(a||n.sp)&&!Ji(n)&&G_(n),a){if(o.then(Rp,Rp),e)return o.then(c=>{Sp(n,c)}).catch(c=>{ic(c,n,0)});n.asyncDep=o}else Sp(n,o)}else _0(n)}function Sp(n,e,t){ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ke(e)&&(n.setupState=B_(e)),_0(n)}function _0(n,e,t){const s=n.type;n.render||(n.render=s.render||Nn);{const i=Zo(n);Ws();try{eI(n)}finally{Hs(),i()}}}const LI={get(n,e){return St(n,"get",""),n[e]}};function MI(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,LI),slots:n.slots,emit:n.emit,expose:e}}function cc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(B_(Sw(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ho)return ho[t](n)},has(e,t){return t in e||t in ho}})):n.proxy}function VI(n,e=!0){return ge(n)?n.displayName||n.name:n.name||e&&n.__name}function FI(n){return ge(n)&&"__vccOpts"in n}const Me=(n,e)=>Ow(n,e,Oo);function Wi(n,e,t){const s=arguments.length;return s===2?Ke(e)&&!fe(e)?fi(e)?he(n,null,[e]):he(n,e):he(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&fi(t)&&(t=[t]),he(n,e,t))}const UI="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zu;const bp=typeof window<"u"&&window.trustedTypes;if(bp)try{zu=bp.createPolicy("vue",{createHTML:n=>n})}catch{}const y0=zu?n=>zu.createHTML(n):n=>n,BI="http://www.w3.org/2000/svg",$I="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,Pp=Kn&&Kn.createElement("template"),qI={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const i=e==="svg"?Kn.createElementNS(BI,n):e==="mathml"?Kn.createElementNS($I,n):t?Kn.createElement(n,{is:t}):Kn.createElement(n);return n==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:n=>Kn.createTextNode(n),createComment:n=>Kn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Kn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,i,r){const o=t?t.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{Pp.innerHTML=y0(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const a=Pp.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},jI=Symbol("_vtc");function WI(n,e,t){const s=n[jI];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const kp=Symbol("_vod"),HI=Symbol("_vsh"),GI=Symbol(""),zI=/(^|;)\s*display\s*:/;function KI(n,e,t){const s=n.style,i=st(t);let r=!1;if(t&&!i){if(e)if(st(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ja(s,a,"")}else for(const o in e)t[o]==null&&Ja(s,o,"");for(const o in t)o==="display"&&(r=!0),Ja(s,o,t[o])}else if(i){if(e!==t){const o=s[GI];o&&(t+=";"+o),s.cssText=t,r=zI.test(t)}}else e&&n.removeAttribute("style");kp in n&&(n[kp]=r?s.display:"",n[HI]&&(s.display="none"))}const Np=/\s*!important$/;function Ja(n,e,t){if(fe(t))t.forEach(s=>Ja(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=QI(n,e);Np.test(t)?n.setProperty(Ci(s),t.replace(Np,""),"important"):n[s]=t}}const Op=["Webkit","Moz","ms"],au={};function QI(n,e){const t=au[e];if(t)return t;let s=cn(e);if(s!=="filter"&&s in n)return au[e]=s;s=tc(s);for(let i=0;i<Op.length;i++){const r=Op[i]+s;if(r in n)return au[e]=r}return e}const Dp="http://www.w3.org/1999/xlink";function xp(n,e,t,s,i,r=ow(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Dp,e.slice(6,e.length)):n.setAttributeNS(Dp,e,t):t==null||r&&!E_(t)?n.removeAttribute(e):n.setAttribute(e,r?"":hs(t)?String(t):t)}function Lp(n,e,t,s,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?y0(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=E_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(i||e)}function Fi(n,e,t,s){n.addEventListener(e,t,s)}function YI(n,e,t,s){n.removeEventListener(e,t,s)}const Mp=Symbol("_vei");function XI(n,e,t,s,i=null){const r=n[Mp]||(n[Mp]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=JI(e);if(s){const u=r[e]=t2(s,i);Fi(n,a,u,c)}else o&&(YI(n,a,o,c),r[e]=void 0)}}const Vp=/(?:Once|Passive|Capture)$/;function JI(n){let e;if(Vp.test(n)){e={};let s;for(;s=n.match(Vp);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ci(n.slice(2)),e]}let lu=0;const ZI=Promise.resolve(),e2=()=>lu||(ZI.then(()=>lu=0),lu=Date.now());function t2(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Mn(n2(s,t.value),e,5,[s])};return t.value=n,t.attached=e2(),t}function n2(n,e){if(fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Fp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,s2=(n,e,t,s,i,r)=>{const o=i==="svg";e==="class"?WI(n,s,o):e==="style"?KI(n,t,s):Jl(e)?Hh(e)||XI(n,e,t,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):i2(n,e,s,o))?(Lp(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xp(n,e,s,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!st(s))?Lp(n,cn(e),s,r,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),xp(n,e,s,o))};function i2(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&Fp(e)&&ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Fp(e)&&st(t)?!1:e in n}const Up=n=>{const e=n.props["onUpdate:modelValue"]||!1;return fe(e)?t=>za(e,t):e};function r2(n){n.target.composing=!0}function Bp(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cu=Symbol("_assign"),po={created(n,{modifiers:{lazy:e,trim:t,number:s}},i){n[cu]=Up(i);const r=s||i.props&&i.props.type==="number";Fi(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=xu(a)),n[cu](a)}),t&&Fi(n,"change",()=>{n.value=n.value.trim()}),e||(Fi(n,"compositionstart",r2),Fi(n,"compositionend",Bp),Fi(n,"change",Bp))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:s,trim:i,number:r}},o){if(n[cu]=Up(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?xu(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(s&&e===t||i&&n.value.trim()===c)||(n.value=c))}},o2=["ctrl","shift","alt","meta"],a2={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>o2.some(t=>n[`${t}Key`]&&!e.includes(t))},l2=(n,e)=>{const t=n._withMods||(n._withMods={}),s=e.join(".");return t[s]||(t[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=a2[e[o]];if(a&&a(i,e))return}return n(i,...r)})},c2=Mt({patchProp:s2},qI);let $p;function u2(){return $p||($p=fI(c2))}const v0=(...n)=>{const e=u2().createApp(...n),{mount:t}=e;return e.mount=s=>{const i=d2(s);if(!i)return;const r=e._component;!ge(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=t(i,!1,h2(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function h2(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function d2(n){return st(n)?document.querySelector(n):n}const f2=zt({__name:"BaseButton",props:{buttonText:{},buttonWidth:{},buttonPadding:{},buttonBorderColor:{}},setup(n){return(e,t)=>(tt(),$t("button",{type:"submit",style:Qo({width:e.buttonWidth+"%",padding:e.buttonPadding+"px",border:e.buttonBorderColor})},[gi(ci(e.buttonText)+" ",1),Bu(e.$slots,"default",{},void 0)],4))}}),Gs=(n,e)=>{const t=n.__vccOpts||n;for(const[s,i]of e)t[s]=i;return t},oi=Gs(f2,[["__scopeId","data-v-3e3297b0"]]),p2={class:"display"},g2=zt({__name:"App",setup(n){const e=()=>{document.body.classList.toggle("dark-theme")};return(t,s)=>{const i=id("router-view");return tt(),$t(Pt,null,[he(oi,{"button-text":"Change the theme","button-width":10,"button-padding":5,onClick:e}),re("div",p2,[he(i)])],64)}}}),m2=Gs(g2,[["__scopeId","data-v-49a8eac9"]]);var qp={};/**
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
 */const E0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const K=function(n,e){if(!n)throw Tr(e)},Tr=function(n){return new Error("Firebase Database ("+E0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const T0=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_2=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,d=r>>2,f=(r&3)<<4|a>>4;let g=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(g=64)),s.push(t[d],t[f],t[g],t[_])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(T0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_2(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||u==null||f==null)throw new y2;const g=r<<2|a>>4;if(s.push(g),u!==64){const _=a<<4&240|u>>2;if(s.push(_),f!==64){const A=u<<6&192|f;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class y2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w0=function(n){const e=T0(n);return uc.encodeByteArray(e,!0)},vl=function(n){return w0(n).replace(/\./g,"")},El=function(n){try{return uc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function v2(n){return I0(void 0,n)}function I0(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!E2(t)||(n[t]=I0(n[t],e[t]));return n}function E2(n){return n!=="__proto__"}/**
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
 */function T2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const w2=()=>T2().__FIREBASE_DEFAULTS__,I2=()=>{if(typeof process>"u"||typeof qp>"u")return;const n=qp.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},C2=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&El(n[1]);return e&&JSON.parse(e)},hc=()=>{try{return w2()||I2()||C2()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},C0=n=>{var e,t;return(t=(e=hc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},A2=n=>{const e=C0(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},A0=()=>{var n;return(n=hc())===null||n===void 0?void 0:n.config},R0=n=>{var e;return(e=hc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Do{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function R2(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vl(JSON.stringify(t)),vl(JSON.stringify(o)),""].join(".")}/**
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function S2(){var n;const e=(n=hc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function b2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function P2(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function S0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function k2(){const n=Vt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function b0(){return E0.NODE_ADMIN===!0}function N2(){return!S2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function P0(){try{return typeof indexedDB=="object"}catch{return!1}}function O2(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const D2="FirebaseError";class $n extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=D2,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wr.prototype.create)}}class wr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?x2(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $n(i,a,s)}}function x2(n,e){return n.replace(L2,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const L2=/\{\$([^}]+)}/g;/**
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
 */function xo(n){return JSON.parse(n)}function mt(n){return JSON.stringify(n)}/**
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
 */const k0=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=xo(El(r[0])||""),t=xo(El(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},M2=function(n){const e=k0(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},V2=function(n){const e=k0(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ps(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ar(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ku(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tl(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function wl(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(jp(r)&&jp(o)){if(!wl(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function jp(n){return n!==null&&typeof n=="object"}/**
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
 */function Ir(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function to(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function no(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class F2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const g=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=a^r&(o^a),d=1518500249):(u=r^o^a,d=1859775393):f<60?(u=r&o|a&(r|o),d=2400959708):(u=r^o^a,d=3395469782);const g=(i<<5|i>>>27)+u+c+d+s[f]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function U2(n,e){const t=new B2(n,e);return t.subscribe.bind(t)}class B2{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");$2(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=uu),i.error===void 0&&(i.error=uu),i.complete===void 0&&(i.complete=uu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $2(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function uu(){}function q2(n,e){return`${n} failed: ${e} argument `}/**
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
 */const j2=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,K(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},dc=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Ft(n){return n&&n._delegate?n._delegate:n}class yn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ii="[DEFAULT]";/**
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
 */class W2{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Do;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(G2(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:H2(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H2(n){return n===ii?void 0:n}function G2(n){return n.instantiationMode==="EAGER"}/**
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
 */class z2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new W2(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ee||(Ee={}));const K2={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Q2=Ee.INFO,Y2={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},X2=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Y2[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ea{constructor(e){this.name=e,this._logLevel=Q2,this._logHandler=X2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?K2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const J2=(n,e)=>e.some(t=>n instanceof t);let Wp,Hp;function Z2(){return Wp||(Wp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e1(){return Hp||(Hp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N0=new WeakMap,Qu=new WeakMap,O0=new WeakMap,hu=new WeakMap,cd=new WeakMap;function t1(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ns(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&N0.set(t,n)}).catch(()=>{}),cd.set(e,n),e}function n1(n){if(Qu.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Qu.set(n,e)}let Yu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||O0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ns(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function s1(n){Yu=n(Yu)}function i1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(du(this),e,...t);return O0.set(s,e.sort?e.sort():[e]),Ns(s)}:e1().includes(n)?function(...e){return n.apply(du(this),e),Ns(N0.get(this))}:function(...e){return Ns(n.apply(du(this),e))}}function r1(n){return typeof n=="function"?i1(n):(n instanceof IDBTransaction&&n1(n),J2(n,Z2())?new Proxy(n,Yu):n)}function Ns(n){if(n instanceof IDBRequest)return t1(n);if(hu.has(n))return hu.get(n);const e=r1(n);return e!==n&&(hu.set(n,e),cd.set(e,n)),e}const du=n=>cd.get(n);function o1(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Ns(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ns(o.result),c.oldVersion,c.newVersion,Ns(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const a1=["get","getKey","getAll","getAllKeys","count"],l1=["put","add","delete","clear"],fu=new Map;function Gp(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fu.get(e))return fu.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=l1.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||a1.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return fu.set(e,r),r}s1(n=>({...n,get:(e,t,s)=>Gp(e,t)||n.get(e,t,s),has:(e,t)=>!!Gp(e,t)||n.has(e,t)}));/**
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
 */class c1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(u1(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function u1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xu="@firebase/app",zp="0.10.17";/**
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
 */const as=new ea("@firebase/app"),h1="@firebase/app-compat",d1="@firebase/analytics-compat",f1="@firebase/analytics",p1="@firebase/app-check-compat",g1="@firebase/app-check",m1="@firebase/auth",_1="@firebase/auth-compat",y1="@firebase/database",v1="@firebase/data-connect",E1="@firebase/database-compat",T1="@firebase/functions",w1="@firebase/functions-compat",I1="@firebase/installations",C1="@firebase/installations-compat",A1="@firebase/messaging",R1="@firebase/messaging-compat",S1="@firebase/performance",b1="@firebase/performance-compat",P1="@firebase/remote-config",k1="@firebase/remote-config-compat",N1="@firebase/storage",O1="@firebase/storage-compat",D1="@firebase/firestore",x1="@firebase/vertexai",L1="@firebase/firestore-compat",M1="firebase",V1="11.1.0";/**
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
 */const Ju="[DEFAULT]",F1={[Xu]:"fire-core",[h1]:"fire-core-compat",[f1]:"fire-analytics",[d1]:"fire-analytics-compat",[g1]:"fire-app-check",[p1]:"fire-app-check-compat",[m1]:"fire-auth",[_1]:"fire-auth-compat",[y1]:"fire-rtdb",[v1]:"fire-data-connect",[E1]:"fire-rtdb-compat",[T1]:"fire-fn",[w1]:"fire-fn-compat",[I1]:"fire-iid",[C1]:"fire-iid-compat",[A1]:"fire-fcm",[R1]:"fire-fcm-compat",[S1]:"fire-perf",[b1]:"fire-perf-compat",[P1]:"fire-rc",[k1]:"fire-rc-compat",[N1]:"fire-gcs",[O1]:"fire-gcs-compat",[D1]:"fire-fst",[L1]:"fire-fst-compat",[x1]:"fire-vertex","fire-js":"fire-js",[M1]:"fire-js-all"};/**
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
 */const Il=new Map,U1=new Map,Zu=new Map;function Kp(n,e){try{n.container.addComponent(e)}catch(t){as.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Vn(n){const e=n.name;if(Zu.has(e))return as.debug(`There were multiple attempts to register component ${e}.`),!1;Zu.set(e,n);for(const t of Il.values())Kp(t,n);for(const t of U1.values())Kp(t,n);return!0}function ud(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function bn(n){return n.settings!==void 0}/**
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
 */const B1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Os=new wr("app","Firebase",B1);/**
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
 */class $1{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Os.create("app-deleted",{appName:this._name})}}/**
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
 */const zs=V1;function D0(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ju,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Os.create("bad-app-name",{appName:String(i)});if(t||(t=A0()),!t)throw Os.create("no-options");const r=Il.get(i);if(r){if(wl(t,r.options)&&wl(s,r.config))return r;throw Os.create("duplicate-app",{appName:i})}const o=new z2(i);for(const c of Zu.values())o.addComponent(c);const a=new $1(t,s,o);return Il.set(i,a),a}function x0(n=Ju){const e=Il.get(n);if(!e&&n===Ju&&A0())return D0();if(!e)throw Os.create("no-app",{appName:n});return e}function Zt(n,e,t){var s;let i=(s=F1[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),as.warn(a.join(" "));return}Vn(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const q1="firebase-heartbeat-database",j1=1,Lo="firebase-heartbeat-store";let pu=null;function L0(){return pu||(pu=o1(q1,j1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Lo)}catch(t){console.warn(t)}}}}).catch(n=>{throw Os.create("idb-open",{originalErrorMessage:n.message})})),pu}async function W1(n){try{const t=(await L0()).transaction(Lo),s=await t.objectStore(Lo).get(M0(n));return await t.done,s}catch(e){if(e instanceof $n)as.warn(e.message);else{const t=Os.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});as.warn(t.message)}}}async function Qp(n,e){try{const s=(await L0()).transaction(Lo,"readwrite");await s.objectStore(Lo).put(e,M0(n)),await s.done}catch(t){if(t instanceof $n)as.warn(t.message);else{const s=Os.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});as.warn(s.message)}}}function M0(n){return`${n.name}!${n.options.appId}`}/**
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
 */const H1=1024,G1=30*24*60*60*1e3;class z1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Q1(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=G1}),this._storage.overwrite(this._heartbeatsCache))}catch(s){as.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yp(),{heartbeatsToSend:s,unsentEntries:i}=K1(this._heartbeatsCache.heartbeats),r=vl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return as.warn(t),""}}}function Yp(){return new Date().toISOString().substring(0,10)}function K1(n,e=H1){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Xp(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Xp(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Q1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P0()?O2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await W1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xp(n){return vl(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Y1(n){Vn(new yn("platform-logger",e=>new c1(e),"PRIVATE")),Vn(new yn("heartbeat",e=>new z1(e),"PRIVATE")),Zt(Xu,zp,n),Zt(Xu,zp,"esm2017"),Zt("fire-js","")}Y1("");var X1="firebase",J1="11.1.0";/**
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
 */Zt(X1,J1,"app");var Jp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hi,V0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function T(){}T.prototype=y.prototype,v.D=y.prototype,v.prototype=new T,v.prototype.constructor=v,v.C=function(C,R,b){for(var I=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)I[ht-2]=arguments[ht];return y.prototype[R].apply(C,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,T){T||(T=0);var C=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)C[R]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(R=0;16>R;++R)C[R]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=v.g[0],T=v.g[1],R=v.g[2];var b=v.g[3],I=y+(b^T&(R^b))+C[0]+3614090360&4294967295;y=T+(I<<7&4294967295|I>>>25),I=b+(R^y&(T^R))+C[1]+3905402710&4294967295,b=y+(I<<12&4294967295|I>>>20),I=R+(T^b&(y^T))+C[2]+606105819&4294967295,R=b+(I<<17&4294967295|I>>>15),I=T+(y^R&(b^y))+C[3]+3250441966&4294967295,T=R+(I<<22&4294967295|I>>>10),I=y+(b^T&(R^b))+C[4]+4118548399&4294967295,y=T+(I<<7&4294967295|I>>>25),I=b+(R^y&(T^R))+C[5]+1200080426&4294967295,b=y+(I<<12&4294967295|I>>>20),I=R+(T^b&(y^T))+C[6]+2821735955&4294967295,R=b+(I<<17&4294967295|I>>>15),I=T+(y^R&(b^y))+C[7]+4249261313&4294967295,T=R+(I<<22&4294967295|I>>>10),I=y+(b^T&(R^b))+C[8]+1770035416&4294967295,y=T+(I<<7&4294967295|I>>>25),I=b+(R^y&(T^R))+C[9]+2336552879&4294967295,b=y+(I<<12&4294967295|I>>>20),I=R+(T^b&(y^T))+C[10]+4294925233&4294967295,R=b+(I<<17&4294967295|I>>>15),I=T+(y^R&(b^y))+C[11]+2304563134&4294967295,T=R+(I<<22&4294967295|I>>>10),I=y+(b^T&(R^b))+C[12]+1804603682&4294967295,y=T+(I<<7&4294967295|I>>>25),I=b+(R^y&(T^R))+C[13]+4254626195&4294967295,b=y+(I<<12&4294967295|I>>>20),I=R+(T^b&(y^T))+C[14]+2792965006&4294967295,R=b+(I<<17&4294967295|I>>>15),I=T+(y^R&(b^y))+C[15]+1236535329&4294967295,T=R+(I<<22&4294967295|I>>>10),I=y+(R^b&(T^R))+C[1]+4129170786&4294967295,y=T+(I<<5&4294967295|I>>>27),I=b+(T^R&(y^T))+C[6]+3225465664&4294967295,b=y+(I<<9&4294967295|I>>>23),I=R+(y^T&(b^y))+C[11]+643717713&4294967295,R=b+(I<<14&4294967295|I>>>18),I=T+(b^y&(R^b))+C[0]+3921069994&4294967295,T=R+(I<<20&4294967295|I>>>12),I=y+(R^b&(T^R))+C[5]+3593408605&4294967295,y=T+(I<<5&4294967295|I>>>27),I=b+(T^R&(y^T))+C[10]+38016083&4294967295,b=y+(I<<9&4294967295|I>>>23),I=R+(y^T&(b^y))+C[15]+3634488961&4294967295,R=b+(I<<14&4294967295|I>>>18),I=T+(b^y&(R^b))+C[4]+3889429448&4294967295,T=R+(I<<20&4294967295|I>>>12),I=y+(R^b&(T^R))+C[9]+568446438&4294967295,y=T+(I<<5&4294967295|I>>>27),I=b+(T^R&(y^T))+C[14]+3275163606&4294967295,b=y+(I<<9&4294967295|I>>>23),I=R+(y^T&(b^y))+C[3]+4107603335&4294967295,R=b+(I<<14&4294967295|I>>>18),I=T+(b^y&(R^b))+C[8]+1163531501&4294967295,T=R+(I<<20&4294967295|I>>>12),I=y+(R^b&(T^R))+C[13]+2850285829&4294967295,y=T+(I<<5&4294967295|I>>>27),I=b+(T^R&(y^T))+C[2]+4243563512&4294967295,b=y+(I<<9&4294967295|I>>>23),I=R+(y^T&(b^y))+C[7]+1735328473&4294967295,R=b+(I<<14&4294967295|I>>>18),I=T+(b^y&(R^b))+C[12]+2368359562&4294967295,T=R+(I<<20&4294967295|I>>>12),I=y+(T^R^b)+C[5]+4294588738&4294967295,y=T+(I<<4&4294967295|I>>>28),I=b+(y^T^R)+C[8]+2272392833&4294967295,b=y+(I<<11&4294967295|I>>>21),I=R+(b^y^T)+C[11]+1839030562&4294967295,R=b+(I<<16&4294967295|I>>>16),I=T+(R^b^y)+C[14]+4259657740&4294967295,T=R+(I<<23&4294967295|I>>>9),I=y+(T^R^b)+C[1]+2763975236&4294967295,y=T+(I<<4&4294967295|I>>>28),I=b+(y^T^R)+C[4]+1272893353&4294967295,b=y+(I<<11&4294967295|I>>>21),I=R+(b^y^T)+C[7]+4139469664&4294967295,R=b+(I<<16&4294967295|I>>>16),I=T+(R^b^y)+C[10]+3200236656&4294967295,T=R+(I<<23&4294967295|I>>>9),I=y+(T^R^b)+C[13]+681279174&4294967295,y=T+(I<<4&4294967295|I>>>28),I=b+(y^T^R)+C[0]+3936430074&4294967295,b=y+(I<<11&4294967295|I>>>21),I=R+(b^y^T)+C[3]+3572445317&4294967295,R=b+(I<<16&4294967295|I>>>16),I=T+(R^b^y)+C[6]+76029189&4294967295,T=R+(I<<23&4294967295|I>>>9),I=y+(T^R^b)+C[9]+3654602809&4294967295,y=T+(I<<4&4294967295|I>>>28),I=b+(y^T^R)+C[12]+3873151461&4294967295,b=y+(I<<11&4294967295|I>>>21),I=R+(b^y^T)+C[15]+530742520&4294967295,R=b+(I<<16&4294967295|I>>>16),I=T+(R^b^y)+C[2]+3299628645&4294967295,T=R+(I<<23&4294967295|I>>>9),I=y+(R^(T|~b))+C[0]+4096336452&4294967295,y=T+(I<<6&4294967295|I>>>26),I=b+(T^(y|~R))+C[7]+1126891415&4294967295,b=y+(I<<10&4294967295|I>>>22),I=R+(y^(b|~T))+C[14]+2878612391&4294967295,R=b+(I<<15&4294967295|I>>>17),I=T+(b^(R|~y))+C[5]+4237533241&4294967295,T=R+(I<<21&4294967295|I>>>11),I=y+(R^(T|~b))+C[12]+1700485571&4294967295,y=T+(I<<6&4294967295|I>>>26),I=b+(T^(y|~R))+C[3]+2399980690&4294967295,b=y+(I<<10&4294967295|I>>>22),I=R+(y^(b|~T))+C[10]+4293915773&4294967295,R=b+(I<<15&4294967295|I>>>17),I=T+(b^(R|~y))+C[1]+2240044497&4294967295,T=R+(I<<21&4294967295|I>>>11),I=y+(R^(T|~b))+C[8]+1873313359&4294967295,y=T+(I<<6&4294967295|I>>>26),I=b+(T^(y|~R))+C[15]+4264355552&4294967295,b=y+(I<<10&4294967295|I>>>22),I=R+(y^(b|~T))+C[6]+2734768916&4294967295,R=b+(I<<15&4294967295|I>>>17),I=T+(b^(R|~y))+C[13]+1309151649&4294967295,T=R+(I<<21&4294967295|I>>>11),I=y+(R^(T|~b))+C[4]+4149444226&4294967295,y=T+(I<<6&4294967295|I>>>26),I=b+(T^(y|~R))+C[11]+3174756917&4294967295,b=y+(I<<10&4294967295|I>>>22),I=R+(y^(b|~T))+C[2]+718787259&4294967295,R=b+(I<<15&4294967295|I>>>17),I=T+(b^(R|~y))+C[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+b&4294967295}s.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var T=y-this.blockSize,C=this.B,R=this.h,b=0;b<y;){if(R==0)for(;b<=T;)i(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<y;)if(C[R++]=v.charCodeAt(b++),R==this.blockSize){i(this,C),R=0;break}}else for(;b<y;)if(C[R++]=v[b++],R==this.blockSize){i(this,C),R=0;break}}this.h=R,this.o+=y},s.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var T=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=T&255,T/=256;for(this.u(v),v=Array(16),y=T=0;4>y;++y)for(var C=0;32>C;C+=8)v[T++]=this.g[y]>>>C&255;return v};function r(v,y){var T=a;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=y(v)}function o(v,y){this.h=y;for(var T=[],C=!0,R=v.length-1;0<=R;R--){var b=v[R]|0;C&&b==y||(T[R]=b,C=!1)}this.g=T}var a={};function c(v){return-128<=v&&128>v?r(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return f;if(0>v)return k(u(-v));for(var y=[],T=1,C=0;v>=T;C++)y[C]=v/T|0,T*=4294967296;return new o(y,0)}function d(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return k(d(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(y,8)),C=f,R=0;R<v.length;R+=8){var b=Math.min(8,v.length-R),I=parseInt(v.substring(R,R+b),y);8>b?(b=u(Math.pow(y,b)),C=C.j(b).add(u(I))):(C=C.j(T),C=C.add(u(I)))}return C}var f=c(0),g=c(1),_=c(16777216);n=o.prototype,n.m=function(){if(N(this))return-k(this).m();for(var v=0,y=1,T=0;T<this.g.length;T++){var C=this.i(T);v+=(0<=C?C:4294967296+C)*y,y*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A(this))return"0";if(N(this))return"-"+k(this).toString(v);for(var y=u(Math.pow(v,6)),T=this,C="";;){var R=F(T,y).g;T=x(T,R.j(y));var b=((0<T.g.length?T.g[0]:T.h)>>>0).toString(v);if(T=R,A(T))return b+C;for(;6>b.length;)b="0"+b;C=b+C}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function A(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function N(v){return v.h==-1}n.l=function(v){return v=x(this,v),N(v)?-1:A(v)?0:1};function k(v){for(var y=v.g.length,T=[],C=0;C<y;C++)T[C]=~v.g[C];return new o(T,~v.h).add(g)}n.abs=function(){return N(this)?k(this):this},n.add=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],C=0,R=0;R<=y;R++){var b=C+(this.i(R)&65535)+(v.i(R)&65535),I=(b>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);C=I>>>16,b&=65535,I&=65535,T[R]=I<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function x(v,y){return v.add(k(y))}n.j=function(v){if(A(this)||A(v))return f;if(N(this))return N(v)?k(this).j(k(v)):k(k(this).j(v));if(N(v))return k(this.j(k(v)));if(0>this.l(_)&&0>v.l(_))return u(this.m()*v.m());for(var y=this.g.length+v.g.length,T=[],C=0;C<2*y;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(var R=0;R<v.g.length;R++){var b=this.i(C)>>>16,I=this.i(C)&65535,ht=v.i(R)>>>16,Qe=v.i(R)&65535;T[2*C+2*R]+=I*Qe,D(T,2*C+2*R),T[2*C+2*R+1]+=b*Qe,D(T,2*C+2*R+1),T[2*C+2*R+1]+=I*ht,D(T,2*C+2*R+1),T[2*C+2*R+2]+=b*ht,D(T,2*C+2*R+2)}for(C=0;C<y;C++)T[C]=T[2*C+1]<<16|T[2*C];for(C=y;C<2*y;C++)T[C]=0;return new o(T,0)};function D(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function V(v,y){this.g=v,this.h=y}function F(v,y){if(A(y))throw Error("division by zero");if(A(v))return new V(f,f);if(N(v))return y=F(k(v),y),new V(k(y.g),k(y.h));if(N(y))return y=F(v,k(y)),new V(k(y.g),y.h);if(30<v.g.length){if(N(v)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,C=y;0>=C.l(v);)T=se(T),C=se(C);var R=X(T,1),b=X(C,1);for(C=X(C,2),T=X(T,2);!A(C);){var I=b.add(C);0>=I.l(v)&&(R=R.add(T),b=I),C=X(C,1),T=X(T,1)}return y=x(v,R.j(y)),new V(R,y)}for(R=f;0<=v.l(y);){for(T=Math.max(1,Math.floor(v.m()/y.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),b=u(T),I=b.j(y);N(I)||0<I.l(v);)T-=C,b=u(T),I=b.j(y);A(b)&&(b=g),R=R.add(b),v=x(v,I)}return new V(R,v)}n.A=function(v){return F(this,v).h},n.and=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],C=0;C<y;C++)T[C]=this.i(C)&v.i(C);return new o(T,this.h&v.h)},n.or=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],C=0;C<y;C++)T[C]=this.i(C)|v.i(C);return new o(T,this.h|v.h)},n.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],C=0;C<y;C++)T[C]=this.i(C)^v.i(C);return new o(T,this.h^v.h)};function se(v){for(var y=v.g.length+1,T=[],C=0;C<y;C++)T[C]=v.i(C)<<1|v.i(C-1)>>>31;return new o(T,v.h)}function X(v,y){var T=y>>5;y%=32;for(var C=v.g.length-T,R=[],b=0;b<C;b++)R[b]=0<y?v.i(b+T)>>>y|v.i(b+T+1)<<32-y:v.i(b+T);return new o(R,v.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,V0=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,hi=o}).apply(typeof Jp<"u"?Jp:typeof self<"u"?self:typeof window<"u"?window:{});var Ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var F0,so,U0,Za,eh,B0,$0,q0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ma=="object"&&Ma];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=t(this);function i(l,h){if(h)e:{var p=s;l=l.split(".");for(var m=0;m<l.length-1;m++){var P=l[m];if(!(P in p))break e;p=p[P]}l=l[l.length-1],m=p[l],h=h(m),h!=m&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function r(l,h){l instanceof String&&(l+="");var p=0,m=!1,P={next:function(){if(!m&&p<l.length){var O=p++;return{value:h(O,l[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(l){return l||function(){return r(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function u(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),l.apply(h,P)}}return function(){return l.apply(h,arguments)}}function g(l,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function _(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),l.apply(this,m)}}function A(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(m,P,O){for(var G=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)G[Fe-2]=arguments[Fe];return h.prototype[P].apply(m,G)}}function N(l){const h=l.length;if(0<h){const p=Array(h);for(let m=0;m<h;m++)p[m]=l[m];return p}return[]}function k(l,h){for(let p=1;p<arguments.length;p++){const m=arguments[p];if(c(m)){const P=l.length||0,O=m.length||0;l.length=P+O;for(let G=0;G<O;G++)l[P+G]=m[G]}else l.push(m)}}class x{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(l){return/^[\s\xa0]*$/.test(l)}function V(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function F(l){return F[" "](l),l}F[" "]=function(){};var se=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function X(l,h,p){for(const m in l)h.call(p,l[m],m,l)}function v(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function y(l){const h={};for(const p in l)h[p]=l[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,h){let p,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(p in m)l[p]=m[p];for(let O=0;O<T.length;O++)p=T[O],Object.prototype.hasOwnProperty.call(m,p)&&(l[p]=m[p])}}function R(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function b(l){a.setTimeout(()=>{throw l},0)}function I(){var l=Et;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class ht{constructor(){this.h=this.g=null}add(h,p){const m=Qe.get();m.set(h,p),this.h?this.h.next=m:this.g=m,this.h=m}}var Qe=new x(()=>new Be,l=>l.reset());class Be{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,me=!1,Et=new ht,hn=()=>{const l=a.Promise.resolve(void 0);ve=()=>{l.then(tn)}};var tn=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(p){b(p)}var h=Qe;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}me=!1};function Ye(){this.s=this.s,this.C=this.C}Ye.prototype.s=!1,Ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Xe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var gs=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function Cn(l,h){if(Xe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,m=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(se){e:{try{F(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Wt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Cn.aa.h.call(this)}}A(Cn,Xe);var Wt={2:"touch",3:"pen",4:"mouse"};Cn.prototype.h=function(){Cn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(l,h,p,m,P){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!m,this.ha=P,this.key=++J,this.da=this.fa=!1}function te(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function be(l){this.src=l,this.g={},this.h=0}be.prototype.add=function(l,h,p,m,P){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var G=w(l,h,m,P);return-1<G?(h=l[G],p||(h.fa=!1)):(h=new Q(h,this.src,O,!!m,P),h.fa=p,l.push(h)),h};function E(l,h){var p=h.type;if(p in l.g){var m=l.g[p],P=Array.prototype.indexOf.call(m,h,void 0),O;(O=0<=P)&&Array.prototype.splice.call(m,P,1),O&&(te(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function w(l,h,p,m){for(var P=0;P<l.length;++P){var O=l[P];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==m)return P}return-1}var S="closure_lm_"+(1e6*Math.random()|0),M={};function $(l,h,p,m,P){if(Array.isArray(h)){for(var O=0;O<h.length;O++)$(l,h[O],p,m,P);return null}return p=le(p),l&&l[L]?l.K(h,p,u(m)?!!m.capture:!!m,P):U(l,h,p,!1,m,P)}function U(l,h,p,m,P,O){if(!h)throw Error("Invalid event type");var G=u(P)?!!P.capture:!!P,Fe=Y(l);if(Fe||(l[S]=Fe=new be(l)),p=Fe.add(h,p,m,G,O),p.proxy)return p;if(m=z(),p.proxy=m,m.src=l,m.listener=p,l.addEventListener)gs||(P=G),P===void 0&&(P=!1),l.addEventListener(h.toString(),m,P);else if(l.attachEvent)l.attachEvent(j(h.toString()),m);else if(l.addListener&&l.removeListener)l.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function z(){function l(p){return h.call(l.src,l.listener,p)}const h=oe;return l}function H(l,h,p,m,P){if(Array.isArray(h))for(var O=0;O<h.length;O++)H(l,h[O],p,m,P);else m=u(m)?!!m.capture:!!m,p=le(p),l&&l[L]?(l=l.i,h=String(h).toString(),h in l.g&&(O=l.g[h],p=w(O,p,m,P),-1<p&&(te(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[h],l.h--)))):l&&(l=Y(l))&&(h=l.g[h.toString()],l=-1,h&&(l=w(h,p,m,P)),(p=-1<l?h[l]:null)&&W(p))}function W(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[L])E(h.i,l);else{var p=l.type,m=l.proxy;h.removeEventListener?h.removeEventListener(p,m,l.capture):h.detachEvent?h.detachEvent(j(p),m):h.addListener&&h.removeListener&&h.removeListener(m),(p=Y(h))?(E(p,l),p.h==0&&(p.src=null,h[S]=null)):te(l)}}}function j(l){return l in M?M[l]:M[l]="on"+l}function oe(l,h){if(l.da)l=!0;else{h=new Cn(h,this);var p=l.listener,m=l.ha||l.src;l.fa&&W(l),l=p.call(m,h)}return l}function Y(l){return l=l[S],l instanceof be?l:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(l){return typeof l=="function"?l:(l[ne]||(l[ne]=function(h){return l.handleEvent(h)}),l[ne])}function ae(){Ye.call(this),this.i=new be(this),this.M=this,this.F=null}A(ae,Ye),ae.prototype[L]=!0,ae.prototype.removeEventListener=function(l,h,p,m){H(this,l,h,p,m)};function _e(l,h){var p,m=l.F;if(m)for(p=[];m;m=m.F)p.push(m);if(l=l.M,m=h.type||h,typeof h=="string")h=new Xe(h,l);else if(h instanceof Xe)h.target=h.target||l;else{var P=h;h=new Xe(m,l),C(h,P)}if(P=!0,p)for(var O=p.length-1;0<=O;O--){var G=h.g=p[O];P=Ce(G,m,!0,h)&&P}if(G=h.g=l,P=Ce(G,m,!0,h)&&P,P=Ce(G,m,!1,h)&&P,p)for(O=0;O<p.length;O++)G=h.g=p[O],P=Ce(G,m,!1,h)&&P}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],m=0;m<p.length;m++)te(p[m]);delete l.g[h],l.h--}}this.F=null},ae.prototype.K=function(l,h,p,m){return this.i.add(String(l),h,!1,p,m)},ae.prototype.L=function(l,h,p,m){return this.i.add(String(l),h,!0,p,m)};function Ce(l,h,p,m){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,O=0;O<h.length;++O){var G=h[O];if(G&&!G.da&&G.capture==p){var Fe=G.listener,pt=G.ha||G.src;G.fa&&E(l.i,G),P=Fe.call(pt,m)!==!1&&P}}return P&&!m.defaultPrevented}function Tt(l,h,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function dt(l){l.g=Tt(()=>{l.g=null,l.i&&(l.i=!1,dt(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class nn extends Ye{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wt(l){Ye.call(this),this.h=l,this.g={}}A(wt,Ye);var ms=[];function Dr(l){X(l.g,function(h,p){this.g.hasOwnProperty(p)&&W(h)},l),l.g={}}wt.prototype.N=function(){wt.aa.N.call(this),Dr(this)},wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ft=a.JSON.stringify,sn=a.JSON.parse,_a=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Fc(){}Fc.prototype.h=null;function Ef(l){return l.h||(l.h=l.i())}function Tf(){}var xr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Uc(){Xe.call(this,"d")}A(Uc,Xe);function Bc(){Xe.call(this,"c")}A(Bc,Xe);var Xs={},wf=null;function ya(){return wf=wf||new ae}Xs.La="serverreachability";function If(l){Xe.call(this,Xs.La,l)}A(If,Xe);function Lr(l){const h=ya();_e(h,new If(h))}Xs.STAT_EVENT="statevent";function Cf(l,h){Xe.call(this,Xs.STAT_EVENT,l),this.stat=h}A(Cf,Xe);function Ut(l){const h=ya();_e(h,new Cf(h,l))}Xs.Ma="timingevent";function Af(l,h){Xe.call(this,Xs.Ma,l),this.size=h}A(Af,Xe);function Mr(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Vr(){this.g=!0}Vr.prototype.xa=function(){this.g=!1};function ST(l,h,p,m,P,O){l.info(function(){if(l.g)if(O)for(var G="",Fe=O.split("&"),pt=0;pt<Fe.length;pt++){var Pe=Fe[pt].split("=");if(1<Pe.length){var It=Pe[0];Pe=Pe[1];var Ct=It.split("_");G=2<=Ct.length&&Ct[1]=="type"?G+(It+"="+Pe+"&"):G+(It+"=redacted&")}}else G=null;else G=O;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+h+`
`+p+`
`+G})}function bT(l,h,p,m,P,O,G){l.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+h+`
`+p+`
`+O+" "+G})}function Oi(l,h,p,m){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+kT(l,p)+(m?" "+m:"")})}function PT(l,h){l.info(function(){return"TIMEOUT: "+h})}Vr.prototype.info=function(){};function kT(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var m=p[l];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var G=1;G<P.length;G++)P[G]=""}}}}return ft(p)}catch{return h}}var va={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$c;function Ea(){}A(Ea,Fc),Ea.prototype.g=function(){return new XMLHttpRequest},Ea.prototype.i=function(){return{}},$c=new Ea;function _s(l,h,p,m){this.j=l,this.i=h,this.l=p,this.R=m||1,this.U=new wt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sf}function Sf(){this.i=null,this.g="",this.h=!1}var bf={},qc={};function jc(l,h,p){l.L=1,l.v=Ca(jn(h)),l.m=p,l.P=!0,Pf(l,null)}function Pf(l,h){l.F=Date.now(),Ta(l),l.A=jn(l.v);var p=l.A,m=l.R;Array.isArray(m)||(m=[String(m)]),jf(p.i,"t",m),l.C=0,p=l.j.J,l.h=new Sf,l.g=ap(l.j,p?h:null,!l.m),0<l.O&&(l.M=new nn(g(l.Y,l,l.g),l.O)),h=l.U,p=l.g,m=l.ca;var P="readystatechange";Array.isArray(P)||(P&&(ms[0]=P.toString()),P=ms);for(var O=0;O<P.length;O++){var G=$(p,P[O],m||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Lr(),ST(l.i,l.u,l.A,l.l,l.R,l.m)}_s.prototype.ca=function(l){l=l.target;const h=this.M;h&&Wn(l)==3?h.j():this.Y(l)},_s.prototype.Y=function(l){try{if(l==this.g)e:{const Ct=Wn(this.g);var h=this.g.Ba();const Li=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||Yf(this.g)))){this.J||Ct!=4||h==7||(h==8||0>=Li?Lr(3):Lr(2)),Wc(this);var p=this.g.Z();this.X=p;t:if(kf(this)){var m=Yf(this.g);l="";var P=m.length,O=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Js(this),Fr(this);var G="";break t}this.h.i=new a.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,l+=this.h.i.decode(m[h],{stream:!(O&&h==P-1)});m.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,bT(this.i,this.u,this.A,this.l,this.R,Ct,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,pt=this.g;if((Fe=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(Fe)){var Pe=Fe;break t}}Pe=null}if(p=Pe)Oi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hc(this,p);else{this.o=!1,this.s=3,Ut(12),Js(this),Fr(this);break e}}if(this.P){p=!0;let dn;for(;!this.J&&this.C<G.length;)if(dn=NT(this,G),dn==qc){Ct==4&&(this.s=4,Ut(14),p=!1),Oi(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==bf){this.s=4,Ut(15),Oi(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else Oi(this.i,this.l,dn,null),Hc(this,dn);if(kf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||G.length!=0||this.h.h||(this.s=1,Ut(16),p=!1),this.o=this.o&&p,!p)Oi(this.i,this.l,G,"[Invalid Chunked Response]"),Js(this),Fr(this);else if(0<G.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Xc(It),It.M=!0,Ut(11))}}else Oi(this.i,this.l,G,null),Hc(this,G);Ct==4&&Js(this),this.o&&!this.J&&(Ct==4?sp(this.j,this):(this.o=!1,Ta(this)))}else KT(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),Js(this),Fr(this)}}}catch{}finally{}};function kf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function NT(l,h){var p=l.C,m=h.indexOf(`
`,p);return m==-1?qc:(p=Number(h.substring(p,m)),isNaN(p)?bf:(m+=1,m+p>h.length?qc:(h=h.slice(m,m+p),l.C=m+p,h)))}_s.prototype.cancel=function(){this.J=!0,Js(this)};function Ta(l){l.S=Date.now()+l.I,Nf(l,l.I)}function Nf(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Mr(g(l.ba,l),h)}function Wc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}_s.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(PT(this.i,this.A),this.L!=2&&(Lr(),Ut(17)),Js(this),this.s=2,Fr(this)):Nf(this,this.S-l)};function Fr(l){l.j.G==0||l.J||sp(l.j,l)}function Js(l){Wc(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Dr(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Hc(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||Gc(p.h,l))){if(!l.K&&Gc(p.h,l)&&p.G==3){try{var m=p.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)ka(p),ba(p);else break e;Yc(p),Ut(18)}}else p.za=P[1],0<p.za-p.T&&37500>P[2]&&p.F&&p.v==0&&!p.C&&(p.C=Mr(g(p.Za,p),6e3));if(1>=xf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ei(p,11)}else if((l.K||p.g==l)&&ka(p),!D(h))for(P=p.Da.g.parse(h),h=0;h<P.length;h++){let Pe=P[h];if(p.T=Pe[0],Pe=Pe[1],p.G==2)if(Pe[0]=="c"){p.K=Pe[1],p.ia=Pe[2];const It=Pe[3];It!=null&&(p.la=It,p.j.info("VER="+p.la));const Ct=Pe[4];Ct!=null&&(p.Aa=Ct,p.j.info("SVER="+p.Aa));const Li=Pe[5];Li!=null&&typeof Li=="number"&&0<Li&&(m=1.5*Li,p.L=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const dn=l.g;if(dn){const Oa=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oa){var O=m.h;O.g||Oa.indexOf("spdy")==-1&&Oa.indexOf("quic")==-1&&Oa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(zc(O,O.h),O.h=null))}if(m.D){const Jc=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Jc&&(m.ya=Jc,qe(m.I,m.D,Jc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),m=p;var G=l;if(m.qa=op(m,m.J?m.ia:null,m.W),G.K){Lf(m.h,G);var Fe=G,pt=m.L;pt&&(Fe.I=pt),Fe.B&&(Wc(Fe),Ta(Fe)),m.g=G}else tp(m);0<p.i.length&&Pa(p)}else Pe[0]!="stop"&&Pe[0]!="close"||ei(p,7);else p.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?ei(p,7):Qc(p):Pe[0]!="noop"&&p.l&&p.l.ta(Pe),p.v=0)}}Lr(4)}catch{}}var OT=class{constructor(l,h){this.g=l,this.map=h}};function Of(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Df(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function xf(l){return l.h?1:l.g?l.g.size:0}function Gc(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function zc(l,h){l.g?l.g.add(h):l.h=h}function Lf(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Of.prototype.cancel=function(){if(this.i=Mf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Mf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return N(l.i)}function DT(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var h=[],p=l.length,m=0;m<p;m++)h.push(l[m]);return h}h=[],p=0;for(m in l)h[p++]=l[m];return h}function xT(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const m in l)h[p++]=m;return h}}}function Vf(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=xT(l),m=DT(l),P=m.length,O=0;O<P;O++)h.call(void 0,m[O],p&&p[O],l)}var Ff=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LT(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var m=l[p].indexOf("="),P=null;if(0<=m){var O=l[p].substring(0,m);P=l[p].substring(m+1)}else O=l[p];h(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Zs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Zs){this.h=l.h,wa(this,l.j),this.o=l.o,this.g=l.g,Ia(this,l.s),this.l=l.l;var h=l.i,p=new $r;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Uf(this,p),this.m=l.m}else l&&(h=String(l).match(Ff))?(this.h=!1,wa(this,h[1]||"",!0),this.o=Ur(h[2]||""),this.g=Ur(h[3]||"",!0),Ia(this,h[4]),this.l=Ur(h[5]||"",!0),Uf(this,h[6]||"",!0),this.m=Ur(h[7]||"")):(this.h=!1,this.i=new $r(null,this.h))}Zs.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Br(h,Bf,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Br(h,Bf,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Br(p,p.charAt(0)=="/"?FT:VT,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Br(p,BT)),l.join("")};function jn(l){return new Zs(l)}function wa(l,h,p){l.j=p?Ur(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ia(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Uf(l,h,p){h instanceof $r?(l.i=h,$T(l.i,l.h)):(p||(h=Br(h,UT)),l.i=new $r(h,l.h))}function qe(l,h,p){l.i.set(h,p)}function Ca(l){return qe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ur(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Br(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,MT),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function MT(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Bf=/[#\/\?@]/g,VT=/[#\?:]/g,FT=/[#\?]/g,UT=/[#\?@]/g,BT=/#/g;function $r(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function ys(l){l.g||(l.g=new Map,l.h=0,l.i&&LT(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=$r.prototype,n.add=function(l,h){ys(this),this.i=null,l=Di(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function $f(l,h){ys(l),h=Di(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function qf(l,h){return ys(l),h=Di(l,h),l.g.has(h)}n.forEach=function(l,h){ys(this),this.g.forEach(function(p,m){p.forEach(function(P){l.call(h,P,m,this)},this)},this)},n.na=function(){ys(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let m=0;m<h.length;m++){const P=l[m];for(let O=0;O<P.length;O++)p.push(h[m])}return p},n.V=function(l){ys(this);let h=[];if(typeof l=="string")qf(this,l)&&(h=h.concat(this.g.get(Di(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},n.set=function(l,h){return ys(this),this.i=null,l=Di(this,l),qf(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},n.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function jf(l,h,p){$f(l,h),0<p.length&&(l.i=null,l.g.set(Di(l,h),N(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var m=h[p];const O=encodeURIComponent(String(m)),G=this.V(m);for(m=0;m<G.length;m++){var P=O;G[m]!==""&&(P+="="+encodeURIComponent(String(G[m]))),l.push(P)}}return this.i=l.join("&")};function Di(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function $T(l,h){h&&!l.j&&(ys(l),l.i=null,l.g.forEach(function(p,m){var P=m.toLowerCase();m!=P&&($f(this,m),jf(this,P,p))},l)),l.j=h}function qT(l,h){const p=new Vr;if(a.Image){const m=new Image;m.onload=_(vs,p,"TestLoadImage: loaded",!0,h,m),m.onerror=_(vs,p,"TestLoadImage: error",!1,h,m),m.onabort=_(vs,p,"TestLoadImage: abort",!1,h,m),m.ontimeout=_(vs,p,"TestLoadImage: timeout",!1,h,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=l}else h(!1)}function jT(l,h){const p=new Vr,m=new AbortController,P=setTimeout(()=>{m.abort(),vs(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:m.signal}).then(O=>{clearTimeout(P),O.ok?vs(p,"TestPingServer: ok",!0,h):vs(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),vs(p,"TestPingServer: error",!1,h)})}function vs(l,h,p,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(p)}catch{}}function WT(){this.g=new _a}function HT(l,h,p){const m=p||"";try{Vf(l,function(P,O){let G=P;u(P)&&(G=ft(P)),h.push(m+O+"="+encodeURIComponent(G))})}catch(P){throw h.push(m+"type="+encodeURIComponent("_badmap")),P}}function Aa(l){this.l=l.Ub||null,this.j=l.eb||!1}A(Aa,Fc),Aa.prototype.g=function(){return new Ra(this.l,this.j)},Aa.prototype.i=function(l){return function(){return l}}({});function Ra(l,h){ae.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Ra,ae),n=Ra.prototype,n.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,jr(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qr(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wf(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wf(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?qr(this):jr(this),this.readyState==3&&Wf(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,qr(this))},n.Qa=function(l){this.g&&(this.response=l,qr(this))},n.ga=function(){this.g&&qr(this)};function qr(l){l.readyState=4,l.l=null,l.j=null,l.v=null,jr(l)}n.setRequestHeader=function(l,h){this.u.append(l,h)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function jr(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Hf(l){let h="";return X(l,function(p,m){h+=m,h+=":",h+=p,h+=`\r
`}),h}function Kc(l,h,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=Hf(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):qe(l,h,p))}function Je(l){ae.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Je,ae);var GT=/^https?$/i,zT=["POST","PUT"];n=Je.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,h,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$c.g(),this.v=this.o?Ef(this.o):Ef($c),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(O){Gf(this,O);return}if(l=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)p.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())p.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),P=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(zT,h,void 0))||m||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,G]of p)this.g.setRequestHeader(O,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qf(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){Gf(this,O)}};function Gf(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,zf(l),Sa(l)}function zf(l){l.A||(l.A=!0,_e(l,"complete"),_e(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,_e(this,"complete"),_e(this,"abort"),Sa(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sa(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Kf(this):this.bb())},n.bb=function(){Kf(this)};function Kf(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Wn(l)!=4||l.Z()!=2)){if(l.u&&Wn(l)==4)Tt(l.Ea,0,l);else if(_e(l,"readystatechange"),Wn(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var m;if(m=G===0){var P=String(l.D).match(Ff)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),m=!GT.test(P?P.toLowerCase():"")}p=m}if(p)_e(l,"complete"),_e(l,"success");else{l.m=6;try{var O=2<Wn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",zf(l)}}finally{Sa(l)}}}}function Sa(l,h){if(l.g){Qf(l);const p=l.g,m=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||_e(l,"ready");try{p.onreadystatechange=m}catch{}}}function Qf(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Wn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),sn(h)}};function Yf(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function KT(l){const h={};l=(l.g&&2<=Wn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<l.length;m++){if(D(l[m]))continue;var p=R(l[m]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[P]||[];h[P]=O,O.push(p)}v(h,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wr(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function Xf(l){this.Aa=0,this.i=[],this.j=new Vr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wr("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wr("baseRetryDelayMs",5e3,l),this.cb=Wr("retryDelaySeedMs",1e4,l),this.Wa=Wr("forwardChannelMaxRetries",2,l),this.wa=Wr("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Of(l&&l.concurrentRequestLimit),this.Da=new WT,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Xf.prototype,n.la=8,n.G=1,n.connect=function(l,h,p,m){Ut(0),this.W=l,this.H=h||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.I=op(this,null,this.W),Pa(this)};function Qc(l){if(Jf(l),l.G==3){var h=l.U++,p=jn(l.I);if(qe(p,"SID",l.K),qe(p,"RID",h),qe(p,"TYPE","terminate"),Hr(l,p),h=new _s(l,l.j,h),h.L=2,h.v=Ca(jn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=ap(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ta(h)}rp(l)}function ba(l){l.g&&(Xc(l),l.g.cancel(),l.g=null)}function Jf(l){ba(l),l.u&&(a.clearTimeout(l.u),l.u=null),ka(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Pa(l){if(!Df(l.h)&&!l.s){l.s=!0;var h=l.Ga;ve||hn(),me||(ve(),me=!0),Et.add(h,l),l.B=0}}function QT(l,h){return xf(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Mr(g(l.Ga,l,h),ip(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const P=new _s(this,this.j,l);let O=this.o;if(this.S&&(O?(O=y(O),C(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=ep(this,P,h),p=jn(this.I),qe(p,"RID",l),qe(p,"CVER",22),this.D&&qe(p,"X-HTTP-Session-Id",this.D),Hr(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(Hf(O)))+"&"+h:this.m&&Kc(p,this.m,O)),zc(this.h,P),this.Ua&&qe(p,"TYPE","init"),this.P?(qe(p,"$req",h),qe(p,"SID","null"),P.T=!0,jc(P,p,null)):jc(P,p,h),this.G=2}}else this.G==3&&(l?Zf(this,l):this.i.length==0||Df(this.h)||Zf(this))};function Zf(l,h){var p;h?p=h.l:p=l.U++;const m=jn(l.I);qe(m,"SID",l.K),qe(m,"RID",p),qe(m,"AID",l.T),Hr(l,m),l.m&&l.o&&Kc(m,l.m,l.o),p=new _s(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=ep(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),zc(l.h,p),jc(p,m,h)}function Hr(l,h){l.H&&X(l.H,function(p,m){qe(h,m,p)}),l.l&&Vf({},function(p,m){qe(h,m,p)})}function ep(l,h,p){p=Math.min(l.i.length,p);var m=l.l?g(l.l.Na,l.l,l):null;e:{var P=l.i;let O=-1;for(;;){const G=["count="+p];O==-1?0<p?(O=P[0].g,G.push("ofs="+O)):O=0:G.push("ofs="+O);let Fe=!0;for(let pt=0;pt<p;pt++){let Pe=P[pt].g;const It=P[pt].map;if(Pe-=O,0>Pe)O=Math.max(0,P[pt].g-100),Fe=!1;else try{HT(It,G,"req"+Pe+"_")}catch{m&&m(It)}}if(Fe){m=G.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,m}function tp(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;ve||hn(),me||(ve(),me=!0),Et.add(h,l),l.v=0}}function Yc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Mr(g(l.Fa,l),ip(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,np(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Mr(g(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),ba(this),np(this))};function Xc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function np(l){l.g=new _s(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=jn(l.qa);qe(h,"RID","rpc"),qe(h,"SID",l.K),qe(h,"AID",l.T),qe(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&qe(h,"TO",l.ja),qe(h,"TYPE","xmlhttp"),Hr(l,h),l.m&&l.o&&Kc(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Ca(jn(h)),p.m=null,p.P=!0,Pf(p,l)}n.Za=function(){this.C!=null&&(this.C=null,ba(this),Yc(this),Ut(19))};function ka(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function sp(l,h){var p=null;if(l.g==h){ka(l),Xc(l),l.g=null;var m=2}else if(Gc(l.h,h))p=h.D,Lf(l.h,h),m=1;else return;if(l.G!=0){if(h.o)if(m==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var P=l.B;m=ya(),_e(m,new Af(m,p)),Pa(l)}else tp(l);else if(P=h.s,P==3||P==0&&0<h.X||!(m==1&&QT(l,h)||m==2&&Yc(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),P){case 1:ei(l,5);break;case 4:ei(l,10);break;case 3:ei(l,6);break;default:ei(l,2)}}}function ip(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function ei(l,h){if(l.j.info("Error code "+h),h==2){var p=g(l.fb,l),m=l.Xa;const P=!m;m=new Zs(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||wa(m,"https"),Ca(m),P?qT(m.toString(),p):jT(m.toString(),p)}else Ut(2);l.G=0,l.l&&l.l.sa(h),rp(l),Jf(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function rp(l){if(l.G=0,l.ka=[],l.l){const h=Mf(l.h);(h.length!=0||l.i.length!=0)&&(k(l.ka,h),k(l.ka,l.i),l.h.i.length=0,N(l.i),l.i.length=0),l.l.ra()}}function op(l,h,p){var m=p instanceof Zs?jn(p):new Zs(p);if(m.g!="")h&&(m.g=h+"."+m.g),Ia(m,m.s);else{var P=a.location;m=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var O=new Zs(null);m&&wa(O,m),h&&(O.g=h),P&&Ia(O,P),p&&(O.l=p),m=O}return p=l.D,h=l.ya,p&&h&&qe(m,p,h),qe(m,"VER",l.la),Hr(l,m),m}function ap(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Je(new Aa({eb:p})):new Je(l.pa),h.Ha(l.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function lp(){}n=lp.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Na(){}Na.prototype.g=function(l,h){return new Kt(l,h)};function Kt(l,h){ae.call(this),this.g=new Xf(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!D(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!D(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new xi(this)}A(Kt,ae),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Qc(this.g)},Kt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=ft(l),l=p);h.i.push(new OT(h.Ya++,l)),h.G==3&&Pa(h)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Qc(this.g),delete this.g,Kt.aa.N.call(this)};function cp(l){Uc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}A(cp,Uc);function up(){Bc.call(this),this.status=1}A(up,Bc);function xi(l){this.g=l}A(xi,lp),xi.prototype.ua=function(){_e(this.g,"a")},xi.prototype.ta=function(l){_e(this.g,new cp(l))},xi.prototype.sa=function(l){_e(this.g,new up)},xi.prototype.ra=function(){_e(this.g,"b")},Na.prototype.createWebChannel=Na.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,q0=function(){return new Na},$0=function(){return ya()},B0=Xs,eh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},va.NO_ERROR=0,va.TIMEOUT=8,va.HTTP_ERROR=6,Za=va,Rf.COMPLETE="complete",U0=Rf,Tf.EventType=xr,xr.OPEN="a",xr.CLOSE="b",xr.ERROR="c",xr.MESSAGE="d",ae.prototype.listen=ae.prototype.K,so=Tf,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,F0=Je}).apply(typeof Ma<"u"?Ma:typeof self<"u"?self:typeof window<"u"?window:{});const Zp="@firebase/firestore";/**
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
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
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
 */let Cr="11.0.2";/**
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
 */const mi=new ea("@firebase/firestore");function Ui(){return mi.logLevel}function Z(n,...e){if(mi.logLevel<=Ee.DEBUG){const t=e.map(hd);mi.debug(`Firestore (${Cr}): ${n}`,...t)}}function ls(n,...e){if(mi.logLevel<=Ee.ERROR){const t=e.map(hd);mi.error(`Firestore (${Cr}): ${n}`,...t)}}function lr(n,...e){if(mi.logLevel<=Ee.WARN){const t=e.map(hd);mi.warn(`Firestore (${Cr}): ${n}`,...t)}}function hd(n){if(typeof n=="string")return n;try{/**
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
 */function ue(n="Unexpected state"){const e=`FIRESTORE (${Cr}) INTERNAL ASSERTION FAILED: `+n;throw ls(e),new Error(e)}function Le(n,e){n||ue()}function pe(n,e){return n}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends $n{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ds{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class j0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Z1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Rt.UNAUTHENTICATED))}shutdown(){}}class eC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tC{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Le(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new Ds;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ds,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ds)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Le(typeof s.accessToken=="string"),new j0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Rt(e)}}class nC{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class sC{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new nC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Le(this.o===void 0);const s=r=>{r.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Le(typeof t.token=="string"),this.R=t.token,new iC(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function oC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class W0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=oC(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function we(n,e){return n<e?-1:n>e?1:0}function cr(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
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
 */class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new rt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ee(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new rt(0,0))}static max(){return new de(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Mo{constructor(e,t,s){t===void 0?t=0:t>e.length&&ue(),s===void 0?s=e.length-t:s>e.length-t&&ue(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Mo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mo?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ge extends Mo{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const aC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Mo{construct(e,t,s){return new _t(e,t,s)}static isValidIdentifier(e){return aC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ee(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ee(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ee(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(t)}static emptyPath(){return new _t([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Ge.fromString(e))}static fromName(e){return new ie(Ge.fromString(e).popFirst(5))}static empty(){return new ie(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Ge(e.slice()))}}function lC(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=de.fromTimestamp(s===1e9?new rt(t+1,0):new rt(t,s));return new Fs(i,ie.empty(),e)}function cC(n){return new Fs(n.readTime,n.key,-1)}class Fs{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Fs(de.min(),ie.empty(),-1)}static max(){return new Fs(de.max(),ie.empty(),-1)}}function uC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ie.comparator(n.documentKey,e.documentKey),t!==0?t:we(n.largestBatchId,e.largestBatchId))}/**
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
 */const hC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ar(n){if(n.code!==q.FAILED_PRECONDITION||n.message!==hC)throw n;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,s)=>{t(e)})}static reject(e){return new B((t,s)=>{s(e)})}static waitFor(e){return new B((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next(i=>i?B.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new B((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++a,a===r&&s(o)},d=>i(d))}})}static doWhile(e,t){return new B((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function fC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Rr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}fc.oe=-1;function pc(n){return n==null}function Cl(n){return n===0&&1/n==-1/0}function pC(n){return typeof n=="number"&&Number.isInteger(n)&&!Cl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function gC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=eg(e)),e=mC(n.get(t),e);return eg(e)}function mC(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case"":t+="";break;default:t+=r}}return t}function eg(n){return n+""}/**
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
 */function tg(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ai(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function H0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let it=class th{constructor(e,t){this.comparator=e,this.root=t||xs.EMPTY}insert(e,t){return new th(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xs.BLACK,null,null))}remove(e){return new th(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Va(this.root,e,this.comparator,!1)}getReverseIterator(){return new Va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Va(this.root,e,this.comparator,!0)}},Va=class{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},xs=class zn{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??zn.RED,this.left=i??zn.EMPTY,this.right=r??zn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new zn(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return zn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return zn.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}};xs.EMPTY=null,xs.RED=!0,xs.BLACK=!1;xs.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,t,s,i,r){return this}insert(e,t,s){return new xs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ng(this.data.getIterator())}getIteratorFrom(e){return new ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ot(this.comparator);return t.data=e,t}}class ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new fn([])}unionWith(e){let t=new ot(_t.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return cr(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class G0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new G0("Invalid base64 string: "+r):r}}(e);return new vt(t)}static fromUint8Array(e){const t=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const _C=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Us(n){if(Le(!!n),typeof n=="string"){let e=0;const t=_C.exec(n);if(Le(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ze(n.seconds),nanos:Ze(n.nanos)}}function Ze(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bs(n){return typeof n=="string"?vt.fromBase64String(n):vt.fromUint8Array(n)}/**
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
 */function dd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function gc(n){const e=n.mapValue.fields.__previous_value__;return dd(e)?gc(e):e}function Vo(n){const e=Us(n.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */class yC{constructor(e,t,s,i,r,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Fo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Fa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $s(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?dd(n)?4:EC(n)?9007199254740991:vC(n)?10:11:ue()}function Fn(n,e){if(n===e)return!0;const t=$s(n);if(t!==$s(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vo(n).isEqual(Vo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Us(i.timestampValue),a=Us(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return Bs(i.bytesValue).isEqual(Bs(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return Ze(i.geoPointValue.latitude)===Ze(r.geoPointValue.latitude)&&Ze(i.geoPointValue.longitude)===Ze(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ze(i.integerValue)===Ze(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Ze(i.doubleValue),a=Ze(r.doubleValue);return o===a?Cl(o)===Cl(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return cr(n.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(tg(o)!==tg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Fn(o[c],a[c])))return!1;return!0}(n,e);default:return ue()}}function Uo(n,e){return(n.values||[]).find(t=>Fn(t,e))!==void 0}function ur(n,e){if(n===e)return 0;const t=$s(n),s=$s(e);if(t!==s)return we(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return we(n.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Ze(r.integerValue||r.doubleValue),c=Ze(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return sg(n.timestampValue,e.timestampValue);case 4:return sg(Vo(n),Vo(e));case 5:return we(n.stringValue,e.stringValue);case 6:return function(r,o){const a=Bs(r),c=Bs(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const d=we(a[u],c[u]);if(d!==0)return d}return we(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const a=we(Ze(r.latitude),Ze(o.latitude));return a!==0?a:we(Ze(r.longitude),Ze(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ig(n.arrayValue,e.arrayValue);case 10:return function(r,o){var a,c,u,d;const f=r.fields||{},g=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,A=(c=g.value)===null||c===void 0?void 0:c.arrayValue,N=we(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:ig(_,A)}(n.mapValue,e.mapValue);case 11:return function(r,o){if(r===Fa.mapValue&&o===Fa.mapValue)return 0;if(r===Fa.mapValue)return 1;if(o===Fa.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const g=we(c[f],d[f]);if(g!==0)return g;const _=ur(a[c[f]],u[d[f]]);if(_!==0)return _}return we(c.length,d.length)}(n.mapValue,e.mapValue);default:throw ue()}}function sg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return we(n,e);const t=Us(n),s=Us(e),i=we(t.seconds,s.seconds);return i!==0?i:we(t.nanos,s.nanos)}function ig(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=ur(t[i],s[i]);if(r)return r}return we(t.length,s.length)}function hr(n){return nh(n)}function nh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Us(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Bs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ie.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=nh(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${nh(t.fields[o])}`;return i+"}"}(n.mapValue):ue()}function el(n){switch($s(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gc(n);return e?16+el(e):16;case 5:return 2*n.stringValue.length;case 6:return Bs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((i,r)=>i+el(r),0)}(n.arrayValue);case 10:case 11:return function(s){let i=0;return Ai(s.fields,(r,o)=>{i+=r.length+el(o)}),i}(n.mapValue);default:throw ue()}}function rg(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function sh(n){return!!n&&"integerValue"in n}function fd(n){return!!n&&"arrayValue"in n}function og(n){return!!n&&"nullValue"in n}function ag(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tl(n){return!!n&&"mapValue"in n}function vC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function go(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ai(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=go(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=go(n.arrayValue.values[t]);return e}return Object.assign({},n)}function EC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!tl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(t)}setAll(e){let t=_t.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=go(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());tl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];tl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Ai(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new rn(go(this.value))}}function z0(n){const e=[];return Ai(n.fields,(t,s)=>{const i=new _t([t]);if(tl(s)){const r=z0(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
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
 */class kt{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,de.min(),de.min(),de.min(),rn.empty(),0)}static newFoundDocument(e,t,s,i){return new kt(e,1,t,de.min(),s,i,0)}static newNoDocument(e,t){return new kt(e,2,t,de.min(),de.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new kt(e,3,t,de.min(),de.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Al{constructor(e,t){this.position=e,this.inclusive=t}}function lg(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=ie.comparator(ie.fromName(o.referenceValue),t.key):s=ur(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function cg(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Rl{constructor(e,t="asc"){this.field=e,this.dir=t}}function TC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class K0{}class nt extends K0{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new IC(e,t,s):t==="array-contains"?new RC(e,s):t==="in"?new SC(e,s):t==="not-in"?new bC(e,s):t==="array-contains-any"?new PC(e,s):new nt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new CC(e,s):new AC(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ur(t,this.value)):t!==null&&$s(this.value)===$s(t)&&this.matchesComparison(ur(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends K0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new vn(e,t)}matches(e){return Q0(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Q0(n){return n.op==="and"}function Y0(n){return wC(n)&&Q0(n)}function wC(n){for(const e of n.filters)if(e instanceof vn)return!1;return!0}function ih(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+hr(n.value);if(Y0(n))return n.filters.map(e=>ih(e)).join(",");{const e=n.filters.map(t=>ih(t)).join(",");return`${n.op}(${e})`}}function X0(n,e){return n instanceof nt?function(s,i){return i instanceof nt&&s.op===i.op&&s.field.isEqual(i.field)&&Fn(s.value,i.value)}(n,e):n instanceof vn?function(s,i){return i instanceof vn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&X0(o,i.filters[a]),!0):!1}(n,e):void ue()}function J0(n){return n instanceof nt?function(t){return`${t.field.canonicalString()} ${t.op} ${hr(t.value)}`}(n):n instanceof vn?function(t){return t.op.toString()+" {"+t.getFilters().map(J0).join(" ,")+"}"}(n):"Filter"}class IC extends nt{constructor(e,t,s){super(e,t,s),this.key=ie.fromName(s.referenceValue)}matches(e){const t=ie.comparator(e.key,this.key);return this.matchesComparison(t)}}class CC extends nt{constructor(e,t){super(e,"in",t),this.keys=Z0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class AC extends nt{constructor(e,t){super(e,"not-in",t),this.keys=Z0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Z0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ie.fromName(s.referenceValue))}class RC extends nt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fd(t)&&Uo(t.arrayValue,this.value)}}class SC extends nt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Uo(this.value.arrayValue,t)}}class bC extends nt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Uo(this.value.arrayValue,t)}}class PC extends nt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Uo(this.value.arrayValue,s))}}/**
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
 */class kC{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function ug(n,e=null,t=[],s=[],i=null,r=null,o=null){return new kC(n,e,t,s,i,r,o)}function pd(n){const e=pe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ih(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),pc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>hr(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>hr(s)).join(",")),e.ue=t}return e.ue}function gd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!TC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!X0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!cg(n.startAt,e.startAt)&&cg(n.endAt,e.endAt)}function rh(n){return ie.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ta{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function NC(n,e,t,s,i,r,o,a){return new ta(n,e,t,s,i,r,o,a)}function ey(n){return new ta(n)}function hg(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ty(n){return n.collectionGroup!==null}function mo(n){const e=pe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(_t.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Rl(r,s))}),t.has(_t.keyField().canonicalString())||e.ce.push(new Rl(_t.keyField(),s))}return e.ce}function On(n){const e=pe(n);return e.le||(e.le=OC(e,mo(n))),e.le}function OC(n,e){if(n.limitType==="F")return ug(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Rl(i.field,r)});const t=n.endAt?new Al(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Al(n.startAt.position,n.startAt.inclusive):null;return ug(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function oh(n,e){const t=n.filters.concat([e]);return new ta(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ah(n,e,t){return new ta(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function mc(n,e){return gd(On(n),On(e))&&n.limitType===e.limitType}function ny(n){return`${pd(On(n))}|lt:${n.limitType}`}function Bi(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(i=>J0(i)).join(", ")}]`),pc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(i=>hr(i)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(i=>hr(i)).join(",")),`Target(${s})`}(On(n))}; limitType=${n.limitType})`}function _c(n,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):ie.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,e)&&function(s,i){for(const r of mo(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,e)&&function(s,i){return!(s.startAt&&!function(o,a,c){const u=lg(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,mo(s),i)||s.endAt&&!function(o,a,c){const u=lg(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,mo(s),i))}(n,e)}function DC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function sy(n){return(e,t)=>{let s=!1;for(const i of mo(n)){const r=xC(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function xC(n,e,t){const s=n.field.isKeyField()?ie.comparator(e.key,t.key):function(r,o,a){const c=o.data.field(r),u=a.data.field(r);return c!==null&&u!==null?ur(c,u):ue()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ue()}}/**
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
 */class Ri{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ai(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return H0(this.inner)}size(){return this.innerSize}}/**
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
 */const LC=new it(ie.comparator);function cs(){return LC}const iy=new it(ie.comparator);function io(...n){let e=iy;for(const t of n)e=e.insert(t.key,t);return e}function ry(n){let e=iy;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ai(){return _o()}function oy(){return _o()}function _o(){return new Ri(n=>n.toString(),(n,e)=>n.isEqual(e))}const MC=new it(ie.comparator),VC=new ot(ie.comparator);function Te(...n){let e=VC;for(const t of n)e=e.add(t);return e}const FC=new ot(we);function UC(){return FC}/**
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
 */function md(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cl(e)?"-0":e}}function ay(n){return{integerValue:""+n}}function BC(n,e){return pC(e)?ay(e):md(n,e)}/**
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
 */class yc{constructor(){this._=void 0}}function $C(n,e,t){return n instanceof Sl?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&dd(r)&&(r=gc(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):n instanceof Bo?cy(n,e):n instanceof $o?uy(n,e):function(i,r){const o=ly(i,r),a=dg(o)+dg(i.Pe);return sh(o)&&sh(i.Pe)?ay(a):md(i.serializer,a)}(n,e)}function qC(n,e,t){return n instanceof Bo?cy(n,e):n instanceof $o?uy(n,e):t}function ly(n,e){return n instanceof bl?function(s){return sh(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Sl extends yc{}class Bo extends yc{constructor(e){super(),this.elements=e}}function cy(n,e){const t=hy(e);for(const s of n.elements)t.some(i=>Fn(i,s))||t.push(s);return{arrayValue:{values:t}}}class $o extends yc{constructor(e){super(),this.elements=e}}function uy(n,e){let t=hy(e);for(const s of n.elements)t=t.filter(i=>!Fn(i,s));return{arrayValue:{values:t}}}class bl extends yc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function dg(n){return Ze(n.integerValue||n.doubleValue)}function hy(n){return fd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function jC(n,e){return n.field.isEqual(e.field)&&function(s,i){return s instanceof Bo&&i instanceof Bo||s instanceof $o&&i instanceof $o?cr(s.elements,i.elements,Fn):s instanceof bl&&i instanceof bl?Fn(s.Pe,i.Pe):s instanceof Sl&&i instanceof Sl}(n.transform,e.transform)}class WC{constructor(e,t){this.version=e,this.transformResults=t}}class is{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new is}static exists(e){return new is(void 0,e)}static updateTime(e){return new is(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class vc{}function dy(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new py(n.key,is.none()):new na(n.key,n.data,is.none());{const t=n.data,s=rn.empty();let i=new ot(_t.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Si(n.key,s,new fn(i.toArray()),is.none())}}function HC(n,e,t){n instanceof na?function(i,r,o){const a=i.value.clone(),c=pg(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Si?function(i,r,o){if(!nl(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=pg(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(fy(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function yo(n,e,t,s){return n instanceof na?function(r,o,a,c){if(!nl(r.precondition,o))return a;const u=r.value.clone(),d=gg(r.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof Si?function(r,o,a,c){if(!nl(r.precondition,o))return a;const u=gg(r.fieldTransforms,c,o),d=o.data;return d.setAll(fy(r)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(f=>f.field))}(n,e,t,s):function(r,o,a){return nl(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function GC(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=ly(s.transform,i||null);r!=null&&(t===null&&(t=rn.empty()),t.set(s.field,r))}return t||null}function fg(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&cr(s,i,(r,o)=>jC(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class na extends vc{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Si extends vc{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function fy(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function pg(n,e,t){const s=new Map;Le(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,qC(o,a,t[i]))}return s}function gg(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,$C(r,o,e))}return s}class py extends vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zC extends vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class KC{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&HC(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=yo(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=yo(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=oy();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=dy(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Te())}isEqual(e){return this.batchId===e.batchId&&cr(this.mutations,e.mutations,(t,s)=>fg(t,s))&&cr(this.baseMutations,e.baseMutations,(t,s)=>fg(t,s))}}class _d{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){Le(e.mutations.length===s.length);let i=function(){return MC}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new _d(e,t,s,i)}}/**
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
 */class QC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class YC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var et,Ae;function XC(n){switch(n){default:return ue();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function gy(n){if(n===void 0)return ls("GRPC error has no .code"),q.UNKNOWN;switch(n){case et.OK:return q.OK;case et.CANCELLED:return q.CANCELLED;case et.UNKNOWN:return q.UNKNOWN;case et.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case et.INTERNAL:return q.INTERNAL;case et.UNAVAILABLE:return q.UNAVAILABLE;case et.UNAUTHENTICATED:return q.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case et.NOT_FOUND:return q.NOT_FOUND;case et.ALREADY_EXISTS:return q.ALREADY_EXISTS;case et.PERMISSION_DENIED:return q.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case et.ABORTED:return q.ABORTED;case et.OUT_OF_RANGE:return q.OUT_OF_RANGE;case et.UNIMPLEMENTED:return q.UNIMPLEMENTED;case et.DATA_LOSS:return q.DATA_LOSS;default:return ue()}}(Ae=et||(et={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function JC(){return new TextEncoder}/**
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
 */const ZC=new hi([4294967295,4294967295],0);function mg(n){const e=JC().encode(n),t=new V0;return t.update(e),new Uint8Array(t.digest())}function _g(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new hi([t,s],0),new hi([i,r],0)]}class yd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ro(`Invalid padding: ${t}`);if(s<0)throw new ro(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ro(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ro(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=hi.fromNumber(this.Te)}Ee(e,t,s){let i=e.add(t.multiply(hi.fromNumber(s)));return i.compare(ZC)===1&&(i=new hi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=mg(e),[s,i]=_g(t);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new yd(r,i,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=mg(e),[s,i]=_g(t);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ec{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,sa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ec(de.min(),i,new it(we),cs(),Te())}}class sa{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new sa(s,t,Te(),Te(),Te())}}/**
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
 */class sl{constructor(e,t,s,i){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=i}}class my{constructor(e,t){this.targetId=e,this.me=t}}class _y{constructor(e,t,s=vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class yg{constructor(){this.fe=0,this.ge=vg(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Te(),t=Te(),s=Te();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:ue()}}),new sa(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=vg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class eA{constructor(e){this.Le=e,this.Be=new Map,this.ke=cs(),this.qe=Ua(),this.Qe=Ua(),this.Ke=new it(we)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,s=e.me.count,i=this.Ye(t);if(i){const r=i.target;if(rh(r))if(s===0){const o=new ie(r.path);this.We(t,o,kt.newNoDocument(o,de.min()))}else Le(s===1);else{const o=this.Ze(t);if(o!==s){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,a;try{o=Bs(s).toUint8Array()}catch(c){if(c instanceof G0)return lr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new yd(o,i,r)}catch(c){return lr(c instanceof ro?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(t,r,null),i++)}),i}it(e){const t=new Map;this.Be.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&rh(a.target)){const c=new ie(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,kt.newNoDocument(c,e))}r.be&&(t.set(o,r.ve()),r.Ce())}});let s=Te();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const i=new Ec(e,t,this.Ke,this.ke,s);return this.ke=cs(),this.qe=Ua(),this.Qe=Ua(),this.Ke=new it(we),i}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new yg,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new ot(we),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ot(we),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||Z("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new yg),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ua(){return new it(ie.comparator)}function vg(){return new it(ie.comparator)}const tA={asc:"ASCENDING",desc:"DESCENDING"},nA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sA={and:"AND",or:"OR"};class iA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lh(n,e){return n.useProto3Json||pc(e)?e:{value:e}}function Pl(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yy(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rA(n,e){return Pl(n,e.toTimestamp())}function Dn(n){return Le(!!n),de.fromTimestamp(function(t){const s=Us(t);return new rt(s.seconds,s.nanos)}(n))}function vd(n,e){return ch(n,e).canonicalString()}function ch(n,e){const t=function(i){return new Ge(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function vy(n){const e=Ge.fromString(n);return Le(Cy(e)),e}function uh(n,e){return vd(n.databaseId,e.path)}function gu(n,e){const t=vy(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ie(Ty(t))}function Ey(n,e){return vd(n.databaseId,e)}function oA(n){const e=vy(n);return e.length===4?Ge.emptyPath():Ty(e)}function hh(n){return new Ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ty(n){return Le(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Eg(n,e,t){return{name:uh(n,e),fields:t.value.mapValue.fields}}function aA(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,d){return u.useProto3Json?(Le(d===void 0||typeof d=="string"),vt.fromBase64String(d||"")):(Le(d===void 0||d instanceof Buffer||d instanceof Uint8Array),vt.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const d=u.code===void 0?q.UNKNOWN:gy(u.code);return new ee(d,u.message||"")}(o);t=new _y(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=gu(n,s.document.name),r=Dn(s.document.updateTime),o=s.document.createTime?Dn(s.document.createTime):de.min(),a=new rn({mapValue:{fields:s.document.fields}}),c=kt.newFoundDocument(i,r,o,a),u=s.targetIds||[],d=s.removedTargetIds||[];t=new sl(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=gu(n,s.document),r=s.readTime?Dn(s.readTime):de.min(),o=kt.newNoDocument(i,r),a=s.removedTargetIds||[];t=new sl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=gu(n,s.document),r=s.removedTargetIds||[];t=new sl([],r,i,null)}else{if(!("filter"in e))return ue();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new YC(i,r),a=s.targetId;t=new my(a,o)}}return t}function lA(n,e){let t;if(e instanceof na)t={update:Eg(n,e.key,e.value)};else if(e instanceof py)t={delete:uh(n,e.key)};else if(e instanceof Si)t={update:Eg(n,e.key,e.data),updateMask:_A(e.fieldMask)};else{if(!(e instanceof zC))return ue();t={verify:uh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Sl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Bo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof $o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ue()}(0,s))),e.precondition.isNone||(t.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:rA(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ue()}(n,e.precondition)),t}function cA(n,e){return n&&n.length>0?(Le(e!==void 0),n.map(t=>function(i,r){let o=i.updateTime?Dn(i.updateTime):Dn(r);return o.isEqual(de.min())&&(o=Dn(r)),new WC(o,i.transformResults||[])}(t,e))):[]}function uA(n,e){return{documents:[Ey(n,e.path)]}}function hA(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Ey(n,i);const r=function(u){if(u.length!==0)return Iy(vn.create(u,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:$i(g.field),direction:pA(g.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=lh(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:t,parent:i}}function dA(n){let e=oA(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){Le(s===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let r=[];t.where&&(r=function(f){const g=wy(f);return g instanceof vn&&Y0(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(g=>function(A){return new Rl(qi(A.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(t.orderBy));let a=null;t.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,pc(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(f){const g=!!f.before,_=f.values||[];return new Al(_,g)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const g=!f.before,_=f.values||[];return new Al(_,g)}(t.endAt)),NC(e,i,o,r,a,"F",c,u)}function fA(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wy(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=qi(t.unaryFilter.field);return nt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=qi(t.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qi(t.unaryFilter.field);return nt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qi(t.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(n):n.fieldFilter!==void 0?function(t){return nt.create(qi(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return vn.create(t.compositeFilter.filters.map(s=>wy(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ue()}}(t.compositeFilter.op))}(n):ue()}function pA(n){return tA[n]}function gA(n){return nA[n]}function mA(n){return sA[n]}function $i(n){return{fieldPath:n.canonicalString()}}function qi(n){return _t.fromServerFormat(n.fieldPath)}function Iy(n){return n instanceof nt?function(t){if(t.op==="=="){if(ag(t.value))return{unaryFilter:{field:$i(t.field),op:"IS_NAN"}};if(og(t.value))return{unaryFilter:{field:$i(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ag(t.value))return{unaryFilter:{field:$i(t.field),op:"IS_NOT_NAN"}};if(og(t.value))return{unaryFilter:{field:$i(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$i(t.field),op:gA(t.op),value:t.value}}}(n):n instanceof vn?function(t){const s=t.getFilters().map(i=>Iy(i));return s.length===1?s[0]:{compositeFilter:{op:mA(t.op),filters:s}}}(n):ue()}function _A(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Cy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ps{constructor(e,t,s,i,r=de.min(),o=de.min(),a=vt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ps(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ps(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ps(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ps(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yA{constructor(e){this.ht=e}}function vA(n){const e=dA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ah(e,e.limit,"L"):e}/**
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
 */class EA{constructor(){this.ln=new TA}addToCollectionParentIndex(e,t){return this.ln.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(Fs.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(Fs.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class TA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new ot(Ge.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ot(Ge.comparator)).toArray()}}/**
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
 */const Tg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ht{static withCacheSize(e){return new Ht(e,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Ht.DEFAULT_COLLECTION_PERCENTILE=10,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ht.DEFAULT=new Ht(41943040,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ht.DISABLED=new Ht(-1,0,0);/**
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
 */class dr{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new dr(0)}static Qn(){return new dr(-1)}}/**
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
 */function wg([n,e],[t,s]){const i=we(n,t);return i===0?we(e,s):i}class wA{constructor(e){this.Gn=e,this.buffer=new ot(wg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();wg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class IA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Rr(t)?Z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ar(t)}await this.Yn(3e5)})}}class CA{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return B.resolve(fc.oe);const s=new wA(t);return this.Zn.forEachTarget(e,i=>s.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>s.Hn(i))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Tg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tg):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,i,r,o,a,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(s=f,a=Date.now(),this.removeTargets(e,s,t))).next(f=>(r=f,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),Ui()<=Ee.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:f})))}}function AA(n,e){return new CA(n,e)}/**
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
 */class RA{constructor(){this.changes=new Ri(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class SA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class bA{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&yo(s.mutation,i,fn.empty(),rt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Te()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Te()){const i=ai();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=io();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=ai();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Te()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=cs();const o=_o(),a=function(){return _o()}();return t.forEach((c,u)=>{const d=s.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof Si)?r=r.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),yo(d.mutation,u,d.mutation.getFieldMask(),rt.now())):o.set(u.key,fn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var f;return a.set(u,new SA(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const s=_o();let i=new it((o,a)=>o-a),r=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=s.get(c)||fn.empty();d=a.applyToLocalView(u,d),s.set(c,d);const f=(i.get(a.batchId)||Te()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,d=c.value,f=oy();d.forEach(g=>{if(!r.has(g)){const _=dy(t.get(g),s.get(g));_!==null&&f.set(g,_),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return B.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ty(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):B.resolve(ai());let a=-1,c=r;return o.next(u=>B.forEach(u,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,Te())).next(d=>({batchId:a,changes:ry(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ie(t)).next(s=>{let i=io();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=io();return this.indexManager.getCollectionParents(e,r).next(a=>B.forEach(a,c=>{const u=function(f,g){return new ta(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i))).next(o=>{r.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,kt.newInvalidDocument(d)))});let a=io();return o.forEach((c,u)=>{const d=r.get(c);d!==void 0&&yo(d.mutation,u,fn.empty(),rt.now()),_c(t,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class PA{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return B.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Dn(i.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:vA(i.bundledQuery),readTime:Dn(i.readTime)}}(t)),B.resolve()}}/**
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
 */class kA{constructor(){this.overlays=new it(ie.comparator),this.Er=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ai();return B.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.Tt(e,t,r)}),B.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Er.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Er.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const i=ai(),r=t.length+1,o=new ie(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return B.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new it((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let d=r.get(u.largestBatchId);d===null&&(d=ai(),r=r.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=ai(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return B.resolve(a)}Tt(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(s.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new QC(t,s));let r=this.Er.get(t);r===void 0&&(r=Te(),this.Er.set(t,r)),this.Er.set(t,r.add(s.key))}}/**
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
 */class NA{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class Ed{constructor(){this.dr=new ot(lt.Ar),this.Rr=new ot(lt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new lt(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new lt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new ie(new Ge([])),s=new lt(t,e),i=new lt(t,e+1),r=[];return this.Rr.forEachInRange([s,i],o=>{this.gr(o),r.push(o.key)}),r}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ie(new Ge([])),s=new lt(t,e),i=new lt(t,e+1);let r=Te();return this.Rr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new lt(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class lt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ie.comparator(e.key,t.key)||we(e.br,t.br)}static Vr(e,t){return we(e.br,t.br)||ie.comparator(e.key,t.key)}}/**
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
 */class OA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new ot(lt.Ar)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KC(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.vr=this.vr.add(new lt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,t){return B.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.Fr(s),r=i<0?0:i;return B.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new lt(t,0),i=new lt(t,Number.POSITIVE_INFINITY),r=[];return this.vr.forEachInRange([s,i],o=>{const a=this.Cr(o.br);r.push(a)}),B.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ot(we);return t.forEach(i=>{const r=new lt(i,0),o=new lt(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([r,o],a=>{s=s.add(a.br)})}),B.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;ie.isDocumentKey(r)||(r=r.child(""));const o=new lt(new ie(r),0);let a=new ot(we);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.br)),!0)},o),B.resolve(this.Mr(a))}Mr(e){const t=[];return e.forEach(s=>{const i=this.Cr(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Le(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return B.forEach(t.mutations,i=>{const r=new lt(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new lt(t,0),i=this.vr.firstAfterOrEqual(s);return B.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class DA{constructor(e){this.Nr=e,this.docs=function(){return new it(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():kt.newInvalidDocument(t))}getEntries(e,t){let s=cs();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():kt.newInvalidDocument(i))}),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=cs();const o=t.path,a=new ie(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||uC(cC(d),s)<=0||(i.has(d.key)||_c(t,d))&&(r=r.insert(d.key,d.mutableCopy()))}return B.resolve(r)}getAllFromCollectionGroup(e,t,s,i){ue()}Lr(e,t){return B.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new xA(this)}getSize(e){return B.resolve(this.size)}}class xA extends RA{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(s)}),B.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class LA{constructor(e){this.persistence=e,this.Br=new Ri(t=>pd(t),gd),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.kr=0,this.qr=new Ed,this.targetCount=0,this.Qr=dr.qn()}forEachTarget(e,t){return this.Br.forEach((s,i)=>t(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),B.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new dr(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.Un(t),B.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Br.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(r).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.qr.containsKey(t))}}/**
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
 */class Ay{constructor(e,t){this.Kr={},this.overlays={},this.$r=new fc(0),this.Ur=!1,this.Ur=!0,this.Wr=new NA,this.referenceDelegate=e(this),this.Gr=new LA(this),this.indexManager=new EA,this.remoteDocumentCache=function(i){return new DA(i)}(s=>this.referenceDelegate.zr(s)),this.serializer=new yA(t),this.jr=new PA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new OA(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){Z("MemoryPersistence","Starting transaction:",e);const i=new MA(this.$r.next());return this.referenceDelegate.Hr(),s(i).next(r=>this.referenceDelegate.Jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Yr(e,t){return B.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class MA extends dC{constructor(e){super(),this.currentSequenceNumber=e}}class Td{constructor(e){this.persistence=e,this.Zr=new Ed,this.Xr=null}static ei(e){return new Td(e)}get ti(){if(this.Xr)return this.Xr;throw ue()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),B.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.ti.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ti,s=>{const i=ie.fromPath(s);return this.ni(e,i).next(r=>{r||t.removeEntry(i,de.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return B.or([()=>B.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class kl{constructor(e,t){this.persistence=e,this.ri=new Ri(s=>gC(s.path),(s,i)=>s.isEqual(i)),this.garbageCollector=AA(this,t)}static ei(e,t){return new kl(e,t)}Hr(){}Jr(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return B.forEach(this.ri,(s,i)=>this.ir(e,s,i).next(r=>r?B.resolve():t(i)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,t).next(a=>{a||(s++,r.removeEntry(o,de.min()))})).next(()=>r.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),B.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=el(e.data.value)),t}ir(e,t,s){return B.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return B.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class wd{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=i}static zi(e,t){let s=Te(),i=Te();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new wd(e,t.fromCache,s,i)}}/**
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
 */class VA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class FA{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return N2()?8:fC(Vt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.Xi(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.es(e,t,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new VA;return this.ts(e,t,o).next(a=>{if(r.result=a,this.Hi)return this.ns(e,t,o,a.size)})}).next(()=>r.result)}ns(e,t,s,i){return s.documentReadCount<this.Ji?(Ui()<=Ee.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Bi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),B.resolve()):(Ui()<=Ee.DEBUG&&Z("QueryEngine","Query:",Bi(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Yi*i?(Ui()<=Ee.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Bi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(t))):B.resolve())}Xi(e,t){if(hg(t))return B.resolve(null);let s=On(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ah(t,null,"F"),s=On(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Te(...r);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.rs(t,a);return this.ss(t,u,o,c.readTime)?this.Xi(e,ah(t,null,"F")):this.os(e,u,t,c)}))})))}es(e,t,s,i){return hg(t)||i.isEqual(de.min())?B.resolve(null):this.Zi.getDocuments(e,s).next(r=>{const o=this.rs(t,r);return this.ss(t,o,s,i)?B.resolve(null):(Ui()<=Ee.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bi(t)),this.os(e,o,t,lC(i,-1)).next(a=>a))})}rs(e,t){let s=new ot(sy(e));return t.forEach((i,r)=>{_c(e,r)&&(s=s.add(r))}),s}ss(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ts(e,t,s){return Ui()<=Ee.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Bi(t)),this.Zi.getDocumentsMatchingQuery(e,t,Fs.min(),s)}os(e,t,s,i){return this.Zi.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class UA{constructor(e,t,s,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new it(we),this.cs=new Ri(r=>pd(r),gd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bA(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function BA(n,e,t,s){return new UA(n,e,t,s)}async function Ry(n,e){const t=pe(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=Te();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of r){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(s,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function $A(n,e){const t=pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,d){const f=u.batch,g=f.keys();let _=B.resolve();return g.forEach(A=>{_=_.next(()=>d.getEntry(c,A)).next(N=>{const k=u.docVersions.get(A);Le(k!==null),N.version.compareTo(k)<0&&(f.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),d.addEntry(N)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function Sy(n){const e=pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function qA(n,e){const t=pe(n),s=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const a=[];e.targetChanges.forEach((d,f)=>{const g=i.get(f);if(!g)return;a.push(t.Gr.removeMatchingKeys(r,d.removedDocuments,f).next(()=>t.Gr.addMatchingKeys(r,d.addedDocuments,f)));let _=g.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(vt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,s)),i=i.insert(f,_),function(N,k,x){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,_,d)&&a.push(t.Gr.updateTargetData(r,_))});let c=cs(),u=Te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,d))}),a.push(jA(r,o,e.documentUpdates).next(d=>{c=d.Is,u=d.Es})),!s.isEqual(de.min())){const d=t.Gr.getLastRemoteSnapshotVersion(r).next(f=>t.Gr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(d)}return B.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(t.us=i,r))}function jA(n,e,t){let s=Te(),i=Te();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=cs();return t.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:i}})}function WA(n,e){const t=pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function HA(n,e){const t=pe(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Gr.getTargetData(s,e).next(r=>r?(i=r,B.resolve(i)):t.Gr.allocateTargetId(s).next(o=>(i=new Ps(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.us.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function dh(n,e,t){const s=pe(n),i=s.us.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rr(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.us=s.us.remove(e),s.cs.delete(i.target)}function Ig(n,e,t){const s=pe(n);let i=de.min(),r=Te();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const f=pe(c),g=f.cs.get(d);return g!==void 0?B.resolve(f.us.get(g)):f.Gr.getTargetData(u,d)}(s,o,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s._s.getDocumentsMatchingQuery(o,e,t?i:de.min(),t?r:Te())).next(a=>(GA(s,DC(e),a),{documents:a,ds:r})))}function GA(n,e,t){let s=n.ls.get(e)||de.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.ls.set(e,s)}class Cg{constructor(){this.activeTargetIds=UC()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zA{constructor(){this._o=new Cg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Cg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KA{uo(e){}shutdown(){}}/**
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
 */class Ag{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ba=null;function mu(){return Ba===null?Ba=function(){return 268435456+Math.round(2147483648*Math.random())}():Ba++,"0x"+Ba.toString(16)}/**
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
 */const QA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class YA{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const At="WebChannelConnection";class XA extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${i}/databases/${r}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}Oo(t,s,i,r,o){const a=mu(),c=this.No(t,s.toUriEncodedString());Z("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,r,o),this.Bo(t,c,u,i).then(d=>(Z("RestConnection",`Received RPC '${t}' ${a}: `,d),d),d=>{throw lr("RestConnection",`RPC '${t}' ${a} failed with error: `,d,"url: ",c,"request:",i),d})}ko(t,s,i,r,o,a){return this.Oo(t,s,i,r,o)}Lo(t,s,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>t[o]=r),i&&i.headers.forEach((r,o)=>t[o]=r)}No(t,s){const i=QA[t];return`${this.Fo}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,i){const r=mu();return new Promise((o,a)=>{const c=new F0;c.setWithCredentials(!0),c.listenOnce(U0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Za.NO_ERROR:const d=c.getResponseJson();Z(At,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(d)),o(d);break;case Za.TIMEOUT:Z(At,`RPC '${e}' ${r} timed out`),a(new ee(q.DEADLINE_EXCEEDED,"Request time out"));break;case Za.HTTP_ERROR:const f=c.getStatus();if(Z(At,`RPC '${e}' ${r} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const A=function(k){const x=k.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(x)>=0?x:q.UNKNOWN}(_.status);a(new ee(A,_.message))}else a(new ee(q.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ee(q.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(At,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);Z(At,`RPC '${e}' ${r} sending request:`,i),c.send(t,"POST",u,s,15)})}qo(e,t,s){const i=mu(),r=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=q0(),a=$0(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=r.join("");Z(At,`Creating RPC '${e}' stream ${i}: ${d}`,c);const f=o.createWebChannel(d,c);let g=!1,_=!1;const A=new YA({Eo:k=>{_?Z(At,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(g||(Z(At,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),Z(At,`RPC '${e}' stream ${i} sending:`,k),f.send(k))},Ao:()=>f.close()}),N=(k,x,D)=>{k.listen(x,V=>{try{D(V)}catch(F){setTimeout(()=>{throw F},0)}})};return N(f,so.EventType.OPEN,()=>{_||(Z(At,`RPC '${e}' stream ${i} transport opened.`),A.So())}),N(f,so.EventType.CLOSE,()=>{_||(_=!0,Z(At,`RPC '${e}' stream ${i} transport closed`),A.Do())}),N(f,so.EventType.ERROR,k=>{_||(_=!0,lr(At,`RPC '${e}' stream ${i} transport errored:`,k),A.Do(new ee(q.UNAVAILABLE,"The operation could not be completed")))}),N(f,so.EventType.MESSAGE,k=>{var x;if(!_){const D=k.data[0];Le(!!D);const V=D,F=(V==null?void 0:V.error)||((x=V[0])===null||x===void 0?void 0:x.error);if(F){Z(At,`RPC '${e}' stream ${i} received error:`,F);const se=F.status;let X=function(T){const C=et[T];if(C!==void 0)return gy(C)}(se),v=F.message;X===void 0&&(X=q.INTERNAL,v="Unknown error status: "+se+" with message "+F.message),_=!0,A.Do(new ee(X,v)),f.close()}else Z(At,`RPC '${e}' stream ${i} received:`,D),A.vo(D)}}),N(a,B0.STAT_EVENT,k=>{k.stat===eh.PROXY?Z(At,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===eh.NOPROXY&&Z(At,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function _u(){return typeof document<"u"?document:null}/**
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
 */function Tc(n){return new iA(n,!0)}/**
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
 */class by{constructor(e,t,s=1e3,i=1.5,r=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=i,this.$o=r,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-s);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Py{constructor(e,t,s,i,r,o,a,c){this.li=e,this.Yo=s,this.Zo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new by(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(ls(t.toString()),ls("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Xo===t&&this.I_(s,i)},s=>{e(()=>{const i=new ee(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(i)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{s(()=>this.E_(i))}),this.stream.onMessage(i=>{s(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JA extends Py{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=aA(this.serializer,e),s=function(r){if(!("targetChange"in r))return de.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Dn(o.readTime):de.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=hh(this.serializer),t.addTarget=function(r,o){let a;const c=o.target;if(a=rh(c)?{documents:uA(r,c)}:{query:hA(r,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=yy(r,o.resumeToken);const u=lh(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){a.readTime=Pl(r,o.snapshotVersion.toTimestamp());const u=lh(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=fA(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=hh(this.serializer),t.removeTarget=e,this.c_(t)}}class ZA extends Py{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=cA(e.writeResults,e.commitTime),s=Dn(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=hh(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>lA(this.serializer,s))};this.c_(t)}}/**
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
 */class eR extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new ee(q.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Oo(e,ch(t,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ee(q.UNKNOWN,r.toString())})}ko(e,t,s,i,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,ch(t,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(q.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class tR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ls(t),this.C_=!1):Z("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class nR{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=r,this.Q_.uo(o=>{s.enqueueAndForget(async()=>{bi(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=pe(c);u.k_.add(4),await ia(u),u.K_.set("Unknown"),u.k_.delete(4),await wc(u)}(this))})}),this.K_=new tR(s,i)}}async function wc(n){if(bi(n))for(const e of n.q_)await e(!0)}async function ia(n){for(const e of n.q_)await e(!1)}function ky(n,e){const t=pe(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Rd(t)?Ad(t):Sr(t).s_()&&Cd(t,e))}function Id(n,e){const t=pe(n),s=Sr(t);t.B_.delete(e),s.s_()&&Ny(t,e),t.B_.size===0&&(s.s_()?s.a_():bi(t)&&t.K_.set("Unknown"))}function Cd(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Sr(n).V_(e)}function Ny(n,e){n.U_.xe(e),Sr(n).m_(e)}function Ad(n){n.U_=new eA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Sr(n).start(),n.K_.F_()}function Rd(n){return bi(n)&&!Sr(n).i_()&&n.B_.size>0}function bi(n){return pe(n).k_.size===0}function Oy(n){n.U_=void 0}async function sR(n){n.K_.set("Online")}async function iR(n){n.B_.forEach((e,t)=>{Cd(n,e)})}async function rR(n,e){Oy(n),Rd(n)?(n.K_.O_(e),Ad(n)):n.K_.set("Unknown")}async function oR(n,e,t){if(n.K_.set("Online"),e instanceof _y&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.B_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.B_.delete(a),i.U_.removeTarget(a))}(n,e)}catch(s){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Nl(n,s)}else if(e instanceof sl?n.U_.$e(e):e instanceof my?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(de.min()))try{const s=await Sy(n.localStore);t.compareTo(s)>=0&&await function(r,o){const a=r.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.B_.get(u);d&&r.B_.set(u,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const d=r.B_.get(c);if(!d)return;r.B_.set(c,d.withResumeToken(vt.EMPTY_BYTE_STRING,d.snapshotVersion)),Ny(r,c);const f=new Ps(d.target,c,u,d.sequenceNumber);Cd(r,f)}),r.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(s){Z("RemoteStore","Failed to raise snapshot:",s),await Nl(n,s)}}async function Nl(n,e,t){if(!Rr(e))throw e;n.k_.add(1),await ia(n),n.K_.set("Offline"),t||(t=()=>Sy(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await wc(n)})}function Dy(n,e){return e().catch(t=>Nl(n,t,e))}async function Ic(n){const e=pe(n),t=qs(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;aR(e);)try{const i=await WA(e.localStore,s);if(i===null){e.L_.length===0&&t.a_();break}s=i.batchId,lR(e,i)}catch(i){await Nl(e,i)}xy(e)&&Ly(e)}function aR(n){return bi(n)&&n.L_.length<10}function lR(n,e){n.L_.push(e);const t=qs(n);t.s_()&&t.f_&&t.g_(e.mutations)}function xy(n){return bi(n)&&!qs(n).i_()&&n.L_.length>0}function Ly(n){qs(n).start()}async function cR(n){qs(n).w_()}async function uR(n){const e=qs(n);for(const t of n.L_)e.g_(t.mutations)}async function hR(n,e,t){const s=n.L_.shift(),i=_d.from(s,e,t);await Dy(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ic(n)}async function dR(n,e){e&&qs(n).f_&&await async function(s,i){if(function(o){return XC(o)&&o!==q.ABORTED}(i.code)){const r=s.L_.shift();qs(s).__(),await Dy(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Ic(s)}}(n,e),xy(n)&&Ly(n)}async function Rg(n,e){const t=pe(n);t.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const s=bi(t);t.k_.add(3),await ia(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await wc(t)}async function fR(n,e){const t=pe(n);e?(t.k_.delete(2),await wc(t)):e||(t.k_.add(2),await ia(t),t.K_.set("Unknown"))}function Sr(n){return n.W_||(n.W_=function(t,s,i){const r=pe(t);return r.b_(),new JA(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Ro:sR.bind(null,n),mo:iR.bind(null,n),po:rR.bind(null,n),R_:oR.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Rd(n)?Ad(n):n.K_.set("Unknown")):(await n.W_.stop(),Oy(n))})),n.W_}function qs(n){return n.G_||(n.G_=function(t,s,i){const r=pe(t);return r.b_(),new ZA(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:cR.bind(null,n),po:dR.bind(null,n),p_:uR.bind(null,n),y_:hR.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Ic(n)):(await n.G_.stop(),n.L_.length>0&&(Z("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class Sd{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ds,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new Sd(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bd(n,e){if(ls("AsyncQueue",`${e}: ${n}`),Rr(n))return new ee(q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class er{static emptySet(e){return new er(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ie.comparator(t.key,s.key):(t,s)=>ie.comparator(t.key,s.key),this.keyedMap=io(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof er)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new er;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Sg{constructor(){this.z_=new it(ie.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ue():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class fr{constructor(e,t,s,i,r,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new fr(e,t,er.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class pR{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class gR{constructor(){this.queries=bg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const i=pe(t),r=i.queries;i.queries=bg(),r.forEach((o,a)=>{for(const c of a.J_)c.onError(s)})})(this,new ee(q.ABORTED,"Firestore shutting down"))}}function bg(){return new Ri(n=>ny(n),mc)}async function mR(n,e){const t=pe(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.Y_()&&e.Z_()&&(s=2):(r=new pR,s=e.Z_()?0:1);try{switch(s){case 0:r.H_=await t.onListen(i,!0);break;case 1:r.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=bd(o,`Initialization of query '${Bi(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.J_.push(e),e.ea(t.onlineState),r.H_&&e.ta(r.H_)&&Pd(t)}async function _R(n,e){const t=pe(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.J_.indexOf(e);o>=0&&(r.J_.splice(o,1),r.J_.length===0?i=e.Z_()?0:1:!r.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function yR(n,e){const t=pe(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.J_)a.ta(i)&&(s=!0);o.H_=i}}s&&Pd(t)}function vR(n,e,t){const s=pe(n),i=s.queries.get(e);if(i)for(const r of i.J_)r.onError(t);s.queries.delete(e)}function Pd(n){n.X_.forEach(e=>{e.next()})}var fh,Pg;(Pg=fh||(fh={})).na="default",Pg.Cache="cache";class ER{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new fr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=fr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==fh.Cache}}/**
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
 */class My{constructor(e){this.key=e}}class Vy{constructor(e){this.key=e}}class TR{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Te(),this.mutatedKeys=Te(),this.Va=sy(e),this.ma=new er(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new Sg,i=t?t.ma:this.ma;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const g=i.get(d),_=_c(this.query,f)?f:null,A=!!g&&this.mutatedKeys.has(g.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;g&&_?g.data.isEqual(_.data)?A!==N&&(s.track({type:3,doc:_}),k=!0):this.ya(g,_)||(s.track({type:2,doc:_}),k=!0,(c&&this.Va(_,c)>0||u&&this.Va(_,u)<0)&&(a=!0)):!g&&_?(s.track({type:0,doc:_}),k=!0):g&&!_&&(s.track({type:1,doc:g}),k=!0,(c||u)&&(a=!0)),k&&(_?(o=o.add(_),r=N?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),s.track({type:1,doc:d})}return{ma:o,pa:s,ss:a,mutatedKeys:r}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,f)=>function(_,A){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return N(_)-N(A)}(d.type,f.type)||this.Va(d.doc,f.doc)),this.wa(s),i=i!=null&&i;const a=t&&!i?this.Sa():[],c=this.Ra.size===0&&this.current&&!i?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new fr(this.query,e.ma,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Sg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Te(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new Vy(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new My(s))}),t}va(e){this.da=e.ds,this.Ra=Te();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return fr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class wR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class IR{constructor(e){this.key=e,this.Fa=!1}}class CR{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Ri(a=>ny(a),mc),this.Oa=new Map,this.Na=new Set,this.La=new it(ie.comparator),this.Ba=new Map,this.ka=new Ed,this.qa={},this.Qa=new Map,this.Ka=dr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function AR(n,e,t=!0){const s=jy(n);let i;const r=s.xa.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Ca()):i=await Fy(s,e,t,!0),i}async function RR(n,e){const t=jy(n);await Fy(t,e,!0,!1)}async function Fy(n,e,t,s){const i=await HA(n.localStore,On(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let a;return s&&(a=await SR(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&ky(n.remoteStore,i),a}async function SR(n,e,t,s,i){n.Ua=(f,g,_)=>async function(N,k,x,D){let V=k.view.ga(x);V.ss&&(V=await Ig(N.localStore,k.query,!1).then(({documents:v})=>k.view.ga(v,V)));const F=D&&D.targetChanges.get(k.targetId),se=D&&D.targetMismatches.get(k.targetId)!=null,X=k.view.applyChanges(V,N.isPrimaryClient,F,se);return Ng(N,k.targetId,X.ba),X.snapshot}(n,f,g,_);const r=await Ig(n.localStore,e,!0),o=new TR(e,r.ds),a=o.ga(r.documents),c=sa.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Ng(n,t,u.ba);const d=new wR(e,t,o);return n.xa.set(e,d),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),u.snapshot}async function bR(n,e,t){const s=pe(n),i=s.xa.get(e),r=s.Oa.get(i.targetId);if(r.length>1)return s.Oa.set(i.targetId,r.filter(o=>!mc(o,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await dh(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),t&&Id(s.remoteStore,i.targetId),ph(s,i.targetId)}).catch(Ar)):(ph(s,i.targetId),await dh(s.localStore,i.targetId,!0))}async function PR(n,e){const t=pe(n),s=t.xa.get(e),i=t.Oa.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Id(t.remoteStore,s.targetId))}async function kR(n,e,t){const s=VR(n);try{const i=await function(o,a){const c=pe(o),u=rt.now(),d=a.reduce((_,A)=>_.add(A.key),Te());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let A=cs(),N=Te();return c.hs.getEntries(_,d).next(k=>{A=k,A.forEach((x,D)=>{D.isValidDocument()||(N=N.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,A)).next(k=>{f=k;const x=[];for(const D of a){const V=GC(D,f.get(D.key).overlayedDocument);V!=null&&x.push(new Si(D.key,V,z0(V.value.mapValue),is.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,x,a)}).next(k=>{g=k;const x=k.applyToLocalDocumentSet(f,N);return c.documentOverlayCache.saveOverlays(_,k.batchId,x)})}).then(()=>({batchId:g.batchId,changes:ry(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new it(we)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(s,i.batchId,t),await ra(s,i.changes),await Ic(s.remoteStore)}catch(i){const r=bd(i,"Failed to persist write");t.reject(r)}}async function Uy(n,e){const t=pe(n);try{const s=await qA(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.Ba.get(r);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?Le(o.Fa):i.removedDocuments.size>0&&(Le(o.Fa),o.Fa=!1))}),await ra(t,s,e)}catch(s){await Ar(s)}}function kg(n,e,t){const s=pe(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.xa.forEach((r,o)=>{const a=o.view.ea(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=pe(o);c.onlineState=a;let u=!1;c.queries.forEach((d,f)=>{for(const g of f.J_)g.ea(a)&&(u=!0)}),u&&Pd(c)}(s.eventManager,e),i.length&&s.Ma.R_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function NR(n,e,t){const s=pe(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Ba.get(e),r=i&&i.key;if(r){let o=new it(ie.comparator);o=o.insert(r,kt.newNoDocument(r,de.min()));const a=Te().add(r),c=new Ec(de.min(),new Map,new it(we),o,a);await Uy(s,c),s.La=s.La.remove(r),s.Ba.delete(e),kd(s)}else await dh(s.localStore,e,!1).then(()=>ph(s,e,t)).catch(Ar)}async function OR(n,e){const t=pe(n),s=e.batch.batchId;try{const i=await $A(t.localStore,e);$y(t,s,null),By(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ra(t,i)}catch(i){await Ar(i)}}async function DR(n,e,t){const s=pe(n);try{const i=await function(o,a){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Le(f!==null),d=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(s.localStore,e);$y(s,e,t),By(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ra(s,i)}catch(i){await Ar(i)}}function By(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function $y(n,e,t){const s=pe(n);let i=s.qa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.qa[s.currentUser.toKey()]=i}}function ph(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Oa.get(e))n.xa.delete(s),t&&n.Ma.Wa(s,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(s=>{n.ka.containsKey(s)||qy(n,s)})}function qy(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Id(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),kd(n))}function Ng(n,e,t){for(const s of t)s instanceof My?(n.ka.addReference(s.key,e),xR(n,s)):s instanceof Vy?(Z("SyncEngine","Document no longer in limbo: "+s.key),n.ka.removeReference(s.key,e),n.ka.containsKey(s.key)||qy(n,s.key)):ue()}function xR(n,e){const t=e.key,s=t.path.canonicalString();n.La.get(t)||n.Na.has(s)||(Z("SyncEngine","New document in limbo: "+t),n.Na.add(s),kd(n))}function kd(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ie(Ge.fromString(e)),s=n.Ka.next();n.Ba.set(s,new IR(t)),n.La=n.La.insert(t,s),ky(n.remoteStore,new Ps(On(ey(t.path)),s,"TargetPurposeLimboResolution",fc.oe))}}async function ra(n,e,t){const s=pe(n),i=[],r=[],o=[];s.xa.isEmpty()||(s.xa.forEach((a,c)=>{o.push(s.Ua(c,e,t).then(u=>{var d;if((u||t)&&s.isPrimaryClient){const f=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=wd.zi(c.targetId,u);r.push(f)}}))}),await Promise.all(o),s.Ma.R_(i),await async function(c,u){const d=pe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>B.forEach(u,g=>B.forEach(g.Wi,_=>d.persistence.referenceDelegate.addReference(f,g.targetId,_)).next(()=>B.forEach(g.Gi,_=>d.persistence.referenceDelegate.removeReference(f,g.targetId,_)))))}catch(f){if(!Rr(f))throw f;Z("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const _=d.us.get(g),A=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(A);d.us=d.us.insert(g,N)}}}(s.localStore,r))}async function LR(n,e){const t=pe(n);if(!t.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const s=await Ry(t.localStore,e);t.currentUser=e,function(r,o){r.Qa.forEach(a=>{a.forEach(c=>{c.reject(new ee(q.CANCELLED,o))})}),r.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ra(t,s.Ts)}}function MR(n,e){const t=pe(n),s=t.Ba.get(e);if(s&&s.Fa)return Te().add(s.key);{let i=Te();const r=t.Oa.get(e);if(!r)return i;for(const o of r){const a=t.xa.get(o);i=i.unionWith(a.view.fa)}return i}}function jy(n){const e=pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NR.bind(null,e),e.Ma.R_=yR.bind(null,e.eventManager),e.Ma.Wa=vR.bind(null,e.eventManager),e}function VR(n){const e=pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DR.bind(null,e),e}class Ol{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return BA(this.persistence,new FA,e.initialUser,this.serializer)}ja(e){return new Ay(Td.ei,this.serializer)}za(e){return new zA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ol.provider={build:()=>new Ol};class FR extends Ol{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Le(this.persistence.referenceDelegate instanceof kl);const s=this.persistence.referenceDelegate.garbageCollector;return new IA(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Ht.withCacheSize(this.cacheSizeBytes):Ht.DEFAULT;return new Ay(s=>kl.ei(s,t),this.serializer)}}class gh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>kg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=LR.bind(null,this.syncEngine),await fR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gR}()}createDatastore(e){const t=Tc(e.databaseInfo.databaseId),s=function(r){return new XA(r)}(e.databaseInfo);return function(r,o,a,c){return new eR(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,i,r,o,a){return new nR(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>kg(this.syncEngine,t,0),function(){return Ag.p()?new Ag:new KA}())}createSyncEngine(e,t){return function(i,r,o,a,c,u,d){const f=new CR(i,r,o,a,c,u);return d&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const r=pe(i);Z("RemoteStore","RemoteStore shutting down."),r.k_.add(5),await ia(r),r.Q_.shutdown(),r.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}gh.provider={build:()=>new gh};/**
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
 *//**
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
 */class UR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):ls("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class BR{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=Rt.UNAUTHENTICATED,this.clientId=W0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ds;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=bd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function yu(n,e){n.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ry(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Og(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $R(n);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Rg(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Rg(e.remoteStore,i)),n._onlineComponents=e}async function $R(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await yu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===q.FAILED_PRECONDITION||i.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;lr("Error using user provided cache. Falling back to memory cache: "+t),await yu(n,new Ol)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await yu(n,new FR(void 0));return n._offlineComponents}async function Wy(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Og(n,n._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Og(n,new gh))),n._onlineComponents}function qR(n){return Wy(n).then(e=>e.syncEngine)}async function jR(n){const e=await Wy(n),t=e.eventManager;return t.onListen=AR.bind(null,e.syncEngine),t.onUnlisten=bR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=PR.bind(null,e.syncEngine),t}function WR(n,e,t={}){const s=new Ds;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const d=new UR({next:g=>{d.eu(),o.enqueueAndForget(()=>_R(r,f)),g.fromCache&&c.source==="server"?u.reject(new ee(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new ER(a,d,{includeMetadataChanges:!0,ua:!0});return mR(r,f)}(await jR(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function Hy(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Dg=new Map;/**
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
 */function Gy(n,e,t){if(!t)throw new ee(q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function HR(n,e,t,s){if(e===!0&&s===!0)throw new ee(q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function xg(n){if(!ie.isDocumentKey(n))throw new ee(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Lg(n){if(ie.isDocumentKey(n))throw new ee(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Cc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ue()}function Dl(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Cc(n);throw new ee(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Mg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Z1;switch(s.type){case"firstParty":return new sC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Dg.get(t);s&&(Z("ComponentProvider","Removing Datastore"),Dg.delete(t),s.terminate())}(this),Promise.resolve()}}function GR(n,e,t,s={}){var i;const r=(n=Dl(n,Ac))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=Rt.MOCK_USER;else{a=R2(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new ee(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Rt(u)}n._authCredentials=new eC(new j0(a,c))}}/**
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
 */class br{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new br(this.firestore,e,this._query)}}class ln{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ln(this.firestore,e,this._key)}}class Ls extends br{constructor(e,t,s){super(e,t,ey(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ln(this.firestore,null,new ie(e))}withConverter(e){return new Ls(this.firestore,e,this._path)}}function zy(n,e,...t){if(n=Ft(n),Gy("collection","path",e),n instanceof Ac){const s=Ge.fromString(e,...t);return Lg(s),new Ls(n,null,s)}{if(!(n instanceof ln||n instanceof Ls))throw new ee(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ge.fromString(e,...t));return Lg(s),new Ls(n.firestore,null,s)}}function zR(n,e,...t){if(n=Ft(n),arguments.length===1&&(e=W0.newId()),Gy("doc","path",e),n instanceof Ac){const s=Ge.fromString(e,...t);return xg(s),new ln(n,null,new ie(s))}{if(!(n instanceof ln||n instanceof Ls))throw new ee(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ge.fromString(e,...t));return xg(s),new ln(n.firestore,n instanceof Ls?n.converter:null,new ie(s))}}/**
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
 */class Vg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new by(this,"async_queue_retry"),this.fu=()=>{const s=_u();s&&Z("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=_u();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=_u();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Ds;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Rr(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw ls("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=Sd.createAndSchedule(this,e,t,s,r=>this.Su(r));return this.du.push(i),i}pu(){this.Au&&ue()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Nd extends Ac{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Vg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vg(e),this._firestoreClient=void 0,await e}}}function KR(n,e){const t=typeof n=="object"?n:x0(),s=typeof n=="string"?n:"(default)",i=ud(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=A2("firestore");r&&GR(i,...r)}return i}function Ky(n){if(n._terminated)throw new ee(q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||QR(n),n._firestoreClient}function QR(n){var e,t,s;const i=n._freezeSettings(),r=function(a,c,u,d){return new yC(a,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Hy(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new BR(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class pr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pr(vt.fromBase64String(e))}catch(t){throw new ee(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pr(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Od{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qy{constructor(e){this._methodName=e}}/**
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
 */class Dd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */class xd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}}/**
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
 */const YR=/^__.*__$/;class XR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Si(e,this.data,this.fieldMask,t,this.fieldTransforms):new na(e,this.data,t,this.fieldTransforms)}}function Yy(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Ld{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Fu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:s,Nu:!1});return i.Lu(e),i}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:s,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return xl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Yy(this.Mu)&&YR.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class JR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Tc(e)}$u(e,t,s,i=!1){return new Ld({Mu:e,methodName:t,Ku:s,path:_t.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xy(n){const e=n._freezeSettings(),t=Tc(n._databaseId);return new JR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ZR(n,e,t,s,i,r={}){const o=n.$u(r.merge||r.mergeFields?2:0,e,t,i);ev("Data must be an object, but it was:",o,s);const a=Jy(s,o);let c,u;if(r.merge)c=new fn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const f of r.mergeFields){const g=tS(e,f,t);if(!o.contains(g))throw new ee(q.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);sS(d,g)||d.push(g)}c=new fn(d),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new XR(new rn(a),c,u)}function eS(n,e,t,s=!1){return Md(t,n.$u(s?4:3,e))}function Md(n,e){if(Zy(n=Ft(n)))return ev("Unsupported field value:",e,n),Jy(n,e);if(n instanceof Qy)return function(s,i){if(!Yy(i.Mu))throw i.qu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let c=Md(a,i.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,e)}return function(s,i){if((s=Ft(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return BC(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=rt.fromDate(s);return{timestampValue:Pl(i.serializer,r)}}if(s instanceof rt){const r=new rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Pl(i.serializer,r)}}if(s instanceof Dd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof pr)return{bytesValue:yy(i.serializer,s._byteString)};if(s instanceof ln){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:vd(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof xd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return md(a.serializer,c)})}}}}}}(s,i);throw i.qu(`Unsupported field value: ${Cc(s)}`)}(n,e)}function Jy(n,e){const t={};return H0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ai(n,(s,i)=>{const r=Md(i,e.Ou(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function Zy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof Dd||n instanceof pr||n instanceof ln||n instanceof Qy||n instanceof xd)}function ev(n,e,t){if(!Zy(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const s=Cc(t);throw s==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+s)}}function tS(n,e,t){if((e=Ft(e))instanceof Od)return e._internalPath;if(typeof e=="string")return tv(n,e);throw xl("Field path arguments must be of type string or ",n,!1,void 0,t)}const nS=new RegExp("[~\\*/\\[\\]]");function tv(n,e,t){if(e.search(nS)>=0)throw xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Od(...e.split("."))._internalPath}catch{throw xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xl(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new ee(q.INVALID_ARGUMENT,a+n+c)}function sS(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class nv{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class iS extends nv{data(){return super.data()}}function sv(n,e){return typeof e=="string"?tv(n,e):e instanceof Od?e._internalPath:e._delegate._internalPath}/**
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
 */function rS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vd{}class oS extends Vd{}function aS(n,e,...t){let s=[];e instanceof Vd&&s.push(e),s=s.concat(t),function(r){const o=r.filter(c=>c instanceof Ud).length,a=r.filter(c=>c instanceof Fd).length;if(o>1||o>0&&a>0)throw new ee(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class Fd extends oS{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Fd(e,t,s)}_apply(e){const t=this._parse(e);return iv(e._query,t),new br(e.firestore,e.converter,oh(e._query,t))}_parse(e){const t=Xy(e.firestore);return function(r,o,a,c,u,d,f){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ee(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Ug(f,d);const _=[];for(const A of f)_.push(Fg(c,r,A));g={arrayValue:{values:_}}}else g=Fg(c,r,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Ug(f,d),g=eS(a,o,f,d==="in"||d==="not-in");return nt.create(u,d,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ud extends Vd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ud(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:vn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const c of a)iv(o,c),o=oh(o,c)}(e._query,t),new br(e.firestore,e.converter,oh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Fg(n,e,t){if(typeof(t=Ft(t))=="string"){if(t==="")throw new ee(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ty(e)&&t.indexOf("/")!==-1)throw new ee(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!ie.isDocumentKey(s))throw new ee(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return rg(n,new ie(s))}if(t instanceof ln)return rg(n,t._key);throw new ee(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cc(t)}.`)}function Ug(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iv(n,e){const t=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ee(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class lS{convertValue(e,t="none"){switch($s(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ai(e,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertVectorValue(e){var t,s,i;const r=(i=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>Ze(o.doubleValue));return new xd(r)}convertGeoPoint(e){return new Dd(Ze(e.latitude),Ze(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=gc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const t=Us(e);return new rt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Le(Cy(s));const i=new Fo(s.get(1),s.get(3)),r=new ie(s.popFirst(5));return i.isEqual(t)||ls(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function cS(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
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
 */class $a{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uS extends nv{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(sv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class il extends uS{data(e={}){return super.data(e)}}class hS{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new $a(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new il(this._firestore,this._userDataWriter,s.key,s,new $a(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new il(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $a(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new il(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $a(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:dS(a.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function dS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}class fS extends lS{constructor(e){super(),this.firestore=e}convertBytes(e){return new pr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ln(this.firestore,null,t)}}function pS(n){n=Dl(n,br);const e=Dl(n.firestore,Nd),t=Ky(e),s=new fS(e);return rS(n._query),WR(t,n._query).then(i=>new hS(e,s,n,i))}function gS(n,e){const t=Dl(n.firestore,Nd),s=zR(n),i=cS(n.converter,e);return mS(t,[ZR(Xy(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,is.exists(!1))]).then(()=>s)}function mS(n,e){return function(s,i){const r=new Ds;return s.asyncQueue.enqueueAndForget(async()=>kR(await qR(s),i,r)),r.promise}(Ky(n),e)}(function(e,t=!0){(function(i){Cr=i})(zs),Vn(new yn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Nd(new tC(s.getProvider("auth-internal")),new rC(s.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fo(u.options.projectId,d)}(o,i),o);return r=Object.assign({useFetchStreams:t},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Zt(Zp,"4.7.5",e),Zt(Zp,"4.7.5","esm2017")})();function Bd(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function rv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _S=rv,ov=new wr("auth","Firebase",rv());/**
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
 */const Ll=new ea("@firebase/auth");function yS(n,...e){Ll.logLevel<=Ee.WARN&&Ll.warn(`Auth (${zs}): ${n}`,...e)}function rl(n,...e){Ll.logLevel<=Ee.ERROR&&Ll.error(`Auth (${zs}): ${n}`,...e)}/**
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
 */function En(n,...e){throw $d(n,...e)}function xn(n,...e){return $d(n,...e)}function av(n,e,t){const s=Object.assign(Object.assign({},_S()),{[e]:t});return new wr("auth","Firebase",s).create(e,{appName:n.name})}function rs(n){return av(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $d(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return ov.create(n,...e)}function ce(n,e,...t){if(!n)throw $d(e,...t)}function Xn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rl(e),new Error(e)}function us(n,e){n||Xn(e)}/**
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
 */function mh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function vS(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ES(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vS()||P2()||"connection"in navigator)?navigator.onLine:!0}function TS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class oa{constructor(e,t){this.shortDelay=e,this.longDelay=t,us(t>e,"Short delay should be less than long delay!"),this.isMobile=ld()||S0()}get(){return ES()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qd(n,e){us(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class lv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IS=new oa(3e4,6e4);function Ks(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Qs(n,e,t,s,i={}){return cv(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ir(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},r);return b2()||(u.referrerPolicy="no-referrer"),lv.fetch()(uv(n,n.config.apiHost,t,a),u)})}async function cv(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},wS),e);try{const i=new AS(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw qa(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qa(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qa(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw qa(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw av(n,d,u);En(n,d)}}catch(i){if(i instanceof $n)throw i;En(n,"network-request-failed",{message:String(i)})}}async function aa(n,e,t,s,i={}){const r=await Qs(n,e,t,s,i);return"mfaPendingCredential"in r&&En(n,"multi-factor-auth-required",{_serverResponse:r}),r}function uv(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?qd(n.config,i):`${n.config.apiScheme}://${i}`}function CS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(xn(this.auth,"network-request-failed")),IS.get())})}}function qa(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=xn(n,e,s);return i.customData._tokenResponse=t,i}function $g(n){return n!==void 0&&n.enterprise!==void 0}class RS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return CS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function SS(n,e){return Qs(n,"GET","/v2/recaptchaConfig",Ks(n,e))}/**
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
 */async function bS(n,e){return Qs(n,"POST","/v1/accounts:delete",e)}async function hv(n,e){return Qs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function vo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PS(n,e=!1){const t=Ft(n),s=await t.getIdToken(e),i=jd(s);ce(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:vo(vu(i.auth_time)),issuedAtTime:vo(vu(i.iat)),expirationTime:vo(vu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function vu(n){return Number(n)*1e3}function jd(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const i=El(t);return i?JSON.parse(i):(rl("Failed to decode base64 JWT payload"),null)}catch(i){return rl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qg(n){const e=jd(n);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qo(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof $n&&kS(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function kS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class NS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _h{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vo(this.lastLoginAt),this.creationTime=vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ml(n){var e;const t=n.auth,s=await n.getIdToken(),i=await qo(n,hv(t,{idToken:s}));ce(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?dv(r.providerUserInfo):[],a=DS(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new _h(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function OS(n){const e=Ft(n);await Ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DS(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function dv(n){return n.map(e=>{var{providerId:t}=e,s=Bd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function xS(n,e){const t=await cv(n,{},async()=>{const s=Ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=uv(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function LS(n,e){return Qs(n,"POST","/v2/accounts:revokeToken",Ks(n,e))}/**
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
 */class tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const t=qg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await xS(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new tr;return s&&(ce(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ce(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ce(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tr,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
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
 */function Es(n,e){ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=Bd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new _h(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await qo(this,this.stsTokenManager.getToken(this.auth,e));return ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return PS(this,e)}reload(){return OS(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ml(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(rs(this.auth));const e=await this.getIdToken();return await qo(this,bS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,u,d;const f=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,_=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,N=(a=t.tenantId)!==null&&a!==void 0?a:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=t.createdAt)!==null&&u!==void 0?u:void 0,D=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:V,emailVerified:F,isAnonymous:se,providerData:X,stsTokenManager:v}=t;ce(V&&v,e,"internal-error");const y=tr.fromJSON(this.name,v);ce(typeof V=="string",e,"internal-error"),Es(f,e.name),Es(g,e.name),ce(typeof F=="boolean",e,"internal-error"),ce(typeof se=="boolean",e,"internal-error"),Es(_,e.name),Es(A,e.name),Es(N,e.name),Es(k,e.name),Es(x,e.name),Es(D,e.name);const T=new Jn({uid:V,auth:e,email:g,emailVerified:F,displayName:f,isAnonymous:se,photoURL:A,phoneNumber:_,tenantId:N,stsTokenManager:y,createdAt:x,lastLoginAt:D});return X&&Array.isArray(X)&&(T.providerData=X.map(C=>Object.assign({},C))),k&&(T._redirectEventId=k),T}static async _fromIdTokenResponse(e,t,s=!1){const i=new tr;i.updateFromServerResponse(t);const r=new Jn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ml(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];ce(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?dv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new tr;a.updateFromIdToken(s);const c=new Jn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new _h(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
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
 */const jg=new Map;function Zn(n){us(n instanceof Function,"Expected a class definition");let e=jg.get(n);return e?(us(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jg.set(n,e),e)}/**
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
 */class fv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fv.type="NONE";const Wg=fv;/**
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
 */function ol(n,e,t){return`firebase:${n}:${e}:${t}`}class nr{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ol(this.userKey,i.apiKey,r),this.fullPersistenceKey=ol("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new nr(Zn(Wg),e,s);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Zn(Wg);const o=ol(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const d=await u._get(o);if(d){const f=Jn._fromJSON(e,d);u!==r&&(a=f),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new nr(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new nr(r,e,s))}}/**
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
 */function Hg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_v(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vv(e))return"Blackberry";if(Ev(e))return"Webos";if(gv(e))return"Safari";if((e.includes("chrome/")||mv(e))&&!e.includes("edge/"))return"Chrome";if(yv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pv(n=Vt()){return/firefox\//i.test(n)}function gv(n=Vt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mv(n=Vt()){return/crios\//i.test(n)}function _v(n=Vt()){return/iemobile/i.test(n)}function yv(n=Vt()){return/android/i.test(n)}function vv(n=Vt()){return/blackberry/i.test(n)}function Ev(n=Vt()){return/webos/i.test(n)}function Wd(n=Vt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function MS(n=Vt()){var e;return Wd(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VS(){return k2()&&document.documentMode===10}function Tv(n=Vt()){return Wd(n)||yv(n)||Ev(n)||vv(n)||/windows phone/i.test(n)||_v(n)}/**
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
 */function wv(n,e=[]){let t;switch(n){case"Browser":t=Hg(Vt());break;case"Worker":t=`${Hg(Vt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zs}/${s}`}/**
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
 */class FS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function US(n,e={}){return Qs(n,"GET","/v2/passwordPolicy",Ks(n,e))}/**
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
 */const BS=6;class $S{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:BS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class qS{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gg(this),this.idTokenSubscription=new Gg(this),this.beforeStateQueue=new FS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ov,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zn(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await nr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await hv(this,{idToken:e}),s=await Jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(bn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ml(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bn(this.app))return Promise.reject(rs(this));const t=e?Ft(e):null;return t&&ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(rs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bn(this.app)?Promise.reject(rs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await US(this),t=new $S(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wr("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await LS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zn(e)||this._popupRedirectResolver;ce(t,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[Zn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&yS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Pi(n){return Ft(n)}class Gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=U2(t=>this.observer=t)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jS(n){Rc=n}function Iv(n){return Rc.loadJS(n)}function WS(){return Rc.recaptchaEnterpriseScript}function HS(){return Rc.gapiScript}function GS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class zS{constructor(){this.enterprise=new KS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class KS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const QS="recaptcha-enterprise",Cv="NO_RECAPTCHA";class YS{constructor(e){this.type=QS,this.auth=Pi(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{SS(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new RS(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;$g(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(Cv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zS().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&$g(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=WS();c.length!==0&&(c+=a),Iv(c).then(()=>{i(a,r,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function zg(n,e,t,s=!1,i=!1){const r=new YS(n);let o;if(i)o=Cv;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function yh(n,e,t,s,i){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await zg(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await zg(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
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
 */function XS(n,e){const t=ud(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(wl(r,e??{}))return i;En(i,"already-initialized")}return t.initialize({options:e})}function JS(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Zn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ZS(n,e,t){const s=Pi(n);ce(s._canInitEmulator,s,"emulator-config-failed"),ce(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Av(e),{host:o,port:a}=eb(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),tb()}function Av(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function eb(n){const e=Av(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Kg(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Kg(o)}}}function Kg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function tb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Hd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,t){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}async function nb(n,e){return Qs(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function sb(n,e){return aa(n,"POST","/v1/accounts:signInWithPassword",Ks(n,e))}/**
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
 */async function ib(n,e){return aa(n,"POST","/v1/accounts:signInWithEmailLink",Ks(n,e))}async function rb(n,e){return aa(n,"POST","/v1/accounts:signInWithEmailLink",Ks(n,e))}/**
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
 */class jo extends Hd{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new jo(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new jo(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yh(e,t,"signInWithPassword",sb);case"emailLink":return ib(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yh(e,s,"signUpPassword",nb);case"emailLink":return rb(e,{idToken:t,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function sr(n,e){return aa(n,"POST","/v1/accounts:signInWithIdp",Ks(n,e))}/**
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
 */const ob="http://localhost";class _i extends Hd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):En("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=Bd(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new _i(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return sr(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,sr(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,sr(e,t)}buildRequest(){const e={requestUri:ob,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ir(t)}return e}}/**
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
 */function ab(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lb(n){const e=to(no(n)).link,t=e?to(no(e)).deep_link_id:null,s=to(no(n)).deep_link_id;return(s?to(no(s)).link:null)||s||t||e||n}class Gd{constructor(e){var t,s,i,r,o,a;const c=to(no(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,f=ab((i=c.mode)!==null&&i!==void 0?i:null);ce(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=lb(e);try{return new Gd(t)}catch{return null}}}/**
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
 */class Pr{constructor(){this.providerId=Pr.PROVIDER_ID}static credential(e,t){return jo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Gd.parseLink(t);return ce(s,"argument-error"),jo._fromEmailAndCode(e,s.code,s.tenantId)}}Pr.PROVIDER_ID="password";Pr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class la extends Rv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class As extends la{constructor(){super("facebook.com")}static credential(e){return _i._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return As.credential(e.oauthAccessToken)}catch{return null}}}As.FACEBOOK_SIGN_IN_METHOD="facebook.com";As.PROVIDER_ID="facebook.com";/**
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
 */class Rs extends la{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _i._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Rs.credential(t,s)}catch{return null}}}Rs.GOOGLE_SIGN_IN_METHOD="google.com";Rs.PROVIDER_ID="google.com";/**
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
 */class Ss extends la{constructor(){super("github.com")}static credential(e){return _i._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ss.credential(e.oauthAccessToken)}catch{return null}}}Ss.GITHUB_SIGN_IN_METHOD="github.com";Ss.PROVIDER_ID="github.com";/**
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
 */class bs extends la{constructor(){super("twitter.com")}static credential(e,t){return _i._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bs.credentialFromTaggedObject(e)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return bs.credential(t,s)}catch{return null}}}bs.TWITTER_SIGN_IN_METHOD="twitter.com";bs.PROVIDER_ID="twitter.com";/**
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
 */async function cb(n,e){return aa(n,"POST","/v1/accounts:signUp",Ks(n,e))}/**
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
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Jn._fromIdTokenResponse(e,s,i),o=Qg(s);return new yi({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Qg(s);return new yi({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Qg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Vl extends $n{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Vl.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Vl(e,t,s,i)}}function Sv(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Vl._fromErrorAndOperation(n,r,e,s):r})}async function ub(n,e,t=!1){const s=await qo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yi._forOperation(n,"link",s)}/**
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
 */async function hb(n,e,t=!1){const{auth:s}=n;if(bn(s.app))return Promise.reject(rs(s));const i="reauthenticate";try{const r=await qo(n,Sv(s,i,e,n),t);ce(r.idToken,s,"internal-error");const o=jd(r.idToken);ce(o,s,"internal-error");const{sub:a}=o;return ce(n.uid===a,s,"user-mismatch"),yi._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&En(s,"user-mismatch"),r}}/**
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
 */async function bv(n,e,t=!1){if(bn(n.app))return Promise.reject(rs(n));const s="signIn",i=await Sv(n,s,e),r=await yi._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function db(n,e){return bv(Pi(n),e)}/**
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
 */async function Pv(n){const e=Pi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fb(n,e,t){if(bn(n.app))return Promise.reject(rs(n));const s=Pi(n),o=await yh(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cb).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Pv(n),c}),a=await yi._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function pb(n,e,t){return bn(n.app)?Promise.reject(rs(n)):db(Ft(n),Pr.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Pv(n),s})}function gb(n,e,t,s){return Ft(n).onIdTokenChanged(e,t,s)}function mb(n,e,t){return Ft(n).beforeAuthStateChanged(e,t)}function _b(n,e,t,s){return Ft(n).onAuthStateChanged(e,t,s)}function yb(n){return Ft(n).signOut()}const Fl="__sak";/**
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
 */class kv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fl,"1"),this.storage.removeItem(Fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vb=1e3,Eb=10;class Nv extends kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);VS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Eb):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},vb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nv.type="LOCAL";const Tb=Nv;/**
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
 */class Ov extends kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ov.type="SESSION";const Dv=Ov;/**
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
 */function wb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Sc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,r)),c=await wb(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sc.receivers=[];/**
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
 */function zd(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ib{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=zd("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(g.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ln(){return window}function Cb(n){Ln().location.href=n}/**
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
 */function xv(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function Ab(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Sb(){return xv()?self:null}/**
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
 */const Lv="firebaseLocalStorageDb",bb=1,Ul="firebaseLocalStorage",Mv="fbase_key";class ca{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bc(n,e){return n.transaction([Ul],e?"readwrite":"readonly").objectStore(Ul)}function Pb(){const n=indexedDB.deleteDatabase(Lv);return new ca(n).toPromise()}function vh(){const n=indexedDB.open(Lv,bb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Ul,{keyPath:Mv})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Ul)?e(s):(s.close(),await Pb(),e(await vh()))})})}async function Yg(n,e,t){const s=bc(n,!0).put({[Mv]:e,value:t});return new ca(s).toPromise()}async function kb(n,e){const t=bc(n,!1).get(e),s=await new ca(t).toPromise();return s===void 0?null:s.value}function Xg(n,e){const t=bc(n,!0).delete(e);return new ca(t).toPromise()}const Nb=800,Ob=3;class Vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Ob)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sc._getInstance(Sb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ab(),!this.activeServiceWorker)return;this.sender=new Ib(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vh();return await Yg(e,Fl,"1"),await Xg(e,Fl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>kb(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=bc(i,!1).getAll();return new ca(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vv.type="LOCAL";const Db=Vv;new oa(3e4,6e4);/**
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
 */function xb(n,e){return e?Zn(e):(ce(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Kd extends Hd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return sr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lb(n){return bv(n.auth,new Kd(n),n.bypassAuthState)}function Mb(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),hb(t,new Kd(n),n.bypassAuthState)}async function Vb(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),ub(t,new Kd(n),n.bypassAuthState)}/**
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
 */class Fv{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lb;case"linkViaPopup":case"linkViaRedirect":return Vb;case"reauthViaPopup":case"reauthViaRedirect":return Mb;default:En(this.auth,"internal-error")}}resolve(e){us(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){us(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Fb=new oa(2e3,1e4);class Hi extends Fv{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){us(this.filter.length===1,"Popup operations only handle one event");const e=zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fb.get())};e()}}Hi.currentPopupAction=null;/**
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
 */const Ub="pendingRedirect",al=new Map;class Bb extends Fv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const s=await $b(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $b(n,e){const t=Wb(e),s=jb(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function qb(n,e){al.set(n._key(),e)}function jb(n){return Zn(n._redirectPersistence)}function Wb(n){return ol(Ub,n.config.apiKey,n.name)}async function Hb(n,e,t=!1){if(bn(n.app))return Promise.reject(rs(n));const s=Pi(n),i=xb(s,e),o=await new Bb(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Gb=10*60*1e3;class zb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Uv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(xn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Uv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uv(n);default:return!1}}/**
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
 */async function Qb(n,e={}){return Qs(n,"GET","/v1/projects",e)}/**
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
 */const Yb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xb=/^https?/;async function Jb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Qb(n);for(const t of e)try{if(Zb(t))return}catch{}En(n,"unauthorized-domain")}function Zb(n){const e=mh(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Xb.test(t))return!1;if(Yb.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const eP=new oa(3e4,6e4);function Zg(){const n=Ln().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tP(n){return new Promise((e,t)=>{var s,i,r;function o(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),t(xn(n,"network-request-failed"))},timeout:eP.get()})}if(!((i=(s=Ln().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ln().gapi)===null||r===void 0)&&r.load)o();else{const a=GS("iframefcb");return Ln()[a]=()=>{gapi.load?o():t(xn(n,"network-request-failed"))},Iv(`${HS()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ll=null,e})}let ll=null;function nP(n){return ll=ll||tP(n),ll}/**
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
 */const sP=new oa(5e3,15e3),iP="__/auth/iframe",rP="emulator/auth/iframe",oP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lP(n){const e=n.config;ce(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qd(e,rP):`https://${n.config.authDomain}/${iP}`,s={apiKey:e.apiKey,appName:n.name,v:zs},i=aP.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Ir(s).slice(1)}`}async function cP(n){const e=await nP(n),t=Ln().gapi;return ce(t,n,"internal-error"),e.open({where:document.body,url:lP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oP,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=xn(n,"network-request-failed"),a=Ln().setTimeout(()=>{r(o)},sP.get());function c(){Ln().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const uP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hP=500,dP=600,fP="_blank",pP="http://localhost";class em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gP(n,e,t,s=hP,i=dP){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},uP),{width:s.toString(),height:i.toString(),top:r,left:o}),u=Vt().toLowerCase();t&&(a=mv(u)?fP:t),pv(u)&&(e=e||pP,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[_,A])=>`${g}${_}=${A},`,"");if(MS(u)&&a!=="_self")return mP(e||"",a),new em(null);const f=window.open(e||"",a,d);ce(f,n,"popup-blocked");try{f.focus()}catch{}return new em(f)}function mP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const _P="__/auth/handler",yP="emulator/auth/handler",vP=encodeURIComponent("fac");async function tm(n,e,t,s,i,r){ce(n.config.authDomain,n,"auth-domain-config-required"),ce(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:zs,eventId:i};if(e instanceof Rv){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ku(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof la){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),u=c?`#${vP}=${encodeURIComponent(c)}`:"";return`${EP(n)}?${Ir(a).slice(1)}${u}`}function EP({config:n}){return n.emulator?qd(n,yP):`https://${n.authDomain}/${_P}`}/**
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
 */const Eu="webStorageSupport";class TP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dv,this._completeRedirectFn=Hb,this._overrideRedirectResult=qb}async _openPopup(e,t,s,i){var r;us((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await tm(e,t,s,mh(),i);return gP(e,o,zd())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await tm(e,t,s,mh(),i);return Cb(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(us(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await cP(e),s=new zb(e);return t.register("authEvent",i=>(ce(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Eu,{type:Eu},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Eu];o!==void 0&&t(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tv()||gv()||Wd()}}const wP=TP;var nm="@firebase/auth",sm="1.8.1";/**
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
 */class IP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AP(n){Vn(new yn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wv(n)},u=new qS(s,i,r,c);return JS(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Vn(new yn("auth-internal",e=>{const t=Pi(e.getProvider("auth").getImmediate());return(s=>new IP(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(nm,sm,CP(n)),Zt(nm,sm,"esm2017")}/**
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
 */const RP=5*60,SP=R0("authIdTokenMaxAge")||RP;let im=null;const bP=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>SP)return;const i=t==null?void 0:t.token;im!==i&&(im=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ua(n=x0()){const e=ud(n,"auth");if(e.isInitialized())return e.getImmediate();const t=XS(n,{popupRedirectResolver:wP,persistence:[Db,Tb,Dv]}),s=R0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=bP(r.toString());mb(t,o,()=>o(t.currentUser)),gb(t,a=>o(a))}}const i=C0("auth");return i&&ZS(t,`http://${i}`),t}function PP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}jS({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=xn("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",PP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AP("Browser");/**
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
 */const kP=new Map,NP={activated:!1,tokenObservers:[]};function Tn(n){return kP.get(n)||Object.assign({},NP)}const rm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class OP{constructor(e,t,s,i,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Do,this.pending.promise.catch(t=>{}),await DP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Do,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function DP(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const xP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Bl=new wr("appCheck","AppCheck",xP);function Bv(n){if(!Tn(n).activated)throw Bl.create("use-before-activation",{appName:n.name})}/**
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
 */const LP="firebase-app-check-database",MP=1,Eh="firebase-app-check-store";let ja=null;function VP(){return ja||(ja=new Promise((n,e)=>{try{const t=indexedDB.open(LP,MP);t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;e(Bl.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Eh,{keyPath:"compositeKey"})}}}catch(t){e(Bl.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),ja)}function FP(n,e){return UP(BP(n),e)}async function UP(n,e){const s=(await VP()).transaction(Eh,"readwrite"),r=s.objectStore(Eh).put({compositeKey:n,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var u;a(Bl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function BP(n){return`${n.options.appId}-${n.name}`}/**
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
 */const Th=new ea("@firebase/app-check");function om(n,e){return P0()?FP(n,e).catch(t=>{Th.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
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
 */const $P={error:"UNKNOWN_ERROR"};function qP(n){return uc.encodeString(JSON.stringify(n),!1)}async function wh(n,e=!1){const t=n.app;Bv(t);const s=Tn(t);let i=s.token,r;if(i&&!oo(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(oo(c)?i=c:await om(t,void 0))}if(!e&&i&&oo(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Tn(t).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Th.warn(c.message):Th.error(c),r=c}let a;return i?r?oo(i)?a={token:i.token,internalError:r}:a=lm(r):(a={token:i.token},s.token=i,await om(t,i)):a=lm(r),o&&GP(t,a),a}async function jP(n){const e=n.app;Bv(e);const{provider:t}=Tn(e);{const{token:s}=await t.getToken();return{token:s}}}function WP(n,e,t,s){const{app:i}=n,r=Tn(i),o={next:t,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&oo(r.token)){const a=r.token;Promise.resolve().then(()=>{t({token:a.token}),am(n)}).catch(()=>{})}r.cachedTokenPromise.then(()=>am(n))}function $v(n,e){const t=Tn(n),s=t.tokenObservers.filter(i=>i.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function am(n){const{app:e}=n,t=Tn(e);let s=t.tokenRefresher;s||(s=HP(n),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function HP(n){const{app:e}=n;return new OP(async()=>{const t=Tn(e);let s;if(t.token?s=await wh(n,!0):s=await wh(n),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=Tn(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},rm.RETRIAL_MIN_WAIT,rm.RETRIAL_MAX_WAIT)}function GP(n,e){const t=Tn(n).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function oo(n){return n.expireTimeMillis-Date.now()>0}function lm(n){return{token:qP($P),error:n}}/**
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
 */class zP{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Tn(this.app);for(const t of e)$v(this.app,t.next);return Promise.resolve()}}function KP(n,e){return new zP(n,e)}function QP(n){return{getToken:e=>wh(n,e),getLimitedUseToken:()=>jP(n),addTokenListener:e=>WP(n,"INTERNAL",e),removeTokenListener:e=>$v(n.app,e)}}const YP="@firebase/app-check",XP="0.8.10",JP="app-check",cm="app-check-internal";function ZP(){Vn(new yn(JP,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return KP(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(cm).initialize()})),Vn(new yn(cm,n=>{const e=n.getProvider("app-check").getImmediate();return QP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Zt(YP,XP)}ZP();const ek=Symbol("firebaseApp");var um={};const hm="@firebase/database",dm="1.0.10";/**
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
 */let qv="";function tk(n){qv=n}/**
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
 */class nk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),mt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:xo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class sk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ps(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const jv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nk(e)}}catch{}return new sk},li=jv("localStorage"),ik=jv("sessionStorage");/**
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
 */const ir=new ea("@firebase/database"),rk=function(){let n=1;return function(){return n++}}(),Wv=function(n){const e=j2(n),t=new F2;t.update(e);const s=t.digest();return uc.encodeByteArray(s)},ha=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ha.apply(null,s):typeof s=="object"?e+=mt(s):e+=s,e+=" "}return e};let Eo=null,fm=!0;const ok=function(n,e){K(!e,"Can't turn on custom loggers persistently."),ir.logLevel=Ee.VERBOSE,Eo=ir.log.bind(ir)},Nt=function(...n){if(fm===!0&&(fm=!1,Eo===null&&ik.get("logging_enabled")===!0&&ok()),Eo){const e=ha.apply(null,n);Eo(e)}},da=function(n){return function(...e){Nt(n,...e)}},Ih=function(...n){const e="FIREBASE INTERNAL ERROR: "+ha(...n);ir.error(e)},vi=function(...n){const e=`FIREBASE FATAL ERROR: ${ha(...n)}`;throw ir.error(e),new Error(e)},en=function(...n){const e="FIREBASE WARNING: "+ha(...n);ir.warn(e)},ak=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&en("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hv=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},lk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},gr="[MIN_NAME]",Ei="[MAX_NAME]",kr=function(n,e){if(n===e)return 0;if(n===gr||e===Ei)return-1;if(e===gr||n===Ei)return 1;{const t=pm(n),s=pm(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},ck=function(n,e){return n===e?0:n<e?-1:1},Kr=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+mt(e))},Qd=function(n){if(typeof n!="object"||n===null)return mt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=mt(e[s]),t+=":",t+=Qd(n[e[s]]);return t+="}",t},Gv=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function un(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const zv=function(n){K(!Hv(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const d=u.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(d.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},uk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},dk=new RegExp("^-?(0*)\\d{1,10}$"),fk=-2147483648,pk=2147483647,pm=function(n){if(dk.test(n)){const e=Number(n);if(e>=fk&&e<=pk)return e}return null},fa=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw en("Exception was thrown by user callback.",t),e},Math.floor(0))}},gk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},To=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class mk{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){en(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _k{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',en(e)}}/**
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
 */const Yd="5",Kv="v",Qv="s",Yv="r",Xv="f",Jv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zv="ls",eE="p",Ch="ac",tE="websocket",nE="long_polling";/**
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
 */class yk{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=li.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&li.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function vk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function sE(n,e,t){K(typeof e=="string","typeof type must == string"),K(typeof t=="object","typeof params must == object");let s;if(e===tE)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===nE)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vk(n)&&(t.ns=n.namespace);const i=[];return un(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Ek{constructor(){this.counters_={}}incrementCounter(e,t=1){ps(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return v2(this.counters_)}}/**
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
 */const Tu={},wu={};function Xd(n){const e=n.toString();return Tu[e]||(Tu[e]=new Ek),Tu[e]}function Tk(n,e){const t=n.toString();return wu[t]||(wu[t]=e()),wu[t]}/**
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
 */class wk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&fa(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gm="start",Ik="close",Ck="pLPCommand",Ak="pRTLPCB",iE="id",rE="pw",oE="ser",Rk="cb",Sk="seg",bk="ts",Pk="d",kk="dframe",aE=1870,lE=30,Nk=aE-lE,Ok=25e3,Dk=3e4;class Gi{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=da(e),this.stats_=Xd(t),this.urlFn=c=>(this.appCheckToken&&(c[Ch]=this.appCheckToken),sE(t,nE,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new wk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Dk)),lk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jd((...r)=>{const[o,a,c,u,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gm)this.id=a,this.password=c;else if(o===Ik)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[gm]="t",s[oE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Rk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Kv]=Yd,this.transportSessionId&&(s[Qv]=this.transportSessionId),this.lastSessionId&&(s[Zv]=this.lastSessionId),this.applicationId&&(s[eE]=this.applicationId),this.appCheckToken&&(s[Ch]=this.appCheckToken),typeof location<"u"&&location.hostname&&Jv.test(location.hostname)&&(s[Yv]=Xv);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gi.forceAllow_=!0}static forceDisallow(){Gi.forceDisallow_=!0}static isAvailable(){return Gi.forceAllow_?!0:!Gi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uk()&&!hk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=mt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=w0(t),i=Gv(s,Nk);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[kk]="t",s[iE]=e,s[rE]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=mt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Jd{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rk(),window[Ck+this.uniqueCallbackIdentifier]=e,window[Ak+this.uniqueCallbackIdentifier]=t,this.myIFrame=Jd.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Nt("frame writing exception"),a.stack&&Nt(a.stack),Nt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Nt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[iE]=this.myID,e[rE]=this.myPW,e[oE]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lE+s.length<=aE;){const o=this.pendingSegs.shift();s=s+"&"+Sk+i+"="+o.seg+"&"+bk+i+"="+o.ts+"&"+Pk+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Ok)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const xk=16384,Lk=45e3;let $l=null;typeof MozWebSocket<"u"?$l=MozWebSocket:typeof WebSocket<"u"&&($l=WebSocket);class Pn{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=da(this.connId),this.stats_=Xd(t),this.connURL=Pn.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Kv]=Yd,typeof location<"u"&&location.hostname&&Jv.test(location.hostname)&&(o[Yv]=Xv),t&&(o[Qv]=t),s&&(o[Zv]=s),i&&(o[Ch]=i),r&&(o[eE]=r),sE(e,tE,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,li.set("previous_websocket_failure",!0);try{let s;b0(),this.mySock=new $l(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Pn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&$l!==null&&!Pn.forceDisallow_}static previouslyFailed(){return li.isInMemoryStorage||li.get("previous_websocket_failure")===!0}markConnectionHealthy(){li.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=xo(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=mt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Gv(t,xk);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Lk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pn.responsesRequiredToBeHealthy=2;Pn.healthyTimeout=3e4;/**
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
 */class Wo{static get ALL_TRANSPORTS(){return[Gi,Pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Pn.isAvailable();let s=t&&!Pn.previouslyFailed();if(e.webSocketOnly&&(t||en("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Pn];else{const i=this.transports_=[];for(const r of Wo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Wo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wo.globalTransportInitialized_=!1;/**
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
 */const Mk=6e4,Vk=5e3,Fk=10*1024,Uk=100*1024,Iu="t",mm="d",Bk="s",_m="r",$k="e",ym="o",vm="a",Em="n",Tm="p",qk="h";class jk{constructor(e,t,s,i,r,o,a,c,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=da("c:"+this.id+":"),this.transportManager_=new Wo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=To(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Uk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Iu in e){const t=e[Iu];t===vm?this.upgradeIfSecondaryHealthy_():t===_m?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ym&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Kr("t",e),s=Kr("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Em,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Kr("t",e),s=Kr("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Kr(Iu,e);if(mm in e){const s=e[mm];if(t===qk){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Em){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Bk?this.onConnectionShutdown_(s):t===_m?this.onReset_(s):t===$k?Ih("Server Error: "+s):t===ym?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ih("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Yd!==s&&en("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),To(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Mk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):To(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Vk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(li.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class cE{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class uE{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){K(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ql extends uE{static getInstance(){return new ql}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ld()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const wm=32,Im=768;class ze{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ve(){return new ze("")}function Re(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function js(n){return n.pieces_.length-n.pieceNum_}function We(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ze(n.pieces_,e)}function hE(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Wk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function dE(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function fE(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ze(e,0)}function ut(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ze)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new ze(t,0)}function Ie(n){return n.pieceNum_>=n.pieces_.length}function on(n,e){const t=Re(n),s=Re(e);if(t===null)return e;if(t===s)return on(We(n),We(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function pE(n,e){if(js(n)!==js(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function pn(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(js(n)>js(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Hk{constructor(e,t){this.errorPrefix_=t,this.parts_=dE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=dc(this.parts_[s]);gE(this)}}function Gk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=dc(e),gE(n)}function zk(n){const e=n.parts_.pop();n.byteLength_-=dc(e),n.parts_.length>0&&(n.byteLength_-=1)}function gE(n){if(n.byteLength_>Im)throw new Error(n.errorPrefix_+"has a key path longer than "+Im+" bytes ("+n.byteLength_+").");if(n.parts_.length>wm)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wm+") or object contains a cycle "+ri(n))}function ri(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Zd extends uE{static getInstance(){return new Zd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Qr=1e3,Kk=60*5*1e3,Cm=30*1e3,Qk=1.3,Yk=3e4,Xk="server_kill",Am=3;class os extends cE{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=os.nextPersistentConnectionId_++,this.log_=da("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qr,this.maxReconnectDelay_=Kk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!b0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ql.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(mt(r)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Do,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,u=a.s;os.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ps(e,"w")){const s=ar(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();en(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||V2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=M2(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+mt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ih("Unrecognized action received from server: "+mt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Yk&&(this.reconnectDelay_=Qr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Qk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+os.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Nt("getToken() completed but was canceled"):(Nt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,a=new jk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{en(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Xk)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&en(f),c())}}}interrupt(e){Nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ku(this.interruptReasons_)&&(this.reconnectDelay_=Qr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Qd(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new ze(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Nt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Am&&(this.reconnectDelay_=Cm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Nt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Am&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+qv.replace(/\./g,"-")]=1,ld()?e["framework.cordova"]=1:S0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ql.getInstance().currentlyOnline();return Ku(this.interruptReasons_)&&e}}os.nextPersistentConnectionId_=0;os.nextConnectionId_=0;/**
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
 */class Se{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Se(e,t)}}/**
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
 */class Pc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Se(gr,e),i=new Se(gr,t);return this.compare(s,i)!==0}minPost(){return Se.MIN}}/**
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
 */let Wa;class mE extends Pc{static get __EMPTY_NODE(){return Wa}static set __EMPTY_NODE(e){Wa=e}compare(e,t){return kr(e.name,t.name)}isDefinedOn(e){throw Tr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Se.MIN}maxPost(){return new Se(Ei,Wa)}makePost(e,t){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new Se(e,Wa)}toString(){return".key"}}const rr=new mE;/**
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
 */class Ha{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ct{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ct.RED,this.left=i??Gt.EMPTY_NODE,this.right=r??Gt.EMPTY_NODE}copy(e,t,s,i,r){return new ct(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Gt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ct.RED=!0;ct.BLACK=!1;class Jk{copy(e,t,s,i,r){return this}insert(e,t,s){return new ct(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Gt{constructor(e,t=Gt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Gt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ct.BLACK,null,null))}remove(e){return new Gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ct.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ha(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ha(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ha(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ha(this.root_,null,this.comparator_,!0,e)}}Gt.EMPTY_NODE=new Jk;/**
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
 */function Zk(n,e){return kr(n.name,e.name)}function ef(n,e){return kr(n,e)}/**
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
 */let Ah;function eN(n){Ah=n}const _E=function(n){return typeof n=="number"?"number:"+zv(n):"string:"+n},yE=function(n){if(n.isLeafNode()){const e=n.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ps(e,".sv"),"Priority must be a string or number.")}else K(n===Ah||n.isEmpty(),"priority of unexpected type.");K(n===Ah||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Rm;class at{static set __childrenNodeConstructor(e){Rm=e}static get __childrenNodeConstructor(){return Rm}constructor(e,t=at.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new at(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ie(e)?this:Re(e)===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:at.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Re(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(K(s!==".priority"||js(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,at.__childrenNodeConstructor.EMPTY_NODE.updateChild(We(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_E(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=zv(this.value_):e+=this.value_,this.lazyHash_=Wv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===at.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof at.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=at.VALUE_TYPE_ORDER.indexOf(t),r=at.VALUE_TYPE_ORDER.indexOf(s);return K(i>=0,"Unknown leaf type: "+t),K(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}at.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let vE,EE;function tN(n){vE=n}function nN(n){EE=n}class sN extends Pc{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?kr(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Se.MIN}maxPost(){return new Se(Ei,new at("[PRIORITY-POST]",EE))}makePost(e,t){const s=vE(e);return new Se(t,new at("[PRIORITY-POST]",s))}toString(){return".priority"}}const xt=new sN;/**
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
 */const iN=Math.log(2);class rN{constructor(e){const t=r=>parseInt(Math.log(r)/iN,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jl=function(n,e,t,s){n.sort(e);const i=function(c,u){const d=u-c;let f,g;if(d===0)return null;if(d===1)return f=n[c],g=t?t(f):f,new ct(g,f.node,ct.BLACK,null,null);{const _=parseInt(d/2,10)+c,A=i(c,_),N=i(_+1,u);return f=n[_],g=t?t(f):f,new ct(g,f.node,ct.BLACK,A,N)}},r=function(c){let u=null,d=null,f=n.length;const g=function(A,N){const k=f-A,x=f;f-=A;const D=i(k+1,x),V=n[k],F=t?t(V):V;_(new ct(F,V.node,N,null,D))},_=function(A){u?(u.left=A,u=A):(d=A,u=A)};for(let A=0;A<c.count;++A){const N=c.nextBitIsOne(),k=Math.pow(2,c.count-(A+1));N?g(k,ct.BLACK):(g(k,ct.BLACK),g(k,ct.RED))}return d},o=new rN(n.length),a=r(o);return new Gt(s||e,a)};/**
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
 */let Cu;const Yr={};class es{static get Default(){return K(xt,"ChildrenNode.ts has not been loaded"),Cu=Cu||new es({".priority":Yr},{".priority":xt}),Cu}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ar(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gt?t:null}hasIndex(e){return ps(this.indexSet_,e.toString())}addIndex(e,t){K(e!==rr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(Se.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=jl(s,e.getCompare()):a=Yr;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new es(d,u)}addToIndexes(e,t){const s=Tl(this.indexes_,(i,r)=>{const o=ar(this.indexSet_,r);if(K(o,"Missing index implementation for "+r),i===Yr)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Se.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),jl(a,o.getCompare())}else return Yr;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new Se(e.name,a))),c.insert(e,e.node)}});return new es(s,this.indexSet_)}removeFromIndexes(e,t){const s=Tl(this.indexes_,i=>{if(i===Yr)return i;{const r=t.get(e.name);return r?i.remove(new Se(e.name,r)):i}});return new es(s,this.indexSet_)}}/**
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
 */let Xr;class xe{static get EMPTY_NODE(){return Xr||(Xr=new xe(new Gt(ef),null,es.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&yE(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xr}updatePriority(e){return this.children_.isEmpty()?this:new xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Xr:t}}getChild(e){const t=Re(e);return t===null?this:this.getImmediateChild(t).getChild(We(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(K(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Se(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Xr:this.priorityNode_;return new xe(i,o,r)}}updateChild(e,t){const s=Re(e);if(s===null)return t;{K(Re(e)!==".priority"||js(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(We(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(xt,(o,a)=>{t[o]=a.val(e),s++,r&&xe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_E(this.getPriority().val())+":"),this.forEachChild(xt,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Wv(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Se(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Se(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Se(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Se.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Se.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pa?-1:0}withIndex(e){if(e===rr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new xe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===rr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(xt),i=t.getIterator(xt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rr?null:this.indexMap_.get(e.toString())}}xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oN extends xe{constructor(){super(new Gt(ef),xe.EMPTY_NODE,es.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return xe.EMPTY_NODE}isEmpty(){return!1}}const pa=new oN;Object.defineProperties(Se,{MIN:{value:new Se(gr,xe.EMPTY_NODE)},MAX:{value:new Se(Ei,pa)}});mE.__EMPTY_NODE=xe.EMPTY_NODE;at.__childrenNodeConstructor=xe;eN(pa);nN(pa);/**
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
 */const aN=!0;function Ot(n,e=null){if(n===null)return xe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new at(t,Ot(e))}if(!(n instanceof Array)&&aN){const t=[];let s=!1;if(un(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=Ot(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new Se(o,c)))}}),t.length===0)return xe.EMPTY_NODE;const r=jl(t,Zk,o=>o.name,ef);if(s){const o=jl(t,xt.getCompare());return new xe(r,Ot(e),new es({".priority":o},{".priority":xt}))}else return new xe(r,Ot(e),es.Default)}else{let t=xe.EMPTY_NODE;return un(n,(s,i)=>{if(ps(n,s)&&s.substring(0,1)!=="."){const r=Ot(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Ot(e))}}tN(Ot);/**
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
 */class lN extends Pc{constructor(e){super(),this.indexPath_=e,K(!Ie(e)&&Re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?kr(e.name,t.name):r}makePost(e,t){const s=Ot(e),i=xe.EMPTY_NODE.updateChild(this.indexPath_,s);return new Se(t,i)}maxPost(){const e=xe.EMPTY_NODE.updateChild(this.indexPath_,pa);return new Se(Ei,e)}toString(){return dE(this.indexPath_,0).join("/")}}/**
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
 */class cN extends Pc{compare(e,t){const s=e.node.compareTo(t.node);return s===0?kr(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Se.MIN}maxPost(){return Se.MAX}makePost(e,t){const s=Ot(e);return new Se(t,s)}toString(){return".value"}}const uN=new cN;/**
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
 */function hN(n){return{type:"value",snapshotNode:n}}function dN(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function fN(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Sm(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function pN(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class tf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gr}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ei}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xt}copy(){const e=new tf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bm(n){const e={};if(n.isDefault())return e;let t;if(n.index_===xt?t="$priority":n.index_===uN?t="$value":n.index_===rr?t="$key":(K(n.index_ instanceof lN,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=mt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=mt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+mt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=mt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+mt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Pm(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==xt&&(e.i=n.index_.toString()),e}/**
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
 */class Wl extends cE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=da("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Wl.getListenId_(e,s),a={};this.listens_[o]=a;const c=bm(e._queryParams);this.restRequest_(r+".json",c,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(r,f,!1,s),ar(this.listens_,o)===a){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",i(g,null)}})}unlisten(e,t){const s=Wl.getListenId_(e,t);delete this.listens_[s]}get(e){const t=bm(e._queryParams),s=e._path.toString(),i=new Do;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ir(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=xo(a.responseText)}catch{en("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&en("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class gN{constructor(){this.rootNode_=xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Hl(){return{value:null,children:new Map}}function TE(n,e,t){if(Ie(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Re(e);n.children.has(s)||n.children.set(s,Hl());const i=n.children.get(s);e=We(e),TE(i,e,t)}}function Rh(n,e,t){n.value!==null?t(e,n.value):mN(n,(s,i)=>{const r=new ze(e.toString()+"/"+s);Rh(i,r,t)})}function mN(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class _N{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&un(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const km=10*1e3,yN=30*1e3,vN=5*60*1e3;class EN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new _N(e);const s=km+(yN-km)*Math.random();To(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;un(e,(i,r)=>{r>0&&ps(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),To(this.reportStats_.bind(this),Math.floor(Math.random()*2*vN))}}/**
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
 */var kn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(kn||(kn={}));function wE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function IE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function CE(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Gl{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=kn.ACK_USER_WRITE,this.source=wE()}operationForChild(e){if(Ie(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ze(e));return new Gl(Ve(),t,this.revert)}}else return K(Re(this.path)===e,"operationForChild called for unrelated child."),new Gl(We(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ti{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=kn.OVERWRITE}operationForChild(e){return Ie(this.path)?new Ti(this.source,Ve(),this.snap.getImmediateChild(e)):new Ti(this.source,We(this.path),this.snap)}}/**
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
 */class Ho{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=kn.MERGE}operationForChild(e){if(Ie(this.path)){const t=this.children.subtree(new ze(e));return t.isEmpty()?null:t.value?new Ti(this.source,Ve(),t.value):new Ho(this.source,Ve(),t)}else return K(Re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ho(this.source,We(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class nf{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ie(e))return this.isFullyInitialized()&&!this.filtered_;const t=Re(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function TN(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(pN(o.childName,o.snapshotNode))}),Jr(n,i,"child_removed",e,s,t),Jr(n,i,"child_added",e,s,t),Jr(n,i,"child_moved",r,s,t),Jr(n,i,"child_changed",e,s,t),Jr(n,i,"value",e,s,t),i}function Jr(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>IN(n,a,c)),o.forEach(a=>{const c=wN(n,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function wN(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function IN(n,e,t){if(e.childName==null||t.childName==null)throw Tr("Should only compare child_ events.");const s=new Se(e.childName,e.snapshotNode),i=new Se(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function AE(n,e){return{eventCache:n,serverCache:e}}function wo(n,e,t,s){return AE(new nf(e,t,s),n.serverCache)}function RE(n,e,t,s){return AE(n.eventCache,new nf(e,t,s))}function Sh(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function wi(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Au;const CN=()=>(Au||(Au=new Gt(ck)),Au);class je{static fromObject(e){let t=new je(null);return un(e,(s,i)=>{t=t.set(new ze(s),i)}),t}constructor(e,t=CN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ve(),value:this.value};if(Ie(e))return null;{const s=Re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(We(e),t);return r!=null?{path:ut(new ze(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ie(e))return this;{const t=Re(e),s=this.children.get(t);return s!==null?s.subtree(We(e)):new je(null)}}set(e,t){if(Ie(e))return new je(t,this.children);{const s=Re(e),r=(this.children.get(s)||new je(null)).set(We(e),t),o=this.children.insert(s,r);return new je(this.value,o)}}remove(e){if(Ie(e))return this.children.isEmpty()?new je(null):new je(null,this.children);{const t=Re(e),s=this.children.get(t);if(s){const i=s.remove(We(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new je(null):new je(this.value,r)}else return this}}get(e){if(Ie(e))return this.value;{const t=Re(e),s=this.children.get(t);return s?s.get(We(e)):null}}setTree(e,t){if(Ie(e))return t;{const s=Re(e),r=(this.children.get(s)||new je(null)).setTree(We(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new je(this.value,o)}}fold(e){return this.fold_(Ve(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ut(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ve(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(Ie(e))return null;{const r=Re(e),o=this.children.get(r);return o?o.findOnPath_(We(e),ut(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ve(),t)}foreachOnPath_(e,t,s){if(Ie(e))return this;{this.value&&s(t,this.value);const i=Re(e),r=this.children.get(i);return r?r.foreachOnPath_(We(e),ut(t,i),s):new je(null)}}foreach(e){this.foreach_(Ve(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(ut(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new je(null))}}function Io(n,e,t){if(Ie(e))return new _n(new je(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=on(i,e);return r=r.updateChild(o,t),new _n(n.writeTree_.set(i,r))}else{const i=new je(t),r=n.writeTree_.setTree(e,i);return new _n(r)}}}function Nm(n,e,t){let s=n;return un(t,(i,r)=>{s=Io(s,ut(e,i),r)}),s}function Om(n,e){if(Ie(e))return _n.empty();{const t=n.writeTree_.setTree(e,new je(null));return new _n(t)}}function bh(n,e){return ki(n,e)!=null}function ki(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(on(t.path,e)):null}function Dm(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(xt,(s,i)=>{e.push(new Se(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Se(s,i.value))}),e}function Ms(n,e){if(Ie(e))return n;{const t=ki(n,e);return t!=null?new _n(new je(t)):new _n(n.writeTree_.subtree(e))}}function Ph(n){return n.writeTree_.isEmpty()}function mr(n,e){return SE(Ve(),n.writeTree_,e)}function SE(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(K(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=SE(ut(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ut(n,".priority"),s)),t}}/**
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
 */function bE(n,e){return DE(e,n)}function AN(n,e,t,s,i){K(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Io(n.visibleWrites,e,t)),n.lastWriteId=s}function RN(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function SN(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);K(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&bN(a,s.path)?i=!1:pn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return PN(n),!0;if(s.snap)n.visibleWrites=Om(n.visibleWrites,s.path);else{const a=s.children;un(a,c=>{n.visibleWrites=Om(n.visibleWrites,ut(s.path,c))})}return!0}else return!1}function bN(n,e){if(n.snap)return pn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&pn(ut(n.path,t),e))return!0;return!1}function PN(n){n.visibleWrites=PE(n.allWrites,kN,Ve()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function kN(n){return n.visible}function PE(n,e,t){let s=_n.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)pn(t,o)?(a=on(t,o),s=Io(s,a,r.snap)):pn(o,t)&&(a=on(o,t),s=Io(s,Ve(),r.snap.getChild(a)));else if(r.children){if(pn(t,o))a=on(t,o),s=Nm(s,a,r.children);else if(pn(o,t))if(a=on(o,t),Ie(a))s=Nm(s,Ve(),r.children);else{const c=ar(r.children,Re(a));if(c){const u=c.getChild(We(a));s=Io(s,Ve(),u)}}}else throw Tr("WriteRecord should have .snap or .children")}}return s}function kE(n,e,t,s,i){if(!s&&!i){const r=ki(n.visibleWrites,e);if(r!=null)return r;{const o=Ms(n.visibleWrites,e);if(Ph(o))return t;if(t==null&&!bh(o,Ve()))return null;{const a=t||xe.EMPTY_NODE;return mr(o,a)}}}else{const r=Ms(n.visibleWrites,e);if(!i&&Ph(r))return t;if(!i&&t==null&&!bh(r,Ve()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(pn(u.path,e)||pn(e,u.path))},a=PE(n.allWrites,o,e),c=t||xe.EMPTY_NODE;return mr(a,c)}}}function NN(n,e,t){let s=xe.EMPTY_NODE;const i=ki(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ms(n.visibleWrites,e);return t.forEachChild(xt,(o,a)=>{const c=mr(Ms(r,new ze(o)),a);s=s.updateImmediateChild(o,c)}),Dm(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ms(n.visibleWrites,e);return Dm(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ON(n,e,t,s,i){K(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ut(e,t);if(bh(n.visibleWrites,r))return null;{const o=Ms(n.visibleWrites,r);return Ph(o)?i.getChild(t):mr(o,i.getChild(t))}}function DN(n,e,t,s){const i=ut(e,t),r=ki(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ms(n.visibleWrites,i);return mr(o,s.getNode().getImmediateChild(t))}else return null}function xN(n,e){return ki(n.visibleWrites,e)}function LN(n,e,t,s,i,r,o){let a;const c=Ms(n.visibleWrites,e),u=ki(c,Ve());if(u!=null)a=u;else if(t!=null)a=mr(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),g=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=g.getNext();for(;_&&d.length<i;)f(_,s)!==0&&d.push(_),_=g.getNext();return d}else return[]}function MN(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function kh(n,e,t,s){return kE(n.writeTree,n.treePath,e,t,s)}function NE(n,e){return NN(n.writeTree,n.treePath,e)}function xm(n,e,t,s){return ON(n.writeTree,n.treePath,e,t,s)}function zl(n,e){return xN(n.writeTree,ut(n.treePath,e))}function VN(n,e,t,s,i,r){return LN(n.writeTree,n.treePath,e,t,s,i,r)}function sf(n,e,t){return DN(n.writeTree,n.treePath,e,t)}function OE(n,e){return DE(ut(n.treePath,e),n.writeTree)}function DE(n,e){return{treePath:n,writeTree:e}}/**
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
 */class FN{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;K(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),K(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Sm(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,fN(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,dN(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Sm(s,e.snapshotNode,i.oldSnap));else throw Tr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class UN{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const xE=new UN;class rf{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new nf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sf(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:wi(this.viewCache_),r=VN(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}function BN(n,e){K(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function $N(n,e,t,s,i){const r=new FN;let o,a;if(t.type===kn.OVERWRITE){const u=t;u.source.fromUser?o=Nh(n,e,u.path,u.snap,s,i,r):(K(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ie(u.path),o=Kl(n,e,u.path,u.snap,s,i,a,r))}else if(t.type===kn.MERGE){const u=t;u.source.fromUser?o=jN(n,e,u.path,u.children,s,i,r):(K(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Oh(n,e,u.path,u.children,s,i,a,r))}else if(t.type===kn.ACK_USER_WRITE){const u=t;u.revert?o=GN(n,e,u.path,s,i,r):o=WN(n,e,u.path,u.affectedTree,s,i,r)}else if(t.type===kn.LISTEN_COMPLETE)o=HN(n,e,t.path,s,r);else throw Tr("Unknown operation type: "+t.type);const c=r.getChanges();return qN(e,o,c),{viewCache:o,changes:c}}function qN(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Sh(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(hN(Sh(e)))}}function LE(n,e,t,s,i,r){const o=e.eventCache;if(zl(s,t)!=null)return e;{let a,c;if(Ie(t))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=wi(e),d=u instanceof xe?u:xe.EMPTY_NODE,f=NE(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const u=kh(s,wi(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=Re(t);if(u===".priority"){K(js(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const f=xm(s,t,d,c);f!=null?a=n.filter.updatePriority(d,f):a=o.getNode()}else{const d=We(t);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=xm(s,t,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(u).updateChild(d,g):f=o.getNode().getImmediateChild(u)}else f=sf(s,u,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),u,f,d,i,r):a=o.getNode()}}return wo(e,a,o.isFullyInitialized()||Ie(t),n.filter.filtersNodes())}}function Kl(n,e,t,s,i,r,o,a){const c=e.serverCache;let u;const d=o?n.filter:n.filter.getIndexedFilter();if(Ie(t))u=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(t,s);u=d.updateFullNode(c.getNode(),_,null)}else{const _=Re(t);if(!c.isCompleteForPath(t)&&js(t)>1)return e;const A=We(t),k=c.getNode().getImmediateChild(_).updateChild(A,s);_===".priority"?u=d.updatePriority(c.getNode(),k):u=d.updateChild(c.getNode(),_,k,A,xE,null)}const f=RE(e,u,c.isFullyInitialized()||Ie(t),d.filtersNodes()),g=new rf(i,f,r);return LE(n,f,t,i,g,a)}function Nh(n,e,t,s,i,r,o){const a=e.eventCache;let c,u;const d=new rf(i,e,r);if(Ie(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=wo(e,u,!0,n.filter.filtersNodes());else{const f=Re(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),c=wo(e,u,a.isFullyInitialized(),a.isFiltered());else{const g=We(t),_=a.getNode().getImmediateChild(f);let A;if(Ie(g))A=s;else{const N=d.getCompleteChild(f);N!=null?hE(g)===".priority"&&N.getChild(fE(g)).isEmpty()?A=N:A=N.updateChild(g,s):A=xe.EMPTY_NODE}if(_.equals(A))c=e;else{const N=n.filter.updateChild(a.getNode(),f,A,g,d,o);c=wo(e,N,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Lm(n,e){return n.eventCache.isCompleteForChild(e)}function jN(n,e,t,s,i,r,o){let a=e;return s.foreach((c,u)=>{const d=ut(t,c);Lm(e,Re(d))&&(a=Nh(n,a,d,u,i,r,o))}),s.foreach((c,u)=>{const d=ut(t,c);Lm(e,Re(d))||(a=Nh(n,a,d,u,i,r,o))}),a}function Mm(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Oh(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ie(t)?u=s:u=new je(null).setTree(t,s);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,g)=>{if(d.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),A=Mm(n,_,g);c=Kl(n,c,new ze(f),A,i,r,o,a)}}),u.children.inorderTraversal((f,g)=>{const _=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!d.hasChild(f)&&!_){const A=e.serverCache.getNode().getImmediateChild(f),N=Mm(n,A,g);c=Kl(n,c,new ze(f),N,i,r,o,a)}}),c}function WN(n,e,t,s,i,r,o){if(zl(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Ie(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Kl(n,e,t,c.getNode().getChild(t),i,r,a,o);if(Ie(t)){let u=new je(null);return c.getNode().forEachChild(rr,(d,f)=>{u=u.set(new ze(d),f)}),Oh(n,e,t,u,i,r,a,o)}else return e}else{let u=new je(null);return s.foreach((d,f)=>{const g=ut(t,d);c.isCompleteForPath(g)&&(u=u.set(d,c.getNode().getChild(g)))}),Oh(n,e,t,u,i,r,a,o)}}function HN(n,e,t,s,i){const r=e.serverCache,o=RE(e,r.getNode(),r.isFullyInitialized()||Ie(t),r.isFiltered());return LE(n,o,t,s,xE,i)}function GN(n,e,t,s,i,r){let o;if(zl(s,t)!=null)return e;{const a=new rf(s,e,i),c=e.eventCache.getNode();let u;if(Ie(t)||Re(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=kh(s,wi(e));else{const f=e.serverCache.getNode();K(f instanceof xe,"serverChildren would be complete if leaf node"),d=NE(s,f)}d=d,u=n.filter.updateFullNode(c,d,r)}else{const d=Re(t);let f=sf(s,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),f!=null?u=n.filter.updateChild(c,d,f,We(t),a,r):e.eventCache.getNode().hasChild(d)?u=n.filter.updateChild(c,d,xe.EMPTY_NODE,We(t),a,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kh(s,wi(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||zl(s,Ve())!=null,wo(e,u,o,n.filter.filtersNodes())}}function zN(n,e){const t=wi(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ie(e)&&!t.getImmediateChild(Re(e)).isEmpty())?t.getChild(e):null}function Vm(n,e,t,s){e.type===kn.MERGE&&e.source.queryId!==null&&(K(wi(n.viewCache_),"We should always have a full cache before handling merges"),K(Sh(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=$N(n.processor_,i,e,t,s);return BN(n.processor_,r.viewCache),K(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,KN(n,r.changes,r.viewCache.eventCache.getNode())}function KN(n,e,t,s){const i=n.eventRegistrations_;return TN(n.eventGenerator_,e,t,i)}/**
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
 */let Fm;function QN(n){K(!Fm,"__referenceConstructor has already been defined"),Fm=n}function of(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return K(r!=null,"SyncTree gave us an op for an invalid query."),Vm(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Vm(o,e,t,s));return r}}function af(n,e){let t=null;for(const s of n.views.values())t=t||zN(s,e);return t}/**
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
 */let Um;function YN(n){K(!Um,"__referenceConstructor has already been defined"),Um=n}class Bm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new je(null),this.pendingWriteTree_=MN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function XN(n,e,t,s,i){return AN(n.pendingWriteTree_,e,t,s,i),i?Nc(n,new Ti(wE(),e,t)):[]}function zi(n,e,t=!1){const s=RN(n.pendingWriteTree_,e);if(SN(n.pendingWriteTree_,e)){let r=new je(null);return s.snap!=null?r=r.set(Ve(),!0):un(s.children,o=>{r=r.set(new ze(o),!0)}),Nc(n,new Gl(s.path,r,t))}else return[]}function kc(n,e,t){return Nc(n,new Ti(IE(),e,t))}function JN(n,e,t){const s=je.fromObject(t);return Nc(n,new Ho(IE(),e,s))}function ZN(n,e,t,s){const i=UE(n,s);if(i!=null){const r=BE(i),o=r.path,a=r.queryId,c=on(o,e),u=new Ti(CE(a),c,t);return $E(n,o,u)}else return[]}function eO(n,e,t,s){const i=UE(n,s);if(i){const r=BE(i),o=r.path,a=r.queryId,c=on(o,e),u=je.fromObject(t),d=new Ho(CE(a),c,u);return $E(n,o,d)}else return[]}function ME(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=on(o,e),u=af(a,c);if(u)return u});return kE(i,e,r,t,!0)}function Nc(n,e){return VE(e,n.syncPointTree_,null,bE(n.pendingWriteTree_,Ve()))}function VE(n,e,t,s){if(Ie(n.path))return FE(n,e,t,s);{const i=e.get(Ve());t==null&&i!=null&&(t=af(i,Ve()));let r=[];const o=Re(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,d=OE(s,o);r=r.concat(VE(a,c,u,d))}return i&&(r=r.concat(of(i,n,s,t))),r}}function FE(n,e,t,s){const i=e.get(Ve());t==null&&i!=null&&(t=af(i,Ve()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=OE(s,o),d=n.operationForChild(o);d&&(r=r.concat(FE(d,a,c,u)))}),i&&(r=r.concat(of(i,n,s,t))),r}function UE(n,e){return n.tagToQueryMap.get(e)}function BE(n){const e=n.indexOf("$");return K(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ze(n.substr(0,e))}}function $E(n,e,t){const s=n.syncPointTree_.get(e);K(s,"Missing sync point for query tag that we're tracking");const i=bE(n.pendingWriteTree_,e);return of(s,t,i,null)}/**
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
 */class lf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new lf(t)}node(){return this.node_}}class cf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ut(this.path_,e);return new cf(this.syncTree_,t)}node(){return ME(this.syncTree_,this.path_)}}const tO=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},$m=function(n,e,t){if(!n||typeof n!="object")return n;if(K(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return nO(n[".sv"],e,t);if(typeof n[".sv"]=="object")return sO(n[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},nO=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:K(!1,"Unexpected server value: "+n)}},sO=function(n,e,t){n.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&K(!1,"Unexpected increment value: "+s);const i=e.node();if(K(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},iO=function(n,e,t,s){return uf(e,new cf(t,n),s)},rO=function(n,e,t){return uf(n,new lf(e),t)};function uf(n,e,t){const s=n.getPriority().val(),i=$m(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=$m(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new at(a,Ot(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new at(i))),o.forEachChild(xt,(a,c)=>{const u=uf(c,e.getImmediateChild(a),t);u!==c&&(r=r.updateImmediateChild(a,u))}),r}}/**
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
 */class hf{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function df(n,e){let t=e instanceof ze?e:new ze(e),s=n,i=Re(t);for(;i!==null;){const r=ar(s.node.children,i)||{children:{},childCount:0};s=new hf(i,s,r),t=We(t),i=Re(t)}return s}function Nr(n){return n.node.value}function qE(n,e){n.node.value=e,Dh(n)}function jE(n){return n.node.childCount>0}function oO(n){return Nr(n)===void 0&&!jE(n)}function Oc(n,e){un(n.node.children,(t,s)=>{e(new hf(t,n,s))})}function WE(n,e,t,s){t&&!s&&e(n),Oc(n,i=>{WE(i,e,!0,s)})}function aO(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ga(n){return new ze(n.parent===null?n.name:ga(n.parent)+"/"+n.name)}function Dh(n){n.parent!==null&&lO(n.parent,n.name,n)}function lO(n,e,t){const s=oO(t),i=ps(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Dh(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Dh(n))}/**
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
 */const cO=/[\[\].#$\/\u0000-\u001F\u007F]/,uO=/[\[\].#$\u0000-\u001F\u007F]/,Ru=10*1024*1024,HE=function(n){return typeof n=="string"&&n.length!==0&&!cO.test(n)},hO=function(n){return typeof n=="string"&&n.length!==0&&!uO.test(n)},dO=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hO(n)},GE=function(n,e,t){const s=t instanceof ze?new Hk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ri(s));if(typeof e=="function")throw new Error(n+"contains a function "+ri(s)+" with contents = "+e.toString());if(Hv(e))throw new Error(n+"contains "+e.toString()+" "+ri(s));if(typeof e=="string"&&e.length>Ru/3&&dc(e)>Ru)throw new Error(n+"contains a string greater than "+Ru+" utf8 bytes "+ri(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(un(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!HE(o)))throw new Error(n+" contains an invalid key ("+o+") "+ri(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Gk(s,o),GE(n,a,s),zk(s)}),i&&r)throw new Error(n+' contains ".value" child '+ri(s)+" in addition to actual children.")}},fO=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!HE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!dO(t))throw new Error(q2(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class pO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gO(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!pE(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Ni(n,e,t){gO(n,t),mO(n,s=>pn(s,e)||pn(e,s))}function mO(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(_O(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function _O(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Eo&&Nt("event: "+t.toString()),fa(s)}}}/**
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
 */const yO="repo_interrupt",vO=25;class EO{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hl(),this.transactionQueueTree_=new hf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TO(n,e,t){if(n.stats_=Xd(n.repoInfo_),n.forceRestClient_||gk())n.server_=new Wl(n.repoInfo_,(s,i,r,o)=>{qm(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>jm(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{mt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new os(n.repoInfo_,e,(s,i,r,o)=>{qm(n,s,i,r,o)},s=>{jm(n,s)},s=>{IO(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Tk(n.repoInfo_,()=>new EN(n.stats_,n.server_)),n.infoData_=new gN,n.infoSyncTree_=new Bm({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=kc(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ff(n,"connected",!1),n.serverSyncTree_=new Bm({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const u=o(a,c);Ni(n.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function wO(n){const t=n.infoData_.getNode(new ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function zE(n){return tO({timestamp:wO(n)})}function qm(n,e,t,s,i){n.dataUpdateCount++;const r=new ze(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Tl(t,u=>Ot(u));o=eO(n.serverSyncTree_,r,c,i)}else{const c=Ot(t);o=ZN(n.serverSyncTree_,r,c,i)}else if(s){const c=Tl(t,u=>Ot(u));o=JN(n.serverSyncTree_,r,c)}else{const c=Ot(t);o=kc(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=gf(n,r)),Ni(n.eventQueue_,a,o)}function jm(n,e){ff(n,"connected",e),e===!1&&AO(n)}function IO(n,e){un(e,(t,s)=>{ff(n,t,s)})}function ff(n,e,t){const s=new ze("/.info/"+e),i=Ot(t);n.infoData_.updateSnapshot(s,i);const r=kc(n.infoSyncTree_,s,i);Ni(n.eventQueue_,s,r)}function CO(n){return n.nextWriteId_++}function AO(n){KE(n,"onDisconnectEvents");const e=zE(n),t=Hl();Rh(n.onDisconnect_,Ve(),(i,r)=>{const o=iO(i,r,n.serverSyncTree_,e);TE(t,i,o)});let s=[];Rh(t,Ve(),(i,r)=>{s=s.concat(kc(n.serverSyncTree_,i,r));const o=PO(n,i);gf(n,o)}),n.onDisconnect_=Hl(),Ni(n.eventQueue_,Ve(),s)}function RO(n){n.persistentConnection_&&n.persistentConnection_.interrupt(yO)}function KE(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Nt(t,...e)}function QE(n,e,t){return ME(n.serverSyncTree_,e,t)||xe.EMPTY_NODE}function pf(n,e=n.transactionQueueTree_){if(e||Dc(n,e),Nr(e)){const t=XE(n,e);K(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&SO(n,ga(e),t)}else jE(e)&&Oc(e,t=>{pf(n,t)})}function SO(n,e,t){const s=t.map(u=>u.currentWriteId),i=QE(n,e,s);let r=i;const o=i.hash();for(let u=0;u<t.length;u++){const d=t[u];K(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=on(e,d.path);r=r.updateChild(f,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,u=>{KE(n,"transaction put response",{path:c.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let g=0;g<t.length;g++)t[g].status=2,d=d.concat(zi(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&f.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();Dc(n,df(n.transactionQueueTree_,e)),pf(n,n.transactionQueueTree_),Ni(n.eventQueue_,e,d);for(let g=0;g<f.length;g++)fa(f[g])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{en("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}gf(n,e)}},o)}function gf(n,e){const t=YE(n,e),s=ga(t),i=XE(n,t);return bO(n,i,s),s}function bO(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=on(t,c.path);let d=!1,f;if(K(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,f=c.abortReason,i=i.concat(zi(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=vO)d=!0,f="maxretry",i=i.concat(zi(n.serverSyncTree_,c.currentWriteId,!0));else{const g=QE(n,c.path,o);c.currentInputSnapshot=g;const _=e[a].update(g.val());if(_!==void 0){GE("transaction failed: Data returned ",_,c.path);let A=Ot(_);typeof _=="object"&&_!=null&&ps(_,".priority")||(A=A.updatePriority(g.getPriority()));const k=c.currentWriteId,x=zE(n),D=rO(A,g,x);c.currentOutputSnapshotRaw=A,c.currentOutputSnapshotResolved=D,c.currentWriteId=CO(n),o.splice(o.indexOf(k),1),i=i.concat(XN(n.serverSyncTree_,c.path,D,c.currentWriteId,c.applyLocally)),i=i.concat(zi(n.serverSyncTree_,k,!0))}else d=!0,f="nodata",i=i.concat(zi(n.serverSyncTree_,c.currentWriteId,!0))}Ni(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Dc(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)fa(s[a]);pf(n,n.transactionQueueTree_)}function YE(n,e){let t,s=n.transactionQueueTree_;for(t=Re(e);t!==null&&Nr(s)===void 0;)s=df(s,t),e=We(e),t=Re(e);return s}function XE(n,e){const t=[];return JE(n,e,t),t.sort((s,i)=>s.order-i.order),t}function JE(n,e,t){const s=Nr(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Oc(e,i=>{JE(n,i,t)})}function Dc(n,e){const t=Nr(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,qE(e,t.length>0?t:void 0)}Oc(e,s=>{Dc(n,s)})}function PO(n,e){const t=ga(YE(n,e)),s=df(n.transactionQueueTree_,e);return aO(s,i=>{Su(n,i)}),Su(n,s),WE(s,i=>{Su(n,i)}),t}function Su(n,e){const t=Nr(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(K(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(K(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(zi(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?qE(e,void 0):t.length=r+1,Ni(n.eventQueue_,ga(e),i);for(let o=0;o<s.length;o++)fa(s[o])}}/**
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
 */function kO(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function NO(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):en(`Invalid query segment '${t}' in query '${n}'`)}return e}const Wm=function(n,e){const t=OO(n),s=t.namespace;t.domain==="firebase.com"&&vi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&vi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ak();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new yk(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new ze(t.pathString)}},OO=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let d=n.indexOf("/");d===-1&&(d=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(d,f)),d<f&&(i=kO(n.substring(d,f)));const g=NO(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const A=e.indexOf(".");s=e.substring(0,A).toLowerCase(),t=e.substring(A+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class mf{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return Ie(this._path)?null:hE(this._path)}get ref(){return new Or(this._repo,this._path)}get _queryIdentifier(){const e=Pm(this._queryParams),t=Qd(e);return t==="{}"?"default":t}get _queryObject(){return Pm(this._queryParams)}isEqual(e){if(e=Ft(e),!(e instanceof mf))return!1;const t=this._repo===e._repo,s=pE(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wk(this._path)}}class Or extends mf{constructor(e,t){super(e,t,new tf,!1)}get parent(){const e=fE(this._path);return e===null?null:new Or(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}QN(Or);YN(Or);/**
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
 */const DO="FIREBASE_DATABASE_EMULATOR_HOST",xh={};let xO=!1;function LO(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||vi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Nt("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Wm(r,i),a=o.repoInfo,c;typeof process<"u"&&um&&(c=um[DO]),c?(r=`http://${c}?ns=${a.namespace}`,o=Wm(r,i),a=o.repoInfo):o.repoInfo.secure;const u=new _k(n.name,n.options,e);fO("Invalid Firebase Database URL",o),Ie(o.path)||vi("Database URL must point to the root of a Firebase Database (not including a child path).");const d=VO(a,n,u,new mk(n.name,t));return new FO(d,n)}function MO(n,e){const t=xh[e];(!t||t[n.key]!==n)&&vi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),RO(n),delete t[n.key]}function VO(n,e,t,s){let i=xh[e.name];i||(i={},xh[e.name]=i);let r=i[n.toURLString()];return r&&vi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new EO(n,xO,t,s),i[n.toURLString()]=r,r}class FO{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Or(this._repo,Ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(MO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function UO(n){tk(zs),Vn(new yn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return LO(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Zt(hm,dm,n),Zt(hm,dm,"esm2017")}os.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};os.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};UO();/**
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
 */const ZE="firebasestorage.googleapis.com",BO="storageBucket",$O=2*60*1e3,qO=10*60*1e3;/**
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
 */class qn extends $n{constructor(e,t,s=0){super(bu(e),`Firebase Storage: ${t} (${bu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return bu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Un;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Un||(Un={}));function bu(n){return"storage/"+n}function jO(){const n="An unknown error occurred, please check the error payload for server response.";return new qn(Un.UNKNOWN,n)}function WO(){return new qn(Un.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HO(){return new qn(Un.CANCELED,"User canceled the upload/download.")}function GO(n){return new qn(Un.INVALID_URL,"Invalid URL '"+n+"'.")}function zO(n){return new qn(Un.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Hm(n){return new qn(Un.INVALID_ARGUMENT,n)}function eT(){return new qn(Un.APP_DELETED,"The Firebase app was deleted.")}function KO(n){return new qn(Un.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class gn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=gn.makeFromUrl(e,t)}catch{return new gn(e,"")}if(s.path==="")return s;throw zO(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(F){F.path_=decodeURIComponent(F.path)}const d="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${d}/b/${i}/o${g}`,"i"),A={bucket:1,path:3},N=t===ZE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",x=new RegExp(`^https?://${N}/${i}/${k}`,"i"),V=[{regex:a,indices:c,postModify:r},{regex:_,indices:A,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let F=0;F<V.length;F++){const se=V[F],X=se.regex.exec(e);if(X){const v=X[se.indices.bucket];let y=X[se.indices.path];y||(y=""),s=new gn(v,y),se.postModify(s);break}}if(s==null)throw GO(e);return s}}class QO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function YO(n,e,t){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let u=!1;function d(...k){u||(u=!0,e.apply(null,k))}function f(k){i=setTimeout(()=>{i=null,n(_,c())},k)}function g(){r&&clearTimeout(r)}function _(k,...x){if(u){g();return}if(k){g(),d.call(null,k,...x);return}if(c()||o){g(),d.call(null,k,...x);return}s<64&&(s*=2);let V;a===1?(a=2,V=0):V=(s+Math.random())*1e3,f(V)}let A=!1;function N(k){A||(A=!0,g(),!u&&(i!==null?(k||(a=2),clearTimeout(i),f(0)):k||(a=1)))}return f(0),r=setTimeout(()=>{o=!0,N(!0)},t),N}function XO(n){n(!1)}/**
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
 */function JO(n){return n!==void 0}function Gm(n,e,t,s){if(s<e)throw Hm(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Hm(`Invalid value for '${n}'. Expected ${t} or less.`)}function ZO(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}var Ql;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ql||(Ql={}));/**
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
 */function eD(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
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
 */class tD{constructor(e,t,s,i,r,o,a,c,u,d,f,g=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,A)=>{this.resolve_=_,this.reject_=A,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Ga(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ql.NO_ERROR,c=r.getStatus();if(!a||eD(c,this.additionalRetryCodes_)&&this.retry){const d=r.getErrorCode()===Ql.ABORT;s(!1,new Ga(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Ga(u,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());JO(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=jO();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?eT():HO();o(c)}else{const c=WO();o(c)}};this.canceled_?t(!1,new Ga(!1,null,!0)):this.backoffId_=YO(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&XO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ga{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function nD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function sD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function rD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function oD(n,e,t,s,i,r,o=!0){const a=ZO(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return iD(u,e),nD(u,t),sD(u,r),rD(u,s),new tD(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
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
 */function aD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function lD(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Yl{constructor(e,t){this._service=e,t instanceof gn?this._location=t:this._location=gn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Yl(e,t)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lD(this._location.path)}get storage(){return this._service}get parent(){const e=aD(this._location.path);if(e===null)return null;const t=new gn(this._location.bucket,e);return new Yl(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw KO(e)}}function zm(n,e){const t=e==null?void 0:e[BO];return t==null?null:gn.makeFromBucketSpec(t,n)}class cD{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=ZE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$O,this._maxUploadRetryTime=qO,this._requests=new Set,i!=null?this._bucket=gn.makeFromBucketSpec(i,this._host):this._bucket=zm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=zm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yl(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new QO(eT());{const o=oD(e,this._appId,s,i,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const Km="@firebase/storage",Qm="0.13.4";/**
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
 */const uD="storage";function hD(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new cD(t,s,i,e,zs)}function dD(){Vn(new yn(uD,hD,"PUBLIC").setMultipleInstances(!0)),Zt(Km,Qm,""),Zt(Km,Qm,"esm2017")}dD();function fD(n,{firebaseApp:e,modules:t=[]}){n.provide(ek,e);for(const s of t)s(e,n)}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ji=typeof document<"u";function tT(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function pD(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&tT(n.default)}const Ne=Object.assign;function Pu(n,e){const t={};for(const s in e){const i=e[s];t[s]=wn(i)?i.map(n):n(i)}return t}const Co=()=>{},wn=Array.isArray,nT=/#/g,gD=/&/g,mD=/\//g,_D=/=/g,yD=/\?/g,sT=/\+/g,vD=/%5B/g,ED=/%5D/g,iT=/%5E/g,TD=/%60/g,rT=/%7B/g,wD=/%7C/g,oT=/%7D/g,ID=/%20/g;function _f(n){return encodeURI(""+n).replace(wD,"|").replace(vD,"[").replace(ED,"]")}function CD(n){return _f(n).replace(rT,"{").replace(oT,"}").replace(iT,"^")}function Lh(n){return _f(n).replace(sT,"%2B").replace(ID,"+").replace(nT,"%23").replace(gD,"%26").replace(TD,"`").replace(rT,"{").replace(oT,"}").replace(iT,"^")}function AD(n){return Lh(n).replace(_D,"%3D")}function RD(n){return _f(n).replace(nT,"%23").replace(yD,"%3F")}function SD(n){return n==null?"":RD(n).replace(mD,"%2F")}function Go(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const bD=/\/$/,PD=n=>n.replace(bD,"");function ku(n,e,t="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=n(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=DD(s??e,t),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Go(o)}}function kD(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Ym(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function ND(n,e,t){const s=e.matched.length-1,i=t.matched.length-1;return s>-1&&s===i&&_r(e.matched[s],t.matched[i])&&aT(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function _r(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function aT(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!OD(n[t],e[t]))return!1;return!0}function OD(n,e){return wn(n)?Xm(n,e):wn(e)?Xm(e,n):n===e}function Xm(n,e){return wn(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function DD(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=t.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Ts={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zo;(function(n){n.pop="pop",n.push="push"})(zo||(zo={}));var Ao;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ao||(Ao={}));function xD(n){if(!n)if(ji){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),PD(n)}const LD=/^[^#]+#/;function MD(n,e){return n.replace(LD,"#")+e}function VD(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const xc=()=>({left:window.scrollX,top:window.scrollY});function FD(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=VD(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Jm(n,e){return(history.state?history.state.position-e:-1)+n}const Mh=new Map;function UD(n,e){Mh.set(n,e)}function BD(n){const e=Mh.get(n);return Mh.delete(n),e}let $D=()=>location.protocol+"//"+location.host;function lT(n,e){const{pathname:t,search:s,hash:i}=e,r=n.indexOf("#");if(r>-1){let a=i.includes(n.slice(r))?n.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Ym(c,"")}return Ym(t,n)+s+i}function qD(n,e,t,s){let i=[],r=[],o=null;const a=({state:g})=>{const _=lT(n,location),A=t.value,N=e.value;let k=0;if(g){if(t.value=_,e.value=g,o&&o===A){o=null;return}k=N?g.position-N.position:0}else s(_);i.forEach(x=>{x(t.value,A,{delta:k,type:zo.pop,direction:k?k>0?Ao.forward:Ao.back:Ao.unknown})})};function c(){o=t.value}function u(g){i.push(g);const _=()=>{const A=i.indexOf(g);A>-1&&i.splice(A,1)};return r.push(_),_}function d(){const{history:g}=window;g.state&&g.replaceState(Ne({},g.state,{scroll:xc()}),"")}function f(){for(const g of r)g();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function Zm(n,e,t,s=!1,i=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:i?xc():null}}function jD(n){const{history:e,location:t}=window,s={value:lT(n,t)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const f=n.indexOf("#"),g=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+c:$D()+n+c;try{e[d?"replaceState":"pushState"](u,"",g),i.value=u}catch(_){console.error(_),t[d?"replace":"assign"](g)}}function o(c,u){const d=Ne({},e.state,Zm(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});r(c,d,!0),s.value=c}function a(c,u){const d=Ne({},i.value,e.state,{forward:c,scroll:xc()});r(d.current,d,!0);const f=Ne({},Zm(s.value,c,null),{position:d.position+1},u);r(c,f,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function WD(n){n=xD(n);const e=jD(n),t=qD(n,e.state,e.location,e.replace);function s(r,o=!0){o||t.pauseListeners(),history.go(r)}const i=Ne({location:"",base:n,go:s,createHref:MD.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function HD(n){return typeof n=="string"||n&&typeof n=="object"}function cT(n){return typeof n=="string"||typeof n=="symbol"}const uT=Symbol("");var e_;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(e_||(e_={}));function yr(n,e){return Ne(new Error,{type:n,[uT]:!0},e)}function Gn(n,e){return n instanceof Error&&uT in n&&(e==null||!!(n.type&e))}const t_="[^/]+?",GD={sensitive:!1,strict:!1,start:!0,end:!0},zD=/[.+*?^${}()[\]/\\]/g;function KD(n,e){const t=Ne({},GD,e),s=[];let i=t.start?"^":"";const r=[];for(const u of n){const d=u.length?[]:[90];t.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const g=u[f];let _=40+(t.sensitive?.25:0);if(g.type===0)f||(i+="/"),i+=g.value.replace(zD,"\\$&"),_+=40;else if(g.type===1){const{value:A,repeatable:N,optional:k,regexp:x}=g;r.push({name:A,repeatable:N,optional:k});const D=x||t_;if(D!==t_){_+=10;try{new RegExp(`(${D})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${A}" (${D}): `+F.message)}}let V=N?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;f||(V=k&&u.length<2?`(?:/${V})`:"/"+V),k&&(V+="?"),i+=V,_+=20,k&&(_+=-8),N&&(_+=-20),D===".*"&&(_+=-50)}d.push(_)}s.push(d)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(u){const d=u.match(o),f={};if(!d)return null;for(let g=1;g<d.length;g++){const _=d[g]||"",A=r[g-1];f[A.name]=_&&A.repeatable?_.split("/"):_}return f}function c(u){let d="",f=!1;for(const g of n){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const _ of g)if(_.type===0)d+=_.value;else if(_.type===1){const{value:A,repeatable:N,optional:k}=_,x=A in u?u[A]:"";if(wn(x)&&!N)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const D=wn(x)?x.join("/"):x;if(!D)if(k)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${A}"`);d+=D}}return d||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function QD(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function hT(n,e){let t=0;const s=n.score,i=e.score;for(;t<s.length&&t<i.length;){const r=QD(s[t],i[t]);if(r)return r;t++}if(Math.abs(i.length-s.length)===1){if(n_(s))return 1;if(n_(i))return-1}return i.length-s.length}function n_(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const YD={type:0,value:""},XD=/[a-zA-Z0-9_]/;function JD(n){if(!n)return[[]];if(n==="/")return[[YD]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(_){throw new Error(`ERR (${t})/"${u}": ${_}`)}let t=0,s=t;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,u="",d="";function f(){u&&(t===0?r.push({type:0,value:u}):t===1||t===2||t===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),t=1):g();break;case 4:g(),t=s;break;case 1:c==="("?t=2:XD.test(c)?g():(f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:t=3:d+=c;break;case 3:f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function ZD(n,e,t){const s=KD(JD(n.path),t),i=Ne(s,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function ex(n,e){const t=[],s=new Map;e=o_({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,g,_){const A=!_,N=i_(f);N.aliasOf=_&&_.record;const k=o_(e,f),x=[N];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const se of F)x.push(i_(Ne({},N,{components:_?_.record.components:N.components,path:se,aliasOf:_?_.record:N})))}let D,V;for(const F of x){const{path:se}=F;if(g&&se[0]!=="/"){const X=g.record.path,v=X[X.length-1]==="/"?"":"/";F.path=g.record.path+(se&&v+se)}if(D=ZD(F,g,k),_?_.alias.push(D):(V=V||D,V!==D&&V.alias.push(D),A&&f.name&&!r_(D)&&o(f.name)),dT(D)&&c(D),N.children){const X=N.children;for(let v=0;v<X.length;v++)r(X[v],D,_&&_.children[v])}_=_||D}return V?()=>{o(V)}:Co}function o(f){if(cT(f)){const g=s.get(f);g&&(s.delete(f),t.splice(t.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=t.indexOf(f);g>-1&&(t.splice(g,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function c(f){const g=sx(f,t);t.splice(g,0,f),f.record.name&&!r_(f)&&s.set(f.record.name,f)}function u(f,g){let _,A={},N,k;if("name"in f&&f.name){if(_=s.get(f.name),!_)throw yr(1,{location:f});k=_.record.name,A=Ne(s_(g.params,_.keys.filter(V=>!V.optional).concat(_.parent?_.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),f.params&&s_(f.params,_.keys.map(V=>V.name))),N=_.stringify(A)}else if(f.path!=null)N=f.path,_=t.find(V=>V.re.test(N)),_&&(A=_.parse(N),k=_.record.name);else{if(_=g.name?s.get(g.name):t.find(V=>V.re.test(g.path)),!_)throw yr(1,{location:f,currentLocation:g});k=_.record.name,A=Ne({},g.params,f.params),N=_.stringify(A)}const x=[];let D=_;for(;D;)x.unshift(D.record),D=D.parent;return{name:k,path:N,params:A,matched:x,meta:nx(x)}}n.forEach(f=>r(f));function d(){t.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:a,getRecordMatcher:i}}function s_(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function i_(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:tx(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function tx(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function r_(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function nx(n){return n.reduce((e,t)=>Ne(e,t.meta),{})}function o_(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function sx(n,e){let t=0,s=e.length;for(;t!==s;){const r=t+s>>1;hT(n,e[r])<0?s=r:t=r+1}const i=ix(n);return i&&(s=e.lastIndexOf(i,s-1)),s}function ix(n){let e=n;for(;e=e.parent;)if(dT(e)&&hT(n,e)===0)return e}function dT({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function rx(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(sT," "),o=r.indexOf("="),a=Go(o<0?r:r.slice(0,o)),c=o<0?null:Go(r.slice(o+1));if(a in e){let u=e[a];wn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function a_(n){let e="";for(let t in n){const s=n[t];if(t=AD(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(wn(s)?s.map(r=>r&&Lh(r)):[s&&Lh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function ox(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=wn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const ax=Symbol(""),l_=Symbol(""),yf=Symbol(""),fT=Symbol(""),Vh=Symbol("");function Zr(){let n=[];function e(s){return n.push(s),()=>{const i=n.indexOf(s);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Cs(n,e,t,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const u=g=>{g===!1?c(yr(4,{from:t,to:e})):g instanceof Error?c(g):HD(g)?c(yr(2,{from:e,to:g})):(o&&s.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),a())},d=r(()=>n.call(s&&s.instances[i],e,t,u));let f=Promise.resolve(d);n.length<3&&(f=f.then(u)),f.catch(g=>c(g))})}function Nu(n,e,t,s,i=r=>r()){const r=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(tT(c)){const d=(c.__vccOpts||c)[e];d&&r.push(Cs(d,t,s,o,a,i))}else{let u=c();r.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=pD(d)?d.default:d;o.mods[a]=d,o.components[a]=f;const _=(f.__vccOpts||f)[e];return _&&Cs(_,t,s,o,a,i)()}))}}return r}function c_(n){const e=ss(yf),t=ss(fT),s=Me(()=>{const c=ts(n.to);return e.resolve(c)}),i=Me(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],f=t.matched;if(!d||!f.length)return-1;const g=f.findIndex(_r.bind(null,d));if(g>-1)return g;const _=u_(c[u-2]);return u>1&&u_(d)===_&&f[f.length-1].path!==_?f.findIndex(_r.bind(null,c[u-2])):g}),r=Me(()=>i.value>-1&&dx(t.params,s.value.params)),o=Me(()=>i.value>-1&&i.value===t.matched.length-1&&aT(t.params,s.value.params));function a(c={}){if(hx(c)){const u=e[ts(n.replace)?"replace":"push"](ts(n.to)).catch(Co);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Me(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function lx(n){return n.length===1?n[0]:n}const cx=zt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:c_,setup(n,{slots:e}){const t=In(c_(n)),{options:s}=ss(yf),i=Me(()=>({[h_(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[h_(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&lx(e.default(t));return n.custom?r:Wi("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},r)}}}),ux=cx;function hx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function dx(n,e){for(const t in e){const s=e[t],i=n[t];if(typeof s=="string"){if(s!==i)return!1}else if(!wn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function u_(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const h_=(n,e,t)=>n??e??t,fx=zt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=ss(Vh),i=Me(()=>n.route||s.value),r=ss(l_,0),o=Me(()=>{let u=ts(r);const{matched:d}=i.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),a=Me(()=>i.value.matched[o.value]);Ka(l_,Me(()=>o.value+1)),Ka(ax,a),Ka(Vh,i);const c=He();return Ya(()=>[c.value,a.value,n.name],([u,d,f],[g,_,A])=>{d&&(d.instances[f]=u,_&&_!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!_r(d,_)||!g)&&(d.enterCallbacks[f]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=i.value,d=n.name,f=a.value,g=f&&f.components[d];if(!g)return d_(t.default,{Component:g,route:u});const _=f.props[d],A=_?_===!0?u.params:typeof _=="function"?_(u):_:null,k=Wi(g,Ne({},A,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return d_(t.default,{Component:k,route:u})||k}}});function d_(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const px=fx;function gx(n){const e=ex(n.routes,n),t=n.parseQuery||rx,s=n.stringifyQuery||a_,i=n.history,r=Zr(),o=Zr(),a=Zr(),c=bw(Ts);let u=Ts;ji&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Pu.bind(null,L=>""+L),f=Pu.bind(null,SD),g=Pu.bind(null,Go);function _(L,J){let Q,te;return cT(L)?(Q=e.getRecordMatcher(L),te=J):te=L,e.addRoute(te,Q)}function A(L){const J=e.getRecordMatcher(L);J&&e.removeRoute(J)}function N(){return e.getRoutes().map(L=>L.record)}function k(L){return!!e.getRecordMatcher(L)}function x(L,J){if(J=Ne({},J||c.value),typeof L=="string"){const S=ku(t,L,J.path),M=e.resolve({path:S.path},J),$=i.createHref(S.fullPath);return Ne(S,M,{params:g(M.params),hash:Go(S.hash),redirectedFrom:void 0,href:$})}let Q;if(L.path!=null)Q=Ne({},L,{path:ku(t,L.path,J.path).path});else{const S=Ne({},L.params);for(const M in S)S[M]==null&&delete S[M];Q=Ne({},L,{params:f(S)}),J.params=f(J.params)}const te=e.resolve(Q,J),be=L.hash||"";te.params=d(g(te.params));const E=kD(s,Ne({},L,{hash:CD(be),path:te.path})),w=i.createHref(E);return Ne({fullPath:E,hash:be,query:s===a_?ox(L.query):L.query||{}},te,{redirectedFrom:void 0,href:w})}function D(L){return typeof L=="string"?ku(t,L,c.value.path):Ne({},L)}function V(L,J){if(u!==L)return yr(8,{from:J,to:L})}function F(L){return v(L)}function se(L){return F(Ne(D(L),{replace:!0}))}function X(L){const J=L.matched[L.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let te=typeof Q=="function"?Q(L):Q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=D(te):{path:te},te.params={}),Ne({query:L.query,hash:L.hash,params:te.path!=null?{}:L.params},te)}}function v(L,J){const Q=u=x(L),te=c.value,be=L.state,E=L.force,w=L.replace===!0,S=X(Q);if(S)return v(Ne(D(S),{state:typeof S=="object"?Ne({},be,S.state):be,force:E,replace:w}),J||Q);const M=Q;M.redirectedFrom=J;let $;return!E&&ND(s,te,Q)&&($=yr(16,{to:M,from:te}),tn(te,te,!0,!1)),($?Promise.resolve($):C(M,te)).catch(U=>Gn(U)?Gn(U,2)?U:hn(U):me(U,M,te)).then(U=>{if(U){if(Gn(U,2))return v(Ne({replace:w},D(U.to),{state:typeof U.to=="object"?Ne({},be,U.to.state):be,force:E}),J||M)}else U=b(M,te,!0,w,be);return R(M,te,U),U})}function y(L,J){const Q=V(L,J);return Q?Promise.reject(Q):Promise.resolve()}function T(L){const J=gs.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(L):L()}function C(L,J){let Q;const[te,be,E]=mx(L,J);Q=Nu(te.reverse(),"beforeRouteLeave",L,J);for(const S of te)S.leaveGuards.forEach(M=>{Q.push(Cs(M,L,J))});const w=y.bind(null,L,J);return Q.push(w),Wt(Q).then(()=>{Q=[];for(const S of r.list())Q.push(Cs(S,L,J));return Q.push(w),Wt(Q)}).then(()=>{Q=Nu(be,"beforeRouteUpdate",L,J);for(const S of be)S.updateGuards.forEach(M=>{Q.push(Cs(M,L,J))});return Q.push(w),Wt(Q)}).then(()=>{Q=[];for(const S of E)if(S.beforeEnter)if(wn(S.beforeEnter))for(const M of S.beforeEnter)Q.push(Cs(M,L,J));else Q.push(Cs(S.beforeEnter,L,J));return Q.push(w),Wt(Q)}).then(()=>(L.matched.forEach(S=>S.enterCallbacks={}),Q=Nu(E,"beforeRouteEnter",L,J,T),Q.push(w),Wt(Q))).then(()=>{Q=[];for(const S of o.list())Q.push(Cs(S,L,J));return Q.push(w),Wt(Q)}).catch(S=>Gn(S,8)?S:Promise.reject(S))}function R(L,J,Q){a.list().forEach(te=>T(()=>te(L,J,Q)))}function b(L,J,Q,te,be){const E=V(L,J);if(E)return E;const w=J===Ts,S=ji?history.state:{};Q&&(te||w?i.replace(L.fullPath,Ne({scroll:w&&S&&S.scroll},be)):i.push(L.fullPath,be)),c.value=L,tn(L,J,Q,w),hn()}let I;function ht(){I||(I=i.listen((L,J,Q)=>{if(!Cn.listening)return;const te=x(L),be=X(te);if(be){v(Ne(be,{replace:!0,force:!0}),te).catch(Co);return}u=te;const E=c.value;ji&&UD(Jm(E.fullPath,Q.delta),xc()),C(te,E).catch(w=>Gn(w,12)?w:Gn(w,2)?(v(Ne(D(w.to),{force:!0}),te).then(S=>{Gn(S,20)&&!Q.delta&&Q.type===zo.pop&&i.go(-1,!1)}).catch(Co),Promise.reject()):(Q.delta&&i.go(-Q.delta,!1),me(w,te,E))).then(w=>{w=w||b(te,E,!1),w&&(Q.delta&&!Gn(w,8)?i.go(-Q.delta,!1):Q.type===zo.pop&&Gn(w,20)&&i.go(-1,!1)),R(te,E,w)}).catch(Co)}))}let Qe=Zr(),Be=Zr(),ve;function me(L,J,Q){hn(L);const te=Be.list();return te.length?te.forEach(be=>be(L,J,Q)):console.error(L),Promise.reject(L)}function Et(){return ve&&c.value!==Ts?Promise.resolve():new Promise((L,J)=>{Qe.add([L,J])})}function hn(L){return ve||(ve=!L,ht(),Qe.list().forEach(([J,Q])=>L?Q(L):J()),Qe.reset()),L}function tn(L,J,Q,te){const{scrollBehavior:be}=n;if(!ji||!be)return Promise.resolve();const E=!Q&&BD(Jm(L.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return Xo().then(()=>be(L,J,E)).then(w=>w&&FD(w)).catch(w=>me(w,L,J))}const Ye=L=>i.go(L);let Xe;const gs=new Set,Cn={currentRoute:c,listening:!0,addRoute:_,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:N,resolve:x,options:n,push:F,replace:se,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Be.add,isReady:Et,install(L){const J=this;L.component("RouterLink",ux),L.component("RouterView",px),L.config.globalProperties.$router=J,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>ts(c)}),ji&&!Xe&&c.value===Ts&&(Xe=!0,F(i.location).catch(be=>{}));const Q={};for(const be in Ts)Object.defineProperty(Q,be,{get:()=>c.value[be],enumerable:!0});L.provide(yf,J),L.provide(fT,V_(Q)),L.provide(Vh,c);const te=L.unmount;gs.add(L),L.unmount=function(){gs.delete(L),gs.size<1&&(u=Ts,I&&I(),I=null,c.value=Ts,Xe=!1,ve=!1),te()}}};function Wt(L){return L.reduce((J,Q)=>J.then(()=>T(Q)),Promise.resolve())}return Cn}function mx(n,e){const t=[],s=[],i=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(u=>_r(u,a))?s.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>_r(u,c))||i.push(c))}return[t,s,i]}const ma={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},vr={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},jt={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_x={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},pT={dangerouslyHTMLString:!1,multiple:!0,position:ma.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},yx={rtl:!1,newestOnTop:!1,toastClassName:""},gT={...pT,...yx};({...pT,type:jt.DEFAULT});var De=(n=>(n[n.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",n[n.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",n.CSS_NAMESPACE="Toastify",n))(De||{}),Fh=(n=>(n.ENTRANCE_ANIMATION_END="d",n))(Fh||{});const vx={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},Ex={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},Tx={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},wx={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},f_="Toastify--animate Toastify__none-enter";function mT(n,e=!1){var t;let s=vx;if(!n||typeof n=="string")switch(n){case"flip":s=wx;break;case"zoom":s=Tx;break;case"slide":s=Ex;break}else s=n;if(e)s.enter=f_;else if(s.enter===f_){const i=(t=s.exit.split("__")[1])==null?void 0:t.split("-")[0];s.enter=`Toastify--animate Toastify__${i}-enter`}return s}function Ix(n){return n.containerId||String(n.position)}const Lc="will-unmount";function Cx(n=ma.TOP_RIGHT){return!!document.querySelector(`.${De.CSS_NAMESPACE}__toast-container--${n}`)}function Ax(n=ma.TOP_RIGHT){return`${De.CSS_NAMESPACE}__toast-container--${n}`}function Rx(n,e,t=!1){const s=[`${De.CSS_NAMESPACE}__toast-container`,`${De.CSS_NAMESPACE}__toast-container--${n}`,t?`${De.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return or(e)?e({position:n,rtl:t,defaultClassName:s}):`${s} ${e||""}`}function Sx(n){var e;const{position:t,containerClassName:s,rtl:i=!1,style:r={}}=n,o=De.CSS_NAMESPACE,a=Ax(t),c=document.querySelector(`.${o}`),u=document.querySelector(`.${a}`),d=!!u&&!((e=u.className)!=null&&e.includes(Lc)),f=c||document.createElement("div"),g=document.createElement("div");g.className=Rx(t,s,i),g.dataset.testid=`${De.CSS_NAMESPACE}__toast-container--${t}`,g.id=Ix(n);for(const _ in r)if(Object.prototype.hasOwnProperty.call(r,_)){const A=r[_];g.style[_]=A}return c||(f.className=De.CSS_NAMESPACE,document.body.appendChild(f)),d||f.appendChild(g),g}function Uh(n){var e,t,s;const i=typeof n=="string"?n:((e=n.currentTarget)==null?void 0:e.id)||((t=n.target)==null?void 0:t.id),r=document.getElementById(i);r&&r.removeEventListener("animationend",Uh,!1);try{Ko[i].unmount(),(s=document.getElementById(i))==null||s.remove(),delete Ko[i],delete gt[i]}catch{}}const Ko=In({});function bx(n,e){const t=document.getElementById(String(e));t&&(Ko[t.id]=n)}function Bh(n,e=!0){const t=String(n);if(!Ko[t])return;const s=document.getElementById(t);s&&s.classList.add(Lc),e?(kx(n),s&&s.addEventListener("animationend",Uh,!1)):Uh(t),Bn.items=Bn.items.filter(i=>i.containerId!==n)}function Px(n){for(const e in Ko)Bh(e,n);Bn.items=[]}function _T(n,e){const t=document.getElementById(n.toastId);if(t){let s=n;s={...s,...mT(s.transition)};const i=s.appendPosition?`${s.exit}--${s.position}`:s.exit;t.className+=` ${i}`,e&&e(t)}}function kx(n){for(const e in gt)if(e===n)for(const t of gt[e]||[])_T(t)}function Nx(n){const e=Er().find(t=>t.toastId===n);return e==null?void 0:e.containerId}function vf(n){return document.getElementById(n)}function Ox(n){const e=vf(n.containerId);return e&&e.classList.contains(Lc)}function p_(n){var e;const t=fi(n.content)?ye(n.content.props):null;return t??ye((e=n.data)!=null?e:{})}function Dx(n){return n?Bn.items.filter(e=>e.containerId===n).length>0:Bn.items.length>0}function xx(){if(Bn.items.length>0){const n=Bn.items.shift();cl(n==null?void 0:n.toastContent,n==null?void 0:n.toastProps)}}const gt=In({}),Bn=In({items:[]});function Er(){const n=ye(gt);return Object.values(n).reduce((e,t)=>[...e,...t],[])}function Lx(n){return Er().find(e=>e.toastId===n)}function cl(n,e={}){if(Ox(e)){const t=vf(e.containerId);t&&t.addEventListener("animationend",$h.bind(null,n,e),!1)}else $h(n,e)}function $h(n,e={}){const t=vf(e.containerId);t&&t.removeEventListener("animationend",$h.bind(null,n,e),!1);const s=gt[e.containerId]||[],i=s.length>0;if(!i&&!Cx(e.position)){const r=Sx(e),o=v0(tL,e);e.useHandler&&e.useHandler(o),o.mount(r),bx(o,r.id)}i&&!e.updateId&&(e.position=s[0].position),Xo(()=>{e.updateId?Xt.update(e):Xt.add(n,e)})}const Xt={add(n,e){const{containerId:t=""}=e;t&&(gt[t]=gt[t]||[],gt[t].find(s=>s.toastId===e.toastId)||setTimeout(()=>{var s,i;e.newestOnTop?(s=gt[t])==null||s.unshift(e):(i=gt[t])==null||i.push(e),e.onOpen&&e.onOpen(p_(e))},e.delay||0))},remove(n){if(n){const e=Nx(n);if(e){const t=gt[e];let s=t.find(i=>i.toastId===n);gt[e]=t.filter(i=>i.toastId!==n),!gt[e].length&&!Dx(e)&&Bh(e,!1),xx(),Xo(()=>{s!=null&&s.onClose&&(s.onClose(p_(s)),s=void 0)})}}},update(n={}){const{containerId:e=""}=n;if(e&&n.updateId){gt[e]=gt[e]||[];const t=gt[e].find(r=>r.toastId===n.toastId),s=(t==null?void 0:t.position)!==n.position||(t==null?void 0:t.transition)!==n.transition,i={...n,disabledEnterTransition:!s,updateId:void 0};Xt.dismissForce(n==null?void 0:n.toastId),setTimeout(()=>{ke(i.content,i)},n.delay||0)}},clear(n,e=!0){n?Bh(n,e):Px(e)},dismissCallback(n){var e;const t=(e=n.currentTarget)==null?void 0:e.id,s=document.getElementById(t);s&&(s.removeEventListener("animationend",Xt.dismissCallback,!1),setTimeout(()=>{Xt.remove(t)}))},dismiss(n){if(n){const e=Er();for(const t of e)if(t.toastId===n){_T(t,s=>{s.addEventListener("animationend",Xt.dismissCallback,!1)});break}}},dismissForce(n){if(n){const e=Er();for(const t of e)if(t.toastId===n){const s=document.getElementById(n);s&&(s.remove(),s.removeEventListener("animationend",Xt.dismissCallback,!1),Xt.remove(n));break}}}},Mx=In({useHandler:void 0}),yT=In({}),Xl=In({});function vT(){return Math.random().toString(36).substring(2,9)}function Vx(n){return typeof n=="number"&&!isNaN(n)}function qh(n){return typeof n=="string"}function or(n){return typeof n=="function"}function Mc(...n){return fs(...n)}function ul(n){return typeof n=="object"&&(!!(n!=null&&n.render)||!!(n!=null&&n.setup)||typeof(n==null?void 0:n.type)=="object")}function Fx(n={}){yT[`${De.CSS_NAMESPACE}-default-options`]=n}function Ux(){return yT[`${De.CSS_NAMESPACE}-default-options`]||gT}function Bx(){const n=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return document.documentElement.classList.contains("dark")||n?"dark":"light"}var hl=(n=>(n[n.Enter=0]="Enter",n[n.Exit=1]="Exit",n))(hl||{});const ET={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:ma.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:vr.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:jt.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""},contentProps:{type:Object,required:!1,default:null},expandCustomProps:{type:Boolean,required:!1,default:!1}},$x={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:jt.DEFAULT},theme:{type:String,required:!1,default:vr.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},qx=zt({name:"ProgressBar",props:$x,setup(n,{attrs:e}){const t=He(),s=Me(()=>n.hide?"true":"false"),i=Me(()=>({...e.style||{},animationDuration:`${n.autoClose===!0?5e3:n.autoClose}ms`,animationPlayState:n.isRunning?"running":"paused",opacity:n.hide||n.autoClose===!1?0:1,transform:n.controlledProgress?`scaleX(${n.progress})`:"none"})),r=Me(()=>[`${De.CSS_NAMESPACE}__progress-bar`,n.controlledProgress?`${De.CSS_NAMESPACE}__progress-bar--controlled`:`${De.CSS_NAMESPACE}__progress-bar--animated`,`${De.CSS_NAMESPACE}__progress-bar-theme--${n.theme}`,`${De.CSS_NAMESPACE}__progress-bar--${n.type}`,n.rtl?`${De.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),o=Me(()=>`${r.value} ${(e==null?void 0:e.class)||""}`),a=()=>{t.value&&(t.value.onanimationend=null,t.value.ontransitionend=null)},c=()=>{n.isIn&&n.closeToast&&n.autoClose!==!1&&(n.closeToast(),a())},u=Me(()=>n.controlledProgress?null:c),d=Me(()=>n.controlledProgress?c:null);return Qa(()=>{t.value&&(a(),t.value.onanimationend=u.value,t.value.ontransitionend=d.value)}),()=>he("div",{ref:t,role:"progressbar","aria-hidden":s.value,"aria-label":"notification timer",class:o.value,style:i.value},null)}}),jx=zt({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:vr.AUTO},type:{type:String,required:!1,default:vr.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(n){return()=>he("button",{class:`${De.CSS_NAMESPACE}__close-button ${De.CSS_NAMESPACE}__close-button--${n.theme}`,type:"button",onClick:e=>{e.stopPropagation(),n.closeToast&&n.closeToast(e)},"aria-label":n.ariaLabel},[he("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[he("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Vc=({theme:n,type:e,path:t,...s})=>he("svg",fs({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${e})`},s),[he("path",{d:t},null)]);function Wx(n){return he(Vc,fs(n,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function Hx(n){return he(Vc,fs(n,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function Gx(n){return he(Vc,fs(n,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function zx(n){return he(Vc,fs(n,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function Kx(){return he("div",{class:`${De.CSS_NAMESPACE}__spinner`},null)}const dl={info:Hx,warning:Wx,success:Gx,error:zx,spinner:Kx},Qx=n=>n in dl;function Yx({theme:n,type:e,isLoading:t,icon:s}){let i;const r=!!t||e==="loading",o={theme:n,type:e};if(r&&(s===void 0||typeof s=="boolean"))return dl.spinner();if(s!==!1){if(ul(s))i=ye(s);else if(or(s)){const a=s;o.type=r?"loading":e,i=a(o),i=!i&&r?dl.spinner():i}else fi(s)?i=pi(s,o):qh(s)||Vx(s)?i=s:Qx(e)&&(i=dl[e](o));return i}}const Xx=()=>{};function Jx(n,e,t=De.COLLAPSE_DURATION){const{scrollHeight:s,style:i}=n,r=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=s+"px",i.transition=`all ${r}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,r)})})}function Zx(n){const e=He(!1),t=He(!1),s=He(!1),i=He(hl.Enter),r=In({...n,appendPosition:n.appendPosition||!1,collapse:typeof n.collapse>"u"?!0:n.collapse,collapseDuration:n.collapseDuration||De.COLLAPSE_DURATION}),o=r.done||Xx,a=Me(()=>r.appendPosition?`${r.enter}--${r.position}`:r.enter),c=Me(()=>r.appendPosition?`${r.exit}--${r.position}`:r.exit),u=Me(()=>n.pauseOnHover?{onMouseenter:k,onMouseleave:N}:{});function d(){const D=a.value.split(" ");g().addEventListener(Fh.ENTRANCE_ANIMATION_END,N,{once:!0});const V=se=>{const X=g();se.target===X&&(X.dispatchEvent(new Event(Fh.ENTRANCE_ANIMATION_END)),X.removeEventListener("animationend",V),X.removeEventListener("animationcancel",V),i.value===hl.Enter&&se.type!=="animationcancel"&&X.classList.remove(...D))},F=()=>{const se=g();se.classList.add(...D),se.addEventListener("animationend",V),se.addEventListener("animationcancel",V)};n.pauseOnFocusLoss&&_(),F()}function f(){if(!g())return;const D=()=>{const F=g();F.removeEventListener("animationend",D),r.collapse?Jx(F,o,r.collapseDuration):o()},V=()=>{const F=g();i.value=hl.Exit,F&&(F.className+=` ${c.value}`,F.addEventListener("animationend",D))};t.value||(s.value?D():setTimeout(V))}function g(){return n.toastRef.value}function _(){document.hasFocus()||k(),window.addEventListener("focus",N),window.addEventListener("blur",k)}function A(){window.removeEventListener("focus",N),window.removeEventListener("blur",k)}function N(){(!n.loading.value||n.isLoading===void 0)&&(e.value=!0)}function k(){e.value=!1}function x(D){D&&(D.stopPropagation(),D.preventDefault()),t.value=!1}return Qa(f),Qa(()=>{const D=Er();t.value=D.findIndex(V=>V.toastId===r.toastId)>-1}),Qa(()=>{n.isLoading!==void 0&&(n.loading.value?k():N())}),Jo(d),oc(()=>{n.pauseOnFocusLoss&&A()}),{isIn:t,isRunning:e,hideToast:x,eventHandlers:u}}const eL=zt({name:"ToastItem",inheritAttrs:!1,props:ET,setup(n){const e=He(),t=Me(()=>!!n.isLoading),s=Me(()=>n.progress!==void 0&&n.progress!==null),i=Me(()=>Yx(n)),r=Me(()=>[`${De.CSS_NAMESPACE}__toast`,`${De.CSS_NAMESPACE}__toast-theme--${n.theme}`,`${De.CSS_NAMESPACE}__toast--${n.type}`,n.rtl?`${De.CSS_NAMESPACE}__toast--rtl`:void 0,n.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:u}=Zx({toastRef:e,loading:t,done:()=>{Xt.remove(n.toastId)},...mT(n.transition,n.disabledEnterTransition),...n});return()=>he("div",fs({id:n.toastId,class:r.value,style:n.toastStyle||{},ref:e,"data-testid":`toast-item-${n.toastId}`,onClick:d=>{n.closeOnClick&&c(),n.onClick&&n.onClick(d)}},u.value),[he("div",{role:n.role,"data-testid":"toast-body",class:`${De.CSS_NAMESPACE}__toast-body ${n.bodyClassName||""}`},[i.value!=null&&he("div",{"data-testid":`toast-icon-${n.type}`,class:[`${De.CSS_NAMESPACE}__toast-icon`,n.isLoading?"":`${De.CSS_NAMESPACE}--animate-icon ${De.CSS_NAMESPACE}__zoom-enter`].join(" ")},[ul(i.value)?Wi(ye(i.value),{theme:n.theme,type:n.type}):or(i.value)?i.value({theme:n.theme,type:n.type}):i.value]),he("div",{"data-testid":"toast-content"},[ul(n.content)?Wi(ye(n.content),{toastProps:ye(n),closeToast:c,data:n.data,...n.expandCustomProps?n.contentProps:{contentProps:n.contentProps||{}}}):or(n.content)?n.content({toastProps:ye(n),closeToast:c,data:n.data}):n.dangerouslyHTMLString?Wi("div",{innerHTML:n.content}):n.content])]),(n.closeButton===void 0||n.closeButton===!0)&&he(jx,{theme:n.theme,closeToast:d=>{d.stopPropagation(),d.preventDefault(),c()}},null),ul(n.closeButton)?Wi(ye(n.closeButton),{closeToast:c,type:n.type,theme:n.theme}):or(n.closeButton)?n.closeButton({closeToast:c,type:n.type,theme:n.theme}):null,he(qx,{className:n.progressClassName,style:n.progressStyle,rtl:n.rtl,theme:n.theme,isIn:a.value,type:n.type,hide:n.hideProgressBar,isRunning:o.value,autoClose:n.autoClose,controlledProgress:s.value,progress:n.progress,closeToast:n.isLoading?void 0:c},null)])}});let Ro=0;function TT(){typeof window>"u"||(Ro&&window.cancelAnimationFrame(Ro),Ro=window.requestAnimationFrame(TT),Xl.lastUrl!==window.location.href&&(Xl.lastUrl=window.location.href,Xt.clear()))}const tL=zt({name:"ToastifyContainer",inheritAttrs:!1,props:ET,setup(n){const e=Me(()=>n.containerId),t=Me(()=>gt[e.value]||[]),s=Me(()=>t.value.filter(i=>i.position===n.position));return Jo(()=>{typeof window<"u"&&n.clearOnUrlChange&&window.requestAnimationFrame(TT)}),oc(()=>{typeof window<"u"&&Ro&&(window.cancelAnimationFrame(Ro),Xl.lastUrl="")}),()=>he(Pt,null,[s.value.map(i=>{const{toastId:r=""}=i;return he(eL,fs({key:r},i),null)})])}});let Ou=!1;const wT={isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1};function IT(){const n=[];return Er().forEach(e=>{const t=document.getElementById(e.containerId);t&&!t.classList.contains(Lc)&&n.push(e)}),n}function nL(n){const e=IT().length,t=n??0;return t>0&&e+Bn.items.length>=t}function sL(n){nL(n.limit)&&!n.updateId&&Bn.items.push({toastId:n.toastId,containerId:n.containerId,toastContent:n.content,toastProps:n})}function Ys(n,e,t={}){if(Ou)return;t=Mc(Ux(),{type:e},ye(t)),(!t.toastId||typeof t.toastId!="string"&&typeof t.toastId!="number")&&(t.toastId=vT()),t={...t,...t.type==="loading"?wT:{},content:n,containerId:t.containerId||String(t.position)};const s=Number(t==null?void 0:t.progress);return!isNaN(s)&&s<0&&(t.progress=0),s>1&&(t.progress=1),t.theme==="auto"&&(t.theme=Bx()),sL(t),Xl.lastUrl=window.location.href,t.multiple?Bn.items.length?t.updateId&&cl(n,t):cl(n,t):(Ou=!0,ke.clearAll(void 0,!1),setTimeout(()=>{cl(n,t)},0),setTimeout(()=>{Ou=!1},390)),t.toastId}const ke=(n,e)=>Ys(n,jt.DEFAULT,e);ke.info=(n,e)=>Ys(n,jt.DEFAULT,{...e,type:jt.INFO});ke.error=(n,e)=>Ys(n,jt.DEFAULT,{...e,type:jt.ERROR});ke.warning=(n,e)=>Ys(n,jt.DEFAULT,{...e,type:jt.WARNING});ke.warn=ke.warning;ke.success=(n,e)=>Ys(n,jt.DEFAULT,{...e,type:jt.SUCCESS});ke.loading=(n,e)=>Ys(n,jt.DEFAULT,Mc(e,wT));ke.dark=(n,e)=>Ys(n,jt.DEFAULT,Mc(e,{theme:vr.DARK}));ke.remove=n=>{n?Xt.dismiss(n):Xt.clear()};ke.clearAll=(n,e)=>{Xo(()=>{Xt.clear(n,e)})};ke.isActive=n=>{let e=!1;return e=IT().findIndex(t=>t.toastId===n)>-1,e};ke.update=(n,e={})=>{setTimeout(()=>{const t=Lx(n);if(t){const s=ye(t),{content:i}=s,r={...s,...e,toastId:e.toastId||n,updateId:vT()},o=r.render||i;delete r.render,Ys(o,r.type,r)}},0)};ke.done=n=>{ke.update(n,{isLoading:!1,progress:1})};ke.promise=iL;function iL(n,{pending:e,error:t,success:s},i){var r,o,a;let c;const u={...i||{},autoClose:!1};e&&(c=qh(e)?ke.loading(e,u):ke.loading(e.render,{...u,...e}));const d={autoClose:(r=i==null?void 0:i.autoClose)!=null?r:!0,closeOnClick:(o=i==null?void 0:i.closeOnClick)!=null?o:!0,closeButton:(a=i==null?void 0:i.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},f=(_,A,N)=>{if(A==null){ke.remove(c);return}const k={type:_,...d,...i,data:N},x=qh(A)?{render:A}:A;return c?ke.update(c,{...k,...x,isLoading:!1}):ke(x.render,{...k,...x,isLoading:!1}),N},g=or(n)?n():n;return g.then(_=>{f("success",s,_)}).catch(_=>{f("error",t,_)}),g}ke.POSITION=ma;ke.THEME=vr;ke.TYPE=jt;ke.TRANSITIONS=_x;const rL={install(n,e={}){Mx.useHandler=e.useHandler||(()=>{}),oL(e)}};typeof window<"u"&&(window.Vue3Toastify=rL);function oL(n={}){const e=Mc(gT,n);Fx(e)}const aL={class:"auth-form-container"},lL={key:0,class:"auth-form__error"},cL=zt({__name:"BaseForm",props:{title:{},onSubmit:{type:Function},errorMessage:{}},setup(n){return(e,t)=>(tt(),$t("div",aL,[re("form",{class:"auth-form",onSubmit:t[0]||(t[0]=l2((...s)=>e.onSubmit&&e.onSubmit(...s),["prevent"]))},[re("h1",null,ci(e.title),1),Bu(e.$slots,"inputs",{},void 0),e.errorMessage?(tt(),$t("p",lL,ci(e.errorMessage),1)):Hu("",!0),Bu(e.$slots,"footer",{},void 0)],32)]))}}),CT=Gs(cL,[["__scopeId","data-v-63ad09f6"]]),uL={class:"auth-form__email"},hL={class:"auth-form__password"},dL={class:"auth-form__infoText"},fL=zt({__name:"AuthorizationForm",setup(n){const e=He(""),t=He(""),s=He("");function i(){const r=ua();pb(r,e.value,t.value).then(()=>{Ii.push("/mini-paint/")}).catch(()=>{ke.error("Incorrect email or password",{autoClose:3e3,position:"bottom-left",theme:"colored"})})}return(r,o)=>{const a=id("router-link");return tt(),No(CT,{title:"Sign in",onSubmit:i,errorMessage:s.value},{inputs:ns(()=>[re("div",uL,[o[2]||(o[2]=re("p",{class:"auth-form__nameOfInput"},"Email",-1)),uo(re("input",{type:"email",class:"auth-form__input",placeholder:"Enter email","onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c)},null,512),[[po,e.value]])]),re("div",hL,[o[3]||(o[3]=re("p",{class:"auth-form__nameOfInput"},"Password",-1)),uo(re("input",{type:"password",class:"auth-form__input",placeholder:"Enter password","onUpdate:modelValue":o[1]||(o[1]=c=>t.value=c)},null,512),[[po,t.value]])])]),footer:ns(()=>[he(oi,{"button-text":"Sign in","button-width":90,"button-padding":15,class:"auth-form__button"}),re("p",dL,[o[5]||(o[5]=gi(" Don't have an account? ")),he(a,{to:"/mini-paint/signup",class:"auth-form__link"},{default:ns(()=>o[4]||(o[4]=[gi("Sign up")])),_:1})])]),_:1},8,["errorMessage"])}}}),pL=Gs(fL,[["__scopeId","data-v-876289f6"]]),gL={class:"register-form__email"},mL={class:"register-form__password"},_L={class:"register-form__password"},yL={class:"register-form__infoText"},vL=zt({__name:"RegistrationForm",setup(n){const e=He(""),t=He(""),s=He(""),i=He();function r(){if(t.value!==s.value){i.value="Passwords miss match";return}fb(ua(),e.value,t.value).then(()=>{Ii.push("/mini-paint")}).catch(o=>{o.code==="auth/invalid-email"?ke.error("Incorrect email.",{autoClose:3e3,position:"bottom-left",theme:"colored"}):o.code==="auth/weak-password"?ke.error("Password should be at least 6 characters.",{autoClose:3e3,position:"bottom-left",theme:"colored"}):o.code==="auth/email-already-in-use"?ke.error("This email is already in use",{autoClose:3e3,position:"bottom-left",theme:"colored"}):ke.error("An unexpected error occurred.",{autoClose:3e3,position:"bottom-left",theme:"colored"})})}return(o,a)=>{const c=id("router-link");return tt(),No(CT,{title:"Sign up",onSubmit:r,errorMessage:i.value},{inputs:ns(()=>[re("div",gL,[a[3]||(a[3]=re("p",{class:"register-form__nameOfInput"},"Email",-1)),uo(re("input",{type:"email",class:"register-form__input",placeholder:"Enter email","onUpdate:modelValue":a[0]||(a[0]=u=>e.value=u)},null,512),[[po,e.value]])]),re("div",mL,[a[4]||(a[4]=re("p",{class:"register-form__nameOfInput"},"Password",-1)),uo(re("input",{type:"password",class:"register-form__input",placeholder:"Enter password","onUpdate:modelValue":a[1]||(a[1]=u=>t.value=u)},null,512),[[po,t.value]])]),re("div",_L,[a[5]||(a[5]=re("p",{class:"register-form__nameOfInput"},"Confirm password",-1)),uo(re("input",{type:"password",class:"register-form__input",placeholder:"Enter password","onUpdate:modelValue":a[2]||(a[2]=u=>s.value=u)},null,512),[[po,s.value]])])]),footer:ns(()=>[he(oi,{"button-text":"Sing up","button-width":90,"button-padding":15,class:"register-form__button"}),re("p",yL,[a[7]||(a[7]=gi(" Already have an account? ")),he(c,{to:"/mini-paint/login",class:"register-form__link"},{default:ns(()=>a[6]||(a[6]=[gi("Sing in")])),_:1})])]),_:1},8,["errorMessage"])}}}),EL=Gs(vL,[["__scopeId","data-v-3bda26e6"]]),TL="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-2%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%20fill='%23ffffff'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3ebrush%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-101.000000,%20-156.000000)'%20fill='%23ffffff'%3e%3cpath%20d='M132.132,156.827%20C130.975,155.685%20129.099,155.685%20127.942,156.827%20L115.336,169.277%20L119.499,173.44%20L132.132,160.964%20C133.289,159.821%20133.289,157.969%20132.132,156.827%20L132.132,156.827%20Z%20M112.461,180.385%20C111.477,181.298%20107.08,183.333%20104.491,181.36%20C104.491,181.36%20105.392,180.657%20106.074,179.246%20C107.703,174.919%20111.763,175.56%20111.763,175.56%20L113.159,176.938%20C113.173,176.952%20114.202,178.771%20112.461,180.385%20L112.461,180.385%20Z%20M113.913,170.683%20L110.764,173.788%20C108.661,173.74%20105.748,174.485%20104.491,178.603%20C103.53,180.781%20101,180.671%20101,180.671%20C106.253,186.498%20112.444,183.196%20113.857,181.764%20C115.1,180.506%20115.279,178.966%20115.146,177.734%20L118.076,174.846%20L113.913,170.683%20L113.913,170.683%20Z'%20id='brush'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",wL="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z'/%3e%3c/g%3e%3c/svg%3e",IL="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3crect%20x='1'%20y='1'%20width='14'%20height='14'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",CL="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cg%3e%3cpath%20d='M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",AL="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20enable-background='new%200%200%2024%2024'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M21.9,11.5l-4.5-7.8c-0.2-0.3-0.5-0.5-0.9-0.5h-9c-0.4,0-0.7,0.2-0.9,0.5l-4.5,7.8c-0.2,0.3-0.2,0.7,0,1l4.5,7.8c0.2,0.3,0.5,0.5,0.9,0.5h9c0.4,0,0.7-0.2,0.9-0.5l4.5-7.8C22,12.2,22,11.8,21.9,11.5z'/%3e%3c/g%3e%3c/svg%3e",RL="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3estar%3c/title%3e%3cpath%20d='M3.488%2013.184l6.272%206.112-1.472%208.608%207.712-4.064%207.712%204.064-1.472-8.608%206.272-6.112-8.64-1.248-3.872-7.808-3.872%207.808z'/%3e%3c/g%3e%3c/svg%3e",SL="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%2056%2056'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M%2011.6406%2014.6641%20L%2013.1406%2048.9062%20C%2013.2578%2051.8359%2015.0156%2053.4297%2017.8984%2053.4297%20L%2038.125%2053.4297%20C%2041.0078%2053.4297%2042.7656%2051.8359%2042.8828%2048.9062%20L%2044.3828%2014.6641%20L%2047.0781%2014.6641%20C%2048.0391%2014.6641%2048.8125%2013.8672%2048.8125%2012.9063%20C%2048.8125%2011.9453%2048.0391%2011.1250%2047.0781%2011.1250%20L%2037.4453%2011.1250%20L%2037.4453%207.7734%20C%2037.4453%204.5625%2035.3125%202.5703%2032.2891%202.5703%20L%2023.6640%202.5703%20C%2020.6406%202.5703%2018.5313%204.5625%2018.5313%207.7734%20L%2018.5313%2011.1250%20L%208.9453%2011.1250%20C%208.0078%2011.1250%207.1875%2011.9453%207.1875%2012.9063%20C%207.1875%2013.8672%208.0078%2014.6641%208.9453%2014.6641%20Z%20M%2021.7187%207.7734%20C%2021.7187%206.4375%2022.7031%205.5000%2024.1094%205.5000%20L%2031.8672%205.5000%20C%2033.2969%205.5000%2034.2813%206.4375%2034.2813%207.7734%20L%2034.2813%2011.1250%20L%2021.7187%2011.1250%20Z%20M%2035.6172%2048.6484%20C%2034.7031%2048.6484%2034.0703%2047.8516%2034.0938%2046.8906%20L%2035.0547%2019.7031%20C%2035.1016%2018.7656%2035.7813%2017.9922%2036.625%2017.9922%20C%2037.4922%2017.9922%2038.1953%2018.7422%2038.1719%2019.7031%20L%2037.1172%2046.9141%20C%2037.0938%2047.9219%2036.4844%2048.6484%2035.6172%2048.6484%20Z%20M%2020.4062%2048.6484%20C%2019.5391%2048.6484%2018.9297%2047.9219%2018.9062%2046.9141%20L%2017.8516%2019.7031%20C%2017.8281%2018.7187%2018.5313%2017.9922%2019.3984%2017.9922%20C%2020.2422%2017.9922%2020.9453%2018.7656%2020.9687%2019.7031%20L%2021.9297%2046.8906%20C%2021.9531%2047.8516%2021.3203%2048.6484%2020.4062%2048.6484%20Z%20M%2029.6172%2046.8906%20C%2029.6172%2047.8516%2028.8672%2048.6484%2028.0234%2048.6484%20C%2027.1797%2048.6484%2026.4297%2047.8516%2026.4297%2046.8906%20L%2026.4297%2019.7031%20C%2026.4297%2018.7656%2027.1797%2017.9922%2028.0234%2017.9922%20C%2028.8672%2017.9922%2029.6406%2018.7656%2029.6406%2019.7031%20Z'/%3e%3c/g%3e%3c/svg%3e",bL="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.1716%201C18.702%201%2019.2107%201.21071%2019.5858%201.58579L22.4142%204.41421C22.7893%204.78929%2023%205.29799%2023%205.82843V20C23%2021.6569%2021.6569%2023%2020%2023H4C2.34315%2023%201%2021.6569%201%2020V4C1%202.34315%202.34315%201%204%201H18.1716ZM4%203C3.44772%203%203%203.44772%203%204V20C3%2020.5523%203.44772%2021%204%2021L5%2021L5%2015C5%2013.3431%206.34315%2012%208%2012L16%2012C17.6569%2012%2019%2013.3431%2019%2015V21H20C20.5523%2021%2021%2020.5523%2021%2020V6.82843C21%206.29799%2020.7893%205.78929%2020.4142%205.41421L18.5858%203.58579C18.2107%203.21071%2017.702%203%2017.1716%203H17V5C17%206.65685%2015.6569%208%2014%208H10C8.34315%208%207%206.65685%207%205V3H4ZM17%2021V15C17%2014.4477%2016.5523%2014%2016%2014L8%2014C7.44772%2014%207%2014.4477%207%2015L7%2021L17%2021ZM9%203H15V5C15%205.55228%2014.5523%206%2014%206H10C9.44772%206%209%205.55228%209%205V3Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",PL="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20id='SVGRoot'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns:svg='http://www.w3.org/2000/svg'%20fill='%23ffffff'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cdefs%20id='defs2'/%3e%3cg%20id='layer1'%3e%3cpath%20d='M%209%202%20A%201.0001%201.0001%200%200%200%208%203%20L%208%208%20A%201%201%200%200%200%209%209%20A%201%201%200%200%200%2010%208%20L%2010%204%20L%2018%204%20L%2018%2020%20L%2010%2020%20L%2010%2016%20A%201%201%200%200%200%209%2015%20A%201%201%200%200%200%208%2016%20L%208%2021%20A%201.0001%201.0001%200%200%200%209%2022%20L%2019%2022%20A%201.0001%201.0001%200%200%200%2020%2021%20L%2020%203%20A%201.0001%201.0001%200%200%200%2019%202%20L%209%202%20z%20M%207.0292969%209%20A%201%201%200%200%200%206.2929688%209.2929688%20L%204.3125%2011.273438%20L%204.2929688%2011.292969%20A%201.0001%201.0001%200%200%200%204.2832031%2011.302734%20A%201%201%200%200%200%204.2363281%2011.355469%20A%201%201%200%200%200%204.1855469%2011.421875%20A%201%201%200%200%200%204.1464844%2011.482422%20A%201.0001%201.0001%200%200%200%204.1289062%2011.509766%20A%201%201%200%200%200%204.0996094%2011.566406%20A%201%201%200%200%200%204.0683594%2011.638672%20A%201.0001%201.0001%200%200%200%204.0644531%2011.650391%20A%201%201%200%200%200%204.0410156%2011.714844%20A%201.0001%201.0001%200%200%200%204.0332031%2011.75%20A%201%201%200%200%200%204.0234375%2011.791016%20A%201.0001%201.0001%200%200%200%204.015625%2011.828125%20A%201%201%200%200%200%204.0078125%2011.871094%20A%201.0001%201.0001%200%200%200%204.0019531%2011.943359%20A%201.0001%201.0001%200%200%200%204%2011.988281%20A%201%201%200%200%200%204%2012%20A%201%201%200%200%200%204.0019531%2012.029297%20A%201.0001%201.0001%200%200%200%204.0039062%2012.066406%20A%201%201%200%200%200%204.0078125%2012.117188%20A%201.0001%201.0001%200%200%200%204.0117188%2012.146484%20A%201%201%200%200%200%204.0253906%2012.222656%20A%201%201%200%200%200%204.0410156%2012.28125%20A%201.0001%201.0001%200%200%200%204.0546875%2012.324219%20A%201%201%200%200%200%204.0585938%2012.337891%20A%201.0001%201.0001%200%200%200%204.0878906%2012.408203%20A%201.0001%201.0001%200%200%200%204.1210938%2012.474609%20A%201%201%200%200%200%204.1347656%2012.501953%20A%201.0001%201.0001%200%200%200%204.1640625%2012.546875%20A%201%201%200%200%200%204.1777344%2012.568359%20A%201.0001%201.0001%200%200%200%204.2011719%2012.601562%20A%201%201%200%200%200%204.21875%2012.623047%20A%201.0001%201.0001%200%200%200%204.265625%2012.677734%20A%201%201%200%200%200%204.2851562%2012.699219%20A%201.0001%201.0001%200%200%200%204.2929688%2012.707031%20A%201%201%200%200%200%204.3339844%2012.746094%20L%206.2929688%2014.707031%20A%201%201%200%200%200%207.7070312%2014.707031%20A%201%201%200%200%200%207.7070312%2013.292969%20L%207.4140625%2013%20L%2014%2013%20A%201%201%200%200%200%2015%2012%20A%201%201%200%200%200%2014%2011%20L%207.4140625%2011%20L%207.7070312%2010.707031%20A%201%201%200%200%200%207.7070312%209.2929688%20A%201%201%200%200%200%207.0292969%209%20z%20'%20id='path6945'%20style='color:%23ffffff;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23ffffff;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:%23ffffff;solid-opacity:1;vector-effect:none;fill:%23ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;stop-color:%23ffffff;stop-opacity:1;opacity:1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",kL=["type","value"],NL=zt({__name:"BaseInput",props:{inputMaxWidth:{},inputType:{},modelValue:{}},emits:["update:modelValue"],setup(n,{emit:e}){const t=e,s=i=>{const r=i.target;t("update:modelValue",r.value)};return(i,r)=>(tt(),$t("input",{type:i.inputType,style:Qo({maxWidth:i.inputMaxWidth+"px"}),value:i.modelValue,onInput:s},null,44,kL))}}),jh=Gs(NL,[["__scopeId","data-v-304cc48d"]]),OL={class:"editor"},DL={class:"editor__toolbar"},xL={class:"editor__field"},LL=zt({__name:"Editor",setup(n){const e=He(null),t=He(null),s=He("#000000"),i=He(2),r=He("brush");let o=!1,a=0,c=0,u=0,d=0;const g=ua().currentUser;Jo(()=>{V();const X=e.value;t.value=X.getContext("2d"),X.addEventListener("mousedown",k),X.addEventListener("mousemove",x),X.addEventListener("mouseup",D),window.addEventListener("resize",V)}),Q_(()=>{window.removeEventListener("resize",V)});let _=null;function A(X){r.value=X}function N(){t.value&&t.value.clearRect(0,0,e.value.width,e.value.height)}function k(X){var T,C;const v=e.value,y=v.getBoundingClientRect();a=X.clientX-y.left,c=X.clientY-y.top,o=!0,t.value&&r.value!=="brush"?_=t.value.getImageData(0,0,v.width,v.height):((T=t.value)==null||T.beginPath(),(C=t.value)==null||C.moveTo(a,c))}function x(X){if(!o)return;const y=e.value.getBoundingClientRect();if(u=X.clientX-y.left,d=X.clientY-y.top,t.value)if(t.value.lineWidth=i.value,t.value.strokeStyle=s.value,r.value==="brush")t.value.lineTo(u,d),t.value.stroke();else{_&&t.value.putImageData(_,0,0);let T=Math.sqrt((u-a)**2+(d-c)**2);switch(r.value){case"line":t.value.beginPath(),t.value.moveTo(a,c),t.value.lineTo(u,d),t.value.stroke();break;case"circle":t.value.beginPath(),t.value.arc(a,c,T,0,Math.PI*2),t.value.stroke();break;case"square":t.value.beginPath(),t.value.moveTo(a,c),t.value.lineTo(u,c),t.value.lineTo(u,d),t.value.lineTo(a,d),t.value.closePath(),t.value.stroke();break;case"polygon":const C=6,R=2*Math.PI/C;t.value.beginPath();for(let Qe=0;Qe<=C;Qe++){const Be=Qe*R,ve=a+T*Math.cos(Be),me=c+T*Math.sin(Be);Qe===0?t.value.moveTo(ve,me):t.value.lineTo(ve,me)}t.value.closePath(),t.value.stroke();break;case"star":const b=5,I=T,ht=T/2;t.value.beginPath();for(let Qe=0;Qe<b*2;Qe++){const Be=Qe%2===0?I:ht,ve=Math.PI/b*Qe,me=a+Be*Math.cos(ve),Et=c+Be*Math.sin(ve);Qe===0?t.value.moveTo(me,Et):t.value.lineTo(me,Et)}t.value.closePath(),t.value.stroke();break}}}function D(){o=!1,r.value!=="brush"&&_&&t.value&&(_=t.value.getImageData(0,0,e.value.width,e.value.height))}const V=()=>{const X=e.value,v=document.querySelector(".editor__field"),y=v.offsetWidth,T=v.offsetHeight;X.width=y,X.height=T,t.value&&(t.value.lineWidth=i.value,t.value.strokeStyle=s.value)},F=async()=>{if(!e.value)return;const X=e.value.toDataURL("image/png");try{await gS(zy(RT,"canvas_images"),{data:X,timestamp:Date.now(),email:g==null?void 0:g.email}),ke.success("Image saved successfully!",{autoClose:3e3,position:"bottom-left",theme:"colored"})}catch{}},se=()=>{Ii.push("/mini-paint/")};return(X,v)=>(tt(),$t("div",OL,[re("div",DL,[re("button",{onClick:v[0]||(v[0]=y=>A("brush")),class:"editor__button"},v[8]||(v[8]=[re("img",{src:TL,alt:"brush",class:"editor__icon"},null,-1)])),re("button",{onClick:v[1]||(v[1]=y=>A("line")),class:"editor__button"},v[9]||(v[9]=[re("img",{src:wL,alt:"line",class:"editor__icon"},null,-1)])),re("button",{onClick:v[2]||(v[2]=y=>A("square")),class:"editor__button"},v[10]||(v[10]=[re("img",{src:IL,alt:"triangle",class:"editor__icon"},null,-1)])),re("button",{onClick:v[3]||(v[3]=y=>A("circle")),class:"editor__button"},v[11]||(v[11]=[re("img",{src:CL,alt:"circle",class:"editor__icon"},null,-1)])),re("button",{onClick:v[4]||(v[4]=y=>A("polygon")),class:"editor__button"},v[12]||(v[12]=[re("img",{src:AL,alt:"polygon",class:"editor__icon"},null,-1)])),re("button",{onClick:v[5]||(v[5]=y=>A("star")),class:"editor__button"},v[13]||(v[13]=[re("img",{src:RL,alt:"star",class:"editor__icon"},null,-1)])),re("label",null,[v[14]||(v[14]=gi(" Width: ")),he(jh,{"input-type":"number","input-max-width":90,modelValue:i.value,"onUpdate:modelValue":v[6]||(v[6]=y=>i.value=y),min:"1",max:"20"},null,8,["modelValue"])]),he(jh,{"input-type":"color","input-max-width":90,modelValue:s.value,"onUpdate:modelValue":v[7]||(v[7]=y=>s.value=y)},null,8,["modelValue"]),re("button",{onClick:N,class:"editor__button"},v[15]||(v[15]=[re("img",{src:SL,alt:"clean",class:"editor__icon"},null,-1)])),re("button",{class:"editor__button",onClick:F},v[16]||(v[16]=[re("img",{src:bL,alt:"save",class:"editor__icon"},null,-1)])),re("button",{class:"editor__button",onClick:se},v[17]||(v[17]=[re("img",{src:PL,alt:"back",class:"editor__icon"},null,-1)]))]),re("div",xL,[re("canvas",{ref_key:"canvas",ref:e,class:"editor__canvas"},null,512)])]))}}),ML=Gs(LL,[["__scopeId","data-v-e17562c7"]]),VL="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.7071%204.29289C12.0976%204.68342%2012.0976%205.31658%2011.7071%205.70711L6.41421%2011H20C20.5523%2011%2021%2011.4477%2021%2012C21%2012.5523%2020.5523%2013%2020%2013H6.41421L11.7071%2018.2929C12.0976%2018.6834%2012.0976%2019.3166%2011.7071%2019.7071C11.3166%2020.0976%2010.6834%2020.0976%2010.2929%2019.7071L3.29289%2012.7071C3.10536%2012.5196%203%2012.2652%203%2012C3%2011.7348%203.10536%2011.4804%203.29289%2011.2929L10.2929%204.29289C10.6834%203.90237%2011.3166%203.90237%2011.7071%204.29289Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",FL="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%20transform='rotate(180)'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.7071%204.29289C12.0976%204.68342%2012.0976%205.31658%2011.7071%205.70711L6.41421%2011H20C20.5523%2011%2021%2011.4477%2021%2012C21%2012.5523%2020.5523%2013%2020%2013H6.41421L11.7071%2018.2929C12.0976%2018.6834%2012.0976%2019.3166%2011.7071%2019.7071C11.3166%2020.0976%2010.6834%2020.0976%2010.2929%2019.7071L3.29289%2012.7071C3.10536%2012.5196%203%2012.2652%203%2012C3%2011.7348%203.10536%2011.4804%203.29289%2011.2929L10.2929%204.29289C10.6834%203.90237%2011.3166%203.90237%2011.7071%204.29289Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",UL={class:"menu"},BL={class:"menu__header"},$L={class:"dropdown"},qL={key:0,class:"dropdown__list"},jL=["onClick"],WL={class:"menu__gallery"},HL={key:0,class:"gallery"},GL=["src"],zL={key:1},KL={key:0,class:"menu__pagination"},Du=6,QL=zt({__name:"HomePage",setup(n){const e=He([]),t=He([]),s=He([]);let i=He(1);const r=He(null),o=He(!1);Jo(async()=>{const k=aS(zy(RT,"canvas_images")),x=await pS(k),D=new Set;e.value=x.docs.map(V=>{const F=V.data();return F.email&&D.add(F.email),{data:F.data,email:F.email,timestamp:F.timestamp}}).sort((V,F)=>F.timestamp-V.timestamp),t.value=Array.from(D),s.value=[...e.value],document.body.addEventListener("click",N)});const a=k=>{r.value=k,s.value=e.value.filter(x=>x.email===k),o.value=!1},c=()=>{r.value=null,s.value=[...e.value]},u=()=>{const k=ua();yb(k).then(()=>{Ii.push("/mini-paint/login")})},d=()=>{Ii.push("/mini-paint/editor")},f=Me(()=>{const k=(i.value-1)*Du,x=k+Du;return s.value.slice(k,x)}),g=Me(()=>Math.ceil(s.value.length/Du)),_=()=>{i.value>1&&i.value--},A=()=>{i.value<g.value&&i.value++},N=k=>{const x=document.querySelector(".dropdown");x&&!x.contains(k.target)&&(o.value=!1)};return(k,x)=>(tt(),$t("div",UL,[re("div",BL,[x[2]||(x[2]=re("h3",null,"Gallery of images",-1)),he(oi,{"button-text":"Creat image","button-width":20,"button-padding":10,onClick:d,"button-border-color":"2px solid var(--white)"}),re("div",$L,[he(jh,{modelValue:r.value,"onUpdate:modelValue":x[0]||(x[0]=D=>r.value=D),"input-type":"search","input-max-width":200,placeholder:"Search by user email...",onFocus:x[1]||(x[1]=D=>o.value=!0),onClick:c},null,8,["modelValue"]),o.value?(tt(),$t("ul",qL,[(tt(!0),$t(Pt,null,mp(t.value,D=>(tt(),$t("li",{key:D,onClick:V=>a(D)},ci(D),9,jL))),128))])):Hu("",!0)]),he(oi,{"button-text":"Sign out","button-width":20,"button-padding":10,onClick:u,"button-border-color":"2px solid var(--white)"})]),re("div",WL,[e.value.length>0?(tt(),$t("div",HL,[(tt(!0),$t(Pt,null,mp(f.value,(D,V)=>(tt(),$t("div",{key:V,class:"gallery__item"},[re("img",{src:D.data,alt:"Canvas Image",class:"gallery__image"},null,8,GL)]))),128))])):(tt(),$t("p",zL,"No images available."))]),g.value?(tt(),$t("div",KL,[he(oi,{"button-width":10,"button-padding":5,onClick:_,disabled:ts(i)===1},{default:ns(()=>x[3]||(x[3]=[re("img",{src:VL,alt:"left",class:"menu__pagination-icon"},null,-1)])),_:1},8,["disabled"]),re("span",null,"Page "+ci(ts(i))+" of "+ci(g.value),1),he(oi,{"button-width":10,"button-padding":5,onClick:A,disabled:ts(i)===g.value},{default:ns(()=>x[4]||(x[4]=[re("img",{src:FL,alt:"right",class:"menu__pagination-icon"},null,-1)])),_:1},8,["disabled"])])):Hu("",!0)]))}}),YL=Gs(QL,[["__scopeId","data-v-8025f185"]]),XL=[{path:"/mini-paint/",name:"homePage",component:YL},{path:"/mini-paint/login",name:"login",component:pL},{path:"/mini-paint/signup",name:"signup",component:EL},{path:"/mini-paint/editor",name:"editor",component:ML}],Ii=gx({history:WD(),routes:XL});Ii.beforeEach(async n=>{const e=ua(),t=await new Promise(i=>{_b(e,r=>{i(!!r)})});let s;if(!n.path.includes("login")&&!n.path.includes("signup")?s=t:n.path.includes("login")||n.path.includes("signup")?s=!t:s=!0,!s)return t?"/mini-paint":"/mini-paint/login"});const AT=D0({apiKey:"AIzaSyALpqXLX7P0MLd-2fc7tqOeXZpQGBRX5jo",authDomain:"mini-paint-2fba1.firebaseapp.com",projectId:"mini-paint-2fba1",storageBucket:"mini-paint-2fba1.firebasestorage.app",messagingSenderId:"405984094812",appId:"1:405984094812:web:b4557bb894312e13da5499"}),RT=KR(AT);v0(m2).use(fD,{firebaseApp:AT}).use(Ii).mount("#app");
