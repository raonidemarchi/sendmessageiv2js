(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,a){e.exports=a(44)},23:function(e,n,a){},43:function(e,n,a){},44:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),l=a(3),c=a.n(l),r=(a(23),a(4)),i=a.n(r),u=a(14),m=a(2),p=a(15),s=a.n(p),v=a(16),y=a.n(v);a(43);var d=function(){var e=Object(t.useState)(""),n=Object(m.a)(e,2),a=n[0],l=n[1],c=Object(t.useState)(""),r=Object(m.a)(c,2),p=r[0],v=r[1],d=Object(t.useState)(""),h=Object(m.a)(d,2),w=h[0],E=h[1],f=Object(t.useState)(1),g=Object(m.a)(f,2),b=g[0],O=g[1],j=Object(t.useState)([{name:"Jessiley 1",phone:"(11) 9 4767:3811 ",company:"TOTVS",giveway:0},{name:"Jessiley 2",phone:"(11) 9 4767:3822 ",company:"Vipal",giveway:1},{name:"Jessiley 3",phone:"(11) 9 4767:3833 ",company:"Grupo IV2",giveway:1},{name:"Jessiley 4",phone:"(11) 9 4767:3844 ",company:"Outro",giveway:1}]),S=Object(m.a)(j,2),k=S[0],J=S[1];return Object(t.useEffect)(function(){!function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout(function(){J([{name:"Jessiley 1",phone:"(11) 9 4767:3811 ",company:"TOTVS",giveway:1},{name:"Jessiley 2",phone:"(11) 9 4767:3822 ",company:"Vipal",giveway:0},{name:"Jessiley 3",phone:"(11) 9 4767:3833 ",company:"Grupo IV2",giveway:1},{name:"Jessiley 5",phone:"(11) 9 4767:3844 ",company:"Outro",giveway:1}])},2e3);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n="Texto que eu vou enviar \n com quebras de \n texto.";n=window.encodeURIComponent(n);var t={name:a,phone:p,comapny:w,giveway:b};y.a.get("https://api.whatsapp.com/send?phone=55".concat(p,"&text=").concat(n)),console.log(t)}},o.a.createElement("div",null,o.a.createElement("label",null,"Nome: "),o.a.createElement("input",{value:a,type:"text",id:"name",name:"name",onChange:function(e){return l(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("label",null,"Telefone: "),o.a.createElement(s.a,{mask:"(99) 9 9999-9999",id:"phone",name:"phone",onChange:function(e){return v(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("label",null,"Nome: "),o.a.createElement("input",{value:w,type:"text",id:"company",name:"company",onChange:function(e){return E(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("input",{value:"1",type:"radio",name:"giveway",defaultChecked:"true",onClick:function(e){return O(1)}}),"Sim"),o.a.createElement("label",null,o.a.createElement("input",{value:"0",type:"radio",name:"giveway",onClick:function(e){return O(0)}}),"N\xe3o")),o.a.createElement("div",null,o.a.createElement("input",{type:"submit",value:"Salvar"}))),o.a.createElement("div",{className:"list"},k.length>0&&k.map(function(e,n){return o.a.createElement("div",{key:n},o.a.createElement("div",null,e.name),o.a.createElement("div",null,e.phone),o.a.createElement("div",null,e.comapny),o.a.createElement("div",null,1===e.giveway?"Sim":0===e.giveway?"N\xe3o":"erro"))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.2364d737.chunk.js.map