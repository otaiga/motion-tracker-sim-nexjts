(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6048:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var s=n(5893),l=n(7294),a=n(9008),r=function(e){var t=e.seconds,n=(0,l.useState)(t),a=n[0],r=n[1];return(0,l.useEffect)((function(){if(a){var t=setInterval((function(){var t=a-1;r(t),e.callback(t)}),1e3);return function(){return clearInterval(t)}}}),[a]),(0,s.jsx)("p",{children:a})},c=function(e){var t=e.top,n=e.left;return(0,s.jsx)("div",{className:"markerContainer bg-white rounded-full h-6 w-6 lg:h-12 lg:w-12 absolute",style:{top:t,left:n}})},i=function(e){var t=(0,l.useState)(0),n=t[0],a=t[1],r=e.handleOkClick,c=e.handleCancelClick;return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"fixed inset-0 max-w-screen-lg mx-auto rounded opacity-75 pointer-events-none"}),(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center",children:(0,s.jsx)("div",{className:"z-50 w-11/12 mx-auto overflow-y-auto bg-blue-400 rounded shadow-lg sm:max-w-sm",children:(0,s.jsxs)("div",{className:"px-6 py-4 text-left modal-content text-white",children:[(0,s.jsx)("div",{className:"flex items-center justify-between pb-3",children:(0,s.jsx)("p",{className:"text-lg font-bold ",children:"SET TIMER (seconds)"})}),(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)("input",{className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"timeSet",type:"number",onChange:function(e){Number(e.target.value)>99999||a(Number(e.target.value))}})}),(0,s.jsxs)("div",{className:"flex justify-end pt-2",children:[(0,s.jsx)("button",{className:"px-4 py-1 bg-black text-green-500 mx-2 rounded outline-none focus:outline-none",onClick:function(){r(n)},children:"OK"}),(0,s.jsx)("button",{className:"px-4 py-1 bg-black text-red-500 rounded outline-none focus:outline-none",onClick:c,children:"Cancel"})]})]})})})]})},u=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1],u=(0,l.useState)(!1),o=u[0],d=u[1],x=(0,l.useState)(0),m=x[0],f=x[1],h=(0,l.useState)(""),p=h[0],j=h[1],b=(0,l.useState)(!1),v=b[0],w=b[1],N=(0,l.useRef)(null),g=(0,l.useRef)(null);return(0,l.useEffect)((function(){N&&N.current&&t&&N.current.play(),g&&g.current&&v&&g.current.play()}),[p]),(0,s.jsxs)("div",{className:"bg-black h-screen mx-auto overflow-hidden relative",children:[(0,s.jsxs)(a.default,{children:[(0,s.jsx)("title",{children:"Motion Tracker"}),(0,s.jsx)("meta",{name:"description",content:"Motion Tracker"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("main",{className:"flex flex-col items-center",children:[(0,s.jsxs)("div",{className:"animate-scenario absolute items-center justify-center portrait:bottom-2 landscape:top-4",children:[(0,s.jsx)("img",{src:"./trackerImage.svg",alt:"Picture of radar background",className:"z-0 h-96 w-96 md:h-full md:w-full"}),t&&(0,s.jsx)("div",{className:"animate-slow-pulse",children:(0,s.jsx)(c,{top:p,left:"50%"})})]}),(0,s.jsx)("div",{className:"bg-white absolute top-1/2 h-96 w-96 md:h-full md:w-1/2 rounded-full animate-slow-ping"}),(0,s.jsxs)("div",{className:"flex bg-blue-400 text-white text-2xl md:text-5xl py-8 absolute bottom-0 h-1/4 w-full z-20 justify-around",children:[(0,s.jsxs)("div",{className:"flex justify-around w-full font-bold text-xs sm:text-base md:text-2xl lg:text-5xl",children:[(0,s.jsx)("p",{className:"mr-20 sm:mr-24 md:mr-48 pl-2",children:"F.E.M.S. 5.562.92"}),(0,s.jsx)("p",{className:"ml-20 sm:ml-24 md:ml-48 pr-2",children:"CX. 54/38.10"})]}),(0,s.jsxs)("div",{onClick:function(){d(!0)},className:"flex px-5 text-xl sm:text-2xl md:text-5xl font-bold absolute top-0 bg-black text-red-600 rounded-b-3xl w-28 h-12 sm:h-12 md:h-24 md:w-52 items-center justify-items-center justify-between p-4",children:[t?(0,s.jsx)(r,{seconds:m,callback:function(e){if(0===e)return n(!1),void w(!1);var t=50-100/Number(m)*e/2;w(e<5),j("".concat(t<0?t-.5*t:t,"%"))}}):0,(0,s.jsxs)("div",{className:"flex flex-col text-xs leading-none md:leading-none sm:leading-none md:text-lg items-center",children:[(0,s.jsx)("p",{children:"50"}),(0,s.jsx)("p",{children:"M"})]})]})]})]}),o&&(0,s.jsx)(i,{handleOkClick:function(e){N&&N.current&&(N.current.autoplay=!0),g&&g.current&&v&&(g.current.autoplay=!0),j(""),n(!1),f(e),n(!0),d(!1)},handleCancelClick:function(){f(0),j(""),n(!1),d(!1),w(!1)}}),(0,s.jsx)("audio",{ref:N,children:(0,s.jsx)("source",{src:"./pulse.mp3",type:"audio/mp3"})}),(0,s.jsx)("audio",{ref:g,children:(0,s.jsx)("source",{src:"./markerPulse.mp3",type:"audio/mp3"})})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6048)}])},9008:function(e,t,n){e.exports=n(639)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);