if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),d={module:{uri:o},exports:t,require:l};s[o]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-9517df1b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.cb74e31e.js",revision:null},{url:"assets/index.ff23b0a5.css",revision:null},{url:"assets/vendor.31052983.css",revision:null},{url:"assets/vendor.c4d64729.js",revision:null},{url:"index.html",revision:"193dd1b553668e0c3d98e61bbdac06dd"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"./logo@192x192.png",revision:"04b357520a0d52eeef26e65170bac83f"},{url:"./logo@512x512.png",revision:"5830f0d36bc66261c4059e289d46ae44"},{url:"manifest.webmanifest",revision:"3b28338b24629573ffcd2975cee28680"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
