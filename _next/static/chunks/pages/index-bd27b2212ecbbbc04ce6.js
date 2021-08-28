(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6048:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var n=s(5893),l=s(7294),a=s(1766),i=s(9008),c=function(e){var t=e.seconds,s=e.callback,a=(0,l.useState)(t),i=a[0],c=a[1];return(0,l.useEffect)((function(){if(i){var e=setInterval((function(){var e=i-1;c(e),s(e)}),1e3);return function(){return clearInterval(e)}}}),[i,s]),(0,n.jsx)("p",{children:i})},r=function(e){var t=e.top,s=e.left;return(0,n.jsx)("div",{className:"markerContainer bg-white rounded-full h-6 w-6 lg:h-12 lg:w-12 absolute",style:{top:t,left:s}})},o=function(e){var t=(0,l.useState)(0),s=t[0],a=t[1],i=e.handleOkClick,c=e.handleCancelClick;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"fixed inset-0 max-w-screen-lg mx-auto rounded opacity-75 pointer-events-none"}),(0,n.jsx)("div",{className:"fixed inset-0 flex items-center justify-center",children:(0,n.jsx)("div",{className:"z-50 w-11/12 mx-auto overflow-y-auto bg-blue-400 rounded shadow-lg sm:max-w-sm",children:(0,n.jsxs)("div",{className:"px-6 py-4 text-left modal-content text-white",children:[(0,n.jsx)("div",{className:"flex items-center justify-between pb-3",children:(0,n.jsx)("p",{className:"text-lg font-bold ",children:"SET TIMER (seconds)"})}),(0,n.jsx)("div",{className:"mb-1",children:(0,n.jsx)("input",{className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"timeSet",type:"number",onChange:function(e){var t=parseInt(e.target.value);t>9999||a(t)}})}),(0,n.jsxs)("div",{className:"flex justify-end pt-2",children:[(0,n.jsx)("button",{role:"button",tabIndex:0,className:"px-4 py-1 bg-black text-green-500 mx-2 rounded",onClick:function(){i(s)},onKeyPress:function(){i(s)},children:"OK"}),(0,n.jsx)("button",{role:"button",tabIndex:0,className:"px-4 py-1 bg-black text-red-500 rounded",onClick:c,onKeyPress:c,children:"Cancel"})]})]})})})]})},d=new a.Howl({src:["./pulse.mp3"]}),x=new a.Howl({src:["./markerPulse.mp3"]}),u=function(){var e=(0,l.useState)(!1),t=e[0],s=e[1],a=(0,l.useState)(!0),u=a[0],m=a[1],f=(0,l.useState)(!1),h=f[0],p=f[1],j=(0,l.useState)(0),b=j[0],v=j[1],w=(0,l.useState)(""),N=w[0],g=w[1],k=function(){x.rate(0),x.loop(!0),d.loop(!0),x.play(),d.play(),m(!1)},y=function(){v(0),g(""),s(!1),p(!1),x.rate(0)};return(0,l.useEffect)((function(){}),[N,t]),(0,n.jsxs)("div",{className:"bg-black h-screen mx-auto overflow-hidden relative",children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Motion Tracker"}),(0,n.jsx)("meta",{name:"description",content:"Motion Tracker"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{className:"animate-scenario absolute items-center justify-center portrait:bottom-2 landscape:top-4",children:[(0,n.jsx)("img",{src:"./trackerBlips.svg",alt:"Picture of radar blips",className:"absolute z-10 h-96 w-96 md:h-full md:w-full animate-ping"}),(0,n.jsx)("img",{src:"./trackerImage.svg",alt:"Picture of radar background",className:"z-0 h-96 w-96 md:h-full md:w-full"}),t&&(0,n.jsx)("div",{className:"animate-slow-pulse",children:(0,n.jsx)(r,{top:N,left:"50%"})})]}),(0,n.jsxs)("div",{className:"flex bg-blue-400 text-white text-2xl md:text-5xl py-8 absolute bottom-0 h-1/4 w-full z-20 justify-around",children:[(0,n.jsxs)("div",{className:"flex justify-around w-full font-bold text-xs sm:text-base md:text-2xl lg:text-5xl",children:[(0,n.jsx)("p",{className:"mr-20 sm:mr-24 md:mr-48 pl-2",children:"F.E.M.S. 5.562.92"}),(0,n.jsx)("p",{className:"ml-20 sm:ml-24 md:ml-48 pr-2",children:"CX. 54/38.10"})]}),(0,n.jsx)("div",{className:"flex flex-col absolute top-0 items-center",children:(0,n.jsxs)("div",{role:"button",tabIndex:0,onClick:function(){s(!1),p(!0)},onKeyPress:function(){s(!1),p(!0)},className:"flex px-5 text-xl sm:text-2xl md:text-5xl font-bold top-0 bg-black text-red-600 rounded-b-3xl w-28 h-12 sm:h-12 md:h-24 md:w-52 items-center justify-items-center justify-between p-4",children:[t?(0,n.jsx)(c,{seconds:b,callback:function(e){if(0===e)return x.rate(0),void s(!1);var t=1,n=50-100/Number(b)*e/2;e>=10&&e<15&&(t=1.1),e>=5&&e<10?t=1.2:e>0&&e<5&&(t=1.3),x.rate(t),g("".concat(n<0?n-.5*n:n,"%"))}}):(0,n.jsx)("div",{className:"animate-pulse",children:"0"}),(0,n.jsxs)("div",{className:"flex flex-col text-xs leading-none md:leading-none sm:leading-none md:text-lg items-center",children:[(0,n.jsx)("p",{children:"50"}),(0,n.jsx)("p",{children:"M"})]})]})})]})]}),h&&(0,n.jsx)(o,{handleOkClick:function(e){if(0===e)return y();x.rate(1),g(""),s(!1),v(e),s(!0),p(!1)},handleCancelClick:y}),u&&(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"fixed inset-0 max-w-screen-lg mx-auto rounded opacity-75 pointer-events-none"}),(0,n.jsx)("div",{className:"fixed inset-0 flex items-center justify-center",children:(0,n.jsx)("div",{className:"z-50 w-11/12 mx-auto overflow-y-auto bg-blue-400 rounded shadow-lg sm:max-w-sm",children:(0,n.jsxs)("div",{className:"px-6 py-4 text-left modal-content text-white",children:[(0,n.jsx)("div",{className:"flex items-center justify-between pb-3",children:(0,n.jsx)("p",{className:"text-2xl font-bold ",children:"Motion Tracker"})}),(0,n.jsx)("div",{className:"mb-1 text-lg",children:"To set the timer, click the counter."}),(0,n.jsx)("div",{className:"flex justify-end pt-2",children:(0,n.jsx)("button",{role:"button",tabIndex:0,className:"px-4 py-1 bg-black text-green-500 mx-2 rounded",onClick:k,onKeyPress:k,children:"OK"})})]})})})]})]})}},5301:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6048)}])}},function(e){e.O(0,[733,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);