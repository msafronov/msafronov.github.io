var i=Object.defineProperty;var c=(g,A,B)=>A in g?i(g,A,{enumerable:!0,configurable:!0,writable:!0,value:B}):g[A]=B;var e=(g,A,B)=>(c(g,typeof A!="symbol"?A+"":A,B),B);(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const I of document.querySelectorAll('link[rel="modulepreload"]'))E(I);new MutationObserver(I=>{for(const C of I)if(C.type==="childList")for(const Q of C.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&E(Q)}).observe(document,{childList:!0,subtree:!0});function B(I){const C={};return I.integrity&&(C.integrity=I.integrity),I.referrerPolicy&&(C.referrerPolicy=I.referrerPolicy),I.crossOrigin==="use-credentials"?C.credentials="include":I.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function E(I){if(I.ep)return;I.ep=!0;const C=B(I);fetch(I.href,C)}})();var M=Object.defineProperty,r=(g,A)=>{for(var B in A)M(g,B,{get:A[B],enumerable:!0})},t=(()=>{for(var g=new Uint8Array(128),A=0;A<64;A++)g[A<26?A+65:A<52?A+71:A<62?A-4:A*4-205]=A;return B=>{for(var E=B.length,I=new Uint8Array((E-(B[E-1]=="=")-(B[E-2]=="="))*3/4|0),C=0,Q=0;C<E;){var Y=g[B.charCodeAt(C++)],D=g[B.charCodeAt(C++)],w=g[B.charCodeAt(C++)],o=g[B.charCodeAt(C++)];I[Q++]=Y<<2|D>>4,I[Q++]=D<<4|w>>2,I[Q++]=w<<6|o}return I}})(),n={};r(n,{default:()=>a});var a=t("AGFzbQEAAAABEgRgAX8AYAF/AX9gAABgAn9/AAIeAgNlbnYGcmVuZGVyAAIDZW52CWxvZ19lcnJvcgAAAwcGAAMAAAEBBQQBAQJQBhYDfwFBgIAEC38AQaSgBAt/AEGwoAQLB1EHBm1lbW9yeQIABGluaXQAAgNydW4ABQxzY3JlZW5fd2lkdGgABg1zY3JlZW5faGVpZ2h0AAcKX19kYXRhX2VuZAMBC19faGVhcF9iYXNlAwIMAUQKgC8G8RkCCX8FfiMAQcAEayIAJAAgAEG0A2pBiCA7AQAgAEGsA2pCIDcCACAAQaQDakKAgAQ3AgAgAEGcA2pCoICAgICAwAA3AgAgAEGUA2pCgIAENwIAIABBjANqQoSAgICAgMAANwIAIABBhANqQoCFgICAPDcCACAAQfwCakLgg4CAwAA3AgAgAEH0AmpC4IOAgIDQADcCACAAQewCakKAgICAgNAANwIAIABB5AJqQoCAgICABDcCACAAQdwCakKAgISAgIDAADcCACAAQdQCakKAgICAgAQ3AgAgAEHMAmpCgICEgICAwAA3AgAgAEHEAmpC4IOAgMAANwIAIABBvAJqQoCAgICA0AA3AgAgAEG0AmpCgICAgIAENwIAIABBrAJqQoCAhICAgMAANwIAIABBpAJqQoCAgICABDcCACAAQZwCakKAgISAgIDAADcCACAAQZQCakKAgICAgAQ3AgAgAEGMAmpCgICEgICAwAA3AgAgAEGEAmpCgICAgIAENwIAIABB/AFqQoCAhICAgMAANwIAIABB9AFqQoCAgICABDcCACAAQewBakKAgISAgIDAADcCACAAQeQBakKAgICAgAQ3AgAgAEKAgISAgIDAADcC3AEgAEGIIDsB2AEgAEIgNwLQASAAQoCABDcCyAEgAEKggICAgIDAADcCwAEgAEKAgAQ3ArgBIABChICAgICAwAA3ArABIABCgIWAgIA8NwKoASAAQuCDgIDAADcCoAEgAELgg4CAgNAANwKYASAAQoCAgICA0AA3ApABIABCgICAgIAENwKIASAAQoCAhICAgMAANwKAASAAQoCAgICABDcCeCAAQoCAhICAgMAANwJwIABC4IOAgMAANwJoIABCgICAgIDQADcCYCAAQoCAgICABDcCWCAAQoCAhICAgMAANwJQIABCgICAgIAENwJIIABC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A2oMAQsgBUESdEGAgPAAcSABLQADQT9xIARBBnRyciICQYCAxABGDQEgAUEEagshASADQShGDQIgAEGIBGogA2ogAjoAACADQQFqIQMgAUGRoARHDQELCyAAQdgDaiAAQagEaiIBKQMAIgo3AwAgAEHQA2ogAEGgBGoiAikDACILNwMAIABByANqIABBmARqIgUpAwAiDDcDACAAQcADaiAAQZAEaiIEKQMAIg03AwAgACAAKQOIBCIONwO4AyACIA03AQAgASAMNwEAIABBsARqIAs3AQAgAEG4BGogCjcBACAAQYACOwGWBCAAQf6D6AA2AZIEQQAhAyAAQQA6AJAEIABCgoKUgJC6gAM3AYgEIAAgDjcBmAQgBiAAQYgEahADIABBgARqQgA3AwAgAEH4A2pCADcDACAAQfADakIANwMAIABB6ANqQgA3AwAgAEIANwPgAyABQgA3AwAgAkIANwMAIAVCADcDACAEQgA3AwAgAEIANwOIBEGRoAQhAQNAAkACfyABLAAAIgJBAE4EQCACQf8BcSECIAFBAWoMAQsgAS0AAUE/cSEEIAJBH3EhBSACQV9NBEAgBUEGdCAEciECIAFBAmoMAQsgAS0AAkE/cSAEQQZ0ciEEIAJBcEkEQCAEIAVBDHRyIQIgAUEDagwBCyAFQRJ0QYCA8ABxIAEtAANBP3EgBEEGdHJyIgJBgIDEAEYNASABQQRqCyEBIANBKEYNAiAAQYgEaiADaiACOgAAIANBAWohAyABQaSgBEcNAQsLIABBgARqIABBqARqIgEpAwAiCjcDACAAQfgDaiAAQaAEaiIDKQMAIgs3AwAgAEHwA2ogAEGYBGopAwAiDDcDACAAQegDaiAAQZAEaikDACINNwMAIAAgACkDiAQiDjcD4AMgAyANNwEAIAEgDDcBACAAQbAEaiALNwEAIABBuARqIAo3AQAgAEGAAjsBlgQgAEH+g8ACNgGSBCAAQQA6AJAEIABCgoKggNCygB43AYgEIAAgDjcBmAQgBiAAQYgEahADIABBwARqJAAPCwALQQIQBAALQQEQBAAL7RQCIX8BfiMAQeABayICJAACfwJAAkACQAJAAkACQCAAQagBaigCAEEASgRAIABBrAFqKAIAQQBMDQEgAEGwAWooAgBBAEwNAiABLwEEIgogAS8BCiIQSw0DIAEvAQYiBiABLwEMIhxLDQQgAS0ACCIVIAEtAA5HDQUgAEFAayEDAkAgAS0AACIiQQFrDgIHAAcLIAZBCHYhFyACQegAaiABQRxqKQAANwMAIAJB8ABqIAFBJGopAAA3AwAgAkH4AGogAUEsaikAADcDACACQYABaiABQTRqKAAANgIAIAIgASkAFDcDYCAAQdkBai0AACEaIABB2AFqLQAAIQ8gAS0AEyEbIAEtABIhHSABLwEQIRIgAS8BCCEMIAEtAAIhCyABLQABIR4gAS8BDiEOIAJBtAFqIANBMGopAAA3AgAgAkGsAWogA0EoaikAADcCACACQaQBaiADQSBqKQAANwIAIAJBnAFqIANBGGopAAA3AgAgAkGUAWogA0EQaikAADcCACACQYwBaiADQQhqKQAANwIAIAIgAykAADcChAEgAEH4AGooAgAhGSAAQfwAaigCACENIABBgAFqKAIAIQcgAEGYAWopAgAhIyAAQaABaigCACEWIABBpAFqKAIAIRggAkEEaiACQeAAakHcAPwKAAAgDkEIdiETIBAhCCAKIREgBgwHC0HlABAEAAtB5gAQBAALQecAEAQAC0HoABAEAAtB6QAQBAALQeoAEAQACyACQegAaiABQRhqKQEANwMAIAJB8ABqIAFBIGopAQA3AwAgAkH4AGogAUEoaikBADcDACACQYABaiABQTBqKQEANwMAIAJBkAFqIANBCGopAgA3AwAgAkGYAWogA0EQaikCADcDACACQaABaiADQRhqKQIANwMAIAJBqAFqIANBIGopAgA3AwAgAkGwAWogA0EoaikCADcDACACQbgBaiADQTBqKAIANgIAIAIgASkBEDcDYCACIAMpAgA3A4gBIAEtAA8hEyABLQADIRcgAS0AAiELIAEvAQAhESAAQaQBai0AACEPIABBoAFqKAIAIRggAEGcAWooAgAhFiAAQZQBaikCACEjIABB/ABqKAIAIQcgAEH4AGooAgAhDSAAQfQAaigCACEZIAAvAaYBIR8gAC0ApQEhGiACQQRqIAJB4ABqQdwA/AoAACARQQh2IR5BASEgIBMhGyAVIR0gHCESIBAhDiAGIQggCiEMIAsLIQMCfwJ/IABBwAFqKAIAIgkEQEEAIABBvAFqKAIAIAlqIgAoAggiBCAAayIFQQAgBCAFTxsiBCAJbiIFIAQgBSAJ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");function h(){let g=null,A=null,B=null,E=null,I=131072,C=0,Q=0,Y=0;const D=(...G)=>{console.warn("wasm warning:",...G)},w=G=>{throw new Error(`wasm error, errorCode = ${G}`)},o=()=>{const G=new Uint8Array(g.exports.memory.buffer,I,C);E.data.set(G),B.putImageData(E,0,0)};self.onmessage=G=>{try{const s=new WebAssembly.Module(G.data.wasm);g=new WebAssembly.Instance(s,{env:{log_warning:D,log_error:w,render:o}}),A=G.data.offscreenCanvas,B=A.getContext("2d"),g.exports.init(),Q=g.exports.screen_width(),Y=g.exports.screen_height(),C=Q*Y*4,A.width=Q,A.height=Y,E=B.createImageData(Q,Y),console.warn("graphicsWorker instance:",g),g.exports.run()}catch(s){console.warn("WASM initialization error:",s)}}}var x=h.toString().replace(/^function\s*\S+\s*\([^)]*\)\s*\{|\}$/g,""),H=new Blob([x],{type:"application/javascript"}),m=new Worker(URL.createObjectURL(H)),f=class{constructor(){e(this,"create",g=>{const A=g.transferControlToOffscreen();m.postMessage({wasm:a,offscreenCanvas:A},[a.buffer,A])})}};const b=new f,N=window.document.createElement("canvas");window.document.body.appendChild(N);b.create(N);
