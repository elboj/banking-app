(this["webpackJsonptab-app"]=this["webpackJsonptab-app"]||[]).push([[0],{183:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(63),r=t.n(l),s=t(3),m=(t(71),t(2)),i=(t(72),t(26)),o=t(15),u=t(64),E=new function e(a){Object(m.a)(this,e),this.img=a}("https://www.freecodecamp.org/news/content/images/size/w100/2020/07/avatar-mask.jpg"),d=[{icon:c.a.createElement(i.b,null),id:0},{icon:c.a.createElement(i.a,null),id:1},{icon:c.a.createElement(o.b,null),id:2},{icon:c.a.createElement(u.a,null),id:3}],v=function(){return c.a.createElement("div",{className:"indicator"})},b=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!0),m=Object(s.a)(r,2),i=m[0];m[1];return c.a.createElement("aside",{className:"sidebar"},i&&c.a.createElement(v,null),c.a.createElement("div",{className:"avatar"},c.a.createElement("div",{className:"avatar-holder"},c.a.createElement("img",{src:E.img,alt:"image",className:"img"}))),c.a.createElement("div",{className:"btn-container"},d.map((function(e,a){var n=e.icon,r=e.id;return c.a.createElement("button",{onClick:function(){l(a)},className:"btn ".concat(r===t&&"active"),key:r},n)}))),c.a.createElement("div",{className:"btn-container-bottom"},c.a.createElement("button",{className:"btn"},c.a.createElement(o.a,null))))},p=(t(73),t(10)),N=t(4);function f(){return c.a.createElement("section",{className:"card-holder"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"circle-bg"},c.a.createElement("div",{className:"circle circle1"}),c.a.createElement("div",{className:"circle circle2"}),c.a.createElement("div",{className:"circle circle3"}),c.a.createElement("div",{className:"circle circle4"}),c.a.createElement("div",{className:"circle circle5"}),c.a.createElement("div",{className:"circle circle6"}))),c.a.createElement(g,null))}function g(){var e=Object(n.useState)("$65000"),a=Object(s.a)(e,2),t=a[0];a[1];return c.a.createElement("div",{className:"action-container"},c.a.createElement("p",{className:"action-text"},"CURRENT BALANCE"),c.a.createElement("p",{className:"action-amount"},t),c.a.createElement("div",{className:"button-holder"},c.a.createElement("button",{className:"action-btn action-btn-left"},c.a.createElement(N.a,null)),c.a.createElement("button",{className:"action-btn action-btn-middle"},c.a.createElement(N.b,null)),c.a.createElement("button",{className:"action-btn action-btn-right"},c.a.createElement(N.c,null))))}var h=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1];return c.a.createElement("section",{className:"form-container"},c.a.createElement("form",{className:"searchForm",onSubmit:function(e){e.preventDefault()}},c.a.createElement("button",{type:"btn",className:"search-btn"},c.a.createElement(p.b,null)),c.a.createElement("input",{type:"text",className:"searchBar",value:t,onChange:function(e){l(e.target.value)},placeholder:"Type here to search..."})),c.a.createElement(f,null),c.a.createElement("div",{className:"transExchangeContainer"},c.a.createElement(y,null),c.a.createElement(S,null)))},w=(t(74),[{name:"Fasoranti Tosin",id:1,date:"22, March 2021",amount:"$5000",status:"sent",userAvatar:"https://www.freecodecamp.org/news/content/images/size/w100/2020/07/avatar-mask.jpg"},{name:"Deborah Obemi",id:2,date:"22, January 2021",amount:"$300",status:"received",userAvatar:"https://www.freecodecamp.org/news/content/images/size/w100/2020/07/avatar-mask.jpg"},{name:"Siewe Wambe",id:3,date:"22, January 2021",amount:"$3500",status:"reveived",userAvatar:" https://www.freecodecamp.org/news/content/images/size/w100/2020/07/avatar-mask.jpg"},{name:"Freddy Poundz",id:4,date:"12, July 2021",amount:"$2000",status:"reveived",userAvatar:" https://www.freecodecamp.org/news/content/images/size/w100/2020/07/avatar-mask.jpg"},{name:"Bolu Adaja",id:5,date:"12, July 2021",amount:"$1500",status:"sent",userAvatar:" https://www.freecodecamp.org/news/content/images/size/w100/2020/07/avatar-mask.jpg"}]),y=function(){return c.a.createElement("section",{className:"transaction"},c.a.createElement("div",{className:"transactionHeading"},c.a.createElement("p",{className:"title"},"Transaction"),c.a.createElement("button",{className:"transactionBtn"}," ",c.a.createElement(p.b,null))),w.map((function(e){var a=e.name,t=e.date,n=e.amount,l=e.status,r=e.userAvatar,s=e.id;return c.a.createElement("section",{className:"transactionDetails",key:s},c.a.createElement("div",{className:"nameContainer"},c.a.createElement("div",{className:"avatar"},c.a.createElement("img",{src:r,alt:"user",className:"userImg"}),c.a.createElement("div",{className:"transactionStatus"},"sent"===l?c.a.createElement(N.c,null):c.a.createElement(N.a,null))),c.a.createElement("div",{className:"nameIdentity"},c.a.createElement("p",{className:"name"},a),c.a.createElement("p",{className:"dateStamp"},t))),c.a.createElement("div",{className:"amount"},c.a.createElement("p",{className:"amount"},n)))})))},j=(t(75),new function e(a,t,n,c){Object(m.a)(this,e),this.USD=a,this.GBP=t,this.EUR=n,this.YEN=c}(1,580,500,300)),S=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=(a[0],a[1]),l=Object(n.useState)(0),r=Object(s.a)(l,2),m=r[0],i=r[1],o=Object(n.useState)("USD"),u=Object(s.a)(o,2),E=u[0],d=u[1];return Object(n.useEffect)((function(){fetch("https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true").then((function(e){return e.json()})).then((function(e){console.log(e.casesByState),t(e)})).catch((function(e){return console.log(e)}))}),[]),c.a.createElement("section",{className:"converterContainer"},c.a.createElement("div",{className:"converterHeading"},c.a.createElement("p",{className:"title"},"Exchange"),c.a.createElement("button",{className:"transactionBtn"},c.a.createElement(p.a,null))),c.a.createElement("div",{className:"converterHolder"},c.a.createElement("div",{className:"input"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=parseInt(j["".concat(E)]);console.log(a+parseInt(m))}},c.a.createElement("input",{type:"text",className:"inputField",value:m,onChange:function(e){i(e.target.value)}}),c.a.createElement("select",{className:"currencyOptions"},c.a.createElement("option",{value:"USD"},"USD")),c.a.createElement("button",{type:"submit",className:"action-btn action-btn-middle btn-style"},c.a.createElement(N.b,null))," ",c.a.createElement("select",{className:"currencyOptions",value:E,onChange:function(e){d(e.target.value)}},c.a.createElement("option",{value:"USD"},"USD"),c.a.createElement("option",{value:"GBP"},"GBP"),c.a.createElement("option",{value:"EUR"},"EUR"),c.a.createElement("option",{value:"YEN"},"YEN")),c.a.createElement("input",{type:"text",className:"inputField",value:m,onChange:function(e){e.target.value}})))))},O=(t(76),t(27));O.b.font.family="Josefin Sans",console.log(O.b.font.family);var C={labels:["January","February","March","April","May"],datasets:[{label:"Savings",fill:!1,lineTension:.3,backgroundColor:"rgba(75,192,192,1)",borderColor:"green",borderWidth:1,data:[65,59,80,81,56]}]},k=function(){return c.a.createElement("div",null,c.a.createElement(O.a,{data:C,options:{title:{display:!0,text:"Average Savings Per month",fontSize:20},legend:{display:!0,position:"right"}}}))},A=function(){return c.a.createElement("section",{className:"mainContainer"},c.a.createElement("div",{className:"chartContainer"},c.a.createElement(k,null)),c.a.createElement("div",{className:"buyContainer"},c.a.createElement(S,null)))};var B=function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0];return a[1],c.a.createElement("main",null,c.a.createElement("section",{className:"container"},t&&c.a.createElement(b,null),c.a.createElement(h,null),c.a.createElement(A,null)))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root"))},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){}},[[183,1,2]]]);
//# sourceMappingURL=main.5c4df6d1.chunk.js.map