"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[988],{988:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var i=r(861),n=r(439),s=r(757),c=r.n(s),a=r(689),o=r(87),l=r(690),u=r(791),h=r(184);function d(){var e=(0,a.UO)().movieId,t=(0,u.useRef)(!0),r=(0,a.TH)();console.log("\ud83d\ude80 ~ MovieDetails ~ location:",r);var s=(0,u.useState)(),d=(0,n.Z)(s,2),p=d[0],v=d[1],j=(0,u.useRef)(r.state?"".concat(r.state):"/movies");if((0,u.useEffect)((function(){if(t.current){var r=function(){var e=(0,i.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t),e.next=3,(0,l.Z)(r).then((function(e){var t=e.data,r=t.title,i=t.genres,n=t.release_date,s=t.overview,c=t.popularity,a=t.poster_path;v({title:r,genres:i,release_date:n,overview:s,popularity:c,poster_path:a})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();r(e),t.current=!1}}),[e]),p){var f=p.title,x=p.genres,m=p.release_date,w=p.overview,_=p.popularity,g=p.poster_path;return(0,h.jsxs)("div",{className:"movie",children:[(0,h.jsx)(o.rU,{to:j.current,children:"Go Back"}),(0,h.jsx)("br",{}),(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(g),alt:f}),(0,h.jsxs)("div",{className:"info",children:[(0,h.jsx)("h1",{children:"".concat(f," (").concat(m.slice(0,4),")")}),(0,h.jsxs)("p",{children:["User score: ",Math.round(_),"%"]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:w}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:x.map((function(e){return e.name})).join(", ")}),(0,h.jsx)("h4",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,h.jsx)(a.j3,{})]})}}},690:function(e,t,r){r.d(t,{Z:function(){return s}});var i=r(340),n={baseURL:"https://api.themoviedb.org/3/",method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjY2MGFkYzllYmQ3MGE3N2E1NTJmYzg2YjExZjI4ZiIsInN1YiI6IjY1ZGY4NzQ0MTdiNWVmMDE4NmRhZTNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqDfKpFcxQg33NCwQ8F6iWv9ZxiNesjpukoJ2UTxudw"}};function s(e){return i.Z.get("".concat(e),n)}}}]);
//# sourceMappingURL=988.e5d7b328.chunk.js.map