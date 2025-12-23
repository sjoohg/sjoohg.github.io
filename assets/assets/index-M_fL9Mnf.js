(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function r(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=r(o);fetch(o.href,u)}})();(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();var Tf={exports:{}},Ss={},wf={exports:{}},ft={},Af;function Rv(){if(Af)return ft;Af=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function _(A){return A===null||typeof A!="object"?null:(A=y&&A[y]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function x(A,U,X){this.props=A,this.context=U,this.refs=E,this.updater=X||S}x.prototype.isReactComponent={},x.prototype.setState=function(A,U){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,U,"setState")},x.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function v(){}v.prototype=x.prototype;function I(A,U,X){this.props=A,this.context=U,this.refs=E,this.updater=X||S}var w=I.prototype=new v;w.constructor=I,T(w,x.prototype),w.isPureReactComponent=!0;var k=Array.isArray,D=Object.prototype.hasOwnProperty,z={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function se(A,U,X){var pe,me={},be=null,Ce=null;if(U!=null)for(pe in U.ref!==void 0&&(Ce=U.ref),U.key!==void 0&&(be=""+U.key),U)D.call(U,pe)&&!O.hasOwnProperty(pe)&&(me[pe]=U[pe]);var Ne=arguments.length-2;if(Ne===1)me.children=X;else if(1<Ne){for(var we=Array(Ne),Ke=0;Ke<Ne;Ke++)we[Ke]=arguments[Ke+2];me.children=we}if(A&&A.defaultProps)for(pe in Ne=A.defaultProps,Ne)me[pe]===void 0&&(me[pe]=Ne[pe]);return{$$typeof:s,type:A,key:be,ref:Ce,props:me,_owner:z.current}}function C(A,U){return{$$typeof:s,type:A.type,key:U,ref:A.ref,props:A.props,_owner:A._owner}}function P(A){return typeof A=="object"&&A!==null&&A.$$typeof===s}function fe(A){var U={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(X){return U[X]})}var de=/\/+/g;function q(A,U){return typeof A=="object"&&A!==null&&A.key!=null?fe(""+A.key):U.toString(36)}function re(A,U,X,pe,me){var be=typeof A;(be==="undefined"||be==="boolean")&&(A=null);var Ce=!1;if(A===null)Ce=!0;else switch(be){case"string":case"number":Ce=!0;break;case"object":switch(A.$$typeof){case s:case e:Ce=!0}}if(Ce)return Ce=A,me=me(Ce),A=pe===""?"."+q(Ce,0):pe,k(me)?(X="",A!=null&&(X=A.replace(de,"$&/")+"/"),re(me,U,X,"",function(Ke){return Ke})):me!=null&&(P(me)&&(me=C(me,X+(!me.key||Ce&&Ce.key===me.key?"":(""+me.key).replace(de,"$&/")+"/")+A)),U.push(me)),1;if(Ce=0,pe=pe===""?".":pe+":",k(A))for(var Ne=0;Ne<A.length;Ne++){be=A[Ne];var we=pe+q(be,Ne);Ce+=re(be,U,X,we,me)}else if(we=_(A),typeof we=="function")for(A=we.call(A),Ne=0;!(be=A.next()).done;)be=be.value,we=pe+q(be,Ne++),Ce+=re(be,U,X,we,me);else if(be==="object")throw U=String(A),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return Ce}function ne(A,U,X){if(A==null)return A;var pe=[],me=0;return re(A,pe,"","",function(be){return U.call(X,be,me++)}),pe}function ge(A){if(A._status===-1){var U=A._result;U=U(),U.then(function(X){(A._status===0||A._status===-1)&&(A._status=1,A._result=X)},function(X){(A._status===0||A._status===-1)&&(A._status=2,A._result=X)}),A._status===-1&&(A._status=0,A._result=U)}if(A._status===1)return A._result.default;throw A._result}var ie={current:null},W={transition:null},te={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:W,ReactCurrentOwner:z};return ft.Children={map:ne,forEach:function(A,U,X){ne(A,function(){U.apply(this,arguments)},X)},count:function(A){var U=0;return ne(A,function(){U++}),U},toArray:function(A){return ne(A,function(U){return U})||[]},only:function(A){if(!P(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},ft.Component=x,ft.Fragment=r,ft.Profiler=o,ft.PureComponent=I,ft.StrictMode=a,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ft.cloneElement=function(A,U,X){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var pe=T({},A.props),me=A.key,be=A.ref,Ce=A._owner;if(U!=null){if(U.ref!==void 0&&(be=U.ref,Ce=z.current),U.key!==void 0&&(me=""+U.key),A.type&&A.type.defaultProps)var Ne=A.type.defaultProps;for(we in U)D.call(U,we)&&!O.hasOwnProperty(we)&&(pe[we]=U[we]===void 0&&Ne!==void 0?Ne[we]:U[we])}var we=arguments.length-2;if(we===1)pe.children=X;else if(1<we){Ne=Array(we);for(var Ke=0;Ke<we;Ke++)Ne[Ke]=arguments[Ke+2];pe.children=Ne}return{$$typeof:s,type:A.type,key:me,ref:be,props:pe,_owner:Ce}},ft.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:u,_context:A},A.Consumer=A},ft.createElement=se,ft.createFactory=function(A){var U=se.bind(null,A);return U.type=A,U},ft.createRef=function(){return{current:null}},ft.forwardRef=function(A){return{$$typeof:c,render:A}},ft.isValidElement=P,ft.lazy=function(A){return{$$typeof:g,_payload:{_status:-1,_result:A},_init:ge}},ft.memo=function(A,U){return{$$typeof:m,type:A,compare:U===void 0?null:U}},ft.startTransition=function(A){var U=W.transition;W.transition={};try{A()}finally{W.transition=U}},ft.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},ft.useCallback=function(A,U){return ie.current.useCallback(A,U)},ft.useContext=function(A){return ie.current.useContext(A)},ft.useDebugValue=function(){},ft.useDeferredValue=function(A){return ie.current.useDeferredValue(A)},ft.useEffect=function(A,U){return ie.current.useEffect(A,U)},ft.useId=function(){return ie.current.useId()},ft.useImperativeHandle=function(A,U,X){return ie.current.useImperativeHandle(A,U,X)},ft.useInsertionEffect=function(A,U){return ie.current.useInsertionEffect(A,U)},ft.useLayoutEffect=function(A,U){return ie.current.useLayoutEffect(A,U)},ft.useMemo=function(A,U){return ie.current.useMemo(A,U)},ft.useReducer=function(A,U,X){return ie.current.useReducer(A,U,X)},ft.useRef=function(A){return ie.current.useRef(A)},ft.useState=function(A){return ie.current.useState(A)},ft.useSyncExternalStore=function(A,U,X){return ie.current.useSyncExternalStore(A,U,X)},ft.useTransition=function(){return ie.current.useTransition()},ft.version="18.2.0",ft}var Cf;function Wc(){return Cf||(Cf=1,wf.exports=Rv()),wf.exports}var Rf;function Lv(){if(Rf)return Ss;Rf=1;var s=Wc(),e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(c,p,m){var g,y={},_=null,S=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(S=p.ref);for(g in p)a.call(p,g)&&!u.hasOwnProperty(g)&&(y[g]=p[g]);if(c&&c.defaultProps)for(g in p=c.defaultProps,p)y[g]===void 0&&(y[g]=p[g]);return{$$typeof:e,type:c,key:_,ref:S,props:y,_owner:o.current}}return Ss.Fragment=r,Ss.jsx=h,Ss.jsxs=h,Ss}var Lf;function Pv(){return Lf||(Lf=1,Tf.exports=Lv()),Tf.exports}var Rs=Pv(),st=Wc(),Fo={},ec={exports:{}},Sr={},Pf={exports:{}},Nf={},Uf;function Nv(){return Uf||(Uf=1,(function(s){function e(W,te){var A=W.length;W.push(te);e:for(;0<A;){var U=A-1>>>1,X=W[U];if(0<o(X,te))W[U]=te,W[A]=X,A=U;else break e}}function r(W){return W.length===0?null:W[0]}function a(W){if(W.length===0)return null;var te=W[0],A=W.pop();if(A!==te){W[0]=A;e:for(var U=0,X=W.length,pe=X>>>1;U<pe;){var me=2*(U+1)-1,be=W[me],Ce=me+1,Ne=W[Ce];if(0>o(be,A))Ce<X&&0>o(Ne,be)?(W[U]=Ne,W[Ce]=A,U=Ce):(W[U]=be,W[me]=A,U=me);else if(Ce<X&&0>o(Ne,A))W[U]=Ne,W[Ce]=A,U=Ce;else break e}}return te}function o(W,te){var A=W.sortIndex-te.sortIndex;return A!==0?A:W.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,c=h.now();s.unstable_now=function(){return h.now()-c}}var p=[],m=[],g=1,y=null,_=3,S=!1,T=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(W){for(var te=r(m);te!==null;){if(te.callback===null)a(m);else if(te.startTime<=W)a(m),te.sortIndex=te.expirationTime,e(p,te);else break;te=r(m)}}function k(W){if(E=!1,w(W),!T)if(r(p)!==null)T=!0,ge(D);else{var te=r(m);te!==null&&ie(k,te.startTime-W)}}function D(W,te){T=!1,E&&(E=!1,v(se),se=-1),S=!0;var A=_;try{for(w(te),y=r(p);y!==null&&(!(y.expirationTime>te)||W&&!fe());){var U=y.callback;if(typeof U=="function"){y.callback=null,_=y.priorityLevel;var X=U(y.expirationTime<=te);te=s.unstable_now(),typeof X=="function"?y.callback=X:y===r(p)&&a(p),w(te)}else a(p);y=r(p)}if(y!==null)var pe=!0;else{var me=r(m);me!==null&&ie(k,me.startTime-te),pe=!1}return pe}finally{y=null,_=A,S=!1}}var z=!1,O=null,se=-1,C=5,P=-1;function fe(){return!(s.unstable_now()-P<C)}function de(){if(O!==null){var W=s.unstable_now();P=W;var te=!0;try{te=O(!0,W)}finally{te?q():(z=!1,O=null)}}else z=!1}var q;if(typeof I=="function")q=function(){I(de)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ne=re.port2;re.port1.onmessage=de,q=function(){ne.postMessage(null)}}else q=function(){x(de,0)};function ge(W){O=W,z||(z=!0,q())}function ie(W,te){se=x(function(){W(s.unstable_now())},te)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ge(D))},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return r(p)},s.unstable_next=function(W){switch(_){case 1:case 2:case 3:var te=3;break;default:te=_}var A=_;_=te;try{return W()}finally{_=A}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,te){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var A=_;_=W;try{return te()}finally{_=A}},s.unstable_scheduleCallback=function(W,te,A){var U=s.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?U+A:U):A=U,W){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=A+X,W={id:g++,callback:te,priorityLevel:W,startTime:A,expirationTime:X,sortIndex:-1},A>U?(W.sortIndex=A,e(m,W),r(p)===null&&W===r(m)&&(E?(v(se),se=-1):E=!0,ie(k,A-U))):(W.sortIndex=X,e(p,W),T||S||(T=!0,ge(D))),W},s.unstable_shouldYield=fe,s.unstable_wrapCallback=function(W){var te=_;return function(){var A=_;_=te;try{return W.apply(this,arguments)}finally{_=A}}}})(Nf)),Nf}var If;function Uv(){return If||(If=1,Pf.exports=Nv()),Pf.exports}var Df;function Iv(){if(Df)return Sr;Df=1;var s=Wc(),e=Uv();function r(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,o={};function u(t,n){h(t,n),h(t+"Capture",n)}function h(t,n){for(o[t]=n,t=0;t<n.length;t++)a.add(n[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function _(t){return p.call(y,t)?!0:p.call(g,t)?!1:m.test(t)?y[t]=!0:(g[t]=!0,!1)}function S(t,n,i,l){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,n,i,l){if(n===null||typeof n>"u"||S(t,n,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function E(t,n,i,l,d,f,b){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=t,this.type=n,this.sanitizeURL=f,this.removeEmptyString=b}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new E(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];x[n]=new E(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new E(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new E(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new E(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new E(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new E(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new E(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new E(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(v,I);x[n]=new E(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(v,I);x[n]=new E(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(v,I);x[n]=new E(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new E(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new E(t,1,!1,t.toLowerCase(),null,!0,!0)});function w(t,n,i,l){var d=x.hasOwnProperty(n)?x[n]:null;(d!==null?d.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(T(n,i,d,l)&&(i=null),l||d===null?_(n)&&(i===null?t.removeAttribute(n):t.setAttribute(n,""+i)):d.mustUseProperty?t[d.propertyName]=i===null?d.type===3?!1:"":i:(n=d.attributeName,l=d.attributeNamespace,i===null?t.removeAttribute(n):(d=d.type,i=d===3||d===4&&i===!0?"":""+i,l?t.setAttributeNS(l,n,i):t.setAttribute(n,i))))}var k=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),z=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),fe=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),W=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var A=Object.assign,U;function X(t){if(U===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);U=n&&n[1]||""}return`
`+U+t}var pe=!1;function me(t,n){if(!t||pe)return"";pe=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(ae){var l=ae}Reflect.construct(t,[],n)}else{try{n.call()}catch(ae){l=ae}t.call(n.prototype)}else{try{throw Error()}catch(ae){l=ae}t()}}catch(ae){if(ae&&l&&typeof ae.stack=="string"){for(var d=ae.stack.split(`
`),f=l.stack.split(`
`),b=d.length-1,N=f.length-1;1<=b&&0<=N&&d[b]!==f[N];)N--;for(;1<=b&&0<=N;b--,N--)if(d[b]!==f[N]){if(b!==1||N!==1)do if(b--,N--,0>N||d[b]!==f[N]){var B=`
`+d[b].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=b&&0<=N);break}}}finally{pe=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?X(t):""}function be(t){switch(t.tag){case 5:return X(t.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return t=me(t.type,!1),t;case 11:return t=me(t.type.render,!1),t;case 1:return t=me(t.type,!0),t;default:return""}}function Ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case z:return"Portal";case C:return"Profiler";case se:return"StrictMode";case q:return"Suspense";case re:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fe:return(t.displayName||"Context")+".Consumer";case P:return(t._context.displayName||"Context")+".Provider";case de:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ne:return n=t.displayName||null,n!==null?n:Ce(t.type)||"Memo";case ge:n=t._payload,t=t._init;try{return Ce(t(n))}catch{}}return null}function Ne(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(n);case 8:return n===se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ot(t){var n=Ke(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,f=i.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return d.call(this)},set:function(b){l=""+b,f.call(this,b)}}),Object.defineProperty(t,n,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function rt(t){t._valueTracker||(t._valueTracker=Ot(t))}function K(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return t&&(l=Ke(t)?t.checked?"true":"false":t.value),t=l,t!==i?(n.setValue(t),!0):!1}function bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xe(t,n){var i=n.checked;return A({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function et(t,n){var i=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;i=we(n.value!=null?n.value:i),t._wrapperState={initialChecked:l,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function je(t,n){n=n.checked,n!=null&&w(t,"checked",n,!1)}function vt(t,n){je(t,n);var i=we(n.value),l=n.type;if(i!=null)l==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Oe(t,n.type,i):n.hasOwnProperty("defaultValue")&&Oe(t,n.type,we(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function ke(t,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,i||n===t.value||(t.value=n),t.defaultValue=n}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function Oe(t,n,i){(n!=="number"||bt(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var Fe=Array.isArray;function qe(t,n,i,l){if(t=t.options,n){n={};for(var d=0;d<i.length;d++)n["$"+i[d]]=!0;for(i=0;i<t.length;i++)d=n.hasOwnProperty("$"+t[i].value),t[i].selected!==d&&(t[i].selected=d),d&&l&&(t[i].defaultSelected=!0)}else{for(i=""+we(i),n=null,d=0;d<t.length;d++){if(t[d].value===i){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}n!==null||t[d].disabled||(n=t[d])}n!==null&&(n.selected=!0)}}function Ye(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return A({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function L(t,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(r(92));if(Fe(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),i=n}t._wrapperState={initialValue:we(i)}}function M(t,n){var i=we(n.value),l=we(n.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),n.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),l!=null&&(t.defaultValue=""+l)}function j(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function ve(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?ve(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ce,De=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,l,d){MSApp.execUnsafeLocalFunction(function(){return t(n,i,l,d)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function ye(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F=["Webkit","ms","Moz","O"];Object.keys(ee).forEach(function(t){F.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),ee[n]=ee[t]})});function he(t,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||ee.hasOwnProperty(t)&&ee[t]?(""+n).trim():n+"px"}function Le(t,n){t=t.style;for(var i in n)if(n.hasOwnProperty(i)){var l=i.indexOf("--")===0,d=he(i,n[i],l);i==="float"&&(i="cssFloat"),l?t.setProperty(i,d):t[i]=d}}var Re=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pe(t,n){if(n){if(Re[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function Qe(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pt=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Te=null,$=null,Me=null;function Ae(t){if(t=ss(t)){if(typeof Te!="function")throw Error(r(280));var n=t.stateNode;n&&(n=Qs(n),Te(t.stateNode,t.type,n))}}function gt(t){$?Me?Me.push(t):Me=[t]:$=t}function yt(){if($){var t=$,n=Me;if(Me=$=null,Ae(t),n)for(t=0;t<n.length;t++)Ae(n[t])}}function Rt(t,n){return t(n)}function Er(){}var Mt=!1;function Tr(t,n,i){if(Mt)return t(n,i);Mt=!0;try{return Rt(t,n,i)}finally{Mt=!1,($!==null||Me!==null)&&(Er(),yt())}}function kt(t,n){var i=t.stateNode;if(i===null)return null;var l=Qs(i);if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var Ba=!1;if(c)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){Ba=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{Ba=!1}function _l(t,n,i,l,d,f,b,N,B){var ae=Array.prototype.slice.call(arguments,3);try{n.apply(i,ae)}catch(xe){this.onError(xe)}}var on=!1,ha=null,mn=!1,Ha=null,xl={onError:function(t){on=!0,ha=t}};function yl(t,n,i,l,d,f,b,N,B){on=!1,ha=null,_l.apply(xl,arguments)}function Sl(t,n,i,l,d,f,b,N,B){if(yl.apply(this,arguments),on){if(on){var ae=ha;on=!1,ha=null}else throw Error(r(198));mn||(mn=!0,Ha=ae)}}function R(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function Q(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function ue(t){if(R(t)!==t)throw Error(r(188))}function Z(t){var n=t.alternate;if(!n){if(n=R(t),n===null)throw Error(r(188));return n!==t?null:t}for(var i=t,l=n;;){var d=i.return;if(d===null)break;var f=d.alternate;if(f===null){if(l=d.return,l!==null){i=l;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===i)return ue(d),t;if(f===l)return ue(d),n;f=f.sibling}throw Error(r(188))}if(i.return!==l.return)i=d,l=f;else{for(var b=!1,N=d.child;N;){if(N===i){b=!0,i=d,l=f;break}if(N===l){b=!0,l=d,i=f;break}N=N.sibling}if(!b){for(N=f.child;N;){if(N===i){b=!0,i=f,l=d;break}if(N===l){b=!0,l=f,i=d;break}N=N.sibling}if(!b)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?t:n}function oe(t){return t=Z(t),t!==null?Ue(t):null}function Ue(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Ue(t);if(n!==null)return n;t=t.sibling}return null}var $e=e.unstable_scheduleCallback,tt=e.unstable_cancelCallback,at=e.unstable_shouldYield,dt=e.unstable_requestPaint,Ve=e.unstable_now,it=e.unstable_getCurrentPriorityLevel,It=e.unstable_ImmediatePriority,At=e.unstable_UserBlockingPriority,tr=e.unstable_NormalPriority,Gr=e.unstable_LowPriority,Lt=e.unstable_IdlePriority,lt=null,mr=null;function Bi(t){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(lt,t,void 0,(t.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:Hi,Os=Math.log,fa=Math.LN2;function Hi(t){return t>>>=0,t===0?32:31-(Os(t)/fa|0)|0}var zt=64,Ur=4194304;function gn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zt(t,n){var i=t.pendingLanes;if(i===0)return 0;var l=0,d=t.suspendedLanes,f=t.pingedLanes,b=i&268435455;if(b!==0){var N=b&~d;N!==0?l=gn(N):(f&=b,f!==0&&(l=gn(f)))}else b=i&~d,b!==0?l=gn(b):f!==0&&(l=gn(f));if(l===0)return 0;if(n!==0&&n!==l&&(n&d)===0&&(d=l&-l,f=n&-n,d>=f||d===16&&(f&4194240)!==0))return n;if((l&4)!==0&&(l|=i&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)i=31-Vt(n),d=1<<i,l|=t[i],n&=~d;return l}function Vi(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bl(t,n){for(var i=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,f=t.pendingLanes;0<f;){var b=31-Vt(f),N=1<<b,B=d[b];B===-1?((N&i)===0||(N&l)!==0)&&(d[b]=Vi(N,n)):B<=n&&(t.expiredLanes|=N),f&=~N}}function Va(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $c(){var t=zt;return zt<<=1,(zt&4194240)===0&&(zt=64),t}function Ml(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function Wi(t,n,i){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Vt(n),t[n]=i}function Jm(t,n){var i=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<i;){var d=31-Vt(i),f=1<<d;n[d]=0,l[d]=-1,t[d]=-1,i&=~f}}function El(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var l=31-Vt(i),d=1<<l;d&n|t[l]&n&&(t[l]|=n),i&=~d}}var St=0;function ed(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var td,Tl,rd,nd,ad,wl=!1,ks=[],In=null,Dn=null,On=null,Gi=new Map,Xi=new Map,kn=[],Km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function id(t,n){switch(t){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Gi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xi.delete(n.pointerId)}}function ji(t,n,i,l,d,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:f,targetContainers:[d]},n!==null&&(n=ss(n),n!==null&&Tl(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),t)}function Qm(t,n,i,l,d){switch(n){case"focusin":return In=ji(In,t,n,i,l,d),!0;case"dragenter":return Dn=ji(Dn,t,n,i,l,d),!0;case"mouseover":return On=ji(On,t,n,i,l,d),!0;case"pointerover":var f=d.pointerId;return Gi.set(f,ji(Gi.get(f)||null,t,n,i,l,d)),!0;case"gotpointercapture":return f=d.pointerId,Xi.set(f,ji(Xi.get(f)||null,t,n,i,l,d)),!0}return!1}function sd(t){var n=pa(t.target);if(n!==null){var i=R(n);if(i!==null){if(n=i.tag,n===13){if(n=Q(i),n!==null){t.blockedOn=n,ad(t.priority,function(){rd(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fs(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Cl(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var l=new i.constructor(i.type,i);pt=l,i.target.dispatchEvent(l),pt=null}else return n=ss(i),n!==null&&Tl(n),t.blockedOn=i,!1;n.shift()}return!0}function od(t,n,i){Fs(t)&&i.delete(n)}function $m(){wl=!1,In!==null&&Fs(In)&&(In=null),Dn!==null&&Fs(Dn)&&(Dn=null),On!==null&&Fs(On)&&(On=null),Gi.forEach(od),Xi.forEach(od)}function Yi(t,n){t.blockedOn===n&&(t.blockedOn=null,wl||(wl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$m)))}function qi(t){function n(d){return Yi(d,t)}if(0<ks.length){Yi(ks[0],t);for(var i=1;i<ks.length;i++){var l=ks[i];l.blockedOn===t&&(l.blockedOn=null)}}for(In!==null&&Yi(In,t),Dn!==null&&Yi(Dn,t),On!==null&&Yi(On,t),Gi.forEach(n),Xi.forEach(n),i=0;i<kn.length;i++)l=kn[i],l.blockedOn===t&&(l.blockedOn=null);for(;0<kn.length&&(i=kn[0],i.blockedOn===null);)sd(i),i.blockedOn===null&&kn.shift()}var Wa=k.ReactCurrentBatchConfig,zs=!0;function eg(t,n,i,l){var d=St,f=Wa.transition;Wa.transition=null;try{St=1,Al(t,n,i,l)}finally{St=d,Wa.transition=f}}function tg(t,n,i,l){var d=St,f=Wa.transition;Wa.transition=null;try{St=4,Al(t,n,i,l)}finally{St=d,Wa.transition=f}}function Al(t,n,i,l){if(zs){var d=Cl(t,n,i,l);if(d===null)Xl(t,n,l,Bs,i),id(t,l);else if(Qm(d,t,n,i,l))l.stopPropagation();else if(id(t,l),n&4&&-1<Km.indexOf(t)){for(;d!==null;){var f=ss(d);if(f!==null&&td(f),f=Cl(t,n,i,l),f===null&&Xl(t,n,l,Bs,i),f===d)break;d=f}d!==null&&l.stopPropagation()}else Xl(t,n,l,null,i)}}var Bs=null;function Cl(t,n,i,l){if(Bs=null,t=H(l),t=pa(t),t!==null)if(n=R(t),n===null)t=null;else if(i=n.tag,i===13){if(t=Q(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Bs=t,null}function ld(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(it()){case It:return 1;case At:return 4;case tr:case Gr:return 16;case Lt:return 536870912;default:return 16}default:return 16}}var Fn=null,Rl=null,Hs=null;function ud(){if(Hs)return Hs;var t,n=Rl,i=n.length,l,d="value"in Fn?Fn.value:Fn.textContent,f=d.length;for(t=0;t<i&&n[t]===d[t];t++);var b=i-t;for(l=1;l<=b&&n[i-l]===d[f-l];l++);return Hs=d.slice(t,1<l?1-l:void 0)}function Vs(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ws(){return!0}function cd(){return!1}function wr(t){function n(i,l,d,f,b){this._reactName=i,this._targetInst=d,this.type=l,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(i=t[N],this[N]=i?i(f):f[N]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ws:cd,this.isPropagationStopped=cd,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=wr(Ga),Zi=A({},Ga,{view:0,detail:0}),rg=wr(Zi),Pl,Nl,Ji,Gs=A({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ji&&(Ji&&t.type==="mousemove"?(Pl=t.screenX-Ji.screenX,Nl=t.screenY-Ji.screenY):Nl=Pl=0,Ji=t),Pl)},movementY:function(t){return"movementY"in t?t.movementY:Nl}}),dd=wr(Gs),ng=A({},Gs,{dataTransfer:0}),ag=wr(ng),ig=A({},Zi,{relatedTarget:0}),Ul=wr(ig),sg=A({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),og=wr(sg),lg=A({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ug=wr(lg),cg=A({},Ga,{data:0}),hd=wr(cg),dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=fg[t])?!!n[t]:!1}function Il(){return pg}var mg=A({},Zi,{key:function(t){if(t.key){var n=dg[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Vs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(t){return t.type==="keypress"?Vs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gg=wr(mg),vg=A({},Gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=wr(vg),_g=A({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),xg=wr(_g),yg=A({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sg=wr(yg),bg=A({},Gs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mg=wr(bg),Eg=[9,13,27,32],Dl=c&&"CompositionEvent"in window,Ki=null;c&&"documentMode"in document&&(Ki=document.documentMode);var Tg=c&&"TextEvent"in window&&!Ki,pd=c&&(!Dl||Ki&&8<Ki&&11>=Ki),md=" ",gd=!1;function vd(t,n){switch(t){case"keyup":return Eg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _d(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xa=!1;function wg(t,n){switch(t){case"compositionend":return _d(n);case"keypress":return n.which!==32?null:(gd=!0,md);case"textInput":return t=n.data,t===md&&gd?null:t;default:return null}}function Ag(t,n){if(Xa)return t==="compositionend"||!Dl&&vd(t,n)?(t=ud(),Hs=Rl=Fn=null,Xa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pd&&n.locale!=="ko"?null:n.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Cg[t.type]:n==="textarea"}function yd(t,n,i,l){gt(l),n=Zs(n,"onChange"),0<n.length&&(i=new Ll("onChange","change",null,i,l),t.push({event:i,listeners:n}))}var Qi=null,$i=null;function Rg(t){Fd(t,0)}function Xs(t){var n=Ja(t);if(K(n))return t}function Lg(t,n){if(t==="change")return n}var Sd=!1;if(c){var Ol;if(c){var kl="oninput"in document;if(!kl){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),kl=typeof bd.oninput=="function"}Ol=kl}else Ol=!1;Sd=Ol&&(!document.documentMode||9<document.documentMode)}function Md(){Qi&&(Qi.detachEvent("onpropertychange",Ed),$i=Qi=null)}function Ed(t){if(t.propertyName==="value"&&Xs($i)){var n=[];yd(n,$i,t,H(t)),Tr(Rg,n)}}function Pg(t,n,i){t==="focusin"?(Md(),Qi=n,$i=i,Qi.attachEvent("onpropertychange",Ed)):t==="focusout"&&Md()}function Ng(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xs($i)}function Ug(t,n){if(t==="click")return Xs(n)}function Ig(t,n){if(t==="input"||t==="change")return Xs(n)}function Dg(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xr=typeof Object.is=="function"?Object.is:Dg;function es(t,n){if(Xr(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var d=i[l];if(!p.call(n,d)||!Xr(t[d],n[d]))return!1}return!0}function Td(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wd(t,n){var i=Td(t);t=0;for(var l;i;){if(i.nodeType===3){if(l=t+i.textContent.length,t<=n&&l>=n)return{node:i,offset:n-t};t=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Td(i)}}function Ad(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ad(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Cd(){for(var t=window,n=bt();n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=bt(t.document)}return n}function Fl(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Og(t){var n=Cd(),i=t.focusedElem,l=t.selectionRange;if(n!==i&&i&&i.ownerDocument&&Ad(i.ownerDocument.documentElement,i)){if(l!==null&&Fl(i)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(t,i.value.length);else if(t=(n=i.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var d=i.textContent.length,f=Math.min(l.start,d);l=l.end===void 0?f:Math.min(l.end,d),!t.extend&&f>l&&(d=l,l=f,f=d),d=wd(i,f);var b=wd(i,l);d&&b&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),t.removeAllRanges(),f>l?(t.addRange(n),t.extend(b.node,b.offset)):(n.setEnd(b.node,b.offset),t.addRange(n)))}}for(n=[],t=i;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)t=n[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kg=c&&"documentMode"in document&&11>=document.documentMode,ja=null,zl=null,ts=null,Bl=!1;function Rd(t,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Bl||ja==null||ja!==bt(l)||(l=ja,"selectionStart"in l&&Fl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ts&&es(ts,l)||(ts=l,l=Zs(zl,"onSelect"),0<l.length&&(n=new Ll("onSelect","select",null,n,i),t.push({event:n,listeners:l}),n.target=ja)))}function js(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var Ya={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionend:js("Transition","TransitionEnd")},Hl={},Ld={};c&&(Ld=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function Ys(t){if(Hl[t])return Hl[t];if(!Ya[t])return t;var n=Ya[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in Ld)return Hl[t]=n[i];return t}var Pd=Ys("animationend"),Nd=Ys("animationiteration"),Ud=Ys("animationstart"),Id=Ys("transitionend"),Dd=new Map,Od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(t,n){Dd.set(t,n),u(n,[t])}for(var Vl=0;Vl<Od.length;Vl++){var Wl=Od[Vl],Fg=Wl.toLowerCase(),zg=Wl[0].toUpperCase()+Wl.slice(1);zn(Fg,"on"+zg)}zn(Pd,"onAnimationEnd"),zn(Nd,"onAnimationIteration"),zn(Ud,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(Id,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));function kd(t,n,i){var l=t.type||"unknown-event";t.currentTarget=i,Sl(l,n,void 0,t),t.currentTarget=null}function Fd(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var l=t[i],d=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var b=l.length-1;0<=b;b--){var N=l[b],B=N.instance,ae=N.currentTarget;if(N=N.listener,B!==f&&d.isPropagationStopped())break e;kd(d,N,ae),f=B}else for(b=0;b<l.length;b++){if(N=l[b],B=N.instance,ae=N.currentTarget,N=N.listener,B!==f&&d.isPropagationStopped())break e;kd(d,N,ae),f=B}}}if(mn)throw t=Ha,mn=!1,Ha=null,t}function Tt(t,n){var i=n[Kl];i===void 0&&(i=n[Kl]=new Set);var l=t+"__bubble";i.has(l)||(zd(n,t,2,!1),i.add(l))}function Gl(t,n,i){var l=0;n&&(l|=4),zd(i,t,l,n)}var qs="_reactListening"+Math.random().toString(36).slice(2);function ns(t){if(!t[qs]){t[qs]=!0,a.forEach(function(i){i!=="selectionchange"&&(Bg.has(i)||Gl(i,!1,t),Gl(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[qs]||(n[qs]=!0,Gl("selectionchange",!1,n))}}function zd(t,n,i,l){switch(ld(n)){case 1:var d=eg;break;case 4:d=tg;break;default:d=Al}i=d.bind(null,n,i,t),d=void 0,!Ba||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(n,i,{capture:!0,passive:d}):t.addEventListener(n,i,!0):d!==void 0?t.addEventListener(n,i,{passive:d}):t.addEventListener(n,i,!1)}function Xl(t,n,i,l,d){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var N=l.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(b===4)for(b=l.return;b!==null;){var B=b.tag;if((B===3||B===4)&&(B=b.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;b=b.return}for(;N!==null;){if(b=pa(N),b===null)return;if(B=b.tag,B===5||B===6){l=f=b;continue e}N=N.parentNode}}l=l.return}Tr(function(){var ae=f,xe=H(i),Se=[];e:{var _e=Dd.get(t);if(_e!==void 0){var ze=Ll,He=t;switch(t){case"keypress":if(Vs(i)===0)break e;case"keydown":case"keyup":ze=gg;break;case"focusin":He="focus",ze=Ul;break;case"focusout":He="blur",ze=Ul;break;case"beforeblur":case"afterblur":ze=Ul;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=xg;break;case Pd:case Nd:case Ud:ze=og;break;case Id:ze=Sg;break;case"scroll":ze=rg;break;case"wheel":ze=Mg;break;case"copy":case"cut":case"paste":ze=ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=fd}var We=(n&4)!==0,Ft=!We&&t==="scroll",Y=We?_e!==null?_e+"Capture":null:_e;We=[];for(var V=ae,J;V!==null;){J=V;var Ee=J.stateNode;if(J.tag===5&&Ee!==null&&(J=Ee,Y!==null&&(Ee=kt(V,Y),Ee!=null&&We.push(as(V,Ee,J)))),Ft)break;V=V.return}0<We.length&&(_e=new ze(_e,He,null,i,xe),Se.push({event:_e,listeners:We}))}}if((n&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",ze=t==="mouseout"||t==="pointerout",_e&&i!==pt&&(He=i.relatedTarget||i.fromElement)&&(pa(He)||He[vn]))break e;if((ze||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,ze?(He=i.relatedTarget||i.toElement,ze=ae,He=He?pa(He):null,He!==null&&(Ft=R(He),He!==Ft||He.tag!==5&&He.tag!==6)&&(He=null)):(ze=null,He=ae),ze!==He)){if(We=dd,Ee="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(We=fd,Ee="onPointerLeave",Y="onPointerEnter",V="pointer"),Ft=ze==null?_e:Ja(ze),J=He==null?_e:Ja(He),_e=new We(Ee,V+"leave",ze,i,xe),_e.target=Ft,_e.relatedTarget=J,Ee=null,pa(xe)===ae&&(We=new We(Y,V+"enter",He,i,xe),We.target=J,We.relatedTarget=Ft,Ee=We),Ft=Ee,ze&&He)t:{for(We=ze,Y=He,V=0,J=We;J;J=qa(J))V++;for(J=0,Ee=Y;Ee;Ee=qa(Ee))J++;for(;0<V-J;)We=qa(We),V--;for(;0<J-V;)Y=qa(Y),J--;for(;V--;){if(We===Y||Y!==null&&We===Y.alternate)break t;We=qa(We),Y=qa(Y)}We=null}else We=null;ze!==null&&Bd(Se,_e,ze,We,!1),He!==null&&Ft!==null&&Bd(Se,Ft,He,We,!0)}}e:{if(_e=ae?Ja(ae):window,ze=_e.nodeName&&_e.nodeName.toLowerCase(),ze==="select"||ze==="input"&&_e.type==="file")var Ge=Lg;else if(xd(_e))if(Sd)Ge=Ig;else{Ge=Ng;var Ze=Pg}else(ze=_e.nodeName)&&ze.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ge=Ug);if(Ge&&(Ge=Ge(t,ae))){yd(Se,Ge,i,xe);break e}Ze&&Ze(t,_e,ae),t==="focusout"&&(Ze=_e._wrapperState)&&Ze.controlled&&_e.type==="number"&&Oe(_e,"number",_e.value)}switch(Ze=ae?Ja(ae):window,t){case"focusin":(xd(Ze)||Ze.contentEditable==="true")&&(ja=Ze,zl=ae,ts=null);break;case"focusout":ts=zl=ja=null;break;case"mousedown":Bl=!0;break;case"contextmenu":case"mouseup":case"dragend":Bl=!1,Rd(Se,i,xe);break;case"selectionchange":if(kg)break;case"keydown":case"keyup":Rd(Se,i,xe)}var Je;if(Dl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Xa?vd(t,i)&&(nt="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(nt="onCompositionStart");nt&&(pd&&i.locale!=="ko"&&(Xa||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Xa&&(Je=ud()):(Fn=xe,Rl="value"in Fn?Fn.value:Fn.textContent,Xa=!0)),Ze=Zs(ae,nt),0<Ze.length&&(nt=new hd(nt,t,null,i,xe),Se.push({event:nt,listeners:Ze}),Je?nt.data=Je:(Je=_d(i),Je!==null&&(nt.data=Je)))),(Je=Tg?wg(t,i):Ag(t,i))&&(ae=Zs(ae,"onBeforeInput"),0<ae.length&&(xe=new hd("onBeforeInput","beforeinput",null,i,xe),Se.push({event:xe,listeners:ae}),xe.data=Je))}Fd(Se,n)})}function as(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Zs(t,n){for(var i=n+"Capture",l=[];t!==null;){var d=t,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=kt(t,i),f!=null&&l.unshift(as(t,f,d)),f=kt(t,n),f!=null&&l.push(as(t,f,d))),t=t.return}return l}function qa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bd(t,n,i,l,d){for(var f=n._reactName,b=[];i!==null&&i!==l;){var N=i,B=N.alternate,ae=N.stateNode;if(B!==null&&B===l)break;N.tag===5&&ae!==null&&(N=ae,d?(B=kt(i,f),B!=null&&b.unshift(as(i,B,N))):d||(B=kt(i,f),B!=null&&b.push(as(i,B,N)))),i=i.return}b.length!==0&&t.push({event:n,listeners:b})}var Hg=/\r\n?/g,Vg=/\u0000|\uFFFD/g;function Hd(t){return(typeof t=="string"?t:""+t).replace(Hg,`
`).replace(Vg,"")}function Js(t,n,i){if(n=Hd(n),Hd(t)!==n&&i)throw Error(r(425))}function Ks(){}var jl=null,Yl=null;function ql(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,Wg=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,Gg=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(t){return Vd.resolve(null).then(t).catch(Xg)}:Zl;function Xg(t){setTimeout(function(){throw t})}function Jl(t,n){var i=n,l=0;do{var d=i.nextSibling;if(t.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(l===0){t.removeChild(d),qi(n);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=d}while(i);qi(n)}function Bn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Wd(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return t;n--}else i==="/$"&&n++}t=t.previousSibling}return null}var Za=Math.random().toString(36).slice(2),ln="__reactFiber$"+Za,is="__reactProps$"+Za,vn="__reactContainer$"+Za,Kl="__reactEvents$"+Za,jg="__reactListeners$"+Za,Yg="__reactHandles$"+Za;function pa(t){var n=t[ln];if(n)return n;for(var i=t.parentNode;i;){if(n=i[vn]||i[ln]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=Wd(t);t!==null;){if(i=t[ln])return i;t=Wd(t)}return n}t=i,i=t.parentNode}return null}function ss(t){return t=t[ln]||t[vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ja(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(r(33))}function Qs(t){return t[is]||null}var Ql=[],Ka=-1;function Hn(t){return{current:t}}function wt(t){0>Ka||(t.current=Ql[Ka],Ql[Ka]=null,Ka--)}function Et(t,n){Ka++,Ql[Ka]=t.current,t.current=n}var Vn={},ar=Hn(Vn),gr=Hn(!1),ma=Vn;function Qa(t,n){var i=t.type.contextTypes;if(!i)return Vn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in i)d[f]=n[f];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=d),d}function vr(t){return t=t.childContextTypes,t!=null}function $s(){wt(gr),wt(ar)}function Gd(t,n,i){if(ar.current!==Vn)throw Error(r(168));Et(ar,n),Et(gr,i)}function Xd(t,n,i){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var d in l)if(!(d in n))throw Error(r(108,Ne(t)||"Unknown",d));return A({},i,l)}function eo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vn,ma=ar.current,Et(ar,t),Et(gr,gr.current),!0}function jd(t,n,i){var l=t.stateNode;if(!l)throw Error(r(169));i?(t=Xd(t,n,ma),l.__reactInternalMemoizedMergedChildContext=t,wt(gr),wt(ar),Et(ar,t)):wt(gr),Et(gr,i)}var _n=null,to=!1,$l=!1;function Yd(t){_n===null?_n=[t]:_n.push(t)}function qg(t){to=!0,Yd(t)}function Wn(){if(!$l&&_n!==null){$l=!0;var t=0,n=St;try{var i=_n;for(St=1;t<i.length;t++){var l=i[t];do l=l(!0);while(l!==null)}_n=null,to=!1}catch(d){throw _n!==null&&(_n=_n.slice(t+1)),$e(It,Wn),d}finally{St=n,$l=!1}}return null}var $a=[],ei=0,ro=null,no=0,Ir=[],Dr=0,ga=null,xn=1,yn="";function va(t,n){$a[ei++]=no,$a[ei++]=ro,ro=t,no=n}function qd(t,n,i){Ir[Dr++]=xn,Ir[Dr++]=yn,Ir[Dr++]=ga,ga=t;var l=xn;t=yn;var d=32-Vt(l)-1;l&=~(1<<d),i+=1;var f=32-Vt(n)+d;if(30<f){var b=d-d%5;f=(l&(1<<b)-1).toString(32),l>>=b,d-=b,xn=1<<32-Vt(n)+d|i<<d|l,yn=f+t}else xn=1<<f|i<<d|l,yn=t}function eu(t){t.return!==null&&(va(t,1),qd(t,1,0))}function tu(t){for(;t===ro;)ro=$a[--ei],$a[ei]=null,no=$a[--ei],$a[ei]=null;for(;t===ga;)ga=Ir[--Dr],Ir[Dr]=null,yn=Ir[--Dr],Ir[Dr]=null,xn=Ir[--Dr],Ir[Dr]=null}var Ar=null,Cr=null,Ct=!1,jr=null;function Zd(t,n){var i=zr(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=t,n=t.deletions,n===null?(t.deletions=[i],t.flags|=16):n.push(i)}function Jd(t,n){switch(t.tag){case 5:var i=t.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Ar=t,Cr=Bn(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Ar=t,Cr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=ga!==null?{id:xn,overflow:yn}:null,t.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=zr(18,null,null,0),i.stateNode=n,i.return=t,t.child=i,Ar=t,Cr=null,!0):!1;default:return!1}}function ru(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nu(t){if(Ct){var n=Cr;if(n){var i=n;if(!Jd(t,n)){if(ru(t))throw Error(r(418));n=Bn(i.nextSibling);var l=Ar;n&&Jd(t,n)?Zd(l,i):(t.flags=t.flags&-4097|2,Ct=!1,Ar=t)}}else{if(ru(t))throw Error(r(418));t.flags=t.flags&-4097|2,Ct=!1,Ar=t}}}function Kd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ar=t}function ao(t){if(t!==Ar)return!1;if(!Ct)return Kd(t),Ct=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!ql(t.type,t.memoizedProps)),n&&(n=Cr)){if(ru(t))throw Qd(),Error(r(418));for(;n;)Zd(t,n),n=Bn(n.nextSibling)}if(Kd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(n===0){Cr=Bn(t.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}t=t.nextSibling}Cr=null}}else Cr=Ar?Bn(t.stateNode.nextSibling):null;return!0}function Qd(){for(var t=Cr;t;)t=Bn(t.nextSibling)}function ti(){Cr=Ar=null,Ct=!1}function au(t){jr===null?jr=[t]:jr.push(t)}var Zg=k.ReactCurrentBatchConfig;function Yr(t,n){if(t&&t.defaultProps){n=A({},n),t=t.defaultProps;for(var i in t)n[i]===void 0&&(n[i]=t[i]);return n}return n}var io=Hn(null),so=null,ri=null,iu=null;function su(){iu=ri=so=null}function ou(t){var n=io.current;wt(io),t._currentValue=n}function lu(t,n,i){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===i)break;t=t.return}}function ni(t,n){so=t,iu=ri=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(_r=!0),t.firstContext=null)}function Or(t){var n=t._currentValue;if(iu!==t)if(t={context:t,memoizedValue:n,next:null},ri===null){if(so===null)throw Error(r(308));ri=t,so.dependencies={lanes:0,firstContext:t}}else ri=ri.next=t;return n}var _a=null;function uu(t){_a===null?_a=[t]:_a.push(t)}function $d(t,n,i,l){var d=n.interleaved;return d===null?(i.next=i,uu(n)):(i.next=d.next,d.next=i),n.interleaved=i,Sn(t,l)}function Sn(t,n){t.lanes|=n;var i=t.alternate;for(i!==null&&(i.lanes|=n),i=t,t=t.return;t!==null;)t.childLanes|=n,i=t.alternate,i!==null&&(i.childLanes|=n),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Gn=!1;function cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eh(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Xn(t,n,i){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var d=l.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),l.pending=n,Sn(t,i)}return d=l.interleaved,d===null?(n.next=n,uu(l)):(n.next=d.next,d.next=n),l.interleaved=n,Sn(t,i)}function oo(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,i|=l,n.lanes=i,El(t,i)}}function th(t,n){var i=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var d=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var b={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};f===null?d=f=b:f=f.next=b,i=i.next}while(i!==null);f===null?d=f=n:f=f.next=n}else d=f=n;i={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:l.shared,effects:l.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}function lo(t,n,i,l){var d=t.updateQueue;Gn=!1;var f=d.firstBaseUpdate,b=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var B=N,ae=B.next;B.next=null,b===null?f=ae:b.next=ae,b=B;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,N=xe.lastBaseUpdate,N!==b&&(N===null?xe.firstBaseUpdate=ae:N.next=ae,xe.lastBaseUpdate=B))}if(f!==null){var Se=d.baseState;b=0,xe=ae=B=null,N=f;do{var _e=N.lane,ze=N.eventTime;if((l&_e)===_e){xe!==null&&(xe=xe.next={eventTime:ze,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var He=t,We=N;switch(_e=n,ze=i,We.tag){case 1:if(He=We.payload,typeof He=="function"){Se=He.call(ze,Se,_e);break e}Se=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=We.payload,_e=typeof He=="function"?He.call(ze,Se,_e):He,_e==null)break e;Se=A({},Se,_e);break e;case 2:Gn=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,_e=d.effects,_e===null?d.effects=[N]:_e.push(N))}else ze={eventTime:ze,lane:_e,tag:N.tag,payload:N.payload,callback:N.callback,next:null},xe===null?(ae=xe=ze,B=Se):xe=xe.next=ze,b|=_e;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;_e=N,N=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(xe===null&&(B=Se),d.baseState=B,d.firstBaseUpdate=ae,d.lastBaseUpdate=xe,n=d.shared.interleaved,n!==null){d=n;do b|=d.lane,d=d.next;while(d!==n)}else f===null&&(d.shared.lanes=0);Sa|=b,t.lanes=b,t.memoizedState=Se}}function rh(t,n,i){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],d=l.callback;if(d!==null){if(l.callback=null,l=i,typeof d!="function")throw Error(r(191,d));d.call(l)}}}var nh=new s.Component().refs;function du(t,n,i,l){n=t.memoizedState,i=i(l,n),i=i==null?n:A({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var uo={isMounted:function(t){return(t=t._reactInternals)?R(t)===t:!1},enqueueSetState:function(t,n,i){t=t._reactInternals;var l=dr(),d=Zn(t),f=bn(l,d);f.payload=n,i!=null&&(f.callback=i),n=Xn(t,f,d),n!==null&&(Jr(n,t,d,l),oo(n,t,d))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var l=dr(),d=Zn(t),f=bn(l,d);f.tag=1,f.payload=n,i!=null&&(f.callback=i),n=Xn(t,f,d),n!==null&&(Jr(n,t,d,l),oo(n,t,d))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=dr(),l=Zn(t),d=bn(i,l);d.tag=2,n!=null&&(d.callback=n),n=Xn(t,d,l),n!==null&&(Jr(n,t,l,i),oo(n,t,l))}};function ah(t,n,i,l,d,f,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,b):n.prototype&&n.prototype.isPureReactComponent?!es(i,l)||!es(d,f):!0}function ih(t,n,i){var l=!1,d=Vn,f=n.contextType;return typeof f=="object"&&f!==null?f=Or(f):(d=vr(n)?ma:ar.current,l=n.contextTypes,f=(l=l!=null)?Qa(t,d):Vn),n=new n(i,f),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=uo,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=f),n}function sh(t,n,i,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==t&&uo.enqueueReplaceState(n,n.state,null)}function hu(t,n,i,l){var d=t.stateNode;d.props=i,d.state=t.memoizedState,d.refs=nh,cu(t);var f=n.contextType;typeof f=="object"&&f!==null?d.context=Or(f):(f=vr(n)?ma:ar.current,d.context=Qa(t,f)),d.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(du(t,n,f,i),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&uo.enqueueReplaceState(d,d.state,null),lo(t,i,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function os(t,n,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,t));var d=l,f=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===f?n.ref:(n=function(b){var N=d.refs;N===nh&&(N=d.refs={}),b===null?delete N[f]:N[f]=b},n._stringRef=f,n)}if(typeof t!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,t))}return t}function co(t,n){throw t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function oh(t){var n=t._init;return n(t._payload)}function lh(t){function n(Y,V){if(t){var J=Y.deletions;J===null?(Y.deletions=[V],Y.flags|=16):J.push(V)}}function i(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function l(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function d(Y,V){return Y=Kn(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<V?(Y.flags|=2,V):J):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function b(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function N(Y,V,J,Ee){return V===null||V.tag!==6?(V=qu(J,Y.mode,Ee),V.return=Y,V):(V=d(V,J),V.return=Y,V)}function B(Y,V,J,Ee){var Ge=J.type;return Ge===O?xe(Y,V,J.props.children,Ee,J.key):V!==null&&(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===ge&&oh(Ge)===V.type)?(Ee=d(V,J.props),Ee.ref=os(Y,V,J),Ee.return=Y,Ee):(Ee=Lo(J.type,J.key,J.props,null,Y.mode,Ee),Ee.ref=os(Y,V,J),Ee.return=Y,Ee)}function ae(Y,V,J,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Zu(J,Y.mode,Ee),V.return=Y,V):(V=d(V,J.children||[]),V.return=Y,V)}function xe(Y,V,J,Ee,Ge){return V===null||V.tag!==7?(V=Ta(J,Y.mode,Ee,Ge),V.return=Y,V):(V=d(V,J),V.return=Y,V)}function Se(Y,V,J){if(typeof V=="string"&&V!==""||typeof V=="number")return V=qu(""+V,Y.mode,J),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case D:return J=Lo(V.type,V.key,V.props,null,Y.mode,J),J.ref=os(Y,null,V),J.return=Y,J;case z:return V=Zu(V,Y.mode,J),V.return=Y,V;case ge:var Ee=V._init;return Se(Y,Ee(V._payload),J)}if(Fe(V)||te(V))return V=Ta(V,Y.mode,J,null),V.return=Y,V;co(Y,V)}return null}function _e(Y,V,J,Ee){var Ge=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Ge!==null?null:N(Y,V,""+J,Ee);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Ge?B(Y,V,J,Ee):null;case z:return J.key===Ge?ae(Y,V,J,Ee):null;case ge:return Ge=J._init,_e(Y,V,Ge(J._payload),Ee)}if(Fe(J)||te(J))return Ge!==null?null:xe(Y,V,J,Ee,null);co(Y,J)}return null}function ze(Y,V,J,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(J)||null,N(V,Y,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case D:return Y=Y.get(Ee.key===null?J:Ee.key)||null,B(V,Y,Ee,Ge);case z:return Y=Y.get(Ee.key===null?J:Ee.key)||null,ae(V,Y,Ee,Ge);case ge:var Ze=Ee._init;return ze(Y,V,J,Ze(Ee._payload),Ge)}if(Fe(Ee)||te(Ee))return Y=Y.get(J)||null,xe(V,Y,Ee,Ge,null);co(V,Ee)}return null}function He(Y,V,J,Ee){for(var Ge=null,Ze=null,Je=V,nt=V=0,Qt=null;Je!==null&&nt<J.length;nt++){Je.index>nt?(Qt=Je,Je=null):Qt=Je.sibling;var xt=_e(Y,Je,J[nt],Ee);if(xt===null){Je===null&&(Je=Qt);break}t&&Je&&xt.alternate===null&&n(Y,Je),V=f(xt,V,nt),Ze===null?Ge=xt:Ze.sibling=xt,Ze=xt,Je=Qt}if(nt===J.length)return i(Y,Je),Ct&&va(Y,nt),Ge;if(Je===null){for(;nt<J.length;nt++)Je=Se(Y,J[nt],Ee),Je!==null&&(V=f(Je,V,nt),Ze===null?Ge=Je:Ze.sibling=Je,Ze=Je);return Ct&&va(Y,nt),Ge}for(Je=l(Y,Je);nt<J.length;nt++)Qt=ze(Je,Y,nt,J[nt],Ee),Qt!==null&&(t&&Qt.alternate!==null&&Je.delete(Qt.key===null?nt:Qt.key),V=f(Qt,V,nt),Ze===null?Ge=Qt:Ze.sibling=Qt,Ze=Qt);return t&&Je.forEach(function(Qn){return n(Y,Qn)}),Ct&&va(Y,nt),Ge}function We(Y,V,J,Ee){var Ge=te(J);if(typeof Ge!="function")throw Error(r(150));if(J=Ge.call(J),J==null)throw Error(r(151));for(var Ze=Ge=null,Je=V,nt=V=0,Qt=null,xt=J.next();Je!==null&&!xt.done;nt++,xt=J.next()){Je.index>nt?(Qt=Je,Je=null):Qt=Je.sibling;var Qn=_e(Y,Je,xt.value,Ee);if(Qn===null){Je===null&&(Je=Qt);break}t&&Je&&Qn.alternate===null&&n(Y,Je),V=f(Qn,V,nt),Ze===null?Ge=Qn:Ze.sibling=Qn,Ze=Qn,Je=Qt}if(xt.done)return i(Y,Je),Ct&&va(Y,nt),Ge;if(Je===null){for(;!xt.done;nt++,xt=J.next())xt=Se(Y,xt.value,Ee),xt!==null&&(V=f(xt,V,nt),Ze===null?Ge=xt:Ze.sibling=xt,Ze=xt);return Ct&&va(Y,nt),Ge}for(Je=l(Y,Je);!xt.done;nt++,xt=J.next())xt=ze(Je,Y,nt,xt.value,Ee),xt!==null&&(t&&xt.alternate!==null&&Je.delete(xt.key===null?nt:xt.key),V=f(xt,V,nt),Ze===null?Ge=xt:Ze.sibling=xt,Ze=xt);return t&&Je.forEach(function(Cv){return n(Y,Cv)}),Ct&&va(Y,nt),Ge}function Ft(Y,V,J,Ee){if(typeof J=="object"&&J!==null&&J.type===O&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:e:{for(var Ge=J.key,Ze=V;Ze!==null;){if(Ze.key===Ge){if(Ge=J.type,Ge===O){if(Ze.tag===7){i(Y,Ze.sibling),V=d(Ze,J.props.children),V.return=Y,Y=V;break e}}else if(Ze.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===ge&&oh(Ge)===Ze.type){i(Y,Ze.sibling),V=d(Ze,J.props),V.ref=os(Y,Ze,J),V.return=Y,Y=V;break e}i(Y,Ze);break}else n(Y,Ze);Ze=Ze.sibling}J.type===O?(V=Ta(J.props.children,Y.mode,Ee,J.key),V.return=Y,Y=V):(Ee=Lo(J.type,J.key,J.props,null,Y.mode,Ee),Ee.ref=os(Y,V,J),Ee.return=Y,Y=Ee)}return b(Y);case z:e:{for(Ze=J.key;V!==null;){if(V.key===Ze)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){i(Y,V.sibling),V=d(V,J.children||[]),V.return=Y,Y=V;break e}else{i(Y,V);break}else n(Y,V);V=V.sibling}V=Zu(J,Y.mode,Ee),V.return=Y,Y=V}return b(Y);case ge:return Ze=J._init,Ft(Y,V,Ze(J._payload),Ee)}if(Fe(J))return He(Y,V,J,Ee);if(te(J))return We(Y,V,J,Ee);co(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,V!==null&&V.tag===6?(i(Y,V.sibling),V=d(V,J),V.return=Y,Y=V):(i(Y,V),V=qu(J,Y.mode,Ee),V.return=Y,Y=V),b(Y)):i(Y,V)}return Ft}var ai=lh(!0),uh=lh(!1),ls={},un=Hn(ls),us=Hn(ls),cs=Hn(ls);function xa(t){if(t===ls)throw Error(r(174));return t}function fu(t,n){switch(Et(cs,n),Et(us,t),Et(un,ls),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:le(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=le(n,t)}wt(un),Et(un,n)}function ii(){wt(un),wt(us),wt(cs)}function ch(t){xa(cs.current);var n=xa(un.current),i=le(n,t.type);n!==i&&(Et(us,t),Et(un,i))}function pu(t){us.current===t&&(wt(un),wt(us))}var Pt=Hn(0);function ho(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var mu=[];function gu(){for(var t=0;t<mu.length;t++)mu[t]._workInProgressVersionPrimary=null;mu.length=0}var fo=k.ReactCurrentDispatcher,vu=k.ReactCurrentBatchConfig,ya=0,Nt=null,Wt=null,Jt=null,po=!1,ds=!1,hs=0,Jg=0;function ir(){throw Error(r(321))}function _u(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!Xr(t[i],n[i]))return!1;return!0}function xu(t,n,i,l,d,f){if(ya=f,Nt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,fo.current=t===null||t.memoizedState===null?ev:tv,t=i(l,d),ds){f=0;do{if(ds=!1,hs=0,25<=f)throw Error(r(301));f+=1,Jt=Wt=null,n.updateQueue=null,fo.current=rv,t=i(l,d)}while(ds)}if(fo.current=vo,n=Wt!==null&&Wt.next!==null,ya=0,Jt=Wt=Nt=null,po=!1,n)throw Error(r(300));return t}function yu(){var t=hs!==0;return hs=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Nt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function kr(){if(Wt===null){var t=Nt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=Jt===null?Nt.memoizedState:Jt.next;if(n!==null)Jt=n,Wt=t;else{if(t===null)throw Error(r(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Jt===null?Nt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function fs(t,n){return typeof n=="function"?n(t):n}function Su(t){var n=kr(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=t;var l=Wt,d=l.baseQueue,f=i.pending;if(f!==null){if(d!==null){var b=d.next;d.next=f.next,f.next=b}l.baseQueue=d=f,i.pending=null}if(d!==null){f=d.next,l=l.baseState;var N=b=null,B=null,ae=f;do{var xe=ae.lane;if((ya&xe)===xe)B!==null&&(B=B.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),l=ae.hasEagerState?ae.eagerState:t(l,ae.action);else{var Se={lane:xe,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};B===null?(N=B=Se,b=l):B=B.next=Se,Nt.lanes|=xe,Sa|=xe}ae=ae.next}while(ae!==null&&ae!==f);B===null?b=l:B.next=N,Xr(l,n.memoizedState)||(_r=!0),n.memoizedState=l,n.baseState=b,n.baseQueue=B,i.lastRenderedState=l}if(t=i.interleaved,t!==null){d=t;do f=d.lane,Nt.lanes|=f,Sa|=f,d=d.next;while(d!==t)}else d===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function bu(t){var n=kr(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=t;var l=i.dispatch,d=i.pending,f=n.memoizedState;if(d!==null){i.pending=null;var b=d=d.next;do f=t(f,b.action),b=b.next;while(b!==d);Xr(f,n.memoizedState)||(_r=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),i.lastRenderedState=f}return[f,l]}function dh(){}function hh(t,n){var i=Nt,l=kr(),d=n(),f=!Xr(l.memoizedState,d);if(f&&(l.memoizedState=d,_r=!0),l=l.queue,Mu(mh.bind(null,i,l,t),[t]),l.getSnapshot!==n||f||Jt!==null&&Jt.memoizedState.tag&1){if(i.flags|=2048,ps(9,ph.bind(null,i,l,d,n),void 0,null),Kt===null)throw Error(r(349));(ya&30)!==0||fh(i,n,d)}return d}function fh(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=Nt.updateQueue,n===null?(n={lastEffect:null,stores:null},Nt.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function ph(t,n,i,l){n.value=i,n.getSnapshot=l,gh(n)&&vh(t)}function mh(t,n,i){return i(function(){gh(n)&&vh(t)})}function gh(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!Xr(t,i)}catch{return!0}}function vh(t){var n=Sn(t,1);n!==null&&Jr(n,t,1,-1)}function _h(t){var n=cn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:t},n.queue=t,t=t.dispatch=$g.bind(null,Nt,t),[n.memoizedState,t]}function ps(t,n,i,l){return t={tag:t,create:n,destroy:i,deps:l,next:null},n=Nt.updateQueue,n===null?(n={lastEffect:null,stores:null},Nt.updateQueue=n,n.lastEffect=t.next=t):(i=n.lastEffect,i===null?n.lastEffect=t.next=t:(l=i.next,i.next=t,t.next=l,n.lastEffect=t)),t}function xh(){return kr().memoizedState}function mo(t,n,i,l){var d=cn();Nt.flags|=t,d.memoizedState=ps(1|n,i,void 0,l===void 0?null:l)}function go(t,n,i,l){var d=kr();l=l===void 0?null:l;var f=void 0;if(Wt!==null){var b=Wt.memoizedState;if(f=b.destroy,l!==null&&_u(l,b.deps)){d.memoizedState=ps(n,i,f,l);return}}Nt.flags|=t,d.memoizedState=ps(1|n,i,f,l)}function yh(t,n){return mo(8390656,8,t,n)}function Mu(t,n){return go(2048,8,t,n)}function Sh(t,n){return go(4,2,t,n)}function bh(t,n){return go(4,4,t,n)}function Mh(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Eh(t,n,i){return i=i!=null?i.concat([t]):null,go(4,4,Mh.bind(null,n,t),i)}function Eu(){}function Th(t,n){var i=kr();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&_u(n,l[1])?l[0]:(i.memoizedState=[t,n],t)}function wh(t,n){var i=kr();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&_u(n,l[1])?l[0]:(t=t(),i.memoizedState=[t,n],t)}function Ah(t,n,i){return(ya&21)===0?(t.baseState&&(t.baseState=!1,_r=!0),t.memoizedState=i):(Xr(i,n)||(i=$c(),Nt.lanes|=i,Sa|=i,t.baseState=!0),n)}function Kg(t,n){var i=St;St=i!==0&&4>i?i:4,t(!0);var l=vu.transition;vu.transition={};try{t(!1),n()}finally{St=i,vu.transition=l}}function Ch(){return kr().memoizedState}function Qg(t,n,i){var l=Zn(t);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Rh(t))Lh(n,i);else if(i=$d(t,n,i,l),i!==null){var d=dr();Jr(i,t,l,d),Ph(i,n,l)}}function $g(t,n,i){var l=Zn(t),d={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Rh(t))Lh(n,d);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var b=n.lastRenderedState,N=f(b,i);if(d.hasEagerState=!0,d.eagerState=N,Xr(N,b)){var B=n.interleaved;B===null?(d.next=d,uu(n)):(d.next=B.next,B.next=d),n.interleaved=d;return}}catch{}i=$d(t,n,d,l),i!==null&&(d=dr(),Jr(i,t,l,d),Ph(i,n,l))}}function Rh(t){var n=t.alternate;return t===Nt||n!==null&&n===Nt}function Lh(t,n){ds=po=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Ph(t,n,i){if((i&4194240)!==0){var l=n.lanes;l&=t.pendingLanes,i|=l,n.lanes=i,El(t,i)}}var vo={readContext:Or,useCallback:ir,useContext:ir,useEffect:ir,useImperativeHandle:ir,useInsertionEffect:ir,useLayoutEffect:ir,useMemo:ir,useReducer:ir,useRef:ir,useState:ir,useDebugValue:ir,useDeferredValue:ir,useTransition:ir,useMutableSource:ir,useSyncExternalStore:ir,useId:ir,unstable_isNewReconciler:!1},ev={readContext:Or,useCallback:function(t,n){return cn().memoizedState=[t,n===void 0?null:n],t},useContext:Or,useEffect:yh,useImperativeHandle:function(t,n,i){return i=i!=null?i.concat([t]):null,mo(4194308,4,Mh.bind(null,n,t),i)},useLayoutEffect:function(t,n){return mo(4194308,4,t,n)},useInsertionEffect:function(t,n){return mo(4,2,t,n)},useMemo:function(t,n){var i=cn();return n=n===void 0?null:n,t=t(),i.memoizedState=[t,n],t},useReducer:function(t,n,i){var l=cn();return n=i!==void 0?i(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Qg.bind(null,Nt,t),[l.memoizedState,t]},useRef:function(t){var n=cn();return t={current:t},n.memoizedState=t},useState:_h,useDebugValue:Eu,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=_h(!1),n=t[0];return t=Kg.bind(null,t[1]),cn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,i){var l=Nt,d=cn();if(Ct){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),Kt===null)throw Error(r(349));(ya&30)!==0||fh(l,n,i)}d.memoizedState=i;var f={value:i,getSnapshot:n};return d.queue=f,yh(mh.bind(null,l,f,t),[t]),l.flags|=2048,ps(9,ph.bind(null,l,f,i,n),void 0,null),i},useId:function(){var t=cn(),n=Kt.identifierPrefix;if(Ct){var i=yn,l=xn;i=(l&~(1<<32-Vt(l)-1)).toString(32)+i,n=":"+n+"R"+i,i=hs++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=Jg++,n=":"+n+"r"+i.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},tv={readContext:Or,useCallback:Th,useContext:Or,useEffect:Mu,useImperativeHandle:Eh,useInsertionEffect:Sh,useLayoutEffect:bh,useMemo:wh,useReducer:Su,useRef:xh,useState:function(){return Su(fs)},useDebugValue:Eu,useDeferredValue:function(t){var n=kr();return Ah(n,Wt.memoizedState,t)},useTransition:function(){var t=Su(fs)[0],n=kr().memoizedState;return[t,n]},useMutableSource:dh,useSyncExternalStore:hh,useId:Ch,unstable_isNewReconciler:!1},rv={readContext:Or,useCallback:Th,useContext:Or,useEffect:Mu,useImperativeHandle:Eh,useInsertionEffect:Sh,useLayoutEffect:bh,useMemo:wh,useReducer:bu,useRef:xh,useState:function(){return bu(fs)},useDebugValue:Eu,useDeferredValue:function(t){var n=kr();return Wt===null?n.memoizedState=t:Ah(n,Wt.memoizedState,t)},useTransition:function(){var t=bu(fs)[0],n=kr().memoizedState;return[t,n]},useMutableSource:dh,useSyncExternalStore:hh,useId:Ch,unstable_isNewReconciler:!1};function si(t,n){try{var i="",l=n;do i+=be(l),l=l.return;while(l);var d=i}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:t,source:n,stack:d,digest:null}}function Tu(t,n,i){return{value:t,source:null,stack:i??null,digest:n??null}}function wu(t,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var nv=typeof WeakMap=="function"?WeakMap:Map;function Nh(t,n,i){i=bn(-1,i),i.tag=3,i.payload={element:null};var l=n.value;return i.callback=function(){Eo||(Eo=!0,Bu=l),wu(t,n)},i}function Uh(t,n,i){i=bn(-1,i),i.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=n.value;i.payload=function(){return l(d)},i.callback=function(){wu(t,n)}}var f=t.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(i.callback=function(){wu(t,n),typeof l!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var b=n.stack;this.componentDidCatch(n.value,{componentStack:b!==null?b:""})}),i}function Ih(t,n,i){var l=t.pingCache;if(l===null){l=t.pingCache=new nv;var d=new Set;l.set(n,d)}else d=l.get(n),d===void 0&&(d=new Set,l.set(n,d));d.has(i)||(d.add(i),t=vv.bind(null,t,n,i),n.then(t,t))}function Dh(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function Oh(t,n,i,l,d){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=bn(-1,1),n.tag=2,Xn(i,n,1))),i.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var av=k.ReactCurrentOwner,_r=!1;function cr(t,n,i,l){n.child=t===null?uh(n,null,i,l):ai(n,t.child,i,l)}function kh(t,n,i,l,d){i=i.render;var f=n.ref;return ni(n,d),l=xu(t,n,i,l,f,d),i=yu(),t!==null&&!_r?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~d,Mn(t,n,d)):(Ct&&i&&eu(n),n.flags|=1,cr(t,n,l,d),n.child)}function Fh(t,n,i,l,d){if(t===null){var f=i.type;return typeof f=="function"&&!Yu(f)&&f.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=f,zh(t,n,f,l,d)):(t=Lo(i.type,null,l,n,n.mode,d),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,(t.lanes&d)===0){var b=f.memoizedProps;if(i=i.compare,i=i!==null?i:es,i(b,l)&&t.ref===n.ref)return Mn(t,n,d)}return n.flags|=1,t=Kn(f,l),t.ref=n.ref,t.return=n,n.child=t}function zh(t,n,i,l,d){if(t!==null){var f=t.memoizedProps;if(es(f,l)&&t.ref===n.ref)if(_r=!1,n.pendingProps=l=f,(t.lanes&d)!==0)(t.flags&131072)!==0&&(_r=!0);else return n.lanes=t.lanes,Mn(t,n,d)}return Au(t,n,i,l,d)}function Bh(t,n,i){var l=n.pendingProps,d=l.children,f=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Et(li,Rr),Rr|=i;else{if((i&1073741824)===0)return t=f!==null?f.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Et(li,Rr),Rr|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=f!==null?f.baseLanes:i,Et(li,Rr),Rr|=l}else f!==null?(l=f.baseLanes|i,n.memoizedState=null):l=i,Et(li,Rr),Rr|=l;return cr(t,n,d,i),n.child}function Hh(t,n){var i=n.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Au(t,n,i,l,d){var f=vr(i)?ma:ar.current;return f=Qa(n,f),ni(n,d),i=xu(t,n,i,l,f,d),l=yu(),t!==null&&!_r?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~d,Mn(t,n,d)):(Ct&&l&&eu(n),n.flags|=1,cr(t,n,i,d),n.child)}function Vh(t,n,i,l,d){if(vr(i)){var f=!0;eo(n)}else f=!1;if(ni(n,d),n.stateNode===null)xo(t,n),ih(n,i,l),hu(n,i,l,d),l=!0;else if(t===null){var b=n.stateNode,N=n.memoizedProps;b.props=N;var B=b.context,ae=i.contextType;typeof ae=="object"&&ae!==null?ae=Or(ae):(ae=vr(i)?ma:ar.current,ae=Qa(n,ae));var xe=i.getDerivedStateFromProps,Se=typeof xe=="function"||typeof b.getSnapshotBeforeUpdate=="function";Se||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(N!==l||B!==ae)&&sh(n,b,l,ae),Gn=!1;var _e=n.memoizedState;b.state=_e,lo(n,l,b,d),B=n.memoizedState,N!==l||_e!==B||gr.current||Gn?(typeof xe=="function"&&(du(n,i,xe,l),B=n.memoizedState),(N=Gn||ah(n,i,N,l,_e,B,ae))?(Se||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(n.flags|=4194308)):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=B),b.props=l,b.state=B,b.context=ae,l=N):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{b=n.stateNode,eh(t,n),N=n.memoizedProps,ae=n.type===n.elementType?N:Yr(n.type,N),b.props=ae,Se=n.pendingProps,_e=b.context,B=i.contextType,typeof B=="object"&&B!==null?B=Or(B):(B=vr(i)?ma:ar.current,B=Qa(n,B));var ze=i.getDerivedStateFromProps;(xe=typeof ze=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(N!==Se||_e!==B)&&sh(n,b,l,B),Gn=!1,_e=n.memoizedState,b.state=_e,lo(n,l,b,d);var He=n.memoizedState;N!==Se||_e!==He||gr.current||Gn?(typeof ze=="function"&&(du(n,i,ze,l),He=n.memoizedState),(ae=Gn||ah(n,i,ae,l,_e,He,B)||!1)?(xe||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(l,He,B),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(l,He,B)),typeof b.componentDidUpdate=="function"&&(n.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof b.componentDidUpdate!="function"||N===t.memoizedProps&&_e===t.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&_e===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=He),b.props=l,b.state=He,b.context=B,l=ae):(typeof b.componentDidUpdate!="function"||N===t.memoizedProps&&_e===t.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&_e===t.memoizedState||(n.flags|=1024),l=!1)}return Cu(t,n,i,l,f,d)}function Cu(t,n,i,l,d,f){Hh(t,n);var b=(n.flags&128)!==0;if(!l&&!b)return d&&jd(n,i,!1),Mn(t,n,f);l=n.stateNode,av.current=n;var N=b&&typeof i.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&b?(n.child=ai(n,t.child,null,f),n.child=ai(n,null,N,f)):cr(t,n,N,f),n.memoizedState=l.state,d&&jd(n,i,!0),n.child}function Wh(t){var n=t.stateNode;n.pendingContext?Gd(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Gd(t,n.context,!1),fu(t,n.containerInfo)}function Gh(t,n,i,l,d){return ti(),au(d),n.flags|=256,cr(t,n,i,l),n.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Lu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xh(t,n,i){var l=n.pendingProps,d=Pt.current,f=!1,b=(n.flags&128)!==0,N;if((N=b)||(N=t!==null&&t.memoizedState===null?!1:(d&2)!==0),N?(f=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Et(Pt,d&1),t===null)return nu(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(b=l.children,t=l.fallback,f?(l=n.mode,f=n.child,b={mode:"hidden",children:b},(l&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=b):f=Po(b,l,0,null),t=Ta(t,l,i,null),f.return=n,t.return=n,f.sibling=t,n.child=f,n.child.memoizedState=Lu(i),n.memoizedState=Ru,t):Pu(n,b));if(d=t.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return iv(t,n,b,l,N,d,i);if(f){f=l.fallback,b=n.mode,d=t.child,N=d.sibling;var B={mode:"hidden",children:l.children};return(b&1)===0&&n.child!==d?(l=n.child,l.childLanes=0,l.pendingProps=B,n.deletions=null):(l=Kn(d,B),l.subtreeFlags=d.subtreeFlags&14680064),N!==null?f=Kn(N,f):(f=Ta(f,b,i,null),f.flags|=2),f.return=n,l.return=n,l.sibling=f,n.child=l,l=f,f=n.child,b=t.child.memoizedState,b=b===null?Lu(i):{baseLanes:b.baseLanes|i,cachePool:null,transitions:b.transitions},f.memoizedState=b,f.childLanes=t.childLanes&~i,n.memoizedState=Ru,l}return f=t.child,t=f.sibling,l=Kn(f,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=i),l.return=n,l.sibling=null,t!==null&&(i=n.deletions,i===null?(n.deletions=[t],n.flags|=16):i.push(t)),n.child=l,n.memoizedState=null,l}function Pu(t,n){return n=Po({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function _o(t,n,i,l){return l!==null&&au(l),ai(n,t.child,null,i),t=Pu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function iv(t,n,i,l,d,f,b){if(i)return n.flags&256?(n.flags&=-257,l=Tu(Error(r(422))),_o(t,n,b,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(f=l.fallback,d=n.mode,l=Po({mode:"visible",children:l.children},d,0,null),f=Ta(f,d,b,null),f.flags|=2,l.return=n,f.return=n,l.sibling=f,n.child=l,(n.mode&1)!==0&&ai(n,t.child,null,b),n.child.memoizedState=Lu(b),n.memoizedState=Ru,f);if((n.mode&1)===0)return _o(t,n,b,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var N=l.dgst;return l=N,f=Error(r(419)),l=Tu(f,l,void 0),_o(t,n,b,l)}if(N=(b&t.childLanes)!==0,_r||N){if(l=Kt,l!==null){switch(b&-b){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|b))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Sn(t,d),Jr(l,t,d,-1))}return ju(),l=Tu(Error(r(421))),_o(t,n,b,l)}return d.data==="$?"?(n.flags|=128,n.child=t.child,n=_v.bind(null,t),d._reactRetry=n,null):(t=f.treeContext,Cr=Bn(d.nextSibling),Ar=n,Ct=!0,jr=null,t!==null&&(Ir[Dr++]=xn,Ir[Dr++]=yn,Ir[Dr++]=ga,xn=t.id,yn=t.overflow,ga=n),n=Pu(n,l.children),n.flags|=4096,n)}function jh(t,n,i){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),lu(t.return,n,i)}function Nu(t,n,i,l,d){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:d}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=i,f.tailMode=d)}function Yh(t,n,i){var l=n.pendingProps,d=l.revealOrder,f=l.tail;if(cr(t,n,l.children,i),l=Pt.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jh(t,i,n);else if(t.tag===19)jh(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Et(Pt,l),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(i=n.child,d=null;i!==null;)t=i.alternate,t!==null&&ho(t)===null&&(d=i),i=i.sibling;i=d,i===null?(d=n.child,n.child=null):(d=i.sibling,i.sibling=null),Nu(n,!1,d,i,f);break;case"backwards":for(i=null,d=n.child,n.child=null;d!==null;){if(t=d.alternate,t!==null&&ho(t)===null){n.child=d;break}t=d.sibling,d.sibling=i,i=d,d=t}Nu(n,!0,i,null,f);break;case"together":Nu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function xo(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function Mn(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Sa|=n.lanes,(i&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,i=Kn(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=Kn(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function sv(t,n,i){switch(n.tag){case 3:Wh(n),ti();break;case 5:ch(n);break;case 1:vr(n.type)&&eo(n);break;case 4:fu(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,d=n.memoizedProps.value;Et(io,l._currentValue),l._currentValue=d;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Et(Pt,Pt.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?Xh(t,n,i):(Et(Pt,Pt.current&1),t=Mn(t,n,i),t!==null?t.sibling:null);Et(Pt,Pt.current&1);break;case 19:if(l=(i&n.childLanes)!==0,(t.flags&128)!==0){if(l)return Yh(t,n,i);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Et(Pt,Pt.current),l)break;return null;case 22:case 23:return n.lanes=0,Bh(t,n,i)}return Mn(t,n,i)}var qh,Uu,Zh,Jh;qh=function(t,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Uu=function(){},Zh=function(t,n,i,l){var d=t.memoizedProps;if(d!==l){t=n.stateNode,xa(un.current);var f=null;switch(i){case"input":d=Xe(t,d),l=Xe(t,l),f=[];break;case"select":d=A({},d,{value:void 0}),l=A({},l,{value:void 0}),f=[];break;case"textarea":d=Ye(t,d),l=Ye(t,l),f=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Ks)}Pe(i,l);var b;i=null;for(ae in d)if(!l.hasOwnProperty(ae)&&d.hasOwnProperty(ae)&&d[ae]!=null)if(ae==="style"){var N=d[ae];for(b in N)N.hasOwnProperty(b)&&(i||(i={}),i[b]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?f||(f=[]):(f=f||[]).push(ae,null));for(ae in l){var B=l[ae];if(N=d?.[ae],l.hasOwnProperty(ae)&&B!==N&&(B!=null||N!=null))if(ae==="style")if(N){for(b in N)!N.hasOwnProperty(b)||B&&B.hasOwnProperty(b)||(i||(i={}),i[b]="");for(b in B)B.hasOwnProperty(b)&&N[b]!==B[b]&&(i||(i={}),i[b]=B[b])}else i||(f||(f=[]),f.push(ae,i)),i=B;else ae==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(f=f||[]).push(ae,B)):ae==="children"?typeof B!="string"&&typeof B!="number"||(f=f||[]).push(ae,""+B):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(B!=null&&ae==="onScroll"&&Tt("scroll",t),f||N===B||(f=[])):(f=f||[]).push(ae,B))}i&&(f=f||[]).push("style",i);var ae=f;(n.updateQueue=ae)&&(n.flags|=4)}},Jh=function(t,n,i,l){i!==l&&(n.flags|=4)};function ms(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function sr(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,l=0;if(n)for(var d=t.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=i,n}function ov(t,n,i){var l=n.pendingProps;switch(tu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sr(n),null;case 1:return vr(n.type)&&$s(),sr(n),null;case 3:return l=n.stateNode,ii(),wt(gr),wt(ar),gu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ao(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jr!==null&&(Wu(jr),jr=null))),Uu(t,n),sr(n),null;case 5:pu(n);var d=xa(cs.current);if(i=n.type,t!==null&&n.stateNode!=null)Zh(t,n,i,l,d),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(r(166));return sr(n),null}if(t=xa(un.current),ao(n)){l=n.stateNode,i=n.type;var f=n.memoizedProps;switch(l[ln]=n,l[is]=f,t=(n.mode&1)!==0,i){case"dialog":Tt("cancel",l),Tt("close",l);break;case"iframe":case"object":case"embed":Tt("load",l);break;case"video":case"audio":for(d=0;d<rs.length;d++)Tt(rs[d],l);break;case"source":Tt("error",l);break;case"img":case"image":case"link":Tt("error",l),Tt("load",l);break;case"details":Tt("toggle",l);break;case"input":et(l,f),Tt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!f.multiple},Tt("invalid",l);break;case"textarea":L(l,f),Tt("invalid",l)}Pe(i,f),d=null;for(var b in f)if(f.hasOwnProperty(b)){var N=f[b];b==="children"?typeof N=="string"?l.textContent!==N&&(f.suppressHydrationWarning!==!0&&Js(l.textContent,N,t),d=["children",N]):typeof N=="number"&&l.textContent!==""+N&&(f.suppressHydrationWarning!==!0&&Js(l.textContent,N,t),d=["children",""+N]):o.hasOwnProperty(b)&&N!=null&&b==="onScroll"&&Tt("scroll",l)}switch(i){case"input":rt(l),ke(l,f,!0);break;case"textarea":rt(l),j(l);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(l.onclick=Ks)}l=d,n.updateQueue=l,l!==null&&(n.flags|=4)}else{b=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ve(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=b.createElement(i,{is:l.is}):(t=b.createElement(i),i==="select"&&(b=t,l.multiple?b.multiple=!0:l.size&&(b.size=l.size))):t=b.createElementNS(t,i),t[ln]=n,t[is]=l,qh(t,n,!1,!1),n.stateNode=t;e:{switch(b=Qe(i,l),i){case"dialog":Tt("cancel",t),Tt("close",t),d=l;break;case"iframe":case"object":case"embed":Tt("load",t),d=l;break;case"video":case"audio":for(d=0;d<rs.length;d++)Tt(rs[d],t);d=l;break;case"source":Tt("error",t),d=l;break;case"img":case"image":case"link":Tt("error",t),Tt("load",t),d=l;break;case"details":Tt("toggle",t),d=l;break;case"input":et(t,l),d=Xe(t,l),Tt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=A({},l,{value:void 0}),Tt("invalid",t);break;case"textarea":L(t,l),d=Ye(t,l),Tt("invalid",t);break;default:d=l}Pe(i,d),N=d;for(f in N)if(N.hasOwnProperty(f)){var B=N[f];f==="style"?Le(t,B):f==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&De(t,B)):f==="children"?typeof B=="string"?(i!=="textarea"||B!=="")&&ye(t,B):typeof B=="number"&&ye(t,""+B):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?B!=null&&f==="onScroll"&&Tt("scroll",t):B!=null&&w(t,f,B,b))}switch(i){case"input":rt(t),ke(t,l,!1);break;case"textarea":rt(t),j(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,f=l.value,f!=null?qe(t,!!l.multiple,f,!1):l.defaultValue!=null&&qe(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Ks)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return sr(n),null;case 6:if(t&&n.stateNode!=null)Jh(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(i=xa(cs.current),xa(un.current),ao(n)){if(l=n.stateNode,i=n.memoizedProps,l[ln]=n,(f=l.nodeValue!==i)&&(t=Ar,t!==null))switch(t.tag){case 3:Js(l.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Js(l.nodeValue,i,(t.mode&1)!==0)}f&&(n.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[ln]=n,n.stateNode=l}return sr(n),null;case 13:if(wt(Pt),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ct&&Cr!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Qd(),ti(),n.flags|=98560,f=!1;else if(f=ao(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[ln]=n}else ti(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sr(n),f=!1}else jr!==null&&(Wu(jr),jr=null),f=!0;if(!f)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(Pt.current&1)!==0?Gt===0&&(Gt=3):ju())),n.updateQueue!==null&&(n.flags|=4),sr(n),null);case 4:return ii(),Uu(t,n),t===null&&ns(n.stateNode.containerInfo),sr(n),null;case 10:return ou(n.type._context),sr(n),null;case 17:return vr(n.type)&&$s(),sr(n),null;case 19:if(wt(Pt),f=n.memoizedState,f===null)return sr(n),null;if(l=(n.flags&128)!==0,b=f.rendering,b===null)if(l)ms(f,!1);else{if(Gt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(b=ho(t),b!==null){for(n.flags|=128,ms(f,!1),l=b.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=i,i=n.child;i!==null;)f=i,t=l,f.flags&=14680066,b=f.alternate,b===null?(f.childLanes=0,f.lanes=t,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=b.childLanes,f.lanes=b.lanes,f.child=b.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=b.memoizedProps,f.memoizedState=b.memoizedState,f.updateQueue=b.updateQueue,f.type=b.type,t=b.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return Et(Pt,Pt.current&1|2),n.child}t=t.sibling}f.tail!==null&&Ve()>ui&&(n.flags|=128,l=!0,ms(f,!1),n.lanes=4194304)}else{if(!l)if(t=ho(b),t!==null){if(n.flags|=128,l=!0,i=t.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),ms(f,!0),f.tail===null&&f.tailMode==="hidden"&&!b.alternate&&!Ct)return sr(n),null}else 2*Ve()-f.renderingStartTime>ui&&i!==1073741824&&(n.flags|=128,l=!0,ms(f,!1),n.lanes=4194304);f.isBackwards?(b.sibling=n.child,n.child=b):(i=f.last,i!==null?i.sibling=b:n.child=b,f.last=b)}return f.tail!==null?(n=f.tail,f.rendering=n,f.tail=n.sibling,f.renderingStartTime=Ve(),n.sibling=null,i=Pt.current,Et(Pt,l?i&1|2:i&1),n):(sr(n),null);case 22:case 23:return Xu(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(Rr&1073741824)!==0&&(sr(n),n.subtreeFlags&6&&(n.flags|=8192)):sr(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function lv(t,n){switch(tu(n),n.tag){case 1:return vr(n.type)&&$s(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ii(),wt(gr),wt(ar),gu(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return pu(n),null;case 13:if(wt(Pt),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ti()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return wt(Pt),null;case 4:return ii(),null;case 10:return ou(n.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var yo=!1,or=!1,uv=typeof WeakSet=="function"?WeakSet:Set,Be=null;function oi(t,n){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){Dt(t,n,l)}else i.current=null}function Kh(t,n,i){try{i()}catch(l){Dt(t,n,l)}}var Qh=!1;function cv(t,n){if(jl=zs,t=Cd(),Fl(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var d=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break e}var b=0,N=-1,B=-1,ae=0,xe=0,Se=t,_e=null;t:for(;;){for(var ze;Se!==i||d!==0&&Se.nodeType!==3||(N=b+d),Se!==f||l!==0&&Se.nodeType!==3||(B=b+l),Se.nodeType===3&&(b+=Se.nodeValue.length),(ze=Se.firstChild)!==null;)_e=Se,Se=ze;for(;;){if(Se===t)break t;if(_e===i&&++ae===d&&(N=b),_e===f&&++xe===l&&(B=b),(ze=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=ze}i=N===-1||B===-1?null:{start:N,end:B}}else i=null}i=i||{start:0,end:0}}else i=null;for(Yl={focusedElem:t,selectionRange:i},zs=!1,Be=n;Be!==null;)if(n=Be,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Be=t;else for(;Be!==null;){n=Be;try{var He=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var We=He.memoizedProps,Ft=He.memoizedState,Y=n.stateNode,V=Y.getSnapshotBeforeUpdate(n.elementType===n.type?We:Yr(n.type,We),Ft);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var J=n.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(Ee){Dt(n,n.return,Ee)}if(t=n.sibling,t!==null){t.return=n.return,Be=t;break}Be=n.return}return He=Qh,Qh=!1,He}function gs(t,n,i){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var f=d.destroy;d.destroy=void 0,f!==void 0&&Kh(n,i,f)}d=d.next}while(d!==l)}}function So(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var l=i.create;i.destroy=l()}i=i.next}while(i!==n)}}function Iu(t){var n=t.ref;if(n!==null){var i=t.stateNode;t.tag,t=i,typeof n=="function"?n(t):n.current=t}}function $h(t){var n=t.alternate;n!==null&&(t.alternate=null,$h(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[ln],delete n[is],delete n[Kl],delete n[jg],delete n[Yg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ef(t){return t.tag===5||t.tag===3||t.tag===4}function tf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ef(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Du(t,n,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(t,n):i.insertBefore(t,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(t,i)):(n=i,n.appendChild(t)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Ks));else if(l!==4&&(t=t.child,t!==null))for(Du(t,n,i),t=t.sibling;t!==null;)Du(t,n,i),t=t.sibling}function Ou(t,n,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Ou(t,n,i),t=t.sibling;t!==null;)Ou(t,n,i),t=t.sibling}var rr=null,qr=!1;function jn(t,n,i){for(i=i.child;i!==null;)rf(t,n,i),i=i.sibling}function rf(t,n,i){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(lt,i)}catch{}switch(i.tag){case 5:or||oi(i,n);case 6:var l=rr,d=qr;rr=null,jn(t,n,i),rr=l,qr=d,rr!==null&&(qr?(t=rr,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):rr.removeChild(i.stateNode));break;case 18:rr!==null&&(qr?(t=rr,i=i.stateNode,t.nodeType===8?Jl(t.parentNode,i):t.nodeType===1&&Jl(t,i),qi(t)):Jl(rr,i.stateNode));break;case 4:l=rr,d=qr,rr=i.stateNode.containerInfo,qr=!0,jn(t,n,i),rr=l,qr=d;break;case 0:case 11:case 14:case 15:if(!or&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var f=d,b=f.destroy;f=f.tag,b!==void 0&&((f&2)!==0||(f&4)!==0)&&Kh(i,n,b),d=d.next}while(d!==l)}jn(t,n,i);break;case 1:if(!or&&(oi(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(N){Dt(i,n,N)}jn(t,n,i);break;case 21:jn(t,n,i);break;case 22:i.mode&1?(or=(l=or)||i.memoizedState!==null,jn(t,n,i),or=l):jn(t,n,i);break;default:jn(t,n,i)}}function nf(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new uv),n.forEach(function(l){var d=xv.bind(null,t,l);i.has(l)||(i.add(l),l.then(d,d))})}}function Zr(t,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var d=i[l];try{var f=t,b=n,N=b;e:for(;N!==null;){switch(N.tag){case 5:rr=N.stateNode,qr=!1;break e;case 3:rr=N.stateNode.containerInfo,qr=!0;break e;case 4:rr=N.stateNode.containerInfo,qr=!0;break e}N=N.return}if(rr===null)throw Error(r(160));rf(f,b,d),rr=null,qr=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(ae){Dt(d,n,ae)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)af(n,t),n=n.sibling}function af(t,n){var i=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zr(n,t),dn(t),l&4){try{gs(3,t,t.return),So(3,t)}catch(We){Dt(t,t.return,We)}try{gs(5,t,t.return)}catch(We){Dt(t,t.return,We)}}break;case 1:Zr(n,t),dn(t),l&512&&i!==null&&oi(i,i.return);break;case 5:if(Zr(n,t),dn(t),l&512&&i!==null&&oi(i,i.return),t.flags&32){var d=t.stateNode;try{ye(d,"")}catch(We){Dt(t,t.return,We)}}if(l&4&&(d=t.stateNode,d!=null)){var f=t.memoizedProps,b=i!==null?i.memoizedProps:f,N=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{N==="input"&&f.type==="radio"&&f.name!=null&&je(d,f),Qe(N,b);var ae=Qe(N,f);for(b=0;b<B.length;b+=2){var xe=B[b],Se=B[b+1];xe==="style"?Le(d,Se):xe==="dangerouslySetInnerHTML"?De(d,Se):xe==="children"?ye(d,Se):w(d,xe,Se,ae)}switch(N){case"input":vt(d,f);break;case"textarea":M(d,f);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ze=f.value;ze!=null?qe(d,!!f.multiple,ze,!1):_e!==!!f.multiple&&(f.defaultValue!=null?qe(d,!!f.multiple,f.defaultValue,!0):qe(d,!!f.multiple,f.multiple?[]:"",!1))}d[is]=f}catch(We){Dt(t,t.return,We)}}break;case 6:if(Zr(n,t),dn(t),l&4){if(t.stateNode===null)throw Error(r(162));d=t.stateNode,f=t.memoizedProps;try{d.nodeValue=f}catch(We){Dt(t,t.return,We)}}break;case 3:if(Zr(n,t),dn(t),l&4&&i!==null&&i.memoizedState.isDehydrated)try{qi(n.containerInfo)}catch(We){Dt(t,t.return,We)}break;case 4:Zr(n,t),dn(t);break;case 13:Zr(n,t),dn(t),d=t.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(zu=Ve())),l&4&&nf(t);break;case 22:if(xe=i!==null&&i.memoizedState!==null,t.mode&1?(or=(ae=or)||xe,Zr(n,t),or=ae):Zr(n,t),dn(t),l&8192){if(ae=t.memoizedState!==null,(t.stateNode.isHidden=ae)&&!xe&&(t.mode&1)!==0)for(Be=t,xe=t.child;xe!==null;){for(Se=Be=xe;Be!==null;){switch(_e=Be,ze=_e.child,_e.tag){case 0:case 11:case 14:case 15:gs(4,_e,_e.return);break;case 1:oi(_e,_e.return);var He=_e.stateNode;if(typeof He.componentWillUnmount=="function"){l=_e,i=_e.return;try{n=l,He.props=n.memoizedProps,He.state=n.memoizedState,He.componentWillUnmount()}catch(We){Dt(l,i,We)}}break;case 5:oi(_e,_e.return);break;case 22:if(_e.memoizedState!==null){lf(Se);continue}}ze!==null?(ze.return=_e,Be=ze):lf(Se)}xe=xe.sibling}e:for(xe=null,Se=t;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,ae?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(N=Se.stateNode,B=Se.memoizedProps.style,b=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=he("display",b))}catch(We){Dt(t,t.return,We)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ae?"":Se.memoizedProps}catch(We){Dt(t,t.return,We)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Zr(n,t),dn(t),l&4&&nf(t);break;case 21:break;default:Zr(n,t),dn(t)}}function dn(t){var n=t.flags;if(n&2){try{e:{for(var i=t.return;i!==null;){if(ef(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(ye(d,""),l.flags&=-33);var f=tf(t);Ou(t,f,d);break;case 3:case 4:var b=l.stateNode.containerInfo,N=tf(t);Du(t,N,b);break;default:throw Error(r(161))}}catch(B){Dt(t,t.return,B)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function dv(t,n,i){Be=t,sf(t)}function sf(t,n,i){for(var l=(t.mode&1)!==0;Be!==null;){var d=Be,f=d.child;if(d.tag===22&&l){var b=d.memoizedState!==null||yo;if(!b){var N=d.alternate,B=N!==null&&N.memoizedState!==null||or;N=yo;var ae=or;if(yo=b,(or=B)&&!ae)for(Be=d;Be!==null;)b=Be,B=b.child,b.tag===22&&b.memoizedState!==null?uf(d):B!==null?(B.return=b,Be=B):uf(d);for(;f!==null;)Be=f,sf(f),f=f.sibling;Be=d,yo=N,or=ae}of(t)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,Be=f):of(t)}}function of(t){for(;Be!==null;){var n=Be;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:or||So(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!or)if(i===null)l.componentDidMount();else{var d=n.elementType===n.type?i.memoizedProps:Yr(n.type,i.memoizedProps);l.componentDidUpdate(d,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var f=n.updateQueue;f!==null&&rh(n,f,l);break;case 3:var b=n.updateQueue;if(b!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}rh(n,b,i)}break;case 5:var N=n.stateNode;if(i===null&&n.flags&4){i=N;var B=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&i.focus();break;case"img":B.src&&(i.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var ae=n.alternate;if(ae!==null){var xe=ae.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&qi(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}or||n.flags&512&&Iu(n)}catch(_e){Dt(n,n.return,_e)}}if(n===t){Be=null;break}if(i=n.sibling,i!==null){i.return=n.return,Be=i;break}Be=n.return}}function lf(t){for(;Be!==null;){var n=Be;if(n===t){Be=null;break}var i=n.sibling;if(i!==null){i.return=n.return,Be=i;break}Be=n.return}}function uf(t){for(;Be!==null;){var n=Be;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{So(4,n)}catch(B){Dt(n,i,B)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var d=n.return;try{l.componentDidMount()}catch(B){Dt(n,d,B)}}var f=n.return;try{Iu(n)}catch(B){Dt(n,f,B)}break;case 5:var b=n.return;try{Iu(n)}catch(B){Dt(n,b,B)}}}catch(B){Dt(n,n.return,B)}if(n===t){Be=null;break}var N=n.sibling;if(N!==null){N.return=n.return,Be=N;break}Be=n.return}}var hv=Math.ceil,bo=k.ReactCurrentDispatcher,ku=k.ReactCurrentOwner,Fr=k.ReactCurrentBatchConfig,_t=0,Kt=null,Bt=null,nr=0,Rr=0,li=Hn(0),Gt=0,vs=null,Sa=0,Mo=0,Fu=0,_s=null,xr=null,zu=0,ui=1/0,En=null,Eo=!1,Bu=null,Yn=null,To=!1,qn=null,wo=0,xs=0,Hu=null,Ao=-1,Co=0;function dr(){return(_t&6)!==0?Ve():Ao!==-1?Ao:Ao=Ve()}function Zn(t){return(t.mode&1)===0?1:(_t&2)!==0&&nr!==0?nr&-nr:Zg.transition!==null?(Co===0&&(Co=$c()),Co):(t=St,t!==0||(t=window.event,t=t===void 0?16:ld(t.type)),t)}function Jr(t,n,i,l){if(50<xs)throw xs=0,Hu=null,Error(r(185));Wi(t,i,l),((_t&2)===0||t!==Kt)&&(t===Kt&&((_t&2)===0&&(Mo|=i),Gt===4&&Jn(t,nr)),yr(t,l),i===1&&_t===0&&(n.mode&1)===0&&(ui=Ve()+500,to&&Wn()))}function yr(t,n){var i=t.callbackNode;bl(t,n);var l=Zt(t,t===Kt?nr:0);if(l===0)i!==null&&tt(i),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(i!=null&&tt(i),n===1)t.tag===0?qg(df.bind(null,t)):Yd(df.bind(null,t)),Gg(function(){(_t&6)===0&&Wn()}),i=null;else{switch(ed(l)){case 1:i=It;break;case 4:i=At;break;case 16:i=tr;break;case 536870912:i=Lt;break;default:i=tr}i=xf(i,cf.bind(null,t))}t.callbackPriority=n,t.callbackNode=i}}function cf(t,n){if(Ao=-1,Co=0,(_t&6)!==0)throw Error(r(327));var i=t.callbackNode;if(ci()&&t.callbackNode!==i)return null;var l=Zt(t,t===Kt?nr:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||n)n=Ro(t,l);else{n=l;var d=_t;_t|=2;var f=ff();(Kt!==t||nr!==n)&&(En=null,ui=Ve()+500,Ma(t,n));do try{mv();break}catch(N){hf(t,N)}while(!0);su(),bo.current=f,_t=d,Bt!==null?n=0:(Kt=null,nr=0,n=Gt)}if(n!==0){if(n===2&&(d=Va(t),d!==0&&(l=d,n=Vu(t,d))),n===1)throw i=vs,Ma(t,0),Jn(t,l),yr(t,Ve()),i;if(n===6)Jn(t,l);else{if(d=t.current.alternate,(l&30)===0&&!fv(d)&&(n=Ro(t,l),n===2&&(f=Va(t),f!==0&&(l=f,n=Vu(t,f))),n===1))throw i=vs,Ma(t,0),Jn(t,l),yr(t,Ve()),i;switch(t.finishedWork=d,t.finishedLanes=l,n){case 0:case 1:throw Error(r(345));case 2:Ea(t,xr,En);break;case 3:if(Jn(t,l),(l&130023424)===l&&(n=zu+500-Ve(),10<n)){if(Zt(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){dr(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Zl(Ea.bind(null,t,xr,En),n);break}Ea(t,xr,En);break;case 4:if(Jn(t,l),(l&4194240)===l)break;for(n=t.eventTimes,d=-1;0<l;){var b=31-Vt(l);f=1<<b,b=n[b],b>d&&(d=b),l&=~f}if(l=d,l=Ve()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*hv(l/1960))-l,10<l){t.timeoutHandle=Zl(Ea.bind(null,t,xr,En),l);break}Ea(t,xr,En);break;case 5:Ea(t,xr,En);break;default:throw Error(r(329))}}}return yr(t,Ve()),t.callbackNode===i?cf.bind(null,t):null}function Vu(t,n){var i=_s;return t.current.memoizedState.isDehydrated&&(Ma(t,n).flags|=256),t=Ro(t,n),t!==2&&(n=xr,xr=i,n!==null&&Wu(n)),t}function Wu(t){xr===null?xr=t:xr.push.apply(xr,t)}function fv(t){for(var n=t;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var d=i[l],f=d.getSnapshot;d=d.value;try{if(!Xr(f(),d))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jn(t,n){for(n&=~Fu,n&=~Mo,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var i=31-Vt(n),l=1<<i;t[i]=-1,n&=~l}}function df(t){if((_t&6)!==0)throw Error(r(327));ci();var n=Zt(t,0);if((n&1)===0)return yr(t,Ve()),null;var i=Ro(t,n);if(t.tag!==0&&i===2){var l=Va(t);l!==0&&(n=l,i=Vu(t,l))}if(i===1)throw i=vs,Ma(t,0),Jn(t,n),yr(t,Ve()),i;if(i===6)throw Error(r(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Ea(t,xr,En),yr(t,Ve()),null}function Gu(t,n){var i=_t;_t|=1;try{return t(n)}finally{_t=i,_t===0&&(ui=Ve()+500,to&&Wn())}}function ba(t){qn!==null&&qn.tag===0&&(_t&6)===0&&ci();var n=_t;_t|=1;var i=Fr.transition,l=St;try{if(Fr.transition=null,St=1,t)return t()}finally{St=l,Fr.transition=i,_t=n,(_t&6)===0&&Wn()}}function Xu(){Rr=li.current,wt(li)}function Ma(t,n){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,Wg(i)),Bt!==null)for(i=Bt.return;i!==null;){var l=i;switch(tu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&$s();break;case 3:ii(),wt(gr),wt(ar),gu();break;case 5:pu(l);break;case 4:ii();break;case 13:wt(Pt);break;case 19:wt(Pt);break;case 10:ou(l.type._context);break;case 22:case 23:Xu()}i=i.return}if(Kt=t,Bt=t=Kn(t.current,null),nr=Rr=n,Gt=0,vs=null,Fu=Mo=Sa=0,xr=_s=null,_a!==null){for(n=0;n<_a.length;n++)if(i=_a[n],l=i.interleaved,l!==null){i.interleaved=null;var d=l.next,f=i.pending;if(f!==null){var b=f.next;f.next=d,l.next=b}i.pending=l}_a=null}return t}function hf(t,n){do{var i=Bt;try{if(su(),fo.current=vo,po){for(var l=Nt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}po=!1}if(ya=0,Jt=Wt=Nt=null,ds=!1,hs=0,ku.current=null,i===null||i.return===null){Gt=1,vs=n,Bt=null;break}e:{var f=t,b=i.return,N=i,B=n;if(n=nr,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ae=B,xe=N,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ze=Dh(b);if(ze!==null){ze.flags&=-257,Oh(ze,b,N,f,n),ze.mode&1&&Ih(f,ae,n),n=ze,B=ae;var He=n.updateQueue;if(He===null){var We=new Set;We.add(B),n.updateQueue=We}else He.add(B);break e}else{if((n&1)===0){Ih(f,ae,n),ju();break e}B=Error(r(426))}}else if(Ct&&N.mode&1){var Ft=Dh(b);if(Ft!==null){(Ft.flags&65536)===0&&(Ft.flags|=256),Oh(Ft,b,N,f,n),au(si(B,N));break e}}f=B=si(B,N),Gt!==4&&(Gt=2),_s===null?_s=[f]:_s.push(f),f=b;do{switch(f.tag){case 3:f.flags|=65536,n&=-n,f.lanes|=n;var Y=Nh(f,B,n);th(f,Y);break e;case 1:N=B;var V=f.type,J=f.stateNode;if((f.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(Yn===null||!Yn.has(J)))){f.flags|=65536,n&=-n,f.lanes|=n;var Ee=Uh(f,N,n);th(f,Ee);break e}}f=f.return}while(f!==null)}mf(i)}catch(Ge){n=Ge,Bt===i&&i!==null&&(Bt=i=i.return);continue}break}while(!0)}function ff(){var t=bo.current;return bo.current=vo,t===null?vo:t}function ju(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Kt===null||(Sa&268435455)===0&&(Mo&268435455)===0||Jn(Kt,nr)}function Ro(t,n){var i=_t;_t|=2;var l=ff();(Kt!==t||nr!==n)&&(En=null,Ma(t,n));do try{pv();break}catch(d){hf(t,d)}while(!0);if(su(),_t=i,bo.current=l,Bt!==null)throw Error(r(261));return Kt=null,nr=0,Gt}function pv(){for(;Bt!==null;)pf(Bt)}function mv(){for(;Bt!==null&&!at();)pf(Bt)}function pf(t){var n=_f(t.alternate,t,Rr);t.memoizedProps=t.pendingProps,n===null?mf(t):Bt=n,ku.current=null}function mf(t){var n=t;do{var i=n.alternate;if(t=n.return,(n.flags&32768)===0){if(i=ov(i,n,Rr),i!==null){Bt=i;return}}else{if(i=lv(i,n),i!==null){i.flags&=32767,Bt=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,Bt=null;return}}if(n=n.sibling,n!==null){Bt=n;return}Bt=n=t}while(n!==null);Gt===0&&(Gt=5)}function Ea(t,n,i){var l=St,d=Fr.transition;try{Fr.transition=null,St=1,gv(t,n,i,l)}finally{Fr.transition=d,St=l}return null}function gv(t,n,i,l){do ci();while(qn!==null);if((_t&6)!==0)throw Error(r(327));i=t.finishedWork;var d=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0;var f=i.lanes|i.childLanes;if(Jm(t,f),t===Kt&&(Bt=Kt=null,nr=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||To||(To=!0,xf(tr,function(){return ci(),null})),f=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||f){f=Fr.transition,Fr.transition=null;var b=St;St=1;var N=_t;_t|=4,ku.current=null,cv(t,i),af(i,t),Og(Yl),zs=!!jl,Yl=jl=null,t.current=i,dv(i),dt(),_t=N,St=b,Fr.transition=f}else t.current=i;if(To&&(To=!1,qn=t,wo=d),f=t.pendingLanes,f===0&&(Yn=null),Bi(i.stateNode),yr(t,Ve()),n!==null)for(l=t.onRecoverableError,i=0;i<n.length;i++)d=n[i],l(d.value,{componentStack:d.stack,digest:d.digest});if(Eo)throw Eo=!1,t=Bu,Bu=null,t;return(wo&1)!==0&&t.tag!==0&&ci(),f=t.pendingLanes,(f&1)!==0?t===Hu?xs++:(xs=0,Hu=t):xs=0,Wn(),null}function ci(){if(qn!==null){var t=ed(wo),n=Fr.transition,i=St;try{if(Fr.transition=null,St=16>t?16:t,qn===null)var l=!1;else{if(t=qn,qn=null,wo=0,(_t&6)!==0)throw Error(r(331));var d=_t;for(_t|=4,Be=t.current;Be!==null;){var f=Be,b=f.child;if((Be.flags&16)!==0){var N=f.deletions;if(N!==null){for(var B=0;B<N.length;B++){var ae=N[B];for(Be=ae;Be!==null;){var xe=Be;switch(xe.tag){case 0:case 11:case 15:gs(8,xe,f)}var Se=xe.child;if(Se!==null)Se.return=xe,Be=Se;else for(;Be!==null;){xe=Be;var _e=xe.sibling,ze=xe.return;if($h(xe),xe===ae){Be=null;break}if(_e!==null){_e.return=ze,Be=_e;break}Be=ze}}}var He=f.alternate;if(He!==null){var We=He.child;if(We!==null){He.child=null;do{var Ft=We.sibling;We.sibling=null,We=Ft}while(We!==null)}}Be=f}}if((f.subtreeFlags&2064)!==0&&b!==null)b.return=f,Be=b;else e:for(;Be!==null;){if(f=Be,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:gs(9,f,f.return)}var Y=f.sibling;if(Y!==null){Y.return=f.return,Be=Y;break e}Be=f.return}}var V=t.current;for(Be=V;Be!==null;){b=Be;var J=b.child;if((b.subtreeFlags&2064)!==0&&J!==null)J.return=b,Be=J;else e:for(b=V;Be!==null;){if(N=Be,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:So(9,N)}}catch(Ge){Dt(N,N.return,Ge)}if(N===b){Be=null;break e}var Ee=N.sibling;if(Ee!==null){Ee.return=N.return,Be=Ee;break e}Be=N.return}}if(_t=d,Wn(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(lt,t)}catch{}l=!0}return l}finally{St=i,Fr.transition=n}}return!1}function gf(t,n,i){n=si(i,n),n=Nh(t,n,1),t=Xn(t,n,1),n=dr(),t!==null&&(Wi(t,1,n),yr(t,n))}function Dt(t,n,i){if(t.tag===3)gf(t,t,i);else for(;n!==null;){if(n.tag===3){gf(n,t,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Yn===null||!Yn.has(l))){t=si(i,t),t=Uh(n,t,1),n=Xn(n,t,1),t=dr(),n!==null&&(Wi(n,1,t),yr(n,t));break}}n=n.return}}function vv(t,n,i){var l=t.pingCache;l!==null&&l.delete(n),n=dr(),t.pingedLanes|=t.suspendedLanes&i,Kt===t&&(nr&i)===i&&(Gt===4||Gt===3&&(nr&130023424)===nr&&500>Ve()-zu?Ma(t,0):Fu|=i),yr(t,n)}function vf(t,n){n===0&&((t.mode&1)===0?n=1:(n=Ur,Ur<<=1,(Ur&130023424)===0&&(Ur=4194304)));var i=dr();t=Sn(t,n),t!==null&&(Wi(t,n,i),yr(t,i))}function _v(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),vf(t,i)}function xv(t,n){var i=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(i=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(n),vf(t,i)}var _f;_f=function(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps||gr.current)_r=!0;else{if((t.lanes&i)===0&&(n.flags&128)===0)return _r=!1,sv(t,n,i);_r=(t.flags&131072)!==0}else _r=!1,Ct&&(n.flags&1048576)!==0&&qd(n,no,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;xo(t,n),t=n.pendingProps;var d=Qa(n,ar.current);ni(n,i),d=xu(null,n,l,t,d,i);var f=yu();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,vr(l)?(f=!0,eo(n)):f=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,cu(n),d.updater=uo,n.stateNode=d,d._reactInternals=n,hu(n,l,t,i),n=Cu(null,n,l,!0,f,i)):(n.tag=0,Ct&&f&&eu(n),cr(null,n,d,i),n=n.child),n;case 16:l=n.elementType;e:{switch(xo(t,n),t=n.pendingProps,d=l._init,l=d(l._payload),n.type=l,d=n.tag=Sv(l),t=Yr(l,t),d){case 0:n=Au(null,n,l,t,i);break e;case 1:n=Vh(null,n,l,t,i);break e;case 11:n=kh(null,n,l,t,i);break e;case 14:n=Fh(null,n,l,Yr(l.type,t),i);break e}throw Error(r(306,l,""))}return n;case 0:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:Yr(l,d),Au(t,n,l,d,i);case 1:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:Yr(l,d),Vh(t,n,l,d,i);case 3:e:{if(Wh(n),t===null)throw Error(r(387));l=n.pendingProps,f=n.memoizedState,d=f.element,eh(t,n),lo(n,l,null,i);var b=n.memoizedState;if(l=b.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){d=si(Error(r(423)),n),n=Gh(t,n,l,i,d);break e}else if(l!==d){d=si(Error(r(424)),n),n=Gh(t,n,l,i,d);break e}else for(Cr=Bn(n.stateNode.containerInfo.firstChild),Ar=n,Ct=!0,jr=null,i=uh(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(ti(),l===d){n=Mn(t,n,i);break e}cr(t,n,l,i)}n=n.child}return n;case 5:return ch(n),t===null&&nu(n),l=n.type,d=n.pendingProps,f=t!==null?t.memoizedProps:null,b=d.children,ql(l,d)?b=null:f!==null&&ql(l,f)&&(n.flags|=32),Hh(t,n),cr(t,n,b,i),n.child;case 6:return t===null&&nu(n),null;case 13:return Xh(t,n,i);case 4:return fu(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=ai(n,null,l,i):cr(t,n,l,i),n.child;case 11:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:Yr(l,d),kh(t,n,l,d,i);case 7:return cr(t,n,n.pendingProps,i),n.child;case 8:return cr(t,n,n.pendingProps.children,i),n.child;case 12:return cr(t,n,n.pendingProps.children,i),n.child;case 10:e:{if(l=n.type._context,d=n.pendingProps,f=n.memoizedProps,b=d.value,Et(io,l._currentValue),l._currentValue=b,f!==null)if(Xr(f.value,b)){if(f.children===d.children&&!gr.current){n=Mn(t,n,i);break e}}else for(f=n.child,f!==null&&(f.return=n);f!==null;){var N=f.dependencies;if(N!==null){b=f.child;for(var B=N.firstContext;B!==null;){if(B.context===l){if(f.tag===1){B=bn(-1,i&-i),B.tag=2;var ae=f.updateQueue;if(ae!==null){ae=ae.shared;var xe=ae.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),ae.pending=B}}f.lanes|=i,B=f.alternate,B!==null&&(B.lanes|=i),lu(f.return,i,n),N.lanes|=i;break}B=B.next}}else if(f.tag===10)b=f.type===n.type?null:f.child;else if(f.tag===18){if(b=f.return,b===null)throw Error(r(341));b.lanes|=i,N=b.alternate,N!==null&&(N.lanes|=i),lu(b,i,n),b=f.sibling}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===n){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}cr(t,n,d.children,i),n=n.child}return n;case 9:return d=n.type,l=n.pendingProps.children,ni(n,i),d=Or(d),l=l(d),n.flags|=1,cr(t,n,l,i),n.child;case 14:return l=n.type,d=Yr(l,n.pendingProps),d=Yr(l.type,d),Fh(t,n,l,d,i);case 15:return zh(t,n,n.type,n.pendingProps,i);case 17:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:Yr(l,d),xo(t,n),n.tag=1,vr(l)?(t=!0,eo(n)):t=!1,ni(n,i),ih(n,l,d),hu(n,l,d,i),Cu(null,n,l,!0,t,i);case 19:return Yh(t,n,i);case 22:return Bh(t,n,i)}throw Error(r(156,n.tag))};function xf(t,n){return $e(t,n)}function yv(t,n,i,l){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zr(t,n,i,l){return new yv(t,n,i,l)}function Yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sv(t){if(typeof t=="function")return Yu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===de)return 11;if(t===ne)return 14}return 2}function Kn(t,n){var i=t.alternate;return i===null?(i=zr(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function Lo(t,n,i,l,d,f){var b=2;if(l=t,typeof t=="function")Yu(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case O:return Ta(i.children,d,f,n);case se:b=8,d|=8;break;case C:return t=zr(12,i,n,d|2),t.elementType=C,t.lanes=f,t;case q:return t=zr(13,i,n,d),t.elementType=q,t.lanes=f,t;case re:return t=zr(19,i,n,d),t.elementType=re,t.lanes=f,t;case ie:return Po(i,d,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:b=10;break e;case fe:b=9;break e;case de:b=11;break e;case ne:b=14;break e;case ge:b=16,l=null;break e}throw Error(r(130,t==null?t:typeof t,""))}return n=zr(b,i,n,d),n.elementType=t,n.type=l,n.lanes=f,n}function Ta(t,n,i,l){return t=zr(7,t,l,n),t.lanes=i,t}function Po(t,n,i,l){return t=zr(22,t,l,n),t.elementType=ie,t.lanes=i,t.stateNode={isHidden:!1},t}function qu(t,n,i){return t=zr(6,t,null,n),t.lanes=i,t}function Zu(t,n,i){return n=zr(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function bv(t,n,i,l,d){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ju(t,n,i,l,d,f,b,N,B){return t=new bv(t,n,i,N,B),n===1?(n=1,f===!0&&(n|=8)):n=0,f=zr(3,null,null,n),t.current=f,f.stateNode=t,f.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(f),t}function Mv(t,n,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:n,implementation:i}}function yf(t){if(!t)return Vn;t=t._reactInternals;e:{if(R(t)!==t||t.tag!==1)throw Error(r(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(vr(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(t.tag===1){var i=t.type;if(vr(i))return Xd(t,i,n)}return n}function Sf(t,n,i,l,d,f,b,N,B){return t=Ju(i,l,!0,t,d,f,b,N,B),t.context=yf(null),i=t.current,l=dr(),d=Zn(i),f=bn(l,d),f.callback=n??null,Xn(i,f,d),t.current.lanes=d,Wi(t,d,l),yr(t,l),t}function No(t,n,i,l){var d=n.current,f=dr(),b=Zn(d);return i=yf(i),n.context===null?n.context=i:n.pendingContext=i,n=bn(f,b),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=Xn(d,n,b),t!==null&&(Jr(t,d,b,f),oo(t,d,b)),b}function Uo(t){return t=t.current,t.child?(t.child.tag,t.child.stateNode):null}function bf(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Ku(t,n){bf(t,n),(t=t.alternate)&&bf(t,n)}function Ev(){return null}var Mf=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qu(t){this._internalRoot=t}Io.prototype.render=Qu.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));No(t,n,null,null)},Io.prototype.unmount=Qu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ba(function(){No(null,t,null,null)}),n[vn]=null}};function Io(t){this._internalRoot=t}Io.prototype.unstable_scheduleHydration=function(t){if(t){var n=nd();t={blockedOn:null,target:t,priority:n};for(var i=0;i<kn.length&&n!==0&&n<kn[i].priority;i++);kn.splice(i,0,t),i===0&&sd(t)}};function $u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Do(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ef(){}function Tv(t,n,i,l,d){if(d){if(typeof l=="function"){var f=l;l=function(){var ae=Uo(b);f.call(ae)}}var b=Sf(n,l,t,0,null,!1,!1,"",Ef);return t._reactRootContainer=b,t[vn]=b.current,ns(t.nodeType===8?t.parentNode:t),ba(),b}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var N=l;l=function(){var ae=Uo(B);N.call(ae)}}var B=Ju(t,0,!1,null,null,!1,!1,"",Ef);return t._reactRootContainer=B,t[vn]=B.current,ns(t.nodeType===8?t.parentNode:t),ba(function(){No(n,B,i,l)}),B}function Oo(t,n,i,l,d){var f=i._reactRootContainer;if(f){var b=f;if(typeof d=="function"){var N=d;d=function(){var B=Uo(b);N.call(B)}}No(n,b,t,d)}else b=Tv(i,n,t,d,l);return Uo(b)}td=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var i=gn(n.pendingLanes);i!==0&&(El(n,i|1),yr(n,Ve()),(_t&6)===0&&(ui=Ve()+500,Wn()))}break;case 13:ba(function(){var l=Sn(t,1);if(l!==null){var d=dr();Jr(l,t,1,d)}}),Ku(t,1)}},Tl=function(t){if(t.tag===13){var n=Sn(t,134217728);if(n!==null){var i=dr();Jr(n,t,134217728,i)}Ku(t,134217728)}},rd=function(t){if(t.tag===13){var n=Zn(t),i=Sn(t,n);if(i!==null){var l=dr();Jr(i,t,n,l)}Ku(t,n)}},nd=function(){return St},ad=function(t,n){var i=St;try{return St=t,n()}finally{St=i}},Te=function(t,n,i){switch(n){case"input":if(vt(t,i),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==t&&l.form===t.form){var d=Qs(l);if(!d)throw Error(r(90));K(l),vt(l,d)}}}break;case"textarea":M(t,i);break;case"select":n=i.value,n!=null&&qe(t,!!i.multiple,n,!1)}},Rt=Gu,Er=ba;var wv={usingClientEntryPoint:!1,Events:[ss,Ja,Qs,gt,yt,Gu]},ys={findFiberByHostInstance:pa,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Av={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=oe(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||Ev,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{lt=ko.inject(Av),mr=ko}catch{}}return Sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv,Sr.createPortal=function(t,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$u(n))throw Error(r(200));return Mv(t,n,null,i)},Sr.createRoot=function(t,n){if(!$u(t))throw Error(r(299));var i=!1,l="",d=Mf;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Ju(t,1,!1,null,null,i,!1,l,d),t[vn]=n.current,ns(t.nodeType===8?t.parentNode:t),new Qu(n)},Sr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=oe(n),t=t===null?null:t.stateNode,t},Sr.flushSync=function(t){return ba(t)},Sr.hydrate=function(t,n,i){if(!Do(n))throw Error(r(200));return Oo(null,t,n,!0,i)},Sr.hydrateRoot=function(t,n,i){if(!$u(t))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,d=!1,f="",b=Mf;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(f=i.identifierPrefix),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),n=Sf(n,null,t,1,i??null,d,!1,f,b),t[vn]=n.current,ns(t),l)for(t=0;t<l.length;t++)i=l[t],d=i._getVersion,d=d(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,d]:n.mutableSourceEagerHydrationData.push(i,d);return new Io(n)},Sr.render=function(t,n,i){if(!Do(n))throw Error(r(200));return Oo(null,t,n,!1,i)},Sr.unmountComponentAtNode=function(t){if(!Do(t))throw Error(r(40));return t._reactRootContainer?(ba(function(){Oo(null,null,t,!1,function(){t._reactRootContainer=null,t[vn]=null})}),!0):!1},Sr.unstable_batchedUpdates=Gu,Sr.unstable_renderSubtreeIntoContainer=function(t,n,i,l){if(!Do(i))throw Error(r(200));if(t==null||t._reactInternals===void 0)throw Error(r(38));return Oo(t,n,i,!1,l)},Sr.version="18.2.0-next-9e3b772b8-20220608",Sr}var Of;function Dv(){if(Of)return ec.exports;Of=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ec.exports=Iv(),ec.exports}var kf;function Ov(){if(kf)return Fo;kf=1;var s=Dv();return Fo.createRoot=s.createRoot,Fo.hydrateRoot=s.hydrateRoot,Fo}var kv=Ov();const Gc="155",di={ROTATE:0,DOLLY:1,PAN:2},na={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fv=0,Ff=1,zv=2,gm=1,Bv=2,Pn=3,ca=0,Mr=1,fn=2,oa=0,Pi=1,zf=2,Bf=3,Hf=4,Hv=5,Ri=100,Vv=101,Wv=102,Vf=103,Wf=104,Gv=200,Xv=201,jv=202,Yv=203,vm=204,_m=205,qv=206,Zv=207,Jv=208,Kv=209,Qv=210,$v=0,e_=1,t_=2,Ic=3,r_=4,n_=5,a_=6,i_=7,Xc=0,s_=1,o_=2,la=0,l_=1,u_=2,c_=3,d_=4,h_=5,xm=300,Ui=301,Ii=302,Dc=303,Oc=304,pl=306,kc=1e3,rn=1001,Fc=1002,fr=1003,Gf=1004,tc=1005,Hr=1006,f_=1007,Ns=1008,ua=1009,p_=1010,m_=1011,jc=1012,ym=1013,ia=1014,sa=1015,Us=1016,Sm=1017,bm=1018,Na=1020,g_=1021,nn=1023,v_=1024,__=1025,Ua=1026,Di=1027,x_=1028,Mm=1029,y_=1030,Em=1031,Tm=1033,rc=33776,nc=33777,ac=33778,ic=33779,Xf=35840,jf=35841,Yf=35842,qf=35843,S_=36196,Zf=37492,Jf=37496,Kf=37808,Qf=37809,$f=37810,ep=37811,tp=37812,rp=37813,np=37814,ap=37815,ip=37816,sp=37817,op=37818,lp=37819,up=37820,cp=37821,sc=36492,b_=36283,dp=36284,hp=36285,fp=36286,wm=3e3,Ia=3001,M_=3200,E_=3201,Am=0,T_=1,Da="",ct="srgb",pn="srgb-linear",Cm="display-p3",oc=7680,w_=519,A_=512,C_=513,R_=514,L_=515,P_=516,N_=517,U_=518,I_=519,pp=35044,mp="300 es",zc=1035,Nn=2e3,hl=2001;class Fa{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(r)===-1&&a[e].push(r)}hasEventListener(e,r){if(this._listeners===void 0)return!1;const a=this._listeners;return a[e]!==void 0&&a[e].indexOf(r)!==-1}removeEventListener(e,r){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const o=a.indexOf(r);o!==-1&&a.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const lr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cl=Math.PI/180,Bc=180/Math.PI;function Is(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(lr[s&255]+lr[s>>8&255]+lr[s>>16&255]+lr[s>>24&255]+"-"+lr[e&255]+lr[e>>8&255]+"-"+lr[e>>16&15|64]+lr[e>>24&255]+"-"+lr[r&63|128]+lr[r>>8&255]+"-"+lr[r>>16&255]+lr[r>>24&255]+lr[a&255]+lr[a>>8&255]+lr[a>>16&255]+lr[a>>24&255]).toLowerCase()}function pr(s,e,r){return Math.max(e,Math.min(r,s))}function D_(s,e){return(s%e+e)%e}function lc(s,e,r){return(1-r)*s+r*e}function gp(s){return(s&s-1)===0&&s!==0}function Hc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function br(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const O_={DEG2RAD:cl};class ot{constructor(e=0,r=0){ot.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,a=this.y,o=e.elements;return this.x=o[0]*r+o[3]*a+o[6],this.y=o[1]*r+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this}clampLength(e,r){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(r,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const a=this.dot(e)/r;return Math.acos(pr(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,a=this.y-e.y;return r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,a){return this.x=e.x+(r.x-e.x)*a,this.y=e.y+(r.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const a=Math.cos(r),o=Math.sin(r),u=this.x-e.x,h=this.y-e.y;return this.x=u*a-h*o+e.x,this.y=u*o+h*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,r,a,o,u,h,c,p,m){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,a,o,u,h,c,p,m)}set(e,r,a,o,u,h,c,p,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=c,g[3]=r,g[4]=u,g[5]=p,g[6]=a,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,a=e.elements;return r[0]=a[0],r[1]=a[1],r[2]=a[2],r[3]=a[3],r[4]=a[4],r[5]=a[5],r[6]=a[6],r[7]=a[7],r[8]=a[8],this}extractBasis(e,r,a){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const a=e.elements,o=r.elements,u=this.elements,h=a[0],c=a[3],p=a[6],m=a[1],g=a[4],y=a[7],_=a[2],S=a[5],T=a[8],E=o[0],x=o[3],v=o[6],I=o[1],w=o[4],k=o[7],D=o[2],z=o[5],O=o[8];return u[0]=h*E+c*I+p*D,u[3]=h*x+c*w+p*z,u[6]=h*v+c*k+p*O,u[1]=m*E+g*I+y*D,u[4]=m*x+g*w+y*z,u[7]=m*v+g*k+y*O,u[2]=_*E+S*I+T*D,u[5]=_*x+S*w+T*z,u[8]=_*v+S*k+T*O,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],a=e[1],o=e[2],u=e[3],h=e[4],c=e[5],p=e[6],m=e[7],g=e[8];return r*h*g-r*c*m-a*u*g+a*c*p+o*u*m-o*h*p}invert(){const e=this.elements,r=e[0],a=e[1],o=e[2],u=e[3],h=e[4],c=e[5],p=e[6],m=e[7],g=e[8],y=g*h-c*m,_=c*p-g*u,S=m*u-h*p,T=r*y+a*_+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=y*E,e[1]=(o*m-g*a)*E,e[2]=(c*a-o*h)*E,e[3]=_*E,e[4]=(g*r-o*p)*E,e[5]=(o*u-c*r)*E,e[6]=S*E,e[7]=(a*p-m*r)*E,e[8]=(h*r-a*u)*E,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,a,o,u,h,c){const p=Math.cos(u),m=Math.sin(u);return this.set(a*p,a*m,-a*(p*h+m*c)+h+e,-o*m,o*p,-o*(-m*h+p*c)+c+r,0,0,1),this}scale(e,r){return this.premultiply(uc.makeScale(e,r)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,r){return this.premultiply(uc.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),a=Math.sin(e);return this.set(r,-a,0,a,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,a=e.elements;for(let o=0;o<9;o++)if(r[o]!==a[o])return!1;return!0}fromArray(e,r=0){for(let a=0;a<9;a++)this.elements[a]=e[a+r];return this}toArray(e=[],r=0){const a=this.elements;return e[r]=a[0],e[r+1]=a[1],e[r+2]=a[2],e[r+3]=a[3],e[r+4]=a[4],e[r+5]=a[5],e[r+6]=a[6],e[r+7]=a[7],e[r+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uc=new ht;function Rm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const vp={};function Ps(s){s in vp||(vp[s]=!0,console.warn(s))}function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const k_=new ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),F_=new ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function z_(s){return s.convertSRGBToLinear().applyMatrix3(F_)}function B_(s){return s.applyMatrix3(k_).convertLinearToSRGB()}const H_={[pn]:s=>s,[ct]:s=>s.convertSRGBToLinear(),[Cm]:z_},V_={[pn]:s=>s,[ct]:s=>s.convertLinearToSRGB(),[Cm]:B_},Kr={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return pn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,r){if(this.enabled===!1||e===r||!e||!r)return s;const a=H_[e],o=V_[r];if(a===void 0||o===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${r}".`);return o(a(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let hi;class Lm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{hi===void 0&&(hi=fl("canvas")),hi.width=e.width,hi.height=e.height;const a=hi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=hi}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=fl("canvas");r.width=e.width,r.height=e.height;const a=r.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),u=o.data;for(let h=0;h<u.length;h++)u[h]=Ni(u[h]/255)*255;return a.putImageData(o,0,0),r}else if(e.data){const r=e.data.slice(0);for(let a=0;a<r.length;a++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[a]=Math.floor(Ni(r[a]/255)*255):r[a]=Ni(r[a]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let W_=0;class Pm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Is(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let h=0,c=o.length;h<c;h++)o[h].isDataTexture?u.push(dc(o[h].image)):u.push(dc(o[h]))}else u=dc(o);a.url=u}return r||(e.images[this.uuid]=a),a}}function dc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G_=0;class Nr extends Fa{constructor(e=Nr.DEFAULT_IMAGE,r=Nr.DEFAULT_MAPPING,a=rn,o=rn,u=Hr,h=Ns,c=nn,p=ua,m=Nr.DEFAULT_ANISOTROPY,g=Da){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Is(),this.name="",this.source=new Pm(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=c,this.internalFormat=null,this.type=p,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Ia?ct:Da),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),r||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?Ia:wm}set encoding(e){Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ia?ct:Da}}Nr.DEFAULT_IMAGE=null;Nr.DEFAULT_MAPPING=xm;Nr.DEFAULT_ANISOTROPY=1;class er{constructor(e=0,r=0,a=0,o=1){er.prototype.isVector4=!0,this.x=e,this.y=r,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,a,o){return this.x=e,this.y=r,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,a=this.y,o=this.z,u=this.w,h=e.elements;return this.x=h[0]*r+h[4]*a+h[8]*o+h[12]*u,this.y=h[1]*r+h[5]*a+h[9]*o+h[13]*u,this.z=h[2]*r+h[6]*a+h[10]*o+h[14]*u,this.w=h[3]*r+h[7]*a+h[11]*o+h[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,a,o,u;const h=e.elements,c=h[0],p=h[4],m=h[8],g=h[1],y=h[5],_=h[9],S=h[2],T=h[6],E=h[10];if(Math.abs(p-g)<.01&&Math.abs(m-S)<.01&&Math.abs(_-T)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+S)<.1&&Math.abs(_+T)<.1&&Math.abs(c+y+E-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const v=(c+1)/2,I=(y+1)/2,w=(E+1)/2,k=(p+g)/4,D=(m+S)/4,z=(_+T)/4;return v>I&&v>w?v<.01?(a=0,o=.707106781,u=.707106781):(a=Math.sqrt(v),o=k/a,u=D/a):I>w?I<.01?(a=.707106781,o=0,u=.707106781):(o=Math.sqrt(I),a=k/o,u=z/o):w<.01?(a=.707106781,o=.707106781,u=0):(u=Math.sqrt(w),a=D/u,o=z/u),this.set(a,o,u,r),this}let x=Math.sqrt((T-_)*(T-_)+(m-S)*(m-S)+(g-p)*(g-p));return Math.abs(x)<.001&&(x=1),this.x=(T-_)/x,this.y=(m-S)/x,this.z=(g-p)/x,this.w=Math.acos((c+y+E-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this.w=Math.max(e.w,Math.min(r.w,this.w)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this.w=Math.max(e,Math.min(r,this.w)),this}clampLength(e,r){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(r,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,a){return this.x=e.x+(r.x-e.x)*a,this.y=e.y+(r.y-e.y)*a,this.z=e.z+(r.z-e.z)*a,this.w=e.w+(r.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class X_ extends Fa{constructor(e=1,r=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=1,this.scissor=new er(0,0,e,r),this.scissorTest=!1,this.viewport=new er(0,0,e,r);const o={width:e,height:r,depth:1};a.encoding!==void 0&&(Ps("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),a.colorSpace=a.encoding===Ia?ct:Da),this.texture=new Nr(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.internalFormat=a.internalFormat!==void 0?a.internalFormat:null,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:Hr,this.depthBuffer=a.depthBuffer!==void 0?a.depthBuffer:!0,this.stencilBuffer=a.stencilBuffer!==void 0?a.stencilBuffer:!1,this.depthTexture=a.depthTexture!==void 0?a.depthTexture:null,this.samples=a.samples!==void 0?a.samples:0}setSize(e,r,a=1){(this.width!==e||this.height!==r||this.depth!==a)&&(this.width=e,this.height=r,this.depth=a,this.texture.image.width=e,this.texture.image.height=r,this.texture.image.depth=a,this.dispose()),this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const r=Object.assign({},e.texture.image);return this.texture.source=new Pm(r),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oa extends X_{constructor(e=1,r=1,a={}){super(e,r,a),this.isWebGLRenderTarget=!0}}class Nm extends Nr{constructor(e=null,r=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:a,depth:o},this.magFilter=fr,this.minFilter=fr,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class j_ extends Nr{constructor(e=null,r=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:a,depth:o},this.magFilter=fr,this.minFilter=fr,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class da{constructor(e=0,r=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=a,this._w=o}static slerpFlat(e,r,a,o,u,h,c){let p=a[o+0],m=a[o+1],g=a[o+2],y=a[o+3];const _=u[h+0],S=u[h+1],T=u[h+2],E=u[h+3];if(c===0){e[r+0]=p,e[r+1]=m,e[r+2]=g,e[r+3]=y;return}if(c===1){e[r+0]=_,e[r+1]=S,e[r+2]=T,e[r+3]=E;return}if(y!==E||p!==_||m!==S||g!==T){let x=1-c;const v=p*_+m*S+g*T+y*E,I=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const D=Math.sqrt(w),z=Math.atan2(D,v*I);x=Math.sin(x*z)/D,c=Math.sin(c*z)/D}const k=c*I;if(p=p*x+_*k,m=m*x+S*k,g=g*x+T*k,y=y*x+E*k,x===1-c){const D=1/Math.sqrt(p*p+m*m+g*g+y*y);p*=D,m*=D,g*=D,y*=D}}e[r]=p,e[r+1]=m,e[r+2]=g,e[r+3]=y}static multiplyQuaternionsFlat(e,r,a,o,u,h){const c=a[o],p=a[o+1],m=a[o+2],g=a[o+3],y=u[h],_=u[h+1],S=u[h+2],T=u[h+3];return e[r]=c*T+g*y+p*S-m*_,e[r+1]=p*T+g*_+m*y-c*S,e[r+2]=m*T+g*S+c*_-p*y,e[r+3]=g*T-c*y-p*_-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,a,o){return this._x=e,this._y=r,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r){const a=e._x,o=e._y,u=e._z,h=e._order,c=Math.cos,p=Math.sin,m=c(a/2),g=c(o/2),y=c(u/2),_=p(a/2),S=p(o/2),T=p(u/2);switch(h){case"XYZ":this._x=_*g*y+m*S*T,this._y=m*S*y-_*g*T,this._z=m*g*T+_*S*y,this._w=m*g*y-_*S*T;break;case"YXZ":this._x=_*g*y+m*S*T,this._y=m*S*y-_*g*T,this._z=m*g*T-_*S*y,this._w=m*g*y+_*S*T;break;case"ZXY":this._x=_*g*y-m*S*T,this._y=m*S*y+_*g*T,this._z=m*g*T+_*S*y,this._w=m*g*y-_*S*T;break;case"ZYX":this._x=_*g*y-m*S*T,this._y=m*S*y+_*g*T,this._z=m*g*T-_*S*y,this._w=m*g*y+_*S*T;break;case"YZX":this._x=_*g*y+m*S*T,this._y=m*S*y+_*g*T,this._z=m*g*T-_*S*y,this._w=m*g*y-_*S*T;break;case"XZY":this._x=_*g*y-m*S*T,this._y=m*S*y-_*g*T,this._z=m*g*T+_*S*y,this._w=m*g*y+_*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return r!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const a=r/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,a=r[0],o=r[4],u=r[8],h=r[1],c=r[5],p=r[9],m=r[2],g=r[6],y=r[10],_=a+c+y;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-p)*S,this._y=(u-m)*S,this._z=(h-o)*S}else if(a>c&&a>y){const S=2*Math.sqrt(1+a-c-y);this._w=(g-p)/S,this._x=.25*S,this._y=(o+h)/S,this._z=(u+m)/S}else if(c>y){const S=2*Math.sqrt(1+c-a-y);this._w=(u-m)/S,this._x=(o+h)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+y-a-c);this._w=(h-o)/S,this._x=(u+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let a=e.dot(r)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pr(this.dot(e),-1,1)))}rotateTowards(e,r){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,r/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const a=e._x,o=e._y,u=e._z,h=e._w,c=r._x,p=r._y,m=r._z,g=r._w;return this._x=a*g+h*c+o*m-u*p,this._y=o*g+h*p+u*c-a*m,this._z=u*g+h*m+a*p-o*c,this._w=h*g-a*c-o*p-u*m,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const a=this._x,o=this._y,u=this._z,h=this._w;let c=h*e._w+a*e._x+o*e._y+u*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=h,this._x=a,this._y=o,this._z=u,this;const p=1-c*c;if(p<=Number.EPSILON){const S=1-r;return this._w=S*h+r*this._w,this._x=S*a+r*this._x,this._y=S*o+r*this._y,this._z=S*u+r*this._z,this.normalize(),this._onChangeCallback(),this}const m=Math.sqrt(p),g=Math.atan2(m,c),y=Math.sin((1-r)*g)/m,_=Math.sin(r*g)/m;return this._w=h*y+this._w*_,this._x=a*y+this._x*_,this._y=o*y+this._y*_,this._z=u*y+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,r,a){return this.copy(e).slerp(r,a)}random(){const e=Math.random(),r=Math.sqrt(1-e),a=Math.sqrt(e),o=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(r*Math.cos(o),a*Math.sin(u),a*Math.cos(u),r*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,r=0,a=0){G.prototype.isVector3=!0,this.x=e,this.y=r,this.z=a}set(e,r,a){return a===void 0&&(a=this.z),this.x=e,this.y=r,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(_p.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(_p.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,a=this.y,o=this.z,u=e.elements;return this.x=u[0]*r+u[3]*a+u[6]*o,this.y=u[1]*r+u[4]*a+u[7]*o,this.z=u[2]*r+u[5]*a+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,a=this.y,o=this.z,u=e.elements,h=1/(u[3]*r+u[7]*a+u[11]*o+u[15]);return this.x=(u[0]*r+u[4]*a+u[8]*o+u[12])*h,this.y=(u[1]*r+u[5]*a+u[9]*o+u[13])*h,this.z=(u[2]*r+u[6]*a+u[10]*o+u[14])*h,this}applyQuaternion(e){const r=this.x,a=this.y,o=this.z,u=e.x,h=e.y,c=e.z,p=e.w,m=p*r+h*o-c*a,g=p*a+c*r-u*o,y=p*o+u*a-h*r,_=-u*r-h*a-c*o;return this.x=m*p+_*-u+g*-c-y*-h,this.y=g*p+_*-h+y*-u-m*-c,this.z=y*p+_*-c+m*-h-g*-u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,a=this.y,o=this.z,u=e.elements;return this.x=u[0]*r+u[4]*a+u[8]*o,this.y=u[1]*r+u[5]*a+u[9]*o,this.z=u[2]*r+u[6]*a+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this}clampLength(e,r){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(r,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,a){return this.x=e.x+(r.x-e.x)*a,this.y=e.y+(r.y-e.y)*a,this.z=e.z+(r.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const a=e.x,o=e.y,u=e.z,h=r.x,c=r.y,p=r.z;return this.x=o*p-u*c,this.y=u*h-a*p,this.z=a*c-o*h,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const a=e.dot(this)/r;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const a=this.dot(e)/r;return Math.acos(pr(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return r*r+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,a){const o=Math.sin(r)*e;return this.x=o*Math.sin(a),this.y=Math.cos(r)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,a){return this.x=e*Math.sin(r),this.y=a,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=a,this.z=o,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,r=Math.random()*Math.PI*2,a=Math.sqrt(1-e**2);return this.x=a*Math.cos(r),this.y=a*Math.sin(r),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hc=new G,_p=new da;class za{constructor(e=new G(1/0,1/0,1/0),r=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,a=e.length;r<a;r+=3)this.expandByPoint(wn.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,a=e.count;r<a;r++)this.expandByPoint(wn.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,a=e.length;r<a;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const a=wn.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),fi.copy(e.boundingBox),fi.applyMatrix4(e.matrixWorld),this.union(fi);else{const o=e.geometry;if(o!==void 0)if(r&&o.attributes!==void 0&&o.attributes.position!==void 0){const u=o.attributes.position;for(let h=0,c=u.count;h<c;h++)wn.fromBufferAttribute(u,h).applyMatrix4(e.matrixWorld),this.expandByPoint(wn)}else o.boundingBox===null&&o.computeBoundingBox(),fi.copy(o.boundingBox),fi.applyMatrix4(e.matrixWorld),this.union(fi)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],r);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,a;return e.normal.x>0?(r=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),r<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),zo.subVectors(this.max,Ms),pi.subVectors(e.a,Ms),mi.subVectors(e.b,Ms),gi.subVectors(e.c,Ms),$n.subVectors(mi,pi),ea.subVectors(gi,mi),wa.subVectors(pi,gi);let r=[0,-$n.z,$n.y,0,-ea.z,ea.y,0,-wa.z,wa.y,$n.z,0,-$n.x,ea.z,0,-ea.x,wa.z,0,-wa.x,-$n.y,$n.x,0,-ea.y,ea.x,0,-wa.y,wa.x,0];return!fc(r,pi,mi,gi,zo)||(r=[1,0,0,0,1,0,0,0,1],!fc(r,pi,mi,gi,zo))?!1:(Bo.crossVectors($n,ea),r=[Bo.x,Bo.y,Bo.z],fc(r,pi,mi,gi,zo))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new G,new G,new G,new G,new G,new G,new G,new G],wn=new G,fi=new za,pi=new G,mi=new G,gi=new G,$n=new G,ea=new G,wa=new G,Ms=new G,zo=new G,Bo=new G,Aa=new G;function fc(s,e,r,a,o){for(let u=0,h=s.length-3;u<=h;u+=3){Aa.fromArray(s,u);const c=o.x*Math.abs(Aa.x)+o.y*Math.abs(Aa.y)+o.z*Math.abs(Aa.z),p=e.dot(Aa),m=r.dot(Aa),g=a.dot(Aa);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>c)return!1}return!0}const Y_=new za,Es=new G,pc=new G;class ki{constructor(e=new G,r=-1){this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const a=this.center;r!==void 0?a.copy(r):Y_.setFromPoints(e).getCenter(a);let o=0;for(let u=0,h=e.length;u<h;u++)o=Math.max(o,a.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const a=this.center.distanceToSquared(e);return r.copy(e),a>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const r=Es.lengthSq();if(r>this.radius*this.radius){const a=Math.sqrt(r),o=(a-this.radius)*.5;this.center.addScaledVector(Es,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(pc)),this.expandByPoint(Es.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new G,mc=new G,Ho=new G,ta=new G,gc=new G,Vo=new G,vc=new G;class Yc{constructor(e=new G,r=new G(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const a=r.dot(this.direction);return a<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=An.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,r),An.distanceToSquared(e))}distanceSqToSegment(e,r,a,o){mc.copy(e).add(r).multiplyScalar(.5),Ho.copy(r).sub(e).normalize(),ta.copy(this.origin).sub(mc);const u=e.distanceTo(r)*.5,h=-this.direction.dot(Ho),c=ta.dot(this.direction),p=-ta.dot(Ho),m=ta.lengthSq(),g=Math.abs(1-h*h);let y,_,S,T;if(g>0)if(y=h*p-c,_=h*c-p,T=u*g,y>=0)if(_>=-T)if(_<=T){const E=1/g;y*=E,_*=E,S=y*(y+h*_+2*c)+_*(h*y+_+2*p)+m}else _=u,y=Math.max(0,-(h*_+c)),S=-y*y+_*(_+2*p)+m;else _=-u,y=Math.max(0,-(h*_+c)),S=-y*y+_*(_+2*p)+m;else _<=-T?(y=Math.max(0,-(-h*u+c)),_=y>0?-u:Math.min(Math.max(-u,-p),u),S=-y*y+_*(_+2*p)+m):_<=T?(y=0,_=Math.min(Math.max(-u,-p),u),S=_*(_+2*p)+m):(y=Math.max(0,-(h*u+c)),_=y>0?u:Math.min(Math.max(-u,-p),u),S=-y*y+_*(_+2*p)+m);else _=h>0?-u:u,y=Math.max(0,-(h*_+c)),S=-y*y+_*(_+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(mc).addScaledVector(Ho,_),S}intersectSphere(e,r){An.subVectors(e.center,this.origin);const a=An.dot(this.direction),o=An.dot(An)-a*a,u=e.radius*e.radius;if(o>u)return null;const h=Math.sqrt(u-o),c=a-h,p=a+h;return p<0?null:c<0?this.at(p,r):this.at(c,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/r;return a>=0?a:null}intersectPlane(e,r){const a=this.distanceToPlane(e);return a===null?null:this.at(a,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let a,o,u,h,c,p;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,_=this.origin;return m>=0?(a=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(a=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),g>=0?(u=(e.min.y-_.y)*g,h=(e.max.y-_.y)*g):(u=(e.max.y-_.y)*g,h=(e.min.y-_.y)*g),a>h||u>o||((u>a||isNaN(a))&&(a=u),(h<o||isNaN(o))&&(o=h),y>=0?(c=(e.min.z-_.z)*y,p=(e.max.z-_.z)*y):(c=(e.max.z-_.z)*y,p=(e.min.z-_.z)*y),a>p||c>o)||((c>a||a!==a)&&(a=c),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,r)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,r,a,o,u){gc.subVectors(r,e),Vo.subVectors(a,e),vc.crossVectors(gc,Vo);let h=this.direction.dot(vc),c;if(h>0){if(o)return null;c=1}else if(h<0)c=-1,h=-h;else return null;ta.subVectors(this.origin,e);const p=c*this.direction.dot(Vo.crossVectors(ta,Vo));if(p<0)return null;const m=c*this.direction.dot(gc.cross(ta));if(m<0||p+m>h)return null;const g=-c*ta.dot(vc);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,r,a,o,u,h,c,p,m,g,y,_,S,T,E,x){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,a,o,u,h,c,p,m,g,y,_,S,T,E,x)}set(e,r,a,o,u,h,c,p,m,g,y,_,S,T,E,x){const v=this.elements;return v[0]=e,v[4]=r,v[8]=a,v[12]=o,v[1]=u,v[5]=h,v[9]=c,v[13]=p,v[2]=m,v[6]=g,v[10]=y,v[14]=_,v[3]=S,v[7]=T,v[11]=E,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const r=this.elements,a=e.elements;return r[0]=a[0],r[1]=a[1],r[2]=a[2],r[3]=a[3],r[4]=a[4],r[5]=a[5],r[6]=a[6],r[7]=a[7],r[8]=a[8],r[9]=a[9],r[10]=a[10],r[11]=a[11],r[12]=a[12],r[13]=a[13],r[14]=a[14],r[15]=a[15],this}copyPosition(e){const r=this.elements,a=e.elements;return r[12]=a[12],r[13]=a[13],r[14]=a[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,a){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,r,a){return this.set(e.x,r.x,a.x,0,e.y,r.y,a.y,0,e.z,r.z,a.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,a=e.elements,o=1/vi.setFromMatrixColumn(e,0).length(),u=1/vi.setFromMatrixColumn(e,1).length(),h=1/vi.setFromMatrixColumn(e,2).length();return r[0]=a[0]*o,r[1]=a[1]*o,r[2]=a[2]*o,r[3]=0,r[4]=a[4]*u,r[5]=a[5]*u,r[6]=a[6]*u,r[7]=0,r[8]=a[8]*h,r[9]=a[9]*h,r[10]=a[10]*h,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,a=e.x,o=e.y,u=e.z,h=Math.cos(a),c=Math.sin(a),p=Math.cos(o),m=Math.sin(o),g=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const _=h*g,S=h*y,T=c*g,E=c*y;r[0]=p*g,r[4]=-p*y,r[8]=m,r[1]=S+T*m,r[5]=_-E*m,r[9]=-c*p,r[2]=E-_*m,r[6]=T+S*m,r[10]=h*p}else if(e.order==="YXZ"){const _=p*g,S=p*y,T=m*g,E=m*y;r[0]=_+E*c,r[4]=T*c-S,r[8]=h*m,r[1]=h*y,r[5]=h*g,r[9]=-c,r[2]=S*c-T,r[6]=E+_*c,r[10]=h*p}else if(e.order==="ZXY"){const _=p*g,S=p*y,T=m*g,E=m*y;r[0]=_-E*c,r[4]=-h*y,r[8]=T+S*c,r[1]=S+T*c,r[5]=h*g,r[9]=E-_*c,r[2]=-h*m,r[6]=c,r[10]=h*p}else if(e.order==="ZYX"){const _=h*g,S=h*y,T=c*g,E=c*y;r[0]=p*g,r[4]=T*m-S,r[8]=_*m+E,r[1]=p*y,r[5]=E*m+_,r[9]=S*m-T,r[2]=-m,r[6]=c*p,r[10]=h*p}else if(e.order==="YZX"){const _=h*p,S=h*m,T=c*p,E=c*m;r[0]=p*g,r[4]=E-_*y,r[8]=T*y+S,r[1]=y,r[5]=h*g,r[9]=-c*g,r[2]=-m*g,r[6]=S*y+T,r[10]=_-E*y}else if(e.order==="XZY"){const _=h*p,S=h*m,T=c*p,E=c*m;r[0]=p*g,r[4]=-y,r[8]=m*g,r[1]=_*y+E,r[5]=h*g,r[9]=S*y-T,r[2]=T*y-S,r[6]=c*g,r[10]=E*y+_}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q_,e,Z_)}lookAt(e,r,a){const o=this.elements;return Lr.subVectors(e,r),Lr.lengthSq()===0&&(Lr.z=1),Lr.normalize(),ra.crossVectors(a,Lr),ra.lengthSq()===0&&(Math.abs(a.z)===1?Lr.x+=1e-4:Lr.z+=1e-4,Lr.normalize(),ra.crossVectors(a,Lr)),ra.normalize(),Wo.crossVectors(Lr,ra),o[0]=ra.x,o[4]=Wo.x,o[8]=Lr.x,o[1]=ra.y,o[5]=Wo.y,o[9]=Lr.y,o[2]=ra.z,o[6]=Wo.z,o[10]=Lr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const a=e.elements,o=r.elements,u=this.elements,h=a[0],c=a[4],p=a[8],m=a[12],g=a[1],y=a[5],_=a[9],S=a[13],T=a[2],E=a[6],x=a[10],v=a[14],I=a[3],w=a[7],k=a[11],D=a[15],z=o[0],O=o[4],se=o[8],C=o[12],P=o[1],fe=o[5],de=o[9],q=o[13],re=o[2],ne=o[6],ge=o[10],ie=o[14],W=o[3],te=o[7],A=o[11],U=o[15];return u[0]=h*z+c*P+p*re+m*W,u[4]=h*O+c*fe+p*ne+m*te,u[8]=h*se+c*de+p*ge+m*A,u[12]=h*C+c*q+p*ie+m*U,u[1]=g*z+y*P+_*re+S*W,u[5]=g*O+y*fe+_*ne+S*te,u[9]=g*se+y*de+_*ge+S*A,u[13]=g*C+y*q+_*ie+S*U,u[2]=T*z+E*P+x*re+v*W,u[6]=T*O+E*fe+x*ne+v*te,u[10]=T*se+E*de+x*ge+v*A,u[14]=T*C+E*q+x*ie+v*U,u[3]=I*z+w*P+k*re+D*W,u[7]=I*O+w*fe+k*ne+D*te,u[11]=I*se+w*de+k*ge+D*A,u[15]=I*C+w*q+k*ie+D*U,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],a=e[4],o=e[8],u=e[12],h=e[1],c=e[5],p=e[9],m=e[13],g=e[2],y=e[6],_=e[10],S=e[14],T=e[3],E=e[7],x=e[11],v=e[15];return T*(+u*p*y-o*m*y-u*c*_+a*m*_+o*c*S-a*p*S)+E*(+r*p*S-r*m*_+u*h*_-o*h*S+o*m*g-u*p*g)+x*(+r*m*y-r*c*S-u*h*y+a*h*S+u*c*g-a*m*g)+v*(-o*c*g-r*p*y+r*c*_+o*h*y-a*h*_+a*p*g)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=r,o[14]=a),this}invert(){const e=this.elements,r=e[0],a=e[1],o=e[2],u=e[3],h=e[4],c=e[5],p=e[6],m=e[7],g=e[8],y=e[9],_=e[10],S=e[11],T=e[12],E=e[13],x=e[14],v=e[15],I=y*x*m-E*_*m+E*p*S-c*x*S-y*p*v+c*_*v,w=T*_*m-g*x*m-T*p*S+h*x*S+g*p*v-h*_*v,k=g*E*m-T*y*m+T*c*S-h*E*S-g*c*v+h*y*v,D=T*y*p-g*E*p-T*c*_+h*E*_+g*c*x-h*y*x,z=r*I+a*w+o*k+u*D;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=I*O,e[1]=(E*_*u-y*x*u-E*o*S+a*x*S+y*o*v-a*_*v)*O,e[2]=(c*x*u-E*p*u+E*o*m-a*x*m-c*o*v+a*p*v)*O,e[3]=(y*p*u-c*_*u-y*o*m+a*_*m+c*o*S-a*p*S)*O,e[4]=w*O,e[5]=(g*x*u-T*_*u+T*o*S-r*x*S-g*o*v+r*_*v)*O,e[6]=(T*p*u-h*x*u-T*o*m+r*x*m+h*o*v-r*p*v)*O,e[7]=(h*_*u-g*p*u+g*o*m-r*_*m-h*o*S+r*p*S)*O,e[8]=k*O,e[9]=(T*y*u-g*E*u-T*a*S+r*E*S+g*a*v-r*y*v)*O,e[10]=(h*E*u-T*c*u+T*a*m-r*E*m-h*a*v+r*c*v)*O,e[11]=(g*c*u-h*y*u-g*a*m+r*y*m+h*a*S-r*c*S)*O,e[12]=D*O,e[13]=(g*E*o-T*y*o+T*a*_-r*E*_-g*a*x+r*y*x)*O,e[14]=(T*c*o-h*E*o-T*a*p+r*E*p+h*a*x-r*c*x)*O,e[15]=(h*y*o-g*c*o+g*a*p-r*y*p-h*a*_+r*c*_)*O,this}scale(e){const r=this.elements,a=e.x,o=e.y,u=e.z;return r[0]*=a,r[4]*=o,r[8]*=u,r[1]*=a,r[5]*=o,r[9]*=u,r[2]*=a,r[6]*=o,r[10]*=u,r[3]*=a,r[7]*=o,r[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,a,o))}makeTranslation(e,r,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,a,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,r,-a,0,0,a,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),a=Math.sin(e);return this.set(r,0,a,0,0,1,0,0,-a,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),a=Math.sin(e);return this.set(r,-a,0,0,a,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const a=Math.cos(r),o=Math.sin(r),u=1-a,h=e.x,c=e.y,p=e.z,m=u*h,g=u*c;return this.set(m*h+a,m*c-o*p,m*p+o*c,0,m*c+o*p,g*c+a,g*p-o*h,0,m*p-o*c,g*p+o*h,u*p*p+a,0,0,0,0,1),this}makeScale(e,r,a){return this.set(e,0,0,0,0,r,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,r,a,o,u,h){return this.set(1,a,u,0,e,1,h,0,r,o,1,0,0,0,0,1),this}compose(e,r,a){const o=this.elements,u=r._x,h=r._y,c=r._z,p=r._w,m=u+u,g=h+h,y=c+c,_=u*m,S=u*g,T=u*y,E=h*g,x=h*y,v=c*y,I=p*m,w=p*g,k=p*y,D=a.x,z=a.y,O=a.z;return o[0]=(1-(E+v))*D,o[1]=(S+k)*D,o[2]=(T-w)*D,o[3]=0,o[4]=(S-k)*z,o[5]=(1-(_+v))*z,o[6]=(x+I)*z,o[7]=0,o[8]=(T+w)*O,o[9]=(x-I)*O,o[10]=(1-(_+E))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,r,a){const o=this.elements;let u=vi.set(o[0],o[1],o[2]).length();const h=vi.set(o[4],o[5],o[6]).length(),c=vi.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),e.x=o[12],e.y=o[13],e.z=o[14],Qr.copy(this);const p=1/u,m=1/h,g=1/c;return Qr.elements[0]*=p,Qr.elements[1]*=p,Qr.elements[2]*=p,Qr.elements[4]*=m,Qr.elements[5]*=m,Qr.elements[6]*=m,Qr.elements[8]*=g,Qr.elements[9]*=g,Qr.elements[10]*=g,r.setFromRotationMatrix(Qr),a.x=u,a.y=h,a.z=c,this}makePerspective(e,r,a,o,u,h,c=Nn){const p=this.elements,m=2*u/(r-e),g=2*u/(a-o),y=(r+e)/(r-e),_=(a+o)/(a-o);let S,T;if(c===Nn)S=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(c===hl)S=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,r,a,o,u,h,c=Nn){const p=this.elements,m=1/(r-e),g=1/(a-o),y=1/(h-u),_=(r+e)*m,S=(a+o)*g;let T,E;if(c===Nn)T=(h+u)*y,E=-2*y;else if(c===hl)T=u*y,E=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=E,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const r=this.elements,a=e.elements;for(let o=0;o<16;o++)if(r[o]!==a[o])return!1;return!0}fromArray(e,r=0){for(let a=0;a<16;a++)this.elements[a]=e[a+r];return this}toArray(e=[],r=0){const a=this.elements;return e[r]=a[0],e[r+1]=a[1],e[r+2]=a[2],e[r+3]=a[3],e[r+4]=a[4],e[r+5]=a[5],e[r+6]=a[6],e[r+7]=a[7],e[r+8]=a[8],e[r+9]=a[9],e[r+10]=a[10],e[r+11]=a[11],e[r+12]=a[12],e[r+13]=a[13],e[r+14]=a[14],e[r+15]=a[15],e}}const vi=new G,Qr=new Ut,q_=new G(0,0,0),Z_=new G(1,1,1),ra=new G,Wo=new G,Lr=new G,xp=new Ut,yp=new da;class ml{constructor(e=0,r=0,a=0,o=ml.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,a,o=this._order){return this._x=e,this._y=r,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,a=!0){const o=e.elements,u=o[0],h=o[4],c=o[8],p=o[1],m=o[5],g=o[9],y=o[2],_=o[6],S=o[10];switch(r){case"XYZ":this._y=Math.asin(pr(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-pr(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(pr(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-pr(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(pr(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-pr(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(c,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,a){return xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xp,r,a)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return yp.setFromEuler(this),this.setFromQuaternion(yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ml.DEFAULT_ORDER="XYZ";class Um{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J_=0;const Sp=new G,_i=new da,Cn=new Ut,Go=new G,Ts=new G,K_=new G,Q_=new da,bp=new G(1,0,0),Mp=new G(0,1,0),Ep=new G(0,0,1),$_={type:"added"},Tp={type:"removed"};class Xt extends Fa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new G,r=new ml,a=new da,o=new G(1,1,1);function u(){a.setFromEuler(r,!1)}function h(){r.setFromQuaternion(a,void 0,!1)}r._onChange(u),a._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ut},normalMatrix:{value:new ht}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return _i.setFromAxisAngle(e,r),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,r){return _i.setFromAxisAngle(e,r),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(bp,e)}rotateY(e){return this.rotateOnAxis(Mp,e)}rotateZ(e){return this.rotateOnAxis(Ep,e)}translateOnAxis(e,r){return Sp.copy(e).applyQuaternion(this.quaternion),this.position.add(Sp.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(bp,e)}translateY(e){return this.translateOnAxis(Mp,e)}translateZ(e){return this.translateOnAxis(Ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,r,a){e.isVector3?Go.copy(e):Go.set(e,r,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Ts,Go,this.up):Cn.lookAt(Go,Ts,this.up),this.quaternion.setFromRotationMatrix(Cn),o&&(Cn.extractRotation(o.matrixWorld),_i.setFromRotationMatrix(Cn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(Tp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const r=this.children[e];r.parent=null,r.dispatchEvent(Tp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,r);if(u!==void 0)return u}}getObjectsByProperty(e,r){let a=[];this[e]===r&&a.push(this);for(let o=0,u=this.children.length;o<u;o++){const h=this.children[o].getObjectsByProperty(e,r);h.length>0&&(a=a.concat(h))}return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,K_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let a=0,o=r.length;a<o;a++){const u=r[a];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,r){const a=this.parent;if(e===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),r===!0){const o=this.children;for(let u=0,h=o.length;u<h;u++){const c=o[u];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const r=e===void 0||typeof e=="string",a={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function u(c,p){return c[p.uuid]===void 0&&(c[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const p=c.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let p=0,m=this.material.length;p<m;p++)c.push(u(e.materials,this.material[p]));o.material=c}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const p=this.animations[c];o.animations.push(u(e.animations,p))}}if(r){const c=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),y=h(e.shapes),_=h(e.skeletons),S=h(e.animations),T=h(e.nodes);c.length>0&&(a.geometries=c),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),y.length>0&&(a.shapes=y),_.length>0&&(a.skeletons=_),S.length>0&&(a.animations=S),T.length>0&&(a.nodes=T)}return a.object=o,a;function h(c){const p=[];for(const m in c){const g=c[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}Xt.DEFAULT_UP=new G(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $r=new G,Rn=new G,_c=new G,Ln=new G,xi=new G,yi=new G,wp=new G,xc=new G,yc=new G,Sc=new G;let Xo=!1;class tn{constructor(e=new G,r=new G,a=new G){this.a=e,this.b=r,this.c=a}static getNormal(e,r,a,o){o.subVectors(a,r),$r.subVectors(e,r),o.cross($r);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,r,a,o,u){$r.subVectors(o,r),Rn.subVectors(a,r),_c.subVectors(e,r);const h=$r.dot($r),c=$r.dot(Rn),p=$r.dot(_c),m=Rn.dot(Rn),g=Rn.dot(_c),y=h*m-c*c;if(y===0)return u.set(-2,-1,-1);const _=1/y,S=(m*p-c*g)*_,T=(h*g-c*p)*_;return u.set(1-S-T,T,S)}static containsPoint(e,r,a,o){return this.getBarycoord(e,r,a,o,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,r,a,o,u,h,c,p){return Xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xo=!0),this.getInterpolation(e,r,a,o,u,h,c,p)}static getInterpolation(e,r,a,o,u,h,c,p){return this.getBarycoord(e,r,a,o,Ln),p.setScalar(0),p.addScaledVector(u,Ln.x),p.addScaledVector(h,Ln.y),p.addScaledVector(c,Ln.z),p}static isFrontFacing(e,r,a,o){return $r.subVectors(a,r),Rn.subVectors(e,r),$r.cross(Rn).dot(o)<0}set(e,r,a){return this.a.copy(e),this.b.copy(r),this.c.copy(a),this}setFromPointsAndIndices(e,r,a,o){return this.a.copy(e[r]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,r,a,o){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $r.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),$r.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return tn.getBarycoord(e,this.a,this.b,this.c,r)}getUV(e,r,a,o,u){return Xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xo=!0),tn.getInterpolation(e,this.a,this.b,this.c,r,a,o,u)}getInterpolation(e,r,a,o,u){return tn.getInterpolation(e,this.a,this.b,this.c,r,a,o,u)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const a=this.a,o=this.b,u=this.c;let h,c;xi.subVectors(o,a),yi.subVectors(u,a),xc.subVectors(e,a);const p=xi.dot(xc),m=yi.dot(xc);if(p<=0&&m<=0)return r.copy(a);yc.subVectors(e,o);const g=xi.dot(yc),y=yi.dot(yc);if(g>=0&&y<=g)return r.copy(o);const _=p*y-g*m;if(_<=0&&p>=0&&g<=0)return h=p/(p-g),r.copy(a).addScaledVector(xi,h);Sc.subVectors(e,u);const S=xi.dot(Sc),T=yi.dot(Sc);if(T>=0&&S<=T)return r.copy(u);const E=S*m-p*T;if(E<=0&&m>=0&&T<=0)return c=m/(m-T),r.copy(a).addScaledVector(yi,c);const x=g*T-S*y;if(x<=0&&y-g>=0&&S-T>=0)return wp.subVectors(u,o),c=(y-g)/(y-g+(S-T)),r.copy(o).addScaledVector(wp,c);const v=1/(x+E+_);return h=E*v,c=_*v,r.copy(a).addScaledVector(xi,h).addScaledVector(yi,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let e0=0;class Fi extends Fa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=Pi,this.side=ca,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vm,this.blendDst=_m,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oc,this.stencilZFail=oc,this.stencilZPass=oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const a=e[r];if(a===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const o=this[r];if(o===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[r]=a}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(a.blending=this.blending),this.side!==ca&&(a.side=this.side),this.vertexColors&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=this.transparent),a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.stencilWrite=this.stencilWrite,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(a.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(a.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(a.wireframe=this.wireframe),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=this.flatShading),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(u){const h=[];for(const c in u){const p=u[c];delete p.metadata,h.push(p)}return h}if(r){const u=o(e.textures),h=o(e.images);u.length>0&&(a.textures=u),h.length>0&&(a.images=h)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let a=null;if(r!==null){const o=r.length;a=new Array(o);for(let u=0;u!==o;++u)a[u]=r[u].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},jo={h:0,s:0,l:0};function bc(s,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?s+(e-s)*6*r:r<1/2?e:r<2/3?s+(e-s)*6*(2/3-r):s}class mt{constructor(e,r,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,a)}set(e,r,a){if(r===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,r,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kr.toWorkingColorSpace(this,r),this}setRGB(e,r,a,o=Kr.workingColorSpace){return this.r=e,this.g=r,this.b=a,Kr.toWorkingColorSpace(this,o),this}setHSL(e,r,a,o=Kr.workingColorSpace){if(e=D_(e,1),r=pr(r,0,1),a=pr(a,0,1),r===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+r):a+r-a*r,h=2*a-u;this.r=bc(h,u,e+1/3),this.g=bc(h,u,e),this.b=bc(h,u,e-1/3)}return Kr.toWorkingColorSpace(this,o),this}setStyle(e,r=ct){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=o[1],c=o[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,r);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,r);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,r);if(h===6)return this.setHex(parseInt(u,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=ct){const a=Im[e.toLowerCase()];return a!==void 0?this.setHex(a,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=cc(e.r),this.g=cc(e.g),this.b=cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Kr.fromWorkingColorSpace(ur.copy(this),e),Math.round(pr(ur.r*255,0,255))*65536+Math.round(pr(ur.g*255,0,255))*256+Math.round(pr(ur.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=Kr.workingColorSpace){Kr.fromWorkingColorSpace(ur.copy(this),r);const a=ur.r,o=ur.g,u=ur.b,h=Math.max(a,o,u),c=Math.min(a,o,u);let p,m;const g=(c+h)/2;if(c===h)p=0,m=0;else{const y=h-c;switch(m=g<=.5?y/(h+c):y/(2-h-c),h){case a:p=(o-u)/y+(o<u?6:0);break;case o:p=(u-a)/y+2;break;case u:p=(a-o)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,r=Kr.workingColorSpace){return Kr.fromWorkingColorSpace(ur.copy(this),r),e.r=ur.r,e.g=ur.g,e.b=ur.b,e}getStyle(e=ct){Kr.fromWorkingColorSpace(ur.copy(this),e);const r=ur.r,a=ur.g,o=ur.b;return e!==ct?`color(${e} ${r.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,r,a){return this.getHSL(en),en.h+=e,en.s+=r,en.l+=a,this.setHSL(en.h,en.s,en.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,a){return this.r=e.r+(r.r-e.r)*a,this.g=e.g+(r.g-e.g)*a,this.b=e.b+(r.b-e.b)*a,this}lerpHSL(e,r){this.getHSL(en),e.getHSL(jo);const a=lc(en.h,jo.h,r),o=lc(en.s,jo.s,r),u=lc(en.l,jo.l,r);return this.setHSL(a,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,a=this.g,o=this.b,u=e.elements;return this.r=u[0]*r+u[3]*a+u[6]*o,this.g=u[1]*r+u[4]*a+u[7]*o,this.b=u[2]*r+u[5]*a+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ur=new mt;mt.NAMES=Im;class Dm extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new G,Yo=new ot;class sn{constructor(e,r,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=a,this.usage=pp,this.updateRange={offset:0,count:-1},this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,a){e*=this.itemSize,a*=r.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=r.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,a=this.count;r<a;r++)Yo.fromBufferAttribute(this,r),Yo.applyMatrix3(e),this.setXY(r,Yo.x,Yo.y);else if(this.itemSize===3)for(let r=0,a=this.count;r<a;r++)Ht.fromBufferAttribute(this,r),Ht.applyMatrix3(e),this.setXYZ(r,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let r=0,a=this.count;r<a;r++)Ht.fromBufferAttribute(this,r),Ht.applyMatrix4(e),this.setXYZ(r,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let r=0,a=this.count;r<a;r++)Ht.fromBufferAttribute(this,r),Ht.applyNormalMatrix(e),this.setXYZ(r,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let r=0,a=this.count;r<a;r++)Ht.fromBufferAttribute(this,r),Ht.transformDirection(e),this.setXYZ(r,Ht.x,Ht.y,Ht.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let a=this.array[e*this.itemSize+r];return this.normalized&&(a=bs(a,this.array)),a}setComponent(e,r,a){return this.normalized&&(a=br(a,this.array)),this.array[e*this.itemSize+r]=a,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=bs(r,this.array)),r}setX(e,r){return this.normalized&&(r=br(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=bs(r,this.array)),r}setY(e,r){return this.normalized&&(r=br(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=bs(r,this.array)),r}setZ(e,r){return this.normalized&&(r=br(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=bs(r,this.array)),r}setW(e,r){return this.normalized&&(r=br(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,a){return e*=this.itemSize,this.normalized&&(r=br(r,this.array),a=br(a,this.array)),this.array[e+0]=r,this.array[e+1]=a,this}setXYZ(e,r,a,o){return e*=this.itemSize,this.normalized&&(r=br(r,this.array),a=br(a,this.array),o=br(o,this.array)),this.array[e+0]=r,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,r,a,o,u){return e*=this.itemSize,this.normalized&&(r=br(r,this.array),a=br(a,this.array),o=br(o,this.array),u=br(u,this.array)),this.array[e+0]=r,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Om extends sn{constructor(e,r,a){super(new Uint16Array(e),r,a)}}class km extends sn{constructor(e,r,a){super(new Uint32Array(e),r,a)}}class jt extends sn{constructor(e,r,a){super(new Float32Array(e),r,a)}}let t0=0;const Br=new Ut,Mc=new Xt,Si=new G,Pr=new za,ws=new za,$t=new G;class Wr extends Fa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rm(e)?km:Om)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,a=0){this.groups.push({start:e,count:r,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new ht().getNormalMatrix(e);a.applyNormalMatrix(u),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Br.makeRotationFromQuaternion(e),this.applyMatrix4(Br),this}rotateX(e){return Br.makeRotationX(e),this.applyMatrix4(Br),this}rotateY(e){return Br.makeRotationY(e),this.applyMatrix4(Br),this}rotateZ(e){return Br.makeRotationZ(e),this.applyMatrix4(Br),this}translate(e,r,a){return Br.makeTranslation(e,r,a),this.applyMatrix4(Br),this}scale(e,r,a){return Br.makeScale(e,r,a),this.applyMatrix4(Br),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const r=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new jt(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let a=0,o=r.length;a<o;a++){const u=r[a];Pr.setFromBufferAttribute(u),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Pr.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Pr.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Pr.min),this.boundingBox.expandByPoint(Pr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const a=this.boundingSphere.center;if(Pr.setFromBufferAttribute(e),r)for(let u=0,h=r.length;u<h;u++){const c=r[u];ws.setFromBufferAttribute(c),this.morphTargetsRelative?($t.addVectors(Pr.min,ws.min),Pr.expandByPoint($t),$t.addVectors(Pr.max,ws.max),Pr.expandByPoint($t)):(Pr.expandByPoint(ws.min),Pr.expandByPoint(ws.max))}Pr.getCenter(a);let o=0;for(let u=0,h=e.count;u<h;u++)$t.fromBufferAttribute(e,u),o=Math.max(o,a.distanceToSquared($t));if(r)for(let u=0,h=r.length;u<h;u++){const c=r[u],p=this.morphTargetsRelative;for(let m=0,g=c.count;m<g;m++)$t.fromBufferAttribute(c,m),p&&(Si.fromBufferAttribute(e,m),$t.add(Si)),o=Math.max(o,a.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=e.array,o=r.position.array,u=r.normal.array,h=r.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*c),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let P=0;P<c;P++)m[P]=new G,g[P]=new G;const y=new G,_=new G,S=new G,T=new ot,E=new ot,x=new ot,v=new G,I=new G;function w(P,fe,de){y.fromArray(o,P*3),_.fromArray(o,fe*3),S.fromArray(o,de*3),T.fromArray(h,P*2),E.fromArray(h,fe*2),x.fromArray(h,de*2),_.sub(y),S.sub(y),E.sub(T),x.sub(T);const q=1/(E.x*x.y-x.x*E.y);isFinite(q)&&(v.copy(_).multiplyScalar(x.y).addScaledVector(S,-E.y).multiplyScalar(q),I.copy(S).multiplyScalar(E.x).addScaledVector(_,-x.x).multiplyScalar(q),m[P].add(v),m[fe].add(v),m[de].add(v),g[P].add(I),g[fe].add(I),g[de].add(I))}let k=this.groups;k.length===0&&(k=[{start:0,count:a.length}]);for(let P=0,fe=k.length;P<fe;++P){const de=k[P],q=de.start,re=de.count;for(let ne=q,ge=q+re;ne<ge;ne+=3)w(a[ne+0],a[ne+1],a[ne+2])}const D=new G,z=new G,O=new G,se=new G;function C(P){O.fromArray(u,P*3),se.copy(O);const fe=m[P];D.copy(fe),D.sub(O.multiplyScalar(O.dot(fe))).normalize(),z.crossVectors(se,fe);const de=z.dot(g[P])<0?-1:1;p[P*4]=D.x,p[P*4+1]=D.y,p[P*4+2]=D.z,p[P*4+3]=de}for(let P=0,fe=k.length;P<fe;++P){const de=k[P],q=de.start,re=de.count;for(let ne=q,ge=q+re;ne<ge;ne+=3)C(a[ne+0]),C(a[ne+1]),C(a[ne+2])}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new sn(new Float32Array(r.count*3),3),this.setAttribute("normal",a);else for(let _=0,S=a.count;_<S;_++)a.setXYZ(_,0,0,0);const o=new G,u=new G,h=new G,c=new G,p=new G,m=new G,g=new G,y=new G;if(e)for(let _=0,S=e.count;_<S;_+=3){const T=e.getX(_+0),E=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(r,T),u.fromBufferAttribute(r,E),h.fromBufferAttribute(r,x),g.subVectors(h,u),y.subVectors(o,u),g.cross(y),c.fromBufferAttribute(a,T),p.fromBufferAttribute(a,E),m.fromBufferAttribute(a,x),c.add(g),p.add(g),m.add(g),a.setXYZ(T,c.x,c.y,c.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(x,m.x,m.y,m.z)}else for(let _=0,S=r.count;_<S;_+=3)o.fromBufferAttribute(r,_+0),u.fromBufferAttribute(r,_+1),h.fromBufferAttribute(r,_+2),g.subVectors(h,u),y.subVectors(o,u),g.cross(y),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),$t.normalize(),e.setXYZ(r,$t.x,$t.y,$t.z)}toNonIndexed(){function e(c,p){const m=c.array,g=c.itemSize,y=c.normalized,_=new m.constructor(p.length*g);let S=0,T=0;for(let E=0,x=p.length;E<x;E++){c.isInterleavedBufferAttribute?S=p[E]*c.data.stride+c.offset:S=p[E]*g;for(let v=0;v<g;v++)_[T++]=m[S++]}return new sn(_,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new Wr,a=this.index.array,o=this.attributes;for(const c in o){const p=o[c],m=e(p,a);r.setAttribute(c,m)}const u=this.morphAttributes;for(const c in u){const p=[],m=u[c];for(let g=0,y=m.length;g<y;g++){const _=m[g],S=e(_,a);p.push(S)}r.morphAttributes[c]=p}r.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let c=0,p=h.length;c<p;c++){const m=h[c];r.addGroup(m.start,m.count,m.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const a=this.attributes;for(const p in a){const m=a[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let y=0,_=m.length;y<_;y++){const S=m[y];g.push(S.toJSON(e.data))}g.length>0&&(o[p]=g,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone(r));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(r))}const u=e.morphAttributes;for(const m in u){const g=[],y=u[m];for(let _=0,S=y.length;_<S;_++)g.push(y[_].clone(r));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const y=h[m];this.addGroup(y.start,y.count,y.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ap=new Ut,Ca=new Yc,qo=new ki,Cp=new G,bi=new G,Mi=new G,Ei=new G,Ec=new G,Zo=new G,Jo=new ot,Ko=new ot,Qo=new ot,Rp=new G,Lp=new G,Pp=new G,$o=new G,el=new G;class an extends Xt{constructor(e=new Wr,r=new Dm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const h=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}getVertexPosition(e,r){const a=this.geometry,o=a.attributes.position,u=a.morphAttributes.position,h=a.morphTargetsRelative;r.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(u&&c){Zo.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=c[p],y=u[p];g!==0&&(Ec.fromBufferAttribute(y,e),h?Zo.addScaledVector(Ec,g):Zo.addScaledVector(Ec.sub(r),g))}r.add(Zo)}return r}raycast(e,r){const a=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),qo.copy(a.boundingSphere),qo.applyMatrix4(u),Ca.copy(e.ray).recast(e.near),!(qo.containsPoint(Ca.origin)===!1&&(Ca.intersectSphere(qo,Cp)===null||Ca.origin.distanceToSquared(Cp)>(e.far-e.near)**2))&&(Ap.copy(u).invert(),Ca.copy(e.ray).applyMatrix4(Ap),!(a.boundingBox!==null&&Ca.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,r,Ca)))}_computeIntersections(e,r,a){let o;const u=this.geometry,h=this.material,c=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,y=u.attributes.normal,_=u.groups,S=u.drawRange;if(c!==null)if(Array.isArray(h))for(let T=0,E=_.length;T<E;T++){const x=_[T],v=h[x.materialIndex],I=Math.max(x.start,S.start),w=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let k=I,D=w;k<D;k+=3){const z=c.getX(k),O=c.getX(k+1),se=c.getX(k+2);o=tl(this,v,e,a,m,g,y,z,O,se),o&&(o.faceIndex=Math.floor(k/3),o.face.materialIndex=x.materialIndex,r.push(o))}}else{const T=Math.max(0,S.start),E=Math.min(c.count,S.start+S.count);for(let x=T,v=E;x<v;x+=3){const I=c.getX(x),w=c.getX(x+1),k=c.getX(x+2);o=tl(this,h,e,a,m,g,y,I,w,k),o&&(o.faceIndex=Math.floor(x/3),r.push(o))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,E=_.length;T<E;T++){const x=_[T],v=h[x.materialIndex],I=Math.max(x.start,S.start),w=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let k=I,D=w;k<D;k+=3){const z=k,O=k+1,se=k+2;o=tl(this,v,e,a,m,g,y,z,O,se),o&&(o.faceIndex=Math.floor(k/3),o.face.materialIndex=x.materialIndex,r.push(o))}}else{const T=Math.max(0,S.start),E=Math.min(p.count,S.start+S.count);for(let x=T,v=E;x<v;x+=3){const I=x,w=x+1,k=x+2;o=tl(this,h,e,a,m,g,y,I,w,k),o&&(o.faceIndex=Math.floor(x/3),r.push(o))}}}}function r0(s,e,r,a,o,u,h,c){let p;if(e.side===Mr?p=a.intersectTriangle(h,u,o,!0,c):p=a.intersectTriangle(o,u,h,e.side===ca,c),p===null)return null;el.copy(c),el.applyMatrix4(s.matrixWorld);const m=r.ray.origin.distanceTo(el);return m<r.near||m>r.far?null:{distance:m,point:el.clone(),object:s}}function tl(s,e,r,a,o,u,h,c,p,m){s.getVertexPosition(c,bi),s.getVertexPosition(p,Mi),s.getVertexPosition(m,Ei);const g=r0(s,e,r,a,bi,Mi,Ei,$o);if(g){o&&(Jo.fromBufferAttribute(o,c),Ko.fromBufferAttribute(o,p),Qo.fromBufferAttribute(o,m),g.uv=tn.getInterpolation($o,bi,Mi,Ei,Jo,Ko,Qo,new ot)),u&&(Jo.fromBufferAttribute(u,c),Ko.fromBufferAttribute(u,p),Qo.fromBufferAttribute(u,m),g.uv1=tn.getInterpolation($o,bi,Mi,Ei,Jo,Ko,Qo,new ot),g.uv2=g.uv1),h&&(Rp.fromBufferAttribute(h,c),Lp.fromBufferAttribute(h,p),Pp.fromBufferAttribute(h,m),g.normal=tn.getInterpolation($o,bi,Mi,Ei,Rp,Lp,Pp,new G),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const y={a:c,b:p,c:m,normal:new G,materialIndex:0};tn.getNormal(bi,Mi,Ei,y.normal),g.face=y}return g}class Ds extends Wr{constructor(e=1,r=1,a=1,o=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:a,widthSegments:o,heightSegments:u,depthSegments:h};const c=this;o=Math.floor(o),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],y=[];let _=0,S=0;T("z","y","x",-1,-1,a,r,e,h,u,0),T("z","y","x",1,-1,a,r,-e,h,u,1),T("x","z","y",1,1,e,a,r,o,h,2),T("x","z","y",1,-1,e,a,-r,o,h,3),T("x","y","z",1,-1,e,r,a,o,u,4),T("x","y","z",-1,-1,e,r,-a,o,u,5),this.setIndex(p),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(g,3)),this.setAttribute("uv",new jt(y,2));function T(E,x,v,I,w,k,D,z,O,se,C){const P=k/O,fe=D/se,de=k/2,q=D/2,re=z/2,ne=O+1,ge=se+1;let ie=0,W=0;const te=new G;for(let A=0;A<ge;A++){const U=A*fe-q;for(let X=0;X<ne;X++){const pe=X*P-de;te[E]=pe*I,te[x]=U*w,te[v]=re,m.push(te.x,te.y,te.z),te[E]=0,te[x]=0,te[v]=z>0?1:-1,g.push(te.x,te.y,te.z),y.push(X/O),y.push(1-A/se),ie+=1}}for(let A=0;A<se;A++)for(let U=0;U<O;U++){const X=_+U+ne*A,pe=_+U+ne*(A+1),me=_+(U+1)+ne*(A+1),be=_+(U+1)+ne*A;p.push(X,pe,be),p.push(pe,me,be),W+=6}c.addGroup(S,W,C),S+=W,_+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(s){const e={};for(const r in s){e[r]={};for(const a in s[r]){const o=s[r][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][a]=null):e[r][a]=o.clone():Array.isArray(o)?e[r][a]=o.slice():e[r][a]=o}}return e}function hr(s){const e={};for(let r=0;r<s.length;r++){const a=Oi(s[r]);for(const o in a)e[o]=a[o]}return e}function n0(s){const e=[];for(let r=0;r<s.length;r++)e.push(s[r].clone());return e}function Fm(s){return s.getRenderTarget()===null?s.outputColorSpace:pn}const a0={clone:Oi,merge:hr};var i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=n0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?r.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?r.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?r.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?r.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?r.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?r.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?r.uniforms[o]={type:"m4",value:u.toArray()}:r.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(r.extensions=a),r}}class zm extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Nn}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(-r[8],-r[9],-r[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vr extends zm{constructor(e=50,r=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=Bc*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bc*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,r,a,o,u,h){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(cl*.5*this.fov)/this.zoom,a=2*r,o=this.aspect*a,u=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*o/p,r-=h.offsetY*a/m,o*=h.width/p,a*=h.height/m}const c=this.filmOffset;c!==0&&(u+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,r,r-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Ti=-90,wi=1;class o0 extends Xt{constructor(e,r,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null;const o=new Vr(Ti,wi,e,r);o.layers=this.layers,this.add(o);const u=new Vr(Ti,wi,e,r);u.layers=this.layers,this.add(u);const h=new Vr(Ti,wi,e,r);h.layers=this.layers,this.add(h);const c=new Vr(Ti,wi,e,r);c.layers=this.layers,this.add(c);const p=new Vr(Ti,wi,e,r);p.layers=this.layers,this.add(p);const m=new Vr(Ti,wi,e,r);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[a,o,u,h,c,p]=r;for(const m of r)this.remove(m);if(e===Nn)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===hl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of r)this.add(m),m.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const a=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,h,c,p,m]=this.children,g=e.getRenderTarget(),y=e.xr.enabled;e.xr.enabled=!1;const _=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0),e.render(r,o),e.setRenderTarget(a,1),e.render(r,u),e.setRenderTarget(a,2),e.render(r,h),e.setRenderTarget(a,3),e.render(r,c),e.setRenderTarget(a,4),e.render(r,p),a.texture.generateMipmaps=_,e.setRenderTarget(a,5),e.render(r,m),e.setRenderTarget(g),e.xr.enabled=y,a.texture.needsPMREMUpdate=!0}}class Bm extends Nr{constructor(e,r,a,o,u,h,c,p,m,g){e=e!==void 0?e:[],r=r!==void 0?r:Ui,super(e,r,a,o,u,h,c,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l0 extends Oa{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];r.encoding!==void 0&&(Ps("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Ia?ct:Da),this.texture=new Bm(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Hr}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ds(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:Oi(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Mr,blending:oa});u.uniforms.tEquirect.value=r;const h=new an(o,u),c=r.minFilter;return r.minFilter===Ns&&(r.minFilter=Hr),new o0(1,10,this).update(e,h),r.minFilter=c,h.geometry.dispose(),h.material.dispose(),this}clear(e,r,a,o){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(r,a,o);e.setRenderTarget(u)}}const Tc=new G,u0=new G,c0=new ht;class aa{constructor(e=new G(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,a,o){return this.normal.set(e,r,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,a){const o=Tc.subVectors(a,r).cross(u0.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const a=e.delta(Tc),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:r.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const r=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return r<0&&a>0||a<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const a=r||c0.getNormalMatrix(e),o=this.coplanarPoint(Tc).applyMatrix4(e),u=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ra=new ki,rl=new G;class qc{constructor(e=new aa,r=new aa,a=new aa,o=new aa,u=new aa,h=new aa){this.planes=[e,r,a,o,u,h]}set(e,r,a,o,u,h){const c=this.planes;return c[0].copy(e),c[1].copy(r),c[2].copy(a),c[3].copy(o),c[4].copy(u),c[5].copy(h),this}copy(e){const r=this.planes;for(let a=0;a<6;a++)r[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,r=Nn){const a=this.planes,o=e.elements,u=o[0],h=o[1],c=o[2],p=o[3],m=o[4],g=o[5],y=o[6],_=o[7],S=o[8],T=o[9],E=o[10],x=o[11],v=o[12],I=o[13],w=o[14],k=o[15];if(a[0].setComponents(p-u,_-m,x-S,k-v).normalize(),a[1].setComponents(p+u,_+m,x+S,k+v).normalize(),a[2].setComponents(p+h,_+g,x+T,k+I).normalize(),a[3].setComponents(p-h,_-g,x-T,k-I).normalize(),a[4].setComponents(p-c,_-y,x-E,k-w).normalize(),r===Nn)a[5].setComponents(p+c,_+y,x+E,k+w).normalize();else if(r===hl)a[5].setComponents(c,y,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ra.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),Ra.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ra)}intersectsSprite(e){return Ra.center.set(0,0,0),Ra.radius=.7071067811865476,Ra.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ra)}intersectsSphere(e){const r=this.planes,a=e.center,o=-e.radius;for(let u=0;u<6;u++)if(r[u].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const r=this.planes;for(let a=0;a<6;a++){const o=r[a];if(rl.x=o.normal.x>0?e.max.x:e.min.x,rl.y=o.normal.y>0?e.max.y:e.min.y,rl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let a=0;a<6;a++)if(r[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hm(){let s=null,e=!1,r=null,a=null;function o(u,h){r(u,h),a=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&r!==null&&(a=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(u){r=u},setContext:function(u){s=u}}}function d0(s,e){const r=e.isWebGL2,a=new WeakMap;function o(m,g){const y=m.array,_=m.usage,S=s.createBuffer();s.bindBuffer(g,S),s.bufferData(g,y,_),m.onUploadCallback();let T;if(y instanceof Float32Array)T=s.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(r)T=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=s.UNSIGNED_SHORT;else if(y instanceof Int16Array)T=s.SHORT;else if(y instanceof Uint32Array)T=s.UNSIGNED_INT;else if(y instanceof Int32Array)T=s.INT;else if(y instanceof Int8Array)T=s.BYTE;else if(y instanceof Uint8Array)T=s.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)T=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:S,type:T,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version}}function u(m,g,y){const _=g.array,S=g.updateRange;s.bindBuffer(y,m),S.count===-1?s.bufferSubData(y,0,_):(r?s.bufferSubData(y,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):s.bufferSubData(y,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1),g.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),a.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=a.get(m);g&&(s.deleteBuffer(g.buffer),a.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const _=a.get(m);(!_||_.version<m.version)&&a.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=a.get(m);y===void 0?a.set(m,o(m,g)):y.version<m.version&&(u(y.buffer,m,g),y.version=m.version)}return{get:h,remove:c,update:p}}class gl extends Wr{constructor(e=1,r=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:a,heightSegments:o};const u=e/2,h=r/2,c=Math.floor(a),p=Math.floor(o),m=c+1,g=p+1,y=e/c,_=r/p,S=[],T=[],E=[],x=[];for(let v=0;v<g;v++){const I=v*_-h;for(let w=0;w<m;w++){const k=w*y-u;T.push(k,-I,0),E.push(0,0,1),x.push(w/c),x.push(1-v/p)}}for(let v=0;v<p;v++)for(let I=0;I<c;I++){const w=I+m*v,k=I+m*(v+1),D=I+1+m*(v+1),z=I+1+m*v;S.push(w,k,z),S.push(k,D,z)}this.setIndex(S),this.setAttribute("position",new jt(T,3)),this.setAttribute("normal",new jt(E,3)),this.setAttribute("uv",new jt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.widthSegments,e.heightSegments)}}var h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,M0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,U0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,D0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ix=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,ux=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,fx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vx=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,_x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ny=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ay=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_y=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,My=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ey=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ly=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Py=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Iy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:h0,alphahash_pars_fragment:f0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:g0,alphatest_pars_fragment:v0,aomap_fragment:_0,aomap_pars_fragment:x0,begin_vertex:y0,beginnormal_vertex:S0,bsdfs:b0,iridescence_fragment:M0,bumpmap_pars_fragment:E0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:C0,color_fragment:R0,color_pars_fragment:L0,color_pars_vertex:P0,color_vertex:N0,common:U0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:D0,displacementmap_pars_vertex:O0,displacementmap_vertex:k0,emissivemap_fragment:F0,emissivemap_pars_fragment:z0,colorspace_fragment:B0,colorspace_pars_fragment:H0,envmap_fragment:V0,envmap_common_pars_fragment:W0,envmap_pars_fragment:G0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:nx,envmap_vertex:j0,fog_vertex:Y0,fog_pars_vertex:q0,fog_fragment:Z0,fog_pars_fragment:J0,gradientmap_pars_fragment:K0,lightmap_fragment:Q0,lightmap_pars_fragment:$0,lights_lambert_fragment:ex,lights_lambert_pars_fragment:tx,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:ix,lights_phong_fragment:sx,lights_phong_pars_fragment:ox,lights_physical_fragment:lx,lights_physical_pars_fragment:ux,lights_fragment_begin:cx,lights_fragment_maps:dx,lights_fragment_end:hx,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:vx,map_pars_fragment:_x,map_particle_fragment:xx,map_particle_pars_fragment:yx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:bx,morphcolor_vertex:Mx,morphnormal_vertex:Ex,morphtarget_pars_vertex:Tx,morphtarget_vertex:wx,normal_fragment_begin:Ax,normal_fragment_maps:Cx,normal_pars_fragment:Rx,normal_pars_vertex:Lx,normal_vertex:Px,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Ux,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Dx,iridescence_pars_fragment:Ox,opaque_fragment:kx,packing:Fx,premultiplied_alpha_fragment:zx,project_vertex:Bx,dithering_fragment:Hx,dithering_pars_fragment:Vx,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:Gx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:jx,shadowmap_vertex:Yx,shadowmask_pars_fragment:qx,skinbase_vertex:Zx,skinning_pars_vertex:Jx,skinning_vertex:Kx,skinnormal_vertex:Qx,specularmap_fragment:$x,specularmap_pars_fragment:ey,tonemapping_fragment:ty,tonemapping_pars_fragment:ry,transmission_fragment:ny,transmission_pars_fragment:ay,uv_pars_fragment:iy,uv_pars_vertex:sy,uv_vertex:oy,worldpos_vertex:ly,background_vert:uy,background_frag:cy,backgroundCube_vert:dy,backgroundCube_frag:hy,cube_vert:fy,cube_frag:py,depth_vert:my,depth_frag:gy,distanceRGBA_vert:vy,distanceRGBA_frag:_y,equirect_vert:xy,equirect_frag:yy,linedashed_vert:Sy,linedashed_frag:by,meshbasic_vert:My,meshbasic_frag:Ey,meshlambert_vert:Ty,meshlambert_frag:wy,meshmatcap_vert:Ay,meshmatcap_frag:Cy,meshnormal_vert:Ry,meshnormal_frag:Ly,meshphong_vert:Py,meshphong_frag:Ny,meshphysical_vert:Uy,meshphysical_frag:Iy,meshtoon_vert:Dy,meshtoon_frag:Oy,points_vert:ky,points_frag:Fy,shadow_vert:zy,shadow_frag:By,sprite_vert:Hy,sprite_frag:Vy},Ie={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},hn={basic:{uniforms:hr([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:hr([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:hr([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:hr([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:hr([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:hr([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:hr([Ie.points,Ie.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:hr([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:hr([Ie.common,Ie.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:hr([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:hr([Ie.sprite,Ie.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:hr([Ie.common,Ie.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:hr([Ie.lights,Ie.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};hn.physical={uniforms:hr([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const nl={r:0,b:0,g:0};function Wy(s,e,r,a,o,u,h){const c=new mt(0);let p=u===!0?0:1,m,g,y=null,_=0,S=null;function T(x,v){let I=!1,w=v.isScene===!0?v.background:null;switch(w&&w.isTexture&&(w=(v.backgroundBlurriness>0?r:e).get(w)),w===null?E(c,p):w&&w.isColor&&(E(w,1),I=!0),s.xr.getEnvironmentBlendMode()){case"opaque":I=!0;break;case"additive":a.buffers.color.setClear(0,0,0,1,h),I=!0;break;case"alpha-blend":a.buffers.color.setClear(0,0,0,0,h),I=!0;break}(s.autoClear||I)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===pl)?(g===void 0&&(g=new an(new Ds(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Oi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),g.material.uniforms.envMap.value=w,g.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,g.material.toneMapped=w.colorSpace!==ct,(y!==w||_!==w.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,y=w,_=w.version,S=s.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new an(new gl(2,2),new ka({name:"BackgroundMaterial",uniforms:Oi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:ca,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,m.material.toneMapped=w.colorSpace!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(y!==w||_!==w.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=w,_=w.version,S=s.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null))}function E(x,v){x.getRGB(nl,Fm(s)),a.buffers.color.setClear(nl.r,nl.g,nl.b,v,h)}return{getClearColor:function(){return c},setClearColor:function(x,v=1){c.set(x),p=v,E(c,p)},getClearAlpha:function(){return p},setClearAlpha:function(x){p=x,E(c,p)},render:T}}function Gy(s,e,r,a){const o=s.getParameter(s.MAX_VERTEX_ATTRIBS),u=a.isWebGL2?null:e.get("OES_vertex_array_object"),h=a.isWebGL2||u!==null,c={},p=x(null);let m=p,g=!1;function y(re,ne,ge,ie,W){let te=!1;if(h){const A=E(ie,ge,ne);m!==A&&(m=A,S(m.object)),te=v(re,ie,ge,W),te&&I(re,ie,ge,W)}else{const A=ne.wireframe===!0;(m.geometry!==ie.id||m.program!==ge.id||m.wireframe!==A)&&(m.geometry=ie.id,m.program=ge.id,m.wireframe=A,te=!0)}W!==null&&r.update(W,s.ELEMENT_ARRAY_BUFFER),(te||g)&&(g=!1,se(re,ne,ge,ie),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,r.get(W).buffer))}function _(){return a.isWebGL2?s.createVertexArray():u.createVertexArrayOES()}function S(re){return a.isWebGL2?s.bindVertexArray(re):u.bindVertexArrayOES(re)}function T(re){return a.isWebGL2?s.deleteVertexArray(re):u.deleteVertexArrayOES(re)}function E(re,ne,ge){const ie=ge.wireframe===!0;let W=c[re.id];W===void 0&&(W={},c[re.id]=W);let te=W[ne.id];te===void 0&&(te={},W[ne.id]=te);let A=te[ie];return A===void 0&&(A=x(_()),te[ie]=A),A}function x(re){const ne=[],ge=[],ie=[];for(let W=0;W<o;W++)ne[W]=0,ge[W]=0,ie[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:ge,attributeDivisors:ie,object:re,attributes:{},index:null}}function v(re,ne,ge,ie){const W=m.attributes,te=ne.attributes;let A=0;const U=ge.getAttributes();for(const X in U)if(U[X].location>=0){const pe=W[X];let me=te[X];if(me===void 0&&(X==="instanceMatrix"&&re.instanceMatrix&&(me=re.instanceMatrix),X==="instanceColor"&&re.instanceColor&&(me=re.instanceColor)),pe===void 0||pe.attribute!==me||me&&pe.data!==me.data)return!0;A++}return m.attributesNum!==A||m.index!==ie}function I(re,ne,ge,ie){const W={},te=ne.attributes;let A=0;const U=ge.getAttributes();for(const X in U)if(U[X].location>=0){let pe=te[X];pe===void 0&&(X==="instanceMatrix"&&re.instanceMatrix&&(pe=re.instanceMatrix),X==="instanceColor"&&re.instanceColor&&(pe=re.instanceColor));const me={};me.attribute=pe,pe&&pe.data&&(me.data=pe.data),W[X]=me,A++}m.attributes=W,m.attributesNum=A,m.index=ie}function w(){const re=m.newAttributes;for(let ne=0,ge=re.length;ne<ge;ne++)re[ne]=0}function k(re){D(re,0)}function D(re,ne){const ge=m.newAttributes,ie=m.enabledAttributes,W=m.attributeDivisors;ge[re]=1,ie[re]===0&&(s.enableVertexAttribArray(re),ie[re]=1),W[re]!==ne&&((a.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[a.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](re,ne),W[re]=ne)}function z(){const re=m.newAttributes,ne=m.enabledAttributes;for(let ge=0,ie=ne.length;ge<ie;ge++)ne[ge]!==re[ge]&&(s.disableVertexAttribArray(ge),ne[ge]=0)}function O(re,ne,ge,ie,W,te,A){A===!0?s.vertexAttribIPointer(re,ne,ge,W,te):s.vertexAttribPointer(re,ne,ge,ie,W,te)}function se(re,ne,ge,ie){if(a.isWebGL2===!1&&(re.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const W=ie.attributes,te=ge.getAttributes(),A=ne.defaultAttributeValues;for(const U in te){const X=te[U];if(X.location>=0){let pe=W[U];if(pe===void 0&&(U==="instanceMatrix"&&re.instanceMatrix&&(pe=re.instanceMatrix),U==="instanceColor"&&re.instanceColor&&(pe=re.instanceColor)),pe!==void 0){const me=pe.normalized,be=pe.itemSize,Ce=r.get(pe);if(Ce===void 0)continue;const Ne=Ce.buffer,we=Ce.type,Ke=Ce.bytesPerElement,Ot=a.isWebGL2===!0&&(we===s.INT||we===s.UNSIGNED_INT||pe.gpuType===ym);if(pe.isInterleavedBufferAttribute){const rt=pe.data,K=rt.stride,bt=pe.offset;if(rt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<X.locationSize;Xe++)D(X.location+Xe,rt.meshPerAttribute);re.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Xe=0;Xe<X.locationSize;Xe++)k(X.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Xe=0;Xe<X.locationSize;Xe++)O(X.location+Xe,be/X.locationSize,we,me,K*Ke,(bt+be/X.locationSize*Xe)*Ke,Ot)}else{if(pe.isInstancedBufferAttribute){for(let rt=0;rt<X.locationSize;rt++)D(X.location+rt,pe.meshPerAttribute);re.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let rt=0;rt<X.locationSize;rt++)k(X.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let rt=0;rt<X.locationSize;rt++)O(X.location+rt,be/X.locationSize,we,me,be*Ke,be/X.locationSize*rt*Ke,Ot)}}else if(A!==void 0){const me=A[U];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(X.location,me);break;case 3:s.vertexAttrib3fv(X.location,me);break;case 4:s.vertexAttrib4fv(X.location,me);break;default:s.vertexAttrib1fv(X.location,me)}}}}z()}function C(){de();for(const re in c){const ne=c[re];for(const ge in ne){const ie=ne[ge];for(const W in ie)T(ie[W].object),delete ie[W];delete ne[ge]}delete c[re]}}function P(re){if(c[re.id]===void 0)return;const ne=c[re.id];for(const ge in ne){const ie=ne[ge];for(const W in ie)T(ie[W].object),delete ie[W];delete ne[ge]}delete c[re.id]}function fe(re){for(const ne in c){const ge=c[ne];if(ge[re.id]===void 0)continue;const ie=ge[re.id];for(const W in ie)T(ie[W].object),delete ie[W];delete ge[re.id]}}function de(){q(),g=!0,m!==p&&(m=p,S(m.object))}function q(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:y,reset:de,resetDefaultState:q,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:fe,initAttributes:w,enableAttribute:k,disableUnusedAttributes:z}}function Xy(s,e,r,a){const o=a.isWebGL2;let u;function h(m){u=m}function c(m,g){s.drawArrays(u,m,g),r.update(g,u,1)}function p(m,g,y){if(y===0)return;let _,S;if(o)_=s,S="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](u,m,g,y),r.update(g,u,y)}this.setMode=h,this.render=c,this.renderInstances=p}function jy(s,e,r){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=r.precision!==void 0?r.precision:"highp";const p=u(c);p!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const m=h||e.has("WEBGL_draw_buffers"),g=r.logarithmicDepthBuffer===!0,y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),E=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,k=h||e.has("OES_texture_float"),D=w&&k,z=h?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:o,getMaxPrecision:u,precision:c,logarithmicDepthBuffer:g,maxTextures:y,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:T,maxAttributes:E,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:I,vertexTextures:w,floatFragmentTextures:k,floatVertexTextures:D,maxSamples:z}}function Yy(s){const e=this;let r=null,a=0,o=!1,u=!1;const h=new aa,c=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,_){const S=y.length!==0||_||a!==0||o;return o=_,a=y.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,_){r=g(y,_,0)},this.setState=function(y,_,S){const T=y.clippingPlanes,E=y.clipIntersection,x=y.clipShadows,v=s.get(y);if(!o||T===null||T.length===0||u&&!x)u?g(null):m();else{const I=u?0:a,w=I*4;let k=v.clippingState||null;p.value=k,k=g(T,_,w,S);for(let D=0;D!==w;++D)k[D]=r[D];v.clippingState=k,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==r&&(p.value=r,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(y,_,S,T){const E=y!==null?y.length:0;let x=null;if(E!==0){if(x=p.value,T!==!0||x===null){const v=S+E*4,I=_.matrixWorldInverse;c.getNormalMatrix(I),(x===null||x.length<v)&&(x=new Float32Array(v));for(let w=0,k=S;w!==E;++w,k+=4)h.copy(y[w]).applyMatrix4(I,c),h.normal.toArray(x,k),x[k+3]=h.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function qy(s){let e=new WeakMap;function r(h,c){return c===Dc?h.mapping=Ui:c===Oc&&(h.mapping=Ii),h}function a(h){if(h&&h.isTexture&&h.isRenderTargetTexture===!1){const c=h.mapping;if(c===Dc||c===Oc)if(e.has(h)){const p=e.get(h).texture;return r(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new l0(p.height/2);return m.fromEquirectangularTexture(s,h),e.set(h,m),h.addEventListener("dispose",o),r(m.texture,h.mapping)}else return null}}return h}function o(h){const c=h.target;c.removeEventListener("dispose",o);const p=e.get(c);p!==void 0&&(e.delete(c),p.dispose())}function u(){e=new WeakMap}return{get:a,dispose:u}}class Vm extends zm{constructor(e=-1,r=1,a=1,o=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=a,this.bottom=o,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,a,o,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=a-e,h=a+e,c=o+r,p=o-r;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,c-=g*this.view.offsetY,p=c-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,c,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const Li=4,Np=[.125,.215,.35,.446,.526,.582],Pa=20,wc=new Vm,Up=new mt;let Ac=null;const La=(1+Math.sqrt(5))/2,Ai=1/La,Ip=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,La,Ai),new G(0,La,-Ai),new G(Ai,0,La),new G(-Ai,0,La),new G(La,Ai,0),new G(-La,Ai,0)];class Dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,a=.1,o=100){Ac=this._renderer.getRenderTarget(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,a,o,u),r>0&&this._blur(u,0,0,r),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ac),e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===Ui||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ac=this._renderer.getRenderTarget();const a=r||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,a={magFilter:Hr,minFilter:Hr,generateMipmaps:!1,type:Us,format:nn,colorSpace:pn,depthBuffer:!1},o=Op(e,r,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,r,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zy(u)),this._blurMaterial=Jy(u,e,r)}return o}_compileMaterial(e){const r=new an(this._lodPlanes[0],e);this._renderer.compile(r,wc)}_sceneToCubeUV(e,r,a,o){const u=new Vr(90,1,r,a),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(Up),p.toneMapping=la,p.autoClear=!1;const y=new Dm({name:"PMREM.Background",side:Mr,depthWrite:!1,depthTest:!1}),_=new an(new Ds,y);let S=!1;const T=e.background;T?T.isColor&&(y.color.copy(T),e.background=null,S=!0):(y.color.copy(Up),S=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(u.up.set(0,h[E],0),u.lookAt(c[E],0,0)):x===1?(u.up.set(0,0,h[E]),u.lookAt(0,c[E],0)):(u.up.set(0,h[E],0),u.lookAt(0,0,c[E]));const v=this._cubeSize;al(o,x*v,E>2?v:0,v,v),p.setRenderTarget(o),S&&p.render(_,u),p.render(e,u)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=T}_textureToCubeUV(e,r){const a=this._renderer,o=e.mapping===Ui||e.mapping===Ii;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kp());const u=o?this._cubemapMaterial:this._equirectMaterial,h=new an(this._lodPlanes[0],u),c=u.uniforms;c.envMap.value=e;const p=this._cubeSize;al(r,0,0,3*p,2*p),a.setRenderTarget(r),a.render(h,wc)}_applyPMREM(e){const r=this._renderer,a=r.autoClear;r.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const u=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=Ip[(o-1)%Ip.length];this._blur(e,o-1,o,u,h)}r.autoClear=a}_blur(e,r,a,o,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,r,a,o,"latitudinal",u),this._halfBlur(h,e,a,a,o,"longitudinal",u)}_halfBlur(e,r,a,o,u,h,c){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new an(this._lodPlanes[o],m),_=m.uniforms,S=this._sizeLods[a]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Pa-1),E=u/T,x=isFinite(u)?1+Math.floor(g*E):Pa;x>Pa&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Pa}`);const v=[];let I=0;for(let O=0;O<Pa;++O){const se=O/E,C=Math.exp(-se*se/2);v.push(C),O===0?I+=C:O<x&&(I+=2*C)}for(let O=0;O<v.length;O++)v[O]=v[O]/I;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=v,_.latitudinal.value=h==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:w}=this;_.dTheta.value=T,_.mipInt.value=w-a;const k=this._sizeLods[o],D=3*k*(o>w-Li?o-w+Li:0),z=4*(this._cubeSize-k);al(r,D,z,3*k,2*k),p.setRenderTarget(r),p.render(y,wc)}}function Zy(s){const e=[],r=[],a=[];let o=s;const u=s-Li+1+Np.length;for(let h=0;h<u;h++){const c=Math.pow(2,o);r.push(c);let p=1/c;h>s-Li?p=Np[h-s+Li-1]:h===0&&(p=0),a.push(p);const m=1/(c-2),g=-m,y=1+m,_=[g,g,y,g,y,y,g,g,y,y,g,y],S=6,T=6,E=3,x=2,v=1,I=new Float32Array(E*T*S),w=new Float32Array(x*T*S),k=new Float32Array(v*T*S);for(let z=0;z<S;z++){const O=z%3*2/3-1,se=z>2?0:-1,C=[O,se,0,O+2/3,se,0,O+2/3,se+1,0,O,se,0,O+2/3,se+1,0,O,se+1,0];I.set(C,E*T*z),w.set(_,x*T*z);const P=[z,z,z,z,z,z];k.set(P,v*T*z)}const D=new Wr;D.setAttribute("position",new sn(I,E)),D.setAttribute("uv",new sn(w,x)),D.setAttribute("faceIndex",new sn(k,v)),e.push(D),o>Li&&o--}return{lodPlanes:e,sizeLods:r,sigmas:a}}function Op(s,e,r){const a=new Oa(s,e,r);return a.texture.mapping=pl,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function al(s,e,r,a,o){s.viewport.set(e,r,a,o),s.scissor.set(e,r,a,o)}function Jy(s,e,r){const a=new Float32Array(Pa),o=new G(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:Pa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oa,depthTest:!1,depthWrite:!1})}function kp(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oa,depthTest:!1,depthWrite:!1})}function Fp(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oa,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ky(s){let e=new WeakMap,r=null;function a(c){if(c&&c.isTexture){const p=c.mapping,m=p===Dc||p===Oc,g=p===Ui||p===Ii;if(m||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let y=e.get(c);return r===null&&(r=new Dp(s)),y=m?r.fromEquirectangular(c,y):r.fromCubemap(c,y),e.set(c,y),y.texture}else{if(e.has(c))return e.get(c).texture;{const y=c.image;if(m&&y&&y.height>0||g&&y&&o(y)){r===null&&(r=new Dp(s));const _=m?r.fromEquirectangular(c):r.fromCubemap(c);return e.set(c,_),c.addEventListener("dispose",u),_.texture}else return null}}}return c}function o(c){let p=0;const m=6;for(let g=0;g<m;g++)c[g]!==void 0&&p++;return p===m}function u(c){const p=c.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:h}}function Qy(s){const e={};function r(a){if(e[a]!==void 0)return e[a];let o;switch(a){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(a)}return e[a]=o,o}return{has:function(a){return r(a)!==null},init:function(a){a.isWebGL2?r("EXT_color_buffer_float"):(r("WEBGL_depth_texture"),r("OES_texture_float"),r("OES_texture_half_float"),r("OES_texture_half_float_linear"),r("OES_standard_derivatives"),r("OES_element_index_uint"),r("OES_vertex_array_object"),r("ANGLE_instanced_arrays")),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture")},get:function(a){const o=r(a);return o===null&&console.warn("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function $y(s,e,r,a){const o={},u=new WeakMap;function h(y){const _=y.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);for(const T in _.morphAttributes){const E=_.morphAttributes[T];for(let x=0,v=E.length;x<v;x++)e.remove(E[x])}_.removeEventListener("dispose",h),delete o[_.id];const S=u.get(_);S&&(e.remove(S),u.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,r.memory.geometries--}function c(y,_){return o[_.id]===!0||(_.addEventListener("dispose",h),o[_.id]=!0,r.memory.geometries++),_}function p(y){const _=y.attributes;for(const T in _)e.update(_[T],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const T in S){const E=S[T];for(let x=0,v=E.length;x<v;x++)e.update(E[x],s.ARRAY_BUFFER)}}function m(y){const _=[],S=y.index,T=y.attributes.position;let E=0;if(S!==null){const I=S.array;E=S.version;for(let w=0,k=I.length;w<k;w+=3){const D=I[w+0],z=I[w+1],O=I[w+2];_.push(D,z,z,O,O,D)}}else if(T!==void 0){const I=T.array;E=T.version;for(let w=0,k=I.length/3-1;w<k;w+=3){const D=w+0,z=w+1,O=w+2;_.push(D,z,z,O,O,D)}}else return;const x=new(Rm(_)?km:Om)(_,1);x.version=E;const v=u.get(y);v&&e.remove(v),u.set(y,x)}function g(y){const _=u.get(y);if(_){const S=y.index;S!==null&&_.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:c,update:p,getWireframeAttribute:g}}function eS(s,e,r,a){const o=a.isWebGL2;let u;function h(_){u=_}let c,p;function m(_){c=_.type,p=_.bytesPerElement}function g(_,S){s.drawElements(u,S,c,_*p),r.update(S,u,1)}function y(_,S,T){if(T===0)return;let E,x;if(o)E=s,x="drawElementsInstanced";else if(E=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",E===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[x](u,S,c,_*p,T),r.update(S,u,T)}this.setMode=h,this.setIndex=m,this.render=g,this.renderInstances=y}function tS(s){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,h,c){switch(r.calls++,h){case s.TRIANGLES:r.triangles+=c*(u/3);break;case s.LINES:r.lines+=c*(u/2);break;case s.LINE_STRIP:r.lines+=c*(u-1);break;case s.LINE_LOOP:r.lines+=c*u;break;case s.POINTS:r.points+=c*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:o,update:a}}function rS(s,e){return s[0]-e[0]}function nS(s,e){return Math.abs(e[1])-Math.abs(s[1])}function aS(s,e,r){const a={},o=new Float32Array(8),u=new WeakMap,h=new er,c=[];for(let m=0;m<8;m++)c[m]=[m,0];function p(m,g,y){const _=m.morphTargetInfluences;if(e.isWebGL2===!0){const S=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,T=S!==void 0?S.length:0;let E=u.get(g);if(E===void 0||E.count!==T){let I=function(){q.dispose(),u.delete(g),g.removeEventListener("dispose",I)};E!==void 0&&E.texture.dispose();const w=g.morphAttributes.position!==void 0,k=g.morphAttributes.normal!==void 0,D=g.morphAttributes.color!==void 0,z=g.morphAttributes.position||[],O=g.morphAttributes.normal||[],se=g.morphAttributes.color||[];let C=0;w===!0&&(C=1),k===!0&&(C=2),D===!0&&(C=3);let P=g.attributes.position.count*C,fe=1;P>e.maxTextureSize&&(fe=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const de=new Float32Array(P*fe*4*T),q=new Nm(de,P,fe,T);q.type=sa,q.needsUpdate=!0;const re=C*4;for(let ne=0;ne<T;ne++){const ge=z[ne],ie=O[ne],W=se[ne],te=P*fe*4*ne;for(let A=0;A<ge.count;A++){const U=A*re;w===!0&&(h.fromBufferAttribute(ge,A),de[te+U+0]=h.x,de[te+U+1]=h.y,de[te+U+2]=h.z,de[te+U+3]=0),k===!0&&(h.fromBufferAttribute(ie,A),de[te+U+4]=h.x,de[te+U+5]=h.y,de[te+U+6]=h.z,de[te+U+7]=0),D===!0&&(h.fromBufferAttribute(W,A),de[te+U+8]=h.x,de[te+U+9]=h.y,de[te+U+10]=h.z,de[te+U+11]=W.itemSize===4?h.w:1)}}E={count:T,texture:q,size:new ot(P,fe)},u.set(g,E),g.addEventListener("dispose",I)}let x=0;for(let I=0;I<_.length;I++)x+=_[I];const v=g.morphTargetsRelative?1:1-x;y.getUniforms().setValue(s,"morphTargetBaseInfluence",v),y.getUniforms().setValue(s,"morphTargetInfluences",_),y.getUniforms().setValue(s,"morphTargetsTexture",E.texture,r),y.getUniforms().setValue(s,"morphTargetsTextureSize",E.size)}else{const S=_===void 0?0:_.length;let T=a[g.id];if(T===void 0||T.length!==S){T=[];for(let w=0;w<S;w++)T[w]=[w,0];a[g.id]=T}for(let w=0;w<S;w++){const k=T[w];k[0]=w,k[1]=_[w]}T.sort(nS);for(let w=0;w<8;w++)w<S&&T[w][1]?(c[w][0]=T[w][0],c[w][1]=T[w][1]):(c[w][0]=Number.MAX_SAFE_INTEGER,c[w][1]=0);c.sort(rS);const E=g.morphAttributes.position,x=g.morphAttributes.normal;let v=0;for(let w=0;w<8;w++){const k=c[w],D=k[0],z=k[1];D!==Number.MAX_SAFE_INTEGER&&z?(E&&g.getAttribute("morphTarget"+w)!==E[D]&&g.setAttribute("morphTarget"+w,E[D]),x&&g.getAttribute("morphNormal"+w)!==x[D]&&g.setAttribute("morphNormal"+w,x[D]),o[w]=z,v+=z):(E&&g.hasAttribute("morphTarget"+w)===!0&&g.deleteAttribute("morphTarget"+w),x&&g.hasAttribute("morphNormal"+w)===!0&&g.deleteAttribute("morphNormal"+w),o[w]=0)}const I=g.morphTargetsRelative?1:1-v;y.getUniforms().setValue(s,"morphTargetBaseInfluence",I),y.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:p}}function iS(s,e,r,a){let o=new WeakMap;function u(p){const m=a.render.frame,g=p.geometry,y=e.get(p,g);if(o.get(y)!==m&&(e.update(y),o.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",c)===!1&&p.addEventListener("dispose",c),o.get(p)!==m&&(r.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&r.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return y}function h(){o=new WeakMap}function c(p){const m=p.target;m.removeEventListener("dispose",c),r.remove(m.instanceMatrix),m.instanceColor!==null&&r.remove(m.instanceColor)}return{update:u,dispose:h}}const Wm=new Nr,Gm=new Nm,Xm=new j_,jm=new Bm,zp=[],Bp=[],Hp=new Float32Array(16),Vp=new Float32Array(9),Wp=new Float32Array(4);function zi(s,e,r){const a=s[0];if(a<=0||a>0)return s;const o=e*r;let u=zp[o];if(u===void 0&&(u=new Float32Array(o),zp[o]=u),e!==0){a.toArray(u,0);for(let h=1,c=0;h!==e;++h)c+=r,s[h].toArray(u,c)}return u}function Yt(s,e){if(s.length!==e.length)return!1;for(let r=0,a=s.length;r<a;r++)if(s[r]!==e[r])return!1;return!0}function qt(s,e){for(let r=0,a=e.length;r<a;r++)s[r]=e[r]}function vl(s,e){let r=Bp[e];r===void 0&&(r=new Int32Array(e),Bp[e]=r);for(let a=0;a!==e;++a)r[a]=s.allocateTextureUnit();return r}function sS(s,e){const r=this.cache;r[0]!==e&&(s.uniform1f(this.addr,e),r[0]=e)}function oS(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Yt(r,e))return;s.uniform2fv(this.addr,e),qt(r,e)}}function lS(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(Yt(r,e))return;s.uniform3fv(this.addr,e),qt(r,e)}}function uS(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Yt(r,e))return;s.uniform4fv(this.addr,e),qt(r,e)}}function cS(s,e){const r=this.cache,a=e.elements;if(a===void 0){if(Yt(r,e))return;s.uniformMatrix2fv(this.addr,!1,e),qt(r,e)}else{if(Yt(r,a))return;Wp.set(a),s.uniformMatrix2fv(this.addr,!1,Wp),qt(r,a)}}function dS(s,e){const r=this.cache,a=e.elements;if(a===void 0){if(Yt(r,e))return;s.uniformMatrix3fv(this.addr,!1,e),qt(r,e)}else{if(Yt(r,a))return;Vp.set(a),s.uniformMatrix3fv(this.addr,!1,Vp),qt(r,a)}}function hS(s,e){const r=this.cache,a=e.elements;if(a===void 0){if(Yt(r,e))return;s.uniformMatrix4fv(this.addr,!1,e),qt(r,e)}else{if(Yt(r,a))return;Hp.set(a),s.uniformMatrix4fv(this.addr,!1,Hp),qt(r,a)}}function fS(s,e){const r=this.cache;r[0]!==e&&(s.uniform1i(this.addr,e),r[0]=e)}function pS(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Yt(r,e))return;s.uniform2iv(this.addr,e),qt(r,e)}}function mS(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Yt(r,e))return;s.uniform3iv(this.addr,e),qt(r,e)}}function gS(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Yt(r,e))return;s.uniform4iv(this.addr,e),qt(r,e)}}function vS(s,e){const r=this.cache;r[0]!==e&&(s.uniform1ui(this.addr,e),r[0]=e)}function _S(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Yt(r,e))return;s.uniform2uiv(this.addr,e),qt(r,e)}}function xS(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Yt(r,e))return;s.uniform3uiv(this.addr,e),qt(r,e)}}function yS(s,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Yt(r,e))return;s.uniform4uiv(this.addr,e),qt(r,e)}}function SS(s,e,r){const a=this.cache,o=r.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),r.setTexture2D(e||Wm,o)}function bS(s,e,r){const a=this.cache,o=r.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),r.setTexture3D(e||Xm,o)}function MS(s,e,r){const a=this.cache,o=r.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),r.setTextureCube(e||jm,o)}function ES(s,e,r){const a=this.cache,o=r.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),r.setTexture2DArray(e||Gm,o)}function TS(s){switch(s){case 5126:return sS;case 35664:return oS;case 35665:return lS;case 35666:return uS;case 35674:return cS;case 35675:return dS;case 35676:return hS;case 5124:case 35670:return fS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return vS;case 36294:return _S;case 36295:return xS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return bS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return ES}}function wS(s,e){s.uniform1fv(this.addr,e)}function AS(s,e){const r=zi(e,this.size,2);s.uniform2fv(this.addr,r)}function CS(s,e){const r=zi(e,this.size,3);s.uniform3fv(this.addr,r)}function RS(s,e){const r=zi(e,this.size,4);s.uniform4fv(this.addr,r)}function LS(s,e){const r=zi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,r)}function PS(s,e){const r=zi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,r)}function NS(s,e){const r=zi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,r)}function US(s,e){s.uniform1iv(this.addr,e)}function IS(s,e){s.uniform2iv(this.addr,e)}function DS(s,e){s.uniform3iv(this.addr,e)}function OS(s,e){s.uniform4iv(this.addr,e)}function kS(s,e){s.uniform1uiv(this.addr,e)}function FS(s,e){s.uniform2uiv(this.addr,e)}function zS(s,e){s.uniform3uiv(this.addr,e)}function BS(s,e){s.uniform4uiv(this.addr,e)}function HS(s,e,r){const a=this.cache,o=e.length,u=vl(r,o);Yt(a,u)||(s.uniform1iv(this.addr,u),qt(a,u));for(let h=0;h!==o;++h)r.setTexture2D(e[h]||Wm,u[h])}function VS(s,e,r){const a=this.cache,o=e.length,u=vl(r,o);Yt(a,u)||(s.uniform1iv(this.addr,u),qt(a,u));for(let h=0;h!==o;++h)r.setTexture3D(e[h]||Xm,u[h])}function WS(s,e,r){const a=this.cache,o=e.length,u=vl(r,o);Yt(a,u)||(s.uniform1iv(this.addr,u),qt(a,u));for(let h=0;h!==o;++h)r.setTextureCube(e[h]||jm,u[h])}function GS(s,e,r){const a=this.cache,o=e.length,u=vl(r,o);Yt(a,u)||(s.uniform1iv(this.addr,u),qt(a,u));for(let h=0;h!==o;++h)r.setTexture2DArray(e[h]||Gm,u[h])}function XS(s){switch(s){case 5126:return wS;case 35664:return AS;case 35665:return CS;case 35666:return RS;case 35674:return LS;case 35675:return PS;case 35676:return NS;case 5124:case 35670:return US;case 35667:case 35671:return IS;case 35668:case 35672:return DS;case 35669:case 35673:return OS;case 5125:return kS;case 36294:return FS;case 36295:return zS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return HS;case 35679:case 36299:case 36307:return VS;case 35680:case 36300:case 36308:case 36293:return WS;case 36289:case 36303:case 36311:case 36292:return GS}}class jS{constructor(e,r,a){this.id=e,this.addr=a,this.cache=[],this.setValue=TS(r.type)}}class YS{constructor(e,r,a){this.id=e,this.addr=a,this.cache=[],this.size=r.size,this.setValue=XS(r.type)}}class qS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,a){const o=this.seq;for(let u=0,h=o.length;u!==h;++u){const c=o[u];c.setValue(e,r[c.id],a)}}}const Cc=/(\w+)(\])?(\[|\.)?/g;function Gp(s,e){s.seq.push(e),s.map[e.id]=e}function ZS(s,e,r){const a=s.name,o=a.length;for(Cc.lastIndex=0;;){const u=Cc.exec(a),h=Cc.lastIndex;let c=u[1];const p=u[2]==="]",m=u[3];if(p&&(c=c|0),m===void 0||m==="["&&h+2===o){Gp(r,m===void 0?new jS(c,s,e):new YS(c,s,e));break}else{let g=r.map[c];g===void 0&&(g=new qS(c),Gp(r,g)),r=g}}}class dl{constructor(e,r){this.seq=[],this.map={};const a=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const u=e.getActiveUniform(r,o),h=e.getUniformLocation(r,u.name);ZS(u,h,this)}}setValue(e,r,a,o){const u=this.map[r];u!==void 0&&u.setValue(e,a,o)}setOptional(e,r,a){const o=r[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,r,a,o){for(let u=0,h=r.length;u!==h;++u){const c=r[u],p=a[c.id];p.needsUpdate!==!1&&c.setValue(e,p.value,o)}}static seqWithValue(e,r){const a=[];for(let o=0,u=e.length;o!==u;++o){const h=e[o];h.id in r&&a.push(h)}return a}}function Xp(s,e,r){const a=s.createShader(e);return s.shaderSource(a,r),s.compileShader(a),a}let JS=0;function KS(s,e){const r=s.split(`
`),a=[],o=Math.max(e-6,0),u=Math.min(e+6,r.length);for(let h=o;h<u;h++){const c=h+1;a.push(`${c===e?">":" "} ${c}: ${r[h]}`)}return a.join(`
`)}function QS(s){switch(s){case pn:return["Linear","( value )"];case ct:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function jp(s,e,r){const a=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(a&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const h=parseInt(u[1]);return r.toUpperCase()+`

`+o+`

`+KS(s.getShaderSource(e),h)}else return o}function $S(s,e){const r=QS(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+r[0]+r[1]+"; }"}function eb(s,e){let r;switch(e){case l_:r="Linear";break;case u_:r="Reinhard";break;case c_:r="OptimizedCineon";break;case d_:r="ACESFilmic";break;case h_:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+s+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}function tb(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function rb(s){const e=[];for(const r in s){const a=s[r];a!==!1&&e.push("#define "+r+" "+a)}return e.join(`
`)}function nb(s,e){const r={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const u=s.getActiveAttrib(e,o),h=u.name;let c=1;u.type===s.FLOAT_MAT2&&(c=2),u.type===s.FLOAT_MAT3&&(c=3),u.type===s.FLOAT_MAT4&&(c=4),r[h]={type:u.type,location:s.getAttribLocation(e,h),locationSize:c}}return r}function Ls(s){return s!==""}function Yp(s,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(s){return s.replace(ab,sb)}const ib=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sb(s,e){let r=ut[e];if(r===void 0){const a=ib.get(e);if(a!==void 0)r=ut[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Vc(r)}const ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(s){return s.replace(ob,lb)}function lb(s,e,r,a){let o="";for(let u=parseInt(e);u<parseInt(r);u++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Jp(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ub(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function cb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ui:case Ii:e="ENVMAP_TYPE_CUBE";break;case pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function db(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ii&&(e="ENVMAP_MODE_REFRACTION"),e}function hb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xc:e="ENVMAP_BLENDING_MULTIPLY";break;case s_:e="ENVMAP_BLENDING_MIX";break;case o_:e="ENVMAP_BLENDING_ADD";break}return e}function fb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:a,maxMip:r}}function pb(s,e,r,a){const o=s.getContext(),u=r.defines;let h=r.vertexShader,c=r.fragmentShader;const p=ub(r),m=cb(r),g=db(r),y=hb(r),_=fb(r),S=r.isWebGL2?"":tb(r),T=rb(u),E=o.createProgram();let x,v,I=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(x=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,T].filter(Ls).join(`
`),x.length>0&&(x+=`
`),v=[S,"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,T].filter(Ls).join(`
`),v.length>0&&(v+=`
`)):(x=[Jp(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,T,r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+g:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors&&r.isWebGL2?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+p:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.useLegacyLights?"#define LEGACY_LIGHTS":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&r.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),v=[S,Jp(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,T,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+m:"",r.envMap?"#define "+g:"",r.envMap?"#define "+y:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+p:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.useLegacyLights?"#define LEGACY_LIGHTS":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&r.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==la?"#define TONE_MAPPING":"",r.toneMapping!==la?ut.tonemapping_pars_fragment:"",r.toneMapping!==la?eb("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,$S("linearToOutputTexel",r.outputColorSpace),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Ls).join(`
`)),h=Vc(h),h=Yp(h,r),h=qp(h,r),c=Vc(c),c=Yp(c,r),c=qp(c,r),h=Zp(h),c=Zp(c),r.isWebGL2&&r.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",r.glslVersion===mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=I+x+h,k=I+v+c,D=Xp(o,o.VERTEX_SHADER,w),z=Xp(o,o.FRAGMENT_SHADER,k);if(o.attachShader(E,D),o.attachShader(E,z),r.index0AttributeName!==void 0?o.bindAttribLocation(E,0,r.index0AttributeName):r.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E),s.debug.checkShaderErrors){const C=o.getProgramInfoLog(E).trim(),P=o.getShaderInfoLog(D).trim(),fe=o.getShaderInfoLog(z).trim();let de=!0,q=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,D,z);else{const re=jp(o,D,"vertex"),ne=jp(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Program Info Log: `+C+`
`+re+`
`+ne)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(P===""||fe==="")&&(q=!1);q&&(this.diagnostics={runnable:de,programLog:C,vertexShader:{log:P,prefix:x},fragmentShader:{log:fe,prefix:v}})}o.deleteShader(D),o.deleteShader(z);let O;this.getUniforms=function(){return O===void 0&&(O=new dl(o,E)),O};let se;return this.getAttributes=function(){return se===void 0&&(se=nb(o,E)),se},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=JS++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=z,this}let mb=0;class gb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(r),u=this._getShaderStage(a),h=this._getShaderCacheForMaterial(e);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const a of r)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let a=r.get(e);return a===void 0&&(a=new Set,r.set(e,a)),a}_getShaderStage(e){const r=this.shaderCache;let a=r.get(e);return a===void 0&&(a=new vb(e),r.set(e,a)),a}}class vb{constructor(e){this.id=mb++,this.code=e,this.usedTimes=0}}function _b(s,e,r,a,o,u,h){const c=new Um,p=new gb,m=[],g=o.isWebGL2,y=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return C===0?"uv":`uv${C}`}function x(C,P,fe,de,q){const re=de.fog,ne=q.geometry,ge=C.isMeshStandardMaterial?de.environment:null,ie=(C.isMeshStandardMaterial?r:e).get(C.envMap||ge),W=ie&&ie.mapping===pl?ie.image.height:null,te=T[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const A=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,U=A!==void 0?A.length:0;let X=0;ne.morphAttributes.position!==void 0&&(X=1),ne.morphAttributes.normal!==void 0&&(X=2),ne.morphAttributes.color!==void 0&&(X=3);let pe,me,be,Ce;if(te){const Er=hn[te];pe=Er.vertexShader,me=Er.fragmentShader}else pe=C.vertexShader,me=C.fragmentShader,p.update(C),be=p.getVertexShaderID(C),Ce=p.getFragmentShaderID(C);const Ne=s.getRenderTarget(),we=q.isInstancedMesh===!0,Ke=!!C.map,Ot=!!C.matcap,rt=!!ie,K=!!C.aoMap,bt=!!C.lightMap,Xe=!!C.bumpMap,et=!!C.normalMap,je=!!C.displacementMap,vt=!!C.emissiveMap,ke=!!C.metalnessMap,Oe=!!C.roughnessMap,Fe=C.anisotropy>0,qe=C.clearcoat>0,Ye=C.iridescence>0,L=C.sheen>0,M=C.transmission>0,j=Fe&&!!C.anisotropyMap,ve=qe&&!!C.clearcoatMap,le=qe&&!!C.clearcoatNormalMap,ce=qe&&!!C.clearcoatRoughnessMap,De=Ye&&!!C.iridescenceMap,ye=Ye&&!!C.iridescenceThicknessMap,ee=L&&!!C.sheenColorMap,F=L&&!!C.sheenRoughnessMap,he=!!C.specularMap,Le=!!C.specularColorMap,Re=!!C.specularIntensityMap,Pe=M&&!!C.transmissionMap,Qe=M&&!!C.thicknessMap,pt=!!C.gradientMap,H=!!C.alphaMap,Te=C.alphaTest>0,$=!!C.alphaHash,Me=!!C.extensions,Ae=!!ne.attributes.uv1,gt=!!ne.attributes.uv2,yt=!!ne.attributes.uv3;let Rt=la;return C.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Rt=s.toneMapping),{isWebGL2:g,shaderID:te,shaderType:C.type,shaderName:C.name,vertexShader:pe,fragmentShader:me,defines:C.defines,customVertexShaderID:be,customFragmentShaderID:Ce,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,instancing:we,instancingColor:we&&q.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:pn,map:Ke,matcap:Ot,envMap:rt,envMapMode:rt&&ie.mapping,envMapCubeUVHeight:W,aoMap:K,lightMap:bt,bumpMap:Xe,normalMap:et,displacementMap:_&&je,emissiveMap:vt,normalMapObjectSpace:et&&C.normalMapType===T_,normalMapTangentSpace:et&&C.normalMapType===Am,metalnessMap:ke,roughnessMap:Oe,anisotropy:Fe,anisotropyMap:j,clearcoat:qe,clearcoatMap:ve,clearcoatNormalMap:le,clearcoatRoughnessMap:ce,iridescence:Ye,iridescenceMap:De,iridescenceThicknessMap:ye,sheen:L,sheenColorMap:ee,sheenRoughnessMap:F,specularMap:he,specularColorMap:Le,specularIntensityMap:Re,transmission:M,transmissionMap:Pe,thicknessMap:Qe,gradientMap:pt,opaque:C.transparent===!1&&C.blending===Pi,alphaMap:H,alphaTest:Te,alphaHash:$,combine:C.combine,mapUv:Ke&&E(C.map.channel),aoMapUv:K&&E(C.aoMap.channel),lightMapUv:bt&&E(C.lightMap.channel),bumpMapUv:Xe&&E(C.bumpMap.channel),normalMapUv:et&&E(C.normalMap.channel),displacementMapUv:je&&E(C.displacementMap.channel),emissiveMapUv:vt&&E(C.emissiveMap.channel),metalnessMapUv:ke&&E(C.metalnessMap.channel),roughnessMapUv:Oe&&E(C.roughnessMap.channel),anisotropyMapUv:j&&E(C.anisotropyMap.channel),clearcoatMapUv:ve&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:le&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:F&&E(C.sheenRoughnessMap.channel),specularMapUv:he&&E(C.specularMap.channel),specularColorMapUv:Le&&E(C.specularColorMap.channel),specularIntensityMapUv:Re&&E(C.specularIntensityMap.channel),transmissionMapUv:Pe&&E(C.transmissionMap.channel),thicknessMapUv:Qe&&E(C.thicknessMap.channel),alphaMapUv:H&&E(C.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(et||Fe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:gt,vertexUv3s:yt,pointsUvs:q.isPoints===!0&&!!ne.attributes.uv&&(Ke||H),fog:!!re,useFog:C.fog===!0,fogExp2:re&&re.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:q.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:X,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&fe.length>0,shadowMapType:s.shadowMap.type,toneMapping:Rt,useLegacyLights:s._useLegacyLights,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===fn,flipSided:C.side===Mr,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Me&&C.extensions.derivatives===!0,extensionFragDepth:Me&&C.extensions.fragDepth===!0,extensionDrawBuffers:Me&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&C.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||a.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||a.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||a.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function v(C){const P=[];if(C.shaderID?P.push(C.shaderID):(P.push(C.customVertexShaderID),P.push(C.customFragmentShaderID)),C.defines!==void 0)for(const fe in C.defines)P.push(fe),P.push(C.defines[fe]);return C.isRawShaderMaterial===!1&&(I(P,C),w(P,C),P.push(s.outputColorSpace)),P.push(C.customProgramCacheKey),P.join()}function I(C,P){C.push(P.precision),C.push(P.outputColorSpace),C.push(P.envMapMode),C.push(P.envMapCubeUVHeight),C.push(P.mapUv),C.push(P.alphaMapUv),C.push(P.lightMapUv),C.push(P.aoMapUv),C.push(P.bumpMapUv),C.push(P.normalMapUv),C.push(P.displacementMapUv),C.push(P.emissiveMapUv),C.push(P.metalnessMapUv),C.push(P.roughnessMapUv),C.push(P.anisotropyMapUv),C.push(P.clearcoatMapUv),C.push(P.clearcoatNormalMapUv),C.push(P.clearcoatRoughnessMapUv),C.push(P.iridescenceMapUv),C.push(P.iridescenceThicknessMapUv),C.push(P.sheenColorMapUv),C.push(P.sheenRoughnessMapUv),C.push(P.specularMapUv),C.push(P.specularColorMapUv),C.push(P.specularIntensityMapUv),C.push(P.transmissionMapUv),C.push(P.thicknessMapUv),C.push(P.combine),C.push(P.fogExp2),C.push(P.sizeAttenuation),C.push(P.morphTargetsCount),C.push(P.morphAttributeCount),C.push(P.numDirLights),C.push(P.numPointLights),C.push(P.numSpotLights),C.push(P.numSpotLightMaps),C.push(P.numHemiLights),C.push(P.numRectAreaLights),C.push(P.numDirLightShadows),C.push(P.numPointLightShadows),C.push(P.numSpotLightShadows),C.push(P.numSpotLightShadowsWithMaps),C.push(P.shadowMapType),C.push(P.toneMapping),C.push(P.numClippingPlanes),C.push(P.numClipIntersection),C.push(P.depthPacking)}function w(C,P){c.disableAll(),P.isWebGL2&&c.enable(0),P.supportsVertexTextures&&c.enable(1),P.instancing&&c.enable(2),P.instancingColor&&c.enable(3),P.matcap&&c.enable(4),P.envMap&&c.enable(5),P.normalMapObjectSpace&&c.enable(6),P.normalMapTangentSpace&&c.enable(7),P.clearcoat&&c.enable(8),P.iridescence&&c.enable(9),P.alphaTest&&c.enable(10),P.vertexColors&&c.enable(11),P.vertexAlphas&&c.enable(12),P.vertexUv1s&&c.enable(13),P.vertexUv2s&&c.enable(14),P.vertexUv3s&&c.enable(15),P.vertexTangents&&c.enable(16),P.anisotropy&&c.enable(17),C.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.skinning&&c.enable(4),P.morphTargets&&c.enable(5),P.morphNormals&&c.enable(6),P.morphColors&&c.enable(7),P.premultipliedAlpha&&c.enable(8),P.shadowMapEnabled&&c.enable(9),P.useLegacyLights&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),C.push(c.mask)}function k(C){const P=T[C.type];let fe;if(P){const de=hn[P];fe=a0.clone(de.uniforms)}else fe=C.uniforms;return fe}function D(C,P){let fe;for(let de=0,q=m.length;de<q;de++){const re=m[de];if(re.cacheKey===P){fe=re,++fe.usedTimes;break}}return fe===void 0&&(fe=new pb(s,P,C,u),m.push(fe)),fe}function z(C){if(--C.usedTimes===0){const P=m.indexOf(C);m[P]=m[m.length-1],m.pop(),C.destroy()}}function O(C){p.remove(C)}function se(){p.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:k,acquireProgram:D,releaseProgram:z,releaseShaderCache:O,programs:m,dispose:se}}function xb(){let s=new WeakMap;function e(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function a(u,h,c){s.get(u)[h]=c}function o(){s=new WeakMap}return{get:e,remove:r,update:a,dispose:o}}function yb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Kp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qp(){const s=[];let e=0;const r=[],a=[],o=[];function u(){e=0,r.length=0,a.length=0,o.length=0}function h(y,_,S,T,E,x){let v=s[e];return v===void 0?(v={id:y.id,object:y,geometry:_,material:S,groupOrder:T,renderOrder:y.renderOrder,z:E,group:x},s[e]=v):(v.id=y.id,v.object=y,v.geometry=_,v.material=S,v.groupOrder=T,v.renderOrder=y.renderOrder,v.z=E,v.group=x),e++,v}function c(y,_,S,T,E,x){const v=h(y,_,S,T,E,x);S.transmission>0?a.push(v):S.transparent===!0?o.push(v):r.push(v)}function p(y,_,S,T,E,x){const v=h(y,_,S,T,E,x);S.transmission>0?a.unshift(v):S.transparent===!0?o.unshift(v):r.unshift(v)}function m(y,_){r.length>1&&r.sort(y||yb),a.length>1&&a.sort(_||Kp),o.length>1&&o.sort(_||Kp)}function g(){for(let y=e,_=s.length;y<_;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:r,transmissive:a,transparent:o,init:u,push:c,unshift:p,finish:g,sort:m}}function Sb(){let s=new WeakMap;function e(a,o){const u=s.get(a);let h;return u===void 0?(h=new Qp,s.set(a,[h])):o>=u.length?(h=new Qp,u.push(h)):h=u[o],h}function r(){s=new WeakMap}return{get:e,dispose:r}}function bb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new G,color:new mt};break;case"SpotLight":r={position:new G,direction:new G,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new G,color:new mt,distance:0,decay:0};break;case"HemisphereLight":r={direction:new G,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":r={color:new mt,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=r,r}}}function Mb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=r,r}}}let Eb=0;function Tb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function wb(s,e){const r=new bb,a=Mb(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)o.probe.push(new G);const u=new G,h=new Ut,c=new Ut;function p(g,y){let _=0,S=0,T=0;for(let fe=0;fe<9;fe++)o.probe[fe].set(0,0,0);let E=0,x=0,v=0,I=0,w=0,k=0,D=0,z=0,O=0,se=0;g.sort(Tb);const C=y===!0?Math.PI:1;for(let fe=0,de=g.length;fe<de;fe++){const q=g[fe],re=q.color,ne=q.intensity,ge=q.distance,ie=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)_+=re.r*ne*C,S+=re.g*ne*C,T+=re.b*ne*C;else if(q.isLightProbe)for(let W=0;W<9;W++)o.probe[W].addScaledVector(q.sh.coefficients[W],ne);else if(q.isDirectionalLight){const W=r.get(q);if(W.color.copy(q.color).multiplyScalar(q.intensity*C),q.castShadow){const te=q.shadow,A=a.get(q);A.shadowBias=te.bias,A.shadowNormalBias=te.normalBias,A.shadowRadius=te.radius,A.shadowMapSize=te.mapSize,o.directionalShadow[E]=A,o.directionalShadowMap[E]=ie,o.directionalShadowMatrix[E]=q.shadow.matrix,k++}o.directional[E]=W,E++}else if(q.isSpotLight){const W=r.get(q);W.position.setFromMatrixPosition(q.matrixWorld),W.color.copy(re).multiplyScalar(ne*C),W.distance=ge,W.coneCos=Math.cos(q.angle),W.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),W.decay=q.decay,o.spot[v]=W;const te=q.shadow;if(q.map&&(o.spotLightMap[O]=q.map,O++,te.updateMatrices(q),q.castShadow&&se++),o.spotLightMatrix[v]=te.matrix,q.castShadow){const A=a.get(q);A.shadowBias=te.bias,A.shadowNormalBias=te.normalBias,A.shadowRadius=te.radius,A.shadowMapSize=te.mapSize,o.spotShadow[v]=A,o.spotShadowMap[v]=ie,z++}v++}else if(q.isRectAreaLight){const W=r.get(q);W.color.copy(re).multiplyScalar(ne),W.halfWidth.set(q.width*.5,0,0),W.halfHeight.set(0,q.height*.5,0),o.rectArea[I]=W,I++}else if(q.isPointLight){const W=r.get(q);if(W.color.copy(q.color).multiplyScalar(q.intensity*C),W.distance=q.distance,W.decay=q.decay,q.castShadow){const te=q.shadow,A=a.get(q);A.shadowBias=te.bias,A.shadowNormalBias=te.normalBias,A.shadowRadius=te.radius,A.shadowMapSize=te.mapSize,A.shadowCameraNear=te.camera.near,A.shadowCameraFar=te.camera.far,o.pointShadow[x]=A,o.pointShadowMap[x]=ie,o.pointShadowMatrix[x]=q.shadow.matrix,D++}o.point[x]=W,x++}else if(q.isHemisphereLight){const W=r.get(q);W.skyColor.copy(q.color).multiplyScalar(ne*C),W.groundColor.copy(q.groundColor).multiplyScalar(ne*C),o.hemi[w]=W,w++}}I>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ie.LTC_FLOAT_1,o.rectAreaLTC2=Ie.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ie.LTC_HALF_1,o.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=_,o.ambient[1]=S,o.ambient[2]=T;const P=o.hash;(P.directionalLength!==E||P.pointLength!==x||P.spotLength!==v||P.rectAreaLength!==I||P.hemiLength!==w||P.numDirectionalShadows!==k||P.numPointShadows!==D||P.numSpotShadows!==z||P.numSpotMaps!==O)&&(o.directional.length=E,o.spot.length=v,o.rectArea.length=I,o.point.length=x,o.hemi.length=w,o.directionalShadow.length=k,o.directionalShadowMap.length=k,o.pointShadow.length=D,o.pointShadowMap.length=D,o.spotShadow.length=z,o.spotShadowMap.length=z,o.directionalShadowMatrix.length=k,o.pointShadowMatrix.length=D,o.spotLightMatrix.length=z+O-se,o.spotLightMap.length=O,o.numSpotLightShadowsWithMaps=se,P.directionalLength=E,P.pointLength=x,P.spotLength=v,P.rectAreaLength=I,P.hemiLength=w,P.numDirectionalShadows=k,P.numPointShadows=D,P.numSpotShadows=z,P.numSpotMaps=O,o.version=Eb++)}function m(g,y){let _=0,S=0,T=0,E=0,x=0;const v=y.matrixWorldInverse;for(let I=0,w=g.length;I<w;I++){const k=g[I];if(k.isDirectionalLight){const D=o.directional[_];D.direction.setFromMatrixPosition(k.matrixWorld),u.setFromMatrixPosition(k.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(v),_++}else if(k.isSpotLight){const D=o.spot[T];D.position.setFromMatrixPosition(k.matrixWorld),D.position.applyMatrix4(v),D.direction.setFromMatrixPosition(k.matrixWorld),u.setFromMatrixPosition(k.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(v),T++}else if(k.isRectAreaLight){const D=o.rectArea[E];D.position.setFromMatrixPosition(k.matrixWorld),D.position.applyMatrix4(v),c.identity(),h.copy(k.matrixWorld),h.premultiply(v),c.extractRotation(h),D.halfWidth.set(k.width*.5,0,0),D.halfHeight.set(0,k.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),E++}else if(k.isPointLight){const D=o.point[S];D.position.setFromMatrixPosition(k.matrixWorld),D.position.applyMatrix4(v),S++}else if(k.isHemisphereLight){const D=o.hemi[x];D.direction.setFromMatrixPosition(k.matrixWorld),D.direction.transformDirection(v),x++}}}return{setup:p,setupView:m,state:o}}function $p(s,e){const r=new wb(s,e),a=[],o=[];function u(){a.length=0,o.length=0}function h(g){a.push(g)}function c(g){o.push(g)}function p(g){r.setup(a,g)}function m(g){r.setupView(a,g)}return{init:u,state:{lightsArray:a,shadowsArray:o,lights:r},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:c}}function Ab(s,e){let r=new WeakMap;function a(u,h=0){const c=r.get(u);let p;return c===void 0?(p=new $p(s,e),r.set(u,[p])):h>=c.length?(p=new $p(s,e),c.push(p)):p=c[h],p}function o(){r=new WeakMap}return{get:a,dispose:o}}class Cb extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rb extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nb(s,e,r){let a=new qc;const o=new ot,u=new ot,h=new er,c=new Cb({depthPacking:E_}),p=new Rb,m={},g=r.maxTextureSize,y={[ca]:Mr,[Mr]:ca,[fn]:fn},_=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Lb,fragmentShader:Pb}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const T=new Wr;T.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new an(T,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gm;let v=this.type;this.render=function(D,z,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;const se=s.getRenderTarget(),C=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),fe=s.state;fe.setBlending(oa),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const de=v!==Pn&&this.type===Pn,q=v===Pn&&this.type!==Pn;for(let re=0,ne=D.length;re<ne;re++){const ge=D[re],ie=ge.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;o.copy(ie.mapSize);const W=ie.getFrameExtents();if(o.multiply(W),u.copy(ie.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/W.x),o.x=u.x*W.x,ie.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/W.y),o.y=u.y*W.y,ie.mapSize.y=u.y)),ie.map===null||de===!0||q===!0){const A=this.type!==Pn?{minFilter:fr,magFilter:fr}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Oa(o.x,o.y,A),ie.map.texture.name=ge.name+".shadowMap",ie.camera.updateProjectionMatrix()}s.setRenderTarget(ie.map),s.clear();const te=ie.getViewportCount();for(let A=0;A<te;A++){const U=ie.getViewport(A);h.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),fe.viewport(h),ie.updateMatrices(ge,A),a=ie.getFrustum(),k(z,O,ie.camera,ge,this.type)}ie.isPointLightShadow!==!0&&this.type===Pn&&I(ie,O),ie.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(se,C,P)};function I(D,z){const O=e.update(E);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Oa(o.x,o.y)),_.uniforms.shadow_pass.value=D.map.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(z,null,O,_,E,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(z,null,O,S,E,null)}function w(D,z,O,se){let C=null;const P=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(P!==void 0)C=P;else if(C=O.isPointLight===!0?p:c,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const fe=C.uuid,de=z.uuid;let q=m[fe];q===void 0&&(q={},m[fe]=q);let re=q[de];re===void 0&&(re=C.clone(),q[de]=re),C=re}if(C.visible=z.visible,C.wireframe=z.wireframe,se===Pn?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:y[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,O.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const fe=s.properties.get(C);fe.light=O}return C}function k(D,z,O,se,C){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&C===Pn)&&(!D.frustumCulled||a.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);const fe=e.update(D),de=D.material;if(Array.isArray(de)){const q=fe.groups;for(let re=0,ne=q.length;re<ne;re++){const ge=q[re],ie=de[ge.materialIndex];if(ie&&ie.visible){const W=w(D,ie,se,C);s.renderBufferDirect(O,null,fe,W,D,ge)}}}else if(de.visible){const q=w(D,de,se,C);s.renderBufferDirect(O,null,fe,q,D,null)}}const P=D.children;for(let fe=0,de=P.length;fe<de;fe++)k(P[fe],z,O,se,C)}}function Ub(s,e,r){const a=r.isWebGL2;function o(){let H=!1;const Te=new er;let $=null;const Me=new er(0,0,0,0);return{setMask:function(Ae){$!==Ae&&!H&&(s.colorMask(Ae,Ae,Ae,Ae),$=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,gt,yt,Rt,Er){Er===!0&&(Ae*=Rt,gt*=Rt,yt*=Rt),Te.set(Ae,gt,yt,Rt),Me.equals(Te)===!1&&(s.clearColor(Ae,gt,yt,Rt),Me.copy(Te))},reset:function(){H=!1,$=null,Me.set(-1,0,0,0)}}}function u(){let H=!1,Te=null,$=null,Me=null;return{setTest:function(Ae){Ae?Ne(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Ae){Te!==Ae&&!H&&(s.depthMask(Ae),Te=Ae)},setFunc:function(Ae){if($!==Ae){switch(Ae){case $v:s.depthFunc(s.NEVER);break;case e_:s.depthFunc(s.ALWAYS);break;case t_:s.depthFunc(s.LESS);break;case Ic:s.depthFunc(s.LEQUAL);break;case r_:s.depthFunc(s.EQUAL);break;case n_:s.depthFunc(s.GEQUAL);break;case a_:s.depthFunc(s.GREATER);break;case i_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=Ae}},setLocked:function(Ae){H=Ae},setClear:function(Ae){Me!==Ae&&(s.clearDepth(Ae),Me=Ae)},reset:function(){H=!1,Te=null,$=null,Me=null}}}function h(){let H=!1,Te=null,$=null,Me=null,Ae=null,gt=null,yt=null,Rt=null,Er=null;return{setTest:function(Mt){H||(Mt?Ne(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Mt){Te!==Mt&&!H&&(s.stencilMask(Mt),Te=Mt)},setFunc:function(Mt,Tr,kt){($!==Mt||Me!==Tr||Ae!==kt)&&(s.stencilFunc(Mt,Tr,kt),$=Mt,Me=Tr,Ae=kt)},setOp:function(Mt,Tr,kt){(gt!==Mt||yt!==Tr||Rt!==kt)&&(s.stencilOp(Mt,Tr,kt),gt=Mt,yt=Tr,Rt=kt)},setLocked:function(Mt){H=Mt},setClear:function(Mt){Er!==Mt&&(s.clearStencil(Mt),Er=Mt)},reset:function(){H=!1,Te=null,$=null,Me=null,Ae=null,gt=null,yt=null,Rt=null,Er=null}}}const c=new o,p=new u,m=new h,g=new WeakMap,y=new WeakMap;let _={},S={},T=new WeakMap,E=[],x=null,v=!1,I=null,w=null,k=null,D=null,z=null,O=null,se=null,C=!1,P=null,fe=null,de=null,q=null,re=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ge=!1,ie=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),ge=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),ge=ie>=2);let te=null,A={};const U=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),pe=new er().fromArray(U),me=new er().fromArray(X);function be(H,Te,$,Me){const Ae=new Uint8Array(4),gt=s.createTexture();s.bindTexture(H,gt),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let yt=0;yt<$;yt++)a&&(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)?s.texImage3D(Te,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Te+yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return gt}const Ce={};Ce[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),Ce[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),a&&(Ce[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ce[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Ne(s.DEPTH_TEST),p.setFunc(Ic),je(!1),vt(Ff),Ne(s.CULL_FACE),Xe(oa);function Ne(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function we(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ke(H,Te){return S[H]!==Te?(s.bindFramebuffer(H,Te),S[H]=Te,a&&(H===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Te),H===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Te)),!0):!1}function Ot(H,Te){let $=E,Me=!1;if(H)if($=T.get(Te),$===void 0&&($=[],T.set(Te,$)),H.isWebGLMultipleRenderTargets){const Ae=H.texture;if($.length!==Ae.length||$[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,yt=Ae.length;gt<yt;gt++)$[gt]=s.COLOR_ATTACHMENT0+gt;$.length=Ae.length,Me=!0}}else $[0]!==s.COLOR_ATTACHMENT0&&($[0]=s.COLOR_ATTACHMENT0,Me=!0);else $[0]!==s.BACK&&($[0]=s.BACK,Me=!0);Me&&(r.isWebGL2?s.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function rt(H){return x!==H?(s.useProgram(H),x=H,!0):!1}const K={[Ri]:s.FUNC_ADD,[Vv]:s.FUNC_SUBTRACT,[Wv]:s.FUNC_REVERSE_SUBTRACT};if(a)K[Vf]=s.MIN,K[Wf]=s.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(K[Vf]=H.MIN_EXT,K[Wf]=H.MAX_EXT)}const bt={[Gv]:s.ZERO,[Xv]:s.ONE,[jv]:s.SRC_COLOR,[vm]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[Jv]:s.DST_COLOR,[qv]:s.DST_ALPHA,[Yv]:s.ONE_MINUS_SRC_COLOR,[_m]:s.ONE_MINUS_SRC_ALPHA,[Kv]:s.ONE_MINUS_DST_COLOR,[Zv]:s.ONE_MINUS_DST_ALPHA};function Xe(H,Te,$,Me,Ae,gt,yt,Rt){if(H===oa){v===!0&&(we(s.BLEND),v=!1);return}if(v===!1&&(Ne(s.BLEND),v=!0),H!==Hv){if(H!==I||Rt!==C){if((w!==Ri||z!==Ri)&&(s.blendEquation(s.FUNC_ADD),w=Ri,z=Ri),Rt)switch(H){case Pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zf:s.blendFunc(s.ONE,s.ONE);break;case Bf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}k=null,D=null,O=null,se=null,I=H,C=Rt}return}Ae=Ae||Te,gt=gt||$,yt=yt||Me,(Te!==w||Ae!==z)&&(s.blendEquationSeparate(K[Te],K[Ae]),w=Te,z=Ae),($!==k||Me!==D||gt!==O||yt!==se)&&(s.blendFuncSeparate(bt[$],bt[Me],bt[gt],bt[yt]),k=$,D=Me,O=gt,se=yt),I=H,C=!1}function et(H,Te){H.side===fn?we(s.CULL_FACE):Ne(s.CULL_FACE);let $=H.side===Mr;Te&&($=!$),je($),H.blending===Pi&&H.transparent===!1?Xe(oa):Xe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),p.setFunc(H.depthFunc),p.setTest(H.depthTest),p.setMask(H.depthWrite),c.setMask(H.colorWrite);const Me=H.stencilWrite;m.setTest(Me),Me&&(m.setMask(H.stencilWriteMask),m.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),m.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Oe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ne(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(H){P!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),P=H)}function vt(H){H!==Fv?(Ne(s.CULL_FACE),H!==fe&&(H===Ff?s.cullFace(s.BACK):H===zv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),fe=H}function ke(H){H!==de&&(ge&&s.lineWidth(H),de=H)}function Oe(H,Te,$){H?(Ne(s.POLYGON_OFFSET_FILL),(q!==Te||re!==$)&&(s.polygonOffset(Te,$),q=Te,re=$)):we(s.POLYGON_OFFSET_FILL)}function Fe(H){H?Ne(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function qe(H){H===void 0&&(H=s.TEXTURE0+ne-1),te!==H&&(s.activeTexture(H),te=H)}function Ye(H,Te,$){$===void 0&&(te===null?$=s.TEXTURE0+ne-1:$=te);let Me=A[$];Me===void 0&&(Me={type:void 0,texture:void 0},A[$]=Me),(Me.type!==H||Me.texture!==Te)&&(te!==$&&(s.activeTexture($),te=$),s.bindTexture(H,Te||Ce[H]),Me.type=H,Me.texture=Te)}function L(){const H=A[te];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function F(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(H){pe.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),pe.copy(H))}function Re(H){me.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),me.copy(H))}function Pe(H,Te){let $=y.get(Te);$===void 0&&($=new WeakMap,y.set(Te,$));let Me=$.get(H);Me===void 0&&(Me=s.getUniformBlockIndex(Te,H.name),$.set(H,Me))}function Qe(H,Te){const $=y.get(Te).get(H);g.get(Te)!==$&&(s.uniformBlockBinding(Te,$,H.__bindingPointIndex),g.set(Te,$))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),a===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},te=null,A={},S={},T=new WeakMap,E=[],x=null,v=!1,I=null,w=null,k=null,D=null,z=null,O=null,se=null,C=!1,P=null,fe=null,de=null,q=null,re=null,pe.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),c.reset(),p.reset(),m.reset()}return{buffers:{color:c,depth:p,stencil:m},enable:Ne,disable:we,bindFramebuffer:Ke,drawBuffers:Ot,useProgram:rt,setBlending:Xe,setMaterial:et,setFlipSided:je,setCullFace:vt,setLineWidth:ke,setPolygonOffset:Oe,setScissorTest:Fe,activeTexture:qe,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:j,texImage2D:F,texImage3D:he,updateUBOMapping:Pe,uniformBlockBinding:Qe,texStorage2D:ye,texStorage3D:ee,texSubImage2D:ve,texSubImage3D:le,compressedTexSubImage2D:ce,compressedTexSubImage3D:De,scissor:Le,viewport:Re,reset:pt}}function Ib(s,e,r,a,o,u,h){const c=o.isWebGL2,p=o.maxTextures,m=o.maxCubemapSize,g=o.maxTextureSize,y=o.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap;let E;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(L,M){return v?new OffscreenCanvas(L,M):fl("canvas")}function w(L,M,j,ve){let le=1;if((L.width>ve||L.height>ve)&&(le=ve/Math.max(L.width,L.height)),le<1||M===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ce=M?Hc:Math.floor,De=ce(le*L.width),ye=ce(le*L.height);E===void 0&&(E=I(De,ye));const ee=j?I(De,ye):E;return ee.width=De,ee.height=ye,ee.getContext("2d").drawImage(L,0,0,De,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+De+"x"+ye+")."),ee}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function k(L){return gp(L.width)&&gp(L.height)}function D(L){return c?!1:L.wrapS!==rn||L.wrapT!==rn||L.minFilter!==fr&&L.minFilter!==Hr}function z(L,M){return L.generateMipmaps&&M&&L.minFilter!==fr&&L.minFilter!==Hr}function O(L){s.generateMipmap(L)}function se(L,M,j,ve,le=!1){if(c===!1)return M;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=M;return M===s.RED&&(j===s.FLOAT&&(ce=s.R32F),j===s.HALF_FLOAT&&(ce=s.R16F),j===s.UNSIGNED_BYTE&&(ce=s.R8)),M===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ce=s.R8UI),j===s.UNSIGNED_SHORT&&(ce=s.R16UI),j===s.UNSIGNED_INT&&(ce=s.R32UI),j===s.BYTE&&(ce=s.R8I),j===s.SHORT&&(ce=s.R16I),j===s.INT&&(ce=s.R32I)),M===s.RG&&(j===s.FLOAT&&(ce=s.RG32F),j===s.HALF_FLOAT&&(ce=s.RG16F),j===s.UNSIGNED_BYTE&&(ce=s.RG8)),M===s.RGBA&&(j===s.FLOAT&&(ce=s.RGBA32F),j===s.HALF_FLOAT&&(ce=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ce=ve===ct&&le===!1?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)),(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(L,M,j){return z(L,j)===!0||L.isFramebufferTexture&&L.minFilter!==fr&&L.minFilter!==Hr?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function P(L){return L===fr||L===Gf||L===tc?s.NEAREST:s.LINEAR}function fe(L){const M=L.target;M.removeEventListener("dispose",fe),q(M),M.isVideoTexture&&T.delete(M)}function de(L){const M=L.target;M.removeEventListener("dispose",de),ne(M)}function q(L){const M=a.get(L);if(M.__webglInit===void 0)return;const j=L.source,ve=x.get(j);if(ve){const le=ve[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&re(L),Object.keys(ve).length===0&&x.delete(j)}a.remove(L)}function re(L){const M=a.get(L);s.deleteTexture(M.__webglTexture);const j=L.source,ve=x.get(j);delete ve[M.__cacheKey],h.memory.textures--}function ne(L){const M=L.texture,j=a.get(L),ve=a.get(M);if(ve.__webglTexture!==void 0&&(s.deleteTexture(ve.__webglTexture),h.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(j.__webglFramebuffer[le]))for(let ce=0;ce<j.__webglFramebuffer[le].length;ce++)s.deleteFramebuffer(j.__webglFramebuffer[le][ce]);else s.deleteFramebuffer(j.__webglFramebuffer[le]);j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer[le])}else{if(Array.isArray(j.__webglFramebuffer))for(let le=0;le<j.__webglFramebuffer.length;le++)s.deleteFramebuffer(j.__webglFramebuffer[le]);else s.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&s.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let le=0;le<j.__webglColorRenderbuffer.length;le++)j.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(j.__webglColorRenderbuffer[le]);j.__webglDepthRenderbuffer&&s.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let le=0,ce=M.length;le<ce;le++){const De=a.get(M[le]);De.__webglTexture&&(s.deleteTexture(De.__webglTexture),h.memory.textures--),a.remove(M[le])}a.remove(M),a.remove(L)}let ge=0;function ie(){ge=0}function W(){const L=ge;return L>=p&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+p),ge+=1,L}function te(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function A(L,M){const j=a.get(L);if(L.isVideoTexture&&qe(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const ve=L.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(j,L,M);return}}r.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+M)}function U(L,M){const j=a.get(L);if(L.version>0&&j.__version!==L.version){Ke(j,L,M);return}r.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+M)}function X(L,M){const j=a.get(L);if(L.version>0&&j.__version!==L.version){Ke(j,L,M);return}r.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+M)}function pe(L,M){const j=a.get(L);if(L.version>0&&j.__version!==L.version){Ot(j,L,M);return}r.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+M)}const me={[kc]:s.REPEAT,[rn]:s.CLAMP_TO_EDGE,[Fc]:s.MIRRORED_REPEAT},be={[fr]:s.NEAREST,[Gf]:s.NEAREST_MIPMAP_NEAREST,[tc]:s.NEAREST_MIPMAP_LINEAR,[Hr]:s.LINEAR,[f_]:s.LINEAR_MIPMAP_NEAREST,[Ns]:s.LINEAR_MIPMAP_LINEAR},Ce={[A_]:s.NEVER,[I_]:s.ALWAYS,[C_]:s.LESS,[L_]:s.LEQUAL,[R_]:s.EQUAL,[U_]:s.GEQUAL,[P_]:s.GREATER,[N_]:s.NOTEQUAL};function Ne(L,M,j){if(j?(s.texParameteri(L,s.TEXTURE_WRAP_S,me[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,me[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,me[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,be[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,be[M.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==rn||M.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,P(M.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,P(M.minFilter)),M.minFilter!==fr&&M.minFilter!==Hr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===fr||M.minFilter!==tc&&M.minFilter!==Ns||M.type===sa&&e.has("OES_texture_float_linear")===!1||c===!1&&M.type===Us&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||a.get(M).__currentAnisotropy)&&(s.texParameterf(L,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy)}}function we(L,M){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",fe));const ve=M.source;let le=x.get(ve);le===void 0&&(le={},x.set(ve,le));const ce=te(M);if(ce!==L.__cacheKey){le[ce]===void 0&&(le[ce]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,j=!0),le[ce].usedTimes++;const De=le[L.__cacheKey];De!==void 0&&(le[L.__cacheKey].usedTimes--,De.usedTimes===0&&re(M)),L.__cacheKey=ce,L.__webglTexture=le[ce].texture}return j}function Ke(L,M,j){let ve=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ve=s.TEXTURE_3D);const le=we(L,M),ce=M.source;r.bindTexture(ve,L.__webglTexture,s.TEXTURE0+j);const De=a.get(ce);if(ce.version!==De.__version||le===!0){r.activeTexture(s.TEXTURE0+j),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ye=D(M)&&k(M.image)===!1;let ee=w(M.image,ye,!1,g);ee=Ye(M,ee);const F=k(ee)||c,he=u.convert(M.format,M.colorSpace);let Le=u.convert(M.type),Re=se(M.internalFormat,he,Le,M.colorSpace);Ne(ve,M,F);let Pe;const Qe=M.mipmaps,pt=c&&M.isVideoTexture!==!0,H=De.__version===void 0||le===!0,Te=C(M,ee,F);if(M.isDepthTexture)Re=s.DEPTH_COMPONENT,c?M.type===sa?Re=s.DEPTH_COMPONENT32F:M.type===ia?Re=s.DEPTH_COMPONENT24:M.type===Na?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:M.type===sa&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ua&&Re===s.DEPTH_COMPONENT&&M.type!==jc&&M.type!==ia&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ia,Le=u.convert(M.type)),M.format===Di&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,M.type!==Na&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Na,Le=u.convert(M.type))),H&&(pt?r.texStorage2D(s.TEXTURE_2D,1,Re,ee.width,ee.height):r.texImage2D(s.TEXTURE_2D,0,Re,ee.width,ee.height,0,he,Le,null));else if(M.isDataTexture)if(Qe.length>0&&F){pt&&H&&r.texStorage2D(s.TEXTURE_2D,Te,Re,Qe[0].width,Qe[0].height);for(let $=0,Me=Qe.length;$<Me;$++)Pe=Qe[$],pt?r.texSubImage2D(s.TEXTURE_2D,$,0,0,Pe.width,Pe.height,he,Le,Pe.data):r.texImage2D(s.TEXTURE_2D,$,Re,Pe.width,Pe.height,0,he,Le,Pe.data);M.generateMipmaps=!1}else pt?(H&&r.texStorage2D(s.TEXTURE_2D,Te,Re,ee.width,ee.height),r.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,he,Le,ee.data)):r.texImage2D(s.TEXTURE_2D,0,Re,ee.width,ee.height,0,he,Le,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){pt&&H&&r.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Re,Qe[0].width,Qe[0].height,ee.depth);for(let $=0,Me=Qe.length;$<Me;$++)Pe=Qe[$],M.format!==nn?he!==null?pt?r.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Pe.width,Pe.height,ee.depth,he,Pe.data,0,0):r.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Re,Pe.width,Pe.height,ee.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?r.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Pe.width,Pe.height,ee.depth,he,Le,Pe.data):r.texImage3D(s.TEXTURE_2D_ARRAY,$,Re,Pe.width,Pe.height,ee.depth,0,he,Le,Pe.data)}else{pt&&H&&r.texStorage2D(s.TEXTURE_2D,Te,Re,Qe[0].width,Qe[0].height);for(let $=0,Me=Qe.length;$<Me;$++)Pe=Qe[$],M.format!==nn?he!==null?pt?r.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,Pe.width,Pe.height,he,Pe.data):r.compressedTexImage2D(s.TEXTURE_2D,$,Re,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?r.texSubImage2D(s.TEXTURE_2D,$,0,0,Pe.width,Pe.height,he,Le,Pe.data):r.texImage2D(s.TEXTURE_2D,$,Re,Pe.width,Pe.height,0,he,Le,Pe.data)}else if(M.isDataArrayTexture)pt?(H&&r.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Re,ee.width,ee.height,ee.depth),r.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Le,ee.data)):r.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,ee.width,ee.height,ee.depth,0,he,Le,ee.data);else if(M.isData3DTexture)pt?(H&&r.texStorage3D(s.TEXTURE_3D,Te,Re,ee.width,ee.height,ee.depth),r.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Le,ee.data)):r.texImage3D(s.TEXTURE_3D,0,Re,ee.width,ee.height,ee.depth,0,he,Le,ee.data);else if(M.isFramebufferTexture){if(H)if(pt)r.texStorage2D(s.TEXTURE_2D,Te,Re,ee.width,ee.height);else{let $=ee.width,Me=ee.height;for(let Ae=0;Ae<Te;Ae++)r.texImage2D(s.TEXTURE_2D,Ae,Re,$,Me,0,he,Le,null),$>>=1,Me>>=1}}else if(Qe.length>0&&F){pt&&H&&r.texStorage2D(s.TEXTURE_2D,Te,Re,Qe[0].width,Qe[0].height);for(let $=0,Me=Qe.length;$<Me;$++)Pe=Qe[$],pt?r.texSubImage2D(s.TEXTURE_2D,$,0,0,he,Le,Pe):r.texImage2D(s.TEXTURE_2D,$,Re,he,Le,Pe);M.generateMipmaps=!1}else pt?(H&&r.texStorage2D(s.TEXTURE_2D,Te,Re,ee.width,ee.height),r.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Le,ee)):r.texImage2D(s.TEXTURE_2D,0,Re,he,Le,ee);z(M,F)&&O(ve),De.__version=ce.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Ot(L,M,j){if(M.image.length!==6)return;const ve=we(L,M),le=M.source;r.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+j);const ce=a.get(le);if(le.version!==ce.__version||ve===!0){r.activeTexture(s.TEXTURE0+j),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,ye=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let $=0;$<6;$++)!De&&!ye?ee[$]=w(M.image[$],!1,!0,m):ee[$]=ye?M.image[$].image:M.image[$],ee[$]=Ye(M,ee[$]);const F=ee[0],he=k(F)||c,Le=u.convert(M.format,M.colorSpace),Re=u.convert(M.type),Pe=se(M.internalFormat,Le,Re,M.colorSpace),Qe=c&&M.isVideoTexture!==!0,pt=ce.__version===void 0||ve===!0;let H=C(M,F,he);Ne(s.TEXTURE_CUBE_MAP,M,he);let Te;if(De){Qe&&pt&&r.texStorage2D(s.TEXTURE_CUBE_MAP,H,Pe,F.width,F.height);for(let $=0;$<6;$++){Te=ee[$].mipmaps;for(let Me=0;Me<Te.length;Me++){const Ae=Te[Me];M.format!==nn?Le!==null?Qe?r.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Ae.width,Ae.height,Le,Ae.data):r.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Pe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?r.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Ae.width,Ae.height,Le,Re,Ae.data):r.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Pe,Ae.width,Ae.height,0,Le,Re,Ae.data)}}}else{Te=M.mipmaps,Qe&&pt&&(Te.length>0&&H++,r.texStorage2D(s.TEXTURE_CUBE_MAP,H,Pe,ee[0].width,ee[0].height));for(let $=0;$<6;$++)if(ye){Qe?r.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ee[$].width,ee[$].height,Le,Re,ee[$].data):r.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Pe,ee[$].width,ee[$].height,0,Le,Re,ee[$].data);for(let Me=0;Me<Te.length;Me++){const Ae=Te[Me].image[$].image;Qe?r.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,Ae.width,Ae.height,Le,Re,Ae.data):r.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Pe,Ae.width,Ae.height,0,Le,Re,Ae.data)}}else{Qe?r.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Le,Re,ee[$]):r.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Pe,Le,Re,ee[$]);for(let Me=0;Me<Te.length;Me++){const Ae=Te[Me];Qe?r.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,Le,Re,Ae.image[$]):r.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Pe,Le,Re,Ae.image[$])}}}z(M,he)&&O(s.TEXTURE_CUBE_MAP),ce.__version=le.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function rt(L,M,j,ve,le,ce){const De=u.convert(j.format,j.colorSpace),ye=u.convert(j.type),ee=se(j.internalFormat,De,ye,j.colorSpace);if(!a.get(M).__hasExternalTextures){const F=Math.max(1,M.width>>ce),he=Math.max(1,M.height>>ce);le===s.TEXTURE_3D||le===s.TEXTURE_2D_ARRAY?r.texImage3D(le,ce,ee,F,he,M.depth,0,De,ye,null):r.texImage2D(le,ce,ee,F,he,0,De,ye,null)}r.bindFramebuffer(s.FRAMEBUFFER,L),Fe(M)?_.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,le,a.get(j).__webglTexture,0,Oe(M)):(le===s.TEXTURE_2D||le>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,le,a.get(j).__webglTexture,ce),r.bindFramebuffer(s.FRAMEBUFFER,null)}function K(L,M,j){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer&&!M.stencilBuffer){let ve=s.DEPTH_COMPONENT16;if(j||Fe(M)){const le=M.depthTexture;le&&le.isDepthTexture&&(le.type===sa?ve=s.DEPTH_COMPONENT32F:le.type===ia&&(ve=s.DEPTH_COMPONENT24));const ce=Oe(M);Fe(M)?_.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,ve,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,ve,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,ve,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(M.depthBuffer&&M.stencilBuffer){const ve=Oe(M);j&&Fe(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,s.DEPTH24_STENCIL8,M.width,M.height):Fe(M)?_.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const ve=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let le=0;le<ve.length;le++){const ce=ve[le],De=u.convert(ce.format,ce.colorSpace),ye=u.convert(ce.type),ee=se(ce.internalFormat,De,ye,ce.colorSpace),F=Oe(M);j&&Fe(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,F,ee,M.width,M.height):Fe(M)?_.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,F,ee,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ee,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function bt(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),A(M.depthTexture,0);const j=a.get(M.depthTexture).__webglTexture,ve=Oe(M);if(M.depthTexture.format===Ua)Fe(M)?_.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(M.depthTexture.format===Di)Fe(M)?_.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const M=a.get(L),j=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");bt(M.__webglFramebuffer,L)}else if(j){M.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)r.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ve]),M.__webglDepthbuffer[ve]=s.createRenderbuffer(),K(M.__webglDepthbuffer[ve],L,!1)}else r.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),K(M.__webglDepthbuffer,L,!1);r.bindFramebuffer(s.FRAMEBUFFER,null)}function et(L,M,j){const ve=a.get(L);M!==void 0&&rt(ve.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&Xe(L)}function je(L){const M=L.texture,j=a.get(L),ve=a.get(M);L.addEventListener("dispose",de),L.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=M.version,h.memory.textures++);const le=L.isWebGLCubeRenderTarget===!0,ce=L.isWebGLMultipleRenderTargets===!0,De=k(L)||c;if(le){j.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(c&&M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[ye]=[];for(let ee=0;ee<M.mipmaps.length;ee++)j.__webglFramebuffer[ye][ee]=s.createFramebuffer()}else j.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(c&&M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)j.__webglFramebuffer[ye]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(ce)if(o.drawBuffers){const ye=L.texture;for(let ee=0,F=ye.length;ee<F;ee++){const he=a.get(ye[ee]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&L.samples>0&&Fe(L)===!1){const ye=ce?M:[M];j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],r.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ee=0;ee<ye.length;ee++){const F=ye[ee];j.__webglColorRenderbuffer[ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[ee]);const he=u.convert(F.format,F.colorSpace),Le=u.convert(F.type),Re=se(F.internalFormat,he,Le,F.colorSpace,L.isXRRenderTarget===!0),Pe=Oe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Re,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,j.__webglColorRenderbuffer[ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),K(j.__webglDepthRenderbuffer,L,!0)),r.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){r.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,M,De);for(let ye=0;ye<6;ye++)if(c&&M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)rt(j.__webglFramebuffer[ye][ee],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ee);else rt(j.__webglFramebuffer[ye],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);z(M,De)&&O(s.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(ce){const ye=L.texture;for(let ee=0,F=ye.length;ee<F;ee++){const he=ye[ee],Le=a.get(he);r.bindTexture(s.TEXTURE_2D,Le.__webglTexture),Ne(s.TEXTURE_2D,he,De),rt(j.__webglFramebuffer,L,he,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,0),z(he,De)&&O(s.TEXTURE_2D)}r.unbindTexture()}else{let ye=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(c?ye=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),r.bindTexture(ye,ve.__webglTexture),Ne(ye,M,De),c&&M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)rt(j.__webglFramebuffer[ee],L,M,s.COLOR_ATTACHMENT0,ye,ee);else rt(j.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,ye,0);z(M,De)&&O(ye),r.unbindTexture()}L.depthBuffer&&Xe(L)}function vt(L){const M=k(L)||c,j=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ve=0,le=j.length;ve<le;ve++){const ce=j[ve];if(z(ce,M)){const De=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ye=a.get(ce).__webglTexture;r.bindTexture(De,ye),O(De),r.unbindTexture()}}}function ke(L){if(c&&L.samples>0&&Fe(L)===!1){const M=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],j=L.width,ve=L.height;let le=s.COLOR_BUFFER_BIT;const ce=[],De=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=a.get(L),ee=L.isWebGLMultipleRenderTargets===!0;if(ee)for(let F=0;F<M.length;F++)r.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+F,s.RENDERBUFFER,null),r.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+F,s.TEXTURE_2D,null,0);r.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let F=0;F<M.length;F++){ce.push(s.COLOR_ATTACHMENT0+F),L.depthBuffer&&ce.push(De);const he=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(he===!1&&(L.depthBuffer&&(le|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(le|=s.STENCIL_BUFFER_BIT)),ee&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[F]),he===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[De]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[De])),ee){const Le=a.get(M[F]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Le,0)}s.blitFramebuffer(0,0,j,ve,0,0,j,ve,le,s.NEAREST),S&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(r.bindFramebuffer(s.READ_FRAMEBUFFER,null),r.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ee)for(let F=0;F<M.length;F++){r.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+F,s.RENDERBUFFER,ye.__webglColorRenderbuffer[F]);const he=a.get(M[F]).__webglTexture;r.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+F,s.TEXTURE_2D,he,0)}r.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Oe(L){return Math.min(y,L.samples)}function Fe(L){const M=a.get(L);return c&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function qe(L){const M=h.render.frame;T.get(L)!==M&&(T.set(L,M),L.update())}function Ye(L,M){const j=L.colorSpace,ve=L.format,le=L.type;return L.isCompressedTexture===!0||L.format===zc||j!==pn&&j!==Da&&(j===ct?c===!1?e.has("EXT_sRGB")===!0&&ve===nn?(L.format=zc,L.minFilter=Hr,L.generateMipmaps=!1):M=Lm.sRGBToLinear(M):(ve!==nn||le!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}this.allocateTextureUnit=W,this.resetTextureUnits=ie,this.setTexture2D=A,this.setTexture2DArray=U,this.setTexture3D=X,this.setTextureCube=pe,this.rebindTextures=et,this.setupRenderTarget=je,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Fe}function Db(s,e,r){const a=r.isWebGL2;function o(u,h=Da){let c;if(u===ua)return s.UNSIGNED_BYTE;if(u===Sm)return s.UNSIGNED_SHORT_4_4_4_4;if(u===bm)return s.UNSIGNED_SHORT_5_5_5_1;if(u===p_)return s.BYTE;if(u===m_)return s.SHORT;if(u===jc)return s.UNSIGNED_SHORT;if(u===ym)return s.INT;if(u===ia)return s.UNSIGNED_INT;if(u===sa)return s.FLOAT;if(u===Us)return a?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(u===g_)return s.ALPHA;if(u===nn)return s.RGBA;if(u===v_)return s.LUMINANCE;if(u===__)return s.LUMINANCE_ALPHA;if(u===Ua)return s.DEPTH_COMPONENT;if(u===Di)return s.DEPTH_STENCIL;if(u===zc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(u===x_)return s.RED;if(u===Mm)return s.RED_INTEGER;if(u===y_)return s.RG;if(u===Em)return s.RG_INTEGER;if(u===Tm)return s.RGBA_INTEGER;if(u===rc||u===nc||u===ac||u===ic)if(h===ct)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(u===rc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===ac)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(u===rc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===nc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===ac)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===ic)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===Xf||u===jf||u===Yf||u===qf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(u===Xf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===jf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Yf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===qf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===S_)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Zf||u===Jf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(u===Zf)return h===ct?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(u===Jf)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Kf||u===Qf||u===$f||u===ep||u===tp||u===rp||u===np||u===ap||u===ip||u===sp||u===op||u===lp||u===up||u===cp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(u===Kf)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Qf)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===$f)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===ep)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===tp)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===rp)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===np)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===ap)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===ip)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===sp)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===op)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===lp)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===up)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===cp)return h===ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===sc)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(u===sc)return h===ct?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(u===b_||u===dp||u===hp||u===fp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(u===sc)return c.COMPRESSED_RED_RGTC1_EXT;if(u===dp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===hp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===fp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===Na?a?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[u]!==void 0?s[u]:null}return{convert:o}}class Ob extends Vr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class il extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kb={type:"move"};class Rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const a of e.hand.values())this._getHandJoint(r,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,a){let o=null,u=null,h=null;const c=this._targetRay,p=this._grip,m=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const E of e.hand.values()){const x=r.getJointPose(E,a),v=this._getHandJoint(m,E);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],_=g.position.distanceTo(y.position),S=.02,T=.005;m.inputState.pinching&&_>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=r.getPose(e.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));c!==null&&(o=r.getPose(e.targetRaySpace,a),o===null&&u!==null&&(o=u),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(kb)))}return c!==null&&(c.visible=o!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const a=new il;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[r.jointName]=a,e.add(a)}return e.joints[r.jointName]}}class Fb extends Nr{constructor(e,r,a,o,u,h,c,p,m,g){if(g=g!==void 0?g:Ua,g!==Ua&&g!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&g===Ua&&(a=ia),a===void 0&&g===Di&&(a=Na),super(null,o,u,h,c,p,g,a,m),this.isDepthTexture=!0,this.image={width:e,height:r},this.magFilter=c!==void 0?c:fr,this.minFilter=p!==void 0?p:fr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}class zb extends Fa{constructor(e,r){super();const a=this;let o=null,u=1,h=null,c="local-floor",p=1,m=null,g=null,y=null,_=null,S=null,T=null;const E=r.getContextAttributes();let x=null,v=null;const I=[],w=[],k=new Vr;k.layers.enable(1),k.viewport=new er;const D=new Vr;D.layers.enable(2),D.viewport=new er;const z=[k,D],O=new Ob;O.layers.enable(1),O.layers.enable(2);let se=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let X=I[U];return X===void 0&&(X=new Rc,I[U]=X),X.getTargetRaySpace()},this.getControllerGrip=function(U){let X=I[U];return X===void 0&&(X=new Rc,I[U]=X),X.getGripSpace()},this.getHand=function(U){let X=I[U];return X===void 0&&(X=new Rc,I[U]=X),X.getHandSpace()};function P(U){const X=w.indexOf(U.inputSource);if(X===-1)return;const pe=I[X];pe!==void 0&&(pe.update(U.inputSource,U.frame,m||h),pe.dispatchEvent({type:U.type,data:U.inputSource}))}function fe(){o.removeEventListener("select",P),o.removeEventListener("selectstart",P),o.removeEventListener("selectend",P),o.removeEventListener("squeeze",P),o.removeEventListener("squeezestart",P),o.removeEventListener("squeezeend",P),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",de);for(let U=0;U<I.length;U++){const X=w[U];X!==null&&(w[U]=null,I[U].disconnect(X))}se=null,C=null,e.setRenderTarget(x),S=null,_=null,y=null,o=null,v=null,A.stop(),a.isPresenting=!1,a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){u=U,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){c=U,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(U){m=U},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(U){if(o=U,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",P),o.addEventListener("selectstart",P),o.addEventListener("selectend",P),o.addEventListener("squeeze",P),o.addEventListener("squeezestart",P),o.addEventListener("squeezeend",P),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",de),E.xrCompatible!==!0&&await r.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:o.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(o,r,X),o.updateRenderState({baseLayer:S}),v=new Oa(S.framebufferWidth,S.framebufferHeight,{format:nn,type:ua,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let X=null,pe=null,me=null;E.depth&&(me=E.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,X=E.stencil?Di:Ua,pe=E.stencil?Na:ia);const be={colorFormat:r.RGBA8,depthFormat:me,scaleFactor:u};y=new XRWebGLBinding(o,r),_=y.createProjectionLayer(be),o.updateRenderState({layers:[_]}),v=new Oa(_.textureWidth,_.textureHeight,{format:nn,type:ua,depthTexture:new Fb(_.textureWidth,_.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const Ce=e.properties.get(v);Ce.__ignoreDepthValues=_.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await o.requestReferenceSpace(c),A.setContext(o),A.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function de(U){for(let X=0;X<U.removed.length;X++){const pe=U.removed[X],me=w.indexOf(pe);me>=0&&(w[me]=null,I[me].disconnect(pe))}for(let X=0;X<U.added.length;X++){const pe=U.added[X];let me=w.indexOf(pe);if(me===-1){for(let Ce=0;Ce<I.length;Ce++)if(Ce>=w.length){w.push(pe),me=Ce;break}else if(w[Ce]===null){w[Ce]=pe,me=Ce;break}if(me===-1)break}const be=I[me];be&&be.connect(pe)}}const q=new G,re=new G;function ne(U,X,pe){q.setFromMatrixPosition(X.matrixWorld),re.setFromMatrixPosition(pe.matrixWorld);const me=q.distanceTo(re),be=X.projectionMatrix.elements,Ce=pe.projectionMatrix.elements,Ne=be[14]/(be[10]-1),we=be[14]/(be[10]+1),Ke=(be[9]+1)/be[5],Ot=(be[9]-1)/be[5],rt=(be[8]-1)/be[0],K=(Ce[8]+1)/Ce[0],bt=Ne*rt,Xe=Ne*K,et=me/(-rt+K),je=et*-rt;X.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(je),U.translateZ(et),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const vt=Ne+et,ke=we+et,Oe=bt-je,Fe=Xe+(me-je),qe=Ke*we/ke*vt,Ye=Ot*we/ke*vt;U.projectionMatrix.makePerspective(Oe,Fe,qe,Ye,vt,ke),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function ge(U,X){X===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(X.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(o===null)return;O.near=D.near=k.near=U.near,O.far=D.far=k.far=U.far,(se!==O.near||C!==O.far)&&(o.updateRenderState({depthNear:O.near,depthFar:O.far}),se=O.near,C=O.far);const X=U.parent,pe=O.cameras;ge(O,X);for(let me=0;me<pe.length;me++)ge(pe[me],X);pe.length===2?ne(O,k,D):O.projectionMatrix.copy(k.projectionMatrix),ie(U,O,X)};function ie(U,X,pe){pe===null?U.matrix.copy(X.matrixWorld):(U.matrix.copy(pe.matrixWorld),U.matrix.invert(),U.matrix.multiply(X.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0);const me=U.children;for(let be=0,Ce=me.length;be<Ce;be++)me[be].updateMatrixWorld(!0);U.projectionMatrix.copy(X.projectionMatrix),U.projectionMatrixInverse.copy(X.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Bc*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(U){p=U,_!==null&&(_.fixedFoveation=U),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=U)};let W=null;function te(U,X){if(g=X.getViewerPose(m||h),T=X,g!==null){const pe=g.views;S!==null&&(e.setRenderTargetFramebuffer(v,S.framebuffer),e.setRenderTarget(v));let me=!1;pe.length!==O.cameras.length&&(O.cameras.length=0,me=!0);for(let be=0;be<pe.length;be++){const Ce=pe[be];let Ne=null;if(S!==null)Ne=S.getViewport(Ce);else{const Ke=y.getViewSubImage(_,Ce);Ne=Ke.viewport,be===0&&(e.setRenderTargetTextures(v,Ke.colorTexture,_.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(v))}let we=z[be];we===void 0&&(we=new Vr,we.layers.enable(be),we.viewport=new er,z[be]=we),we.matrix.fromArray(Ce.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ce.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),be===0&&(O.matrix.copy(we.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),me===!0&&O.cameras.push(we)}}for(let pe=0;pe<I.length;pe++){const me=w[pe],be=I[pe];me!==null&&be!==void 0&&be.update(me,X,m||h)}W&&W(U,X),X.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:X}),T=null}const A=new Hm;A.setAnimationLoop(te),this.setAnimationLoop=function(U){W=U},this.dispose=function(){}}}function Bb(s,e){function r(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function a(x,v){v.color.getRGB(x.fogColor.value,Fm(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,I,w,k){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(x,v):v.isMeshToonMaterial?(u(x,v),y(x,v)):v.isMeshPhongMaterial?(u(x,v),g(x,v)):v.isMeshStandardMaterial?(u(x,v),_(x,v),v.isMeshPhysicalMaterial&&S(x,v,k)):v.isMeshMatcapMaterial?(u(x,v),T(x,v)):v.isMeshDepthMaterial?u(x,v):v.isMeshDistanceMaterial?(u(x,v),E(x,v)):v.isMeshNormalMaterial?u(x,v):v.isLineBasicMaterial?(h(x,v),v.isLineDashedMaterial&&c(x,v)):v.isPointsMaterial?p(x,v,I,w):v.isSpriteMaterial?m(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,r(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,r(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,r(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Mr&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,r(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Mr&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,r(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,r(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,r(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const I=e.get(v).envMap;if(I&&(x.envMap.value=I,x.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const w=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*w,r(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,r(v.aoMap,x.aoMapTransform))}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,r(v.map,x.mapTransform))}function c(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function p(x,v,I,w){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*I,x.scale.value=w*.5,v.map&&(x.map.value=v.map,r(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,r(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function m(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,r(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,r(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function y(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,r(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,r(v.roughnessMap,x.roughnessMapTransform)),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function S(x,v,I){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,r(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,r(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,r(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,r(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,r(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Mr&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,r(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,r(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,r(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,r(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,r(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,r(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,r(v.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,v){v.matcap&&(x.matcap.value=v.matcap)}function E(x,v){const I=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Hb(s,e,r,a){let o={},u={},h=[];const c=r.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(I,w){const k=w.program;a.uniformBlockBinding(I,k)}function m(I,w){let k=o[I.id];k===void 0&&(T(I),k=g(I),o[I.id]=k,I.addEventListener("dispose",x));const D=w.program;a.updateUBOMapping(I,D);const z=e.render.frame;u[I.id]!==z&&(_(I),u[I.id]=z)}function g(I){const w=y();I.__bindingPointIndex=w;const k=s.createBuffer(),D=I.__size,z=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,k),s.bufferData(s.UNIFORM_BUFFER,D,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,k),k}function y(){for(let I=0;I<c;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const w=o[I.id],k=I.uniforms,D=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let z=0,O=k.length;z<O;z++){const se=k[z];if(S(se,z,D)===!0){const C=se.__offset,P=Array.isArray(se.value)?se.value:[se.value];let fe=0;for(let de=0;de<P.length;de++){const q=P[de],re=E(q);typeof q=="number"?(se.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,C+fe,se.__data)):q.isMatrix3?(se.__data[0]=q.elements[0],se.__data[1]=q.elements[1],se.__data[2]=q.elements[2],se.__data[3]=q.elements[0],se.__data[4]=q.elements[3],se.__data[5]=q.elements[4],se.__data[6]=q.elements[5],se.__data[7]=q.elements[0],se.__data[8]=q.elements[6],se.__data[9]=q.elements[7],se.__data[10]=q.elements[8],se.__data[11]=q.elements[0]):(q.toArray(se.__data,fe),fe+=re.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,se.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,w,k){const D=I.value;if(k[w]===void 0){if(typeof D=="number")k[w]=D;else{const z=Array.isArray(D)?D:[D],O=[];for(let se=0;se<z.length;se++)O.push(z[se].clone());k[w]=O}return!0}else if(typeof D=="number"){if(k[w]!==D)return k[w]=D,!0}else{const z=Array.isArray(k[w])?k[w]:[k[w]],O=Array.isArray(D)?D:[D];for(let se=0;se<z.length;se++){const C=z[se];if(C.equals(O[se])===!1)return C.copy(O[se]),!0}}return!1}function T(I){const w=I.uniforms;let k=0;const D=16;let z=0;for(let O=0,se=w.length;O<se;O++){const C=w[O],P={boundary:0,storage:0},fe=Array.isArray(C.value)?C.value:[C.value];for(let de=0,q=fe.length;de<q;de++){const re=fe[de],ne=E(re);P.boundary+=ne.boundary,P.storage+=ne.storage}if(C.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=k,O>0){z=k%D;const de=D-z;z!==0&&de-P.boundary<0&&(k+=D-z,C.__offset=k)}k+=P.storage}return z=k%D,z>0&&(k+=D-z),I.__size=k,I.__cache={},this}function E(I){const w={boundary:0,storage:0};return typeof I=="number"?(w.boundary=4,w.storage=4):I.isVector2?(w.boundary=8,w.storage=8):I.isVector3||I.isColor?(w.boundary=16,w.storage=12):I.isVector4?(w.boundary=16,w.storage=16):I.isMatrix3?(w.boundary=48,w.storage=48):I.isMatrix4?(w.boundary=64,w.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),w}function x(I){const w=I.target;w.removeEventListener("dispose",x);const k=h.indexOf(w.__bindingPointIndex);h.splice(k,1),s.deleteBuffer(o[w.id]),delete o[w.id],delete u[w.id]}function v(){for(const I in o)s.deleteBuffer(o[I]);h=[],o={},u={}}return{bind:p,update:m,dispose:v}}function Vb(){const s=fl("canvas");return s.style.display="block",s}class Ym{constructor(e={}){const{canvas:r=Vb(),context:a=null,depth:o=!0,stencil:u=!0,alpha:h=!1,antialias:c=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let _;a!==null?_=a.getContextAttributes().alpha:_=h;const S=new Uint32Array(4),T=new Int32Array(4);let E=null,x=null;const v=[],I=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=la,this.toneMappingExposure=1;const w=this;let k=!1,D=0,z=0,O=null,se=-1,C=null;const P=new er,fe=new er;let de=null;const q=new mt(0);let re=0,ne=r.width,ge=r.height,ie=1,W=null,te=null;const A=new er(0,0,ne,ge),U=new er(0,0,ne,ge);let X=!1;const pe=new qc;let me=!1,be=!1,Ce=null;const Ne=new Ut,we=new ot,Ke=new G,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return O===null?ie:1}let K=a;function bt(R,Q){for(let ue=0;ue<R.length;ue++){const Z=R[ue],oe=r.getContext(Z,Q);if(oe!==null)return oe}return null}try{const R={alpha:!0,depth:o,stencil:u,antialias:c,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${Gc}`),r.addEventListener("webglcontextlost",Te,!1),r.addEventListener("webglcontextrestored",$,!1),r.addEventListener("webglcontextcreationerror",Me,!1),K===null){const Q=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&Q.shift(),K=bt(Q,R),K===null)throw bt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Xe,et,je,vt,ke,Oe,Fe,qe,Ye,L,M,j,ve,le,ce,De,ye,ee,F,he,Le,Re,Pe,Qe;function pt(){Xe=new Qy(K),et=new jy(K,Xe,e),Xe.init(et),Re=new Db(K,Xe,et),je=new Ub(K,Xe,et),vt=new tS(K),ke=new xb,Oe=new Ib(K,Xe,je,ke,et,Re,vt),Fe=new qy(w),qe=new Ky(w),Ye=new d0(K,et),Pe=new Gy(K,Xe,Ye,et),L=new $y(K,Ye,vt,Pe),M=new iS(K,L,Ye,vt),F=new aS(K,et,Oe),De=new Yy(ke),j=new _b(w,Fe,qe,Xe,et,Pe,De),ve=new Bb(w,ke),le=new Sb,ce=new Ab(Xe,et),ee=new Wy(w,Fe,qe,je,M,_,p),ye=new Nb(w,M,et),Qe=new Hb(K,vt,et,je),he=new Xy(K,Xe,vt,et),Le=new eS(K,Xe,vt,et),vt.programs=j.programs,w.capabilities=et,w.extensions=Xe,w.properties=ke,w.renderLists=le,w.shadowMap=ye,w.state=je,w.info=vt}pt();const H=new zb(w,K);this.xr=H,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=Xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(R){R!==void 0&&(ie=R,this.setSize(ne,ge,!1))},this.getSize=function(R){return R.set(ne,ge)},this.setSize=function(R,Q,ue=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=R,ge=Q,r.width=Math.floor(R*ie),r.height=Math.floor(Q*ie),ue===!0&&(r.style.width=R+"px",r.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(ne*ie,ge*ie).floor()},this.setDrawingBufferSize=function(R,Q,ue){ne=R,ge=Q,ie=ue,r.width=Math.floor(R*ue),r.height=Math.floor(Q*ue),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(A)},this.setViewport=function(R,Q,ue,Z){R.isVector4?A.set(R.x,R.y,R.z,R.w):A.set(R,Q,ue,Z),je.viewport(P.copy(A).multiplyScalar(ie).floor())},this.getScissor=function(R){return R.copy(U)},this.setScissor=function(R,Q,ue,Z){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,Q,ue,Z),je.scissor(fe.copy(U).multiplyScalar(ie).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(R){je.setScissorTest(X=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){te=R},this.getClearColor=function(R){return R.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(R=!0,Q=!0,ue=!0){let Z=0;if(R){let oe=!1;if(O!==null){const Ue=O.texture.format;oe=Ue===Tm||Ue===Em||Ue===Mm}if(oe){const Ue=O.texture.type,$e=Ue===ua||Ue===ia||Ue===jc||Ue===Na||Ue===Sm||Ue===bm,tt=ee.getClearColor(),at=ee.getClearAlpha(),dt=tt.r,Ve=tt.g,it=tt.b;$e?(S[0]=dt,S[1]=Ve,S[2]=it,S[3]=at,K.clearBufferuiv(K.COLOR,0,S)):(T[0]=dt,T[1]=Ve,T[2]=it,T[3]=at,K.clearBufferiv(K.COLOR,0,T))}else Z|=K.COLOR_BUFFER_BIT}Q&&(Z|=K.DEPTH_BUFFER_BIT),ue&&(Z|=K.STENCIL_BUFFER_BIT),K.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",Te,!1),r.removeEventListener("webglcontextrestored",$,!1),r.removeEventListener("webglcontextcreationerror",Me,!1),le.dispose(),ce.dispose(),ke.dispose(),Fe.dispose(),qe.dispose(),M.dispose(),Pe.dispose(),Qe.dispose(),j.dispose(),H.dispose(),H.removeEventListener("sessionstart",Mt),H.removeEventListener("sessionend",Tr),Ce&&(Ce.dispose(),Ce=null),kt.stop()};function Te(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const R=vt.autoReset,Q=ye.enabled,ue=ye.autoUpdate,Z=ye.needsUpdate,oe=ye.type;pt(),vt.autoReset=R,ye.enabled=Q,ye.autoUpdate=ue,ye.needsUpdate=Z,ye.type=oe}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ae(R){const Q=R.target;Q.removeEventListener("dispose",Ae),gt(Q)}function gt(R){yt(R),ke.remove(R)}function yt(R){const Q=ke.get(R).programs;Q!==void 0&&(Q.forEach(function(ue){j.releaseProgram(ue)}),R.isShaderMaterial&&j.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,ue,Z,oe,Ue){Q===null&&(Q=Ot);const $e=oe.isMesh&&oe.matrixWorld.determinant()<0,tt=xl(R,Q,ue,Z,oe);je.setMaterial(Z,$e);let at=ue.index,dt=1;if(Z.wireframe===!0){if(at=L.getWireframeAttribute(ue),at===void 0)return;dt=2}const Ve=ue.drawRange,it=ue.attributes.position;let It=Ve.start*dt,At=(Ve.start+Ve.count)*dt;Ue!==null&&(It=Math.max(It,Ue.start*dt),At=Math.min(At,(Ue.start+Ue.count)*dt)),at!==null?(It=Math.max(It,0),At=Math.min(At,at.count)):it!=null&&(It=Math.max(It,0),At=Math.min(At,it.count));const tr=At-It;if(tr<0||tr===1/0)return;Pe.setup(oe,Z,tt,ue,at);let Gr,Lt=he;if(at!==null&&(Gr=Ye.get(at),Lt=Le,Lt.setIndex(Gr)),oe.isMesh)Z.wireframe===!0?(je.setLineWidth(Z.wireframeLinewidth*rt()),Lt.setMode(K.LINES)):Lt.setMode(K.TRIANGLES);else if(oe.isLine){let lt=Z.linewidth;lt===void 0&&(lt=1),je.setLineWidth(lt*rt()),oe.isLineSegments?Lt.setMode(K.LINES):oe.isLineLoop?Lt.setMode(K.LINE_LOOP):Lt.setMode(K.LINE_STRIP)}else oe.isPoints?Lt.setMode(K.POINTS):oe.isSprite&&Lt.setMode(K.TRIANGLES);if(oe.isInstancedMesh)Lt.renderInstances(It,tr,oe.count);else if(ue.isInstancedBufferGeometry){const lt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,mr=Math.min(ue.instanceCount,lt);Lt.renderInstances(It,tr,mr)}else Lt.render(It,tr)},this.compile=function(R,Q){function ue(Z,oe,Ue){Z.transparent===!0&&Z.side===fn&&Z.forceSinglePass===!1?(Z.side=Mr,Z.needsUpdate=!0,mn(Z,oe,Ue),Z.side=ca,Z.needsUpdate=!0,mn(Z,oe,Ue),Z.side=fn):mn(Z,oe,Ue)}x=ce.get(R),x.init(),I.push(x),R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Q.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights(w._useLegacyLights),R.traverse(function(Z){const oe=Z.material;if(oe)if(Array.isArray(oe))for(let Ue=0;Ue<oe.length;Ue++){const $e=oe[Ue];ue($e,R,Z)}else ue(oe,R,Z)}),I.pop(),x=null};let Rt=null;function Er(R){Rt&&Rt(R)}function Mt(){kt.stop()}function Tr(){kt.start()}const kt=new Hm;kt.setAnimationLoop(Er),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(R){Rt=R,H.setAnimationLoop(R),R===null?kt.stop():kt.start()},H.addEventListener("sessionstart",Mt),H.addEventListener("sessionend",Tr),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(Q),Q=H.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Q,O),x=ce.get(R,I.length),x.init(),I.push(x),Ne.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),pe.setFromProjectionMatrix(Ne),be=this.localClippingEnabled,me=De.init(this.clippingPlanes,be),E=le.get(R,v.length),E.init(),v.push(E),Ba(R,Q,0,w.sortObjects),E.finish(),w.sortObjects===!0&&E.sort(W,te),this.info.render.frame++,me===!0&&De.beginShadows();const ue=x.state.shadowsArray;if(ye.render(ue,R,Q),me===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(E,R),x.setupLights(w._useLegacyLights),Q.isArrayCamera){const Z=Q.cameras;for(let oe=0,Ue=Z.length;oe<Ue;oe++){const $e=Z[oe];Un(E,R,$e,$e.viewport)}}else Un(E,R,Q);O!==null&&(Oe.updateMultisampleRenderTarget(O),Oe.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(w,R,Q),Pe.resetDefaultState(),se=-1,C=null,I.pop(),I.length>0?x=I[I.length-1]:x=null,v.pop(),v.length>0?E=v[v.length-1]:E=null};function Ba(R,Q,ue,Z){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||pe.intersectsSprite(R)){Z&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ne);const Ue=M.update(R),$e=R.material;$e.visible&&E.push(R,Ue,$e,ue,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||pe.intersectsObject(R))){const Ue=M.update(R),$e=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ke.copy(Ue.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(Ne)),Array.isArray($e)){const tt=Ue.groups;for(let at=0,dt=tt.length;at<dt;at++){const Ve=tt[at],it=$e[Ve.materialIndex];it&&it.visible&&E.push(R,Ue,it,ue,Ke.z,Ve)}}else $e.visible&&E.push(R,Ue,$e,ue,Ke.z,null)}}const oe=R.children;for(let Ue=0,$e=oe.length;Ue<$e;Ue++)Ba(oe[Ue],Q,ue,Z)}function Un(R,Q,ue,Z){const oe=R.opaque,Ue=R.transmissive,$e=R.transparent;x.setupLightsView(ue),me===!0&&De.setGlobalState(w.clippingPlanes,ue),Ue.length>0&&_l(oe,Ue,Q,ue),Z&&je.viewport(P.copy(Z)),oe.length>0&&on(oe,Q,ue),Ue.length>0&&on(Ue,Q,ue),$e.length>0&&on($e,Q,ue),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function _l(R,Q,ue,Z){const oe=et.isWebGL2;Ce===null&&(Ce=new Oa(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?Us:ua,minFilter:Ns,samples:oe?4:0})),w.getDrawingBufferSize(we),oe?Ce.setSize(we.x,we.y):Ce.setSize(Hc(we.x),Hc(we.y));const Ue=w.getRenderTarget();w.setRenderTarget(Ce),w.getClearColor(q),re=w.getClearAlpha(),re<1&&w.setClearColor(16777215,.5),w.clear();const $e=w.toneMapping;w.toneMapping=la,on(R,ue,Z),Oe.updateMultisampleRenderTarget(Ce),Oe.updateRenderTargetMipmap(Ce);let tt=!1;for(let at=0,dt=Q.length;at<dt;at++){const Ve=Q[at],it=Ve.object,It=Ve.geometry,At=Ve.material,tr=Ve.group;if(At.side===fn&&it.layers.test(Z.layers)){const Gr=At.side;At.side=Mr,At.needsUpdate=!0,ha(it,ue,Z,It,At,tr),At.side=Gr,At.needsUpdate=!0,tt=!0}}tt===!0&&(Oe.updateMultisampleRenderTarget(Ce),Oe.updateRenderTargetMipmap(Ce)),w.setRenderTarget(Ue),w.setClearColor(q,re),w.toneMapping=$e}function on(R,Q,ue){const Z=Q.isScene===!0?Q.overrideMaterial:null;for(let oe=0,Ue=R.length;oe<Ue;oe++){const $e=R[oe],tt=$e.object,at=$e.geometry,dt=Z===null?$e.material:Z,Ve=$e.group;tt.layers.test(ue.layers)&&ha(tt,Q,ue,at,dt,Ve)}}function ha(R,Q,ue,Z,oe,Ue){R.onBeforeRender(w,Q,ue,Z,oe,Ue),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),oe.onBeforeRender(w,Q,ue,Z,R,Ue),oe.transparent===!0&&oe.side===fn&&oe.forceSinglePass===!1?(oe.side=Mr,oe.needsUpdate=!0,w.renderBufferDirect(ue,Q,Z,oe,R,Ue),oe.side=ca,oe.needsUpdate=!0,w.renderBufferDirect(ue,Q,Z,oe,R,Ue),oe.side=fn):w.renderBufferDirect(ue,Q,Z,oe,R,Ue),R.onAfterRender(w,Q,ue,Z,oe,Ue)}function mn(R,Q,ue){Q.isScene!==!0&&(Q=Ot);const Z=ke.get(R),oe=x.state.lights,Ue=x.state.shadowsArray,$e=oe.state.version,tt=j.getParameters(R,oe.state,Ue,Q,ue),at=j.getProgramCacheKey(tt);let dt=Z.programs;Z.environment=R.isMeshStandardMaterial?Q.environment:null,Z.fog=Q.fog,Z.envMap=(R.isMeshStandardMaterial?qe:Fe).get(R.envMap||Z.environment),dt===void 0&&(R.addEventListener("dispose",Ae),dt=new Map,Z.programs=dt);let Ve=dt.get(at);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===$e)return Ha(R,tt),Ve}else tt.uniforms=j.getUniforms(R),R.onBuild(ue,tt,w),R.onBeforeCompile(tt,w),Ve=j.acquireProgram(tt,at),dt.set(at,Ve),Z.uniforms=tt.uniforms;const it=Z.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(it.clippingPlanes=De.uniform),Ha(R,tt),Z.needsLights=Sl(R),Z.lightsStateVersion=$e,Z.needsLights&&(it.ambientLightColor.value=oe.state.ambient,it.lightProbe.value=oe.state.probe,it.directionalLights.value=oe.state.directional,it.directionalLightShadows.value=oe.state.directionalShadow,it.spotLights.value=oe.state.spot,it.spotLightShadows.value=oe.state.spotShadow,it.rectAreaLights.value=oe.state.rectArea,it.ltc_1.value=oe.state.rectAreaLTC1,it.ltc_2.value=oe.state.rectAreaLTC2,it.pointLights.value=oe.state.point,it.pointLightShadows.value=oe.state.pointShadow,it.hemisphereLights.value=oe.state.hemi,it.directionalShadowMap.value=oe.state.directionalShadowMap,it.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,it.spotShadowMap.value=oe.state.spotShadowMap,it.spotLightMatrix.value=oe.state.spotLightMatrix,it.spotLightMap.value=oe.state.spotLightMap,it.pointShadowMap.value=oe.state.pointShadowMap,it.pointShadowMatrix.value=oe.state.pointShadowMatrix);const It=Ve.getUniforms(),At=dl.seqWithValue(It.seq,it);return Z.currentProgram=Ve,Z.uniformsList=At,Ve}function Ha(R,Q){const ue=ke.get(R);ue.outputColorSpace=Q.outputColorSpace,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function xl(R,Q,ue,Z,oe){Q.isScene!==!0&&(Q=Ot),Oe.resetTextureUnits();const Ue=Q.fog,$e=Z.isMeshStandardMaterial?Q.environment:null,tt=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:pn,at=(Z.isMeshStandardMaterial?qe:Fe).get(Z.envMap||$e),dt=Z.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Ve=!!ue.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),it=!!ue.morphAttributes.position,It=!!ue.morphAttributes.normal,At=!!ue.morphAttributes.color;let tr=la;Z.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(tr=w.toneMapping);const Gr=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Lt=Gr!==void 0?Gr.length:0,lt=ke.get(Z),mr=x.state.lights;if(me===!0&&(be===!0||R!==C)){const Zt=R===C&&Z.id===se;De.setState(Z,R,Zt)}let Bi=!1;Z.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==mr.state.version||lt.outputColorSpace!==tt||oe.isInstancedMesh&&lt.instancing===!1||!oe.isInstancedMesh&&lt.instancing===!0||oe.isSkinnedMesh&&lt.skinning===!1||!oe.isSkinnedMesh&&lt.skinning===!0||oe.isInstancedMesh&&lt.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&lt.instancingColor===!1&&oe.instanceColor!==null||lt.envMap!==at||Z.fog===!0&&lt.fog!==Ue||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==De.numPlanes||lt.numIntersection!==De.numIntersection)||lt.vertexAlphas!==dt||lt.vertexTangents!==Ve||lt.morphTargets!==it||lt.morphNormals!==It||lt.morphColors!==At||lt.toneMapping!==tr||et.isWebGL2===!0&&lt.morphTargetsCount!==Lt)&&(Bi=!0):(Bi=!0,lt.__version=Z.version);let Vt=lt.currentProgram;Bi===!0&&(Vt=mn(Z,Q,oe));let Os=!1,fa=!1,Hi=!1;const zt=Vt.getUniforms(),Ur=lt.uniforms;if(je.useProgram(Vt.program)&&(Os=!0,fa=!0,Hi=!0),Z.id!==se&&(se=Z.id,fa=!0),Os||C!==R){if(zt.setValue(K,"projectionMatrix",R.projectionMatrix),et.logarithmicDepthBuffer&&zt.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),C!==R&&(C=R,fa=!0,Hi=!0),Z.isShaderMaterial||Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshStandardMaterial||Z.envMap){const Zt=zt.map.cameraPosition;Zt!==void 0&&Zt.setValue(K,Ke.setFromMatrixPosition(R.matrixWorld))}(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&zt.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial||Z.isShadowMaterial||oe.isSkinnedMesh)&&zt.setValue(K,"viewMatrix",R.matrixWorldInverse)}if(oe.isSkinnedMesh){zt.setOptional(K,oe,"bindMatrix"),zt.setOptional(K,oe,"bindMatrixInverse");const Zt=oe.skeleton;Zt&&(et.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),zt.setValue(K,"boneTexture",Zt.boneTexture,Oe),zt.setValue(K,"boneTextureSize",Zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gn=ue.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0&&et.isWebGL2===!0)&&F.update(oe,ue,Vt),(fa||lt.receiveShadow!==oe.receiveShadow)&&(lt.receiveShadow=oe.receiveShadow,zt.setValue(K,"receiveShadow",oe.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ur.envMap.value=at,Ur.flipEnvMap.value=at.isCubeTexture&&at.isRenderTargetTexture===!1?-1:1),fa&&(zt.setValue(K,"toneMappingExposure",w.toneMappingExposure),lt.needsLights&&yl(Ur,Hi),Ue&&Z.fog===!0&&ve.refreshFogUniforms(Ur,Ue),ve.refreshMaterialUniforms(Ur,Z,ie,ge,Ce),dl.upload(K,lt.uniformsList,Ur,Oe)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(dl.upload(K,lt.uniformsList,Ur,Oe),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&zt.setValue(K,"center",oe.center),zt.setValue(K,"modelViewMatrix",oe.modelViewMatrix),zt.setValue(K,"normalMatrix",oe.normalMatrix),zt.setValue(K,"modelMatrix",oe.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Zt=Z.uniformsGroups;for(let Vi=0,bl=Zt.length;Vi<bl;Vi++)if(et.isWebGL2){const Va=Zt[Vi];Qe.update(Va,Vt),Qe.bind(Va,Vt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vt}function yl(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function Sl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,Q,ue){ke.get(R.texture).__webglTexture=Q,ke.get(R.depthTexture).__webglTexture=ue;const Z=ke.get(R);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=ue===void 0,Z.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,Q){const ue=ke.get(R);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(R,Q=0,ue=0){O=R,D=Q,z=ue;let Z=!0,oe=null,Ue=!1,$e=!1;if(R){const tt=ke.get(R);tt.__useDefaultFramebuffer!==void 0?(je.bindFramebuffer(K.FRAMEBUFFER,null),Z=!1):tt.__webglFramebuffer===void 0?Oe.setupRenderTarget(R):tt.__hasExternalTextures&&Oe.rebindTextures(R,ke.get(R.texture).__webglTexture,ke.get(R.depthTexture).__webglTexture);const at=R.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&($e=!0);const dt=ke.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(dt[Q])?oe=dt[Q][ue]:oe=dt[Q],Ue=!0):et.isWebGL2&&R.samples>0&&Oe.useMultisampledRTT(R)===!1?oe=ke.get(R).__webglMultisampledFramebuffer:Array.isArray(dt)?oe=dt[ue]:oe=dt,P.copy(R.viewport),fe.copy(R.scissor),de=R.scissorTest}else P.copy(A).multiplyScalar(ie).floor(),fe.copy(U).multiplyScalar(ie).floor(),de=X;if(je.bindFramebuffer(K.FRAMEBUFFER,oe)&&et.drawBuffers&&Z&&je.drawBuffers(R,oe),je.viewport(P),je.scissor(fe),je.setScissorTest(de),Ue){const tt=ke.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Q,tt.__webglTexture,ue)}else if($e){const tt=ke.get(R.texture),at=Q||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,tt.__webglTexture,ue||0,at)}se=-1},this.readRenderTargetPixels=function(R,Q,ue,Z,oe,Ue,$e){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&$e!==void 0&&(tt=tt[$e]),tt){je.bindFramebuffer(K.FRAMEBUFFER,tt);try{const at=R.texture,dt=at.format,Ve=at.type;if(dt!==nn&&Re.convert(dt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=Ve===Us&&(Xe.has("EXT_color_buffer_half_float")||et.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(Ve!==ua&&Re.convert(Ve)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===sa&&(et.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-Z&&ue>=0&&ue<=R.height-oe&&K.readPixels(Q,ue,Z,oe,Re.convert(dt),Re.convert(Ve),Ue)}finally{const at=O!==null?ke.get(O).__webglFramebuffer:null;je.bindFramebuffer(K.FRAMEBUFFER,at)}}},this.copyFramebufferToTexture=function(R,Q,ue=0){const Z=Math.pow(2,-ue),oe=Math.floor(Q.image.width*Z),Ue=Math.floor(Q.image.height*Z);Oe.setTexture2D(Q,0),K.copyTexSubImage2D(K.TEXTURE_2D,ue,0,0,R.x,R.y,oe,Ue),je.unbindTexture()},this.copyTextureToTexture=function(R,Q,ue,Z=0){const oe=Q.image.width,Ue=Q.image.height,$e=Re.convert(ue.format),tt=Re.convert(ue.type);Oe.setTexture2D(ue,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ue.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ue.unpackAlignment),Q.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Z,R.x,R.y,oe,Ue,$e,tt,Q.image.data):Q.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Z,R.x,R.y,Q.mipmaps[0].width,Q.mipmaps[0].height,$e,Q.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,Z,R.x,R.y,$e,tt,Q.image),Z===0&&ue.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),je.unbindTexture()},this.copyTextureToTexture3D=function(R,Q,ue,Z,oe=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=R.max.x-R.min.x+1,$e=R.max.y-R.min.y+1,tt=R.max.z-R.min.z+1,at=Re.convert(Z.format),dt=Re.convert(Z.type);let Ve;if(Z.isData3DTexture)Oe.setTexture3D(Z,0),Ve=K.TEXTURE_3D;else if(Z.isDataArrayTexture)Oe.setTexture2DArray(Z,0),Ve=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Z.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,Z.unpackAlignment);const it=K.getParameter(K.UNPACK_ROW_LENGTH),It=K.getParameter(K.UNPACK_IMAGE_HEIGHT),At=K.getParameter(K.UNPACK_SKIP_PIXELS),tr=K.getParameter(K.UNPACK_SKIP_ROWS),Gr=K.getParameter(K.UNPACK_SKIP_IMAGES),Lt=ue.isCompressedTexture?ue.mipmaps[0]:ue.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Lt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Lt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,R.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,R.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,R.min.z),ue.isDataTexture||ue.isData3DTexture?K.texSubImage3D(Ve,oe,Q.x,Q.y,Q.z,Ue,$e,tt,at,dt,Lt.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Ve,oe,Q.x,Q.y,Q.z,Ue,$e,tt,at,Lt.data)):K.texSubImage3D(Ve,oe,Q.x,Q.y,Q.z,Ue,$e,tt,at,dt,Lt),K.pixelStorei(K.UNPACK_ROW_LENGTH,it),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,It),K.pixelStorei(K.UNPACK_SKIP_PIXELS,At),K.pixelStorei(K.UNPACK_SKIP_ROWS,tr),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Gr),oe===0&&Z.generateMipmaps&&K.generateMipmap(Ve),je.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Oe.setTextureCube(R,0):R.isData3DTexture?Oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Oe.setTexture2DArray(R,0):Oe.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){D=0,z=0,O=null,je.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?Ia:wm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ia?ct:pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Wb extends Ym{}Wb.prototype.isWebGL1Renderer=!0;class Gb extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r}}class em extends sn{constructor(e,r,a,o=1){super(e,r,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ci=new Ut,tm=new Ut,sl=[],rm=new za,Xb=new Ut,As=new an,Cs=new ki;class nm extends an{constructor(e,r,a){super(e,r),this.isInstancedMesh=!0,this.instanceMatrix=new em(new Float32Array(a*16),16),this.instanceColor=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,Xb)}computeBoundingBox(){const e=this.geometry,r=this.count;this.boundingBox===null&&(this.boundingBox=new za),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<r;a++)this.getMatrixAt(a,Ci),rm.copy(e.boundingBox).applyMatrix4(Ci),this.boundingBox.union(rm)}computeBoundingSphere(){const e=this.geometry,r=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<r;a++)this.getMatrixAt(a,Ci),Cs.copy(e.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(Cs)}copy(e,r){return super.copy(e,r),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,r){r.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,r){r.fromArray(this.instanceMatrix.array,e*16)}raycast(e,r){const a=this.matrixWorld,o=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(a),e.ray.intersectsSphere(Cs)!==!1))for(let u=0;u<o;u++){this.getMatrixAt(u,Ci),tm.multiplyMatrices(a,Ci),As.matrixWorld=tm,As.raycast(e,sl);for(let h=0,c=sl.length;h<c;h++){const p=sl[h];p.instanceId=u,p.object=this,r.push(p)}sl.length=0}}setColorAt(e,r){this.instanceColor===null&&(this.instanceColor=new em(new Float32Array(this.instanceMatrix.count*3),3)),r.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,r){r.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Jc extends Fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const am=new G,im=new G,sm=new Ut,Lc=new Yc,ol=new ki;class jb extends Xt{constructor(e=new Wr,r=new Jc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const r=e.attributes.position,a=[0];for(let o=1,u=r.count;o<u;o++)am.fromBufferAttribute(r,o-1),im.fromBufferAttribute(r,o),a[o]=a[o-1],a[o]+=am.distanceTo(im);e.setAttribute("lineDistance",new jt(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,r){const a=this.geometry,o=this.matrixWorld,u=e.params.Line.threshold,h=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),ol.copy(a.boundingSphere),ol.applyMatrix4(o),ol.radius+=u,e.ray.intersectsSphere(ol)===!1)return;sm.copy(o).invert(),Lc.copy(e.ray).applyMatrix4(sm);const c=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=c*c,m=new G,g=new G,y=new G,_=new G,S=this.isLineSegments?2:1,T=a.index,E=a.attributes.position;if(T!==null){const x=Math.max(0,h.start),v=Math.min(T.count,h.start+h.count);for(let I=x,w=v-1;I<w;I+=S){const k=T.getX(I),D=T.getX(I+1);if(m.fromBufferAttribute(E,k),g.fromBufferAttribute(E,D),Lc.distanceSqToSegment(m,g,_,y)>p)continue;_.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(_);z<e.near||z>e.far||r.push({distance:z,point:y.clone().applyMatrix4(this.matrixWorld),index:I,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,h.start),v=Math.min(E.count,h.start+h.count);for(let I=x,w=v-1;I<w;I+=S){if(m.fromBufferAttribute(E,I),g.fromBufferAttribute(E,I+1),Lc.distanceSqToSegment(m,g,_,y)>p)continue;_.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(_);k<e.near||k>e.far||r.push({distance:k,point:y.clone().applyMatrix4(this.matrixWorld),index:I,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const h=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}}const om=new G,lm=new G;class qm extends jb{constructor(e,r){super(e,r),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const r=e.attributes.position,a=[];for(let o=0,u=r.count;o<u;o+=2)om.fromBufferAttribute(r,o),lm.fromBufferAttribute(r,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+om.distanceTo(lm);e.setAttribute("lineDistance",new jt(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kc extends Wr{constructor(e=1,r=1,a=1,o=32,u=1,h=!1,c=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:r,height:a,radialSegments:o,heightSegments:u,openEnded:h,thetaStart:c,thetaLength:p};const m=this;o=Math.floor(o),u=Math.floor(u);const g=[],y=[],_=[],S=[];let T=0;const E=[],x=a/2;let v=0;I(),h===!1&&(e>0&&w(!0),r>0&&w(!1)),this.setIndex(g),this.setAttribute("position",new jt(y,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(S,2));function I(){const k=new G,D=new G;let z=0;const O=(r-e)/a;for(let se=0;se<=u;se++){const C=[],P=se/u,fe=P*(r-e)+e;for(let de=0;de<=o;de++){const q=de/o,re=q*p+c,ne=Math.sin(re),ge=Math.cos(re);D.x=fe*ne,D.y=-P*a+x,D.z=fe*ge,y.push(D.x,D.y,D.z),k.set(ne,O,ge).normalize(),_.push(k.x,k.y,k.z),S.push(q,1-P),C.push(T++)}E.push(C)}for(let se=0;se<o;se++)for(let C=0;C<u;C++){const P=E[C][se],fe=E[C+1][se],de=E[C+1][se+1],q=E[C][se+1];g.push(P,fe,q),g.push(fe,de,q),z+=6}m.addGroup(v,z,0),v+=z}function w(k){const D=T,z=new ot,O=new G;let se=0;const C=k===!0?e:r,P=k===!0?1:-1;for(let de=1;de<=o;de++)y.push(0,x*P,0),_.push(0,P,0),S.push(.5,.5),T++;const fe=T;for(let de=0;de<=o;de++){const q=de/o*p+c,re=Math.cos(q),ne=Math.sin(q);O.x=C*ne,O.y=x*P,O.z=C*re,y.push(O.x,O.y,O.z),_.push(0,P,0),z.x=re*.5+.5,z.y=ne*.5*P+.5,S.push(z.x,z.y),T++}for(let de=0;de<o;de++){const q=D+de,re=fe+de;k===!0?g.push(re,re+1,q):g.push(re+1,re,q),se+=3}m.addGroup(v,se,k===!0?1:2),v+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qc extends Wr{constructor(e=1,r=32,a=16,o=0,u=Math.PI*2,h=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:r,heightSegments:a,phiStart:o,phiLength:u,thetaStart:h,thetaLength:c},r=Math.max(3,Math.floor(r)),a=Math.max(2,Math.floor(a));const p=Math.min(h+c,Math.PI);let m=0;const g=[],y=new G,_=new G,S=[],T=[],E=[],x=[];for(let v=0;v<=a;v++){const I=[],w=v/a;let k=0;v===0&&h===0?k=.5/r:v===a&&p===Math.PI&&(k=-.5/r);for(let D=0;D<=r;D++){const z=D/r;y.x=-e*Math.cos(o+z*u)*Math.sin(h+w*c),y.y=e*Math.cos(h+w*c),y.z=e*Math.sin(o+z*u)*Math.sin(h+w*c),T.push(y.x,y.y,y.z),_.copy(y).normalize(),E.push(_.x,_.y,_.z),x.push(z+k,1-w),I.push(m++)}g.push(I)}for(let v=0;v<a;v++)for(let I=0;I<r;I++){const w=g[v][I+1],k=g[v][I],D=g[v+1][I],z=g[v+1][I+1];(v!==0||h>0)&&S.push(w,k,z),(v!==a-1||p<Math.PI)&&S.push(k,D,z)}this.setIndex(S),this.setAttribute("position",new jt(T,3)),this.setAttribute("normal",new jt(E,3)),this.setAttribute("uv",new jt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pc extends Fi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new mt(16777215),this.specular=new mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Am,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zm extends Xt{constructor(e,r=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=r}dispose(){}copy(e,r){return super.copy(e,r),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const r=super.toJSON(e);return r.object.color=this.color.getHex(),r.object.intensity=this.intensity,this.groundColor!==void 0&&(r.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(r.object.distance=this.distance),this.angle!==void 0&&(r.object.angle=this.angle),this.decay!==void 0&&(r.object.decay=this.decay),this.penumbra!==void 0&&(r.object.penumbra=this.penumbra),this.shadow!==void 0&&(r.object.shadow=this.shadow.toJSON()),r}}const Nc=new Ut,um=new G,cm=new G;class Yb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qc,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new er(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const r=this.camera,a=this.matrix;um.setFromMatrixPosition(e.matrixWorld),r.position.copy(um),cm.setFromMatrixPosition(e.target.matrixWorld),r.lookAt(cm),r.updateMatrixWorld(),Nc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qb extends Yb{constructor(){super(new Vm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dm extends Zm{constructor(e,r){super(e,r),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new qb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zb extends Zm{constructor(e,r){super(e,r),this.isAmbientLight=!0,this.type="AmbientLight"}}class hm{constructor(e=1,r=0,a=0){return this.radius=e,this.phi=r,this.theta=a,this}set(e,r,a){return this.radius=e,this.phi=r,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,r,a){return this.radius=Math.sqrt(e*e+r*r+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(pr(r/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jb extends qm{constructor(e=10,r=10,a=4473924,o=8947848){a=new mt(a),o=new mt(o);const u=r/2,h=e/r,c=e/2,p=[],m=[];for(let _=0,S=0,T=-c;_<=r;_++,T+=h){p.push(-c,0,T,c,0,T),p.push(T,0,-c,T,0,c);const E=_===u?a:o;E.toArray(m,S),S+=3,E.toArray(m,S),S+=3,E.toArray(m,S),S+=3,E.toArray(m,S),S+=3}const g=new Wr;g.setAttribute("position",new jt(p,3)),g.setAttribute("color",new jt(m,3));const y=new Jc({vertexColors:!0,toneMapped:!1});super(g,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Kb extends qm{constructor(e=1){const r=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],a=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new Wr;o.setAttribute("position",new jt(r,3)),o.setAttribute("color",new jt(a,3));const u=new Jc({vertexColors:!0,toneMapped:!1});super(o,u),this.type="AxesHelper"}setColors(e,r,a){const o=new mt,u=this.geometry.attributes.color.array;return o.set(e),o.toArray(u,0),o.toArray(u,3),o.set(r),o.toArray(u,6),o.toArray(u,9),o.set(a),o.toArray(u,12),o.toArray(u,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);const fm={type:"change"},Uc={type:"start"},pm={type:"end"},ll=new Yc,mm=new aa,Qb=Math.cos(70*O_.DEG2RAD);class $b extends Fa{constructor(e,r){super(),this.object=e,this.domElement=r,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:na.ROTATE,TWO:na.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",M),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=function(){a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),a.dispatchEvent(fm),a.update(),u=o.NONE},this.update=(function(){const F=new G,he=new da().setFromUnitVectors(e.up,new G(0,1,0)),Le=he.clone().invert(),Re=new G,Pe=new da,Qe=new G,pt=2*Math.PI;return function(){const H=a.object.position;F.copy(H).sub(a.target),F.applyQuaternion(he),c.setFromVector3(F),a.autoRotate&&u===o.NONE&&fe(C()),a.enableDamping?(c.theta+=p.theta*a.dampingFactor,c.phi+=p.phi*a.dampingFactor):(c.theta+=p.theta,c.phi+=p.phi);let Te=a.minAzimuthAngle,$=a.maxAzimuthAngle;isFinite(Te)&&isFinite($)&&(Te<-Math.PI?Te+=pt:Te>Math.PI&&(Te-=pt),$<-Math.PI?$+=pt:$>Math.PI&&($-=pt),Te<=$?c.theta=Math.max(Te,Math.min($,c.theta)):c.theta=c.theta>(Te+$)/2?Math.max(Te,c.theta):Math.min($,c.theta)),c.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,c.phi)),c.makeSafe(),a.enableDamping===!0?a.target.addScaledVector(g,a.dampingFactor):a.target.add(g),a.zoomToCursor&&z||a.object.isOrthographicCamera?c.radius=te(c.radius):c.radius=te(c.radius*m),F.setFromSpherical(c),F.applyQuaternion(Le),H.copy(a.target).add(F),a.object.lookAt(a.target),a.enableDamping===!0?(p.theta*=1-a.dampingFactor,p.phi*=1-a.dampingFactor,g.multiplyScalar(1-a.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Me=!1;if(a.zoomToCursor&&z){let Ae=null;if(a.object.isPerspectiveCamera){const gt=F.length();Ae=te(gt*m);const yt=gt-Ae;a.object.position.addScaledVector(k,yt),a.object.updateMatrixWorld()}else if(a.object.isOrthographicCamera){const gt=new G(D.x,D.y,0);gt.unproject(a.object),a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/m)),a.object.updateProjectionMatrix(),Me=!0;const yt=new G(D.x,D.y,0);yt.unproject(a.object),a.object.position.sub(yt).add(gt),a.object.updateMatrixWorld(),Ae=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),a.zoomToCursor=!1;Ae!==null&&(this.screenSpacePanning?a.target.set(0,0,-1).transformDirection(a.object.matrix).multiplyScalar(Ae).add(a.object.position):(ll.origin.copy(a.object.position),ll.direction.set(0,0,-1).transformDirection(a.object.matrix),Math.abs(a.object.up.dot(ll.direction))<Qb?e.lookAt(a.target):(mm.setFromNormalAndCoplanarPoint(a.object.up,a.target),ll.intersectPlane(mm,a.target))))}else a.object.isOrthographicCamera&&(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/m)),a.object.updateProjectionMatrix(),Me=!0);return m=1,z=!1,Me||Re.distanceToSquared(a.object.position)>h||8*(1-Pe.dot(a.object.quaternion))>h||Qe.distanceToSquared(a.target)>0?(a.dispatchEvent(fm),Re.copy(a.object.position),Pe.copy(a.object.quaternion),Qe.copy(a.target),Me=!1,!0):!1}})(),this.dispose=function(){a.domElement.removeEventListener("contextmenu",le),a.domElement.removeEventListener("pointerdown",ke),a.domElement.removeEventListener("pointercancel",Fe),a.domElement.removeEventListener("wheel",L),a.domElement.removeEventListener("pointermove",Oe),a.domElement.removeEventListener("pointerup",Fe),a._domElementKeyEvents!==null&&(a._domElementKeyEvents.removeEventListener("keydown",M),a._domElementKeyEvents=null)};const a=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=o.NONE;const h=1e-6,c=new hm,p=new hm;let m=1;const g=new G,y=new ot,_=new ot,S=new ot,T=new ot,E=new ot,x=new ot,v=new ot,I=new ot,w=new ot,k=new G,D=new ot;let z=!1;const O=[],se={};function C(){return 2*Math.PI/60/60*a.autoRotateSpeed}function P(){return Math.pow(.95,a.zoomSpeed)}function fe(F){p.theta-=F}function de(F){p.phi-=F}const q=(function(){const F=new G;return function(he,Le){F.setFromMatrixColumn(Le,0),F.multiplyScalar(-he),g.add(F)}})(),re=(function(){const F=new G;return function(he,Le){a.screenSpacePanning===!0?F.setFromMatrixColumn(Le,1):(F.setFromMatrixColumn(Le,0),F.crossVectors(a.object.up,F)),F.multiplyScalar(he),g.add(F)}})(),ne=(function(){const F=new G;return function(he,Le){const Re=a.domElement;if(a.object.isPerspectiveCamera){const Pe=a.object.position;F.copy(Pe).sub(a.target);let Qe=F.length();Qe*=Math.tan(a.object.fov/2*Math.PI/180),q(2*he*Qe/Re.clientHeight,a.object.matrix),re(2*Le*Qe/Re.clientHeight,a.object.matrix)}else a.object.isOrthographicCamera?(q(he*(a.object.right-a.object.left)/a.object.zoom/Re.clientWidth,a.object.matrix),re(Le*(a.object.top-a.object.bottom)/a.object.zoom/Re.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}})();function ge(F){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?m/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function ie(F){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?m*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function W(F){if(!a.zoomToCursor)return;z=!0;const he=a.domElement.getBoundingClientRect(),Le=F.clientX-he.left,Re=F.clientY-he.top,Pe=he.width,Qe=he.height;D.x=Le/Pe*2-1,D.y=-(Re/Qe)*2+1,k.set(D.x,D.y,1).unproject(e).sub(e.position).normalize()}function te(F){return Math.max(a.minDistance,Math.min(a.maxDistance,F))}function A(F){y.set(F.clientX,F.clientY)}function U(F){W(F),v.set(F.clientX,F.clientY)}function X(F){T.set(F.clientX,F.clientY)}function pe(F){_.set(F.clientX,F.clientY),S.subVectors(_,y).multiplyScalar(a.rotateSpeed);const he=a.domElement;fe(2*Math.PI*S.x/he.clientHeight),de(2*Math.PI*S.y/he.clientHeight),y.copy(_),a.update()}function me(F){I.set(F.clientX,F.clientY),w.subVectors(I,v),w.y>0?ge(P()):w.y<0&&ie(P()),v.copy(I),a.update()}function be(F){E.set(F.clientX,F.clientY),x.subVectors(E,T).multiplyScalar(a.panSpeed),ne(x.x,x.y),T.copy(E),a.update()}function Ce(F){W(F),F.deltaY<0?ie(P()):F.deltaY>0&&ge(P()),a.update()}function Ne(F){let he=!1;switch(F.code){case a.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?de(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):ne(0,a.keyPanSpeed),he=!0;break;case a.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?de(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):ne(0,-a.keyPanSpeed),he=!0;break;case a.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?fe(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):ne(a.keyPanSpeed,0),he=!0;break;case a.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?fe(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):ne(-a.keyPanSpeed,0),he=!0;break}he&&(F.preventDefault(),a.update())}function we(){if(O.length===1)y.set(O[0].pageX,O[0].pageY);else{const F=.5*(O[0].pageX+O[1].pageX),he=.5*(O[0].pageY+O[1].pageY);y.set(F,he)}}function Ke(){if(O.length===1)T.set(O[0].pageX,O[0].pageY);else{const F=.5*(O[0].pageX+O[1].pageX),he=.5*(O[0].pageY+O[1].pageY);T.set(F,he)}}function Ot(){const F=O[0].pageX-O[1].pageX,he=O[0].pageY-O[1].pageY,Le=Math.sqrt(F*F+he*he);v.set(0,Le)}function rt(){a.enableZoom&&Ot(),a.enablePan&&Ke()}function K(){a.enableZoom&&Ot(),a.enableRotate&&we()}function bt(F){if(O.length==1)_.set(F.pageX,F.pageY);else{const Le=ee(F),Re=.5*(F.pageX+Le.x),Pe=.5*(F.pageY+Le.y);_.set(Re,Pe)}S.subVectors(_,y).multiplyScalar(a.rotateSpeed);const he=a.domElement;fe(2*Math.PI*S.x/he.clientHeight),de(2*Math.PI*S.y/he.clientHeight),y.copy(_)}function Xe(F){if(O.length===1)E.set(F.pageX,F.pageY);else{const he=ee(F),Le=.5*(F.pageX+he.x),Re=.5*(F.pageY+he.y);E.set(Le,Re)}x.subVectors(E,T).multiplyScalar(a.panSpeed),ne(x.x,x.y),T.copy(E)}function et(F){const he=ee(F),Le=F.pageX-he.x,Re=F.pageY-he.y,Pe=Math.sqrt(Le*Le+Re*Re);I.set(0,Pe),w.set(0,Math.pow(I.y/v.y,a.zoomSpeed)),ge(w.y),v.copy(I)}function je(F){a.enableZoom&&et(F),a.enablePan&&Xe(F)}function vt(F){a.enableZoom&&et(F),a.enableRotate&&bt(F)}function ke(F){a.enabled!==!1&&(O.length===0&&(a.domElement.setPointerCapture(F.pointerId),a.domElement.addEventListener("pointermove",Oe),a.domElement.addEventListener("pointerup",Fe)),ce(F),F.pointerType==="touch"?j(F):qe(F))}function Oe(F){a.enabled!==!1&&(F.pointerType==="touch"?ve(F):Ye(F))}function Fe(F){De(F),O.length===0&&(a.domElement.releasePointerCapture(F.pointerId),a.domElement.removeEventListener("pointermove",Oe),a.domElement.removeEventListener("pointerup",Fe)),a.dispatchEvent(pm),u=o.NONE}function qe(F){let he;switch(F.button){case 0:he=a.mouseButtons.LEFT;break;case 1:he=a.mouseButtons.MIDDLE;break;case 2:he=a.mouseButtons.RIGHT;break;default:he=-1}switch(he){case di.DOLLY:if(a.enableZoom===!1)return;U(F),u=o.DOLLY;break;case di.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(a.enablePan===!1)return;X(F),u=o.PAN}else{if(a.enableRotate===!1)return;A(F),u=o.ROTATE}break;case di.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(a.enableRotate===!1)return;A(F),u=o.ROTATE}else{if(a.enablePan===!1)return;X(F),u=o.PAN}break;default:u=o.NONE}u!==o.NONE&&a.dispatchEvent(Uc)}function Ye(F){switch(u){case o.ROTATE:if(a.enableRotate===!1)return;pe(F);break;case o.DOLLY:if(a.enableZoom===!1)return;me(F);break;case o.PAN:if(a.enablePan===!1)return;be(F);break}}function L(F){a.enabled===!1||a.enableZoom===!1||u!==o.NONE||(F.preventDefault(),a.dispatchEvent(Uc),Ce(F),a.dispatchEvent(pm))}function M(F){a.enabled===!1||a.enablePan===!1||Ne(F)}function j(F){switch(ye(F),O.length){case 1:switch(a.touches.ONE){case na.ROTATE:if(a.enableRotate===!1)return;we(),u=o.TOUCH_ROTATE;break;case na.PAN:if(a.enablePan===!1)return;Ke(),u=o.TOUCH_PAN;break;default:u=o.NONE}break;case 2:switch(a.touches.TWO){case na.DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;rt(),u=o.TOUCH_DOLLY_PAN;break;case na.DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;K(),u=o.TOUCH_DOLLY_ROTATE;break;default:u=o.NONE}break;default:u=o.NONE}u!==o.NONE&&a.dispatchEvent(Uc)}function ve(F){switch(ye(F),u){case o.TOUCH_ROTATE:if(a.enableRotate===!1)return;bt(F),a.update();break;case o.TOUCH_PAN:if(a.enablePan===!1)return;Xe(F),a.update();break;case o.TOUCH_DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;je(F),a.update();break;case o.TOUCH_DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;vt(F),a.update();break;default:u=o.NONE}}function le(F){a.enabled!==!1&&F.preventDefault()}function ce(F){O.push(F)}function De(F){delete se[F.pointerId];for(let he=0;he<O.length;he++)if(O[he].pointerId==F.pointerId){O.splice(he,1);return}}function ye(F){let he=se[F.pointerId];he===void 0&&(he=new ot,se[F.pointerId]=he),he.set(F.pageX,F.pageY)}function ee(F){const he=F.pointerId===O[0].pointerId?O[1]:O[0];return se[he.pointerId]}a.domElement.addEventListener("contextmenu",le),a.domElement.addEventListener("pointerdown",ke),a.domElement.addEventListener("pointercancel",Fe),a.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}}const ul=[{name:"Dark",hex:"#111827"},{name:"Gray",hex:"#6b7280"},{name:"White",hex:"#ffffff"},{name:"Red",hex:"#ef4444"},{name:"Orange",hex:"#f97316"},{name:"Yellow",hex:"#eab308"},{name:"Green",hex:"#22c55e"},{name:"Blue",hex:"#3b82f6"}];function eM(){const s=st.useRef(null);st.useRef(null);const[e,r]=st.useState(1),[a,o]=st.useState(1),[u,h]=st.useState(1),[c,p]=st.useState(0),[m,g]=st.useState(.5),[y,_]=st.useState(!0),[S,T]=st.useState(!0),[E,x]=st.useState(!0),[v,I]=st.useState(!0),[w,k]=st.useState(!1),[D,z]=st.useState(4),[O,se]=st.useState(5),[C,P]=st.useState(!0),[fe,de]=st.useState(null),[q,re]=st.useState(ul[0].hex),[ne,ge]=st.useState(ul[2].hex),[ie,W]=st.useState(ul[1].hex),[te,A]=st.useState(ul[7].hex),[U,X]=st.useState(null),[pe,me]=st.useState({x:20,y:20}),[be,Ce]=st.useState(!1),Ne=st.useRef({x:0,y:0}),we=st.useRef(null),Ke=st.useRef(null),Ot=st.useRef(null),rt=st.useRef(null),K=st.useRef(null),bt=st.useRef(null),Xe=st.useRef(null),et=st.useRef(null);st.useEffect(()=>{if(fe){const ke=setTimeout(()=>de(null),3e3);return()=>clearTimeout(ke)}},[fe]),st.useEffect(()=>{const ke=qe=>{be&&me({x:qe.clientX-Ne.current.x,y:qe.clientY-Ne.current.y})},Oe=qe=>{if(!be)return;const Ye=qe.touches[0];me({x:Ye.clientX-Ne.current.x,y:Ye.clientY-Ne.current.y})},Fe=()=>{Ce(!1)};return be&&(window.addEventListener("mousemove",ke),window.addEventListener("mouseup",Fe),window.addEventListener("touchmove",Oe),window.addEventListener("touchend",Fe)),()=>{window.removeEventListener("mousemove",ke),window.removeEventListener("mouseup",Fe),window.removeEventListener("touchmove",Oe),window.removeEventListener("touchend",Fe)}},[be]);const je=st.useMemo(()=>{const ke=[],Oe=[[0,0,0],[.5,.5,0],[.5,0,.5],[0,.5,.5],[.25,.25,.25],[.75,.75,.25],[.75,.25,.75],[.25,.75,.75]];for(let Ye=0;Ye<D;Ye++)for(let L=0;L<D;L++)for(let M=0;M<D;M++)Oe.forEach(j=>{ke.push({x:(Ye+j[0])*40,y:(L+j[1])*40,z:(M+j[2])*40})});const Fe=D*40/2,qe=new G(Fe,Fe,Fe);return{atoms:ke,center:qe,latticeConstant:40}},[D]),vt=st.useMemo(()=>{if(e===0&&a===0&&u===0)return null;const ke=new G(e,a,u),Oe=ke.clone().normalize();let Fe=new G(0,1,0);Math.abs(Oe.dot(Fe))>.99&&Fe.set(1,0,0);const qe=new G().crossVectors(Fe,ke),Ye=new G().crossVectors(ke,qe),L=new G().addVectors(qe,Ye),M=(le,ce)=>ce===0?le:M(ce,le%ce),j=(le,ce,De)=>M(Math.abs(le),M(Math.abs(ce),Math.abs(De))),ve=le=>{const ce=j(Math.round(le.x),Math.round(le.y),Math.round(le.z))||1;return`[${Math.round(le.x/ce)} ${Math.round(le.y/ce)} ${Math.round(le.z/ce)}]`};return{uDir:qe.clone().normalize(),vDir:Ye.clone().normalize(),uLabel:ve(qe),vLabel:ve(Ye),diagLabel:ve(L)}},[e,a,u]);return st.useMemo(()=>{if(!vt)return[];const{uDir:ke,vDir:Oe}=vt,Fe=new G(e,a,u).normalize(),qe=je.center.clone().add(Fe.clone().multiplyScalar(c*10)),Ye=[],L=O;return je.atoms.forEach(M=>{const j=new G(M.x,M.y,M.z),ve=new G().subVectors(j,qe),le=ve.dot(Fe);if(Math.abs(le)<L){const ce=ve.dot(ke),De=ve.dot(Oe),ye=Math.sqrt(Math.pow(O,2)-Math.pow(le,2)),ee=.5+.4*(ye/O);Ye.push({u:ce,v:De,r:ye,opacity:ee,id:`${M.x}-${M.y}-${M.z}`})}}),Ye},[e,a,u,c,je,vt,O]),st.useEffect(()=>{if(!s.current)return;const ke=s.current.clientWidth,Oe=s.current.clientHeight,Fe=new Gb;Fe.background=new mt(q),we.current=Fe;const qe=new Vr(45,ke/Oe,1,5e3);qe.position.set(300,300,400),rt.current=qe;const Ye=new Ym({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});Ye.setSize(ke,Oe),Ye.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(Ye.domElement),Ot.current=Ye;const L=new $b(qe,Ye.domElement);L.enableDamping=!0,L.dampingFactor=.05,L.touches={ONE:na.ROTATE,TWO:na.DOLLY_PAN},K.current=L;const M=new Zb(16777215,.6);Fe.add(M);const j=new dm(16777215,.8);j.position.set(100,200,100),Fe.add(j);const ve=new dm(16764074,.5);ve.position.set(-100,-200,-100),Fe.add(ve);const le=300,ce=new Jb(le,10,4473924,2236962);ce.position.set(le/2,0,le/2),Fe.add(ce),bt.current=ce;const De=new Kb(60);Fe.add(De),Xe.current=De;const ye=new gl(800,800),ee=new Pc({color:te,side:fn,transparent:!0,opacity:.5,depthWrite:!1,shininess:90}),F=new an(ye,ee);Fe.add(F),Ke.current=F;const he=()=>{et.current=requestAnimationFrame(he),L.update(),Ye.render(Fe,qe)};he();const Le=()=>{if(!s.current)return;const Re=s.current.clientWidth,Pe=s.current.clientHeight;qe.aspect=Re/Pe,qe.updateProjectionMatrix(),Ye.setSize(Re,Pe)};return window.addEventListener("resize",Le),()=>{window.removeEventListener("resize",Le),cancelAnimationFrame(et.current),s.current&&Ye.domElement&&s.current.removeChild(Ye.domElement),Ye.dispose()}},[]),st.useEffect(()=>{we.current&&(we.current.background=new mt(q))},[q]),st.useEffect(()=>{bt.current&&(bt.current.visible=S),Xe.current&&(Xe.current.visible=E)},[S,E]),st.useEffect(()=>{const ke=we.current;if(!ke)return;ke.children.filter(M=>M.name==="atoms"||M.name==="bonds").forEach(M=>ke.remove(M));const{atoms:Oe}=je,Fe=new G(e,a,u).normalize(),qe=je.center.clone().add(Fe.clone().multiplyScalar(c*10));let Ye=Oe;const L=M=>!w||e===0&&a===0&&u===0?!0:new G().subVectors(M,qe).dot(Fe)<=O;if(w&&(e!==0||a!==0||u!==0)&&(Ye=Oe.filter(M=>L(new G(M.x,M.y,M.z)))),Ye.length>0){const M=new Qc(O,16,16),j=new Pc({color:ne,shininess:50}),ve=new nm(M,j,Ye.length);ve.name="atoms";const le=new Xt;Ye.forEach((ce,De)=>{le.position.set(ce.x,ce.y,ce.z),le.updateMatrix(),ve.setMatrixAt(De,le.matrix)}),ve.instanceMatrix.needsUpdate=!0,ke.add(ve)}if(y){const M=[];for(let j=0;j<Oe.length;j++)for(let ve=j+1;ve<Oe.length;ve++){const le=new G(Oe[j].x,Oe[j].y,Oe[j].z),ce=new G(Oe[ve].x,Oe[ve].y,Oe[ve].z),De=le.x-ce.x,ye=le.y-ce.y,ee=le.z-ce.z,F=De*De+ye*ye+ee*ee;F>290&&F<310&&L(le)&&L(ce)&&M.push({start:le,end:ce})}if(M.length>0){const j=new Kc(1.5,1.5,1,8),ve=new Pc({color:ie}),le=new nm(j,ve,M.length);le.name="bonds";const ce=new Xt,De=new G,ye=new G(0,1,0);M.forEach((ee,F)=>{const he=ee.start,Le=ee.end,Re=he.distanceTo(Le),Pe=he.clone().add(Le).multiplyScalar(.5);ce.position.copy(Pe),ce.scale.set(1,Re,1),De.subVectors(Le,he).normalize(),ce.quaternion.setFromUnitVectors(ye,De),ce.updateMatrix(),le.setMatrixAt(F,ce.matrix)}),le.instanceMatrix.needsUpdate=!0,ke.add(le)}}},[je,y,ne,ie,O,w,e,a,u,c]),st.useEffect(()=>{if(!Ke.current)return;const ke=Ke.current;if(e===0&&a===0&&u===0){ke.visible=!1;return}ke.visible=!0;const Oe=new G(e,a,u).normalize(),Fe=new G(0,0,1),qe=new da;qe.setFromUnitVectors(Fe,Oe),ke.quaternion.copy(qe);const Ye=je.center.clone().add(Oe.multiplyScalar(c*10));ke.position.copy(Ye),ke.material.opacity=m,ke.material.color.set(te)},[e,a,u,c,m,te,je.center]),Rs.jsxs("div",{className:"relative w-full h-screen flex flex-col md:flex-row bg-gray-900 text-white overflow-hidden",children:[Rs.jsx("style",{children:"..."}),Rs.jsx("div",{className:"relative flex-grow h-full",style:{touchAction:"none"},children:Rs.jsx("div",{ref:s,className:"w-full h-full cursor-move"})})]})}const tM=kv.createRoot(document.getElementById("root"));tM.render(Rs.jsx(eM,{}));
