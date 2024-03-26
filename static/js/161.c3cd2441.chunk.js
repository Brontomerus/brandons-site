(self.webpackChunkbrandons_site=self.webpackChunkbrandons_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});n(2791);var r=n(1523),s=n(6842),i=n(7892),a=n.n(i),u=n(184),o=function(t){var e=t.data;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},c=[{title:"ML-Workflows",subtitle:"Scalable Batch Processing For Modern ML Workloads",link:"https://github.com/Brontomerus/ml-workflows",image:"/images/projects/mlworkflows.png",date:"2021-05-14",desc:"Serverless batch workload infrastructure, setup, and example code to use as a springboard for use in future projects I am involved with. The system leverages a potent combination of Databricks, Amazon Web Services, and Terraform (Infrastructure as Code)."},{title:"NFL Arrests Serverless API",subtitle:"Predicting NFL Fan Behavior with Serverless Machine Learning",link:"https://brandon-donelan.com/projects",image:"/images/projects/nflarrests.png",date:"2020-5-15",desc:"Serverless machine learning predicting NFL fan base unruly behavior, built using the FastAPI (Python) web server framework, and deployed on Amazon Web Services using ECS+Fargate and AWS Lambda. Model was built using a very simple regression model, leveraging sklearn + pandas using a data set found on Kaggle."},{title:"EZodbc",subtitle:"Python pypi package aiming to aid analysts with database connectivity",link:"https://pypi.org/project/ezodbc/",image:"/images/projects/ezodbc.jpg",date:"2021-01-05",desc:"Project aiming to assist analysts in connecting to a database and pulling data out for analysis."}],d=function(){return(0,u.jsx)(s.Z,{title:"Projects",description:"Learn about Brandon Donelan's projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{"data-testid":"heading",children:(0,u.jsx)(r.rU,{to:"/projects",children:"Projects"})}),(0,u.jsx)("p",{children:"Some Current & Past Projects"})]})}),c.map((function(t){return(0,u.jsx)(o,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",u="day",o="week",c="month",d="quarter",l="year",h="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,c),i=n-s<0,a=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:o,d:u,D:h,h:a,m:i,s:s,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",y={};y[M]=g;var b=function(t){return t instanceof j},S=function t(e,n,r){var s;if(!e)return M;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(s=i),n&&(y[i]=n,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,s=u}return!r&&s&&(M=s),s||!r&&M},w=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new j(n)},D=v;D.l=S,D.i=b,D.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function g(t){this.$L=S(t.locale,null,!0),this.parse(t)}var p=g.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return D},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return w(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<w(t)},p.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!D.u(e)||e,d=D.p(t),f=function(t,e){var s=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(u)},$=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,g=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case l:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case o:var M=this.$locale().weekStart||0,y=(m<M?m+7:m)-M;return f(r?p-y:p+(6-y),g);case u:case h:return $(v+"Hours",0);case a:return $(v+"Minutes",1);case i:return $(v+"Seconds",2);case s:return $(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,o=D.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[u]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[l]=d+"FullYear",n[a]=d+"Hours",n[i]=d+"Minutes",n[s]=d+"Seconds",n[r]=d+"Milliseconds",n)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===l){var m=this.clone().set(h,1);m.$d[f]($),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[D.p(t)]()},p.add=function(r,d){var h,f=this;r=Number(r);var $=D.p(d),m=function(t){var e=w(f);return D.w(e.date(e.date()+Math.round(t*r)),f)};if($===c)return this.set(c,this.$M+r);if($===l)return this.set(l,this.$y+r);if($===u)return m(1);if($===o)return m(7);var g=(h={},h[i]=e,h[a]=n,h[s]=t,h)[$]||1,p=this.$d.getTime()+r*g;return D.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),i=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,d=n.meridiem,l=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},h=function(t){return D.s(i%12||12,t,"0")},$=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return D.s(e.$y,4,"0");case"M":return u+1;case"MM":return D.s(u+1,2,"0");case"MMM":return l(n.monthsShort,u,c,3);case"MMMM":return l(c,u);case"D":return e.$D;case"DD":return D.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(n.weekdaysMin,e.$W,o,2);case"ddd":return l(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(e.$s);case"ss":return D.s(e.$s,2,"0");case"SSS":return D.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,h,f){var $,m=this,g=D.p(h),p=w(r),v=(p.utcOffset()-this.utcOffset())*e,M=this-p,y=function(){return D.m(m,p)};switch(g){case l:$=y()/12;break;case c:$=y();break;case d:$=y()/3;break;case o:$=(M-v)/6048e5;break;case u:$=(M-v)/864e5;break;case a:$=M/n;break;case i:$=M/e;break;case s:$=M/t;break;default:$=M}return f?$:D.a($)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return D.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),k=j.prototype;return w.prototype=k,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",u],["$M",c],["$y",l],["$D",h]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,j,w),t.$i=!0),w},w.locale=S,w.isDayjs=b,w.unix=function(t){return w(1e3*t)},w.en=y[M],w.Ls=y,w.p={},w}()}}]);
//# sourceMappingURL=161.c3cd2441.chunk.js.map