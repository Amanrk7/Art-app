(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function tT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var fd={exports:{}},Oa={},pd={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function nT(){if(mg)return Ce;mg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),I=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=I&&U[I]||U["@@iterator"],typeof U=="function"?U:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,z={};function b(U,Q,pe){this.props=U,this.context=Q,this.refs=z,this.updater=pe||D}b.prototype.isReactComponent={},b.prototype.setState=function(U,Q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Q,"setState")},b.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function q(){}q.prototype=b.prototype;function K(U,Q,pe){this.props=U,this.context=Q,this.refs=z,this.updater=pe||D}var J=K.prototype=new q;J.constructor=K,V(J,b.prototype),J.isPureReactComponent=!0;var ie=Array.isArray,fe=Object.prototype.hasOwnProperty,de={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function T(U,Q,pe){var Re,Ae={},De=null,Me=null;if(Q!=null)for(Re in Q.ref!==void 0&&(Me=Q.ref),Q.key!==void 0&&(De=""+Q.key),Q)fe.call(Q,Re)&&!k.hasOwnProperty(Re)&&(Ae[Re]=Q[Re]);var Ue=arguments.length-2;if(Ue===1)Ae.children=pe;else if(1<Ue){for(var $e=Array(Ue),vt=0;vt<Ue;vt++)$e[vt]=arguments[vt+2];Ae.children=$e}if(U&&U.defaultProps)for(Re in Ue=U.defaultProps,Ue)Ae[Re]===void 0&&(Ae[Re]=Ue[Re]);return{$$typeof:n,type:U,key:De,ref:Me,props:Ae,_owner:de.current}}function A(U,Q){return{$$typeof:n,type:U.type,key:Q,ref:U.ref,props:U.props,_owner:U._owner}}function x(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function L(U){var Q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(pe){return Q[pe]})}var M=/\/+/g;function C(U,Q){return typeof U=="object"&&U!==null&&U.key!=null?L(""+U.key):Q.toString(36)}function it(U,Q,pe,Re,Ae){var De=typeof U;(De==="undefined"||De==="boolean")&&(U=null);var Me=!1;if(U===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(U.$$typeof){case n:case e:Me=!0}}if(Me)return Me=U,Ae=Ae(Me),U=Re===""?"."+C(Me,0):Re,ie(Ae)?(pe="",U!=null&&(pe=U.replace(M,"$&/")+"/"),it(Ae,Q,pe,"",function(vt){return vt})):Ae!=null&&(x(Ae)&&(Ae=A(Ae,pe+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(M,"$&/")+"/")+U)),Q.push(Ae)),1;if(Me=0,Re=Re===""?".":Re+":",ie(U))for(var Ue=0;Ue<U.length;Ue++){De=U[Ue];var $e=Re+C(De,Ue);Me+=it(De,Q,pe,$e,Ae)}else if($e=S(U),typeof $e=="function")for(U=$e.call(U),Ue=0;!(De=U.next()).done;)De=De.value,$e=Re+C(De,Ue++),Me+=it(De,Q,pe,$e,Ae);else if(De==="object")throw Q=String(U),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Me}function Dt(U,Q,pe){if(U==null)return U;var Re=[],Ae=0;return it(U,Re,"","",function(De){return Q.call(pe,De,Ae++)}),Re}function Ot(U){if(U._status===-1){var Q=U._result;Q=Q(),Q.then(function(pe){(U._status===0||U._status===-1)&&(U._status=1,U._result=pe)},function(pe){(U._status===0||U._status===-1)&&(U._status=2,U._result=pe)}),U._status===-1&&(U._status=0,U._result=Q)}if(U._status===1)return U._result.default;throw U._result}var Be={current:null},re={transition:null},me={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:re,ReactCurrentOwner:de};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Dt,forEach:function(U,Q,pe){Dt(U,function(){Q.apply(this,arguments)},pe)},count:function(U){var Q=0;return Dt(U,function(){Q++}),Q},toArray:function(U){return Dt(U,function(Q){return Q})||[]},only:function(U){if(!x(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Ce.Component=b,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=K,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=oe,Ce.cloneElement=function(U,Q,pe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Re=V({},U.props),Ae=U.key,De=U.ref,Me=U._owner;if(Q!=null){if(Q.ref!==void 0&&(De=Q.ref,Me=de.current),Q.key!==void 0&&(Ae=""+Q.key),U.type&&U.type.defaultProps)var Ue=U.type.defaultProps;for($e in Q)fe.call(Q,$e)&&!k.hasOwnProperty($e)&&(Re[$e]=Q[$e]===void 0&&Ue!==void 0?Ue[$e]:Q[$e])}var $e=arguments.length-2;if($e===1)Re.children=pe;else if(1<$e){Ue=Array($e);for(var vt=0;vt<$e;vt++)Ue[vt]=arguments[vt+2];Re.children=Ue}return{$$typeof:n,type:U.type,key:Ae,ref:De,props:Re,_owner:Me}},Ce.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Ce.createElement=T,Ce.createFactory=function(U){var Q=T.bind(null,U);return Q.type=U,Q},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(U){return{$$typeof:f,render:U}},Ce.isValidElement=x,Ce.lazy=function(U){return{$$typeof:E,_payload:{_status:-1,_result:U},_init:Ot}},Ce.memo=function(U,Q){return{$$typeof:y,type:U,compare:Q===void 0?null:Q}},Ce.startTransition=function(U){var Q=re.transition;re.transition={};try{U()}finally{re.transition=Q}},Ce.unstable_act=oe,Ce.useCallback=function(U,Q){return Be.current.useCallback(U,Q)},Ce.useContext=function(U){return Be.current.useContext(U)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(U){return Be.current.useDeferredValue(U)},Ce.useEffect=function(U,Q){return Be.current.useEffect(U,Q)},Ce.useId=function(){return Be.current.useId()},Ce.useImperativeHandle=function(U,Q,pe){return Be.current.useImperativeHandle(U,Q,pe)},Ce.useInsertionEffect=function(U,Q){return Be.current.useInsertionEffect(U,Q)},Ce.useLayoutEffect=function(U,Q){return Be.current.useLayoutEffect(U,Q)},Ce.useMemo=function(U,Q){return Be.current.useMemo(U,Q)},Ce.useReducer=function(U,Q,pe){return Be.current.useReducer(U,Q,pe)},Ce.useRef=function(U){return Be.current.useRef(U)},Ce.useState=function(U){return Be.current.useState(U)},Ce.useSyncExternalStore=function(U,Q,pe){return Be.current.useSyncExternalStore(U,Q,pe)},Ce.useTransition=function(){return Be.current.useTransition()},Ce.version="18.3.1",Ce}var gg;function vc(){return gg||(gg=1,pd.exports=nT()),pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function rT(){if(yg)return Oa;yg=1;var n=vc(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,p,y){var E,I={},S=null,D=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(D=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(I[E]=p[E]);if(f&&f.defaultProps)for(E in p=f.defaultProps,p)I[E]===void 0&&(I[E]=p[E]);return{$$typeof:e,type:f,key:S,ref:D,props:I,_owner:o.current}}return Oa.Fragment=t,Oa.jsx=h,Oa.jsxs=h,Oa}var _g;function iT(){return _g||(_g=1,fd.exports=rT()),fd.exports}var N=iT(),$=vc();const e_=tT($);var Du={},md={exports:{}},tn={},gd={exports:{}},yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function sT(){return vg||(vg=1,function(n){function e(re,me){var oe=re.length;re.push(me);e:for(;0<oe;){var U=oe-1>>>1,Q=re[U];if(0<o(Q,me))re[U]=me,re[oe]=Q,oe=U;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var me=re[0],oe=re.pop();if(oe!==me){re[0]=oe;e:for(var U=0,Q=re.length,pe=Q>>>1;U<pe;){var Re=2*(U+1)-1,Ae=re[Re],De=Re+1,Me=re[De];if(0>o(Ae,oe))De<Q&&0>o(Me,Ae)?(re[U]=Me,re[De]=oe,U=De):(re[U]=Ae,re[Re]=oe,U=Re);else if(De<Q&&0>o(Me,oe))re[U]=Me,re[De]=oe,U=De;else break e}}return me}function o(re,me){var oe=re.sortIndex-me.sortIndex;return oe!==0?oe:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var p=[],y=[],E=1,I=null,S=3,D=!1,V=!1,z=!1,b=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(re){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=re)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function ie(re){if(z=!1,J(re),!V)if(t(p)!==null)V=!0,Ot(fe);else{var me=t(y);me!==null&&Be(ie,me.startTime-re)}}function fe(re,me){V=!1,z&&(z=!1,q(T),T=-1),D=!0;var oe=S;try{for(J(me),I=t(p);I!==null&&(!(I.expirationTime>me)||re&&!L());){var U=I.callback;if(typeof U=="function"){I.callback=null,S=I.priorityLevel;var Q=U(I.expirationTime<=me);me=n.unstable_now(),typeof Q=="function"?I.callback=Q:I===t(p)&&i(p),J(me)}else i(p);I=t(p)}if(I!==null)var pe=!0;else{var Re=t(y);Re!==null&&Be(ie,Re.startTime-me),pe=!1}return pe}finally{I=null,S=oe,D=!1}}var de=!1,k=null,T=-1,A=5,x=-1;function L(){return!(n.unstable_now()-x<A)}function M(){if(k!==null){var re=n.unstable_now();x=re;var me=!0;try{me=k(!0,re)}finally{me?C():(de=!1,k=null)}}else de=!1}var C;if(typeof K=="function")C=function(){K(M)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Dt=it.port2;it.port1.onmessage=M,C=function(){Dt.postMessage(null)}}else C=function(){b(M,0)};function Ot(re){k=re,de||(de=!0,C())}function Be(re,me){T=b(function(){re(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){V||D||(V=!0,Ot(fe))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(re){switch(S){case 1:case 2:case 3:var me=3;break;default:me=S}var oe=S;S=me;try{return re()}finally{S=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var oe=S;S=re;try{return me()}finally{S=oe}},n.unstable_scheduleCallback=function(re,me,oe){var U=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?U+oe:U):oe=U,re){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=oe+Q,re={id:E++,callback:me,priorityLevel:re,startTime:oe,expirationTime:Q,sortIndex:-1},oe>U?(re.sortIndex=oe,e(y,re),t(p)===null&&re===t(y)&&(z?(q(T),T=-1):z=!0,Be(ie,oe-U))):(re.sortIndex=Q,e(p,re),V||D||(V=!0,Ot(fe))),re},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(re){var me=S;return function(){var oe=S;S=me;try{return re.apply(this,arguments)}finally{S=oe}}}}(yd)),yd}var Eg;function oT(){return Eg||(Eg=1,gd.exports=sT()),gd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function aT(){if(wg)return tn;wg=1;var n=vc(),e=oT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},I={};function S(r){return p.call(I,r)?!0:p.call(E,r)?!1:y.test(r)?I[r]=!0:(E[r]=!0,!1)}function D(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function V(r,s,a,c){if(s===null||typeof s>"u"||D(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,a,c,d,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){b[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];b[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){b[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){b[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){b[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){b[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){b[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){b[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){b[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function K(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(q,K);b[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(q,K);b[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(q,K);b[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){b[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),b.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){b[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function J(r,s,a,c){var d=b.hasOwnProperty(s)?b[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(V(s,a,d,c)&&(a=null),c||d===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var ie=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),de=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),L=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,U;function Q(r){if(U===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+r}var pe=!1;function Re(r,s){if(!r||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(H){var c=H}Reflect.construct(r,[],s)}else{try{s.call()}catch(H){c=H}r.call(s.prototype)}else{try{throw Error()}catch(H){c=H}r()}}catch(H){if(H&&c&&typeof H.stack=="string"){for(var d=H.stack.split(`
`),g=c.stack.split(`
`),v=d.length-1,R=g.length-1;1<=v&&0<=R&&d[v]!==g[R];)R--;for(;1<=v&&0<=R;v--,R--)if(d[v]!==g[R]){if(v!==1||R!==1)do if(v--,R--,0>R||d[v]!==g[R]){var P=`
`+d[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=R);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Q(r):""}function Ae(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case de:return"Portal";case A:return"Profiler";case T:return"StrictMode";case C:return"Suspense";case it:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case L:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Dt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Ot:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function vt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function dr(r){r._valueTracker||(r._valueTracker=vt(r))}function ws(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Br(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Oi(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ts(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Fo(r,s){s=s.checked,s!=null&&J(r,"checked",s,!1)}function jo(r,s){Fo(r,s);var a=Ue(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Is(r,s.type,a):s.hasOwnProperty("defaultValue")&&Is(r,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function yl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Is(r,s,a){(s!=="number"||Br(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var fr=Array.isArray;function pr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Bo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ss(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(fr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ue(a)}}function Rs(r,s){var a=Ue(s.value),c=Ue(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function zo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ht(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ht(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var mr,$o=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=mr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function zr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bi=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(r){bi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Li[s]=Li[r]})});function Ho(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Li.hasOwnProperty(r)&&Li[r]?(""+s).trim():s+"px"}function Wo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Ho(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var qo=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ko(r,s){if(s){if(qo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Go(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function As(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Cs=null,fn=null,zn=null;function ks(r){if(r=_a(r)){if(typeof Cs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Kl(s),Cs(r.stateNode,r.type,s))}}function $n(r){fn?zn?zn.push(r):zn=[r]:fn=r}function Qo(){if(fn){var r=fn,s=zn;if(zn=fn=null,ks(r),s)for(r=0;r<s.length;r++)ks(s[r])}}function Mi(r,s){return r(s)}function Yo(){}var gr=!1;function Xo(r,s,a){if(gr)return r(s,a);gr=!0;try{return Mi(r,s,a)}finally{gr=!1,(fn!==null||zn!==null)&&(Yo(),Qo())}}function st(r,s){var a=r.stateNode;if(a===null)return null;var c=Kl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ps=!1;if(f)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Ps=!1}function Ui(r,s,a,c,d,g,v,R,P){var H=Array.prototype.slice.call(arguments,3);try{s.apply(a,H)}catch(X){this.onError(X)}}var Fi=!1,xs=null,An=!1,Jo=null,Bc={onError:function(r){Fi=!0,xs=r}};function Ns(r,s,a,c,d,g,v,R,P){Fi=!1,xs=null,Ui.apply(Bc,arguments)}function _l(r,s,a,c,d,g,v,R,P){if(Ns.apply(this,arguments),Fi){if(Fi){var H=xs;Fi=!1,xs=null}else throw Error(t(198));An||(An=!0,Jo=H)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function ji(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function kn(r){if(Cn(r)!==r)throw Error(t(188))}function vl(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return kn(d),r;if(g===c)return kn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var v=!1,R=d.child;R;){if(R===a){v=!0,a=d,c=g;break}if(R===c){v=!0,c=d,a=g;break}R=R.sibling}if(!v){for(R=g.child;R;){if(R===a){v=!0,a=g,c=d;break}if(R===c){v=!0,c=g,a=d;break}R=R.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Zo(r){return r=vl(r),r!==null?Ds(r):null}function Ds(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ds(r);if(s!==null)return s;r=r.sibling}return null}var Os=e.unstable_scheduleCallback,ea=e.unstable_cancelCallback,El=e.unstable_shouldYield,zc=e.unstable_requestPaint,He=e.unstable_now,wl=e.unstable_getCurrentPriorityLevel,Bi=e.unstable_ImmediatePriority,$r=e.unstable_UserBlockingPriority,pn=e.unstable_NormalPriority,ta=e.unstable_LowPriority,Tl=e.unstable_IdlePriority,zi=null,rn=null;function Il(r){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(zi,r,void 0,(r.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:Rl,na=Math.log,Sl=Math.LN2;function Rl(r){return r>>>=0,r===0?32:31-(na(r)/Sl|0)|0}var Ls=64,bs=4194304;function Hr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function $i(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var R=v&~d;R!==0?c=Hr(R):(g&=v,g!==0&&(c=Hr(g)))}else v=a&~d,v!==0?c=Hr(v):g!==0&&(c=Hr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&d)&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-zt(s),d=1<<a,c|=r[a],s&=~d;return c}function $c(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-zt(g),R=1<<v,P=d[v];P===-1?(!(R&a)||R&c)&&(d[v]=$c(R,s)):P<=s&&(r.expiredLanes|=R),g&=~R}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Hi(){var r=Ls;return Ls<<=1,!(Ls&4194240)&&(Ls=64),r}function Wr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function qr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-zt(s),r[s]=a}function ze(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-zt(a),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function Kr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-zt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var xe=0;function Gr(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Al,Vs,Cl,kl,Pl,ra=!1,Hn=[],Rt=null,Pn=null,xn=null,Qr=new Map,mn=new Map,Wn=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xl(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Qr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(s.pointerId)}}function Gt(r,s,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=_a(s),s!==null&&Vs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function Wc(r,s,a,c,d){switch(s){case"focusin":return Rt=Gt(Rt,r,s,a,c,d),!0;case"dragenter":return Pn=Gt(Pn,r,s,a,c,d),!0;case"mouseover":return xn=Gt(xn,r,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return Qr.set(g,Gt(Qr.get(g)||null,r,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,mn.set(g,Gt(mn.get(g)||null,r,s,a,c,d)),!0}return!1}function Nl(r){var s=Qi(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=ji(a),s!==null){r.blockedOn=s,Pl(r.priority,function(){Cl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function _r(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Ms(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Vi=c,a.target.dispatchEvent(c),Vi=null}else return s=_a(a),s!==null&&Vs(s),r.blockedOn=a,!1;s.shift()}return!0}function Wi(r,s,a){_r(r)&&a.delete(s)}function Dl(){ra=!1,Rt!==null&&_r(Rt)&&(Rt=null),Pn!==null&&_r(Pn)&&(Pn=null),xn!==null&&_r(xn)&&(xn=null),Qr.forEach(Wi),mn.forEach(Wi)}function Nn(r,s){r.blockedOn===s&&(r.blockedOn=null,ra||(ra=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dl)))}function Dn(r){function s(d){return Nn(d,r)}if(0<Hn.length){Nn(Hn[0],r);for(var a=1;a<Hn.length;a++){var c=Hn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Rt!==null&&Nn(Rt,r),Pn!==null&&Nn(Pn,r),xn!==null&&Nn(xn,r),Qr.forEach(s),mn.forEach(s),a=0;a<Wn.length;a++)c=Wn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Wn.length&&(a=Wn[0],a.blockedOn===null);)Nl(a),a.blockedOn===null&&Wn.shift()}var vr=ie.ReactCurrentBatchConfig,Yr=!0;function Ge(r,s,a,c){var d=xe,g=vr.transition;vr.transition=null;try{xe=1,ia(r,s,a,c)}finally{xe=d,vr.transition=g}}function qc(r,s,a,c){var d=xe,g=vr.transition;vr.transition=null;try{xe=4,ia(r,s,a,c)}finally{xe=d,vr.transition=g}}function ia(r,s,a,c){if(Yr){var d=Ms(r,s,a,c);if(d===null)rh(r,s,c,qi,a),xl(r,c);else if(Wc(d,r,s,a,c))c.stopPropagation();else if(xl(r,c),s&4&&-1<Hc.indexOf(r)){for(;d!==null;){var g=_a(d);if(g!==null&&Al(g),g=Ms(r,s,a,c),g===null&&rh(r,s,c,qi,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else rh(r,s,c,null,a)}}var qi=null;function Ms(r,s,a,c){if(qi=null,r=As(c),r=Qi(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=ji(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return qi=r,null}function sa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wl()){case Bi:return 1;case $r:return 4;case pn:case ta:return 16;case Tl:return 536870912;default:return 16}default:return 16}}var on=null,Us=null,Qt=null;function oa(){if(Qt)return Qt;var r,s=Us,a=s.length,c,d="value"in on?on.value:on.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[g-c];c++);return Qt=d.slice(r,1<c?1-c:void 0)}function Fs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function qn(){return!0}function aa(){return!1}function At(r){function s(a,c,d,g,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(a=r[R],this[R]=a?a(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?qn:aa,this.isPropagationStopped=aa,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),s}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},js=At(On),Kn=oe({},On,{view:0,detail:0}),Kc=At(Kn),Bs,Er,Xr,Ki=oe({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Xr&&(Xr&&r.type==="mousemove"?(Bs=r.screenX-Xr.screenX,Er=r.screenY-Xr.screenY):Er=Bs=0,Xr=r),Bs)},movementY:function(r){return"movementY"in r?r.movementY:Er}}),zs=At(Ki),la=oe({},Ki,{dataTransfer:0}),Ol=At(la),$s=oe({},Kn,{relatedTarget:0}),Hs=At($s),Ll=oe({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),wr=At(Ll),bl=oe({},On,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Vl=At(bl),Ml=oe({},On,{data:0}),ua=At(Ml),Ws={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ul={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Ul[r])?!!s[r]:!1}function Gn(){return Fl}var u=oe({},Kn,{key:function(r){if(r.key){var s=Ws[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Fs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?$t[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(r){return r.type==="keypress"?Fs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Fs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=At(u),_=oe({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=At(_),F=oe({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn}),W=At(F),ne=oe({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=At(ne),ft=oe({},Ki,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=At(ft),Et=[9,13,27,32],lt=f&&"CompositionEvent"in window,gn=null;f&&"documentMode"in document&&(gn=document.documentMode);var an=f&&"TextEvent"in window&&!gn,Gi=f&&(!lt||gn&&8<gn&&11>=gn),qs=" ",up=!1;function cp(r,s){switch(r){case"keyup":return Et.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ks=!1;function ZE(r,s){switch(r){case"compositionend":return hp(s);case"keypress":return s.which!==32?null:(up=!0,qs);case"textInput":return r=s.data,r===qs&&up?null:r;default:return null}}function ew(r,s){if(Ks)return r==="compositionend"||!lt&&cp(r,s)?(r=oa(),Qt=Us=on=null,Ks=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Gi&&s.locale!=="ko"?null:s.data;default:return null}}var tw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!tw[r.type]:s==="textarea"}function fp(r,s,a,c){$n(c),s=Hl(s,"onChange"),0<s.length&&(a=new js("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var ca=null,ha=null;function nw(r){Np(r,0)}function jl(r){var s=Js(r);if(ws(s))return r}function rw(r,s){if(r==="change")return s}var pp=!1;if(f){var Gc;if(f){var Qc="oninput"in document;if(!Qc){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),Qc=typeof mp.oninput=="function"}Gc=Qc}else Gc=!1;pp=Gc&&(!document.documentMode||9<document.documentMode)}function gp(){ca&&(ca.detachEvent("onpropertychange",yp),ha=ca=null)}function yp(r){if(r.propertyName==="value"&&jl(ha)){var s=[];fp(s,ha,r,As(r)),Xo(nw,s)}}function iw(r,s,a){r==="focusin"?(gp(),ca=s,ha=a,ca.attachEvent("onpropertychange",yp)):r==="focusout"&&gp()}function sw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return jl(ha)}function ow(r,s){if(r==="click")return jl(s)}function aw(r,s){if(r==="input"||r==="change")return jl(s)}function lw(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Ln=typeof Object.is=="function"?Object.is:lw;function da(r,s){if(Ln(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(s,d)||!Ln(r[d],s[d]))return!1}return!0}function _p(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function vp(r,s){var a=_p(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_p(a)}}function Ep(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Ep(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function wp(){for(var r=window,s=Br();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Br(r.document)}return s}function Yc(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function uw(r){var s=wp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Ep(a.ownerDocument.documentElement,a)){if(c!==null&&Yc(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=vp(a,g);var v=vp(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var cw=f&&"documentMode"in document&&11>=document.documentMode,Gs=null,Xc=null,fa=null,Jc=!1;function Tp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Gs==null||Gs!==Br(c)||(c=Gs,"selectionStart"in c&&Yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),fa&&da(fa,c)||(fa=c,c=Hl(Xc,"onSelect"),0<c.length&&(s=new js("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Gs)))}function Bl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Qs={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},Zc={},Ip={};f&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function zl(r){if(Zc[r])return Zc[r];if(!Qs[r])return r;var s=Qs[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Ip)return Zc[r]=s[a];return r}var Sp=zl("animationend"),Rp=zl("animationiteration"),Ap=zl("animationstart"),Cp=zl("transitionend"),kp=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(r,s){kp.set(r,s),l(s,[r])}for(var eh=0;eh<Pp.length;eh++){var th=Pp[eh],hw=th.toLowerCase(),dw=th[0].toUpperCase()+th.slice(1);Jr(hw,"on"+dw)}Jr(Sp,"onAnimationEnd"),Jr(Rp,"onAnimationIteration"),Jr(Ap,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(Cp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fw=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function xp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,_l(c,s,void 0,r),r.currentTarget=null}function Np(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var R=c[v],P=R.instance,H=R.currentTarget;if(R=R.listener,P!==g&&d.isPropagationStopped())break e;xp(d,R,H),g=P}else for(v=0;v<c.length;v++){if(R=c[v],P=R.instance,H=R.currentTarget,R=R.listener,P!==g&&d.isPropagationStopped())break e;xp(d,R,H),g=P}}}if(An)throw r=Jo,An=!1,Jo=null,r}function qe(r,s){var a=s[uh];a===void 0&&(a=s[uh]=new Set);var c=r+"__bubble";a.has(c)||(Dp(s,r,2,!1),a.add(c))}function nh(r,s,a){var c=0;s&&(c|=4),Dp(a,r,c,s)}var $l="_reactListening"+Math.random().toString(36).slice(2);function ma(r){if(!r[$l]){r[$l]=!0,i.forEach(function(a){a!=="selectionchange"&&(fw.has(a)||nh(a,!1,r),nh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[$l]||(s[$l]=!0,nh("selectionchange",!1,s))}}function Dp(r,s,a,c){switch(sa(s)){case 1:var d=Ge;break;case 4:d=qc;break;default:d=ia}a=d.bind(null,s,a,r),d=void 0,!Ps||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function rh(r,s,a,c,d){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var R=c.stateNode.containerInfo;if(R===d||R.nodeType===8&&R.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;R!==null;){if(v=Qi(R),v===null)return;if(P=v.tag,P===5||P===6){c=g=v;continue e}R=R.parentNode}}c=c.return}Xo(function(){var H=g,X=As(a),Z=[];e:{var Y=kp.get(r);if(Y!==void 0){var se=js,ue=r;switch(r){case"keypress":if(Fs(a)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ue="focus",se=Hs;break;case"focusout":ue="blur",se=Hs;break;case"beforeblur":case"afterblur":se=Hs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Ol;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=W;break;case Sp:case Rp:case Ap:se=wr;break;case Cp:se=je;break;case"scroll":se=Kc;break;case"wheel":se=Oe;break;case"copy":case"cut":case"paste":se=Vl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=w}var ce=(s&4)!==0,ot=!ce&&r==="scroll",j=ce?Y!==null?Y+"Capture":null:Y;ce=[];for(var O=H,B;O!==null;){B=O;var te=B.stateNode;if(B.tag===5&&te!==null&&(B=te,j!==null&&(te=st(O,j),te!=null&&ce.push(ga(O,te,B)))),ot)break;O=O.return}0<ce.length&&(Y=new se(Y,ue,null,a,X),Z.push({event:Y,listeners:ce}))}}if(!(s&7)){e:{if(Y=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",Y&&a!==Vi&&(ue=a.relatedTarget||a.fromElement)&&(Qi(ue)||ue[Tr]))break e;if((se||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,se?(ue=a.relatedTarget||a.toElement,se=H,ue=ue?Qi(ue):null,ue!==null&&(ot=Cn(ue),ue!==ot||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=H),se!==ue)){if(ce=zs,te="onMouseLeave",j="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(ce=w,te="onPointerLeave",j="onPointerEnter",O="pointer"),ot=se==null?Y:Js(se),B=ue==null?Y:Js(ue),Y=new ce(te,O+"leave",se,a,X),Y.target=ot,Y.relatedTarget=B,te=null,Qi(X)===H&&(ce=new ce(j,O+"enter",ue,a,X),ce.target=B,ce.relatedTarget=ot,te=ce),ot=te,se&&ue)t:{for(ce=se,j=ue,O=0,B=ce;B;B=Ys(B))O++;for(B=0,te=j;te;te=Ys(te))B++;for(;0<O-B;)ce=Ys(ce),O--;for(;0<B-O;)j=Ys(j),B--;for(;O--;){if(ce===j||j!==null&&ce===j.alternate)break t;ce=Ys(ce),j=Ys(j)}ce=null}else ce=null;se!==null&&Op(Z,Y,se,ce,!1),ue!==null&&ot!==null&&Op(Z,ot,ue,ce,!0)}}e:{if(Y=H?Js(H):window,se=Y.nodeName&&Y.nodeName.toLowerCase(),se==="select"||se==="input"&&Y.type==="file")var he=rw;else if(dp(Y))if(pp)he=aw;else{he=sw;var ge=iw}else(se=Y.nodeName)&&se.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(he=ow);if(he&&(he=he(r,H))){fp(Z,he,a,X);break e}ge&&ge(r,Y,H),r==="focusout"&&(ge=Y._wrapperState)&&ge.controlled&&Y.type==="number"&&Is(Y,"number",Y.value)}switch(ge=H?Js(H):window,r){case"focusin":(dp(ge)||ge.contentEditable==="true")&&(Gs=ge,Xc=H,fa=null);break;case"focusout":fa=Xc=Gs=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Tp(Z,a,X);break;case"selectionchange":if(cw)break;case"keydown":case"keyup":Tp(Z,a,X)}var ye;if(lt)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ks?cp(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Gi&&a.locale!=="ko"&&(Ks||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ks&&(ye=oa()):(on=X,Us="value"in on?on.value:on.textContent,Ks=!0)),ge=Hl(H,we),0<ge.length&&(we=new ua(we,r,null,a,X),Z.push({event:we,listeners:ge}),ye?we.data=ye:(ye=hp(a),ye!==null&&(we.data=ye)))),(ye=an?ZE(r,a):ew(r,a))&&(H=Hl(H,"onBeforeInput"),0<H.length&&(X=new ua("onBeforeInput","beforeinput",null,a,X),Z.push({event:X,listeners:H}),X.data=ye))}Np(Z,s)})}function ga(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Hl(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=st(r,a),g!=null&&c.unshift(ga(r,g,d)),g=st(r,s),g!=null&&c.push(ga(r,g,d))),r=r.return}return c}function Ys(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Op(r,s,a,c,d){for(var g=s._reactName,v=[];a!==null&&a!==c;){var R=a,P=R.alternate,H=R.stateNode;if(P!==null&&P===c)break;R.tag===5&&H!==null&&(R=H,d?(P=st(a,g),P!=null&&v.unshift(ga(a,P,R))):d||(P=st(a,g),P!=null&&v.push(ga(a,P,R)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var pw=/\r\n?/g,mw=/\u0000|\uFFFD/g;function Lp(r){return(typeof r=="string"?r:""+r).replace(pw,`
`).replace(mw,"")}function Wl(r,s,a){if(s=Lp(s),Lp(r)!==s&&a)throw Error(t(425))}function ql(){}var ih=null,sh=null;function oh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,gw=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,yw=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(r){return bp.resolve(null).then(r).catch(_w)}:ah;function _w(r){setTimeout(function(){throw r})}function lh(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),Dn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Dn(s)}function Zr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Vp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Xs,ya="__reactProps$"+Xs,Tr="__reactContainer$"+Xs,uh="__reactEvents$"+Xs,vw="__reactListeners$"+Xs,Ew="__reactHandles$"+Xs;function Qi(r){var s=r[Qn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Tr]||a[Qn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Vp(r);r!==null;){if(a=r[Qn])return a;r=Vp(r)}return s}r=a,a=r.parentNode}return null}function _a(r){return r=r[Qn]||r[Tr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Js(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Kl(r){return r[ya]||null}var ch=[],Zs=-1;function ei(r){return{current:r}}function Ke(r){0>Zs||(r.current=ch[Zs],ch[Zs]=null,Zs--)}function We(r,s){Zs++,ch[Zs]=r.current,r.current=s}var ti={},Lt=ei(ti),Yt=ei(!1),Yi=ti;function eo(r,s){var a=r.type.contextTypes;if(!a)return ti;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Xt(r){return r=r.childContextTypes,r!=null}function Gl(){Ke(Yt),Ke(Lt)}function Mp(r,s,a){if(Lt.current!==ti)throw Error(t(168));We(Lt,s),We(Yt,a)}function Up(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(r)||"Unknown",d));return oe({},a,c)}function Ql(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ti,Yi=Lt.current,We(Lt,r),We(Yt,Yt.current),!0}function Fp(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Up(r,s,Yi),c.__reactInternalMemoizedMergedChildContext=r,Ke(Yt),Ke(Lt),We(Lt,r)):Ke(Yt),We(Yt,a)}var Ir=null,Yl=!1,hh=!1;function jp(r){Ir===null?Ir=[r]:Ir.push(r)}function ww(r){Yl=!0,jp(r)}function ni(){if(!hh&&Ir!==null){hh=!0;var r=0,s=xe;try{var a=Ir;for(xe=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Ir=null,Yl=!1}catch(d){throw Ir!==null&&(Ir=Ir.slice(r+1)),Os(Bi,ni),d}finally{xe=s,hh=!1}}return null}var to=[],no=0,Xl=null,Jl=0,yn=[],_n=0,Xi=null,Sr=1,Rr="";function Ji(r,s){to[no++]=Jl,to[no++]=Xl,Xl=r,Jl=s}function Bp(r,s,a){yn[_n++]=Sr,yn[_n++]=Rr,yn[_n++]=Xi,Xi=r;var c=Sr;r=Rr;var d=32-zt(c)-1;c&=~(1<<d),a+=1;var g=32-zt(s)+d;if(30<g){var v=d-d%5;g=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Sr=1<<32-zt(s)+d|a<<d|c,Rr=g+r}else Sr=1<<g|a<<d|c,Rr=r}function dh(r){r.return!==null&&(Ji(r,1),Bp(r,1,0))}function fh(r){for(;r===Xl;)Xl=to[--no],to[no]=null,Jl=to[--no],to[no]=null;for(;r===Xi;)Xi=yn[--_n],yn[_n]=null,Rr=yn[--_n],yn[_n]=null,Sr=yn[--_n],yn[_n]=null}var ln=null,un=null,Qe=!1,bn=null;function zp(r,s){var a=Tn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function $p(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=Zr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Xi!==null?{id:Sr,overflow:Rr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Tn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function ph(r){return(r.mode&1)!==0&&(r.flags&128)===0}function mh(r){if(Qe){var s=un;if(s){var a=s;if(!$p(r,s)){if(ph(r))throw Error(t(418));s=Zr(a.nextSibling);var c=ln;s&&$p(r,s)?zp(c,a):(r.flags=r.flags&-4097|2,Qe=!1,ln=r)}}else{if(ph(r))throw Error(t(418));r.flags=r.flags&-4097|2,Qe=!1,ln=r}}}function Hp(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function Zl(r){if(r!==ln)return!1;if(!Qe)return Hp(r),Qe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!oh(r.type,r.memoizedProps)),s&&(s=un)){if(ph(r))throw Wp(),Error(t(418));for(;s;)zp(r,s),s=Zr(s.nextSibling)}if(Hp(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=Zr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?Zr(r.stateNode.nextSibling):null;return!0}function Wp(){for(var r=un;r;)r=Zr(r.nextSibling)}function ro(){un=ln=null,Qe=!1}function gh(r){bn===null?bn=[r]:bn.push(r)}var Tw=ie.ReactCurrentBatchConfig;function va(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var R=d.refs;v===null?delete R[g]:R[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function eu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function qp(r){var s=r._init;return s(r._payload)}function Kp(r){function s(j,O){if(r){var B=j.deletions;B===null?(j.deletions=[O],j.flags|=16):B.push(O)}}function a(j,O){if(!r)return null;for(;O!==null;)s(j,O),O=O.sibling;return null}function c(j,O){for(j=new Map;O!==null;)O.key!==null?j.set(O.key,O):j.set(O.index,O),O=O.sibling;return j}function d(j,O){return j=ci(j,O),j.index=0,j.sibling=null,j}function g(j,O,B){return j.index=B,r?(B=j.alternate,B!==null?(B=B.index,B<O?(j.flags|=2,O):B):(j.flags|=2,O)):(j.flags|=1048576,O)}function v(j){return r&&j.alternate===null&&(j.flags|=2),j}function R(j,O,B,te){return O===null||O.tag!==6?(O=ad(B,j.mode,te),O.return=j,O):(O=d(O,B),O.return=j,O)}function P(j,O,B,te){var he=B.type;return he===k?X(j,O,B.props.children,te,B.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Ot&&qp(he)===O.type)?(te=d(O,B.props),te.ref=va(j,O,B),te.return=j,te):(te=Su(B.type,B.key,B.props,null,j.mode,te),te.ref=va(j,O,B),te.return=j,te)}function H(j,O,B,te){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=ld(B,j.mode,te),O.return=j,O):(O=d(O,B.children||[]),O.return=j,O)}function X(j,O,B,te,he){return O===null||O.tag!==7?(O=os(B,j.mode,te,he),O.return=j,O):(O=d(O,B),O.return=j,O)}function Z(j,O,B){if(typeof O=="string"&&O!==""||typeof O=="number")return O=ad(""+O,j.mode,B),O.return=j,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case fe:return B=Su(O.type,O.key,O.props,null,j.mode,B),B.ref=va(j,null,O),B.return=j,B;case de:return O=ld(O,j.mode,B),O.return=j,O;case Ot:var te=O._init;return Z(j,te(O._payload),B)}if(fr(O)||me(O))return O=os(O,j.mode,B,null),O.return=j,O;eu(j,O)}return null}function Y(j,O,B,te){var he=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return he!==null?null:R(j,O,""+B,te);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case fe:return B.key===he?P(j,O,B,te):null;case de:return B.key===he?H(j,O,B,te):null;case Ot:return he=B._init,Y(j,O,he(B._payload),te)}if(fr(B)||me(B))return he!==null?null:X(j,O,B,te,null);eu(j,B)}return null}function se(j,O,B,te,he){if(typeof te=="string"&&te!==""||typeof te=="number")return j=j.get(B)||null,R(O,j,""+te,he);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case fe:return j=j.get(te.key===null?B:te.key)||null,P(O,j,te,he);case de:return j=j.get(te.key===null?B:te.key)||null,H(O,j,te,he);case Ot:var ge=te._init;return se(j,O,B,ge(te._payload),he)}if(fr(te)||me(te))return j=j.get(B)||null,X(O,j,te,he,null);eu(O,te)}return null}function ue(j,O,B,te){for(var he=null,ge=null,ye=O,we=O=0,It=null;ye!==null&&we<B.length;we++){ye.index>we?(It=ye,ye=null):It=ye.sibling;var Ve=Y(j,ye,B[we],te);if(Ve===null){ye===null&&(ye=It);break}r&&ye&&Ve.alternate===null&&s(j,ye),O=g(Ve,O,we),ge===null?he=Ve:ge.sibling=Ve,ge=Ve,ye=It}if(we===B.length)return a(j,ye),Qe&&Ji(j,we),he;if(ye===null){for(;we<B.length;we++)ye=Z(j,B[we],te),ye!==null&&(O=g(ye,O,we),ge===null?he=ye:ge.sibling=ye,ge=ye);return Qe&&Ji(j,we),he}for(ye=c(j,ye);we<B.length;we++)It=se(ye,j,we,B[we],te),It!==null&&(r&&It.alternate!==null&&ye.delete(It.key===null?we:It.key),O=g(It,O,we),ge===null?he=It:ge.sibling=It,ge=It);return r&&ye.forEach(function(hi){return s(j,hi)}),Qe&&Ji(j,we),he}function ce(j,O,B,te){var he=me(B);if(typeof he!="function")throw Error(t(150));if(B=he.call(B),B==null)throw Error(t(151));for(var ge=he=null,ye=O,we=O=0,It=null,Ve=B.next();ye!==null&&!Ve.done;we++,Ve=B.next()){ye.index>we?(It=ye,ye=null):It=ye.sibling;var hi=Y(j,ye,Ve.value,te);if(hi===null){ye===null&&(ye=It);break}r&&ye&&hi.alternate===null&&s(j,ye),O=g(hi,O,we),ge===null?he=hi:ge.sibling=hi,ge=hi,ye=It}if(Ve.done)return a(j,ye),Qe&&Ji(j,we),he;if(ye===null){for(;!Ve.done;we++,Ve=B.next())Ve=Z(j,Ve.value,te),Ve!==null&&(O=g(Ve,O,we),ge===null?he=Ve:ge.sibling=Ve,ge=Ve);return Qe&&Ji(j,we),he}for(ye=c(j,ye);!Ve.done;we++,Ve=B.next())Ve=se(ye,j,we,Ve.value,te),Ve!==null&&(r&&Ve.alternate!==null&&ye.delete(Ve.key===null?we:Ve.key),O=g(Ve,O,we),ge===null?he=Ve:ge.sibling=Ve,ge=Ve);return r&&ye.forEach(function(eT){return s(j,eT)}),Qe&&Ji(j,we),he}function ot(j,O,B,te){if(typeof B=="object"&&B!==null&&B.type===k&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case fe:e:{for(var he=B.key,ge=O;ge!==null;){if(ge.key===he){if(he=B.type,he===k){if(ge.tag===7){a(j,ge.sibling),O=d(ge,B.props.children),O.return=j,j=O;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Ot&&qp(he)===ge.type){a(j,ge.sibling),O=d(ge,B.props),O.ref=va(j,ge,B),O.return=j,j=O;break e}a(j,ge);break}else s(j,ge);ge=ge.sibling}B.type===k?(O=os(B.props.children,j.mode,te,B.key),O.return=j,j=O):(te=Su(B.type,B.key,B.props,null,j.mode,te),te.ref=va(j,O,B),te.return=j,j=te)}return v(j);case de:e:{for(ge=B.key;O!==null;){if(O.key===ge)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){a(j,O.sibling),O=d(O,B.children||[]),O.return=j,j=O;break e}else{a(j,O);break}else s(j,O);O=O.sibling}O=ld(B,j.mode,te),O.return=j,j=O}return v(j);case Ot:return ge=B._init,ot(j,O,ge(B._payload),te)}if(fr(B))return ue(j,O,B,te);if(me(B))return ce(j,O,B,te);eu(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,O!==null&&O.tag===6?(a(j,O.sibling),O=d(O,B),O.return=j,j=O):(a(j,O),O=ad(B,j.mode,te),O.return=j,j=O),v(j)):a(j,O)}return ot}var io=Kp(!0),Gp=Kp(!1),tu=ei(null),nu=null,so=null,yh=null;function _h(){yh=so=nu=null}function vh(r){var s=tu.current;Ke(tu),r._currentValue=s}function Eh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function oo(r,s){nu=r,yh=so=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Jt=!0),r.firstContext=null)}function vn(r){var s=r._currentValue;if(yh!==r)if(r={context:r,memoizedValue:s,next:null},so===null){if(nu===null)throw Error(t(308));so=r,nu.dependencies={lanes:0,firstContext:r}}else so=so.next=r;return s}var Zi=null;function wh(r){Zi===null?Zi=[r]:Zi.push(r)}function Qp(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,wh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Ar(r,c)}function Ar(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ri=!1;function Th(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Cr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ii(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,be&2){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Ar(r,a)}return d=c.interleaved,d===null?(s.next=s,wh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Ar(r,a)}function ru(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Kr(r,a)}}function Xp(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function iu(r,s,a,c){var d=r.updateQueue;ri=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,R=d.shared.pending;if(R!==null){d.shared.pending=null;var P=R,H=P.next;P.next=null,v===null?g=H:v.next=H,v=P;var X=r.alternate;X!==null&&(X=X.updateQueue,R=X.lastBaseUpdate,R!==v&&(R===null?X.firstBaseUpdate=H:R.next=H,X.lastBaseUpdate=P))}if(g!==null){var Z=d.baseState;v=0,X=H=P=null,R=g;do{var Y=R.lane,se=R.eventTime;if((c&Y)===Y){X!==null&&(X=X.next={eventTime:se,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ue=r,ce=R;switch(Y=s,se=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){Z=ue.call(se,Z,Y);break e}Z=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,Y=typeof ue=="function"?ue.call(se,Z,Y):ue,Y==null)break e;Z=oe({},Z,Y);break e;case 2:ri=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,Y=d.effects,Y===null?d.effects=[R]:Y.push(R))}else se={eventTime:se,lane:Y,tag:R.tag,payload:R.payload,callback:R.callback,next:null},X===null?(H=X=se,P=Z):X=X.next=se,v|=Y;if(R=R.next,R===null){if(R=d.shared.pending,R===null)break;Y=R,R=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);if(X===null&&(P=Z),d.baseState=P,d.firstBaseUpdate=H,d.lastBaseUpdate=X,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);ns|=v,r.lanes=v,r.memoizedState=Z}}function Jp(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ea={},Yn=ei(Ea),wa=ei(Ea),Ta=ei(Ea);function es(r){if(r===Ea)throw Error(t(174));return r}function Ih(r,s){switch(We(Ta,s),We(wa,r),We(Yn,Ea),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:dt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=dt(s,r)}Ke(Yn),We(Yn,s)}function ao(){Ke(Yn),Ke(wa),Ke(Ta)}function Zp(r){es(Ta.current);var s=es(Yn.current),a=dt(s,r.type);s!==a&&(We(wa,r),We(Yn,a))}function Sh(r){wa.current===r&&(Ke(Yn),Ke(wa))}var Ye=ei(0);function su(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Rh=[];function Ah(){for(var r=0;r<Rh.length;r++)Rh[r]._workInProgressVersionPrimary=null;Rh.length=0}var ou=ie.ReactCurrentDispatcher,Ch=ie.ReactCurrentBatchConfig,ts=0,Xe=null,pt=null,wt=null,au=!1,Ia=!1,Sa=0,Iw=0;function bt(){throw Error(t(321))}function kh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Ln(r[a],s[a]))return!1;return!0}function Ph(r,s,a,c,d,g){if(ts=g,Xe=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ou.current=r===null||r.memoizedState===null?Cw:kw,r=a(c,d),Ia){g=0;do{if(Ia=!1,Sa=0,25<=g)throw Error(t(301));g+=1,wt=pt=null,s.updateQueue=null,ou.current=Pw,r=a(c,d)}while(Ia)}if(ou.current=cu,s=pt!==null&&pt.next!==null,ts=0,wt=pt=Xe=null,au=!1,s)throw Error(t(300));return r}function xh(){var r=Sa!==0;return Sa=0,r}function Xn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Xe.memoizedState=wt=r:wt=wt.next=r,wt}function En(){if(pt===null){var r=Xe.alternate;r=r!==null?r.memoizedState:null}else r=pt.next;var s=wt===null?Xe.memoizedState:wt.next;if(s!==null)wt=s,pt=r;else{if(r===null)throw Error(t(310));pt=r,r={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},wt===null?Xe.memoizedState=wt=r:wt=wt.next=r}return wt}function Ra(r,s){return typeof s=="function"?s(r):s}function Nh(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=pt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var R=v=null,P=null,H=g;do{var X=H.lane;if((ts&X)===X)P!==null&&(P=P.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),c=H.hasEagerState?H.eagerState:r(c,H.action);else{var Z={lane:X,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};P===null?(R=P=Z,v=c):P=P.next=Z,Xe.lanes|=X,ns|=X}H=H.next}while(H!==null&&H!==g);P===null?v=c:P.next=R,Ln(c,s.memoizedState)||(Jt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,Xe.lanes|=g,ns|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Dh(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do g=r(g,v.action),v=v.next;while(v!==d);Ln(g,s.memoizedState)||(Jt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function em(){}function tm(r,s){var a=Xe,c=En(),d=s(),g=!Ln(c.memoizedState,d);if(g&&(c.memoizedState=d,Jt=!0),c=c.queue,Oh(im.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,Aa(9,rm.bind(null,a,c,d,s),void 0,null),Tt===null)throw Error(t(349));ts&30||nm(a,s,d)}return d}function nm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Xe.updateQueue,s===null?(s={lastEffect:null,stores:null},Xe.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function rm(r,s,a,c){s.value=a,s.getSnapshot=c,sm(s)&&om(r)}function im(r,s,a){return a(function(){sm(s)&&om(r)})}function sm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Ln(r,a)}catch{return!0}}function om(r){var s=Ar(r,1);s!==null&&Fn(s,r,1,-1)}function am(r){var s=Xn();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:r},s.queue=r,r=r.dispatch=Aw.bind(null,Xe,r),[s.memoizedState,r]}function Aa(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Xe.updateQueue,s===null?(s={lastEffect:null,stores:null},Xe.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function lm(){return En().memoizedState}function lu(r,s,a,c){var d=Xn();Xe.flags|=r,d.memoizedState=Aa(1|s,a,void 0,c===void 0?null:c)}function uu(r,s,a,c){var d=En();c=c===void 0?null:c;var g=void 0;if(pt!==null){var v=pt.memoizedState;if(g=v.destroy,c!==null&&kh(c,v.deps)){d.memoizedState=Aa(s,a,g,c);return}}Xe.flags|=r,d.memoizedState=Aa(1|s,a,g,c)}function um(r,s){return lu(8390656,8,r,s)}function Oh(r,s){return uu(2048,8,r,s)}function cm(r,s){return uu(4,2,r,s)}function hm(r,s){return uu(4,4,r,s)}function dm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function fm(r,s,a){return a=a!=null?a.concat([r]):null,uu(4,4,dm.bind(null,s,r),a)}function Lh(){}function pm(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&kh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function mm(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&kh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function gm(r,s,a){return ts&21?(Ln(a,s)||(a=Hi(),Xe.lanes|=a,ns|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Jt=!0),r.memoizedState=a)}function Sw(r,s){var a=xe;xe=a!==0&&4>a?a:4,r(!0);var c=Ch.transition;Ch.transition={};try{r(!1),s()}finally{xe=a,Ch.transition=c}}function ym(){return En().memoizedState}function Rw(r,s,a){var c=li(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},_m(r))vm(s,a);else if(a=Qp(r,s,a,c),a!==null){var d=Wt();Fn(a,r,c,d),Em(a,s,c)}}function Aw(r,s,a){var c=li(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(_m(r))vm(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,R=g(v,a);if(d.hasEagerState=!0,d.eagerState=R,Ln(R,v)){var P=s.interleaved;P===null?(d.next=d,wh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=Qp(r,s,d,c),a!==null&&(d=Wt(),Fn(a,r,c,d),Em(a,s,c))}}function _m(r){var s=r.alternate;return r===Xe||s!==null&&s===Xe}function vm(r,s){Ia=au=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Em(r,s,a){if(a&4194240){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Kr(r,a)}}var cu={readContext:vn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},Cw={readContext:vn,useCallback:function(r,s){return Xn().memoizedState=[r,s===void 0?null:s],r},useContext:vn,useEffect:um,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,lu(4194308,4,dm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return lu(4194308,4,r,s)},useInsertionEffect:function(r,s){return lu(4,2,r,s)},useMemo:function(r,s){var a=Xn();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=Xn();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=Rw.bind(null,Xe,r),[c.memoizedState,r]},useRef:function(r){var s=Xn();return r={current:r},s.memoizedState=r},useState:am,useDebugValue:Lh,useDeferredValue:function(r){return Xn().memoizedState=r},useTransition:function(){var r=am(!1),s=r[0];return r=Sw.bind(null,r[1]),Xn().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Xe,d=Xn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));ts&30||nm(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,um(im.bind(null,c,g,r),[r]),c.flags|=2048,Aa(9,rm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=Xn(),s=Tt.identifierPrefix;if(Qe){var a=Rr,c=Sr;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Sa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Iw++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},kw={readContext:vn,useCallback:pm,useContext:vn,useEffect:Oh,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:hm,useMemo:mm,useReducer:Nh,useRef:lm,useState:function(){return Nh(Ra)},useDebugValue:Lh,useDeferredValue:function(r){var s=En();return gm(s,pt.memoizedState,r)},useTransition:function(){var r=Nh(Ra)[0],s=En().memoizedState;return[r,s]},useMutableSource:em,useSyncExternalStore:tm,useId:ym,unstable_isNewReconciler:!1},Pw={readContext:vn,useCallback:pm,useContext:vn,useEffect:Oh,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:hm,useMemo:mm,useReducer:Dh,useRef:lm,useState:function(){return Dh(Ra)},useDebugValue:Lh,useDeferredValue:function(r){var s=En();return pt===null?s.memoizedState=r:gm(s,pt.memoizedState,r)},useTransition:function(){var r=Dh(Ra)[0],s=En().memoizedState;return[r,s]},useMutableSource:em,useSyncExternalStore:tm,useId:ym,unstable_isNewReconciler:!1};function Vn(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function bh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var hu={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Wt(),d=li(r),g=Cr(c,d);g.payload=s,a!=null&&(g.callback=a),s=ii(r,g,d),s!==null&&(Fn(s,r,d,c),ru(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Wt(),d=li(r),g=Cr(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ii(r,g,d),s!==null&&(Fn(s,r,d,c),ru(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Wt(),c=li(r),d=Cr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ii(r,d,c),s!==null&&(Fn(s,r,c,a),ru(s,r,c))}};function wm(r,s,a,c,d,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!da(a,c)||!da(d,g):!0}function Tm(r,s,a){var c=!1,d=ti,g=s.contextType;return typeof g=="object"&&g!==null?g=vn(g):(d=Xt(s)?Yi:Lt.current,c=s.contextTypes,g=(c=c!=null)?eo(r,d):ti),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=hu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function Im(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&hu.enqueueReplaceState(s,s.state,null)}function Vh(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Th(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=vn(g):(g=Xt(s)?Yi:Lt.current,d.context=eo(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(bh(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&hu.enqueueReplaceState(d,d.state,null),iu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function lo(r,s){try{var a="",c=s;do a+=Ae(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function Mh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Uh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var xw=typeof WeakMap=="function"?WeakMap:Map;function Sm(r,s,a){a=Cr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){_u||(_u=!0,Zh=c),Uh(r,s)},a}function Rm(r,s,a){a=Cr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Uh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Uh(r,s),typeof c!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Am(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new xw;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=Hw.bind(null,r,s,a),s.then(r,r))}function Cm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function km(r,s,a,c,d){return r.mode&1?(r.flags|=65536,r.lanes=d,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Cr(-1,1),s.tag=2,ii(a,s,1))),a.lanes|=1),r)}var Nw=ie.ReactCurrentOwner,Jt=!1;function Ht(r,s,a,c){s.child=r===null?Gp(s,null,a,c):io(s,r.child,a,c)}function Pm(r,s,a,c,d){a=a.render;var g=s.ref;return oo(s,d),c=Ph(r,s,a,c,g,d),a=xh(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,kr(r,s,d)):(Qe&&a&&dh(s),s.flags|=1,Ht(r,s,c,d),s.child)}function xm(r,s,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!od(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Nm(r,s,g,c,d)):(r=Su(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&d)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(v,c)&&r.ref===s.ref)return kr(r,s,d)}return s.flags|=1,r=ci(g,c),r.ref=s.ref,r.return=s,s.child=r}function Nm(r,s,a,c,d){if(r!==null){var g=r.memoizedProps;if(da(g,c)&&r.ref===s.ref)if(Jt=!1,s.pendingProps=c=g,(r.lanes&d)!==0)r.flags&131072&&(Jt=!0);else return s.lanes=r.lanes,kr(r,s,d)}return Fh(r,s,a,c,d)}function Dm(r,s,a){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(co,cn),cn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(co,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,We(co,cn),cn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,We(co,cn),cn|=c;return Ht(r,s,d,a),s.child}function Om(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Fh(r,s,a,c,d){var g=Xt(a)?Yi:Lt.current;return g=eo(s,g),oo(s,d),a=Ph(r,s,a,c,g,d),c=xh(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,kr(r,s,d)):(Qe&&c&&dh(s),s.flags|=1,Ht(r,s,a,d),s.child)}function Lm(r,s,a,c,d){if(Xt(a)){var g=!0;Ql(s)}else g=!1;if(oo(s,d),s.stateNode===null)fu(r,s),Tm(s,a,c),Vh(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,R=s.memoizedProps;v.props=R;var P=v.context,H=a.contextType;typeof H=="object"&&H!==null?H=vn(H):(H=Xt(a)?Yi:Lt.current,H=eo(s,H));var X=a.getDerivedStateFromProps,Z=typeof X=="function"||typeof v.getSnapshotBeforeUpdate=="function";Z||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==c||P!==H)&&Im(s,v,c,H),ri=!1;var Y=s.memoizedState;v.state=Y,iu(s,c,v,d),P=s.memoizedState,R!==c||Y!==P||Yt.current||ri?(typeof X=="function"&&(bh(s,a,X,c),P=s.memoizedState),(R=ri||wm(s,a,R,c,Y,P,H))?(Z||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=H,c=R):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Yp(r,s),R=s.memoizedProps,H=s.type===s.elementType?R:Vn(s.type,R),v.props=H,Z=s.pendingProps,Y=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=vn(P):(P=Xt(a)?Yi:Lt.current,P=eo(s,P));var se=a.getDerivedStateFromProps;(X=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==Z||Y!==P)&&Im(s,v,c,P),ri=!1,Y=s.memoizedState,v.state=Y,iu(s,c,v,d);var ue=s.memoizedState;R!==Z||Y!==ue||Yt.current||ri?(typeof se=="function"&&(bh(s,a,se,c),ue=s.memoizedState),(H=ri||wm(s,a,H,c,Y,ue,P)||!1)?(X||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=P,c=H):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),c=!1)}return jh(r,s,a,c,g,d)}function jh(r,s,a,c,d,g){Om(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Fp(s,a,!1),kr(r,s,g);c=s.stateNode,Nw.current=s;var R=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=io(s,r.child,null,g),s.child=io(s,null,R,g)):Ht(r,s,R,g),s.memoizedState=c.state,d&&Fp(s,a,!0),s.child}function bm(r){var s=r.stateNode;s.pendingContext?Mp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Mp(r,s.context,!1),Ih(r,s.containerInfo)}function Vm(r,s,a,c,d){return ro(),gh(d),s.flags|=256,Ht(r,s,a,c),s.child}var Bh={dehydrated:null,treeContext:null,retryLane:0};function zh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Mm(r,s,a){var c=s.pendingProps,d=Ye.current,g=!1,v=(s.flags&128)!==0,R;if((R=v)||(R=r!==null&&r.memoizedState===null?!1:(d&2)!==0),R?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),We(Ye,d&1),r===null)return mh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=Ru(v,c,0,null),r=os(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=zh(a),s.memoizedState=Bh,r):$h(s,v));if(d=r.memoizedState,d!==null&&(R=d.dehydrated,R!==null))return Dw(r,s,v,c,R,d,a);if(g){g=c.fallback,v=s.mode,d=r.child,R=d.sibling;var P={mode:"hidden",children:c.children};return!(v&1)&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=ci(d,P),c.subtreeFlags=d.subtreeFlags&14680064),R!==null?g=ci(R,g):(g=os(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?zh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=Bh,c}return g=r.child,r=g.sibling,c=ci(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function $h(r,s){return s=Ru({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function du(r,s,a,c){return c!==null&&gh(c),io(s,r.child,null,a),r=$h(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function Dw(r,s,a,c,d,g,v){if(a)return s.flags&256?(s.flags&=-257,c=Mh(Error(t(422))),du(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=Ru({mode:"visible",children:c.children},d,0,null),g=os(g,d,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&io(s,r.child,null,v),s.child.memoizedState=zh(v),s.memoizedState=Bh,g);if(!(s.mode&1))return du(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var R=c.dgst;return c=R,g=Error(t(419)),c=Mh(g,c,void 0),du(r,s,v,c)}if(R=(v&r.childLanes)!==0,Jt||R){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Ar(r,d),Fn(c,r,d,-1))}return sd(),c=Mh(Error(t(421))),du(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=Ww.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,un=Zr(d.nextSibling),ln=s,Qe=!0,bn=null,r!==null&&(yn[_n++]=Sr,yn[_n++]=Rr,yn[_n++]=Xi,Sr=r.id,Rr=r.overflow,Xi=s),s=$h(s,c.children),s.flags|=4096,s)}function Um(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Eh(r.return,s,a)}function Hh(r,s,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Fm(r,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(Ht(r,s,c.children,a),c=Ye.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Um(r,a,s);else if(r.tag===19)Um(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(We(Ye,c),!(s.mode&1))s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&su(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Hh(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&su(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Hh(s,!0,a,null,g);break;case"together":Hh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function fu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function kr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ns|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=ci(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=ci(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function Ow(r,s,a){switch(s.tag){case 3:bm(s),ro();break;case 5:Zp(s);break;case 1:Xt(s.type)&&Ql(s);break;case 4:Ih(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;We(tu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(Ye,Ye.current&1),s.flags|=128,null):a&s.child.childLanes?Mm(r,s,a):(We(Ye,Ye.current&1),r=kr(r,s,a),r!==null?r.sibling:null);We(Ye,Ye.current&1);break;case 19:if(c=(a&s.childLanes)!==0,r.flags&128){if(c)return Fm(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ye,Ye.current),c)break;return null;case 22:case 23:return s.lanes=0,Dm(r,s,a)}return kr(r,s,a)}var jm,Wh,Bm,zm;jm=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Wh=function(){},Bm=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,es(Yn.current);var g=null;switch(a){case"input":d=Oi(r,d),c=Oi(r,c),g=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),g=[];break;case"textarea":d=Bo(r,d),c=Bo(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=ql)}Ko(a,c);var v;a=null;for(H in d)if(!c.hasOwnProperty(H)&&d.hasOwnProperty(H)&&d[H]!=null)if(H==="style"){var R=d[H];for(v in R)R.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(o.hasOwnProperty(H)?g||(g=[]):(g=g||[]).push(H,null));for(H in c){var P=c[H];if(R=d!=null?d[H]:void 0,c.hasOwnProperty(H)&&P!==R&&(P!=null||R!=null))if(H==="style")if(R){for(v in R)!R.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&R[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(g||(g=[]),g.push(H,a)),a=P;else H==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,R=R?R.__html:void 0,P!=null&&R!==P&&(g=g||[]).push(H,P)):H==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(H,""+P):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(o.hasOwnProperty(H)?(P!=null&&H==="onScroll"&&qe("scroll",r),g||R===P||(g=[])):(g=g||[]).push(H,P))}a&&(g=g||[]).push("style",a);var H=g;(s.updateQueue=H)&&(s.flags|=4)}},zm=function(r,s,a,c){a!==c&&(s.flags|=4)};function Ca(r,s){if(!Qe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Vt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function Lw(r,s,a){var c=s.pendingProps;switch(fh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(s),null;case 1:return Xt(s.type)&&Gl(),Vt(s),null;case 3:return c=s.stateNode,ao(),Ke(Yt),Ke(Lt),Ah(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(Zl(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,bn!==null&&(nd(bn),bn=null))),Wh(r,s),Vt(s),null;case 5:Sh(s);var d=es(Ta.current);if(a=s.type,r!==null&&s.stateNode!=null)Bm(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Vt(s),null}if(r=es(Yn.current),Zl(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[Qn]=s,c[ya]=g,r=(s.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<pa.length;d++)qe(pa[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":Ts(c,g),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},qe("invalid",c);break;case"textarea":Ss(c,g),qe("invalid",c)}Ko(a,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var R=g[v];v==="children"?typeof R=="string"?c.textContent!==R&&(g.suppressHydrationWarning!==!0&&Wl(c.textContent,R,r),d=["children",R]):typeof R=="number"&&c.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&Wl(c.textContent,R,r),d=["children",""+R]):o.hasOwnProperty(v)&&R!=null&&v==="onScroll"&&qe("scroll",c)}switch(a){case"input":dr(c),yl(c,g,!0);break;case"textarea":dr(c),zo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=ql)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ht(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[Qn]=s,r[ya]=c,jm(r,s,!1,!1),s.stateNode=r;e:{switch(v=Go(a,c),a){case"dialog":qe("cancel",r),qe("close",r),d=c;break;case"iframe":case"object":case"embed":qe("load",r),d=c;break;case"video":case"audio":for(d=0;d<pa.length;d++)qe(pa[d],r);d=c;break;case"source":qe("error",r),d=c;break;case"img":case"image":case"link":qe("error",r),qe("load",r),d=c;break;case"details":qe("toggle",r),d=c;break;case"input":Ts(r,c),d=Oi(r,c),qe("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),qe("invalid",r);break;case"textarea":Ss(r,c),d=Bo(r,c),qe("invalid",r);break;default:d=c}Ko(a,d),R=d;for(g in R)if(R.hasOwnProperty(g)){var P=R[g];g==="style"?Wo(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&$o(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&zr(r,P):typeof P=="number"&&zr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&qe("scroll",r):P!=null&&J(r,g,P,v))}switch(a){case"input":dr(r),yl(r,c,!1);break;case"textarea":dr(r),zo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ue(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?pr(r,!!c.multiple,g,!1):c.defaultValue!=null&&pr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=ql)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vt(s),null;case 6:if(r&&s.stateNode!=null)zm(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=es(Ta.current),es(Yn.current),Zl(s)){if(c=s.stateNode,a=s.memoizedProps,c[Qn]=s,(g=c.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:Wl(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Wl(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=s,s.stateNode=c}return Vt(s),null;case 13:if(Ke(Ye),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Qe&&un!==null&&s.mode&1&&!(s.flags&128))Wp(),ro(),s.flags|=98560,g=!1;else if(g=Zl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Qn]=s}else ro(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Vt(s),g=!1}else bn!==null&&(nd(bn),bn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||Ye.current&1?mt===0&&(mt=3):sd())),s.updateQueue!==null&&(s.flags|=4),Vt(s),null);case 4:return ao(),Wh(r,s),r===null&&ma(s.stateNode.containerInfo),Vt(s),null;case 10:return vh(s.type._context),Vt(s),null;case 17:return Xt(s.type)&&Gl(),Vt(s),null;case 19:if(Ke(Ye),g=s.memoizedState,g===null)return Vt(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)Ca(g,!1);else{if(mt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=su(r),v!==null){for(s.flags|=128,Ca(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Ye,Ye.current&1|2),s.child}r=r.sibling}g.tail!==null&&He()>ho&&(s.flags|=128,c=!0,Ca(g,!1),s.lanes=4194304)}else{if(!c)if(r=su(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ca(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Qe)return Vt(s),null}else 2*He()-g.renderingStartTime>ho&&a!==1073741824&&(s.flags|=128,c=!0,Ca(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=He(),s.sibling=null,a=Ye.current,We(Ye,c?a&1|2:a&1),s):(Vt(s),null);case 22:case 23:return id(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?cn&1073741824&&(Vt(s),s.subtreeFlags&6&&(s.flags|=8192)):Vt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function bw(r,s){switch(fh(s),s.tag){case 1:return Xt(s.type)&&Gl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return ao(),Ke(Yt),Ke(Lt),Ah(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Sh(s),null;case 13:if(Ke(Ye),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ro()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(Ye),null;case 4:return ao(),null;case 10:return vh(s.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var pu=!1,Mt=!1,Vw=typeof WeakSet=="function"?WeakSet:Set,le=null;function uo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(r,s,c)}else a.current=null}function qh(r,s,a){try{a()}catch(c){et(r,s,c)}}var $m=!1;function Mw(r,s){if(ih=Yr,r=wp(),Yc(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,R=-1,P=-1,H=0,X=0,Z=r,Y=null;t:for(;;){for(var se;Z!==a||d!==0&&Z.nodeType!==3||(R=v+d),Z!==g||c!==0&&Z.nodeType!==3||(P=v+c),Z.nodeType===3&&(v+=Z.nodeValue.length),(se=Z.firstChild)!==null;)Y=Z,Z=se;for(;;){if(Z===r)break t;if(Y===a&&++H===d&&(R=v),Y===g&&++X===c&&(P=v),(se=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=se}a=R===-1||P===-1?null:{start:R,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(sh={focusedElem:r,selectionRange:a},Yr=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ue=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,ot=ue.memoizedState,j=s.stateNode,O=j.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Vn(s.type,ce),ot);j.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){et(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ue=$m,$m=!1,ue}function ka(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&qh(s,a,g)}d=d.next}while(d!==c)}}function mu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Kh(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Hm(r){var s=r.alternate;s!==null&&(r.alternate=null,Hm(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Qn],delete s[ya],delete s[uh],delete s[vw],delete s[Ew])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Wm(r){return r.tag===5||r.tag===3||r.tag===4}function qm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Wm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Gh(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=ql));else if(c!==4&&(r=r.child,r!==null))for(Gh(r,s,a),r=r.sibling;r!==null;)Gh(r,s,a),r=r.sibling}function Qh(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Qh(r,s,a),r=r.sibling;r!==null;)Qh(r,s,a),r=r.sibling}var Ct=null,Mn=!1;function si(r,s,a){for(a=a.child;a!==null;)Km(r,s,a),a=a.sibling}function Km(r,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(zi,a)}catch{}switch(a.tag){case 5:Mt||uo(a,s);case 6:var c=Ct,d=Mn;Ct=null,si(r,s,a),Ct=c,Mn=d,Ct!==null&&(Mn?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Mn?(r=Ct,a=a.stateNode,r.nodeType===8?lh(r.parentNode,a):r.nodeType===1&&lh(r,a),Dn(r)):lh(Ct,a.stateNode));break;case 4:c=Ct,d=Mn,Ct=a.stateNode.containerInfo,Mn=!0,si(r,s,a),Ct=c,Mn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&qh(a,s,v),d=d.next}while(d!==c)}si(r,s,a);break;case 1:if(!Mt&&(uo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(R){et(a,s,R)}si(r,s,a);break;case 21:si(r,s,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,si(r,s,a),Mt=c):si(r,s,a);break;default:si(r,s,a)}}function Gm(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new Vw),s.forEach(function(c){var d=qw.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Un(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,v=s,R=v;e:for(;R!==null;){switch(R.tag){case 5:Ct=R.stateNode,Mn=!1;break e;case 3:Ct=R.stateNode.containerInfo,Mn=!0;break e;case 4:Ct=R.stateNode.containerInfo,Mn=!0;break e}R=R.return}if(Ct===null)throw Error(t(160));Km(g,v,d),Ct=null,Mn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(H){et(d,s,H)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Qm(s,r),s=s.sibling}function Qm(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Un(s,r),Jn(r),c&4){try{ka(3,r,r.return),mu(3,r)}catch(ce){et(r,r.return,ce)}try{ka(5,r,r.return)}catch(ce){et(r,r.return,ce)}}break;case 1:Un(s,r),Jn(r),c&512&&a!==null&&uo(a,a.return);break;case 5:if(Un(s,r),Jn(r),c&512&&a!==null&&uo(a,a.return),r.flags&32){var d=r.stateNode;try{zr(d,"")}catch(ce){et(r,r.return,ce)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,R=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&Fo(d,g),Go(R,v);var H=Go(R,g);for(v=0;v<P.length;v+=2){var X=P[v],Z=P[v+1];X==="style"?Wo(d,Z):X==="dangerouslySetInnerHTML"?$o(d,Z):X==="children"?zr(d,Z):J(d,X,Z,H)}switch(R){case"input":jo(d,g);break;case"textarea":Rs(d,g);break;case"select":var Y=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?pr(d,!!g.multiple,se,!1):Y!==!!g.multiple&&(g.defaultValue!=null?pr(d,!!g.multiple,g.defaultValue,!0):pr(d,!!g.multiple,g.multiple?[]:"",!1))}d[ya]=g}catch(ce){et(r,r.return,ce)}}break;case 6:if(Un(s,r),Jn(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(ce){et(r,r.return,ce)}}break;case 3:if(Un(s,r),Jn(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(s.containerInfo)}catch(ce){et(r,r.return,ce)}break;case 4:Un(s,r),Jn(r);break;case 13:Un(s,r),Jn(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Jh=He())),c&4&&Gm(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Mt=(H=Mt)||X,Un(s,r),Mt=H):Un(s,r),Jn(r),c&8192){if(H=r.memoizedState!==null,(r.stateNode.isHidden=H)&&!X&&r.mode&1)for(le=r,X=r.child;X!==null;){for(Z=le=X;le!==null;){switch(Y=le,se=Y.child,Y.tag){case 0:case 11:case 14:case 15:ka(4,Y,Y.return);break;case 1:uo(Y,Y.return);var ue=Y.stateNode;if(typeof ue.componentWillUnmount=="function"){c=Y,a=Y.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){et(c,a,ce)}}break;case 5:uo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Jm(Z);continue}}se!==null?(se.return=Y,le=se):Jm(Z)}X=X.sibling}e:for(X=null,Z=r;;){if(Z.tag===5){if(X===null){X=Z;try{d=Z.stateNode,H?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=Z.stateNode,P=Z.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,R.style.display=Ho("display",v))}catch(ce){et(r,r.return,ce)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=H?"":Z.memoizedProps}catch(ce){et(r,r.return,ce)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Un(s,r),Jn(r),c&4&&Gm(r);break;case 21:break;default:Un(s,r),Jn(r)}}function Jn(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Wm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(zr(d,""),c.flags&=-33);var g=qm(r);Qh(r,g,d);break;case 3:case 4:var v=c.stateNode.containerInfo,R=qm(r);Gh(r,R,v);break;default:throw Error(t(161))}}catch(P){et(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function Uw(r,s,a){le=r,Ym(r)}function Ym(r,s,a){for(var c=(r.mode&1)!==0;le!==null;){var d=le,g=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||pu;if(!v){var R=d.alternate,P=R!==null&&R.memoizedState!==null||Mt;R=pu;var H=Mt;if(pu=v,(Mt=P)&&!H)for(le=d;le!==null;)v=le,P=v.child,v.tag===22&&v.memoizedState!==null?Zm(d):P!==null?(P.return=v,le=P):Zm(d);for(;g!==null;)le=g,Ym(g),g=g.sibling;le=d,pu=R,Mt=H}Xm(r)}else d.subtreeFlags&8772&&g!==null?(g.return=d,le=g):Xm(r)}}function Xm(r){for(;le!==null;){var s=le;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Mt||mu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Vn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Jp(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Jp(s,v,a)}break;case 5:var R=s.stateNode;if(a===null&&s.flags&4){a=R;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var H=s.alternate;if(H!==null){var X=H.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&Dn(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||s.flags&512&&Kh(s)}catch(Y){et(s,s.return,Y)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function Jm(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function Zm(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{mu(4,s)}catch(P){et(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){et(s,d,P)}}var g=s.return;try{Kh(s)}catch(P){et(s,g,P)}break;case 5:var v=s.return;try{Kh(s)}catch(P){et(s,v,P)}}}catch(P){et(s,s.return,P)}if(s===r){le=null;break}var R=s.sibling;if(R!==null){R.return=s.return,le=R;break}le=s.return}}var Fw=Math.ceil,gu=ie.ReactCurrentDispatcher,Yh=ie.ReactCurrentOwner,wn=ie.ReactCurrentBatchConfig,be=0,Tt=null,ut=null,kt=0,cn=0,co=ei(0),mt=0,Pa=null,ns=0,yu=0,Xh=0,xa=null,Zt=null,Jh=0,ho=1/0,Pr=null,_u=!1,Zh=null,oi=null,vu=!1,ai=null,Eu=0,Na=0,ed=null,wu=-1,Tu=0;function Wt(){return be&6?He():wu!==-1?wu:wu=He()}function li(r){return r.mode&1?be&2&&kt!==0?kt&-kt:Tw.transition!==null?(Tu===0&&(Tu=Hi()),Tu):(r=xe,r!==0||(r=window.event,r=r===void 0?16:sa(r.type)),r):1}function Fn(r,s,a,c){if(50<Na)throw Na=0,ed=null,Error(t(185));qr(r,a,c),(!(be&2)||r!==Tt)&&(r===Tt&&(!(be&2)&&(yu|=a),mt===4&&ui(r,kt)),en(r,c),a===1&&be===0&&!(s.mode&1)&&(ho=He()+500,Yl&&ni()))}function en(r,s){var a=r.callbackNode;yr(r,s);var c=$i(r,r===Tt?kt:0);if(c===0)a!==null&&ea(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ea(a),s===1)r.tag===0?ww(tg.bind(null,r)):jp(tg.bind(null,r)),yw(function(){!(be&6)&&ni()}),a=null;else{switch(Gr(c)){case 1:a=Bi;break;case 4:a=$r;break;case 16:a=pn;break;case 536870912:a=Tl;break;default:a=pn}a=ug(a,eg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function eg(r,s){if(wu=-1,Tu=0,be&6)throw Error(t(327));var a=r.callbackNode;if(fo()&&r.callbackNode!==a)return null;var c=$i(r,r===Tt?kt:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=Iu(r,c);else{s=c;var d=be;be|=2;var g=rg();(Tt!==r||kt!==s)&&(Pr=null,ho=He()+500,is(r,s));do try{zw();break}catch(R){ng(r,R)}while(!0);_h(),gu.current=g,be=d,ut!==null?s=0:(Tt=null,kt=0,s=mt)}if(s!==0){if(s===2&&(d=sn(r),d!==0&&(c=d,s=td(r,d))),s===1)throw a=Pa,is(r,0),ui(r,c),en(r,He()),a;if(s===6)ui(r,c);else{if(d=r.current.alternate,!(c&30)&&!jw(d)&&(s=Iu(r,c),s===2&&(g=sn(r),g!==0&&(c=g,s=td(r,g))),s===1))throw a=Pa,is(r,0),ui(r,c),en(r,He()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ss(r,Zt,Pr);break;case 3:if(ui(r,c),(c&130023424)===c&&(s=Jh+500-He(),10<s)){if($i(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Wt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=ah(ss.bind(null,r,Zt,Pr),s);break}ss(r,Zt,Pr);break;case 4:if(ui(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-zt(c);g=1<<v,v=s[v],v>d&&(d=v),c&=~g}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Fw(c/1960))-c,10<c){r.timeoutHandle=ah(ss.bind(null,r,Zt,Pr),c);break}ss(r,Zt,Pr);break;case 5:ss(r,Zt,Pr);break;default:throw Error(t(329))}}}return en(r,He()),r.callbackNode===a?eg.bind(null,r):null}function td(r,s){var a=xa;return r.current.memoizedState.isDehydrated&&(is(r,s).flags|=256),r=Iu(r,s),r!==2&&(s=Zt,Zt=a,s!==null&&nd(s)),r}function nd(r){Zt===null?Zt=r:Zt.push.apply(Zt,r)}function jw(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Ln(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ui(r,s){for(s&=~Xh,s&=~yu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-zt(s),c=1<<a;r[a]=-1,s&=~c}}function tg(r){if(be&6)throw Error(t(327));fo();var s=$i(r,0);if(!(s&1))return en(r,He()),null;var a=Iu(r,s);if(r.tag!==0&&a===2){var c=sn(r);c!==0&&(s=c,a=td(r,c))}if(a===1)throw a=Pa,is(r,0),ui(r,s),en(r,He()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ss(r,Zt,Pr),en(r,He()),null}function rd(r,s){var a=be;be|=1;try{return r(s)}finally{be=a,be===0&&(ho=He()+500,Yl&&ni())}}function rs(r){ai!==null&&ai.tag===0&&!(be&6)&&fo();var s=be;be|=1;var a=wn.transition,c=xe;try{if(wn.transition=null,xe=1,r)return r()}finally{xe=c,wn.transition=a,be=s,!(be&6)&&ni()}}function id(){cn=co.current,Ke(co)}function is(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,gw(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(fh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Gl();break;case 3:ao(),Ke(Yt),Ke(Lt),Ah();break;case 5:Sh(c);break;case 4:ao();break;case 13:Ke(Ye);break;case 19:Ke(Ye);break;case 10:vh(c.type._context);break;case 22:case 23:id()}a=a.return}if(Tt=r,ut=r=ci(r.current,null),kt=cn=s,mt=0,Pa=null,Xh=yu=ns=0,Zt=xa=null,Zi!==null){for(s=0;s<Zi.length;s++)if(a=Zi[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=d,c.next=v}a.pending=c}Zi=null}return r}function ng(r,s){do{var a=ut;try{if(_h(),ou.current=cu,au){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}au=!1}if(ts=0,wt=pt=Xe=null,Ia=!1,Sa=0,Yh.current=null,a===null||a.return===null){mt=1,Pa=s,ut=null;break}e:{var g=r,v=a.return,R=a,P=s;if(s=kt,R.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var H=P,X=R,Z=X.tag;if(!(X.mode&1)&&(Z===0||Z===11||Z===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=Cm(v);if(se!==null){se.flags&=-257,km(se,v,R,g,s),se.mode&1&&Am(g,H,s),s=se,P=H;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(P),s.updateQueue=ce}else ue.add(P);break e}else{if(!(s&1)){Am(g,H,s),sd();break e}P=Error(t(426))}}else if(Qe&&R.mode&1){var ot=Cm(v);if(ot!==null){!(ot.flags&65536)&&(ot.flags|=256),km(ot,v,R,g,s),gh(lo(P,R));break e}}g=P=lo(P,R),mt!==4&&(mt=2),xa===null?xa=[g]:xa.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var j=Sm(g,P,s);Xp(g,j);break e;case 1:R=P;var O=g.type,B=g.stateNode;if(!(g.flags&128)&&(typeof O.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(oi===null||!oi.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var te=Rm(g,R,s);Xp(g,te);break e}}g=g.return}while(g!==null)}sg(a)}catch(he){s=he,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function rg(){var r=gu.current;return gu.current=cu,r===null?cu:r}function sd(){(mt===0||mt===3||mt===2)&&(mt=4),Tt===null||!(ns&268435455)&&!(yu&268435455)||ui(Tt,kt)}function Iu(r,s){var a=be;be|=2;var c=rg();(Tt!==r||kt!==s)&&(Pr=null,is(r,s));do try{Bw();break}catch(d){ng(r,d)}while(!0);if(_h(),be=a,gu.current=c,ut!==null)throw Error(t(261));return Tt=null,kt=0,mt}function Bw(){for(;ut!==null;)ig(ut)}function zw(){for(;ut!==null&&!El();)ig(ut)}function ig(r){var s=lg(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?sg(r):ut=s,Yh.current=null}function sg(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=bw(a,s),a!==null){a.flags&=32767,ut=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{mt=6,ut=null;return}}else if(a=Lw(a,s,cn),a!==null){ut=a;return}if(s=s.sibling,s!==null){ut=s;return}ut=s=r}while(s!==null);mt===0&&(mt=5)}function ss(r,s,a){var c=xe,d=wn.transition;try{wn.transition=null,xe=1,$w(r,s,a,c)}finally{wn.transition=d,xe=c}return null}function $w(r,s,a,c){do fo();while(ai!==null);if(be&6)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(r,g),r===Tt&&(ut=Tt=null,kt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||vu||(vu=!0,ug(pn,function(){return fo(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=wn.transition,wn.transition=null;var v=xe;xe=1;var R=be;be|=4,Yh.current=null,Mw(r,a),Qm(a,r),uw(sh),Yr=!!ih,sh=ih=null,r.current=a,Uw(a),zc(),be=R,xe=v,wn.transition=g}else r.current=a;if(vu&&(vu=!1,ai=r,Eu=d),g=r.pendingLanes,g===0&&(oi=null),Il(a.stateNode),en(r,He()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(_u)throw _u=!1,r=Zh,Zh=null,r;return Eu&1&&r.tag!==0&&fo(),g=r.pendingLanes,g&1?r===ed?Na++:(Na=0,ed=r):Na=0,ni(),null}function fo(){if(ai!==null){var r=Gr(Eu),s=wn.transition,a=xe;try{if(wn.transition=null,xe=16>r?16:r,ai===null)var c=!1;else{if(r=ai,ai=null,Eu=0,be&6)throw Error(t(331));var d=be;for(be|=4,le=r.current;le!==null;){var g=le,v=g.child;if(le.flags&16){var R=g.deletions;if(R!==null){for(var P=0;P<R.length;P++){var H=R[P];for(le=H;le!==null;){var X=le;switch(X.tag){case 0:case 11:case 15:ka(8,X,g)}var Z=X.child;if(Z!==null)Z.return=X,le=Z;else for(;le!==null;){X=le;var Y=X.sibling,se=X.return;if(Hm(X),X===H){le=null;break}if(Y!==null){Y.return=se,le=Y;break}le=se}}}var ue=g.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var ot=ce.sibling;ce.sibling=null,ce=ot}while(ce!==null)}}le=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,le=v;else e:for(;le!==null;){if(g=le,g.flags&2048)switch(g.tag){case 0:case 11:case 15:ka(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,le=j;break e}le=g.return}}var O=r.current;for(le=O;le!==null;){v=le;var B=v.child;if(v.subtreeFlags&2064&&B!==null)B.return=v,le=B;else e:for(v=O;le!==null;){if(R=le,R.flags&2048)try{switch(R.tag){case 0:case 11:case 15:mu(9,R)}}catch(he){et(R,R.return,he)}if(R===v){le=null;break e}var te=R.sibling;if(te!==null){te.return=R.return,le=te;break e}le=R.return}}if(be=d,ni(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(zi,r)}catch{}c=!0}return c}finally{xe=a,wn.transition=s}}return!1}function og(r,s,a){s=lo(a,s),s=Sm(r,s,1),r=ii(r,s,1),s=Wt(),r!==null&&(qr(r,1,s),en(r,s))}function et(r,s,a){if(r.tag===3)og(r,r,a);else for(;s!==null;){if(s.tag===3){og(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(oi===null||!oi.has(c))){r=lo(a,r),r=Rm(s,r,1),s=ii(s,r,1),r=Wt(),s!==null&&(qr(s,1,r),en(s,r));break}}s=s.return}}function Hw(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Wt(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(kt&a)===a&&(mt===4||mt===3&&(kt&130023424)===kt&&500>He()-Jh?is(r,0):Xh|=a),en(r,s)}function ag(r,s){s===0&&(r.mode&1?(s=bs,bs<<=1,!(bs&130023424)&&(bs=4194304)):s=1);var a=Wt();r=Ar(r,s),r!==null&&(qr(r,s,a),en(r,a))}function Ww(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),ag(r,a)}function qw(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),ag(r,a)}var lg;lg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Yt.current)Jt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Jt=!1,Ow(r,s,a);Jt=!!(r.flags&131072)}else Jt=!1,Qe&&s.flags&1048576&&Bp(s,Jl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;fu(r,s),r=s.pendingProps;var d=eo(s,Lt.current);oo(s,a),d=Ph(null,s,c,r,d,a);var g=xh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xt(c)?(g=!0,Ql(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Th(s),d.updater=hu,s.stateNode=d,d._reactInternals=s,Vh(s,c,r,a),s=jh(null,s,c,!0,g,a)):(s.tag=0,Qe&&g&&dh(s),Ht(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(fu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=Gw(c),r=Vn(c,r),d){case 0:s=Fh(null,s,c,r,a);break e;case 1:s=Lm(null,s,c,r,a);break e;case 11:s=Pm(null,s,c,r,a);break e;case 14:s=xm(null,s,c,Vn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),Fh(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),Lm(r,s,c,d,a);case 3:e:{if(bm(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,Yp(r,s),iu(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=lo(Error(t(423)),s),s=Vm(r,s,c,a,d);break e}else if(c!==d){d=lo(Error(t(424)),s),s=Vm(r,s,c,a,d);break e}else for(un=Zr(s.stateNode.containerInfo.firstChild),ln=s,Qe=!0,bn=null,a=Gp(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ro(),c===d){s=kr(r,s,a);break e}Ht(r,s,c,a)}s=s.child}return s;case 5:return Zp(s),r===null&&mh(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,v=d.children,oh(c,d)?v=null:g!==null&&oh(c,g)&&(s.flags|=32),Om(r,s),Ht(r,s,v,a),s.child;case 6:return r===null&&mh(s),null;case 13:return Mm(r,s,a);case 4:return Ih(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=io(s,null,c,a):Ht(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),Pm(r,s,c,d,a);case 7:return Ht(r,s,s.pendingProps,a),s.child;case 8:return Ht(r,s,s.pendingProps.children,a),s.child;case 12:return Ht(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,v=d.value,We(tu,c._currentValue),c._currentValue=v,g!==null)if(Ln(g.value,v)){if(g.children===d.children&&!Yt.current){s=kr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){v=g.child;for(var P=R.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=Cr(-1,a&-a),P.tag=2;var H=g.updateQueue;if(H!==null){H=H.shared;var X=H.pending;X===null?P.next=P:(P.next=X.next,X.next=P),H.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Eh(g.return,a,s),R.lanes|=a;break}P=P.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,R=v.alternate,R!==null&&(R.lanes|=a),Eh(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}Ht(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,oo(s,a),d=vn(d),c=c(d),s.flags|=1,Ht(r,s,c,a),s.child;case 14:return c=s.type,d=Vn(c,s.pendingProps),d=Vn(c.type,d),xm(r,s,c,d,a);case 15:return Nm(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Vn(c,d),fu(r,s),s.tag=1,Xt(c)?(r=!0,Ql(s)):r=!1,oo(s,a),Tm(s,c,d),Vh(s,c,d,a),jh(null,s,c,!0,r,a);case 19:return Fm(r,s,a);case 22:return Dm(r,s,a)}throw Error(t(156,s.tag))};function ug(r,s){return Os(r,s)}function Kw(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(r,s,a,c){return new Kw(r,s,a,c)}function od(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Gw(r){if(typeof r=="function")return od(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Dt)return 14}return 2}function ci(r,s){var a=r.alternate;return a===null?(a=Tn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Su(r,s,a,c,d,g){var v=2;if(c=r,typeof r=="function")od(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case k:return os(a.children,d,g,s);case T:v=8,d|=8;break;case A:return r=Tn(12,a,s,d|2),r.elementType=A,r.lanes=g,r;case C:return r=Tn(13,a,s,d),r.elementType=C,r.lanes=g,r;case it:return r=Tn(19,a,s,d),r.elementType=it,r.lanes=g,r;case Be:return Ru(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:v=10;break e;case L:v=9;break e;case M:v=11;break e;case Dt:v=14;break e;case Ot:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Tn(v,a,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function os(r,s,a,c){return r=Tn(7,r,c,s),r.lanes=a,r}function Ru(r,s,a,c){return r=Tn(22,r,c,s),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function ad(r,s,a){return r=Tn(6,r,null,s),r.lanes=a,r}function ld(r,s,a){return s=Tn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function Qw(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wr(0),this.expirationTimes=Wr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ud(r,s,a,c,d,g,v,R,P){return r=new Qw(r,s,a,R,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Tn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Th(g),r}function Yw(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function cg(r){if(!r)return ti;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Xt(a))return Up(r,a,s)}return s}function hg(r,s,a,c,d,g,v,R,P){return r=ud(a,c,!0,r,d,g,v,R,P),r.context=cg(null),a=r.current,c=Wt(),d=li(a),g=Cr(c,d),g.callback=s??null,ii(a,g,d),r.current.lanes=d,qr(r,d,c),en(r,c),r}function Au(r,s,a,c){var d=s.current,g=Wt(),v=li(d);return a=cg(a),s.context===null?s.context=a:s.pendingContext=a,s=Cr(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=ii(d,s,v),r!==null&&(Fn(r,d,v,g),ru(r,d,v)),v}function Cu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function dg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function cd(r,s){dg(r,s),(r=r.alternate)&&dg(r,s)}var fg=typeof reportError=="function"?reportError:function(r){console.error(r)};function hd(r){this._internalRoot=r}ku.prototype.render=hd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Au(r,s,null,null)},ku.prototype.unmount=hd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;rs(function(){Au(null,r,null,null)}),s[Tr]=null}};function ku(r){this._internalRoot=r}ku.prototype.unstable_scheduleHydration=function(r){if(r){var s=kl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Wn.length&&s!==0&&s<Wn[a].priority;a++);Wn.splice(a,0,r),a===0&&Nl(r)}};function dd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Pu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function pg(){}function Xw(r,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var H=Cu(v);g.call(H)}}var v=hg(s,c,r,0,null,!1,!1,"",pg);return r._reactRootContainer=v,r[Tr]=v.current,ma(r.nodeType===8?r.parentNode:r),rs(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var R=c;c=function(){var H=Cu(P);R.call(H)}}var P=ud(r,0,!1,null,null,!1,!1,"",pg);return r._reactRootContainer=P,r[Tr]=P.current,ma(r.nodeType===8?r.parentNode:r),rs(function(){Au(s,P,a,c)}),P}function xu(r,s,a,c,d){var g=a._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var R=d;d=function(){var P=Cu(v);R.call(P)}}Au(s,v,r,d)}else v=Xw(a,s,r,d,c);return Cu(v)}Al=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Hr(s.pendingLanes);a!==0&&(Kr(s,a|1),en(s,He()),!(be&6)&&(ho=He()+500,ni()))}break;case 13:rs(function(){var c=Ar(r,1);if(c!==null){var d=Wt();Fn(c,r,1,d)}}),cd(r,1)}},Vs=function(r){if(r.tag===13){var s=Ar(r,134217728);if(s!==null){var a=Wt();Fn(s,r,134217728,a)}cd(r,134217728)}},Cl=function(r){if(r.tag===13){var s=li(r),a=Ar(r,s);if(a!==null){var c=Wt();Fn(a,r,s,c)}cd(r,s)}},kl=function(){return xe},Pl=function(r,s){var a=xe;try{return xe=r,s()}finally{xe=a}},Cs=function(r,s,a){switch(s){case"input":if(jo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=Kl(c);if(!d)throw Error(t(90));ws(c),jo(c,d)}}}break;case"textarea":Rs(r,a);break;case"select":s=a.value,s!=null&&pr(r,!!a.multiple,s,!1)}},Mi=rd,Yo=rs;var Jw={usingClientEntryPoint:!1,Events:[_a,Js,Kl,$n,Qo,rd]},Da={findFiberByHostInstance:Qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zw={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Zo(r),r===null?null:r.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{zi=Nu.inject(Zw),rn=Nu}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jw,tn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(s))throw Error(t(200));return Yw(r,s,null,a)},tn.createRoot=function(r,s){if(!dd(r))throw Error(t(299));var a=!1,c="",d=fg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=ud(r,1,!1,null,null,a,!1,c,d),r[Tr]=s.current,ma(r.nodeType===8?r.parentNode:r),new hd(s)},tn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Zo(s),r=r===null?null:r.stateNode,r},tn.flushSync=function(r){return rs(r)},tn.hydrate=function(r,s,a){if(!Pu(s))throw Error(t(200));return xu(null,r,s,!0,a)},tn.hydrateRoot=function(r,s,a){if(!dd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",v=fg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=hg(s,null,r,1,a??null,d,!1,g,v),r[Tr]=s.current,ma(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new ku(s)},tn.render=function(r,s,a){if(!Pu(s))throw Error(t(200));return xu(null,r,s,!1,a)},tn.unmountComponentAtNode=function(r){if(!Pu(r))throw Error(t(40));return r._reactRootContainer?(rs(function(){xu(null,null,r,!1,function(){r._reactRootContainer=null,r[Tr]=null})}),!0):!1},tn.unstable_batchedUpdates=rd,tn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Pu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return xu(r,s,a,!1,c)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var Tg;function lT(){if(Tg)return md.exports;Tg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),md.exports=aT(),md.exports}var Ig;function uT(){if(Ig)return Du;Ig=1;var n=lT();return Du.createRoot=n.createRoot,Du.hydrateRoot=n.hydrateRoot,Du}var cT=uT(),Ou={};/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var Sg;function hT(){if(Sg)return Ou;Sg=1,Ou.parse=l,Ou.serialize=p;var n=Object.prototype.toString,e=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,t=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/;function l(S,D){if(typeof S!="string")throw new TypeError("argument str must be a string");var V={},z=S.length;if(z<2)return V;var b=D&&D.decode||y,q=0,K=0,J=0;do{if(K=S.indexOf("=",q),K===-1)break;if(J=S.indexOf(";",q),J===-1)J=z;else if(K>J){q=S.lastIndexOf(";",K-1)+1;continue}var ie=h(S,q,K),fe=f(S,K,ie),de=S.slice(ie,fe);if(!V.hasOwnProperty(de)){var k=h(S,K+1,J),T=f(S,J,k);S.charCodeAt(k)===34&&S.charCodeAt(T-1)===34&&(k++,T--);var A=S.slice(k,T);V[de]=I(A,b)}q=J+1}while(q<z);return V}function h(S,D,V){do{var z=S.charCodeAt(D);if(z!==32&&z!==9)return D}while(++D<V);return V}function f(S,D,V){for(;D>V;){var z=S.charCodeAt(--D);if(z!==32&&z!==9)return D+1}return V}function p(S,D,V){var z=V&&V.encode||encodeURIComponent;if(typeof z!="function")throw new TypeError("option encode is invalid");if(!e.test(S))throw new TypeError("argument name is invalid");var b=z(D);if(!t.test(b))throw new TypeError("argument val is invalid");var q=S+"="+b;if(!V)return q;if(V.maxAge!=null){var K=Math.floor(V.maxAge);if(!isFinite(K))throw new TypeError("option maxAge is invalid");q+="; Max-Age="+K}if(V.domain){if(!i.test(V.domain))throw new TypeError("option domain is invalid");q+="; Domain="+V.domain}if(V.path){if(!o.test(V.path))throw new TypeError("option path is invalid");q+="; Path="+V.path}if(V.expires){var J=V.expires;if(!E(J)||isNaN(J.valueOf()))throw new TypeError("option expires is invalid");q+="; Expires="+J.toUTCString()}if(V.httpOnly&&(q+="; HttpOnly"),V.secure&&(q+="; Secure"),V.partitioned&&(q+="; Partitioned"),V.priority){var ie=typeof V.priority=="string"?V.priority.toLowerCase():V.priority;switch(ie){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(V.sameSite){var fe=typeof V.sameSite=="string"?V.sameSite.toLowerCase():V.sameSite;switch(fe){case!0:q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"strict":q+="; SameSite=Strict";break;case"none":q+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return q}function y(S){return S.indexOf("%")!==-1?decodeURIComponent(S):S}function E(S){return n.call(S)==="[object Date]"}function I(S,D){try{return D(S)}catch{return S}}return Ou}hT();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Rg="popstate";function dT(n={}){function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return Ud("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Ka(o)}return pT(e,t,null,n)}function Je(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function or(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fT(){return Math.random().toString(36).substring(2,10)}function Ag(n,e){return{usr:n.state,key:n.key,idx:e}}function Ud(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?No(e):e,state:t,key:e&&e.key||i||fT()}}function Ka({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function No(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function pT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f="POP",p=null,y=E();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function E(){return(h.state||{idx:null}).idx}function I(){f="POP";let b=E(),q=b==null?null:b-y;y=b,p&&p({action:f,location:z.location,delta:q})}function S(b,q){f="PUSH";let K=Ud(z.location,b,q);y=E()+1;let J=Ag(K,y),ie=z.createHref(K);try{h.pushState(J,"",ie)}catch(fe){if(fe instanceof DOMException&&fe.name==="DataCloneError")throw fe;o.location.assign(ie)}l&&p&&p({action:f,location:z.location,delta:1})}function D(b,q){f="REPLACE";let K=Ud(z.location,b,q);y=E();let J=Ag(K,y),ie=z.createHref(K);h.replaceState(J,"",ie),l&&p&&p({action:f,location:z.location,delta:0})}function V(b){let q=o.location.origin!=="null"?o.location.origin:o.location.href,K=typeof b=="string"?b:Ka(b);return K=K.replace(/ $/,"%20"),Je(q,`No window.location.(origin|href) available to create URL for href: ${K}`),new URL(K,q)}let z={get action(){return f},get location(){return n(o,h)},listen(b){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Rg,I),p=b,()=>{o.removeEventListener(Rg,I),p=null}},createHref(b){return e(o,b)},createURL:V,encodeLocation(b){let q=V(b);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:S,replace:D,go(b){return h.go(b)}};return z}function t_(n,e,t="/"){return mT(n,e,t,!1)}function mT(n,e,t,i){let o=typeof e=="string"?No(e):e,l=Si(o.pathname||"/",t);if(l==null)return null;let h=n_(n);gT(h);let f=null;for(let p=0;f==null&&p<h.length;++p){let y=CT(l);f=RT(h[p],y,i)}return f}function n_(n,e=[],t=[],i=""){let o=(l,h,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(Je(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=br([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(Je(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),n_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:IT(y,l.index),routesMeta:E})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let p of r_(l.path))o(l,h,p)}),e}function r_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=r_(i.join("/")),f=[];return f.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...h),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function gT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:ST(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var yT=/^:[\w-]+$/,_T=3,vT=2,ET=1,wT=10,TT=-2,Cg=n=>n==="*";function IT(n,e){let t=n.split("/"),i=t.length;return t.some(Cg)&&(i+=TT),e&&(i+=vT),t.filter(o=>!Cg(o)).reduce((o,l)=>o+(yT.test(l)?_T:l===""?ET:wT),i)}function ST(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function RT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",h=[];for(let f=0;f<i.length;++f){let p=i[f],y=f===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",I=ec({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),S=p.route;if(!I&&y&&t&&!i[i.length-1].route.index&&(I=ec({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!I)return null;Object.assign(o,I.params),h.push({params:o,pathname:br([l,I.pathname]),pathnameBase:NT(br([l,I.pathnameBase])),route:S}),I.pathnameBase!=="/"&&(l=br([l,I.pathnameBase]))}return h}function ec(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=AT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,{paramName:E,isOptional:I},S)=>{if(E==="*"){let V=f[S]||"";h=l.slice(0,l.length-V.length).replace(/(.)\/+$/,"$1")}const D=f[S];return I&&!D?y[E]=void 0:y[E]=(D||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function AT(n,e=!1,t=!0){or(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function CT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return or(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Si(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function kT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?No(n):n;return{pathname:t?t.startsWith("/")?t:PT(t,e):e,search:DT(i),hash:OT(o)}}function PT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function _d(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function i_(n){let e=xT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function s_(n,e,t,i=!1){let o;typeof n=="string"?o=No(n):(o={...n},Je(!o.pathname||!o.pathname.includes("?"),_d("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),_d("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),_d("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let I=e.length-1;if(!i&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),I-=1;o.pathname=S.join("/")}f=I>=0?e[I]:"/"}let p=kT(o,f),y=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var br=n=>n.join("/").replace(/\/\/+/g,"/"),NT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),DT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,OT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function LT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var o_=["POST","PUT","PATCH","DELETE"];new Set(o_);var bT=["GET",...o_];new Set(bT);var Do=$.createContext(null);Do.displayName="DataRouter";var Ec=$.createContext(null);Ec.displayName="DataRouterState";var a_=$.createContext({isTransitioning:!1});a_.displayName="ViewTransition";var VT=$.createContext(new Map);VT.displayName="Fetchers";var MT=$.createContext(null);MT.displayName="Await";var ur=$.createContext(null);ur.displayName="Navigation";var sl=$.createContext(null);sl.displayName="Location";var cr=$.createContext({outlet:null,matches:[],isDataRoute:!1});cr.displayName="Route";var cf=$.createContext(null);cf.displayName="RouteError";function UT(n,{relative:e}={}){Je(ol(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=$.useContext(ur),{hash:o,pathname:l,search:h}=al(n,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:br([t,l])),i.createHref({pathname:f,search:h,hash:o})}function ol(){return $.useContext(sl)!=null}function ps(){return Je(ol(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(sl).location}var l_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function u_(n){$.useContext(ur).static||$.useLayoutEffect(n)}function FT(){let{isDataRoute:n}=$.useContext(cr);return n?ZT():jT()}function jT(){Je(ol(),"useNavigate() may be used only in the context of a <Router> component.");let n=$.useContext(Do),{basename:e,navigator:t}=$.useContext(ur),{matches:i}=$.useContext(cr),{pathname:o}=ps(),l=JSON.stringify(i_(i)),h=$.useRef(!1);return u_(()=>{h.current=!0}),$.useCallback((p,y={})=>{if(or(h.current,l_),!h.current)return;if(typeof p=="number"){t.go(p);return}let E=s_(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:br([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,l,o,n])}$.createContext(null);function BT(){let{matches:n}=$.useContext(cr),e=n[n.length-1];return e?e.params:{}}function al(n,{relative:e}={}){let{matches:t}=$.useContext(cr),{pathname:i}=ps(),o=JSON.stringify(i_(t));return $.useMemo(()=>s_(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function zT(n,e){return c_(n,e)}function c_(n,e,t,i){var q;Je(ol(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=$.useContext(ur),{matches:l}=$.useContext(cr),h=l[l.length-1],f=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",E=h&&h.route;{let K=E&&E.path||"";h_(p,!E||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let I=ps(),S;if(e){let K=typeof e=="string"?No(e):e;Je(y==="/"||((q=K.pathname)==null?void 0:q.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${K.pathname}" was given in the \`location\` prop.`),S=K}else S=I;let D=S.pathname||"/",V=D;if(y!=="/"){let K=y.replace(/^\//,"").split("/");V="/"+D.replace(/^\//,"").split("/").slice(K.length).join("/")}let z=t_(n,{pathname:V});or(E||z!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),or(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=KT(z&&z.map(K=>Object.assign({},K,{params:Object.assign({},f,K.params),pathname:br([y,o.encodeLocation?o.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?y:br([y,o.encodeLocation?o.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),l,t,i);return e&&b?$.createElement(sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},b):b}function $T(){let n=JT(),e=LT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:l},"ErrorBoundary")," or"," ",$.createElement("code",{style:l},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:o},t):null,h)}var HT=$.createElement($T,null),WT=class extends $.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?$.createElement(cr.Provider,{value:this.props.routeContext},$.createElement(cf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function qT({routeContext:n,match:e,children:t}){let i=$.useContext(Do);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(cr.Provider,{value:n},t)}function KT(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,f=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=p),y.route.id){let{loaderData:E,errors:I}=t,S=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!I||I[y.route.id]===void 0);if(y.route.lazy||S){h=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let I,S=!1,D=null,V=null;t&&(I=l&&y.route.id?l[y.route.id]:void 0,D=y.route.errorElement||HT,h&&(f<0&&E===0?(h_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,V=null):f===E&&(S=!0,V=y.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,E+1)),b=()=>{let q;return I?q=D:S?q=V:y.route.Component?q=$.createElement(y.route.Component,null):y.route.element?q=y.route.element:q=p,$.createElement(qT,{match:y,routeContext:{outlet:p,matches:z,isDataRoute:t!=null},children:q})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?$.createElement(WT,{location:t.location,revalidation:t.revalidation,component:D,error:I,children:b(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):b()},null)}function hf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function GT(n){let e=$.useContext(Do);return Je(e,hf(n)),e}function QT(n){let e=$.useContext(Ec);return Je(e,hf(n)),e}function YT(n){let e=$.useContext(cr);return Je(e,hf(n)),e}function df(n){let e=YT(n),t=e.matches[e.matches.length-1];return Je(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function XT(){return df("useRouteId")}function JT(){var i;let n=$.useContext(cf),e=QT("useRouteError"),t=df("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function ZT(){let{router:n}=GT("useNavigate"),e=df("useNavigate"),t=$.useRef(!1);return u_(()=>{t.current=!0}),$.useCallback(async(o,l={})=>{or(t.current,l_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var kg={};function h_(n,e,t){!e&&!kg[n]&&(kg[n]=!0,or(!1,t))}$.memo(eI);function eI({routes:n,future:e,state:t}){return c_(n,void 0,t,e)}function xr(n){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function tI({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Je(!ol(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),f=$.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=No(t));let{pathname:p="/",search:y="",hash:E="",state:I=null,key:S="default"}=t,D=$.useMemo(()=>{let V=Si(p,h);return V==null?null:{location:{pathname:V,search:y,hash:E,state:I,key:S},navigationType:i}},[h,p,y,E,I,S,i]);return or(D!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:$.createElement(ur.Provider,{value:f},$.createElement(sl.Provider,{children:e,value:D}))}function nI({children:n,location:e}){return zT(Fd(n),e)}function Fd(n,e=[]){let t=[];return $.Children.forEach(n,(i,o)=>{if(!$.isValidElement(i))return;let l=[...e,o];if(i.type===$.Fragment){t.push.apply(t,Fd(i.props.children,l));return}Je(i.type===xr,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Fd(i.props.children,l)),t.push(h)}),t}var $u="get",Hu="application/x-www-form-urlencoded";function wc(n){return n!=null&&typeof n.tagName=="string"}function rI(n){return wc(n)&&n.tagName.toLowerCase()==="button"}function iI(n){return wc(n)&&n.tagName.toLowerCase()==="form"}function sI(n){return wc(n)&&n.tagName.toLowerCase()==="input"}function oI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function aI(n,e){return n.button===0&&(!e||e==="_self")&&!oI(n)}var Lu=null;function lI(){if(Lu===null)try{new FormData(document.createElement("form"),0),Lu=!1}catch{Lu=!0}return Lu}var uI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vd(n){return n!=null&&!uI.has(n)?(or(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hu}"`),null):n}function cI(n,e){let t,i,o,l,h;if(iI(n)){let f=n.getAttribute("action");i=f?Si(f,e):null,t=n.getAttribute("method")||$u,o=vd(n.getAttribute("enctype"))||Hu,l=new FormData(n)}else if(rI(n)||sI(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||f.getAttribute("action");if(i=p?Si(p,e):null,t=n.getAttribute("formmethod")||f.getAttribute("method")||$u,o=vd(n.getAttribute("formenctype"))||vd(f.getAttribute("enctype"))||Hu,l=new FormData(f,n),!lI()){let{name:y,type:E,value:I}=n;if(E==="image"){let S=y?`${y}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else y&&l.append(y,I)}}else{if(wc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=$u,i=null,o=Hu,h=n}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}function ff(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function hI(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dI(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function fI(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await hI(l,t);return h.links?h.links():[]}return[]}));return yI(i.flat(1).filter(dI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Pg(n,e,t,i,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,f=(p,y)=>{var E;return t[y].pathname!==p.pathname||((E=t[y].route.path)==null?void 0:E.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||f(p,y)):l==="data"?e.filter((p,y)=>{var I;let E=i.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,y)||f(p,y))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((I=t[0])==null?void 0:I.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function pI(n,e){return mI(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function mI(n){return[...new Set(n)]}function gI(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function yI(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(gI(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function _I(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function vI(){let n=$.useContext(Do);return ff(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function EI(){let n=$.useContext(Ec);return ff(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var pf=$.createContext(void 0);pf.displayName="FrameworkContext";function d_(){let n=$.useContext(pf);return ff(n,"You must render this element inside a <HydratedRouter> element"),n}function wI(n,e){let t=$.useContext(pf),[i,o]=$.useState(!1),[l,h]=$.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:I}=e,S=$.useRef(null);$.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let z=q=>{q.forEach(K=>{h(K.isIntersecting)})},b=new IntersectionObserver(z,{threshold:.5});return S.current&&b.observe(S.current),()=>{b.disconnect()}}},[n]),$.useEffect(()=>{if(i){let z=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(z)}}},[i]);let D=()=>{o(!0)},V=()=>{o(!1),h(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:La(f,D),onBlur:La(p,V),onMouseEnter:La(y,D),onMouseLeave:La(E,V),onTouchStart:La(I,D)}]:[!1,S,{}]}function La(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function TI({page:n,...e}){let{router:t}=vI(),i=$.useMemo(()=>t_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?$.createElement(SI,{page:n,matches:i,...e}):null}function II(n){let{manifest:e,routeModules:t}=d_(),[i,o]=$.useState([]);return $.useEffect(()=>{let l=!1;return fI(n,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[n,e,t]),i}function SI({page:n,matches:e,...t}){let i=ps(),{manifest:o,routeModules:l}=d_(),{loaderData:h,matches:f}=EI(),p=$.useMemo(()=>Pg(n,e,f,o,i,"data"),[n,e,f,o,i]),y=$.useMemo(()=>Pg(n,e,f,o,i,"assets"),[n,e,f,o,i]),E=$.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let D=new Set,V=!1;if(e.forEach(b=>{var K;let q=o.routes[b.route.id];!q||!q.hasLoader||(!p.some(J=>J.route.id===b.route.id)&&b.route.id in h&&((K=l[b.route.id])!=null&&K.shouldRevalidate)||q.hasClientLoader?V=!0:D.add(b.route.id))}),D.size===0)return[];let z=_I(n);return V&&D.size>0&&z.searchParams.set("_routes",e.filter(b=>D.has(b.route.id)).map(b=>b.route.id).join(",")),[z.pathname+z.search]},[h,i,o,p,e,n,l]),I=$.useMemo(()=>pI(y,o),[y,o]),S=II(y);return $.createElement($.Fragment,null,E.map(D=>$.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...t})),I.map(D=>$.createElement("link",{key:D,rel:"modulepreload",href:D,...t})),S.map(({key:D,link:V})=>$.createElement("link",{key:D,...V})))}function RI(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var f_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{f_&&(window.__reactRouterVersion="7.1.1")}catch{}function AI({basename:n,children:e,window:t}){let i=$.useRef();i.current==null&&(i.current=dT({window:t,v5Compat:!0}));let o=i.current,[l,h]=$.useState({action:o.action,location:o.location}),f=$.useCallback(p=>{$.startTransition(()=>h(p))},[h]);return $.useLayoutEffect(()=>o.listen(f),[o,f]),$.createElement(tI,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var p_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hn=$.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:f,target:p,to:y,preventScrollReset:E,viewTransition:I,...S},D){let{basename:V}=$.useContext(ur),z=typeof y=="string"&&p_.test(y),b,q=!1;if(typeof y=="string"&&z&&(b=y,f_))try{let A=new URL(window.location.href),x=y.startsWith("//")?new URL(A.protocol+y):new URL(y),L=Si(x.pathname,V);x.origin===A.origin&&L!=null?y=L+x.search+x.hash:q=!0}catch{or(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=UT(y,{relative:o}),[J,ie,fe]=wI(i,S),de=xI(y,{replace:h,state:f,target:p,preventScrollReset:E,relative:o,viewTransition:I});function k(A){e&&e(A),A.defaultPrevented||de(A)}let T=$.createElement("a",{...S,...fe,href:b||K,onClick:q||l?e:k,ref:RI(D,ie),target:p,"data-discover":!z&&t==="render"?"true":void 0});return J&&!z?$.createElement($.Fragment,null,T,$.createElement(TI,{page:K})):T});hn.displayName="Link";var CI=$.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:f,children:p,...y},E){let I=al(h,{relative:y.relative}),S=ps(),D=$.useContext(Ec),{navigator:V,basename:z}=$.useContext(ur),b=D!=null&&bI(I)&&f===!0,q=V.encodeLocation?V.encodeLocation(I).pathname:I.pathname,K=S.pathname,J=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;t||(K=K.toLowerCase(),J=J?J.toLowerCase():null,q=q.toLowerCase()),J&&z&&(J=Si(J,z)||J);const ie=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let fe=K===q||!o&&K.startsWith(q)&&K.charAt(ie)==="/",de=J!=null&&(J===q||!o&&J.startsWith(q)&&J.charAt(q.length)==="/"),k={isActive:fe,isPending:de,isTransitioning:b},T=fe?e:void 0,A;typeof i=="function"?A=i(k):A=[i,fe?"active":null,de?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let x=typeof l=="function"?l(k):l;return $.createElement(hn,{...y,"aria-current":T,className:A,ref:E,style:x,to:h,viewTransition:f},typeof p=="function"?p(k):p)});CI.displayName="NavLink";var kI=$.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=$u,action:f,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:I,...S},D)=>{let V=OI(),z=LI(f,{relative:y}),b=h.toLowerCase()==="get"?"get":"post",q=typeof f=="string"&&p_.test(f),K=J=>{if(p&&p(J),J.defaultPrevented)return;J.preventDefault();let ie=J.nativeEvent.submitter,fe=(ie==null?void 0:ie.getAttribute("formmethod"))||h;V(ie||J.currentTarget,{fetcherKey:e,method:fe,navigate:t,replace:o,state:l,relative:y,preventScrollReset:E,viewTransition:I})};return $.createElement("form",{ref:D,method:b,action:z,onSubmit:i?p:K,...S,"data-discover":!q&&n==="render"?"true":void 0})});kI.displayName="Form";function PI(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function m_(n){let e=$.useContext(Do);return Je(e,PI(n)),e}function xI(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let f=FT(),p=ps(),y=al(n,{relative:l});return $.useCallback(E=>{if(aI(E,e)){E.preventDefault();let I=t!==void 0?t:Ka(p)===Ka(y);f(n,{replace:I,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[p,f,y,t,i,e,n,o,l,h])}var NI=0,DI=()=>`__${String(++NI)}__`;function OI(){let{router:n}=m_("useSubmit"),{basename:e}=$.useContext(ur),t=XT();return $.useCallback(async(i,o={})=>{let{action:l,method:h,encType:f,formData:p,body:y}=cI(i,e);if(o.navigate===!1){let E=o.fetcherKey||DI();await n.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function LI(n,{relative:e}={}){let{basename:t}=$.useContext(ur),i=$.useContext(cr);Je(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...al(n||".",{relative:e})},h=ps();if(n==null){l.search=h.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(E=>E==="")){f.delete("index"),p.filter(I=>I).forEach(I=>f.append("index",I));let E=f.toString();l.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:br([t,l.pathname])),Ka(l)}function bI(n,e={}){let t=$.useContext(a_);Je(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=m_("useViewTransitionState"),o=al(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Si(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=Si(t.nextLocation.pathname,i)||t.nextLocation.pathname;return ec(o.pathname,h)!=null||ec(o.pathname,l)!=null}new TextEncoder;var Ed={exports:{}},wd={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function VI(){if(xg)return wd;xg=1;var n=vc();function e(p,y){return p===y&&(p!==0||1/p===1/y)||p!==p&&y!==y}var t=typeof Object.is=="function"?Object.is:e,i=n.useSyncExternalStore,o=n.useRef,l=n.useEffect,h=n.useMemo,f=n.useDebugValue;return wd.useSyncExternalStoreWithSelector=function(p,y,E,I,S){var D=o(null);if(D.current===null){var V={hasValue:!1,value:null};D.current=V}else V=D.current;D=h(function(){function b(fe){if(!q){if(q=!0,K=fe,fe=I(fe),S!==void 0&&V.hasValue){var de=V.value;if(S(de,fe))return J=de}return J=fe}if(de=J,t(K,fe))return de;var k=I(fe);return S!==void 0&&S(de,k)?(K=fe,de):(K=fe,J=k)}var q=!1,K,J,ie=E===void 0?null:E;return[function(){return b(y())},ie===null?void 0:function(){return b(ie())}]},[y,E,I,S]);var z=i(p,D[0],D[1]);return l(function(){V.hasValue=!0,V.value=z},[z]),f(z),z},wd}var Ng;function MI(){return Ng||(Ng=1,Ed.exports=VI()),Ed.exports}var UI=MI();function FI(n){n()}function jI(){let n=null,e=null;return{clear(){n=null,e=null},notify(){FI(()=>{let t=n;for(;t;)t.callback(),t=t.next})},get(){const t=[];let i=n;for(;i;)t.push(i),i=i.next;return t},subscribe(t){let i=!0;const o=e={callback:t,next:null,prev:e};return o.prev?o.prev.next=o:n=o,function(){!i||n===null||(i=!1,o.next?o.next.prev=o.prev:e=o.prev,o.prev?o.prev.next=o.next:n=o.next)}}}}var Dg={notify(){},get:()=>[]};function BI(n,e){let t,i=Dg,o=0,l=!1;function h(z){E();const b=i.subscribe(z);let q=!1;return()=>{q||(q=!0,b(),I())}}function f(){i.notify()}function p(){V.onStateChange&&V.onStateChange()}function y(){return l}function E(){o++,t||(t=n.subscribe(p),i=jI())}function I(){o--,t&&o===0&&(t(),t=void 0,i.clear(),i=Dg)}function S(){l||(l=!0,E())}function D(){l&&(l=!1,I())}const V={addNestedSub:h,notifyNestedSubs:f,handleChangeWrapper:p,isSubscribed:y,trySubscribe:S,tryUnsubscribe:D,getListeners:()=>i};return V}var zI=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$I=zI(),HI=()=>typeof navigator<"u"&&navigator.product==="ReactNative",WI=HI(),qI=()=>$I||WI?$.useLayoutEffect:$.useEffect,KI=qI(),Td=Symbol.for("react-redux-context"),Id=typeof globalThis<"u"?globalThis:{};function GI(){if(!$.createContext)return{};const n=Id[Td]??(Id[Td]=new Map);let e=n.get($.createContext);return e||(e=$.createContext(null),n.set($.createContext,e)),e}var Ri=GI();function QI(n){const{children:e,context:t,serverState:i,store:o}=n,l=$.useMemo(()=>{const p=BI(o);return{store:o,subscription:p,getServerState:i?()=>i:void 0}},[o,i]),h=$.useMemo(()=>o.getState(),[o]);KI(()=>{const{subscription:p}=l;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),h!==o.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[l,h]);const f=t||Ri;return $.createElement(f.Provider,{value:l},e)}var YI=QI;function mf(n=Ri){return function(){return $.useContext(n)}}var g_=mf();function y_(n=Ri){const e=n===Ri?g_:mf(n),t=()=>{const{store:i}=e();return i};return Object.assign(t,{withTypes:()=>t}),t}var XI=y_();function JI(n=Ri){const e=n===Ri?XI:y_(n),t=()=>e().dispatch;return Object.assign(t,{withTypes:()=>t}),t}var ZI=JI(),eS=(n,e)=>n===e;function tS(n=Ri){const e=n===Ri?g_:mf(n),t=(i,o={})=>{const{equalityFn:l=eS}=typeof o=="function"?{equalityFn:o}:o,h=e(),{store:f,subscription:p,getServerState:y}=h;$.useRef(!0);const E=$.useCallback({[i.name](S){return i(S)}}[i.name],[i]),I=UI.useSyncExternalStoreWithSelector(p.addNestedSub,f.getState,y||f.getState,E,l);return $.useDebugValue(I),I};return Object.assign(t,{withTypes:()=>t}),t}var nS=tS();const rS=({data:n})=>{const{name:e,price:t,image:i,slug:o,description:l}=n;return e_.useEffect(()=>{const h=f=>{f.preventDefault()};return document.addEventListener("contextmenu",h),()=>{document.removeEventListener("contextmenu",h)}},[]),N.jsxs(N.Fragment,{children:[N.jsxs("div",{id:"main1-1st-content",children:[N.jsxs("div",{className:"img-art-desc",children:[N.jsx("div",{children:N.jsxs("h3",{children:["Title: ",e]})}),N.jsxs("div",{children:["current price: ",t,"ETH"]}),N.jsx("div",{children:N.jsxs("p",{children:["About this piece: ",l]})})]}),N.jsxs("div",{children:[N.jsx("div",{children:N.jsx("input",{type:"number",placeholder:"min-value-10!!",style:{width:"100%",border:"none",background:"transparent",color:"#615e5e",fontWeight:"900",fontFamily:"circular",letterSpacing:" .3px"}})}),N.jsx("span",{id:"container_buy_btn",className:"material-symbols-outlined",children:"arrow_outward"})]})]}),N.jsx("div",{id:"img_display_art",children:N.jsx("img",{id:"img_display_art_img",src:i,alt:"art1",style:{WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",userSelect:"none",WebkitUserDrag:"none",userDrag:"none"}})})]})};function iS({data:n}){return N.jsx(N.Fragment,{children:n.map((e,t)=>N.jsx("div",{id:"main1",children:N.jsx(rS,{data:e},t)}))})}const sS="/Art-app/assets/OFFICIAL_ARTIUM_ART_01-DQDA197s.jpg",oS="/Art-app/assets/OFFICIAL_ARTIUM_ART_02-B1EE_yUy.jpg",aS="/Art-app/assets/OFFICIAL_ARTIUM_ART_03-BntAH0t7.jpg",Sd="/Art-app/assets/main1_img1-C2O2miwU.jpg",__=[{id:1,name:"France colony",price:29,image:sS,description:"A perfect blend of good health and wholesome taste, Mother Dairy Toned Milk (Polypack) is an ideal choice for people who want nutritionally balanced diet to stay fit. Healthy and nutritious, this low-fat milk can be used in making beverages and milkshakes.",slug:"mother-dairy-fresh-milk"},{id:2,name:"Mother Dairy Toned Milk",price:28,image:oS,description:"A perfect blend of good health and wholesome taste, Mother Dairy Toned Milk (Polypack) is an ideal choice for people who want nutritionally balanced diet to stay fit. Healthy and nutritious, this low-fat milk can be used in making beverages and milkshakes.",slug:"mother-dairy-toned-milk"},{id:3,name:"Amul Gold Full Cream Fresh Milk",price:34,image:aS,description:"Amul Gold Full Cream Milk (Polypack) Milk is homogenized toned pasteurized milk. Rich and creamy, this milk is an excellent source of vitamin A and vitamin D that enhances growth and development of the body tissues and the brain.",slug:"amul-goldold-full-cream-fresh-milk"},{id:4,name:"Amul Salted Butter",price:60,image:Sd,description:"Made from the freshest of cream, the Amul butter has wonderful taste which is delicate and slightly salty. This finely processed butter is natural, pure and tastes best with toasts and sandwiches. Has a natural and pure formulation that gives a great taste. Made from fresh cream that has a delicious flavour. Spread it over toast or cook your curries in it for a heavenly taste.",slug:"amul-salted-butter"},{id:5,name:"Amul Taaza Toned Fresh Milk",price:56,image:Sd,description:"Amul Taaza Toned Milk (Polypack) is pasteurized with a great nutritional value. It can be consumed directly or can be used for preparing tea, coffee, sweets, khoya, curd, buttermilk, ghee etc.",slug:"amul-taaza-toned-fresh-milk"},{id:6,name:"Kraft Parmesan Grated Cheese",price:35,image:Sd,description:"Kraft Grated Parmesan Cheese enhances your pastas, pizzas, seafood, salads and more with the bold taste of Kraft grated cheese. The sharp and tangy flavor complements your favorite recipes, and its pre-grated to save you valuable prep time in the kitchen. This cheese is sure to add great nutty and salty flavor to your favorite meals at any occasion. Sprinkle this Parmesan cheese over pasta dishes or add it your signature chicken Parmesan recipe for extra flavor.",slug:"kraft-parmesan-grated-cheese"}],lS=e_.memo(({isArtDetails:n})=>(ZI(),nS(e=>e.app.category),N.jsx(N.Fragment,{children:N.jsxs("div",{id:"headerDiv",children:[N.jsxs("div",{className:"headerdiv-original-child",children:[N.jsx("div",{children:N.jsx("h1",{id:"header-div-h1-1",children:"COLLECT AND SELL"})}),N.jsx("div",{children:N.jsx("h1",{id:"header-div-h1-2",children:"DIGITAL ARTS AT YOUR OWN PRICE"})})]}),N.jsxs("div",{className:"headerDiv-hidden-mobile-child",children:[N.jsx("div",{children:N.jsx("h1",{id:"header-div-h1-1",children:"COLLECT AND "})}),N.jsx("div",{children:N.jsx("h1",{id:"header-div-h1-1",children:"SELL DIGITAL ARTS"})}),N.jsx("div",{children:N.jsx("h1",{id:"header-div-h1-2",children:" AT YOUR OWN PRICE"})})]})]})})));function uS(){return N.jsxs(N.Fragment,{children:[N.jsx(lS,{}),N.jsx("div",{id:"main1-parent",children:N.jsx(iS,{data:__})})]})}const cS=()=>{const{slug:n}=BT(),e=__.find(h=>h.slug===n),[t,i]=$.useState(1),o=()=>{i(t-1<1?1:t-1)},l=()=>{i(t+1)};return e?N.jsxs("div",{style:{color:"#8d8d8d",display:"flex",padding:"69px 89px 22px 58px",gap:"47px"},children:[N.jsx("div",{style:{boxShadow:"0px 0px 20px 4px floralwhite",width:"75%",height:"100%",borderRadius:"23px"},children:N.jsx("div",{style:{width:"100%",height:"100%"},children:N.jsx("img",{src:e.image,alt:e.name,style:{width:"100%",height:"auto"}})})}),N.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"23px",background:"#ffffff1c",padding:"40px",borderRadius:"33px",boxShadow:"inset -3px -3px 8px 0 silver",width:"25%"},children:[N.jsx("div",{children:N.jsx("h1",{children:"About this piece"})}),N.jsxs("div",{children:[N.jsxs("div",{children:[N.jsx("button",{onClick:o,children:"-"}),N.jsx("span",{children:t}),N.jsx("button",{onClick:l,children:"+"})]}),N.jsx("button",{children:"Add to Cart"})]}),N.jsxs("div",{children:[N.jsx("h3",{children:"Description"}),N.jsxs("h4",{children:["Title: ",e.name]}),N.jsxs("p",{children:["Price: ",e.price]}),N.jsxs("p",{children:["Description: ",e.description]})]})]})]}):N.jsx("h1",{children:"Art not found"})},v_="/Art-app/assets/artiumhiveLogo-B2e2FyR8.png",hS=()=>{const n=()=>{console.log("Cart button clicked!"),dispatch(toggleStatusTab())};return N.jsx(N.Fragment,{children:N.jsxs("header",{id:"headerTag",children:[N.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[N.jsx("div",{className:"logo-div",children:N.jsx(hn,{to:"/",className:"text-xl font-semibold",children:N.jsx("img",{id:"logo-img",src:v_,alt:"logo"})})}),N.jsx("div",{className:"header-nav-mobile-ori",children:N.jsxs("nav",{id:"nav",style:{padding:"2px"},children:[N.jsx(hn,{to:"buy",className:"text-xl font-semibold",children:"Buy"}),N.jsx(hn,{to:"sell",className:"text-xl font-semibold",children:"Sell"}),N.jsx(hn,{to:"support",className:"text-xl font-semibold",children:"Support"}),N.jsx(hn,{to:"about",className:"text-xl font-semibold",children:"About Us"})]})}),N.jsxs("div",{className:"header-right",children:[N.jsx(hn,{to:"profile",className:"text-xl font-semibold",children:N.jsx("button",{id:"profile",children:N.jsx("i",{className:"fa-regular fa-user"})})}),N.jsx("button",{id:"cart",onClick:n,children:N.jsx("i",{className:"fa-solid fa-cart-shopping"})})]})]}),N.jsx("div",{className:"header-nav-mobile-hidden",children:N.jsxs("nav",{id:"nav",style:{padding:"2px"},children:[N.jsx(hn,{to:"buy",className:"text-xl font-semibold",children:"Buy"}),N.jsx(hn,{to:"sell",className:"text-xl font-semibold",children:"Sell"}),N.jsx(hn,{to:"support",className:"text-xl font-semibold",children:"Support"}),N.jsx(hn,{to:"about",className:"text-xl font-semibold",children:"About Us"})]})})]})})},dS=()=>N.jsx(N.Fragment,{children:N.jsx("div",{children:"this is buy page"})});var Og={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},fS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},w_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=l>>2,I=(l&3)<<4|f>>4;let S=(f&15)<<2|y>>6,D=y&63;p||(D=64,h||(S=64)),i.push(t[E],t[I],t[S],t[D])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(E_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const I=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||I==null)throw new pS;const S=l<<2|f>>4;if(i.push(S),y!==64){const D=f<<4&240|y>>2;if(i.push(D),I!==64){const V=y<<6&192|I;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mS=function(n){const e=E_(n);return w_.encodeByteArray(e,!0)},tc=function(n){return mS(n).replace(/\./g,"")},T_=function(n){try{return w_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yS=()=>gS().__FIREBASE_DEFAULTS__,_S=()=>{if(typeof process>"u"||typeof Og>"u")return;const n=Og.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&T_(n[1]);return e&&JSON.parse(e)},Tc=()=>{try{return yS()||_S()||vS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},I_=n=>{var e,t;return(t=(e=Tc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},S_=n=>{const e=I_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},R_=()=>{var n;return(n=Tc())===null||n===void 0?void 0:n.config},A_=n=>{var e;return(e=Tc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function C_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[tc(JSON.stringify(t)),tc(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function TS(){var n;const e=(n=Tc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function RS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AS(){const n=Bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function CS(){return!TS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kS(){try{return typeof indexedDB=="object"}catch{return!1}}function PS(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="FirebaseError";class hr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=xS,Object.setPrototypeOf(this,hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ll.prototype.create)}}class ll{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?NS(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new hr(o,f,i)}}function NS(n,e){return n.replace(DS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const DS=/\{\$([^}]+)}/g;function OS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(Lg(l)&&Lg(h)){if(!nc(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Lg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Va(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ma(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function LS(n,e){const t=new bS(n,e);return t.subscribe.bind(t)}class bS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");VS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Rd),o.error===void 0&&(o.error=Rd),o.complete===void 0&&(o.complete=Rd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Rd(){}/**
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
 */function Kt(n){return n&&n._delegate?n._delegate:n}class Ai{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const as="[DEFAULT]";/**
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
 */class MS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ES;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FS(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:US(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function US(n){return n===as?void 0:n}function FS(n){return n.instantiationMode==="EAGER"}/**
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
 */class jS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new MS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const BS={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},zS=ke.INFO,$S={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},HS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=$S[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gf{constructor(e){this.name=e,this._logLevel=zS,this._logHandler=HS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const WS=(n,e)=>e.some(t=>n instanceof t);let bg,Vg;function qS(){return bg||(bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KS(){return Vg||(Vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const k_=new WeakMap,jd=new WeakMap,P_=new WeakMap,Ad=new WeakMap,yf=new WeakMap;function GS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(vi(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&k_.set(t,n)}).catch(()=>{}),yf.set(e,n),e}function QS(n){if(jd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});jd.set(n,e)}let Bd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return jd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||P_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function YS(n){Bd=n(Bd)}function XS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Cd(this),e,...t);return P_.set(i,e.sort?e.sort():[e]),vi(i)}:KS().includes(n)?function(...e){return n.apply(Cd(this),e),vi(k_.get(this))}:function(...e){return vi(n.apply(Cd(this),e))}}function JS(n){return typeof n=="function"?XS(n):(n instanceof IDBTransaction&&QS(n),WS(n,qS())?new Proxy(n,Bd):n)}function vi(n){if(n instanceof IDBRequest)return GS(n);if(Ad.has(n))return Ad.get(n);const e=JS(n);return e!==n&&(Ad.set(n,e),yf.set(e,n)),e}const Cd=n=>yf.get(n);function ZS(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=vi(h);return i&&h.addEventListener("upgradeneeded",p=>{i(vi(h.result),p.oldVersion,p.newVersion,vi(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const eR=["get","getKey","getAll","getAllKeys","count"],tR=["put","add","delete","clear"],kd=new Map;function Mg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(kd.get(e))return kd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=tR.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||eR.includes(t)))return;const l=async function(h,...f){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return kd.set(e,l),l}YS(n=>({...n,get:(e,t,i)=>Mg(e,t)||n.get(e,t,i),has:(e,t)=>!!Mg(e,t)||n.has(e,t)}));/**
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
 */class nR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rR(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function rR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zd="@firebase/app",Ug="0.10.18";/**
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
 */const Mr=new gf("@firebase/app"),iR="@firebase/app-compat",sR="@firebase/analytics-compat",oR="@firebase/analytics",aR="@firebase/app-check-compat",lR="@firebase/app-check",uR="@firebase/auth",cR="@firebase/auth-compat",hR="@firebase/database",dR="@firebase/data-connect",fR="@firebase/database-compat",pR="@firebase/functions",mR="@firebase/functions-compat",gR="@firebase/installations",yR="@firebase/installations-compat",_R="@firebase/messaging",vR="@firebase/messaging-compat",ER="@firebase/performance",wR="@firebase/performance-compat",TR="@firebase/remote-config",IR="@firebase/remote-config-compat",SR="@firebase/storage",RR="@firebase/storage-compat",AR="@firebase/firestore",CR="@firebase/vertexai",kR="@firebase/firestore-compat",PR="firebase",xR="11.2.0";/**
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
 */const $d="[DEFAULT]",NR={[zd]:"fire-core",[iR]:"fire-core-compat",[oR]:"fire-analytics",[sR]:"fire-analytics-compat",[lR]:"fire-app-check",[aR]:"fire-app-check-compat",[uR]:"fire-auth",[cR]:"fire-auth-compat",[hR]:"fire-rtdb",[dR]:"fire-data-connect",[fR]:"fire-rtdb-compat",[pR]:"fire-fn",[mR]:"fire-fn-compat",[gR]:"fire-iid",[yR]:"fire-iid-compat",[_R]:"fire-fcm",[vR]:"fire-fcm-compat",[ER]:"fire-perf",[wR]:"fire-perf-compat",[TR]:"fire-rc",[IR]:"fire-rc-compat",[SR]:"fire-gcs",[RR]:"fire-gcs-compat",[AR]:"fire-fst",[kR]:"fire-fst-compat",[CR]:"fire-vertex","fire-js":"fire-js",[PR]:"fire-js-all"};/**
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
 */const rc=new Map,DR=new Map,Hd=new Map;function Fg(n,e){try{n.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function cs(n){const e=n.name;if(Hd.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;Hd.set(e,n);for(const t of rc.values())Fg(t,n);for(const t of DR.values())Fg(t,n);return!0}function Ic(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Nr(n){return n.settings!==void 0}/**
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
 */const OR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new ll("app","Firebase",OR);/**
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
 */class LR{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ai("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
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
 */const ms=xR;function x_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:$d,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ei.create("bad-app-name",{appName:String(o)});if(t||(t=R_()),!t)throw Ei.create("no-options");const l=rc.get(o);if(l){if(nc(t,l.options)&&nc(i,l.config))return l;throw Ei.create("duplicate-app",{appName:o})}const h=new jS(o);for(const p of Hd.values())h.addComponent(p);const f=new LR(t,i,h);return rc.set(o,f),f}function _f(n=$d){const e=rc.get(n);if(!e&&n===$d&&R_())return x_();if(!e)throw Ei.create("no-app",{appName:n});return e}function tr(n,e,t){var i;let o=(i=NR[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(f.join(" "));return}cs(new Ai(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const bR="firebase-heartbeat-database",VR=1,Ga="firebase-heartbeat-store";let Pd=null;function N_(){return Pd||(Pd=ZS(bR,VR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ga)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ei.create("idb-open",{originalErrorMessage:n.message})})),Pd}async function MR(n){try{const t=(await N_()).transaction(Ga),i=await t.objectStore(Ga).get(D_(n));return await t.done,i}catch(e){if(e instanceof hr)Mr.warn(e.message);else{const t=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(t.message)}}}async function jg(n,e){try{const i=(await N_()).transaction(Ga,"readwrite");await i.objectStore(Ga).put(e,D_(n)),await i.done}catch(t){if(t instanceof hr)Mr.warn(t.message);else{const i=Ei.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mr.warn(i.message)}}}function D_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const UR=1024,FR=30*24*60*60*1e3;class jR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zR(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Bg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=FR}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Mr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bg(),{heartbeatsToSend:i,unsentEntries:o}=BR(this._heartbeatsCache.heartbeats),l=tc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Mr.warn(t),""}}}function Bg(){return new Date().toISOString().substring(0,10)}function BR(n,e=UR){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),zg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),zg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class zR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kS()?PS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await MR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function zg(n){return tc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function $R(n){cs(new Ai("platform-logger",e=>new nR(e),"PRIVATE")),cs(new Ai("heartbeat",e=>new jR(e),"PRIVATE")),tr(zd,Ug,n),tr(zd,Ug,"esm2017"),tr("fire-js","")}$R("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="firebasestorage.googleapis.com",L_="storageBucket",HR=2*60*1e3,WR=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends hr{constructor(e,t,i=0){super(xd(e),`Firebase Storage: ${t} (${xd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function xd(n){return"storage/"+n}function vf(){const n="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,n)}function qR(n){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function KR(n){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function GR(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,n)}function QR(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function YR(n){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function XR(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function JR(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function ZR(n){return new rt(nt.INVALID_URL,"Invalid URL '"+n+"'.")}function e0(n){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function t0(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+L_+"' property when initializing the app?")}function n0(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function r0(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function i0(n){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wd(n){return new rt(nt.INVALID_ARGUMENT,n)}function b_(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function s0(n){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ba(n,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ba(n){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=dn.makeFromUrl(e,t)}catch{return new dn(e,"")}if(i.path==="")return i;throw e0(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ie){ie.path.charAt(ie.path.length-1)==="/"&&(ie.path_=ie.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),p={bucket:1,path:3};function y(ie){ie.path_=decodeURIComponent(ie.path)}const E="v[A-Za-z0-9_]+",I=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",D=new RegExp(`^https?://${I}/${E}/b/${o}/o${S}`,"i"),V={bucket:1,path:3},z=t===O_?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",q=new RegExp(`^https?://${z}/${o}/${b}`,"i"),J=[{regex:f,indices:p,postModify:l},{regex:D,indices:V,postModify:y},{regex:q,indices:{bucket:1,path:2},postModify:y}];for(let ie=0;ie<J.length;ie++){const fe=J[ie],de=fe.regex.exec(e);if(de){const k=de[fe.indices.bucket];let T=de[fe.indices.path];T||(T=""),i=new dn(k,T),fe.postModify(i);break}}if(i==null)throw ZR(e);return i}}class o0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function p(){return f===2}let y=!1;function E(...b){y||(y=!0,e.apply(null,b))}function I(b){o=setTimeout(()=>{o=null,n(D,p())},b)}function S(){l&&clearTimeout(l)}function D(b,...q){if(y){S();return}if(b){S(),E.call(null,b,...q);return}if(p()||h){S(),E.call(null,b,...q);return}i<64&&(i*=2);let J;f===1?(f=2,J=0):J=(i+Math.random())*1e3,I(J)}let V=!1;function z(b){V||(V=!0,S(),!y&&(o!==null?(b||(f=2),clearTimeout(o),I(0)):b||(f=1)))}return I(0),l=setTimeout(()=>{h=!0,z(!0)},t),z}function l0(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(n){return n!==void 0}function c0(n){return typeof n=="object"&&!Array.isArray(n)}function Ef(n){return typeof n=="string"||n instanceof String}function $g(n){return wf()&&n instanceof Blob}function wf(){return typeof Blob<"u"}function Hg(n,e,t,i){if(i<e)throw Wd(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Wd(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function V_(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var us;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(us||(us={}));/**
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
 */function h0(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,t,i,o,l,h,f,p,y,E,I,S=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=I,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,V)=>{this.resolve_=D,this.reject_=V,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new bu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const p=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===us.NO_ERROR,p=l.getStatus();if(!f||h0(p,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===us.ABORT;i(!1,new bu(!1,null,E));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new bu(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());u0(p)?l(p):l()}catch(p){h(p)}else if(f!==null){const p=vf();p.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,p)):h(p)}else if(o.canceled){const p=this.appDelete_?b_():JR();h(p)}else{const p=XR();h(p)}};this.canceled_?t(!1,new bu(!1,null,!0)):this.backoffId_=a0(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&l0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function f0(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function p0(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function m0(n,e){e&&(n["X-Firebase-GMPID"]=e)}function g0(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function y0(n,e,t,i,o,l,h=!0){const f=V_(n.urlParams),p=n.url+f,y=Object.assign({},n.headers);return m0(y,e),f0(y,t),p0(y,l),g0(y,i),new d0(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function v0(...n){const e=_0();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(wf())return new Blob(n);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function E0(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function w0(n){if(typeof atob>"u")throw i0("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Nd{constructor(e,t){this.data=e,this.contentType=t||null}}function T0(n,e){switch(n){case er.RAW:return new Nd(M_(e));case er.BASE64:case er.BASE64URL:return new Nd(U_(n,e));case er.DATA_URL:return new Nd(S0(e),R0(e))}throw vf()}function M_(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=n.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function I0(n){let e;try{e=decodeURIComponent(n)}catch{throw Ba(er.DATA_URL,"Malformed data URL.")}return M_(e)}function U_(n,e){switch(n){case er.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Ba(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case er.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Ba(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=w0(e)}catch(o){throw o.message.includes("polyfill")?o:Ba(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class F_{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ba(er.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=A0(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function S0(n){const e=new F_(n);return e.base64?U_(er.BASE64,e.rest):I0(e.rest)}function R0(n){return new F_(n).contentType}function A0(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){let i=0,o="";$g(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if($g(this.data_)){const i=this.data_,o=E0(i,e,t);return o===null?null:new fi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new fi(i,!0)}}static getBlob(...e){if(wf()){const t=e.map(i=>i instanceof fi?i.data_:i);return new fi(v0.apply(null,t))}else{const t=e.map(h=>Ef(h)?T0(er.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new fi(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(n){let e;try{e=JSON.parse(n)}catch{return null}return c0(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function k0(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function B_(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(n,e){return e}class qt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||P0}}let Vu=null;function x0(n){return!Ef(n)||n.length<2?n:B_(n)}function z_(){if(Vu)return Vu;const n=[];n.push(new qt("bucket")),n.push(new qt("generation")),n.push(new qt("metageneration")),n.push(new qt("name","fullPath",!0));function e(l,h){return x0(h)}const t=new qt("name");t.xform=e,n.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new qt("size");return o.xform=i,n.push(o),n.push(new qt("timeCreated")),n.push(new qt("updated")),n.push(new qt("md5Hash",null,!0)),n.push(new qt("cacheControl",null,!0)),n.push(new qt("contentDisposition",null,!0)),n.push(new qt("contentEncoding",null,!0)),n.push(new qt("contentLanguage",null,!0)),n.push(new qt("contentType",null,!0)),n.push(new qt("metadata","customMetadata",!0)),Vu=n,Vu}function N0(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new dn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function D0(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return N0(i,n),i}function $_(n,e,t){const i=j_(e);return i===null?null:D0(n,i,t)}function O0(n,e,t,i){const o=j_(e);if(o===null||!Ef(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(y=>{const E=n.bucket,I=n.fullPath,S="/b/"+h(E)+"/o/"+h(I),D=Tf(S,t,i),V=V_({alt:"media",token:y});return D+V})[0]}function L0(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class H_{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(n){if(!n)throw vf()}function b0(n,e){function t(i,o){const l=$_(n,o,e);return W_(l!==null),l}return t}function V0(n,e){function t(i,o){const l=$_(n,o,e);return W_(l!==null),O0(l,o,n.host,n._protocol)}return t}function q_(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=QR():o=GR():t.getStatus()===402?o=KR(n.bucket):t.getStatus()===403?o=YR(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function M0(n){const e=q_(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=qR(n.path)),l.serverResponse=o.serverResponse,l}return t}function U0(n,e,t){const i=e.fullServerUrl(),o=Tf(i,n.host,n._protocol),l="GET",h=n.maxOperationRetryTime,f=new H_(o,l,V0(n,t),h);return f.errorHandler=M0(e),f}function F0(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function j0(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=F0(null,e)),i}function B0(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let J="";for(let ie=0;ie<2;ie++)J=J+Math.random().toString().slice(2);return J}const p=f();h["Content-Type"]="multipart/related; boundary="+p;const y=j0(e,i,o),E=L0(y,t),I="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,S=`\r
--`+p+"--",D=fi.getBlob(I,i,S);if(D===null)throw n0();const V={name:y.fullPath},z=Tf(l,n.host,n._protocol),b="POST",q=n.maxUploadRetryTime,K=new H_(z,b,b0(n,t),q);return K.urlParams=V,K.headers=h,K.body=D.uploadData(),K.errorHandler=q_(e),K}class z0{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=us.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=us.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=us.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw ba("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ba("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ba("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ba("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ba("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $0 extends z0{initXhr(){this.xhr_.responseType="text"}}function K_(){return new $0}/**
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
 */class hs{constructor(e,t){this._service=e,t instanceof dn?this._location=t:this._location=dn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new hs(e,t)}get root(){const e=new dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return B_(this._location.path)}get storage(){return this._service}get parent(){const e=C0(this._location.path);if(e===null)return null;const t=new dn(this._location.bucket,e);return new hs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw s0(e)}}function H0(n,e,t){n._throwIfRoot("uploadBytes");const i=B0(n.storage,n._location,z_(),new fi(e,!0),t);return n.storage.makeRequestWithTokens(i,K_).then(o=>({metadata:o,ref:n}))}function W0(n){n._throwIfRoot("getDownloadURL");const e=U0(n.storage,n._location,z_());return n.storage.makeRequestWithTokens(e,K_).then(t=>{if(t===null)throw r0();return t})}function q0(n,e){const t=k0(n._location.path,e),i=new dn(n._location.bucket,t);return new hs(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(n){return/^[A-Za-z]+:\/\//.test(n)}function G0(n,e){return new hs(n,e)}function G_(n,e){if(n instanceof If){const t=n;if(t._bucket==null)throw t0();const i=new hs(t,t._bucket);return e!=null?G_(i,e):i}else return e!==void 0?q0(n,e):n}function Q0(n,e){if(e&&K0(e)){if(n instanceof If)return G0(n,e);throw Wd("To use ref(service, url), the first argument must be a Storage instance.")}else return G_(n,e)}function Wg(n,e){const t=e==null?void 0:e[L_];return t==null?null:dn.makeFromBucketSpec(t,n)}function Y0(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:C_(o,n.app.options.projectId))}class If{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=O_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=HR,this._maxUploadRetryTime=WR,this._requests=new Set,o!=null?this._bucket=dn.makeFromBucketSpec(o,this._host):this._bucket=Wg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dn.makeFromBucketSpec(this._url,e):this._bucket=Wg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hs(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new o0(b_());{const h=y0(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const qg="@firebase/storage",Kg="0.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_="storage";function X0(n,e,t){return n=Kt(n),H0(n,e,t)}function J0(n){return n=Kt(n),W0(n)}function Z0(n,e){return n=Kt(n),Q0(n,e)}function eA(n=_f(),e){n=Kt(n);const i=Ic(n,Q_).getImmediate({identifier:e}),o=S_("storage");return o&&tA(i,...o),i}function tA(n,e,t,i={}){Y0(n,e,t,i)}function nA(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new If(t,i,o,e,ms)}function rA(){cs(new Ai(Q_,nA,"PUBLIC").setMultipleInstances(!0)),tr(qg,Kg,""),tr(qg,Kg,"esm2017")}rA();var iA="firebase",sA="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(iA,sA,"app");var Gg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wi,Y_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,T){function A(){}A.prototype=T.prototype,k.D=T.prototype,k.prototype=new A,k.prototype.constructor=k,k.C=function(x,L,M){for(var C=Array(arguments.length-2),it=2;it<arguments.length;it++)C[it-2]=arguments[it];return T.prototype[L].apply(x,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,T,A){A||(A=0);var x=Array(16);if(typeof T=="string")for(var L=0;16>L;++L)x[L]=T.charCodeAt(A++)|T.charCodeAt(A++)<<8|T.charCodeAt(A++)<<16|T.charCodeAt(A++)<<24;else for(L=0;16>L;++L)x[L]=T[A++]|T[A++]<<8|T[A++]<<16|T[A++]<<24;T=k.g[0],A=k.g[1],L=k.g[2];var M=k.g[3],C=T+(M^A&(L^M))+x[0]+3614090360&4294967295;T=A+(C<<7&4294967295|C>>>25),C=M+(L^T&(A^L))+x[1]+3905402710&4294967295,M=T+(C<<12&4294967295|C>>>20),C=L+(A^M&(T^A))+x[2]+606105819&4294967295,L=M+(C<<17&4294967295|C>>>15),C=A+(T^L&(M^T))+x[3]+3250441966&4294967295,A=L+(C<<22&4294967295|C>>>10),C=T+(M^A&(L^M))+x[4]+4118548399&4294967295,T=A+(C<<7&4294967295|C>>>25),C=M+(L^T&(A^L))+x[5]+1200080426&4294967295,M=T+(C<<12&4294967295|C>>>20),C=L+(A^M&(T^A))+x[6]+2821735955&4294967295,L=M+(C<<17&4294967295|C>>>15),C=A+(T^L&(M^T))+x[7]+4249261313&4294967295,A=L+(C<<22&4294967295|C>>>10),C=T+(M^A&(L^M))+x[8]+1770035416&4294967295,T=A+(C<<7&4294967295|C>>>25),C=M+(L^T&(A^L))+x[9]+2336552879&4294967295,M=T+(C<<12&4294967295|C>>>20),C=L+(A^M&(T^A))+x[10]+4294925233&4294967295,L=M+(C<<17&4294967295|C>>>15),C=A+(T^L&(M^T))+x[11]+2304563134&4294967295,A=L+(C<<22&4294967295|C>>>10),C=T+(M^A&(L^M))+x[12]+1804603682&4294967295,T=A+(C<<7&4294967295|C>>>25),C=M+(L^T&(A^L))+x[13]+4254626195&4294967295,M=T+(C<<12&4294967295|C>>>20),C=L+(A^M&(T^A))+x[14]+2792965006&4294967295,L=M+(C<<17&4294967295|C>>>15),C=A+(T^L&(M^T))+x[15]+1236535329&4294967295,A=L+(C<<22&4294967295|C>>>10),C=T+(L^M&(A^L))+x[1]+4129170786&4294967295,T=A+(C<<5&4294967295|C>>>27),C=M+(A^L&(T^A))+x[6]+3225465664&4294967295,M=T+(C<<9&4294967295|C>>>23),C=L+(T^A&(M^T))+x[11]+643717713&4294967295,L=M+(C<<14&4294967295|C>>>18),C=A+(M^T&(L^M))+x[0]+3921069994&4294967295,A=L+(C<<20&4294967295|C>>>12),C=T+(L^M&(A^L))+x[5]+3593408605&4294967295,T=A+(C<<5&4294967295|C>>>27),C=M+(A^L&(T^A))+x[10]+38016083&4294967295,M=T+(C<<9&4294967295|C>>>23),C=L+(T^A&(M^T))+x[15]+3634488961&4294967295,L=M+(C<<14&4294967295|C>>>18),C=A+(M^T&(L^M))+x[4]+3889429448&4294967295,A=L+(C<<20&4294967295|C>>>12),C=T+(L^M&(A^L))+x[9]+568446438&4294967295,T=A+(C<<5&4294967295|C>>>27),C=M+(A^L&(T^A))+x[14]+3275163606&4294967295,M=T+(C<<9&4294967295|C>>>23),C=L+(T^A&(M^T))+x[3]+4107603335&4294967295,L=M+(C<<14&4294967295|C>>>18),C=A+(M^T&(L^M))+x[8]+1163531501&4294967295,A=L+(C<<20&4294967295|C>>>12),C=T+(L^M&(A^L))+x[13]+2850285829&4294967295,T=A+(C<<5&4294967295|C>>>27),C=M+(A^L&(T^A))+x[2]+4243563512&4294967295,M=T+(C<<9&4294967295|C>>>23),C=L+(T^A&(M^T))+x[7]+1735328473&4294967295,L=M+(C<<14&4294967295|C>>>18),C=A+(M^T&(L^M))+x[12]+2368359562&4294967295,A=L+(C<<20&4294967295|C>>>12),C=T+(A^L^M)+x[5]+4294588738&4294967295,T=A+(C<<4&4294967295|C>>>28),C=M+(T^A^L)+x[8]+2272392833&4294967295,M=T+(C<<11&4294967295|C>>>21),C=L+(M^T^A)+x[11]+1839030562&4294967295,L=M+(C<<16&4294967295|C>>>16),C=A+(L^M^T)+x[14]+4259657740&4294967295,A=L+(C<<23&4294967295|C>>>9),C=T+(A^L^M)+x[1]+2763975236&4294967295,T=A+(C<<4&4294967295|C>>>28),C=M+(T^A^L)+x[4]+1272893353&4294967295,M=T+(C<<11&4294967295|C>>>21),C=L+(M^T^A)+x[7]+4139469664&4294967295,L=M+(C<<16&4294967295|C>>>16),C=A+(L^M^T)+x[10]+3200236656&4294967295,A=L+(C<<23&4294967295|C>>>9),C=T+(A^L^M)+x[13]+681279174&4294967295,T=A+(C<<4&4294967295|C>>>28),C=M+(T^A^L)+x[0]+3936430074&4294967295,M=T+(C<<11&4294967295|C>>>21),C=L+(M^T^A)+x[3]+3572445317&4294967295,L=M+(C<<16&4294967295|C>>>16),C=A+(L^M^T)+x[6]+76029189&4294967295,A=L+(C<<23&4294967295|C>>>9),C=T+(A^L^M)+x[9]+3654602809&4294967295,T=A+(C<<4&4294967295|C>>>28),C=M+(T^A^L)+x[12]+3873151461&4294967295,M=T+(C<<11&4294967295|C>>>21),C=L+(M^T^A)+x[15]+530742520&4294967295,L=M+(C<<16&4294967295|C>>>16),C=A+(L^M^T)+x[2]+3299628645&4294967295,A=L+(C<<23&4294967295|C>>>9),C=T+(L^(A|~M))+x[0]+4096336452&4294967295,T=A+(C<<6&4294967295|C>>>26),C=M+(A^(T|~L))+x[7]+1126891415&4294967295,M=T+(C<<10&4294967295|C>>>22),C=L+(T^(M|~A))+x[14]+2878612391&4294967295,L=M+(C<<15&4294967295|C>>>17),C=A+(M^(L|~T))+x[5]+4237533241&4294967295,A=L+(C<<21&4294967295|C>>>11),C=T+(L^(A|~M))+x[12]+1700485571&4294967295,T=A+(C<<6&4294967295|C>>>26),C=M+(A^(T|~L))+x[3]+2399980690&4294967295,M=T+(C<<10&4294967295|C>>>22),C=L+(T^(M|~A))+x[10]+4293915773&4294967295,L=M+(C<<15&4294967295|C>>>17),C=A+(M^(L|~T))+x[1]+2240044497&4294967295,A=L+(C<<21&4294967295|C>>>11),C=T+(L^(A|~M))+x[8]+1873313359&4294967295,T=A+(C<<6&4294967295|C>>>26),C=M+(A^(T|~L))+x[15]+4264355552&4294967295,M=T+(C<<10&4294967295|C>>>22),C=L+(T^(M|~A))+x[6]+2734768916&4294967295,L=M+(C<<15&4294967295|C>>>17),C=A+(M^(L|~T))+x[13]+1309151649&4294967295,A=L+(C<<21&4294967295|C>>>11),C=T+(L^(A|~M))+x[4]+4149444226&4294967295,T=A+(C<<6&4294967295|C>>>26),C=M+(A^(T|~L))+x[11]+3174756917&4294967295,M=T+(C<<10&4294967295|C>>>22),C=L+(T^(M|~A))+x[2]+718787259&4294967295,L=M+(C<<15&4294967295|C>>>17),C=A+(M^(L|~T))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+T&4294967295,k.g[1]=k.g[1]+(L+(C<<21&4294967295|C>>>11))&4294967295,k.g[2]=k.g[2]+L&4294967295,k.g[3]=k.g[3]+M&4294967295}i.prototype.u=function(k,T){T===void 0&&(T=k.length);for(var A=T-this.blockSize,x=this.B,L=this.h,M=0;M<T;){if(L==0)for(;M<=A;)o(this,k,M),M+=this.blockSize;if(typeof k=="string"){for(;M<T;)if(x[L++]=k.charCodeAt(M++),L==this.blockSize){o(this,x),L=0;break}}else for(;M<T;)if(x[L++]=k[M++],L==this.blockSize){o(this,x),L=0;break}}this.h=L,this.o+=T},i.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var T=1;T<k.length-8;++T)k[T]=0;var A=8*this.o;for(T=k.length-8;T<k.length;++T)k[T]=A&255,A/=256;for(this.u(k),k=Array(16),T=A=0;4>T;++T)for(var x=0;32>x;x+=8)k[A++]=this.g[T]>>>x&255;return k};function l(k,T){var A=f;return Object.prototype.hasOwnProperty.call(A,k)?A[k]:A[k]=T(k)}function h(k,T){this.h=T;for(var A=[],x=!0,L=k.length-1;0<=L;L--){var M=k[L]|0;x&&M==T||(A[L]=M,x=!1)}this.g=A}var f={};function p(k){return-128<=k&&128>k?l(k,function(T){return new h([T|0],0>T?-1:0)}):new h([k|0],0>k?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return I;if(0>k)return b(y(-k));for(var T=[],A=1,x=0;k>=A;x++)T[x]=k/A|0,A*=4294967296;return new h(T,0)}function E(k,T){if(k.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k.charAt(0)=="-")return b(E(k.substring(1),T));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(T,8)),x=I,L=0;L<k.length;L+=8){var M=Math.min(8,k.length-L),C=parseInt(k.substring(L,L+M),T);8>M?(M=y(Math.pow(T,M)),x=x.j(M).add(y(C))):(x=x.j(A),x=x.add(y(C)))}return x}var I=p(0),S=p(1),D=p(16777216);n=h.prototype,n.m=function(){if(z(this))return-b(this).m();for(var k=0,T=1,A=0;A<this.g.length;A++){var x=this.i(A);k+=(0<=x?x:4294967296+x)*T,T*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(V(this))return"0";if(z(this))return"-"+b(this).toString(k);for(var T=y(Math.pow(k,6)),A=this,x="";;){var L=ie(A,T).g;A=q(A,L.j(T));var M=((0<A.g.length?A.g[0]:A.h)>>>0).toString(k);if(A=L,V(A))return M+x;for(;6>M.length;)M="0"+M;x=M+x}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function V(k){if(k.h!=0)return!1;for(var T=0;T<k.g.length;T++)if(k.g[T]!=0)return!1;return!0}function z(k){return k.h==-1}n.l=function(k){return k=q(this,k),z(k)?-1:V(k)?0:1};function b(k){for(var T=k.g.length,A=[],x=0;x<T;x++)A[x]=~k.g[x];return new h(A,~k.h).add(S)}n.abs=function(){return z(this)?b(this):this},n.add=function(k){for(var T=Math.max(this.g.length,k.g.length),A=[],x=0,L=0;L<=T;L++){var M=x+(this.i(L)&65535)+(k.i(L)&65535),C=(M>>>16)+(this.i(L)>>>16)+(k.i(L)>>>16);x=C>>>16,M&=65535,C&=65535,A[L]=C<<16|M}return new h(A,A[A.length-1]&-2147483648?-1:0)};function q(k,T){return k.add(b(T))}n.j=function(k){if(V(this)||V(k))return I;if(z(this))return z(k)?b(this).j(b(k)):b(b(this).j(k));if(z(k))return b(this.j(b(k)));if(0>this.l(D)&&0>k.l(D))return y(this.m()*k.m());for(var T=this.g.length+k.g.length,A=[],x=0;x<2*T;x++)A[x]=0;for(x=0;x<this.g.length;x++)for(var L=0;L<k.g.length;L++){var M=this.i(x)>>>16,C=this.i(x)&65535,it=k.i(L)>>>16,Dt=k.i(L)&65535;A[2*x+2*L]+=C*Dt,K(A,2*x+2*L),A[2*x+2*L+1]+=M*Dt,K(A,2*x+2*L+1),A[2*x+2*L+1]+=C*it,K(A,2*x+2*L+1),A[2*x+2*L+2]+=M*it,K(A,2*x+2*L+2)}for(x=0;x<T;x++)A[x]=A[2*x+1]<<16|A[2*x];for(x=T;x<2*T;x++)A[x]=0;return new h(A,0)};function K(k,T){for(;(k[T]&65535)!=k[T];)k[T+1]+=k[T]>>>16,k[T]&=65535,T++}function J(k,T){this.g=k,this.h=T}function ie(k,T){if(V(T))throw Error("division by zero");if(V(k))return new J(I,I);if(z(k))return T=ie(b(k),T),new J(b(T.g),b(T.h));if(z(T))return T=ie(k,b(T)),new J(b(T.g),T.h);if(30<k.g.length){if(z(k)||z(T))throw Error("slowDivide_ only works with positive integers.");for(var A=S,x=T;0>=x.l(k);)A=fe(A),x=fe(x);var L=de(A,1),M=de(x,1);for(x=de(x,2),A=de(A,2);!V(x);){var C=M.add(x);0>=C.l(k)&&(L=L.add(A),M=C),x=de(x,1),A=de(A,1)}return T=q(k,L.j(T)),new J(L,T)}for(L=I;0<=k.l(T);){for(A=Math.max(1,Math.floor(k.m()/T.m())),x=Math.ceil(Math.log(A)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),M=y(A),C=M.j(T);z(C)||0<C.l(k);)A-=x,M=y(A),C=M.j(T);V(M)&&(M=S),L=L.add(M),k=q(k,C)}return new J(L,k)}n.A=function(k){return ie(this,k).h},n.and=function(k){for(var T=Math.max(this.g.length,k.g.length),A=[],x=0;x<T;x++)A[x]=this.i(x)&k.i(x);return new h(A,this.h&k.h)},n.or=function(k){for(var T=Math.max(this.g.length,k.g.length),A=[],x=0;x<T;x++)A[x]=this.i(x)|k.i(x);return new h(A,this.h|k.h)},n.xor=function(k){for(var T=Math.max(this.g.length,k.g.length),A=[],x=0;x<T;x++)A[x]=this.i(x)^k.i(x);return new h(A,this.h^k.h)};function fe(k){for(var T=k.g.length+1,A=[],x=0;x<T;x++)A[x]=k.i(x)<<1|k.i(x-1)>>>31;return new h(A,k.h)}function de(k,T){var A=T>>5;T%=32;for(var x=k.g.length-A,L=[],M=0;M<x;M++)L[M]=0<T?k.i(M+A)>>>T|k.i(M+A+1)<<32-T:k.i(M+A);return new h(L,k.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Y_=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,wi=h}).apply(typeof Gg<"u"?Gg:typeof self<"u"?self:typeof window<"u"?window:{});var Mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X_,Ua,J_,Wu,qd,Z_,ev,tv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mu=="object"&&Mu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var F=u[w];if(!(F in _))break e;_=_[F]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,F={next:function(){if(!w&&_<u.length){var W=_++;return{value:m(W,u[W]),done:!1}}return w=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function I(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,w),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function S(u,m,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:I,S.apply(null,arguments)}function D(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function V(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,F,W){for(var ne=Array(arguments.length-2),je=2;je<arguments.length;je++)ne[je-2]=arguments[je];return m.prototype[F].apply(w,ne)}}function z(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function b(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const F=u.length||0,W=w.length||0;u.length=F+W;for(let ne=0;ne<W;ne++)u[F+ne]=w[ne]}else u.push(w)}}class q{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function K(u){return/^[\s\xa0]*$/.test(u)}function J(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ie(u){return ie[" "](u),u}ie[" "]=function(){};var fe=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function de(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function k(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function T(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,m){let _,w;for(let F=1;F<arguments.length;F++){w=arguments[F];for(_ in w)u[_]=w[_];for(let W=0;W<A.length;W++)_=A[W],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function L(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){f.setTimeout(()=>{throw u},0)}function C(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class it{constructor(){this.h=this.g=null}add(m,_){const w=Dt.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Dt=new q(()=>new Ot,u=>u.reset());class Ot{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,re=!1,me=new it,oe=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(U)}};var U=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){M(_)}var m=Dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}re=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(fe){e:{try{ie(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}V(Ae,pe);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,m,_,w,F){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=F,this.key=++Ue,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function dr(u){this.src=u,this.g={},this.h=0}dr.prototype.add=function(u,m,_,w,F){var W=u.toString();u=this.g[W],u||(u=this.g[W]=[],this.h++);var ne=Br(u,m,w,F);return-1<ne?(m=u[ne],_||(m.fa=!1)):(m=new $e(m,this.src,W,!!w,F),m.fa=_,u.push(m)),m};function ws(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],F=Array.prototype.indexOf.call(w,m,void 0),W;(W=0<=F)&&Array.prototype.splice.call(w,F,1),W&&(vt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Br(u,m,_,w){for(var F=0;F<u.length;++F){var W=u[F];if(!W.da&&W.listener==m&&W.capture==!!_&&W.ha==w)return F}return-1}var Oi="closure_lm_"+(1e6*Math.random()|0),Ts={};function Fo(u,m,_,w,F){if(Array.isArray(m)){for(var W=0;W<m.length;W++)Fo(u,m[W],_,w,F);return null}return _=zo(_),u&&u[Me]?u.K(m,_,y(w)?!!w.capture:!1,F):jo(u,m,_,!1,w,F)}function jo(u,m,_,w,F,W){if(!m)throw Error("Invalid event type");var ne=y(F)?!!F.capture:!!F,je=Ss(u);if(je||(u[Oi]=je=new dr(u)),_=je.add(m,_,w,ne,W),_.proxy)return _;if(w=yl(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Re||(F=ne),F===void 0&&(F=!1),u.addEventListener(m.toString(),w,F);else if(u.attachEvent)u.attachEvent(pr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function yl(){function u(_){return m.call(u.src,u.listener,_)}const m=Bo;return u}function Is(u,m,_,w,F){if(Array.isArray(m))for(var W=0;W<m.length;W++)Is(u,m[W],_,w,F);else w=y(w)?!!w.capture:!!w,_=zo(_),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(W=u.g[m],_=Br(W,_,w,F),-1<_&&(vt(W[_]),Array.prototype.splice.call(W,_,1),W.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ss(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Br(m,_,w,F)),(_=-1<u?m[u]:null)&&fr(_))}function fr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])ws(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(pr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=Ss(m))?(ws(_,u),_.h==0&&(_.src=null,m[Oi]=null)):vt(u)}}}function pr(u){return u in Ts?Ts[u]:Ts[u]="on"+u}function Bo(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&fr(u),u=_.call(w,m)}return u}function Ss(u){return u=u[Oi],u instanceof dr?u:null}var Rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function zo(u){return typeof u=="function"?u:(u[Rs]||(u[Rs]=function(m){return u.handleEvent(m)}),u[Rs])}function ht(){Q.call(this),this.i=new dr(this),this.M=this,this.F=null}V(ht,Q),ht.prototype[Me]=!0,ht.prototype.removeEventListener=function(u,m,_,w){Is(this,u,m,_,w)};function dt(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var F=m;m=new pe(w,u),x(m,F)}if(F=!0,_)for(var W=_.length-1;0<=W;W--){var ne=m.g=_[W];F=mr(ne,w,!0,m)&&F}if(ne=m.g=u,F=mr(ne,w,!0,m)&&F,F=mr(ne,w,!1,m)&&F,_)for(W=0;W<_.length;W++)ne=m.g=_[W],F=mr(ne,w,!1,m)&&F}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)vt(_[w]);delete u.g[m],u.h--}}this.F=null},ht.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},ht.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function mr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,W=0;W<m.length;++W){var ne=m[W];if(ne&&!ne.da&&ne.capture==_){var je=ne.listener,ft=ne.ha||ne.src;ne.fa&&ws(u.i,ne),F=je.call(ft,w)!==!1&&F}}return F&&!w.defaultPrevented}function $o(u,m,_){if(typeof u=="function")_&&(u=S(u,_));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function zr(u){u.g=$o(()=>{u.g=null,u.i&&(u.i=!1,zr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Li extends Q{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:zr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bi(u){Q.call(this),this.h=u,this.g={}}V(bi,Q);var Ho=[];function Wo(u){de(u.g,function(m,_){this.g.hasOwnProperty(_)&&fr(m)},u),u.g={}}bi.prototype.N=function(){bi.aa.N.call(this),Wo(this)},bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qo=f.JSON.stringify,Ko=f.JSON.parse,Go=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Vi(){}Vi.prototype.h=null;function As(u){return u.h||(u.h=u.i())}function Cs(){}var fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zn(){pe.call(this,"d")}V(zn,pe);function ks(){pe.call(this,"c")}V(ks,pe);var $n={},Qo=null;function Mi(){return Qo=Qo||new ht}$n.La="serverreachability";function Yo(u){pe.call(this,$n.La,u)}V(Yo,pe);function gr(u){const m=Mi();dt(m,new Yo(m))}$n.STAT_EVENT="statevent";function Xo(u,m){pe.call(this,$n.STAT_EVENT,u),this.stat=m}V(Xo,pe);function st(u){const m=Mi();dt(m,new Xo(m,u))}$n.Ma="timingevent";function Ps(u,m){pe.call(this,$n.Ma,u),this.size=m}V(Ps,pe);function Rn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Ui(){this.g=!0}Ui.prototype.xa=function(){this.g=!1};function Fi(u,m,_,w,F,W){u.info(function(){if(u.g)if(W)for(var ne="",je=W.split("&"),ft=0;ft<je.length;ft++){var Oe=je[ft].split("=");if(1<Oe.length){var Et=Oe[0];Oe=Oe[1];var lt=Et.split("_");ne=2<=lt.length&&lt[1]=="type"?ne+(Et+"="+Oe+"&"):ne+(Et+"=redacted&")}}else ne=null;else ne=W;return"XMLHTTP REQ ("+w+") [attempt "+F+"]: "+m+`
`+_+`
`+ne})}function xs(u,m,_,w,F,W,ne){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+F+"]: "+m+`
`+_+`
`+W+" "+ne})}function An(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Bc(u,_)+(w?" "+w:"")})}function Jo(u,m){u.info(function(){return"TIMEOUT: "+m})}Ui.prototype.info=function(){};function Bc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var F=w[1];if(Array.isArray(F)&&!(1>F.length)){var W=F[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ne=1;ne<F.length;ne++)F[ne]=""}}}}return qo(_)}catch{return m}}var Ns={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_l={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function ji(){}V(ji,Vi),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Cn=new ji;function kn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new bi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vl}function vl(){this.i=null,this.g="",this.h=!1}var Zo={},Ds={};function Os(u,m,_){u.L=1,u.v=Kr(sn(m)),u.m=_,u.P=!0,ea(u,null)}function ea(u,m){u.F=Date.now(),He(u),u.A=sn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Qr(_.i,"t",w),u.C=0,_=u.j.J,u.h=new vl,u.g=Ml(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Li(S(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(Ho[0]=F.toString()),F=Ho);for(var W=0;W<F.length;W++){var ne=Fo(_,F[W],w||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),gr(),Fi(u.i,u.u,u.A,u.l,u.R,u.m)}kn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Qt(u)==3?m.j():this.Y(u)},kn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Qt(this.g);var m=this.g.Ba();const gn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||oa(this.g)))){this.J||lt!=4||m==7||(m==8||0>=gn?gr(3):gr(2)),Bi(this);var _=this.g.Z();this.X=_;t:if(El(this)){var w=oa(this.g);u="";var F=w.length,W=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),$r(this);var ne="";break t}this.h.i=new f.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!(W&&m==F-1)});w.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,xs(this.i,this.u,this.A,this.l,this.R,lt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,ft=this.g;if((je=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(je)){var Oe=je;break t}}Oe=null}if(_=Oe)An(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ta(this,_);else{this.o=!1,this.s=3,st(12),pn(this),$r(this);break e}}if(this.P){_=!0;let an;for(;!this.J&&this.C<ne.length;)if(an=zc(this,ne),an==Ds){lt==4&&(this.s=4,st(14),_=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Zo){this.s=4,st(15),An(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else An(this.i,this.l,an,null),ta(this,an);if(El(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||ne.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)An(this.i,this.l,ne,"[Invalid Chunked Response]"),pn(this),$r(this);else if(0<ne.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),la(Et),Et.M=!0,st(11))}}else An(this.i,this.l,ne,null),ta(this,ne);lt==4&&pn(this),this.o&&!this.J&&(lt==4?Hs(this.j,this):(this.o=!1,He(this)))}else Fs(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),pn(this),$r(this)}}}catch{}finally{}};function El(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function zc(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Ds:(_=Number(m.substring(_,w)),isNaN(_)?Zo:(w+=1,w+_>m.length?Ds:(m=m.slice(w,w+_),u.C=w+_,m)))}kn.prototype.cancel=function(){this.J=!0,pn(this)};function He(u){u.S=Date.now()+u.I,wl(u,u.I)}function wl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Rn(S(u.ba,u),m)}function Bi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}kn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Jo(this.i,this.A),this.L!=2&&(gr(),st(17)),pn(this),this.s=2,$r(this)):wl(this,this.S-u)};function $r(u){u.j.G==0||u.J||Hs(u.j,u)}function pn(u){Bi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Wo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ta(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||zt(_.h,u))){if(!u.K&&zt(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var F=w;if(F[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)$s(_),On(_);else break e;zs(_),st(18)}}else _.za=F[1],0<_.za-_.T&&37500>F[2]&&_.F&&_.v==0&&!_.C&&(_.C=Rn(S(_.Za,_),6e3));if(1>=Il(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else wr(_,11)}else if((u.K||_.g==u)&&$s(_),!K(m))for(F=_.Da.g.parse(m),m=0;m<F.length;m++){let Oe=F[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const Et=Oe[3];Et!=null&&(_.la=Et,_.j.info("VER="+_.la));const lt=Oe[4];lt!=null&&(_.Aa=lt,_.j.info("SVER="+_.Aa));const gn=Oe[5];gn!=null&&typeof gn=="number"&&0<gn&&(w=1.5*gn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const an=u.g;if(an){const Gi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var W=w.h;W.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(na(W,W.h),W.h=null))}if(w.D){const qs=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(w.ya=qs,ze(w.I,w.D,qs))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var ne=u;if(w.qa=Vl(w,w.J?w.ia:null,w.W),ne.K){Sl(w.h,ne);var je=ne,ft=w.L;ft&&(je.I=ft),je.B&&(Bi(je),He(je)),w.g=ne}else Ki(w);0<_.i.length&&Kn(_)}else Oe[0]!="stop"&&Oe[0]!="close"||wr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?wr(_,7):At(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}gr(4)}catch{}}var Tl=class{constructor(u,m){this.g=u,this.map=m}};function zi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Il(u){return u.h?1:u.g?u.g.size:0}function zt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function na(u,m){u.g?u.g.add(m):u.h=m}function Sl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}zi.prototype.cancel=function(){if(this.i=Rl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Rl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return z(u.i)}function Ls(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function bs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function Hr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=bs(u),w=Ls(u),F=w.length,W=0;W<F;W++)m.call(void 0,w[W],_&&_[W],u)}var $i=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $c(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),F=null;if(0<=w){var W=u[_].substring(0,w);F=u[_].substring(w+1)}else W=u[_];m(W,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function yr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof yr){this.h=u.h,Hi(this,u.j),this.o=u.o,this.g=u.g,Wr(this,u.s),this.l=u.l;var m=u.i,_=new Hn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),qr(this,_),this.m=u.m}else u&&(m=String(u).match($i))?(this.h=!1,Hi(this,m[1]||"",!0),this.o=xe(m[2]||""),this.g=xe(m[3]||"",!0),Wr(this,m[4]),this.l=xe(m[5]||"",!0),qr(this,m[6]||"",!0),this.m=xe(m[7]||"")):(this.h=!1,this.i=new Hn(null,this.h))}yr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Gr(m,Vs,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Gr(m,Vs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Gr(_,_.charAt(0)=="/"?kl:Cl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Gr(_,ra)),u.join("")};function sn(u){return new yr(u)}function Hi(u,m,_){u.j=_?xe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Wr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function qr(u,m,_){m instanceof Hn?(u.i=m,Wn(u.i,u.h)):(_||(m=Gr(m,Pl)),u.i=new Hn(m,u.h))}function ze(u,m,_){u.i.set(m,_)}function Kr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Gr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Al),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Al(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Vs=/[#\/\?@]/g,Cl=/[#\?:]/g,kl=/[#\?]/g,Pl=/[#\?@]/g,ra=/#/g;function Hn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&$c(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Hn.prototype,n.add=function(u,m){Rt(this),this.i=null,u=mn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Pn(u,m){Rt(u),m=mn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function xn(u,m){return Rt(u),m=mn(u,m),u.g.has(m)}n.forEach=function(u,m){Rt(this),this.g.forEach(function(_,w){_.forEach(function(F){u.call(m,F,w,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const F=u[w];for(let W=0;W<F.length;W++)_.push(m[w])}return _},n.V=function(u){Rt(this);let m=[];if(typeof u=="string")xn(this,u)&&(m=m.concat(this.g.get(mn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Rt(this),this.i=null,u=mn(this,u),xn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Qr(u,m,_){Pn(u,m),0<_.length&&(u.i=null,u.g.set(mn(u,m),z(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const W=encodeURIComponent(String(w)),ne=this.V(w);for(w=0;w<ne.length;w++){var F=W;ne[w]!==""&&(F+="="+encodeURIComponent(String(ne[w]))),u.push(F)}}return this.i=u.join("&")};function mn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Wn(u,m){m&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(_,w){var F=w.toLowerCase();w!=F&&(Pn(this,w),Qr(this,F,_))},u)),u.j=m}function Hc(u,m){const _=new Ui;if(f.Image){const w=new Image;w.onload=D(Gt,_,"TestLoadImage: loaded",!0,m,w),w.onerror=D(Gt,_,"TestLoadImage: error",!1,m,w),w.onabort=D(Gt,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=D(Gt,_,"TestLoadImage: timeout",!1,m,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function xl(u,m){const _=new Ui,w=new AbortController,F=setTimeout(()=>{w.abort(),Gt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then(W=>{clearTimeout(F),W.ok?Gt(_,"TestPingServer: ok",!0,m):Gt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Gt(_,"TestPingServer: error",!1,m)})}function Gt(u,m,_,w,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),w(_)}catch{}}function Wc(){this.g=new Go}function Nl(u,m,_){const w=_||"";try{Hr(u,function(F,W){let ne=F;y(F)&&(ne=qo(F)),m.push(w+W+"="+encodeURIComponent(ne))})}catch(F){throw m.push(w+"type="+encodeURIComponent("_badmap")),F}}function _r(u){this.l=u.Ub||null,this.j=u.eb||!1}V(_r,Vi),_r.prototype.g=function(){return new Wi(this.l,this.j)},_r.prototype.i=function(u){return function(){return u}}({});function Wi(u,m){ht.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Wi,ht),n=Wi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Dn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Nn(this):Dn(this),this.readyState==3&&Dl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Nn(this))},n.Qa=function(u){this.g&&(this.response=u,Nn(this))},n.ga=function(){this.g&&Nn(this)};function Nn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function vr(u){let m="";return de(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function Yr(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=vr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):ze(u,m,_))}function Ge(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ge,ht);var qc=/^https?$/i,ia=["POST","PUT"];n=Ge.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?As(this.o):As(Cn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(W){qi(this,W);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var F in w)_.set(F,w[F]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const W of w.keys())_.set(W,w.get(W));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(W=>W.toLowerCase()=="content-type"),F=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ia,m,void 0))||w||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ne]of _)this.g.setRequestHeader(W,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Us(this),this.u=!0,this.g.send(u),this.u=!1}catch(W){qi(this,W)}};function qi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Ms(u),on(u)}function Ms(u){u.A||(u.A=!0,dt(u,"complete"),dt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,dt(this,"complete"),dt(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?sa(this):this.bb())},n.bb=function(){sa(this)};function sa(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Qt(u)!=4||u.Z()!=2)){if(u.u&&Qt(u)==4)$o(u.Ea,0,u);else if(dt(u,"readystatechange"),Qt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=ne===0){var F=String(u.D).match($i)[1]||null;!F&&f.self&&f.self.location&&(F=f.self.location.protocol.slice(0,-1)),w=!qc.test(F?F.toLowerCase():"")}_=w}if(_)dt(u,"complete"),dt(u,"success");else{u.m=6;try{var W=2<Qt(u)?u.g.statusText:""}catch{W=""}u.l=W+" ["+u.Z()+"]",Ms(u)}}finally{on(u)}}}}function on(u,m){if(u.g){Us(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||dt(u,"ready");try{_.onreadystatechange=w}catch{}}}function Us(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Qt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ko(m)}};function oa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Fs(u){const m={};u=(u.g&&2<=Qt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(K(u[w]))continue;var _=L(u[w]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const W=m[F]||[];m[F]=W,W.push(_)}k(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function aa(u){this.Aa=0,this.i=[],this.j=new Ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,u),this.cb=qn("retryDelaySeedMs",1e4,u),this.Wa=qn("forwardChannelMaxRetries",2,u),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(u&&u.concurrentRequestLimit),this.Da=new Wc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=aa.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){st(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Vl(this,null,this.W),Kn(this)};function At(u){if(js(u),u.G==3){var m=u.U++,_=sn(u.I);if(ze(_,"SID",u.K),ze(_,"RID",m),ze(_,"TYPE","terminate"),Er(u,_),m=new kn(u,u.j,m),m.L=2,m.v=Kr(sn(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.v,_=!0),_||(m.g=Ml(m.j,null),m.g.ea(m.v)),m.F=Date.now(),He(m)}bl(u)}function On(u){u.g&&(la(u),u.g.cancel(),u.g=null)}function js(u){On(u),u.u&&(f.clearTimeout(u.u),u.u=null),$s(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Kn(u){if(!rn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Be||oe(),re||(Be(),re=!0),me.add(m,u),u.B=0}}function Kc(u,m){return Il(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Rn(S(u.Ga,u,m),Ll(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new kn(this,this.j,u);let W=this.o;if(this.S&&(W?(W=T(W),x(W,this.S)):W=this.S),this.m!==null||this.O||(F.H=W,W=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Xr(this,F,m),_=sn(this.I),ze(_,"RID",u),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),Er(this,_),W&&(this.O?m="headers="+encodeURIComponent(String(vr(W)))+"&"+m:this.m&&Yr(_,this.m,W)),na(this.h,F),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",m),ze(_,"SID","null"),F.T=!0,Os(F,_,null)):Os(F,_,m),this.G=2}}else this.G==3&&(u?Bs(this,u):this.i.length==0||rn(this.h)||Bs(this))};function Bs(u,m){var _;m?_=m.l:_=u.U++;const w=sn(u.I);ze(w,"SID",u.K),ze(w,"RID",_),ze(w,"AID",u.T),Er(u,w),u.m&&u.o&&Yr(w,u.m,u.o),_=new kn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Xr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),na(u.h,_),Os(_,w,m)}function Er(u,m){u.H&&de(u.H,function(_,w){ze(m,w,_)}),u.l&&Hr({},function(_,w){ze(m,w,_)})}function Xr(u,m,_){_=Math.min(u.i.length,_);var w=u.l?S(u.l.Na,u.l,u):null;e:{var F=u.i;let W=-1;for(;;){const ne=["count="+_];W==-1?0<_?(W=F[0].g,ne.push("ofs="+W)):W=0:ne.push("ofs="+W);let je=!0;for(let ft=0;ft<_;ft++){let Oe=F[ft].g;const Et=F[ft].map;if(Oe-=W,0>Oe)W=Math.max(0,F[ft].g-100),je=!1;else try{Nl(Et,ne,"req"+Oe+"_")}catch{w&&w(Et)}}if(je){w=ne.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function Ki(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Be||oe(),re||(Be(),re=!0),me.add(m,u),u.v=0}}function zs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Rn(S(u.Fa,u),Ll(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ol(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Rn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),On(this),Ol(this))};function la(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Ol(u){u.g=new kn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=sn(u.qa);ze(m,"RID","rpc"),ze(m,"SID",u.K),ze(m,"AID",u.T),ze(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(m,"TO",u.ja),ze(m,"TYPE","xmlhttp"),Er(u,m),u.m&&u.o&&Yr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Kr(sn(m)),_.m=null,_.P=!0,ea(_,u)}n.Za=function(){this.C!=null&&(this.C=null,On(this),zs(this),st(19))};function $s(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Hs(u,m){var _=null;if(u.g==m){$s(u),la(u),u.g=null;var w=2}else if(zt(u.h,m))_=m.D,Sl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;w=Mi(),dt(w,new Ps(w,_)),Kn(u)}else Ki(u);else if(F=m.s,F==3||F==0&&0<m.X||!(w==1&&Kc(u,m)||w==2&&zs(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),F){case 1:wr(u,5);break;case 4:wr(u,10);break;case 3:wr(u,6);break;default:wr(u,2)}}}function Ll(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function wr(u,m){if(u.j.info("Error code "+m),m==2){var _=S(u.fb,u),w=u.Xa;const F=!w;w=new yr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Hi(w,"https"),Kr(w),F?Hc(w.toString(),_):xl(w.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(m),bl(u),js(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function bl(u){if(u.G=0,u.ka=[],u.l){const m=Rl(u.h);(m.length!=0||u.i.length!=0)&&(b(u.ka,m),b(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function Vl(u,m,_){var w=_ instanceof yr?sn(_):new yr(_);if(w.g!="")m&&(w.g=m+"."+w.g),Wr(w,w.s);else{var F=f.location;w=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var W=new yr(null);w&&Hi(W,w),m&&(W.g=m),F&&Wr(W,F),_&&(W.l=_),w=W}return _=u.D,m=u.ya,_&&m&&ze(w,_,m),ze(w,"VER",u.la),Er(u,w),w}function Ml(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ge(new _r({eb:_})):new Ge(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ua(){}n=ua.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ws(){}Ws.prototype.g=function(u,m){return new $t(u,m)};function $t(u,m){ht.call(this),this.g=new aa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!K(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!K(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Gn(this)}V($t,ht),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){At(this.g)},$t.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=qo(u),u=_);m.i.push(new Tl(m.Ya++,u)),m.G==3&&Kn(m)},$t.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,$t.aa.N.call(this)};function Ul(u){zn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}V(Ul,zn);function Fl(){ks.call(this),this.status=1}V(Fl,ks);function Gn(u){this.g=u}V(Gn,ua),Gn.prototype.ua=function(){dt(this.g,"a")},Gn.prototype.ta=function(u){dt(this.g,new Ul(u))},Gn.prototype.sa=function(u){dt(this.g,new Fl)},Gn.prototype.ra=function(){dt(this.g,"b")},Ws.prototype.createWebChannel=Ws.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,tv=function(){return new Ws},ev=function(){return Mi()},Z_=$n,qd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ns.NO_ERROR=0,Ns.TIMEOUT=8,Ns.HTTP_ERROR=6,Wu=Ns,_l.COMPLETE="complete",J_=_l,Cs.EventType=fn,fn.OPEN="a",fn.CLOSE="b",fn.ERROR="c",fn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ua=Cs,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,X_=Ge}).apply(typeof Mu<"u"?Mu:typeof self<"u"?self:typeof window<"u"?window:{});const Qg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new gf("@firebase/firestore");function po(){return ds.logLevel}function ae(n,...e){if(ds.logLevel<=ke.DEBUG){const t=e.map(Sf);ds.debug(`Firestore (${Oo}): ${n}`,...t)}}function Ur(n,...e){if(ds.logLevel<=ke.ERROR){const t=e.map(Sf);ds.error(`Firestore (${Oo}): ${n}`,...t)}}function Io(n,...e){if(ds.logLevel<=ke.WARN){const t=e.map(Sf);ds.warn(`Firestore (${Oo}): ${n}`,...t)}}function Sf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: `+n;throw Ur(e),new Error(e)}function Fe(n,e){n||Te()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends hr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class aA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class lA{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Ti;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ti,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},f=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ti)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string"),new nv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Ft(e)}}class uA{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class cA{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new uA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Fe(this.o===void 0);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new hA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=fA(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Ne(n,e){return n<e?-1:n>e?1:0}function So(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new yt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _e(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _e(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _e(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new yt(0,0))}static max(){return new Ie(new yt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Zn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zn?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=Zn.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=Zn.isNumericId(e),o=Zn.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?Zn.extractNumericId(e).compare(Zn.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wi.fromString(e.substring(4,e.length-2))}}class tt extends Zn{construct(e,t,i){return new tt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new _e(ee.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new tt(t)}static emptyPath(){return new tt([])}}const pA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends Zn{construct(e,t,i){return new xt(e,t,i)}static isValidIdentifier(e){return pA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new _e(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new _e(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new _e(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new _e(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(tt.fromString(e))}static fromName(e){return new ve(tt.fromString(e).popFirst(5))}static empty(){return new ve(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return tt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new tt(e.slice()))}}function mA(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new yt(t+1,0):new yt(t,i));return new Ci(o,ve.empty(),e)}function gA(n){return new Ci(n.readTime,n.key,-1)}class Ci{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ci(Ie.min(),ve.empty(),-1)}static max(){return new Ci(Ie.max(),ve.empty(),-1)}}function yA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==_A)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,i)=>{t(e)})}static reject(e){return new G((t,i)=>{i(e)})}static waitFor(e){return new G((t,i)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},p=>i(p))}),h=!0,l===o&&t()})}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next(o=>o?G.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new G((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(E=>{h[y]=E,++f,f===l&&i(h)},E=>o(E))}})}static doWhile(e,t){return new G((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function EA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Sc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Sc.oe=-1;function Rc(n){return n==null}function ic(n){return n===0&&1/n==-1/0}function wA(n){return typeof n=="number"&&Number.isInteger(n)&&!ic(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Yg(e)),e=IA(n.get(t),e);return Yg(e)}function IA(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Yg(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function gs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function iv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uu(this.root,e,this.comparator,!0)}}class Uu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Pt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jg(this.data.getIterator())}getIteratorFrom(e){return new Jg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class Jg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new jn([])}unionWith(e){let t=new _t(xt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return So(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class sv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new sv("Invalid base64 string: "+l):l}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const SA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ki(n){if(Fe(!!n),typeof n=="string"){let e=0;const t=SA.exec(n);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pi(n){return typeof n=="string"?Nt.fromBase64String(n):Nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ac(n){const e=n.mapValue.fields.__previous_value__;return Rf(e)?Ac(e):e}function Qa(n){const e=ki(n.mapValue.fields.__local_write_time__.timestampValue);return new yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,t,i,o,l,h,f,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y}}class Ya{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ya("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ya&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Rf(n)?4:CA(n)?9007199254740991:AA(n)?10:11:Te()}function ar(n,e){if(n===e)return!0;const t=xi(n);if(t!==xi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Qa(n).isEqual(Qa(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=ki(o.timestampValue),f=ki(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Pi(o.bytesValue).isEqual(Pi(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return at(o.geoPointValue.latitude)===at(l.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return at(o.integerValue)===at(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=at(o.doubleValue),f=at(l.doubleValue);return h===f?ic(h)===ic(f):isNaN(h)&&isNaN(f)}return!1}(n,e);case 9:return So(n.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Xg(h)!==Xg(f))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(f[p]===void 0||!ar(h[p],f[p])))return!1;return!0}(n,e);default:return Te()}}function Xa(n,e){return(n.values||[]).find(t=>ar(t,e))!==void 0}function Ro(n,e){if(n===e)return 0;const t=xi(n),i=xi(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return function(l,h){const f=at(l.integerValue||l.doubleValue),p=at(h.integerValue||h.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(n,e);case 3:return Zg(n.timestampValue,e.timestampValue);case 4:return Zg(Qa(n),Qa(e));case 5:return Ne(n.stringValue,e.stringValue);case 6:return function(l,h){const f=Pi(l),p=Pi(h);return f.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),p=h.split("/");for(let y=0;y<f.length&&y<p.length;y++){const E=Ne(f[y],p[y]);if(E!==0)return E}return Ne(f.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const f=Ne(at(l.latitude),at(h.latitude));return f!==0?f:Ne(at(l.longitude),at(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ey(n.arrayValue,e.arrayValue);case 10:return function(l,h){var f,p,y,E;const I=l.fields||{},S=h.fields||{},D=(f=I.value)===null||f===void 0?void 0:f.arrayValue,V=(p=S.value)===null||p===void 0?void 0:p.arrayValue,z=Ne(((y=D==null?void 0:D.values)===null||y===void 0?void 0:y.length)||0,((E=V==null?void 0:V.values)===null||E===void 0?void 0:E.length)||0);return z!==0?z:ey(D,V)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===Fu.mapValue&&h===Fu.mapValue)return 0;if(l===Fu.mapValue)return 1;if(h===Fu.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=h.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let I=0;I<p.length&&I<E.length;++I){const S=Ne(p[I],E[I]);if(S!==0)return S;const D=Ro(f[p[I]],y[E[I]]);if(D!==0)return D}return Ne(p.length,E.length)}(n.mapValue,e.mapValue);default:throw Te()}}function Zg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=ki(n),i=ki(e),o=Ne(t.seconds,i.seconds);return o!==0?o:Ne(t.nanos,i.nanos)}function ey(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Ro(t[o],i[o]);if(l)return l}return Ne(t.length,i.length)}function Ao(n){return Kd(n)}function Kd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=ki(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Pi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ve.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Kd(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Kd(t.fields[h])}`;return o+"}"}(n.mapValue):Te()}function qu(n){switch(xi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ac(n);return e?16+qu(e):16;case 5:return 2*n.stringValue.length;case 6:return Pi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+qu(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return gs(i.fields,(l,h)=>{o+=l.length+qu(h)}),o}(n.mapValue);default:throw Te()}}function Gd(n){return!!n&&"integerValue"in n}function Af(n){return!!n&&"arrayValue"in n}function ty(n){return!!n&&"nullValue"in n}function ny(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ku(n){return!!n&&"mapValue"in n}function AA(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function za(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return gs(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=za(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=za(n.arrayValue.values[t]);return e}return Object.assign({},n)}function CA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ku(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=za(t)}setAll(e){let t=xt.emptyPath(),i={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=za(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Ku(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Ku(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){gs(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new In(za(this.value))}}function ov(n){const e=[];return gs(n.fields,(t,i)=>{const o=new xt([t]);if(Ku(i)){const l=ov(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new jt(e,0,Ie.min(),Ie.min(),Ie.min(),In.empty(),0)}static newFoundDocument(e,t,i,o){return new jt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new jt(e,2,t,Ie.min(),Ie.min(),In.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,Ie.min(),Ie.min(),In.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sc{constructor(e,t){this.position=e,this.inclusive=t}}function ry(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=ve.comparator(ve.fromName(h.referenceValue),t.key):i=Ro(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function iy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ar(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class oc{constructor(e,t="asc"){this.field=e,this.dir=t}}function kA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class av{}class gt extends av{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new xA(e,t,i):t==="array-contains"?new OA(e,i):t==="in"?new LA(e,i):t==="not-in"?new bA(e,i):t==="array-contains-any"?new VA(e,i):new gt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new NA(e,i):new DA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ro(t,this.value)):t!==null&&xi(this.value)===xi(t)&&this.matchesComparison(Ro(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class lr extends av{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new lr(e,t)}matches(e){return lv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function lv(n){return n.op==="and"}function uv(n){return PA(n)&&lv(n)}function PA(n){for(const e of n.filters)if(e instanceof lr)return!1;return!0}function Qd(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+Ao(n.value);if(uv(n))return n.filters.map(e=>Qd(e)).join(",");{const e=n.filters.map(t=>Qd(t)).join(",");return`${n.op}(${e})`}}function cv(n,e){return n instanceof gt?function(i,o){return o instanceof gt&&i.op===o.op&&i.field.isEqual(o.field)&&ar(i.value,o.value)}(n,e):n instanceof lr?function(i,o){return o instanceof lr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,f)=>l&&cv(h,o.filters[f]),!0):!1}(n,e):void Te()}function hv(n){return n instanceof gt?function(t){return`${t.field.canonicalString()} ${t.op} ${Ao(t.value)}`}(n):n instanceof lr?function(t){return t.op.toString()+" {"+t.getFilters().map(hv).join(" ,")+"}"}(n):"Filter"}class xA extends gt{constructor(e,t,i){super(e,t,i),this.key=ve.fromName(i.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class NA extends gt{constructor(e,t){super(e,"in",t),this.keys=dv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class DA extends gt{constructor(e,t){super(e,"not-in",t),this.keys=dv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function dv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ve.fromName(i.referenceValue))}class OA extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Af(t)&&Xa(t.arrayValue,this.value)}}class LA extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xa(this.value.arrayValue,t)}}class bA extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Xa(this.value.arrayValue,t)}}class VA extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Af(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Xa(this.value.arrayValue,i))}}/**
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
 */class MA{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function sy(n,e=null,t=[],i=[],o=null,l=null,h=null){return new MA(n,e,t,i,o,l,h)}function Cf(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Qd(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Rc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Ao(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Ao(i)).join(",")),e.ue=t}return e.ue}function kf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!kA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!iy(n.startAt,e.startAt)&&iy(n.endAt,e.endAt)}function Yd(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function UA(n,e,t,i,o,l,h,f){return new Cc(n,e,t,i,o,l,h,f)}function Pf(n){return new Cc(n)}function oy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function FA(n){return n.collectionGroup!==null}function $a(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new _t(xt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(f=f.add(y.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new oc(l,i))}),t.has(xt.keyField().canonicalString())||e.ce.push(new oc(xt.keyField(),i))}return e.ce}function nr(n){const e=Se(n);return e.le||(e.le=jA(e,$a(n))),e.le}function jA(n,e){if(n.limitType==="F")return sy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new oc(o.field,l)});const t=n.endAt?new sc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new sc(n.startAt.position,n.startAt.inclusive):null;return sy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Xd(n,e,t){return new Cc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function kc(n,e){return kf(nr(n),nr(e))&&n.limitType===e.limitType}function fv(n){return`${Cf(nr(n))}|lt:${n.limitType}`}function mo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>hv(o)).join(", ")}]`),Rc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Ao(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Ao(o)).join(",")),`Target(${i})`}(nr(n))}; limitType=${n.limitType})`}function Pc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ve.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of $a(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,f,p){const y=ry(h,f,p);return h.inclusive?y<=0:y<0}(i.startAt,$a(i),o)||i.endAt&&!function(h,f,p){const y=ry(h,f,p);return h.inclusive?y>=0:y>0}(i.endAt,$a(i),o))}(n,e)}function BA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pv(n){return(e,t)=>{let i=!1;for(const o of $a(n)){const l=zA(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function zA(n,e,t){const i=n.field.isKeyField()?ve.comparator(e.key,t.key):function(l,h,f){const p=h.data.field(l),y=f.data.field(l);return p!==null&&y!==null?Ro(p,y):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return iv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=new Ze(ve.comparator);function Fr(){return $A}const mv=new Ze(ve.comparator);function Fa(...n){let e=mv;for(const t of n)e=e.insert(t.key,t);return e}function gv(n){let e=mv;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ls(){return Ha()}function yv(){return Ha()}function Ha(){return new ys(n=>n.toString(),(n,e)=>n.isEqual(e))}const HA=new Ze(ve.comparator),WA=new _t(ve.comparator);function Pe(...n){let e=WA;for(const t of n)e=e.add(t);return e}const qA=new _t(Ne);function KA(){return qA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ic(e)?"-0":e}}function _v(n){return{integerValue:""+n}}function GA(n,e){return wA(e)?_v(e):xf(n,e)}/**
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
 */class xc{constructor(){this._=void 0}}function QA(n,e,t){return n instanceof ac?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Rf(l)&&(l=Ac(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof Ja?Ev(n,e):n instanceof Za?wv(n,e):function(o,l){const h=vv(o,l),f=ay(h)+ay(o.Pe);return Gd(h)&&Gd(o.Pe)?_v(f):xf(o.serializer,f)}(n,e)}function YA(n,e,t){return n instanceof Ja?Ev(n,e):n instanceof Za?wv(n,e):t}function vv(n,e){return n instanceof lc?function(i){return Gd(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class ac extends xc{}class Ja extends xc{constructor(e){super(),this.elements=e}}function Ev(n,e){const t=Tv(e);for(const i of n.elements)t.some(o=>ar(o,i))||t.push(i);return{arrayValue:{values:t}}}class Za extends xc{constructor(e){super(),this.elements=e}}function wv(n,e){let t=Tv(e);for(const i of n.elements)t=t.filter(o=>!ar(o,i));return{arrayValue:{values:t}}}class lc extends xc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ay(n){return at(n.integerValue||n.doubleValue)}function Tv(n){return Af(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function XA(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof Ja&&o instanceof Ja||i instanceof Za&&o instanceof Za?So(i.elements,o.elements,ar):i instanceof lc&&o instanceof lc?ar(i.Pe,o.Pe):i instanceof ac&&o instanceof ac}(n.transform,e.transform)}class JA{constructor(e,t){this.version=e,this.transformResults=t}}class Vr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Vr}static exists(e){return new Vr(void 0,e)}static updateTime(e){return new Vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gu(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Nc{}function Iv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Rv(n.key,Vr.none()):new cl(n.key,n.data,Vr.none());{const t=n.data,i=In.empty();let o=new _t(xt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new _s(n.key,i,new jn(o.toArray()),Vr.none())}}function ZA(n,e,t){n instanceof cl?function(o,l,h){const f=o.value.clone(),p=uy(o.fieldTransforms,l,h.transformResults);f.setAll(p),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(n,e,t):n instanceof _s?function(o,l,h){if(!Gu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=uy(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(Sv(o)),p.setAll(f),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Wa(n,e,t,i){return n instanceof cl?function(l,h,f,p){if(!Gu(l.precondition,h))return f;const y=l.value.clone(),E=cy(l.fieldTransforms,p,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof _s?function(l,h,f,p){if(!Gu(l.precondition,h))return f;const y=cy(l.fieldTransforms,p,h),E=h.data;return E.setAll(Sv(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(I=>I.field))}(n,e,t,i):function(l,h,f){return Gu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(n,e,t)}function eC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=vv(i.transform,o||null);l!=null&&(t===null&&(t=In.empty()),t.set(i.field,l))}return t||null}function ly(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&So(i,o,(l,h)=>XA(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class cl extends Nc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class _s extends Nc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Sv(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function uy(n,e,t){const i=new Map;Fe(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,YA(h,f,t[o]))}return i}function cy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,QA(l,h,e))}return i}class Rv extends Nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tC extends Nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&ZA(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Wa(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Wa(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=yv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const p=Iv(h,f);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&So(this.mutations,e.mutations,(t,i)=>ly(t,i))&&So(this.baseMutations,e.baseMutations,(t,i)=>ly(t,i))}}class Nf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length);let o=function(){return HA}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Nf(e,t,i,o)}}/**
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
 */class rC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class iC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Le;function sC(n){switch(n){default:return Te();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0}}function Av(n){if(n===void 0)return Ur("GRPC error has no .code"),ee.UNKNOWN;switch(n){case ct.OK:return ee.OK;case ct.CANCELLED:return ee.CANCELLED;case ct.UNKNOWN:return ee.UNKNOWN;case ct.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case ct.INTERNAL:return ee.INTERNAL;case ct.UNAVAILABLE:return ee.UNAVAILABLE;case ct.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case ct.NOT_FOUND:return ee.NOT_FOUND;case ct.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case ct.ABORTED:return ee.ABORTED;case ct.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case ct.DATA_LOSS:return ee.DATA_LOSS;default:return Te()}}(Le=ct||(ct={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function oC(){return new TextEncoder}/**
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
 */const aC=new wi([4294967295,4294967295],0);function hy(n){const e=oC().encode(n),t=new Y_;return t.update(e),new Uint8Array(t.digest())}function dy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new wi([t,i],0),new wi([o,l],0)]}class Df{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ja(`Invalid padding: ${t}`);if(i<0)throw new ja(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ja(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ja(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=wi.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(wi.fromNumber(i)));return o.compare(aC)===1&&(o=new wi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=hy(e),[i,o]=dy(t);for(let l=0;l<this.hashCount;l++){const h=this.de(i,o,l);if(!this.Ee(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Df(l,o,t);return i.forEach(f=>h.insert(f)),h}insert(e){if(this.Te===0)return;const t=hy(e),[i,o]=dy(t);for(let l=0;l<this.hashCount;l++){const h=this.de(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,hl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Dc(Ie.min(),o,new Ze(Ne),Fr(),Pe())}}class hl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new hl(i,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Cv{constructor(e,t){this.targetId=e,this.me=t}}class kv{constructor(e,t,i=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class fy{constructor(){this.fe=0,this.ge=py(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),i=Pe();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new hl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=py()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class lC{constructor(e){this.Be=e,this.Le=new Map,this.ke=Fr(),this.qe=ju(),this.Qe=ju(),this.Ke=new Ze(Ne)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(Yd(l))if(i===0){const h=new ve(l.path);this.We(t,h,jt.newNoDocument(h,Ie.min()))}else Fe(i===1);else{const h=this.Ze(t);if(h!==i){const f=this.Xe(e),p=f?this.et(f,e,h):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Pi(i).toUint8Array()}catch(p){if(p instanceof sv)return Io("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Df(h,o,l)}catch(p){return Io(p instanceof ja?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Te===0?null:f}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Be.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((l,h)=>{const f=this.Ye(h);if(f){if(l.current&&Yd(f.target)){const p=new ve(f.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,jt.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=Pe();this.Qe.forEach((l,h)=>{let f=!0;h.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Dc(e,t,this.Ke,this.ke,i);return this.ke=Fr(),this.qe=ju(),this.Qe=ju(),this.Ke=new Ze(Ne),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new fy,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new _t(Ne),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new _t(Ne),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new fy),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function ju(){return new Ze(ve.comparator)}function py(){return new Ze(ve.comparator)}const uC={asc:"ASCENDING",desc:"DESCENDING"},cC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hC={and:"AND",or:"OR"};class dC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Jd(n,e){return n.useProto3Json||Rc(e)?e:{value:e}}function uc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pv(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function fC(n,e){return uc(n,e.toTimestamp())}function rr(n){return Fe(!!n),Ie.fromTimestamp(function(t){const i=ki(t);return new yt(i.seconds,i.nanos)}(n))}function Of(n,e){return Zd(n,e).canonicalString()}function Zd(n,e){const t=function(o){return new tt(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xv(n){const e=tt.fromString(n);return Fe(bv(e)),e}function ef(n,e){return Of(n.databaseId,e.path)}function Dd(n,e){const t=xv(e);if(t.get(1)!==n.databaseId.projectId)throw new _e(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _e(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(Dv(t))}function Nv(n,e){return Of(n.databaseId,e)}function pC(n){const e=xv(n);return e.length===4?tt.emptyPath():Dv(e)}function tf(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Dv(n){return Fe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function my(n,e,t){return{name:ef(n,e),fields:t.value.mapValue.fields}}function mC(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(Fe(E===void 0||typeof E=="string"),Nt.fromBase64String(E||"")):(Fe(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Nt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(y){const E=y.code===void 0?ee.UNKNOWN:Av(y.code);return new _e(E,y.message||"")}(h);t=new kv(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Dd(n,i.document.name),l=rr(i.document.updateTime),h=i.document.createTime?rr(i.document.createTime):Ie.min(),f=new In({mapValue:{fields:i.document.fields}}),p=jt.newFoundDocument(o,l,h,f),y=i.targetIds||[],E=i.removedTargetIds||[];t=new Qu(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Dd(n,i.document),l=i.readTime?rr(i.readTime):Ie.min(),h=jt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new Qu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Dd(n,i.document),l=i.removedTargetIds||[];t=new Qu([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new iC(o,l),f=i.targetId;t=new Cv(f,h)}}return t}function gC(n,e){let t;if(e instanceof cl)t={update:my(n,e.key,e.value)};else if(e instanceof Rv)t={delete:ef(n,e.key)};else if(e instanceof _s)t={update:my(n,e.key,e.data),updateMask:RC(e.fieldMask)};else{if(!(e instanceof tC))return Te();t={verify:ef(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const f=h.transform;if(f instanceof ac)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Ja)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Za)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof lc)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:fC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()}(n,e.precondition)),t}function yC(n,e){return n&&n.length>0?(Fe(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?rr(o.updateTime):rr(l);return h.isEqual(Ie.min())&&(h=rr(l)),new JA(h,o.transformResults||[])}(t,e))):[]}function _C(n,e){return{documents:[Nv(n,e.path)]}}function vC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Nv(n,o);const l=function(y){if(y.length!==0)return Lv(lr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(E=>function(S){return{field:go(S.field),direction:TC(S.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Jd(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function EC(n){let e=pC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(I){const S=Ov(I);return S instanceof lr&&uv(S)?S.getFilters():[S]}(t.where));let h=[];t.orderBy&&(h=function(I){return I.map(S=>function(V){return new oc(yo(V.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(S))}(t.orderBy));let f=null;t.limit&&(f=function(I){let S;return S=typeof I=="object"?I.value:I,Rc(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(I){const S=!!I.before,D=I.values||[];return new sc(D,S)}(t.startAt));let y=null;return t.endAt&&(y=function(I){const S=!I.before,D=I.values||[];return new sc(D,S)}(t.endAt)),UA(e,o,h,l,f,"F",p,y)}function wC(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ov(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=yo(t.unaryFilter.field);return gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=yo(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=yo(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=yo(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return gt.create(yo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return lr.create(t.compositeFilter.filters.map(i=>Ov(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function TC(n){return uC[n]}function IC(n){return cC[n]}function SC(n){return hC[n]}function go(n){return{fieldPath:n.canonicalString()}}function yo(n){return xt.fromServerFormat(n.fieldPath)}function Lv(n){return n instanceof gt?function(t){if(t.op==="=="){if(ny(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NAN"}};if(ty(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ny(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NOT_NAN"}};if(ty(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:go(t.field),op:IC(t.op),value:t.value}}}(n):n instanceof lr?function(t){const i=t.getFilters().map(o=>Lv(o));return i.length===1?i[0]:{compositeFilter:{op:SC(t.op),filters:i}}}(n):Te()}function RC(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bv(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t,i,o,l=Ie.min(),h=Ie.min(),f=Nt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new _i(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.ht=e}}function CC(n){const e=EC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xd(e,e.limit,"L"):e}/**
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
 */class kC{constructor(){this.ln=new PC}addToCollectionParentIndex(e,t){return this.ln.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Ci.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Ci.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class PC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new _t(tt.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new _t(tt.comparator)).toArray()}}/**
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
 */const gy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(41943040,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Co(0)}static Qn(){return new Co(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy([n,e],[t,i]){const o=Ne(n,t);return o===0?Ne(e,i):o}class xC{constructor(e){this.Gn=e,this.buffer=new _t(yy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();yy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class NC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bo(t)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Lo(t)}await this.Yn(3e5)})}}class DC{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return G.resolve(Sc.oe);const i=new xC(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(gy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,h,f,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o))).next(I=>(i=I,f=Date.now(),this.removeTargets(e,i,t))).next(I=>(l=I,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(I=>(y=Date.now(),po()<=ke.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${I} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I})))}}function OC(n,e){return new DC(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.changes=new ys(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Wa(i.mutation,o,jn.empty(),yt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Pe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Pe()){const o=ls();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=Fa();return l.forEach((f,p)=>{h=h.insert(f,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=ls();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Pe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,i,o){let l=Fr();const h=Ha(),f=function(){return Ha()}();return t.forEach((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof _s)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Wa(E.mutation,y,E.mutation.getFieldMask(),yt.now())):h.set(y.key,jn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,E)=>h.set(y,E)),t.forEach((y,E)=>{var I;return f.set(y,new bC(E,(I=h.get(y))!==null&&I!==void 0?I:null))}),f))}recalculateAndSaveOverlays(e,t){const i=Ha();let o=new Ze((h,f)=>h-f),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||jn.empty();E=f.applyToLocalView(y,E),i.set(p,E);const I=(o.get(f.batchId)||Pe()).add(p);o=o.insert(f.batchId,I)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,E=p.value,I=yv();E.forEach(S=>{if(!l.has(S)){const D=Iv(t.get(S),i.get(S));D!==null&&I.set(S,D),l=l.add(S)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,I))}return G.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return ve.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):FA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(ls());let f=-1,p=l;return h.next(y=>G.forEach(y,(E,I)=>(f<I.largestBatchId&&(f=I.largestBatchId),l.get(E)?G.resolve():this.remoteDocumentCache.getEntry(e,E).next(S=>{p=p.insert(E,S)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Pe())).next(E=>({batchId:f,changes:gv(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(i=>{let o=Fa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Fa();return this.indexManager.getCollectionParents(e,l).next(f=>G.forEach(f,p=>{const y=function(I,S){return new Cc(S,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((I,S)=>{h=h.insert(I,S)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((p,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,jt.newInvalidDocument(E)))});let f=Fa();return h.forEach((p,y)=>{const E=l.get(p);E!==void 0&&Wa(E.mutation,y,jn.empty(),yt.now()),Pc(t,y)&&(f=f.insert(p,y))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return G.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:rr(o.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:CC(o.bundledQuery),readTime:rr(o.readTime)}}(t)),G.resolve()}}/**
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
 */class UC{constructor(){this.overlays=new Ze(ve.comparator),this.dr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ls();return G.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.dr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=ls(),l=t.length+1,h=new ve(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new Ze((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=ls(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const f=ls(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>f.set(y,E)),!(f.size()>=o)););return G.resolve(f)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new rC(t,i));let l=this.dr.get(t);l===void 0&&(l=Pe(),this.dr.set(t,l)),this.dr.set(t,l.add(i.key))}}/**
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
 */class FC{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.Er=new _t(St.Ar),this.Rr=new _t(St.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new St(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new St(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new ve(new tt([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.Rr.forEachInRange([i,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ve(new tt([])),i=new St(t,e),o=new St(t,e+1);let l=Pe();return this.Rr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new St(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ve.comparator(e.key,t.key)||Ne(e.br,t.br)}static Vr(e,t){return Ne(e.br,t.br)||ve.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new _t(St.Ar)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new nC(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],h=>{const f=this.Cr(h.br);l.push(f)}),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new _t(Ne);return t.forEach(o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],f=>{i=i.add(f.br)})}),G.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ve.isDocumentKey(l)||(l=l.child(""));const h=new St(new ve(l),0);let f=new _t(Ne);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.br)),!0)},h),G.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return G.forEach(t.mutations,o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){const i=new St(t,0),o=this.vr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.Nr=e,this.docs=function(){return new Ze(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let i=Fr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():jt.newInvalidDocument(o))}),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Fr();const h=t.path,f=new ve(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||yA(gA(E),i)<=0||(o.has(E.key)||Pc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Br(e,t){return G.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new zC(this)}getSize(e){return G.resolve(this.size)}}class zC extends LC{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),G.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.persistence=e,this.Lr=new ys(t=>Cf(t),kf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.kr=0,this.qr=new Lf,this.targetCount=0,this.Qr=Co.qn()}forEachTarget(e,t){return this.Lr.forEach((i,o)=>t(o)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),G.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Co(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Un(t),G.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Lr.forEach((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Lr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),G.waitFor(l).next(()=>o)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Sc(0),this.Ur=!1,this.Ur=!0,this.Wr=new FC,this.referenceDelegate=e(this),this.Gr=new $C(this),this.indexManager=new kC,this.remoteDocumentCache=function(o){return new BC(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new AC(t),this.jr=new MC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new UC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new jC(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new HC(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return G.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class HC extends vA{constructor(e){super(),this.currentSequenceNumber=e}}class bf{constructor(e){this.persistence=e,this.Zr=new Lf,this.Xr=null}static ei(e){return new bf(e)}get ti(){if(this.Xr)return this.Xr;throw Te()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),G.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ti,i=>{const o=ve.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ie.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return G.or([()=>G.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class cc{constructor(e,t){this.persistence=e,this.ri=new ys(i=>TA(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=OC(this,t)}static ei(e,t){return new cc(e,t)}Hr(){}Jr(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return G.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?G.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Br(e,h=>this.ir(e,h,t).next(f=>{f||(i++,l.removeEntry(h,Ie.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qu(e.data.value)),t}ir(e,t,i){return G.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Vf(e,t.fromCache,i,o)}}/**
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
 */class WC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class qC{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return CS()?8:EA(Bt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new WC;return this.ts(e,t,h).next(f=>{if(l.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(po()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",mo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),G.resolve()):(po()<=ke.DEBUG&&ae("QueryEngine","Query:",mo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(po()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",mo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(t))):G.resolve())}Xi(e,t){if(oy(t))return G.resolve(null);let i=nr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Xd(t,null,"F"),i=nr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=Pe(...l);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,f);return this.ss(t,y,h,p.readTime)?this.Xi(e,Xd(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return oy(t)||o.isEqual(Ie.min())?G.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const h=this.rs(t,l);return this.ss(t,h,i,o)?G.resolve(null):(po()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),mo(t)),this.os(e,h,t,mA(o,-1)).next(f=>f))})}rs(e,t){let i=new _t(pv(e));return t.forEach((o,l)=>{Pc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return po()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",mo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ci.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Ze(Ne),this.cs=new ys(l=>Cf(l),kf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VC(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function GC(n,e,t,i){return new KC(n,e,t,i)}async function Mv(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],f=[];let p=Pe();for(const y of o){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:h,addedBatchIds:f}))})})}function QC(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(f,p,y,E){const I=y.batch,S=I.keys();let D=G.resolve();return S.forEach(V=>{D=D.next(()=>E.getEntry(p,V)).next(z=>{const b=y.docVersions.get(V);Fe(b!==null),z.version.compareTo(b)<0&&(I.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),E.addEntry(z)))})}),D.next(()=>f.mutationQueue.removeMutationBatch(p,I))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(f){let p=Pe();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function Uv(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function YC(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach((E,I)=>{const S=o.get(I);if(!S)return;f.push(t.Gr.removeMatchingKeys(l,E.removedDocuments,I).next(()=>t.Gr.addMatchingKeys(l,E.addedDocuments,I)));let D=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?D=D.withResumeToken(Nt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):E.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(E.resumeToken,i)),o=o.insert(I,D),function(z,b,q){return z.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(S,D,E)&&f.push(t.Gr.updateTargetData(l,D))});let p=Fr(),y=Pe();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),f.push(XC(l,h,e.documentUpdates).next(E=>{p=E.Is,y=E.ds})),!i.isEqual(Ie.min())){const E=t.Gr.getLastRemoteSnapshotVersion(l).next(I=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));f.push(E)}return G.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function XC(n,e,t){let i=Pe(),o=Pe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=Fr();return t.forEach((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(f,p.readTime),h=h.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(f,p)):ae("LocalStore","Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)}),{Is:h,ds:o}})}function JC(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function ZC(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,G.resolve(o)):t.Gr.allocateTargetId(i).next(h=>(o=new _i(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function nf(n,e,t){const i=Se(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!bo(h))throw h;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function _y(n,e,t){const i=Se(n);let o=Ie.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,E){const I=Se(p),S=I.cs.get(E);return S!==void 0?G.resolve(I.us.get(S)):I.Gr.getTargetData(y,E)}(i,h,nr(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(h,f.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?l:Pe())).next(f=>(ek(i,BA(e),f),{documents:f,Es:l})))}function ek(n,e,t){let i=n.ls.get(e)||Ie.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class vy{constructor(){this.activeTargetIds=KA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tk{constructor(){this._o=new vy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new vy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nk{uo(e){}shutdown(){}}/**
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
 */class Ey{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bu=null;function Od(){return Bu===null?Bu=function(){return 268435456+Math.round(2147483648*Math.random())}():Bu++,"0x"+Bu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class sk extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,h){const f=Od(),p=this.No(t,i.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${f}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,l,h),this.Lo(t,p,y,o).then(E=>(ae("RestConnection",`Received RPC '${t}' ${f}: `,E),E),E=>{throw Io("RestConnection",`RPC '${t}' ${f} failed with error: `,E,"url: ",p,"request:",o),E})}ko(t,i,o,l,h,f){return this.Oo(t,i,o,l,h)}Bo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,i){const o=rk[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const l=Od();return new Promise((h,f)=>{const p=new X_;p.setWithCredentials(!0),p.listenOnce(J_.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Wu.NO_ERROR:const E=p.getResponseJson();ae(Ut,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case Wu.TIMEOUT:ae(Ut,`RPC '${e}' ${l} timed out`),f(new _e(ee.DEADLINE_EXCEEDED,"Request time out"));break;case Wu.HTTP_ERROR:const I=p.getStatus();if(ae(Ut,`RPC '${e}' ${l} failed with status:`,I,"response text:",p.getResponseText()),I>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S==null?void 0:S.error;if(D&&D.status&&D.message){const V=function(b){const q=b.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(q)>=0?q:ee.UNKNOWN}(D.status);f(new _e(V,D.message))}else f(new _e(ee.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new _e(ee.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ae(Ut,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);ae(Ut,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=Od(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=tv(),f=ev(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");ae(Ut,`Creating RPC '${e}' stream ${o}: ${E}`,p);const I=h.createWebChannel(E,p);let S=!1,D=!1;const V=new ik({Eo:b=>{D?ae(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,b):(S||(ae(Ut,`Opening RPC '${e}' stream ${o} transport.`),I.open(),S=!0),ae(Ut,`RPC '${e}' stream ${o} sending:`,b),I.send(b))},Ao:()=>I.close()}),z=(b,q,K)=>{b.listen(q,J=>{try{K(J)}catch(ie){setTimeout(()=>{throw ie},0)}})};return z(I,Ua.EventType.OPEN,()=>{D||(ae(Ut,`RPC '${e}' stream ${o} transport opened.`),V.So())}),z(I,Ua.EventType.CLOSE,()=>{D||(D=!0,ae(Ut,`RPC '${e}' stream ${o} transport closed`),V.Do())}),z(I,Ua.EventType.ERROR,b=>{D||(D=!0,Io(Ut,`RPC '${e}' stream ${o} transport errored:`,b),V.Do(new _e(ee.UNAVAILABLE,"The operation could not be completed")))}),z(I,Ua.EventType.MESSAGE,b=>{var q;if(!D){const K=b.data[0];Fe(!!K);const J=K,ie=(J==null?void 0:J.error)||((q=J[0])===null||q===void 0?void 0:q.error);if(ie){ae(Ut,`RPC '${e}' stream ${o} received error:`,ie);const fe=ie.status;let de=function(A){const x=ct[A];if(x!==void 0)return Av(x)}(fe),k=ie.message;de===void 0&&(de=ee.INTERNAL,k="Unknown error status: "+fe+" with message "+ie.message),D=!0,V.Do(new _e(de,k)),I.close()}else ae(Ut,`RPC '${e}' stream ${o} received:`,K),V.vo(K)}}),z(f,Z_.STAT_EVENT,b=>{b.stat===qd.PROXY?ae(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):b.stat===qd.NOPROXY&&ae(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}function Ld(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n){return new dC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,t,i,o,l,h,f,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Fv(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new _e(ee.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.d_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ok extends jv{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=mC(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ie.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?rr(h.readTime):Ie.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=tf(this.serializer),t.addTarget=function(l,h){let f;const p=h.target;if(f=Yd(p)?{documents:_C(l,p)}:{query:vC(l,p).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Pv(l,h.resumeToken);const y=Jd(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Ie.min())>0){f.readTime=uc(l,h.snapshotVersion.toTimestamp());const y=Jd(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f}(this.serializer,e);const i=wC(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=tf(this.serializer),t.removeTarget=e,this.c_(t)}}class ak extends jv{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=yC(e.writeResults,e.commitTime),i=rr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=tf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>gC(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new _e(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,Zd(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new _e(ee.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,Zd(t,i),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new _e(ee.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class uk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ur(t),this.C_=!1):ae("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{i.enqueueAndForget(async()=>{vs(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.k_.add(4),await dl(y),y.K_.set("Unknown"),y.k_.delete(4),await Lc(y)}(this))})}),this.K_=new uk(i,o)}}async function Lc(n){if(vs(n))for(const e of n.q_)await e(!0)}async function dl(n){for(const e of n.q_)await e(!1)}function Bv(n,e){const t=Se(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),jf(t)?Ff(t):Vo(t).s_()&&Uf(t,e))}function Mf(n,e){const t=Se(n),i=Vo(t);t.L_.delete(e),i.s_()&&zv(t,e),t.L_.size===0&&(i.s_()?i.a_():vs(t)&&t.K_.set("Unknown"))}function Uf(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vo(n).V_(e)}function zv(n,e){n.U_.xe(e),Vo(n).m_(e)}function Ff(n){n.U_=new lC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Vo(n).start(),n.K_.F_()}function jf(n){return vs(n)&&!Vo(n).i_()&&n.L_.size>0}function vs(n){return Se(n).k_.size===0}function $v(n){n.U_=void 0}async function hk(n){n.K_.set("Online")}async function dk(n){n.L_.forEach((e,t)=>{Uf(n,e)})}async function fk(n,e){$v(n),jf(n)?(n.K_.O_(e),Ff(n)):n.K_.set("Unknown")}async function pk(n,e,t){if(n.K_.set("Online"),e instanceof kv&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.L_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.L_.delete(f),o.U_.removeTarget(f))}(n,e)}catch(i){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await hc(n,i)}else if(e instanceof Qu?n.U_.$e(e):e instanceof Cv?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ie.min()))try{const i=await Uv(n.localStore);t.compareTo(i)>=0&&await function(l,h){const f=l.U_.it(h);return f.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.L_.get(y);E&&l.L_.set(y,E.withResumeToken(p.resumeToken,h))}}),f.targetMismatches.forEach((p,y)=>{const E=l.L_.get(p);if(!E)return;l.L_.set(p,E.withResumeToken(Nt.EMPTY_BYTE_STRING,E.snapshotVersion)),zv(l,p);const I=new _i(E.target,p,y,E.sequenceNumber);Uf(l,I)}),l.remoteSyncer.applyRemoteEvent(f)}(n,t)}catch(i){ae("RemoteStore","Failed to raise snapshot:",i),await hc(n,i)}}async function hc(n,e,t){if(!bo(e))throw e;n.k_.add(1),await dl(n),n.K_.set("Offline"),t||(t=()=>Uv(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Lc(n)})}function Hv(n,e){return e().catch(t=>hc(n,t,e))}async function bc(n){const e=Se(n),t=Ni(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;mk(e);)try{const o=await JC(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,gk(e,o)}catch(o){await hc(e,o)}Wv(e)&&qv(e)}function mk(n){return vs(n)&&n.B_.length<10}function gk(n,e){n.B_.push(e);const t=Ni(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Wv(n){return vs(n)&&!Ni(n).i_()&&n.B_.length>0}function qv(n){Ni(n).start()}async function yk(n){Ni(n).w_()}async function _k(n){const e=Ni(n);for(const t of n.B_)e.g_(t.mutations)}async function vk(n,e,t){const i=n.B_.shift(),o=Nf.from(i,e,t);await Hv(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await bc(n)}async function Ek(n,e){e&&Ni(n).f_&&await async function(i,o){if(function(h){return sC(h)&&h!==ee.ABORTED}(o.code)){const l=i.B_.shift();Ni(i).__(),await Hv(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await bc(i)}}(n,e),Wv(n)&&qv(n)}async function wy(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const i=vs(t);t.k_.add(3),await dl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Lc(t)}async function wk(n,e){const t=Se(n);e?(t.k_.delete(2),await Lc(t)):e||(t.k_.add(2),await dl(t),t.K_.set("Unknown"))}function Vo(n){return n.W_||(n.W_=function(t,i,o){const l=Se(t);return l.b_(),new ok(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:hk.bind(null,n),mo:dk.bind(null,n),po:fk.bind(null,n),R_:pk.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),jf(n)?Ff(n):n.K_.set("Unknown")):(await n.W_.stop(),$v(n))})),n.W_}function Ni(n){return n.G_||(n.G_=function(t,i,o){const l=Se(t);return l.b_(),new ak(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:yk.bind(null,n),po:Ek.bind(null,n),p_:_k.bind(null,n),y_:vk.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await bc(n)):(await n.G_.stop(),n.B_.length>0&&(ae("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Bf(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zf(n,e){if(Ur("AsyncQueue",`${e}: ${n}`),bo(n))return new _e(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{static emptySet(e){return new vo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ve.comparator(t.key,i.key):(t,i)=>ve.comparator(t.key,i.key),this.keyedMap=Fa(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new vo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.z_=new Ze(ve.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class ko{constructor(e,t,i,o,l,h,f,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new ko(e,t,vo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Ik{constructor(){this.queries=Iy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=Iy(),l.forEach((h,f)=>{for(const p of f.J_)p.onError(i)})})(this,new _e(ee.ABORTED,"Firestore shutting down"))}}function Iy(){return new ys(n=>fv(n),kc)}async function Sk(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new Tk,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=zf(h,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&$f(t)}async function Rk(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Ak(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.J_)f.ta(o)&&(i=!0);h.H_=o}}i&&$f(t)}function Ck(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function $f(n){n.X_.forEach(e=>{e.next()})}var rf,Sy;(Sy=rf||(rf={})).na="default",Sy.Cache="cache";class kk{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new ko(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==rf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.key=e}}class Gv{constructor(e){this.key=e}}class Pk{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Pe(),this.mutatedKeys=Pe(),this.Va=pv(e),this.ma=new vo(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new Ty,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,I)=>{const S=o.get(E),D=Pc(this.query,I)?I:null,V=!!S&&this.mutatedKeys.has(S.key),z=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let b=!1;S&&D?S.data.isEqual(D.data)?V!==z&&(i.track({type:3,doc:D}),b=!0):this.ya(S,D)||(i.track({type:2,doc:D}),b=!0,(p&&this.Va(D,p)>0||y&&this.Va(D,y)<0)&&(f=!0)):!S&&D?(i.track({type:0,doc:D}),b=!0):S&&!D&&(i.track({type:1,doc:S}),b=!0,(p||y)&&(f=!0)),b&&(D?(h=h.add(D),l=z?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{ma:h,pa:i,ss:f,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((E,I)=>function(D,V){const z=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return z(D)-z(V)}(E.type,I.type)||this.Va(E.doc,I.doc)),this.wa(i),o=o!=null&&o;const f=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,h.length!==0||y?{snapshot:new ko(this.query,e.ma,l,h,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ty,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Pe(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new Gv(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new Kv(i))}),t}va(e){this.Ea=e.Es,this.Ra=Pe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return ko.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class xk{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Nk{constructor(e){this.key=e,this.Fa=!1}}class Dk{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new ys(f=>fv(f),kc),this.Oa=new Map,this.Na=new Set,this.Ba=new Ze(ve.comparator),this.La=new Map,this.ka=new Lf,this.qa={},this.Qa=new Map,this.Ka=Co.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Ok(n,e,t=!0){const i=eE(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await Qv(i,e,t,!0),o}async function Lk(n,e){const t=eE(n);await Qv(t,e,!0,!1)}async function Qv(n,e,t,i){const o=await ZC(n.localStore,nr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await bk(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&Bv(n.remoteStore,o),f}async function bk(n,e,t,i,o){n.Ua=(I,S,D)=>async function(z,b,q,K){let J=b.view.ga(q);J.ss&&(J=await _y(z.localStore,b.query,!1).then(({documents:k})=>b.view.ga(k,J)));const ie=K&&K.targetChanges.get(b.targetId),fe=K&&K.targetMismatches.get(b.targetId)!=null,de=b.view.applyChanges(J,z.isPrimaryClient,ie,fe);return Ay(z,b.targetId,de.ba),de.snapshot}(n,I,S,D);const l=await _y(n.localStore,e,!0),h=new Pk(e,l.Es),f=h.ga(l.documents),p=hl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,p);Ay(n,t,y.ba);const E=new xk(e,t,h);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function Vk(n,e,t){const i=Se(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(h=>!kc(h,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await nf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Mf(i.remoteStore,o.targetId),sf(i,o.targetId)}).catch(Lo)):(sf(i,o.targetId),await nf(i.localStore,o.targetId,!0))}async function Mk(n,e){const t=Se(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Mf(t.remoteStore,i.targetId))}async function Uk(n,e,t){const i=Wk(n);try{const o=await function(h,f){const p=Se(h),y=yt.now(),E=f.reduce((D,V)=>D.add(V.key),Pe());let I,S;return p.persistence.runTransaction("Locally write mutations","readwrite",D=>{let V=Fr(),z=Pe();return p.hs.getEntries(D,E).next(b=>{V=b,V.forEach((q,K)=>{K.isValidDocument()||(z=z.add(q))})}).next(()=>p.localDocuments.getOverlayedDocuments(D,V)).next(b=>{I=b;const q=[];for(const K of f){const J=eC(K,I.get(K.key).overlayedDocument);J!=null&&q.push(new _s(K.key,J,ov(J.value.mapValue),Vr.exists(!0)))}return p.mutationQueue.addMutationBatch(D,y,q,f)}).next(b=>{S=b;const q=b.applyToLocalDocumentSet(I,z);return p.documentOverlayCache.saveOverlays(D,b.batchId,q)})}).then(()=>({batchId:S.batchId,changes:gv(I)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,f,p){let y=h.qa[h.currentUser.toKey()];y||(y=new Ze(Ne)),y=y.insert(f,p),h.qa[h.currentUser.toKey()]=y}(i,o.batchId,t),await fl(i,o.changes),await bc(i.remoteStore)}catch(o){const l=zf(o,"Failed to persist write");t.reject(l)}}async function Yv(n,e){const t=Se(n);try{const i=await YC(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.La.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Fe(h.Fa):o.removedDocuments.size>0&&(Fe(h.Fa),h.Fa=!1))}),await fl(t,i,e)}catch(i){await Lo(i)}}function Ry(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const p=Se(h);p.onlineState=f;let y=!1;p.queries.forEach((E,I)=>{for(const S of I.J_)S.ea(f)&&(y=!0)}),y&&$f(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Fk(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),l=o&&o.key;if(l){let h=new Ze(ve.comparator);h=h.insert(l,jt.newNoDocument(l,Ie.min()));const f=Pe().add(l),p=new Dc(Ie.min(),new Map,new Ze(Ne),h,f);await Yv(i,p),i.Ba=i.Ba.remove(l),i.La.delete(e),Hf(i)}else await nf(i.localStore,e,!1).then(()=>sf(i,e,t)).catch(Lo)}async function jk(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await QC(t.localStore,e);Jv(t,i,null),Xv(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await fl(t,o)}catch(o){await Lo(o)}}async function Bk(n,e,t){const i=Se(n);try{const o=await function(h,f){const p=Se(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,f).next(I=>(Fe(I!==null),E=I.keys(),p.mutationQueue.removeMutationBatch(y,I))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(i.localStore,e);Jv(i,e,t),Xv(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await fl(i,o)}catch(o){await Lo(o)}}function Xv(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Jv(n,e,t){const i=Se(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function sf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||Zv(n,i)})}function Zv(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(Mf(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),Hf(n))}function Ay(n,e,t){for(const i of t)i instanceof Kv?(n.ka.addReference(i.key,e),zk(n,i)):i instanceof Gv?(ae("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||Zv(n,i.key)):Te()}function zk(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(ae("SyncEngine","New document in limbo: "+t),n.Na.add(i),Hf(n))}function Hf(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ve(tt.fromString(e)),i=n.Ka.next();n.La.set(i,new Nk(t)),n.Ba=n.Ba.insert(t,i),Bv(n.remoteStore,new _i(nr(Pf(t.path)),i,"TargetPurposeLimboResolution",Sc.oe))}}async function fl(n,e,t){const i=Se(n),o=[],l=[],h=[];i.xa.isEmpty()||(i.xa.forEach((f,p)=>{h.push(i.Ua(p,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const I=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,I?"current":"not-current")}if(y){o.push(y);const I=Vf.zi(p.targetId,y);l.push(I)}}))}),await Promise.all(h),i.Ma.R_(o),await async function(p,y){const E=Se(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>G.forEach(y,S=>G.forEach(S.Wi,D=>E.persistence.referenceDelegate.addReference(I,S.targetId,D)).next(()=>G.forEach(S.Gi,D=>E.persistence.referenceDelegate.removeReference(I,S.targetId,D)))))}catch(I){if(!bo(I))throw I;ae("LocalStore","Failed to update sequence numbers: "+I)}for(const I of y){const S=I.targetId;if(!I.fromCache){const D=E.us.get(S),V=D.snapshotVersion,z=D.withLastLimboFreeSnapshotVersion(V);E.us=E.us.insert(S,z)}}}(i.localStore,l))}async function $k(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const i=await Mv(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(f=>{f.forEach(p=>{p.reject(new _e(ee.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await fl(t,i.Ts)}}function Hk(n,e){const t=Se(n),i=t.La.get(e);if(i&&i.Fa)return Pe().add(i.key);{let o=Pe();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function eE(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fk.bind(null,e),e.Ma.R_=Ak.bind(null,e.eventManager),e.Ma.Wa=Ck.bind(null,e.eventManager),e}function Wk(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bk.bind(null,e),e}class dc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return GC(this.persistence,new qC,e.initialUser,this.serializer)}ja(e){return new Vv(bf.ei,this.serializer)}za(e){return new tk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dc.provider={build:()=>new dc};class qk extends dc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Fe(this.persistence.referenceDelegate instanceof cc);const i=this.persistence.referenceDelegate.garbageCollector;return new NC(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new Vv(i=>cc.ei(i,t),this.serializer)}}class of{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ry(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=$k.bind(null,this.syncEngine),await wk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ik}()}createDatastore(e){const t=Oc(e.databaseInfo.databaseId),i=function(l){return new sk(l)}(e.databaseInfo);return function(l,h,f,p){return new lk(l,h,f,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,f){return new ck(i,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Ry(this.syncEngine,t,0),function(){return Ey.p()?new Ey:new nk}())}createSyncEngine(e,t){return function(o,l,h,f,p,y,E){const I=new Dk(o,l,h,f,p,y);return E&&(I.$a=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);ae("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await dl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}of.provider={build:()=>new of};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=rv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{ae("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(ae("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=zf(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function bd(n,e){n.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await Mv(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Cy(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Qk(n);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>wy(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>wy(e.remoteStore,o)),n._onlineComponents=e}async function Qk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await bd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Io("Error using user provided cache. Falling back to memory cache: "+t),await bd(n,new dc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await bd(n,new qk(void 0));return n._offlineComponents}async function tE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await Cy(n,n._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await Cy(n,new of))),n._onlineComponents}function Yk(n){return tE(n).then(e=>e.syncEngine)}async function Xk(n){const e=await tE(n),t=e.eventManager;return t.onListen=Ok.bind(null,e.syncEngine),t.onUnlisten=Vk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Lk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Mk.bind(null,e.syncEngine),t}function Jk(n,e,t={}){const i=new Ti;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,f,p,y){const E=new Kk({next:S=>{E.eu(),h.enqueueAndForget(()=>Rk(l,I));const D=S.docs.has(f);!D&&S.fromCache?y.reject(new _e(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&S.fromCache&&p&&p.source==="server"?y.reject(new _e(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),I=new kk(Pf(f.path),E,{includeMetadataChanges:!0,ua:!0});return Sk(l,I)}(await Xk(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function nE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(n,e,t){if(!t)throw new _e(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function eP(n,e,t,i){if(e===!0&&i===!0)throw new _e(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Py(n){if(!ve.isDocumentKey(n))throw new _e(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function el(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _e(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wf(n);throw new _e(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new _e(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _e(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new _e(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new _e(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new _e(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qf{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xy(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new oA;switch(i.type){case"firstParty":return new cA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new _e(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=ky.get(t);i&&(ae("ComponentProvider","Removing Datastore"),ky.delete(t),i.terminate())}(this),Promise.resolve()}}function tP(n,e,t,i={}){var o;const l=(n=el(n,qf))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let f,p;if(typeof i.mockUserToken=="string")f=i.mockUserToken,p=Ft.MOCK_USER;else{f=C_(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new _e(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ft(y)}n._authCredentials=new aA(new nv(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Kf(this.firestore,e,this._query)}}class Sn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Sn(this.firestore,e,this._key)}}class tl extends Kf{constructor(e,t,i){super(e,t,Pf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Sn(this.firestore,null,new ve(e))}withConverter(e){return new tl(this.firestore,e,this._path)}}function rE(n,e,...t){if(n=Kt(n),arguments.length===1&&(e=rv.newId()),Zk("doc","path",e),n instanceof qf){const i=tt.fromString(e,...t);return Py(i),new Sn(n,null,new ve(i))}{if(!(n instanceof Sn||n instanceof tl))throw new _e(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(tt.fromString(e,...t));return Py(i),new Sn(n.firestore,n instanceof tl?n.converter:null,new ve(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Fv(this,"async_queue_retry"),this.fu=()=>{const i=Ld();i&&ae("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Ld();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Ld();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Ti;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!bo(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(i);throw Ur("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Bf.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.Eu.push(o),o}pu(){this.Au&&Te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class Gf extends qf{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Ny,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ny(e),this._firestoreClient=void 0,await e}}}function nP(n,e){const t=typeof n=="object"?n:_f(),i=typeof n=="string"?n:"(default)",o=Ic(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=S_("firestore");l&&tP(o,...l)}return o}function iE(n){if(n._terminated)throw new _e(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||rP(n),n._firestoreClient}function rP(n){var e,t,i;const o=n._freezeSettings(),l=function(f,p,y,E){return new RA(f,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,nE(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new Gk(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Po(Nt.fromBase64String(e))}catch(t){throw new _e(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Po(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _e(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _e(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _e(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
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
 */class Xf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=/^__.*__$/;class sP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,t,this.fieldTransforms):new cl(e,this.data,t,this.fieldTransforms)}}function oE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Jf{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Jf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return fc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(oE(this.Mu)&&iP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class oP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Oc(e)}$u(e,t,i,o=!1){return new Jf({Mu:e,methodName:t,Ku:i,path:xt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aP(n){const e=n._freezeSettings(),t=Oc(n._databaseId);return new oP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function lP(n,e,t,i,o,l={}){const h=n.$u(l.merge||l.mergeFields?2:0,e,t,o);cE("Data must be an object, but it was:",h,i);const f=lE(i,h);let p,y;if(l.merge)p=new jn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const I of l.mergeFields){const S=uP(e,I,t);if(!h.contains(S))throw new _e(ee.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);hP(E,S)||E.push(S)}p=new jn(E),y=h.fieldTransforms.filter(I=>p.covers(I.field))}else p=null,y=h.fieldTransforms;return new sP(new In(f),p,y)}function aE(n,e){if(uE(n=Kt(n)))return cE("Unsupported field value:",e,n),lE(n,e);if(n instanceof sE)return function(i,o){if(!oE(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const f of i){let p=aE(f,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=Kt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return GA(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=yt.fromDate(i);return{timestampValue:uc(o.serializer,l)}}if(i instanceof yt){const l=new yt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:uc(o.serializer,l)}}if(i instanceof Yf)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Po)return{bytesValue:Pv(o.serializer,i._byteString)};if(i instanceof Sn){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Of(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Xf)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw f.qu("VectorValues must only contain numeric values.");return xf(f.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${Wf(i)}`)}(n,e)}function lE(n,e){const t={};return iv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(n,(i,o)=>{const l=aE(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function uE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof yt||n instanceof Yf||n instanceof Po||n instanceof Sn||n instanceof sE||n instanceof Xf)}function cE(n,e,t){if(!uE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Wf(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function uP(n,e,t){if((e=Kt(e))instanceof Qf)return e._internalPath;if(typeof e=="string")return hE(n,e);throw fc("Field path arguments must be of type string or ",n,!1,void 0,t)}const cP=new RegExp("[~\\*/\\[\\]]");function hE(n,e,t){if(e.search(cP)>=0)throw fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qf(...e.split("."))._internalPath}catch{throw fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new _e(ee.INVALID_ARGUMENT,f+n+p)}function hP(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fE("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dP extends dE{data(){return super.data()}}function fE(n,e){return typeof e=="string"?hE(n,e):e instanceof Qf?e._internalPath:e._delegate._internalPath}class fP{convertValue(e,t="none"){switch(xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return gs(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>at(h.doubleValue));return new Xf(l)}convertGeoPoint(e){return new Yf(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Ac(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Qa(e));default:return null}}convertTimestamp(e){const t=ki(e);return new yt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=tt.fromString(e);Fe(bv(i));const o=new Ya(i.get(1),i.get(3)),l=new ve(i.popFirst(5));return o.isEqual(t)||Ur(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pE extends dE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gP(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(fE("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class gP extends pE{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(n){n=el(n,Sn);const e=el(n.firestore,Gf);return Jk(iE(e),n._key).then(t=>wP(e,n,t))}class _P extends fP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Po(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sn(this.firestore,null,t)}}function vP(n,e,t){n=el(n,Sn);const i=el(n.firestore,Gf),o=pP(n.converter,e);return EP(i,[lP(aP(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Vr.none())])}function EP(n,e){return function(i,o){const l=new Ti;return i.asyncQueue.enqueueAndForget(async()=>Uk(await Yk(i),o,l)),l.promise}(iE(n),e)}function wP(n,e,t){const i=t.docs.get(e._key),o=new _P(n);return new pE(n,o,e._key,i,new mP(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Oo=o})(ms),cs(new Ai("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Gf(new lA(i.getProvider("auth-internal")),new dA(i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new _e(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ya(y.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),tr(Qg,"4.7.6",e),tr(Qg,"4.7.6","esm2017")})();function Zf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function mE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TP=mE,gE=new ll("auth","Firebase",mE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new gf("@firebase/auth");function IP(n,...e){pc.logLevel<=ke.WARN&&pc.warn(`Auth (${ms}): ${n}`,...e)}function Yu(n,...e){pc.logLevel<=ke.ERROR&&pc.error(`Auth (${ms}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n,...e){throw ep(n,...e)}function ir(n,...e){return ep(n,...e)}function yE(n,e,t){const i=Object.assign(Object.assign({},TP()),{[e]:t});return new ll("auth","Firebase",i).create(e,{appName:n.name})}function Ii(n){return yE(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ep(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return gE.create(n,...e)}function Ee(n,e,...t){if(!n)throw ep(e,...t)}function Dr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Yu(e),new Error(e)}function jr(n,e){n||Dr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function SP(){return Dy()==="http:"||Dy()==="https:"}function Dy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SP()||SS()||"connection"in navigator)?navigator.onLine:!0}function AP(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t){this.shortDelay=e,this.longDelay=t,jr(t>e,"Short delay should be less than long delay!"),this.isMobile=wS()||RS()}get(){return RP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(n,e){jr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=new pl(3e4,6e4);function Es(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Di(n,e,t,i,o={}){return vE(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=ul(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return IS()||(y.referrerPolicy="no-referrer"),_E.fetch()(EE(n,n.config.apiHost,t,f),y)})}async function vE(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},CP),e);try{const o=new xP(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw zu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw zu(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw zu(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw zu(n,"user-disabled",h);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw yE(n,E,y);Bn(n,E)}}catch(o){if(o instanceof hr)throw o;Bn(n,"network-request-failed",{message:String(o)})}}async function Vc(n,e,t,i,o={}){const l=await Di(n,e,t,i,o);return"mfaPendingCredential"in l&&Bn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function EE(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?tp(n.config,o):`${n.config.apiScheme}://${o}`}function PP(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ir(this.auth,"network-request-failed")),kP.get())})}}function zu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ir(n,e,i);return o.customData._tokenResponse=t,o}function Oy(n){return n!==void 0&&n.enterprise!==void 0}class NP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return PP(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DP(n,e){return Di(n,"GET","/v2/recaptchaConfig",Es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(n,e){return Di(n,"POST","/v1/accounts:delete",e)}async function wE(n,e){return Di(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LP(n,e=!1){const t=Kt(n),i=await t.getIdToken(e),o=np(i);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:qa(Vd(o.auth_time)),issuedAtTime:qa(Vd(o.iat)),expirationTime:qa(Vd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Vd(n){return Number(n)*1e3}function np(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Yu("JWT malformed, contained fewer than 3 sections"),null;try{const o=T_(t);return o?JSON.parse(o):(Yu("Failed to decode base64 JWT payload"),null)}catch(o){return Yu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ly(n){const e=np(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof hr&&bP(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function bP({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qa(this.lastLoginAt),this.creationTime=qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await nl(n,wE(t,{idToken:i}));Ee(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?TE(l.providerUserInfo):[],f=UP(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),E=p?y:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new lf(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,I)}async function MP(n){const e=Kt(n);await mc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UP(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function TE(n){return n.map(e=>{var{providerId:t}=e,i=Zf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(n,e){const t=await vE(n,{},async()=>{const i=ul({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=EE(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",_E.fetch()(h,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jP(n,e){return Di(n,"POST","/v2/accounts:revokeToken",Es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ly(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=Ly(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await FP(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Eo;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(Ee(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Ee(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Or{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Zf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new lf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await nl(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LP(this,e)}reload(){return MP(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await mc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nr(this.auth.app))return Promise.reject(Ii(this.auth));const e=await this.getIdToken();return await nl(this,OP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,p,y,E;const I=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,D=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(h=t.photoURL)!==null&&h!==void 0?h:void 0,z=(f=t.tenantId)!==null&&f!==void 0?f:void 0,b=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,q=(y=t.createdAt)!==null&&y!==void 0?y:void 0,K=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:J,emailVerified:ie,isAnonymous:fe,providerData:de,stsTokenManager:k}=t;Ee(J&&k,e,"internal-error");const T=Eo.fromJSON(this.name,k);Ee(typeof J=="string",e,"internal-error"),di(I,e.name),di(S,e.name),Ee(typeof ie=="boolean",e,"internal-error"),Ee(typeof fe=="boolean",e,"internal-error"),di(D,e.name),di(V,e.name),di(z,e.name),di(b,e.name),di(q,e.name),di(K,e.name);const A=new Or({uid:J,auth:e,email:S,emailVerified:ie,displayName:I,isAnonymous:fe,photoURL:V,phoneNumber:D,tenantId:z,stsTokenManager:T,createdAt:q,lastLoginAt:K});return de&&Array.isArray(de)&&(A.providerData=de.map(x=>Object.assign({},x))),b&&(A._redirectEventId=b),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new Eo;o.updateFromServerResponse(t);const l=new Or({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await mc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?TE(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Eo;f.updateFromIdToken(i);const p=new Or({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new lf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=new Map;function Lr(n){jr(n instanceof Function,"Expected a class definition");let e=by.get(n);return e?(jr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,by.set(n,e),e)}/**
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
 */class IE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}IE.type="NONE";const Vy=IE;/**
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
 */function Xu(n,e,t){return`firebase:${n}:${e}:${t}`}class wo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Xu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Xu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Or._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new wo(Lr(Vy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Lr(Vy);const h=Xu(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const E=await y._get(h);if(E){const I=Or._fromJSON(e,E);y!==l&&(f=I),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new wo(l,e,i):(l=p[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new wo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(CE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(SE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PE(e))return"Blackberry";if(xE(e))return"Webos";if(RE(e))return"Safari";if((e.includes("chrome/")||AE(e))&&!e.includes("edge/"))return"Chrome";if(kE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function SE(n=Bt()){return/firefox\//i.test(n)}function RE(n=Bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AE(n=Bt()){return/crios\//i.test(n)}function CE(n=Bt()){return/iemobile/i.test(n)}function kE(n=Bt()){return/android/i.test(n)}function PE(n=Bt()){return/blackberry/i.test(n)}function xE(n=Bt()){return/webos/i.test(n)}function rp(n=Bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function BP(n=Bt()){var e;return rp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zP(){return AS()&&document.documentMode===10}function NE(n=Bt()){return rp(n)||kE(n)||xE(n)||PE(n)||/windows phone/i.test(n)||CE(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n,e=[]){let t;switch(n){case"Browser":t=My(Bt());break;case"Worker":t=`${My(Bt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ms}/${i}`}/**
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
 */class $P{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const p=e(l);h(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function HP(n,e={}){return Di(n,"GET","/v2/passwordPolicy",Es(n,e))}/**
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
 */const WP=6;class qP{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:WP,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uy(this),this.idTokenSubscription=new Uy(this),this.beforeStateQueue=new $P(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await wo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await wE(this,{idToken:e}),i=await Or._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Nr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nr(this.app))return Promise.reject(Ii(this));const t=e?Kt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nr(this.app)?Promise.reject(Ii(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nr(this.app)?Promise.reject(Ii(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HP(this),t=new qP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ll("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await jP(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await wo.create(this,[Lr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&IP(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Mo(n){return Kt(n)}class Uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=LS(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GP(n){Mc=n}function OE(n){return Mc.loadJS(n)}function QP(){return Mc.recaptchaEnterpriseScript}function YP(){return Mc.gapiScript}function XP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class JP{constructor(){this.enterprise=new ZP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ZP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const e1="recaptcha-enterprise",LE="NO_RECAPTCHA";class t1{constructor(e){this.type=e1,this.auth=Mo(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{DP(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new NP(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{f(p)})})}function o(l,h,f){const p=window.grecaptcha;Oy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(LE)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JP().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&Oy(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=QP();p.length!==0&&(p+=f),OE(p).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function Fy(n,e,t,i=!1,o=!1){const l=new t1(n);let h;if(o)h=LE;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function jy(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Fy(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Fy(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(n,e){const t=Ic(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(nc(l,e??{}))return o;Bn(o,"already-initialized")}return t.initialize({options:e})}function r1(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Lr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function i1(n,e,t){const i=Mo(n);Ee(i._canInitEmulator,i,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=bE(e),{host:h,port:f}=s1(e),p=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${h}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),o1()}function bE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function s1(n){const e=bE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:By(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:By(h)}}}function By(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function o1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,t){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}async function a1(n,e){return Di(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(n,e){return Vc(n,"POST","/v1/accounts:signInWithPassword",Es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(n,e){return Vc(n,"POST","/v1/accounts:signInWithEmailLink",Es(n,e))}async function c1(n,e){return Vc(n,"POST","/v1/accounts:signInWithEmailLink",Es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends ip{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new rl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new rl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jy(e,t,"signInWithPassword",l1);case"emailLink":return u1(e,{email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jy(e,i,"signUpPassword",a1);case"emailLink":return c1(e,{idToken:t,email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(n,e){return Vc(n,"POST","/v1/accounts:signInWithIdp",Es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="http://localhost";class fs extends ip{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Zf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new fs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return To(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,To(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,To(e,t)}buildRequest(){const e={requestUri:h1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ul(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f1(n){const e=Va(Ma(n)).link,t=e?Va(Ma(e)).deep_link_id:null,i=Va(Ma(n)).deep_link_id;return(i?Va(Ma(i)).link:null)||i||t||e||n}class sp{constructor(e){var t,i,o,l,h,f;const p=Va(Ma(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,I=d1((o=p.mode)!==null&&o!==void 0?o:null);Ee(y&&E&&I,"argument-error"),this.apiKey=y,this.operation=I,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=f1(e);try{return new sp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.providerId=Uo.PROVIDER_ID}static credential(e,t){return rl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=sp.parseLink(t);return Ee(i,"argument-error"),rl._fromEmailAndCode(e,i.code,i.tenantId)}}Uo.PROVIDER_ID="password";Uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ml extends VE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends ml{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends ml{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return mi.credential(t,i)}catch{return null}}}mi.GOOGLE_SIGN_IN_METHOD="google.com";mi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends ml{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.GITHUB_SIGN_IN_METHOD="github.com";gi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends ml{constructor(){super("twitter.com")}static credential(e,t){return fs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return yi.credential(t,i)}catch{return null}}}yi.TWITTER_SIGN_IN_METHOD="twitter.com";yi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Or._fromIdTokenResponse(e,i,o),h=zy(i);return new xo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=zy(i);return new xo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function zy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends hr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,gc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new gc(e,t,i,o)}}function ME(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?gc._fromErrorAndOperation(n,l,e,i):l})}async function p1(n,e,t=!1){const i=await nl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xo._forOperation(n,"link",i)}/**
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
 */async function m1(n,e,t=!1){const{auth:i}=n;if(Nr(i.app))return Promise.reject(Ii(i));const o="reauthenticate";try{const l=await nl(n,ME(i,o,e,n),t);Ee(l.idToken,i,"internal-error");const h=np(l.idToken);Ee(h,i,"internal-error");const{sub:f}=h;return Ee(n.uid===f,i,"user-mismatch"),xo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Bn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(n,e,t=!1){if(Nr(n.app))return Promise.reject(Ii(n));const i="signIn",o=await ME(n,i,e),l=await xo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function g1(n,e){return UE(Mo(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(n){const e=Mo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function _1(n,e,t){return Nr(n.app)?Promise.reject(Ii(n)):g1(Kt(n),Uo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&y1(n),i})}function v1(n,e,t,i){return Kt(n).onIdTokenChanged(e,t,i)}function E1(n,e,t){return Kt(n).beforeAuthStateChanged(e,t)}const yc="__sak";/**
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
 */class FE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yc,"1"),this.storage.removeItem(yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=1e3,T1=10;class jE extends FE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=NE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);zP()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,T1):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},w1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jE.type="LOCAL";const I1=jE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE extends FE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}BE.type="SESSION";const zE=BE;/**
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
 */function S1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Uc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),p=await S1(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class R1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,p)=>{const y=op("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(I){const S=I;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(S.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function A1(n){sr().location.href=n}/**
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
 */function $E(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function C1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function P1(){return $E()?self:null}/**
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
 */const HE="firebaseLocalStorageDb",x1=1,_c="firebaseLocalStorage",WE="fbase_key";class gl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fc(n,e){return n.transaction([_c],e?"readwrite":"readonly").objectStore(_c)}function N1(){const n=indexedDB.deleteDatabase(HE);return new gl(n).toPromise()}function uf(){const n=indexedDB.open(HE,x1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(_c,{keyPath:WE})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(_c)?e(i):(i.close(),await N1(),e(await uf()))})})}async function $y(n,e,t){const i=Fc(n,!0).put({[WE]:e,value:t});return new gl(i).toPromise()}async function D1(n,e){const t=Fc(n,!1).get(e),i=await new gl(t).toPromise();return i===void 0?null:i.value}function Hy(n,e){const t=Fc(n,!0).delete(e);return new gl(t).toPromise()}const O1=800,L1=3;class qE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>L1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $E()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uc._getInstance(P1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await C1(),!this.activeServiceWorker)return;this.sender=new R1(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||k1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uf();return await $y(e,yc,"1"),await Hy(e,yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>$y(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>D1(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Fc(o,!1).getAll();return new gl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),O1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qE.type="LOCAL";const b1=qE;new pl(3e4,6e4);/**
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
 */function V1(n,e){return e?Lr(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ap extends ip{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return To(e,this._buildIdpRequest())}_linkToIdToken(e,t){return To(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return To(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function M1(n){return UE(n.auth,new ap(n),n.bypassAuthState)}function U1(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),m1(t,new ap(n),n.bypassAuthState)}async function F1(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),p1(t,new ap(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M1;case"linkViaPopup":case"linkViaRedirect":return F1;case"reauthViaPopup":case"reauthViaRedirect":return U1;default:Bn(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=new pl(2e3,1e4);class _o extends KE{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,_o.currentPopupAction&&_o.currentPopupAction.cancel(),_o.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_o.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,j1.get())};e()}}_o.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="pendingRedirect",Ju=new Map;class z1 extends KE{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ju.get(this.auth._key());if(!e){try{const i=await $1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ju.set(this.auth._key(),e)}return this.bypassAuthState||Ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $1(n,e){const t=q1(e),i=W1(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function H1(n,e){Ju.set(n._key(),e)}function W1(n){return Lr(n._redirectPersistence)}function q1(n){return Xu(B1,n.config.apiKey,n.name)}async function K1(n,e,t=!1){if(Nr(n.app))return Promise.reject(Ii(n));const i=Mo(n),o=V1(i,e),h=await new z1(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=10*60*1e3;class Q1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!GE(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ir(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=G1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wy(e))}saveEventToCache(e){this.cachedEventUids.add(Wy(e)),this.lastProcessedEventTime=Date.now()}}function Wy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function GE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GE(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X1(n,e={}){return Di(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z1=/^https?/;async function ex(n){if(n.config.emulator)return;const{authorizedDomains:e}=await X1(n);for(const t of e)try{if(tx(t))return}catch{}Bn(n,"unauthorized-domain")}function tx(n){const e=af(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!Z1.test(t))return!1;if(J1.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const nx=new pl(3e4,6e4);function qy(){const n=sr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rx(n){return new Promise((e,t)=>{var i,o,l;function h(){qy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qy(),t(ir(n,"network-request-failed"))},timeout:nx.get()})}if(!((o=(i=sr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)h();else{const f=XP("iframefcb");return sr()[f]=()=>{gapi.load?h():t(ir(n,"network-request-failed"))},OE(`${YP()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Zu=null,e})}let Zu=null;function ix(n){return Zu=Zu||rx(n),Zu}/**
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
 */const sx=new pl(5e3,15e3),ox="__/auth/iframe",ax="emulator/auth/iframe",lx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ux=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cx(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?tp(e,ax):`https://${n.config.authDomain}/${ox}`,i={apiKey:e.apiKey,appName:n.name,v:ms},o=ux.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${ul(i).slice(1)}`}async function hx(n){const e=await ix(n),t=sr().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:cx(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lx,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=ir(n,"network-request-failed"),f=sr().setTimeout(()=>{l(h)},sx.get());function p(){sr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
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
 */const dx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fx=500,px=600,mx="_blank",gx="http://localhost";class Ky{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yx(n,e,t,i=fx,o=px){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},dx),{width:i.toString(),height:o.toString(),top:l,left:h}),y=Bt().toLowerCase();t&&(f=AE(y)?mx:t),SE(y)&&(e=e||gx,p.scrollbars="yes");const E=Object.entries(p).reduce((S,[D,V])=>`${S}${D}=${V},`,"");if(BP(y)&&f!=="_self")return _x(e||"",f),new Ky(null);const I=window.open(e||"",f,E);Ee(I,n,"popup-blocked");try{I.focus()}catch{}return new Ky(I)}function _x(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const vx="__/auth/handler",Ex="emulator/auth/handler",wx=encodeURIComponent("fac");async function Gy(n,e,t,i,o,l){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ms,eventId:o};if(e instanceof VE){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",OS(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))h[E]=I}if(e instanceof ml){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await n._getAppCheckToken(),y=p?`#${wx}=${encodeURIComponent(p)}`:"";return`${Tx(n)}?${ul(f).slice(1)}${y}`}function Tx({config:n}){return n.emulator?tp(n,Ex):`https://${n.authDomain}/${vx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="webStorageSupport";class Ix{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zE,this._completeRedirectFn=K1,this._overrideRedirectResult=H1}async _openPopup(e,t,i,o){var l;jr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Gy(e,t,i,af(),o);return yx(e,h,op())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Gy(e,t,i,af(),o);return A1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(jr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await hx(e),i=new Q1(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Md,{type:Md},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Md];h!==void 0&&t(!!h),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ex(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return NE()||RE()||rp()}}const Sx=Ix;var Qy="@firebase/auth",Yy="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cx(n){cs(new Ai("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;Ee(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DE(n)},y=new KP(i,o,l,p);return r1(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),cs(new Ai("auth-internal",e=>{const t=Mo(e.getProvider("auth").getImmediate());return(i=>new Rx(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(Qy,Yy,Ax(n)),tr(Qy,Yy,"esm2017")}/**
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
 */const kx=5*60,Px=A_("authIdTokenMaxAge")||kx;let Xy=null;const xx=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Px)return;const o=t==null?void 0:t.token;Xy!==o&&(Xy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Nx(n=_f()){const e=Ic(n,"auth");if(e.isInitialized())return e.getImmediate();const t=n1(n,{popupRedirectResolver:Sx,persistence:[b1,I1,zE]}),i=A_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=xx(l.toString());E1(t,h,()=>h(t.currentUser)),v1(t,f=>h(f))}}const o=I_("auth");return o&&i1(t,`http://${o}`),t}function Dx(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}GP({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=ir("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",Dx().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cx("Browser");const Ox={apiKey:"AIzaSyAFULT_ayeNvQNXkolJFLoS6GRqmH8saXk",authDomain:"artium-hive.firebaseapp.com",projectId:"artium-hive",storageBucket:"artium-hive.firebasestorage.app",messagingSenderId:"205438130385",appId:"1:205438130385:web:e44c1c45caaf230bbd4df0"},lp=x_(Ox),QE=nP(lp),jc=Nx(lp),Lx=eA(lp),il={_origin:"https://api.emailjs.com"},bx=(n,e="https://api.emailjs.com")=>{il._userID=n,il._origin=e},YE=(n,e,t)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Jy{constructor(e){this.status=e.status,this.text=e.responseText}}const XE=(n,e,t={})=>new Promise((i,o)=>{const l=new XMLHttpRequest;l.addEventListener("load",({target:h})=>{const f=new Jy(h);f.status===200||f.text==="OK"?i(f):o(f)}),l.addEventListener("error",({target:h})=>{o(new Jy(h))}),l.open("POST",il._origin+n,!0),Object.keys(t).forEach(h=>{l.setRequestHeader(h,t[h])}),l.send(e)}),Vx=(n,e,t,i)=>{const o=i||il._userID;return YE(o,n,e),XE("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:o,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})},Mx=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},Ux=(n,e,t,i)=>{const o=i||il._userID,l=Mx(t);YE(o,n,e);const h=new FormData(l);return h.append("lib_version","3.2.0"),h.append("service_id",n),h.append("template_id",e),h.append("user_id",o),XE("/api/v1.0/email/send-form",h)},Fx={init:bx,send:Vx,sendForm:Ux},jx=()=>{const[n,e]=$.useState(""),[t,i]=$.useState(!1),[o,l]=$.useState([]),[h,f]=$.useState(null),[p,y]=$.useState(!1),[E,I]=$.useState([]),[S,D]=$.useState(null),[V,z]=$.useState(!1),[b,q]=$.useState(!0),K=$.useRef(null);$.useEffect(()=>{const k=jc.onAuthStateChanged(T=>{D(T)});return()=>k()},[]),$.useEffect(()=>{const T=!isNaN(n)&&n!==""&&parseFloat(n)>=10;q(!(o.length>0&&T))},[n,o]);const J=k=>k&&["application/pdf","image/jpeg","image/png"].includes(k.type),ie=k=>{const T=Array.from(k.target.files),A=[],x=[];let L=[];T.forEach(M=>{if(J(M)){A.push(M);const C=URL.createObjectURL(M);x.push(C)}else L.push("Invalid file type. Please upload a PDF, JPG, or PNG file.")}),l(A),I(x),L.length>0?(f(L.join(" ")),k.target.value=""):f(null)},fe=async()=>{if(o.length>0&&S){i(!0);try{const k=o.map(async T=>{const A=Z0(Lx,`uploads/${S.email}/${T.name}`),x=await X0(A,T),L=await J0(x.ref);await vP(rE(QE,"uploads",T.name),{userId:S.uid,fileName:T.name,fileUrl:L,uploadedAt:new Date,textInput:n}),de(L)});await Promise.all(k),i(!1),y(!0),setTimeout(()=>{y(!1),setInputSubmitted(!1)},7e3)}catch(k){i(!1),f(k),console.error("Error uploading file: ",k)}}},de=k=>{const T={to_email:"amanrk00112@gmail.com",attachment:k};Fx.send("service_40ncdqw","template_u03b01e",T,"Qx6jX1aoOdXJXq4BM").then(A=>{console.log("Email sent successfully:",A.status,A.text)}).catch(A=>{console.error("Error sending email:",A)})};return $.useEffect(()=>{K.current&&K.current.scrollIntoView({behavior:"smooth",block:"start"})},[]),N.jsxs("div",{children:[N.jsx("div",{style:{width:"100%",display:"block",height:"3em",background:"transparent",transition:"3s ease-in"}}),N.jsxs("div",{ref:K,style:{color:"black",width:"100%",height:"100vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-evenly",transition:".7s ease-in"},children:[N.jsxs("div",{style:{width:"100%",display:"flex",alignContent:"center",justifyContent:"center"},children:[N.jsxs("h1",{id:"sellPage-header",style:{},children:[" ","SELL AT YOUR PRICE"]}),N.jsxs("div",{id:"sellPage-header-hidden-mobile",children:[N.jsx("div",{children:N.jsx("h1",{style:{fontSize:"34px"},children:"SELL"})}),N.jsx("div",{children:N.jsx("h1",{style:{fontSize:"40px"},children:"AT YOUR"})}),N.jsx("div",{children:N.jsx("h1",{style:{fontSize:"46px"},children:"OWN PRICE"})})]})]}),N.jsxs("div",{className:"img-upload-parent-box",children:[N.jsxs("div",{className:"img-upload-div-child1",children:[N.jsx("h3",{style:{paddingLeft:"7px",paddingBottom:"27px",fontFamily:"Phonk Contrast DEMO",width:"100%"},children:"Showcase your best piece"}),N.jsxs("div",{style:{width:"100%",paddingLeft:"7px"},children:[N.jsx("div",{className:"upload-img-div-rules-header",children:N.jsx("h3",{children:"Steps to upload"})}),N.jsx("div",{className:"upload-img-div-rules",children:N.jsxs("ul",{children:[N.jsx("li",{children:"Select your clear art image."}),N.jsx("li",{children:"Set suitable price for the piece."}),N.jsx("li",{children:"Hit upload."}),N.jsx("li",{children:"Woosh, u did it!."})]})})]})]}),N.jsxs("div",{className:"imgUpload-section",children:[N.jsx("div",{className:"img-selection",style:{width:"45%"},children:N.jsx("input",{type:"file",onChange:ie,style:{background:"transparent",border:"0",color:"#615e5e",fontWeight:"900",fontFamily:"circular",letterSpacing:" .3px"}})}),N.jsxs("div",{className:"price-input",style:{width:"45%"},children:[N.jsx("input",{type:"number",value:n,onChange:k=>{const T=k.target.value,x=!isNaN(T)&&T!==""&&parseFloat(T)>=10;z(!x),e(T)},placeholder:"Enter sell price",style:{height:"3em",background:"rgb(255 255 255 / 0%)",border:"0.9px solid rgb(195, 195, 195)",color:"#615e5e",fontWeight:"900",fontFamily:"circular",letterSpacing:" .3px",borderTop:"none",borderLeft:"none",borderRight:"none"}}),V&&N.jsx("p",{style:{color:" #df4d4d",fontFamily:"circular",transition:".9s ease-in-out"},children:"Price should be 10 or more!"})]}),N.jsx("div",{id:"btn_upload_file-parent",onClick:fe,disabled:b||t,style:{pointerEvents:b?"none":"auto"},children:t?N.jsx("div",{className:"loader"}):N.jsx("span",{id:"btn_upload_file",class:"material-symbols-outlined hover:white",style:{backgroundColor:b?"#b19f63":"#ffdd6a",color:b?"#856a6a":"#000000",transition:".3s ease-in"},children:"arrow_outward"})})]})," ",p&&N.jsx("p",{style:{color:"green"},children:"Success"}),h&&N.jsx("p",{style:{color:" #df4d4d",fontFamily:"circular",transition:".9s ease-in-out"},children:h})]})]}),N.jsxs("div",{children:[" ",N.jsxs("div",{children:[" ",N.jsx("h3",{children:"Your uploads"})," "]})," ",N.jsxs("div",{children:[" ",E.map((k,T)=>N.jsx("img",{src:k,alt:`Uploaded file ${T+1}`,style:{maxWidth:"100%",maxHeight:"300px",margin:"10px"}},T))]})]})]})},Bx=()=>N.jsx(N.Fragment,{children:N.jsx("div",{children:"this is support page"})}),zx=()=>N.jsx(N.Fragment,{children:N.jsx("div",{children:"this is about page"})});function JE(){return N.jsxs("div",{className:"footer",children:[N.jsxs("div",{className:"footer-child1",children:[N.jsx("div",{children:"ARTIUMHIE HIVE"}),N.jsx("div",{children:"All rights reserved"})]}),N.jsxs("div",{className:"footer-child2",style:{gap:"2px"},children:[N.jsx("div",{className:"footer-child2-1",children:"MAYA INCOPRATION"}),N.jsx("div",{className:"footer-child2-2",children:"HNO. 303 GANESH GALAXY CITY BUILDING AYODHYA BYPASS ROAD BHOPAL 462041 Dist.-BHOPAL"})]})]})}const Zy=({onSignIn:n})=>{const[e,t]=$.useState(""),[i,o]=$.useState(""),[l,h]=$.useState(""),[f,p]=$.useState(""),[y,E]=$.useState(""),I=async()=>{try{const S=await _1(jc,e,i);n(S.user)}catch(S){E(S.message)}};return N.jsxs(N.Fragment,{children:[N.jsxs("div",{id:"signinDiv",children:[N.jsx("div",{className:"signInDiv-leftside",children:N.jsxs("div",{id:"signindiv_subdiv_first",children:[N.jsx("div",{className:"logo-login-grand-parent",children:N.jsx("div",{style:{width:"100%"},children:N.jsx(hn,{to:"/",className:"text-xl font-semibold",children:N.jsx("img",{id:"logo-img",src:v_,alt:"logo"})})})}),N.jsxs("div",{className:"mainLoginFields-div",style:{width:"100%"},children:[N.jsxs("div",{style:{width:"100%"},children:[N.jsx("input",{type:"email",value:e,onChange:S=>{const D=S.target.value;p(D===""),t(D)},placeholder:"Email",style:{height:"3em",background:"rgb(255 255 255 / 0%)",border:"0.9px solid rgb(195, 195, 195)",color:"#615e5e",fontWeight:"900",fontFamily:"circular",letterSpacing:" .3px",borderTop:"none",borderLeft:"none",borderRight:"none"}}),f&&N.jsx("p",{style:{color:" #df4d4d",fontFamily:"circular",transition:".9s ease-in-out"},children:"Invalid email!"})]}),N.jsxs("div",{style:{width:"100%"},children:[N.jsx("input",{type:"password",value:i,onChange:S=>{const D=S.target.value;h(D===""),o(D)},placeholder:"Password",style:{height:"3em",background:"rgb(255 255 255 / 0%)",border:"0.9px solid rgb(195, 195, 195)",color:"#615e5e",fontWeight:"900",fontFamily:"circular",letterSpacing:" .3px",borderTop:"none",borderLeft:"none",borderRight:"none"},"aria-describedby":"passwordError"}),l&&N.jsx("p",{style:{color:" #df4d4d",fontFamily:"circular",transition:".9s ease-in-out"},children:"Invalid password!"})]}),N.jsxs("div",{className:"login-btn-div",children:[N.jsx("button",{id:"loginBtn",onClick:I,style:{width:"100%",padding:"18px",fontFamily:"circular",backgroundColor:"rgb(125 121 121)"},children:"Log In"}),y&&N.jsx("p",{style:{color:" #df4d4d",fontFamily:"circular",transition:".9s ease-in-out"},children:"Invalid email or password!!"})]})]})]})}),N.jsx("div",{id:"loginPageImg-Ins",children:N.jsxs("div",{id:"login-page-img-instructions",children:[N.jsx("div",{children:N.jsx("h1",{style:{fontFamily:"'Phonk Contrast DEMO'"},children:"We Welcome you to ARTIUM HIVE"})}),N.jsx("div",{children:N.jsx("h3",{style:{fontFamily:"'Phonk Contrast DEMO'"},children:"We are invite only"})}),N.jsxs("div",{children:[N.jsx("h2",{style:{fontFamily:"'Phonk Contrast DEMO'",fontSize:"17px"},children:"Follow below steps to be a member at ARTIUM HIVE"}),N.jsx("div",{children:N.jsxs("ul",{children:[N.jsx("li",{style:{fontFamily:"circular",fontSize:"14px"},children:"Send your best art collection at artiumhiveofficial@gmail.com"}),N.jsx("li",{style:{fontFamily:"circular",fontSize:"14px"},children:"Wait for our team to review your collection"}),N.jsx("li",{style:{fontFamily:"circular",fontSize:"14px"},children:"If success, we'll guide you for further steps."})]})})]}),N.jsx("div",{style:{fontFamily:"'Phonk Contrast DEMO'"},children:"Lastly thank you for your interest in art"})]})})]}),N.jsx(JE,{id:" footer-signIn-Page"})]})},$x=({user:n})=>{const[e,t]=$.useState(null);$.useEffect(()=>{n&&(async()=>{const l=rE(QE,"users",n.uid),h=await yP(l);h.exists()&&t(h.data())})()},[n]);const i=()=>{jc.signOut()};return N.jsxs("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"antiquewhite",padding:"73px",alignItems:"center",gap:"34px",height:"80vh"},children:[N.jsx("div",{style:{width:"100%"},children:N.jsx("h1",{children:"Welcome Back"})}),N.jsxs("div",{style:{width:"100%"},children:["User: ",n.email]}),N.jsx("div",{style:{width:"100%"},children:N.jsx("button",{onClick:i,children:"Logout"})})]})},Hx=()=>{const[n,e]=$.useState(null);$.useEffect(()=>{const o=jc.onAuthStateChanged(l=>{e(l)});return()=>o()},[]);const t=o=>{e(o)},i=()=>N.jsxs(N.Fragment,{children:[N.jsx(hS,{}),N.jsx("div",{id:"appHeaderBack",children:N.jsxs(nI,{children:[N.jsx(xr,{path:"/",element:N.jsx(uS,{})}),N.jsx(xr,{path:"/art/:slug",element:N.jsx(cS,{})}),N.jsx(xr,{path:"/buy",element:N.jsx(dS,{})}),N.jsx(xr,{path:"/sell",element:N.jsx(jx,{})}),N.jsx(xr,{path:"/support",element:N.jsx(Bx,{})}),N.jsx(xr,{path:"/about",element:N.jsx(zx,{})}),N.jsx(xr,{path:"/userLogin",element:N.jsx(Zy,{})}),N.jsx(xr,{path:"/profile",element:N.jsx($x,{user:n})})]})}),N.jsx(JE,{})]});return N.jsx(YI,{store,children:N.jsx(AI,{basename:"/Art-app",children:n?N.jsx(i,{}):N.jsx(Zy,{onSignIn:t})})})};cT.createRoot(document.getElementById("root")).render(N.jsx($.StrictMode,{children:N.jsx(Hx,{})}));
