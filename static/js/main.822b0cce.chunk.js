(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(51)},44:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),s=a(3),i=a.n(s),l=a(4),u=a(1),m=a(5),p=a.n(m),d=a(18),v=a.n(d),h=o.a.createContext(),w=h.Provider,f=(h.Consumer,h),b=o.a.createContext(),E=b.Provider,g=(b.Consumer,b),y=(a(44),a(45));var C=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),m=s[0],d=s[1],h=Object(n.useState)(""),w=Object(u.a)(h,2),b=w[0],E=w[1],C=Object(n.useState)(!0),O=Object(u.a)(C,2),j=O[0],N=O[1],S=Object(n.useState)(!1),k=Object(u.a)(S,2),x=k[0],M=k[1],q=Object(n.useContext)(f).setShowModal,z=Object(n.useContext)(g),A=z.contactsList,F=z.setContactsList,L=Object(n.useState)({}),P=Object(u.a)(L,2),V=P[0],Y=(P[1],Object(n.useState)({})),B=Object(u.a)(Y,2),J=B[0],I=B[1];function Q(e){var t=A;t.unshift(e),F(t)}function G(){return(G=Object(l.a)(i.a.mark(function e(t){var n,o,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.stringify({name:a,phone:m,company:b,givewayParticipant:j}),o={},c="",t.preventDefault(),M(!0),I(n),e.next=8,p.a.post("https://send-message-iv2.herokuapp.com/api/v1/contact",n);case 8:o=e.sent,c=window.encodeURIComponent("Ol\xe1 "+o.data.name+",\n\nAgradecemos a sua visita em nosso Stand, foi um prazer receb\xea-lo!\n"+(j?"O seu n\xfamero para participar do sorteio \xe9: "+o.data.giveawayNumber+". Boa Sorte!\n":"")+"E conforme conversamos, segue o material sobre os Apps e solu\xe7\xf5es da iv2.\nEasy Quality https://www.youtube.com/watch?v=-xYYd9CbCo4\nEasy Project https://www.youtube.com/watch?v=jaeVf8NhJCY&t\nEasy Calendar https://www.youtube.com/watch?v=VzMcqAoVGt0&t\nMake it Easy https://www.youtube.com/watch?v=b3a3gfTEtpo&t\n\nQualquer d\xfavida , estamos \xe1 disposi\xe7\xe3o :)\n\nAbra\xe7o,\nGrupo iv2"),window.open("https://api.whatsapp.com/send?phone=55".concat(m.replace(/[(,),\-, ]/g,""),"&text=").concat(c),"_blank"),Q(o.data),r(""),d(""),E(""),N(!0),M(!1),q(!1);case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"close",onClick:function(){return q(!1)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),"Novo contato"),o.a.createElement("form",{autoComplete:"off",onSubmit:function(e){return G.apply(this,arguments)}},o.a.createElement("div",{className:"form-inputs"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"phone"},"Telefone"),o.a.createElement(v.a,{value:m,type:"tel",mask:"(99) 9 9999-9999",id:"phone",name:"phone",onChange:function(e){return d(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"name"},"Nome"),o.a.createElement("input",{value:a,type:"text",id:"name",name:"name",onChange:function(e){return r(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"company"},"Empresa"),o.a.createElement("input",{value:b,type:"text",id:"company",name:"company",onChange:function(e){return E(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group form-check"},o.a.createElement("label",{htmlFor:"giveaway",className:"checkbox"},o.a.createElement("input",{type:"checkbox",name:"giveway",id:"giveaway",defaultChecked:"true",onChange:function(e){return N(e.target.checked)}}),"Quer participar do sorteio"))),JSON.stringify(J),"-------------------------------------------------",JSON.stringify(V),o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{type:"submit",disabled:x},x?"agora vai...":"Enviar"))))};a(48);var O=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(u.a)(c,2),m=s[0],d=s[1],v=Object(n.useState)(!0),h=Object(u.a)(v,2),f=h[0],b=h[1];return Object(n.useEffect)(function(){!function(){var e=Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://send-message-iv2.herokuapp.com/api/v1/contact");case 2:t=e.sent,b(!1),r(t.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),Object(n.useEffect)(function(){document.querySelector("body").style.overflowY=m?"hidden":"auto"},[m]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header-list"},f?"Carregando contatos...":"Contatos (".concat(a.length,")")),o.a.createElement("div",{className:"contact-list"},a.map(function(e){return o.a.createElement("div",{className:"contact-list-item",key:e._id,onClick:function(){return function(e){var t,a=e.name,n=e.phone,o=e.giveawayNumber,r=e.givewayParticipant;t=window.encodeURIComponent("Ol\xe1 "+a+",\n\nAgradecemos a sua visita em nosso Stand, foi um prazer receb\xea-lo!\n"+(r?"O seu n\xfamero para participar do sorteio \xe9: "+o+". Boa Sorte!\n":"")+"E conforme conversamos, segue o material sobre os Apps e solu\xe7\xf5es da iv2.\nEasy Quality https://www.youtube.com/watch?v=-xYYd9CbCo4\nEasy Project https://www.youtube.com/watch?v=jaeVf8NhJCY&t\nEasy Calendar https://www.youtube.com/watch?v=VzMcqAoVGt0&t\nMake it Easy https://www.youtube.com/watch?v=b3a3gfTEtpo&t\n\nQualquer d\xfavida , estamos \xe1 disposi\xe7\xe3o :)\n\nAbra\xe7o,\nGrupo iv2"),window.open("https://api.whatsapp.com/send?phone=55".concat(n.replace(/[(,),\-, ]/g,""),"&text=").concat(t),"_blank")}(e)}},o.a.createElement("div",null,o.a.createElement("div",{className:"contact-inital"},e.name.substr(0,1))),o.a.createElement("div",{className:"contact-info-container"},e.name,o.a.createElement("div",{className:"info"},e.company),o.a.createElement("div",{className:"info phone"},e.phone)),e.givewayParticipant&&o.a.createElement("div",{className:"giveaway-number-container"},"n\xb0 ",e.giveawayNumber))})),o.a.createElement("button",{type:"button",className:"fab",onClick:function(){return d(!0)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"#fff"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),o.a.createElement(w,{value:{setShowModal:d}},o.a.createElement("div",{id:"modalContainer",onClick:function(e){return"modalContainer"===e.target.id&&d(!1)},className:"modal-container"+(m?" visible":"")},o.a.createElement("div",{className:"form-modal"+(m?" visible":"")},o.a.createElement(E,{value:{contactsList:a,setContactsList:r}},o.a.createElement(C,null))))))};a(49);var j=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1];return o.a.createElement("div",{className:"auth-container"},o.a.createElement("form",{onSubmit:function(e){return function(e){return e.preventDefault(),"totvs@iv2"===a?(localStorage.setItem("password",a),window.location.reload()):alert("Senha inv\xe1lida")}(e)}},o.a.createElement("input",{type:"text",name:"password",placeholder:"Senha",className:"password-input",onChange:function(e){return r(e.target.value.toLocaleLowerCase())},required:!0,autoFocus:!0}),o.a.createElement("button",{type:"submit",className:"password-submit"},"Entrar")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50);c.a.render(localStorage.getItem("password")?o.a.createElement(O,null):o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.822b0cce.chunk.js.map