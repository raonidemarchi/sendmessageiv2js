(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),i=(a(23),a(3)),s=a.n(i),l=a(4),m=a(2),u=a(5),p=a.n(u),d=a(16),v=a.n(d),h=o.a.createContext(),f=h.Provider,b=(h.Consumer,h),w=o.a.createContext(),E=w.Provider,g=(w.Consumer,w);a(43);var y=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(m.a)(c,2),u=i[0],d=i[1],h=Object(n.useState)(""),f=Object(m.a)(h,2),w=f[0],E=f[1],y=Object(n.useState)(!0),O=Object(m.a)(y,2),N=O[0],C=O[1],j=Object(n.useState)(!1),k=Object(m.a)(j,2),x=k[0],S=k[1],q=Object(n.useContext)(b).setShowModal,z=Object(n.useContext)(g),A=z.contactsList,B=z.setContactsList;function F(e){var t=A;t.unshift(e),B(t)}function M(){return(M=Object(l.a)(s.a.mark(function e(t){var n,o,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:a,phone:u,company:w,givewayParticipant:N},o={},c="",t.preventDefault(),S(!0),e.next=7,p.a.post("https://send-message-iv2.herokuapp.com/api/v1/contact",n);case 7:o=e.sent,c=window.encodeURIComponent("Ol\xe1 "+o.data.name+",\n\nAgradecemos a sua visita em nosso Stand, foi um prazer receb\xea-lo!\n"+(N?"O seu n\xfamero para participar do sorteio \xe9: "+o.data.giveawayNumber+". Boa Sorte!\n":"")+"E conforme conversamos, segue o material sobre os Apps e solu\xe7\xf5es da iv2. Qualquer d\xfavida , estamos \xe1 disposi\xe7\xe3o :)\n\nAbra\xe7o,\nGrupo iv2"),window.open("https://api.whatsapp.com/send?phone=55".concat(u.replace(/[(,),\-, ]/g,""),"&text=").concat(c),"_blank"),F(o.data),r(""),d(""),E(""),C(!0),S(!1),q(!1);case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"close",onClick:function(){return q(!1)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),"Novo contato"),o.a.createElement("form",{autoComplete:"off",onSubmit:function(e){return M.apply(this,arguments)}},o.a.createElement("div",{className:"form-inputs"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"phone"},"Telefone"),o.a.createElement(v.a,{value:u,type:"tel",mask:"(99) 9 9999-9999",id:"phone",name:"phone",onChange:function(e){return d(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"name"},"Nome"),o.a.createElement("input",{value:a,type:"text",id:"name",name:"name",onChange:function(e){return r(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"company"},"Empresa"),o.a.createElement("input",{value:w,type:"text",id:"company",name:"company",onChange:function(e){return E(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group form-check"},o.a.createElement("label",{htmlFor:"giveaway",className:"checkbox"},o.a.createElement("input",{type:"checkbox",name:"giveway",id:"giveaway",defaultChecked:"true",onChange:function(e){return C(e.target.checked)}}),"Quer participar do sorteio"))),o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{type:"submit",disabled:x},x?"Enviado...":"Enviar"))))};a(44);var O=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(m.a)(c,2),u=i[0],d=i[1],v=Object(n.useState)(!0),h=Object(m.a)(v,2),b=h[0],w=h[1];return Object(n.useEffect)(function(){!function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://send-message-iv2.herokuapp.com/api/v1/contact");case 2:t=e.sent,w(!1),r(t.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),Object(n.useEffect)(function(){document.querySelector("body").style.overflowY=u?"hidden":"auto"},[u]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header-list"},b?"Carregando contatos...":"Contatos (".concat(a.length,")")),o.a.createElement("div",{className:"contact-list"},a.map(function(e){return o.a.createElement("div",{className:"contact-list-item",key:e._id,onClick:function(){return function(e){var t,a=e.name,n=e.phone,o=e.giveawayNumber,r=e.givewayParticipant;t=window.encodeURIComponent("Ol\xe1 "+a+",\n\nAgradecemos a sua visita em nosso Stand, foi um prazer receb\xea-lo!\n"+(r?"O seu n\xfamero para participar do sorteio \xe9: "+o+". Boa Sorte!\n":"")+"E conforme conversamos, segue o material sobre os Apps e solu\xe7\xf5es da iv2. Qualquer d\xfavida , estamos \xe1 disposi\xe7\xe3o :)\n\nAbra\xe7o,\nGrupo iv2"),window.open("https://api.whatsapp.com/send?phone=55".concat(n.replace(/[(,),\-, ]/g,""),"&text=").concat(t),"_blank")}(e)}},o.a.createElement("div",null,o.a.createElement("div",{className:"contact-inital"},e.name.substr(0,1))),o.a.createElement("div",{className:"contact-info-container"},e.name,o.a.createElement("div",{className:"info"},e.company),o.a.createElement("div",{className:"info phone"},e.phone)),e.givewayParticipant&&o.a.createElement("div",{className:"giveaway-number-container"},"n\xb0 ",e.giveawayNumber))})),o.a.createElement("button",{type:"button",className:"fab",onClick:function(){return d(!0)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"#fff"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),o.a.createElement(f,{value:{setShowModal:d}},o.a.createElement("div",{id:"modalContainer",onClick:function(e){return"modalContainer"===e.target.id&&d(!1)},className:"modal-container"+(u?" visible":"")},o.a.createElement("div",{className:"form-modal"+(u?" visible":"")},o.a.createElement(E,{value:{contactsList:a,setContactsList:r}},o.a.createElement(y,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.cdff0f07.chunk.js.map