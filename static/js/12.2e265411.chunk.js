(this["webpackJsonpbrandons-site"]=this["webpackJsonpbrandons-site"]||[]).push([[12],{171:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n(5),c=n(21),i=function(e){var t=e.label,n=e.link,s=e.value,r=e.format;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{width:"70%",children:t}),Object(a.jsx)("td",{children:n?Object(a.jsx)("a",{href:n,children:r(s)}):r(s)})]})};i.defaultProps={format:function(e){return e},link:null,value:null};var l=i,u=function(e){var t=e.data;return Object(a.jsx)("table",{children:Object(a.jsx)("tbody",{children:t.map((function(e){return Object(a.jsx)(l,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},o=n(22),b=function(){var e=Object(s.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1995-09-21T17:05:00");r(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(a.jsx)(a.Fragment,{children:n})},j=[{key:"age",label:"Current age",value:Object(a.jsx)(b,{})},{key:"countries",label:"Countries visited",value:2},{key:"location",label:"Current city",value:"Cleveland, Ohio"}],d=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"Some stats about me"}),Object(a.jsx)(u,{data:j})]})},h=n(158),f=n.n(h),O=n(54),m=n(160),v=n(70),p=n.n(v),x=[{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/Brontomerus/brandons-site/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/Brontomerus/brandons-site/commits",format:function(e){return p()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2115",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],k=function(){var e=Object(s.useState)(x),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(s.useCallback)(Object(m.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/Brontomerus/brandons-site");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(x.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{value:Object.keys(n).includes(e.key)?n[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(s.useEffect)((function(){c()}),[c]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Some stats about this site"}),Object(a.jsx)(u,{data:n})]})};t.default=function(){return Object(a.jsx)(c.a,{title:"Stats",description:"Some statistics about Brandon Donelan and brandon-donelan.com",children:Object(a.jsxs)("article",{className:"post",id:"stats",children:[Object(a.jsx)("header",{children:Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h2",{"data-testid":"heading",children:Object(a.jsx)(r.b,{to:"/stats",children:"Stats"})})})}),Object(a.jsx)(d,{}),Object(a.jsx)(k,{})]})})}}}]);
//# sourceMappingURL=12.2e265411.chunk.js.map