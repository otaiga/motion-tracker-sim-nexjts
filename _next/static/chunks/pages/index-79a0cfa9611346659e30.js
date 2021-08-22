(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6048:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var l=n(5893),s=n(7294),a=n(9008),i=function(e){var t=e.seconds,n=(0,s.useState)(t),a=n[0],i=n[1];return(0,s.useEffect)((function(){if(a){var t=setInterval((function(){var t=a-1;i(t),e.callback(t)}),1e3);return function(){return clearInterval(t)}}}),[a]),(0,l.jsx)("p",{children:a})},c=function(e){var t=e.top,n=e.left;return(0,l.jsx)("div",{className:"markerContainer bg-white rounded-full h-6 w-6 lg:h-12 lg:w-12 absolute",style:{top:t,left:n}})},r=function(e){var t=(0,s.useState)(0),n=t[0],a=t[1],i=e.handleOkClick,c=e.handleCancelClick;return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"fixed inset-0 max-w-screen-lg mx-auto rounded opacity-75 pointer-events-none"}),(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center",children:(0,l.jsx)("div",{className:"z-50 w-11/12 mx-auto overflow-y-auto bg-blue-400 rounded shadow-lg sm:max-w-sm",children:(0,l.jsxs)("div",{className:"px-6 py-4 text-left modal-content text-white",children:[(0,l.jsx)("div",{className:"flex items-center justify-between pb-3",children:(0,l.jsx)("p",{className:"text-lg font-bold ",children:"SET TIMER (seconds)"})}),(0,l.jsx)("div",{className:"mb-4",children:(0,l.jsx)("input",{className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"timeSet",type:"number",onChange:function(e){a(Number(e.target.value))}})}),(0,l.jsxs)("div",{className:"flex justify-end pt-2",children:[(0,l.jsx)("button",{className:"px-4 py-1 bg-black text-green-500 mx-2 rounded outline-none focus:outline-none",onClick:function(){i(n)},children:"OK"}),(0,l.jsx)("button",{className:"px-4 py-1 bg-black text-red-500 rounded outline-none focus:outline-none",onClick:c,children:"Cancel"})]})]})})})]})},o=function(){var e=(0,s.useState)(!1),t=e[0],n=e[1],o=(0,s.useState)(!1),u=o[0],d=o[1],x=(0,s.useState)(0),m=x[0],f=x[1],h=(0,s.useState)(""),p=h[0],j=h[1],b=(0,s.useState)(null),v=b[0],w=b[1],N=(0,s.useState)(null),g=N[0],k=N[1];return v&&v.play(),g&&g.play(),(0,l.jsxs)("div",{className:"bg-black h-screen mx-auto overflow-hidden relative",children:[(0,l.jsxs)(a.default,{children:[(0,l.jsx)("title",{children:"Motion Tracker"}),(0,l.jsx)("meta",{name:"description",content:"Motion Tracker"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)("main",{className:"flex flex-col items-center",children:[(0,l.jsxs)("div",{className:"animate-scenario absolute items-center justify-center portrait:bottom-2 landscape:top-4",children:[(0,l.jsx)("img",{src:"./trackerImage.svg",alt:"Picture of radar background",className:"z-0 h-96 w-96 md:h-full md:w-full"}),t&&(0,l.jsx)("div",{className:"animate-slow-pulse",children:(0,l.jsx)(c,{top:p,left:"50%"})})]}),(0,l.jsx)("div",{className:"bg-white absolute top-1/2 h-96 w-96 md:h-full md:w-1/2 rounded-full animate-slow-ping"}),(0,l.jsxs)("div",{className:"flex bg-blue-400 text-white text-2xl md:text-5xl py-8 absolute bottom-0 h-1/4 w-full z-20 justify-around",children:[(0,l.jsxs)("div",{className:"flex justify-around w-full font-bold text-xs sm:text-base md:text-2xl lg:text-5xl",children:[(0,l.jsx)("p",{className:"mr-20 sm:mr-24 md:mr-48 pl-2",children:"F.E.M.S. 5.562.92"}),(0,l.jsx)("p",{className:"ml-20 sm:ml-24 md:ml-48 pr-2",children:"CX. 54/38.10"})]}),(0,l.jsxs)("div",{onClick:function(){d(!0)},className:"flex px-5 text-xl sm:text-2xl md:text-5xl font-bold absolute top-0 bg-black text-red-600 rounded-b-3xl w-28 h-12 sm:h-12 md:h-24 md:w-52 items-center justify-items-center justify-between p-4",children:[t?(0,l.jsx)(i,{seconds:m,callback:function(e){0===e&&(n(!1),k(null),w(null));var t=50-100/Number(m)*e/2;if(e<5&&!g){var l=new Audio("./markerPulse.mp3");k(l)}j("".concat(t<0?t-.5*t:t,"%"))}}):0,(0,l.jsxs)("div",{className:"flex flex-col text-xs leading-none md:leading-none sm:leading-none md:text-lg items-center",children:[(0,l.jsx)("p",{children:"50"}),(0,l.jsx)("p",{children:"M"})]})]})]})]}),u&&(0,l.jsx)(r,{handleOkClick:function(e){if(j(""),n(!1),f(e),n(!0),d(!1),!v){var t=new Audio("./pulse.mp3");w(t)}},handleCancelClick:function(){f(0),j(""),n(!1),w(null),k(null),d(!1)}})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6048)}])},9008:function(e,t,n){e.exports=n(639)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);