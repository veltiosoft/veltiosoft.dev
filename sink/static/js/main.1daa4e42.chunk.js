(this.webpackJsonpsink=this.webpackJsonpsink||[]).push([[1],{54:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e),n.d(e,"theme",(function(){return w}));var r=n(2),c=n(0),i=n.n(c),s=n(33),a=n.n(s),o=(n(54),function(t){t&&t instanceof Function&&n.e(8).then(n.bind(null,110)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),i(t),s(t)}))}),l=n(30),j=n(74),u=n(15),b=n(3),x={setTime:function(t){localStorage.setItem("time","".concat(t))},getTime:function(){return parseInt(localStorage.getItem("time")||"0")},setCurrentTaskName:function(t){localStorage.setItem("currentTaskName",t)},getCurrentTaskName:function(){return localStorage.getItem("currentTaskName")||""},setHistory:function(t){localStorage.setItem("history",JSON.stringify(t))},getHistory:function(){var t=JSON.parse(localStorage.getItem("history")||"[]");return void 0!==t[0]&&"string"===typeof t[0]?t.map((function(t){return{taskName:t,isPinned:!1}})):t},setLogs:function(t){localStorage.setItem("logs",JSON.stringify(t))},getLogs:function(){return JSON.parse(localStorage.getItem("logs")||"[]")},setHistoryLimit:function(t){localStorage.setItem("limit","".concat(t))},getHistoryLimit:function(){return parseInt(localStorage.getItem("limit")||"10")}},f=n(63);function g(){return Object(r.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"100px",height:"100%",viewBox:"0 0 200.000000 75.000000",preserveAspectRatio:"xMidYMid meet",children:Object(r.jsxs)("g",{transform:"translate(0.000000,75.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none",children:[Object(r.jsx)("path",{d:"M156 685 c-81 -29 -123 -101 -96 -166 16 -39 77 -73 163 -93 80 -19 142 -49 157 -75 28 -52 -3 -121 -66 -147 -69 -29 -190 -8 -246 43 -23 21 -45 7 -24 -16 29 -32 110 -65 169 -69 144 -11 246 94 192 198 -19 38 -68 66 -146 85 -92 23 -120 35 -152 63 -33 31 -35 69 -5 107 48 61 134 71 224 25 64 -32 94 -26 45 9 -67 48 -145 61 -215 36z"}),Object(r.jsx)("path",{d:"M779 671 c-16 -16 -29 -39 -29 -51 0 -26 18 -62 36 -73 8 -4 14 -19 14 -32 0 -23 -3 -25 -54 -25 -52 0 -55 1 -58 28 -2 16 -9 27 -18 27 -12 0 -15 -15 -15 -75 0 -60 3 -75 15 -75 9 0 16 11 18 28 3 26 6 27 58 27 l54 0 0 -154 0 -154 -37 10 c-51 14 -99 44 -123 78 -25 35 -25 39 0 48 18 7 16 12 -27 64 -25 32 -50 55 -54 52 -15 -9 -10 -92 7 -132 28 -69 104 -130 182 -147 18 -4 45 -17 61 -31 28 -23 29 -23 46 -4 9 10 45 28 80 40 74 25 141 78 166 134 19 42 26 131 10 140 -4 3 -29 -20 -55 -52 -33 -41 -42 -58 -31 -60 8 -2 15 -10 15 -18 0 -42 -53 -88 -126 -110 l-44 -13 0 154 0 155 54 0 c52 0 55 -1 58 -27 2 -17 9 -28 18 -28 12 0 15 15 15 75 0 60 -3 75 -15 75 -9 0 -16 -11 -18 -27 -3 -27 -6 -28 -58 -28 -48 0 -54 2 -54 21 0 12 11 34 25 51 33 39 32 73 -4 109 -38 38 -74 38 -112 0z m86 -56 c0 -27 -3 -30 -30 -30 -21 0 -31 5 -33 18 -6 33 6 49 35 45 24 -3 28 -8 28 -33z m-7 -269 c-3 -183 -4 -191 -23 -191 -19 0 -20 8 -23 189 -2 193 1 212 35 199 11 -4 13 -43 11 -197z"}),Object(r.jsx)("path",{d:"M1690 426 c0 -230 2 -266 15 -266 11 0 15 13 15 53 0 48 3 56 38 90 l38 37 72 -90 c40 -49 77 -90 82 -90 25 0 13 24 -56 110 l-74 93 76 79 c61 63 75 81 65 91 -10 9 -37 -13 -127 -107 l-114 -119 -2 188 c-2 140 -6 189 -15 193 -10 3 -13 -54 -13 -262z"}),Object(r.jsx)("path",{d:"M1230 345 c0 -145 3 -186 13 -183 8 3 13 43 17 136 5 128 6 131 34 161 55 57 134 47 176 -22 17 -27 20 -51 20 -154 0 -103 2 -123 15 -123 13 0 15 21 15 128 0 113 -3 131 -23 166 -43 75 -140 97 -207 47 l-29 -21 -3 22 c-2 12 -9 23 -15 26 -10 3 -13 -38 -13 -183z"})]})})}function h(){var t={width:"100vw",height:"32px",backgroundColor:Object(f.a)().palette.primary.main},e={margin:"8px"};return Object(r.jsxs)(j.a,{style:t,display:"flex",children:[Object(r.jsx)(g,{}),["tracker","logs","settings"].map((function(t){return Object(r.jsx)(j.a,{style:e,children:Object(r.jsx)(u.b,{to:"/sink/".concat(t),className:"fix",children:t},t)})}))]})}function O(){var t=Object(f.a)(),e={width:"100vw",height:"32px",color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.main},n={margin:"8px"};return Object(r.jsxs)(j.a,{style:e,display:"flex",children:[Object(r.jsx)(j.a,{style:n,children:"ver0.6.2"}),Object(r.jsx)(j.a,{style:n,children:"\xa9Veltiosoft 2021"}),Object(r.jsx)(j.a,{style:n,children:Object(r.jsx)(u.b,{to:"/sink/policy",className:"fix",children:"\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc"})})]})}var d=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,115))})),m=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,112))})),p=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,113))})),y=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,117))}));function k(t){return Object(r.jsxs)(j.a,{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",children:[Object(r.jsx)(h,{}),Object(r.jsx)(j.a,{flexGrow:"1",children:t.inner()}),Object(r.jsx)(O,{})]})}function v(){var t=Object(c.useState)(x.getLogs),e=Object(l.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(x.getHistoryLimit()),a=Object(l.a)(s,2),o=a[0],j=a[1];return Object(r.jsx)(u.a,{children:Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(k,{inner:function(){return Object(r.jsx)("div",{children:"Loading..."})}}),children:Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/sink/tracker",render:function(){return Object(r.jsx)(k,{inner:function(){return Object(r.jsx)(d,{repo:x,setLogs:i,logs:n,historyLimit:o})}})}}),Object(r.jsx)(b.a,{exact:!0,path:"/sink/logs",render:function(){return Object(r.jsx)(k,{inner:function(){return Object(r.jsx)(y,{logs:n})}})}}),Object(r.jsx)(b.a,{exact:!0,path:"/sink/policy",render:function(){return Object(r.jsx)(k,{inner:function(){return Object(r.jsx)(m,{})}})}}),Object(r.jsx)(b.a,{exact:!0,path:"/sink/settings",render:function(){return Object(r.jsx)(k,{inner:function(){return Object(r.jsx)(p,{setLogs:i,repo:x,historyLimit:o,setHistoryLimit:j})}})}}),Object(r.jsx)(b.a,{path:"/sink/",render:function(){return Object(r.jsx)(k,{inner:function(){return Object(r.jsx)(d,{repo:x,setLogs:i,logs:n,historyLimit:o})}})}})]})})})}var S=n(42),L=n(72),w=Object(S.a)({palette:{primary:{light:"#4fb3bf",main:"#336699",dark:"#005662",contrastText:"#fff"},secondary:{light:"#f05545",main:"#b71c1c",dark:"#7f0000",contrastText:"#fff"}}});a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(L.a,{theme:w,children:Object(r.jsx)(v,{})})}),document.getElementById("root")),o()}},[[60,2,3]]]);
//# sourceMappingURL=main.1daa4e42.chunk.js.map