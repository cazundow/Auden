(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},31:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),s=(a(28),a(29),a(11)),o=a.n(s),u=a(14),m=a(6),i=(a(31),function(e){var t=e.items,a=e.handleShow;return t?c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Repo Name"),c.a.createElement("th",{scope:"col"},"Forks"),c.a.createElement("th",{scope:"col"},"Issues"))),c.a.createElement("tbody",null,t.map((function(e,t){return c.a.createElement("tr",{key:e.id,onClick:a},c.a.createElement("th",{scope:"row"},t+1),c.a.createElement("td",null,c.a.createElement("p",{key:t},e.name)),c.a.createElement("td",null," ",c.a.createElement("p",null,e.forks_count)),c.a.createElement("td",null," ",c.a.createElement("p",null,e.open_issues)))})))):null}),E=function(e){var t=e.items,a=e.setShow,n=e.setModalData;return t?t.map((function(e,t){return c.a.createElement("tr",{className:"pointer",key:e.id,id:e.id,onClick:function(){n(e),a(!0)}},c.a.createElement("th",{scope:"row"},t+1),c.a.createElement("td",null,c.a.createElement("p",{key:t},e.name)),c.a.createElement("td",null," ",c.a.createElement("p",null,e.forks_count)),c.a.createElement("td",null," ",c.a.createElement("p",null,e.open_issues_count)))})):null},h=a(37),p=a(38),d=function(e){var t=e.issues;return t?c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Issue #"),c.a.createElement("th",{scope:"col"},"Repo Name"),c.a.createElement("th",{scope:"col"},"open"))),c.a.createElement("tbody",null,t.map((function(e,t){return c.a.createElement("tr",{key:e.id},c.a.createElement("th",{scope:"row"},e.number),c.a.createElement("td",null,c.a.createElement("p",{key:t},e.title)),c.a.createElement("td",null," ",c.a.createElement("a",{href:e.html_url},"View")))})))):null},f=function(e){var t=e.modalData,a=e.show,r=e.handleClose,l=Object(n.useState)([]),s=Object(m.a)(l,2),i=s[0],E=s[1],f=Object(n.useState)(""),b=Object(m.a)(f,2),v=b[0];b[1];Object(n.useEffect)((function(){j()}),[t]);var j=function(){var e=Object(u.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(v),e.next=3,fetch("".concat(t.url,"/issues"));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,E(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(h.a,{show:a,onHide:r},c.a.createElement(h.a.Header,{closeButton:!0},c.a.createElement(h.a.Title,null,t.name)),c.a.createElement(h.a.Body,null,t.description,c.a.createElement(d,{issues:i})),c.a.createElement(h.a.Footer,null,c.a.createElement(p.a,{variant:"secondary",onClick:r},"Close")))},b=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)("tetris"),s=Object(m.a)(l,2),h=s[0],p=s[1],d=Object(n.useState)("tetris"),b=Object(m.a)(d,2),v=b[0],j=b[1],w=Object(n.useState)([]),O=Object(m.a)(w,2),g=O[0],k=O[1],y=Object(n.useState)([]),x=Object(m.a)(y,2),N=x[0],S=x[1],C=Object(n.useState)(!1),B=Object(m.a)(C,2),I=B[0],_=B[1],D=Object(n.useState)({}),R=Object(m.a)(D,2),q=R[0],F=R[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/search/repositories?q=sort=updated&order=desc");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,k(a.items),e.next=9,fetch("https://api.github.com/search/repositories?q=sort=rated&order=desc");case 9:return n=e.sent,e.next=12,n.json();case 12:c=e.sent,S(c.items);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[0]),Object(n.useEffect)((function(){M(),T()}),[v]);var M=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("search-results-label"),e.next=3,fetch("https://api.github.com/search/repositories?q=".concat(v,"+&sort=stars&order=asc"));case 3:return t=e.sent,e.next=6,t.json();case 6:if(!((a=e.sent).items.length>0)){e.next=12;break}r(a.items),console.log(a.items),e.next=20;break;case 12:return e.next=14,fetch("https://api.github.com/users/".concat(v,"/repos"));case 14:return n=e.sent,e.next=17,n.json();case 17:c=e.sent,console.log(c),r(c);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=document.getElementById("search-results");e.classList.toggle("flash"),setTimeout((function(){e.classList.toggle("flash")}),2e3)};return c.a.createElement("div",{className:"App"},c.a.createElement("form",{className:"search-form"},c.a.createElement("input",{className:"search-bar",value:h,onChange:function(e){p(e.target.value)},type:"text"}),c.a.createElement("button",{className:"search-button",onClick:function(e){e.preventDefault(),j(h)},type:"submit"},c.a.createElement("span",null," "),"Search")),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12",id:"search-results"},c.a.createElement("h2",{id:"search-results-label"},"Search results"),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Repo Name"),c.a.createElement("th",{scope:"col"},"Forks"),c.a.createElement("th",{scope:"col"},"Issues"))),c.a.createElement("tbody",null,c.a.createElement(E,{items:a.slice(0,10),setShow:_,setModalData:F})))),c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("h2",null,"Top Rated"),c.a.createElement(i,{items:N.slice(0,10)})),c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("h2",null,"Most Recent"),c.a.createElement(i,{items:g.slice(0,10)})))),c.a.createElement("div",null,c.a.createElement(f,{modalData:q,show:I,handleClose:function(e){_(!1)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.d3ecd531.chunk.js.map