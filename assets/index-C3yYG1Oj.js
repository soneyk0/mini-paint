(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ed(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},ts=[],Ln=()=>{},Aw=()=>!1,oc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),td=t=>t.startsWith("onUpdate:"),Vt=Object.assign,nd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sw=Object.prototype.hasOwnProperty,Oe=(t,e)=>Sw.call(t,e),fe=Array.isArray,ns=t=>ac(t)==="[object Map]",k_=t=>ac(t)==="[object Set]",ge=t=>typeof t=="function",rt=t=>typeof t=="string",pi=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",N_=t=>(ze(t)||ge(t))&&ge(t.then)&&ge(t.catch),O_=Object.prototype.toString,ac=t=>O_.call(t),bw=t=>ac(t).slice(8,-1),D_=t=>ac(t)==="[object Object]",id=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vo=ed(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Rw=/-(\w)/g,hn=lc(t=>t.replace(Rw,(e,n)=>n?n.toUpperCase():"")),Pw=/\B([A-Z])/g,br=lc(t=>t.replace(Pw,"-$1").toLowerCase()),cc=lc(t=>t.charAt(0).toUpperCase()+t.slice(1)),lu=lc(t=>t?`on${cc(t)}`:""),xi=(t,e)=>!Object.is(t,e),el=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},x_=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},ju=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cp;const uc=()=>Cp||(Cp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pr(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=rt(i)?Dw(i):pr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(rt(t)||ze(t))return t}const kw=/;(?![^(]*\))/g,Nw=/:([^]+)/,Ow=/\/\*[^]*?\*\//g;function Dw(t){const e={};return t.replace(Ow,"").split(kw).forEach(n=>{if(n){const i=n.split(Nw);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function rd(t){let e="";if(rt(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const i=rd(t[n]);i&&(e+=i+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lw=ed(xw);function L_(t){return!!t||t===""}const M_=t=>!!(t&&t.__v_isRef===!0),Li=t=>rt(t)?t:t==null?"":fe(t)||ze(t)&&(t.toString===O_||!ge(t.toString))?M_(t)?Li(t.value):JSON.stringify(t,V_,2):String(t),V_=(t,e)=>M_(e)?V_(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[cu(i,s)+" =>"]=r,n),{})}:k_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>cu(n))}:pi(e)?cu(e):ze(e)&&!fe(e)&&!D_(e)?String(e):e,cu=(t,e="")=>{var n;return pi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jt;class Mw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Jt,!e&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Jt;try{return Jt=this,e()}finally{Jt=n}}}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Vw(){return Jt}let $e;const uu=new WeakSet;class F_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Jt&&Jt.active&&Jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,uu.has(this)&&(uu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||B_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ap(this),$_(this);const e=$e,n=vn;$e=this,vn=!0;try{return this.fn()}finally{q_(this),$e=e,vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ad(e);this.deps=this.depsTail=void 0,Ap(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?uu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gu(this)&&this.run()}get dirty(){return Gu(this)}}let U_=0,Eo,To;function B_(t,e=!1){if(t.flags|=8,e){t.next=To,To=t;return}t.next=Eo,Eo=t}function sd(){U_++}function od(){if(--U_>0)return;if(To){let e=To;for(To=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Eo;){let e=Eo;for(Eo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function $_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function q_(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),ad(i),Fw(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Gu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(j_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function j_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Fo))return;t.globalVersion=Fo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Gu(t)){t.flags&=-3;return}const n=$e,i=vn;$e=t,vn=!0;try{$_(t);const r=t.fn(t._value);(e.version===0||xi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{$e=n,vn=i,q_(t),t.flags&=-3}}function ad(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)ad(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let vn=!0;const G_=[];function Qi(){G_.push(vn),vn=!1}function Yi(){const t=G_.pop();vn=t===void 0?!0:t}function Ap(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let Fo=0;class Uw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ld{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!vn||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new Uw($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,W_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=i)}return n}trigger(e){this.version++,Fo++,this.notify(e)}notify(e){sd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{od()}}}function W_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)W_(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Wu=new WeakMap,dr=Symbol(""),Hu=Symbol(""),Uo=Symbol("");function Pt(t,e,n){if(vn&&$e){let i=Wu.get(t);i||Wu.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new ld),r.map=i,r.key=n),r.track()}}function ei(t,e,n,i,r,s){const o=Wu.get(t);if(!o){Fo++;return}const a=c=>{c&&c.trigger()};if(sd(),e==="clear")o.forEach(a);else{const c=fe(t),u=c&&id(n);if(c&&n==="length"){const h=Number(i);o.forEach((f,g)=>{(g==="length"||g===Uo||!pi(g)&&g>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Uo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(dr)),ns(t)&&a(o.get(Hu)));break;case"delete":c||(a(o.get(dr)),ns(t)&&a(o.get(Hu)));break;case"set":ns(t)&&a(o.get(dr));break}}od()}function $r(t){const e=_e(t);return e===t?e:(Pt(e,"iterate",Uo),cn(t)?e:e.map(kt))}function hc(t){return Pt(t=_e(t),"iterate",Uo),t}const Bw={__proto__:null,[Symbol.iterator](){return hu(this,Symbol.iterator,kt)},concat(...t){return $r(this).concat(...t.map(e=>fe(e)?$r(e):e))},entries(){return hu(this,"entries",t=>(t[1]=kt(t[1]),t))},every(t,e){return Yn(this,"every",t,e,void 0,arguments)},filter(t,e){return Yn(this,"filter",t,e,n=>n.map(kt),arguments)},find(t,e){return Yn(this,"find",t,e,kt,arguments)},findIndex(t,e){return Yn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Yn(this,"findLast",t,e,kt,arguments)},findLastIndex(t,e){return Yn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Yn(this,"forEach",t,e,void 0,arguments)},includes(...t){return du(this,"includes",t)},indexOf(...t){return du(this,"indexOf",t)},join(t){return $r(this).join(t)},lastIndexOf(...t){return du(this,"lastIndexOf",t)},map(t,e){return Yn(this,"map",t,e,void 0,arguments)},pop(){return io(this,"pop")},push(...t){return io(this,"push",t)},reduce(t,...e){return Sp(this,"reduce",t,e)},reduceRight(t,...e){return Sp(this,"reduceRight",t,e)},shift(){return io(this,"shift")},some(t,e){return Yn(this,"some",t,e,void 0,arguments)},splice(...t){return io(this,"splice",t)},toReversed(){return $r(this).toReversed()},toSorted(t){return $r(this).toSorted(t)},toSpliced(...t){return $r(this).toSpliced(...t)},unshift(...t){return io(this,"unshift",t)},values(){return hu(this,"values",kt)}};function hu(t,e,n){const i=hc(t),r=i[e]();return i!==t&&!cn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const $w=Array.prototype;function Yn(t,e,n,i,r,s){const o=hc(t),a=o!==t&&!cn(t),c=o[e];if(c!==$w[e]){const f=c.apply(t,s);return a?kt(f):f}let u=n;o!==t&&(a?u=function(f,g){return n.call(this,kt(f),g,t)}:n.length>2&&(u=function(f,g){return n.call(this,f,g,t)}));const h=c.call(o,u,i);return a&&r?r(h):h}function Sp(t,e,n,i){const r=hc(t);let s=n;return r!==t&&(cn(t)?n.length>3&&(s=function(o,a,c){return n.call(this,o,a,c,t)}):s=function(o,a,c){return n.call(this,o,kt(a),c,t)}),r[e](s,...i)}function du(t,e,n){const i=_e(t);Pt(i,"iterate",Uo);const r=i[e](...n);return(r===-1||r===!1)&&hd(n[0])?(n[0]=_e(n[0]),i[e](...n)):r}function io(t,e,n=[]){Qi(),sd();const i=_e(t)[e].apply(t,n);return od(),Yi(),i}const qw=ed("__proto__,__v_isRef,__isVue"),H_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pi));function jw(t){pi(t)||(t=String(t));const e=_e(this);return Pt(e,"has",t),e.hasOwnProperty(t)}class z_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Zw:X_:s?Y_:Q_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=fe(e);if(!r){let c;if(o&&(c=Bw[n]))return c;if(n==="hasOwnProperty")return jw}const a=Reflect.get(e,n,Mt(e)?e:i);return(pi(n)?H_.has(n):qw(n))||(r||Pt(e,"get",n),s)?a:Mt(a)?o&&id(n)?a:a.value:ze(a)?r?Z_(a):fn(a):a}}class K_ extends z_{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const c=gr(s);if(!cn(i)&&!gr(i)&&(s=_e(s),i=_e(i)),!fe(e)&&Mt(s)&&!Mt(i))return c?!1:(s.value=i,!0)}const o=fe(e)&&id(n)?Number(n)<e.length:Oe(e,n),a=Reflect.set(e,n,i,Mt(e)?e:r);return e===_e(r)&&(o?xi(i,s)&&ei(e,"set",n,i):ei(e,"add",n,i)),a}deleteProperty(e,n){const i=Oe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ei(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!pi(n)||!H_.has(n))&&Pt(e,"has",n),i}ownKeys(e){return Pt(e,"iterate",fe(e)?"length":dr),Reflect.ownKeys(e)}}class Gw extends z_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ww=new K_,Hw=new Gw,zw=new K_(!0);const zu=t=>t,Ba=t=>Reflect.getPrototypeOf(t);function Kw(t,e,n){return function(...i){const r=this.__v_raw,s=_e(r),o=ns(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...i),h=n?zu:e?Ku:kt;return!e&&Pt(s,"iterate",c?Hu:dr),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:a?[h(f[0]),h(f[1])]:h(f),done:g}},[Symbol.iterator](){return this}}}}function $a(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Qw(t,e){const n={get(r){const s=this.__v_raw,o=_e(s),a=_e(r);t||(xi(r,a)&&Pt(o,"get",r),Pt(o,"get",a));const{has:c}=Ba(o),u=e?zu:t?Ku:kt;if(c.call(o,r))return u(s.get(r));if(c.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Pt(_e(r),"iterate",dr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=_e(s),a=_e(r);return t||(xi(r,a)&&Pt(o,"has",r),Pt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,c=_e(a),u=e?zu:t?Ku:kt;return!t&&Pt(c,"iterate",dr),a.forEach((h,f)=>r.call(s,u(h),u(f),o))}};return Vt(n,t?{add:$a("add"),set:$a("set"),delete:$a("delete"),clear:$a("clear")}:{add(r){!e&&!cn(r)&&!gr(r)&&(r=_e(r));const s=_e(this);return Ba(s).has.call(s,r)||(s.add(r),ei(s,"add",r,r)),this},set(r,s){!e&&!cn(s)&&!gr(s)&&(s=_e(s));const o=_e(this),{has:a,get:c}=Ba(o);let u=a.call(o,r);u||(r=_e(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,s),u?xi(s,h)&&ei(o,"set",r,s):ei(o,"add",r,s),this},delete(r){const s=_e(this),{has:o,get:a}=Ba(s);let c=o.call(s,r);c||(r=_e(r),c=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return c&&ei(s,"delete",r,void 0),u},clear(){const r=_e(this),s=r.size!==0,o=r.clear();return s&&ei(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Kw(r,t,e)}),n}function cd(t,e){const n=Qw(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Oe(n,r)&&r in i?n:i,r,s)}const Yw={get:cd(!1,!1)},Xw={get:cd(!1,!0)},Jw={get:cd(!0,!1)};const Q_=new WeakMap,Y_=new WeakMap,X_=new WeakMap,Zw=new WeakMap;function eI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tI(t){return t.__v_skip||!Object.isExtensible(t)?0:eI(bw(t))}function fn(t){return gr(t)?t:ud(t,!1,Ww,Yw,Q_)}function J_(t){return ud(t,!1,zw,Xw,Y_)}function Z_(t){return ud(t,!0,Hw,Jw,X_)}function ud(t,e,n,i,r){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=tI(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function is(t){return gr(t)?is(t.__v_raw):!!(t&&t.__v_isReactive)}function gr(t){return!!(t&&t.__v_isReadonly)}function cn(t){return!!(t&&t.__v_isShallow)}function hd(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function nI(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&x_(t,"__v_skip",!0),t}const kt=t=>ze(t)?fn(t):t,Ku=t=>ze(t)?Z_(t):t;function Mt(t){return t?t.__v_isRef===!0:!1}function Je(t){return e0(t,!1)}function iI(t){return e0(t,!0)}function e0(t,e){return Mt(t)?t:new rI(t,e)}class rI{constructor(e,n){this.dep=new ld,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||cn(e)||gr(e);e=i?e:_e(e),xi(e,n)&&(this._rawValue=e,this._value=i?e:kt(e),this.dep.trigger())}}function Ye(t){return Mt(t)?t.value:t}const sI={get:(t,e,n)=>e==="__v_raw"?t:Ye(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Mt(r)&&!Mt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function t0(t){return is(t)?t:new Proxy(t,sI)}class oI{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ld(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return B_(this,!0),!0}get value(){const e=this.dep.track();return j_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function aI(t,e,n=!1){let i,r;return ge(t)?i=t:(i=t.get,r=t.set),new oI(i,r,n)}const qa={},vl=new WeakMap;let ar;function lI(t,e=!1,n=ar){if(n){let i=vl.get(n);i||vl.set(n,i=[]),i.push(t)}}function cI(t,e,n=Fe){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:c}=n,u=D=>r?D:cn(D)||r===!1||r===0?ti(D,1):ti(D);let h,f,g,m,C=!1,b=!1;if(Mt(t)?(f=()=>t.value,C=cn(t)):is(t)?(f=()=>u(t),C=!0):fe(t)?(b=!0,C=t.some(D=>is(D)||cn(D)),f=()=>t.map(D=>{if(Mt(D))return D.value;if(is(D))return u(D);if(ge(D))return c?c(D,2):D()})):ge(t)?e?f=c?()=>c(t,2):t:f=()=>{if(g){Qi();try{g()}finally{Yi()}}const D=ar;ar=h;try{return c?c(t,3,[m]):t(m)}finally{ar=D}}:f=Ln,e&&r){const D=f,j=r===!0?1/0:r;f=()=>ti(D(),j)}const N=Vw(),q=()=>{h.stop(),N&&N.active&&nd(N.effects,h)};if(s&&e){const D=e;e=(...j)=>{D(...j),q()}}let F=b?new Array(t.length).fill(qa):qa;const $=D=>{if(!(!(h.flags&1)||!h.dirty&&!D))if(e){const j=h.run();if(r||C||(b?j.some((ee,I)=>xi(ee,F[I])):xi(j,F))){g&&g();const ee=ar;ar=h;try{const I=[j,F===qa?void 0:b&&F[0]===qa?[]:F,m];c?c(e,3,I):e(...I),F=j}finally{ar=ee}}}else h.run()};return a&&a($),h=new F_(f),h.scheduler=o?()=>o($,!1):$,m=D=>lI(D,!1,h),g=h.onStop=()=>{const D=vl.get(h);if(D){if(c)c(D,4);else for(const j of D)j();vl.delete(h)}},e?i?$(!0):F=h.run():o?o($.bind(null,!0),!0):h.run(),q.pause=h.pause.bind(h),q.resume=h.resume.bind(h),q.stop=q,q}function ti(t,e=1/0,n){if(e<=0||!ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Mt(t))ti(t.value,e,n);else if(fe(t))for(let i=0;i<t.length;i++)ti(t[i],e,n);else if(k_(t)||ns(t))t.forEach(i=>{ti(i,e,n)});else if(D_(t)){for(const i in t)ti(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ti(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oa(t,e,n,i){try{return i?t(...i):t()}catch(r){dc(r,e,n)}}function $n(t,e,n,i){if(ge(t)){const r=oa(t,e,n,i);return r&&N_(r)&&r.catch(s=>{dc(s,e,n)}),r}if(fe(t)){const r=[];for(let s=0;s<t.length;s++)r.push($n(t[s],e,n,i));return r}}function dc(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(s){Qi(),oa(s,null,10,[t,c,u]),Yi();return}}uI(t,n,r,i,o)}function uI(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const qt=[];let Pn=-1;const rs=[];let Si=null,Gr=0;const n0=Promise.resolve();let El=null;function Ps(t){const e=El||n0;return t?e.then(this?t.bind(this):t):e}function hI(t){let e=Pn+1,n=qt.length;for(;e<n;){const i=e+n>>>1,r=qt[i],s=Bo(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function dd(t){if(!(t.flags&1)){const e=Bo(t),n=qt[qt.length-1];!n||!(t.flags&2)&&e>=Bo(n)?qt.push(t):qt.splice(hI(e),0,t),t.flags|=1,i0()}}function i0(){El||(El=n0.then(s0))}function dI(t){fe(t)?rs.push(...t):Si&&t.id===-1?Si.splice(Gr+1,0,t):t.flags&1||(rs.push(t),t.flags|=1),i0()}function bp(t,e,n=Pn+1){for(;n<qt.length;n++){const i=qt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;qt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function r0(t){if(rs.length){const e=[...new Set(rs)].sort((n,i)=>Bo(n)-Bo(i));if(rs.length=0,Si){Si.push(...e);return}for(Si=e,Gr=0;Gr<Si.length;Gr++){const n=Si[Gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Si=null,Gr=0}}const Bo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function s0(t){try{for(Pn=0;Pn<qt.length;Pn++){const e=qt[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),oa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<qt.length;Pn++){const e=qt[Pn];e&&(e.flags&=-2)}Pn=-1,qt.length=0,r0(),El=null,(qt.length||rs.length)&&s0()}}let Et=null,o0=null;function Tl(t){const e=Et;return Et=t,o0=t&&t.type.__scopeId||null,e}function oi(t,e=Et,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Fp(-1);const s=Tl(e);let o;try{o=t(...r)}finally{Tl(s),i._d&&Fp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function wo(t,e){if(Et===null)return t;const n=_c(Et),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,c=Fe]=e[r];s&&(ge(s)&&(s={mounted:s,updated:s}),s.deep&&ti(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function sr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(Qi(),$n(c,n,8,[t.el,a,t,e]),Yi())}}const fI=Symbol("_vte"),pI=t=>t.__isTeleport;function fd(t,e){t.shapeFlag&6&&t.component?(t.transition=e,fd(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Gt(t,e){return ge(t)?Vt({name:t.name},e,{setup:t}):t}function a0(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function wl(t,e,n,i,r=!1){if(fe(t)){t.forEach((C,b)=>wl(C,e&&(fe(e)?e[b]:e),n,i,r));return}if(ss(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&wl(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?_c(i.component):i.el,o=r?null:s,{i:a,r:c}=t,u=e&&e.r,h=a.refs===Fe?a.refs={}:a.refs,f=a.setupState,g=_e(f),m=f===Fe?()=>!1:C=>Oe(g,C);if(u!=null&&u!==c&&(rt(u)?(h[u]=null,m(u)&&(f[u]=null)):Mt(u)&&(u.value=null)),ge(c))oa(c,a,12,[o,h]);else{const C=rt(c),b=Mt(c);if(C||b){const N=()=>{if(t.f){const q=C?m(c)?f[c]:h[c]:c.value;r?fe(q)&&nd(q,s):fe(q)?q.includes(s)||q.push(s):C?(h[c]=[s],m(c)&&(f[c]=h[c])):(c.value=[s],t.k&&(h[t.k]=c.value))}else C?(h[c]=o,m(c)&&(f[c]=o)):b&&(c.value=o,t.k&&(h[t.k]=o))};o?(N.id=-1,Xt(N,n)):N()}}}uc().requestIdleCallback;uc().cancelIdleCallback;const ss=t=>!!t.type.__asyncLoader,l0=t=>t.type.__isKeepAlive;function gI(t,e){c0(t,"a",e)}function mI(t,e){c0(t,"da",e)}function c0(t,e,n=xt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(fc(e,i,n),n){let r=n.parent;for(;r&&r.parent;)l0(r.parent.vnode)&&_I(i,e,n,r),r=r.parent}}function _I(t,e,n,i){const r=fc(e,t,i,!0);pc(()=>{nd(i[e],r)},n)}function fc(t,e,n=xt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Qi();const a=aa(n),c=$n(e,n,t,o);return a(),Yi(),c});return i?r.unshift(s):r.push(s),s}}const gi=t=>(e,n=xt)=>{(!jo||t==="sp")&&fc(t,(...i)=>e(...i),n)},yI=gi("bm"),Rr=gi("m"),vI=gi("bu"),EI=gi("u"),u0=gi("bum"),pc=gi("um"),TI=gi("sp"),wI=gi("rtg"),II=gi("rtc");function CI(t,e=xt){fc("ec",t,e)}const AI="components";function pd(t,e){return bI(AI,t,!0,e)||t}const SI=Symbol.for("v-ndc");function bI(t,e,n=!0,i=!1){const r=Et||xt;if(r){const s=r.type;{const a=d2(s,!1);if(a&&(a===e||a===hn(e)||a===cc(hn(e))))return s}const o=Rp(r[t]||s[t],e)||Rp(r.appContext[t],e);return!o&&i?s:o}}function Rp(t,e){return t&&(t[e]||t[hn(e)]||t[cc(hn(e))])}function Pp(t,e,n,i){let r;const s=n,o=fe(t);if(o||rt(t)){const a=o&&is(t);let c=!1;a&&(c=!cn(t),t=hc(t)),r=new Array(t.length);for(let u=0,h=t.length;u<h;u++)r[u]=e(c?kt(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(ze(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(t[h],h,c,s)}}else r=[];return r}function Qu(t,e,n={},i,r){if(Et.ce||Et.parent&&ss(Et.parent)&&Et.parent.ce)return e!=="default"&&(n.name=e),et(),qo(dt,null,[le("slot",n,i)],64);let s=t[e];s&&s._c&&(s._d=!1),et();const o=s&&h0(s(n)),a=n.key||o&&o.key,c=qo(dt,{key:(a&&!pi(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return s&&s._c&&(s._d=!0),c}function h0(t){return t.some(e=>mr(e)?!(e.type===qi||e.type===dt&&!h0(e.children)):!0)?t:null}const Yu=t=>t?N0(t)?_c(t):Yu(t.parent):null,Io=Vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yu(t.parent),$root:t=>Yu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>f0(t),$forceUpdate:t=>t.f||(t.f=()=>{dd(t.update)}),$nextTick:t=>t.n||(t.n=Ps.bind(t.proxy)),$watch:t=>KI.bind(t)}),fu=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Oe(t,e),RI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(fu(i,e))return o[e]=1,i[e];if(r!==Fe&&Oe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,s[e];if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];Xu&&(o[e]=0)}}const h=Io[e];let f,g;if(h)return e==="$attrs"&&Pt(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Oe(g,e))return g[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return fu(r,e)?(r[e]=n,!0):i!==Fe&&Oe(i,e)?(i[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==Fe&&Oe(t,o)||fu(e,o)||(a=s[0])&&Oe(a,o)||Oe(i,o)||Oe(Io,o)||Oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kp(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xu=!0;function PI(t){const e=f0(t),n=t.proxy,i=t.ctx;Xu=!1,e.beforeCreate&&Np(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:g,beforeUpdate:m,updated:C,activated:b,deactivated:N,beforeDestroy:q,beforeUnmount:F,destroyed:$,unmounted:D,render:j,renderTracked:ee,renderTriggered:I,errorCaptured:y,serverPrefetch:w,expose:A,inheritAttrs:S,components:P,directives:E,filters:Ze}=e;if(u&&kI(u,i,null),o)for(const ye in o){const Ee=o[ye];ge(Ee)&&(i[ye]=Ee.bind(n))}if(r){const ye=r.call(n,n);ze(ye)&&(t.data=fn(ye))}if(Xu=!0,s)for(const ye in s){const Ee=s[ye],Qt=ge(Ee)?Ee.bind(n,n):ge(Ee.get)?Ee.get.bind(n,n):Ln,pn=!ge(Ee)&&ge(Ee.set)?Ee.set.bind(n):Ln,rn=Ue({get:Qt,set:pn});Object.defineProperty(i,ye,{enumerable:!0,configurable:!0,get:()=>rn.value,set:Ke=>rn.value=Ke})}if(a)for(const ye in a)d0(a[ye],i,n,ye);if(c){const ye=ge(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(Ee=>{tl(Ee,ye[Ee])})}h&&Np(h,t,"c");function Be(ye,Ee){fe(Ee)?Ee.forEach(Qt=>ye(Qt.bind(n))):Ee&&ye(Ee.bind(n))}if(Be(yI,f),Be(Rr,g),Be(vI,m),Be(EI,C),Be(gI,b),Be(mI,N),Be(CI,y),Be(II,ee),Be(wI,I),Be(u0,F),Be(pc,D),Be(TI,w),fe(A))if(A.length){const ye=t.exposed||(t.exposed={});A.forEach(Ee=>{Object.defineProperty(ye,Ee,{get:()=>n[Ee],set:Qt=>n[Ee]=Qt})})}else t.exposed||(t.exposed={});j&&t.render===Ln&&(t.render=j),S!=null&&(t.inheritAttrs=S),P&&(t.components=P),E&&(t.directives=E),w&&a0(t)}function kI(t,e,n=Ln){fe(t)&&(t=Ju(t));for(const i in t){const r=t[i];let s;ze(r)?"default"in r?s=Mn(r.from||i,r.default,!0):s=Mn(r.from||i):s=Mn(r),Mt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Np(t,e,n){$n(fe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function d0(t,e,n,i){let r=i.includes(".")?S0(n,i):()=>n[i];if(rt(t)){const s=e[t];ge(s)&&as(r,s)}else if(ge(t))as(r,t.bind(n));else if(ze(t))if(fe(t))t.forEach(s=>d0(s,e,n,i));else{const s=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(s)&&as(r,s,t)}}function f0(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!n&&!i?c=e:(c={},r.length&&r.forEach(u=>Il(c,u,o,!0)),Il(c,e,o)),ze(e)&&s.set(e,c),c}function Il(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Il(t,s,n,!0),r&&r.forEach(o=>Il(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=NI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const NI={data:Op,props:Dp,emits:Dp,methods:ho,computed:ho,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:ho,directives:ho,watch:DI,provide:Op,inject:OI};function Op(t,e){return e?t?function(){return Vt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function OI(t,e){return ho(Ju(t),Ju(e))}function Ju(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $t(t,e){return t?[...new Set([].concat(t,e))]:e}function ho(t,e){return t?Vt(Object.create(null),t,e):e}function Dp(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:Vt(Object.create(null),kp(t),kp(e??{})):e}function DI(t,e){if(!t)return e;if(!e)return t;const n=Vt(Object.create(null),t);for(const i in e)n[i]=$t(t[i],e[i]);return n}function p0(){return{app:null,config:{isNativeTag:Aw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xI=0;function LI(t,e){return function(i,r=null){ge(i)||(i=Vt({},i)),r!=null&&!ze(r)&&(r=null);const s=p0(),o=new WeakSet,a=[];let c=!1;const u=s.app={_uid:xI++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:p2,get config(){return s.config},set config(h){},use(h,...f){return o.has(h)||(h&&ge(h.install)?(o.add(h),h.install(u,...f)):ge(h)&&(o.add(h),h(u,...f))),u},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),u},component(h,f){return f?(s.components[h]=f,u):s.components[h]},directive(h,f){return f?(s.directives[h]=f,u):s.directives[h]},mount(h,f,g){if(!c){const m=u._ceVNode||le(i,r);return m.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),t(m,h,g),c=!0,u._container=h,h.__vue_app__=u,_c(m.component)}},onUnmount(h){a.push(h)},unmount(){c&&($n(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return s.provides[h]=f,u},runWithContext(h){const f=os;os=u;try{return h()}finally{os=f}}};return u}}let os=null;function tl(t,e){if(xt){let n=xt.provides;const i=xt.parent&&xt.parent.provides;i===n&&(n=xt.provides=Object.create(i)),n[t]=e}}function Mn(t,e,n=!1){const i=xt||Et;if(i||os){const r=os?os._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ge(e)?e.call(i&&i.proxy):e}}const g0={},m0=()=>Object.create(g0),_0=t=>Object.getPrototypeOf(t)===g0;function MI(t,e,n,i=!1){const r={},s=m0();t.propsDefaults=Object.create(null),y0(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:J_(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function VI(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=_e(r),[c]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let g=h[f];if(gc(t.emitsOptions,g))continue;const m=e[g];if(c)if(Oe(s,g))m!==s[g]&&(s[g]=m,u=!0);else{const C=hn(g);r[C]=Zu(c,a,C,m,t,!1)}else m!==s[g]&&(s[g]=m,u=!0)}}}else{y0(t,e,r,s)&&(u=!0);let h;for(const f in a)(!e||!Oe(e,f)&&((h=br(f))===f||!Oe(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(r[f]=Zu(c,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Oe(e,f))&&(delete s[f],u=!0)}u&&ei(t.attrs,"set","")}function y0(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(vo(c))continue;const u=e[c];let h;r&&Oe(r,h=hn(c))?!s||!s.includes(h)?n[h]=u:(a||(a={}))[h]=u:gc(t.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(s){const c=_e(n),u=a||Fe;for(let h=0;h<s.length;h++){const f=s[h];n[f]=Zu(r,c,f,u[f],t,!Oe(u,f))}}return o}function Zu(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const h=aa(r);i=u[n]=c.call(null,e),h()}}else i=c;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===br(n))&&(i=!0))}return i}const FI=new WeakMap;function v0(t,e,n=!1){const i=n?FI:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let c=!1;if(!ge(t)){const h=f=>{c=!0;const[g,m]=v0(f,e,!0);Vt(o,g),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!s&&!c)return ze(t)&&i.set(t,ts),ts;if(fe(s))for(let h=0;h<s.length;h++){const f=hn(s[h]);xp(f)&&(o[f]=Fe)}else if(s)for(const h in s){const f=hn(h);if(xp(f)){const g=s[h],m=o[f]=fe(g)||ge(g)?{type:g}:Vt({},g),C=m.type;let b=!1,N=!0;if(fe(C))for(let q=0;q<C.length;++q){const F=C[q],$=ge(F)&&F.name;if($==="Boolean"){b=!0;break}else $==="String"&&(N=!1)}else b=ge(C)&&C.name==="Boolean";m[0]=b,m[1]=N,(b||Oe(m,"default"))&&a.push(f)}}const u=[o,a];return ze(t)&&i.set(t,u),u}function xp(t){return t[0]!=="$"&&!vo(t)}const E0=t=>t[0]==="_"||t==="$stable",gd=t=>fe(t)?t.map(kn):[kn(t)],UI=(t,e,n)=>{if(e._n)return e;const i=oi((...r)=>gd(e(...r)),n);return i._c=!1,i},T0=(t,e,n)=>{const i=t._ctx;for(const r in t){if(E0(r))continue;const s=t[r];if(ge(s))e[r]=UI(r,s,i);else if(s!=null){const o=gd(s);e[r]=()=>o}}},w0=(t,e)=>{const n=gd(e);t.slots.default=()=>n},I0=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},BI=(t,e,n)=>{const i=t.slots=m0();if(t.vnode.shapeFlag&32){const r=e._;r?(I0(i,e,n),n&&x_(i,"_",r,!0)):T0(e,i)}else e&&w0(t,e)},$I=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Fe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:I0(r,e,n):(s=!e.$stable,T0(e,r)),o=e}else e&&(w0(t,e),o={default:1});if(s)for(const a in r)!E0(a)&&o[a]==null&&delete r[a]},Xt=t2;function qI(t){return jI(t)}function jI(t,e){const n=uc();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:g,setScopeId:m=Ln,insertStaticContent:C}=t,b=(v,T,R,L=null,U=null,M=null,K=void 0,H=null,W=!!T.dynamicChildren)=>{if(v===T)return;v&&!ro(v,T)&&(L=x(v),Ke(v,U,M,!0),v=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:G,ref:oe,shapeFlag:X}=T;switch(G){case mc:N(v,T,R,L);break;case qi:q(v,T,R,L);break;case gu:v==null&&F(T,R,L,K);break;case dt:P(v,T,R,L,U,M,K,H,W);break;default:X&1?j(v,T,R,L,U,M,K,H,W):X&6?E(v,T,R,L,U,M,K,H,W):(X&64||X&128)&&G.process(v,T,R,L,U,M,K,H,W,ne)}oe!=null&&U&&wl(oe,v&&v.ref,M,T||v,!T)},N=(v,T,R,L)=>{if(v==null)i(T.el=a(T.children),R,L);else{const U=T.el=v.el;T.children!==v.children&&u(U,T.children)}},q=(v,T,R,L)=>{v==null?i(T.el=c(T.children||""),R,L):T.el=v.el},F=(v,T,R,L)=>{[v.el,v.anchor]=C(v.children,T,R,L,v.el,v.anchor)},$=({el:v,anchor:T},R,L)=>{let U;for(;v&&v!==T;)U=g(v),i(v,R,L),v=U;i(T,R,L)},D=({el:v,anchor:T})=>{let R;for(;v&&v!==T;)R=g(v),r(v),v=R;r(T)},j=(v,T,R,L,U,M,K,H,W)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),v==null?ee(T,R,L,U,M,K,H,W):w(v,T,U,M,K,H,W)},ee=(v,T,R,L,U,M,K,H)=>{let W,G;const{props:oe,shapeFlag:X,transition:re,dirs:ce}=v;if(W=v.el=o(v.type,M,oe&&oe.is,oe),X&8?h(W,v.children):X&16&&y(v.children,W,null,L,U,pu(v,M),K,H),ce&&sr(v,null,L,"created"),I(W,v,v.scopeId,K,L),oe){for(const me in oe)me!=="value"&&!vo(me)&&s(W,me,null,oe[me],M,L);"value"in oe&&s(W,"value",null,oe.value,M),(G=oe.onVnodeBeforeMount)&&Rn(G,L,v)}ce&&sr(v,null,L,"beforeMount");const ae=GI(U,re);ae&&re.beforeEnter(W),i(W,T,R),((G=oe&&oe.onVnodeMounted)||ae||ce)&&Xt(()=>{G&&Rn(G,L,v),ae&&re.enter(W),ce&&sr(v,null,L,"mounted")},U)},I=(v,T,R,L,U)=>{if(R&&m(v,R),L)for(let M=0;M<L.length;M++)m(v,L[M]);if(U){let M=U.subTree;if(T===M||R0(M.type)&&(M.ssContent===T||M.ssFallback===T)){const K=U.vnode;I(v,K,K.scopeId,K.slotScopeIds,U.parent)}}},y=(v,T,R,L,U,M,K,H,W=0)=>{for(let G=W;G<v.length;G++){const oe=v[G]=H?bi(v[G]):kn(v[G]);b(null,oe,T,R,L,U,M,K,H)}},w=(v,T,R,L,U,M,K)=>{const H=T.el=v.el;let{patchFlag:W,dynamicChildren:G,dirs:oe}=T;W|=v.patchFlag&16;const X=v.props||Fe,re=T.props||Fe;let ce;if(R&&or(R,!1),(ce=re.onVnodeBeforeUpdate)&&Rn(ce,R,T,v),oe&&sr(T,v,R,"beforeUpdate"),R&&or(R,!0),(X.innerHTML&&re.innerHTML==null||X.textContent&&re.textContent==null)&&h(H,""),G?A(v.dynamicChildren,G,H,R,L,pu(T,U),M):K||Ee(v,T,H,null,R,L,pu(T,U),M,!1),W>0){if(W&16)S(H,X,re,R,U);else if(W&2&&X.class!==re.class&&s(H,"class",null,re.class,U),W&4&&s(H,"style",X.style,re.style,U),W&8){const ae=T.dynamicProps;for(let me=0;me<ae.length;me++){const Ce=ae[me],wt=X[Ce],pt=re[Ce];(pt!==wt||Ce==="value")&&s(H,Ce,wt,pt,U,R)}}W&1&&v.children!==T.children&&h(H,T.children)}else!K&&G==null&&S(H,X,re,R,U);((ce=re.onVnodeUpdated)||oe)&&Xt(()=>{ce&&Rn(ce,R,T,v),oe&&sr(T,v,R,"updated")},L)},A=(v,T,R,L,U,M,K)=>{for(let H=0;H<T.length;H++){const W=v[H],G=T[H],oe=W.el&&(W.type===dt||!ro(W,G)||W.shapeFlag&70)?f(W.el):R;b(W,G,oe,null,L,U,M,K,!0)}},S=(v,T,R,L,U)=>{if(T!==R){if(T!==Fe)for(const M in T)!vo(M)&&!(M in R)&&s(v,M,T[M],null,U,L);for(const M in R){if(vo(M))continue;const K=R[M],H=T[M];K!==H&&M!=="value"&&s(v,M,H,K,U,L)}"value"in R&&s(v,"value",T.value,R.value,U)}},P=(v,T,R,L,U,M,K,H,W)=>{const G=T.el=v?v.el:a(""),oe=T.anchor=v?v.anchor:a("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:ce}=T;ce&&(H=H?H.concat(ce):ce),v==null?(i(G,R,L),i(oe,R,L),y(T.children||[],R,oe,U,M,K,H,W)):X>0&&X&64&&re&&v.dynamicChildren?(A(v.dynamicChildren,re,R,U,M,K,H),(T.key!=null||U&&T===U.subTree)&&C0(v,T,!0)):Ee(v,T,R,oe,U,M,K,H,W)},E=(v,T,R,L,U,M,K,H,W)=>{T.slotScopeIds=H,v==null?T.shapeFlag&512?U.ctx.activate(T,R,L,K,W):Ze(T,R,L,U,M,K,W):lt(v,T,W)},Ze=(v,T,R,L,U,M,K)=>{const H=v.component=a2(v,L,U);if(l0(v)&&(H.ctx.renderer=ne),l2(H,!1,K),H.asyncDep){if(U&&U.registerDep(H,Be,K),!v.el){const W=H.subTree=le(qi);q(null,W,T,R)}}else Be(H,v,T,R,U,M,K)},lt=(v,T,R)=>{const L=T.component=v.component;if(ZI(v,T,R))if(L.asyncDep&&!L.asyncResolved){ye(L,T,R);return}else L.next=T,L.update();else T.el=v.el,L.vnode=T},Be=(v,T,R,L,U,M,K)=>{const H=()=>{if(v.isMounted){let{next:X,bu:re,u:ce,parent:ae,vnode:me}=v;{const It=A0(v);if(It){X&&(X.el=me.el,ye(v,X,K)),It.asyncDep.then(()=>{v.isUnmounted||H()});return}}let Ce=X,wt;or(v,!1),X?(X.el=me.el,ye(v,X,K)):X=me,re&&el(re),(wt=X.props&&X.props.onVnodeBeforeUpdate)&&Rn(wt,ae,X,me),or(v,!0);const pt=Mp(v),sn=v.subTree;v.subTree=pt,b(sn,pt,f(sn.el),x(sn),v,U,M),X.el=pt.el,Ce===null&&e2(v,pt.el),ce&&Xt(ce,U),(wt=X.props&&X.props.onVnodeUpdated)&&Xt(()=>Rn(wt,ae,X,me),U)}else{let X;const{el:re,props:ce}=T,{bm:ae,m:me,parent:Ce,root:wt,type:pt}=v,sn=ss(T);or(v,!1),ae&&el(ae),!sn&&(X=ce&&ce.onVnodeBeforeMount)&&Rn(X,Ce,T),or(v,!0);{wt.ce&&wt.ce._injectChildStyle(pt);const It=v.subTree=Mp(v);b(null,It,R,L,v,U,M),T.el=It.el}if(me&&Xt(me,U),!sn&&(X=ce&&ce.onVnodeMounted)){const It=T;Xt(()=>Rn(X,Ce,It),U)}(T.shapeFlag&256||Ce&&ss(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&v.a&&Xt(v.a,U),v.isMounted=!0,T=R=L=null}};v.scope.on();const W=v.effect=new F_(H);v.scope.off();const G=v.update=W.run.bind(W),oe=v.job=W.runIfDirty.bind(W);oe.i=v,oe.id=v.uid,W.scheduler=()=>dd(oe),or(v,!0),G()},ye=(v,T,R)=>{T.component=v;const L=v.vnode.props;v.vnode=T,v.next=null,VI(v,T.props,L,R),$I(v,T.children,R),Qi(),bp(v),Yi()},Ee=(v,T,R,L,U,M,K,H,W=!1)=>{const G=v&&v.children,oe=v?v.shapeFlag:0,X=T.children,{patchFlag:re,shapeFlag:ce}=T;if(re>0){if(re&128){pn(G,X,R,L,U,M,K,H,W);return}else if(re&256){Qt(G,X,R,L,U,M,K,H,W);return}}ce&8?(oe&16&&Wt(G,U,M),X!==G&&h(R,X)):oe&16?ce&16?pn(G,X,R,L,U,M,K,H,W):Wt(G,U,M,!0):(oe&8&&h(R,""),ce&16&&y(X,R,L,U,M,K,H,W))},Qt=(v,T,R,L,U,M,K,H,W)=>{v=v||ts,T=T||ts;const G=v.length,oe=T.length,X=Math.min(G,oe);let re;for(re=0;re<X;re++){const ce=T[re]=W?bi(T[re]):kn(T[re]);b(v[re],ce,R,null,U,M,K,H,W)}G>oe?Wt(v,U,M,!0,!1,X):y(T,R,L,U,M,K,H,W,X)},pn=(v,T,R,L,U,M,K,H,W)=>{let G=0;const oe=T.length;let X=v.length-1,re=oe-1;for(;G<=X&&G<=re;){const ce=v[G],ae=T[G]=W?bi(T[G]):kn(T[G]);if(ro(ce,ae))b(ce,ae,R,null,U,M,K,H,W);else break;G++}for(;G<=X&&G<=re;){const ce=v[X],ae=T[re]=W?bi(T[re]):kn(T[re]);if(ro(ce,ae))b(ce,ae,R,null,U,M,K,H,W);else break;X--,re--}if(G>X){if(G<=re){const ce=re+1,ae=ce<oe?T[ce].el:L;for(;G<=re;)b(null,T[G]=W?bi(T[G]):kn(T[G]),R,ae,U,M,K,H,W),G++}}else if(G>re)for(;G<=X;)Ke(v[G],U,M,!0),G++;else{const ce=G,ae=G,me=new Map;for(G=ae;G<=re;G++){const gt=T[G]=W?bi(T[G]):kn(T[G]);gt.key!=null&&me.set(gt.key,G)}let Ce,wt=0;const pt=re-ae+1;let sn=!1,It=0;const Ei=new Array(pt);for(G=0;G<pt;G++)Ei[G]=0;for(G=ce;G<=X;G++){const gt=v[G];if(wt>=pt){Ke(gt,U,M,!0);continue}let on;if(gt.key!=null)on=me.get(gt.key);else for(Ce=ae;Ce<=re;Ce++)if(Ei[Ce-ae]===0&&ro(gt,T[Ce])){on=Ce;break}on===void 0?Ke(gt,U,M,!0):(Ei[on-ae]=G+1,on>=It?It=on:sn=!0,b(gt,T[on],R,null,U,M,K,H,W),wt++)}const Gs=sn?WI(Ei):ts;for(Ce=Gs.length-1,G=pt-1;G>=0;G--){const gt=ae+G,on=T[gt],Ca=gt+1<oe?T[gt+1].el:L;Ei[G]===0?b(null,on,R,Ca,U,M,K,H,W):sn&&(Ce<0||G!==Gs[Ce]?rn(on,R,Ca,2):Ce--)}}},rn=(v,T,R,L,U=null)=>{const{el:M,type:K,transition:H,children:W,shapeFlag:G}=v;if(G&6){rn(v.component.subTree,T,R,L);return}if(G&128){v.suspense.move(T,R,L);return}if(G&64){K.move(v,T,R,ne);return}if(K===dt){i(M,T,R);for(let X=0;X<W.length;X++)rn(W[X],T,R,L);i(v.anchor,T,R);return}if(K===gu){$(v,T,R);return}if(L!==2&&G&1&&H)if(L===0)H.beforeEnter(M),i(M,T,R),Xt(()=>H.enter(M),U);else{const{leave:X,delayLeave:re,afterLeave:ce}=H,ae=()=>i(M,T,R),me=()=>{X(M,()=>{ae(),ce&&ce()})};re?re(M,ae,me):me()}else i(M,T,R)},Ke=(v,T,R,L=!1,U=!1)=>{const{type:M,props:K,ref:H,children:W,dynamicChildren:G,shapeFlag:oe,patchFlag:X,dirs:re,cacheIndex:ce}=v;if(X===-2&&(U=!1),H!=null&&wl(H,null,R,v,!0),ce!=null&&(T.renderCache[ce]=void 0),oe&256){T.ctx.deactivate(v);return}const ae=oe&1&&re,me=!ss(v);let Ce;if(me&&(Ce=K&&K.onVnodeBeforeUnmount)&&Rn(Ce,T,v),oe&6)bn(v.component,R,L);else{if(oe&128){v.suspense.unmount(R,L);return}ae&&sr(v,null,T,"beforeUnmount"),oe&64?v.type.remove(v,T,R,ne,L):G&&!G.hasOnce&&(M!==dt||X>0&&X&64)?Wt(G,T,R,!1,!0):(M===dt&&X&384||!U&&oe&16)&&Wt(W,T,R),L&&Qe(v)}(me&&(Ce=K&&K.onVnodeUnmounted)||ae)&&Xt(()=>{Ce&&Rn(Ce,T,v),ae&&sr(v,null,T,"unmounted")},R)},Qe=v=>{const{type:T,el:R,anchor:L,transition:U}=v;if(T===dt){vi(R,L);return}if(T===gu){D(v);return}const M=()=>{r(R),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(v.shapeFlag&1&&U&&!U.persisted){const{leave:K,delayLeave:H}=U,W=()=>K(R,M);H?H(v.el,M,W):W()}else M()},vi=(v,T)=>{let R;for(;v!==T;)R=g(v),r(v),v=R;r(T)},bn=(v,T,R)=>{const{bum:L,scope:U,job:M,subTree:K,um:H,m:W,a:G}=v;Lp(W),Lp(G),L&&el(L),U.stop(),M&&(M.flags|=8,Ke(K,v,T,R)),H&&Xt(H,T),Xt(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Wt=(v,T,R,L=!1,U=!1,M=0)=>{for(let K=M;K<v.length;K++)Ke(v[K],T,R,L,U)},x=v=>{if(v.shapeFlag&6)return x(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=g(v.anchor||v.el),R=T&&T[fI];return R?g(R):T};let J=!1;const Y=(v,T,R)=>{v==null?T._vnode&&Ke(T._vnode,null,null,!0):b(T._vnode||null,v,T,null,null,null,R),T._vnode=v,J||(J=!0,bp(),r0(),J=!1)},ne={p:b,um:Ke,m:rn,r:Qe,mt:Ze,mc:y,pc:Ee,pbc:A,n:x,o:t};return{render:Y,hydrate:void 0,createApp:LI(Y)}}function pu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function GI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function C0(t,e,n=!1){const i=t.children,r=e.children;if(fe(i)&&fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=bi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&C0(o,a)),a.type===mc&&(a.el=o.el)}}function WI(t){const e=t.slice(),n=[0];let i,r,s,o,a;const c=t.length;for(i=0;i<c;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function A0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:A0(e)}function Lp(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const HI=Symbol.for("v-scx"),zI=()=>Mn(HI);function nl(t,e){return md(t,null,e)}function as(t,e,n){return md(t,e,n)}function md(t,e,n=Fe){const{immediate:i,deep:r,flush:s,once:o}=n,a=Vt({},n),c=e&&i||!e&&s!=="post";let u;if(jo){if(s==="sync"){const m=zI();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Ln,m.resume=Ln,m.pause=Ln,m}}const h=xt;a.call=(m,C,b)=>$n(m,h,C,b);let f=!1;s==="post"?a.scheduler=m=>{Xt(m,h&&h.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,C)=>{C?m():dd(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const g=cI(t,e,a);return jo&&(u?u.push(g):c&&g()),g}function KI(t,e,n){const i=this.proxy,r=rt(t)?t.includes(".")?S0(i,t):()=>i[t]:t.bind(i,i);let s;ge(e)?s=e:(s=e.handler,n=e);const o=aa(this),a=md(r,s.bind(i),n);return o(),a}function S0(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const QI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${br(e)}Modifiers`];function YI(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Fe;let r=n;const s=e.startsWith("update:"),o=s&&QI(i,e.slice(7));o&&(o.trim&&(r=n.map(h=>rt(h)?h.trim():h)),o.number&&(r=n.map(ju)));let a,c=i[a=lu(e)]||i[a=lu(hn(e))];!c&&s&&(c=i[a=lu(br(e))]),c&&$n(c,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$n(u,t,6,r)}}function b0(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ge(t)){const c=u=>{const h=b0(u,e,!0);h&&(a=!0,Vt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(ze(t)&&i.set(t,null),null):(fe(s)?s.forEach(c=>o[c]=null):Vt(o,s),ze(t)&&i.set(t,o),o)}function gc(t,e){return!t||!oc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,br(e))||Oe(t,e))}function Mp(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:g,setupState:m,ctx:C,inheritAttrs:b}=t,N=Tl(t);let q,F;try{if(n.shapeFlag&4){const D=r||i,j=D;q=kn(u.call(j,D,h,f,m,g,C)),F=a}else{const D=e;q=kn(D.length>1?D(f,{attrs:a,slots:o,emit:c}):D(f,null)),F=e.props?a:XI(a)}}catch(D){Co.length=0,dc(D,t,1),q=le(qi)}let $=q;if(F&&b!==!1){const D=Object.keys(F),{shapeFlag:j}=$;D.length&&j&7&&(s&&D.some(td)&&(F=JI(F,s)),$=_r($,F,!1,!0))}return n.dirs&&($=_r($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&fd($,n.transition),q=$,Tl(N),q}const XI=t=>{let e;for(const n in t)(n==="class"||n==="style"||oc(n))&&((e||(e={}))[n]=t[n]);return e},JI=(t,e)=>{const n={};for(const i in t)(!td(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function ZI(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Vp(i,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const g=h[f];if(o[g]!==i[g]&&!gc(u,g))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vp(i,o,u):!0:!!o;return!1}function Vp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!gc(n,s))return!0}return!1}function e2({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const R0=t=>t.__isSuspense;function t2(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):dI(t)}const dt=Symbol.for("v-fgt"),mc=Symbol.for("v-txt"),qi=Symbol.for("v-cmt"),gu=Symbol.for("v-stc"),Co=[];let en=null;function et(t=!1){Co.push(en=t?null:[])}function n2(){Co.pop(),en=Co[Co.length-1]||null}let $o=1;function Fp(t,e=!1){$o+=t,t<0&&en&&e&&(en.hasOnce=!0)}function P0(t){return t.dynamicChildren=$o>0?en||ts:null,n2(),$o>0&&en&&en.push(t),t}function bt(t,e,n,i,r,s){return P0(ie(t,e,n,i,r,s,!0))}function qo(t,e,n,i,r){return P0(le(t,e,n,i,r,!0))}function mr(t){return t?t.__v_isVNode===!0:!1}function ro(t,e){return t.type===e.type&&t.key===e.key}const k0=({key:t})=>t??null,il=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?rt(t)||Mt(t)||ge(t)?{i:Et,r:t,k:e,f:!!n}:t:null);function ie(t,e=null,n=null,i=0,r=null,s=t===dt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&k0(e),ref:e&&il(e),scopeId:o0,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Et};return a?(_d(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=rt(n)?8:16),$o>0&&!o&&en&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&en.push(c),c}const le=i2;function i2(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===SI)&&(t=qi),mr(t)){const a=_r(t,e,!0);return n&&_d(a,n),$o>0&&!s&&en&&(a.shapeFlag&6?en[en.indexOf(t)]=a:en.push(a)),a.patchFlag=-2,a}if(f2(t)&&(t=t.__vccOpts),e){e=r2(e);let{class:a,style:c}=e;a&&!rt(a)&&(e.class=rd(a)),ze(c)&&(hd(c)&&!fe(c)&&(c=Vt({},c)),e.style=pr(c))}const o=rt(t)?1:R0(t)?128:pI(t)?64:ze(t)?4:ge(t)?2:0;return ie(t,e,n,i,r,o,s,!0)}function r2(t){return t?hd(t)||_0(t)?Vt({},t):t:null}function _r(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:c}=t,u=e?mi(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&k0(u),ref:e&&e.ref?n&&s?fe(s)?s.concat(il(e)):[s,il(e)]:il(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_r(t.ssContent),ssFallback:t.ssFallback&&_r(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&fd(h,c.clone(h)),h}function yr(t=" ",e=0){return le(mc,null,t,e)}function Cl(t="",e=!1){return e?(et(),qo(qi,null,t)):le(qi,null,t)}function kn(t){return t==null||typeof t=="boolean"?le(qi):fe(t)?le(dt,null,t.slice()):mr(t)?bi(t):le(mc,null,String(t))}function bi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_r(t)}function _d(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),_d(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!_0(e)?e._ctx=Et:r===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),i&64?(n=16,e=[yr(e)]):n=8);t.children=e,t.shapeFlag|=n}function mi(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=rd([e.class,i.class]));else if(r==="style")e.style=pr([e.style,i.style]);else if(oc(r)){const s=e[r],o=i[r];o&&s!==o&&!(fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Rn(t,e,n,i=null){$n(t,e,7,[n,i])}const s2=p0();let o2=0;function a2(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||s2,s={uid:o2++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:v0(i,r),emitsOptions:b0(i,r),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:i.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=YI.bind(null,s),t.ce&&t.ce(s),s}let xt=null,Al,eh;{const t=uc(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Al=e("__VUE_INSTANCE_SETTERS__",n=>xt=n),eh=e("__VUE_SSR_SETTERS__",n=>jo=n)}const aa=t=>{const e=xt;return Al(t),t.scope.on(),()=>{t.scope.off(),Al(e)}},Up=()=>{xt&&xt.scope.off(),Al(null)};function N0(t){return t.vnode.shapeFlag&4}let jo=!1;function l2(t,e=!1,n=!1){e&&eh(e);const{props:i,children:r}=t.vnode,s=N0(t);MI(t,i,s,e),BI(t,r,n);const o=s?c2(t,e):void 0;return e&&eh(!1),o}function c2(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,RI);const{setup:i}=n;if(i){Qi();const r=t.setupContext=i.length>1?h2(t):null,s=aa(t),o=oa(i,t,0,[t.props,r]),a=N_(o);if(Yi(),s(),(a||t.sp)&&!ss(t)&&a0(t),a){if(o.then(Up,Up),e)return o.then(c=>{Bp(t,c)}).catch(c=>{dc(c,t,0)});t.asyncDep=o}else Bp(t,o)}else O0(t)}function Bp(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=t0(e)),O0(t)}function O0(t,e,n){const i=t.type;t.render||(t.render=i.render||Ln);{const r=aa(t);Qi();try{PI(t)}finally{Yi(),r()}}}const u2={get(t,e){return Pt(t,"get",""),t[e]}};function h2(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,u2),slots:t.slots,emit:t.emit,expose:e}}function _c(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(t0(nI(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Io)return Io[n](t)},has(e,n){return n in e||n in Io}})):t.proxy}function d2(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function f2(t){return ge(t)&&"__vccOpts"in t}const Ue=(t,e)=>aI(t,e,jo);function Xr(t,e,n){const i=arguments.length;return i===2?ze(e)&&!fe(e)?mr(e)?le(t,null,[e]):le(t,e):le(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&mr(n)&&(n=[n]),le(t,e,n))}const p2="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let th;const $p=typeof window<"u"&&window.trustedTypes;if($p)try{th=$p.createPolicy("vue",{createHTML:t=>t})}catch{}const D0=th?t=>th.createHTML(t):t=>t,g2="http://www.w3.org/2000/svg",m2="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,qp=Zn&&Zn.createElement("template"),_2={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Zn.createElementNS(g2,t):e==="mathml"?Zn.createElementNS(m2,t):n?Zn.createElement(t,{is:n}):Zn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{qp.innerHTML=D0(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=qp.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},y2=Symbol("_vtc");function v2(t,e,n){const i=t[y2];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jp=Symbol("_vod"),E2=Symbol("_vsh"),T2=Symbol(""),w2=/(^|;)\s*display\s*:/;function I2(t,e,n){const i=t.style,r=rt(n);let s=!1;if(n&&!r){if(e)if(rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&rl(i,a,"")}else for(const o in e)n[o]==null&&rl(i,o,"");for(const o in n)o==="display"&&(s=!0),rl(i,o,n[o])}else if(r){if(e!==n){const o=i[T2];o&&(n+=";"+o),i.cssText=n,s=w2.test(n)}}else e&&t.removeAttribute("style");jp in t&&(t[jp]=s?i.display:"",t[E2]&&(i.display="none"))}const Gp=/\s*!important$/;function rl(t,e,n){if(fe(n))n.forEach(i=>rl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=C2(t,e);Gp.test(n)?t.setProperty(br(i),n.replace(Gp,""),"important"):t[i]=n}}const Wp=["Webkit","Moz","ms"],mu={};function C2(t,e){const n=mu[e];if(n)return n;let i=hn(e);if(i!=="filter"&&i in t)return mu[e]=i;i=cc(i);for(let r=0;r<Wp.length;r++){const s=Wp[r]+i;if(s in t)return mu[e]=s}return e}const Hp="http://www.w3.org/1999/xlink";function zp(t,e,n,i,r,s=Lw(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hp,e.slice(6,e.length)):t.setAttributeNS(Hp,e,n):n==null||s&&!L_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":pi(n)?String(n):n)}function Kp(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?D0(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=L_(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Wr(t,e,n,i){t.addEventListener(e,n,i)}function A2(t,e,n,i){t.removeEventListener(e,n,i)}const Qp=Symbol("_vei");function S2(t,e,n,i,r=null){const s=t[Qp]||(t[Qp]={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=b2(e);if(i){const u=s[e]=k2(i,r);Wr(t,a,u,c)}else o&&(A2(t,a,o,c),s[e]=void 0)}}const Yp=/(?:Once|Passive|Capture)$/;function b2(t){let e;if(Yp.test(t)){e={};let i;for(;i=t.match(Yp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):br(t.slice(2)),e]}let _u=0;const R2=Promise.resolve(),P2=()=>_u||(R2.then(()=>_u=0),_u=Date.now());function k2(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;$n(N2(i,n.value),e,5,[i])};return n.value=t,n.attached=P2(),n}function N2(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Xp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,O2=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?v2(t,i,o):e==="style"?I2(t,n,i):oc(e)?td(e)||S2(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):D2(t,e,i,o))?(Kp(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zp(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!rt(i))?Kp(t,hn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),zp(t,e,i,o))};function D2(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xp(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Xp(e)&&rt(n)?!1:e in t}const Jp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>el(e,n):e};function x2(t){t.target.composing=!0}function Zp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yu=Symbol("_assign"),Ao={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[yu]=Jp(r);const s=i||r.props&&r.props.type==="number";Wr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=ju(a)),t[yu](a)}),n&&Wr(t,"change",()=>{t.value=t.value.trim()}),e||(Wr(t,"compositionstart",x2),Wr(t,"compositionend",Zp),Wr(t,"change",Zp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[yu]=Jp(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?ju(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===c)||(t.value=c))}},L2=["ctrl","shift","alt","meta"],M2={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>L2.some(n=>t[`${n}Key`]&&!e.includes(n))},V2=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=M2[e[o]];if(a&&a(r,e))return}return t(r,...s)})},F2=Vt({patchProp:O2},_2);let eg;function U2(){return eg||(eg=qI(F2))}const x0=(...t)=>{const e=U2().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=$2(i);if(!r)return;const s=e._component;!ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,B2(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function B2(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $2(t){return rt(t)?document.querySelector(t):t}const q2=["disabled"],j2=Gt({__name:"BaseButton",props:{buttonText:{},buttonWidth:{},buttonPadding:{},buttonBorderColor:{},disabled:{type:Boolean}},setup(t){return(e,n)=>(et(),bt("button",{type:"submit",style:pr({width:e.buttonWidth+"%",padding:e.buttonPadding+"px",border:e.buttonBorderColor}),disabled:e.disabled},[yr(Li(e.buttonText)+" ",1),Qu(e.$slots,"default",{},void 0)],12,q2))}}),_i=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Nn=_i(j2,[["__scopeId","data-v-6c136ef2"]]),G2={class:"display"},W2=Gt({__name:"App",setup(t){const e=()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?localStorage.setItem("darkTheme","1"):localStorage.removeItem("darkTheme")};return Rr(()=>{localStorage.getItem("darkTheme")&&document.body.classList.toggle("dark-theme")}),(n,i)=>{const r=pd("router-view");return et(),bt(dt,null,[le(Nn,{"button-text":"Change the theme","button-width":10,"button-padding":10,onClick:e,class:"change-theme-button"}),ie("div",G2,[le(r)])],64)}}}),H2=_i(W2,[["__scopeId","data-v-4928a678"]]);var tg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=function(t,e){if(!t)throw ks(e)},ks=function(t){return new Error("Firebase Database ("+L0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},z2=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(g=64)),i.push(n[h],n[f],n[g],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(M0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):z2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||u==null||f==null)throw new K2;const g=s<<2|a>>4;if(i.push(g),u!==64){const m=a<<4&240|u>>2;if(i.push(m),f!==64){const C=u<<6&192|f;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class K2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const V0=function(t){const e=M0(t);return yc.encodeByteArray(e,!0)},Sl=function(t){return V0(t).replace(/\./g,"")},bl=function(t){try{return yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(t){return F0(void 0,t)}function F0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Y2(n)||(t[n]=F0(t[n],e[n]));return t}function Y2(t){return t!=="__proto__"}/**
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
 */function X2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const J2=()=>X2().__FIREBASE_DEFAULTS__,Z2=()=>{if(typeof process>"u"||typeof tg>"u")return;const t=tg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},e1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bl(t[1]);return e&&JSON.parse(e)},vc=()=>{try{return J2()||Z2()||e1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},U0=t=>{var e,n;return(n=(e=vc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},t1=t=>{const e=U0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},B0=()=>{var t;return(t=vc())===null||t===void 0?void 0:t.config},$0=t=>{var e;return(e=vc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function n1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Sl(JSON.stringify(n)),Sl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function i1(){var t;const e=(t=vc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function r1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function s1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function q0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o1(){const t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function j0(){return L0.NODE_ADMIN===!0}function a1(){return!i1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function G0(){try{return typeof indexedDB=="object"}catch{return!1}}function l1(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1="FirebaseError";class Hn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=c1,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?u1(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Hn(r,a,i)}}function u1(t,e){return t.replace(h1,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const h1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){return JSON.parse(t)}function yt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Wo(bl(s[0])||""),n=Wo(bl(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},d1=function(t){const e=W0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},f1=function(t){const e=W0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rl(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Pl(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(ng(s)&&ng(o)){if(!Pl(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function ng(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function po(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const g=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(g<<1|g>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^s&(o^a),h=1518500249):(u=s^o^a,h=1859775393):f<60?(u=s&o|a&(s|o),h=2400959708):(u=s^o^a,h=3395469782);const g=(r<<5|r>>>27)+u+c+h+i[f]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=g}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function g1(t,e){const n=new m1(t,e);return n.subscribe.bind(n)}class m1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");_1(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=vu),r.error===void 0&&(r.error=vu),r.complete===void 0&&(r.complete=vu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vu(){}function y1(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,Q(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ec=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ut(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const lr="[DEFAULT]";/**
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
 */class E1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Go;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(w1(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:T1(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T1(t){return t===lr?void 0:t}function w1(t){return t.instantiationMode==="EAGER"}/**
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
 */class I1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new E1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const C1={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},A1=ve.INFO,S1={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},b1=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=S1[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class la{constructor(e){this.name=e,this._logLevel=A1,this._logHandler=b1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?C1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const R1=(t,e)=>e.some(n=>t instanceof n);let ig,rg;function P1(){return ig||(ig=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k1(){return rg||(rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const H0=new WeakMap,ih=new WeakMap,z0=new WeakMap,Eu=new WeakMap,vd=new WeakMap;function N1(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mi(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&H0.set(n,t)}).catch(()=>{}),vd.set(e,t),e}function O1(t){if(ih.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ih.set(t,e)}let rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ih.get(t);if(e==="objectStoreNames")return t.objectStoreNames||z0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function D1(t){rh=t(rh)}function x1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Tu(this),e,...n);return z0.set(i,e.sort?e.sort():[e]),Mi(i)}:k1().includes(t)?function(...e){return t.apply(Tu(this),e),Mi(H0.get(this))}:function(...e){return Mi(t.apply(Tu(this),e))}}function L1(t){return typeof t=="function"?x1(t):(t instanceof IDBTransaction&&O1(t),R1(t,P1())?new Proxy(t,rh):t)}function Mi(t){if(t instanceof IDBRequest)return N1(t);if(Eu.has(t))return Eu.get(t);const e=L1(t);return e!==t&&(Eu.set(t,e),vd.set(e,t)),e}const Tu=t=>vd.get(t);function M1(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Mi(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Mi(o.result),c.oldVersion,c.newVersion,Mi(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const V1=["get","getKey","getAll","getAllKeys","count"],F1=["put","add","delete","clear"],wu=new Map;function sg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wu.get(e))return wu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=F1.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||V1.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return wu.set(e,s),s}D1(t=>({...t,get:(e,n,i)=>sg(e,n)||t.get(e,n,i),has:(e,n)=>!!sg(e,n)||t.has(e,n)}));/**
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
 */class U1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(B1(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function B1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sh="@firebase/app",og="0.10.17";/**
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
 */const ui=new la("@firebase/app"),$1="@firebase/app-compat",q1="@firebase/analytics-compat",j1="@firebase/analytics",G1="@firebase/app-check-compat",W1="@firebase/app-check",H1="@firebase/auth",z1="@firebase/auth-compat",K1="@firebase/database",Q1="@firebase/data-connect",Y1="@firebase/database-compat",X1="@firebase/functions",J1="@firebase/functions-compat",Z1="@firebase/installations",eC="@firebase/installations-compat",tC="@firebase/messaging",nC="@firebase/messaging-compat",iC="@firebase/performance",rC="@firebase/performance-compat",sC="@firebase/remote-config",oC="@firebase/remote-config-compat",aC="@firebase/storage",lC="@firebase/storage-compat",cC="@firebase/firestore",uC="@firebase/vertexai",hC="@firebase/firestore-compat",dC="firebase",fC="11.1.0";/**
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
 */const oh="[DEFAULT]",pC={[sh]:"fire-core",[$1]:"fire-core-compat",[j1]:"fire-analytics",[q1]:"fire-analytics-compat",[W1]:"fire-app-check",[G1]:"fire-app-check-compat",[H1]:"fire-auth",[z1]:"fire-auth-compat",[K1]:"fire-rtdb",[Q1]:"fire-data-connect",[Y1]:"fire-rtdb-compat",[X1]:"fire-fn",[J1]:"fire-fn-compat",[Z1]:"fire-iid",[eC]:"fire-iid-compat",[tC]:"fire-fcm",[nC]:"fire-fcm-compat",[iC]:"fire-perf",[rC]:"fire-perf-compat",[sC]:"fire-rc",[oC]:"fire-rc-compat",[aC]:"fire-gcs",[lC]:"fire-gcs-compat",[cC]:"fire-fst",[hC]:"fire-fst-compat",[uC]:"fire-vertex","fire-js":"fire-js",[dC]:"fire-js-all"};/**
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
 */const kl=new Map,gC=new Map,ah=new Map;function ag(t,e){try{t.container.addComponent(e)}catch(n){ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(ah.has(e))return ui.debug(`There were multiple attempts to register component ${e}.`),!1;ah.set(e,t);for(const n of kl.values())ag(n,t);for(const n of gC.values())ag(n,t);return!0}function Ed(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function On(t){return t.settings!==void 0}/**
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
 */const mC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vi=new Ns("app","Firebase",mC);/**
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
 */class _C{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vi.create("app-deleted",{appName:this._name})}}/**
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
 */const Xi=fC;function K0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:oh,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Vi.create("bad-app-name",{appName:String(r)});if(n||(n=B0()),!n)throw Vi.create("no-options");const s=kl.get(r);if(s){if(Pl(n,s.options)&&Pl(i,s.config))return s;throw Vi.create("duplicate-app",{appName:r})}const o=new I1(r);for(const c of ah.values())o.addComponent(c);const a=new _C(n,i,o);return kl.set(r,a),a}function Q0(t=oh){const e=kl.get(t);if(!e&&t===oh&&B0())return K0();if(!e)throw Vi.create("no-app",{appName:t});return e}function tn(t,e,n){var i;let r=(i=pC[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ui.warn(a.join(" "));return}qn(new Tn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const yC="firebase-heartbeat-database",vC=1,Ho="firebase-heartbeat-store";let Iu=null;function Y0(){return Iu||(Iu=M1(yC,vC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vi.create("idb-open",{originalErrorMessage:t.message})})),Iu}async function EC(t){try{const n=(await Y0()).transaction(Ho),i=await n.objectStore(Ho).get(X0(t));return await n.done,i}catch(e){if(e instanceof Hn)ui.warn(e.message);else{const n=Vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ui.warn(n.message)}}}async function lg(t,e){try{const i=(await Y0()).transaction(Ho,"readwrite");await i.objectStore(Ho).put(e,X0(t)),await i.done}catch(n){if(n instanceof Hn)ui.warn(n.message);else{const i=Vi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ui.warn(i.message)}}}function X0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TC=1024,wC=30*24*60*60*1e3;class IC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=cg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wC}),this._storage.overwrite(this._heartbeatsCache))}catch(i){ui.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cg(),{heartbeatsToSend:i,unsentEntries:r}=CC(this._heartbeatsCache.heartbeats),s=Sl(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ui.warn(n),""}}}function cg(){return new Date().toISOString().substring(0,10)}function CC(t,e=TC){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ug(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ug(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class AC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G0()?l1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await EC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ug(t){return Sl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function SC(t){qn(new Tn("platform-logger",e=>new U1(e),"PRIVATE")),qn(new Tn("heartbeat",e=>new IC(e),"PRIVATE")),tn(sh,og,t),tn(sh,og,"esm2017"),tn("fire-js","")}SC("");var bC="firebase",RC="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(bC,RC,"app");var hg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fr,J0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function w(){}w.prototype=y.prototype,I.D=y.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(A,S,P){for(var E=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)E[Ze-2]=arguments[Ze];return y.prototype[S].apply(A,E)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,y,w){w||(w=0);var A=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)A[S]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(S=0;16>S;++S)A[S]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=I.g[0],w=I.g[1],S=I.g[2];var P=I.g[3],E=y+(P^w&(S^P))+A[0]+3614090360&4294967295;y=w+(E<<7&4294967295|E>>>25),E=P+(S^y&(w^S))+A[1]+3905402710&4294967295,P=y+(E<<12&4294967295|E>>>20),E=S+(w^P&(y^w))+A[2]+606105819&4294967295,S=P+(E<<17&4294967295|E>>>15),E=w+(y^S&(P^y))+A[3]+3250441966&4294967295,w=S+(E<<22&4294967295|E>>>10),E=y+(P^w&(S^P))+A[4]+4118548399&4294967295,y=w+(E<<7&4294967295|E>>>25),E=P+(S^y&(w^S))+A[5]+1200080426&4294967295,P=y+(E<<12&4294967295|E>>>20),E=S+(w^P&(y^w))+A[6]+2821735955&4294967295,S=P+(E<<17&4294967295|E>>>15),E=w+(y^S&(P^y))+A[7]+4249261313&4294967295,w=S+(E<<22&4294967295|E>>>10),E=y+(P^w&(S^P))+A[8]+1770035416&4294967295,y=w+(E<<7&4294967295|E>>>25),E=P+(S^y&(w^S))+A[9]+2336552879&4294967295,P=y+(E<<12&4294967295|E>>>20),E=S+(w^P&(y^w))+A[10]+4294925233&4294967295,S=P+(E<<17&4294967295|E>>>15),E=w+(y^S&(P^y))+A[11]+2304563134&4294967295,w=S+(E<<22&4294967295|E>>>10),E=y+(P^w&(S^P))+A[12]+1804603682&4294967295,y=w+(E<<7&4294967295|E>>>25),E=P+(S^y&(w^S))+A[13]+4254626195&4294967295,P=y+(E<<12&4294967295|E>>>20),E=S+(w^P&(y^w))+A[14]+2792965006&4294967295,S=P+(E<<17&4294967295|E>>>15),E=w+(y^S&(P^y))+A[15]+1236535329&4294967295,w=S+(E<<22&4294967295|E>>>10),E=y+(S^P&(w^S))+A[1]+4129170786&4294967295,y=w+(E<<5&4294967295|E>>>27),E=P+(w^S&(y^w))+A[6]+3225465664&4294967295,P=y+(E<<9&4294967295|E>>>23),E=S+(y^w&(P^y))+A[11]+643717713&4294967295,S=P+(E<<14&4294967295|E>>>18),E=w+(P^y&(S^P))+A[0]+3921069994&4294967295,w=S+(E<<20&4294967295|E>>>12),E=y+(S^P&(w^S))+A[5]+3593408605&4294967295,y=w+(E<<5&4294967295|E>>>27),E=P+(w^S&(y^w))+A[10]+38016083&4294967295,P=y+(E<<9&4294967295|E>>>23),E=S+(y^w&(P^y))+A[15]+3634488961&4294967295,S=P+(E<<14&4294967295|E>>>18),E=w+(P^y&(S^P))+A[4]+3889429448&4294967295,w=S+(E<<20&4294967295|E>>>12),E=y+(S^P&(w^S))+A[9]+568446438&4294967295,y=w+(E<<5&4294967295|E>>>27),E=P+(w^S&(y^w))+A[14]+3275163606&4294967295,P=y+(E<<9&4294967295|E>>>23),E=S+(y^w&(P^y))+A[3]+4107603335&4294967295,S=P+(E<<14&4294967295|E>>>18),E=w+(P^y&(S^P))+A[8]+1163531501&4294967295,w=S+(E<<20&4294967295|E>>>12),E=y+(S^P&(w^S))+A[13]+2850285829&4294967295,y=w+(E<<5&4294967295|E>>>27),E=P+(w^S&(y^w))+A[2]+4243563512&4294967295,P=y+(E<<9&4294967295|E>>>23),E=S+(y^w&(P^y))+A[7]+1735328473&4294967295,S=P+(E<<14&4294967295|E>>>18),E=w+(P^y&(S^P))+A[12]+2368359562&4294967295,w=S+(E<<20&4294967295|E>>>12),E=y+(w^S^P)+A[5]+4294588738&4294967295,y=w+(E<<4&4294967295|E>>>28),E=P+(y^w^S)+A[8]+2272392833&4294967295,P=y+(E<<11&4294967295|E>>>21),E=S+(P^y^w)+A[11]+1839030562&4294967295,S=P+(E<<16&4294967295|E>>>16),E=w+(S^P^y)+A[14]+4259657740&4294967295,w=S+(E<<23&4294967295|E>>>9),E=y+(w^S^P)+A[1]+2763975236&4294967295,y=w+(E<<4&4294967295|E>>>28),E=P+(y^w^S)+A[4]+1272893353&4294967295,P=y+(E<<11&4294967295|E>>>21),E=S+(P^y^w)+A[7]+4139469664&4294967295,S=P+(E<<16&4294967295|E>>>16),E=w+(S^P^y)+A[10]+3200236656&4294967295,w=S+(E<<23&4294967295|E>>>9),E=y+(w^S^P)+A[13]+681279174&4294967295,y=w+(E<<4&4294967295|E>>>28),E=P+(y^w^S)+A[0]+3936430074&4294967295,P=y+(E<<11&4294967295|E>>>21),E=S+(P^y^w)+A[3]+3572445317&4294967295,S=P+(E<<16&4294967295|E>>>16),E=w+(S^P^y)+A[6]+76029189&4294967295,w=S+(E<<23&4294967295|E>>>9),E=y+(w^S^P)+A[9]+3654602809&4294967295,y=w+(E<<4&4294967295|E>>>28),E=P+(y^w^S)+A[12]+3873151461&4294967295,P=y+(E<<11&4294967295|E>>>21),E=S+(P^y^w)+A[15]+530742520&4294967295,S=P+(E<<16&4294967295|E>>>16),E=w+(S^P^y)+A[2]+3299628645&4294967295,w=S+(E<<23&4294967295|E>>>9),E=y+(S^(w|~P))+A[0]+4096336452&4294967295,y=w+(E<<6&4294967295|E>>>26),E=P+(w^(y|~S))+A[7]+1126891415&4294967295,P=y+(E<<10&4294967295|E>>>22),E=S+(y^(P|~w))+A[14]+2878612391&4294967295,S=P+(E<<15&4294967295|E>>>17),E=w+(P^(S|~y))+A[5]+4237533241&4294967295,w=S+(E<<21&4294967295|E>>>11),E=y+(S^(w|~P))+A[12]+1700485571&4294967295,y=w+(E<<6&4294967295|E>>>26),E=P+(w^(y|~S))+A[3]+2399980690&4294967295,P=y+(E<<10&4294967295|E>>>22),E=S+(y^(P|~w))+A[10]+4293915773&4294967295,S=P+(E<<15&4294967295|E>>>17),E=w+(P^(S|~y))+A[1]+2240044497&4294967295,w=S+(E<<21&4294967295|E>>>11),E=y+(S^(w|~P))+A[8]+1873313359&4294967295,y=w+(E<<6&4294967295|E>>>26),E=P+(w^(y|~S))+A[15]+4264355552&4294967295,P=y+(E<<10&4294967295|E>>>22),E=S+(y^(P|~w))+A[6]+2734768916&4294967295,S=P+(E<<15&4294967295|E>>>17),E=w+(P^(S|~y))+A[13]+1309151649&4294967295,w=S+(E<<21&4294967295|E>>>11),E=y+(S^(w|~P))+A[4]+4149444226&4294967295,y=w+(E<<6&4294967295|E>>>26),E=P+(w^(y|~S))+A[11]+3174756917&4294967295,P=y+(E<<10&4294967295|E>>>22),E=S+(y^(P|~w))+A[2]+718787259&4294967295,S=P+(E<<15&4294967295|E>>>17),E=w+(P^(S|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+S&4294967295,I.g[3]=I.g[3]+P&4294967295}i.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var w=y-this.blockSize,A=this.B,S=this.h,P=0;P<y;){if(S==0)for(;P<=w;)r(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<y;)if(A[S++]=I.charCodeAt(P++),S==this.blockSize){r(this,A),S=0;break}}else for(;P<y;)if(A[S++]=I[P++],S==this.blockSize){r(this,A),S=0;break}}this.h=S,this.o+=y},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var w=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=w&255,w/=256;for(this.u(I),I=Array(16),y=w=0;4>y;++y)for(var A=0;32>A;A+=8)I[w++]=this.g[y]>>>A&255;return I};function s(I,y){var w=a;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=y(I)}function o(I,y){this.h=y;for(var w=[],A=!0,S=I.length-1;0<=S;S--){var P=I[S]|0;A&&P==y||(w[S]=P,A=!1)}this.g=w}var a={};function c(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return N(u(-I));for(var y=[],w=1,A=0;I>=w;A++)y[A]=I/w|0,w*=4294967296;return new o(y,0)}function h(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return N(h(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(y,8)),A=f,S=0;S<I.length;S+=8){var P=Math.min(8,I.length-S),E=parseInt(I.substring(S,S+P),y);8>P?(P=u(Math.pow(y,P)),A=A.j(P).add(u(E))):(A=A.j(w),A=A.add(u(E)))}return A}var f=c(0),g=c(1),m=c(16777216);t=o.prototype,t.m=function(){if(b(this))return-N(this).m();for(var I=0,y=1,w=0;w<this.g.length;w++){var A=this.i(w);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(b(this))return"-"+N(this).toString(I);for(var y=u(Math.pow(I,6)),w=this,A="";;){var S=D(w,y).g;w=q(w,S.j(y));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=S,C(w))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function b(I){return I.h==-1}t.l=function(I){return I=q(this,I),b(I)?-1:C(I)?0:1};function N(I){for(var y=I.g.length,w=[],A=0;A<y;A++)w[A]=~I.g[A];return new o(w,~I.h).add(g)}t.abs=function(){return b(this)?N(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0,S=0;S<=y;S++){var P=A+(this.i(S)&65535)+(I.i(S)&65535),E=(P>>>16)+(this.i(S)>>>16)+(I.i(S)>>>16);A=E>>>16,P&=65535,E&=65535,w[S]=E<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function q(I,y){return I.add(N(y))}t.j=function(I){if(C(this)||C(I))return f;if(b(this))return b(I)?N(this).j(N(I)):N(N(this).j(I));if(b(I))return N(this.j(N(I)));if(0>this.l(m)&&0>I.l(m))return u(this.m()*I.m());for(var y=this.g.length+I.g.length,w=[],A=0;A<2*y;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<I.g.length;S++){var P=this.i(A)>>>16,E=this.i(A)&65535,Ze=I.i(S)>>>16,lt=I.i(S)&65535;w[2*A+2*S]+=E*lt,F(w,2*A+2*S),w[2*A+2*S+1]+=P*lt,F(w,2*A+2*S+1),w[2*A+2*S+1]+=E*Ze,F(w,2*A+2*S+1),w[2*A+2*S+2]+=P*Ze,F(w,2*A+2*S+2)}for(A=0;A<y;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=y;A<2*y;A++)w[A]=0;return new o(w,0)};function F(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function $(I,y){this.g=I,this.h=y}function D(I,y){if(C(y))throw Error("division by zero");if(C(I))return new $(f,f);if(b(I))return y=D(N(I),y),new $(N(y.g),N(y.h));if(b(y))return y=D(I,N(y)),new $(N(y.g),y.h);if(30<I.g.length){if(b(I)||b(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,A=y;0>=A.l(I);)w=j(w),A=j(A);var S=ee(w,1),P=ee(A,1);for(A=ee(A,2),w=ee(w,2);!C(A);){var E=P.add(A);0>=E.l(I)&&(S=S.add(w),P=E),A=ee(A,1),w=ee(w,1)}return y=q(I,S.j(y)),new $(S,y)}for(S=f;0<=I.l(y);){for(w=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=u(w),E=P.j(y);b(E)||0<E.l(I);)w-=A,P=u(w),E=P.j(y);C(P)&&(P=g),S=S.add(P),I=q(I,E)}return new $(S,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)&I.i(A);return new o(w,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)|I.i(A);return new o(w,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)^I.i(A);return new o(w,this.h^I.h)};function j(I){for(var y=I.g.length+1,w=[],A=0;A<y;A++)w[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(w,I.h)}function ee(I,y){var w=y>>5;y%=32;for(var A=I.g.length-w,S=[],P=0;P<A;P++)S[P]=0<y?I.i(P+w)>>>y|I.i(P+w+1)<<32-y:I.i(P+w);return new o(S,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,J0=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,fr=o}).apply(typeof hg<"u"?hg:typeof self<"u"?self:typeof window<"u"?window:{});var ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Z0,go,ey,sl,lh,ty,ny,iy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ja=="object"&&ja];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var i=n(this);function r(l,d){if(d)e:{var p=i;l=l.split(".");for(var _=0;_<l.length-1;_++){var k=l[_];if(!(k in p))break e;p=p[k]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,_=!1,k={next:function(){if(!_&&p<l.length){var O=p++;return{value:d(O,l[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),l.apply(d,k)}}return function(){return l.apply(d,arguments)}}function g(l,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,g.apply(null,arguments)}function m(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function C(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,k,O){for(var z=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)z[Ve-2]=arguments[Ve];return d.prototype[k].apply(_,z)}}function b(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function N(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const k=l.length||0,O=_.length||0;l.length=k+O;for(let z=0;z<O;z++)l[k+z]=_[z]}else l.push(_)}}class q{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function F(l){return/^[\s\xa0]*$/.test(l)}function $(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var j=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ee(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function I(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let p,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(p in _)l[p]=_[p];for(let O=0;O<w.length;O++)p=w[O],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function S(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function P(l){a.setTimeout(()=>{throw l},0)}function E(){var l=Qt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Ze{constructor(){this.h=this.g=null}add(d,p){const _=lt.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var lt=new q(()=>new Be,l=>l.reset());class Be{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,Ee=!1,Qt=new Ze,pn=()=>{const l=a.Promise.resolve(void 0);ye=()=>{l.then(rn)}};var rn=()=>{for(var l;l=E();){try{l.h.call(l.g)}catch(p){P(p)}var d=lt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}Ee=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var vi=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function bn(l,d){if(Qe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(j){e:{try{D(d.nodeName);var k=!0;break e}catch{}k=!1}k||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Wt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&bn.aa.h.call(this)}}C(bn,Qe);var Wt={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(l,d,p,_,k){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=k,this.key=++J,this.da=this.fa=!1}function ne(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Re(l){this.src=l,this.g={},this.h=0}Re.prototype.add=function(l,d,p,_,k){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var z=T(l,d,_,k);return-1<z?(d=l[z],p||(d.fa=!1)):(d=new Y(d,this.src,O,!!_,k),d.fa=p,l.push(d)),d};function v(l,d){var p=d.type;if(p in l.g){var _=l.g[p],k=Array.prototype.indexOf.call(_,d,void 0),O;(O=0<=k)&&Array.prototype.splice.call(_,k,1),O&&(ne(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function T(l,d,p,_){for(var k=0;k<l.length;++k){var O=l[k];if(!O.da&&O.listener==d&&O.capture==!!p&&O.ha==_)return k}return-1}var R="closure_lm_"+(1e6*Math.random()|0),L={};function U(l,d,p,_,k){if(Array.isArray(d)){for(var O=0;O<d.length;O++)U(l,d[O],p,_,k);return null}return p=ce(p),l&&l[x]?l.K(d,p,u(_)?!!_.capture:!!_,k):M(l,d,p,!1,_,k)}function M(l,d,p,_,k,O){if(!d)throw Error("Invalid event type");var z=u(k)?!!k.capture:!!k,Ve=X(l);if(Ve||(l[R]=Ve=new Re(l)),p=Ve.add(d,p,_,z,O),p.proxy)return p;if(_=K(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)vi||(k=z),k===void 0&&(k=!1),l.addEventListener(d.toString(),_,k);else if(l.attachEvent)l.attachEvent(G(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function K(){function l(p){return d.call(l.src,l.listener,p)}const d=oe;return l}function H(l,d,p,_,k){if(Array.isArray(d))for(var O=0;O<d.length;O++)H(l,d[O],p,_,k);else _=u(_)?!!_.capture:!!_,p=ce(p),l&&l[x]?(l=l.i,d=String(d).toString(),d in l.g&&(O=l.g[d],p=T(O,p,_,k),-1<p&&(ne(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[d],l.h--)))):l&&(l=X(l))&&(d=l.g[d.toString()],l=-1,d&&(l=T(d,p,_,k)),(p=-1<l?d[l]:null)&&W(p))}function W(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[x])v(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(G(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=X(d))?(v(p,l),p.h==0&&(p.src=null,d[R]=null)):ne(l)}}}function G(l){return l in L?L[l]:L[l]="on"+l}function oe(l,d){if(l.da)l=!0;else{d=new bn(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&W(l),l=p.call(_,d)}return l}function X(l){return l=l[R],l instanceof Re?l:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(l){return typeof l=="function"?l:(l[re]||(l[re]=function(d){return l.handleEvent(d)}),l[re])}function ae(){Ke.call(this),this.i=new Re(this),this.M=this,this.F=null}C(ae,Ke),ae.prototype[x]=!0,ae.prototype.removeEventListener=function(l,d,p,_){H(this,l,d,p,_)};function me(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new Qe(d,l);else if(d instanceof Qe)d.target=d.target||l;else{var k=d;d=new Qe(_,l),A(d,k)}if(k=!0,p)for(var O=p.length-1;0<=O;O--){var z=d.g=p[O];k=Ce(z,_,!0,d)&&k}if(z=d.g=l,k=Ce(z,_,!0,d)&&k,k=Ce(z,_,!1,d)&&k,p)for(O=0;O<p.length;O++)z=d.g=p[O],k=Ce(z,_,!1,d)&&k}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)ne(p[_]);delete l.g[d],l.h--}}this.F=null},ae.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},ae.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function Ce(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,O=0;O<d.length;++O){var z=d[O];if(z&&!z.da&&z.capture==p){var Ve=z.listener,mt=z.ha||z.src;z.fa&&v(l.i,z),k=Ve.call(mt,_)!==!1&&k}}return k&&!_.defaultPrevented}function wt(l,d,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function pt(l){l.g=wt(()=>{l.g=null,l.i&&(l.i=!1,pt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class sn extends Ke{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:pt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(l){Ke.call(this),this.h=l,this.g={}}C(It,Ke);var Ei=[];function Gs(l){ee(l.g,function(d,p){this.g.hasOwnProperty(p)&&W(d)},l),l.g={}}It.prototype.N=function(){It.aa.N.call(this),Gs(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gt=a.JSON.stringify,on=a.JSON.parse,Ca=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function zc(){}zc.prototype.h=null;function Df(l){return l.h||(l.h=l.i())}function xf(){}var Ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kc(){Qe.call(this,"d")}C(Kc,Qe);function Qc(){Qe.call(this,"c")}C(Qc,Qe);var tr={},Lf=null;function Aa(){return Lf=Lf||new ae}tr.La="serverreachability";function Mf(l){Qe.call(this,tr.La,l)}C(Mf,Qe);function Hs(l){const d=Aa();me(d,new Mf(d))}tr.STAT_EVENT="statevent";function Vf(l,d){Qe.call(this,tr.STAT_EVENT,l),this.stat=d}C(Vf,Qe);function Bt(l){const d=Aa();me(d,new Vf(d,l))}tr.Ma="timingevent";function Ff(l,d){Qe.call(this,tr.Ma,l),this.size=d}C(Ff,Qe);function zs(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Ks(){this.g=!0}Ks.prototype.xa=function(){this.g=!1};function nw(l,d,p,_,k,O){l.info(function(){if(l.g)if(O)for(var z="",Ve=O.split("&"),mt=0;mt<Ve.length;mt++){var Pe=Ve[mt].split("=");if(1<Pe.length){var Ct=Pe[0];Pe=Pe[1];var At=Ct.split("_");z=2<=At.length&&At[1]=="type"?z+(Ct+"="+Pe+"&"):z+(Ct+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+d+`
`+p+`
`+z})}function iw(l,d,p,_,k,O,z){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+d+`
`+p+`
`+O+" "+z})}function Vr(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+sw(l,p)+(_?" "+_:"")})}function rw(l,d){l.info(function(){return"TIMEOUT: "+d})}Ks.prototype.info=function(){};function sw(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<k.length;z++)k[z]=""}}}}return gt(p)}catch{return d}}var Sa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yc;function ba(){}C(ba,zc),ba.prototype.g=function(){return new XMLHttpRequest},ba.prototype.i=function(){return{}},Yc=new ba;function Ti(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new It(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bf}function Bf(){this.i=null,this.g="",this.h=!1}var $f={},Xc={};function Jc(l,d,p){l.L=1,l.v=Na(Kn(d)),l.m=p,l.P=!0,qf(l,null)}function qf(l,d){l.F=Date.now(),Ra(l),l.A=Kn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),np(p.i,"t",_),l.C=0,p=l.j.J,l.h=new Bf,l.g=Ep(l.j,p?d:null,!l.m),0<l.O&&(l.M=new sn(g(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var k="readystatechange";Array.isArray(k)||(k&&(Ei[0]=k.toString()),k=Ei);for(var O=0;O<k.length;O++){var z=U(p,k[O],_||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Hs(),nw(l.i,l.u,l.A,l.l,l.R,l.m)}Ti.prototype.ca=function(l){l=l.target;const d=this.M;d&&Qn(l)==3?d.j():this.Y(l)},Ti.prototype.Y=function(l){try{if(l==this.g)e:{const At=Qn(this.g);var d=this.g.Ba();const Br=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||cp(this.g)))){this.J||At!=4||d==7||(d==8||0>=Br?Hs(3):Hs(2)),Zc(this);var p=this.g.Z();this.X=p;t:if(jf(this)){var _=cp(this.g);l="";var k=_.length,O=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),Qs(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(O&&d==k-1)});_.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,iw(this.i,this.u,this.A,this.l,this.R,At,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,mt=this.g;if((Ve=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Ve)){var Pe=Ve;break t}}Pe=null}if(p=Pe)Vr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eu(this,p);else{this.o=!1,this.s=3,Bt(12),nr(this),Qs(this);break e}}if(this.P){p=!0;let gn;for(;!this.J&&this.C<z.length;)if(gn=ow(this,z),gn==Xc){At==4&&(this.s=4,Bt(14),p=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==$f){this.s=4,Bt(15),Vr(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else Vr(this.i,this.l,gn,null),eu(this,gn);if(jf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||z.length!=0||this.h.h||(this.s=1,Bt(16),p=!1),this.o=this.o&&p,!p)Vr(this.i,this.l,z,"[Invalid Chunked Response]"),nr(this),Qs(this);else if(0<z.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),ou(Ct),Ct.M=!0,Bt(11))}}else Vr(this.i,this.l,z,null),eu(this,z);At==4&&nr(this),this.o&&!this.J&&(At==4?mp(this.j,this):(this.o=!1,Ra(this)))}else Iw(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,Bt(12)):(this.s=0,Bt(13)),nr(this),Qs(this)}}}catch{}finally{}};function jf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function ow(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?Xc:(p=Number(d.substring(p,_)),isNaN(p)?$f:(_+=1,_+p>d.length?Xc:(d=d.slice(_,_+p),l.C=_+p,d)))}Ti.prototype.cancel=function(){this.J=!0,nr(this)};function Ra(l){l.S=Date.now()+l.I,Gf(l,l.I)}function Gf(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=zs(g(l.ba,l),d)}function Zc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Ti.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(rw(this.i,this.A),this.L!=2&&(Hs(),Bt(17)),nr(this),this.s=2,Qs(this)):Gf(this,this.S-l)};function Qs(l){l.j.G==0||l.J||mp(l.j,l)}function nr(l){Zc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Gs(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function eu(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||tu(p.h,l))){if(!l.K&&tu(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Va(p),La(p);else break e;su(p),Bt(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=zs(g(p.Za,p),6e3));if(1>=zf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else rr(p,11)}else if((l.K||p.g==l)&&Va(p),!F(d))for(k=p.Da.g.parse(d),d=0;d<k.length;d++){let Pe=k[d];if(p.T=Pe[0],Pe=Pe[1],p.G==2)if(Pe[0]=="c"){p.K=Pe[1],p.ia=Pe[2];const Ct=Pe[3];Ct!=null&&(p.la=Ct,p.j.info("VER="+p.la));const At=Pe[4];At!=null&&(p.Aa=At,p.j.info("SVER="+p.Aa));const Br=Pe[5];Br!=null&&typeof Br=="number"&&0<Br&&(_=1.5*Br,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const gn=l.g;if(gn){const Ua=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ua){var O=_.h;O.g||Ua.indexOf("spdy")==-1&&Ua.indexOf("quic")==-1&&Ua.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(nu(O,O.h),O.h=null))}if(_.D){const au=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;au&&(_.ya=au,qe(_.I,_.D,au))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var z=l;if(_.qa=vp(_,_.J?_.ia:null,_.W),z.K){Kf(_.h,z);var Ve=z,mt=_.L;mt&&(Ve.I=mt),Ve.B&&(Zc(Ve),Ra(Ve)),_.g=z}else pp(_);0<p.i.length&&Ma(p)}else Pe[0]!="stop"&&Pe[0]!="close"||rr(p,7);else p.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?rr(p,7):ru(p):Pe[0]!="noop"&&p.l&&p.l.ta(Pe),p.v=0)}}Hs(4)}catch{}}var aw=class{constructor(l,d){this.g=l,this.map=d}};function Wf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function zf(l){return l.h?1:l.g?l.g.size:0}function tu(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function nu(l,d){l.g?l.g.add(d):l.h=d}function Kf(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Wf.prototype.cancel=function(){if(this.i=Qf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Qf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return b(l.i)}function lw(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function cw(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function Yf(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=cw(l),_=lw(l),k=_.length,O=0;O<k;O++)d.call(void 0,_[O],p&&p[O],l)}var Xf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uw(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),k=null;if(0<=_){var O=l[p].substring(0,_);k=l[p].substring(_+1)}else O=l[p];d(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function ir(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ir){this.h=l.h,Pa(this,l.j),this.o=l.o,this.g=l.g,ka(this,l.s),this.l=l.l;var d=l.i,p=new Js;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Jf(this,p),this.m=l.m}else l&&(d=String(l).match(Xf))?(this.h=!1,Pa(this,d[1]||"",!0),this.o=Ys(d[2]||""),this.g=Ys(d[3]||"",!0),ka(this,d[4]),this.l=Ys(d[5]||"",!0),Jf(this,d[6]||"",!0),this.m=Ys(d[7]||"")):(this.h=!1,this.i=new Js(null,this.h))}ir.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Xs(d,Zf,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Xs(d,Zf,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Xs(p,p.charAt(0)=="/"?fw:dw,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Xs(p,gw)),l.join("")};function Kn(l){return new ir(l)}function Pa(l,d,p){l.j=p?Ys(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function ka(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Jf(l,d,p){d instanceof Js?(l.i=d,mw(l.i,l.h)):(p||(d=Xs(d,pw)),l.i=new Js(d,l.h))}function qe(l,d,p){l.i.set(d,p)}function Na(l){return qe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ys(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Xs(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,hw),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function hw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Zf=/[#\/\?@]/g,dw=/[#\?:]/g,fw=/[#\?]/g,pw=/[#\?@]/g,gw=/#/g;function Js(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function wi(l){l.g||(l.g=new Map,l.h=0,l.i&&uw(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Js.prototype,t.add=function(l,d){wi(this),this.i=null,l=Fr(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function ep(l,d){wi(l),d=Fr(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function tp(l,d){return wi(l),d=Fr(l,d),l.g.has(d)}t.forEach=function(l,d){wi(this),this.g.forEach(function(p,_){p.forEach(function(k){l.call(d,k,_,this)},this)},this)},t.na=function(){wi(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const k=l[_];for(let O=0;O<k.length;O++)p.push(d[_])}return p},t.V=function(l){wi(this);let d=[];if(typeof l=="string")tp(this,l)&&(d=d.concat(this.g.get(Fr(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return wi(this),this.i=null,l=Fr(this,l),tp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function np(l,d,p){ep(l,d),0<p.length&&(l.i=null,l.g.set(Fr(l,d),b(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const O=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var k=O;z[_]!==""&&(k+="="+encodeURIComponent(String(z[_]))),l.push(k)}}return this.i=l.join("&")};function Fr(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function mw(l,d){d&&!l.j&&(wi(l),l.i=null,l.g.forEach(function(p,_){var k=_.toLowerCase();_!=k&&(ep(this,_),np(this,k,p))},l)),l.j=d}function _w(l,d){const p=new Ks;if(a.Image){const _=new Image;_.onload=m(Ii,p,"TestLoadImage: loaded",!0,d,_),_.onerror=m(Ii,p,"TestLoadImage: error",!1,d,_),_.onabort=m(Ii,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=m(Ii,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function yw(l,d){const p=new Ks,_=new AbortController,k=setTimeout(()=>{_.abort(),Ii(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(O=>{clearTimeout(k),O.ok?Ii(p,"TestPingServer: ok",!0,d):Ii(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),Ii(p,"TestPingServer: error",!1,d)})}function Ii(l,d,p,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(p)}catch{}}function vw(){this.g=new Ca}function Ew(l,d,p){const _=p||"";try{Yf(l,function(k,O){let z=k;u(k)&&(z=gt(k)),d.push(_+O+"="+encodeURIComponent(z))})}catch(k){throw d.push(_+"type="+encodeURIComponent("_badmap")),k}}function Oa(l){this.l=l.Ub||null,this.j=l.eb||!1}C(Oa,zc),Oa.prototype.g=function(){return new Da(this.l,this.j)},Oa.prototype.i=function(l){return function(){return l}}({});function Da(l,d){ae.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Da,ae),t=Da.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,eo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ip(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ip(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Zs(this):eo(this),this.readyState==3&&ip(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Zs(this))},t.Qa=function(l){this.g&&(this.response=l,Zs(this))},t.ga=function(){this.g&&Zs(this)};function Zs(l){l.readyState=4,l.l=null,l.j=null,l.v=null,eo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function eo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function rp(l){let d="";return ee(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function iu(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=rp(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):qe(l,d,p))}function Xe(l){ae.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Xe,ae);var Tw=/^https?$/i,ww=["POST","PUT"];t=Xe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yc.g(),this.v=this.o?Df(this.o):Df(Yc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(O){sp(this,O);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)p.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())p.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),k=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ww,d,void 0))||_||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of p)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lp(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){sp(this,O)}};function sp(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,op(l),xa(l)}function op(l){l.A||(l.A=!0,me(l,"complete"),me(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,me(this,"complete"),me(this,"abort"),xa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xa(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ap(this):this.bb())},t.bb=function(){ap(this)};function ap(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Qn(l)!=4||l.Z()!=2)){if(l.u&&Qn(l)==4)wt(l.Ea,0,l);else if(me(l,"readystatechange"),Qn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=z===0){var k=String(l.D).match(Xf)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),_=!Tw.test(k?k.toLowerCase():"")}p=_}if(p)me(l,"complete"),me(l,"success");else{l.m=6;try{var O=2<Qn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",op(l)}}finally{xa(l)}}}}function xa(l,d){if(l.g){lp(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||me(l,"ready");try{p.onreadystatechange=_}catch{}}}function lp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Qn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),on(d)}};function cp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Iw(l){const d={};l=(l.g&&2<=Qn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(F(l[_]))continue;var p=S(l[_]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=d[k]||[];d[k]=O,O.push(p)}I(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function to(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function up(l){this.Aa=0,this.i=[],this.j=new Ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=to("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=to("baseRetryDelayMs",5e3,l),this.cb=to("retryDelaySeedMs",1e4,l),this.Wa=to("forwardChannelMaxRetries",2,l),this.wa=to("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Wf(l&&l.concurrentRequestLimit),this.Da=new vw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=up.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,_){Bt(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=vp(this,null,this.W),Ma(this)};function ru(l){if(hp(l),l.G==3){var d=l.U++,p=Kn(l.I);if(qe(p,"SID",l.K),qe(p,"RID",d),qe(p,"TYPE","terminate"),no(l,p),d=new Ti(l,l.j,d),d.L=2,d.v=Na(Kn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Ep(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ra(d)}yp(l)}function La(l){l.g&&(ou(l),l.g.cancel(),l.g=null)}function hp(l){La(l),l.u&&(a.clearTimeout(l.u),l.u=null),Va(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ma(l){if(!Hf(l.h)&&!l.s){l.s=!0;var d=l.Ga;ye||pn(),Ee||(ye(),Ee=!0),Qt.add(d,l),l.B=0}}function Cw(l,d){return zf(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=zs(g(l.Ga,l,d),_p(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const k=new Ti(this,this.j,l);let O=this.o;if(this.S&&(O?(O=y(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=fp(this,k,d),p=Kn(this.I),qe(p,"RID",l),qe(p,"CVER",22),this.D&&qe(p,"X-HTTP-Session-Id",this.D),no(this,p),O&&(this.O?d="headers="+encodeURIComponent(String(rp(O)))+"&"+d:this.m&&iu(p,this.m,O)),nu(this.h,k),this.Ua&&qe(p,"TYPE","init"),this.P?(qe(p,"$req",d),qe(p,"SID","null"),k.T=!0,Jc(k,p,null)):Jc(k,p,d),this.G=2}}else this.G==3&&(l?dp(this,l):this.i.length==0||Hf(this.h)||dp(this))};function dp(l,d){var p;d?p=d.l:p=l.U++;const _=Kn(l.I);qe(_,"SID",l.K),qe(_,"RID",p),qe(_,"AID",l.T),no(l,_),l.m&&l.o&&iu(_,l.m,l.o),p=new Ti(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=fp(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),nu(l.h,p),Jc(p,_,d)}function no(l,d){l.H&&ee(l.H,function(p,_){qe(d,_,p)}),l.l&&Yf({},function(p,_){qe(d,_,p)})}function fp(l,d,p){p=Math.min(l.i.length,p);var _=l.l?g(l.l.Na,l.l,l):null;e:{var k=l.i;let O=-1;for(;;){const z=["count="+p];O==-1?0<p?(O=k[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let Ve=!0;for(let mt=0;mt<p;mt++){let Pe=k[mt].g;const Ct=k[mt].map;if(Pe-=O,0>Pe)O=Math.max(0,k[mt].g-100),Ve=!1;else try{Ew(Ct,z,"req"+Pe+"_")}catch{_&&_(Ct)}}if(Ve){_=z.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function pp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;ye||pn(),Ee||(ye(),Ee=!0),Qt.add(d,l),l.v=0}}function su(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=zs(g(l.Fa,l),_p(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,gp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=zs(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Bt(10),La(this),gp(this))};function ou(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function gp(l){l.g=new Ti(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Kn(l.qa);qe(d,"RID","rpc"),qe(d,"SID",l.K),qe(d,"AID",l.T),qe(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&qe(d,"TO",l.ja),qe(d,"TYPE","xmlhttp"),no(l,d),l.m&&l.o&&iu(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Na(Kn(d)),p.m=null,p.P=!0,qf(p,l)}t.Za=function(){this.C!=null&&(this.C=null,La(this),su(this),Bt(19))};function Va(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function mp(l,d){var p=null;if(l.g==d){Va(l),ou(l),l.g=null;var _=2}else if(tu(l.h,d))p=d.D,Kf(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var k=l.B;_=Aa(),me(_,new Ff(_,p)),Ma(l)}else pp(l);else if(k=d.s,k==3||k==0&&0<d.X||!(_==1&&Cw(l,d)||_==2&&su(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),k){case 1:rr(l,5);break;case 4:rr(l,10);break;case 3:rr(l,6);break;default:rr(l,2)}}}function _p(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function rr(l,d){if(l.j.info("Error code "+d),d==2){var p=g(l.fb,l),_=l.Xa;const k=!_;_=new ir(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Pa(_,"https"),Na(_),k?_w(_.toString(),p):yw(_.toString(),p)}else Bt(2);l.G=0,l.l&&l.l.sa(d),yp(l),hp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Bt(2)):(this.j.info("Failed to ping google.com"),Bt(1))};function yp(l){if(l.G=0,l.ka=[],l.l){const d=Qf(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,b(l.i),l.i.length=0),l.l.ra()}}function vp(l,d,p){var _=p instanceof ir?Kn(p):new ir(p);if(_.g!="")d&&(_.g=d+"."+_.g),ka(_,_.s);else{var k=a.location;_=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var O=new ir(null);_&&Pa(O,_),d&&(O.g=d),k&&ka(O,k),p&&(O.l=p),_=O}return p=l.D,d=l.ya,p&&d&&qe(_,p,d),qe(_,"VER",l.la),no(l,_),_}function Ep(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Xe(new Oa({eb:p})):new Xe(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tp(){}t=Tp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Fa(){}Fa.prototype.g=function(l,d){return new Yt(l,d)};function Yt(l,d){ae.call(this),this.g=new up(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!F(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!F(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Ur(this)}C(Yt,ae),Yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){ru(this.g)},Yt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=gt(l),l=p);d.i.push(new aw(d.Ya++,l)),d.G==3&&Ma(d)},Yt.prototype.N=function(){this.g.l=null,delete this.j,ru(this.g),delete this.g,Yt.aa.N.call(this)};function wp(l){Kc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}C(wp,Kc);function Ip(){Qc.call(this),this.status=1}C(Ip,Qc);function Ur(l){this.g=l}C(Ur,Tp),Ur.prototype.ua=function(){me(this.g,"a")},Ur.prototype.ta=function(l){me(this.g,new wp(l))},Ur.prototype.sa=function(l){me(this.g,new Ip)},Ur.prototype.ra=function(){me(this.g,"b")},Fa.prototype.createWebChannel=Fa.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,iy=function(){return new Fa},ny=function(){return Aa()},ty=tr,lh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sa.NO_ERROR=0,Sa.TIMEOUT=8,Sa.HTTP_ERROR=6,sl=Sa,Uf.COMPLETE="complete",ey=Uf,xf.EventType=Ws,Ws.OPEN="a",Ws.CLOSE="b",Ws.ERROR="c",Ws.MESSAGE="d",ae.prototype.listen=ae.prototype.K,go=xf,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,Z0=Xe}).apply(typeof ja<"u"?ja:typeof self<"u"?self:typeof window<"u"?window:{});const dg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ds="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new la("@firebase/firestore");function Hr(){return vr.logLevel}function Z(t,...e){if(vr.logLevel<=ve.DEBUG){const n=e.map(Td);vr.debug(`Firestore (${Ds}): ${t}`,...n)}}function hi(t,...e){if(vr.logLevel<=ve.ERROR){const n=e.map(Td);vr.error(`Firestore (${Ds}): ${t}`,...n)}}function ms(t,...e){if(vr.logLevel<=ve.WARN){const n=e.map(Td);vr.warn(`Firestore (${Ds}): ${t}`,...n)}}function Td(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw hi(e),new Error(e)}function Le(t,e){t||he()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class kC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NC{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0);let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new Fi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Fi,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Fi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Le(typeof i.accessToken=="string"),new ry(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Rt(e)}}class OC{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class DC{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new OC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Le(this.o===void 0);const i=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new xC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=MC(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function we(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new ot(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new ot(0,0))}static max(){return new de(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,i){n===void 0?n=0:n>e.length&&he(),i===void 0?i=e.length-n:i>e.length-n&&he(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zo?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class We extends zo{construct(e,n,i){return new We(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new te(B.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new We(n)}static emptyPath(){return new We([])}}const VC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends zo{construct(e,n,i){return new vt(e,n,i)}static isValidIdentifier(e){return VC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new te(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new te(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(We.fromString(e))}static fromName(e){return new se(We.fromString(e).popFirst(5))}static empty(){return new se(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new We(e.slice()))}}function FC(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=de.fromTimestamp(i===1e9?new ot(n+1,0):new ot(n,i));return new ji(r,se.empty(),e)}function UC(t){return new ji(t.readTime,t.key,-1)}class ji{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new ji(de.min(),se.empty(),-1)}static max(){return new ji(de.max(),se.empty(),-1)}}function BC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==$C)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,i)=>{n(e)})}static reject(e){return new V((n,i)=>{i(e)})}static waitFor(e){return new V((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},c=>i(c))}),o=!0,s===r&&n()})}static or(e){let n=V.resolve(!1);for(const i of e)n=n.next(r=>r?V.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new V((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===s&&i(o)},h=>r(h))}})}static doWhile(e,n){return new V((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function jC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ls(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Tc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Tc.oe=-1;function wc(t){return t==null}function Nl(t){return t===0&&1/t==-1/0}function GC(t){return typeof t=="number"&&Number.isInteger(t)&&!Nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=fg(e)),e=HC(t.get(n),e);return fg(e)}function HC(t,e){let n=e;const i=t.length;for(let r=0;r<i;r++){const s=t.charAt(r);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function fg(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function oy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st=class ch{constructor(e,n){this.comparator=e,this.root=n||Ui.EMPTY}insert(e,n){return new ch(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ui.BLACK,null,null))}remove(e){return new ch(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ui.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ga(this.root,e,this.comparator,!0)}},Ga=class{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ui=class Jn{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??Jn.RED,this.left=r??Jn.EMPTY,this.right=s??Jn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new Jn(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Jn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Jn.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}};Ui.EMPTY=null,Ui.RED=!0,Ui.BLACK=!1;Ui.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,i,r,s){return this}insert(e,n,i){return new Ui(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gg(this.data.getIterator())}getIteratorFrom(e){return new gg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class gg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new mn([])}unionWith(e){let n=new at(vt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class ay extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ay("Invalid base64 string: "+s):s}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const zC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gi(t){if(Le(!!t),typeof t=="string"){let e=0;const n=zC.exec(t);if(Le(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wi(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ic(t){const e=t.mapValue.fields.__previous_value__;return wd(e)?Ic(e):e}function Ko(t){const e=Gi(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n,i,r,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Qo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wd(t)?4:YC(t)?9007199254740991:QC(t)?10:11:he()}function jn(t,e){if(t===e)return!0;const n=Hi(t);if(n!==Hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ko(t).isEqual(Ko(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Gi(r.timestampValue),a=Gi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Wi(r.bytesValue).isEqual(Wi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return tt(r.geoPointValue.latitude)===tt(s.geoPointValue.latitude)&&tt(r.geoPointValue.longitude)===tt(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return tt(r.integerValue)===tt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=tt(r.doubleValue),a=tt(s.doubleValue);return o===a?Nl(o)===Nl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(pg(o)!==pg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!jn(o[c],a[c])))return!1;return!0}(t,e);default:return he()}}function Yo(t,e){return(t.values||[]).find(n=>jn(n,e))!==void 0}function ys(t,e){if(t===e)return 0;const n=Hi(t),i=Hi(e);if(n!==i)return we(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=tt(s.integerValue||s.doubleValue),c=tt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return mg(t.timestampValue,e.timestampValue);case 4:return mg(Ko(t),Ko(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Wi(s),c=Wi(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=we(a[u],c[u]);if(h!==0)return h}return we(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=we(tt(s.latitude),tt(o.latitude));return a!==0?a:we(tt(s.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _g(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,h;const f=s.fields||{},g=o.fields||{},m=(a=f.value)===null||a===void 0?void 0:a.arrayValue,C=(c=g.value)===null||c===void 0?void 0:c.arrayValue,b=we(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0);return b!==0?b:_g(m,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Wa.mapValue&&o===Wa.mapValue)return 0;if(s===Wa.mapValue)return 1;if(o===Wa.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const g=we(c[f],h[f]);if(g!==0)return g;const m=ys(a[c[f]],u[h[f]]);if(m!==0)return m}return we(c.length,h.length)}(t.mapValue,e.mapValue);default:throw he()}}function mg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Gi(t),i=Gi(e),r=we(n.seconds,i.seconds);return r!==0?r:we(n.nanos,i.nanos)}function _g(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const s=ys(n[r],i[r]);if(s)return s}return we(n.length,i.length)}function vs(t){return uh(t)}function uh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Gi(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=uh(s);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${uh(n.fields[o])}`;return r+"}"}(t.mapValue):he()}function ol(t){switch(Hi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ic(t);return e?16+ol(e):16;case 5:return 2*t.stringValue.length;case 6:return Wi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((r,s)=>r+ol(s),0)}(t.arrayValue);case 10:case 11:return function(i){let r=0;return Pr(i.fields,(s,o)=>{r+=s.length+ol(o)}),r}(t.mapValue);default:throw he()}}function yg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hh(t){return!!t&&"integerValue"in t}function Id(t){return!!t&&"arrayValue"in t}function vg(t){return!!t&&"nullValue"in t}function Eg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function al(t){return!!t&&"mapValue"in t}function QC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function So(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=So(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=So(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=So(n)}setAll(e){let n=vt.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=So(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];al(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){Pr(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new an(So(this.value))}}function ly(t){const e=[];return Pr(t.fields,(n,i)=>{const r=new vt([n]);if(al(i)){const s=ly(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,de.min(),de.min(),de.min(),an.empty(),0)}static newFoundDocument(e,n,i,r){return new Nt(e,1,n,de.min(),i,r,0)}static newNoDocument(e,n){return new Nt(e,2,n,de.min(),de.min(),an.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,de.min(),de.min(),an.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ol{constructor(e,n){this.position=e,this.inclusive=n}}function Tg(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=se.comparator(se.fromName(o.referenceValue),n.key):i=ys(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function wg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Dl{constructor(e,n="asc"){this.field=e,this.dir=n}}function XC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cy{}class it extends cy{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new ZC(e,n,i):n==="array-contains"?new nA(e,i):n==="in"?new iA(e,i):n==="not-in"?new rA(e,i):n==="array-contains-any"?new sA(e,i):new it(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new eA(e,i):new tA(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ys(n,this.value)):n!==null&&Hi(this.value)===Hi(n)&&this.matchesComparison(ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wn extends cy{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new wn(e,n)}matches(e){return uy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function uy(t){return t.op==="and"}function hy(t){return JC(t)&&uy(t)}function JC(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function dh(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(hy(t))return t.filters.map(e=>dh(e)).join(",");{const e=t.filters.map(n=>dh(n)).join(",");return`${t.op}(${e})`}}function dy(t,e){return t instanceof it?function(i,r){return r instanceof it&&i.op===r.op&&i.field.isEqual(r.field)&&jn(i.value,r.value)}(t,e):t instanceof wn?function(i,r){return r instanceof wn&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&dy(o,r.filters[a]),!0):!1}(t,e):void he()}function fy(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${vs(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(fy).join(" ,")+"}"}(t):"Filter"}class ZC extends it{constructor(e,n,i){super(e,n,i),this.key=se.fromName(i.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class eA extends it{constructor(e,n){super(e,"in",n),this.keys=py("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tA extends it{constructor(e,n){super(e,"not-in",n),this.keys=py("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function py(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>se.fromName(i.referenceValue))}class nA extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Id(n)&&Yo(n.arrayValue,this.value)}}class iA extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yo(this.value.arrayValue,n)}}class rA extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yo(this.value.arrayValue,n)}}class sA extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Id(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Yo(this.value.arrayValue,i))}}/**
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
 */class oA{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Ig(t,e=null,n=[],i=[],r=null,s=null,o=null){return new oA(t,e,n,i,r,s,o)}function Cd(t){const e=pe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>dh(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),wc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>vs(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>vs(i)).join(",")),e.ue=n}return e.ue}function Ad(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wg(t.startAt,e.startAt)&&wg(t.endAt,e.endAt)}function fh(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function aA(t,e,n,i,r,s,o,a){return new ca(t,e,n,i,r,s,o,a)}function gy(t){return new ca(t)}function Cg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function my(t){return t.collectionGroup!==null}function bo(t){const e=pe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new at(vt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Dl(s,i))}),n.has(vt.keyField().canonicalString())||e.ce.push(new Dl(vt.keyField(),i))}return e.ce}function Vn(t){const e=pe(t);return e.le||(e.le=lA(e,bo(t))),e.le}function lA(t,e){if(t.limitType==="F")return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Dl(r.field,s)});const n=t.endAt?new Ol(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Ol(t.startAt.position,t.startAt.inclusive):null;return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function ph(t,e){const n=t.filters.concat([e]);return new ca(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gh(t,e,n){return new ca(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cc(t,e){return Ad(Vn(t),Vn(e))&&t.limitType===e.limitType}function _y(t){return`${Cd(Vn(t))}|lt:${t.limitType}`}function zr(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>fy(r)).join(", ")}]`),wc(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>vs(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>vs(r)).join(",")),`Target(${i})`}(Vn(t))}; limitType=${t.limitType})`}function Ac(t,e){return e.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):se.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(t,e)&&function(i,r){for(const s of bo(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(i,r){return!(i.startAt&&!function(o,a,c){const u=Tg(o,a,c);return o.inclusive?u<=0:u<0}(i.startAt,bo(i),r)||i.endAt&&!function(o,a,c){const u=Tg(o,a,c);return o.inclusive?u>=0:u>0}(i.endAt,bo(i),r))}(t,e)}function cA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yy(t){return(e,n)=>{let i=!1;for(const r of bo(t)){const s=uA(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function uA(t,e,n){const i=t.field.isKeyField()?se.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?ys(c,u):he()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Pr(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return oy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new st(se.comparator);function di(){return hA}const vy=new st(se.comparator);function mo(...t){let e=vy;for(const n of t)e=e.insert(n.key,n);return e}function Ey(t){let e=vy;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function ur(){return Ro()}function Ty(){return Ro()}function Ro(){return new kr(t=>t.toString(),(t,e)=>t.isEqual(e))}const dA=new st(se.comparator),fA=new at(se.comparator);function Te(...t){let e=fA;for(const n of t)e=e.add(n);return e}const pA=new at(we);function gA(){return pA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nl(e)?"-0":e}}function wy(t){return{integerValue:""+t}}function mA(t,e){return GC(e)?wy(e):Sd(t,e)}/**
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
 */class Sc{constructor(){this._=void 0}}function _A(t,e,n){return t instanceof xl?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&wd(s)&&(s=Ic(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Xo?Cy(t,e):t instanceof Jo?Ay(t,e):function(r,s){const o=Iy(r,s),a=Ag(o)+Ag(r.Pe);return hh(o)&&hh(r.Pe)?wy(a):Sd(r.serializer,a)}(t,e)}function yA(t,e,n){return t instanceof Xo?Cy(t,e):t instanceof Jo?Ay(t,e):n}function Iy(t,e){return t instanceof Ll?function(i){return hh(i)||function(s){return!!s&&"doubleValue"in s}(i)}(e)?e:{integerValue:0}:null}class xl extends Sc{}class Xo extends Sc{constructor(e){super(),this.elements=e}}function Cy(t,e){const n=Sy(e);for(const i of t.elements)n.some(r=>jn(r,i))||n.push(i);return{arrayValue:{values:n}}}class Jo extends Sc{constructor(e){super(),this.elements=e}}function Ay(t,e){let n=Sy(e);for(const i of t.elements)n=n.filter(r=>!jn(r,i));return{arrayValue:{values:n}}}class Ll extends Sc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ag(t){return tt(t.integerValue||t.doubleValue)}function Sy(t){return Id(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vA(t,e){return t.field.isEqual(e.field)&&function(i,r){return i instanceof Xo&&r instanceof Xo||i instanceof Jo&&r instanceof Jo?_s(i.elements,r.elements,jn):i instanceof Ll&&r instanceof Ll?jn(i.Pe,r.Pe):i instanceof xl&&r instanceof xl}(t.transform,e.transform)}class EA{constructor(e,n){this.version=e,this.transformResults=n}}class ai{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ai}static exists(e){return new ai(void 0,e)}static updateTime(e){return new ai(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bc{}function by(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Py(t.key,ai.none()):new ua(t.key,t.data,ai.none());{const n=t.data,i=an.empty();let r=new at(vt.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Nr(t.key,i,new mn(r.toArray()),ai.none())}}function TA(t,e,n){t instanceof ua?function(r,s,o){const a=r.value.clone(),c=bg(r.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(r,s,o){if(!ll(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=bg(r.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Ry(r)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n,i){return t instanceof ua?function(s,o,a,c){if(!ll(s.precondition,o))return a;const u=s.value.clone(),h=Rg(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,i):t instanceof Nr?function(s,o,a,c){if(!ll(s.precondition,o))return a;const u=Rg(s.fieldTransforms,c,o),h=o.data;return h.setAll(Ry(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,i):function(s,o,a){return ll(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function wA(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=Iy(i.transform,r||null);s!=null&&(n===null&&(n=an.empty()),n.set(i.field,s))}return n||null}function Sg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&_s(i,r,(s,o)=>vA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ua extends bc{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Nr extends bc{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ry(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function bg(t,e,n){const i=new Map;Le(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,yA(o,a,n[r]))}return i}function Rg(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,_A(s,o,e))}return i}class Py extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IA extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&TA(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Po(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Po(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Ty();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const c=by(o,a);c!==null&&i.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,i)=>Sg(n,i))&&_s(this.baseMutations,e.baseMutations,(n,i)=>Sg(n,i))}}class bd{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){Le(e.mutations.length===i.length);let r=function(){return dA}();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new bd(e,n,i,r)}}/**
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
 */class AA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class SA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,Ae;function bA(t){switch(t){default:return he();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function ky(t){if(t===void 0)return hi("GRPC error has no .code"),B.UNKNOWN;switch(t){case nt.OK:return B.OK;case nt.CANCELLED:return B.CANCELLED;case nt.UNKNOWN:return B.UNKNOWN;case nt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case nt.INTERNAL:return B.INTERNAL;case nt.UNAVAILABLE:return B.UNAVAILABLE;case nt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case nt.NOT_FOUND:return B.NOT_FOUND;case nt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case nt.ABORTED:return B.ABORTED;case nt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case nt.DATA_LOSS:return B.DATA_LOSS;default:return he()}}(Ae=nt||(nt={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function RA(){return new TextEncoder}/**
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
 */const PA=new fr([4294967295,4294967295],0);function Pg(t){const e=RA().encode(t),n=new J0;return n.update(e),new Uint8Array(n.digest())}function kg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fr([n,i],0),new fr([r,s],0)]}class Rd{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new _o(`Invalid padding: ${n}`);if(i<0)throw new _o(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new _o(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new _o(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=fr.fromNumber(this.Te)}Ee(e,n,i){let r=e.add(n.multiply(fr.fromNumber(i)));return r.compare(PA)===1&&(r=new fr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Pg(e),[i,r]=kg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);if(!this.de(o))return!1}return!0}static create(e,n,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Rd(s,r,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Pg(e),[i,r]=kg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class _o extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Rc(de.min(),r,new st(we),di(),Te())}}class ha{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new ha(i,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,i,r){this.Re=e,this.removedTargetIds=n,this.key=i,this.Ve=r}}class Ny{constructor(e,n){this.targetId=e,this.me=n}}class Oy{constructor(e,n,i=Tt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Ng{constructor(){this.fe=0,this.ge=Og(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Te(),n=Te(),i=Te();return this.ge.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:he()}}),new ha(this.pe,this.ye,e,n,i)}Ce(){this.we=!1,this.ge=Og()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kA{constructor(e){this.Le=e,this.Be=new Map,this.ke=di(),this.qe=Ha(),this.Qe=Ha(),this.Ke=new st(we)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const i=this.ze(n);switch(e.state){case 0:this.je(n)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.je(n)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((i,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,i=e.me.count,r=this.Ye(n);if(r){const s=r.target;if(fh(s))if(i===0){const o=new se(s.path);this.We(n,o,Nt.newNoDocument(o,de.min()))}else Le(i===1);else{const o=this.Ze(n);if(o!==i){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=n;let o,a;try{o=Wi(i).toUint8Array()}catch(c){if(c instanceof ay)return ms("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Rd(o,r,s)}catch(c){return ms(c instanceof _o?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,i){return n.me.count===i-this.rt(e,n.targetId)?0:2}rt(e,n){const i=this.Le.getRemoteKeysForTarget(n);let r=0;return i.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),r++)}),r}it(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&fh(a.target)){const c=new se(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Nt.newNoDocument(c,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let i=Te();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const r=new Rc(e,n,this.Ke,this.ke,i);return this.ke=di(),this.qe=Ha(),this.Qe=Ha(),this.Ke=new st(we),r}Ue(e,n){if(!this.je(e))return;const i=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,i){if(!this.je(e))return;const r=this.ze(e);this.ot(e,n)?r.Fe(n,1):r.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Ng,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new at(we),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(we),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Ng),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ha(){return new st(se.comparator)}function Og(){return new st(se.comparator)}const NA={asc:"ASCENDING",desc:"DESCENDING"},OA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DA={and:"AND",or:"OR"};class xA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mh(t,e){return t.useProto3Json||wc(e)?e:{value:e}}function Ml(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LA(t,e){return Ml(t,e.toTimestamp())}function Fn(t){return Le(!!t),de.fromTimestamp(function(n){const i=Gi(n);return new ot(i.seconds,i.nanos)}(t))}function Pd(t,e){return _h(t,e).canonicalString()}function _h(t,e){const n=function(r){return new We(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xy(t){const e=We.fromString(t);return Le(Uy(e)),e}function yh(t,e){return Pd(t.databaseId,e.path)}function Cu(t,e){const n=xy(e);if(n.get(1)!==t.databaseId.projectId)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(My(n))}function Ly(t,e){return Pd(t.databaseId,e)}function MA(t){const e=xy(t);return e.length===4?We.emptyPath():My(e)}function vh(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function My(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dg(t,e,n){return{name:yh(t,e),fields:n.value.mapValue.fields}}function VA(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(Le(h===void 0||typeof h=="string"),Tt.fromBase64String(h||"")):(Le(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Tt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?B.UNKNOWN:ky(u.code);return new te(h,u.message||"")}(o);n=new Oy(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Cu(t,i.document.name),s=Fn(i.document.updateTime),o=i.document.createTime?Fn(i.document.createTime):de.min(),a=new an({mapValue:{fields:i.document.fields}}),c=Nt.newFoundDocument(r,s,o,a),u=i.targetIds||[],h=i.removedTargetIds||[];n=new cl(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Cu(t,i.document),s=i.readTime?Fn(i.readTime):de.min(),o=Nt.newNoDocument(r,s),a=i.removedTargetIds||[];n=new cl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Cu(t,i.document),s=i.removedTargetIds||[];n=new cl([],s,r,null)}else{if(!("filter"in e))return he();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new SA(r,s),a=i.targetId;n=new Ny(a,o)}}return n}function FA(t,e){let n;if(e instanceof ua)n={update:Dg(t,e.key,e.value)};else if(e instanceof Py)n={delete:yh(t,e.key)};else if(e instanceof Nr)n={update:Dg(t,e.key,e.data),updateMask:zA(e.fieldMask)};else{if(!(e instanceof IA))return he();n={verify:yh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ll)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw he()}(0,i))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:LA(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:he()}(t,e.precondition)),n}function UA(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(r,s){let o=r.updateTime?Fn(r.updateTime):Fn(s);return o.isEqual(de.min())&&(o=Fn(s)),new EA(o,r.transformResults||[])}(n,e))):[]}function BA(t,e){return{documents:[Ly(t,e.path)]}}function $A(t,e){const n={structuredQuery:{}},i=e.path;let r;e.collectionGroup!==null?(r=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=Ly(t,r);const s=function(u){if(u.length!==0)return Fy(wn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Kr(g.field),direction:GA(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=mh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:r}}function qA(t){let e=MA(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Le(i===1);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const g=Vy(f);return g instanceof wn&&hy(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(C){return new Dl(Qr(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,wc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(f){const g=!!f.before,m=f.values||[];return new Ol(m,g)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const g=!f.before,m=f.values||[];return new Ol(m,g)}(n.endAt)),aA(e,r,o,s,a,"F",c,u)}function jA(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Qr(n.unaryFilter.field);return it.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Qr(n.unaryFilter.field);return it.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qr(n.unaryFilter.field);return it.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return it.create(Qr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(i=>Vy(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function GA(t){return NA[t]}function WA(t){return OA[t]}function HA(t){return DA[t]}function Kr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return vt.fromServerFormat(t.fieldPath)}function Fy(t){return t instanceof it?function(n){if(n.op==="=="){if(Eg(n.value))return{unaryFilter:{field:Kr(n.field),op:"IS_NAN"}};if(vg(n.value))return{unaryFilter:{field:Kr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Eg(n.value))return{unaryFilter:{field:Kr(n.field),op:"IS_NOT_NAN"}};if(vg(n.value))return{unaryFilter:{field:Kr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kr(n.field),op:WA(n.op),value:n.value}}}(t):t instanceof wn?function(n){const i=n.getFilters().map(r=>Fy(r));return i.length===1?i[0]:{compositeFilter:{op:HA(n.op),filters:i}}}(t):he()}function zA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,i,r,s=de.min(),o=de.min(),a=Tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.ht=e}}function QA(t){const e=qA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gh(e,e.limit,"L"):e}/**
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
 */class YA{constructor(){this.ln=new XA}addToCollectionParentIndex(e,n){return this.ln.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(ji.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(ji.min())}updateCollectionGroup(e,n,i){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class XA{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new at(We.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new at(We.comparator)).toArray()}}/**
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
 */const xg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ht{static withCacheSize(e){return new Ht(e,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Es{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Es(0)}static Qn(){return new Es(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg([t,e],[n,i]){const r=we(t,n);return r===0?we(e,i):r}class JA{constructor(e){this.Gn=e,this.buffer=new at(Lg),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();Lg(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ZA{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ls(n)?Z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await xs(n)}await this.Yn(3e5)})}}class eS{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Tc.oe);const i=new JA(n);return this.Zn.forEachTarget(e,r=>i.Hn(r.sequenceNumber)).next(()=>this.Zn.er(e,r=>i.Hn(r))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.Zn.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(xg)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xg):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let i,r,s,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r))).next(f=>(i=f,a=Date.now(),this.removeTargets(e,i,n))).next(f=>(s=f,c=Date.now(),this.removeOrphanedDocuments(e,i))).next(f=>(u=Date.now(),Hr()<=ve.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:f})))}}function tS(t,e){return new eS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.changes=new kr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?V.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&Po(i.mutation,r,mn.empty(),ot.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Te()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Te()){const r=ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=mo();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Te()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=di();const o=Ro(),a=function(){return Ro()}();return n.forEach((c,u)=>{const h=i.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Nr)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Po(h.mutation,u,h.mutation.getFieldMask(),ot.now())):o.set(u.key,mn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new iS(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Ro();let r=new st((o,a)=>o-a),s=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=i.get(c)||mn.empty();h=a.applyToLocalView(u,h),i.set(c,h);const f=(r.get(a.batchId)||Te()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=Ty();h.forEach(g=>{if(!s.has(g)){const m=by(n.get(g),i.get(g));m!==null&&f.set(g,m),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return V.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,r){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):my(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,r):this.getDocumentsMatchingCollectionQuery(e,n,i,r)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):V.resolve(ur());let a=-1,c=s;return o.next(u=>V.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,Te())).next(h=>({batchId:a,changes:Ey(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(i=>{let r=mo();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i,r){const s=n.collectionGroup;let o=mo();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,c=>{const u=function(f,g){return new ca(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,i,r).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s,r))).next(o=>{s.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Nt.newInvalidDocument(h)))});let a=mo();return o.forEach((c,u)=>{const h=s.get(c);h!==void 0&&Po(h.mutation,u,mn.empty(),ot.now()),Ac(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return V.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Fn(r.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(r){return{name:r.name,query:QA(r.bundledQuery),readTime:Fn(r.readTime)}}(n)),V.resolve()}}/**
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
 */class oS{constructor(){this.overlays=new st(se.comparator),this.Er=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const i=ur();return V.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.Tt(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.Er.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(i)),V.resolve()}getOverlaysForCollection(e,n,i){const r=ur(),s=n.length+1,o=new se(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>i&&r.set(c.getKey(),c)}return V.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new st((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let h=s.get(u.largestBatchId);h===null&&(h=ur(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ur(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return V.resolve(a)}Tt(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.Er.get(r.largestBatchId).delete(i.key);this.Er.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new AA(n,i));let s=this.Er.get(n);s===void 0&&(s=Te(),this.Er.set(n,s)),this.Er.set(n,s.add(i.key))}}/**
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
 */class aS{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.dr=new at(ut.Ar),this.Rr=new at(ut.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const i=new ut(e,n);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.gr(new ut(e,n))}pr(e,n){e.forEach(i=>this.removeReference(i,n))}yr(e){const n=new se(new We([])),i=new ut(n,e),r=new ut(n,e+1),s=[];return this.Rr.forEachInRange([i,r],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new se(new We([])),i=new ut(n,e),r=new ut(n,e+1);let s=Te();return this.Rr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ut(e,0),i=this.dr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ut{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return se.comparator(e.key,n.key)||we(e.br,n.br)}static Vr(e,n){return we(e.br,n.br)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new at(ut.Ar)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CA(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.vr=this.vr.add(new ut(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.Fr(i),s=r<0?0:r;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ut(n,0),r=new ut(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([i,r],o=>{const a=this.Cr(o.br);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new at(we);return n.forEach(r=>{const s=new ut(r,0),o=new ut(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],a=>{i=i.add(a.br)})}),V.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;se.isDocumentKey(s)||(s=s.child(""));const o=new ut(new se(s),0);let a=new at(we);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.br)),!0)},o),V.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(i=>{const r=this.Cr(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Le(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return V.forEach(n.mutations,r=>{const s=new ut(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,n){const i=new ut(n,0),r=this.vr.firstAfterOrEqual(i);return V.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.Nr=e,this.docs=function(){return new st(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Nr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return V.resolve(i?i.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let i=di();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Nt.newInvalidDocument(r))}),V.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=di();const o=n.path,a=new se(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||BC(UC(h),i)<=0||(r.has(h.key)||Ac(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,i,r){he()}Lr(e,n){return V.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new uS(this)}getSize(e){return V.resolve(this.size)}}class uS extends nS{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.hr.addEntry(e,r)):this.hr.removeEntry(i)}),V.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.persistence=e,this.Br=new kr(n=>Cd(n),Ad),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.kr=0,this.qr=new kd,this.targetCount=0,this.Qr=Es.qn()}forEachTarget(e,n){return this.Br.forEach((i,r)=>n(r)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.kr&&(this.kr=n),V.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Es(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Un(n),V.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),V.waitFor(s).next(()=>r)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const i=this.Br.get(n)||null;return V.resolve(i)}addMatchingKeys(e,n,i){return this.qr.mr(n,i),V.resolve()}removeMatchingKeys(e,n,i){this.qr.pr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const i=this.qr.Sr(n);return V.resolve(i)}containsKey(e,n){return V.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Tc(0),this.Ur=!1,this.Ur=!0,this.Wr=new aS,this.referenceDelegate=e(this),this.Gr=new hS(this),this.indexManager=new YA,this.remoteDocumentCache=function(r){return new cS(r)}(i=>this.referenceDelegate.zr(i)),this.serializer=new KA(n),this.jr=new sS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Kr[e.toKey()];return i||(i=new lS(n,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,i){Z("MemoryPersistence","Starting transaction:",e);const r=new dS(this.$r.next());return this.referenceDelegate.Hr(),i(r).next(s=>this.referenceDelegate.Jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Yr(e,n){return V.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,n)))}}class dS extends qC{constructor(e){super(),this.currentSequenceNumber=e}}class Nd{constructor(e){this.persistence=e,this.Zr=new kd,this.Xr=null}static ei(e){return new Nd(e)}get ti(){if(this.Xr)return this.Xr;throw he()}addReference(e,n,i){return this.Zr.addReference(i,n),this.ti.delete(i.toString()),V.resolve()}removeReference(e,n,i){return this.Zr.removeReference(i,n),this.ti.add(i.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),V.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(r=>this.ti.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.ti.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ti,i=>{const r=se.fromPath(i);return this.ni(e,r).next(s=>{s||n.removeEntry(r,de.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(i=>{i?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return V.or([()=>V.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Vl{constructor(e,n){this.persistence=e,this.ri=new kr(i=>WC(i.path),(i,r)=>i.isEqual(r)),this.garbageCollector=tS(this,n)}static ei(e,n){return new Vl(e,n)}Hr(){}Jr(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(r=>i+r))}nr(e){let n=0;return this.er(e,i=>{n++}).next(()=>n)}er(e,n){return V.forEach(this.ri,(i,r)=>this.ir(e,i,r).next(s=>s?V.resolve():n(r)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(i++,s.removeEntry(o,de.min()))})).next(()=>s.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.ri.set(i,e.currentSequenceNumber),V.resolve()}removeReference(e,n,i){return this.ri.set(i,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),V.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ol(e.data.value)),n}ir(e,n,i){return V.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.ri.get(n);return V.resolve(r!==void 0&&r>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Wi=i,this.Gi=r}static zi(e,n){let i=Te(),r=Te();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Od(e,n.fromCache,i,r)}}/**
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
 */class fS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class pS{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return a1()?8:jC(Ft())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,i,r){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,r,i).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new fS;return this.ts(e,n,o).next(a=>{if(s.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>s.result)}ns(e,n,i,r){return i.documentReadCount<this.Ji?(Hr()<=ve.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),V.resolve()):(Hr()<=ve.DEBUG&&Z("QueryEngine","Query:",zr(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Yi*r?(Hr()<=ve.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(n))):V.resolve())}Xi(e,n){if(Cg(n))return V.resolve(null);let i=Vn(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=gh(n,null,"F"),i=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=Te(...s);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const u=this.rs(n,a);return this.ss(n,u,o,c.readTime)?this.Xi(e,gh(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,i,r){return Cg(n)||r.isEqual(de.min())?V.resolve(null):this.Zi.getDocuments(e,i).next(s=>{const o=this.rs(n,s);return this.ss(n,o,i,r)?V.resolve(null):(Hr()<=ve.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),zr(n)),this.os(e,o,n,FC(r,-1)).next(a=>a))})}rs(e,n){let i=new at(yy(e));return n.forEach((r,s)=>{Ac(e,s)&&(i=i.add(s))}),i}ss(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ts(e,n,i){return Hr()<=ve.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",zr(n)),this.Zi.getDocumentsMatchingQuery(e,n,ji.min(),i)}os(e,n,i,r){return this.Zi.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n,i,r){this.persistence=e,this._s=n,this.serializer=r,this.us=new st(we),this.cs=new kr(s=>Cd(s),Ad),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rS(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function mS(t,e,n,i){return new gS(t,e,n,i)}async function $y(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let c=Te();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(i,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function _S(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,g=f.keys();let m=V.resolve();return g.forEach(C=>{m=m.next(()=>h.getEntry(c,C)).next(b=>{const N=u.docVersions.get(C);Le(N!==null),b.version.compareTo(N)<0&&(f.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),h.addEntry(b)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let c=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function qy(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function yS(t,e){const n=pe(t),i=e.snapshotVersion;let r=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});r=n.us;const a=[];e.targetChanges.forEach((h,f)=>{const g=r.get(f);if(!g)return;a.push(n.Gr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Gr.addMatchingKeys(s,h.addedDocuments,f)));let m=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(Tt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,i)),r=r.insert(f,m),function(b,N,q){return b.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(g,m,h)&&a.push(n.Gr.updateTargetData(s,m))});let c=di(),u=Te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(vS(s,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!i.isEqual(de.min())){const h=n.Gr.getLastRemoteSnapshotVersion(s).next(f=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(h)}return V.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.us=r,s))}function vS(t,e,n){let i=Te(),r=Te();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=di();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:r}})}function ES(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function TS(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Gr.getTargetData(i,e).next(s=>s?(r=s,V.resolve(r)):n.Gr.allocateTargetId(i).next(o=>(r=new Di(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.Gr.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.us.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.us=n.us.insert(i.targetId,i),n.cs.set(e,i.targetId)),i})}async function Eh(t,e,n){const i=pe(t),r=i.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ls(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.us=i.us.remove(e),i.cs.delete(r.target)}function Mg(t,e,n){const i=pe(t);let r=de.min(),s=Te();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=pe(c),g=f.cs.get(h);return g!==void 0?V.resolve(f.us.get(g)):f.Gr.getTargetData(u,h)}(i,o,Vn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>i._s.getDocumentsMatchingQuery(o,e,n?r:de.min(),n?s:Te())).next(a=>(wS(i,cA(e),a),{documents:a,ds:s})))}function wS(t,e,n){let i=t.ls.get(e)||de.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.ls.set(e,i)}class Vg{constructor(){this.activeTargetIds=gA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IS{constructor(){this._o=new Vg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,i){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Vg,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CS{uo(e){}shutdown(){}}/**
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
 */class Fg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let za=null;function Au(){return za===null?za=function(){return 268435456+Math.round(2147483648*Math.random())}():za++,"0x"+za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class bS extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+n.host,this.Mo=`projects/${r}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Oo(n,i,r,s,o){const a=Au(),c=this.No(n,i.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,s,o),this.Bo(n,c,u,r).then(h=>(Z("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw ms("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}ko(n,i,r,s,o,a){return this.Oo(n,i,r,s,o)}Lo(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ds}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>n[o]=s),r&&r.headers.forEach((s,o)=>n[o]=s)}No(n,i){const r=AS[n];return`${this.Fo}/v1/${i}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,i,r){const s=Au();return new Promise((o,a)=>{const c=new Z0;c.setWithCredentials(!0),c.listenOnce(ey.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case sl.NO_ERROR:const h=c.getResponseJson();Z(St,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case sl.TIMEOUT:Z(St,`RPC '${e}' ${s} timed out`),a(new te(B.DEADLINE_EXCEEDED,"Request time out"));break;case sl.HTTP_ERROR:const f=c.getStatus();if(Z(St,`RPC '${e}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const C=function(N){const q=N.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(q)>=0?q:B.UNKNOWN}(m.status);a(new te(C,m.message))}else a(new te(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new te(B.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{Z(St,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(r);Z(St,`RPC '${e}' ${s} sending request:`,r),c.send(n,"POST",u,i,15)})}qo(e,n,i){const r=Au(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iy(),a=ny(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const h=s.join("");Z(St,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);let g=!1,m=!1;const C=new SS({Eo:N=>{m?Z(St,`Not sending because RPC '${e}' stream ${r} is closed:`,N):(g||(Z(St,`Opening RPC '${e}' stream ${r} transport.`),f.open(),g=!0),Z(St,`RPC '${e}' stream ${r} sending:`,N),f.send(N))},Ao:()=>f.close()}),b=(N,q,F)=>{N.listen(q,$=>{try{F($)}catch(D){setTimeout(()=>{throw D},0)}})};return b(f,go.EventType.OPEN,()=>{m||(Z(St,`RPC '${e}' stream ${r} transport opened.`),C.So())}),b(f,go.EventType.CLOSE,()=>{m||(m=!0,Z(St,`RPC '${e}' stream ${r} transport closed`),C.Do())}),b(f,go.EventType.ERROR,N=>{m||(m=!0,ms(St,`RPC '${e}' stream ${r} transport errored:`,N),C.Do(new te(B.UNAVAILABLE,"The operation could not be completed")))}),b(f,go.EventType.MESSAGE,N=>{var q;if(!m){const F=N.data[0];Le(!!F);const $=F,D=($==null?void 0:$.error)||((q=$[0])===null||q===void 0?void 0:q.error);if(D){Z(St,`RPC '${e}' stream ${r} received error:`,D);const j=D.status;let ee=function(w){const A=nt[w];if(A!==void 0)return ky(A)}(j),I=D.message;ee===void 0&&(ee=B.INTERNAL,I="Unknown error status: "+j+" with message "+D.message),m=!0,C.Do(new te(ee,I)),f.close()}else Z(St,`RPC '${e}' stream ${r} received:`,F),C.vo(F)}}),b(a,ty.STAT_EVENT,N=>{N.stat===lh.PROXY?Z(St,`RPC '${e}' stream ${r} detected buffering proxy`):N.stat===lh.NOPROXY&&Z(St,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{C.bo()},0),C}}function Su(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t){return new xA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,i=1e3,r=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=i,this.Ko=r,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),r=Math.max(0,n-i);r>0&&Z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n,i,r,s,o,a,c){this.li=e,this.Yo=i,this.Zo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new jy(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(hi(n.toString()),hi("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Xo===n&&this.I_(i,r)},i=>{e(()=>{const r=new te(B.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(r)})})}I_(e,n){const i=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{i(()=>this.E_(r))}),this.stream.onMessage(r=>{i(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RS extends Gy{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=VA(this.serializer,e),i=function(s){if(!("targetChange"in s))return de.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Fn(o.readTime):de.min()}(e);return this.listener.R_(n,i)}V_(e){const n={};n.database=vh(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=fh(c)?{documents:BA(s,c)}:{query:$A(s,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Dy(s,o.resumeToken);const u=mh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){a.readTime=Ml(s,o.snapshotVersion.toTimestamp());const u=mh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const i=jA(this.serializer,e);i&&(n.labels=i),this.c_(n)}m_(e){const n={};n.database=vh(this.serializer),n.removeTarget=e,this.c_(n)}}class PS extends Gy{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=UA(e.writeResults,e.commitTime),i=Fn(e.commitTime);return this.listener.y_(i,n)}w_(){const e={};e.database=vh(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>FA(this.serializer,i))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,i,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,_h(n,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new te(B.UNKNOWN,s.toString())})}ko(e,n,i,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,_h(n,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(B.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class NS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(hi(n),this.C_=!1):Z("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{i.enqueueAndForget(async()=>{Or(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=pe(c);u.k_.add(4),await da(u),u.K_.set("Unknown"),u.k_.delete(4),await kc(u)}(this))})}),this.K_=new NS(i,r)}}async function kc(t){if(Or(t))for(const e of t.q_)await e(!0)}async function da(t){for(const e of t.q_)await e(!1)}function Wy(t,e){const n=pe(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Md(n)?Ld(n):Ms(n).s_()&&xd(n,e))}function Dd(t,e){const n=pe(t),i=Ms(n);n.B_.delete(e),i.s_()&&Hy(n,e),n.B_.size===0&&(i.s_()?i.a_():Or(n)&&n.K_.set("Unknown"))}function xd(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ms(t).V_(e)}function Hy(t,e){t.U_.xe(e),Ms(t).m_(e)}function Ld(t){t.U_=new kA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ms(t).start(),t.K_.F_()}function Md(t){return Or(t)&&!Ms(t).i_()&&t.B_.size>0}function Or(t){return pe(t).k_.size===0}function zy(t){t.U_=void 0}async function DS(t){t.K_.set("Online")}async function xS(t){t.B_.forEach((e,n)=>{xd(t,e)})}async function LS(t,e){zy(t),Md(t)?(t.K_.O_(e),Ld(t)):t.K_.set("Unknown")}async function MS(t,e,n){if(t.K_.set("Online"),e instanceof Oy&&e.state===2&&e.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.B_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.B_.delete(a),r.U_.removeTarget(a))}(t,e)}catch(i){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Fl(t,i)}else if(e instanceof cl?t.U_.$e(e):e instanceof Ny?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(de.min()))try{const i=await qy(t.localStore);n.compareTo(i)>=0&&await function(s,o){const a=s.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.B_.get(u);h&&s.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=s.B_.get(c);if(!h)return;s.B_.set(c,h.withResumeToken(Tt.EMPTY_BYTE_STRING,h.snapshotVersion)),Hy(s,c);const f=new Di(h.target,c,u,h.sequenceNumber);xd(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){Z("RemoteStore","Failed to raise snapshot:",i),await Fl(t,i)}}async function Fl(t,e,n){if(!Ls(e))throw e;t.k_.add(1),await da(t),t.K_.set("Offline"),n||(n=()=>qy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await kc(t)})}function Ky(t,e){return e().catch(n=>Fl(t,n,e))}async function Nc(t){const e=pe(t),n=zi(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;VS(e);)try{const r=await ES(e.localStore,i);if(r===null){e.L_.length===0&&n.a_();break}i=r.batchId,FS(e,r)}catch(r){await Fl(e,r)}Qy(e)&&Yy(e)}function VS(t){return Or(t)&&t.L_.length<10}function FS(t,e){t.L_.push(e);const n=zi(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Qy(t){return Or(t)&&!zi(t).i_()&&t.L_.length>0}function Yy(t){zi(t).start()}async function US(t){zi(t).w_()}async function BS(t){const e=zi(t);for(const n of t.L_)e.g_(n.mutations)}async function $S(t,e,n){const i=t.L_.shift(),r=bd.from(i,e,n);await Ky(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Nc(t)}async function qS(t,e){e&&zi(t).f_&&await async function(i,r){if(function(o){return bA(o)&&o!==B.ABORTED}(r.code)){const s=i.L_.shift();zi(i).__(),await Ky(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Nc(i)}}(t,e),Qy(t)&&Yy(t)}async function Ug(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const i=Or(n);n.k_.add(3),await da(n),i&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await kc(n)}async function jS(t,e){const n=pe(t);e?(n.k_.delete(2),await kc(n)):e||(n.k_.add(2),await da(n),n.K_.set("Unknown"))}function Ms(t){return t.W_||(t.W_=function(n,i,r){const s=pe(n);return s.b_(),new RS(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Ro:DS.bind(null,t),mo:xS.bind(null,t),po:LS.bind(null,t),R_:MS.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Md(t)?Ld(t):t.K_.set("Unknown")):(await t.W_.stop(),zy(t))})),t.W_}function zi(t){return t.G_||(t.G_=function(n,i,r){const s=pe(n);return s.b_(),new PS(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:US.bind(null,t),po:qS.bind(null,t),p_:BS.bind(null,t),y_:$S.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Nc(t)):(await t.G_.stop(),t.L_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Vd(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fd(t,e){if(hi("AsyncQueue",`${e}: ${t}`),Ls(t))return new te(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{static emptySet(e){return new ls(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||se.comparator(n.key,i.key):(n,i)=>se.comparator(n.key,i.key),this.keyedMap=mo(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new ls;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.z_=new st(se.comparator)}track(e){const n=e.doc.key,i=this.z_.get(n);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(n,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(n):e.type===1&&i.type===2?this.z_=this.z_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):he():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,i)=>{e.push(i)}),e}}class Ts{constructor(e,n,i,r,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ts(e,n,ls.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class WS{constructor(){this.queries=$g(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,i){const r=pe(n),s=r.queries;r.queries=$g(),s.forEach((o,a)=>{for(const c of a.J_)c.onError(i)})})(this,new te(B.ABORTED,"Firestore shutting down"))}}function $g(){return new kr(t=>_y(t),Cc)}async function HS(t,e){const n=pe(t);let i=3;const r=e.query;let s=n.queries.get(r);s?!s.Y_()&&e.Z_()&&(i=2):(s=new GS,i=e.Z_()?0:1);try{switch(i){case 0:s.H_=await n.onListen(r,!0);break;case 1:s.H_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=Fd(o,`Initialization of query '${zr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&Ud(n)}async function zS(t,e){const n=pe(t),i=e.query;let r=3;const s=n.queries.get(i);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?r=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function KS(t,e){const n=pe(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.J_)a.ta(r)&&(i=!0);o.H_=r}}i&&Ud(n)}function QS(t,e,n){const i=pe(t),r=i.queries.get(e);if(r)for(const s of r.J_)s.onError(n);i.queries.delete(e)}function Ud(t){t.X_.forEach(e=>{e.next()})}var Th,qg;(qg=Th||(Th={})).na="default",qg.Cache="cache";class YS{constructor(e,n,i){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Ts(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const i=n!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Th.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.key=e}}class Jy{constructor(e){this.key=e}}class XS{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Te(),this.mutatedKeys=Te(),this.Va=yy(e),this.ma=new ls(this.Va)}get fa(){return this.da}ga(e,n){const i=n?n.pa:new Bg,r=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,f)=>{const g=r.get(h),m=Ac(this.query,f)?f:null,C=!!g&&this.mutatedKeys.has(g.key),b=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let N=!1;g&&m?g.data.isEqual(m.data)?C!==b&&(i.track({type:3,doc:m}),N=!0):this.ya(g,m)||(i.track({type:2,doc:m}),N=!0,(c&&this.Va(m,c)>0||u&&this.Va(m,u)<0)&&(a=!0)):!g&&m?(i.track({type:0,doc:m}),N=!0):g&&!m&&(i.track({type:1,doc:g}),N=!0,(c||u)&&(a=!0)),N&&(m?(o=o.add(m),s=b?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),i.track({type:1,doc:h})}return{ma:o,pa:i,ss:a,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,r){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(m,C){const b=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return b(m)-b(C)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(i),r=r!=null&&r;const a=n&&!r?this.Sa():[],c=this.Ra.size===0&&this.current&&!r?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Ts(this.query,e.ma,s,o,e.mutatedKeys,c===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Bg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Te(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const n=[];return e.forEach(i=>{this.Ra.has(i)||n.push(new Jy(i))}),this.Ra.forEach(i=>{e.has(i)||n.push(new Xy(i))}),n}va(e){this.da=e.ds,this.Ra=Te();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Ts.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class JS{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class ZS{constructor(e){this.key=e,this.Fa=!1}}class eb{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new kr(a=>_y(a),Cc),this.Oa=new Map,this.Na=new Set,this.La=new st(se.comparator),this.Ba=new Map,this.ka=new kd,this.qa={},this.Qa=new Map,this.Ka=Es.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function tb(t,e,n=!0){const i=rv(t);let r;const s=i.xa.get(e);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Ca()):r=await Zy(i,e,n,!0),r}async function nb(t,e){const n=rv(t);await Zy(n,e,!0,!1)}async function Zy(t,e,n,i){const r=await TS(t.localStore,Vn(e)),s=r.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return i&&(a=await ib(t,e,s,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&Wy(t.remoteStore,r),a}async function ib(t,e,n,i,r){t.Ua=(f,g,m)=>async function(b,N,q,F){let $=N.view.ga(q);$.ss&&($=await Mg(b.localStore,N.query,!1).then(({documents:I})=>N.view.ga(I,$)));const D=F&&F.targetChanges.get(N.targetId),j=F&&F.targetMismatches.get(N.targetId)!=null,ee=N.view.applyChanges($,b.isPrimaryClient,D,j);return Gg(b,N.targetId,ee.ba),ee.snapshot}(t,f,g,m);const s=await Mg(t.localStore,e,!0),o=new XS(e,s.ds),a=o.ga(s.documents),c=ha.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Gg(t,n,u.ba);const h=new JS(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function rb(t,e,n){const i=pe(t),r=i.xa.get(e),s=i.Oa.get(r.targetId);if(s.length>1)return i.Oa.set(r.targetId,s.filter(o=>!Cc(o,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Eh(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),n&&Dd(i.remoteStore,r.targetId),wh(i,r.targetId)}).catch(xs)):(wh(i,r.targetId),await Eh(i.localStore,r.targetId,!0))}async function sb(t,e){const n=pe(t),i=n.xa.get(e),r=n.Oa.get(i.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Dd(n.remoteStore,i.targetId))}async function ob(t,e,n){const i=fb(t);try{const r=await function(o,a){const c=pe(o),u=ot.now(),h=a.reduce((m,C)=>m.add(C.key),Te());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let C=di(),b=Te();return c.hs.getEntries(m,h).next(N=>{C=N,C.forEach((q,F)=>{F.isValidDocument()||(b=b.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,C)).next(N=>{f=N;const q=[];for(const F of a){const $=wA(F,f.get(F.key).overlayedDocument);$!=null&&q.push(new Nr(F.key,$,ly($.value.mapValue),ai.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,q,a)}).next(N=>{g=N;const q=N.applyToLocalDocumentSet(f,b);return c.documentOverlayCache.saveOverlays(m,N.batchId,q)})}).then(()=>({batchId:g.batchId,changes:Ey(f)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new st(we)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(i,r.batchId,n),await fa(i,r.changes),await Nc(i.remoteStore)}catch(r){const s=Fd(r,"Failed to persist write");n.reject(s)}}async function ev(t,e){const n=pe(t);try{const i=await yS(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.Ba.get(s);o&&(Le(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Fa=!0:r.modifiedDocuments.size>0?Le(o.Fa):r.removedDocuments.size>0&&(Le(o.Fa),o.Fa=!1))}),await fa(n,i,e)}catch(i){await xs(i)}}function jg(t,e,n){const i=pe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.xa.forEach((s,o)=>{const a=o.view.ea(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=pe(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const g of f.J_)g.ea(a)&&(u=!0)}),u&&Ud(c)}(i.eventManager,e),r.length&&i.Ma.R_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function ab(t,e,n){const i=pe(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Ba.get(e),s=r&&r.key;if(s){let o=new st(se.comparator);o=o.insert(s,Nt.newNoDocument(s,de.min()));const a=Te().add(s),c=new Rc(de.min(),new Map,new st(we),o,a);await ev(i,c),i.La=i.La.remove(s),i.Ba.delete(e),Bd(i)}else await Eh(i.localStore,e,!1).then(()=>wh(i,e,n)).catch(xs)}async function lb(t,e){const n=pe(t),i=e.batch.batchId;try{const r=await _S(n.localStore,e);nv(n,i,null),tv(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await fa(n,r)}catch(r){await xs(r)}}async function cb(t,e,n){const i=pe(t);try{const r=await function(o,a){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Le(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(i.localStore,e);nv(i,e,n),tv(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await fa(i,r)}catch(r){await xs(r)}}function tv(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function nv(t,e,n){const i=pe(t);let r=i.qa[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.qa[i.currentUser.toKey()]=r}}function wh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Oa.get(e))t.xa.delete(i),n&&t.Ma.Wa(i,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(i=>{t.ka.containsKey(i)||iv(t,i)})}function iv(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Dd(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Bd(t))}function Gg(t,e,n){for(const i of n)i instanceof Xy?(t.ka.addReference(i.key,e),ub(t,i)):i instanceof Jy?(Z("SyncEngine","Document no longer in limbo: "+i.key),t.ka.removeReference(i.key,e),t.ka.containsKey(i.key)||iv(t,i.key)):he()}function ub(t,e){const n=e.key,i=n.path.canonicalString();t.La.get(n)||t.Na.has(i)||(Z("SyncEngine","New document in limbo: "+n),t.Na.add(i),Bd(t))}function Bd(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new se(We.fromString(e)),i=t.Ka.next();t.Ba.set(i,new ZS(n)),t.La=t.La.insert(n,i),Wy(t.remoteStore,new Di(Vn(gy(n.path)),i,"TargetPurposeLimboResolution",Tc.oe))}}async function fa(t,e,n){const i=pe(t),r=[],s=[],o=[];i.xa.isEmpty()||(i.xa.forEach((a,c)=>{o.push(i.Ua(c,e,n).then(u=>{var h;if((u||n)&&i.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;i.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=Od.zi(c.targetId,u);s.push(f)}}))}),await Promise.all(o),i.Ma.R_(r),await async function(c,u){const h=pe(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(u,g=>V.forEach(g.Wi,m=>h.persistence.referenceDelegate.addReference(f,g.targetId,m)).next(()=>V.forEach(g.Gi,m=>h.persistence.referenceDelegate.removeReference(f,g.targetId,m)))))}catch(f){if(!Ls(f))throw f;Z("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const m=h.us.get(g),C=m.snapshotVersion,b=m.withLastLimboFreeSnapshotVersion(C);h.us=h.us.insert(g,b)}}}(i.localStore,s))}async function hb(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const i=await $y(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(a=>{a.forEach(c=>{c.reject(new te(B.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await fa(n,i.Ts)}}function db(t,e){const n=pe(t),i=n.Ba.get(e);if(i&&i.Fa)return Te().add(i.key);{let r=Te();const s=n.Oa.get(e);if(!s)return r;for(const o of s){const a=n.xa.get(o);r=r.unionWith(a.view.fa)}return r}}function rv(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ev.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=db.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ab.bind(null,e),e.Ma.R_=KS.bind(null,e.eventManager),e.Ma.Wa=QS.bind(null,e.eventManager),e}function fb(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cb.bind(null,e),e}class Ul{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return mS(this.persistence,new pS,e.initialUser,this.serializer)}ja(e){return new By(Nd.ei,this.serializer)}za(e){return new IS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ul.provider={build:()=>new Ul};class pb extends Ul{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Le(this.persistence.referenceDelegate instanceof Vl);const i=this.persistence.referenceDelegate.garbageCollector;return new ZA(i,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Ht.withCacheSize(this.cacheSizeBytes):Ht.DEFAULT;return new By(i=>Vl.ei(i,n),this.serializer)}}class Ih{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>jg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=hb.bind(null,this.syncEngine),await jS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WS}()}createDatastore(e){const n=Pc(e.databaseInfo.databaseId),i=function(s){return new bS(s)}(e.databaseInfo);return function(s,o,a,c){return new kS(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,r,s,o,a){return new OS(i,r,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>jg(this.syncEngine,n,0),function(){return Fg.p()?new Fg:new CS}())}createSyncEngine(e,n){return function(r,s,o,a,c,u,h){const f=new eb(r,s,o,a,c,u);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const s=pe(r);Z("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await da(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ih.provider={build:()=>new Ih};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):hi("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n,i,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=Rt.UNAUTHENTICATED,this.clientId=sy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Fd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function bu(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await $y(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _b(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>Ug(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Ug(e.remoteStore,r)),t._onlineComponents=e}async function _b(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await bu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===B.FAILED_PRECONDITION||r.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;ms("Error using user provided cache. Falling back to memory cache: "+n),await bu(t,new Ul)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await bu(t,new pb(void 0));return t._offlineComponents}async function sv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Wg(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Wg(t,new Ih))),t._onlineComponents}function yb(t){return sv(t).then(e=>e.syncEngine)}async function vb(t){const e=await sv(t),n=e.eventManager;return n.onListen=tb.bind(null,e.syncEngine),n.onUnlisten=rb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=nb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=sb.bind(null,e.syncEngine),n}function Eb(t,e,n={}){const i=new Fi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new gb({next:g=>{h.eu(),o.enqueueAndForget(()=>zS(s,f)),g.fromCache&&c.source==="server"?u.reject(new te(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new YS(a,h,{includeMetadataChanges:!0,ua:!0});return HS(s,f)}(await vb(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function ov(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t,e,n){if(!n)throw new te(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Tb(t,e,n,i){if(e===!0&&i===!0)throw new te(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zg(t){if(!se.isDocumentKey(t))throw new te(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kg(t){if(se.isDocumentKey(t))throw new te(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Bl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oc(t);throw new te(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new te(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ov((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qg(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new PC;switch(i.type){case"firstParty":return new DC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new te(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Hg.get(n);i&&(Z("ComponentProvider","Removing Datastore"),Hg.delete(n),i.terminate())}(this),Promise.resolve()}}function wb(t,e,n,i={}){var r;const s=(t=Bl(t,Dc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=Rt.MOCK_USER;else{a=n1(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new te(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Rt(u)}t._authCredentials=new kC(new ry(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Vs(this.firestore,e,this._query)}}class un{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new un(this.firestore,e,this._key)}}class Bi extends Vs{constructor(e,n,i){super(e,n,gy(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new un(this.firestore,null,new se(e))}withConverter(e){return new Bi(this.firestore,e,this._path)}}function lv(t,e,...n){if(t=Ut(t),av("collection","path",e),t instanceof Dc){const i=We.fromString(e,...n);return Kg(i),new Bi(t,null,i)}{if(!(t instanceof un||t instanceof Bi))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(We.fromString(e,...n));return Kg(i),new Bi(t.firestore,null,i)}}function Ib(t,e,...n){if(t=Ut(t),arguments.length===1&&(e=sy.newId()),av("doc","path",e),t instanceof Dc){const i=We.fromString(e,...n);return zg(i),new un(t,null,new se(i))}{if(!(t instanceof un||t instanceof Bi))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(We.fromString(e,...n));return zg(i),new un(t.firestore,t instanceof Bi?t.converter:null,new se(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new jy(this,"async_queue_retry"),this.fu=()=>{const i=Su();i&&Z("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const n=Su();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Su();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Fi;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ls(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw hi("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ru=!1,i))));return this.gu=n,n}enqueueAfterDelay(e,n,i){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const r=Vd.createAndSchedule(this,e,n,i,s=>this.Su(s));return this.du.push(r),r}pu(){this.Au&&he()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class $d extends Dc{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new Yg,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yg(e),this._firestoreClient=void 0,await e}}}function Cb(t,e){const n=typeof t=="object"?t:Q0(),i=typeof t=="string"?t:"(default)",r=Ed(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=t1("firestore");s&&wb(r,...s)}return r}function cv(t){if(t._terminated)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Ab(t),t._firestoreClient}function Ab(t){var e,n,i;const r=t._freezeSettings(),s=function(a,c,u,h){return new KC(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ov(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new mb(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ws(Tt.fromBase64String(e))}catch(n){throw new te(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ws(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */class Gd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=/^__.*__$/;class bb{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ua(e,this.data,n,this.fieldTransforms)}}function hv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Wd{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Wd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.xu({path:i,Nu:!1});return r.Lu(e),r}Bu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.xu({path:i,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return $l(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(hv(this.Mu)&&Sb.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Rb{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Pc(e)}$u(e,n,i,r=!1){return new Wd({Mu:e,methodName:n,Ku:i,path:vt.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dv(t){const e=t._freezeSettings(),n=Pc(t._databaseId);return new Rb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pb(t,e,n,i,r,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,r);gv("Data must be an object, but it was:",o,i);const a=fv(i,o);let c,u;if(s.merge)c=new mn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const g=Nb(e,f,n);if(!o.contains(g))throw new te(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Db(h,g)||h.push(g)}c=new mn(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new bb(new an(a),c,u)}function kb(t,e,n,i=!1){return Hd(n,t.$u(i?4:3,e))}function Hd(t,e){if(pv(t=Ut(t)))return gv("Unsupported field value:",e,t),fv(t,e);if(t instanceof uv)return function(i,r){if(!hv(r.Mu))throw r.qu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const a of i){let c=Hd(a,r.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(i,r){if((i=Ut(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return mA(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=ot.fromDate(i);return{timestampValue:Ml(r.serializer,s)}}if(i instanceof ot){const s=new ot(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ml(r.serializer,s)}}if(i instanceof jd)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ws)return{bytesValue:Dy(r.serializer,i._byteString)};if(i instanceof un){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Pd(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof Gd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return Sd(a.serializer,c)})}}}}}}(i,r);throw r.qu(`Unsupported field value: ${Oc(i)}`)}(t,e)}function fv(t,e){const n={};return oy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(t,(i,r)=>{const s=Hd(r,e.Ou(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function pv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof jd||t instanceof ws||t instanceof un||t instanceof uv||t instanceof Gd)}function gv(t,e,n){if(!pv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=Oc(n);throw i==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+i)}}function Nb(t,e,n){if((e=Ut(e))instanceof qd)return e._internalPath;if(typeof e=="string")return mv(t,e);throw $l("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ob=new RegExp("[~\\*/\\[\\]]");function mv(t,e,n){if(e.search(Ob)>=0)throw $l(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qd(...e.split("."))._internalPath}catch{throw $l(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $l(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new te(B.INVALID_ARGUMENT,a+t+c)}function Db(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xb extends _v{data(){return super.data()}}function yv(t,e){return typeof e=="string"?mv(t,e):e instanceof qd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zd{}class Mb extends zd{}function Vb(t,e,...n){let i=[];e instanceof zd&&i.push(e),i=i.concat(n),function(s){const o=s.filter(c=>c instanceof Qd).length,a=s.filter(c=>c instanceof Kd).length;if(o>1||o>0&&a>0)throw new te(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)t=r._apply(t);return t}class Kd extends Mb{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Kd(e,n,i)}_apply(e){const n=this._parse(e);return vv(e._query,n),new Vs(e.firestore,e.converter,ph(e._query,n))}_parse(e){const n=dv(e.firestore);return function(s,o,a,c,u,h,f){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new te(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Jg(f,h);const m=[];for(const C of f)m.push(Xg(c,s,C));g={arrayValue:{values:m}}}else g=Xg(c,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Jg(f,h),g=kb(a,o,f,h==="in"||h==="not-in");return it.create(u,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Qd extends zd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qd(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:wn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let o=r;const a=s.getFlattenedFilters();for(const c of a)vv(o,c),o=ph(o,c)}(e._query,n),new Vs(e.firestore,e.converter,ph(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Xg(t,e,n){if(typeof(n=Ut(n))=="string"){if(n==="")throw new te(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!my(e)&&n.indexOf("/")!==-1)throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(We.fromString(n));if(!se.isDocumentKey(i))throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return yg(t,new se(i))}if(n instanceof un)return yg(t,n._key);throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oc(n)}.`)}function Jg(t,e){if(!Array.isArray(t)||t.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vv(t,e){const n=function(r,s){for(const o of r)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Fb{convertValue(e,n="none"){switch(Hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Pr(e,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(e){var n,i,r;const s=(r=(i=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(o=>tt(o.doubleValue));return new Gd(s)}convertGeoPoint(e){return new jd(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Ic(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ko(e));default:return null}}convertTimestamp(e){const n=Gi(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=We.fromString(e);Le(Uy(i));const r=new Qo(i.get(1),i.get(3)),s=new se(i.popFirst(5));return r.isEqual(n)||hi(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t,e,n){let i;return i=t?t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bb extends _v{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(yv("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class ul extends Bb{data(e={}){return super.data(e)}}class $b{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ka(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new ul(this._firestore,this._userDataWriter,i.key,i,new Ka(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new ul(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ka(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new ul(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ka(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:qb(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}class jb extends Fb{constructor(e){super(),this.firestore=e}convertBytes(e){return new ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new un(this.firestore,null,n)}}function Gb(t){t=Bl(t,Vs);const e=Bl(t.firestore,$d),n=cv(e),i=new jb(e);return Lb(t._query),Eb(n,t._query).then(r=>new $b(e,i,t,r))}function Wb(t,e){const n=Bl(t.firestore,$d),i=Ib(t),r=Ub(t.converter,e);return Hb(n,[Pb(dv(t.firestore),"addDoc",i._key,r,t.converter!==null,{}).toMutation(i._key,ai.exists(!1))]).then(()=>i)}function Hb(t,e){return function(i,r){const s=new Fi;return i.asyncQueue.enqueueAndForget(async()=>ob(await yb(i),r,s)),s.promise}(cv(t),e)}(function(e,n=!0){(function(r){Ds=r})(Xi),qn(new Tn("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new $d(new NC(i.getProvider("auth-internal")),new LC(i.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qo(u.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),tn(dg,"4.7.5",e),tn(dg,"4.7.5","esm2017")})();function Yd(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Ev(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zb=Ev,Tv=new Ns("auth","Firebase",Ev());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new la("@firebase/auth");function Kb(t,...e){ql.logLevel<=ve.WARN&&ql.warn(`Auth (${Xi}): ${t}`,...e)}function hl(t,...e){ql.logLevel<=ve.ERROR&&ql.error(`Auth (${Xi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw Xd(t,...e)}function Un(t,...e){return Xd(t,...e)}function wv(t,e,n){const i=Object.assign(Object.assign({},zb()),{[e]:n});return new Ns("auth","Firebase",i).create(e,{appName:t.name})}function li(t){return wv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Tv.create(t,...e)}function ue(t,e,...n){if(!t)throw Xd(e,...n)}function ni(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hl(e),new Error(e)}function fi(t,e){t||ni(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qb(){return Zg()==="http:"||Zg()==="https:"}function Zg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qb()||s1()||"connection"in navigator)?navigator.onLine:!0}function Xb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,fi(n>e,"Short delay should be less than long delay!"),this.isMobile=yd()||q0()}get(){return Yb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t,e){fi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ni("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ni("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ni("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new pa(3e4,6e4);function Ji(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zi(t,e,n,i,r={}){return Cv(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Os(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},s);return r1()||(u.referrerPolicy="no-referrer"),Iv.fetch()(Av(t,t.config.apiHost,n,a),u)})}async function Cv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Jb),e);try{const r=new tR(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qa(t,"user-disabled",o);const h=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw wv(t,h,u);In(t,h)}}catch(r){if(r instanceof Hn)throw r;In(t,"network-request-failed",{message:String(r)})}}async function ga(t,e,n,i,r={}){const s=await Zi(t,e,n,i,r);return"mfaPendingCredential"in s&&In(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Av(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Jd(t.config,r):`${t.config.apiScheme}://${r}`}function eR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Un(this.auth,"network-request-failed")),Zb.get())})}}function Qa(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Un(t,e,i);return r.customData._tokenResponse=n,r}function em(t){return t!==void 0&&t.enterprise!==void 0}class nR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iR(t,e){return Zi(t,"GET","/v2/recaptchaConfig",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(t,e){return Zi(t,"POST","/v1/accounts:delete",e)}async function Sv(t,e){return Zi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sR(t,e=!1){const n=Ut(t),i=await n.getIdToken(e),r=Zd(i);ue(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:ko(Ru(r.auth_time)),issuedAtTime:ko(Ru(r.iat)),expirationTime:ko(Ru(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ru(t){return Number(t)*1e3}function Zd(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return hl("JWT malformed, contained fewer than 3 sections"),null;try{const r=bl(n);return r?JSON.parse(r):(hl("Failed to decode base64 JWT payload"),null)}catch(r){return hl("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function tm(t){const e=Zd(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Hn&&oR(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function oR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ko(this.lastLoginAt),this.creationTime=ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jl(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Zo(t,Sv(n,{idToken:i}));ue(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bv(s.providerUserInfo):[],a=cR(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ah(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function lR(t){const e=Ut(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cR(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function bv(t){return t.map(e=>{var{providerId:n}=e,i=Yd(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR(t,e){const n=await Cv(t,{},async()=>{const i=Os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Av(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Iv.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hR(t,e){return Zi(t,"POST","/v2/accounts:revokeToken",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=tm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await uR(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new cs;return i&&(ue(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(ue(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(ue(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cs,this.toJSON())}_performRefresh(){return ni("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ii{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ah(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sR(this,e)}reload(){return lR(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(On(this.auth.app))return Promise.reject(li(this.auth));const e=await this.getIdToken();return await Zo(this,rR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,u,h;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,g=(r=n.email)!==null&&r!==void 0?r:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(u=n.createdAt)!==null&&u!==void 0?u:void 0,F=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:$,emailVerified:D,isAnonymous:j,providerData:ee,stsTokenManager:I}=n;ue($&&I,e,"internal-error");const y=cs.fromJSON(this.name,I);ue(typeof $=="string",e,"internal-error"),Ci(f,e.name),Ci(g,e.name),ue(typeof D=="boolean",e,"internal-error"),ue(typeof j=="boolean",e,"internal-error"),Ci(m,e.name),Ci(C,e.name),Ci(b,e.name),Ci(N,e.name),Ci(q,e.name),Ci(F,e.name);const w=new ii({uid:$,auth:e,email:g,emailVerified:D,displayName:f,isAnonymous:j,photoURL:C,phoneNumber:m,tenantId:b,stsTokenManager:y,createdAt:q,lastLoginAt:F});return ee&&Array.isArray(ee)&&(w.providerData=ee.map(A=>Object.assign({},A))),N&&(w._redirectEventId=N),w}static async _fromIdTokenResponse(e,n,i=!1){const r=new cs;r.updateFromServerResponse(n);const s=new ii({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await jl(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];ue(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?bv(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new cs;a.updateFromIdToken(i);const c=new ii({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Ah(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new Map;function ri(t){fi(t instanceof Function,"Expected a class definition");let e=nm.get(t);return e?(fi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nm.set(t,e),e)}/**
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
 */class Rv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rv.type="NONE";const im=Rv;/**
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
 */function dl(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=dl(this.userKey,r.apiKey,s),this.fullPersistenceKey=dl("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new us(ri(im),e,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||ri(im);const o=dl(i,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=ii._fromJSON(e,h);u!==s&&(a=f),s=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new us(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new us(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ov(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xv(e))return"Blackberry";if(Lv(e))return"Webos";if(kv(e))return"Safari";if((e.includes("chrome/")||Nv(e))&&!e.includes("edge/"))return"Chrome";if(Dv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Pv(t=Ft()){return/firefox\//i.test(t)}function kv(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nv(t=Ft()){return/crios\//i.test(t)}function Ov(t=Ft()){return/iemobile/i.test(t)}function Dv(t=Ft()){return/android/i.test(t)}function xv(t=Ft()){return/blackberry/i.test(t)}function Lv(t=Ft()){return/webos/i.test(t)}function ef(t=Ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dR(t=Ft()){var e;return ef(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fR(){return o1()&&document.documentMode===10}function Mv(t=Ft()){return ef(t)||Dv(t)||Lv(t)||xv(t)||/windows phone/i.test(t)||Ov(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t,e=[]){let n;switch(t){case"Browser":n=rm(Ft());break;case"Worker":n=`${rm(Ft())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xi}/${i}`}/**
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
 */class pR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function gR(t,e={}){return Zi(t,"GET","/v2/passwordPolicy",Ji(t,e))}/**
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
 */const mR=6;class _R{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sm(this),this.idTokenSubscription=new sm(this),this.beforeStateQueue=new pR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ri(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sv(this,{idToken:e}),i=await ii._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(On(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(On(this.app))return Promise.reject(li(this));const n=e?Ut(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return On(this.app)?Promise.reject(li(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return On(this.app)?Promise.reject(li(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ri(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gR(this),n=new _R(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await hR(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ri(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[ri(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Kb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dr(t){return Ut(t)}class sm{constructor(e){this.auth=e,this.observer=null,this.addObserver=g1(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vR(t){xc=t}function Fv(t){return xc.loadJS(t)}function ER(){return xc.recaptchaEnterpriseScript}function TR(){return xc.gapiScript}function wR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class IR{constructor(){this.enterprise=new CR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class CR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const AR="recaptcha-enterprise",Uv="NO_RECAPTCHA";class SR{constructor(e){this.type=AR,this.auth=Dr(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{iR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new nR(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;em(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Uv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new IR().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&em(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ER();c.length!==0&&(c+=a),Fv(c).then(()=>{r(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function om(t,e,n,i=!1,r=!1){const s=new SR(t);let o;if(r)o=Uv;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Sh(t,e,n,i,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await om(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await om(t,e,n,n==="getOobCode");return i(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(t,e){const n=Ed(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Pl(s,e??{}))return r;In(r,"already-initialized")}return n.initialize({options:e})}function RR(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ri);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function PR(t,e,n){const i=Dr(t);ue(i._canInitEmulator,i,"emulator-config-failed"),ue(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Bv(e),{host:o,port:a}=kR(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),NR()}function Bv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kR(t){const e=Bv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:am(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:am(o)}}}function am(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ni("not implemented")}_getIdTokenResponse(e){return ni("not implemented")}_linkToIdToken(e,n){return ni("not implemented")}_getReauthenticationResolver(e){return ni("not implemented")}}async function OR(t,e){return Zi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t,e){return ga(t,"POST","/v1/accounts:signInWithPassword",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",Ji(t,e))}async function LR(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends tf{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ea(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new ea(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sh(e,n,"signInWithPassword",DR);case"emailLink":return xR(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sh(e,i,"signUpPassword",OR);case"emailLink":return LR(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e){return ga(t,"POST","/v1/accounts:signInWithIdp",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="http://localhost";class Er extends tf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Yd(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Er(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hs(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,hs(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hs(e,n)}buildRequest(){const e={requestUri:MR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Os(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FR(t){const e=fo(po(t)).link,n=e?fo(po(e)).deep_link_id:null,i=fo(po(t)).deep_link_id;return(i?fo(po(i)).link:null)||i||n||e||t}class nf{constructor(e){var n,i,r,s,o,a;const c=fo(po(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(i=c.oobCode)!==null&&i!==void 0?i:null,f=VR((r=c.mode)!==null&&r!==void 0?r:null);ue(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=FR(e);try{return new nf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=nf.parseLink(n);return ue(i,"argument-error"),ea._fromEmailAndCode(e,i.code,i.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ma extends $v{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends ma{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pi.credential(e.oauthAccessToken)}catch{return null}}}Pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Er._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ki.credential(n,i)}catch{return null}}}ki.GOOGLE_SIGN_IN_METHOD="google.com";ki.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends ma{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ni.credential(e.oauthAccessToken)}catch{return null}}}Ni.GITHUB_SIGN_IN_METHOD="github.com";Ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends ma{constructor(){super("twitter.com")}static credential(e,n){return Er._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Oi.credentialFromTaggedObject(e)}static credentialFromError(e){return Oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Oi.credential(n,i)}catch{return null}}}Oi.TWITTER_SIGN_IN_METHOD="twitter.com";Oi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t,e){return ga(t,"POST","/v1/accounts:signUp",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await ii._fromIdTokenResponse(e,i,r),o=lm(i);return new Tr({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=lm(i);return new Tr({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function lm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Hn{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Gl(e,n,i,r)}}function qv(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(t,s,e,i):s})}async function BR(t,e,n=!1){const i=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tr._forOperation(t,"link",i)}/**
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
 */async function $R(t,e,n=!1){const{auth:i}=t;if(On(i.app))return Promise.reject(li(i));const r="reauthenticate";try{const s=await Zo(t,qv(i,r,e,t),n);ue(s.idToken,i,"internal-error");const o=Zd(s.idToken);ue(o,i,"internal-error");const{sub:a}=o;return ue(t.uid===a,i,"user-mismatch"),Tr._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&In(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(t,e,n=!1){if(On(t.app))return Promise.reject(li(t));const i="signIn",r=await qv(t,i,e),s=await Tr._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function qR(t,e){return jv(Dr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gv(t){const e=Dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jR(t,e,n){if(On(t.app))return Promise.reject(li(t));const i=Dr(t),o=await Sh(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Gv(t),c}),a=await Tr._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function GR(t,e,n){return On(t.app)?Promise.reject(li(t)):qR(Ut(t),Fs.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Gv(t),i})}function WR(t,e,n,i){return Ut(t).onIdTokenChanged(e,n,i)}function HR(t,e,n){return Ut(t).beforeAuthStateChanged(e,n)}function Wv(t,e,n,i){return Ut(t).onAuthStateChanged(e,n,i)}function zR(t){return Ut(t).signOut()}const Wl="__sak";/**
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
 */class Hv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wl,"1"),this.storage.removeItem(Wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=1e3,QR=10;class zv extends Hv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);fR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,QR):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},KR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zv.type="LOCAL";const YR=zv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv extends Hv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kv.type="SESSION";const Qv=Kv;/**
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
 */function XR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Lc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await XR(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class JR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=rf("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}function ZR(t){Bn().location.href=t}/**
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
 */function Yv(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function eP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nP(){return Yv()?self:null}/**
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
 */const Xv="firebaseLocalStorageDb",iP=1,Hl="firebaseLocalStorage",Jv="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mc(t,e){return t.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function rP(){const t=indexedDB.deleteDatabase(Xv);return new _a(t).toPromise()}function bh(){const t=indexedDB.open(Xv,iP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Hl,{keyPath:Jv})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Hl)?e(i):(i.close(),await rP(),e(await bh()))})})}async function cm(t,e,n){const i=Mc(t,!0).put({[Jv]:e,value:n});return new _a(i).toPromise()}async function sP(t,e){const n=Mc(t,!1).get(e),i=await new _a(n).toPromise();return i===void 0?null:i.value}function um(t,e){const n=Mc(t,!0).delete(e);return new _a(n).toPromise()}const oP=800,aP=3;class Zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>aP)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lc._getInstance(nP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eP(),!this.activeServiceWorker)return;this.sender=new JR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bh();return await cm(e,Wl,"1"),await um(e,Wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>cm(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>sP(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>um(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Mc(r,!1).getAll();return new _a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zv.type="LOCAL";const lP=Zv;new pa(3e4,6e4);/**
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
 */function cP(t,e){return e?ri(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sf extends tf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uP(t){return jv(t.auth,new sf(t),t.bypassAuthState)}function hP(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),$R(n,new sf(t),t.bypassAuthState)}async function dP(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),BR(n,new sf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uP;case"linkViaPopup":case"linkViaRedirect":return dP;case"reauthViaPopup":case"reauthViaRedirect":return hP;default:In(this.auth,"internal-error")}}resolve(e){fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=new pa(2e3,1e4);class Jr extends eE{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){fi(this.filter.length===1,"Popup operations only handle one event");const e=rf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fP.get())};e()}}Jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP="pendingRedirect",fl=new Map;class gP extends eE{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=fl.get(this.auth._key());if(!e){try{const i=await mP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}fl.set(this.auth._key(),e)}return this.bypassAuthState||fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mP(t,e){const n=vP(e),i=yP(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function _P(t,e){fl.set(t._key(),e)}function yP(t){return ri(t._redirectPersistence)}function vP(t){return dl(pP,t.config.apiKey,t.name)}async function EP(t,e,n=!1){if(On(t.app))return Promise.reject(li(t));const i=Dr(t),r=cP(i,e),o=await new gP(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=10*60*1e3;class wP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!tE(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Un(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TP&&this.cachedEventUids.clear(),this.cachedEventUids.has(hm(e))}saveEventToCache(e){this.cachedEventUids.add(hm(e)),this.lastProcessedEventTime=Date.now()}}function hm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e={}){return Zi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SP=/^https?/;async function bP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CP(t);for(const n of e)try{if(RP(n))return}catch{}In(t,"unauthorized-domain")}function RP(t){const e=Ch(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!SP.test(n))return!1;if(AP.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const PP=new pa(3e4,6e4);function dm(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kP(t){return new Promise((e,n)=>{var i,r,s;function o(){dm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dm(),n(Un(t,"network-request-failed"))},timeout:PP.get()})}if(!((r=(i=Bn().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Bn().gapi)===null||s===void 0)&&s.load)o();else{const a=wR("iframefcb");return Bn()[a]=()=>{gapi.load?o():n(Un(t,"network-request-failed"))},Fv(`${TR()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw pl=null,e})}let pl=null;function NP(t){return pl=pl||kP(t),pl}/**
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
 */const OP=new pa(5e3,15e3),DP="__/auth/iframe",xP="emulator/auth/iframe",LP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VP(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jd(e,xP):`https://${t.config.authDomain}/${DP}`,i={apiKey:e.apiKey,appName:t.name,v:Xi},r=MP.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Os(i).slice(1)}`}async function FP(t){const e=await NP(t),n=Bn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:VP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LP,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Un(t,"network-request-failed"),a=Bn().setTimeout(()=>{s(o)},OP.get());function c(){Bn().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const UP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BP=500,$P=600,qP="_blank",jP="http://localhost";class fm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GP(t,e,n,i=BP,r=$P){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},UP),{width:i.toString(),height:r.toString(),top:s,left:o}),u=Ft().toLowerCase();n&&(a=Nv(u)?qP:n),Pv(u)&&(e=e||jP,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[m,C])=>`${g}${m}=${C},`,"");if(dR(u)&&a!=="_self")return WP(e||"",a),new fm(null);const f=window.open(e||"",a,h);ue(f,t,"popup-blocked");try{f.focus()}catch{}return new fm(f)}function WP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const HP="__/auth/handler",zP="emulator/auth/handler",KP=encodeURIComponent("fac");async function pm(t,e,n,i,r,s){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Xi,eventId:r};if(e instanceof $v){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ma){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${KP}=${encodeURIComponent(c)}`:"";return`${QP(t)}?${Os(a).slice(1)}${u}`}function QP({config:t}){return t.emulator?Jd(t,zP):`https://${t.authDomain}/${HP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="webStorageSupport";class YP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qv,this._completeRedirectFn=EP,this._overrideRedirectResult=_P}async _openPopup(e,n,i,r){var s;fi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await pm(e,n,i,Ch(),r);return GP(e,o,rf())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await pm(e,n,i,Ch(),r);return ZR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(fi(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await FP(e),i=new wP(e);return n.register("authEvent",r=>(ue(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pu,{type:Pu},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Pu];o!==void 0&&n(!!o),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mv()||kv()||ef()}}const XP=YP;var gm="@firebase/auth",mm="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ek(t){qn(new Tn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vv(t)},u=new yR(i,r,s,c);return RR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),qn(new Tn("auth-internal",e=>{const n=Dr(e.getProvider("auth").getImmediate());return(i=>new JP(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(gm,mm,ZP(t)),tn(gm,mm,"esm2017")}/**
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
 */const tk=5*60,nk=$0("authIdTokenMaxAge")||tk;let _m=null;const ik=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>nk)return;const r=n==null?void 0:n.token;_m!==r&&(_m=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Us(t=Q0()){const e=Ed(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bR(t,{popupRedirectResolver:XP,persistence:[lP,YR,Qv]}),i=$0("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=ik(s.toString());HR(n,o,()=>o(n.currentUser)),WR(n,a=>o(a))}}const r=U0("auth");return r&&PR(n,`http://${r}`),n}function rk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vR({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Un("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",rk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ek("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=new Map,ok={activated:!1,tokenObservers:[]};function Cn(t){return sk.get(t)||Object.assign({},ok)}const ym={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n,i,r,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Go,this.pending.promise.catch(n=>{}),await lk(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Go,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function lk(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},zl=new Ns("appCheck","AppCheck",ck);function nE(t){if(!Cn(t).activated)throw zl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="firebase-app-check-database",hk=1,Rh="firebase-app-check-store";let Ya=null;function dk(){return Ya||(Ya=new Promise((t,e)=>{try{const n=indexedDB.open(uk,hk);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var r;e(zl.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(Rh,{keyPath:"compositeKey"})}}}catch(n){e(zl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ya)}function fk(t,e){return pk(gk(t),e)}async function pk(t,e){const i=(await dk()).transaction(Rh,"readwrite"),s=i.objectStore(Rh).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=c=>{o()},i.onerror=c=>{var u;a(zl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function gk(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new la("@firebase/app-check");function vm(t,e){return G0()?fk(t,e).catch(n=>{Ph.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk={error:"UNKNOWN_ERROR"};function _k(t){return yc.encodeString(JSON.stringify(t),!1)}async function kh(t,e=!1){const n=t.app;nE(n);const i=Cn(n);let r=i.token,s;if(r&&!yo(r)&&(i.token=void 0,r=void 0),!r){const c=await i.cachedTokenPromise;c&&(yo(c)?r=c:await vm(n,void 0))}if(!e&&r&&yo(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await Cn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Ph.warn(c.message):Ph.error(c),s=c}let a;return r?s?yo(r)?a={token:r.token,internalError:s}:a=Tm(s):(a={token:r.token},i.token=r,await vm(n,r)):a=Tm(s),o&&Tk(n,a),a}async function yk(t){const e=t.app;nE(e);const{provider:n}=Cn(e);{const{token:i}=await n.getToken();return{token:i}}}function vk(t,e,n,i){const{app:r}=t,s=Cn(r),o={next:n,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&yo(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Em(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Em(t))}function iE(t,e){const n=Cn(t),i=n.tokenObservers.filter(r=>r.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Em(t){const{app:e}=t,n=Cn(e);let i=n.tokenRefresher;i||(i=Ek(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function Ek(t){const{app:e}=t;return new ak(async()=>{const n=Cn(e);let i;if(n.token?i=await kh(t,!0):i=await kh(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Cn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},ym.RETRIAL_MIN_WAIT,ym.RETRIAL_MAX_WAIT)}function Tk(t,e){const n=Cn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function yo(t){return t.expireTimeMillis-Date.now()>0}function Tm(t){return{token:_k(mk),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Cn(this.app);for(const n of e)iE(this.app,n.next);return Promise.resolve()}}function Ik(t,e){return new wk(t,e)}function Ck(t){return{getToken:e=>kh(t,e),getLimitedUseToken:()=>yk(t),addTokenListener:e=>vk(t,"INTERNAL",e),removeTokenListener:e=>iE(t.app,e)}}const Ak="@firebase/app-check",Sk="0.8.10",bk="app-check",wm="app-check-internal";function Rk(){qn(new Tn(bk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Ik(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(wm).initialize()})),qn(new Tn(wm,t=>{const e=t.getProvider("app-check").getImmediate();return Ck(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),tn(Ak,Sk)}Rk();const Pk=Symbol("firebaseApp");var Im={};const Cm="@firebase/database",Am="1.0.10";/**
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
 */let rE="";function kk(t){rE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),yt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Nk(e)}}catch{}return new Ok},hr=sE("localStorage"),Dk=sE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new la("@firebase/database"),xk=function(){let t=1;return function(){return t++}}(),oE=function(t){const e=v1(t),n=new p1;n.update(e);const i=n.digest();return yc.encodeByteArray(i)},ya=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ya.apply(null,i):typeof i=="object"?e+=yt(i):e+=i,e+=" "}return e};let No=null,Sm=!0;const Lk=function(t,e){Q(!e,"Can't turn on custom loggers persistently."),ds.logLevel=ve.VERBOSE,No=ds.log.bind(ds)},Ot=function(...t){if(Sm===!0&&(Sm=!1,No===null&&Dk.get("logging_enabled")===!0&&Lk()),No){const e=ya.apply(null,t);No(e)}},va=function(t){return function(...e){Ot(t,...e)}},Nh=function(...t){const e="FIREBASE INTERNAL ERROR: "+ya(...t);ds.error(e)},wr=function(...t){const e=`FIREBASE FATAL ERROR: ${ya(...t)}`;throw ds.error(e),new Error(e)},nn=function(...t){const e="FIREBASE WARNING: "+ya(...t);ds.warn(e)},Mk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},aE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Vk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Is="[MIN_NAME]",Ir="[MAX_NAME]",Bs=function(t,e){if(t===e)return 0;if(t===Is||e===Ir)return-1;if(e===Is||t===Ir)return 1;{const n=bm(t),i=bm(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Fk=function(t,e){return t===e?0:t<e?-1:1},so=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+yt(e))},of=function(t){if(typeof t!="object"||t===null)return yt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=yt(e[i]),n+=":",n+=of(t[e[i]]);return n+="}",n},lE=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function dn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const cE=function(t){Q(!aE(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,c;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(h.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},Uk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},$k=new RegExp("^-?(0*)\\d{1,10}$"),qk=-2147483648,jk=2147483647,bm=function(t){if($k.test(t)){const e=Number(t);if(e>=qk&&e<=jk)return e}return null},Ea=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw nn("Exception was thrown by user callback.",n),e},Math.floor(0))}},Gk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Oo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Wk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){nn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="5",uE="v",hE="s",dE="r",fE="f",pE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gE="ls",mE="p",Oh="ac",_E="websocket",yE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,i,r,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Kk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vE(t,e,n){Q(typeof e=="string","typeof type must == string"),Q(typeof n=="object","typeof params must == object");let i;if(e===_E)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===yE)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Kk(t)&&(n.ns=t.namespace);const r=[];return dn(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.counters_={}}incrementCounter(e,n=1){yi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Q2(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku={},Nu={};function lf(t){const e=t.toString();return ku[e]||(ku[e]=new Qk),ku[e]}function Yk(t,e){const n=t.toString();return Nu[n]||(Nu[n]=e()),Nu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Ea(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="start",Jk="close",Zk="pLPCommand",eN="pRTLPCB",EE="id",TE="pw",wE="ser",tN="cb",nN="seg",iN="ts",rN="d",sN="dframe",IE=1870,CE=30,oN=IE-CE,aN=25e3,lN=3e4;class Zr{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=va(e),this.stats_=lf(n),this.urlFn=c=>(this.appCheckToken&&(c[Oh]=this.appCheckToken),vE(n,yE,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Xk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(lN)),Vk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cf((...s)=>{const[o,a,c,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rm)this.id=a,this.password=c;else if(o===Jk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Rm]="t",i[wE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[tN]=this.scriptTagHolder.uniqueCallbackIdentifier),i[uE]=af,this.transportSessionId&&(i[hE]=this.transportSessionId),this.lastSessionId&&(i[gE]=this.lastSessionId),this.applicationId&&(i[mE]=this.applicationId),this.appCheckToken&&(i[Oh]=this.appCheckToken),typeof location<"u"&&location.hostname&&pE.test(location.hostname)&&(i[dE]=fE);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zr.forceAllow_=!0}static forceDisallow(){Zr.forceDisallow_=!0}static isAvailable(){return Zr.forceAllow_?!0:!Zr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Uk()&&!Bk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=V0(n),r=lE(i,oN);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[sN]="t",i[EE]=e,i[TE]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=yt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cf{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xk(),window[Zk+this.uniqueCallbackIdentifier]=e,window[eN+this.uniqueCallbackIdentifier]=n,this.myIFrame=cf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ot("frame writing exception"),a.stack&&Ot(a.stack),Ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ot("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[EE]=this.myID,e[TE]=this.myPW,e[wE]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+CE+i.length<=IE;){const o=this.pendingSegs.shift();i=i+"&"+nN+r+"="+o.seg+"&"+iN+r+"="+o.ts+"&"+rN+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(aN)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=16384,uN=45e3;let Kl=null;typeof MozWebSocket<"u"?Kl=MozWebSocket:typeof WebSocket<"u"&&(Kl=WebSocket);class Dn{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=va(this.connId),this.stats_=lf(n),this.connURL=Dn.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[uE]=af,typeof location<"u"&&location.hostname&&pE.test(location.hostname)&&(o[dE]=fE),n&&(o[hE]=n),i&&(o[gE]=i),r&&(o[Oh]=r),s&&(o[mE]=s),vE(e,_E,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hr.set("previous_websocket_failure",!0);try{let i;j0(),this.mySock=new Kl(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Kl!==null&&!Dn.forceDisallow_}static previouslyFailed(){return hr.isInMemoryStorage||hr.get("previous_websocket_failure")===!0}markConnectionHealthy(){hr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Wo(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=lE(n,cN);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(uN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dn.responsesRequiredToBeHealthy=2;Dn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{static get ALL_TRANSPORTS(){return[Zr,Dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Dn.isAvailable();let i=n&&!Dn.previouslyFailed();if(e.webSocketOnly&&(n||nn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Dn];else{const r=this.transports_=[];for(const s of ta.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);ta.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ta.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=6e4,dN=5e3,fN=10*1024,pN=100*1024,Ou="t",Pm="d",gN="s",km="r",mN="e",Nm="o",Om="a",Dm="n",xm="p",_N="h";class yN{constructor(e,n,i,r,s,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=va("c:"+this.id+":"),this.transportManager_=new ta(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Oo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ou in e){const n=e[Ou];n===Om?this.upgradeIfSecondaryHealthy_():n===km?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Nm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=so("t",e),i=so("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:xm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Om,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Dm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=so("t",e),i=so("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=so(Ou,e);if(Pm in e){const i=e[Pm];if(n===_N){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Dm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===gN?this.onConnectionShutdown_(i):n===km?this.onReset_(i):n===mN?Nh("Server Error: "+i):n===Nm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),af!==i&&nn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Oo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Oo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:xm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){Q(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends SE{static getInstance(){return new Ql}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=32,Mm=768;class He{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Me(){return new He("")}function Se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ki(t){return t.pieces_.length-t.pieceNum_}function Ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new He(t.pieces_,e)}function bE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function vN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function RE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function PE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new He(e,0)}function ft(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof He)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new He(n,0)}function Ie(t){return t.pieceNum_>=t.pieces_.length}function ln(t,e){const n=Se(t),i=Se(e);if(n===null)return e;if(n===i)return ln(Ge(t),Ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function kE(t,e){if(Ki(t)!==Ki(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function _n(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ki(t)>Ki(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class EN{constructor(e,n){this.errorPrefix_=n,this.parts_=RE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ec(this.parts_[i]);NE(this)}}function TN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ec(e),NE(t)}function wN(t){const e=t.parts_.pop();t.byteLength_-=Ec(e),t.parts_.length>0&&(t.byteLength_-=1)}function NE(t){if(t.byteLength_>Mm)throw new Error(t.errorPrefix_+"has a key path longer than "+Mm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Lm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Lm+") or object contains a cycle "+cr(t))}function cr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends SE{static getInstance(){return new uf}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return Q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=1e3,IN=60*5*1e3,Vm=30*1e3,CN=1.3,AN=3e4,SN="server_kill",Fm=3;class ci extends AE{constructor(e,n,i,r,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ci.nextPersistentConnectionId_++,this.log_=va("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oo,this.maxReconnectDelay_=IN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!j0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ql.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(yt(s)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Go,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,u=a.s;ci.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yi(e,"w")){const i=gs(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();nn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||f1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=d1(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+yt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Nh("Unrecognized action received from server: "+yt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>AN&&(this.reconnectDelay_=oo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*CN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ci.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},u=function(f){Q(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ot("getToken() completed but was canceled"):(Ot("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,a=new yN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,m=>{nn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(SN)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&nn(f),c())}}}interrupt(e){Ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nh(this.interruptReasons_)&&(this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>of(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new He(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fm&&(this.reconnectDelay_=Vm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+rE.replace(/\./g,"-")]=1,yd()?e["framework.cordova"]=1:q0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ql.getInstance().currentlyOnline();return nh(this.interruptReasons_)&&e}}ci.nextPersistentConnectionId_=0;ci.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new be(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new be(Is,e),r=new be(Is,n);return this.compare(i,r)!==0}minPost(){return be.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa;class OE extends Vc{static get __EMPTY_NODE(){return Xa}static set __EMPTY_NODE(e){Xa=e}compare(e,n){return Bs(e.name,n.name)}isDefinedOn(e){throw ks("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return be.MIN}maxPost(){return new be(Ir,Xa)}makePost(e,n){return Q(typeof e=="string","KeyIndex indexValue must always be a string."),new be(e,Xa)}toString(){return".key"}}const fs=new OE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ht{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??ht.RED,this.left=r??zt.EMPTY_NODE,this.right=s??zt.EMPTY_NODE}copy(e,n,i,r,s){return new ht(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return zt.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ht.RED=!0;ht.BLACK=!1;class bN{copy(e,n,i,r,s){return this}insert(e,n,i){return new ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,n=zt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new zt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ht.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ht.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ja(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ja(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ja(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ja(this.root_,null,this.comparator_,!0,e)}}zt.EMPTY_NODE=new bN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t,e){return Bs(t.name,e.name)}function hf(t,e){return Bs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dh;function PN(t){Dh=t}const DE=function(t){return typeof t=="number"?"number:"+cE(t):"string:"+t},xE=function(t){if(t.isLeafNode()){const e=t.val();Q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yi(e,".sv"),"Priority must be a string or number.")}else Q(t===Dh||t.isEmpty(),"priority of unexpected type.");Q(t===Dh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Um;class ct{static set __childrenNodeConstructor(e){Um=e}static get __childrenNodeConstructor(){return Um}constructor(e,n=ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,Q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ie(e)?this:Se(e)===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Se(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(Q(i!==".priority"||Ki(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+DE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=cE(this.value_):e+=this.value_,this.lazyHash_=oE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ct.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=ct.VALUE_TYPE_ORDER.indexOf(n),s=ct.VALUE_TYPE_ORDER.indexOf(i);return Q(r>=0,"Unknown leaf type: "+n),Q(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let LE,ME;function kN(t){LE=t}function NN(t){ME=t}class ON extends Vc{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Bs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return be.MIN}maxPost(){return new be(Ir,new ct("[PRIORITY-POST]",ME))}makePost(e,n){const i=LE(e);return new be(n,new ct("[PRIORITY-POST]",i))}toString(){return".priority"}}const Lt=new ON;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=Math.log(2);class xN{constructor(e){const n=s=>parseInt(Math.log(s)/DN,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yl=function(t,e,n,i){t.sort(e);const r=function(c,u){const h=u-c;let f,g;if(h===0)return null;if(h===1)return f=t[c],g=n?n(f):f,new ht(g,f.node,ht.BLACK,null,null);{const m=parseInt(h/2,10)+c,C=r(c,m),b=r(m+1,u);return f=t[m],g=n?n(f):f,new ht(g,f.node,ht.BLACK,C,b)}},s=function(c){let u=null,h=null,f=t.length;const g=function(C,b){const N=f-C,q=f;f-=C;const F=r(N+1,q),$=t[N],D=n?n($):$;m(new ht(D,$.node,b,null,F))},m=function(C){u?(u.left=C,u=C):(h=C,u=C)};for(let C=0;C<c.count;++C){const b=c.nextBitIsOne(),N=Math.pow(2,c.count-(C+1));b?g(N,ht.BLACK):(g(N,ht.BLACK),g(N,ht.RED))}return h},o=new xN(t.length),a=s(o);return new zt(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Du;const ao={};class si{static get Default(){return Q(Lt,"ChildrenNode.ts has not been loaded"),Du=Du||new si({".priority":ao},{".priority":Lt}),Du}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=gs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof zt?n:null}hasIndex(e){return yi(this.indexSet_,e.toString())}addIndex(e,n){Q(e!==fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(be.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Yl(i,e.getCompare()):a=ao;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new si(h,u)}addToIndexes(e,n){const i=Rl(this.indexes_,(r,s)=>{const o=gs(this.indexSet_,s);if(Q(o,"Missing index implementation for "+s),r===ao)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(be.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),Yl(a,o.getCompare())}else return ao;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new be(e.name,a))),c.insert(e,e.node)}});return new si(i,this.indexSet_)}removeFromIndexes(e,n){const i=Rl(this.indexes_,r=>{if(r===ao)return r;{const s=n.get(e.name);return s?r.remove(new be(e.name,s)):r}});return new si(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo;class xe{static get EMPTY_NODE(){return lo||(lo=new xe(new zt(hf),null,si.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&xE(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||lo}updatePriority(e){return this.children_.isEmpty()?this:new xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?lo:n}}getChild(e){const n=Se(e);return n===null?this:this.getImmediateChild(n).getChild(Ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(Q(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new be(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?lo:this.priorityNode_;return new xe(r,o,s)}}updateChild(e,n){const i=Se(e);if(i===null)return n;{Q(Se(e)!==".priority"||Ki(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Ge(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Lt,(o,a)=>{n[o]=a.val(e),i++,s&&xe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+DE(this.getPriority().val())+":"),this.forEachChild(Lt,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":oE(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new be(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new be(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new be(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,be.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,be.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ta?-1:0}withIndex(e){if(e===fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new xe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Lt),r=n.getIterator(Lt);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fs?null:this.indexMap_.get(e.toString())}}xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class LN extends xe{constructor(){super(new zt(hf),xe.EMPTY_NODE,si.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return xe.EMPTY_NODE}isEmpty(){return!1}}const Ta=new LN;Object.defineProperties(be,{MIN:{value:new be(Is,xe.EMPTY_NODE)},MAX:{value:new be(Ir,Ta)}});OE.__EMPTY_NODE=xe.EMPTY_NODE;ct.__childrenNodeConstructor=xe;PN(Ta);NN(Ta);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=!0;function Dt(t,e=null){if(t===null)return xe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),Q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ct(n,Dt(e))}if(!(t instanceof Array)&&MN){const n=[];let i=!1;if(dn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Dt(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new be(o,c)))}}),n.length===0)return xe.EMPTY_NODE;const s=Yl(n,RN,o=>o.name,hf);if(i){const o=Yl(n,Lt.getCompare());return new xe(s,Dt(e),new si({".priority":o},{".priority":Lt}))}else return new xe(s,Dt(e),si.Default)}else{let n=xe.EMPTY_NODE;return dn(t,(i,r)=>{if(yi(t,i)&&i.substring(0,1)!=="."){const s=Dt(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Dt(e))}}kN(Dt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN extends Vc{constructor(e){super(),this.indexPath_=e,Q(!Ie(e)&&Se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Bs(e.name,n.name):s}makePost(e,n){const i=Dt(e),r=xe.EMPTY_NODE.updateChild(this.indexPath_,i);return new be(n,r)}maxPost(){const e=xe.EMPTY_NODE.updateChild(this.indexPath_,Ta);return new be(Ir,e)}toString(){return RE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN extends Vc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Bs(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return be.MIN}maxPost(){return be.MAX}makePost(e,n){const i=Dt(e);return new be(n,i)}toString(){return".value"}}const UN=new FN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t){return{type:"value",snapshotNode:t}}function $N(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Bm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Lt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Is}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Lt}copy(){const e=new df;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $m(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Lt?n="$priority":t.index_===UN?n="$value":t.index_===fs?n="$key":(Q(t.index_ instanceof VN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=yt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=yt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+yt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=yt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+yt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Lt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends AE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=va("p:rest:"),this.listens_={}}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Xl.getListenId_(e,i),a={};this.listens_[o]=a;const c=$m(e._queryParams);this.restRequest_(s+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,i),gs(this.listens_,o)===a){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",r(g,null)}})}unlisten(e,n){const i=Xl.getListenId_(e,n);delete this.listens_[i]}get(e){const n=$m(e._queryParams),i=e._path.toString(),r=new Go;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Os(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Wo(a.responseText)}catch{nn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&nn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(){this.rootNode_=xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return{value:null,children:new Map}}function VE(t,e,n){if(Ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Se(e);t.children.has(i)||t.children.set(i,Jl());const r=t.children.get(i);e=Ge(e),VE(r,e,n)}}function xh(t,e,n){t.value!==null?n(e,t.value):WN(t,(i,r)=>{const s=new He(e.toString()+"/"+i);xh(r,s,n)})}function WN(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&dn(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=10*1e3,zN=30*1e3,KN=5*60*1e3;class QN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new HN(e);const i=jm+(zN-jm)*Math.random();Oo(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;dn(e,(r,s)=>{s>0&&yi(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Oo(this.reportStats_.bind(this),Math.floor(Math.random()*2*KN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xn||(xn={}));function FE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function UE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function BE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=xn.ACK_USER_WRITE,this.source=FE()}operationForChild(e){if(Ie(this.path)){if(this.affectedTree.value!=null)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new He(e));return new Zl(Me(),n,this.revert)}}else return Q(Se(this.path)===e,"operationForChild called for unrelated child."),new Zl(Ge(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=xn.OVERWRITE}operationForChild(e){return Ie(this.path)?new Cr(this.source,Me(),this.snap.getImmediateChild(e)):new Cr(this.source,Ge(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=xn.MERGE}operationForChild(e){if(Ie(this.path)){const n=this.children.subtree(new He(e));return n.isEmpty()?null:n.value?new Cr(this.source,Me(),n.value):new na(this.source,Me(),n)}else return Q(Se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new na(this.source,Ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=Se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function YN(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(jN(o.childName,o.snapshotNode))}),co(t,r,"child_removed",e,i,n),co(t,r,"child_added",e,i,n),co(t,r,"child_moved",s,i,n),co(t,r,"child_changed",e,i,n),co(t,r,"value",e,i,n),r}function co(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,c)=>JN(t,a,c)),o.forEach(a=>{const c=XN(t,a,s);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function XN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function JN(t,e,n){if(e.childName==null||n.childName==null)throw ks("Should only compare child_ events.");const i=new be(e.childName,e.snapshotNode),r=new be(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t,e){return{eventCache:t,serverCache:e}}function Do(t,e,n,i){return $E(new ff(e,n,i),t.serverCache)}function qE(t,e,n,i){return $E(t.eventCache,new ff(e,n,i))}function Lh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ar(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu;const ZN=()=>(xu||(xu=new zt(Fk)),xu);class je{static fromObject(e){let n=new je(null);return dn(e,(i,r)=>{n=n.set(new He(i),r)}),n}constructor(e,n=ZN()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Me(),value:this.value};if(Ie(e))return null;{const i=Se(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Ge(e),n);return s!=null?{path:ft(new He(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ie(e))return this;{const n=Se(e),i=this.children.get(n);return i!==null?i.subtree(Ge(e)):new je(null)}}set(e,n){if(Ie(e))return new je(n,this.children);{const i=Se(e),s=(this.children.get(i)||new je(null)).set(Ge(e),n),o=this.children.insert(i,s);return new je(this.value,o)}}remove(e){if(Ie(e))return this.children.isEmpty()?new je(null):new je(null,this.children);{const n=Se(e),i=this.children.get(n);if(i){const r=i.remove(Ge(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new je(null):new je(this.value,s)}else return this}}get(e){if(Ie(e))return this.value;{const n=Se(e),i=this.children.get(n);return i?i.get(Ge(e)):null}}setTree(e,n){if(Ie(e))return n;{const i=Se(e),s=(this.children.get(i)||new je(null)).setTree(Ge(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new je(this.value,o)}}fold(e){return this.fold_(Me(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(ft(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Me(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(Ie(e))return null;{const s=Se(e),o=this.children.get(s);return o?o.findOnPath_(Ge(e),ft(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Me(),n)}foreachOnPath_(e,n,i){if(Ie(e))return this;{this.value&&i(n,this.value);const r=Se(e),s=this.children.get(r);return s?s.foreachOnPath_(Ge(e),ft(n,r),i):new je(null)}}foreach(e){this.foreach_(Me(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(ft(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.writeTree_=e}static empty(){return new En(new je(null))}}function xo(t,e,n){if(Ie(e))return new En(new je(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=ln(r,e);return s=s.updateChild(o,n),new En(t.writeTree_.set(r,s))}else{const r=new je(n),s=t.writeTree_.setTree(e,r);return new En(s)}}}function Gm(t,e,n){let i=t;return dn(n,(r,s)=>{i=xo(i,ft(e,r),s)}),i}function Wm(t,e){if(Ie(e))return En.empty();{const n=t.writeTree_.setTree(e,new je(null));return new En(n)}}function Mh(t,e){return xr(t,e)!=null}function xr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ln(n.path,e)):null}function Hm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Lt,(i,r)=>{e.push(new be(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new be(i,r.value))}),e}function $i(t,e){if(Ie(e))return t;{const n=xr(t,e);return n!=null?new En(new je(n)):new En(t.writeTree_.subtree(e))}}function Vh(t){return t.writeTree_.isEmpty()}function Cs(t,e){return jE(Me(),t.writeTree_,e)}function jE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(Q(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=jE(ft(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ft(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t,e){return QE(e,t)}function eO(t,e,n,i,r){Q(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=xo(t.visibleWrites,e,n)),t.lastWriteId=i}function tO(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function nO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);Q(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&iO(a,i.path)?r=!1:_n(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return rO(t),!0;if(i.snap)t.visibleWrites=Wm(t.visibleWrites,i.path);else{const a=i.children;dn(a,c=>{t.visibleWrites=Wm(t.visibleWrites,ft(i.path,c))})}return!0}else return!1}function iO(t,e){if(t.snap)return _n(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&_n(ft(t.path,n),e))return!0;return!1}function rO(t){t.visibleWrites=WE(t.allWrites,sO,Me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sO(t){return t.visible}function WE(t,e,n){let i=En.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)_n(n,o)?(a=ln(n,o),i=xo(i,a,s.snap)):_n(o,n)&&(a=ln(o,n),i=xo(i,Me(),s.snap.getChild(a)));else if(s.children){if(_n(n,o))a=ln(n,o),i=Gm(i,a,s.children);else if(_n(o,n))if(a=ln(o,n),Ie(a))i=Gm(i,Me(),s.children);else{const c=gs(s.children,Se(a));if(c){const u=c.getChild(Ge(a));i=xo(i,Me(),u)}}}else throw ks("WriteRecord should have .snap or .children")}}return i}function HE(t,e,n,i,r){if(!i&&!r){const s=xr(t.visibleWrites,e);if(s!=null)return s;{const o=$i(t.visibleWrites,e);if(Vh(o))return n;if(n==null&&!Mh(o,Me()))return null;{const a=n||xe.EMPTY_NODE;return Cs(o,a)}}}else{const s=$i(t.visibleWrites,e);if(!r&&Vh(s))return n;if(!r&&n==null&&!Mh(s,Me()))return null;{const o=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(_n(u.path,e)||_n(e,u.path))},a=WE(t.allWrites,o,e),c=n||xe.EMPTY_NODE;return Cs(a,c)}}}function oO(t,e,n){let i=xe.EMPTY_NODE;const r=xr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Lt,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=$i(t.visibleWrites,e);return n.forEachChild(Lt,(o,a)=>{const c=Cs($i(s,new He(o)),a);i=i.updateImmediateChild(o,c)}),Hm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=$i(t.visibleWrites,e);return Hm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function aO(t,e,n,i,r){Q(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ft(e,n);if(Mh(t.visibleWrites,s))return null;{const o=$i(t.visibleWrites,s);return Vh(o)?r.getChild(n):Cs(o,r.getChild(n))}}function lO(t,e,n,i){const r=ft(e,n),s=xr(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=$i(t.visibleWrites,r);return Cs(o,i.getNode().getImmediateChild(n))}else return null}function cO(t,e){return xr(t.visibleWrites,e)}function uO(t,e,n,i,r,s,o){let a;const c=$i(t.visibleWrites,e),u=xr(c,Me());if(u!=null)a=u;else if(n!=null)a=Cs(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),g=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=g.getNext();for(;m&&h.length<r;)f(m,i)!==0&&h.push(m),m=g.getNext();return h}else return[]}function hO(){return{visibleWrites:En.empty(),allWrites:[],lastWriteId:-1}}function Fh(t,e,n,i){return HE(t.writeTree,t.treePath,e,n,i)}function zE(t,e){return oO(t.writeTree,t.treePath,e)}function zm(t,e,n,i){return aO(t.writeTree,t.treePath,e,n,i)}function ec(t,e){return cO(t.writeTree,ft(t.treePath,e))}function dO(t,e,n,i,r,s){return uO(t.writeTree,t.treePath,e,n,i,r,s)}function pf(t,e,n){return lO(t.writeTree,t.treePath,e,n)}function KE(t,e){return QE(ft(t.treePath,e),t.writeTree)}function QE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;Q(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Q(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Bm(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,qN(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,$N(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Bm(i,e.snapshotNode,r.oldSnap));else throw ks("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const YE=new pO;class gf{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ff(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ar(this.viewCache_),s=dO(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function gO(t,e){Q(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Q(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function mO(t,e,n,i,r){const s=new fO;let o,a;if(n.type===xn.OVERWRITE){const u=n;u.source.fromUser?o=Uh(t,e,u.path,u.snap,i,r,s):(Q(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ie(u.path),o=tc(t,e,u.path,u.snap,i,r,a,s))}else if(n.type===xn.MERGE){const u=n;u.source.fromUser?o=yO(t,e,u.path,u.children,i,r,s):(Q(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Bh(t,e,u.path,u.children,i,r,a,s))}else if(n.type===xn.ACK_USER_WRITE){const u=n;u.revert?o=TO(t,e,u.path,i,r,s):o=vO(t,e,u.path,u.affectedTree,i,r,s)}else if(n.type===xn.LISTEN_COMPLETE)o=EO(t,e,n.path,i,s);else throw ks("Unknown operation type: "+n.type);const c=s.getChanges();return _O(e,o,c),{viewCache:o,changes:c}}function _O(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Lh(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(BN(Lh(e)))}}function XE(t,e,n,i,r,s){const o=e.eventCache;if(ec(i,n)!=null)return e;{let a,c;if(Ie(n))if(Q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ar(e),h=u instanceof xe?u:xe.EMPTY_NODE,f=zE(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const u=Fh(i,Ar(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Se(n);if(u===".priority"){Q(Ki(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=zm(i,n,h,c);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ge(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=zm(i,n,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(u).updateChild(h,g):f=o.getNode().getImmediateChild(u)}else f=pf(i,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,r,s):a=o.getNode()}}return Do(e,a,o.isFullyInitialized()||Ie(n),t.filter.filtersNodes())}}function tc(t,e,n,i,r,s,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ie(n))u=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,i);u=h.updateFullNode(c.getNode(),m,null)}else{const m=Se(n);if(!c.isCompleteForPath(n)&&Ki(n)>1)return e;const C=Ge(n),N=c.getNode().getImmediateChild(m).updateChild(C,i);m===".priority"?u=h.updatePriority(c.getNode(),N):u=h.updateChild(c.getNode(),m,N,C,YE,null)}const f=qE(e,u,c.isFullyInitialized()||Ie(n),h.filtersNodes()),g=new gf(r,f,s);return XE(t,f,n,r,g,a)}function Uh(t,e,n,i,r,s,o){const a=e.eventCache;let c,u;const h=new gf(r,e,s);if(Ie(n))u=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Do(e,u,!0,t.filter.filtersNodes());else{const f=Se(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),i),c=Do(e,u,a.isFullyInitialized(),a.isFiltered());else{const g=Ge(n),m=a.getNode().getImmediateChild(f);let C;if(Ie(g))C=i;else{const b=h.getCompleteChild(f);b!=null?bE(g)===".priority"&&b.getChild(PE(g)).isEmpty()?C=b:C=b.updateChild(g,i):C=xe.EMPTY_NODE}if(m.equals(C))c=e;else{const b=t.filter.updateChild(a.getNode(),f,C,g,h,o);c=Do(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Km(t,e){return t.eventCache.isCompleteForChild(e)}function yO(t,e,n,i,r,s,o){let a=e;return i.foreach((c,u)=>{const h=ft(n,c);Km(e,Se(h))&&(a=Uh(t,a,h,u,r,s,o))}),i.foreach((c,u)=>{const h=ft(n,c);Km(e,Se(h))||(a=Uh(t,a,h,u,r,s,o))}),a}function Qm(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Bh(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ie(n)?u=i:u=new je(null).setTree(n,i);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,g)=>{if(h.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),C=Qm(t,m,g);c=tc(t,c,new He(f),C,r,s,o,a)}}),u.children.inorderTraversal((f,g)=>{const m=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!h.hasChild(f)&&!m){const C=e.serverCache.getNode().getImmediateChild(f),b=Qm(t,C,g);c=tc(t,c,new He(f),b,r,s,o,a)}}),c}function vO(t,e,n,i,r,s,o){if(ec(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(Ie(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return tc(t,e,n,c.getNode().getChild(n),r,s,a,o);if(Ie(n)){let u=new je(null);return c.getNode().forEachChild(fs,(h,f)=>{u=u.set(new He(h),f)}),Bh(t,e,n,u,r,s,a,o)}else return e}else{let u=new je(null);return i.foreach((h,f)=>{const g=ft(n,h);c.isCompleteForPath(g)&&(u=u.set(h,c.getNode().getChild(g)))}),Bh(t,e,n,u,r,s,a,o)}}function EO(t,e,n,i,r){const s=e.serverCache,o=qE(e,s.getNode(),s.isFullyInitialized()||Ie(n),s.isFiltered());return XE(t,o,n,i,YE,r)}function TO(t,e,n,i,r,s){let o;if(ec(i,n)!=null)return e;{const a=new gf(i,e,r),c=e.eventCache.getNode();let u;if(Ie(n)||Se(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Fh(i,Ar(e));else{const f=e.serverCache.getNode();Q(f instanceof xe,"serverChildren would be complete if leaf node"),h=zE(i,f)}h=h,u=t.filter.updateFullNode(c,h,s)}else{const h=Se(n);let f=pf(i,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=t.filter.updateChild(c,h,f,Ge(n),a,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,xe.EMPTY_NODE,Ge(n),a,s):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fh(i,Ar(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ec(i,Me())!=null,Do(e,u,o,t.filter.filtersNodes())}}function wO(t,e){const n=Ar(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ie(e)&&!n.getImmediateChild(Se(e)).isEmpty())?n.getChild(e):null}function Ym(t,e,n,i){e.type===xn.MERGE&&e.source.queryId!==null&&(Q(Ar(t.viewCache_),"We should always have a full cache before handling merges"),Q(Lh(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=mO(t.processor_,r,e,n,i);return gO(t.processor_,s.viewCache),Q(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,IO(t,s.changes,s.viewCache.eventCache.getNode())}function IO(t,e,n,i){const r=t.eventRegistrations_;return YN(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xm;function CO(t){Q(!Xm,"__referenceConstructor has already been defined"),Xm=t}function mf(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return Q(s!=null,"SyncTree gave us an op for an invalid query."),Ym(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Ym(o,e,n,i));return s}}function _f(t,e){let n=null;for(const i of t.views.values())n=n||wO(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jm;function AO(t){Q(!Jm,"__referenceConstructor has already been defined"),Jm=t}class Zm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new je(null),this.pendingWriteTree_=hO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function SO(t,e,n,i,r){return eO(t.pendingWriteTree_,e,n,i,r),r?Uc(t,new Cr(FE(),e,n)):[]}function es(t,e,n=!1){const i=tO(t.pendingWriteTree_,e);if(nO(t.pendingWriteTree_,e)){let s=new je(null);return i.snap!=null?s=s.set(Me(),!0):dn(i.children,o=>{s=s.set(new He(o),!0)}),Uc(t,new Zl(i.path,s,n))}else return[]}function Fc(t,e,n){return Uc(t,new Cr(UE(),e,n))}function bO(t,e,n){const i=je.fromObject(n);return Uc(t,new na(UE(),e,i))}function RO(t,e,n,i){const r=tT(t,i);if(r!=null){const s=nT(r),o=s.path,a=s.queryId,c=ln(o,e),u=new Cr(BE(a),c,n);return iT(t,o,u)}else return[]}function PO(t,e,n,i){const r=tT(t,i);if(r){const s=nT(r),o=s.path,a=s.queryId,c=ln(o,e),u=je.fromObject(n),h=new na(BE(a),c,u);return iT(t,o,h)}else return[]}function JE(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=ln(o,e),u=_f(a,c);if(u)return u});return HE(r,e,s,n,!0)}function Uc(t,e){return ZE(e,t.syncPointTree_,null,GE(t.pendingWriteTree_,Me()))}function ZE(t,e,n,i){if(Ie(t.path))return eT(t,e,n,i);{const r=e.get(Me());n==null&&r!=null&&(n=_f(r,Me()));let s=[];const o=Se(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=KE(i,o);s=s.concat(ZE(a,c,u,h))}return r&&(s=s.concat(mf(r,t,i,n))),s}}function eT(t,e,n,i){const r=e.get(Me());n==null&&r!=null&&(n=_f(r,Me()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=KE(i,o),h=t.operationForChild(o);h&&(s=s.concat(eT(h,a,c,u)))}),r&&(s=s.concat(mf(r,t,i,n))),s}function tT(t,e){return t.tagToQueryMap.get(e)}function nT(t){const e=t.indexOf("$");return Q(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new He(t.substr(0,e))}}function iT(t,e,n){const i=t.syncPointTree_.get(e);Q(i,"Missing sync point for query tag that we're tracking");const r=GE(t.pendingWriteTree_,e);return mf(i,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yf(n)}node(){return this.node_}}class vf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ft(this.path_,e);return new vf(this.syncTree_,n)}node(){return JE(this.syncTree_,this.path_)}}const kO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},e_=function(t,e,n){if(!t||typeof t!="object")return t;if(Q(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return NO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return OO(t[".sv"],e);Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},NO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:Q(!1,"Unexpected server value: "+t)}},OO=function(t,e,n){t.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&Q(!1,"Unexpected increment value: "+i);const r=e.node();if(Q(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},DO=function(t,e,n,i){return Ef(e,new vf(n,t),i)},xO=function(t,e,n){return Ef(t,new yf(e),n)};function Ef(t,e,n){const i=t.getPriority().val(),r=e_(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=e_(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new ct(a,Dt(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new ct(r))),o.forEachChild(Lt,(a,c)=>{const u=Ef(c,e.getImmediateChild(a),n);u!==c&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function wf(t,e){let n=e instanceof He?e:new He(e),i=t,r=Se(n);for(;r!==null;){const s=gs(i.node.children,r)||{children:{},childCount:0};i=new Tf(r,i,s),n=Ge(n),r=Se(n)}return i}function $s(t){return t.node.value}function rT(t,e){t.node.value=e,$h(t)}function sT(t){return t.node.childCount>0}function LO(t){return $s(t)===void 0&&!sT(t)}function Bc(t,e){dn(t.node.children,(n,i)=>{e(new Tf(n,t,i))})}function oT(t,e,n,i){n&&!i&&e(t),Bc(t,r=>{oT(r,e,!0,i)})}function MO(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function wa(t){return new He(t.parent===null?t.name:wa(t.parent)+"/"+t.name)}function $h(t){t.parent!==null&&VO(t.parent,t.name,t)}function VO(t,e,n){const i=LO(n),r=yi(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,$h(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,$h(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=/[\[\].#$\/\u0000-\u001F\u007F]/,UO=/[\[\].#$\u0000-\u001F\u007F]/,Lu=10*1024*1024,aT=function(t){return typeof t=="string"&&t.length!==0&&!FO.test(t)},BO=function(t){return typeof t=="string"&&t.length!==0&&!UO.test(t)},$O=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),BO(t)},lT=function(t,e,n){const i=n instanceof He?new EN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+cr(i));if(typeof e=="function")throw new Error(t+"contains a function "+cr(i)+" with contents = "+e.toString());if(aE(e))throw new Error(t+"contains "+e.toString()+" "+cr(i));if(typeof e=="string"&&e.length>Lu/3&&Ec(e)>Lu)throw new Error(t+"contains a string greater than "+Lu+" utf8 bytes "+cr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(dn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!aT(o)))throw new Error(t+" contains an invalid key ("+o+") "+cr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TN(i,o),lT(t,a,i),wN(i)}),r&&s)throw new Error(t+' contains ".value" child '+cr(i)+" in addition to actual children.")}},qO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!aT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$O(n))throw new Error(y1(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function GO(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!kE(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Lr(t,e,n){GO(t,n),WO(t,i=>_n(i,e)||_n(e,i))}function WO(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(HO(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function HO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();No&&Ot("event: "+n.toString()),Ea(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO="repo_interrupt",KO=25;class QO{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jl(),this.transactionQueueTree_=new Tf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YO(t,e,n){if(t.stats_=lf(t.repoInfo_),t.forceRestClient_||Gk())t.server_=new Xl(t.repoInfo_,(i,r,s,o)=>{t_(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>n_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{yt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new ci(t.repoInfo_,e,(i,r,s,o)=>{t_(t,i,r,s,o)},i=>{n_(t,i)},i=>{JO(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Yk(t.repoInfo_,()=>new QN(t.stats_,t.server_)),t.infoData_=new GN,t.infoSyncTree_=new Zm({startListening:(i,r,s,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=Fc(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),If(t,"connected",!1),t.serverSyncTree_=new Zm({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,c)=>{const u=o(a,c);Lr(t.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function XO(t){const n=t.infoData_.getNode(new He(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function cT(t){return kO({timestamp:XO(t)})}function t_(t,e,n,i,r){t.dataUpdateCount++;const s=new He(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const c=Rl(n,u=>Dt(u));o=PO(t.serverSyncTree_,s,c,r)}else{const c=Dt(n);o=RO(t.serverSyncTree_,s,c,r)}else if(i){const c=Rl(n,u=>Dt(u));o=bO(t.serverSyncTree_,s,c)}else{const c=Dt(n);o=Fc(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=Af(t,s)),Lr(t.eventQueue_,a,o)}function n_(t,e){If(t,"connected",e),e===!1&&eD(t)}function JO(t,e){dn(e,(n,i)=>{If(t,n,i)})}function If(t,e,n){const i=new He("/.info/"+e),r=Dt(n);t.infoData_.updateSnapshot(i,r);const s=Fc(t.infoSyncTree_,i,r);Lr(t.eventQueue_,i,s)}function ZO(t){return t.nextWriteId_++}function eD(t){uT(t,"onDisconnectEvents");const e=cT(t),n=Jl();xh(t.onDisconnect_,Me(),(r,s)=>{const o=DO(r,s,t.serverSyncTree_,e);VE(n,r,o)});let i=[];xh(n,Me(),(r,s)=>{i=i.concat(Fc(t.serverSyncTree_,r,s));const o=rD(t,r);Af(t,o)}),t.onDisconnect_=Jl(),Lr(t.eventQueue_,Me(),i)}function tD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zO)}function uT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ot(n,...e)}function hT(t,e,n){return JE(t.serverSyncTree_,e,n)||xe.EMPTY_NODE}function Cf(t,e=t.transactionQueueTree_){if(e||$c(t,e),$s(e)){const n=fT(t,e);Q(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&nD(t,wa(e),n)}else sT(e)&&Bc(e,n=>{Cf(t,n)})}function nD(t,e,n){const i=n.map(u=>u.currentWriteId),r=hT(t,e,i);let s=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];Q(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=ln(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,u=>{uT(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let g=0;g<n.length;g++)n[g].status=2,h=h.concat(es(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&f.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();$c(t,wf(t.transactionQueueTree_,e)),Cf(t,t.transactionQueueTree_),Lr(t.eventQueue_,e,h);for(let g=0;g<f.length;g++)Ea(f[g])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{nn("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Af(t,e)}},o)}function Af(t,e){const n=dT(t,e),i=wa(n),r=fT(t,n);return iD(t,r,i),i}function iD(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=ln(n,c.path);let h=!1,f;if(Q(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,r=r.concat(es(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=KO)h=!0,f="maxretry",r=r.concat(es(t.serverSyncTree_,c.currentWriteId,!0));else{const g=hT(t,c.path,o);c.currentInputSnapshot=g;const m=e[a].update(g.val());if(m!==void 0){lT("transaction failed: Data returned ",m,c.path);let C=Dt(m);typeof m=="object"&&m!=null&&yi(m,".priority")||(C=C.updatePriority(g.getPriority()));const N=c.currentWriteId,q=cT(t),F=xO(C,g,q);c.currentOutputSnapshotRaw=C,c.currentOutputSnapshotResolved=F,c.currentWriteId=ZO(t),o.splice(o.indexOf(N),1),r=r.concat(SO(t.serverSyncTree_,c.path,F,c.currentWriteId,c.applyLocally)),r=r.concat(es(t.serverSyncTree_,N,!0))}else h=!0,f="nodata",r=r.concat(es(t.serverSyncTree_,c.currentWriteId,!0))}Lr(t.eventQueue_,n,r),r=[],h&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}$c(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Ea(i[a]);Cf(t,t.transactionQueueTree_)}function dT(t,e){let n,i=t.transactionQueueTree_;for(n=Se(e);n!==null&&$s(i)===void 0;)i=wf(i,n),e=Ge(e),n=Se(e);return i}function fT(t,e){const n=[];return pT(t,e,n),n.sort((i,r)=>i.order-r.order),n}function pT(t,e,n){const i=$s(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Bc(e,r=>{pT(t,r,n)})}function $c(t,e){const n=$s(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,rT(e,n.length>0?n:void 0)}Bc(e,i=>{$c(t,i)})}function rD(t,e){const n=wa(dT(t,e)),i=wf(t.transactionQueueTree_,e);return MO(i,r=>{Mu(t,r)}),Mu(t,i),oT(i,r=>{Mu(t,r)}),n}function Mu(t,e){const n=$s(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Q(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(Q(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(es(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?rT(e,void 0):n.length=s+1,Lr(t.eventQueue_,wa(e),r);for(let o=0;o<i.length;o++)Ea(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sD(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function oD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):nn(`Invalid query segment '${n}' in query '${t}'`)}return e}const i_=function(t,e){const n=aD(t),i=n.namespace;n.domain==="firebase.com"&&wr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&wr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Mk();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zk(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new He(n.pathString)}},aD=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(r=sD(t.substring(h,f)));const g=oD(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const C=e.indexOf(".");i=e.substring(0,C).toLowerCase(),n=e.substring(C+1),s=i}"ns"in g&&(s=g.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return Ie(this._path)?null:bE(this._path)}get ref(){return new qs(this._repo,this._path)}get _queryIdentifier(){const e=qm(this._queryParams),n=of(e);return n==="{}"?"default":n}get _queryObject(){return qm(this._queryParams)}isEqual(e){if(e=Ut(e),!(e instanceof Sf))return!1;const n=this._repo===e._repo,i=kE(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+vN(this._path)}}class qs extends Sf{constructor(e,n){super(e,n,new df,!1)}get parent(){const e=PE(this._path);return e===null?null:new qs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}CO(qs);AO(qs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD="FIREBASE_DATABASE_EMULATOR_HOST",qh={};let cD=!1;function uD(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||wr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ot("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=i_(s,r),a=o.repoInfo,c;typeof process<"u"&&Im&&(c=Im[lD]),c?(s=`http://${c}?ns=${a.namespace}`,o=i_(s,r),a=o.repoInfo):o.repoInfo.secure;const u=new Hk(t.name,t.options,e);qO("Invalid Firebase Database URL",o),Ie(o.path)||wr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=dD(a,t,u,new Wk(t.name,n));return new fD(h,t)}function hD(t,e){const n=qh[e];(!n||n[t.key]!==t)&&wr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tD(t),delete n[t.key]}function dD(t,e,n,i){let r=qh[e.name];r||(r={},qh[e.name]=r);let s=r[t.toURLString()];return s&&wr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new QO(t,cD,n,i),r[t.toURLString()]=s,s}class fD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qs(this._repo,Me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function pD(t){kk(Xi),qn(new Tn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return uD(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),tn(Cm,Am,t),tn(Cm,Am,"esm2017")}ci.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ci.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};pD();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="firebasestorage.googleapis.com",gD="storageBucket",mD=2*60*1e3,_D=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Hn{constructor(e,n,i=0){super(Vu(e),`Firebase Storage: ${n} (${Vu(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,zn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Gn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Gn||(Gn={}));function Vu(t){return"storage/"+t}function yD(){const t="An unknown error occurred, please check the error payload for server response.";return new zn(Gn.UNKNOWN,t)}function vD(){return new zn(Gn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ED(){return new zn(Gn.CANCELED,"User canceled the upload/download.")}function TD(t){return new zn(Gn.INVALID_URL,"Invalid URL '"+t+"'.")}function wD(t){return new zn(Gn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function r_(t){return new zn(Gn.INVALID_ARGUMENT,t)}function mT(){return new zn(Gn.APP_DELETED,"The Firebase app was deleted.")}function ID(t){return new zn(Gn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=yn.makeFromUrl(e,n)}catch{return new yn(e,"")}if(i.path==="")return i;throw wD(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${r}/o${g}`,"i"),C={bucket:1,path:3},b=n===gT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",q=new RegExp(`^https?://${b}/${r}/${N}`,"i"),$=[{regex:a,indices:c,postModify:s},{regex:m,indices:C,postModify:u},{regex:q,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<$.length;D++){const j=$[D],ee=j.regex.exec(e);if(ee){const I=ee[j.indices.bucket];let y=ee[j.indices.path];y||(y=""),i=new yn(I,y),j.postModify(i);break}}if(i==null)throw TD(e);return i}}class CD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...N){u||(u=!0,e.apply(null,N))}function f(N){r=setTimeout(()=>{r=null,t(m,c())},N)}function g(){s&&clearTimeout(s)}function m(N,...q){if(u){g();return}if(N){g(),h.call(null,N,...q);return}if(c()||o){g(),h.call(null,N,...q);return}i<64&&(i*=2);let $;a===1?(a=2,$=0):$=(i+Math.random())*1e3,f($)}let C=!1;function b(N){C||(C=!0,g(),!u&&(r!==null?(N||(a=2),clearTimeout(r),f(0)):N||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,b(!0)},n),b}function SD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t){return t!==void 0}function s_(t,e,n,i){if(i<e)throw r_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw r_(`Invalid value for '${t}'. Expected ${n} or less.`)}function RD(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var nc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(nc||(nc={}));/**
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
 */function PD(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n,i,r,s,o,a,c,u,h,f,g=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,C)=>{this.resolve_=m,this.reject_=C,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Za(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===nc.NO_ERROR,c=s.getStatus();if(!a||PD(c,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===nc.ABORT;i(!1,new Za(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;i(!0,new Za(u,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());bD(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=yD();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?mT():ED();o(c)}else{const c=vD();o(c)}};this.canceled_?n(!1,new Za(!1,null,!0)):this.backoffId_=AD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&SD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Za{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function ND(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function OD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function LD(t,e,n,i,r,s,o=!0){const a=RD(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return DD(u,e),ND(u,n),OD(u,s),xD(u,i),new kD(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function VD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ic{constructor(e,n){this._service=e,n instanceof yn?this._location=n:this._location=yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ic(e,n)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return VD(this._location.path)}get storage(){return this._service}get parent(){const e=MD(this._location.path);if(e===null)return null;const n=new yn(this._location.bucket,e);return new ic(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ID(e)}}function o_(t,e){const n=e==null?void 0:e[gD];return n==null?null:yn.makeFromBucketSpec(n,t)}class FD{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=gT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mD,this._maxUploadRetryTime=_D,this._requests=new Set,r!=null?this._bucket=yn.makeFromBucketSpec(r,this._host):this._bucket=o_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=o_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){s_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){s_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ic(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new CD(mT());{const o=LD(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const a_="@firebase/storage",l_="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="storage";function BD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new FD(n,i,r,e,Xi)}function $D(){qn(new Tn(UD,BD,"PUBLIC").setMultipleInstances(!0)),tn(a_,l_,""),tn(a_,l_,"esm2017")}$D();function qD(t,{firebaseApp:e,modules:n=[]}){t.provide(Pk,e);for(const i of n)i(e,t)}function jD(){return _T().__VUE_DEVTOOLS_GLOBAL_HOOK__}function _T(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const GD=typeof Proxy=="function",WD="devtools-plugin:setup",HD="plugin:settings:set";let qr,jh;function zD(){var t;return qr!==void 0||(typeof window<"u"&&window.performance?(qr=!0,jh=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(qr=!0,jh=globalThis.perf_hooks.performance):qr=!1),qr}function KD(){return zD()?jh.now():Date.now()}class QD{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},i);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}s=o},now(){return KD()}},n&&n.on(HD,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function YD(t,e){const n=t,i=_T(),r=jD(),s=GD&&n.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(WD,t,e);else{const o=s?new QD(n,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Yr=typeof document<"u";function yT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function XD(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&yT(t.default)}const Ne=Object.assign;function Fu(t,e){const n={};for(const i in e){const r=e[i];n[i]=An(r)?r.map(t):t(r)}return n}const Lo=()=>{},An=Array.isArray,vT=/#/g,JD=/&/g,ZD=/\//g,ex=/=/g,tx=/\?/g,ET=/\+/g,nx=/%5B/g,ix=/%5D/g,TT=/%5E/g,rx=/%60/g,wT=/%7B/g,sx=/%7C/g,IT=/%7D/g,ox=/%20/g;function bf(t){return encodeURI(""+t).replace(sx,"|").replace(nx,"[").replace(ix,"]")}function ax(t){return bf(t).replace(wT,"{").replace(IT,"}").replace(TT,"^")}function Gh(t){return bf(t).replace(ET,"%2B").replace(ox,"+").replace(vT,"%23").replace(JD,"%26").replace(rx,"`").replace(wT,"{").replace(IT,"}").replace(TT,"^")}function lx(t){return Gh(t).replace(ex,"%3D")}function cx(t){return bf(t).replace(vT,"%23").replace(tx,"%3F")}function ux(t){return t==null?"":cx(t).replace(ZD,"%2F")}function ia(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const hx=/\/$/,dx=t=>t.replace(hx,"");function Uu(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=mx(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ia(o)}}function fx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function c_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function px(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&As(e.matched[i],n.matched[r])&&CT(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function CT(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gx(t[n],e[n]))return!1;return!0}function gx(t,e){return An(t)?u_(t,e):An(e)?u_(e,t):t===e}function u_(t,e){return An(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function mx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Ai={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ra;(function(t){t.pop="pop",t.push="push"})(ra||(ra={}));var Mo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Mo||(Mo={}));function _x(t){if(!t)if(Yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dx(t)}const yx=/^[^#]+#/;function vx(t,e){return t.replace(yx,"#")+e}function Ex(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const qc=()=>({left:window.scrollX,top:window.scrollY});function Tx(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Ex(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function h_(t,e){return(history.state?history.state.position-e:-1)+t}const Wh=new Map;function wx(t,e){Wh.set(t,e)}function Ix(t){const e=Wh.get(t);return Wh.delete(t),e}let Cx=()=>location.protocol+"//"+location.host;function AT(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),c_(c,"")}return c_(n,t)+i+r}function Ax(t,e,n,i){let r=[],s=[],o=null;const a=({state:g})=>{const m=AT(t,location),C=n.value,b=e.value;let N=0;if(g){if(n.value=m,e.value=g,o&&o===C){o=null;return}N=b?g.position-b.position:0}else i(m);r.forEach(q=>{q(n.value,C,{delta:N,type:ra.pop,direction:N?N>0?Mo.forward:Mo.back:Mo.unknown})})};function c(){o=n.value}function u(g){r.push(g);const m=()=>{const C=r.indexOf(g);C>-1&&r.splice(C,1)};return s.push(m),m}function h(){const{history:g}=window;g.state&&g.replaceState(Ne({},g.state,{scroll:qc()}),"")}function f(){for(const g of s)g();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function d_(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?qc():null}}function Sx(t){const{history:e,location:n}=window,i={value:AT(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,h){const f=t.indexOf("#"),g=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Cx()+t+c;try{e[h?"replaceState":"pushState"](u,"",g),r.value=u}catch(m){console.error(m),n[h?"replace":"assign"](g)}}function o(c,u){const h=Ne({},e.state,d_(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});s(c,h,!0),i.value=c}function a(c,u){const h=Ne({},r.value,e.state,{forward:c,scroll:qc()});s(h.current,h,!0);const f=Ne({},d_(i.value,c,null),{position:h.position+1},u);s(c,f,!1),i.value=c}return{location:i,state:r,push:a,replace:o}}function bx(t){t=_x(t);const e=Sx(t),n=Ax(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Ne({location:"",base:t,go:i,createHref:vx.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Rx(t){return typeof t=="string"||t&&typeof t=="object"}function ST(t){return typeof t=="string"||typeof t=="symbol"}const bT=Symbol("");var f_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(f_||(f_={}));function Ss(t,e){return Ne(new Error,{type:t,[bT]:!0},e)}function Xn(t,e){return t instanceof Error&&bT in t&&(e==null||!!(t.type&e))}const p_="[^/]+?",Px={sensitive:!1,strict:!1,start:!0,end:!0},kx=/[.+*?^${}()[\]/\\]/g;function Nx(t,e){const n=Ne({},Px,e),i=[];let r=n.start?"^":"";const s=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const g=u[f];let m=40+(n.sensitive?.25:0);if(g.type===0)f||(r+="/"),r+=g.value.replace(kx,"\\$&"),m+=40;else if(g.type===1){const{value:C,repeatable:b,optional:N,regexp:q}=g;s.push({name:C,repeatable:b,optional:N});const F=q||p_;if(F!==p_){m+=10;try{new RegExp(`(${F})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${C}" (${F}): `+D.message)}}let $=b?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;f||($=N&&u.length<2?`(?:/${$})`:"/"+$),N&&($+="?"),r+=$,m+=20,N&&(m+=-8),b&&(m+=-20),F===".*"&&(m+=-50)}h.push(m)}i.push(h)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let g=1;g<h.length;g++){const m=h[g]||"",C=s[g-1];f[C.name]=m&&C.repeatable?m.split("/"):m}return f}function c(u){let h="",f=!1;for(const g of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of g)if(m.type===0)h+=m.value;else if(m.type===1){const{value:C,repeatable:b,optional:N}=m,q=C in u?u[C]:"";if(An(q)&&!b)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const F=An(q)?q.join("/"):q;if(!F)if(N)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${C}"`);h+=F}}return h||"/"}return{re:o,score:i,keys:s,parse:a,stringify:c}}function Ox(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function RT(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=Ox(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(g_(i))return 1;if(g_(r))return-1}return r.length-i.length}function g_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Dx={type:0,value:""},xx=/[a-zA-Z0-9_]/;function Lx(t){if(!t)return[[]];if(t==="/")return[[Dx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,c,u="",h="";function f(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):g();break;case 4:g(),n=i;break;case 1:c==="("?n=2:xx.test(c)?g():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function Mx(t,e,n){const i=Nx(Lx(t.path),n),r=Ne(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Vx(t,e){const n=[],i=new Map;e=v_({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,g,m){const C=!m,b=__(f);b.aliasOf=m&&m.record;const N=v_(e,f),q=[b];if("alias"in f){const D=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of D)q.push(__(Ne({},b,{components:m?m.record.components:b.components,path:j,aliasOf:m?m.record:b})))}let F,$;for(const D of q){const{path:j}=D;if(g&&j[0]!=="/"){const ee=g.record.path,I=ee[ee.length-1]==="/"?"":"/";D.path=g.record.path+(j&&I+j)}if(F=Mx(D,g,N),m?m.alias.push(F):($=$||F,$!==F&&$.alias.push(F),C&&f.name&&!y_(F)&&o(f.name)),PT(F)&&c(F),b.children){const ee=b.children;for(let I=0;I<ee.length;I++)s(ee[I],F,m&&m.children[I])}m=m||F}return $?()=>{o($)}:Lo}function o(f){if(ST(f)){const g=i.get(f);g&&(i.delete(f),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(f);g>-1&&(n.splice(g,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const g=Bx(f,n);n.splice(g,0,f),f.record.name&&!y_(f)&&i.set(f.record.name,f)}function u(f,g){let m,C={},b,N;if("name"in f&&f.name){if(m=i.get(f.name),!m)throw Ss(1,{location:f});N=m.record.name,C=Ne(m_(g.params,m.keys.filter($=>!$.optional).concat(m.parent?m.parent.keys.filter($=>$.optional):[]).map($=>$.name)),f.params&&m_(f.params,m.keys.map($=>$.name))),b=m.stringify(C)}else if(f.path!=null)b=f.path,m=n.find($=>$.re.test(b)),m&&(C=m.parse(b),N=m.record.name);else{if(m=g.name?i.get(g.name):n.find($=>$.re.test(g.path)),!m)throw Ss(1,{location:f,currentLocation:g});N=m.record.name,C=Ne({},g.params,f.params),b=m.stringify(C)}const q=[];let F=m;for(;F;)q.unshift(F.record),F=F.parent;return{name:N,path:b,params:C,matched:q,meta:Ux(q)}}t.forEach(f=>s(f));function h(){n.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function m_(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function __(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Fx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Fx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function y_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ux(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function v_(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Bx(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;RT(t,e[s])<0?i=s:n=s+1}const r=$x(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function $x(t){let e=t;for(;e=e.parent;)if(PT(e)&&RT(t,e)===0)return e}function PT({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function qx(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(ET," "),o=s.indexOf("="),a=ia(o<0?s:s.slice(0,o)),c=o<0?null:ia(s.slice(o+1));if(a in e){let u=e[a];An(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function E_(t){let e="";for(let n in t){const i=t[n];if(n=lx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(An(i)?i.map(s=>s&&Gh(s)):[i&&Gh(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function jx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=An(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Gx=Symbol(""),T_=Symbol(""),Rf=Symbol(""),kT=Symbol(""),Hh=Symbol("");function uo(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ri(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=g=>{g===!1?c(Ss(4,{from:n,to:e})):g instanceof Error?c(g):Rx(g)?c(Ss(2,{from:e,to:g})):(o&&i.enterCallbacks[r]===o&&typeof g=="function"&&o.push(g),a())},h=s(()=>t.call(i&&i.instances[r],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(g=>c(g))})}function Bu(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(yT(c)){const h=(c.__vccOpts||c)[e];h&&s.push(Ri(h,n,i,o,a,r))}else{let u=c();s.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=XD(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&Ri(m,n,i,o,a,r)()}))}}return s}function w_(t){const e=Mn(Rf),n=Mn(kT),i=Ue(()=>{const c=Ye(t.to);return e.resolve(c)}),r=Ue(()=>{const{matched:c}=i.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const g=f.findIndex(As.bind(null,h));if(g>-1)return g;const m=I_(c[u-2]);return u>1&&I_(h)===m&&f[f.length-1].path!==m?f.findIndex(As.bind(null,c[u-2])):g}),s=Ue(()=>r.value>-1&&Qx(n.params,i.value.params)),o=Ue(()=>r.value>-1&&r.value===n.matched.length-1&&CT(n.params,i.value.params));function a(c={}){if(Kx(c)){const u=e[Ye(t.replace)?"replace":"push"](Ye(t.to)).catch(Lo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:Ue(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function Wx(t){return t.length===1?t[0]:t}const Hx=Gt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:w_,setup(t,{slots:e}){const n=fn(w_(t)),{options:i}=Mn(Rf),r=Ue(()=>({[C_(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[C_(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&Wx(e.default(n));return t.custom?s:Xr("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),zx=Hx;function Kx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qx(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!An(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function I_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const C_=(t,e,n)=>t??e??n,Yx=Gt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Mn(Hh),r=Ue(()=>t.route||i.value),s=Mn(T_,0),o=Ue(()=>{let u=Ye(s);const{matched:h}=r.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=Ue(()=>r.value.matched[o.value]);tl(T_,Ue(()=>o.value+1)),tl(Gx,a),tl(Hh,r);const c=Je();return as(()=>[c.value,a.value,t.name],([u,h,f],[g,m,C])=>{h&&(h.instances[f]=u,m&&m!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!As(h,m)||!g)&&(h.enterCallbacks[f]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,f=a.value,g=f&&f.components[h];if(!g)return A_(n.default,{Component:g,route:u});const m=f.props[h],C=m?m===!0?u.params:typeof m=="function"?m(u):m:null,N=Xr(g,Ne({},C,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return A_(n.default,{Component:N,route:u})||N}}});function A_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xx=Yx;function Jx(t){const e=Vx(t.routes,t),n=t.parseQuery||qx,i=t.stringifyQuery||E_,r=t.history,s=uo(),o=uo(),a=uo(),c=iI(Ai);let u=Ai;Yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Fu.bind(null,x=>""+x),f=Fu.bind(null,ux),g=Fu.bind(null,ia);function m(x,J){let Y,ne;return ST(x)?(Y=e.getRecordMatcher(x),ne=J):ne=x,e.addRoute(ne,Y)}function C(x){const J=e.getRecordMatcher(x);J&&e.removeRoute(J)}function b(){return e.getRoutes().map(x=>x.record)}function N(x){return!!e.getRecordMatcher(x)}function q(x,J){if(J=Ne({},J||c.value),typeof x=="string"){const R=Uu(n,x,J.path),L=e.resolve({path:R.path},J),U=r.createHref(R.fullPath);return Ne(R,L,{params:g(L.params),hash:ia(R.hash),redirectedFrom:void 0,href:U})}let Y;if(x.path!=null)Y=Ne({},x,{path:Uu(n,x.path,J.path).path});else{const R=Ne({},x.params);for(const L in R)R[L]==null&&delete R[L];Y=Ne({},x,{params:f(R)}),J.params=f(J.params)}const ne=e.resolve(Y,J),Re=x.hash||"";ne.params=h(g(ne.params));const v=fx(i,Ne({},x,{hash:ax(Re),path:ne.path})),T=r.createHref(v);return Ne({fullPath:v,hash:Re,query:i===E_?jx(x.query):x.query||{}},ne,{redirectedFrom:void 0,href:T})}function F(x){return typeof x=="string"?Uu(n,x,c.value.path):Ne({},x)}function $(x,J){if(u!==x)return Ss(8,{from:J,to:x})}function D(x){return I(x)}function j(x){return D(Ne(F(x),{replace:!0}))}function ee(x){const J=x.matched[x.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let ne=typeof Y=="function"?Y(x):Y;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=F(ne):{path:ne},ne.params={}),Ne({query:x.query,hash:x.hash,params:ne.path!=null?{}:x.params},ne)}}function I(x,J){const Y=u=q(x),ne=c.value,Re=x.state,v=x.force,T=x.replace===!0,R=ee(Y);if(R)return I(Ne(F(R),{state:typeof R=="object"?Ne({},Re,R.state):Re,force:v,replace:T}),J||Y);const L=Y;L.redirectedFrom=J;let U;return!v&&px(i,ne,Y)&&(U=Ss(16,{to:L,from:ne}),rn(ne,ne,!0,!1)),(U?Promise.resolve(U):A(L,ne)).catch(M=>Xn(M)?Xn(M,2)?M:pn(M):Ee(M,L,ne)).then(M=>{if(M){if(Xn(M,2))return I(Ne({replace:T},F(M.to),{state:typeof M.to=="object"?Ne({},Re,M.to.state):Re,force:v}),J||L)}else M=P(L,ne,!0,T,Re);return S(L,ne,M),M})}function y(x,J){const Y=$(x,J);return Y?Promise.reject(Y):Promise.resolve()}function w(x){const J=vi.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(x):x()}function A(x,J){let Y;const[ne,Re,v]=Zx(x,J);Y=Bu(ne.reverse(),"beforeRouteLeave",x,J);for(const R of ne)R.leaveGuards.forEach(L=>{Y.push(Ri(L,x,J))});const T=y.bind(null,x,J);return Y.push(T),Wt(Y).then(()=>{Y=[];for(const R of s.list())Y.push(Ri(R,x,J));return Y.push(T),Wt(Y)}).then(()=>{Y=Bu(Re,"beforeRouteUpdate",x,J);for(const R of Re)R.updateGuards.forEach(L=>{Y.push(Ri(L,x,J))});return Y.push(T),Wt(Y)}).then(()=>{Y=[];for(const R of v)if(R.beforeEnter)if(An(R.beforeEnter))for(const L of R.beforeEnter)Y.push(Ri(L,x,J));else Y.push(Ri(R.beforeEnter,x,J));return Y.push(T),Wt(Y)}).then(()=>(x.matched.forEach(R=>R.enterCallbacks={}),Y=Bu(v,"beforeRouteEnter",x,J,w),Y.push(T),Wt(Y))).then(()=>{Y=[];for(const R of o.list())Y.push(Ri(R,x,J));return Y.push(T),Wt(Y)}).catch(R=>Xn(R,8)?R:Promise.reject(R))}function S(x,J,Y){a.list().forEach(ne=>w(()=>ne(x,J,Y)))}function P(x,J,Y,ne,Re){const v=$(x,J);if(v)return v;const T=J===Ai,R=Yr?history.state:{};Y&&(ne||T?r.replace(x.fullPath,Ne({scroll:T&&R&&R.scroll},Re)):r.push(x.fullPath,Re)),c.value=x,rn(x,J,Y,T),pn()}let E;function Ze(){E||(E=r.listen((x,J,Y)=>{if(!bn.listening)return;const ne=q(x),Re=ee(ne);if(Re){I(Ne(Re,{replace:!0,force:!0}),ne).catch(Lo);return}u=ne;const v=c.value;Yr&&wx(h_(v.fullPath,Y.delta),qc()),A(ne,v).catch(T=>Xn(T,12)?T:Xn(T,2)?(I(Ne(F(T.to),{force:!0}),ne).then(R=>{Xn(R,20)&&!Y.delta&&Y.type===ra.pop&&r.go(-1,!1)}).catch(Lo),Promise.reject()):(Y.delta&&r.go(-Y.delta,!1),Ee(T,ne,v))).then(T=>{T=T||P(ne,v,!1),T&&(Y.delta&&!Xn(T,8)?r.go(-Y.delta,!1):Y.type===ra.pop&&Xn(T,20)&&r.go(-1,!1)),S(ne,v,T)}).catch(Lo)}))}let lt=uo(),Be=uo(),ye;function Ee(x,J,Y){pn(x);const ne=Be.list();return ne.length?ne.forEach(Re=>Re(x,J,Y)):console.error(x),Promise.reject(x)}function Qt(){return ye&&c.value!==Ai?Promise.resolve():new Promise((x,J)=>{lt.add([x,J])})}function pn(x){return ye||(ye=!x,Ze(),lt.list().forEach(([J,Y])=>x?Y(x):J()),lt.reset()),x}function rn(x,J,Y,ne){const{scrollBehavior:Re}=t;if(!Yr||!Re)return Promise.resolve();const v=!Y&&Ix(h_(x.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return Ps().then(()=>Re(x,J,v)).then(T=>T&&Tx(T)).catch(T=>Ee(T,x,J))}const Ke=x=>r.go(x);let Qe;const vi=new Set,bn={currentRoute:c,listening:!0,addRoute:m,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:b,resolve:q,options:t,push:D,replace:j,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Be.add,isReady:Qt,install(x){const J=this;x.component("RouterLink",zx),x.component("RouterView",Xx),x.config.globalProperties.$router=J,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Ye(c)}),Yr&&!Qe&&c.value===Ai&&(Qe=!0,D(r.location).catch(Re=>{}));const Y={};for(const Re in Ai)Object.defineProperty(Y,Re,{get:()=>c.value[Re],enumerable:!0});x.provide(Rf,J),x.provide(kT,J_(Y)),x.provide(Hh,c);const ne=x.unmount;vi.add(x),x.unmount=function(){vi.delete(x),vi.size<1&&(u=Ai,E&&E(),E=null,c.value=Ai,Qe=!1,ye=!1),ne()}}};function Wt(x){return x.reduce((J,Y)=>J.then(()=>w(Y)),Promise.resolve())}return bn}function Zx(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>As(u,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>As(u,c))||r.push(c))}return[n,i,r]}const Ia={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},bs={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},jt={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},eL={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},NT={dangerouslyHTMLString:!1,multiple:!0,position:Ia.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},tL={rtl:!1,newestOnTop:!1,toastClassName:""},OT={...NT,...tL};({...NT,type:jt.DEFAULT});var De=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(De||{}),zh=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(zh||{});const nL={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},iL={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},rL={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},sL={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},S_="Toastify--animate Toastify__none-enter";function DT(t,e=!1){var n;let i=nL;if(!t||typeof t=="string")switch(t){case"flip":i=sL;break;case"zoom":i=rL;break;case"slide":i=iL;break}else i=t;if(e)i.enter=S_;else if(i.enter===S_){const r=(n=i.exit.split("__")[1])==null?void 0:n.split("-")[0];i.enter=`Toastify--animate Toastify__${r}-enter`}return i}function oL(t){return t.containerId||String(t.position)}const jc="will-unmount";function aL(t=Ia.TOP_RIGHT){return!!document.querySelector(`.${De.CSS_NAMESPACE}__toast-container--${t}`)}function lL(t=Ia.TOP_RIGHT){return`${De.CSS_NAMESPACE}__toast-container--${t}`}function cL(t,e,n=!1){const i=[`${De.CSS_NAMESPACE}__toast-container`,`${De.CSS_NAMESPACE}__toast-container--${t}`,n?`${De.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return ps(e)?e({position:t,rtl:n,defaultClassName:i}):`${i} ${e||""}`}function uL(t){var e;const{position:n,containerClassName:i,rtl:r=!1,style:s={}}=t,o=De.CSS_NAMESPACE,a=lL(n),c=document.querySelector(`.${o}`),u=document.querySelector(`.${a}`),h=!!u&&!((e=u.className)!=null&&e.includes(jc)),f=c||document.createElement("div"),g=document.createElement("div");g.className=cL(n,i,r),g.dataset.testid=`${De.CSS_NAMESPACE}__toast-container--${n}`,g.id=oL(t);for(const m in s)if(Object.prototype.hasOwnProperty.call(s,m)){const C=s[m];g.style[m]=C}return c||(f.className=De.CSS_NAMESPACE,document.body.appendChild(f)),h||f.appendChild(g),g}function Kh(t){var e,n,i;const r=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),s=document.getElementById(r);s&&s.removeEventListener("animationend",Kh,!1);try{sa[r].unmount(),(i=document.getElementById(r))==null||i.remove(),delete sa[r],delete _t[r]}catch{}}const sa=fn({});function hL(t,e){const n=document.getElementById(String(e));n&&(sa[n.id]=t)}function Qh(t,e=!0){const n=String(t);if(!sa[n])return;const i=document.getElementById(n);i&&i.classList.add(jc),e?(fL(t),i&&i.addEventListener("animationend",Kh,!1)):Kh(n),Wn.items=Wn.items.filter(r=>r.containerId!==t)}function dL(t){for(const e in sa)Qh(e,t);Wn.items=[]}function xT(t,e){const n=document.getElementById(t.toastId);if(n){let i=t;i={...i,...DT(i.transition)};const r=i.appendPosition?`${i.exit}--${i.position}`:i.exit;n.className+=` ${r}`,e&&e(n)}}function fL(t){for(const e in _t)if(e===t)for(const n of _t[e]||[])xT(n)}function pL(t){const e=Rs().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function Pf(t){return document.getElementById(t)}function gL(t){const e=Pf(t.containerId);return e&&e.classList.contains(jc)}function b_(t){var e;const n=mr(t.content)?_e(t.content.props):null;return n??_e((e=t.data)!=null?e:{})}function mL(t){return t?Wn.items.filter(e=>e.containerId===t).length>0:Wn.items.length>0}function _L(){if(Wn.items.length>0){const t=Wn.items.shift();gl(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const _t=fn({}),Wn=fn({items:[]});function Rs(){const t=_e(_t);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function yL(t){return Rs().find(e=>e.toastId===t)}function gl(t,e={}){if(gL(e)){const n=Pf(e.containerId);n&&n.addEventListener("animationend",Yh.bind(null,t,e),!1)}else Yh(t,e)}function Yh(t,e={}){const n=Pf(e.containerId);n&&n.removeEventListener("animationend",Yh.bind(null,t,e),!1);const i=_t[e.containerId]||[],r=i.length>0;if(!r&&!aL(e.position)){const s=uL(e),o=x0(FL,e);e.useHandler&&e.useHandler(o),o.mount(s),hL(o,s.id)}r&&!e.updateId&&(e.position=i[0].position),Ps(()=>{e.updateId?Zt.update(e):Zt.add(t,e)})}const Zt={add(t,e){const{containerId:n=""}=e;n&&(_t[n]=_t[n]||[],_t[n].find(i=>i.toastId===e.toastId)||setTimeout(()=>{var i,r;e.newestOnTop?(i=_t[n])==null||i.unshift(e):(r=_t[n])==null||r.push(e),e.onOpen&&e.onOpen(b_(e))},e.delay||0))},remove(t){if(t){const e=pL(t);if(e){const n=_t[e];let i=n.find(r=>r.toastId===t);_t[e]=n.filter(r=>r.toastId!==t),!_t[e].length&&!mL(e)&&Qh(e,!1),_L(),Ps(()=>{i!=null&&i.onClose&&(i.onClose(b_(i)),i=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){_t[e]=_t[e]||[];const n=_t[e].find(s=>s.toastId===t.toastId),i=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,r={...t,disabledEnterTransition:!i,updateId:void 0};Zt.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{ke(r.content,r)},t.delay||0)}},clear(t,e=!0){t?Qh(t,e):dL(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,i=document.getElementById(n);i&&(i.removeEventListener("animationend",Zt.dismissCallback,!1),setTimeout(()=>{Zt.remove(n)}))},dismiss(t){if(t){const e=Rs();for(const n of e)if(n.toastId===t){xT(n,i=>{i.addEventListener("animationend",Zt.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=Rs();for(const n of e)if(n.toastId===t){const i=document.getElementById(t);i&&(i.remove(),i.removeEventListener("animationend",Zt.dismissCallback,!1),Zt.remove(t));break}}}},vL=fn({useHandler:void 0}),LT=fn({}),rc=fn({});function MT(){return Math.random().toString(36).substring(2,9)}function EL(t){return typeof t=="number"&&!isNaN(t)}function Xh(t){return typeof t=="string"}function ps(t){return typeof t=="function"}function Gc(...t){return mi(...t)}function ml(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function TL(t={}){LT[`${De.CSS_NAMESPACE}-default-options`]=t}function wL(){return LT[`${De.CSS_NAMESPACE}-default-options`]||OT}function IL(){const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return document.documentElement.classList.contains("dark")||t?"dark":"light"}var _l=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(_l||{});const VT={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:Ia.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:bs.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:jt.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""},contentProps:{type:Object,required:!1,default:null},expandCustomProps:{type:Boolean,required:!1,default:!1}},CL={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:jt.DEFAULT},theme:{type:String,required:!1,default:bs.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},AL=Gt({name:"ProgressBar",props:CL,setup(t,{attrs:e}){const n=Je(),i=Ue(()=>t.hide?"true":"false"),r=Ue(()=>({...e.style||{},animationDuration:`${t.autoClose===!0?5e3:t.autoClose}ms`,animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?`scaleX(${t.progress})`:"none"})),s=Ue(()=>[`${De.CSS_NAMESPACE}__progress-bar`,t.controlledProgress?`${De.CSS_NAMESPACE}__progress-bar--controlled`:`${De.CSS_NAMESPACE}__progress-bar--animated`,`${De.CSS_NAMESPACE}__progress-bar-theme--${t.theme}`,`${De.CSS_NAMESPACE}__progress-bar--${t.type}`,t.rtl?`${De.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),o=Ue(()=>`${s.value} ${(e==null?void 0:e.class)||""}`),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},c=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},u=Ue(()=>t.controlledProgress?null:c),h=Ue(()=>t.controlledProgress?c:null);return nl(()=>{n.value&&(a(),n.value.onanimationend=u.value,n.value.ontransitionend=h.value)}),()=>le("div",{ref:n,role:"progressbar","aria-hidden":i.value,"aria-label":"notification timer",class:o.value,style:r.value},null)}}),SL=Gt({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:bs.AUTO},type:{type:String,required:!1,default:bs.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>le("button",{class:`${De.CSS_NAMESPACE}__close-button ${De.CSS_NAMESPACE}__close-button--${t.theme}`,type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[le("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[le("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Wc=({theme:t,type:e,path:n,...i})=>le("svg",mi({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`},i),[le("path",{d:n},null)]);function bL(t){return le(Wc,mi(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function RL(t){return le(Wc,mi(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function PL(t){return le(Wc,mi(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function kL(t){return le(Wc,mi(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function NL(){return le("div",{class:`${De.CSS_NAMESPACE}__spinner`},null)}const yl={info:RL,warning:bL,success:PL,error:kL,spinner:NL},OL=t=>t in yl;function DL({theme:t,type:e,isLoading:n,icon:i}){let r;const s=!!n||e==="loading",o={theme:t,type:e};if(s&&(i===void 0||typeof i=="boolean"))return yl.spinner();if(i!==!1){if(ml(i))r=_e(i);else if(ps(i)){const a=i;o.type=s?"loading":e,r=a(o),r=!r&&s?yl.spinner():r}else mr(i)?r=_r(i,o):Xh(i)||EL(i)?r=i:OL(e)&&(r=yl[e](o));return r}}const xL=()=>{};function LL(t,e,n=De.COLLAPSE_DURATION){const{scrollHeight:i,style:r}=t,s=n;requestAnimationFrame(()=>{r.minHeight="initial",r.height=i+"px",r.transition=`all ${s}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(e,s)})})}function ML(t){const e=Je(!1),n=Je(!1),i=Je(!1),r=Je(_l.Enter),s=fn({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||De.COLLAPSE_DURATION}),o=s.done||xL,a=Ue(()=>s.appendPosition?`${s.enter}--${s.position}`:s.enter),c=Ue(()=>s.appendPosition?`${s.exit}--${s.position}`:s.exit),u=Ue(()=>t.pauseOnHover?{onMouseenter:N,onMouseleave:b}:{});function h(){const F=a.value.split(" ");g().addEventListener(zh.ENTRANCE_ANIMATION_END,b,{once:!0});const $=j=>{const ee=g();j.target===ee&&(ee.dispatchEvent(new Event(zh.ENTRANCE_ANIMATION_END)),ee.removeEventListener("animationend",$),ee.removeEventListener("animationcancel",$),r.value===_l.Enter&&j.type!=="animationcancel"&&ee.classList.remove(...F))},D=()=>{const j=g();j.classList.add(...F),j.addEventListener("animationend",$),j.addEventListener("animationcancel",$)};t.pauseOnFocusLoss&&m(),D()}function f(){if(!g())return;const F=()=>{const D=g();D.removeEventListener("animationend",F),s.collapse?LL(D,o,s.collapseDuration):o()},$=()=>{const D=g();r.value=_l.Exit,D&&(D.className+=` ${c.value}`,D.addEventListener("animationend",F))};n.value||(i.value?F():setTimeout($))}function g(){return t.toastRef.value}function m(){document.hasFocus()||N(),window.addEventListener("focus",b),window.addEventListener("blur",N)}function C(){window.removeEventListener("focus",b),window.removeEventListener("blur",N)}function b(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function N(){e.value=!1}function q(F){F&&(F.stopPropagation(),F.preventDefault()),n.value=!1}return nl(f),nl(()=>{const F=Rs();n.value=F.findIndex($=>$.toastId===s.toastId)>-1}),nl(()=>{t.isLoading!==void 0&&(t.loading.value?N():b())}),Rr(h),pc(()=>{t.pauseOnFocusLoss&&C()}),{isIn:n,isRunning:e,hideToast:q,eventHandlers:u}}const VL=Gt({name:"ToastItem",inheritAttrs:!1,props:VT,setup(t){const e=Je(),n=Ue(()=>!!t.isLoading),i=Ue(()=>t.progress!==void 0&&t.progress!==null),r=Ue(()=>DL(t)),s=Ue(()=>[`${De.CSS_NAMESPACE}__toast`,`${De.CSS_NAMESPACE}__toast-theme--${t.theme}`,`${De.CSS_NAMESPACE}__toast--${t.type}`,t.rtl?`${De.CSS_NAMESPACE}__toast--rtl`:void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:u}=ML({toastRef:e,loading:n,done:()=>{Zt.remove(t.toastId)},...DT(t.transition,t.disabledEnterTransition),...t});return()=>le("div",mi({id:t.toastId,class:s.value,style:t.toastStyle||{},ref:e,"data-testid":`toast-item-${t.toastId}`,onClick:h=>{t.closeOnClick&&c(),t.onClick&&t.onClick(h)}},u.value),[le("div",{role:t.role,"data-testid":"toast-body",class:`${De.CSS_NAMESPACE}__toast-body ${t.bodyClassName||""}`},[r.value!=null&&le("div",{"data-testid":`toast-icon-${t.type}`,class:[`${De.CSS_NAMESPACE}__toast-icon`,t.isLoading?"":`${De.CSS_NAMESPACE}--animate-icon ${De.CSS_NAMESPACE}__zoom-enter`].join(" ")},[ml(r.value)?Xr(_e(r.value),{theme:t.theme,type:t.type}):ps(r.value)?r.value({theme:t.theme,type:t.type}):r.value]),le("div",{"data-testid":"toast-content"},[ml(t.content)?Xr(_e(t.content),{toastProps:_e(t),closeToast:c,data:t.data,...t.expandCustomProps?t.contentProps:{contentProps:t.contentProps||{}}}):ps(t.content)?t.content({toastProps:_e(t),closeToast:c,data:t.data}):t.dangerouslyHTMLString?Xr("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&le(SL,{theme:t.theme,closeToast:h=>{h.stopPropagation(),h.preventDefault(),c()}},null),ml(t.closeButton)?Xr(_e(t.closeButton),{closeToast:c,type:t.type,theme:t.theme}):ps(t.closeButton)?t.closeButton({closeToast:c,type:t.type,theme:t.theme}):null,le(AL,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:i.value,progress:t.progress,closeToast:t.isLoading?void 0:c},null)])}});let Vo=0;function FT(){typeof window>"u"||(Vo&&window.cancelAnimationFrame(Vo),Vo=window.requestAnimationFrame(FT),rc.lastUrl!==window.location.href&&(rc.lastUrl=window.location.href,Zt.clear()))}const FL=Gt({name:"ToastifyContainer",inheritAttrs:!1,props:VT,setup(t){const e=Ue(()=>t.containerId),n=Ue(()=>_t[e.value]||[]),i=Ue(()=>n.value.filter(r=>r.position===t.position));return Rr(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(FT)}),pc(()=>{typeof window<"u"&&Vo&&(window.cancelAnimationFrame(Vo),rc.lastUrl="")}),()=>le(dt,null,[i.value.map(r=>{const{toastId:s=""}=r;return le(VL,mi({key:s},r),null)})])}});let $u=!1;const UT={isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1};function BT(){const t=[];return Rs().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(jc)&&t.push(e)}),t}function UL(t){const e=BT().length,n=t??0;return n>0&&e+Wn.items.length>=n}function BL(t){UL(t.limit)&&!t.updateId&&Wn.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function er(t,e,n={}){if($u)return;n=Gc(wL(),{type:e},_e(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=MT()),n={...n,...n.type==="loading"?UT:{},content:t,containerId:n.containerId||String(n.position)};const i=Number(n==null?void 0:n.progress);return!isNaN(i)&&i<0&&(n.progress=0),i>1&&(n.progress=1),n.theme==="auto"&&(n.theme=IL()),BL(n),rc.lastUrl=window.location.href,n.multiple?Wn.items.length?n.updateId&&gl(t,n):gl(t,n):($u=!0,ke.clearAll(void 0,!1),setTimeout(()=>{gl(t,n)},0),setTimeout(()=>{$u=!1},390)),n.toastId}const ke=(t,e)=>er(t,jt.DEFAULT,e);ke.info=(t,e)=>er(t,jt.DEFAULT,{...e,type:jt.INFO});ke.error=(t,e)=>er(t,jt.DEFAULT,{...e,type:jt.ERROR});ke.warning=(t,e)=>er(t,jt.DEFAULT,{...e,type:jt.WARNING});ke.warn=ke.warning;ke.success=(t,e)=>er(t,jt.DEFAULT,{...e,type:jt.SUCCESS});ke.loading=(t,e)=>er(t,jt.DEFAULT,Gc(e,UT));ke.dark=(t,e)=>er(t,jt.DEFAULT,Gc(e,{theme:bs.DARK}));ke.remove=t=>{t?Zt.dismiss(t):Zt.clear()};ke.clearAll=(t,e)=>{Ps(()=>{Zt.clear(t,e)})};ke.isActive=t=>{let e=!1;return e=BT().findIndex(n=>n.toastId===t)>-1,e};ke.update=(t,e={})=>{setTimeout(()=>{const n=yL(t);if(n){const i=_e(n),{content:r}=i,s={...i,...e,toastId:e.toastId||t,updateId:MT()},o=s.render||r;delete s.render,er(o,s.type,s)}},0)};ke.done=t=>{ke.update(t,{isLoading:!1,progress:1})};ke.promise=$L;function $L(t,{pending:e,error:n,success:i},r){var s,o,a;let c;const u={...r||{},autoClose:!1};e&&(c=Xh(e)?ke.loading(e,u):ke.loading(e.render,{...u,...e}));const h={autoClose:(s=r==null?void 0:r.autoClose)!=null?s:!0,closeOnClick:(o=r==null?void 0:r.closeOnClick)!=null?o:!0,closeButton:(a=r==null?void 0:r.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},f=(m,C,b)=>{if(C==null){ke.remove(c);return}const N={type:m,...h,...r,data:b},q=Xh(C)?{render:C}:C;return c?ke.update(c,{...N,...q,isLoading:!1}):ke(q.render,{...N,...q,isLoading:!1}),b},g=ps(t)?t():t;return g.then(m=>{f("success",i,m)}).catch(m=>{f("error",n,m)}),g}ke.POSITION=Ia;ke.THEME=bs;ke.TYPE=jt;ke.TRANSITIONS=eL;const qL={install(t,e={}){vL.useHandler=e.useHandler||(()=>{}),jL(e)}};typeof window<"u"&&(window.Vue3Toastify=qL);function jL(t={}){const e=Gc(OT,t);TL(e)}const GL={class:"auth-form-container"},WL={class:"auth-form__inputs"},HL={key:0,class:"auth-form__error"},zL=Gt({__name:"BaseForm",props:{title:{},onSubmit:{type:Function},errorMessage:{}},setup(t){return(e,n)=>(et(),bt("div",GL,[ie("form",{class:"auth-form",onSubmit:n[0]||(n[0]=V2((...i)=>e.onSubmit&&e.onSubmit(...i),["prevent"]))},[ie("div",WL,[ie("h1",null,Li(e.title),1),Qu(e.$slots,"inputs",{},void 0),e.errorMessage?(et(),bt("p",HL,Li(e.errorMessage),1)):Cl("",!0)]),Qu(e.$slots,"footer",{class:"auth-form__footer"},void 0)],32)]))}}),$T=_i(zL,[["__scopeId","data-v-11357815"]]),KL={class:"auth-form__email"},QL={class:"auth-form__password"},YL={class:"auth-form__infoText"},XL=Gt({__name:"AuthorizationForm",setup(t){const e=Je(""),n=Je(""),i=Je("");function r(){const s=Us();GR(s,e.value,n.value).then(()=>{Sr.push("/mini-paint/")}).catch(()=>{ke.error("Incorrect email or password",{autoClose:3e3,position:"bottom-left",theme:"colored"})})}return(s,o)=>{const a=pd("router-link");return et(),qo($T,{title:"Sign in",onSubmit:r,errorMessage:i.value},{inputs:oi(()=>[ie("div",KL,[o[2]||(o[2]=ie("p",{class:"auth-form__nameOfInput"},"Email",-1)),wo(ie("input",{type:"email",class:"auth-form__input",placeholder:"Enter email","onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c)},null,512),[[Ao,e.value]])]),ie("div",QL,[o[3]||(o[3]=ie("p",{class:"auth-form__nameOfInput"},"Password",-1)),wo(ie("input",{type:"password",class:"auth-form__input",placeholder:"Enter password","onUpdate:modelValue":o[1]||(o[1]=c=>n.value=c)},null,512),[[Ao,n.value]])])]),footer:oi(()=>[le(Nn,{"button-text":"Sign in","button-width":100,"button-padding":15,class:"auth-form__button"}),ie("p",YL,[o[5]||(o[5]=yr(" Don't have an account? ")),le(a,{to:"/mini-paint/signup",class:"auth-form__link"},{default:oi(()=>o[4]||(o[4]=[yr("Sign up ")])),_:1})])]),_:1},8,["errorMessage"])}}}),JL=_i(XL,[["__scopeId","data-v-5bff8c00"]]),ZL={class:"register-form__email"},eM={class:"register-form__password"},tM={class:"register-form__password"},nM={class:"register-form__infoText"},iM=Gt({__name:"RegistrationForm",setup(t){const e=Je(""),n=Je(""),i=Je(""),r=Je();function s(){if(n.value!==i.value){r.value="Passwords miss match";return}jR(Us(),e.value,n.value).then(()=>{Sr.push("/mini-paint")}).catch(o=>{o.code==="auth/invalid-email"?ke.error("Incorrect email.",{autoClose:3e3,position:"bottom-left",theme:"colored"}):o.code==="auth/weak-password"?ke.error("Password should be at least 6 characters.",{autoClose:3e3,position:"bottom-left",theme:"colored"}):o.code==="auth/email-already-in-use"?ke.error("This email is already in use",{autoClose:3e3,position:"bottom-left",theme:"colored"}):ke.error("An unexpected error occurred.",{autoClose:3e3,position:"bottom-left",theme:"colored"})})}return(o,a)=>{const c=pd("router-link");return et(),qo($T,{title:"Sign up",onSubmit:s,errorMessage:r.value},{inputs:oi(()=>[ie("div",ZL,[a[3]||(a[3]=ie("p",{class:"register-form__nameOfInput"},"Email",-1)),wo(ie("input",{type:"email",class:"register-form__input",placeholder:"Enter email","onUpdate:modelValue":a[0]||(a[0]=u=>e.value=u)},null,512),[[Ao,e.value]])]),ie("div",eM,[a[4]||(a[4]=ie("p",{class:"register-form__nameOfInput"},"Password",-1)),wo(ie("input",{type:"password",class:"register-form__input",placeholder:"Enter password","onUpdate:modelValue":a[1]||(a[1]=u=>n.value=u)},null,512),[[Ao,n.value]])]),ie("div",tM,[a[5]||(a[5]=ie("p",{class:"register-form__nameOfInput"},"Confirm password",-1)),wo(ie("input",{type:"password",class:"register-form__input",placeholder:"Enter password","onUpdate:modelValue":a[2]||(a[2]=u=>i.value=u)},null,512),[[Ao,i.value]])])]),footer:oi(()=>[le(Nn,{"button-text":"Sing up","button-width":100,"button-padding":15,class:"register-form__button"}),ie("p",nM,[a[7]||(a[7]=yr(" Already have an account? ")),le(c,{to:"/mini-paint/login",class:"register-form__link"},{default:oi(()=>a[6]||(a[6]=[yr("Sing in")])),_:1})])]),_:1},8,["errorMessage"])}}}),rM=_i(iM,[["__scopeId","data-v-e0ee223c"]]),sM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-2%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%20fill='%23ffffff'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3ebrush%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-101.000000,%20-156.000000)'%20fill='%23ffffff'%3e%3cpath%20d='M132.132,156.827%20C130.975,155.685%20129.099,155.685%20127.942,156.827%20L115.336,169.277%20L119.499,173.44%20L132.132,160.964%20C133.289,159.821%20133.289,157.969%20132.132,156.827%20L132.132,156.827%20Z%20M112.461,180.385%20C111.477,181.298%20107.08,183.333%20104.491,181.36%20C104.491,181.36%20105.392,180.657%20106.074,179.246%20C107.703,174.919%20111.763,175.56%20111.763,175.56%20L113.159,176.938%20C113.173,176.952%20114.202,178.771%20112.461,180.385%20L112.461,180.385%20Z%20M113.913,170.683%20L110.764,173.788%20C108.661,173.74%20105.748,174.485%20104.491,178.603%20C103.53,180.781%20101,180.671%20101,180.671%20C106.253,186.498%20112.444,183.196%20113.857,181.764%20C115.1,180.506%20115.279,178.966%20115.146,177.734%20L118.076,174.846%20L113.913,170.683%20L113.913,170.683%20Z'%20id='brush'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",oM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z'/%3e%3c/g%3e%3c/svg%3e",aM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3crect%20x='1'%20y='1'%20width='14'%20height='14'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",lM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cg%3e%3cpath%20d='M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",cM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20enable-background='new%200%200%2024%2024'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M21.9,11.5l-4.5-7.8c-0.2-0.3-0.5-0.5-0.9-0.5h-9c-0.4,0-0.7,0.2-0.9,0.5l-4.5,7.8c-0.2,0.3-0.2,0.7,0,1l4.5,7.8c0.2,0.3,0.5,0.5,0.9,0.5h9c0.4,0,0.7-0.2,0.9-0.5l4.5-7.8C22,12.2,22,11.8,21.9,11.5z'/%3e%3c/g%3e%3c/svg%3e",uM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3estar%3c/title%3e%3cpath%20d='M3.488%2013.184l6.272%206.112-1.472%208.608%207.712-4.064%207.712%204.064-1.472-8.608%206.272-6.112-8.64-1.248-3.872-7.808-3.872%207.808z'/%3e%3c/g%3e%3c/svg%3e",hM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%2056%2056'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M%2011.6406%2014.6641%20L%2013.1406%2048.9062%20C%2013.2578%2051.8359%2015.0156%2053.4297%2017.8984%2053.4297%20L%2038.125%2053.4297%20C%2041.0078%2053.4297%2042.7656%2051.8359%2042.8828%2048.9062%20L%2044.3828%2014.6641%20L%2047.0781%2014.6641%20C%2048.0391%2014.6641%2048.8125%2013.8672%2048.8125%2012.9063%20C%2048.8125%2011.9453%2048.0391%2011.1250%2047.0781%2011.1250%20L%2037.4453%2011.1250%20L%2037.4453%207.7734%20C%2037.4453%204.5625%2035.3125%202.5703%2032.2891%202.5703%20L%2023.6640%202.5703%20C%2020.6406%202.5703%2018.5313%204.5625%2018.5313%207.7734%20L%2018.5313%2011.1250%20L%208.9453%2011.1250%20C%208.0078%2011.1250%207.1875%2011.9453%207.1875%2012.9063%20C%207.1875%2013.8672%208.0078%2014.6641%208.9453%2014.6641%20Z%20M%2021.7187%207.7734%20C%2021.7187%206.4375%2022.7031%205.5000%2024.1094%205.5000%20L%2031.8672%205.5000%20C%2033.2969%205.5000%2034.2813%206.4375%2034.2813%207.7734%20L%2034.2813%2011.1250%20L%2021.7187%2011.1250%20Z%20M%2035.6172%2048.6484%20C%2034.7031%2048.6484%2034.0703%2047.8516%2034.0938%2046.8906%20L%2035.0547%2019.7031%20C%2035.1016%2018.7656%2035.7813%2017.9922%2036.625%2017.9922%20C%2037.4922%2017.9922%2038.1953%2018.7422%2038.1719%2019.7031%20L%2037.1172%2046.9141%20C%2037.0938%2047.9219%2036.4844%2048.6484%2035.6172%2048.6484%20Z%20M%2020.4062%2048.6484%20C%2019.5391%2048.6484%2018.9297%2047.9219%2018.9062%2046.9141%20L%2017.8516%2019.7031%20C%2017.8281%2018.7187%2018.5313%2017.9922%2019.3984%2017.9922%20C%2020.2422%2017.9922%2020.9453%2018.7656%2020.9687%2019.7031%20L%2021.9297%2046.8906%20C%2021.9531%2047.8516%2021.3203%2048.6484%2020.4062%2048.6484%20Z%20M%2029.6172%2046.8906%20C%2029.6172%2047.8516%2028.8672%2048.6484%2028.0234%2048.6484%20C%2027.1797%2048.6484%2026.4297%2047.8516%2026.4297%2046.8906%20L%2026.4297%2019.7031%20C%2026.4297%2018.7656%2027.1797%2017.9922%2028.0234%2017.9922%20C%2028.8672%2017.9922%2029.6406%2018.7656%2029.6406%2019.7031%20Z'/%3e%3c/g%3e%3c/svg%3e",dM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.1716%201C18.702%201%2019.2107%201.21071%2019.5858%201.58579L22.4142%204.41421C22.7893%204.78929%2023%205.29799%2023%205.82843V20C23%2021.6569%2021.6569%2023%2020%2023H4C2.34315%2023%201%2021.6569%201%2020V4C1%202.34315%202.34315%201%204%201H18.1716ZM4%203C3.44772%203%203%203.44772%203%204V20C3%2020.5523%203.44772%2021%204%2021L5%2021L5%2015C5%2013.3431%206.34315%2012%208%2012L16%2012C17.6569%2012%2019%2013.3431%2019%2015V21H20C20.5523%2021%2021%2020.5523%2021%2020V6.82843C21%206.29799%2020.7893%205.78929%2020.4142%205.41421L18.5858%203.58579C18.2107%203.21071%2017.702%203%2017.1716%203H17V5C17%206.65685%2015.6569%208%2014%208H10C8.34315%208%207%206.65685%207%205V3H4ZM17%2021V15C17%2014.4477%2016.5523%2014%2016%2014L8%2014C7.44772%2014%207%2014.4477%207%2015L7%2021L17%2021ZM9%203H15V5C15%205.55228%2014.5523%206%2014%206H10C9.44772%206%209%205.55228%209%205V3Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",fM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20id='SVGRoot'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns:svg='http://www.w3.org/2000/svg'%20fill='%23ffffff'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cdefs%20id='defs2'/%3e%3cg%20id='layer1'%3e%3cpath%20d='M%209%202%20A%201.0001%201.0001%200%200%200%208%203%20L%208%208%20A%201%201%200%200%200%209%209%20A%201%201%200%200%200%2010%208%20L%2010%204%20L%2018%204%20L%2018%2020%20L%2010%2020%20L%2010%2016%20A%201%201%200%200%200%209%2015%20A%201%201%200%200%200%208%2016%20L%208%2021%20A%201.0001%201.0001%200%200%200%209%2022%20L%2019%2022%20A%201.0001%201.0001%200%200%200%2020%2021%20L%2020%203%20A%201.0001%201.0001%200%200%200%2019%202%20L%209%202%20z%20M%207.0292969%209%20A%201%201%200%200%200%206.2929688%209.2929688%20L%204.3125%2011.273438%20L%204.2929688%2011.292969%20A%201.0001%201.0001%200%200%200%204.2832031%2011.302734%20A%201%201%200%200%200%204.2363281%2011.355469%20A%201%201%200%200%200%204.1855469%2011.421875%20A%201%201%200%200%200%204.1464844%2011.482422%20A%201.0001%201.0001%200%200%200%204.1289062%2011.509766%20A%201%201%200%200%200%204.0996094%2011.566406%20A%201%201%200%200%200%204.0683594%2011.638672%20A%201.0001%201.0001%200%200%200%204.0644531%2011.650391%20A%201%201%200%200%200%204.0410156%2011.714844%20A%201.0001%201.0001%200%200%200%204.0332031%2011.75%20A%201%201%200%200%200%204.0234375%2011.791016%20A%201.0001%201.0001%200%200%200%204.015625%2011.828125%20A%201%201%200%200%200%204.0078125%2011.871094%20A%201.0001%201.0001%200%200%200%204.0019531%2011.943359%20A%201.0001%201.0001%200%200%200%204%2011.988281%20A%201%201%200%200%200%204%2012%20A%201%201%200%200%200%204.0019531%2012.029297%20A%201.0001%201.0001%200%200%200%204.0039062%2012.066406%20A%201%201%200%200%200%204.0078125%2012.117188%20A%201.0001%201.0001%200%200%200%204.0117188%2012.146484%20A%201%201%200%200%200%204.0253906%2012.222656%20A%201%201%200%200%200%204.0410156%2012.28125%20A%201.0001%201.0001%200%200%200%204.0546875%2012.324219%20A%201%201%200%200%200%204.0585938%2012.337891%20A%201.0001%201.0001%200%200%200%204.0878906%2012.408203%20A%201.0001%201.0001%200%200%200%204.1210938%2012.474609%20A%201%201%200%200%200%204.1347656%2012.501953%20A%201.0001%201.0001%200%200%200%204.1640625%2012.546875%20A%201%201%200%200%200%204.1777344%2012.568359%20A%201.0001%201.0001%200%200%200%204.2011719%2012.601562%20A%201%201%200%200%200%204.21875%2012.623047%20A%201.0001%201.0001%200%200%200%204.265625%2012.677734%20A%201%201%200%200%200%204.2851562%2012.699219%20A%201.0001%201.0001%200%200%200%204.2929688%2012.707031%20A%201%201%200%200%200%204.3339844%2012.746094%20L%206.2929688%2014.707031%20A%201%201%200%200%200%207.7070312%2014.707031%20A%201%201%200%200%200%207.7070312%2013.292969%20L%207.4140625%2013%20L%2014%2013%20A%201%201%200%200%200%2015%2012%20A%201%201%200%200%200%2014%2011%20L%207.4140625%2011%20L%207.7070312%2010.707031%20A%201%201%200%200%200%207.7070312%209.2929688%20A%201%201%200%200%200%207.0292969%209%20z%20'%20id='path6945'%20style='color:%23ffffff;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23ffffff;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:%23ffffff;solid-opacity:1;vector-effect:none;fill:%23ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;stop-color:%23ffffff;stop-opacity:1;opacity:1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",pM=["type","value"],gM=Gt({__name:"BaseInput",props:{inputMaxWidth:{},inputType:{},modelValue:{}},emits:["update:modelValue"],setup(t,{emit:e}){const n=e,i=r=>{const s=r.target;n("update:modelValue",s.value)};return(r,s)=>(et(),bt("input",{type:r.inputType,style:pr({maxWidth:r.inputMaxWidth+"px"}),value:r.modelValue,onInput:i},null,44,pM))}}),Jh=_i(gM,[["__scopeId","data-v-e0bdff6b"]]),mM={key:0,class:"onboarding-overlay"},_M={class:"onboarding-buttons"},yM=Gt({__name:"Onboarding",props:{steps:{},page:{}},setup(t){const e=t,n=Je(!1),i=Je(0),r=Je({}),s=Je({}),o=Je(null),a=async()=>{await Ps();const m=e.steps[i.value],C=document.querySelector(m.element);if(C){const b=C.getBoundingClientRect();switch(r.value={top:`${b.top+window.scrollY}px`,left:`${b.left+window.scrollX}px`,width:`${b.width}px`,height:`${b.height}px`},s.value={top:`${b.bottom+window.scrollY}px`,left:`${b.left+window.scrollX}px`},m.tooltipPosition){case"top":s.value={top:`${b.top+window.scrollY-100}px`,left:`${b.left+window.scrollX+b.width/2-100}px`};break;case"left":s.value={top:`${b.top+window.scrollY+b.height/2-40}px`,left:`${b.left+window.scrollX-220}px`};break;case"right":s.value={top:`${b.top+window.scrollY+b.height/2-40}px`,left:`${b.right+window.scrollX+10}px`};break;default:s.value={top:`${b.bottom+window.scrollY+5}px`,left:`${b.left+window.scrollX+b.width/2-100}px`}}}},c=m=>{const C=`onboardingCompleted_${m}_${e.page}`,b=localStorage.getItem(C);n.value=!b},u=()=>{i.value<e.steps.length-1?(i.value++,a()):g()},h=()=>{i.value>0&&(i.value--,a())},f=()=>{g()},g=()=>{if(o.value){const m=`onboardingCompleted_${o.value}_${e.page}`;localStorage.setItem(m,"true"),e.page==="main"&&localStorage.setItem("onboardingStep","editor"),n.value=!1}};return Rr(()=>{const m=Us();Wv(m,C=>{C&&C.email&&(o.value=C.email,c(C.email),n.value&&a())})}),(m,C)=>n.value?(et(),bt("div",mM,[ie("div",{class:"onboarding-highlight",style:pr(r.value)},null,4),ie("div",{class:"onboarding-tooltip",style:pr(s.value)},[ie("p",null,Li(m.steps[i.value].content),1),ie("div",_M,[le(Nn,{"button-width":50,"button-padding":5,"button-text":"Back",onClick:h,disabled:i.value===0},null,8,["disabled"]),le(Nn,{"button-width":50,"button-padding":5,"button-text":"Next",onClick:u,disabled:i.value===m.steps.length-1},null,8,["disabled"]),le(Nn,{"button-width":50,"button-padding":5,"button-text":"Skip",onClick:f})])],4)])):Cl("",!0)}}),qT=_i(yM,[["__scopeId","data-v-838fbc73"]]),vM=[{element:".brush",content:"Brush.",tooltipPosition:"right"},{element:".line",content:"Draws a straight line.",tooltipPosition:"right"},{element:".square",content:"Draws a square.",tooltipPosition:"right"},{element:".circle",content:"Draws a circle.",tooltipPosition:"right"},{element:".polygon",content:"Draws a polygon.",tooltipPosition:"right"},{element:".star",content:"Draws a star.",tooltipPosition:"right"},{element:".editor__figure-thickness",content:"Choose the thickness of the figure.",tooltipPosition:"right"},{element:".editor__color",content:"Choose the color of the figure.",tooltipPosition:"right"},{element:".clean",content:"Clean a sheet.",tooltipPosition:"right"},{element:".save",content:"Save to gallery.",tooltipPosition:"right"},{element:".back",content:"Return to main page.",tooltipPosition:"right"}],EM=[{element:".create-button",content:"Click to create an image.",tooltipPosition:"bottom"},{element:".dropdown",content:"Filter images by user email.",tooltipPosition:"bottom"},{element:".signout-button",content:"Log out button.",tooltipPosition:"left"},{element:".menu__pagination",content:"Pagination buttons.",tooltipPosition:"top"},{element:".change-theme-button",content:"Change application theme.",tooltipPosition:"right"}];/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var jT="store";function GT(t){return t===void 0&&(t=null),Mn(t!==null?t:jT)}function js(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function TM(t){return t!==null&&typeof t=="object"}function wM(t){return t&&typeof t.then=="function"}function IM(t,e){return function(){return t(e)}}function WT(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function HT(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Hc(t,n,[],t._modules.root,!0),kf(t,n,e)}function kf(t,e,n){var i=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,s={};js(r,function(o,a){s[a]=IM(o,t),Object.defineProperty(t.getters,a,{get:function(){return s[a]()},enumerable:!0})}),t._state=fn({data:e}),t.strict&&RM(t),i&&n&&t._withCommit(function(){i.data=null})}function Hc(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=Nf(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=i.state})}var u=i.context=CM(t,o,n);i.forEachMutation(function(h,f){var g=o+f;AM(t,g,h,u)}),i.forEachAction(function(h,f){var g=h.root?f:o+f,m=h.handler||h;SM(t,g,m,u)}),i.forEachGetter(function(h,f){var g=o+f;bM(t,g,h,u)}),i.forEachChild(function(h,f){Hc(t,e,n.concat(f),h,r)})}function CM(t,e,n){var i=e==="",r={dispatch:i?t.dispatch:function(s,o,a){var c=sc(s,o,a),u=c.payload,h=c.options,f=c.type;return(!h||!h.root)&&(f=e+f),t.dispatch(f,u)},commit:i?t.commit:function(s,o,a){var c=sc(s,o,a),u=c.payload,h=c.options,f=c.type;(!h||!h.root)&&(f=e+f),t.commit(f,u,h)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return zT(t,e)}},state:{get:function(){return Nf(t.state,n)}}}),r}function zT(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function AM(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,i.state,o)})}function SM(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},o);return wM(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function bM(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(i.state,i.getters,s.state,s.getters)})}function RM(t){as(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Nf(t,e){return e.reduce(function(n,i){return n[i]},t)}function sc(t,e,n){return TM(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var PM="vuex bindings",R_="vuex:mutations",qu="vuex:actions",jr="vuex",kM=0;function NM(t,e){YD({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[PM]},function(n){n.addTimelineLayer({id:R_,label:"Vuex Mutations",color:P_}),n.addTimelineLayer({id:qu,label:"Vuex Actions",color:P_}),n.addInspector({id:jr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(i){if(i.app===t&&i.inspectorId===jr)if(i.filter){var r=[];XT(r,e._modules.root,i.filter,""),i.rootNodes=r}else i.rootNodes=[YT(e._modules.root,"")]}),n.on.getInspectorState(function(i){if(i.app===t&&i.inspectorId===jr){var r=i.nodeId;zT(e,r),i.state=xM(MM(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(i){if(i.app===t&&i.inspectorId===jr){var r=i.nodeId,s=i.path;r!=="root"&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit(function(){i.set(e._state.data,s,i.state.value)})}}),e.subscribe(function(i,r){var s={};i.payload&&(s.payload=i.payload),s.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(jr),n.sendInspectorState(jr),n.addTimelineEvent({layerId:R_,event:{time:Date.now(),title:i.type,data:s}})}),e.subscribeAction({before:function(i,r){var s={};i.payload&&(s.payload=i.payload),i._id=kM++,i._time=Date.now(),s.state=r,n.addTimelineEvent({layerId:qu,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:s}})},after:function(i,r){var s={},o=Date.now()-i._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(s.payload=i.payload),s.state=r,n.addTimelineEvent({layerId:qu,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:s}})}})})}var P_=8702998,OM=6710886,DM=16777215,KT={label:"namespaced",textColor:DM,backgroundColor:OM};function QT(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function YT(t,e){return{id:e||"root",label:QT(e),tags:t.namespaced?[KT]:[],children:Object.keys(t._children).map(function(n){return YT(t._children[n],e+n+"/")})}}function XT(t,e,n,i){i.includes(n)&&t.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[KT]:[]}),Object.keys(e._children).forEach(function(r){XT(t,e._children[r],n,i+r+"/")})}function xM(t,e,n){e=n==="root"?e:e[n];var i=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(i.length){var s=LM(e);r.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?QT(o):o,editable:!1,value:Zh(function(){return s[o]})}})}return r}function LM(t){var e={};return Object.keys(t).forEach(function(n){var i=n.split("/");if(i.length>1){var r=e,s=i.pop();i.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[s]=Zh(function(){return t[n]})}else e[n]=Zh(function(){return t[n]})}),e}function MM(t,e){var n=e.split("/").filter(function(i){return i});return n.reduce(function(i,r,s){var o=i[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Zh(t){try{return t()}catch(e){return e}}var Sn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},JT={namespaced:{configurable:!0}};JT.namespaced.get=function(){return!!this._rawModule.namespaced};Sn.prototype.addChild=function(e,n){this._children[e]=n};Sn.prototype.removeChild=function(e){delete this._children[e]};Sn.prototype.getChild=function(e){return this._children[e]};Sn.prototype.hasChild=function(e){return e in this._children};Sn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Sn.prototype.forEachChild=function(e){js(this._children,e)};Sn.prototype.forEachGetter=function(e){this._rawModule.getters&&js(this._rawModule.getters,e)};Sn.prototype.forEachAction=function(e){this._rawModule.actions&&js(this._rawModule.actions,e)};Sn.prototype.forEachMutation=function(e){this._rawModule.mutations&&js(this._rawModule.mutations,e)};Object.defineProperties(Sn.prototype,JT);var Mr=function(e){this.register([],e,!1)};Mr.prototype.get=function(e){return e.reduce(function(n,i){return n.getChild(i)},this.root)};Mr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(i,r){return n=n.getChild(r),i+(n.namespaced?r+"/":"")},"")};Mr.prototype.update=function(e){ZT([],this.root,e)};Mr.prototype.register=function(e,n,i){var r=this;i===void 0&&(i=!0);var s=new Sn(n,i);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&js(n.modules,function(a,c){r.register(e.concat(c),a,i)})};Mr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1],r=n.getChild(i);r&&r.runtime&&n.removeChild(i)};Mr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1];return n?n.hasChild(i):!1};function ZT(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return;ZT(t.concat(i),e.getChild(i),n.modules[i])}}function VM(t){return new Kt(t)}var Kt=function(e){var n=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var r=e.strict;r===void 0&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Mr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(g,m){return c.call(o,g,m)},this.commit=function(g,m,C){return u.call(o,g,m,C)},this.strict=r;var h=this._modules.root.state;Hc(this,h,[],this._modules.root),kf(this,h),i.forEach(function(f){return f(n)})},Of={state:{configurable:!0}};Kt.prototype.install=function(e,n){e.provide(n||jT,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&NM(e,this)};Of.state.get=function(){return this._state.data};Of.state.set=function(t){};Kt.prototype.commit=function(e,n,i){var r=this,s=sc(e,n,i),o=s.type,a=s.payload,c={type:o,payload:a},u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(h){return h(c,r.state)}))};Kt.prototype.dispatch=function(e,n){var i=this,r=sc(e,n),s=r.type,o=r.payload,a={type:s,payload:o},c=this._actions[s];if(c){try{this._actionSubscribers.slice().filter(function(h){return h.before}).forEach(function(h){return h.before(a,i.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(h){return h(o)})):c[0](o);return new Promise(function(h,f){u.then(function(g){try{i._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(a,i.state)})}catch{}h(g)},function(g){try{i._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(a,i.state,g)})}catch{}f(g)})})}};Kt.prototype.subscribe=function(e,n){return WT(e,this._subscribers,n)};Kt.prototype.subscribeAction=function(e,n){var i=typeof e=="function"?{before:e}:e;return WT(i,this._actionSubscribers,n)};Kt.prototype.watch=function(e,n,i){var r=this;return as(function(){return e(r.state,r.getters)},n,Object.assign({},i))};Kt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Kt.prototype.registerModule=function(e,n,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Hc(this,this.state,e,this._modules.get(e),i.preserveState),kf(this,this.state)};Kt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=Nf(n.state,e.slice(0,-1));delete i[e[e.length-1]]}),HT(this)};Kt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Kt.prototype.hotUpdate=function(e){this._modules.update(e),HT(this,!0)};Kt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Kt.prototype,Of);const FM={class:"editor"},UM={class:"editor__toolbar"},BM={class:"editor__field"},$M=Gt({__name:"Editor",setup(t){const e=Je(null),n=Je(null);let i=!1;const r=GT();let s=0,o=0,a=0,c=0;const h=Us().currentUser;Rr(()=>{q();const D=e.value;n.value=D.getContext("2d"),D.addEventListener("mousedown",C),D.addEventListener("mousemove",b),D.addEventListener("mouseup",N),window.addEventListener("resize",q)}),u0(()=>{window.removeEventListener("resize",q)});let f=null;function g(D){r.commit("setTool",D)}function m(){n.value&&n.value.clearRect(0,0,e.value.width,e.value.height)}function C(D){const j=e.value,ee=j.getBoundingClientRect();s=D.clientX-ee.left,o=D.clientY-ee.top,i=!0,n.value&&(n.value.lineWidth=r.state.lineWidth,n.value.strokeStyle=r.state.color,r.state.tool==="brush"?(n.value.beginPath(),n.value.moveTo(s,o)):f=n.value.getImageData(0,0,j.width,j.height))}function b(D){if(!i)return;const ee=e.value.getBoundingClientRect();if(a=D.clientX-ee.left,c=D.clientY-ee.top,n.value)if(n.value.lineWidth=r.state.lineWidth,n.value.strokeStyle=r.state.color,r.state.tool==="brush")n.value.lineTo(a,c),n.value.stroke();else{f&&n.value.putImageData(f,0,0);let I=Math.sqrt((a-s)**2+(c-o)**2);switch(r.state.tool){case"line":n.value.beginPath(),n.value.moveTo(s,o),n.value.lineTo(a,c),n.value.stroke();break;case"circle":n.value.beginPath(),n.value.arc(s,o,I,0,Math.PI*2),n.value.stroke();break;case"square":n.value.beginPath(),n.value.moveTo(s,o),n.value.lineTo(a,o),n.value.lineTo(a,c),n.value.lineTo(s,c),n.value.closePath(),n.value.stroke();break;case"polygon":const y=6,w=2*Math.PI/y;n.value.beginPath();for(let E=0;E<=y;E++){const Ze=E*w,lt=s+I*Math.cos(Ze),Be=o+I*Math.sin(Ze);E===0?n.value.moveTo(lt,Be):n.value.lineTo(lt,Be)}n.value.closePath(),n.value.stroke();break;case"star":const A=5,S=I,P=I/2;n.value.beginPath();for(let E=0;E<A*2;E++){const Ze=E%2===0?S:P,lt=Math.PI/A*E,Be=s+Ze*Math.cos(lt),ye=o+Ze*Math.sin(lt);E===0?n.value.moveTo(Be,ye):n.value.lineTo(Be,ye)}n.value.closePath(),n.value.stroke();break}}}function N(){i=!1,r.state.tool!=="brush"&&f&&n.value&&(f=n.value.getImageData(0,0,e.value.width,e.value.height))}const q=()=>{const D=e.value,j=document.querySelector(".editor__field"),ee=j.offsetWidth,I=j.offsetHeight;D.width=ee,D.height=I,n.value&&(n.value.lineWidth=r.state.lineWidth,n.value.strokeStyle=r.state.color)},F=async()=>{if(!e.value)return;const D=e.value.toDataURL("image/png");try{await Wb(lv(tw,"canvas_images"),{data:D,timestamp:Date.now(),email:h==null?void 0:h.email}),ke.success("Image saved successfully!",{autoClose:3e3,position:"bottom-left",theme:"colored"})}catch{}},$=()=>{Sr.push("/mini-paint/")};return(D,j)=>(et(),bt(dt,null,[le(qT,{page:"editor",steps:Ye(vM)},null,8,["steps"]),ie("div",FM,[ie("div",UM,[ie("button",{onClick:j[0]||(j[0]=ee=>g("brush")),class:"editor__button brush"},j[8]||(j[8]=[ie("img",{src:sM,alt:"brush",class:"editor__icon"},null,-1)])),ie("button",{onClick:j[1]||(j[1]=ee=>g("line")),class:"editor__button line"},j[9]||(j[9]=[ie("img",{src:oM,alt:"line",class:"editor__icon"},null,-1)])),ie("button",{onClick:j[2]||(j[2]=ee=>g("square")),class:"editor__button square"},j[10]||(j[10]=[ie("img",{src:aM,alt:"triangle",class:"editor__icon"},null,-1)])),ie("button",{onClick:j[3]||(j[3]=ee=>g("circle")),class:"editor__button circle"},j[11]||(j[11]=[ie("img",{src:lM,alt:"circle",class:"editor__icon"},null,-1)])),ie("button",{onClick:j[4]||(j[4]=ee=>g("polygon")),class:"editor__button polygon"},j[12]||(j[12]=[ie("img",{src:cM,alt:"polygon",class:"editor__icon"},null,-1)])),ie("button",{onClick:j[5]||(j[5]=ee=>g("star")),class:"editor__button star"},j[13]||(j[13]=[ie("img",{src:uM,alt:"star",class:"editor__icon"},null,-1)])),ie("label",null,[j[14]||(j[14]=yr(" Width: ")),le(Jh,{"input-type":"number","input-max-width":90,modelValue:Ye(r).state.lineWidth,"onUpdate:modelValue":j[6]||(j[6]=ee=>Ye(r).state.lineWidth=ee),min:"1",max:"20",class:"editor__figure-thickness"},null,8,["modelValue"])]),le(Jh,{"input-type":"color","input-max-width":90,modelValue:Ye(r).state.color,"onUpdate:modelValue":j[7]||(j[7]=ee=>Ye(r).state.color=ee),class:"editor__color"},null,8,["modelValue"]),ie("button",{onClick:m,class:"editor__button clean"},j[15]||(j[15]=[ie("img",{src:hM,alt:"clean",class:"editor__icon"},null,-1)])),ie("button",{class:"editor__button save",onClick:F},j[16]||(j[16]=[ie("img",{src:dM,alt:"save",class:"editor__icon"},null,-1)])),ie("button",{class:"editor__button back",onClick:$},j[17]||(j[17]=[ie("img",{src:fM,alt:"back",class:"editor__icon back"},null,-1)]))]),ie("div",BM,[ie("canvas",{ref_key:"canvas",ref:e,class:"editor__canvas"},null,512)])])],64))}}),qM=_i($M,[["__scopeId","data-v-f821f835"]]),jM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.7071%204.29289C12.0976%204.68342%2012.0976%205.31658%2011.7071%205.70711L6.41421%2011H20C20.5523%2011%2021%2011.4477%2021%2012C21%2012.5523%2020.5523%2013%2020%2013H6.41421L11.7071%2018.2929C12.0976%2018.6834%2012.0976%2019.3166%2011.7071%2019.7071C11.3166%2020.0976%2010.6834%2020.0976%2010.2929%2019.7071L3.29289%2012.7071C3.10536%2012.5196%203%2012.2652%203%2012C3%2011.7348%203.10536%2011.4804%203.29289%2011.2929L10.2929%204.29289C10.6834%203.90237%2011.3166%203.90237%2011.7071%204.29289Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",GM="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%20transform='rotate(180)'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.7071%204.29289C12.0976%204.68342%2012.0976%205.31658%2011.7071%205.70711L6.41421%2011H20C20.5523%2011%2021%2011.4477%2021%2012C21%2012.5523%2020.5523%2013%2020%2013H6.41421L11.7071%2018.2929C12.0976%2018.6834%2012.0976%2019.3166%2011.7071%2019.7071C11.3166%2020.0976%2010.6834%2020.0976%2010.2929%2019.7071L3.29289%2012.7071C3.10536%2012.5196%203%2012.2652%203%2012C3%2011.7348%203.10536%2011.4804%203.29289%2011.2929L10.2929%204.29289C10.6834%203.90237%2011.3166%203.90237%2011.7071%204.29289Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",WM={class:"menu"},HM={class:"menu__header"},zM={class:"dropdown"},KM={key:0,class:"dropdown__list"},QM=["onClick"],YM={class:"menu__gallery"},XM={key:0,class:"gallery"},JM=["src"],ZM={key:1},eV={key:0,class:"menu__pagination"},tV=Gt({__name:"HomePage",setup(t){const e=Je(!1),n=GT();Rr(async()=>{const h=Vb(lv(tw,"canvas_images")),f=await Gb(h),g=new Set,m=f.docs.map(C=>{const b=C.data();return b.email&&g.add(b.email),{data:b.data,email:b.email,timestamp:b.timestamp}}).sort((C,b)=>b.timestamp-C.timestamp);n.commit("setImages",m),n.commit("setUsersEmail",Array.from(g)),document.body.addEventListener("click",u)});const i=h=>{n.commit("setSelectedUser",h),e.value=!1,n.state.currentPage=1},r=()=>{n.commit("resetFilter")},s=()=>{const h=Us();zR(h).then(()=>{Sr.push("/mini-paint/login")})},o=()=>{Sr.push("/mini-paint/editor")},a=()=>{n.state.currentPage>1&&n.state.currentPage--},c=()=>{n.state.currentPage<n.getters.totalPages&&n.state.currentPage++},u=h=>{const f=document.querySelector(".dropdown");f&&!f.contains(h.target)&&(e.value=!1)};return(h,f)=>(et(),bt(dt,null,[le(qT,{steps:Ye(EM),page:"main"},null,8,["steps"]),ie("div",WM,[ie("div",HM,[f[2]||(f[2]=ie("h3",null,"Gallery of images",-1)),le(Nn,{"button-text":"Creat image","button-width":20,"button-padding":10,onClick:o,"button-border-color":"2px solid var(--white)",class:"create-button"}),ie("div",zM,[le(Jh,{modelValue:Ye(n).state.selectedUser,"onUpdate:modelValue":f[0]||(f[0]=g=>Ye(n).state.selectedUser=g),"input-type":"search","input-max-width":200,placeholder:"Search by user email...",onFocus:f[1]||(f[1]=g=>e.value=!0),onClick:r},null,8,["modelValue"]),e.value?(et(),bt("ul",KM,[(et(!0),bt(dt,null,Pp(Ye(n).state.usersEmail,g=>(et(),bt("li",{key:g,onClick:m=>i(g)},Li(g),9,QM))),128))])):Cl("",!0)]),le(Nn,{"button-text":"Sign out","button-width":20,"button-padding":10,onClick:s,"button-border-color":"2px solid var(--white)",class:"signout-button"})]),ie("div",YM,[Ye(n).getters.paginatedImages.length>0?(et(),bt("div",XM,[(et(!0),bt(dt,null,Pp(Ye(n).getters.paginatedImages,(g,m)=>(et(),bt("div",{key:m,class:"gallery__item"},[ie("img",{src:g.data,alt:"Canvas Image",class:"gallery__image"},null,8,JM)]))),128))])):(et(),bt("p",ZM,"No images available."))]),Ye(n).getters.totalPages?(et(),bt("div",eV,[le(Nn,{"button-width":10,"button-padding":5,onClick:a,disabled:Ye(n).state.currentPage===1},{default:oi(()=>f[3]||(f[3]=[ie("img",{src:jM,alt:"left",class:"menu__pagination-icon"},null,-1)])),_:1},8,["disabled"]),ie("span",null,"Page "+Li(Ye(n).state.currentPage)+" of "+Li(Ye(n).getters.totalPages),1),le(Nn,{"button-width":10,"button-padding":5,onClick:c,disabled:Ye(n).state.currentPage===Ye(n).getters.totalPages},{default:oi(()=>f[4]||(f[4]=[ie("img",{src:GM,alt:"right",class:"menu__pagination-icon"},null,-1)])),_:1},8,["disabled"])])):Cl("",!0)])],64))}}),nV=_i(tV,[["__scopeId","data-v-fcd58c1f"]]),iV=[{path:"/mini-paint/",name:"homePage",component:nV},{path:"/mini-paint/login",name:"login",component:JL},{path:"/mini-paint/signup",name:"signup",component:rM},{path:"/mini-paint/editor",name:"editor",component:qM}],Sr=Jx({history:bx(),routes:iV});Sr.beforeEach(async t=>{const e=Us(),n=await new Promise(r=>{Wv(e,s=>{r(!!s)})});let i;if(!t.path.includes("login")&&!t.path.includes("signup")?i=n:t.path.includes("login")||t.path.includes("signup")?i=!n:i=!0,!i)return n?"/mini-paint":"/mini-paint/login"});const rV=VM({state:{images:[],filteredImages:[],usersEmail:[],selectedUser:null,currentPage:1,itemsPerPage:6,color:"#000000",lineWidth:2,tool:"brush"},mutations:{setImages(t,e){t.images=e,t.filteredImages=[...e]},setUsersEmail(t,e){t.usersEmail=e},setSelectedUser(t,e){t.selectedUser=e,t.filteredImages=t.images.filter(n=>n.email===e)},resetFilter(t){t.selectedUser=null,t.filteredImages=[...t.images]},setTool(t,e){t.tool=e}},getters:{totalPages(t){return Math.ceil(t.filteredImages.length/t.itemsPerPage)},paginatedImages(t){const e=(t.currentPage-1)*t.itemsPerPage,n=e+t.itemsPerPage;return t.filteredImages.slice(e,n)}}}),ew=K0({apiKey:"AIzaSyALpqXLX7P0MLd-2fc7tqOeXZpQGBRX5jo",authDomain:"mini-paint-2fba1.firebaseapp.com",projectId:"mini-paint-2fba1",storageBucket:"mini-paint-2fba1.firebasestorage.app",messagingSenderId:"405984094812",appId:"1:405984094812:web:b4557bb894312e13da5499"}),tw=Cb(ew);x0(H2).use(rV).use(qD,{firebaseApp:ew}).use(Sr).mount("#app");
