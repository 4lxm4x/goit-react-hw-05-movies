"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[317],{317:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(87),i=n(689),o=n(791),l=n(203),h=n(184);function p(){var e=(0,u.lr)(),t=(0,a.Z)(e,2),n=t[0],c=t[1],p=n.get("query"),f=(0,o.useState)(p),m=(0,a.Z)(f,2),d=m[0],v=m[1],x=(0,o.useState)([]),g=(0,a.Z)(x,2),_=g[0],j=g[1],y=(0,i.TH)(),w=(0,o.useRef)(!0);function b(){return(b=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)("search/movie?query=".concat(t,"&include_adult=true&language=en-US"));case 2:n=e.sent,r=n.data,j(r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.useEffect)((function(){p&&w.current&&(!function(e){b.apply(this,arguments)}(p),w.current=!1)}),[p]),(0,h.jsxs)("div",{children:[(0,h.jsxs)("form",{onSubmit:function(e){c({query:d}),e.preventDefault(),w.current=!0},children:[(0,h.jsx)("input",{name:"query",autoComplete:"off",type:"search",required:!0,onChange:function(e){v(e.target.value)}}),(0,h.jsx)("button",{type:"submit",children:"Search"})]}),!_.length&&p?(0,h.jsx)("div",{className:"noResults",children:"\u0417\u0430 \u0412\u0430\u0448\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u0441\u0442\u0440\u0456\u0447\u043e\u043a \u043d\u0435\u043c\u0430\u0454"}):(0,h.jsx)("ul",{children:_.map((function(e){return(0,h.jsxs)("li",{className:"movieLink",children:[e.poster_path?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w45".concat(e.poster_path),alt:"".concat(e.title)}):(0,h.jsx)("img",{src:"https://placehold.co/45x68",alt:"no_name"}),(0,h.jsx)(u.rU,{to:"/movies/".concat(e.id),state:"".concat(y.pathname).concat(y.search),children:e.name||e.title})]},e.id)}))})]})}}}]);
//# sourceMappingURL=317.9d019fc0.chunk.js.map