(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const qe={},ns=[],Fn=()=>{},yw=()=>!1,ic=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xh=t=>t.startsWith("onUpdate:"),Ft=Object.assign,Jh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vw=Object.prototype.hasOwnProperty,xe=(t,e)=>vw.call(t,e),fe=Array.isArray,is=t=>rc(t)==="[object Map]",C_=t=>rc(t)==="[object Set]",_e=t=>typeof t=="function",rt=t=>typeof t=="string",mi=t=>typeof t=="symbol",Ke=t=>t!==null&&typeof t=="object",A_=t=>(Ke(t)||_e(t))&&_e(t.then)&&_e(t.catch),S_=Object.prototype.toString,rc=t=>S_.call(t),Ew=t=>rc(t).slice(8,-1),b_=t=>rc(t)==="[object Object]",Zh=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Eo=Yh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Tw=/-(\w)/g,pn=sc(t=>t.replace(Tw,(e,n)=>n?n.toUpperCase():"")),ww=/\B([A-Z])/g,Pr=sc(t=>t.replace(ww,"-$1").toLowerCase()),oc=sc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ou=sc(t=>t?`on${oc(t)}`:""),Mi=(t,e)=>!Object.is(t,e),au=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},R_=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Iw=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Tp;const ac=()=>Tp||(Tp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ms(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=rt(i)?bw(i):ms(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(rt(t)||Ke(t))return t}const Cw=/;(?![^(]*\))/g,Aw=/:([^]+)/,Sw=/\/\*[^]*?\*\//g;function bw(t){const e={};return t.replace(Sw,"").split(Cw).forEach(n=>{if(n){const i=n.split(Aw);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function lc(t){let e="";if(rt(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const i=lc(t[n]);i&&(e+=i+" ")}else if(Ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pw=Yh(Rw);function P_(t){return!!t||t===""}const k_=t=>!!(t&&t.__v_isRef===!0),Gi=t=>rt(t)?t:t==null?"":fe(t)||Ke(t)&&(t.toString===S_||!_e(t.toString))?k_(t)?Gi(t.value):JSON.stringify(t,N_,2):String(t),N_=(t,e)=>k_(e)?N_(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[lu(i,s)+" =>"]=r,n),{})}:C_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>lu(n))}:mi(e)?lu(e):Ke(e)&&!fe(e)&&!b_(e)?String(e):e,lu=(t,e="")=>{var n;return mi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let en;class kw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=en,!e&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=en;try{return en=this,e()}finally{en=n}}}on(){en=this}off(){en=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Nw(){return en}let $e;const cu=new WeakSet;class O_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,en&&en.active&&en.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cu.has(this)&&(cu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||x_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wp(this),L_(this);const e=$e,n=In;$e=this,In=!0;try{return this.fn()}finally{M_(this),$e=e,In=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nd(e);this.deps=this.depsTail=void 0,wp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$u(this)&&this.run()}get dirty(){return $u(this)}}let D_=0,To,wo;function x_(t,e=!1){if(t.flags|=8,e){t.next=wo,wo=t;return}t.next=To,To=t}function ed(){D_++}function td(){if(--D_>0)return;if(wo){let e=wo;for(wo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;To;){let e=To;for(To=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function L_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function M_(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),nd(i),Ow(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function $u(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(V_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function V_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Vo))return;t.globalVersion=Vo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!$u(t)){t.flags&=-3;return}const n=$e,i=In;$e=t,In=!0;try{L_(t);const r=t.fn(t._value);(e.version===0||Mi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{$e=n,In=i,M_(t),t.flags&=-3}}function nd(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)nd(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ow(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let In=!0;const F_=[];function Ji(){F_.push(In),In=!1}function Zi(){const t=F_.pop();In=t===void 0?!0:t}function wp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let Vo=0;class Dw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class id{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!In||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new Dw($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,U_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=i)}return n}trigger(e){this.version++,Vo++,this.notify(e)}notify(e){ed();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{td()}}}function U_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)U_(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const qu=new WeakMap,gr=Symbol(""),ju=Symbol(""),Fo=Symbol("");function kt(t,e,n){if(In&&$e){let i=qu.get(t);i||qu.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new id),r.map=i,r.key=n),r.track()}}function ii(t,e,n,i,r,s){const o=qu.get(t);if(!o){Vo++;return}const a=c=>{c&&c.trigger()};if(ed(),e==="clear")o.forEach(a);else{const c=fe(t),u=c&&Zh(n);if(c&&n==="length"){const h=Number(i);o.forEach((f,g)=>{(g==="length"||g===Fo||!mi(g)&&g>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Fo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(gr)),is(t)&&a(o.get(ju)));break;case"delete":c||(a(o.get(gr)),is(t)&&a(o.get(ju)));break;case"set":is(t)&&a(o.get(gr));break}}td()}function jr(t){const e=ye(t);return e===t?e:(kt(e,"iterate",Fo),dn(t)?e:e.map(Nt))}function cc(t){return kt(t=ye(t),"iterate",Fo),t}const xw={__proto__:null,[Symbol.iterator](){return uu(this,Symbol.iterator,Nt)},concat(...t){return jr(this).concat(...t.map(e=>fe(e)?jr(e):e))},entries(){return uu(this,"entries",t=>(t[1]=Nt(t[1]),t))},every(t,e){return Zn(this,"every",t,e,void 0,arguments)},filter(t,e){return Zn(this,"filter",t,e,n=>n.map(Nt),arguments)},find(t,e){return Zn(this,"find",t,e,Nt,arguments)},findIndex(t,e){return Zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Zn(this,"findLast",t,e,Nt,arguments)},findLastIndex(t,e){return Zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return hu(this,"includes",t)},indexOf(...t){return hu(this,"indexOf",t)},join(t){return jr(this).join(t)},lastIndexOf(...t){return hu(this,"lastIndexOf",t)},map(t,e){return Zn(this,"map",t,e,void 0,arguments)},pop(){return ro(this,"pop")},push(...t){return ro(this,"push",t)},reduce(t,...e){return Ip(this,"reduce",t,e)},reduceRight(t,...e){return Ip(this,"reduceRight",t,e)},shift(){return ro(this,"shift")},some(t,e){return Zn(this,"some",t,e,void 0,arguments)},splice(...t){return ro(this,"splice",t)},toReversed(){return jr(this).toReversed()},toSorted(t){return jr(this).toSorted(t)},toSpliced(...t){return jr(this).toSpliced(...t)},unshift(...t){return ro(this,"unshift",t)},values(){return uu(this,"values",Nt)}};function uu(t,e,n){const i=cc(t),r=i[e]();return i!==t&&!dn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const Lw=Array.prototype;function Zn(t,e,n,i,r,s){const o=cc(t),a=o!==t&&!dn(t),c=o[e];if(c!==Lw[e]){const f=c.apply(t,s);return a?Nt(f):f}let u=n;o!==t&&(a?u=function(f,g){return n.call(this,Nt(f),g,t)}:n.length>2&&(u=function(f,g){return n.call(this,f,g,t)}));const h=c.call(o,u,i);return a&&r?r(h):h}function Ip(t,e,n,i){const r=cc(t);let s=n;return r!==t&&(dn(t)?n.length>3&&(s=function(o,a,c){return n.call(this,o,a,c,t)}):s=function(o,a,c){return n.call(this,o,Nt(a),c,t)}),r[e](s,...i)}function hu(t,e,n){const i=ye(t);kt(i,"iterate",Fo);const r=i[e](...n);return(r===-1||r===!1)&&od(n[0])?(n[0]=ye(n[0]),i[e](...n)):r}function ro(t,e,n=[]){Ji(),ed();const i=ye(t)[e].apply(t,n);return td(),Zi(),i}const Mw=Yh("__proto__,__v_isRef,__isVue"),B_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mi));function Vw(t){mi(t)||(t=String(t));const e=ye(this);return kt(e,"has",t),e.hasOwnProperty(t)}class $_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?zw:H_:s?G_:j_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=fe(e);if(!r){let c;if(o&&(c=xw[n]))return c;if(n==="hasOwnProperty")return Vw}const a=Reflect.get(e,n,Vt(e)?e:i);return(mi(n)?B_.has(n):Mw(n))||(r||kt(e,"get",n),s)?a:Vt(a)?o&&Zh(n)?a:a.value:Ke(a)?r?z_(a):mn(a):a}}class q_ extends $_{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const c=_r(s);if(!dn(i)&&!_r(i)&&(s=ye(s),i=ye(i)),!fe(e)&&Vt(s)&&!Vt(i))return c?!1:(s.value=i,!0)}const o=fe(e)&&Zh(n)?Number(n)<e.length:xe(e,n),a=Reflect.set(e,n,i,Vt(e)?e:r);return e===ye(r)&&(o?Mi(i,s)&&ii(e,"set",n,i):ii(e,"add",n,i)),a}deleteProperty(e,n){const i=xe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ii(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!mi(n)||!B_.has(n))&&kt(e,"has",n),i}ownKeys(e){return kt(e,"iterate",fe(e)?"length":gr),Reflect.ownKeys(e)}}class Fw extends $_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uw=new q_,Bw=new Fw,$w=new q_(!0);const Gu=t=>t,Ua=t=>Reflect.getPrototypeOf(t);function qw(t,e,n){return function(...i){const r=this.__v_raw,s=ye(r),o=is(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...i),h=n?Gu:e?Hu:Nt;return!e&&kt(s,"iterate",c?ju:gr),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:a?[h(f[0]),h(f[1])]:h(f),done:g}},[Symbol.iterator](){return this}}}}function Ba(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jw(t,e){const n={get(r){const s=this.__v_raw,o=ye(s),a=ye(r);t||(Mi(r,a)&&kt(o,"get",r),kt(o,"get",a));const{has:c}=Ua(o),u=e?Gu:t?Hu:Nt;if(c.call(o,r))return u(s.get(r));if(c.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&kt(ye(r),"iterate",gr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=ye(s),a=ye(r);return t||(Mi(r,a)&&kt(o,"has",r),kt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,c=ye(a),u=e?Gu:t?Hu:Nt;return!t&&kt(c,"iterate",gr),a.forEach((h,f)=>r.call(s,u(h),u(f),o))}};return Ft(n,t?{add:Ba("add"),set:Ba("set"),delete:Ba("delete"),clear:Ba("clear")}:{add(r){!e&&!dn(r)&&!_r(r)&&(r=ye(r));const s=ye(this);return Ua(s).has.call(s,r)||(s.add(r),ii(s,"add",r,r)),this},set(r,s){!e&&!dn(s)&&!_r(s)&&(s=ye(s));const o=ye(this),{has:a,get:c}=Ua(o);let u=a.call(o,r);u||(r=ye(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,s),u?Mi(s,h)&&ii(o,"set",r,s):ii(o,"add",r,s),this},delete(r){const s=ye(this),{has:o,get:a}=Ua(s);let c=o.call(s,r);c||(r=ye(r),c=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return c&&ii(s,"delete",r,void 0),u},clear(){const r=ye(this),s=r.size!==0,o=r.clear();return s&&ii(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=qw(r,t,e)}),n}function rd(t,e){const n=jw(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(xe(n,r)&&r in i?n:i,r,s)}const Gw={get:rd(!1,!1)},Hw={get:rd(!1,!0)},Ww={get:rd(!0,!1)};const j_=new WeakMap,G_=new WeakMap,H_=new WeakMap,zw=new WeakMap;function Kw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qw(t){return t.__v_skip||!Object.isExtensible(t)?0:Kw(Ew(t))}function mn(t){return _r(t)?t:sd(t,!1,Uw,Gw,j_)}function W_(t){return sd(t,!1,$w,Hw,G_)}function z_(t){return sd(t,!0,Bw,Ww,H_)}function sd(t,e,n,i,r){if(!Ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Qw(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function rs(t){return _r(t)?rs(t.__v_raw):!!(t&&t.__v_isReactive)}function _r(t){return!!(t&&t.__v_isReadonly)}function dn(t){return!!(t&&t.__v_isShallow)}function od(t){return t?!!t.__v_raw:!1}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Yw(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&R_(t,"__v_skip",!0),t}const Nt=t=>Ke(t)?mn(t):t,Hu=t=>Ke(t)?z_(t):t;function Vt(t){return t?t.__v_isRef===!0:!1}function Ze(t){return K_(t,!1)}function Xw(t){return K_(t,!0)}function K_(t,e){return Vt(t)?t:new Jw(t,e)}class Jw{constructor(e,n){this.dep=new id,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ye(e),this._value=n?e:Nt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||dn(e)||_r(e);e=i?e:ye(e),Mi(e,n)&&(this._rawValue=e,this._value=i?e:Nt(e),this.dep.trigger())}}function ve(t){return Vt(t)?t.value:t}const Zw={get:(t,e,n)=>e==="__v_raw"?t:ve(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Vt(r)&&!Vt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Q_(t){return rs(t)?t:new Proxy(t,Zw)}class eI{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new id(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return x_(this,!0),!0}get value(){const e=this.dep.track();return V_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function tI(t,e,n=!1){let i,r;return _e(t)?i=t:(i=t.get,r=t.set),new eI(i,r,n)}const $a={},_l=new WeakMap;let ur;function nI(t,e=!1,n=ur){if(n){let i=_l.get(n);i||_l.set(n,i=[]),i.push(t)}}function iI(t,e,n=qe){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:c}=n,u=$=>r?$:dn($)||r===!1||r===0?ki($,1):ki($);let h,f,g,_,C=!1,k=!1;if(Vt(t)?(f=()=>t.value,C=dn(t)):rs(t)?(f=()=>u(t),C=!0):fe(t)?(k=!0,C=t.some($=>rs($)||dn($)),f=()=>t.map($=>{if(Vt($))return $.value;if(rs($))return u($);if(_e($))return c?c($,2):$()})):_e(t)?e?f=c?()=>c(t,2):t:f=()=>{if(g){Ji();try{g()}finally{Zi()}}const $=ur;ur=h;try{return c?c(t,3,[_]):t(_)}finally{ur=$}}:f=Fn,e&&r){const $=f,ee=r===!0?1/0:r;f=()=>ki($(),ee)}const N=Nw(),q=()=>{h.stop(),N&&N.active&&Jh(N.effects,h)};if(s&&e){const $=e;e=(...ee)=>{$(...ee),q()}}let V=k?new Array(t.length).fill($a):$a;const B=$=>{if(!(!(h.flags&1)||!h.dirty&&!$))if(e){const ee=h.run();if(r||C||(k?ee.some((re,I)=>Mi(re,V[I])):Mi(ee,V))){g&&g();const re=ur;ur=h;try{const I=[ee,V===$a?void 0:k&&V[0]===$a?[]:V,_];c?c(e,3,I):e(...I),V=ee}finally{ur=re}}}else h.run()};return a&&a(B),h=new O_(f),h.scheduler=o?()=>o(B,!1):B,_=$=>nI($,!1,h),g=h.onStop=()=>{const $=_l.get(h);if($){if(c)c($,4);else for(const ee of $)ee();_l.delete(h)}},e?i?B(!0):V=h.run():o?o(B.bind(null,!0),!0):h.run(),q.pause=h.pause.bind(h),q.resume=h.resume.bind(h),q.stop=q,q}function ki(t,e=1/0,n){if(e<=0||!Ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Vt(t))ki(t.value,e,n);else if(fe(t))for(let i=0;i<t.length;i++)ki(t[i],e,n);else if(C_(t)||is(t))t.forEach(i=>{ki(i,e,n)});else if(b_(t)){for(const i in t)ki(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ki(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sa(t,e,n,i){try{return i?t(...i):t()}catch(r){uc(r,e,n)}}function jn(t,e,n,i){if(_e(t)){const r=sa(t,e,n,i);return r&&A_(r)&&r.catch(s=>{uc(s,e,n)}),r}if(fe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(jn(t[s],e,n,i));return r}}function uc(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||qe;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(s){Ji(),sa(s,null,10,[t,c,u]),Zi();return}}rI(t,n,r,i,o)}function rI(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Gt=[];let Dn=-1;const ss=[];let bi=null,Wr=0;const Y_=Promise.resolve();let yl=null;function yr(t){const e=yl||Y_;return t?e.then(this?t.bind(this):t):e}function sI(t){let e=Dn+1,n=Gt.length;for(;e<n;){const i=e+n>>>1,r=Gt[i],s=Uo(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function ad(t){if(!(t.flags&1)){const e=Uo(t),n=Gt[Gt.length-1];!n||!(t.flags&2)&&e>=Uo(n)?Gt.push(t):Gt.splice(sI(e),0,t),t.flags|=1,X_()}}function X_(){yl||(yl=Y_.then(Z_))}function oI(t){fe(t)?ss.push(...t):bi&&t.id===-1?bi.splice(Wr+1,0,t):t.flags&1||(ss.push(t),t.flags|=1),X_()}function Cp(t,e,n=Dn+1){for(;n<Gt.length;n++){const i=Gt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Gt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function J_(t){if(ss.length){const e=[...new Set(ss)].sort((n,i)=>Uo(n)-Uo(i));if(ss.length=0,bi){bi.push(...e);return}for(bi=e,Wr=0;Wr<bi.length;Wr++){const n=bi[Wr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bi=null,Wr=0}}const Uo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Z_(t){try{for(Dn=0;Dn<Gt.length;Dn++){const e=Gt[Dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),sa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dn<Gt.length;Dn++){const e=Gt[Dn];e&&(e.flags&=-2)}Dn=-1,Gt.length=0,J_(),yl=null,(Gt.length||ss.length)&&Z_()}}let Ht=null,e0=null;function vl(t){const e=Ht;return Ht=t,e0=t&&t.type.__scopeId||null,e}function ut(t,e=Ht,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&xp(-1);const s=vl(e);let o;try{o=t(...r)}finally{vl(s),i._d&&xp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function lr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(Ji(),jn(c,n,8,[t.el,a,t,e]),Zi())}}const aI=Symbol("_vte"),lI=t=>t.__isTeleport;function ld(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ld(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function mt(t,e){return _e(t)?Ft({name:t.name},e,{setup:t}):t}function t0(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function El(t,e,n,i,r=!1){if(fe(t)){t.forEach((C,k)=>El(C,e&&(fe(e)?e[k]:e),n,i,r));return}if(os(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&El(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?pd(i.component):i.el,o=r?null:s,{i:a,r:c}=t,u=e&&e.r,h=a.refs===qe?a.refs={}:a.refs,f=a.setupState,g=ye(f),_=f===qe?()=>!1:C=>xe(g,C);if(u!=null&&u!==c&&(rt(u)?(h[u]=null,_(u)&&(f[u]=null)):Vt(u)&&(u.value=null)),_e(c))sa(c,a,12,[o,h]);else{const C=rt(c),k=Vt(c);if(C||k){const N=()=>{if(t.f){const q=C?_(c)?f[c]:h[c]:c.value;r?fe(q)&&Jh(q,s):fe(q)?q.includes(s)||q.push(s):C?(h[c]=[s],_(c)&&(f[c]=h[c])):(c.value=[s],t.k&&(h[t.k]=c.value))}else C?(h[c]=o,_(c)&&(f[c]=o)):k&&(c.value=o,t.k&&(h[t.k]=o))};o?(N.id=-1,Zt(N,n)):N()}}}ac().requestIdleCallback;ac().cancelIdleCallback;const os=t=>!!t.type.__asyncLoader,n0=t=>t.type.__isKeepAlive;function cI(t,e){i0(t,"a",e)}function uI(t,e){i0(t,"da",e)}function i0(t,e,n=Lt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(hc(e,i,n),n){let r=n.parent;for(;r&&r.parent;)n0(r.parent.vnode)&&hI(i,e,n,r),r=r.parent}}function hI(t,e,n,i){const r=hc(e,t,i,!0);dc(()=>{Jh(i[e],r)},n)}function hc(t,e,n=Lt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ji();const a=oa(n),c=jn(e,n,t,o);return a(),Zi(),c});return i?r.unshift(s):r.push(s),s}}const _i=t=>(e,n=Lt)=>{(!qo||t==="sp")&&hc(t,(...i)=>e(...i),n)},dI=_i("bm"),Kn=_i("m"),fI=_i("bu"),pI=_i("u"),cd=_i("bum"),dc=_i("um"),gI=_i("sp"),mI=_i("rtg"),_I=_i("rtc");function yI(t,e=Lt){hc("ec",t,e)}const vI="components";function ud(t,e){return TI(vI,t,!0,e)||t}const EI=Symbol.for("v-ndc");function TI(t,e,n=!0,i=!1){const r=Ht||Lt;if(r){const s=r.type;{const a=o1(s,!1);if(a&&(a===e||a===pn(e)||a===oc(pn(e))))return s}const o=Ap(r[t]||s[t],e)||Ap(r.appContext[t],e);return!o&&i?s:o}}function Ap(t,e){return t&&(t[e]||t[pn(e)]||t[oc(pn(e))])}function r0(t,e,n,i){let r;const s=n,o=fe(t);if(o||rt(t)){const a=o&&rs(t);let c=!1;a&&(c=!dn(t),t=cc(t)),r=new Array(t.length);for(let u=0,h=t.length;u<h;u++)r[u]=e(c?Nt(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(Ke(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(t[h],h,c,s)}}else r=[];return r}function Wu(t,e,n={},i,r){if(Ht.ce||Ht.parent&&os(Ht.parent)&&Ht.parent.ce)return e!=="default"&&(n.name=e),Xe(),$o(ft,null,[Z("slot",n,i)],64);let s=t[e];s&&s._c&&(s._d=!1),Xe();const o=s&&s0(s(n)),a=n.key||o&&o.key,c=$o(ft,{key:(a&&!mi(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return s&&s._c&&(s._d=!0),c}function s0(t){return t.some(e=>vr(e)?!(e.type===Hi||e.type===ft&&!s0(e.children)):!0)?t:null}const zu=t=>t?A0(t)?pd(t):zu(t.parent):null,Io=Ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zu(t.parent),$root:t=>zu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>a0(t),$forceUpdate:t=>t.f||(t.f=()=>{ad(t.update)}),$nextTick:t=>t.n||(t.n=yr.bind(t.proxy)),$watch:t=>qI.bind(t)}),du=(t,e)=>t!==qe&&!t.__isScriptSetup&&xe(t,e),wI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(du(i,e))return o[e]=1,i[e];if(r!==qe&&xe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&xe(u,e))return o[e]=3,s[e];if(n!==qe&&xe(n,e))return o[e]=4,n[e];Ku&&(o[e]=0)}}const h=Io[e];let f,g;if(h)return e==="$attrs"&&kt(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==qe&&xe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,xe(g,e))return g[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return du(r,e)?(r[e]=n,!0):i!==qe&&xe(i,e)?(i[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==qe&&xe(t,o)||du(e,o)||(a=s[0])&&xe(a,o)||xe(i,o)||xe(Io,o)||xe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sp(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ku=!0;function II(t){const e=a0(t),n=t.proxy,i=t.ctx;Ku=!1,e.beforeCreate&&bp(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:g,beforeUpdate:_,updated:C,activated:k,deactivated:N,beforeDestroy:q,beforeUnmount:V,destroyed:B,unmounted:$,render:ee,renderTracked:re,renderTriggered:I,errorCaptured:y,serverPrefetch:T,expose:A,inheritAttrs:S,components:R,directives:w,filters:$t}=e;if(u&&CI(u,i,null),o)for(const Ae in o){const Te=o[Ae];_e(Te)&&(i[Ae]=Te.bind(n))}if(r){const Ae=r.call(n,n);Ke(Ae)&&(t.data=mn(Ae))}if(Ku=!0,s)for(const Ae in s){const Te=s[Ae],Xt=_e(Te)?Te.bind(n,n):_e(Te.get)?Te.get.bind(n,n):Fn,yn=!_e(Te)&&_e(Te.set)?Te.set.bind(n):Fn,an=Fe({get:Xt,set:yn});Object.defineProperty(i,Ae,{enumerable:!0,configurable:!0,get:()=>an.value,set:Qe=>an.value=Qe})}if(a)for(const Ae in a)o0(a[Ae],i,n,Ae);if(c){const Ae=_e(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(Te=>{Za(Te,Ae[Te])})}h&&bp(h,t,"c");function tt(Ae,Te){fe(Te)?Te.forEach(Xt=>Ae(Xt.bind(n))):Te&&Ae(Te.bind(n))}if(tt(dI,f),tt(Kn,g),tt(fI,_),tt(pI,C),tt(cI,k),tt(uI,N),tt(yI,y),tt(_I,re),tt(mI,I),tt(cd,V),tt(dc,$),tt(gI,T),fe(A))if(A.length){const Ae=t.exposed||(t.exposed={});A.forEach(Te=>{Object.defineProperty(Ae,Te,{get:()=>n[Te],set:Xt=>n[Te]=Xt})})}else t.exposed||(t.exposed={});ee&&t.render===Fn&&(t.render=ee),S!=null&&(t.inheritAttrs=S),R&&(t.components=R),w&&(t.directives=w),T&&t0(t)}function CI(t,e,n=Fn){fe(t)&&(t=Qu(t));for(const i in t){const r=t[i];let s;Ke(r)?"default"in r?s=li(r.from||i,r.default,!0):s=li(r.from||i):s=li(r),Vt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function bp(t,e,n){jn(fe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function o0(t,e,n,i){let r=i.includes(".")?E0(n,i):()=>n[i];if(rt(t)){const s=e[t];_e(s)&&ls(r,s)}else if(_e(t))ls(r,t.bind(n));else if(Ke(t))if(fe(t))t.forEach(s=>o0(s,e,n,i));else{const s=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(s)&&ls(r,s,t)}}function a0(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!n&&!i?c=e:(c={},r.length&&r.forEach(u=>Tl(c,u,o,!0)),Tl(c,e,o)),Ke(e)&&s.set(e,c),c}function Tl(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Tl(t,s,n,!0),r&&r.forEach(o=>Tl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=AI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const AI={data:Rp,props:Pp,emits:Pp,methods:fo,computed:fo,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:fo,directives:fo,watch:bI,provide:Rp,inject:SI};function Rp(t,e){return e?t?function(){return Ft(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function SI(t,e){return fo(Qu(t),Qu(e))}function Qu(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function jt(t,e){return t?[...new Set([].concat(t,e))]:e}function fo(t,e){return t?Ft(Object.create(null),t,e):e}function Pp(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:Ft(Object.create(null),Sp(t),Sp(e??{})):e}function bI(t,e){if(!t)return e;if(!e)return t;const n=Ft(Object.create(null),t);for(const i in e)n[i]=jt(t[i],e[i]);return n}function l0(){return{app:null,config:{isNativeTag:yw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RI=0;function PI(t,e){return function(i,r=null){_e(i)||(i=Ft({},i)),r!=null&&!Ke(r)&&(r=null);const s=l0(),o=new WeakSet,a=[];let c=!1;const u=s.app={_uid:RI++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:l1,get config(){return s.config},set config(h){},use(h,...f){return o.has(h)||(h&&_e(h.install)?(o.add(h),h.install(u,...f)):_e(h)&&(o.add(h),h(u,...f))),u},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),u},component(h,f){return f?(s.components[h]=f,u):s.components[h]},directive(h,f){return f?(s.directives[h]=f,u):s.directives[h]},mount(h,f,g){if(!c){const _=u._ceVNode||Z(i,r);return _.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),t(_,h,g),c=!0,u._container=h,h.__vue_app__=u,pd(_.component)}},onUnmount(h){a.push(h)},unmount(){c&&(jn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return s.provides[h]=f,u},runWithContext(h){const f=as;as=u;try{return h()}finally{as=f}}};return u}}let as=null;function Za(t,e){if(Lt){let n=Lt.provides;const i=Lt.parent&&Lt.parent.provides;i===n&&(n=Lt.provides=Object.create(i)),n[t]=e}}function li(t,e,n=!1){const i=Lt||Ht;if(i||as){const r=as?as._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&_e(e)?e.call(i&&i.proxy):e}}const c0={},u0=()=>Object.create(c0),h0=t=>Object.getPrototypeOf(t)===c0;function kI(t,e,n,i=!1){const r={},s=u0();t.propsDefaults=Object.create(null),d0(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:W_(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function NI(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ye(r),[c]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let g=h[f];if(fc(t.emitsOptions,g))continue;const _=e[g];if(c)if(xe(s,g))_!==s[g]&&(s[g]=_,u=!0);else{const C=pn(g);r[C]=Yu(c,a,C,_,t,!1)}else _!==s[g]&&(s[g]=_,u=!0)}}}else{d0(t,e,r,s)&&(u=!0);let h;for(const f in a)(!e||!xe(e,f)&&((h=Pr(f))===f||!xe(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(r[f]=Yu(c,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!xe(e,f))&&(delete s[f],u=!0)}u&&ii(t.attrs,"set","")}function d0(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Eo(c))continue;const u=e[c];let h;r&&xe(r,h=pn(c))?!s||!s.includes(h)?n[h]=u:(a||(a={}))[h]=u:fc(t.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(s){const c=ye(n),u=a||qe;for(let h=0;h<s.length;h++){const f=s[h];n[f]=Yu(r,c,f,u[f],t,!xe(u,f))}}return o}function Yu(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const h=oa(r);i=u[n]=c.call(null,e),h()}}else i=c;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Pr(n))&&(i=!0))}return i}const OI=new WeakMap;function f0(t,e,n=!1){const i=n?OI:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let c=!1;if(!_e(t)){const h=f=>{c=!0;const[g,_]=f0(f,e,!0);Ft(o,g),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!s&&!c)return Ke(t)&&i.set(t,ns),ns;if(fe(s))for(let h=0;h<s.length;h++){const f=pn(s[h]);kp(f)&&(o[f]=qe)}else if(s)for(const h in s){const f=pn(h);if(kp(f)){const g=s[h],_=o[f]=fe(g)||_e(g)?{type:g}:Ft({},g),C=_.type;let k=!1,N=!0;if(fe(C))for(let q=0;q<C.length;++q){const V=C[q],B=_e(V)&&V.name;if(B==="Boolean"){k=!0;break}else B==="String"&&(N=!1)}else k=_e(C)&&C.name==="Boolean";_[0]=k,_[1]=N,(k||xe(_,"default"))&&a.push(f)}}const u=[o,a];return Ke(t)&&i.set(t,u),u}function kp(t){return t[0]!=="$"&&!Eo(t)}const p0=t=>t[0]==="_"||t==="$stable",hd=t=>fe(t)?t.map(xn):[xn(t)],DI=(t,e,n)=>{if(e._n)return e;const i=ut((...r)=>hd(e(...r)),n);return i._c=!1,i},g0=(t,e,n)=>{const i=t._ctx;for(const r in t){if(p0(r))continue;const s=t[r];if(_e(s))e[r]=DI(r,s,i);else if(s!=null){const o=hd(s);e[r]=()=>o}}},m0=(t,e)=>{const n=hd(e);t.slots.default=()=>n},_0=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},xI=(t,e,n)=>{const i=t.slots=u0();if(t.vnode.shapeFlag&32){const r=e._;r?(_0(i,e,n),n&&R_(i,"_",r,!0)):g0(e,i)}else e&&m0(t,e)},LI=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=qe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:_0(r,e,n):(s=!e.$stable,g0(e,r)),o=e}else e&&(m0(t,e),o={default:1});if(s)for(const a in r)!p0(a)&&o[a]==null&&delete r[a]},Zt=QI;function MI(t){return VI(t)}function VI(t,e){const n=ac();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:g,setScopeId:_=Fn,insertStaticContent:C}=t,k=(v,E,b,x=null,F=null,L=null,z=void 0,H=null,G=!!E.dynamicChildren)=>{if(v===E)return;v&&!so(v,E)&&(x=D(v),Qe(v,F,L,!0),v=null),E.patchFlag===-2&&(G=!1,E.dynamicChildren=null);const{type:j,ref:oe,shapeFlag:Y}=E;switch(j){case pc:N(v,E,b,x);break;case Hi:q(v,E,b,x);break;case pu:v==null&&V(E,b,x,z);break;case ft:R(v,E,b,x,F,L,z,H,G);break;default:Y&1?ee(v,E,b,x,F,L,z,H,G):Y&6?w(v,E,b,x,F,L,z,H,G):(Y&64||Y&128)&&j.process(v,E,b,x,F,L,z,H,G,ne)}oe!=null&&F&&El(oe,v&&v.ref,L,E||v,!E)},N=(v,E,b,x)=>{if(v==null)i(E.el=a(E.children),b,x);else{const F=E.el=v.el;E.children!==v.children&&u(F,E.children)}},q=(v,E,b,x)=>{v==null?i(E.el=c(E.children||""),b,x):E.el=v.el},V=(v,E,b,x)=>{[v.el,v.anchor]=C(v.children,E,b,x,v.el,v.anchor)},B=({el:v,anchor:E},b,x)=>{let F;for(;v&&v!==E;)F=g(v),i(v,b,x),v=F;i(E,b,x)},$=({el:v,anchor:E})=>{let b;for(;v&&v!==E;)b=g(v),r(v),v=b;r(E)},ee=(v,E,b,x,F,L,z,H,G)=>{E.type==="svg"?z="svg":E.type==="math"&&(z="mathml"),v==null?re(E,b,x,F,L,z,H,G):T(v,E,F,L,z,H,G)},re=(v,E,b,x,F,L,z,H)=>{let G,j;const{props:oe,shapeFlag:Y,transition:ie,dirs:le}=v;if(G=v.el=o(v.type,L,oe&&oe.is,oe),Y&8?h(G,v.children):Y&16&&y(v.children,G,null,x,F,fu(v,L),z,H),le&&lr(v,null,x,"created"),I(G,v,v.scopeId,z,x),oe){for(const ge in oe)ge!=="value"&&!Eo(ge)&&s(G,ge,null,oe[ge],L,x);"value"in oe&&s(G,"value",null,oe.value,L),(j=oe.onVnodeBeforeMount)&&On(j,x,v)}le&&lr(v,null,x,"beforeMount");const ae=FI(F,ie);ae&&ie.beforeEnter(G),i(G,E,b),((j=oe&&oe.onVnodeMounted)||ae||le)&&Zt(()=>{j&&On(j,x,v),ae&&ie.enter(G),le&&lr(v,null,x,"mounted")},F)},I=(v,E,b,x,F)=>{if(b&&_(v,b),x)for(let L=0;L<x.length;L++)_(v,x[L]);if(F){let L=F.subTree;if(E===L||w0(L.type)&&(L.ssContent===E||L.ssFallback===E)){const z=F.vnode;I(v,z,z.scopeId,z.slotScopeIds,F.parent)}}},y=(v,E,b,x,F,L,z,H,G=0)=>{for(let j=G;j<v.length;j++){const oe=v[j]=H?Ri(v[j]):xn(v[j]);k(null,oe,E,b,x,F,L,z,H)}},T=(v,E,b,x,F,L,z)=>{const H=E.el=v.el;let{patchFlag:G,dynamicChildren:j,dirs:oe}=E;G|=v.patchFlag&16;const Y=v.props||qe,ie=E.props||qe;let le;if(b&&cr(b,!1),(le=ie.onVnodeBeforeUpdate)&&On(le,b,E,v),oe&&lr(E,v,b,"beforeUpdate"),b&&cr(b,!0),(Y.innerHTML&&ie.innerHTML==null||Y.textContent&&ie.textContent==null)&&h(H,""),j?A(v.dynamicChildren,j,H,b,x,fu(E,F),L):z||Te(v,E,H,null,b,x,fu(E,F),L,!1),G>0){if(G&16)S(H,Y,ie,b,F);else if(G&2&&Y.class!==ie.class&&s(H,"class",null,ie.class,F),G&4&&s(H,"style",Y.style,ie.style,F),G&8){const ae=E.dynamicProps;for(let ge=0;ge<ae.length;ge++){const Se=ae[ge],Ct=Y[Se],_t=ie[Se];(_t!==Ct||Se==="value")&&s(H,Se,Ct,_t,F,b)}}G&1&&v.children!==E.children&&h(H,E.children)}else!z&&j==null&&S(H,Y,ie,b,F);((le=ie.onVnodeUpdated)||oe)&&Zt(()=>{le&&On(le,b,E,v),oe&&lr(E,v,b,"updated")},x)},A=(v,E,b,x,F,L,z)=>{for(let H=0;H<E.length;H++){const G=v[H],j=E[H],oe=G.el&&(G.type===ft||!so(G,j)||G.shapeFlag&70)?f(G.el):b;k(G,j,oe,null,x,F,L,z,!0)}},S=(v,E,b,x,F)=>{if(E!==b){if(E!==qe)for(const L in E)!Eo(L)&&!(L in b)&&s(v,L,E[L],null,F,x);for(const L in b){if(Eo(L))continue;const z=b[L],H=E[L];z!==H&&L!=="value"&&s(v,L,H,z,F,x)}"value"in b&&s(v,"value",E.value,b.value,F)}},R=(v,E,b,x,F,L,z,H,G)=>{const j=E.el=v?v.el:a(""),oe=E.anchor=v?v.anchor:a("");let{patchFlag:Y,dynamicChildren:ie,slotScopeIds:le}=E;le&&(H=H?H.concat(le):le),v==null?(i(j,b,x),i(oe,b,x),y(E.children||[],b,oe,F,L,z,H,G)):Y>0&&Y&64&&ie&&v.dynamicChildren?(A(v.dynamicChildren,ie,b,F,L,z,H),(E.key!=null||F&&E===F.subTree)&&y0(v,E,!0)):Te(v,E,b,oe,F,L,z,H,G)},w=(v,E,b,x,F,L,z,H,G)=>{E.slotScopeIds=H,v==null?E.shapeFlag&512?F.ctx.activate(E,b,x,z,G):$t(E,b,x,F,L,z,G):on(v,E,G)},$t=(v,E,b,x,F,L,z)=>{const H=v.component=t1(v,x,F);if(n0(v)&&(H.ctx.renderer=ne),n1(H,!1,z),H.asyncDep){if(F&&F.registerDep(H,tt,z),!v.el){const G=H.subTree=Z(Hi);q(null,G,E,b)}}else tt(H,v,E,b,F,L,z)},on=(v,E,b)=>{const x=E.component=v.component;if(zI(v,E,b))if(x.asyncDep&&!x.asyncResolved){Ae(x,E,b);return}else x.next=E,x.update();else E.el=v.el,x.vnode=E},tt=(v,E,b,x,F,L,z)=>{const H=()=>{if(v.isMounted){let{next:Y,bu:ie,u:le,parent:ae,vnode:ge}=v;{const At=v0(v);if(At){Y&&(Y.el=ge.el,Ae(v,Y,z)),At.asyncDep.then(()=>{v.isUnmounted||H()});return}}let Se=Y,Ct;cr(v,!1),Y?(Y.el=ge.el,Ae(v,Y,z)):Y=ge,ie&&au(ie),(Ct=Y.props&&Y.props.onVnodeBeforeUpdate)&&On(Ct,ae,Y,ge),cr(v,!0);const _t=Op(v),ln=v.subTree;v.subTree=_t,k(ln,_t,f(ln.el),D(ln),v,F,L),Y.el=_t.el,Se===null&&KI(v,_t.el),le&&Zt(le,F),(Ct=Y.props&&Y.props.onVnodeUpdated)&&Zt(()=>On(Ct,ae,Y,ge),F)}else{let Y;const{el:ie,props:le}=E,{bm:ae,m:ge,parent:Se,root:Ct,type:_t}=v,ln=os(E);cr(v,!1),ae&&au(ae),!ln&&(Y=le&&le.onVnodeBeforeMount)&&On(Y,Se,E),cr(v,!0);{Ct.ce&&Ct.ce._injectChildStyle(_t);const At=v.subTree=Op(v);k(null,At,b,x,v,F,L),E.el=At.el}if(ge&&Zt(ge,F),!ln&&(Y=le&&le.onVnodeMounted)){const At=E;Zt(()=>On(Y,Se,At),F)}(E.shapeFlag&256||Se&&os(Se.vnode)&&Se.vnode.shapeFlag&256)&&v.a&&Zt(v.a,F),v.isMounted=!0,E=b=x=null}};v.scope.on();const G=v.effect=new O_(H);v.scope.off();const j=v.update=G.run.bind(G),oe=v.job=G.runIfDirty.bind(G);oe.i=v,oe.id=v.uid,G.scheduler=()=>ad(oe),cr(v,!0),j()},Ae=(v,E,b)=>{E.component=v;const x=v.vnode.props;v.vnode=E,v.next=null,NI(v,E.props,x,b),LI(v,E.children,b),Ji(),Cp(v),Zi()},Te=(v,E,b,x,F,L,z,H,G=!1)=>{const j=v&&v.children,oe=v?v.shapeFlag:0,Y=E.children,{patchFlag:ie,shapeFlag:le}=E;if(ie>0){if(ie&128){yn(j,Y,b,x,F,L,z,H,G);return}else if(ie&256){Xt(j,Y,b,x,F,L,z,H,G);return}}le&8?(oe&16&&zt(j,F,L),Y!==j&&h(b,Y)):oe&16?le&16?yn(j,Y,b,x,F,L,z,H,G):zt(j,F,L,!0):(oe&8&&h(b,""),le&16&&y(Y,b,x,F,L,z,H,G))},Xt=(v,E,b,x,F,L,z,H,G)=>{v=v||ns,E=E||ns;const j=v.length,oe=E.length,Y=Math.min(j,oe);let ie;for(ie=0;ie<Y;ie++){const le=E[ie]=G?Ri(E[ie]):xn(E[ie]);k(v[ie],le,b,null,F,L,z,H,G)}j>oe?zt(v,F,L,!0,!1,Y):y(E,b,x,F,L,z,H,G,Y)},yn=(v,E,b,x,F,L,z,H,G)=>{let j=0;const oe=E.length;let Y=v.length-1,ie=oe-1;for(;j<=Y&&j<=ie;){const le=v[j],ae=E[j]=G?Ri(E[j]):xn(E[j]);if(so(le,ae))k(le,ae,b,null,F,L,z,H,G);else break;j++}for(;j<=Y&&j<=ie;){const le=v[Y],ae=E[ie]=G?Ri(E[ie]):xn(E[ie]);if(so(le,ae))k(le,ae,b,null,F,L,z,H,G);else break;Y--,ie--}if(j>Y){if(j<=ie){const le=ie+1,ae=le<oe?E[le].el:x;for(;j<=ie;)k(null,E[j]=G?Ri(E[j]):xn(E[j]),b,ae,F,L,z,H,G),j++}}else if(j>ie)for(;j<=Y;)Qe(v[j],F,L,!0),j++;else{const le=j,ae=j,ge=new Map;for(j=ae;j<=ie;j++){const yt=E[j]=G?Ri(E[j]):xn(E[j]);yt.key!=null&&ge.set(yt.key,j)}let Se,Ct=0;const _t=ie-ae+1;let ln=!1,At=0;const Ti=new Array(_t);for(j=0;j<_t;j++)Ti[j]=0;for(j=le;j<=Y;j++){const yt=v[j];if(Ct>=_t){Qe(yt,F,L,!0);continue}let cn;if(yt.key!=null)cn=ge.get(yt.key);else for(Se=ae;Se<=ie;Se++)if(Ti[Se-ae]===0&&so(yt,E[Se])){cn=Se;break}cn===void 0?Qe(yt,F,L,!0):(Ti[cn-ae]=j+1,cn>=At?At=cn:ln=!0,k(yt,E[cn],b,null,F,L,z,H,G),Ct++)}const Hs=ln?UI(Ti):ns;for(Se=Hs.length-1,j=_t-1;j>=0;j--){const yt=ae+j,cn=E[yt],Ia=yt+1<oe?E[yt+1].el:x;Ti[j]===0?k(null,cn,b,Ia,F,L,z,H,G):ln&&(Se<0||j!==Hs[Se]?an(cn,b,Ia,2):Se--)}}},an=(v,E,b,x,F=null)=>{const{el:L,type:z,transition:H,children:G,shapeFlag:j}=v;if(j&6){an(v.component.subTree,E,b,x);return}if(j&128){v.suspense.move(E,b,x);return}if(j&64){z.move(v,E,b,ne);return}if(z===ft){i(L,E,b);for(let Y=0;Y<G.length;Y++)an(G[Y],E,b,x);i(v.anchor,E,b);return}if(z===pu){B(v,E,b);return}if(x!==2&&j&1&&H)if(x===0)H.beforeEnter(L),i(L,E,b),Zt(()=>H.enter(L),F);else{const{leave:Y,delayLeave:ie,afterLeave:le}=H,ae=()=>i(L,E,b),ge=()=>{Y(L,()=>{ae(),le&&le()})};ie?ie(L,ae,ge):ge()}else i(L,E,b)},Qe=(v,E,b,x=!1,F=!1)=>{const{type:L,props:z,ref:H,children:G,dynamicChildren:j,shapeFlag:oe,patchFlag:Y,dirs:ie,cacheIndex:le}=v;if(Y===-2&&(F=!1),H!=null&&El(H,null,b,v,!0),le!=null&&(E.renderCache[le]=void 0),oe&256){E.ctx.deactivate(v);return}const ae=oe&1&&ie,ge=!os(v);let Se;if(ge&&(Se=z&&z.onVnodeBeforeUnmount)&&On(Se,E,v),oe&6)Nn(v.component,b,x);else{if(oe&128){v.suspense.unmount(b,x);return}ae&&lr(v,null,E,"beforeUnmount"),oe&64?v.type.remove(v,E,b,ne,x):j&&!j.hasOnce&&(L!==ft||Y>0&&Y&64)?zt(j,E,b,!1,!0):(L===ft&&Y&384||!F&&oe&16)&&zt(G,E,b),x&&Ye(v)}(ge&&(Se=z&&z.onVnodeUnmounted)||ae)&&Zt(()=>{Se&&On(Se,E,v),ae&&lr(v,null,E,"unmounted")},b)},Ye=v=>{const{type:E,el:b,anchor:x,transition:F}=v;if(E===ft){Ei(b,x);return}if(E===pu){$(v);return}const L=()=>{r(b),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(v.shapeFlag&1&&F&&!F.persisted){const{leave:z,delayLeave:H}=F,G=()=>z(b,L);H?H(v.el,L,G):G()}else L()},Ei=(v,E)=>{let b;for(;v!==E;)b=g(v),r(v),v=b;r(E)},Nn=(v,E,b)=>{const{bum:x,scope:F,job:L,subTree:z,um:H,m:G,a:j}=v;Np(G),Np(j),x&&au(x),F.stop(),L&&(L.flags|=8,Qe(z,v,E,b)),H&&Zt(H,E),Zt(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},zt=(v,E,b,x=!1,F=!1,L=0)=>{for(let z=L;z<v.length;z++)Qe(v[z],E,b,x,F)},D=v=>{if(v.shapeFlag&6)return D(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const E=g(v.anchor||v.el),b=E&&E[aI];return b?g(b):E};let X=!1;const Q=(v,E,b)=>{v==null?E._vnode&&Qe(E._vnode,null,null,!0):k(E._vnode||null,v,E,null,null,null,b),E._vnode=v,X||(X=!0,Cp(),J_(),X=!1)},ne={p:k,um:Qe,m:an,r:Ye,mt:$t,mc:y,pc:Te,pbc:A,n:D,o:t};return{render:Q,hydrate:void 0,createApp:PI(Q)}}function fu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function FI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function y0(t,e,n=!1){const i=t.children,r=e.children;if(fe(i)&&fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ri(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&y0(o,a)),a.type===pc&&(a.el=o.el)}}function UI(t){const e=t.slice(),n=[0];let i,r,s,o,a;const c=t.length;for(i=0;i<c;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function v0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:v0(e)}function Np(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const BI=Symbol.for("v-scx"),$I=()=>li(BI);function el(t,e){return dd(t,null,e)}function ls(t,e,n){return dd(t,e,n)}function dd(t,e,n=qe){const{immediate:i,deep:r,flush:s,once:o}=n,a=Ft({},n),c=e&&i||!e&&s!=="post";let u;if(qo){if(s==="sync"){const _=$I();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Fn,_.resume=Fn,_.pause=Fn,_}}const h=Lt;a.call=(_,C,k)=>jn(_,h,C,k);let f=!1;s==="post"?a.scheduler=_=>{Zt(_,h&&h.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(_,C)=>{C?_():ad(_)}),a.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const g=iI(t,e,a);return qo&&(u?u.push(g):c&&g()),g}function qI(t,e,n){const i=this.proxy,r=rt(t)?t.includes(".")?E0(i,t):()=>i[t]:t.bind(i,i);let s;_e(e)?s=e:(s=e.handler,n=e);const o=oa(this),a=dd(r,s.bind(i),n);return o(),a}function E0(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const jI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${pn(e)}Modifiers`]||t[`${Pr(e)}Modifiers`];function GI(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||qe;let r=n;const s=e.startsWith("update:"),o=s&&jI(i,e.slice(7));o&&(o.trim&&(r=n.map(h=>rt(h)?h.trim():h)),o.number&&(r=n.map(Iw)));let a,c=i[a=ou(e)]||i[a=ou(pn(e))];!c&&s&&(c=i[a=ou(Pr(e))]),c&&jn(c,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,jn(u,t,6,r)}}function T0(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!_e(t)){const c=u=>{const h=T0(u,e,!0);h&&(a=!0,Ft(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Ke(t)&&i.set(t,null),null):(fe(s)?s.forEach(c=>o[c]=null):Ft(o,s),Ke(t)&&i.set(t,o),o)}function fc(t,e){return!t||!ic(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,Pr(e))||xe(t,e))}function Op(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:g,setupState:_,ctx:C,inheritAttrs:k}=t,N=vl(t);let q,V;try{if(n.shapeFlag&4){const $=r||i,ee=$;q=xn(u.call(ee,$,h,f,_,g,C)),V=a}else{const $=e;q=xn($.length>1?$(f,{attrs:a,slots:o,emit:c}):$(f,null)),V=e.props?a:HI(a)}}catch($){Co.length=0,uc($,t,1),q=Z(Hi)}let B=q;if(V&&k!==!1){const $=Object.keys(V),{shapeFlag:ee}=B;$.length&&ee&7&&(s&&$.some(Xh)&&(V=WI(V,s)),B=Er(B,V,!1,!0))}return n.dirs&&(B=Er(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&ld(B,n.transition),q=B,vl(N),q}const HI=t=>{let e;for(const n in t)(n==="class"||n==="style"||ic(n))&&((e||(e={}))[n]=t[n]);return e},WI=(t,e)=>{const n={};for(const i in t)(!Xh(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function zI(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Dp(i,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const g=h[f];if(o[g]!==i[g]&&!fc(u,g))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Dp(i,o,u):!0:!!o;return!1}function Dp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!fc(n,s))return!0}return!1}function KI({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const w0=t=>t.__isSuspense;function QI(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):oI(t)}const ft=Symbol.for("v-fgt"),pc=Symbol.for("v-txt"),Hi=Symbol.for("v-cmt"),pu=Symbol.for("v-stc"),Co=[];let nn=null;function Xe(t=!1){Co.push(nn=t?null:[])}function YI(){Co.pop(),nn=Co[Co.length-1]||null}let Bo=1;function xp(t,e=!1){Bo+=t,t<0&&nn&&e&&(nn.hasOnce=!0)}function I0(t){return t.dynamicChildren=Bo>0?nn||ns:null,YI(),Bo>0&&nn&&nn.push(t),t}function pt(t,e,n,i,r,s){return I0(he(t,e,n,i,r,s,!0))}function $o(t,e,n,i,r){return I0(Z(t,e,n,i,r,!0))}function vr(t){return t?t.__v_isVNode===!0:!1}function so(t,e){return t.type===e.type&&t.key===e.key}const C0=({key:t})=>t??null,tl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?rt(t)||Vt(t)||_e(t)?{i:Ht,r:t,k:e,f:!!n}:t:null);function he(t,e=null,n=null,i=0,r=null,s=t===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&C0(e),ref:e&&tl(e),scopeId:e0,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ht};return a?(fd(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=rt(n)?8:16),Bo>0&&!o&&nn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&nn.push(c),c}const Z=XI;function XI(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===EI)&&(t=Hi),vr(t)){const a=Er(t,e,!0);return n&&fd(a,n),Bo>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(t)]=a:nn.push(a)),a.patchFlag=-2,a}if(a1(t)&&(t=t.__vccOpts),e){e=JI(e);let{class:a,style:c}=e;a&&!rt(a)&&(e.class=lc(a)),Ke(c)&&(od(c)&&!fe(c)&&(c=Ft({},c)),e.style=ms(c))}const o=rt(t)?1:w0(t)?128:lI(t)?64:Ke(t)?4:_e(t)?2:0;return he(t,e,n,i,r,o,s,!0)}function JI(t){return t?od(t)||h0(t)?Ft({},t):t:null}function Er(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:c}=t,u=e?yi(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&C0(u),ref:e&&e.ref?n&&s?fe(s)?s.concat(tl(e)):[s,tl(e)]:tl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Er(t.ssContent),ssFallback:t.ssFallback&&Er(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&ld(h,c.clone(h)),h}function Tr(t=" ",e=0){return Z(pc,null,t,e)}function gc(t="",e=!1){return e?(Xe(),$o(Hi,null,t)):Z(Hi,null,t)}function xn(t){return t==null||typeof t=="boolean"?Z(Hi):fe(t)?Z(ft,null,t.slice()):vr(t)?Ri(t):Z(pc,null,String(t))}function Ri(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Er(t)}function fd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),fd(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!h0(e)?e._ctx=Ht:r===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:Ht},n=32):(e=String(e),i&64?(n=16,e=[Tr(e)]):n=8);t.children=e,t.shapeFlag|=n}function yi(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=lc([e.class,i.class]));else if(r==="style")e.style=ms([e.style,i.style]);else if(ic(r)){const s=e[r],o=i[r];o&&s!==o&&!(fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function On(t,e,n,i=null){jn(t,e,7,[n,i])}const ZI=l0();let e1=0;function t1(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||ZI,s={uid:e1++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:f0(i,r),emitsOptions:T0(i,r),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:i.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=GI.bind(null,s),t.ce&&t.ce(s),s}let Lt=null,wl,Xu;{const t=ac(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};wl=e("__VUE_INSTANCE_SETTERS__",n=>Lt=n),Xu=e("__VUE_SSR_SETTERS__",n=>qo=n)}const oa=t=>{const e=Lt;return wl(t),t.scope.on(),()=>{t.scope.off(),wl(e)}},Lp=()=>{Lt&&Lt.scope.off(),wl(null)};function A0(t){return t.vnode.shapeFlag&4}let qo=!1;function n1(t,e=!1,n=!1){e&&Xu(e);const{props:i,children:r}=t.vnode,s=A0(t);kI(t,i,s,e),xI(t,r,n);const o=s?i1(t,e):void 0;return e&&Xu(!1),o}function i1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,wI);const{setup:i}=n;if(i){Ji();const r=t.setupContext=i.length>1?s1(t):null,s=oa(t),o=sa(i,t,0,[t.props,r]),a=A_(o);if(Zi(),s(),(a||t.sp)&&!os(t)&&t0(t),a){if(o.then(Lp,Lp),e)return o.then(c=>{Mp(t,c)}).catch(c=>{uc(c,t,0)});t.asyncDep=o}else Mp(t,o)}else S0(t)}function Mp(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ke(e)&&(t.setupState=Q_(e)),S0(t)}function S0(t,e,n){const i=t.type;t.render||(t.render=i.render||Fn);{const r=oa(t);Ji();try{II(t)}finally{Zi(),r()}}}const r1={get(t,e){return kt(t,"get",""),t[e]}};function s1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,r1),slots:t.slots,emit:t.emit,expose:e}}function pd(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Q_(Yw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Io)return Io[n](t)},has(e,n){return n in e||n in Io}})):t.proxy}function o1(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function a1(t){return _e(t)&&"__vccOpts"in t}const Fe=(t,e)=>tI(t,e,qo);function Jr(t,e,n){const i=arguments.length;return i===2?Ke(e)&&!fe(e)?vr(e)?Z(t,null,[e]):Z(t,e):Z(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&vr(n)&&(n=[n]),Z(t,e,n))}const l1="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ju;const Vp=typeof window<"u"&&window.trustedTypes;if(Vp)try{Ju=Vp.createPolicy("vue",{createHTML:t=>t})}catch{}const b0=Ju?t=>Ju.createHTML(t):t=>t,c1="http://www.w3.org/2000/svg",u1="http://www.w3.org/1998/Math/MathML",ni=typeof document<"u"?document:null,Fp=ni&&ni.createElement("template"),h1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ni.createElementNS(c1,t):e==="mathml"?ni.createElementNS(u1,t):n?ni.createElement(t,{is:n}):ni.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ni.createTextNode(t),createComment:t=>ni.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ni.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Fp.innerHTML=b0(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Fp.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},d1=Symbol("_vtc");function f1(t,e,n){const i=t[d1];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Up=Symbol("_vod"),p1=Symbol("_vsh"),g1=Symbol(""),m1=/(^|;)\s*display\s*:/;function _1(t,e,n){const i=t.style,r=rt(n);let s=!1;if(n&&!r){if(e)if(rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&nl(i,a,"")}else for(const o in e)n[o]==null&&nl(i,o,"");for(const o in n)o==="display"&&(s=!0),nl(i,o,n[o])}else if(r){if(e!==n){const o=i[g1];o&&(n+=";"+o),i.cssText=n,s=m1.test(n)}}else e&&t.removeAttribute("style");Up in t&&(t[Up]=s?i.display:"",t[p1]&&(i.display="none"))}const Bp=/\s*!important$/;function nl(t,e,n){if(fe(n))n.forEach(i=>nl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=y1(t,e);Bp.test(n)?t.setProperty(Pr(i),n.replace(Bp,""),"important"):t[i]=n}}const $p=["Webkit","Moz","ms"],gu={};function y1(t,e){const n=gu[e];if(n)return n;let i=pn(e);if(i!=="filter"&&i in t)return gu[e]=i;i=oc(i);for(let r=0;r<$p.length;r++){const s=$p[r]+i;if(s in t)return gu[e]=s}return e}const qp="http://www.w3.org/1999/xlink";function jp(t,e,n,i,r,s=Pw(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qp,e.slice(6,e.length)):t.setAttributeNS(qp,e,n):n==null||s&&!P_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":mi(n)?String(n):n)}function Gp(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?b0(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=P_(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function v1(t,e,n,i){t.addEventListener(e,n,i)}function E1(t,e,n,i){t.removeEventListener(e,n,i)}const Hp=Symbol("_vei");function T1(t,e,n,i,r=null){const s=t[Hp]||(t[Hp]={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=w1(e);if(i){const u=s[e]=A1(i,r);v1(t,a,u,c)}else o&&(E1(t,a,o,c),s[e]=void 0)}}const Wp=/(?:Once|Passive|Capture)$/;function w1(t){let e;if(Wp.test(t)){e={};let i;for(;i=t.match(Wp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pr(t.slice(2)),e]}let mu=0;const I1=Promise.resolve(),C1=()=>mu||(I1.then(()=>mu=0),mu=Date.now());function A1(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;jn(S1(i,n.value),e,5,[i])};return n.value=t,n.attached=C1(),n}function S1(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const zp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,b1=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?f1(t,i,o):e==="style"?_1(t,n,i):ic(e)?Xh(e)||T1(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):R1(t,e,i,o))?(Gp(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jp(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!rt(i))?Gp(t,pn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),jp(t,e,i,o))};function R1(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&zp(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return zp(e)&&rt(n)?!1:e in t}const P1=["ctrl","shift","alt","meta"],k1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>P1.some(n=>t[`${n}Key`]&&!e.includes(n))},N1=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=k1[e[o]];if(a&&a(r,e))return}return t(r,...s)})},O1=Ft({patchProp:b1},h1);let Kp;function D1(){return Kp||(Kp=MI(O1))}const R0=(...t)=>{const e=D1().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=L1(i);if(!r)return;const s=e._component;!_e(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,x1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function x1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function L1(t){return rt(t)?document.querySelector(t):t}const M1=["disabled"],V1=mt({__name:"BaseButton",props:{buttonText:{},variant:{},outlined:{type:Boolean},disabled:{type:Boolean}},setup(t){const e=t,n=Fe(()=>["base-button",e.variant,{[`outlined-${e.variant}`]:e.outlined,disabled:e.disabled}]);return(i,r)=>(Xe(),pt("button",{type:"submit",class:lc(n.value),disabled:i.disabled},[Tr(Gi(i.buttonText)+" ",1),Wu(i.$slots,"default",{},void 0)],10,M1))}}),_n=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},ot=_n(V1,[["__scopeId","data-v-5716da65"]]),F1={class:"display"},U1=mt({__name:"App",setup(t){const e=()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?localStorage.setItem("darkTheme","1"):localStorage.removeItem("darkTheme")};return Kn(()=>{localStorage.getItem("darkTheme")&&document.body.classList.toggle("dark-theme")}),(n,i)=>{const r=ud("router-view");return Xe(),pt(ft,null,[Z(ot,{"button-text":"Change the theme",variant:"primary",onClick:e,class:"change-theme-button"}),he("div",F1,[Z(r)])],64)}}}),B1=_n(U1,[["__scopeId","data-v-a4133dab"]]);var Qp={};/**
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
 */const P0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const K=function(t,e){if(!t)throw Ns(e)},Ns=function(t){return new Error("Firebase Database ("+P0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const k0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},$1=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(g=64)),i.push(n[h],n[f],n[g],n[_])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(k0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||u==null||f==null)throw new q1;const g=s<<2|a>>4;if(i.push(g),u!==64){const _=a<<4&240|u>>2;if(i.push(_),f!==64){const C=u<<6&192|f;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class q1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N0=function(t){const e=k0(t);return mc.encodeByteArray(e,!0)},Il=function(t){return N0(t).replace(/\./g,"")},Cl=function(t){try{return mc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function j1(t){return O0(void 0,t)}function O0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!G1(n)||(t[n]=O0(t[n],e[n]));return t}function G1(t){return t!=="__proto__"}/**
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
 */function H1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const W1=()=>H1().__FIREBASE_DEFAULTS__,z1=()=>{if(typeof process>"u"||typeof Qp>"u")return;const t=Qp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},K1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cl(t[1]);return e&&JSON.parse(e)},_c=()=>{try{return W1()||z1()||K1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},D0=t=>{var e,n;return(n=(e=_c())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Q1=t=>{const e=D0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},x0=()=>{var t;return(t=_c())===null||t===void 0?void 0:t.config},L0=t=>{var e;return(e=_c())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Y1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Il(JSON.stringify(n)),Il(JSON.stringify(o)),""].join(".")}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function X1(){var t;const e=(t=_c())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function J1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Z1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function M0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e2(){const t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function V0(){return P0.NODE_ADMIN===!0}function t2(){return!X1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function F0(){try{return typeof indexedDB=="object"}catch{return!1}}function n2(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const i2="FirebaseError";class Qn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=i2,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?r2(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Qn(r,a,i)}}function r2(t,e){return t.replace(s2,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const s2=/\{\$([^}]+)}/g;/**
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
 */function Go(t){return JSON.parse(t)}function Tt(t){return JSON.stringify(t)}/**
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
 */const U0=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Go(Cl(s[0])||""),n=Go(Cl(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},o2=function(t){const e=U0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},a2=function(t){const e=U0(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function vi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _s(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Zu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Al(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Sl(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Yp(s)&&Yp(o)){if(!Sl(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Yp(t){return t!==null&&typeof t=="object"}/**
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
 */function Ds(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function po(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function go(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class l2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const g=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(g<<1|g>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^s&(o^a),h=1518500249):(u=s^o^a,h=1859775393):f<60?(u=s&o|a&(s|o),h=2400959708):(u=s^o^a,h=3395469782);const g=(r<<5|r>>>27)+u+c+h+i[f]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=g}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function c2(t,e){const n=new u2(t,e);return n.subscribe.bind(n)}class u2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");h2(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=_u),r.error===void 0&&(r.error=_u),r.complete===void 0&&(r.complete=_u);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function h2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _u(){}function d2(t,e){return`${t} failed: ${e} argument `}/**
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
 */const f2=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,K(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},yc=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Bt(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hr="[DEFAULT]";/**
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
 */class p2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new jo;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(m2(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:g2(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function g2(t){return t===hr?void 0:t}function m2(t){return t.instantiationMode==="EAGER"}/**
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
 */class _2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new p2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const y2={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},v2=Ee.INFO,E2={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},T2=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=E2[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class aa{constructor(e){this.name=e,this._logLevel=v2,this._logHandler=T2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const w2=(t,e)=>e.some(n=>t instanceof n);let Xp,Jp;function I2(){return Xp||(Xp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C2(){return Jp||(Jp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B0=new WeakMap,eh=new WeakMap,$0=new WeakMap,yu=new WeakMap,md=new WeakMap;function A2(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vi(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&B0.set(n,t)}).catch(()=>{}),md.set(e,t),e}function S2(t){if(eh.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});eh.set(t,e)}let th={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return eh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function b2(t){th=t(th)}function R2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(vu(this),e,...n);return $0.set(i,e.sort?e.sort():[e]),Vi(i)}:C2().includes(t)?function(...e){return t.apply(vu(this),e),Vi(B0.get(this))}:function(...e){return Vi(t.apply(vu(this),e))}}function P2(t){return typeof t=="function"?R2(t):(t instanceof IDBTransaction&&S2(t),w2(t,I2())?new Proxy(t,th):t)}function Vi(t){if(t instanceof IDBRequest)return A2(t);if(yu.has(t))return yu.get(t);const e=P2(t);return e!==t&&(yu.set(t,e),md.set(e,t)),e}const vu=t=>md.get(t);function k2(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Vi(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Vi(o.result),c.oldVersion,c.newVersion,Vi(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const N2=["get","getKey","getAll","getAllKeys","count"],O2=["put","add","delete","clear"],Eu=new Map;function Zp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Eu.get(e))return Eu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=O2.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||N2.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Eu.set(e,s),s}b2(t=>({...t,get:(e,n,i)=>Zp(e,n)||t.get(e,n,i),has:(e,n)=>!!Zp(e,n)||t.has(e,n)}));/**
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
 */class D2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(x2(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function x2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nh="@firebase/app",eg="0.10.17";/**
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
 */const di=new aa("@firebase/app"),L2="@firebase/app-compat",M2="@firebase/analytics-compat",V2="@firebase/analytics",F2="@firebase/app-check-compat",U2="@firebase/app-check",B2="@firebase/auth",$2="@firebase/auth-compat",q2="@firebase/database",j2="@firebase/data-connect",G2="@firebase/database-compat",H2="@firebase/functions",W2="@firebase/functions-compat",z2="@firebase/installations",K2="@firebase/installations-compat",Q2="@firebase/messaging",Y2="@firebase/messaging-compat",X2="@firebase/performance",J2="@firebase/performance-compat",Z2="@firebase/remote-config",eC="@firebase/remote-config-compat",tC="@firebase/storage",nC="@firebase/storage-compat",iC="@firebase/firestore",rC="@firebase/vertexai",sC="@firebase/firestore-compat",oC="firebase",aC="11.1.0";/**
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
 */const ih="[DEFAULT]",lC={[nh]:"fire-core",[L2]:"fire-core-compat",[V2]:"fire-analytics",[M2]:"fire-analytics-compat",[U2]:"fire-app-check",[F2]:"fire-app-check-compat",[B2]:"fire-auth",[$2]:"fire-auth-compat",[q2]:"fire-rtdb",[j2]:"fire-data-connect",[G2]:"fire-rtdb-compat",[H2]:"fire-fn",[W2]:"fire-fn-compat",[z2]:"fire-iid",[K2]:"fire-iid-compat",[Q2]:"fire-fcm",[Y2]:"fire-fcm-compat",[X2]:"fire-perf",[J2]:"fire-perf-compat",[Z2]:"fire-rc",[eC]:"fire-rc-compat",[tC]:"fire-gcs",[nC]:"fire-gcs-compat",[iC]:"fire-fst",[sC]:"fire-fst-compat",[rC]:"fire-vertex","fire-js":"fire-js",[oC]:"fire-js-all"};/**
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
 */const bl=new Map,cC=new Map,rh=new Map;function tg(t,e){try{t.container.addComponent(e)}catch(n){di.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gn(t){const e=t.name;if(rh.has(e))return di.debug(`There were multiple attempts to register component ${e}.`),!1;rh.set(e,t);for(const n of bl.values())tg(n,t);for(const n of cC.values())tg(n,t);return!0}function _d(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ln(t){return t.settings!==void 0}/**
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
 */const uC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fi=new Os("app","Firebase",uC);/**
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
 */class hC{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fi.create("app-deleted",{appName:this._name})}}/**
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
 */const er=aC;function q0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ih,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Fi.create("bad-app-name",{appName:String(r)});if(n||(n=x0()),!n)throw Fi.create("no-options");const s=bl.get(r);if(s){if(Sl(n,s.options)&&Sl(i,s.config))return s;throw Fi.create("duplicate-app",{appName:r})}const o=new _2(r);for(const c of rh.values())o.addComponent(c);const a=new hC(n,i,o);return bl.set(r,a),a}function j0(t=ih){const e=bl.get(t);if(!e&&t===ih&&x0())return q0();if(!e)throw Fi.create("no-app",{appName:t});return e}function rn(t,e,n){var i;let r=(i=lC[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),di.warn(a.join(" "));return}Gn(new An(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const dC="firebase-heartbeat-database",fC=1,Ho="firebase-heartbeat-store";let Tu=null;function G0(){return Tu||(Tu=k2(dC,fC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fi.create("idb-open",{originalErrorMessage:t.message})})),Tu}async function pC(t){try{const n=(await G0()).transaction(Ho),i=await n.objectStore(Ho).get(H0(t));return await n.done,i}catch(e){if(e instanceof Qn)di.warn(e.message);else{const n=Fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});di.warn(n.message)}}}async function ng(t,e){try{const i=(await G0()).transaction(Ho,"readwrite");await i.objectStore(Ho).put(e,H0(t)),await i.done}catch(n){if(n instanceof Qn)di.warn(n.message);else{const i=Fi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});di.warn(i.message)}}}function H0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gC=1024,mC=30*24*60*60*1e3;class _C{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ig();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=mC}),this._storage.overwrite(this._heartbeatsCache))}catch(i){di.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ig(),{heartbeatsToSend:i,unsentEntries:r}=yC(this._heartbeatsCache.heartbeats),s=Il(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return di.warn(n),""}}}function ig(){return new Date().toISOString().substring(0,10)}function yC(t,e=gC){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),rg(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),rg(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class vC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return F0()?n2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rg(t){return Il(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function EC(t){Gn(new An("platform-logger",e=>new D2(e),"PRIVATE")),Gn(new An("heartbeat",e=>new _C(e),"PRIVATE")),rn(nh,eg,t),rn(nh,eg,"esm2017"),rn("fire-js","")}EC("");var TC="firebase",wC="11.1.0";/**
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
 */rn(TC,wC,"app");var sg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,W0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,S,R){for(var w=Array(arguments.length-2),$t=2;$t<arguments.length;$t++)w[$t-2]=arguments[$t];return y.prototype[S].apply(A,w)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)A[S]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(S=0;16>S;++S)A[S]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],S=I.g[2];var R=I.g[3],w=y+(R^T&(S^R))+A[0]+3614090360&4294967295;y=T+(w<<7&4294967295|w>>>25),w=R+(S^y&(T^S))+A[1]+3905402710&4294967295,R=y+(w<<12&4294967295|w>>>20),w=S+(T^R&(y^T))+A[2]+606105819&4294967295,S=R+(w<<17&4294967295|w>>>15),w=T+(y^S&(R^y))+A[3]+3250441966&4294967295,T=S+(w<<22&4294967295|w>>>10),w=y+(R^T&(S^R))+A[4]+4118548399&4294967295,y=T+(w<<7&4294967295|w>>>25),w=R+(S^y&(T^S))+A[5]+1200080426&4294967295,R=y+(w<<12&4294967295|w>>>20),w=S+(T^R&(y^T))+A[6]+2821735955&4294967295,S=R+(w<<17&4294967295|w>>>15),w=T+(y^S&(R^y))+A[7]+4249261313&4294967295,T=S+(w<<22&4294967295|w>>>10),w=y+(R^T&(S^R))+A[8]+1770035416&4294967295,y=T+(w<<7&4294967295|w>>>25),w=R+(S^y&(T^S))+A[9]+2336552879&4294967295,R=y+(w<<12&4294967295|w>>>20),w=S+(T^R&(y^T))+A[10]+4294925233&4294967295,S=R+(w<<17&4294967295|w>>>15),w=T+(y^S&(R^y))+A[11]+2304563134&4294967295,T=S+(w<<22&4294967295|w>>>10),w=y+(R^T&(S^R))+A[12]+1804603682&4294967295,y=T+(w<<7&4294967295|w>>>25),w=R+(S^y&(T^S))+A[13]+4254626195&4294967295,R=y+(w<<12&4294967295|w>>>20),w=S+(T^R&(y^T))+A[14]+2792965006&4294967295,S=R+(w<<17&4294967295|w>>>15),w=T+(y^S&(R^y))+A[15]+1236535329&4294967295,T=S+(w<<22&4294967295|w>>>10),w=y+(S^R&(T^S))+A[1]+4129170786&4294967295,y=T+(w<<5&4294967295|w>>>27),w=R+(T^S&(y^T))+A[6]+3225465664&4294967295,R=y+(w<<9&4294967295|w>>>23),w=S+(y^T&(R^y))+A[11]+643717713&4294967295,S=R+(w<<14&4294967295|w>>>18),w=T+(R^y&(S^R))+A[0]+3921069994&4294967295,T=S+(w<<20&4294967295|w>>>12),w=y+(S^R&(T^S))+A[5]+3593408605&4294967295,y=T+(w<<5&4294967295|w>>>27),w=R+(T^S&(y^T))+A[10]+38016083&4294967295,R=y+(w<<9&4294967295|w>>>23),w=S+(y^T&(R^y))+A[15]+3634488961&4294967295,S=R+(w<<14&4294967295|w>>>18),w=T+(R^y&(S^R))+A[4]+3889429448&4294967295,T=S+(w<<20&4294967295|w>>>12),w=y+(S^R&(T^S))+A[9]+568446438&4294967295,y=T+(w<<5&4294967295|w>>>27),w=R+(T^S&(y^T))+A[14]+3275163606&4294967295,R=y+(w<<9&4294967295|w>>>23),w=S+(y^T&(R^y))+A[3]+4107603335&4294967295,S=R+(w<<14&4294967295|w>>>18),w=T+(R^y&(S^R))+A[8]+1163531501&4294967295,T=S+(w<<20&4294967295|w>>>12),w=y+(S^R&(T^S))+A[13]+2850285829&4294967295,y=T+(w<<5&4294967295|w>>>27),w=R+(T^S&(y^T))+A[2]+4243563512&4294967295,R=y+(w<<9&4294967295|w>>>23),w=S+(y^T&(R^y))+A[7]+1735328473&4294967295,S=R+(w<<14&4294967295|w>>>18),w=T+(R^y&(S^R))+A[12]+2368359562&4294967295,T=S+(w<<20&4294967295|w>>>12),w=y+(T^S^R)+A[5]+4294588738&4294967295,y=T+(w<<4&4294967295|w>>>28),w=R+(y^T^S)+A[8]+2272392833&4294967295,R=y+(w<<11&4294967295|w>>>21),w=S+(R^y^T)+A[11]+1839030562&4294967295,S=R+(w<<16&4294967295|w>>>16),w=T+(S^R^y)+A[14]+4259657740&4294967295,T=S+(w<<23&4294967295|w>>>9),w=y+(T^S^R)+A[1]+2763975236&4294967295,y=T+(w<<4&4294967295|w>>>28),w=R+(y^T^S)+A[4]+1272893353&4294967295,R=y+(w<<11&4294967295|w>>>21),w=S+(R^y^T)+A[7]+4139469664&4294967295,S=R+(w<<16&4294967295|w>>>16),w=T+(S^R^y)+A[10]+3200236656&4294967295,T=S+(w<<23&4294967295|w>>>9),w=y+(T^S^R)+A[13]+681279174&4294967295,y=T+(w<<4&4294967295|w>>>28),w=R+(y^T^S)+A[0]+3936430074&4294967295,R=y+(w<<11&4294967295|w>>>21),w=S+(R^y^T)+A[3]+3572445317&4294967295,S=R+(w<<16&4294967295|w>>>16),w=T+(S^R^y)+A[6]+76029189&4294967295,T=S+(w<<23&4294967295|w>>>9),w=y+(T^S^R)+A[9]+3654602809&4294967295,y=T+(w<<4&4294967295|w>>>28),w=R+(y^T^S)+A[12]+3873151461&4294967295,R=y+(w<<11&4294967295|w>>>21),w=S+(R^y^T)+A[15]+530742520&4294967295,S=R+(w<<16&4294967295|w>>>16),w=T+(S^R^y)+A[2]+3299628645&4294967295,T=S+(w<<23&4294967295|w>>>9),w=y+(S^(T|~R))+A[0]+4096336452&4294967295,y=T+(w<<6&4294967295|w>>>26),w=R+(T^(y|~S))+A[7]+1126891415&4294967295,R=y+(w<<10&4294967295|w>>>22),w=S+(y^(R|~T))+A[14]+2878612391&4294967295,S=R+(w<<15&4294967295|w>>>17),w=T+(R^(S|~y))+A[5]+4237533241&4294967295,T=S+(w<<21&4294967295|w>>>11),w=y+(S^(T|~R))+A[12]+1700485571&4294967295,y=T+(w<<6&4294967295|w>>>26),w=R+(T^(y|~S))+A[3]+2399980690&4294967295,R=y+(w<<10&4294967295|w>>>22),w=S+(y^(R|~T))+A[10]+4293915773&4294967295,S=R+(w<<15&4294967295|w>>>17),w=T+(R^(S|~y))+A[1]+2240044497&4294967295,T=S+(w<<21&4294967295|w>>>11),w=y+(S^(T|~R))+A[8]+1873313359&4294967295,y=T+(w<<6&4294967295|w>>>26),w=R+(T^(y|~S))+A[15]+4264355552&4294967295,R=y+(w<<10&4294967295|w>>>22),w=S+(y^(R|~T))+A[6]+2734768916&4294967295,S=R+(w<<15&4294967295|w>>>17),w=T+(R^(S|~y))+A[13]+1309151649&4294967295,T=S+(w<<21&4294967295|w>>>11),w=y+(S^(T|~R))+A[4]+4149444226&4294967295,y=T+(w<<6&4294967295|w>>>26),w=R+(T^(y|~S))+A[11]+3174756917&4294967295,R=y+(w<<10&4294967295|w>>>22),w=S+(y^(R|~T))+A[2]+718787259&4294967295,S=R+(w<<15&4294967295|w>>>17),w=T+(R^(S|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+S&4294967295,I.g[3]=I.g[3]+R&4294967295}i.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,A=this.B,S=this.h,R=0;R<y;){if(S==0)for(;R<=T;)r(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<y;)if(A[S++]=I.charCodeAt(R++),S==this.blockSize){r(this,A),S=0;break}}else for(;R<y;)if(A[S++]=I[R++],S==this.blockSize){r(this,A),S=0;break}}this.h=S,this.o+=y},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)I[T++]=this.g[y]>>>A&255;return I};function s(I,y){var T=a;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function o(I,y){this.h=y;for(var T=[],A=!0,S=I.length-1;0<=S;S--){var R=I[S]|0;A&&R==y||(T[S]=R,A=!1)}this.g=T}var a={};function c(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return N(u(-I));for(var y=[],T=1,A=0;I>=T;A++)y[A]=I/T|0,T*=4294967296;return new o(y,0)}function h(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return N(h(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(y,8)),A=f,S=0;S<I.length;S+=8){var R=Math.min(8,I.length-S),w=parseInt(I.substring(S,S+R),y);8>R?(R=u(Math.pow(y,R)),A=A.j(R).add(u(w))):(A=A.j(T),A=A.add(u(w)))}return A}var f=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(k(this))return"-"+N(this).toString(I);for(var y=u(Math.pow(I,6)),T=this,A="";;){var S=$(T,y).g;T=q(T,S.j(y));var R=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=S,C(T))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=q(this,I),k(I)?-1:C(I)?0:1};function N(I){for(var y=I.g.length,T=[],A=0;A<y;A++)T[A]=~I.g[A];return new o(T,~I.h).add(g)}t.abs=function(){return k(this)?N(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0,S=0;S<=y;S++){var R=A+(this.i(S)&65535)+(I.i(S)&65535),w=(R>>>16)+(this.i(S)>>>16)+(I.i(S)>>>16);A=w>>>16,R&=65535,w&=65535,T[S]=w<<16|R}return new o(T,T[T.length-1]&-2147483648?-1:0)};function q(I,y){return I.add(N(y))}t.j=function(I){if(C(this)||C(I))return f;if(k(this))return k(I)?N(this).j(N(I)):N(N(this).j(I));if(k(I))return N(this.j(N(I)));if(0>this.l(_)&&0>I.l(_))return u(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<I.g.length;S++){var R=this.i(A)>>>16,w=this.i(A)&65535,$t=I.i(S)>>>16,on=I.i(S)&65535;T[2*A+2*S]+=w*on,V(T,2*A+2*S),T[2*A+2*S+1]+=R*on,V(T,2*A+2*S+1),T[2*A+2*S+1]+=w*$t,V(T,2*A+2*S+1),T[2*A+2*S+2]+=R*$t,V(T,2*A+2*S+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function V(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function B(I,y){this.g=I,this.h=y}function $(I,y){if(C(y))throw Error("division by zero");if(C(I))return new B(f,f);if(k(I))return y=$(N(I),y),new B(N(y.g),N(y.h));if(k(y))return y=$(I,N(y)),new B(N(y.g),y.h);if(30<I.g.length){if(k(I)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=y;0>=A.l(I);)T=ee(T),A=ee(A);var S=re(T,1),R=re(A,1);for(A=re(A,2),T=re(T,2);!C(A);){var w=R.add(A);0>=w.l(I)&&(S=S.add(T),R=w),A=re(A,1),T=re(T,1)}return y=q(I,S.j(y)),new B(S,y)}for(S=f;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=u(T),w=R.j(y);k(w)||0<w.l(I);)T-=A,R=u(T),w=R.j(y);C(R)&&(R=g),S=S.add(R),I=q(I,w)}return new B(S,I)}t.A=function(I){return $(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&I.i(A);return new o(T,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|I.i(A);return new o(T,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^I.i(A);return new o(T,this.h^I.h)};function ee(I){for(var y=I.g.length+1,T=[],A=0;A<y;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(T,I.h)}function re(I,y){var T=y>>5;y%=32;for(var A=I.g.length-T,S=[],R=0;R<A;R++)S[R]=0<y?I.i(R+T)>>>y|I.i(R+T+1)<<32-y:I.i(R+T);return new o(S,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,W0=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,mr=o}).apply(typeof sg<"u"?sg:typeof self<"u"?self:typeof window<"u"?window:{});var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var z0,mo,K0,il,sh,Q0,Y0,X0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof qa=="object"&&qa];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var i=n(this);function r(l,d){if(d)e:{var p=i;l=l.split(".");for(var m=0;m<l.length-1;m++){var P=l[m];if(!(P in p))break e;p=p[P]}l=l[l.length-1],m=p[l],d=d(m),d!=m&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,m=!1,P={next:function(){if(!m&&p<l.length){var O=p++;return{value:d(O,l[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}r("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),l.apply(d,P)}}return function(){return l.apply(d,arguments)}}function g(l,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,g.apply(null,arguments)}function _(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),l.apply(this,m)}}function C(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(m,P,O){for(var W=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)W[Be-2]=arguments[Be];return d.prototype[P].apply(m,W)}}function k(l){const d=l.length;if(0<d){const p=Array(d);for(let m=0;m<d;m++)p[m]=l[m];return p}return[]}function N(l,d){for(let p=1;p<arguments.length;p++){const m=arguments[p];if(c(m)){const P=l.length||0,O=m.length||0;l.length=P+O;for(let W=0;W<O;W++)l[P+W]=m[W]}else l.push(m)}}class q{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function V(l){return/^[\s\xa0]*$/.test(l)}function B(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function $(l){return $[" "](l),l}$[" "]=function(){};var ee=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function re(l,d,p){for(const m in l)d.call(p,l[m],m,l)}function I(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let p,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(p in m)l[p]=m[p];for(let O=0;O<T.length;O++)p=T[O],Object.prototype.hasOwnProperty.call(m,p)&&(l[p]=m[p])}}function S(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function R(l){a.setTimeout(()=>{throw l},0)}function w(){var l=Xt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class $t{constructor(){this.h=this.g=null}add(d,p){const m=on.get();m.set(d,p),this.h?this.h.next=m:this.g=m,this.h=m}}var on=new q(()=>new tt,l=>l.reset());class tt{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,Te=!1,Xt=new $t,yn=()=>{const l=a.Promise.resolve(void 0);Ae=()=>{l.then(an)}};var an=()=>{for(var l;l=w();){try{l.h.call(l.g)}catch(p){R(p)}var d=on;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}Te=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ye(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var Ei=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Nn(l,d){if(Ye.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,m=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(ee){e:{try{$(d.nodeName);var P=!0;break e}catch{}P=!1}P||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:zt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Nn.aa.h.call(this)}}C(Nn,Ye);var zt={2:"touch",3:"pen",4:"mouse"};Nn.prototype.h=function(){Nn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(l,d,p,m,P){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!m,this.ha=P,this.key=++X,this.da=this.fa=!1}function ne(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ne(l){this.src=l,this.g={},this.h=0}Ne.prototype.add=function(l,d,p,m,P){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var W=E(l,d,m,P);return-1<W?(d=l[W],p||(d.fa=!1)):(d=new Q(d,this.src,O,!!m,P),d.fa=p,l.push(d)),d};function v(l,d){var p=d.type;if(p in l.g){var m=l.g[p],P=Array.prototype.indexOf.call(m,d,void 0),O;(O=0<=P)&&Array.prototype.splice.call(m,P,1),O&&(ne(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function E(l,d,p,m){for(var P=0;P<l.length;++P){var O=l[P];if(!O.da&&O.listener==d&&O.capture==!!p&&O.ha==m)return P}return-1}var b="closure_lm_"+(1e6*Math.random()|0),x={};function F(l,d,p,m,P){if(Array.isArray(d)){for(var O=0;O<d.length;O++)F(l,d[O],p,m,P);return null}return p=le(p),l&&l[D]?l.K(d,p,u(m)?!!m.capture:!!m,P):L(l,d,p,!1,m,P)}function L(l,d,p,m,P,O){if(!d)throw Error("Invalid event type");var W=u(P)?!!P.capture:!!P,Be=Y(l);if(Be||(l[b]=Be=new Ne(l)),p=Be.add(d,p,m,W,O),p.proxy)return p;if(m=z(),p.proxy=m,m.src=l,m.listener=p,l.addEventListener)Ei||(P=W),P===void 0&&(P=!1),l.addEventListener(d.toString(),m,P);else if(l.attachEvent)l.attachEvent(j(d.toString()),m);else if(l.addListener&&l.removeListener)l.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function z(){function l(p){return d.call(l.src,l.listener,p)}const d=oe;return l}function H(l,d,p,m,P){if(Array.isArray(d))for(var O=0;O<d.length;O++)H(l,d[O],p,m,P);else m=u(m)?!!m.capture:!!m,p=le(p),l&&l[D]?(l=l.i,d=String(d).toString(),d in l.g&&(O=l.g[d],p=E(O,p,m,P),-1<p&&(ne(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[d],l.h--)))):l&&(l=Y(l))&&(d=l.g[d.toString()],l=-1,d&&(l=E(d,p,m,P)),(p=-1<l?d[l]:null)&&G(p))}function G(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[D])v(d.i,l);else{var p=l.type,m=l.proxy;d.removeEventListener?d.removeEventListener(p,m,l.capture):d.detachEvent?d.detachEvent(j(p),m):d.addListener&&d.removeListener&&d.removeListener(m),(p=Y(d))?(v(p,l),p.h==0&&(p.src=null,d[b]=null)):ne(l)}}}function j(l){return l in x?x[l]:x[l]="on"+l}function oe(l,d){if(l.da)l=!0;else{d=new Nn(d,this);var p=l.listener,m=l.ha||l.src;l.fa&&G(l),l=p.call(m,d)}return l}function Y(l){return l=l[b],l instanceof Ne?l:null}var ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(l){return typeof l=="function"?l:(l[ie]||(l[ie]=function(d){return l.handleEvent(d)}),l[ie])}function ae(){Qe.call(this),this.i=new Ne(this),this.M=this,this.F=null}C(ae,Qe),ae.prototype[D]=!0,ae.prototype.removeEventListener=function(l,d,p,m){H(this,l,d,p,m)};function ge(l,d){var p,m=l.F;if(m)for(p=[];m;m=m.F)p.push(m);if(l=l.M,m=d.type||d,typeof d=="string")d=new Ye(d,l);else if(d instanceof Ye)d.target=d.target||l;else{var P=d;d=new Ye(m,l),A(d,P)}if(P=!0,p)for(var O=p.length-1;0<=O;O--){var W=d.g=p[O];P=Se(W,m,!0,d)&&P}if(W=d.g=l,P=Se(W,m,!0,d)&&P,P=Se(W,m,!1,d)&&P,p)for(O=0;O<p.length;O++)W=d.g=p[O],P=Se(W,m,!1,d)&&P}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],m=0;m<p.length;m++)ne(p[m]);delete l.g[d],l.h--}}this.F=null},ae.prototype.K=function(l,d,p,m){return this.i.add(String(l),d,!1,p,m)},ae.prototype.L=function(l,d,p,m){return this.i.add(String(l),d,!0,p,m)};function Se(l,d,p,m){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var P=!0,O=0;O<d.length;++O){var W=d[O];if(W&&!W.da&&W.capture==p){var Be=W.listener,vt=W.ha||W.src;W.fa&&v(l.i,W),P=Be.call(vt,m)!==!1&&P}}return P&&!m.defaultPrevented}function Ct(l,d,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function _t(l){l.g=Ct(()=>{l.g=null,l.i&&(l.i=!1,_t(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class ln extends Qe{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:_t(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(l){Qe.call(this),this.h=l,this.g={}}C(At,Qe);var Ti=[];function Hs(l){re(l.g,function(d,p){this.g.hasOwnProperty(p)&&G(d)},l),l.g={}}At.prototype.N=function(){At.aa.N.call(this),Hs(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yt=a.JSON.stringify,cn=a.JSON.parse,Ia=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Hc(){}Hc.prototype.h=null;function kf(l){return l.h||(l.h=l.i())}function Nf(){}var Ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wc(){Ye.call(this,"d")}C(Wc,Ye);function zc(){Ye.call(this,"c")}C(zc,Ye);var rr={},Of=null;function Ca(){return Of=Of||new ae}rr.La="serverreachability";function Df(l){Ye.call(this,rr.La,l)}C(Df,Ye);function zs(l){const d=Ca();ge(d,new Df(d))}rr.STAT_EVENT="statevent";function xf(l,d){Ye.call(this,rr.STAT_EVENT,l),this.stat=d}C(xf,Ye);function qt(l){const d=Ca();ge(d,new xf(d,l))}rr.Ma="timingevent";function Lf(l,d){Ye.call(this,rr.Ma,l),this.size=d}C(Lf,Ye);function Ks(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Qs(){this.g=!0}Qs.prototype.xa=function(){this.g=!1};function QT(l,d,p,m,P,O){l.info(function(){if(l.g)if(O)for(var W="",Be=O.split("&"),vt=0;vt<Be.length;vt++){var Oe=Be[vt].split("=");if(1<Oe.length){var St=Oe[0];Oe=Oe[1];var bt=St.split("_");W=2<=bt.length&&bt[1]=="type"?W+(St+"="+Oe+"&"):W+(St+"=redacted&")}}else W=null;else W=O;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+d+`
`+p+`
`+W})}function YT(l,d,p,m,P,O,W){l.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+d+`
`+p+`
`+O+" "+W})}function Ur(l,d,p,m){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+JT(l,p)+(m?" "+m:"")})}function XT(l,d){l.info(function(){return"TIMEOUT: "+d})}Qs.prototype.info=function(){};function JT(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var m=p[l];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var W=1;W<P.length;W++)P[W]=""}}}}return yt(p)}catch{return d}}var Aa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kc;function Sa(){}C(Sa,Hc),Sa.prototype.g=function(){return new XMLHttpRequest},Sa.prototype.i=function(){return{}},Kc=new Sa;function wi(l,d,p,m){this.j=l,this.i=d,this.l=p,this.R=m||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vf}function Vf(){this.i=null,this.g="",this.h=!1}var Ff={},Qc={};function Yc(l,d,p){l.L=1,l.v=ka(Xn(d)),l.m=p,l.P=!0,Uf(l,null)}function Uf(l,d){l.F=Date.now(),ba(l),l.A=Xn(l.v);var p=l.A,m=l.R;Array.isArray(m)||(m=[String(m)]),Zf(p.i,"t",m),l.C=0,p=l.j.J,l.h=new Vf,l.g=_p(l.j,p?d:null,!l.m),0<l.O&&(l.M=new ln(g(l.Y,l,l.g),l.O)),d=l.U,p=l.g,m=l.ca;var P="readystatechange";Array.isArray(P)||(P&&(Ti[0]=P.toString()),P=Ti);for(var O=0;O<P.length;O++){var W=F(p,P[O],m||d.handleEvent,!1,d.h||d);if(!W)break;d.g[W.key]=W}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),zs(),QT(l.i,l.u,l.A,l.l,l.R,l.m)}wi.prototype.ca=function(l){l=l.target;const d=this.M;d&&Jn(l)==3?d.j():this.Y(l)},wi.prototype.Y=function(l){try{if(l==this.g)e:{const bt=Jn(this.g);var d=this.g.Ba();const qr=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||op(this.g)))){this.J||bt!=4||d==7||(d==8||0>=qr?zs(3):zs(2)),Xc(this);var p=this.g.Z();this.X=p;t:if(Bf(this)){var m=op(this.g);l="";var P=m.length,O=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),Ys(this);var W="";break t}this.h.i=new a.TextDecoder}for(d=0;d<P;d++)this.h.h=!0,l+=this.h.i.decode(m[d],{stream:!(O&&d==P-1)});m.length=0,this.h.g+=l,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,YT(this.i,this.u,this.A,this.l,this.R,bt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,vt=this.g;if((Be=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Be)){var Oe=Be;break t}}Oe=null}if(p=Oe)Ur(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jc(this,p);else{this.o=!1,this.s=3,qt(12),sr(this),Ys(this);break e}}if(this.P){p=!0;let vn;for(;!this.J&&this.C<W.length;)if(vn=ZT(this,W),vn==Qc){bt==4&&(this.s=4,qt(14),p=!1),Ur(this.i,this.l,null,"[Incomplete Response]");break}else if(vn==Ff){this.s=4,qt(15),Ur(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else Ur(this.i,this.l,vn,null),Jc(this,vn);if(Bf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||W.length!=0||this.h.h||(this.s=1,qt(16),p=!1),this.o=this.o&&p,!p)Ur(this.i,this.l,W,"[Invalid Chunked Response]"),sr(this),Ys(this);else if(0<W.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),ru(St),St.M=!0,qt(11))}}else Ur(this.i,this.l,W,null),Jc(this,W);bt==4&&sr(this),this.o&&!this.J&&(bt==4?fp(this.j,this):(this.o=!1,ba(this)))}else mw(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,qt(12)):(this.s=0,qt(13)),sr(this),Ys(this)}}}catch{}finally{}};function Bf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function ZT(l,d){var p=l.C,m=d.indexOf(`
`,p);return m==-1?Qc:(p=Number(d.substring(p,m)),isNaN(p)?Ff:(m+=1,m+p>d.length?Qc:(d=d.slice(m,m+p),l.C=m+p,d)))}wi.prototype.cancel=function(){this.J=!0,sr(this)};function ba(l){l.S=Date.now()+l.I,$f(l,l.I)}function $f(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ks(g(l.ba,l),d)}function Xc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}wi.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(XT(this.i,this.A),this.L!=2&&(zs(),qt(17)),sr(this),this.s=2,Ys(this)):$f(this,this.S-l)};function Ys(l){l.j.G==0||l.J||fp(l.j,l)}function sr(l){Xc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Hs(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Jc(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Zc(p.h,l))){if(!l.K&&Zc(p.h,l)&&p.G==3){try{var m=p.Da.g.parse(d)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Ma(p),xa(p);else break e;iu(p),qt(18)}}else p.za=P[1],0<p.za-p.T&&37500>P[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ks(g(p.Za,p),6e3));if(1>=Gf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ar(p,11)}else if((l.K||p.g==l)&&Ma(p),!V(d))for(P=p.Da.g.parse(d),d=0;d<P.length;d++){let Oe=P[d];if(p.T=Oe[0],Oe=Oe[1],p.G==2)if(Oe[0]=="c"){p.K=Oe[1],p.ia=Oe[2];const St=Oe[3];St!=null&&(p.la=St,p.j.info("VER="+p.la));const bt=Oe[4];bt!=null&&(p.Aa=bt,p.j.info("SVER="+p.Aa));const qr=Oe[5];qr!=null&&typeof qr=="number"&&0<qr&&(m=1.5*qr,p.L=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const vn=l.g;if(vn){const Fa=vn.g?vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fa){var O=m.h;O.g||Fa.indexOf("spdy")==-1&&Fa.indexOf("quic")==-1&&Fa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(eu(O,O.h),O.h=null))}if(m.D){const su=vn.g?vn.g.getResponseHeader("X-HTTP-Session-Id"):null;su&&(m.ya=su,je(m.I,m.D,su))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),m=p;var W=l;if(m.qa=mp(m,m.J?m.ia:null,m.W),W.K){Hf(m.h,W);var Be=W,vt=m.L;vt&&(Be.I=vt),Be.B&&(Xc(Be),ba(Be)),m.g=W}else hp(m);0<p.i.length&&La(p)}else Oe[0]!="stop"&&Oe[0]!="close"||ar(p,7);else p.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?ar(p,7):nu(p):Oe[0]!="noop"&&p.l&&p.l.ta(Oe),p.v=0)}}zs(4)}catch{}}var ew=class{constructor(l,d){this.g=l,this.map=d}};function qf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Gf(l){return l.h?1:l.g?l.g.size:0}function Zc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function eu(l,d){l.g?l.g.add(d):l.h=d}function Hf(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}qf.prototype.cancel=function(){if(this.i=Wf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Wf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return k(l.i)}function tw(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,m=0;m<p;m++)d.push(l[m]);return d}d=[],p=0;for(m in l)d[p++]=l[m];return d}function nw(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const m in l)d[p++]=m;return d}}}function zf(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=nw(l),m=tw(l),P=m.length,O=0;O<P;O++)d.call(void 0,m[O],p&&p[O],l)}var Kf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iw(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var m=l[p].indexOf("="),P=null;if(0<=m){var O=l[p].substring(0,m);P=l[p].substring(m+1)}else O=l[p];d(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function or(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof or){this.h=l.h,Ra(this,l.j),this.o=l.o,this.g=l.g,Pa(this,l.s),this.l=l.l;var d=l.i,p=new Zs;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Qf(this,p),this.m=l.m}else l&&(d=String(l).match(Kf))?(this.h=!1,Ra(this,d[1]||"",!0),this.o=Xs(d[2]||""),this.g=Xs(d[3]||"",!0),Pa(this,d[4]),this.l=Xs(d[5]||"",!0),Qf(this,d[6]||"",!0),this.m=Xs(d[7]||"")):(this.h=!1,this.i=new Zs(null,this.h))}or.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Js(d,Yf,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Js(d,Yf,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Js(p,p.charAt(0)=="/"?ow:sw,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Js(p,lw)),l.join("")};function Xn(l){return new or(l)}function Ra(l,d,p){l.j=p?Xs(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Pa(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Qf(l,d,p){d instanceof Zs?(l.i=d,cw(l.i,l.h)):(p||(d=Js(d,aw)),l.i=new Zs(d,l.h))}function je(l,d,p){l.i.set(d,p)}function ka(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Xs(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Js(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,rw),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function rw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Yf=/[#\/\?@]/g,sw=/[#\?:]/g,ow=/[#\?]/g,aw=/[#\?@]/g,lw=/#/g;function Zs(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Ii(l){l.g||(l.g=new Map,l.h=0,l.i&&iw(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Zs.prototype,t.add=function(l,d){Ii(this),this.i=null,l=Br(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Xf(l,d){Ii(l),d=Br(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Jf(l,d){return Ii(l),d=Br(l,d),l.g.has(d)}t.forEach=function(l,d){Ii(this),this.g.forEach(function(p,m){p.forEach(function(P){l.call(d,P,m,this)},this)},this)},t.na=function(){Ii(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let m=0;m<d.length;m++){const P=l[m];for(let O=0;O<P.length;O++)p.push(d[m])}return p},t.V=function(l){Ii(this);let d=[];if(typeof l=="string")Jf(this,l)&&(d=d.concat(this.g.get(Br(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return Ii(this),this.i=null,l=Br(this,l),Jf(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Zf(l,d,p){Xf(l,d),0<p.length&&(l.i=null,l.g.set(Br(l,d),k(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var m=d[p];const O=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var P=O;W[m]!==""&&(P+="="+encodeURIComponent(String(W[m]))),l.push(P)}}return this.i=l.join("&")};function Br(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function cw(l,d){d&&!l.j&&(Ii(l),l.i=null,l.g.forEach(function(p,m){var P=m.toLowerCase();m!=P&&(Xf(this,m),Zf(this,P,p))},l)),l.j=d}function uw(l,d){const p=new Qs;if(a.Image){const m=new Image;m.onload=_(Ci,p,"TestLoadImage: loaded",!0,d,m),m.onerror=_(Ci,p,"TestLoadImage: error",!1,d,m),m.onabort=_(Ci,p,"TestLoadImage: abort",!1,d,m),m.ontimeout=_(Ci,p,"TestLoadImage: timeout",!1,d,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=l}else d(!1)}function hw(l,d){const p=new Qs,m=new AbortController,P=setTimeout(()=>{m.abort(),Ci(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:m.signal}).then(O=>{clearTimeout(P),O.ok?Ci(p,"TestPingServer: ok",!0,d):Ci(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(P),Ci(p,"TestPingServer: error",!1,d)})}function Ci(l,d,p,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(p)}catch{}}function dw(){this.g=new Ia}function fw(l,d,p){const m=p||"";try{zf(l,function(P,O){let W=P;u(P)&&(W=yt(P)),d.push(m+O+"="+encodeURIComponent(W))})}catch(P){throw d.push(m+"type="+encodeURIComponent("_badmap")),P}}function Na(l){this.l=l.Ub||null,this.j=l.eb||!1}C(Na,Hc),Na.prototype.g=function(){return new Oa(this.l,this.j)},Na.prototype.i=function(l){return function(){return l}}({});function Oa(l,d){ae.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Oa,ae),t=Oa.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,to(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,eo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,to(this)),this.g&&(this.readyState=3,to(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ep(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ep(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?eo(this):to(this),this.readyState==3&&ep(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,eo(this))},t.Qa=function(l){this.g&&(this.response=l,eo(this))},t.ga=function(){this.g&&eo(this)};function eo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,to(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function to(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function tp(l){let d="";return re(l,function(p,m){d+=m,d+=":",d+=p,d+=`\r
`}),d}function tu(l,d,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=tp(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):je(l,d,p))}function Je(l){ae.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Je,ae);var pw=/^https?$/i,gw=["POST","PUT"];t=Je.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kc.g(),this.v=this.o?kf(this.o):kf(Kc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(O){np(this,O);return}if(l=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)p.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())p.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),P=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(gw,d,void 0))||m||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,W]of p)this.g.setRequestHeader(O,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sp(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){np(this,O)}};function np(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,ip(l),Da(l)}function ip(l){l.A||(l.A=!0,ge(l,"complete"),ge(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ge(this,"complete"),ge(this,"abort"),Da(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Da(this,!0)),Je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?rp(this):this.bb())},t.bb=function(){rp(this)};function rp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Jn(l)!=4||l.Z()!=2)){if(l.u&&Jn(l)==4)Ct(l.Ea,0,l);else if(ge(l,"readystatechange"),Jn(l)==4){l.h=!1;try{const W=l.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var m;if(m=W===0){var P=String(l.D).match(Kf)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),m=!pw.test(P?P.toLowerCase():"")}p=m}if(p)ge(l,"complete"),ge(l,"success");else{l.m=6;try{var O=2<Jn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",ip(l)}}finally{Da(l)}}}}function Da(l,d){if(l.g){sp(l);const p=l.g,m=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ge(l,"ready");try{p.onreadystatechange=m}catch{}}}function sp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Jn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),cn(d)}};function op(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function mw(l){const d={};l=(l.g&&2<=Jn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<l.length;m++){if(V(l[m]))continue;var p=S(l[m]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=d[P]||[];d[P]=O,O.push(p)}I(d,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function no(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function ap(l){this.Aa=0,this.i=[],this.j=new Qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=no("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=no("baseRetryDelayMs",5e3,l),this.cb=no("retryDelaySeedMs",1e4,l),this.Wa=no("forwardChannelMaxRetries",2,l),this.wa=no("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new qf(l&&l.concurrentRequestLimit),this.Da=new dw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ap.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,m){qt(0),this.W=l,this.H=d||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.I=mp(this,null,this.W),La(this)};function nu(l){if(lp(l),l.G==3){var d=l.U++,p=Xn(l.I);if(je(p,"SID",l.K),je(p,"RID",d),je(p,"TYPE","terminate"),io(l,p),d=new wi(l,l.j,d),d.L=2,d.v=ka(Xn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=_p(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ba(d)}gp(l)}function xa(l){l.g&&(ru(l),l.g.cancel(),l.g=null)}function lp(l){xa(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ma(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function La(l){if(!jf(l.h)&&!l.s){l.s=!0;var d=l.Ga;Ae||yn(),Te||(Ae(),Te=!0),Xt.add(d,l),l.B=0}}function _w(l,d){return Gf(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ks(g(l.Ga,l,d),pp(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const P=new wi(this,this.j,l);let O=this.o;if(this.S&&(O?(O=y(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(d+=m,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=up(this,P,d),p=Xn(this.I),je(p,"RID",l),je(p,"CVER",22),this.D&&je(p,"X-HTTP-Session-Id",this.D),io(this,p),O&&(this.O?d="headers="+encodeURIComponent(String(tp(O)))+"&"+d:this.m&&tu(p,this.m,O)),eu(this.h,P),this.Ua&&je(p,"TYPE","init"),this.P?(je(p,"$req",d),je(p,"SID","null"),P.T=!0,Yc(P,p,null)):Yc(P,p,d),this.G=2}}else this.G==3&&(l?cp(this,l):this.i.length==0||jf(this.h)||cp(this))};function cp(l,d){var p;d?p=d.l:p=l.U++;const m=Xn(l.I);je(m,"SID",l.K),je(m,"RID",p),je(m,"AID",l.T),io(l,m),l.m&&l.o&&tu(m,l.m,l.o),p=new wi(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=up(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),eu(l.h,p),Yc(p,m,d)}function io(l,d){l.H&&re(l.H,function(p,m){je(d,m,p)}),l.l&&zf({},function(p,m){je(d,m,p)})}function up(l,d,p){p=Math.min(l.i.length,p);var m=l.l?g(l.l.Na,l.l,l):null;e:{var P=l.i;let O=-1;for(;;){const W=["count="+p];O==-1?0<p?(O=P[0].g,W.push("ofs="+O)):O=0:W.push("ofs="+O);let Be=!0;for(let vt=0;vt<p;vt++){let Oe=P[vt].g;const St=P[vt].map;if(Oe-=O,0>Oe)O=Math.max(0,P[vt].g-100),Be=!1;else try{fw(St,W,"req"+Oe+"_")}catch{m&&m(St)}}if(Be){m=W.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,m}function hp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Ae||yn(),Te||(Ae(),Te=!0),Xt.add(d,l),l.v=0}}function iu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ks(g(l.Fa,l),pp(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,dp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ks(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qt(10),xa(this),dp(this))};function ru(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function dp(l){l.g=new wi(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Xn(l.qa);je(d,"RID","rpc"),je(d,"SID",l.K),je(d,"AID",l.T),je(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(d,"TO",l.ja),je(d,"TYPE","xmlhttp"),io(l,d),l.m&&l.o&&tu(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=ka(Xn(d)),p.m=null,p.P=!0,Uf(p,l)}t.Za=function(){this.C!=null&&(this.C=null,xa(this),iu(this),qt(19))};function Ma(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function fp(l,d){var p=null;if(l.g==d){Ma(l),ru(l),l.g=null;var m=2}else if(Zc(l.h,d))p=d.D,Hf(l.h,d),m=1;else return;if(l.G!=0){if(d.o)if(m==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var P=l.B;m=Ca(),ge(m,new Lf(m,p)),La(l)}else hp(l);else if(P=d.s,P==3||P==0&&0<d.X||!(m==1&&_w(l,d)||m==2&&iu(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),P){case 1:ar(l,5);break;case 4:ar(l,10);break;case 3:ar(l,6);break;default:ar(l,2)}}}function pp(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function ar(l,d){if(l.j.info("Error code "+d),d==2){var p=g(l.fb,l),m=l.Xa;const P=!m;m=new or(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ra(m,"https"),ka(m),P?uw(m.toString(),p):hw(m.toString(),p)}else qt(2);l.G=0,l.l&&l.l.sa(d),gp(l),lp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),qt(2)):(this.j.info("Failed to ping google.com"),qt(1))};function gp(l){if(l.G=0,l.ka=[],l.l){const d=Wf(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function mp(l,d,p){var m=p instanceof or?Xn(p):new or(p);if(m.g!="")d&&(m.g=d+"."+m.g),Pa(m,m.s);else{var P=a.location;m=P.protocol,d=d?d+"."+P.hostname:P.hostname,P=+P.port;var O=new or(null);m&&Ra(O,m),d&&(O.g=d),P&&Pa(O,P),p&&(O.l=p),m=O}return p=l.D,d=l.ya,p&&d&&je(m,p,d),je(m,"VER",l.la),io(l,m),m}function _p(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Je(new Na({eb:p})):new Je(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function yp(){}t=yp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Va(){}Va.prototype.g=function(l,d){return new Jt(l,d)};function Jt(l,d){ae.call(this),this.g=new ap(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!V(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!V(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new $r(this)}C(Jt,ae),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){nu(this.g)},Jt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=yt(l),l=p);d.i.push(new ew(d.Ya++,l)),d.G==3&&La(d)},Jt.prototype.N=function(){this.g.l=null,delete this.j,nu(this.g),delete this.g,Jt.aa.N.call(this)};function vp(l){Wc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}C(vp,Wc);function Ep(){zc.call(this),this.status=1}C(Ep,zc);function $r(l){this.g=l}C($r,yp),$r.prototype.ua=function(){ge(this.g,"a")},$r.prototype.ta=function(l){ge(this.g,new vp(l))},$r.prototype.sa=function(l){ge(this.g,new Ep)},$r.prototype.ra=function(){ge(this.g,"b")},Va.prototype.createWebChannel=Va.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,X0=function(){return new Va},Y0=function(){return Ca()},Q0=rr,sh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Aa.NO_ERROR=0,Aa.TIMEOUT=8,Aa.HTTP_ERROR=6,il=Aa,Mf.COMPLETE="complete",K0=Mf,Nf.EventType=Ws,Ws.OPEN="a",Ws.CLOSE="b",Ws.ERROR="c",Ws.MESSAGE="d",ae.prototype.listen=ae.prototype.K,mo=Nf,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,z0=Je}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});const og="@firebase/firestore";/**
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
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
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
 */let xs="11.0.2";/**
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
 */const wr=new aa("@firebase/firestore");function zr(){return wr.logLevel}function J(t,...e){if(wr.logLevel<=Ee.DEBUG){const n=e.map(yd);wr.debug(`Firestore (${xs}): ${t}`,...n)}}function fi(t,...e){if(wr.logLevel<=Ee.ERROR){const n=e.map(yd);wr.error(`Firestore (${xs}): ${t}`,...n)}}function ys(t,...e){if(wr.logLevel<=Ee.WARN){const n=e.map(yd);wr.warn(`Firestore (${xs}): ${t}`,...n)}}function yd(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: `+t;throw fi(e),new Error(e)}function Ve(t,e){t||ue()}function pe(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ui{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class J0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class CC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AC{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new Ui;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ui,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ui)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ve(typeof i.accessToken=="string"),new J0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new Pt(e)}}class SC{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class bC{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new SC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ve(this.o===void 0);const i=s=>{s.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new RC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Z0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=kC(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function Ie(t,e){return t<e?-1:t>e?1:0}function vs(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
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
 */class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new at(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new at(0,0))}static max(){return new de(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wo{constructor(e,n,i){n===void 0?n=0:n>e.length&&ue(),i===void 0?i=e.length-n:i>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Wo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wo?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class We extends Wo{construct(e,n,i){return new We(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new te(U.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new We(n)}static emptyPath(){return new We([])}}const NC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends Wo{construct(e,n,i){return new wt(e,n,i)}static isValidIdentifier(e){return NC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new te(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new te(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new te(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(We.fromString(e))}static fromName(e){return new se(We.fromString(e).popFirst(5))}static empty(){return new se(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new We(e.slice()))}}function OC(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=de.fromTimestamp(i===1e9?new at(n+1,0):new at(n,i));return new Wi(r,se.empty(),e)}function DC(t){return new Wi(t.readTime,t.key,-1)}class Wi{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Wi(de.min(),se.empty(),-1)}static max(){return new Wi(de.max(),se.empty(),-1)}}function xC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const LC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ls(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==LC)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,i)=>{n(e)})}static reject(e){return new M((n,i)=>{i(e)})}static waitFor(e){return new M((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},c=>i(c))}),o=!0,s===r&&n()})}static or(e){let n=M.resolve(!1);for(const i of e)n=n.next(r=>r?M.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new M((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===s&&i(o)},h=>r(h))}})}static doWhile(e,n){return new M((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function VC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ms(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class vc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}vc.oe=-1;function Ec(t){return t==null}function Rl(t){return t===0&&1/t==-1/0}function FC(t){return typeof t=="number"&&Number.isInteger(t)&&!Rl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function UC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ag(e)),e=BC(t.get(n),e);return ag(e)}function BC(t,e){let n=e;const i=t.length;for(let r=0;r<i;r++){const s=t.charAt(r);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function ag(t){return t+""}/**
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
 */function lg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ey(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let st=class oh{constructor(e,n){this.comparator=e,this.root=n||Bi.EMPTY}insert(e,n){return new oh(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bi.BLACK,null,null))}remove(e){return new oh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bi.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ja(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ja(this.root,e,this.comparator,!1)}getReverseIterator(){return new ja(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ja(this.root,e,this.comparator,!0)}},ja=class{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Bi=class ti{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??ti.RED,this.left=r??ti.EMPTY,this.right=s??ti.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new ti(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ti.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ti.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ti.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ti.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}};Bi.EMPTY=null,Bi.RED=!0,Bi.BLACK=!1;Bi.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,i,r,s){return this}insert(e,n,i){return new Bi(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cg(this.data.getIterator())}getIteratorFrom(e){return new cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class En{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new En([])}unionWith(e){let n=new lt(wt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vs(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class ty extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ty("Invalid base64 string: "+s):s}}(e);return new It(n)}static fromUint8Array(e){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const $C=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zi(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=$C.exec(t);if(Ve(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:et(t.seconds),nanos:et(t.nanos)}}function et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ki(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */function vd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Tc(t){const e=t.mapValue.fields.__previous_value__;return vd(e)?Tc(e):e}function zo(t){const e=zi(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class qC{constructor(e,n,i,r,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Ko{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ko&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ga={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vd(t)?4:GC(t)?9007199254740991:jC(t)?10:11:ue()}function Hn(t,e){if(t===e)return!0;const n=Qi(t);if(n!==Qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zo(t).isEqual(zo(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=zi(r.timestampValue),a=zi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Ki(r.bytesValue).isEqual(Ki(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return et(r.geoPointValue.latitude)===et(s.geoPointValue.latitude)&&et(r.geoPointValue.longitude)===et(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return et(r.integerValue)===et(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=et(r.doubleValue),a=et(s.doubleValue);return o===a?Rl(o)===Rl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return vs(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(lg(o)!==lg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Hn(o[c],a[c])))return!1;return!0}(t,e);default:return ue()}}function Qo(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function Es(t,e){if(t===e)return 0;const n=Qi(t),i=Qi(e);if(n!==i)return Ie(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=et(s.integerValue||s.doubleValue),c=et(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return ug(t.timestampValue,e.timestampValue);case 4:return ug(zo(t),zo(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ki(s),c=Ki(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=Ie(a[u],c[u]);if(h!==0)return h}return Ie(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ie(et(s.latitude),et(o.latitude));return a!==0?a:Ie(et(s.longitude),et(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return hg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,h;const f=s.fields||{},g=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,C=(c=g.value)===null||c===void 0?void 0:c.arrayValue,k=Ie(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:hg(_,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ga.mapValue&&o===Ga.mapValue)return 0;if(s===Ga.mapValue)return 1;if(o===Ga.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const g=Ie(c[f],h[f]);if(g!==0)return g;const _=Es(a[c[f]],u[h[f]]);if(_!==0)return _}return Ie(c.length,h.length)}(t.mapValue,e.mapValue);default:throw ue()}}function ug(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=zi(t),i=zi(e),r=Ie(n.seconds,i.seconds);return r!==0?r:Ie(n.nanos,i.nanos)}function hg(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const s=Es(n[r],i[r]);if(s)return s}return Ie(n.length,i.length)}function Ts(t){return ah(t)}function ah(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=zi(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ki(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=ah(s);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${ah(n.fields[o])}`;return r+"}"}(t.mapValue):ue()}function rl(t){switch(Qi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tc(t);return e?16+rl(e):16;case 5:return 2*t.stringValue.length;case 6:return Ki(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((r,s)=>r+rl(s),0)}(t.arrayValue);case 10:case 11:return function(i){let r=0;return kr(i.fields,(s,o)=>{r+=s.length+rl(o)}),r}(t.mapValue);default:throw ue()}}function dg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lh(t){return!!t&&"integerValue"in t}function Ed(t){return!!t&&"arrayValue"in t}function fg(t){return!!t&&"nullValue"in t}function pg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sl(t){return!!t&&"mapValue"in t}function jC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ao(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ao(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ao(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!sl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ao(n)}setAll(e){let n=wt.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Ao(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());sl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];sl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){kr(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new un(Ao(this.value))}}function ny(t){const e=[];return kr(t.fields,(n,i)=>{const r=new wt([n]);if(sl(i)){const s=ny(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new En(e)}/**
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
 */class Ot{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ot(e,0,de.min(),de.min(),de.min(),un.empty(),0)}static newFoundDocument(e,n,i,r){return new Ot(e,1,n,de.min(),i,r,0)}static newNoDocument(e,n){return new Ot(e,2,n,de.min(),de.min(),un.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,de.min(),de.min(),un.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pl{constructor(e,n){this.position=e,this.inclusive=n}}function gg(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=se.comparator(se.fromName(o.referenceValue),n.key):i=Es(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function mg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function HC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class iy{}class it extends iy{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new zC(e,n,i):n==="array-contains"?new YC(e,i):n==="in"?new XC(e,i):n==="not-in"?new JC(e,i):n==="array-contains-any"?new ZC(e,i):new it(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new KC(e,i):new QC(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Es(n,this.value)):n!==null&&Qi(this.value)===Qi(n)&&this.matchesComparison(Es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sn extends iy{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Sn(e,n)}matches(e){return ry(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ry(t){return t.op==="and"}function sy(t){return WC(t)&&ry(t)}function WC(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function ch(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+Ts(t.value);if(sy(t))return t.filters.map(e=>ch(e)).join(",");{const e=t.filters.map(n=>ch(n)).join(",");return`${t.op}(${e})`}}function oy(t,e){return t instanceof it?function(i,r){return r instanceof it&&i.op===r.op&&i.field.isEqual(r.field)&&Hn(i.value,r.value)}(t,e):t instanceof Sn?function(i,r){return r instanceof Sn&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&oy(o,r.filters[a]),!0):!1}(t,e):void ue()}function ay(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${Ts(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(ay).join(" ,")+"}"}(t):"Filter"}class zC extends it{constructor(e,n,i){super(e,n,i),this.key=se.fromName(i.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class KC extends it{constructor(e,n){super(e,"in",n),this.keys=ly("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QC extends it{constructor(e,n){super(e,"not-in",n),this.keys=ly("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ly(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>se.fromName(i.referenceValue))}class YC extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ed(n)&&Qo(n.arrayValue,this.value)}}class XC extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qo(this.value.arrayValue,n)}}class JC extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qo(this.value.arrayValue,n)}}class ZC extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ed(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Qo(this.value.arrayValue,i))}}/**
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
 */class eA{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function _g(t,e=null,n=[],i=[],r=null,s=null,o=null){return new eA(t,e,n,i,r,s,o)}function Td(t){const e=pe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>ch(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Ec(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ts(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ts(i)).join(",")),e.ue=n}return e.ue}function wd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mg(t.startAt,e.startAt)&&mg(t.endAt,e.endAt)}function uh(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class la{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tA(t,e,n,i,r,s,o,a){return new la(t,e,n,i,r,s,o,a)}function cy(t){return new la(t)}function yg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uy(t){return t.collectionGroup!==null}function So(t){const e=pe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new lt(wt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new kl(s,i))}),n.has(wt.keyField().canonicalString())||e.ce.push(new kl(wt.keyField(),i))}return e.ce}function Un(t){const e=pe(t);return e.le||(e.le=nA(e,So(t))),e.le}function nA(t,e){if(t.limitType==="F")return _g(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new kl(r.field,s)});const n=t.endAt?new Pl(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Pl(t.startAt.position,t.startAt.inclusive):null;return _g(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function hh(t,e){const n=t.filters.concat([e]);return new la(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dh(t,e,n){return new la(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wc(t,e){return wd(Un(t),Un(e))&&t.limitType===e.limitType}function hy(t){return`${Td(Un(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>ay(r)).join(", ")}]`),Ec(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>Ts(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>Ts(r)).join(",")),`Target(${i})`}(Un(t))}; limitType=${t.limitType})`}function Ic(t,e){return e.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):se.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(t,e)&&function(i,r){for(const s of So(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(i,r){return!(i.startAt&&!function(o,a,c){const u=gg(o,a,c);return o.inclusive?u<=0:u<0}(i.startAt,So(i),r)||i.endAt&&!function(o,a,c){const u=gg(o,a,c);return o.inclusive?u>=0:u>0}(i.endAt,So(i),r))}(t,e)}function iA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dy(t){return(e,n)=>{let i=!1;for(const r of So(t)){const s=rA(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function rA(t,e,n){const i=t.field.isKeyField()?se.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Es(c,u):ue()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ue()}}/**
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
 */class Nr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return ey(this.inner)}size(){return this.innerSize}}/**
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
 */const sA=new st(se.comparator);function pi(){return sA}const fy=new st(se.comparator);function _o(...t){let e=fy;for(const n of t)e=e.insert(n.key,n);return e}function py(t){let e=fy;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function fr(){return bo()}function gy(){return bo()}function bo(){return new Nr(t=>t.toString(),(t,e)=>t.isEqual(e))}const oA=new st(se.comparator),aA=new lt(se.comparator);function we(...t){let e=aA;for(const n of t)e=e.add(n);return e}const lA=new lt(Ie);function cA(){return lA}/**
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
 */function Id(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rl(e)?"-0":e}}function my(t){return{integerValue:""+t}}function uA(t,e){return FC(e)?my(e):Id(t,e)}/**
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
 */class Cc{constructor(){this._=void 0}}function hA(t,e,n){return t instanceof Nl?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&vd(s)&&(s=Tc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Yo?yy(t,e):t instanceof Xo?vy(t,e):function(r,s){const o=_y(r,s),a=vg(o)+vg(r.Pe);return lh(o)&&lh(r.Pe)?my(a):Id(r.serializer,a)}(t,e)}function dA(t,e,n){return t instanceof Yo?yy(t,e):t instanceof Xo?vy(t,e):n}function _y(t,e){return t instanceof Ol?function(i){return lh(i)||function(s){return!!s&&"doubleValue"in s}(i)}(e)?e:{integerValue:0}:null}class Nl extends Cc{}class Yo extends Cc{constructor(e){super(),this.elements=e}}function yy(t,e){const n=Ey(e);for(const i of t.elements)n.some(r=>Hn(r,i))||n.push(i);return{arrayValue:{values:n}}}class Xo extends Cc{constructor(e){super(),this.elements=e}}function vy(t,e){let n=Ey(e);for(const i of t.elements)n=n.filter(r=>!Hn(r,i));return{arrayValue:{values:n}}}class Ol extends Cc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function vg(t){return et(t.integerValue||t.doubleValue)}function Ey(t){return Ed(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fA(t,e){return t.field.isEqual(e.field)&&function(i,r){return i instanceof Yo&&r instanceof Yo||i instanceof Xo&&r instanceof Xo?vs(i.elements,r.elements,Hn):i instanceof Ol&&r instanceof Ol?Hn(i.Pe,r.Pe):i instanceof Nl&&r instanceof Nl}(t.transform,e.transform)}class pA{constructor(e,n){this.version=e,this.transformResults=n}}class ci{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ci}static exists(e){return new ci(void 0,e)}static updateTime(e){return new ci(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ol(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ac{}function Ty(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Iy(t.key,ci.none()):new ca(t.key,t.data,ci.none());{const n=t.data,i=un.empty();let r=new lt(wt.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Or(t.key,i,new En(r.toArray()),ci.none())}}function gA(t,e,n){t instanceof ca?function(r,s,o){const a=r.value.clone(),c=Tg(r.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(r,s,o){if(!ol(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Tg(r.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(wy(r)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,i){return t instanceof ca?function(s,o,a,c){if(!ol(s.precondition,o))return a;const u=s.value.clone(),h=wg(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,i):t instanceof Or?function(s,o,a,c){if(!ol(s.precondition,o))return a;const u=wg(s.fieldTransforms,c,o),h=o.data;return h.setAll(wy(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,i):function(s,o,a){return ol(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function mA(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=_y(i.transform,r||null);s!=null&&(n===null&&(n=un.empty()),n.set(i.field,s))}return n||null}function Eg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&vs(i,r,(s,o)=>fA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends Ac{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Or extends Ac{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Tg(t,e,n){const i=new Map;Ve(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,dA(o,a,n[r]))}return i}function wg(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,hA(s,o,e))}return i}class Iy extends Ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _A extends Ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yA{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&gA(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Ro(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Ro(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=gy();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const c=Ty(o,a);c!==null&&i.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&vs(this.mutations,e.mutations,(n,i)=>Eg(n,i))&&vs(this.baseMutations,e.baseMutations,(n,i)=>Eg(n,i))}}class Cd{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){Ve(e.mutations.length===i.length);let r=function(){return oA}();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Cd(e,n,i,r)}}/**
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
 */class vA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class EA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var nt,be;function TA(t){switch(t){default:return ue();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function Cy(t){if(t===void 0)return fi("GRPC error has no .code"),U.UNKNOWN;switch(t){case nt.OK:return U.OK;case nt.CANCELLED:return U.CANCELLED;case nt.UNKNOWN:return U.UNKNOWN;case nt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case nt.INTERNAL:return U.INTERNAL;case nt.UNAVAILABLE:return U.UNAVAILABLE;case nt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case nt.NOT_FOUND:return U.NOT_FOUND;case nt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case nt.ABORTED:return U.ABORTED;case nt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case nt.DATA_LOSS:return U.DATA_LOSS;default:return ue()}}(be=nt||(nt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function wA(){return new TextEncoder}/**
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
 */const IA=new mr([4294967295,4294967295],0);function Ig(t){const e=wA().encode(t),n=new W0;return n.update(e),new Uint8Array(n.digest())}function Cg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new mr([n,i],0),new mr([r,s],0)]}class Ad{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new yo(`Invalid padding: ${n}`);if(i<0)throw new yo(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new yo(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new yo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=mr.fromNumber(this.Te)}Ee(e,n,i){let r=e.add(n.multiply(mr.fromNumber(i)));return r.compare(IA)===1&&(r=new mr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Ig(e),[i,r]=Cg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);if(!this.de(o))return!1}return!0}static create(e,n,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ad(s,r,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Ig(e),[i,r]=Cg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sc{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Sc(de.min(),r,new st(Ie),pi(),we())}}class ua{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new ua(i,n,we(),we(),we())}}/**
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
 */class al{constructor(e,n,i,r){this.Re=e,this.removedTargetIds=n,this.key=i,this.Ve=r}}class Ay{constructor(e,n){this.targetId=e,this.me=n}}class Sy{constructor(e,n,i=It.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Ag{constructor(){this.fe=0,this.ge=Sg(),this.pe=It.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=we(),n=we(),i=we();return this.ge.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:ue()}}),new ua(this.pe,this.ye,e,n,i)}Ce(){this.we=!1,this.ge=Sg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class CA{constructor(e){this.Le=e,this.Be=new Map,this.ke=pi(),this.qe=Ha(),this.Qe=Ha(),this.Ke=new st(Ie)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const i=this.ze(n);switch(e.state){case 0:this.je(n)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.je(n)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((i,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,i=e.me.count,r=this.Ye(n);if(r){const s=r.target;if(uh(s))if(i===0){const o=new se(s.path);this.We(n,o,Ot.newNoDocument(o,de.min()))}else Ve(i===1);else{const o=this.Ze(n);if(o!==i){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=n;let o,a;try{o=Ki(i).toUint8Array()}catch(c){if(c instanceof ty)return ys("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ad(o,r,s)}catch(c){return ys(c instanceof yo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,i){return n.me.count===i-this.rt(e,n.targetId)?0:2}rt(e,n){const i=this.Le.getRemoteKeysForTarget(n);let r=0;return i.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),r++)}),r}it(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&uh(a.target)){const c=new se(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Ot.newNoDocument(c,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let i=we();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const r=new Sc(e,n,this.Ke,this.ke,i);return this.ke=pi(),this.qe=Ha(),this.Qe=Ha(),this.Ke=new st(Ie),r}Ue(e,n){if(!this.je(e))return;const i=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,i){if(!this.je(e))return;const r=this.ze(e);this.ot(e,n)?r.Fe(n,1):r.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Ag,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new lt(Ie),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new lt(Ie),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Ag),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ha(){return new st(se.comparator)}function Sg(){return new st(se.comparator)}const AA={asc:"ASCENDING",desc:"DESCENDING"},SA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bA={and:"AND",or:"OR"};class RA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fh(t,e){return t.useProto3Json||Ec(e)?e:{value:e}}function Dl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function by(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PA(t,e){return Dl(t,e.toTimestamp())}function Bn(t){return Ve(!!t),de.fromTimestamp(function(n){const i=zi(n);return new at(i.seconds,i.nanos)}(t))}function Sd(t,e){return ph(t,e).canonicalString()}function ph(t,e){const n=function(r){return new We(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ry(t){const e=We.fromString(t);return Ve(Dy(e)),e}function gh(t,e){return Sd(t.databaseId,e.path)}function wu(t,e){const n=Ry(e);if(n.get(1)!==t.databaseId.projectId)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(ky(n))}function Py(t,e){return Sd(t.databaseId,e)}function kA(t){const e=Ry(t);return e.length===4?We.emptyPath():ky(e)}function mh(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ky(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bg(t,e,n){return{name:gh(t,e),fields:n.value.mapValue.fields}}function NA(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(Ve(h===void 0||typeof h=="string"),It.fromBase64String(h||"")):(Ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array),It.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?U.UNKNOWN:Cy(u.code);return new te(h,u.message||"")}(o);n=new Sy(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=wu(t,i.document.name),s=Bn(i.document.updateTime),o=i.document.createTime?Bn(i.document.createTime):de.min(),a=new un({mapValue:{fields:i.document.fields}}),c=Ot.newFoundDocument(r,s,o,a),u=i.targetIds||[],h=i.removedTargetIds||[];n=new al(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=wu(t,i.document),s=i.readTime?Bn(i.readTime):de.min(),o=Ot.newNoDocument(r,s),a=i.removedTargetIds||[];n=new al([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=wu(t,i.document),s=i.removedTargetIds||[];n=new al([],s,r,null)}else{if(!("filter"in e))return ue();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new EA(r,s),a=i.targetId;n=new Ay(a,o)}}return n}function OA(t,e){let n;if(e instanceof ca)n={update:bg(t,e.key,e.value)};else if(e instanceof Iy)n={delete:gh(t,e.key)};else if(e instanceof Or)n={update:bg(t,e.key,e.data),updateMask:$A(e.fieldMask)};else{if(!(e instanceof _A))return ue();n={verify:gh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof Nl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ol)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ue()}(0,i))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:PA(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ue()}(t,e.precondition)),n}function DA(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(r,s){let o=r.updateTime?Bn(r.updateTime):Bn(s);return o.isEqual(de.min())&&(o=Bn(s)),new pA(o,r.transformResults||[])}(n,e))):[]}function xA(t,e){return{documents:[Py(t,e.path)]}}function LA(t,e){const n={structuredQuery:{}},i=e.path;let r;e.collectionGroup!==null?(r=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=Py(t,r);const s=function(u){if(u.length!==0)return Oy(Sn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Qr(g.field),direction:FA(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=fh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:r}}function MA(t){let e=kA(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Ve(i===1);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const g=Ny(f);return g instanceof Sn&&sy(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(C){return new kl(Yr(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,Ec(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(f){const g=!!f.before,_=f.values||[];return new Pl(_,g)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const g=!f.before,_=f.values||[];return new Pl(_,g)}(n.endAt)),tA(e,r,o,s,a,"F",c,u)}function VA(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ny(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Yr(n.unaryFilter.field);return it.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Yr(n.unaryFilter.field);return it.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yr(n.unaryFilter.field);return it.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yr(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return it.create(Yr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(i=>Ny(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function FA(t){return AA[t]}function UA(t){return SA[t]}function BA(t){return bA[t]}function Qr(t){return{fieldPath:t.canonicalString()}}function Yr(t){return wt.fromServerFormat(t.fieldPath)}function Oy(t){return t instanceof it?function(n){if(n.op==="=="){if(pg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NAN"}};if(fg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NAN"}};if(fg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(n.field),op:UA(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const i=n.getFilters().map(r=>Oy(r));return i.length===1?i[0]:{compositeFilter:{op:BA(n.op),filters:i}}}(t):ue()}function $A(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Li{constructor(e,n,i,r,s=de.min(),o=de.min(),a=It.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qA{constructor(e){this.ht=e}}function jA(t){const e=MA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dh(e,e.limit,"L"):e}/**
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
 */class GA{constructor(){this.ln=new HA}addToCollectionParentIndex(e,n){return this.ln.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Wi.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Wi.min())}updateCollectionGroup(e,n,i){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class HA{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new lt(We.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new lt(We.comparator)).toArray()}}/**
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
 */const Rg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(41943040,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
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
 */class ws{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ws(0)}static Qn(){return new ws(-1)}}/**
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
 */function Pg([t,e],[n,i]){const r=Ie(t,n);return r===0?Ie(e,i):r}class WA{constructor(e){this.Gn=e,this.buffer=new lt(Pg),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();Pg(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class zA{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){J("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ms(n)?J("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ls(n)}await this.Yn(3e5)})}}class KA{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return M.resolve(vc.oe);const i=new WA(n);return this.Zn.forEachTarget(e,r=>i.Hn(r.sequenceNumber)).next(()=>this.Zn.er(e,r=>i.Hn(r))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.Zn.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Rg)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rg):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let i,r,s,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r))).next(f=>(i=f,a=Date.now(),this.removeTargets(e,i,n))).next(f=>(s=f,c=Date.now(),this.removeOrphanedDocuments(e,i))).next(f=>(u=Date.now(),zr()<=Ee.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:f})))}}function QA(t,e){return new KA(t,e)}/**
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
 */class YA{constructor(){this.changes=new Nr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?M.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JA{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&Ro(i.mutation,r,En.empty(),at.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,we()).next(()=>i))}getLocalViewOfDocuments(e,n,i=we()){const r=fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=_o();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=fr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,we()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=pi();const o=bo(),a=function(){return bo()}();return n.forEach((c,u)=>{const h=i.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Or)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ro(h.mutation,u,h.mutation.getFieldMask(),at.now())):o.set(u.key,En.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new XA(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const i=bo();let r=new st((o,a)=>o-a),s=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=i.get(c)||En.empty();h=a.applyToLocalView(u,h),i.set(c,h);const f=(r.get(a.batchId)||we()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=gy();h.forEach(g=>{if(!s.has(g)){const _=Ty(n.get(g),i.get(g));_!==null&&f.set(g,_),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return M.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,r){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,r):this.getDocumentsMatchingCollectionQuery(e,n,i,r)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):M.resolve(fr());let a=-1,c=s;return o.next(u=>M.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?M.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,we())).next(h=>({batchId:a,changes:py(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(i=>{let r=_o();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i,r){const s=n.collectionGroup;let o=_o();return this.indexManager.getCollectionParents(e,s).next(a=>M.forEach(a,c=>{const u=function(f,g){return new la(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,i,r).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s,r))).next(o=>{s.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ot.newInvalidDocument(h)))});let a=_o();return o.forEach((c,u)=>{const h=s.get(c);h!==void 0&&Ro(h.mutation,u,En.empty(),at.now()),Ic(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class ZA{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return M.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Bn(r.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(r){return{name:r.name,query:jA(r.bundledQuery),readTime:Bn(r.readTime)}}(n)),M.resolve()}}/**
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
 */class eS{constructor(){this.overlays=new st(se.comparator),this.Er=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const i=fr();return M.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.Tt(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.Er.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(i)),M.resolve()}getOverlaysForCollection(e,n,i){const r=fr(),s=n.length+1,o=new se(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>i&&r.set(c.getKey(),c)}return M.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new st((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let h=s.get(u.largestBatchId);h===null&&(h=fr(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=fr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return M.resolve(a)}Tt(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.Er.get(r.largestBatchId).delete(i.key);this.Er.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new vA(n,i));let s=this.Er.get(n);s===void 0&&(s=we(),this.Er.set(n,s)),this.Er.set(n,s.add(i.key))}}/**
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
 */class tS{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class bd{constructor(){this.dr=new lt(ht.Ar),this.Rr=new lt(ht.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const i=new ht(e,n);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.gr(new ht(e,n))}pr(e,n){e.forEach(i=>this.removeReference(i,n))}yr(e){const n=new se(new We([])),i=new ht(n,e),r=new ht(n,e+1),s=[];return this.Rr.forEachInRange([i,r],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new se(new We([])),i=new ht(n,e),r=new ht(n,e+1);let s=we();return this.Rr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ht(e,0),i=this.dr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ht{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return se.comparator(e.key,n.key)||Ie(e.br,n.br)}static Vr(e,n){return Ie(e.br,n.br)||se.comparator(e.key,n.key)}}/**
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
 */class nS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new lt(ht.Ar)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yA(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.vr=this.vr.add(new ht(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.Fr(i),s=r<0?0:r;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ht(n,0),r=new ht(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([i,r],o=>{const a=this.Cr(o.br);s.push(a)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new lt(Ie);return n.forEach(r=>{const s=new ht(r,0),o=new ht(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],a=>{i=i.add(a.br)})}),M.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;se.isDocumentKey(s)||(s=s.child(""));const o=new ht(new se(s),0);let a=new lt(Ie);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.br)),!0)},o),M.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(i=>{const r=this.Cr(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ve(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return M.forEach(n.mutations,r=>{const s=new ht(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,n){const i=new ht(n,0),r=this.vr.firstAfterOrEqual(i);return M.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class iS{constructor(e){this.Nr=e,this.docs=function(){return new st(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Nr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return M.resolve(i?i.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let i=pi();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Ot.newInvalidDocument(r))}),M.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=pi();const o=n.path,a=new se(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xC(DC(h),i)<=0||(r.has(h.key)||Ic(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,i,r){ue()}Lr(e,n){return M.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new rS(this)}getSize(e){return M.resolve(this.size)}}class rS extends YA{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.hr.addEntry(e,r)):this.hr.removeEntry(i)}),M.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class sS{constructor(e){this.persistence=e,this.Br=new Nr(n=>Td(n),wd),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.kr=0,this.qr=new bd,this.targetCount=0,this.Qr=ws.qn()}forEachTarget(e,n){return this.Br.forEach((i,r)=>n(r)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.kr&&(this.kr=n),M.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Un(n),M.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),M.waitFor(s).next(()=>r)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const i=this.Br.get(n)||null;return M.resolve(i)}addMatchingKeys(e,n,i){return this.qr.mr(n,i),M.resolve()}removeMatchingKeys(e,n,i){this.qr.pr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const i=this.qr.Sr(n);return M.resolve(i)}containsKey(e,n){return M.resolve(this.qr.containsKey(n))}}/**
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
 */class xy{constructor(e,n){this.Kr={},this.overlays={},this.$r=new vc(0),this.Ur=!1,this.Ur=!0,this.Wr=new tS,this.referenceDelegate=e(this),this.Gr=new sS(this),this.indexManager=new GA,this.remoteDocumentCache=function(r){return new iS(r)}(i=>this.referenceDelegate.zr(i)),this.serializer=new qA(n),this.jr=new ZA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Kr[e.toKey()];return i||(i=new nS(n,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,i){J("MemoryPersistence","Starting transaction:",e);const r=new oS(this.$r.next());return this.referenceDelegate.Hr(),i(r).next(s=>this.referenceDelegate.Jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Yr(e,n){return M.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,n)))}}class oS extends MC{constructor(e){super(),this.currentSequenceNumber=e}}class Rd{constructor(e){this.persistence=e,this.Zr=new bd,this.Xr=null}static ei(e){return new Rd(e)}get ti(){if(this.Xr)return this.Xr;throw ue()}addReference(e,n,i){return this.Zr.addReference(i,n),this.ti.delete(i.toString()),M.resolve()}removeReference(e,n,i){return this.Zr.removeReference(i,n),this.ti.add(i.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),M.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(r=>this.ti.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.ti.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ti,i=>{const r=se.fromPath(i);return this.ni(e,r).next(s=>{s||n.removeEntry(r,de.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(i=>{i?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return M.or([()=>M.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class xl{constructor(e,n){this.persistence=e,this.ri=new Nr(i=>UC(i.path),(i,r)=>i.isEqual(r)),this.garbageCollector=QA(this,n)}static ei(e,n){return new xl(e,n)}Hr(){}Jr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(r=>i+r))}nr(e){let n=0;return this.er(e,i=>{n++}).next(()=>n)}er(e,n){return M.forEach(this.ri,(i,r)=>this.ir(e,i,r).next(s=>s?M.resolve():n(r)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(i++,s.removeEntry(o,de.min()))})).next(()=>s.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.ri.set(i,e.currentSequenceNumber),M.resolve()}removeReference(e,n,i){return this.ri.set(i,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=rl(e.data.value)),n}ir(e,n,i){return M.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.ri.get(n);return M.resolve(r!==void 0&&r>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Pd{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Wi=i,this.Gi=r}static zi(e,n){let i=we(),r=we();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Pd(e,n.fromCache,i,r)}}/**
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
 */class aS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lS{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return t2()?8:VC(Ut())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,i,r){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,r,i).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new aS;return this.ts(e,n,o).next(a=>{if(s.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>s.result)}ns(e,n,i,r){return i.documentReadCount<this.Ji?(zr()<=Ee.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),M.resolve()):(zr()<=Ee.DEBUG&&J("QueryEngine","Query:",Kr(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Yi*r?(zr()<=Ee.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Un(n))):M.resolve())}Xi(e,n){if(yg(n))return M.resolve(null);let i=Un(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=dh(n,null,"F"),i=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=we(...s);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const u=this.rs(n,a);return this.ss(n,u,o,c.readTime)?this.Xi(e,dh(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,i,r){return yg(n)||r.isEqual(de.min())?M.resolve(null):this.Zi.getDocuments(e,i).next(s=>{const o=this.rs(n,s);return this.ss(n,o,i,r)?M.resolve(null):(zr()<=Ee.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kr(n)),this.os(e,o,n,OC(r,-1)).next(a=>a))})}rs(e,n){let i=new lt(dy(e));return n.forEach((r,s)=>{Ic(e,s)&&(i=i.add(s))}),i}ss(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ts(e,n,i){return zr()<=Ee.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.Zi.getDocumentsMatchingQuery(e,n,Wi.min(),i)}os(e,n,i,r){return this.Zi.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class cS{constructor(e,n,i,r){this.persistence=e,this._s=n,this.serializer=r,this.us=new st(Ie),this.cs=new Nr(s=>Td(s),wd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JA(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function uS(t,e,n,i){return new cS(t,e,n,i)}async function Ly(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let c=we();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(i,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function hS(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,g=f.keys();let _=M.resolve();return g.forEach(C=>{_=_.next(()=>h.getEntry(c,C)).next(k=>{const N=u.docVersions.get(C);Ve(N!==null),k.version.compareTo(N)<0&&(f.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let c=we();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function My(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function dS(t,e){const n=pe(t),i=e.snapshotVersion;let r=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});r=n.us;const a=[];e.targetChanges.forEach((h,f)=>{const g=r.get(f);if(!g)return;a.push(n.Gr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Gr.addMatchingKeys(s,h.addedDocuments,f)));let _=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(It.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,i)),r=r.insert(f,_),function(k,N,q){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(g,_,h)&&a.push(n.Gr.updateTargetData(s,_))});let c=pi(),u=we();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(fS(s,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!i.isEqual(de.min())){const h=n.Gr.getLastRemoteSnapshotVersion(s).next(f=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(h)}return M.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.us=r,s))}function fS(t,e,n){let i=we(),r=we();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=pi();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:r}})}function pS(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function gS(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Gr.getTargetData(i,e).next(s=>s?(r=s,M.resolve(r)):n.Gr.allocateTargetId(i).next(o=>(r=new Li(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.Gr.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.us.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.us=n.us.insert(i.targetId,i),n.cs.set(e,i.targetId)),i})}async function _h(t,e,n){const i=pe(t),r=i.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ms(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.us=i.us.remove(e),i.cs.delete(r.target)}function kg(t,e,n){const i=pe(t);let r=de.min(),s=we();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=pe(c),g=f.cs.get(h);return g!==void 0?M.resolve(f.us.get(g)):f.Gr.getTargetData(u,h)}(i,o,Un(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>i._s.getDocumentsMatchingQuery(o,e,n?r:de.min(),n?s:we())).next(a=>(mS(i,iA(e),a),{documents:a,ds:s})))}function mS(t,e,n){let i=t.ls.get(e)||de.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.ls.set(e,i)}class Ng{constructor(){this.activeTargetIds=cA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _S{constructor(){this._o=new Ng,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,i){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Ng,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yS{uo(e){}shutdown(){}}/**
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
 */class Og{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wa=null;function Iu(){return Wa===null?Wa=function(){return 268435456+Math.round(2147483648*Math.random())}():Wa++,"0x"+Wa.toString(16)}/**
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
 */const vS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ES{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Rt="WebChannelConnection";class TS extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+n.host,this.Mo=`projects/${r}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Oo(n,i,r,s,o){const a=Iu(),c=this.No(n,i.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,s,o),this.Bo(n,c,u,r).then(h=>(J("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw ys("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}ko(n,i,r,s,o,a){return this.Oo(n,i,r,s,o)}Lo(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>n[o]=s),r&&r.headers.forEach((s,o)=>n[o]=s)}No(n,i){const r=vS[n];return`${this.Fo}/v1/${i}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,i,r){const s=Iu();return new Promise((o,a)=>{const c=new z0;c.setWithCredentials(!0),c.listenOnce(K0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case il.NO_ERROR:const h=c.getResponseJson();J(Rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case il.TIMEOUT:J(Rt,`RPC '${e}' ${s} timed out`),a(new te(U.DEADLINE_EXCEEDED,"Request time out"));break;case il.HTTP_ERROR:const f=c.getStatus();if(J(Rt,`RPC '${e}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const C=function(N){const q=N.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(q)>=0?q:U.UNKNOWN}(_.status);a(new te(C,_.message))}else a(new te(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new te(U.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{J(Rt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(r);J(Rt,`RPC '${e}' ${s} sending request:`,r),c.send(n,"POST",u,i,15)})}qo(e,n,i){const r=Iu(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=X0(),a=Y0(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const h=s.join("");J(Rt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);let g=!1,_=!1;const C=new ES({Eo:N=>{_?J(Rt,`Not sending because RPC '${e}' stream ${r} is closed:`,N):(g||(J(Rt,`Opening RPC '${e}' stream ${r} transport.`),f.open(),g=!0),J(Rt,`RPC '${e}' stream ${r} sending:`,N),f.send(N))},Ao:()=>f.close()}),k=(N,q,V)=>{N.listen(q,B=>{try{V(B)}catch($){setTimeout(()=>{throw $},0)}})};return k(f,mo.EventType.OPEN,()=>{_||(J(Rt,`RPC '${e}' stream ${r} transport opened.`),C.So())}),k(f,mo.EventType.CLOSE,()=>{_||(_=!0,J(Rt,`RPC '${e}' stream ${r} transport closed`),C.Do())}),k(f,mo.EventType.ERROR,N=>{_||(_=!0,ys(Rt,`RPC '${e}' stream ${r} transport errored:`,N),C.Do(new te(U.UNAVAILABLE,"The operation could not be completed")))}),k(f,mo.EventType.MESSAGE,N=>{var q;if(!_){const V=N.data[0];Ve(!!V);const B=V,$=(B==null?void 0:B.error)||((q=B[0])===null||q===void 0?void 0:q.error);if($){J(Rt,`RPC '${e}' stream ${r} received error:`,$);const ee=$.status;let re=function(T){const A=nt[T];if(A!==void 0)return Cy(A)}(ee),I=$.message;re===void 0&&(re=U.INTERNAL,I="Unknown error status: "+ee+" with message "+$.message),_=!0,C.Do(new te(re,I)),f.close()}else J(Rt,`RPC '${e}' stream ${r} received:`,V),C.vo(V)}}),k(a,Q0.STAT_EVENT,N=>{N.stat===sh.PROXY?J(Rt,`RPC '${e}' stream ${r} detected buffering proxy`):N.stat===sh.NOPROXY&&J(Rt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{C.bo()},0),C}}function Cu(){return typeof document<"u"?document:null}/**
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
 */function bc(t){return new RA(t,!0)}/**
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
 */class Vy{constructor(e,n,i=1e3,r=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=i,this.Ko=r,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),r=Math.max(0,n-i);r>0&&J("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Fy{constructor(e,n,i,r,s,o,a,c){this.li=e,this.Yo=i,this.Zo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Vy(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(fi(n.toString()),fi("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Xo===n&&this.I_(i,r)},i=>{e(()=>{const r=new te(U.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(r)})})}I_(e,n){const i=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{i(()=>this.E_(r))}),this.stream.onMessage(r=>{i(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wS extends Fy{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=NA(this.serializer,e),i=function(s){if(!("targetChange"in s))return de.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Bn(o.readTime):de.min()}(e);return this.listener.R_(n,i)}V_(e){const n={};n.database=mh(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=uh(c)?{documents:xA(s,c)}:{query:LA(s,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=by(s,o.resumeToken);const u=fh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){a.readTime=Dl(s,o.snapshotVersion.toTimestamp());const u=fh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const i=VA(this.serializer,e);i&&(n.labels=i),this.c_(n)}m_(e){const n={};n.database=mh(this.serializer),n.removeTarget=e,this.c_(n)}}class IS extends Fy{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=DA(e.writeResults,e.commitTime),i=Bn(e.commitTime);return this.listener.y_(i,n)}w_(){const e={};e.database=mh(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>OA(this.serializer,i))};this.c_(n)}}/**
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
 */class CS extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,i,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,ph(n,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new te(U.UNKNOWN,s.toString())})}ko(e,n,i,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,ph(n,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(U.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class AS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(fi(n),this.C_=!1):J("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class SS{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{i.enqueueAndForget(async()=>{Dr(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=pe(c);u.k_.add(4),await ha(u),u.K_.set("Unknown"),u.k_.delete(4),await Rc(u)}(this))})}),this.K_=new AS(i,r)}}async function Rc(t){if(Dr(t))for(const e of t.q_)await e(!0)}async function ha(t){for(const e of t.q_)await e(!1)}function Uy(t,e){const n=pe(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Dd(n)?Od(n):Vs(n).s_()&&Nd(n,e))}function kd(t,e){const n=pe(t),i=Vs(n);n.B_.delete(e),i.s_()&&By(n,e),n.B_.size===0&&(i.s_()?i.a_():Dr(n)&&n.K_.set("Unknown"))}function Nd(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).V_(e)}function By(t,e){t.U_.xe(e),Vs(t).m_(e)}function Od(t){t.U_=new CA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.K_.F_()}function Dd(t){return Dr(t)&&!Vs(t).i_()&&t.B_.size>0}function Dr(t){return pe(t).k_.size===0}function $y(t){t.U_=void 0}async function bS(t){t.K_.set("Online")}async function RS(t){t.B_.forEach((e,n)=>{Nd(t,e)})}async function PS(t,e){$y(t),Dd(t)?(t.K_.O_(e),Od(t)):t.K_.set("Unknown")}async function kS(t,e,n){if(t.K_.set("Online"),e instanceof Sy&&e.state===2&&e.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.B_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.B_.delete(a),r.U_.removeTarget(a))}(t,e)}catch(i){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ll(t,i)}else if(e instanceof al?t.U_.$e(e):e instanceof Ay?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(de.min()))try{const i=await My(t.localStore);n.compareTo(i)>=0&&await function(s,o){const a=s.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.B_.get(u);h&&s.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=s.B_.get(c);if(!h)return;s.B_.set(c,h.withResumeToken(It.EMPTY_BYTE_STRING,h.snapshotVersion)),By(s,c);const f=new Li(h.target,c,u,h.sequenceNumber);Nd(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){J("RemoteStore","Failed to raise snapshot:",i),await Ll(t,i)}}async function Ll(t,e,n){if(!Ms(e))throw e;t.k_.add(1),await ha(t),t.K_.set("Offline"),n||(n=()=>My(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Rc(t)})}function qy(t,e){return e().catch(n=>Ll(t,n,e))}async function Pc(t){const e=pe(t),n=Yi(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;NS(e);)try{const r=await pS(e.localStore,i);if(r===null){e.L_.length===0&&n.a_();break}i=r.batchId,OS(e,r)}catch(r){await Ll(e,r)}jy(e)&&Gy(e)}function NS(t){return Dr(t)&&t.L_.length<10}function OS(t,e){t.L_.push(e);const n=Yi(t);n.s_()&&n.f_&&n.g_(e.mutations)}function jy(t){return Dr(t)&&!Yi(t).i_()&&t.L_.length>0}function Gy(t){Yi(t).start()}async function DS(t){Yi(t).w_()}async function xS(t){const e=Yi(t);for(const n of t.L_)e.g_(n.mutations)}async function LS(t,e,n){const i=t.L_.shift(),r=Cd.from(i,e,n);await qy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Pc(t)}async function MS(t,e){e&&Yi(t).f_&&await async function(i,r){if(function(o){return TA(o)&&o!==U.ABORTED}(r.code)){const s=i.L_.shift();Yi(i).__(),await qy(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Pc(i)}}(t,e),jy(t)&&Gy(t)}async function Dg(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const i=Dr(n);n.k_.add(3),await ha(n),i&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Rc(n)}async function VS(t,e){const n=pe(t);e?(n.k_.delete(2),await Rc(n)):e||(n.k_.add(2),await ha(n),n.K_.set("Unknown"))}function Vs(t){return t.W_||(t.W_=function(n,i,r){const s=pe(n);return s.b_(),new wS(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Ro:bS.bind(null,t),mo:RS.bind(null,t),po:PS.bind(null,t),R_:kS.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Dd(t)?Od(t):t.K_.set("Unknown")):(await t.W_.stop(),$y(t))})),t.W_}function Yi(t){return t.G_||(t.G_=function(n,i,r){const s=pe(n);return s.b_(),new IS(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:DS.bind(null,t),po:MS.bind(null,t),p_:xS.bind(null,t),y_:LS.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Pc(t)):(await t.G_.stop(),t.L_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class xd{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new xd(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ld(t,e){if(fi("AsyncQueue",`${e}: ${t}`),Ms(t))return new te(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class cs{static emptySet(e){return new cs(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||se.comparator(n.key,i.key):(n,i)=>se.comparator(n.key,i.key),this.keyedMap=_o(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new cs;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class xg{constructor(){this.z_=new st(se.comparator)}track(e){const n=e.doc.key,i=this.z_.get(n);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(n,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(n):e.type===1&&i.type===2?this.z_=this.z_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):ue():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,i)=>{e.push(i)}),e}}class Is{constructor(e,n,i,r,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Is(e,n,cs.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class FS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class US{constructor(){this.queries=Lg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,i){const r=pe(n),s=r.queries;r.queries=Lg(),s.forEach((o,a)=>{for(const c of a.J_)c.onError(i)})})(this,new te(U.ABORTED,"Firestore shutting down"))}}function Lg(){return new Nr(t=>hy(t),wc)}async function BS(t,e){const n=pe(t);let i=3;const r=e.query;let s=n.queries.get(r);s?!s.Y_()&&e.Z_()&&(i=2):(s=new FS,i=e.Z_()?0:1);try{switch(i){case 0:s.H_=await n.onListen(r,!0);break;case 1:s.H_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=Ld(o,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&Md(n)}async function $S(t,e){const n=pe(t),i=e.query;let r=3;const s=n.queries.get(i);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?r=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function qS(t,e){const n=pe(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.J_)a.ta(r)&&(i=!0);o.H_=r}}i&&Md(n)}function jS(t,e,n){const i=pe(t),r=i.queries.get(e);if(r)for(const s of r.J_)s.onError(n);i.queries.delete(e)}function Md(t){t.X_.forEach(e=>{e.next()})}var yh,Mg;(Mg=yh||(yh={})).na="default",Mg.Cache="cache";class GS{constructor(e,n,i){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Is(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const i=n!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==yh.Cache}}/**
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
 */class Hy{constructor(e){this.key=e}}class Wy{constructor(e){this.key=e}}class HS{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=we(),this.mutatedKeys=we(),this.Va=dy(e),this.ma=new cs(this.Va)}get fa(){return this.da}ga(e,n){const i=n?n.pa:new xg,r=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,f)=>{const g=r.get(h),_=Ic(this.query,f)?f:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;g&&_?g.data.isEqual(_.data)?C!==k&&(i.track({type:3,doc:_}),N=!0):this.ya(g,_)||(i.track({type:2,doc:_}),N=!0,(c&&this.Va(_,c)>0||u&&this.Va(_,u)<0)&&(a=!0)):!g&&_?(i.track({type:0,doc:_}),N=!0):g&&!_&&(i.track({type:1,doc:g}),N=!0,(c||u)&&(a=!0)),N&&(_?(o=o.add(_),s=k?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),i.track({type:1,doc:h})}return{ma:o,pa:i,ss:a,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,r){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(_,C){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return k(_)-k(C)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(i),r=r!=null&&r;const a=n&&!r?this.Sa():[],c=this.Ra.size===0&&this.current&&!r?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Is(this.query,e.ma,s,o,e.mutatedKeys,c===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new xg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=we(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const n=[];return e.forEach(i=>{this.Ra.has(i)||n.push(new Wy(i))}),this.Ra.forEach(i=>{e.has(i)||n.push(new Hy(i))}),n}va(e){this.da=e.ds,this.Ra=we();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Is.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class WS{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class zS{constructor(e){this.key=e,this.Fa=!1}}class KS{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Nr(a=>hy(a),wc),this.Oa=new Map,this.Na=new Set,this.La=new st(se.comparator),this.Ba=new Map,this.ka=new bd,this.qa={},this.Qa=new Map,this.Ka=ws.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function QS(t,e,n=!0){const i=Jy(t);let r;const s=i.xa.get(e);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Ca()):r=await zy(i,e,n,!0),r}async function YS(t,e){const n=Jy(t);await zy(n,e,!0,!1)}async function zy(t,e,n,i){const r=await gS(t.localStore,Un(e)),s=r.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return i&&(a=await XS(t,e,s,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&Uy(t.remoteStore,r),a}async function XS(t,e,n,i,r){t.Ua=(f,g,_)=>async function(k,N,q,V){let B=N.view.ga(q);B.ss&&(B=await kg(k.localStore,N.query,!1).then(({documents:I})=>N.view.ga(I,B)));const $=V&&V.targetChanges.get(N.targetId),ee=V&&V.targetMismatches.get(N.targetId)!=null,re=N.view.applyChanges(B,k.isPrimaryClient,$,ee);return Fg(k,N.targetId,re.ba),re.snapshot}(t,f,g,_);const s=await kg(t.localStore,e,!0),o=new HS(e,s.ds),a=o.ga(s.documents),c=ua.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Fg(t,n,u.ba);const h=new WS(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function JS(t,e,n){const i=pe(t),r=i.xa.get(e),s=i.Oa.get(r.targetId);if(s.length>1)return i.Oa.set(r.targetId,s.filter(o=>!wc(o,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await _h(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),n&&kd(i.remoteStore,r.targetId),vh(i,r.targetId)}).catch(Ls)):(vh(i,r.targetId),await _h(i.localStore,r.targetId,!0))}async function ZS(t,e){const n=pe(t),i=n.xa.get(e),r=n.Oa.get(i.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),kd(n.remoteStore,i.targetId))}async function eb(t,e,n){const i=ab(t);try{const r=await function(o,a){const c=pe(o),u=at.now(),h=a.reduce((_,C)=>_.add(C.key),we());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=pi(),k=we();return c.hs.getEntries(_,h).next(N=>{C=N,C.forEach((q,V)=>{V.isValidDocument()||(k=k.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,C)).next(N=>{f=N;const q=[];for(const V of a){const B=mA(V,f.get(V.key).overlayedDocument);B!=null&&q.push(new Or(V.key,B,ny(B.value.mapValue),ci.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,q,a)}).next(N=>{g=N;const q=N.applyToLocalDocumentSet(f,k);return c.documentOverlayCache.saveOverlays(_,N.batchId,q)})}).then(()=>({batchId:g.batchId,changes:py(f)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new st(Ie)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(i,r.batchId,n),await da(i,r.changes),await Pc(i.remoteStore)}catch(r){const s=Ld(r,"Failed to persist write");n.reject(s)}}async function Ky(t,e){const n=pe(t);try{const i=await dS(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.Ba.get(s);o&&(Ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Fa=!0:r.modifiedDocuments.size>0?Ve(o.Fa):r.removedDocuments.size>0&&(Ve(o.Fa),o.Fa=!1))}),await da(n,i,e)}catch(i){await Ls(i)}}function Vg(t,e,n){const i=pe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.xa.forEach((s,o)=>{const a=o.view.ea(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=pe(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const g of f.J_)g.ea(a)&&(u=!0)}),u&&Md(c)}(i.eventManager,e),r.length&&i.Ma.R_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function tb(t,e,n){const i=pe(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Ba.get(e),s=r&&r.key;if(s){let o=new st(se.comparator);o=o.insert(s,Ot.newNoDocument(s,de.min()));const a=we().add(s),c=new Sc(de.min(),new Map,new st(Ie),o,a);await Ky(i,c),i.La=i.La.remove(s),i.Ba.delete(e),Vd(i)}else await _h(i.localStore,e,!1).then(()=>vh(i,e,n)).catch(Ls)}async function nb(t,e){const n=pe(t),i=e.batch.batchId;try{const r=await hS(n.localStore,e);Yy(n,i,null),Qy(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await da(n,r)}catch(r){await Ls(r)}}async function ib(t,e,n){const i=pe(t);try{const r=await function(o,a){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Ve(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(i.localStore,e);Yy(i,e,n),Qy(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await da(i,r)}catch(r){await Ls(r)}}function Qy(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function Yy(t,e,n){const i=pe(t);let r=i.qa[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.qa[i.currentUser.toKey()]=r}}function vh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Oa.get(e))t.xa.delete(i),n&&t.Ma.Wa(i,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(i=>{t.ka.containsKey(i)||Xy(t,i)})}function Xy(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(kd(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Vd(t))}function Fg(t,e,n){for(const i of n)i instanceof Hy?(t.ka.addReference(i.key,e),rb(t,i)):i instanceof Wy?(J("SyncEngine","Document no longer in limbo: "+i.key),t.ka.removeReference(i.key,e),t.ka.containsKey(i.key)||Xy(t,i.key)):ue()}function rb(t,e){const n=e.key,i=n.path.canonicalString();t.La.get(n)||t.Na.has(i)||(J("SyncEngine","New document in limbo: "+n),t.Na.add(i),Vd(t))}function Vd(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new se(We.fromString(e)),i=t.Ka.next();t.Ba.set(i,new zS(n)),t.La=t.La.insert(n,i),Uy(t.remoteStore,new Li(Un(cy(n.path)),i,"TargetPurposeLimboResolution",vc.oe))}}async function da(t,e,n){const i=pe(t),r=[],s=[],o=[];i.xa.isEmpty()||(i.xa.forEach((a,c)=>{o.push(i.Ua(c,e,n).then(u=>{var h;if((u||n)&&i.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;i.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=Pd.zi(c.targetId,u);s.push(f)}}))}),await Promise.all(o),i.Ma.R_(r),await async function(c,u){const h=pe(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(u,g=>M.forEach(g.Wi,_=>h.persistence.referenceDelegate.addReference(f,g.targetId,_)).next(()=>M.forEach(g.Gi,_=>h.persistence.referenceDelegate.removeReference(f,g.targetId,_)))))}catch(f){if(!Ms(f))throw f;J("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const _=h.us.get(g),C=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(C);h.us=h.us.insert(g,k)}}}(i.localStore,s))}async function sb(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const i=await Ly(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(a=>{a.forEach(c=>{c.reject(new te(U.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await da(n,i.Ts)}}function ob(t,e){const n=pe(t),i=n.Ba.get(e);if(i&&i.Fa)return we().add(i.key);{let r=we();const s=n.Oa.get(e);if(!s)return r;for(const o of s){const a=n.xa.get(o);r=r.unionWith(a.view.fa)}return r}}function Jy(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ky.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ob.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tb.bind(null,e),e.Ma.R_=qS.bind(null,e.eventManager),e.Ma.Wa=jS.bind(null,e.eventManager),e}function ab(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ib.bind(null,e),e}class Ml{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return uS(this.persistence,new lS,e.initialUser,this.serializer)}ja(e){return new xy(Rd.ei,this.serializer)}za(e){return new _S}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ml.provider={build:()=>new Ml};class lb extends Ml{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ve(this.persistence.referenceDelegate instanceof xl);const i=this.persistence.referenceDelegate.garbageCollector;return new zA(i,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new xy(i=>xl.ei(i,n),this.serializer)}}class Eh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Vg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=sb.bind(null,this.syncEngine),await VS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new US}()}createDatastore(e){const n=bc(e.databaseInfo.databaseId),i=function(s){return new TS(s)}(e.databaseInfo);return function(s,o,a,c){return new CS(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,r,s,o,a){return new SS(i,r,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Vg(this.syncEngine,n,0),function(){return Og.p()?new Og:new yS}())}createSyncEngine(e,n){return function(r,s,o,a,c,u,h){const f=new KS(r,s,o,a,c,u);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const s=pe(r);J("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await ha(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Eh.provider={build:()=>new Eh};/**
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
 */class cb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):fi("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ub{constructor(e,n,i,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=Pt.UNAUTHENTICATED,this.clientId=Z0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Ld(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Au(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await Ly(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ug(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hb(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>Dg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Dg(e.remoteStore,r)),t._onlineComponents=e}async function hb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Au(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===U.FAILED_PRECONDITION||r.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;ys("Error using user provided cache. Falling back to memory cache: "+n),await Au(t,new Ml)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Au(t,new lb(void 0));return t._offlineComponents}async function Zy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await Ug(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await Ug(t,new Eh))),t._onlineComponents}function db(t){return Zy(t).then(e=>e.syncEngine)}async function fb(t){const e=await Zy(t),n=e.eventManager;return n.onListen=QS.bind(null,e.syncEngine),n.onUnlisten=JS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=YS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZS.bind(null,e.syncEngine),n}function pb(t,e,n={}){const i=new Ui;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new cb({next:g=>{h.eu(),o.enqueueAndForget(()=>$S(s,f)),g.fromCache&&c.source==="server"?u.reject(new te(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new GS(a,h,{includeMetadataChanges:!0,ua:!0});return BS(s,f)}(await fb(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function ev(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Bg=new Map;/**
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
 */function tv(t,e,n){if(!n)throw new te(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gb(t,e,n,i){if(e===!0&&i===!0)throw new te(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $g(t){if(!se.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qg(t){if(se.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Vl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kc(t);throw new te(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class jg{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new te(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ev((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nc{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jg(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new IC;switch(i.type){case"firstParty":return new bC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new te(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Bg.get(n);i&&(J("ComponentProvider","Removing Datastore"),Bg.delete(n),i.terminate())}(this),Promise.resolve()}}function mb(t,e,n,i={}){var r;const s=(t=Vl(t,Nc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=Pt.MOCK_USER;else{a=Y1(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new te(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Pt(u)}t._authCredentials=new CC(new J0(a,c))}}/**
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
 */class Fs{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Fs(this.firestore,e,this._query)}}class fn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class $i extends Fs{constructor(e,n,i){super(e,n,cy(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new se(e))}withConverter(e){return new $i(this.firestore,e,this._path)}}function nv(t,e,...n){if(t=Bt(t),tv("collection","path",e),t instanceof Nc){const i=We.fromString(e,...n);return qg(i),new $i(t,null,i)}{if(!(t instanceof fn||t instanceof $i))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(We.fromString(e,...n));return qg(i),new $i(t.firestore,null,i)}}function _b(t,e,...n){if(t=Bt(t),arguments.length===1&&(e=Z0.newId()),tv("doc","path",e),t instanceof Nc){const i=We.fromString(e,...n);return $g(i),new fn(t,null,new se(i))}{if(!(t instanceof fn||t instanceof $i))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(We.fromString(e,...n));return $g(i),new fn(t.firestore,t instanceof $i?t.converter:null,new se(i))}}/**
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
 */class Gg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Vy(this,"async_queue_retry"),this.fu=()=>{const i=Cu();i&&J("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const n=Cu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Cu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Ui;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ms(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw fi("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ru=!1,i))));return this.gu=n,n}enqueueAfterDelay(e,n,i){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const r=xd.createAndSchedule(this,e,n,i,s=>this.Su(s));return this.du.push(r),r}pu(){this.Au&&ue()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Fd extends Nc{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new Gg,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gg(e),this._firestoreClient=void 0,await e}}}function yb(t,e){const n=typeof t=="object"?t:j0(),i=typeof t=="string"?t:"(default)",r=_d(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Q1("firestore");s&&mb(r,...s)}return r}function iv(t){if(t._terminated)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||vb(t),t._firestoreClient}function vb(t){var e,n,i;const r=t._freezeSettings(),s=function(a,c,u,h){return new qC(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ev(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new ub(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cs(It.fromBase64String(e))}catch(n){throw new te(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cs(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ud{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rv{constructor(e){this._methodName=e}}/**
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
 */class Bd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */class $d{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const Eb=/^__.*__$/;class Tb{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}function sv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class qd{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new qd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.xu({path:i,Nu:!1});return r.Lu(e),r}Bu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.xu({path:i,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Fl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(sv(this.Mu)&&Eb.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class wb{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||bc(e)}$u(e,n,i,r=!1){return new qd({Mu:e,methodName:n,Ku:i,path:wt.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ov(t){const e=t._freezeSettings(),n=bc(t._databaseId);return new wb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ib(t,e,n,i,r,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,r);cv("Data must be an object, but it was:",o,i);const a=av(i,o);let c,u;if(s.merge)c=new En(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const g=Ab(e,f,n);if(!o.contains(g))throw new te(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);bb(h,g)||h.push(g)}c=new En(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new Tb(new un(a),c,u)}function Cb(t,e,n,i=!1){return jd(n,t.$u(i?4:3,e))}function jd(t,e){if(lv(t=Bt(t)))return cv("Unsupported field value:",e,t),av(t,e);if(t instanceof rv)return function(i,r){if(!sv(r.Mu))throw r.qu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const a of i){let c=jd(a,r.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(i,r){if((i=Bt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return uA(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=at.fromDate(i);return{timestampValue:Dl(r.serializer,s)}}if(i instanceof at){const s=new at(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Dl(r.serializer,s)}}if(i instanceof Bd)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Cs)return{bytesValue:by(r.serializer,i._byteString)};if(i instanceof fn){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sd(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof $d)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return Id(a.serializer,c)})}}}}}}(i,r);throw r.qu(`Unsupported field value: ${kc(i)}`)}(t,e)}function av(t,e){const n={};return ey(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,(i,r)=>{const s=jd(r,e.Ou(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function lv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof Bd||t instanceof Cs||t instanceof fn||t instanceof rv||t instanceof $d)}function cv(t,e,n){if(!lv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=kc(n);throw i==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+i)}}function Ab(t,e,n){if((e=Bt(e))instanceof Ud)return e._internalPath;if(typeof e=="string")return uv(t,e);throw Fl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Sb=new RegExp("[~\\*/\\[\\]]");function uv(t,e,n){if(e.search(Sb)>=0)throw Fl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ud(...e.split("."))._internalPath}catch{throw Fl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fl(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new te(U.INVALID_ARGUMENT,a+t+c)}function bb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class hv{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Rb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Rb extends hv{data(){return super.data()}}function dv(t,e){return typeof e=="string"?uv(t,e):e instanceof Ud?e._internalPath:e._delegate._internalPath}/**
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
 */function Pb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gd{}class kb extends Gd{}function Nb(t,e,...n){let i=[];e instanceof Gd&&i.push(e),i=i.concat(n),function(s){const o=s.filter(c=>c instanceof Wd).length,a=s.filter(c=>c instanceof Hd).length;if(o>1||o>0&&a>0)throw new te(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)t=r._apply(t);return t}class Hd extends kb{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Hd(e,n,i)}_apply(e){const n=this._parse(e);return fv(e._query,n),new Fs(e.firestore,e.converter,hh(e._query,n))}_parse(e){const n=ov(e.firestore);return function(s,o,a,c,u,h,f){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new te(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Wg(f,h);const _=[];for(const C of f)_.push(Hg(c,s,C));g={arrayValue:{values:_}}}else g=Hg(c,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Wg(f,h),g=Cb(a,o,f,h==="in"||h==="not-in");return it.create(u,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Wd extends Gd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Wd(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let o=r;const a=s.getFlattenedFilters();for(const c of a)fv(o,c),o=hh(o,c)}(e._query,n),new Fs(e.firestore,e.converter,hh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Hg(t,e,n){if(typeof(n=Bt(n))=="string"){if(n==="")throw new te(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uy(e)&&n.indexOf("/")!==-1)throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(We.fromString(n));if(!se.isDocumentKey(i))throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return dg(t,new se(i))}if(n instanceof fn)return dg(t,n._key);throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kc(n)}.`)}function Wg(t,e){if(!Array.isArray(t)||t.length===0)throw new te(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fv(t,e){const n=function(r,s){for(const o of r)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Ob{convertValue(e,n="none"){switch(Qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return kr(e,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(e){var n,i,r;const s=(r=(i=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(o=>et(o.doubleValue));return new $d(s)}convertGeoPoint(e){return new Bd(et(e.latitude),et(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Tc(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(zo(e));default:return null}}convertTimestamp(e){const n=zi(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=We.fromString(e);Ve(Dy(i));const r=new Ko(i.get(1),i.get(3)),s=new se(i.popFirst(5));return r.isEqual(n)||fi(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Db(t,e,n){let i;return i=t?t.toFirestore(e):e,i}/**
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
 */class za{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xb extends hv{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ll(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(dv("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class ll extends xb{data(e={}){return super.data(e)}}class Lb{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new za(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new ll(this._firestore,this._userDataWriter,i.key,i,new za(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new ll(r._firestore,r._userDataWriter,a.doc.key,a.doc,new za(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new ll(r._firestore,r._userDataWriter,a.doc.key,a.doc,new za(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Mb(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Mb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}class Vb extends Ob{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new fn(this.firestore,null,n)}}function Fb(t){t=Vl(t,Fs);const e=Vl(t.firestore,Fd),n=iv(e),i=new Vb(e);return Pb(t._query),pb(n,t._query).then(r=>new Lb(e,i,t,r))}function Ub(t,e){const n=Vl(t.firestore,Fd),i=_b(t),r=Db(t.converter,e);return Bb(n,[Ib(ov(t.firestore),"addDoc",i._key,r,t.converter!==null,{}).toMutation(i._key,ci.exists(!1))]).then(()=>i)}function Bb(t,e){return function(i,r){const s=new Ui;return i.asyncQueue.enqueueAndForget(async()=>eb(await db(i),r,s)),s.promise}(iv(t),e)}(function(e,n=!0){(function(r){xs=r})(er),Gn(new An("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new Fd(new AC(i.getProvider("auth-internal")),new PC(i.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(u.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),rn(og,"4.7.5",e),rn(og,"4.7.5","esm2017")})();function zd(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function pv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $b=pv,gv=new Os("auth","Firebase",pv());/**
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
 */const Ul=new aa("@firebase/auth");function qb(t,...e){Ul.logLevel<=Ee.WARN&&Ul.warn(`Auth (${er}): ${t}`,...e)}function cl(t,...e){Ul.logLevel<=Ee.ERROR&&Ul.error(`Auth (${er}): ${t}`,...e)}/**
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
 */function bn(t,...e){throw Kd(t,...e)}function $n(t,...e){return Kd(t,...e)}function mv(t,e,n){const i=Object.assign(Object.assign({},$b()),{[e]:n});return new Os("auth","Firebase",i).create(e,{appName:t.name})}function ui(t){return mv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return gv.create(t,...e)}function ce(t,e,...n){if(!t)throw Kd(e,...n)}function ri(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cl(e),new Error(e)}function gi(t,e){t||ri(e)}/**
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
 */function Th(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jb(){return zg()==="http:"||zg()==="https:"}function zg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Gb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jb()||Z1()||"connection"in navigator)?navigator.onLine:!0}function Hb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,gi(n>e,"Short delay should be less than long delay!"),this.isMobile=gd()||M0()}get(){return Gb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qd(t,e){gi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _v{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ri("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ri("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ri("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Wb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zb=new fa(3e4,6e4);function tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,i,r={}){return yv(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Ds(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},s);return J1()||(u.referrerPolicy="no-referrer"),_v.fetch()(vv(t,t.config.apiHost,n,a),u)})}async function yv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Wb),e);try{const r=new Qb(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ka(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ka(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ka(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ka(t,"user-disabled",o);const h=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mv(t,h,u);bn(t,h)}}catch(r){if(r instanceof Qn)throw r;bn(t,"network-request-failed",{message:String(r)})}}async function pa(t,e,n,i,r={}){const s=await nr(t,e,n,i,r);return"mfaPendingCredential"in s&&bn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function vv(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Qd(t.config,r):`${t.config.apiScheme}://${r}`}function Kb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i($n(this.auth,"network-request-failed")),zb.get())})}}function Ka(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=$n(t,e,i);return r.customData._tokenResponse=n,r}function Kg(t){return t!==void 0&&t.enterprise!==void 0}class Yb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Kb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Xb(t,e){return nr(t,"GET","/v2/recaptchaConfig",tr(t,e))}/**
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
 */async function Jb(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function Ev(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zb(t,e=!1){const n=Bt(t),i=await n.getIdToken(e),r=Yd(i);ce(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Po(Su(r.auth_time)),issuedAtTime:Po(Su(r.iat)),expirationTime:Po(Su(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Su(t){return Number(t)*1e3}function Yd(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return cl("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cl(n);return r?JSON.parse(r):(cl("Failed to decode base64 JWT payload"),null)}catch(r){return cl("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Qg(t){const e=Yd(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jo(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Qn&&eR(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function eR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Po(this.lastLoginAt),this.creationTime=Po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bl(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Jo(t,Ev(n,{idToken:i}));ce(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Tv(s.providerUserInfo):[],a=iR(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function nR(t){const e=Bt(t);await Bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iR(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Tv(t){return t.map(e=>{var{providerId:n}=e,i=zd(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function rR(t,e){const n=await yv(t,{},async()=>{const i=Ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=vv(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_v.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sR(t,e){return nr(t,"POST","/v2/accounts:revokeToken",tr(t,e))}/**
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
 */class us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Qg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await rR(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new us;return i&&(ce(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(ce(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(ce(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new us,this.toJSON())}_performRefresh(){return ri("not implemented")}}/**
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
 */function Ai(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class si{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=zd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Jo(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zb(this,e)}reload(){return nR(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new si(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Bl(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(ui(this.auth));const e=await this.getIdToken();return await Jo(this,Jb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,u,h;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,g=(r=n.email)!==null&&r!==void 0?r:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:B,emailVerified:$,isAnonymous:ee,providerData:re,stsTokenManager:I}=n;ce(B&&I,e,"internal-error");const y=us.fromJSON(this.name,I);ce(typeof B=="string",e,"internal-error"),Ai(f,e.name),Ai(g,e.name),ce(typeof $=="boolean",e,"internal-error"),ce(typeof ee=="boolean",e,"internal-error"),Ai(_,e.name),Ai(C,e.name),Ai(k,e.name),Ai(N,e.name),Ai(q,e.name),Ai(V,e.name);const T=new si({uid:B,auth:e,email:g,emailVerified:$,displayName:f,isAnonymous:ee,photoURL:C,phoneNumber:_,tenantId:k,stsTokenManager:y,createdAt:q,lastLoginAt:V});return re&&Array.isArray(re)&&(T.providerData=re.map(A=>Object.assign({},A))),N&&(T._redirectEventId=N),T}static async _fromIdTokenResponse(e,n,i=!1){const r=new us;r.updateFromServerResponse(n);const s=new si({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Bl(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];ce(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Tv(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new us;a.updateFromIdToken(i);const c=new si({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new wh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
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
 */const Yg=new Map;function oi(t){gi(t instanceof Function,"Expected a class definition");let e=Yg.get(t);return e?(gi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yg.set(t,e),e)}/**
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
 */class wv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wv.type="NONE";const Xg=wv;/**
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
 */function ul(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=ul(this.userKey,r.apiKey,s),this.fullPersistenceKey=ul("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?si._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new hs(oi(Xg),e,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||oi(Xg);const o=ul(i,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=si._fromJSON(e,h);u!==s&&(a=f),s=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new hs(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new hs(s,e,i))}}/**
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
 */function Jg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Iv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rv(e))return"Blackberry";if(Pv(e))return"Webos";if(Cv(e))return"Safari";if((e.includes("chrome/")||Av(e))&&!e.includes("edge/"))return"Chrome";if(bv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Iv(t=Ut()){return/firefox\//i.test(t)}function Cv(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Av(t=Ut()){return/crios\//i.test(t)}function Sv(t=Ut()){return/iemobile/i.test(t)}function bv(t=Ut()){return/android/i.test(t)}function Rv(t=Ut()){return/blackberry/i.test(t)}function Pv(t=Ut()){return/webos/i.test(t)}function Xd(t=Ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oR(t=Ut()){var e;return Xd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aR(){return e2()&&document.documentMode===10}function kv(t=Ut()){return Xd(t)||bv(t)||Pv(t)||Rv(t)||/windows phone/i.test(t)||Sv(t)}/**
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
 */function Nv(t,e=[]){let n;switch(t){case"Browser":n=Jg(Ut());break;case"Worker":n=`${Jg(Ut())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${er}/${i}`}/**
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
 */class lR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function cR(t,e={}){return nr(t,"GET","/v2/passwordPolicy",tr(t,e))}/**
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
 */const uR=6;class hR{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class dR{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zg(this),this.idTokenSubscription=new Zg(this),this.beforeStateQueue=new lR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=oi(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ev(this,{idToken:e}),i=await si._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(ui(this));const n=e?Bt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(ui(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(ui(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(oi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cR(this),n=new hR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await sR(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&oi(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[oi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xr(t){return Bt(t)}class Zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=c2(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fR(t){Oc=t}function Ov(t){return Oc.loadJS(t)}function pR(){return Oc.recaptchaEnterpriseScript}function gR(){return Oc.gapiScript}function mR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class _R{constructor(){this.enterprise=new yR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class yR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const vR="recaptcha-enterprise",Dv="NO_RECAPTCHA";class ER{constructor(e){this.type=vR,this.auth=xr(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Xb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Yb(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;Kg(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Dv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _R().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&Kg(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=pR();c.length!==0&&(c+=a),Ov(c).then(()=>{r(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function em(t,e,n,i=!1,r=!1){const s=new ER(t);let o;if(r)o=Dv;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ih(t,e,n,i,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await em(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await em(t,e,n,n==="getOobCode");return i(t,a)}else return Promise.reject(o)})}/**
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
 */function TR(t,e){const n=_d(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Sl(s,e??{}))return r;bn(r,"already-initialized")}return n.initialize({options:e})}function wR(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(oi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function IR(t,e,n){const i=xr(t);ce(i._canInitEmulator,i,"emulator-config-failed"),ce(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=xv(e),{host:o,port:a}=CR(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),AR()}function xv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CR(t){const e=xv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:tm(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:tm(o)}}}function tm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Jd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ri("not implemented")}_getIdTokenResponse(e){return ri("not implemented")}_linkToIdToken(e,n){return ri("not implemented")}_getReauthenticationResolver(e){return ri("not implemented")}}async function SR(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function bR(t,e){return pa(t,"POST","/v1/accounts:signInWithPassword",tr(t,e))}/**
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
 */async function RR(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}async function PR(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}/**
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
 */class Zo extends Jd{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Zo(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Zo(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ih(e,n,"signInWithPassword",bR);case"emailLink":return RR(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ih(e,i,"signUpPassword",SR);case"emailLink":return PR(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ds(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",tr(t,e))}/**
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
 */const kR="http://localhost";class Ir extends Jd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=zd(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Ir(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ds(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:kR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ds(n)}return e}}/**
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
 */function NR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OR(t){const e=po(go(t)).link,n=e?po(go(e)).deep_link_id:null,i=po(go(t)).deep_link_id;return(i?po(go(i)).link:null)||i||n||e||t}class Zd{constructor(e){var n,i,r,s,o,a;const c=po(go(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(i=c.oobCode)!==null&&i!==void 0?i:null,f=NR((r=c.mode)!==null&&r!==void 0?r:null);ce(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=OR(e);try{return new Zd(n)}catch{return null}}}/**
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
 */class Us{constructor(){this.providerId=Us.PROVIDER_ID}static credential(e,n){return Zo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Zd.parseLink(n);return ce(i,"argument-error"),Zo._fromEmailAndCode(e,i.code,i.tenantId)}}Us.PROVIDER_ID="password";Us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Lv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ga extends Lv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ni extends ga{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ni.credential(e.oauthAccessToken)}catch{return null}}}Ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ni.PROVIDER_ID="facebook.com";/**
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
 */class Oi extends ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Oi.credentialFromTaggedObject(e)}static credentialFromError(e){return Oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Oi.credential(n,i)}catch{return null}}}Oi.GOOGLE_SIGN_IN_METHOD="google.com";Oi.PROVIDER_ID="google.com";/**
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
 */class Di extends ga{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Di.credentialFromTaggedObject(e)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Di.credential(e.oauthAccessToken)}catch{return null}}}Di.GITHUB_SIGN_IN_METHOD="github.com";Di.PROVIDER_ID="github.com";/**
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
 */class xi extends ga{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return xi.credential(n,i)}catch{return null}}}xi.TWITTER_SIGN_IN_METHOD="twitter.com";xi.PROVIDER_ID="twitter.com";/**
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
 */async function DR(t,e){return pa(t,"POST","/v1/accounts:signUp",tr(t,e))}/**
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
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await si._fromIdTokenResponse(e,i,r),o=nm(i);return new Cr({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=nm(i);return new Cr({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function nm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $l extends Qn{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,$l.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new $l(e,n,i,r)}}function Mv(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$l._fromErrorAndOperation(t,s,e,i):s})}async function xR(t,e,n=!1){const i=await Jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",i)}/**
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
 */async function LR(t,e,n=!1){const{auth:i}=t;if(Ln(i.app))return Promise.reject(ui(i));const r="reauthenticate";try{const s=await Jo(t,Mv(i,r,e,t),n);ce(s.idToken,i,"internal-error");const o=Yd(s.idToken);ce(o,i,"internal-error");const{sub:a}=o;return ce(t.uid===a,i,"user-mismatch"),Cr._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bn(i,"user-mismatch"),s}}/**
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
 */async function Vv(t,e,n=!1){if(Ln(t.app))return Promise.reject(ui(t));const i="signIn",r=await Mv(t,i,e),s=await Cr._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function MR(t,e){return Vv(xr(t),e)}/**
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
 */async function Fv(t){const e=xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function VR(t,e,n){if(Ln(t.app))return Promise.reject(ui(t));const i=xr(t),o=await Ih(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",DR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Fv(t),c}),a=await Cr._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function FR(t,e,n){return Ln(t.app)?Promise.reject(ui(t)):MR(Bt(t),Us.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Fv(t),i})}function UR(t,e,n,i){return Bt(t).onIdTokenChanged(e,n,i)}function BR(t,e,n){return Bt(t).beforeAuthStateChanged(e,n)}function Uv(t,e,n,i){return Bt(t).onAuthStateChanged(e,n,i)}function $R(t){return Bt(t).signOut()}const ql="__sak";/**
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
 */class Bv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ql,"1"),this.storage.removeItem(ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qR=1e3,jR=10;class $v extends Bv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);aR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,jR):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},qR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$v.type="LOCAL";const GR=$v;/**
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
 */class qv extends Bv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qv.type="SESSION";const jv=qv;/**
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
 */function HR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Dc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await HR(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
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
 */function ef(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class WR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=ef("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qn(){return window}function zR(t){qn().location.href=t}/**
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
 */function Gv(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function KR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YR(){return Gv()?self:null}/**
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
 */const Hv="firebaseLocalStorageDb",XR=1,jl="firebaseLocalStorage",Wv="fbase_key";class ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xc(t,e){return t.transaction([jl],e?"readwrite":"readonly").objectStore(jl)}function JR(){const t=indexedDB.deleteDatabase(Hv);return new ma(t).toPromise()}function Ch(){const t=indexedDB.open(Hv,XR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(jl,{keyPath:Wv})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(jl)?e(i):(i.close(),await JR(),e(await Ch()))})})}async function im(t,e,n){const i=xc(t,!0).put({[Wv]:e,value:n});return new ma(i).toPromise()}async function ZR(t,e){const n=xc(t,!1).get(e),i=await new ma(n).toPromise();return i===void 0?null:i.value}function rm(t,e){const n=xc(t,!0).delete(e);return new ma(n).toPromise()}const eP=800,tP=3;class zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ch(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>tP)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(YR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KR(),!this.activeServiceWorker)return;this.sender=new WR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ch();return await im(e,ql,"1"),await rm(e,ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>im(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>ZR(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=xc(r,!1).getAll();return new ma(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zv.type="LOCAL";const nP=zv;new fa(3e4,6e4);/**
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
 */function iP(t,e){return e?oi(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tf extends Jd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rP(t){return Vv(t.auth,new tf(t),t.bypassAuthState)}function sP(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),LR(n,new tf(t),t.bypassAuthState)}async function oP(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),xR(n,new tf(t),t.bypassAuthState)}/**
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
 */class Kv{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rP;case"linkViaPopup":case"linkViaRedirect":return oP;case"reauthViaPopup":case"reauthViaRedirect":return sP;default:bn(this.auth,"internal-error")}}resolve(e){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aP=new fa(2e3,1e4);class Zr extends Kv{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){gi(this.filter.length===1,"Popup operations only handle one event");const e=ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aP.get())};e()}}Zr.currentPopupAction=null;/**
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
 */const lP="pendingRedirect",hl=new Map;class cP extends Kv{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=hl.get(this.auth._key());if(!e){try{const i=await uP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}hl.set(this.auth._key(),e)}return this.bypassAuthState||hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uP(t,e){const n=fP(e),i=dP(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function hP(t,e){hl.set(t._key(),e)}function dP(t){return oi(t._redirectPersistence)}function fP(t){return ul(lP,t.config.apiKey,t.name)}async function pP(t,e,n=!1){if(Ln(t.app))return Promise.reject(ui(t));const i=xr(t),r=iP(i,e),o=await new cP(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const gP=10*60*1e3;class mP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_P(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Qv(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError($n(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gP&&this.cachedEventUids.clear(),this.cachedEventUids.has(sm(e))}saveEventToCache(e){this.cachedEventUids.add(sm(e)),this.lastProcessedEventTime=Date.now()}}function sm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _P(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qv(t);default:return!1}}/**
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
 */async function yP(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
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
 */const vP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EP=/^https?/;async function TP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yP(t);for(const n of e)try{if(wP(n))return}catch{}bn(t,"unauthorized-domain")}function wP(t){const e=Th(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!EP.test(n))return!1;if(vP.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const IP=new fa(3e4,6e4);function om(){const t=qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CP(t){return new Promise((e,n)=>{var i,r,s;function o(){om(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{om(),n($n(t,"network-request-failed"))},timeout:IP.get()})}if(!((r=(i=qn().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=qn().gapi)===null||s===void 0)&&s.load)o();else{const a=mR("iframefcb");return qn()[a]=()=>{gapi.load?o():n($n(t,"network-request-failed"))},Ov(`${gR()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw dl=null,e})}let dl=null;function AP(t){return dl=dl||CP(t),dl}/**
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
 */const SP=new fa(5e3,15e3),bP="__/auth/iframe",RP="emulator/auth/iframe",PP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NP(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qd(e,RP):`https://${t.config.authDomain}/${bP}`,i={apiKey:e.apiKey,appName:t.name,v:er},r=kP.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Ds(i).slice(1)}`}async function OP(t){const e=await AP(t),n=qn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:NP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PP,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),a=qn().setTimeout(()=>{s(o)},SP.get());function c(){qn().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const DP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xP=500,LP=600,MP="_blank",VP="http://localhost";class am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FP(t,e,n,i=xP,r=LP){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},DP),{width:i.toString(),height:r.toString(),top:s,left:o}),u=Ut().toLowerCase();n&&(a=Av(u)?MP:n),Iv(u)&&(e=e||VP,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[_,C])=>`${g}${_}=${C},`,"");if(oR(u)&&a!=="_self")return UP(e||"",a),new am(null);const f=window.open(e||"",a,h);ce(f,t,"popup-blocked");try{f.focus()}catch{}return new am(f)}function UP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const BP="__/auth/handler",$P="emulator/auth/handler",qP=encodeURIComponent("fac");async function lm(t,e,n,i,r,s){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:er,eventId:r};if(e instanceof Lv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ga){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${qP}=${encodeURIComponent(c)}`:"";return`${jP(t)}?${Ds(a).slice(1)}${u}`}function jP({config:t}){return t.emulator?Qd(t,$P):`https://${t.authDomain}/${BP}`}/**
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
 */const bu="webStorageSupport";class GP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jv,this._completeRedirectFn=pP,this._overrideRedirectResult=hP}async _openPopup(e,n,i,r){var s;gi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lm(e,n,i,Th(),r);return FP(e,o,ef())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await lm(e,n,i,Th(),r);return zR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(gi(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await OP(e),i=new mP(e);return n.register("authEvent",r=>(ce(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bu,{type:bu},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[bu];o!==void 0&&n(!!o),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kv()||Cv()||Xd()}}const HP=GP;var cm="@firebase/auth",um="1.8.1";/**
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
 */class WP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KP(t){Gn(new An("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nv(t)},u=new dR(i,r,s,c);return wR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Gn(new An("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(i=>new WP(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(cm,um,zP(t)),rn(cm,um,"esm2017")}/**
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
 */const QP=5*60,YP=L0("authIdTokenMaxAge")||QP;let hm=null;const XP=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>YP)return;const r=n==null?void 0:n.token;hm!==r&&(hm=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Bs(t=j0()){const e=_d(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TR(t,{popupRedirectResolver:HP,persistence:[nP,GR,jv]}),i=L0("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=XP(s.toString());BR(n,o,()=>o(n.currentUser)),UR(n,a=>o(a))}}const r=D0("auth");return r&&IR(n,`http://${r}`),n}function JP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}fR({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=$n("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",JP().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KP("Browser");/**
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
 */const ZP=new Map,ek={activated:!1,tokenObservers:[]};function Rn(t){return ZP.get(t)||Object.assign({},ek)}const dm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class tk{constructor(e,n,i,r,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new jo,this.pending.promise.catch(n=>{}),await nk(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new jo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function nk(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const ik={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Gl=new Os("appCheck","AppCheck",ik);function Yv(t){if(!Rn(t).activated)throw Gl.create("use-before-activation",{appName:t.name})}/**
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
 */const rk="firebase-app-check-database",sk=1,Ah="firebase-app-check-store";let Qa=null;function ok(){return Qa||(Qa=new Promise((t,e)=>{try{const n=indexedDB.open(rk,sk);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var r;e(Gl.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(Ah,{keyPath:"compositeKey"})}}}catch(n){e(Gl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Qa)}function ak(t,e){return lk(ck(t),e)}async function lk(t,e){const i=(await ok()).transaction(Ah,"readwrite"),s=i.objectStore(Ah).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=c=>{o()},i.onerror=c=>{var u;a(Gl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function ck(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Sh=new aa("@firebase/app-check");function fm(t,e){return F0()?ak(t,e).catch(n=>{Sh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const uk={error:"UNKNOWN_ERROR"};function hk(t){return mc.encodeString(JSON.stringify(t),!1)}async function bh(t,e=!1){const n=t.app;Yv(n);const i=Rn(n);let r=i.token,s;if(r&&!vo(r)&&(i.token=void 0,r=void 0),!r){const c=await i.cachedTokenPromise;c&&(vo(c)?r=c:await fm(n,void 0))}if(!e&&r&&vo(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await Rn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Sh.warn(c.message):Sh.error(c),s=c}let a;return r?s?vo(r)?a={token:r.token,internalError:s}:a=gm(s):(a={token:r.token},i.token=r,await fm(n,r)):a=gm(s),o&&gk(n,a),a}async function dk(t){const e=t.app;Yv(e);const{provider:n}=Rn(e);{const{token:i}=await n.getToken();return{token:i}}}function fk(t,e,n,i){const{app:r}=t,s=Rn(r),o={next:n,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&vo(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),pm(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>pm(t))}function Xv(t,e){const n=Rn(t),i=n.tokenObservers.filter(r=>r.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function pm(t){const{app:e}=t,n=Rn(e);let i=n.tokenRefresher;i||(i=pk(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function pk(t){const{app:e}=t;return new tk(async()=>{const n=Rn(e);let i;if(n.token?i=await bh(t,!0):i=await bh(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Rn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},dm.RETRIAL_MIN_WAIT,dm.RETRIAL_MAX_WAIT)}function gk(t,e){const n=Rn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function vo(t){return t.expireTimeMillis-Date.now()>0}function gm(t){return{token:hk(uk),error:t}}/**
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
 */class mk{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Rn(this.app);for(const n of e)Xv(this.app,n.next);return Promise.resolve()}}function _k(t,e){return new mk(t,e)}function yk(t){return{getToken:e=>bh(t,e),getLimitedUseToken:()=>dk(t),addTokenListener:e=>fk(t,"INTERNAL",e),removeTokenListener:e=>Xv(t.app,e)}}const vk="@firebase/app-check",Ek="0.8.10",Tk="app-check",mm="app-check-internal";function wk(){Gn(new An(Tk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return _k(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(mm).initialize()})),Gn(new An(mm,t=>{const e=t.getProvider("app-check").getImmediate();return yk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),rn(vk,Ek)}wk();const Ik=Symbol("firebaseApp");var _m={};const ym="@firebase/database",vm="1.0.10";/**
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
 */let Jv="";function Ck(t){Jv=t}/**
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
 */class Ak{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Go(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Sk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Zv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ak(e)}}catch{}return new Sk},pr=Zv("localStorage"),bk=Zv("sessionStorage");/**
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
 */const fs=new aa("@firebase/database"),Rk=function(){let t=1;return function(){return t++}}(),eE=function(t){const e=f2(t),n=new l2;n.update(e);const i=n.digest();return mc.encodeByteArray(i)},_a=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=_a.apply(null,i):typeof i=="object"?e+=Tt(i):e+=i,e+=" "}return e};let ko=null,Em=!0;const Pk=function(t,e){K(!e,"Can't turn on custom loggers persistently."),fs.logLevel=Ee.VERBOSE,ko=fs.log.bind(fs)},Dt=function(...t){if(Em===!0&&(Em=!1,ko===null&&bk.get("logging_enabled")===!0&&Pk()),ko){const e=_a.apply(null,t);ko(e)}},ya=function(t){return function(...e){Dt(t,...e)}},Rh=function(...t){const e="FIREBASE INTERNAL ERROR: "+_a(...t);fs.error(e)},Ar=function(...t){const e=`FIREBASE FATAL ERROR: ${_a(...t)}`;throw fs.error(e),new Error(e)},sn=function(...t){const e="FIREBASE WARNING: "+_a(...t);fs.warn(e)},kk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Nk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},As="[MIN_NAME]",Sr="[MAX_NAME]",$s=function(t,e){if(t===e)return 0;if(t===As||e===Sr)return-1;if(e===As||t===Sr)return 1;{const n=Tm(t),i=Tm(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Ok=function(t,e){return t===e?0:t<e?-1:1},oo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Tt(e))},nf=function(t){if(typeof t!="object"||t===null)return Tt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Tt(e[i]),n+=":",n+=nf(t[e[i]]);return n+="}",n},nE=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function gn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const iE=function(t){K(!tE(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,c;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(h.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},Dk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Lk=new RegExp("^-?(0*)\\d{1,10}$"),Mk=-2147483648,Vk=2147483647,Tm=function(t){if(Lk.test(t)){const e=Number(t);if(e>=Mk&&e<=Vk)return e}return null},va=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw sn("Exception was thrown by user callback.",n),e},Math.floor(0))}},Fk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},No=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Uk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){sn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Bk{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',sn(e)}}/**
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
 */const rf="5",rE="v",sE="s",oE="r",aE="f",lE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cE="ls",uE="p",Ph="ac",hE="websocket",dE="long_polling";/**
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
 */class $k{constructor(e,n,i,r,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fE(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let i;if(e===hE)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===dE)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qk(t)&&(n.ns=t.namespace);const r=[];return gn(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class jk{constructor(){this.counters_={}}incrementCounter(e,n=1){vi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return j1(this.counters_)}}/**
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
 */const Ru={},Pu={};function sf(t){const e=t.toString();return Ru[e]||(Ru[e]=new jk),Ru[e]}function Gk(t,e){const n=t.toString();return Pu[n]||(Pu[n]=e()),Pu[n]}/**
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
 */class Hk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&va(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const wm="start",Wk="close",zk="pLPCommand",Kk="pRTLPCB",pE="id",gE="pw",mE="ser",Qk="cb",Yk="seg",Xk="ts",Jk="d",Zk="dframe",_E=1870,yE=30,eN=_E-yE,tN=25e3,nN=3e4;class es{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ya(e),this.stats_=sf(n),this.urlFn=c=>(this.appCheckToken&&(c[Ph]=this.appCheckToken),fE(n,dE,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Hk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nN)),Nk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new of((...s)=>{const[o,a,c,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wm)this.id=a,this.password=c;else if(o===Wk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[wm]="t",i[mE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Qk]=this.scriptTagHolder.uniqueCallbackIdentifier),i[rE]=rf,this.transportSessionId&&(i[sE]=this.transportSessionId),this.lastSessionId&&(i[cE]=this.lastSessionId),this.applicationId&&(i[uE]=this.applicationId),this.appCheckToken&&(i[Ph]=this.appCheckToken),typeof location<"u"&&location.hostname&&lE.test(location.hostname)&&(i[oE]=aE);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){es.forceAllow_=!0}static forceDisallow(){es.forceDisallow_=!0}static isAvailable(){return es.forceAllow_?!0:!es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Dk()&&!xk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=N0(n),r=nE(i,eN);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Zk]="t",i[pE]=e,i[gE]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class of{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Rk(),window[zk+this.uniqueCallbackIdentifier]=e,window[Kk+this.uniqueCallbackIdentifier]=n,this.myIFrame=of.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Dt("frame writing exception"),a.stack&&Dt(a.stack),Dt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Dt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pE]=this.myID,e[gE]=this.myPW,e[mE]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yE+i.length<=_E;){const o=this.pendingSegs.shift();i=i+"&"+Yk+r+"="+o.seg+"&"+Xk+r+"="+o.ts+"&"+Jk+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(tN)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const iN=16384,rN=45e3;let Hl=null;typeof MozWebSocket<"u"?Hl=MozWebSocket:typeof WebSocket<"u"&&(Hl=WebSocket);class Mn{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ya(this.connId),this.stats_=sf(n),this.connURL=Mn.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[rE]=rf,typeof location<"u"&&location.hostname&&lE.test(location.hostname)&&(o[oE]=aE),n&&(o[sE]=n),i&&(o[cE]=i),r&&(o[Ph]=r),s&&(o[uE]=s),fE(e,hE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pr.set("previous_websocket_failure",!0);try{let i;V0(),this.mySock=new Hl(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Mn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Hl!==null&&!Mn.forceDisallow_}static previouslyFailed(){return pr.isInMemoryStorage||pr.get("previous_websocket_failure")===!0}markConnectionHealthy(){pr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Go(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=nE(n,iN);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mn.responsesRequiredToBeHealthy=2;Mn.healthyTimeout=3e4;/**
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
 */class ea{static get ALL_TRANSPORTS(){return[es,Mn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Mn.isAvailable();let i=n&&!Mn.previouslyFailed();if(e.webSocketOnly&&(n||sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Mn];else{const r=this.transports_=[];for(const s of ea.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);ea.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ea.globalTransportInitialized_=!1;/**
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
 */const sN=6e4,oN=5e3,aN=10*1024,lN=100*1024,ku="t",Im="d",cN="s",Cm="r",uN="e",Am="o",Sm="a",bm="n",Rm="p",hN="h";class dN{constructor(e,n,i,r,s,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ya("c:"+this.id+":"),this.transportManager_=new ea(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=No(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>aN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ku in e){const n=e[ku];n===Sm?this.upgradeIfSecondaryHealthy_():n===Cm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Am&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oo("t",e),i=oo("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oo("t",e),i=oo("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oo(ku,e);if(Im in e){const i=e[Im];if(n===hN){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===bm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===cN?this.onConnectionShutdown_(i):n===Cm?this.onReset_(i):n===uN?Rh("Server Error: "+i):n===Am?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),rf!==i&&sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),No(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):No(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class vE{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class EE{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Wl extends EE{static getInstance(){return new Wl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Pm=32,km=768;class ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ue(){return new ze("")}function Re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Xi(t){return t.pieces_.length-t.pieceNum_}function He(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ze(t.pieces_,e)}function TE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function wE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function IE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ze(e,0)}function gt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ze)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new ze(n,0)}function Ce(t){return t.pieceNum_>=t.pieces_.length}function hn(t,e){const n=Re(t),i=Re(e);if(n===null)return e;if(n===i)return hn(He(t),He(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function CE(t,e){if(Xi(t)!==Xi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Tn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Xi(t)>Xi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class pN{constructor(e,n){this.errorPrefix_=n,this.parts_=wE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=yc(this.parts_[i]);AE(this)}}function gN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=yc(e),AE(t)}function mN(t){const e=t.parts_.pop();t.byteLength_-=yc(e),t.parts_.length>0&&(t.byteLength_-=1)}function AE(t){if(t.byteLength_>km)throw new Error(t.errorPrefix_+"has a key path longer than "+km+" bytes ("+t.byteLength_+").");if(t.parts_.length>Pm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Pm+") or object contains a cycle "+dr(t))}function dr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class af extends EE{static getInstance(){return new af}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ao=1e3,_N=60*5*1e3,Nm=30*1e3,yN=1.3,vN=3e4,EN="server_kill",Om=3;class hi extends vE{constructor(e,n,i,r,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=hi.nextPersistentConnectionId_++,this.log_=ya("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ao,this.maxReconnectDelay_=_N,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!V0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");af.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Tt(s)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new jo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,u=a.s;hi.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vi(e,"w")){const i=_s(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||a2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=o2(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Tt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Rh("Unrecognized action received from server: "+Tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vN&&(this.reconnectDelay_=ao),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+hi.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},u=function(f){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Dt("getToken() completed but was canceled"):(Dt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,a=new dN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,_=>{sn(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(EN)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&sn(f),c())}}}interrupt(e){Dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zu(this.interruptReasons_)&&(this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>nf(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new ze(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Dt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Om&&(this.reconnectDelay_=Nm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Dt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Om&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Jv.replace(/\./g,"-")]=1,gd()?e["framework.cordova"]=1:M0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wl.getInstance().currentlyOnline();return Zu(this.interruptReasons_)&&e}}hi.nextPersistentConnectionId_=0;hi.nextConnectionId_=0;/**
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
 */class Pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Pe(e,n)}}/**
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
 */class Lc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Pe(As,e),r=new Pe(As,n);return this.compare(i,r)!==0}minPost(){return Pe.MIN}}/**
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
 */let Ya;class SE extends Lc{static get __EMPTY_NODE(){return Ya}static set __EMPTY_NODE(e){Ya=e}compare(e,n){return $s(e.name,n.name)}isDefinedOn(e){throw Ns("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Pe.MIN}maxPost(){return new Pe(Sr,Ya)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new Pe(e,Ya)}toString(){return".key"}}const ps=new SE;/**
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
 */class Xa{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class dt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??dt.RED,this.left=r??Qt.EMPTY_NODE,this.right=s??Qt.EMPTY_NODE}copy(e,n,i,r,s){return new dt(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Qt.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}dt.RED=!0;dt.BLACK=!1;class TN{copy(e,n,i,r,s){return this}insert(e,n,i){return new dt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qt{constructor(e,n=Qt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Qt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,dt.BLACK,null,null))}remove(e){return new Qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,dt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xa(this.root_,null,this.comparator_,!0,e)}}Qt.EMPTY_NODE=new TN;/**
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
 */function wN(t,e){return $s(t.name,e.name)}function lf(t,e){return $s(t,e)}/**
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
 */let kh;function IN(t){kh=t}const bE=function(t){return typeof t=="number"?"number:"+iE(t):"string:"+t},RE=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vi(e,".sv"),"Priority must be a string or number.")}else K(t===kh||t.isEmpty(),"priority of unexpected type.");K(t===kh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Dm;class ct{static set __childrenNodeConstructor(e){Dm=e}static get __childrenNodeConstructor(){return Dm}constructor(e,n=ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),RE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ce(e)?this:Re(e)===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Re(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(K(i!==".priority"||Xi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=iE(this.value_):e+=this.value_,this.lazyHash_=eE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ct.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=ct.VALUE_TYPE_ORDER.indexOf(n),s=ct.VALUE_TYPE_ORDER.indexOf(i);return K(r>=0,"Unknown leaf type: "+n),K(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let PE,kE;function CN(t){PE=t}function AN(t){kE=t}class SN extends Lc{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?$s(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Pe.MIN}maxPost(){return new Pe(Sr,new ct("[PRIORITY-POST]",kE))}makePost(e,n){const i=PE(e);return new Pe(n,new ct("[PRIORITY-POST]",i))}toString(){return".priority"}}const Mt=new SN;/**
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
 */const bN=Math.log(2);class RN{constructor(e){const n=s=>parseInt(Math.log(s)/bN,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zl=function(t,e,n,i){t.sort(e);const r=function(c,u){const h=u-c;let f,g;if(h===0)return null;if(h===1)return f=t[c],g=n?n(f):f,new dt(g,f.node,dt.BLACK,null,null);{const _=parseInt(h/2,10)+c,C=r(c,_),k=r(_+1,u);return f=t[_],g=n?n(f):f,new dt(g,f.node,dt.BLACK,C,k)}},s=function(c){let u=null,h=null,f=t.length;const g=function(C,k){const N=f-C,q=f;f-=C;const V=r(N+1,q),B=t[N],$=n?n(B):B;_(new dt($,B.node,k,null,V))},_=function(C){u?(u.left=C,u=C):(h=C,u=C)};for(let C=0;C<c.count;++C){const k=c.nextBitIsOne(),N=Math.pow(2,c.count-(C+1));k?g(N,dt.BLACK):(g(N,dt.BLACK),g(N,dt.RED))}return h},o=new RN(t.length),a=s(o);return new Qt(i||e,a)};/**
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
 */let Nu;const lo={};class ai{static get Default(){return K(Mt,"ChildrenNode.ts has not been loaded"),Nu=Nu||new ai({".priority":lo},{".priority":Mt}),Nu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=_s(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Qt?n:null}hasIndex(e){return vi(this.indexSet_,e.toString())}addIndex(e,n){K(e!==ps,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(Pe.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=zl(i,e.getCompare()):a=lo;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new ai(h,u)}addToIndexes(e,n){const i=Al(this.indexes_,(r,s)=>{const o=_s(this.indexSet_,s);if(K(o,"Missing index implementation for "+s),r===lo)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Pe.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),zl(a,o.getCompare())}else return lo;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new Pe(e.name,a))),c.insert(e,e.node)}});return new ai(i,this.indexSet_)}removeFromIndexes(e,n){const i=Al(this.indexes_,r=>{if(r===lo)return r;{const s=n.get(e.name);return s?r.remove(new Pe(e.name,s)):r}});return new ai(i,this.indexSet_)}}/**
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
 */let co;class Me{static get EMPTY_NODE(){return co||(co=new Me(new Qt(lf),null,ai.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&RE(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||co}updatePriority(e){return this.children_.isEmpty()?this:new Me(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?co:n}}getChild(e){const n=Re(e);return n===null?this:this.getImmediateChild(n).getChild(He(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Pe(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?co:this.priorityNode_;return new Me(r,o,s)}}updateChild(e,n){const i=Re(e);if(i===null)return n;{K(Re(e)!==".priority"||Xi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(He(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Mt,(o,a)=>{n[o]=a.val(e),i++,s&&Me.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+bE(this.getPriority().val())+":"),this.forEachChild(Mt,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":eE(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new Pe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Pe(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Pe.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Pe.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ea?-1:0}withIndex(e){if(e===ps||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Me(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ps||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Mt),r=n.getIterator(Mt);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ps?null:this.indexMap_.get(e.toString())}}Me.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PN extends Me{constructor(){super(new Qt(lf),Me.EMPTY_NODE,ai.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Me.EMPTY_NODE}isEmpty(){return!1}}const Ea=new PN;Object.defineProperties(Pe,{MIN:{value:new Pe(As,Me.EMPTY_NODE)},MAX:{value:new Pe(Sr,Ea)}});SE.__EMPTY_NODE=Me.EMPTY_NODE;ct.__childrenNodeConstructor=Me;IN(Ea);AN(Ea);/**
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
 */const kN=!0;function xt(t,e=null){if(t===null)return Me.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ct(n,xt(e))}if(!(t instanceof Array)&&kN){const n=[];let i=!1;if(gn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=xt(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new Pe(o,c)))}}),n.length===0)return Me.EMPTY_NODE;const s=zl(n,wN,o=>o.name,lf);if(i){const o=zl(n,Mt.getCompare());return new Me(s,xt(e),new ai({".priority":o},{".priority":Mt}))}else return new Me(s,xt(e),ai.Default)}else{let n=Me.EMPTY_NODE;return gn(t,(i,r)=>{if(vi(t,i)&&i.substring(0,1)!=="."){const s=xt(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(xt(e))}}CN(xt);/**
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
 */class NN extends Lc{constructor(e){super(),this.indexPath_=e,K(!Ce(e)&&Re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?$s(e.name,n.name):s}makePost(e,n){const i=xt(e),r=Me.EMPTY_NODE.updateChild(this.indexPath_,i);return new Pe(n,r)}maxPost(){const e=Me.EMPTY_NODE.updateChild(this.indexPath_,Ea);return new Pe(Sr,e)}toString(){return wE(this.indexPath_,0).join("/")}}/**
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
 */class ON extends Lc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?$s(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Pe.MIN}maxPost(){return Pe.MAX}makePost(e,n){const i=xt(e);return new Pe(n,i)}toString(){return".value"}}const DN=new ON;/**
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
 */function xN(t){return{type:"value",snapshotNode:t}}function LN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function MN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function VN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class cf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:As}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Mt}copy(){const e=new cf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Lm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Mt?n="$priority":t.index_===DN?n="$value":t.index_===ps?n="$key":(K(t.index_ instanceof NN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Tt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Tt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Tt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Tt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Mm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Mt&&(e.i=t.index_.toString()),e}/**
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
 */class Kl extends vE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=ya("p:rest:"),this.listens_={}}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Kl.getListenId_(e,i),a={};this.listens_[o]=a;const c=Lm(e._queryParams);this.restRequest_(s+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,i),_s(this.listens_,o)===a){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",r(g,null)}})}unlisten(e,n){const i=Kl.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Lm(e._queryParams),i=e._path.toString(),r=new jo;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ds(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Go(a.responseText)}catch{sn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&sn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class FN{constructor(){this.rootNode_=Me.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ql(){return{value:null,children:new Map}}function NE(t,e,n){if(Ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Re(e);t.children.has(i)||t.children.set(i,Ql());const r=t.children.get(i);e=He(e),NE(r,e,n)}}function Nh(t,e,n){t.value!==null?n(e,t.value):UN(t,(i,r)=>{const s=new ze(e.toString()+"/"+i);Nh(r,s,n)})}function UN(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class BN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&gn(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Vm=10*1e3,$N=30*1e3,qN=5*60*1e3;class jN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new BN(e);const i=Vm+($N-Vm)*Math.random();No(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;gn(e,(r,s)=>{s>0&&vi(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),No(this.reportStats_.bind(this),Math.floor(Math.random()*2*qN))}}/**
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
 */var Vn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Vn||(Vn={}));function OE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function DE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Yl{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Vn.ACK_USER_WRITE,this.source=OE()}operationForChild(e){if(Ce(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ze(e));return new Yl(Ue(),n,this.revert)}}else return K(Re(this.path)===e,"operationForChild called for unrelated child."),new Yl(He(this.path),this.affectedTree,this.revert)}}/**
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
 */class br{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Vn.OVERWRITE}operationForChild(e){return Ce(this.path)?new br(this.source,Ue(),this.snap.getImmediateChild(e)):new br(this.source,He(this.path),this.snap)}}/**
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
 */class ta{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Vn.MERGE}operationForChild(e){if(Ce(this.path)){const n=this.children.subtree(new ze(e));return n.isEmpty()?null:n.value?new br(this.source,Ue(),n.value):new ta(this.source,Ue(),n)}else return K(Re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ta(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class uf{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=Re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function GN(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(VN(o.childName,o.snapshotNode))}),uo(t,r,"child_removed",e,i,n),uo(t,r,"child_added",e,i,n),uo(t,r,"child_moved",s,i,n),uo(t,r,"child_changed",e,i,n),uo(t,r,"value",e,i,n),r}function uo(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,c)=>WN(t,a,c)),o.forEach(a=>{const c=HN(t,a,s);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function HN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function WN(t,e,n){if(e.childName==null||n.childName==null)throw Ns("Should only compare child_ events.");const i=new Pe(e.childName,e.snapshotNode),r=new Pe(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function LE(t,e){return{eventCache:t,serverCache:e}}function Oo(t,e,n,i){return LE(new uf(e,n,i),t.serverCache)}function ME(t,e,n,i){return LE(t.eventCache,new uf(e,n,i))}function Oh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Rr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ou;const zN=()=>(Ou||(Ou=new Qt(Ok)),Ou);class Ge{static fromObject(e){let n=new Ge(null);return gn(e,(i,r)=>{n=n.set(new ze(i),r)}),n}constructor(e,n=zN()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ue(),value:this.value};if(Ce(e))return null;{const i=Re(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(He(e),n);return s!=null?{path:gt(new ze(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ce(e))return this;{const n=Re(e),i=this.children.get(n);return i!==null?i.subtree(He(e)):new Ge(null)}}set(e,n){if(Ce(e))return new Ge(n,this.children);{const i=Re(e),s=(this.children.get(i)||new Ge(null)).set(He(e),n),o=this.children.insert(i,s);return new Ge(this.value,o)}}remove(e){if(Ce(e))return this.children.isEmpty()?new Ge(null):new Ge(null,this.children);{const n=Re(e),i=this.children.get(n);if(i){const r=i.remove(He(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Ge(null):new Ge(this.value,s)}else return this}}get(e){if(Ce(e))return this.value;{const n=Re(e),i=this.children.get(n);return i?i.get(He(e)):null}}setTree(e,n){if(Ce(e))return n;{const i=Re(e),s=(this.children.get(i)||new Ge(null)).setTree(He(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Ge(this.value,o)}}fold(e){return this.fold_(Ue(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(gt(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ue(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(Ce(e))return null;{const s=Re(e),o=this.children.get(s);return o?o.findOnPath_(He(e),gt(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ue(),n)}foreachOnPath_(e,n,i){if(Ce(e))return this;{this.value&&i(n,this.value);const r=Re(e),s=this.children.get(r);return s?s.foreachOnPath_(He(e),gt(n,r),i):new Ge(null)}}foreach(e){this.foreach_(Ue(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(gt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Cn{constructor(e){this.writeTree_=e}static empty(){return new Cn(new Ge(null))}}function Do(t,e,n){if(Ce(e))return new Cn(new Ge(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=hn(r,e);return s=s.updateChild(o,n),new Cn(t.writeTree_.set(r,s))}else{const r=new Ge(n),s=t.writeTree_.setTree(e,r);return new Cn(s)}}}function Fm(t,e,n){let i=t;return gn(n,(r,s)=>{i=Do(i,gt(e,r),s)}),i}function Um(t,e){if(Ce(e))return Cn.empty();{const n=t.writeTree_.setTree(e,new Ge(null));return new Cn(n)}}function Dh(t,e){return Lr(t,e)!=null}function Lr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(hn(n.path,e)):null}function Bm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Mt,(i,r)=>{e.push(new Pe(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new Pe(i,r.value))}),e}function qi(t,e){if(Ce(e))return t;{const n=Lr(t,e);return n!=null?new Cn(new Ge(n)):new Cn(t.writeTree_.subtree(e))}}function xh(t){return t.writeTree_.isEmpty()}function Ss(t,e){return VE(Ue(),t.writeTree_,e)}function VE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(K(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=VE(gt(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(gt(t,".priority"),i)),n}}/**
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
 */function FE(t,e){return jE(e,t)}function KN(t,e,n,i,r){K(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Do(t.visibleWrites,e,n)),t.lastWriteId=i}function QN(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function YN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&XN(a,i.path)?r=!1:Tn(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return JN(t),!0;if(i.snap)t.visibleWrites=Um(t.visibleWrites,i.path);else{const a=i.children;gn(a,c=>{t.visibleWrites=Um(t.visibleWrites,gt(i.path,c))})}return!0}else return!1}function XN(t,e){if(t.snap)return Tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tn(gt(t.path,n),e))return!0;return!1}function JN(t){t.visibleWrites=UE(t.allWrites,ZN,Ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ZN(t){return t.visible}function UE(t,e,n){let i=Cn.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Tn(n,o)?(a=hn(n,o),i=Do(i,a,s.snap)):Tn(o,n)&&(a=hn(o,n),i=Do(i,Ue(),s.snap.getChild(a)));else if(s.children){if(Tn(n,o))a=hn(n,o),i=Fm(i,a,s.children);else if(Tn(o,n))if(a=hn(o,n),Ce(a))i=Fm(i,Ue(),s.children);else{const c=_s(s.children,Re(a));if(c){const u=c.getChild(He(a));i=Do(i,Ue(),u)}}}else throw Ns("WriteRecord should have .snap or .children")}}return i}function BE(t,e,n,i,r){if(!i&&!r){const s=Lr(t.visibleWrites,e);if(s!=null)return s;{const o=qi(t.visibleWrites,e);if(xh(o))return n;if(n==null&&!Dh(o,Ue()))return null;{const a=n||Me.EMPTY_NODE;return Ss(o,a)}}}else{const s=qi(t.visibleWrites,e);if(!r&&xh(s))return n;if(!r&&n==null&&!Dh(s,Ue()))return null;{const o=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(Tn(u.path,e)||Tn(e,u.path))},a=UE(t.allWrites,o,e),c=n||Me.EMPTY_NODE;return Ss(a,c)}}}function eO(t,e,n){let i=Me.EMPTY_NODE;const r=Lr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Mt,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=qi(t.visibleWrites,e);return n.forEachChild(Mt,(o,a)=>{const c=Ss(qi(s,new ze(o)),a);i=i.updateImmediateChild(o,c)}),Bm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=qi(t.visibleWrites,e);return Bm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function tO(t,e,n,i,r){K(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=gt(e,n);if(Dh(t.visibleWrites,s))return null;{const o=qi(t.visibleWrites,s);return xh(o)?r.getChild(n):Ss(o,r.getChild(n))}}function nO(t,e,n,i){const r=gt(e,n),s=Lr(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=qi(t.visibleWrites,r);return Ss(o,i.getNode().getImmediateChild(n))}else return null}function iO(t,e){return Lr(t.visibleWrites,e)}function rO(t,e,n,i,r,s,o){let a;const c=qi(t.visibleWrites,e),u=Lr(c,Ue());if(u!=null)a=u;else if(n!=null)a=Ss(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),g=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let _=g.getNext();for(;_&&h.length<r;)f(_,i)!==0&&h.push(_),_=g.getNext();return h}else return[]}function sO(){return{visibleWrites:Cn.empty(),allWrites:[],lastWriteId:-1}}function Lh(t,e,n,i){return BE(t.writeTree,t.treePath,e,n,i)}function $E(t,e){return eO(t.writeTree,t.treePath,e)}function $m(t,e,n,i){return tO(t.writeTree,t.treePath,e,n,i)}function Xl(t,e){return iO(t.writeTree,gt(t.treePath,e))}function oO(t,e,n,i,r,s){return rO(t.writeTree,t.treePath,e,n,i,r,s)}function hf(t,e,n){return nO(t.writeTree,t.treePath,e,n)}function qE(t,e){return jE(gt(t.treePath,e),t.writeTree)}function jE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class aO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,xm(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,MN(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,LN(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,xm(i,e.snapshotNode,r.oldSnap));else throw Ns("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class lO{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const GE=new lO;class df{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new uf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),s=oO(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function cO(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function uO(t,e,n,i,r){const s=new aO;let o,a;if(n.type===Vn.OVERWRITE){const u=n;u.source.fromUser?o=Mh(t,e,u.path,u.snap,i,r,s):(K(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ce(u.path),o=Jl(t,e,u.path,u.snap,i,r,a,s))}else if(n.type===Vn.MERGE){const u=n;u.source.fromUser?o=dO(t,e,u.path,u.children,i,r,s):(K(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Vh(t,e,u.path,u.children,i,r,a,s))}else if(n.type===Vn.ACK_USER_WRITE){const u=n;u.revert?o=gO(t,e,u.path,i,r,s):o=fO(t,e,u.path,u.affectedTree,i,r,s)}else if(n.type===Vn.LISTEN_COMPLETE)o=pO(t,e,n.path,i,s);else throw Ns("Unknown operation type: "+n.type);const c=s.getChanges();return hO(e,o,c),{viewCache:o,changes:c}}function hO(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Oh(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(xN(Oh(e)))}}function HE(t,e,n,i,r,s){const o=e.eventCache;if(Xl(i,n)!=null)return e;{let a,c;if(Ce(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Rr(e),h=u instanceof Me?u:Me.EMPTY_NODE,f=$E(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const u=Lh(i,Rr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Re(n);if(u===".priority"){K(Xi(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=$m(i,n,h,c);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=He(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=$m(i,n,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(u).updateChild(h,g):f=o.getNode().getImmediateChild(u)}else f=hf(i,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,r,s):a=o.getNode()}}return Oo(e,a,o.isFullyInitialized()||Ce(n),t.filter.filtersNodes())}}function Jl(t,e,n,i,r,s,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ce(n))u=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,i);u=h.updateFullNode(c.getNode(),_,null)}else{const _=Re(n);if(!c.isCompleteForPath(n)&&Xi(n)>1)return e;const C=He(n),N=c.getNode().getImmediateChild(_).updateChild(C,i);_===".priority"?u=h.updatePriority(c.getNode(),N):u=h.updateChild(c.getNode(),_,N,C,GE,null)}const f=ME(e,u,c.isFullyInitialized()||Ce(n),h.filtersNodes()),g=new df(r,f,s);return HE(t,f,n,r,g,a)}function Mh(t,e,n,i,r,s,o){const a=e.eventCache;let c,u;const h=new df(r,e,s);if(Ce(n))u=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Oo(e,u,!0,t.filter.filtersNodes());else{const f=Re(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),i),c=Oo(e,u,a.isFullyInitialized(),a.isFiltered());else{const g=He(n),_=a.getNode().getImmediateChild(f);let C;if(Ce(g))C=i;else{const k=h.getCompleteChild(f);k!=null?TE(g)===".priority"&&k.getChild(IE(g)).isEmpty()?C=k:C=k.updateChild(g,i):C=Me.EMPTY_NODE}if(_.equals(C))c=e;else{const k=t.filter.updateChild(a.getNode(),f,C,g,h,o);c=Oo(e,k,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function qm(t,e){return t.eventCache.isCompleteForChild(e)}function dO(t,e,n,i,r,s,o){let a=e;return i.foreach((c,u)=>{const h=gt(n,c);qm(e,Re(h))&&(a=Mh(t,a,h,u,r,s,o))}),i.foreach((c,u)=>{const h=gt(n,c);qm(e,Re(h))||(a=Mh(t,a,h,u,r,s,o))}),a}function jm(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Vh(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ce(n)?u=i:u=new Ge(null).setTree(n,i);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,g)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),C=jm(t,_,g);c=Jl(t,c,new ze(f),C,r,s,o,a)}}),u.children.inorderTraversal((f,g)=>{const _=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!h.hasChild(f)&&!_){const C=e.serverCache.getNode().getImmediateChild(f),k=jm(t,C,g);c=Jl(t,c,new ze(f),k,r,s,o,a)}}),c}function fO(t,e,n,i,r,s,o){if(Xl(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(Ce(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Jl(t,e,n,c.getNode().getChild(n),r,s,a,o);if(Ce(n)){let u=new Ge(null);return c.getNode().forEachChild(ps,(h,f)=>{u=u.set(new ze(h),f)}),Vh(t,e,n,u,r,s,a,o)}else return e}else{let u=new Ge(null);return i.foreach((h,f)=>{const g=gt(n,h);c.isCompleteForPath(g)&&(u=u.set(h,c.getNode().getChild(g)))}),Vh(t,e,n,u,r,s,a,o)}}function pO(t,e,n,i,r){const s=e.serverCache,o=ME(e,s.getNode(),s.isFullyInitialized()||Ce(n),s.isFiltered());return HE(t,o,n,i,GE,r)}function gO(t,e,n,i,r,s){let o;if(Xl(i,n)!=null)return e;{const a=new df(i,e,r),c=e.eventCache.getNode();let u;if(Ce(n)||Re(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Lh(i,Rr(e));else{const f=e.serverCache.getNode();K(f instanceof Me,"serverChildren would be complete if leaf node"),h=$E(i,f)}h=h,u=t.filter.updateFullNode(c,h,s)}else{const h=Re(n);let f=hf(i,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=t.filter.updateChild(c,h,f,He(n),a,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,Me.EMPTY_NODE,He(n),a,s):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Lh(i,Rr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Xl(i,Ue())!=null,Oo(e,u,o,t.filter.filtersNodes())}}function mO(t,e){const n=Rr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ce(e)&&!n.getImmediateChild(Re(e)).isEmpty())?n.getChild(e):null}function Gm(t,e,n,i){e.type===Vn.MERGE&&e.source.queryId!==null&&(K(Rr(t.viewCache_),"We should always have a full cache before handling merges"),K(Oh(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=uO(t.processor_,r,e,n,i);return cO(t.processor_,s.viewCache),K(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,_O(t,s.changes,s.viewCache.eventCache.getNode())}function _O(t,e,n,i){const r=t.eventRegistrations_;return GN(t.eventGenerator_,e,n,r)}/**
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
 */let Hm;function yO(t){K(!Hm,"__referenceConstructor has already been defined"),Hm=t}function ff(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return K(s!=null,"SyncTree gave us an op for an invalid query."),Gm(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Gm(o,e,n,i));return s}}function pf(t,e){let n=null;for(const i of t.views.values())n=n||mO(i,e);return n}/**
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
 */let Wm;function vO(t){K(!Wm,"__referenceConstructor has already been defined"),Wm=t}class zm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ge(null),this.pendingWriteTree_=sO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function EO(t,e,n,i,r){return KN(t.pendingWriteTree_,e,n,i,r),r?Vc(t,new br(OE(),e,n)):[]}function ts(t,e,n=!1){const i=QN(t.pendingWriteTree_,e);if(YN(t.pendingWriteTree_,e)){let s=new Ge(null);return i.snap!=null?s=s.set(Ue(),!0):gn(i.children,o=>{s=s.set(new ze(o),!0)}),Vc(t,new Yl(i.path,s,n))}else return[]}function Mc(t,e,n){return Vc(t,new br(DE(),e,n))}function TO(t,e,n){const i=Ge.fromObject(n);return Vc(t,new ta(DE(),e,i))}function wO(t,e,n,i){const r=QE(t,i);if(r!=null){const s=YE(r),o=s.path,a=s.queryId,c=hn(o,e),u=new br(xE(a),c,n);return XE(t,o,u)}else return[]}function IO(t,e,n,i){const r=QE(t,i);if(r){const s=YE(r),o=s.path,a=s.queryId,c=hn(o,e),u=Ge.fromObject(n),h=new ta(xE(a),c,u);return XE(t,o,h)}else return[]}function WE(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=hn(o,e),u=pf(a,c);if(u)return u});return BE(r,e,s,n,!0)}function Vc(t,e){return zE(e,t.syncPointTree_,null,FE(t.pendingWriteTree_,Ue()))}function zE(t,e,n,i){if(Ce(t.path))return KE(t,e,n,i);{const r=e.get(Ue());n==null&&r!=null&&(n=pf(r,Ue()));let s=[];const o=Re(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=qE(i,o);s=s.concat(zE(a,c,u,h))}return r&&(s=s.concat(ff(r,t,i,n))),s}}function KE(t,e,n,i){const r=e.get(Ue());n==null&&r!=null&&(n=pf(r,Ue()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=qE(i,o),h=t.operationForChild(o);h&&(s=s.concat(KE(h,a,c,u)))}),r&&(s=s.concat(ff(r,t,i,n))),s}function QE(t,e){return t.tagToQueryMap.get(e)}function YE(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ze(t.substr(0,e))}}function XE(t,e,n){const i=t.syncPointTree_.get(e);K(i,"Missing sync point for query tag that we're tracking");const r=FE(t.pendingWriteTree_,e);return ff(i,n,r,null)}/**
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
 */class gf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gf(n)}node(){return this.node_}}class mf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=gt(this.path_,e);return new mf(this.syncTree_,n)}node(){return WE(this.syncTree_,this.path_)}}const CO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Km=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return AO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return SO(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},AO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},SO=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&K(!1,"Unexpected increment value: "+i);const r=e.node();if(K(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},bO=function(t,e,n,i){return _f(e,new mf(n,t),i)},RO=function(t,e,n){return _f(t,new gf(e),n)};function _f(t,e,n){const i=t.getPriority().val(),r=Km(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Km(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new ct(a,xt(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new ct(r))),o.forEachChild(Mt,(a,c)=>{const u=_f(c,e.getImmediateChild(a),n);u!==c&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class yf{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function vf(t,e){let n=e instanceof ze?e:new ze(e),i=t,r=Re(n);for(;r!==null;){const s=_s(i.node.children,r)||{children:{},childCount:0};i=new yf(r,i,s),n=He(n),r=Re(n)}return i}function qs(t){return t.node.value}function JE(t,e){t.node.value=e,Fh(t)}function ZE(t){return t.node.childCount>0}function PO(t){return qs(t)===void 0&&!ZE(t)}function Fc(t,e){gn(t.node.children,(n,i)=>{e(new yf(n,t,i))})}function eT(t,e,n,i){n&&!i&&e(t),Fc(t,r=>{eT(r,e,!0,i)})}function kO(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ta(t){return new ze(t.parent===null?t.name:Ta(t.parent)+"/"+t.name)}function Fh(t){t.parent!==null&&NO(t.parent,t.name,t)}function NO(t,e,n){const i=PO(n),r=vi(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Fh(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Fh(t))}/**
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
 */const OO=/[\[\].#$\/\u0000-\u001F\u007F]/,DO=/[\[\].#$\u0000-\u001F\u007F]/,Du=10*1024*1024,tT=function(t){return typeof t=="string"&&t.length!==0&&!OO.test(t)},xO=function(t){return typeof t=="string"&&t.length!==0&&!DO.test(t)},LO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),xO(t)},nT=function(t,e,n){const i=n instanceof ze?new pN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+dr(i));if(typeof e=="function")throw new Error(t+"contains a function "+dr(i)+" with contents = "+e.toString());if(tE(e))throw new Error(t+"contains "+e.toString()+" "+dr(i));if(typeof e=="string"&&e.length>Du/3&&yc(e)>Du)throw new Error(t+"contains a string greater than "+Du+" utf8 bytes "+dr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(gn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!tT(o)))throw new Error(t+" contains an invalid key ("+o+") "+dr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gN(i,o),nT(t,a,i),mN(i)}),r&&s)throw new Error(t+' contains ".value" child '+dr(i)+" in addition to actual children.")}},MO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!LO(n))throw new Error(d2(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class VO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function FO(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!CE(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Mr(t,e,n){FO(t,n),UO(t,i=>Tn(i,e)||Tn(e,i))}function UO(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(BO(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function BO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();ko&&Dt("event: "+n.toString()),va(i)}}}/**
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
 */const $O="repo_interrupt",qO=25;class jO{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new VO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ql(),this.transactionQueueTree_=new yf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function GO(t,e,n){if(t.stats_=sf(t.repoInfo_),t.forceRestClient_||Fk())t.server_=new Kl(t.repoInfo_,(i,r,s,o)=>{Qm(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ym(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Tt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new hi(t.repoInfo_,e,(i,r,s,o)=>{Qm(t,i,r,s,o)},i=>{Ym(t,i)},i=>{WO(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Gk(t.repoInfo_,()=>new jN(t.stats_,t.server_)),t.infoData_=new FN,t.infoSyncTree_=new zm({startListening:(i,r,s,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=Mc(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ef(t,"connected",!1),t.serverSyncTree_=new zm({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,c)=>{const u=o(a,c);Mr(t.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function HO(t){const n=t.infoData_.getNode(new ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function iT(t){return CO({timestamp:HO(t)})}function Qm(t,e,n,i,r){t.dataUpdateCount++;const s=new ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const c=Al(n,u=>xt(u));o=IO(t.serverSyncTree_,s,c,r)}else{const c=xt(n);o=wO(t.serverSyncTree_,s,c,r)}else if(i){const c=Al(n,u=>xt(u));o=TO(t.serverSyncTree_,s,c)}else{const c=xt(n);o=Mc(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=wf(t,s)),Mr(t.eventQueue_,a,o)}function Ym(t,e){Ef(t,"connected",e),e===!1&&KO(t)}function WO(t,e){gn(e,(n,i)=>{Ef(t,n,i)})}function Ef(t,e,n){const i=new ze("/.info/"+e),r=xt(n);t.infoData_.updateSnapshot(i,r);const s=Mc(t.infoSyncTree_,i,r);Mr(t.eventQueue_,i,s)}function zO(t){return t.nextWriteId_++}function KO(t){rT(t,"onDisconnectEvents");const e=iT(t),n=Ql();Nh(t.onDisconnect_,Ue(),(r,s)=>{const o=bO(r,s,t.serverSyncTree_,e);NE(n,r,o)});let i=[];Nh(n,Ue(),(r,s)=>{i=i.concat(Mc(t.serverSyncTree_,r,s));const o=JO(t,r);wf(t,o)}),t.onDisconnect_=Ql(),Mr(t.eventQueue_,Ue(),i)}function QO(t){t.persistentConnection_&&t.persistentConnection_.interrupt($O)}function rT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Dt(n,...e)}function sT(t,e,n){return WE(t.serverSyncTree_,e,n)||Me.EMPTY_NODE}function Tf(t,e=t.transactionQueueTree_){if(e||Uc(t,e),qs(e)){const n=aT(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&YO(t,Ta(e),n)}else ZE(e)&&Fc(e,n=>{Tf(t,n)})}function YO(t,e,n){const i=n.map(u=>u.currentWriteId),r=sT(t,e,i);let s=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];K(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=hn(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,u=>{rT(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let g=0;g<n.length;g++)n[g].status=2,h=h.concat(ts(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&f.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Uc(t,vf(t.transactionQueueTree_,e)),Tf(t,t.transactionQueueTree_),Mr(t.eventQueue_,e,h);for(let g=0;g<f.length;g++)va(f[g])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{sn("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}wf(t,e)}},o)}function wf(t,e){const n=oT(t,e),i=Ta(n),r=aT(t,n);return XO(t,r,i),i}function XO(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=hn(n,c.path);let h=!1,f;if(K(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,r=r.concat(ts(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=qO)h=!0,f="maxretry",r=r.concat(ts(t.serverSyncTree_,c.currentWriteId,!0));else{const g=sT(t,c.path,o);c.currentInputSnapshot=g;const _=e[a].update(g.val());if(_!==void 0){nT("transaction failed: Data returned ",_,c.path);let C=xt(_);typeof _=="object"&&_!=null&&vi(_,".priority")||(C=C.updatePriority(g.getPriority()));const N=c.currentWriteId,q=iT(t),V=RO(C,g,q);c.currentOutputSnapshotRaw=C,c.currentOutputSnapshotResolved=V,c.currentWriteId=zO(t),o.splice(o.indexOf(N),1),r=r.concat(EO(t.serverSyncTree_,c.path,V,c.currentWriteId,c.applyLocally)),r=r.concat(ts(t.serverSyncTree_,N,!0))}else h=!0,f="nodata",r=r.concat(ts(t.serverSyncTree_,c.currentWriteId,!0))}Mr(t.eventQueue_,n,r),r=[],h&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}Uc(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)va(i[a]);Tf(t,t.transactionQueueTree_)}function oT(t,e){let n,i=t.transactionQueueTree_;for(n=Re(e);n!==null&&qs(i)===void 0;)i=vf(i,n),e=He(e),n=Re(e);return i}function aT(t,e){const n=[];return lT(t,e,n),n.sort((i,r)=>i.order-r.order),n}function lT(t,e,n){const i=qs(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Fc(e,r=>{lT(t,r,n)})}function Uc(t,e){const n=qs(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,JE(e,n.length>0?n:void 0)}Fc(e,i=>{Uc(t,i)})}function JO(t,e){const n=Ta(oT(t,e)),i=vf(t.transactionQueueTree_,e);return kO(i,r=>{xu(t,r)}),xu(t,i),eT(i,r=>{xu(t,r)}),n}function xu(t,e){const n=qs(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(ts(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?JE(e,void 0):n.length=s+1,Mr(t.eventQueue_,Ta(e),r);for(let o=0;o<i.length;o++)va(i[o])}}/**
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
 */function ZO(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function eD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):sn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Xm=function(t,e){const n=tD(t),i=n.namespace;n.domain==="firebase.com"&&Ar(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kk();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $k(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new ze(n.pathString)}},tD=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(r=ZO(t.substring(h,f)));const g=eD(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const C=e.indexOf(".");i=e.substring(0,C).toLowerCase(),n=e.substring(C+1),s=i}"ns"in g&&(s=g.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class If{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return Ce(this._path)?null:TE(this._path)}get ref(){return new js(this._repo,this._path)}get _queryIdentifier(){const e=Mm(this._queryParams),n=nf(e);return n==="{}"?"default":n}get _queryObject(){return Mm(this._queryParams)}isEqual(e){if(e=Bt(e),!(e instanceof If))return!1;const n=this._repo===e._repo,i=CE(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+fN(this._path)}}class js extends If{constructor(e,n){super(e,n,new cf,!1)}get parent(){const e=IE(this._path);return e===null?null:new js(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}yO(js);vO(js);/**
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
 */const nD="FIREBASE_DATABASE_EMULATOR_HOST",Uh={};let iD=!1;function rD(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Dt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Xm(s,r),a=o.repoInfo,c;typeof process<"u"&&_m&&(c=_m[nD]),c?(s=`http://${c}?ns=${a.namespace}`,o=Xm(s,r),a=o.repoInfo):o.repoInfo.secure;const u=new Bk(t.name,t.options,e);MO("Invalid Firebase Database URL",o),Ce(o.path)||Ar("Database URL must point to the root of a Firebase Database (not including a child path).");const h=oD(a,t,u,new Uk(t.name,n));return new aD(h,t)}function sD(t,e){const n=Uh[e];(!n||n[t.key]!==t)&&Ar(`Database ${e}(${t.repoInfo_}) has already been deleted.`),QO(t),delete n[t.key]}function oD(t,e,n,i){let r=Uh[e.name];r||(r={},Uh[e.name]=r);let s=r[t.toURLString()];return s&&Ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new jO(t,iD,n,i),r[t.toURLString()]=s,s}class aD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(GO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new js(this._repo,Ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ar("Cannot call "+e+" on a deleted database.")}}/**
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
 */function lD(t){Ck(er),Gn(new An("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return rD(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),rn(ym,vm,t),rn(ym,vm,"esm2017")}hi.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};hi.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};lD();/**
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
 */const cT="firebasestorage.googleapis.com",cD="storageBucket",uD=2*60*1e3,hD=10*60*1e3;/**
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
 */class Yn extends Qn{constructor(e,n,i=0){super(Lu(e),`Firebase Storage: ${n} (${Lu(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Yn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Wn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Wn||(Wn={}));function Lu(t){return"storage/"+t}function dD(){const t="An unknown error occurred, please check the error payload for server response.";return new Yn(Wn.UNKNOWN,t)}function fD(){return new Yn(Wn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pD(){return new Yn(Wn.CANCELED,"User canceled the upload/download.")}function gD(t){return new Yn(Wn.INVALID_URL,"Invalid URL '"+t+"'.")}function mD(t){return new Yn(Wn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Jm(t){return new Yn(Wn.INVALID_ARGUMENT,t)}function uT(){return new Yn(Wn.APP_DELETED,"The Firebase app was deleted.")}function _D(t){return new Yn(Wn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class wn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=wn.makeFromUrl(e,n)}catch{return new wn(e,"")}if(i.path==="")return i;throw mD(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u($){$.path_=decodeURIComponent($.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${r}/o${g}`,"i"),C={bucket:1,path:3},k=n===cT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",q=new RegExp(`^https?://${k}/${r}/${N}`,"i"),B=[{regex:a,indices:c,postModify:s},{regex:_,indices:C,postModify:u},{regex:q,indices:{bucket:1,path:2},postModify:u}];for(let $=0;$<B.length;$++){const ee=B[$],re=ee.regex.exec(e);if(re){const I=re[ee.indices.bucket];let y=re[ee.indices.path];y||(y=""),i=new wn(I,y),ee.postModify(i);break}}if(i==null)throw gD(e);return i}}class yD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function vD(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...N){u||(u=!0,e.apply(null,N))}function f(N){r=setTimeout(()=>{r=null,t(_,c())},N)}function g(){s&&clearTimeout(s)}function _(N,...q){if(u){g();return}if(N){g(),h.call(null,N,...q);return}if(c()||o){g(),h.call(null,N,...q);return}i<64&&(i*=2);let B;a===1?(a=2,B=0):B=(i+Math.random())*1e3,f(B)}let C=!1;function k(N){C||(C=!0,g(),!u&&(r!==null?(N||(a=2),clearTimeout(r),f(0)):N||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function ED(t){t(!1)}/**
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
 */function TD(t){return t!==void 0}function Zm(t,e,n,i){if(i<e)throw Jm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Jm(`Invalid value for '${t}'. Expected ${n} or less.`)}function wD(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var Zl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zl||(Zl={}));/**
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
 */function ID(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
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
 */class CD{constructor(e,n,i,r,s,o,a,c,u,h,f,g=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,C)=>{this.resolve_=_,this.reject_=C,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Ja(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Zl.NO_ERROR,c=s.getStatus();if(!a||ID(c,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Zl.ABORT;i(!1,new Ja(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;i(!0,new Ja(u,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());TD(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=dD();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?uT():pD();o(c)}else{const c=fD();o(c)}};this.canceled_?n(!1,new Ja(!1,null,!0)):this.backoffId_=vD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ED(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ja{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function AD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function SD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function RD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function PD(t,e,n,i,r,s,o=!0){const a=wD(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return bD(u,e),AD(u,n),SD(u,s),RD(u,i),new CD(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function kD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ND(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ec{constructor(e,n){this._service=e,n instanceof wn?this._location=n:this._location=wn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ec(e,n)}get root(){const e=new wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ND(this._location.path)}get storage(){return this._service}get parent(){const e=kD(this._location.path);if(e===null)return null;const n=new wn(this._location.bucket,e);return new ec(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _D(e)}}function e_(t,e){const n=e==null?void 0:e[cD];return n==null?null:wn.makeFromBucketSpec(n,t)}class OD{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=cT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uD,this._maxUploadRetryTime=hD,this._requests=new Set,r!=null?this._bucket=wn.makeFromBucketSpec(r,this._host):this._bucket=e_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wn.makeFromBucketSpec(this._url,e):this._bucket=e_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ec(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new yD(uT());{const o=PD(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const t_="@firebase/storage",n_="0.13.4";/**
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
 */const DD="storage";function xD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new OD(n,i,r,e,er)}function LD(){Gn(new An(DD,xD,"PUBLIC").setMultipleInstances(!0)),rn(t_,n_,""),rn(t_,n_,"esm2017")}LD();function MD(t,{firebaseApp:e,modules:n=[]}){t.provide(Ik,e);for(const i of n)i(e,t)}function VD(){return hT().__VUE_DEVTOOLS_GLOBAL_HOOK__}function hT(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const FD=typeof Proxy=="function",UD="devtools-plugin:setup",BD="plugin:settings:set";let Gr,Bh;function $D(){var t;return Gr!==void 0||(typeof window<"u"&&window.performance?(Gr=!0,Bh=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Gr=!0,Bh=globalThis.perf_hooks.performance):Gr=!1),Gr}function qD(){return $D()?Bh.now():Date.now()}class jD{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},i);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}s=o},now(){return qD()}},n&&n.on(BD,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function GD(t,e){const n=t,i=hT(),r=VD(),s=FD&&n.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(UD,t,e);else{const o=s?new jD(n,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Xr=typeof document<"u";function dT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function HD(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&dT(t.default)}const De=Object.assign;function Mu(t,e){const n={};for(const i in e){const r=e[i];n[i]=Pn(r)?r.map(t):t(r)}return n}const xo=()=>{},Pn=Array.isArray,fT=/#/g,WD=/&/g,zD=/\//g,KD=/=/g,QD=/\?/g,pT=/\+/g,YD=/%5B/g,XD=/%5D/g,gT=/%5E/g,JD=/%60/g,mT=/%7B/g,ZD=/%7C/g,_T=/%7D/g,ex=/%20/g;function Cf(t){return encodeURI(""+t).replace(ZD,"|").replace(YD,"[").replace(XD,"]")}function tx(t){return Cf(t).replace(mT,"{").replace(_T,"}").replace(gT,"^")}function $h(t){return Cf(t).replace(pT,"%2B").replace(ex,"+").replace(fT,"%23").replace(WD,"%26").replace(JD,"`").replace(mT,"{").replace(_T,"}").replace(gT,"^")}function nx(t){return $h(t).replace(KD,"%3D")}function ix(t){return Cf(t).replace(fT,"%23").replace(QD,"%3F")}function rx(t){return t==null?"":ix(t).replace(zD,"%2F")}function na(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const sx=/\/$/,ox=t=>t.replace(sx,"");function Vu(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=ux(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:na(o)}}function ax(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function i_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lx(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&bs(e.matched[i],n.matched[r])&&yT(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yT(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cx(t[n],e[n]))return!1;return!0}function cx(t,e){return Pn(t)?r_(t,e):Pn(e)?r_(e,t):t===e}function r_(t,e){return Pn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function ux(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Si={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ia;(function(t){t.pop="pop",t.push="push"})(ia||(ia={}));var Lo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Lo||(Lo={}));function hx(t){if(!t)if(Xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ox(t)}const dx=/^[^#]+#/;function fx(t,e){return t.replace(dx,"#")+e}function px(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Bc=()=>({left:window.scrollX,top:window.scrollY});function gx(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=px(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function s_(t,e){return(history.state?history.state.position-e:-1)+t}const qh=new Map;function mx(t,e){qh.set(t,e)}function _x(t){const e=qh.get(t);return qh.delete(t),e}let yx=()=>location.protocol+"//"+location.host;function vT(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),i_(c,"")}return i_(n,t)+i+r}function vx(t,e,n,i){let r=[],s=[],o=null;const a=({state:g})=>{const _=vT(t,location),C=n.value,k=e.value;let N=0;if(g){if(n.value=_,e.value=g,o&&o===C){o=null;return}N=k?g.position-k.position:0}else i(_);r.forEach(q=>{q(n.value,C,{delta:N,type:ia.pop,direction:N?N>0?Lo.forward:Lo.back:Lo.unknown})})};function c(){o=n.value}function u(g){r.push(g);const _=()=>{const C=r.indexOf(g);C>-1&&r.splice(C,1)};return s.push(_),_}function h(){const{history:g}=window;g.state&&g.replaceState(De({},g.state,{scroll:Bc()}),"")}function f(){for(const g of s)g();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function o_(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Bc():null}}function Ex(t){const{history:e,location:n}=window,i={value:vT(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,h){const f=t.indexOf("#"),g=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:yx()+t+c;try{e[h?"replaceState":"pushState"](u,"",g),r.value=u}catch(_){console.error(_),n[h?"replace":"assign"](g)}}function o(c,u){const h=De({},e.state,o_(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});s(c,h,!0),i.value=c}function a(c,u){const h=De({},r.value,e.state,{forward:c,scroll:Bc()});s(h.current,h,!0);const f=De({},o_(i.value,c,null),{position:h.position+1},u);s(c,f,!1),i.value=c}return{location:i,state:r,push:a,replace:o}}function Tx(t){t=hx(t);const e=Ex(t),n=vx(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=De({location:"",base:t,go:i,createHref:fx.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function wx(t){return typeof t=="string"||t&&typeof t=="object"}function ET(t){return typeof t=="string"||typeof t=="symbol"}const TT=Symbol("");var a_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(a_||(a_={}));function Rs(t,e){return De(new Error,{type:t,[TT]:!0},e)}function ei(t,e){return t instanceof Error&&TT in t&&(e==null||!!(t.type&e))}const l_="[^/]+?",Ix={sensitive:!1,strict:!1,start:!0,end:!0},Cx=/[.+*?^${}()[\]/\\]/g;function Ax(t,e){const n=De({},Ix,e),i=[];let r=n.start?"^":"";const s=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const g=u[f];let _=40+(n.sensitive?.25:0);if(g.type===0)f||(r+="/"),r+=g.value.replace(Cx,"\\$&"),_+=40;else if(g.type===1){const{value:C,repeatable:k,optional:N,regexp:q}=g;s.push({name:C,repeatable:k,optional:N});const V=q||l_;if(V!==l_){_+=10;try{new RegExp(`(${V})`)}catch($){throw new Error(`Invalid custom RegExp for param "${C}" (${V}): `+$.message)}}let B=k?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;f||(B=N&&u.length<2?`(?:/${B})`:"/"+B),N&&(B+="?"),r+=B,_+=20,N&&(_+=-8),k&&(_+=-20),V===".*"&&(_+=-50)}h.push(_)}i.push(h)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let g=1;g<h.length;g++){const _=h[g]||"",C=s[g-1];f[C.name]=_&&C.repeatable?_.split("/"):_}return f}function c(u){let h="",f=!1;for(const g of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const _ of g)if(_.type===0)h+=_.value;else if(_.type===1){const{value:C,repeatable:k,optional:N}=_,q=C in u?u[C]:"";if(Pn(q)&&!k)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const V=Pn(q)?q.join("/"):q;if(!V)if(N)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${C}"`);h+=V}}return h||"/"}return{re:o,score:i,keys:s,parse:a,stringify:c}}function Sx(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function wT(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=Sx(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(c_(i))return 1;if(c_(r))return-1}return r.length-i.length}function c_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bx={type:0,value:""},Rx=/[a-zA-Z0-9_]/;function Px(t){if(!t)return[[]];if(t==="/")return[[bx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,c,u="",h="";function f(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):g();break;case 4:g(),n=i;break;case 1:c==="("?n=2:Rx.test(c)?g():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function kx(t,e,n){const i=Ax(Px(t.path),n),r=De(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Nx(t,e){const n=[],i=new Map;e=f_({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,g,_){const C=!_,k=h_(f);k.aliasOf=_&&_.record;const N=f_(e,f),q=[k];if("alias"in f){const $=typeof f.alias=="string"?[f.alias]:f.alias;for(const ee of $)q.push(h_(De({},k,{components:_?_.record.components:k.components,path:ee,aliasOf:_?_.record:k})))}let V,B;for(const $ of q){const{path:ee}=$;if(g&&ee[0]!=="/"){const re=g.record.path,I=re[re.length-1]==="/"?"":"/";$.path=g.record.path+(ee&&I+ee)}if(V=kx($,g,N),_?_.alias.push(V):(B=B||V,B!==V&&B.alias.push(V),C&&f.name&&!d_(V)&&o(f.name)),IT(V)&&c(V),k.children){const re=k.children;for(let I=0;I<re.length;I++)s(re[I],V,_&&_.children[I])}_=_||V}return B?()=>{o(B)}:xo}function o(f){if(ET(f)){const g=i.get(f);g&&(i.delete(f),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(f);g>-1&&(n.splice(g,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const g=xx(f,n);n.splice(g,0,f),f.record.name&&!d_(f)&&i.set(f.record.name,f)}function u(f,g){let _,C={},k,N;if("name"in f&&f.name){if(_=i.get(f.name),!_)throw Rs(1,{location:f});N=_.record.name,C=De(u_(g.params,_.keys.filter(B=>!B.optional).concat(_.parent?_.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),f.params&&u_(f.params,_.keys.map(B=>B.name))),k=_.stringify(C)}else if(f.path!=null)k=f.path,_=n.find(B=>B.re.test(k)),_&&(C=_.parse(k),N=_.record.name);else{if(_=g.name?i.get(g.name):n.find(B=>B.re.test(g.path)),!_)throw Rs(1,{location:f,currentLocation:g});N=_.record.name,C=De({},g.params,f.params),k=_.stringify(C)}const q=[];let V=_;for(;V;)q.unshift(V.record),V=V.parent;return{name:N,path:k,params:C,matched:q,meta:Dx(q)}}t.forEach(f=>s(f));function h(){n.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function u_(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function h_(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Ox(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ox(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function d_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Dx(t){return t.reduce((e,n)=>De(e,n.meta),{})}function f_(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function xx(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;wT(t,e[s])<0?i=s:n=s+1}const r=Lx(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function Lx(t){let e=t;for(;e=e.parent;)if(IT(e)&&wT(t,e)===0)return e}function IT({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Mx(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(pT," "),o=s.indexOf("="),a=na(o<0?s:s.slice(0,o)),c=o<0?null:na(s.slice(o+1));if(a in e){let u=e[a];Pn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function p_(t){let e="";for(let n in t){const i=t[n];if(n=nx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pn(i)?i.map(s=>s&&$h(s)):[i&&$h(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Vx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Pn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Fx=Symbol(""),g_=Symbol(""),Af=Symbol(""),CT=Symbol(""),jh=Symbol("");function ho(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=g=>{g===!1?c(Rs(4,{from:n,to:e})):g instanceof Error?c(g):wx(g)?c(Rs(2,{from:e,to:g})):(o&&i.enterCallbacks[r]===o&&typeof g=="function"&&o.push(g),a())},h=s(()=>t.call(i&&i.instances[r],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(g=>c(g))})}function Fu(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(dT(c)){const h=(c.__vccOpts||c)[e];h&&s.push(Pi(h,n,i,o,a,r))}else{let u=c();s.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=HD(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const _=(f.__vccOpts||f)[e];return _&&Pi(_,n,i,o,a,r)()}))}}return s}function m_(t){const e=li(Af),n=li(CT),i=Fe(()=>{const c=ve(t.to);return e.resolve(c)}),r=Fe(()=>{const{matched:c}=i.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const g=f.findIndex(bs.bind(null,h));if(g>-1)return g;const _=__(c[u-2]);return u>1&&__(h)===_&&f[f.length-1].path!==_?f.findIndex(bs.bind(null,c[u-2])):g}),s=Fe(()=>r.value>-1&&jx(n.params,i.value.params)),o=Fe(()=>r.value>-1&&r.value===n.matched.length-1&&yT(n.params,i.value.params));function a(c={}){if(qx(c)){const u=e[ve(t.replace)?"replace":"push"](ve(t.to)).catch(xo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:Fe(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function Ux(t){return t.length===1?t[0]:t}const Bx=mt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:m_,setup(t,{slots:e}){const n=mn(m_(t)),{options:i}=li(Af),r=Fe(()=>({[y_(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[y_(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&Ux(e.default(n));return t.custom?s:Jr("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),$x=Bx;function qx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jx(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Pn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function __(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const y_=(t,e,n)=>t??e??n,Gx=mt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=li(jh),r=Fe(()=>t.route||i.value),s=li(g_,0),o=Fe(()=>{let u=ve(s);const{matched:h}=r.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=Fe(()=>r.value.matched[o.value]);Za(g_,Fe(()=>o.value+1)),Za(Fx,a),Za(jh,r);const c=Ze();return ls(()=>[c.value,a.value,t.name],([u,h,f],[g,_,C])=>{h&&(h.instances[f]=u,_&&_!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!bs(h,_)||!g)&&(h.enterCallbacks[f]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,f=a.value,g=f&&f.components[h];if(!g)return v_(n.default,{Component:g,route:u});const _=f.props[h],C=_?_===!0?u.params:typeof _=="function"?_(u):_:null,N=Jr(g,De({},C,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return v_(n.default,{Component:N,route:u})||N}}});function v_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Hx=Gx;function Wx(t){const e=Nx(t.routes,t),n=t.parseQuery||Mx,i=t.stringifyQuery||p_,r=t.history,s=ho(),o=ho(),a=ho(),c=Xw(Si);let u=Si;Xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Mu.bind(null,D=>""+D),f=Mu.bind(null,rx),g=Mu.bind(null,na);function _(D,X){let Q,ne;return ET(D)?(Q=e.getRecordMatcher(D),ne=X):ne=D,e.addRoute(ne,Q)}function C(D){const X=e.getRecordMatcher(D);X&&e.removeRoute(X)}function k(){return e.getRoutes().map(D=>D.record)}function N(D){return!!e.getRecordMatcher(D)}function q(D,X){if(X=De({},X||c.value),typeof D=="string"){const b=Vu(n,D,X.path),x=e.resolve({path:b.path},X),F=r.createHref(b.fullPath);return De(b,x,{params:g(x.params),hash:na(b.hash),redirectedFrom:void 0,href:F})}let Q;if(D.path!=null)Q=De({},D,{path:Vu(n,D.path,X.path).path});else{const b=De({},D.params);for(const x in b)b[x]==null&&delete b[x];Q=De({},D,{params:f(b)}),X.params=f(X.params)}const ne=e.resolve(Q,X),Ne=D.hash||"";ne.params=h(g(ne.params));const v=ax(i,De({},D,{hash:tx(Ne),path:ne.path})),E=r.createHref(v);return De({fullPath:v,hash:Ne,query:i===p_?Vx(D.query):D.query||{}},ne,{redirectedFrom:void 0,href:E})}function V(D){return typeof D=="string"?Vu(n,D,c.value.path):De({},D)}function B(D,X){if(u!==D)return Rs(8,{from:X,to:D})}function $(D){return I(D)}function ee(D){return $(De(V(D),{replace:!0}))}function re(D){const X=D.matched[D.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let ne=typeof Q=="function"?Q(D):Q;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=V(ne):{path:ne},ne.params={}),De({query:D.query,hash:D.hash,params:ne.path!=null?{}:D.params},ne)}}function I(D,X){const Q=u=q(D),ne=c.value,Ne=D.state,v=D.force,E=D.replace===!0,b=re(Q);if(b)return I(De(V(b),{state:typeof b=="object"?De({},Ne,b.state):Ne,force:v,replace:E}),X||Q);const x=Q;x.redirectedFrom=X;let F;return!v&&lx(i,ne,Q)&&(F=Rs(16,{to:x,from:ne}),an(ne,ne,!0,!1)),(F?Promise.resolve(F):A(x,ne)).catch(L=>ei(L)?ei(L,2)?L:yn(L):Te(L,x,ne)).then(L=>{if(L){if(ei(L,2))return I(De({replace:E},V(L.to),{state:typeof L.to=="object"?De({},Ne,L.to.state):Ne,force:v}),X||x)}else L=R(x,ne,!0,E,Ne);return S(x,ne,L),L})}function y(D,X){const Q=B(D,X);return Q?Promise.reject(Q):Promise.resolve()}function T(D){const X=Ei.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(D):D()}function A(D,X){let Q;const[ne,Ne,v]=zx(D,X);Q=Fu(ne.reverse(),"beforeRouteLeave",D,X);for(const b of ne)b.leaveGuards.forEach(x=>{Q.push(Pi(x,D,X))});const E=y.bind(null,D,X);return Q.push(E),zt(Q).then(()=>{Q=[];for(const b of s.list())Q.push(Pi(b,D,X));return Q.push(E),zt(Q)}).then(()=>{Q=Fu(Ne,"beforeRouteUpdate",D,X);for(const b of Ne)b.updateGuards.forEach(x=>{Q.push(Pi(x,D,X))});return Q.push(E),zt(Q)}).then(()=>{Q=[];for(const b of v)if(b.beforeEnter)if(Pn(b.beforeEnter))for(const x of b.beforeEnter)Q.push(Pi(x,D,X));else Q.push(Pi(b.beforeEnter,D,X));return Q.push(E),zt(Q)}).then(()=>(D.matched.forEach(b=>b.enterCallbacks={}),Q=Fu(v,"beforeRouteEnter",D,X,T),Q.push(E),zt(Q))).then(()=>{Q=[];for(const b of o.list())Q.push(Pi(b,D,X));return Q.push(E),zt(Q)}).catch(b=>ei(b,8)?b:Promise.reject(b))}function S(D,X,Q){a.list().forEach(ne=>T(()=>ne(D,X,Q)))}function R(D,X,Q,ne,Ne){const v=B(D,X);if(v)return v;const E=X===Si,b=Xr?history.state:{};Q&&(ne||E?r.replace(D.fullPath,De({scroll:E&&b&&b.scroll},Ne)):r.push(D.fullPath,Ne)),c.value=D,an(D,X,Q,E),yn()}let w;function $t(){w||(w=r.listen((D,X,Q)=>{if(!Nn.listening)return;const ne=q(D),Ne=re(ne);if(Ne){I(De(Ne,{replace:!0,force:!0}),ne).catch(xo);return}u=ne;const v=c.value;Xr&&mx(s_(v.fullPath,Q.delta),Bc()),A(ne,v).catch(E=>ei(E,12)?E:ei(E,2)?(I(De(V(E.to),{force:!0}),ne).then(b=>{ei(b,20)&&!Q.delta&&Q.type===ia.pop&&r.go(-1,!1)}).catch(xo),Promise.reject()):(Q.delta&&r.go(-Q.delta,!1),Te(E,ne,v))).then(E=>{E=E||R(ne,v,!1),E&&(Q.delta&&!ei(E,8)?r.go(-Q.delta,!1):Q.type===ia.pop&&ei(E,20)&&r.go(-1,!1)),S(ne,v,E)}).catch(xo)}))}let on=ho(),tt=ho(),Ae;function Te(D,X,Q){yn(D);const ne=tt.list();return ne.length?ne.forEach(Ne=>Ne(D,X,Q)):console.error(D),Promise.reject(D)}function Xt(){return Ae&&c.value!==Si?Promise.resolve():new Promise((D,X)=>{on.add([D,X])})}function yn(D){return Ae||(Ae=!D,$t(),on.list().forEach(([X,Q])=>D?Q(D):X()),on.reset()),D}function an(D,X,Q,ne){const{scrollBehavior:Ne}=t;if(!Xr||!Ne)return Promise.resolve();const v=!Q&&_x(s_(D.fullPath,0))||(ne||!Q)&&history.state&&history.state.scroll||null;return yr().then(()=>Ne(D,X,v)).then(E=>E&&gx(E)).catch(E=>Te(E,D,X))}const Qe=D=>r.go(D);let Ye;const Ei=new Set,Nn={currentRoute:c,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:k,resolve:q,options:t,push:$,replace:ee,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:tt.add,isReady:Xt,install(D){const X=this;D.component("RouterLink",$x),D.component("RouterView",Hx),D.config.globalProperties.$router=X,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>ve(c)}),Xr&&!Ye&&c.value===Si&&(Ye=!0,$(r.location).catch(Ne=>{}));const Q={};for(const Ne in Si)Object.defineProperty(Q,Ne,{get:()=>c.value[Ne],enumerable:!0});D.provide(Af,X),D.provide(CT,W_(Q)),D.provide(jh,c);const ne=D.unmount;Ei.add(D),D.unmount=function(){Ei.delete(D),Ei.size<1&&(u=Si,w&&w(),w=null,c.value=Si,Ye=!1,Ae=!1),ne()}}};function zt(D){return D.reduce((X,Q)=>X.then(()=>T(Q)),Promise.resolve())}return Nn}function zx(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>bs(u,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>bs(u,c))||r.push(c))}return[n,i,r]}const wa={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Ps={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},Wt={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Kx={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},AT={dangerouslyHTMLString:!1,multiple:!0,position:wa.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},Qx={rtl:!1,newestOnTop:!1,toastClassName:""},ST={...AT,...Qx};({...AT,type:Wt.DEFAULT});var Le=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(Le||{}),Gh=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(Gh||{});const Yx={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},Xx={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},Jx={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},Zx={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},E_="Toastify--animate Toastify__none-enter";function bT(t,e=!1){var n;let i=Yx;if(!t||typeof t=="string")switch(t){case"flip":i=Zx;break;case"zoom":i=Jx;break;case"slide":i=Xx;break}else i=t;if(e)i.enter=E_;else if(i.enter===E_){const r=(n=i.exit.split("__")[1])==null?void 0:n.split("-")[0];i.enter=`Toastify--animate Toastify__${r}-enter`}return i}function eL(t){return t.containerId||String(t.position)}const $c="will-unmount";function tL(t=wa.TOP_RIGHT){return!!document.querySelector(`.${Le.CSS_NAMESPACE}__toast-container--${t}`)}function nL(t=wa.TOP_RIGHT){return`${Le.CSS_NAMESPACE}__toast-container--${t}`}function iL(t,e,n=!1){const i=[`${Le.CSS_NAMESPACE}__toast-container`,`${Le.CSS_NAMESPACE}__toast-container--${t}`,n?`${Le.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return gs(e)?e({position:t,rtl:n,defaultClassName:i}):`${i} ${e||""}`}function rL(t){var e;const{position:n,containerClassName:i,rtl:r=!1,style:s={}}=t,o=Le.CSS_NAMESPACE,a=nL(n),c=document.querySelector(`.${o}`),u=document.querySelector(`.${a}`),h=!!u&&!((e=u.className)!=null&&e.includes($c)),f=c||document.createElement("div"),g=document.createElement("div");g.className=iL(n,i,r),g.dataset.testid=`${Le.CSS_NAMESPACE}__toast-container--${n}`,g.id=eL(t);for(const _ in s)if(Object.prototype.hasOwnProperty.call(s,_)){const C=s[_];g.style[_]=C}return c||(f.className=Le.CSS_NAMESPACE,document.body.appendChild(f)),h||f.appendChild(g),g}function Hh(t){var e,n,i;const r=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),s=document.getElementById(r);s&&s.removeEventListener("animationend",Hh,!1);try{ra[r].unmount(),(i=document.getElementById(r))==null||i.remove(),delete ra[r],delete Et[r]}catch{}}const ra=mn({});function sL(t,e){const n=document.getElementById(String(e));n&&(ra[n.id]=t)}function Wh(t,e=!0){const n=String(t);if(!ra[n])return;const i=document.getElementById(n);i&&i.classList.add($c),e?(aL(t),i&&i.addEventListener("animationend",Hh,!1)):Hh(n),zn.items=zn.items.filter(r=>r.containerId!==t)}function oL(t){for(const e in ra)Wh(e,t);zn.items=[]}function RT(t,e){const n=document.getElementById(t.toastId);if(n){let i=t;i={...i,...bT(i.transition)};const r=i.appendPosition?`${i.exit}--${i.position}`:i.exit;n.className+=` ${r}`,e&&e(n)}}function aL(t){for(const e in Et)if(e===t)for(const n of Et[e]||[])RT(n)}function lL(t){const e=ks().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function Sf(t){return document.getElementById(t)}function cL(t){const e=Sf(t.containerId);return e&&e.classList.contains($c)}function T_(t){var e;const n=vr(t.content)?ye(t.content.props):null;return n??ye((e=t.data)!=null?e:{})}function uL(t){return t?zn.items.filter(e=>e.containerId===t).length>0:zn.items.length>0}function hL(){if(zn.items.length>0){const t=zn.items.shift();fl(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const Et=mn({}),zn=mn({items:[]});function ks(){const t=ye(Et);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function dL(t){return ks().find(e=>e.toastId===t)}function fl(t,e={}){if(cL(e)){const n=Sf(e.containerId);n&&n.addEventListener("animationend",zh.bind(null,t,e),!1)}else zh(t,e)}function zh(t,e={}){const n=Sf(e.containerId);n&&n.removeEventListener("animationend",zh.bind(null,t,e),!1);const i=Et[e.containerId]||[],r=i.length>0;if(!r&&!tL(e.position)){const s=rL(e),o=R0(OL,e);e.useHandler&&e.useHandler(o),o.mount(s),sL(o,s.id)}r&&!e.updateId&&(e.position=i[0].position),yr(()=>{e.updateId?tn.update(e):tn.add(t,e)})}const tn={add(t,e){const{containerId:n=""}=e;n&&(Et[n]=Et[n]||[],Et[n].find(i=>i.toastId===e.toastId)||setTimeout(()=>{var i,r;e.newestOnTop?(i=Et[n])==null||i.unshift(e):(r=Et[n])==null||r.push(e),e.onOpen&&e.onOpen(T_(e))},e.delay||0))},remove(t){if(t){const e=lL(t);if(e){const n=Et[e];let i=n.find(r=>r.toastId===t);Et[e]=n.filter(r=>r.toastId!==t),!Et[e].length&&!uL(e)&&Wh(e,!1),hL(),yr(()=>{i!=null&&i.onClose&&(i.onClose(T_(i)),i=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){Et[e]=Et[e]||[];const n=Et[e].find(s=>s.toastId===t.toastId),i=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,r={...t,disabledEnterTransition:!i,updateId:void 0};tn.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{ke(r.content,r)},t.delay||0)}},clear(t,e=!0){t?Wh(t,e):oL(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,i=document.getElementById(n);i&&(i.removeEventListener("animationend",tn.dismissCallback,!1),setTimeout(()=>{tn.remove(n)}))},dismiss(t){if(t){const e=ks();for(const n of e)if(n.toastId===t){RT(n,i=>{i.addEventListener("animationend",tn.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=ks();for(const n of e)if(n.toastId===t){const i=document.getElementById(t);i&&(i.remove(),i.removeEventListener("animationend",tn.dismissCallback,!1),tn.remove(t));break}}}},fL=mn({useHandler:void 0}),PT=mn({}),tc=mn({});function kT(){return Math.random().toString(36).substring(2,9)}function pL(t){return typeof t=="number"&&!isNaN(t)}function Kh(t){return typeof t=="string"}function gs(t){return typeof t=="function"}function qc(...t){return yi(...t)}function pl(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function gL(t={}){PT[`${Le.CSS_NAMESPACE}-default-options`]=t}function mL(){return PT[`${Le.CSS_NAMESPACE}-default-options`]||ST}function _L(){const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return document.documentElement.classList.contains("dark")||t?"dark":"light"}var gl=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(gl||{});const NT={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:wa.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:Ps.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:Wt.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""},contentProps:{type:Object,required:!1,default:null},expandCustomProps:{type:Boolean,required:!1,default:!1}},yL={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:Wt.DEFAULT},theme:{type:String,required:!1,default:Ps.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},vL=mt({name:"ProgressBar",props:yL,setup(t,{attrs:e}){const n=Ze(),i=Fe(()=>t.hide?"true":"false"),r=Fe(()=>({...e.style||{},animationDuration:`${t.autoClose===!0?5e3:t.autoClose}ms`,animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?`scaleX(${t.progress})`:"none"})),s=Fe(()=>[`${Le.CSS_NAMESPACE}__progress-bar`,t.controlledProgress?`${Le.CSS_NAMESPACE}__progress-bar--controlled`:`${Le.CSS_NAMESPACE}__progress-bar--animated`,`${Le.CSS_NAMESPACE}__progress-bar-theme--${t.theme}`,`${Le.CSS_NAMESPACE}__progress-bar--${t.type}`,t.rtl?`${Le.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),o=Fe(()=>`${s.value} ${(e==null?void 0:e.class)||""}`),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},c=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},u=Fe(()=>t.controlledProgress?null:c),h=Fe(()=>t.controlledProgress?c:null);return el(()=>{n.value&&(a(),n.value.onanimationend=u.value,n.value.ontransitionend=h.value)}),()=>Z("div",{ref:n,role:"progressbar","aria-hidden":i.value,"aria-label":"notification timer",class:o.value,style:r.value},null)}}),EL=mt({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:Ps.AUTO},type:{type:String,required:!1,default:Ps.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>Z("button",{class:`${Le.CSS_NAMESPACE}__close-button ${Le.CSS_NAMESPACE}__close-button--${t.theme}`,type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[Z("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[Z("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),jc=({theme:t,type:e,path:n,...i})=>Z("svg",yi({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`},i),[Z("path",{d:n},null)]);function TL(t){return Z(jc,yi(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function wL(t){return Z(jc,yi(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function IL(t){return Z(jc,yi(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function CL(t){return Z(jc,yi(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function AL(){return Z("div",{class:`${Le.CSS_NAMESPACE}__spinner`},null)}const ml={info:wL,warning:TL,success:IL,error:CL,spinner:AL},SL=t=>t in ml;function bL({theme:t,type:e,isLoading:n,icon:i}){let r;const s=!!n||e==="loading",o={theme:t,type:e};if(s&&(i===void 0||typeof i=="boolean"))return ml.spinner();if(i!==!1){if(pl(i))r=ye(i);else if(gs(i)){const a=i;o.type=s?"loading":e,r=a(o),r=!r&&s?ml.spinner():r}else vr(i)?r=Er(i,o):Kh(i)||pL(i)?r=i:SL(e)&&(r=ml[e](o));return r}}const RL=()=>{};function PL(t,e,n=Le.COLLAPSE_DURATION){const{scrollHeight:i,style:r}=t,s=n;requestAnimationFrame(()=>{r.minHeight="initial",r.height=i+"px",r.transition=`all ${s}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(e,s)})})}function kL(t){const e=Ze(!1),n=Ze(!1),i=Ze(!1),r=Ze(gl.Enter),s=mn({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||Le.COLLAPSE_DURATION}),o=s.done||RL,a=Fe(()=>s.appendPosition?`${s.enter}--${s.position}`:s.enter),c=Fe(()=>s.appendPosition?`${s.exit}--${s.position}`:s.exit),u=Fe(()=>t.pauseOnHover?{onMouseenter:N,onMouseleave:k}:{});function h(){const V=a.value.split(" ");g().addEventListener(Gh.ENTRANCE_ANIMATION_END,k,{once:!0});const B=ee=>{const re=g();ee.target===re&&(re.dispatchEvent(new Event(Gh.ENTRANCE_ANIMATION_END)),re.removeEventListener("animationend",B),re.removeEventListener("animationcancel",B),r.value===gl.Enter&&ee.type!=="animationcancel"&&re.classList.remove(...V))},$=()=>{const ee=g();ee.classList.add(...V),ee.addEventListener("animationend",B),ee.addEventListener("animationcancel",B)};t.pauseOnFocusLoss&&_(),$()}function f(){if(!g())return;const V=()=>{const $=g();$.removeEventListener("animationend",V),s.collapse?PL($,o,s.collapseDuration):o()},B=()=>{const $=g();r.value=gl.Exit,$&&($.className+=` ${c.value}`,$.addEventListener("animationend",V))};n.value||(i.value?V():setTimeout(B))}function g(){return t.toastRef.value}function _(){document.hasFocus()||N(),window.addEventListener("focus",k),window.addEventListener("blur",N)}function C(){window.removeEventListener("focus",k),window.removeEventListener("blur",N)}function k(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function N(){e.value=!1}function q(V){V&&(V.stopPropagation(),V.preventDefault()),n.value=!1}return el(f),el(()=>{const V=ks();n.value=V.findIndex(B=>B.toastId===s.toastId)>-1}),el(()=>{t.isLoading!==void 0&&(t.loading.value?N():k())}),Kn(h),dc(()=>{t.pauseOnFocusLoss&&C()}),{isIn:n,isRunning:e,hideToast:q,eventHandlers:u}}const NL=mt({name:"ToastItem",inheritAttrs:!1,props:NT,setup(t){const e=Ze(),n=Fe(()=>!!t.isLoading),i=Fe(()=>t.progress!==void 0&&t.progress!==null),r=Fe(()=>bL(t)),s=Fe(()=>[`${Le.CSS_NAMESPACE}__toast`,`${Le.CSS_NAMESPACE}__toast-theme--${t.theme}`,`${Le.CSS_NAMESPACE}__toast--${t.type}`,t.rtl?`${Le.CSS_NAMESPACE}__toast--rtl`:void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:u}=kL({toastRef:e,loading:n,done:()=>{tn.remove(t.toastId)},...bT(t.transition,t.disabledEnterTransition),...t});return()=>Z("div",yi({id:t.toastId,class:s.value,style:t.toastStyle||{},ref:e,"data-testid":`toast-item-${t.toastId}`,onClick:h=>{t.closeOnClick&&c(),t.onClick&&t.onClick(h)}},u.value),[Z("div",{role:t.role,"data-testid":"toast-body",class:`${Le.CSS_NAMESPACE}__toast-body ${t.bodyClassName||""}`},[r.value!=null&&Z("div",{"data-testid":`toast-icon-${t.type}`,class:[`${Le.CSS_NAMESPACE}__toast-icon`,t.isLoading?"":`${Le.CSS_NAMESPACE}--animate-icon ${Le.CSS_NAMESPACE}__zoom-enter`].join(" ")},[pl(r.value)?Jr(ye(r.value),{theme:t.theme,type:t.type}):gs(r.value)?r.value({theme:t.theme,type:t.type}):r.value]),Z("div",{"data-testid":"toast-content"},[pl(t.content)?Jr(ye(t.content),{toastProps:ye(t),closeToast:c,data:t.data,...t.expandCustomProps?t.contentProps:{contentProps:t.contentProps||{}}}):gs(t.content)?t.content({toastProps:ye(t),closeToast:c,data:t.data}):t.dangerouslyHTMLString?Jr("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&Z(EL,{theme:t.theme,closeToast:h=>{h.stopPropagation(),h.preventDefault(),c()}},null),pl(t.closeButton)?Jr(ye(t.closeButton),{closeToast:c,type:t.type,theme:t.theme}):gs(t.closeButton)?t.closeButton({closeToast:c,type:t.type,theme:t.theme}):null,Z(vL,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:i.value,progress:t.progress,closeToast:t.isLoading?void 0:c},null)])}});let Mo=0;function OT(){typeof window>"u"||(Mo&&window.cancelAnimationFrame(Mo),Mo=window.requestAnimationFrame(OT),tc.lastUrl!==window.location.href&&(tc.lastUrl=window.location.href,tn.clear()))}const OL=mt({name:"ToastifyContainer",inheritAttrs:!1,props:NT,setup(t){const e=Fe(()=>t.containerId),n=Fe(()=>Et[e.value]||[]),i=Fe(()=>n.value.filter(r=>r.position===t.position));return Kn(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(OT)}),dc(()=>{typeof window<"u"&&Mo&&(window.cancelAnimationFrame(Mo),tc.lastUrl="")}),()=>Z(ft,null,[i.value.map(r=>{const{toastId:s=""}=r;return Z(NL,yi({key:s},r),null)})])}});let Uu=!1;const DT={isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1};function xT(){const t=[];return ks().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains($c)&&t.push(e)}),t}function DL(t){const e=xT().length,n=t??0;return n>0&&e+zn.items.length>=n}function xL(t){DL(t.limit)&&!t.updateId&&zn.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function ir(t,e,n={}){if(Uu)return;n=qc(mL(),{type:e},ye(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=kT()),n={...n,...n.type==="loading"?DT:{},content:t,containerId:n.containerId||String(n.position)};const i=Number(n==null?void 0:n.progress);return!isNaN(i)&&i<0&&(n.progress=0),i>1&&(n.progress=1),n.theme==="auto"&&(n.theme=_L()),xL(n),tc.lastUrl=window.location.href,n.multiple?zn.items.length?n.updateId&&fl(t,n):fl(t,n):(Uu=!0,ke.clearAll(void 0,!1),setTimeout(()=>{fl(t,n)},0),setTimeout(()=>{Uu=!1},390)),n.toastId}const ke=(t,e)=>ir(t,Wt.DEFAULT,e);ke.info=(t,e)=>ir(t,Wt.DEFAULT,{...e,type:Wt.INFO});ke.error=(t,e)=>ir(t,Wt.DEFAULT,{...e,type:Wt.ERROR});ke.warning=(t,e)=>ir(t,Wt.DEFAULT,{...e,type:Wt.WARNING});ke.warn=ke.warning;ke.success=(t,e)=>ir(t,Wt.DEFAULT,{...e,type:Wt.SUCCESS});ke.loading=(t,e)=>ir(t,Wt.DEFAULT,qc(e,DT));ke.dark=(t,e)=>ir(t,Wt.DEFAULT,qc(e,{theme:Ps.DARK}));ke.remove=t=>{t?tn.dismiss(t):tn.clear()};ke.clearAll=(t,e)=>{yr(()=>{tn.clear(t,e)})};ke.isActive=t=>{let e=!1;return e=xT().findIndex(n=>n.toastId===t)>-1,e};ke.update=(t,e={})=>{setTimeout(()=>{const n=dL(t);if(n){const i=ye(n),{content:r}=i,s={...i,...e,toastId:e.toastId||t,updateId:kT()},o=s.render||r;delete s.render,ir(o,s.type,s)}},0)};ke.done=t=>{ke.update(t,{isLoading:!1,progress:1})};ke.promise=LL;function LL(t,{pending:e,error:n,success:i},r){var s,o,a;let c;const u={...r||{},autoClose:!1};e&&(c=Kh(e)?ke.loading(e,u):ke.loading(e.render,{...u,...e}));const h={autoClose:(s=r==null?void 0:r.autoClose)!=null?s:!0,closeOnClick:(o=r==null?void 0:r.closeOnClick)!=null?o:!0,closeButton:(a=r==null?void 0:r.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},f=(_,C,k)=>{if(C==null){ke.remove(c);return}const N={type:_,...h,...r,data:k},q=Kh(C)?{render:C}:C;return c?ke.update(c,{...N,...q,isLoading:!1}):ke(q.render,{...N,...q,isLoading:!1}),k},g=gs(t)?t():t;return g.then(_=>{f("success",i,_)}).catch(_=>{f("error",n,_)}),g}ke.POSITION=wa;ke.THEME=Ps;ke.TYPE=Wt;ke.TRANSITIONS=Kx;const ML={install(t,e={}){fL.useHandler=e.useHandler||(()=>{}),VL(e)}};typeof window<"u"&&(window.Vue3Toastify=ML);function VL(t={}){const e=qc(ST,t);gL(e)}const FL={class:"auth-form-container"},UL={class:"auth-form__inputs"},BL={key:0,class:"auth-form__error"},$L=mt({__name:"BaseForm",props:{title:{},onSubmit:{type:Function},errorMessage:{}},setup(t){return(e,n)=>(Xe(),pt("div",FL,[he("form",{class:"auth-form",onSubmit:n[0]||(n[0]=N1((...i)=>e.onSubmit&&e.onSubmit(...i),["prevent"]))},[he("div",UL,[he("h1",null,Gi(e.title),1),Wu(e.$slots,"inputs",{},void 0),e.errorMessage?(Xe(),pt("p",BL,Gi(e.errorMessage),1)):gc("",!0)]),Wu(e.$slots,"footer",{class:"auth-form__footer"},void 0)],32)]))}}),LT=_n($L,[["__scopeId","data-v-11357815"]]),qL=["type","value"],jL=mt({__name:"BaseInput",props:{inputMaxWidth:{},inputType:{},modelValue:{}},emits:["update:modelValue"],setup(t,{emit:e}){const n=e,i=r=>{const s=r.target;n("update:modelValue",s.value)};return(r,s)=>(Xe(),pt("input",{type:r.inputType,style:ms({maxWidth:r.inputMaxWidth+"px"}),value:r.modelValue,onInput:i},null,44,qL))}}),ji=_n(jL,[["__scopeId","data-v-09d0125a"]]);/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var GL="store";function Gs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function HL(t){return t!==null&&typeof t=="object"}function WL(t){return t&&typeof t.then=="function"}function zL(t,e){return function(){return t(e)}}function MT(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function VT(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Gc(t,n,[],t._modules.root,!0),bf(t,n,e)}function bf(t,e,n){var i=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,s={};Gs(r,function(o,a){s[a]=zL(o,t),Object.defineProperty(t.getters,a,{get:function(){return s[a]()},enumerable:!0})}),t._state=mn({data:e}),t.strict&&JL(t),i&&n&&t._withCommit(function(){i.data=null})}function Gc(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=Rf(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=i.state})}var u=i.context=KL(t,o,n);i.forEachMutation(function(h,f){var g=o+f;QL(t,g,h,u)}),i.forEachAction(function(h,f){var g=h.root?f:o+f,_=h.handler||h;YL(t,g,_,u)}),i.forEachGetter(function(h,f){var g=o+f;XL(t,g,h,u)}),i.forEachChild(function(h,f){Gc(t,e,n.concat(f),h,r)})}function KL(t,e,n){var i=e==="",r={dispatch:i?t.dispatch:function(s,o,a){var c=nc(s,o,a),u=c.payload,h=c.options,f=c.type;return(!h||!h.root)&&(f=e+f),t.dispatch(f,u)},commit:i?t.commit:function(s,o,a){var c=nc(s,o,a),u=c.payload,h=c.options,f=c.type;(!h||!h.root)&&(f=e+f),t.commit(f,u,h)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return FT(t,e)}},state:{get:function(){return Rf(t.state,n)}}}),r}function FT(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function QL(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,i.state,o)})}function YL(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},o);return WL(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function XL(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(i.state,i.getters,s.state,s.getters)})}function JL(t){ls(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Rf(t,e){return e.reduce(function(n,i){return n[i]},t)}function nc(t,e,n){return HL(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var ZL="vuex bindings",w_="vuex:mutations",Bu="vuex:actions",Hr="vuex",eM=0;function tM(t,e){GD({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[ZL]},function(n){n.addTimelineLayer({id:w_,label:"Vuex Mutations",color:I_}),n.addTimelineLayer({id:Bu,label:"Vuex Actions",color:I_}),n.addInspector({id:Hr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(i){if(i.app===t&&i.inspectorId===Hr)if(i.filter){var r=[];qT(r,e._modules.root,i.filter,""),i.rootNodes=r}else i.rootNodes=[$T(e._modules.root,"")]}),n.on.getInspectorState(function(i){if(i.app===t&&i.inspectorId===Hr){var r=i.nodeId;FT(e,r),i.state=rM(oM(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(i){if(i.app===t&&i.inspectorId===Hr){var r=i.nodeId,s=i.path;r!=="root"&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit(function(){i.set(e._state.data,s,i.state.value)})}}),e.subscribe(function(i,r){var s={};i.payload&&(s.payload=i.payload),s.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(Hr),n.sendInspectorState(Hr),n.addTimelineEvent({layerId:w_,event:{time:Date.now(),title:i.type,data:s}})}),e.subscribeAction({before:function(i,r){var s={};i.payload&&(s.payload=i.payload),i._id=eM++,i._time=Date.now(),s.state=r,n.addTimelineEvent({layerId:Bu,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:s}})},after:function(i,r){var s={},o=Date.now()-i._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(s.payload=i.payload),s.state=r,n.addTimelineEvent({layerId:Bu,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:s}})}})})}var I_=8702998,nM=6710886,iM=16777215,UT={label:"namespaced",textColor:iM,backgroundColor:nM};function BT(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function $T(t,e){return{id:e||"root",label:BT(e),tags:t.namespaced?[UT]:[],children:Object.keys(t._children).map(function(n){return $T(t._children[n],e+n+"/")})}}function qT(t,e,n,i){i.includes(n)&&t.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[UT]:[]}),Object.keys(e._children).forEach(function(r){qT(t,e._children[r],n,i+r+"/")})}function rM(t,e,n){e=n==="root"?e:e[n];var i=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(i.length){var s=sM(e);r.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?BT(o):o,editable:!1,value:Qh(function(){return s[o]})}})}return r}function sM(t){var e={};return Object.keys(t).forEach(function(n){var i=n.split("/");if(i.length>1){var r=e,s=i.pop();i.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[s]=Qh(function(){return t[n]})}else e[n]=Qh(function(){return t[n]})}),e}function oM(t,e){var n=e.split("/").filter(function(i){return i});return n.reduce(function(i,r,s){var o=i[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Qh(t){try{return t()}catch(e){return e}}var kn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},jT={namespaced:{configurable:!0}};jT.namespaced.get=function(){return!!this._rawModule.namespaced};kn.prototype.addChild=function(e,n){this._children[e]=n};kn.prototype.removeChild=function(e){delete this._children[e]};kn.prototype.getChild=function(e){return this._children[e]};kn.prototype.hasChild=function(e){return e in this._children};kn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};kn.prototype.forEachChild=function(e){Gs(this._children,e)};kn.prototype.forEachGetter=function(e){this._rawModule.getters&&Gs(this._rawModule.getters,e)};kn.prototype.forEachAction=function(e){this._rawModule.actions&&Gs(this._rawModule.actions,e)};kn.prototype.forEachMutation=function(e){this._rawModule.mutations&&Gs(this._rawModule.mutations,e)};Object.defineProperties(kn.prototype,jT);var Vr=function(e){this.register([],e,!1)};Vr.prototype.get=function(e){return e.reduce(function(n,i){return n.getChild(i)},this.root)};Vr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(i,r){return n=n.getChild(r),i+(n.namespaced?r+"/":"")},"")};Vr.prototype.update=function(e){GT([],this.root,e)};Vr.prototype.register=function(e,n,i){var r=this;i===void 0&&(i=!0);var s=new kn(n,i);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&Gs(n.modules,function(a,c){r.register(e.concat(c),a,i)})};Vr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1],r=n.getChild(i);r&&r.runtime&&n.removeChild(i)};Vr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1];return n?n.hasChild(i):!1};function GT(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return;GT(t.concat(i),e.getChild(i),n.modules[i])}}function aM(t){return new Yt(t)}var Yt=function(e){var n=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var r=e.strict;r===void 0&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Vr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(g,_){return c.call(o,g,_)},this.commit=function(g,_,C){return u.call(o,g,_,C)},this.strict=r;var h=this._modules.root.state;Gc(this,h,[],this._modules.root),bf(this,h),i.forEach(function(f){return f(n)})},Pf={state:{configurable:!0}};Yt.prototype.install=function(e,n){e.provide(n||GL,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&tM(e,this)};Pf.state.get=function(){return this._state.data};Pf.state.set=function(t){};Yt.prototype.commit=function(e,n,i){var r=this,s=nc(e,n,i),o=s.type,a=s.payload,c={type:o,payload:a},u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(h){return h(c,r.state)}))};Yt.prototype.dispatch=function(e,n){var i=this,r=nc(e,n),s=r.type,o=r.payload,a={type:s,payload:o},c=this._actions[s];if(c){try{this._actionSubscribers.slice().filter(function(h){return h.before}).forEach(function(h){return h.before(a,i.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(h){return h(o)})):c[0](o);return new Promise(function(h,f){u.then(function(g){try{i._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(a,i.state)})}catch{}h(g)},function(g){try{i._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(a,i.state,g)})}catch{}f(g)})})}};Yt.prototype.subscribe=function(e,n){return MT(e,this._subscribers,n)};Yt.prototype.subscribeAction=function(e,n){var i=typeof e=="function"?{before:e}:e;return MT(i,this._actionSubscribers,n)};Yt.prototype.watch=function(e,n,i){var r=this;return ls(function(){return e(r.state,r.getters)},n,Object.assign({},i))};Yt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Yt.prototype.registerModule=function(e,n,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Gc(this,this.state,e,this._modules.get(e),i.preserveState),bf(this,this.state)};Yt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=Rf(n.state,e.slice(0,-1));delete i[e[e.length-1]]}),VT(this)};Yt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Yt.prototype.hotUpdate=function(e){this._modules.update(e),VT(this,!0)};Yt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Yt.prototype,Pf);const lM=async t=>{const n=Bs().currentUser;if(!t)return;const i=t.toDataURL("image/png");try{await Ub(nv(KT,"canvas_images"),{data:i,timestamp:Date.now(),email:n==null?void 0:n.email}),ke.success("Image saved successfully!",{autoClose:3e3,position:"bottom-left",theme:"colored"})}catch{ke.error("Error saving image.")}},cM=async(t,e)=>{const n=Bs();try{await FR(n,t,e)}catch{throw new Error("Incorrect email or password")}},uM=async(t,e)=>{const n=Bs();try{await VR(n,t,e)}catch(i){throw i}},hM=()=>{const t=Bs();return $R(t).then(()=>{Fr.push("/mini-paint/login")})},HT=t=>{const e=Bs();Uv(e,n=>{n&&n.email&&t(n.email)})},dM=async()=>{const t=Nb(nv(KT,"canvas_images")),e=await Fb(t),n=new Set;return{images:e.docs.map(r=>{const s=r.data();return s.email&&n.add(s.email),{data:s.data,email:s.email,timestamp:s.timestamp}}).sort((r,s)=>s.timestamp-r.timestamp),usersEmail:Array.from(n)}},me=aM({state:{images:[],filteredImages:[],usersEmail:[],selectedUser:null,currentPage:1,itemsPerPage:6,color:"#000000",lineWidth:2,tool:"brush",showDropdown:!1},mutations:{setImages(t,e){t.images=e,t.filteredImages=[...e]},setUsersEmail(t,e){t.usersEmail=e},setSelectedUser(t,e){t.selectedUser=e,t.filteredImages=t.images.filter(n=>n.email===e)},resetFilter(t){t.selectedUser=null,t.filteredImages=[...t.images]},setTool(t,e){t.tool=e}},actions:{async loadImages({commit:t}){const{images:e,usersEmail:n}=await dM();t("setImages",e),t("setUsersEmail",n)},async saveImage(t,e){await lM(e)},async login({commit:t},{email:e,password:n}){await cM(e,n),t("setUser",e)},async register({commit:t},{email:e,password:n}){await uM(e,n),t("setUser",e)},async logout({commit:t}){await hM(),t("setUser",null)},initializeAuth({dispatch:t}){HT(e=>{t("setUserEmail",e)})}},getters:{totalPages(t){return Math.ceil(t.filteredImages.length/t.itemsPerPage)},paginatedImages(t){const e=(t.currentPage-1)*t.itemsPerPage,n=e+t.itemsPerPage;return t.filteredImages.slice(e,n)}}}),fM={class:"auth-form__email"},pM={class:"auth-form__password"},gM={class:"auth-form__infoText"},mM=mt({__name:"AuthorizationForm",setup(t){const e=Ze(""),n=Ze(""),i=Ze("");function r(){me.dispatch("login",{email:e.value,password:n.value}).then(()=>{Fr.push("/mini-paint/")}).catch(s=>{ke.error(s.message,{autoClose:3e3,position:"bottom-left",theme:"colored"})})}return(s,o)=>{const a=ud("router-link");return Xe(),$o(LT,{title:"Sign in",onSubmit:r,errorMessage:i.value},{inputs:ut(()=>[he("div",fM,[o[2]||(o[2]=he("p",{class:"auth-form__nameOfInput"},"Email",-1)),Z(ji,{type:"email",class:"auth-form__input",placeholder:"Enter email",modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c)},null,8,["modelValue"])]),he("div",pM,[o[3]||(o[3]=he("p",{class:"auth-form__nameOfInput"},"Password",-1)),Z(ji,{type:"password",class:"auth-form__input",placeholder:"Enter password",modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=c=>n.value=c)},null,8,["modelValue"])])]),footer:ut(()=>[Z(ot,{"button-text":"Sign in",variant:"primary",class:"auth-form__button"}),he("p",gM,[o[5]||(o[5]=Tr(" Don't have an account? ")),Z(a,{to:"/mini-paint/signup",class:"auth-form__link"},{default:ut(()=>o[4]||(o[4]=[Tr("Sign up ")])),_:1})])]),_:1},8,["errorMessage"])}}}),_M=_n(mM,[["__scopeId","data-v-f7033d71"]]),yM={class:"register-form__email"},vM={class:"register-form__password"},EM={class:"register-form__password"},TM={class:"register-form__infoText"},wM=mt({__name:"RegistrationForm",setup(t){const e=Ze(""),n=Ze(""),i=Ze(""),r=Ze();function s(){if(n.value!==i.value){r.value="Passwords do not match";return}me.dispatch("register",{email:e.value,password:n.value}).then(()=>{Fr.push("/mini-paint")}).catch(o=>{o.code==="auth/invalid-email"?ke.error("Incorrect email.",{autoClose:3e3,position:"bottom-left",theme:"colored"}):o.code==="auth/weak-password"?ke.error("Password should be at least 6 characters.",{autoClose:3e3,position:"bottom-left",theme:"colored"}):o.code==="auth/email-already-in-use"?ke.error("This email is already in use",{autoClose:3e3,position:"bottom-left",theme:"colored"}):ke.error("An unexpected error occurred.",{autoClose:3e3,position:"bottom-left",theme:"colored"})})}return(o,a)=>{const c=ud("router-link");return Xe(),$o(LT,{title:"Sign up",onSubmit:s,errorMessage:r.value},{inputs:ut(()=>[he("div",yM,[a[3]||(a[3]=he("p",{class:"register-form__nameOfInput"},"Email",-1)),Z(ji,{type:"email",class:"register-form__input",placeholder:"Enter email",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=u=>e.value=u)},null,8,["modelValue"])]),he("div",vM,[a[4]||(a[4]=he("p",{class:"register-form__nameOfInput"},"Password",-1)),Z(ji,{type:"password",class:"register-form__input",placeholder:"Enter password",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=u=>n.value=u)},null,8,["modelValue"])]),he("div",EM,[a[5]||(a[5]=he("p",{class:"register-form__nameOfInput"},"Confirm password",-1)),Z(ji,{type:"password",class:"register-form__input",placeholder:"Enter password",modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=u=>i.value=u)},null,8,["modelValue"])])]),footer:ut(()=>[Z(ot,{"button-text":"Sing up",variant:"primary",class:"register-form__button"}),he("p",TM,[a[7]||(a[7]=Tr(" Already have an account? ")),Z(c,{to:"/mini-paint/login",class:"register-form__link"},{default:ut(()=>a[6]||(a[6]=[Tr("Sing in ")])),_:1})])]),_:1},8,["errorMessage"])}}}),IM=_n(wM,[["__scopeId","data-v-5fa65907"]]),CM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-2%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%20fill='%23ffffff'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3ebrush%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-101.000000,%20-156.000000)'%20fill='%23ffffff'%3e%3cpath%20d='M132.132,156.827%20C130.975,155.685%20129.099,155.685%20127.942,156.827%20L115.336,169.277%20L119.499,173.44%20L132.132,160.964%20C133.289,159.821%20133.289,157.969%20132.132,156.827%20L132.132,156.827%20Z%20M112.461,180.385%20C111.477,181.298%20107.08,183.333%20104.491,181.36%20C104.491,181.36%20105.392,180.657%20106.074,179.246%20C107.703,174.919%20111.763,175.56%20111.763,175.56%20L113.159,176.938%20C113.173,176.952%20114.202,178.771%20112.461,180.385%20L112.461,180.385%20Z%20M113.913,170.683%20L110.764,173.788%20C108.661,173.74%20105.748,174.485%20104.491,178.603%20C103.53,180.781%20101,180.671%20101,180.671%20C106.253,186.498%20112.444,183.196%20113.857,181.764%20C115.1,180.506%20115.279,178.966%20115.146,177.734%20L118.076,174.846%20L113.913,170.683%20L113.913,170.683%20Z'%20id='brush'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",AM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z'/%3e%3c/g%3e%3c/svg%3e",SM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3crect%20x='1'%20y='1'%20width='14'%20height='14'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",bM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cg%3e%3cpath%20d='M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",RM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20enable-background='new%200%200%2024%2024'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M21.9,11.5l-4.5-7.8c-0.2-0.3-0.5-0.5-0.9-0.5h-9c-0.4,0-0.7,0.2-0.9,0.5l-4.5,7.8c-0.2,0.3-0.2,0.7,0,1l4.5,7.8c0.2,0.3,0.5,0.5,0.9,0.5h9c0.4,0,0.7-0.2,0.9-0.5l4.5-7.8C22,12.2,22,11.8,21.9,11.5z'/%3e%3c/g%3e%3c/svg%3e",PM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3estar%3c/title%3e%3cpath%20d='M3.488%2013.184l6.272%206.112-1.472%208.608%207.712-4.064%207.712%204.064-1.472-8.608%206.272-6.112-8.64-1.248-3.872-7.808-3.872%207.808z'/%3e%3c/g%3e%3c/svg%3e",kM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%2056%2056'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M%2011.6406%2014.6641%20L%2013.1406%2048.9062%20C%2013.2578%2051.8359%2015.0156%2053.4297%2017.8984%2053.4297%20L%2038.125%2053.4297%20C%2041.0078%2053.4297%2042.7656%2051.8359%2042.8828%2048.9062%20L%2044.3828%2014.6641%20L%2047.0781%2014.6641%20C%2048.0391%2014.6641%2048.8125%2013.8672%2048.8125%2012.9063%20C%2048.8125%2011.9453%2048.0391%2011.1250%2047.0781%2011.1250%20L%2037.4453%2011.1250%20L%2037.4453%207.7734%20C%2037.4453%204.5625%2035.3125%202.5703%2032.2891%202.5703%20L%2023.6640%202.5703%20C%2020.6406%202.5703%2018.5313%204.5625%2018.5313%207.7734%20L%2018.5313%2011.1250%20L%208.9453%2011.1250%20C%208.0078%2011.1250%207.1875%2011.9453%207.1875%2012.9063%20C%207.1875%2013.8672%208.0078%2014.6641%208.9453%2014.6641%20Z%20M%2021.7187%207.7734%20C%2021.7187%206.4375%2022.7031%205.5000%2024.1094%205.5000%20L%2031.8672%205.5000%20C%2033.2969%205.5000%2034.2813%206.4375%2034.2813%207.7734%20L%2034.2813%2011.1250%20L%2021.7187%2011.1250%20Z%20M%2035.6172%2048.6484%20C%2034.7031%2048.6484%2034.0703%2047.8516%2034.0938%2046.8906%20L%2035.0547%2019.7031%20C%2035.1016%2018.7656%2035.7813%2017.9922%2036.625%2017.9922%20C%2037.4922%2017.9922%2038.1953%2018.7422%2038.1719%2019.7031%20L%2037.1172%2046.9141%20C%2037.0938%2047.9219%2036.4844%2048.6484%2035.6172%2048.6484%20Z%20M%2020.4062%2048.6484%20C%2019.5391%2048.6484%2018.9297%2047.9219%2018.9062%2046.9141%20L%2017.8516%2019.7031%20C%2017.8281%2018.7187%2018.5313%2017.9922%2019.3984%2017.9922%20C%2020.2422%2017.9922%2020.9453%2018.7656%2020.9687%2019.7031%20L%2021.9297%2046.8906%20C%2021.9531%2047.8516%2021.3203%2048.6484%2020.4062%2048.6484%20Z%20M%2029.6172%2046.8906%20C%2029.6172%2047.8516%2028.8672%2048.6484%2028.0234%2048.6484%20C%2027.1797%2048.6484%2026.4297%2047.8516%2026.4297%2046.8906%20L%2026.4297%2019.7031%20C%2026.4297%2018.7656%2027.1797%2017.9922%2028.0234%2017.9922%20C%2028.8672%2017.9922%2029.6406%2018.7656%2029.6406%2019.7031%20Z'/%3e%3c/g%3e%3c/svg%3e",NM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.1716%201C18.702%201%2019.2107%201.21071%2019.5858%201.58579L22.4142%204.41421C22.7893%204.78929%2023%205.29799%2023%205.82843V20C23%2021.6569%2021.6569%2023%2020%2023H4C2.34315%2023%201%2021.6569%201%2020V4C1%202.34315%202.34315%201%204%201H18.1716ZM4%203C3.44772%203%203%203.44772%203%204V20C3%2020.5523%203.44772%2021%204%2021L5%2021L5%2015C5%2013.3431%206.34315%2012%208%2012L16%2012C17.6569%2012%2019%2013.3431%2019%2015V21H20C20.5523%2021%2021%2020.5523%2021%2020V6.82843C21%206.29799%2020.7893%205.78929%2020.4142%205.41421L18.5858%203.58579C18.2107%203.21071%2017.702%203%2017.1716%203H17V5C17%206.65685%2015.6569%208%2014%208H10C8.34315%208%207%206.65685%207%205V3H4ZM17%2021V15C17%2014.4477%2016.5523%2014%2016%2014L8%2014C7.44772%2014%207%2014.4477%207%2015L7%2021L17%2021ZM9%203H15V5C15%205.55228%2014.5523%206%2014%206H10C9.44772%206%209%205.55228%209%205V3Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",OM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20id='SVGRoot'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns:svg='http://www.w3.org/2000/svg'%20fill='%23ffffff'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cdefs%20id='defs2'/%3e%3cg%20id='layer1'%3e%3cpath%20d='M%209%202%20A%201.0001%201.0001%200%200%200%208%203%20L%208%208%20A%201%201%200%200%200%209%209%20A%201%201%200%200%200%2010%208%20L%2010%204%20L%2018%204%20L%2018%2020%20L%2010%2020%20L%2010%2016%20A%201%201%200%200%200%209%2015%20A%201%201%200%200%200%208%2016%20L%208%2021%20A%201.0001%201.0001%200%200%200%209%2022%20L%2019%2022%20A%201.0001%201.0001%200%200%200%2020%2021%20L%2020%203%20A%201.0001%201.0001%200%200%200%2019%202%20L%209%202%20z%20M%207.0292969%209%20A%201%201%200%200%200%206.2929688%209.2929688%20L%204.3125%2011.273438%20L%204.2929688%2011.292969%20A%201.0001%201.0001%200%200%200%204.2832031%2011.302734%20A%201%201%200%200%200%204.2363281%2011.355469%20A%201%201%200%200%200%204.1855469%2011.421875%20A%201%201%200%200%200%204.1464844%2011.482422%20A%201.0001%201.0001%200%200%200%204.1289062%2011.509766%20A%201%201%200%200%200%204.0996094%2011.566406%20A%201%201%200%200%200%204.0683594%2011.638672%20A%201.0001%201.0001%200%200%200%204.0644531%2011.650391%20A%201%201%200%200%200%204.0410156%2011.714844%20A%201.0001%201.0001%200%200%200%204.0332031%2011.75%20A%201%201%200%200%200%204.0234375%2011.791016%20A%201.0001%201.0001%200%200%200%204.015625%2011.828125%20A%201%201%200%200%200%204.0078125%2011.871094%20A%201.0001%201.0001%200%200%200%204.0019531%2011.943359%20A%201.0001%201.0001%200%200%200%204%2011.988281%20A%201%201%200%200%200%204%2012%20A%201%201%200%200%200%204.0019531%2012.029297%20A%201.0001%201.0001%200%200%200%204.0039062%2012.066406%20A%201%201%200%200%200%204.0078125%2012.117188%20A%201.0001%201.0001%200%200%200%204.0117188%2012.146484%20A%201%201%200%200%200%204.0253906%2012.222656%20A%201%201%200%200%200%204.0410156%2012.28125%20A%201.0001%201.0001%200%200%200%204.0546875%2012.324219%20A%201%201%200%200%200%204.0585938%2012.337891%20A%201.0001%201.0001%200%200%200%204.0878906%2012.408203%20A%201.0001%201.0001%200%200%200%204.1210938%2012.474609%20A%201%201%200%200%200%204.1347656%2012.501953%20A%201.0001%201.0001%200%200%200%204.1640625%2012.546875%20A%201%201%200%200%200%204.1777344%2012.568359%20A%201.0001%201.0001%200%200%200%204.2011719%2012.601562%20A%201%201%200%200%200%204.21875%2012.623047%20A%201.0001%201.0001%200%200%200%204.265625%2012.677734%20A%201%201%200%200%200%204.2851562%2012.699219%20A%201.0001%201.0001%200%200%200%204.2929688%2012.707031%20A%201%201%200%200%200%204.3339844%2012.746094%20L%206.2929688%2014.707031%20A%201%201%200%200%200%207.7070312%2014.707031%20A%201%201%200%200%200%207.7070312%2013.292969%20L%207.4140625%2013%20L%2014%2013%20A%201%201%200%200%200%2015%2012%20A%201%201%200%200%200%2014%2011%20L%207.4140625%2011%20L%207.7070312%2010.707031%20A%201%201%200%200%200%207.7070312%209.2929688%20A%201%201%200%200%200%207.0292969%209%20z%20'%20id='path6945'%20style='color:%23ffffff;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23ffffff;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:%23ffffff;solid-opacity:1;vector-effect:none;fill:%23ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;stop-color:%23ffffff;stop-opacity:1;opacity:1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",DM=t=>{const e=Ze(null);let n=!1,i=0,r=0,s=0,o=0,a=null;const c=()=>{const g=t.value,_=document.querySelector(".editor__field"),C=_.offsetWidth,k=_.offsetHeight;g.width=C,g.height=k,e.value&&(e.value.lineWidth=me.state.lineWidth,e.value.strokeStyle=me.state.color)},u=g=>{const _=t.value,C=_.getBoundingClientRect();i=g.clientX-C.left,r=g.clientY-C.top,n=!0,e.value&&(e.value.lineWidth=me.state.lineWidth,e.value.strokeStyle=me.state.color,me.state.tool==="brush"?(e.value.beginPath(),e.value.moveTo(i,r)):a=e.value.getImageData(0,0,_.width,_.height))},h=g=>{if(!n||!e.value)return;const C=t.value.getBoundingClientRect();if(s=g.clientX-C.left,o=g.clientY-C.top,me.state.tool==="brush")e.value.lineTo(s,o),e.value.stroke();else{a&&e.value.putImageData(a,0,0);const k=Math.sqrt((s-i)**2+(o-r)**2);switch(me.state.tool){case"line":e.value.beginPath(),e.value.moveTo(i,r),e.value.lineTo(s,o),e.value.stroke();break;case"circle":e.value.beginPath(),e.value.arc(i,r,k,0,Math.PI*2),e.value.stroke();break;case"square":e.value.beginPath(),e.value.moveTo(i,r),e.value.lineTo(s,r),e.value.lineTo(s,o),e.value.lineTo(i,o),e.value.closePath(),e.value.stroke();break;case"polygon":const N=6,q=2*Math.PI/N;e.value.beginPath();for(let ee=0;ee<=N;ee++){const re=ee*q,I=i+k*Math.cos(re),y=r+k*Math.sin(re);ee===0?e.value.moveTo(I,y):e.value.lineTo(I,y)}e.value.closePath(),e.value.stroke();break;case"star":const V=5,B=k,$=k/2;e.value.beginPath();for(let ee=0;ee<V*2;ee++){const re=ee%2===0?B:$,I=Math.PI/V*ee,y=i+re*Math.cos(I),T=r+re*Math.sin(I);ee===0?e.value.moveTo(y,T):e.value.lineTo(y,T)}e.value.closePath(),e.value.stroke();break}}},f=()=>{n=!1,me.state.tool!=="brush"&&a&&e.value&&(a=e.value.getImageData(0,0,t.value.width,t.value.height))};return Kn(()=>{const g=t.value;e.value=g.getContext("2d"),g.addEventListener("mousedown",u),g.addEventListener("mousemove",h),g.addEventListener("mouseup",f),window.addEventListener("resize",c)}),cd(()=>{window.removeEventListener("resize",c)}),{updateCanvasSize:c,startDrawing:u,draw:h,stopDrawing:f}};function xM(){function t(e){me.commit("setTool",e)}return{setTool:t}}function LM(t,e){const n=Ze(0),i=Ze({}),r=Ze({}),s=async()=>{await yr();const c=t[n.value],u=document.querySelector(c.element);if(u){const h=u.getBoundingClientRect();switch(i.value={top:`${h.top+window.scrollY}px`,left:`${h.left+window.scrollX}px`,width:`${h.width}px`,height:`${h.height}px`},r.value={top:`${h.bottom+window.scrollY}px`,left:`${h.left+window.scrollX}px`},c.tooltipPosition){case"top":r.value={top:`${h.top+window.scrollY-100}px`,left:`${h.left+window.scrollX+h.width/2-100}px`};break;case"left":r.value={top:`${h.top+window.scrollY+h.height/2-40}px`,left:`${h.left+window.scrollX-300}px`};break;case"right":r.value={top:`${h.top+window.scrollY+h.height/2-40}px`,left:`${h.right+window.scrollX+10}px`};break;default:r.value={top:`${h.bottom+window.scrollY+5}px`,left:`${h.left+window.scrollX+h.width/2-100}px`}}}},o=()=>{n.value<t.length-1?(n.value++,s()):e()},a=()=>{n.value>0&&(n.value--,s())};return Kn(async()=>{await yr(),s()}),{currentStep:n,highlightStyle:i,tooltipStyle:r,nextStep:o,prevStep:a,updateHighlight:s}}const MM=t=>{const e=Ze(!1),n=Ze(0),i=Ze(null),r=o=>{const a=`onboardingCompleted_${o}_${t}`;e.value=!localStorage.getItem(a)},s=()=>{i.value&&(localStorage.setItem(`onboardingCompleted_${i.value}_${t}`,"true"),t==="main"&&localStorage.setItem("onboardingStep","editor"),e.value=!1)};return Kn(()=>{HT(o=>{i.value=o,r(o)})}),{isActive:e,currentStep:n,endOnboarding:s}},VM={key:0,class:"onboarding-overlay"},FM={class:"onboarding-buttons"},UM=mt({__name:"Onboarding",props:{steps:{},page:{}},setup(t){const e=t,{isActive:n,endOnboarding:i}=MM(e.page),{currentStep:r,highlightStyle:s,tooltipStyle:o,nextStep:a,prevStep:c,updateHighlight:u}=LM(e.steps,i);return Kn(()=>{n.value&&u()}),(h,f)=>ve(n)?(Xe(),pt("div",VM,[he("div",{class:"onboarding-highlight",style:ms(ve(s))},null,4),he("div",{class:"onboarding-tooltip",style:ms(ve(o))},[he("p",null,Gi(h.steps[ve(r)].content),1),he("div",FM,[Z(ot,{outlined:!1,variant:"primary","button-text":"Back",onClick:ve(c),disabled:ve(r)===0},null,8,["onClick","disabled"]),Z(ot,{outlined:!1,variant:"primary","button-text":"Next",onClick:ve(a),disabled:ve(r)===h.steps.length-1},null,8,["onClick","disabled"]),Z(ot,{outlined:!1,variant:"primary","button-text":"Skip",onClick:ve(i)},null,8,["onClick"])])],4)])):gc("",!0)}}),WT=_n(UM,[["__scopeId","data-v-f5035b5f"]]),BM=[{element:".brush",content:"Brush.",tooltipPosition:"right"},{element:".line",content:"Draws a straight line.",tooltipPosition:"right"},{element:".square",content:"Draws a square.",tooltipPosition:"right"},{element:".circle",content:"Draws a circle.",tooltipPosition:"right"},{element:".polygon",content:"Draws a polygon.",tooltipPosition:"right"},{element:".star",content:"Draws a star.",tooltipPosition:"right"},{element:".editor__figure-thickness",content:"Choose the thickness of the figure.",tooltipPosition:"right"},{element:".editor__color",content:"Choose the color of the figure.",tooltipPosition:"right"},{element:".clean",content:"Clean a sheet.",tooltipPosition:"right"},{element:".save",content:"Save to gallery.",tooltipPosition:"right"},{element:".back",content:"Return to main page.",tooltipPosition:"right"}],$M=[{element:".create-button",content:"Click to create an image.",tooltipPosition:"bottom"},{element:".dropdown",content:"Filter images by user email.",tooltipPosition:"bottom"},{element:".signout-button",content:"Log out button.",tooltipPosition:"left"},{element:".menu__pagination",content:"Pagination buttons.",tooltipPosition:"top"},{element:".change-theme-button",content:"Change application theme.",tooltipPosition:"right"}],qM=(t,e)=>{t.clearRect(0,0,e.width,e.height)},jM={class:"editor"},GM={class:"editor__toolbar"},HM={class:"editor__field"},WM=mt({__name:"Editor",setup(t){const e=Ze(null),{setTool:n}=xM(),{updateCanvasSize:i,startDrawing:r,draw:s,stopDrawing:o}=DM(e),a=()=>{if(e.value){const h=e.value.getContext("2d");h&&qM(h,e.value)}},c=()=>{e.value&&me.dispatch("saveImage",e.value)},u=()=>{Fr.push("/mini-paint/")};return Kn(()=>{i(),e.value&&(e.value.addEventListener("mousedown",h=>r(h)),e.value.addEventListener("mousemove",h=>s(h)),e.value.addEventListener("mouseup",o)),window.addEventListener("resize",i)}),cd(()=>{e.value&&(e.value.removeEventListener("mousedown",h=>r(h)),e.value.removeEventListener("mousemove",h=>s(h)),e.value.removeEventListener("mouseup",o)),window.removeEventListener("resize",i)}),(h,f)=>(Xe(),pt(ft,null,[Z(WT,{page:"editor",steps:ve(BM)},null,8,["steps"]),he("div",jM,[he("div",GM,[Z(ot,{variant:"icon",onClick:f[0]||(f[0]=g=>ve(n)("brush")),class:"editor__button brush"},{default:ut(()=>f[8]||(f[8]=[he("img",{src:CM,alt:"brush",class:"editor__icon"},null,-1)])),_:1}),Z(ot,{variant:"icon",onClick:f[1]||(f[1]=g=>ve(n)("line")),class:"editor__button line"},{default:ut(()=>f[9]||(f[9]=[he("img",{src:AM,alt:"line",class:"editor__icon"},null,-1)])),_:1}),Z(ot,{variant:"icon",onClick:f[2]||(f[2]=g=>ve(n)("square")),class:"editor__button square"},{default:ut(()=>f[10]||(f[10]=[he("img",{src:SM,alt:"triangle",class:"editor__icon"},null,-1)])),_:1}),Z(ot,{variant:"icon",onClick:f[3]||(f[3]=g=>ve(n)("circle")),class:"editor__button circle"},{default:ut(()=>f[11]||(f[11]=[he("img",{src:bM,alt:"circle",class:"editor__icon"},null,-1)])),_:1}),Z(ot,{variant:"icon",onClick:f[4]||(f[4]=g=>ve(n)("polygon")),class:"editor__button polygon"},{default:ut(()=>f[12]||(f[12]=[he("img",{src:RM,alt:"polygon",class:"editor__icon"},null,-1)])),_:1}),Z(ot,{variant:"icon",onClick:f[5]||(f[5]=g=>ve(n)("star")),class:"editor__button star"},{default:ut(()=>f[13]||(f[13]=[he("img",{src:PM,alt:"star",class:"editor__icon"},null,-1)])),_:1}),he("label",null,[f[14]||(f[14]=Tr(" Width: ")),Z(ji,{"input-type":"number","input-max-width":90,modelValue:ve(me).state.lineWidth,"onUpdate:modelValue":f[6]||(f[6]=g=>ve(me).state.lineWidth=g),min:"1",max:"20",class:"editor__figure-thickness"},null,8,["modelValue"])]),Z(ji,{"input-type":"color","input-max-width":90,modelValue:ve(me).state.color,"onUpdate:modelValue":f[7]||(f[7]=g=>ve(me).state.color=g),class:"editor__color"},null,8,["modelValue"]),Z(ot,{variant:"icon",class:"editor__button clean",onClick:a},{default:ut(()=>f[15]||(f[15]=[he("img",{src:kM,alt:"clean",class:"editor__icon"},null,-1)])),_:1}),Z(ot,{variant:"icon",class:"editor__button save",onClick:c},{default:ut(()=>f[16]||(f[16]=[he("img",{src:NM,alt:"save",class:"editor__icon"},null,-1)])),_:1}),Z(ot,{variant:"icon",class:"editor__button back",onClick:u},{default:ut(()=>f[17]||(f[17]=[he("img",{src:OM,alt:"back",class:"editor__icon back"},null,-1)])),_:1})]),he("div",HM,[he("canvas",{ref_key:"canvas",ref:e,class:"editor__canvas"},null,512)])])],64))}}),zM=_n(WM,[["__scopeId","data-v-d0f4c485"]]),KM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.7071%204.29289C12.0976%204.68342%2012.0976%205.31658%2011.7071%205.70711L6.41421%2011H20C20.5523%2011%2021%2011.4477%2021%2012C21%2012.5523%2020.5523%2013%2020%2013H6.41421L11.7071%2018.2929C12.0976%2018.6834%2012.0976%2019.3166%2011.7071%2019.7071C11.3166%2020.0976%2010.6834%2020.0976%2010.2929%2019.7071L3.29289%2012.7071C3.10536%2012.5196%203%2012.2652%203%2012C3%2011.7348%203.10536%2011.4804%203.29289%2011.2929L10.2929%204.29289C10.6834%203.90237%2011.3166%203.90237%2011.7071%204.29289Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",QM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%20transform='rotate(180)'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.7071%204.29289C12.0976%204.68342%2012.0976%205.31658%2011.7071%205.70711L6.41421%2011H20C20.5523%2011%2021%2011.4477%2021%2012C21%2012.5523%2020.5523%2013%2020%2013H6.41421L11.7071%2018.2929C12.0976%2018.6834%2012.0976%2019.3166%2011.7071%2019.7071C11.3166%2020.0976%2010.6834%2020.0976%2010.2929%2019.7071L3.29289%2012.7071C3.10536%2012.5196%203%2012.2652%203%2012C3%2011.7348%203.10536%2011.4804%203.29289%2011.2929L10.2929%204.29289C10.6834%203.90237%2011.3166%203.90237%2011.7071%204.29289Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",YM={key:0,class:"menu__pagination"},XM=mt({__name:"Paginator",setup(t){const e=()=>{me.state.currentPage>1&&me.state.currentPage--},n=()=>{me.state.currentPage<me.getters.totalPages&&me.state.currentPage++};return(i,r)=>ve(me).getters.totalPages?(Xe(),pt("div",YM,[Z(ot,{variant:"icon",onClick:e,disabled:ve(me).state.currentPage===1,class:"menu__pagination-button"},{default:ut(()=>r[0]||(r[0]=[he("img",{src:KM,alt:"left",class:"menu__pagination-icon"},null,-1)])),_:1},8,["disabled"]),he("span",null,"Page "+Gi(ve(me).state.currentPage)+" of "+Gi(ve(me).getters.totalPages),1),Z(ot,{variant:"icon",onClick:n,disabled:ve(me).state.currentPage===ve(me).getters.totalPages,class:"menu__pagination-button"},{default:ut(()=>r[1]||(r[1]=[he("img",{src:QM,alt:"right",class:"menu__pagination-icon"},null,-1)])),_:1},8,["disabled"])])):gc("",!0)}}),JM=_n(XM,[["__scopeId","data-v-02301fe2"]]),ZM={class:"menu__gallery"},eV={key:0,class:"gallery"},tV=["src"],nV={key:1},iV=mt({__name:"Gallery",setup(t){return(e,n)=>(Xe(),pt("div",ZM,[ve(me).getters.paginatedImages.length>0?(Xe(),pt("div",eV,[(Xe(!0),pt(ft,null,r0(ve(me).getters.paginatedImages,(i,r)=>(Xe(),pt("div",{key:r,class:"gallery__item"},[he("img",{src:i.data,alt:"Canvas Image",class:"gallery__image"},null,8,tV)]))),128))])):(Xe(),pt("p",nV,"No images available."))]))}}),rV=_n(iV,[["__scopeId","data-v-01157ae9"]]),sV={class:"menu__header"},oV={class:"create-button"},aV={class:"dropdown"},lV={key:0,class:"dropdown__list"},cV=["onClick"],uV={class:"signout-button"},hV=mt({__name:"Header",setup(t){const e=s=>{me.commit("setSelectedUser",s),me.state.showDropdown=!1,me.state.currentPage=1},n=()=>{me.commit("resetFilter")},i=()=>{me.dispatch("logout")},r=()=>{Fr.push("/mini-paint/editor")};return(s,o)=>(Xe(),pt("div",sV,[o[2]||(o[2]=he("h3",null,"Gallery of images",-1)),he("div",oV,[Z(ot,{"button-text":"Creat image",variant:"primary",outlined:!0,onClick:r})]),he("div",aV,[Z(ji,{modelValue:ve(me).state.selectedUser,"onUpdate:modelValue":o[0]||(o[0]=a=>ve(me).state.selectedUser=a),"input-type":"search","input-max-width":200,placeholder:"Search by user email...",onFocus:o[1]||(o[1]=a=>ve(me).state.showDropdown=!0),onClick:n},null,8,["modelValue"]),ve(me).state.showDropdown?(Xe(),pt("ul",lV,[(Xe(!0),pt(ft,null,r0(ve(me).state.usersEmail,a=>(Xe(),pt("li",{key:a,onClick:c=>e(a)},Gi(a),9,cV))),128))])):gc("",!0)]),he("div",uV,[Z(ot,{"button-text":"Sign out",onClick:i,variant:"primary",outlined:!0})])]))}}),dV=_n(hV,[["__scopeId","data-v-6c2a1434"]]),fV={class:"menu"},pV=mt({__name:"HomePage",setup(t){Kn(async()=>{me.dispatch("loadImages"),document.body.addEventListener("click",e)});const e=n=>{const i=document.querySelector(".dropdown");i&&!i.contains(n.target)&&(me.state.showDropdown=!1)};return(n,i)=>(Xe(),pt(ft,null,[Z(WT,{steps:ve($M),page:"main"},null,8,["steps"]),he("div",fV,[Z(dV),Z(rV),Z(JM)])],64))}}),gV=_n(pV,[["__scopeId","data-v-b6afa788"]]),mV=[{path:"/mini-paint/",name:"homePage",component:gV},{path:"/mini-paint/login",name:"login",component:_M},{path:"/mini-paint/signup",name:"signup",component:IM},{path:"/mini-paint/editor",name:"editor",component:zM}],Fr=Wx({history:Tx(),routes:mV});Fr.beforeEach(async t=>{const e=Bs(),n=await new Promise(r=>{Uv(e,s=>{r(!!s)})});let i;if(!t.path.includes("login")&&!t.path.includes("signup")?i=n:t.path.includes("login")||t.path.includes("signup")?i=!n:i=!0,!i)return n?"/mini-paint":"/mini-paint/login"});const zT=q0({apiKey:"AIzaSyALpqXLX7P0MLd-2fc7tqOeXZpQGBRX5jo",authDomain:"mini-paint-2fba1.firebaseapp.com",projectId:"mini-paint-2fba1",storageBucket:"mini-paint-2fba1.firebasestorage.app",messagingSenderId:"405984094812",appId:"1:405984094812:web:b4557bb894312e13da5499"}),KT=yb(zT);R0(B1).use(me).use(MD,{firebaseApp:zT}).use(Fr).mount("#app");
