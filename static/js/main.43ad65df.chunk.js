(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(45)},23:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(6),c=t.n(r),i=(t(23),t(3)),s=t.n(i),l=t(4),m=t(2),u=t(5),p=t.n(u),d=t(16),v=t.n(d),h=o.a.createContext(),f=h.Provider,w=(h.Consumer,h),E=o.a.createContext(),b=E.Provider,g=(E.Consumer,E);t(43);var y=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),i=Object(m.a)(c,2),u=i[0],d=i[1],h=Object(n.useState)(""),f=Object(m.a)(h,2),E=f[0],b=f[1],y=Object(n.useState)(!0),N=Object(m.a)(y,2),C=N[0],O=N[1],k=Object(n.useContext)(w).setShowModal,x=Object(n.useContext)(g),j=x.contactsList,S=x.setContactsList;function q(e){var a=j;a.push(e),S(a)}function z(){return(z=Object(l.a)(s.a.mark(function e(a){var n,o,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:t,phone:u,company:E,givewayParticipant:C},o={},c="",a.preventDefault(),e.next=6,p.a.post("https://send-message-iv2.herokuapp.com/api/v1/contact",n);case 6:o=e.sent,c=window.encodeURIComponent("Ol\xe1 "+o.data.name+",\n\nAgradecemos a sua visita em nosso Stand, foi um prazer receb\xea-lo!\n"+(C?"O seu n\xfamero para participar do sorteio \xe9: "+o.data.giveawayNumber+". Boa Sorte!\n":"")+"E conforme conversamos, segue o material sobre os Apps e solu\xe7\xf5es da iv2. Qualquer d\xfavida , estamos \xe1 disposi\xe7\xe3o :)\n\nAbra\xe7o,\nGrupo iv2"),window.open("https://api.whatsapp.com/send?phone=55".concat(u.replace(/[(,),\-, ]/g,""),"&text=").concat(c),"_blank"),q(o.data),r(""),d(""),b(""),O(!0),k(!1);case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"close",onClick:function(){return k(!1)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),"Novo contato"),o.a.createElement("form",{autoComplete:"off",onSubmit:function(e){return z.apply(this,arguments)}},o.a.createElement("div",{className:"form-inputs"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"phone"},"Telefone"),o.a.createElement(v.a,{value:u,type:"tel",mask:"(99) 9 9999-9999",id:"phone",name:"phone",onChange:function(e){return d(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"name"},"Nome"),o.a.createElement("input",{value:t,type:"text",id:"name",name:"name",onChange:function(e){return r(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"company"},"Empresa"),o.a.createElement("input",{value:E,type:"text",id:"company",name:"company",onChange:function(e){return b(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group form-check"},o.a.createElement("label",{htmlFor:"giveaway",className:"checkbox"},o.a.createElement("input",{type:"checkbox",name:"giveway",id:"giveaway",defaultChecked:"true",onChange:function(e){return O(e.target.checked)}}),"Quer participar do sorteio"))),o.a.createElement("div",{className:"button-container"},o.a.createElement("input",{type:"submit",value:"Enviar"}))))};t(44);var N=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(m.a)(c,2),u=i[0],d=i[1];return Object(n.useEffect)(function(){!function(){var e=Object(l.a)(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://send-message-iv2.herokuapp.com/api/v1/contact");case 2:a=e.sent,r(a.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),Object(n.useEffect)(function(){document.querySelector("body").style.overflowY=u?"hidden":"auto"},[u]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header-list"},"Contatos (",t.length,")"),o.a.createElement("div",{className:"contact-list"},t.map(function(e){return o.a.createElement("div",{className:"contact-list-item",key:e._id,onClick:function(){return function(e){var a,t=e.name,n=e.phone,o=e.giveawayNumber,r=e.givewayParticipant;a=window.encodeURIComponent("Ol\xe1 "+t+",\n\nAgradecemos a sua visita em nosso Stand, foi um prazer receb\xea-lo!\n"+(r?"O seu n\xfamero para participar do sorteio \xe9: "+o+". Boa Sorte!\n":"")+"E conforme conversamos, segue o material sobre os Apps e solu\xe7\xf5es da iv2. Qualquer d\xfavida , estamos \xe1 disposi\xe7\xe3o :)\n\nAbra\xe7o,\nGrupo iv2"),window.open("https://api.whatsapp.com/send?phone=55".concat(n.replace(/[(,),\-, ]/g,""),"&text=").concat(a),"_blank")}(e)}},o.a.createElement("div",null,o.a.createElement("div",{className:"contact-inital"},e.name.substr(0,1))),o.a.createElement("div",{className:"contact-info-container"},e.name,o.a.createElement("div",{className:"info"},e.company),o.a.createElement("div",{className:"info phone"},e.phone)),e.givewayParticipant&&o.a.createElement("div",{className:"giveaway-number-container"},"n\xb0 ",e.giveawayNumber))})),o.a.createElement("button",{type:"button",className:"fab",onClick:function(){return d(!0)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"#fff"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),o.a.createElement(f,{value:{setShowModal:d}},o.a.createElement("div",{id:"modalContainer",onClick:function(e){return"modalContainer"===e.target.id&&d(!1)},className:"modal-container"+(u?" visible":"")},o.a.createElement("div",{className:"form-modal"+(u?" visible":"")},o.a.createElement(b,{value:{contactsList:t,setContactsList:r}},o.a.createElement(y,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.43ad65df.chunk.js.map