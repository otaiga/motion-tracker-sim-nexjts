(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9917:function(e,t,n){"use strict";var i=n(3038),r=n(319);t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,s=void 0!==r&&r,d=e.priority,u=void 0!==d&&d,g=e.loading,b=e.lazyBoundary,p=void 0===b?"200px":b,v=e.className,x=e.quality,w=e.width,y=e.height,k=e.objectFit,z=e.objectPosition,E=e.onLoadingComplete,O=e.loader,I=void 0===O?S:O,N=e.placeholder,_=void 0===N?"empty":N,M=e.blurDataURL,D=function(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),P=n?"responsive":"intrinsic";"layout"in D&&(D.layout&&(P=D.layout),delete D.layout);var R="";if(function(e){return"object"===typeof e&&(h(e)||function(e){return void 0!==e.src}(e))}(t)){var C=h(t)?t.default:t;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(C)));if(M=M||C.blurDataURL,R=C.src,(!P||"fill"!==P)&&(y=y||C.height,w=w||C.width,!C.height||!C.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(C)))}t="string"===typeof t?t:R;var q=j(w),L=j(y),U=j(x),W=!u&&("lazy"===g||"undefined"===typeof g);t.startsWith("data:")&&(s=!0,W=!1);m.has(t)&&(W=!1);0;var B,T,F,G=l.useIntersection({rootMargin:p,disabled:!W}),V=i(G,2),Z=V[0],H=V[1],K=!W||H,X={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:k,objectPosition:z},J="blur"===_?{filter:"blur(20px)",backgroundSize:k||"cover",backgroundImage:'url("'.concat(M,'")'),backgroundPosition:z||"0% 0%"}:{};if("fill"===P)B={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof q&&"undefined"!==typeof L){var Q=L/q,Y=isNaN(Q)?"100%":"".concat(100*Q,"%");"responsive"===P?(B={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},T={display:"block",boxSizing:"border-box",paddingTop:Y}):"intrinsic"===P?(B={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},T={boxSizing:"border-box",display:"block",maxWidth:"100%"},F='<svg width="'.concat(q,'" height="').concat(L,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===P&&(B={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:q,height:L})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};K&&($=A({src:t,unoptimized:s,layout:P,width:q,quality:U,sizes:n,loader:I}));var ee=t;return o.default.createElement("div",{style:B},T?o.default.createElement("div",{style:T},F?o.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(F))}):null):null,!K&&o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},D,A({src:t,unoptimized:s,layout:P,width:q,quality:U,sizes:n,loader:I}),{decoding:"async","data-nimg":!0,style:X,className:v}))),o.default.createElement("img",Object.assign({},D,$,{decoding:"async","data-nimg":!0,className:v,ref:function(e){Z(e),function(e,t,n,i){if(!e)return;var r=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),m.add(t),i){var r=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:r,naturalHeight:o})}}))};e.complete?r():e.onload=r}(e,ee,_,E)},style:f({},X,J)})),u?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var o=u(n(7294)),a=u(n(639)),c=n(8997),s=n(5809),l=n(7426);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){d(e,t,n[t])}))}return e}var m=new Set;var g=new Map([["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t).concat(k(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(k(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(k(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function h(e){return void 0!==e.default}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||s.imageConfigDefault,p=b.deviceSizes,v=b.imageSizes,x=b.loader,w=b.path,y=(b.domains,[].concat(r(p),r(v)));function A(e){var t=e.src,n=e.unoptimized,i=e.layout,o=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var i,o=/(^|\s)(1?\d?\d)vw/g,a=[];i=o.exec(n);i)a.push(parseInt(i[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:y.filter((function(e){return e>=p[0]*c})),kind:"w"}}return{widths:y,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:p,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(o,i,c),d=l.widths,u=l.kind,f=d.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:d.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", "),src:s({src:t,quality:a,width:d[f]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t=g.get(x);if(t)return t(f({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(x))}function k(e){return"/"===e[0]?e.slice(1):e}p.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},7426:function(e,t,n){"use strict";var i=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=r.useRef(),l=r.useState(!1),d=i(l,2),u=d[0],f=d[1],m=r.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return r.useEffect((function(){if(!a&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[m,u]};var r=n(7294),o=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5590:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=n(5893),r=n(7294),o=n(9008),a=n(5675),c=function(e){var t=(0,r.useState)(e.seconds),n=t[0],o=t[1];return(0,r.useEffect)((function(){if(n){var e=setInterval((function(){o(n-10)}),1e3);return function(){return clearInterval(e)}}}),[n]),(0,i.jsx)("p",{children:n})},s={src:"/_next/static/image/public/trackerImage.0879cc92a532cf76f6811a4087a9d9b6.png",height:1182,width:1182,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA80lEQVR4nGP8//8/AyMjI8PeM5sZnE18GUBgz6lNDC5mfgxgOSAfDI5f3cO/aO4KeaBixpiksIdW2q4fgMIMjDuOrWPg4+cT7GqeFP7pzTcTkC4+Ea6zZTW5K96+e/8ebEJmUarR1XN38l69/6QDNIBRVIDniqKW9MSF05aeAytIyU0wvnXpQeHVe8/1WZmYGNUUJS7Kqov1L5258gxj/+wOBj1DbeHsxIoIMWEx+39///1/9+ndkUmzWpZdvnz9LdwXu05sEFm+cK0y0FmM4bEBdzysgt6A5UAECMSkRzEsnbUcyGJgSC1KZpjVOwfIYmAAAGadZc93RjZZAAAAAElFTkSuQmCC"},l=function(){var e=(0,r.useState)(0),t=e[0],n=e[1],l=(0,r.useState)([]),d=(l[0],l[1],["0","1/4","1/3","1/2"]),u=["right","left"];return(0,i.jsxs)("div",{className:"bg-black h-screen mx-auto overflow-hidden relative",children:[(0,i.jsxs)(o.default,{children:[(0,i.jsx)("title",{children:"Motion Tracker"}),(0,i.jsx)("meta",{name:"description",content:"Motion Tracker"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)("main",{children:(0,i.jsxs)("div",{className:"flex justify-center items-center",children:[(0,i.jsxs)("div",{className:"top-80 md:top-0 relative animate-scenario",children:[(0,i.jsx)(a.default,{src:s,alt:"Picture of radar background",className:"z-0"}),(0,i.jsx)("div",{className:"flex animate-slow-pulse",children:function(){for(var e=[],n=0;n<t;n++){var i=u[Math.floor(Math.random()*u.length)],r=d[Math.floor(Math.random()*d.length)],o=d[Math.floor(Math.random()*d.length)];e.push({value1:r,value2:o,direction:i})}return e}().map((function(e,t){return(0,i.jsx)("div",{className:"bg-blue-200 border-blue-300 border-4 border-opacity-75 rounded-full h-12 w-12 md:h-24 md:w-24 absolute top-".concat(e.value1," ").concat(e.direction,"-").concat(e.value2)},"".concat(t))}))})]}),(0,i.jsx)("div",{className:"bg-white absolute h-48 bottom-1/4 lg:-bottom-1/4 lg:h-full w-48 lg:w-1/2 rounded-full animate-slow-ping"}),(0,i.jsxs)("div",{className:"flex bg-blue-400 text-white text-2xl md:text-5xl py-8 md:py-12 absolute bottom-0 h-1/3 w-full z-20 justify-around",children:[(0,i.jsxs)("div",{className:"flex justify-around w-full font-bold text-base md:text-2xl lg:text-5xl",children:[(0,i.jsx)("p",{className:"mr-24 md:mr-48",children:"F.E.M.S. 5.562.92"}),(0,i.jsx)("p",{className:"ml-24 md:ml-48",children:"CX. 54/38.10"})]}),(0,i.jsxs)("div",{onClick:function(){n(0===t?2:0)},className:"flex px-5 text-2xl md:text-5xl font-bold absolute top-0 bg-black text-red-600 rounded-b-3xl w-28 h-12 md:h-24 md:w-52 items-center justify-items-center justify-between p-4",children:[0===t?0:(0,i.jsx)(c,{seconds:350}),(0,i.jsxs)("div",{className:"flex flex-col text-xs leading-none md:leading-none sm:leading-none md:text-lg items-center",children:[(0,i.jsx)("p",{children:"10"}),(0,i.jsx)("p",{children:"M"})]})]})]})]})})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5590)}])},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,n){e.exports=n(639)},5675:function(e,t,n){e.exports=n(9917)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);