(this.webpackJsonpnone_kokoevi_final=this.webpackJsonpnone_kokoevi_final||[]).push([[0],{29:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),r=c.n(i),s=c(17),l=c.n(s),a=(c(29),c(7));var o=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{style:{textAlign:"center"},children:"Home"}),Object(n.jsx)("p",{children:"This is simple movies website."})]})},j=c(13),b=c.n(j),h=c(18);var d=function(e){var t=e.blockMovies,c=e.unblockMovies,r=Object(i.useState)([]),s=Object(a.a)(r,2),l=s[0],o=s[1];return Object(i.useEffect)((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://api.themoviedb.org/3/trending/all/day?api_key=cc6ee35910514ca0be06cec0f3330408");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,o(c.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{style:{textAlign:"center"},children:"Movies"}),Object(n.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"5px"},children:t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"Woops!"}),Object(n.jsx)("button",{onClick:function(){return c()},children:"Unblock"})]}):0===l.length?Object(n.jsx)("p",{children:"Fetching Movies..."}):l.map((function(e){return Object(n.jsxs)("div",{style:{padding:"20px",background:"purple"},children:[Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:"movie poster",style:{width:"300px",height:"450px",objectFit:"cover"}}),Object(n.jsx)("p",{style:{maxWidth:"300px",maxHeight:"100px",overflowY:"hidden",textAlign:"center",fontSize:"24px",color:"pink",fontWeight:"700"},children:e.name||e.title}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{style:{maxWidth:"300px",maxHeight:"150px",textAlign:"center",overflow:"auto",fontSize:"16px",color:"pink"},children:e.overview})]})}))})]})};c(31);var u=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(i.useState)(""),l=Object(a.a)(s,2),o=l[0],j=l[1],b=Object(i.useState)(0),h=Object(a.a)(b,2),d=h[0],u=h[1],x=Object(i.useState)(""),O=Object(a.a)(x,2),p=O[0],v=O[1],g=Object(i.useCallback)((function(e){e.preventDefault(),c.length<6||o.length<6||p.length<6?alert("Some of your input is lower than ".concat(6)):d<=0?alert("Invalid age input"):alert("Your contact has been sent")}),[d,c.length,o.length,p.length]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Contact"}),Object(n.jsx)("div",{class:"container",children:Object(n.jsxs)("form",{action:"/action_page.php",onSubmit:g,children:[Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-25",children:Object(n.jsx)("label",{for:"fname",children:"Email"})}),Object(n.jsx)("div",{class:"col-75",children:Object(n.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Your email..",value:c,onChange:function(e){return r(e.target.value)}})})]}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-25",children:Object(n.jsx)("label",{for:"lname",children:"Name"})}),Object(n.jsx)("div",{class:"col-75",children:Object(n.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Your name..",value:o,onChange:function(e){return j(e.target.value)}})})]}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-25",children:Object(n.jsx)("label",{for:"country",children:"Age"})}),Object(n.jsx)("div",{class:"col-75",children:Object(n.jsx)("input",{type:"number",value:d,onChange:function(e){return u(e.target.value)}})})]}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-25",children:Object(n.jsx)("label",{for:"subject",children:"Subject"})}),Object(n.jsx)("div",{class:"col-75",children:Object(n.jsx)("textarea",{id:"subject",name:"subject",placeholder:"Write something..",style:{height:"200px"},onChange:function(e){return v(e.target.value)},children:p})})]}),Object(n.jsx)("div",{class:"row",children:Object(n.jsx)("input",{type:"submit",value:"Submit"})})]})})]})},x=c(19),O=c(20),p=c(23),v=c(22),g=function(e){Object(p.a)(c,e);var t=Object(v.a)(c);function c(){return Object(x.a)(this,c),t.apply(this,arguments)}return Object(O.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"This is movies website. You can watch any movie online. Our website's started now in 2020."}),Object(n.jsx)("h2",{align:"center",children:"Creator: None Kokoevi"})]})}}]),c}(r.a.Component),f=(c(32),c(9)),m=c(2);function y(){var e=Object(i.useState)("black"),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(i.useState)(!1),l=Object(a.a)(s,2),j=l[0],b=l[1];return Object(n.jsxs)(f.a,{children:[Object(n.jsx)("div",{class:"topnav",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/movies",children:"Movies"})}),Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/contact",children:"Contact"})}),Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/about",children:"About"})})]})}),Object(n.jsxs)("main",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"calc(100vh - 61px)",backgroundColor:"".concat("white"===c?"white":"#222831")},children:[Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)("button",{style:{padding:"20px",border:"none",width:"200px",margin:"10px",background:"grey"},onClick:function(){return r("white"===c?"black":"white")},children:"Toggle Theme"}),Object(n.jsx)("button",{style:{padding:"20px",width:"200px",margin:"10px",border:"none",background:"grey"},onClick:function(){return b(!0)},children:"Block Fetching Movies"})]}),Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{exact:!0,path:"/",children:Object(n.jsx)(o,{})}),Object(n.jsx)(m.a,{path:"/movies",children:Object(n.jsx)(d,{blockMovies:j,unblockMovies:function(){return b(!1)}})}),Object(n.jsx)(m.a,{path:"/contact",children:Object(n.jsx)(u,{})}),Object(n.jsx)(m.a,{path:"/about",children:Object(n.jsx)(g,{})})]})]})]})}var k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),k()}},[[38,1,2]]]);
//# sourceMappingURL=main.dc72ddf7.chunk.js.map