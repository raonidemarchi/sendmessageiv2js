(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={overlay:"NewContactForm_overlay__1qhwV",modalContainer:"NewContactForm_modalContainer__1HpWE",header:"NewContactForm_header__rT_O6",closeContainer:"NewContactForm_closeContainer__34zfX",close:"NewContactForm_close__CIyQQ",label:"NewContactForm_label__JnVVm",checkboxLabel:"NewContactForm_checkboxLabel__10OnU",checkbox:"NewContactForm_checkbox__36iNP",formInput:"NewContactForm_formInput__2AjA1",formEditableContent:"NewContactForm_formEditableContent__36BVq",buttonContainer:"NewContactForm_buttonContainer__J--9G",submitButton:"NewContactForm_submitButton__12w3a"}},16:function(e,t,a){e.exports={authContainer:"AuthForm_authContainer__FUIqf",passwordInput:"AuthForm_passwordInput__ZWESO",passwordSubmitButton:"AuthForm_passwordSubmitButton__2hBNb"}},39:function(e,t,a){e.exports=a(71)},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(18),r=a.n(c),s=a(10),i=a(14);function l(e){return e&&"totvs@iv2"===e}var m=a(9),u=a.n(m),p=a(12),d=a(5),v=a(13),h=a.n(v),w=a(34),b=a.n(w),f=a(35),_=a.n(f),E=a(36),C=a.n(E),g=o.a.createContext(),N=g.Provider,y=(g.Consumer,g),x=window&&window.location&&window.location.hostname,O="".concat("raonidemarchi.github.io"===x?"https://send-message-iv2.herokuapp.com":"http://localhost:3100","/api/").concat("v1"),S=a(1),L=a.n(S);var j=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),l=Object(d.a)(s,2),m=l[0],v=l[1],w=Object(n.useState)(""),f=Object(d.a)(w,2),E=f[0],g=f[1],N=Object(n.useState)(""),x=Object(d.a)(N,2),S=x[0],j=x[1],F=Object(n.useState)(!0),I=Object(d.a)(F,2),k=I[0],A=I[1],B=Object(n.useState)(!1),q=Object(d.a)(B,2),P=q[0],V=q[1],G=Object(n.useContext)(y),T=G.contactsList,z=G.setContactsList;function J(e){var t=T;t.unshift(e),z(t)}function U(){e.history.push("/contacts")}function M(){return(M=Object(p.a)(u.a.mark(function e(t){var a,n,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=_.a.stringify({name:c,phone:m,company:E,givewayParticipant:k,observation:S}),n={},o="",t.preventDefault(),V(!0),e.next=7,h.a.post("".concat(O,"/contact"),a);case 7:n=e.sent,o=window.encodeURIComponent("Ol\xe1 "+n.data.name+",\n\nAgradecemos a sua visita em nosso Stand, foi um prazer receb\xea-lo!\n"+(k?"O seu n\xfamero para participar do sorteio \xe9: "+n.data.giveawayNumber+". Boa Sorte!\n":"")+"E conforme conversamos, segue o material sobre os Apps e solu\xe7\xf5es da iv2.\nEasy Quality https://www.youtube.com/watch?v=-xYYd9CbCo4\nEasy Flow https://www.youtube.com/watch?v=cPg9qQ6KTGc&list=PL9e5jlUEjJCmuXox8bNEcStXZwbZ2GebF\nMake it Easy https://www.youtube.com/watch?v=b3a3gfTEtpo&t\n\nQualquer d\xfavida , estamos \xe0 disposi\xe7\xe3o :)\n\nAbra\xe7o,\nGrupo iv2"),J(n.data),r(""),v(""),g(""),j(""),A(!0),V(!1),window.open("https://api.whatsapp.com/send?phone=55".concat(m.replace(/[(,),\-, ]/g,""),"&text=").concat(o),"_blank"),U();case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}return o.a.createElement("div",{className:L.a.overlay,onClick:function(e){return e.target.className===L.a.overlay&&U()}},o.a.createElement("div",{className:L.a.modalContainer},o.a.createElement("div",{className:L.a.header},o.a.createElement(i.b,{className:L.a.closeContainer,to:"/contacts"},o.a.createElement("svg",{className:L.a.close,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#212121"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),"Novo contato"),o.a.createElement("form",{autoComplete:"off",onSubmit:function(e){return M.apply(this,arguments)}},o.a.createElement("div",{className:L.a.formInputs},o.a.createElement("div",{className:L.a.formGroup},o.a.createElement("label",{htmlFor:"phone",className:L.a.label},"Telefone"),o.a.createElement(C.a,{value:m,type:"tel",mask:"(99) 9 9999-9999",id:"phone",name:"phone",autoFocus:!0,className:L.a.formInput,onChange:function(e){return v(e.target.value)},required:!0})),o.a.createElement("div",{className:L.a.formGroup},o.a.createElement("label",{htmlFor:"name",className:L.a.label},"Nome"),o.a.createElement("input",{value:c,type:"text",id:"name",name:"name",className:L.a.formInput,onChange:function(e){return r(e.target.value)},required:!0})),o.a.createElement("div",{className:L.a.formGroup},o.a.createElement("label",{htmlFor:"company",className:L.a.label},"Empresa"),o.a.createElement("input",{value:E,type:"text",id:"company",name:"company",className:L.a.formInput,onChange:function(e){return g(e.target.value)},required:!0})),o.a.createElement("div",{className:L.a.formGroup},o.a.createElement(b.a,{html:S,id:"observation",className:L.a.formEditableContent,onChange:function(e){return j(e.target.value)}}))),o.a.createElement("div",{className:L.a.buttonContainer},o.a.createElement("button",{type:"submit",disabled:P,className:L.a.submitButton},P?"Enviando...":"Enviar")))))},F=a(8),I=a.n(F);var k=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),l=Object(d.a)(r,2),m=l[0],v=l[1];return Object(n.useEffect)(function(){!function(){var e=Object(p.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(O,"/contact"));case 2:t=e.sent,v(!1),c(t.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:I.a.headerList},m?"Carregando contatos...":"Contatos (".concat(a.length,")")),o.a.createElement("div",{className:I.a.contactList},a.map(function(e){return o.a.createElement("div",{className:I.a.contactListItem,key:e._id,onClick:function(){return function(e){var t,a=e.phone;t=window.encodeURIComponent("PARAB\xc9NS\n\nDurante o Universo TOTVS, o Grupo iv2 estava sorteando 30 vagas para um workshop de React com o Fluig com os nossos especialistas e voc\xea foi um dos ganhadores!Segue informa\xe7\xf5es:\n\nData: 12/07/2019\nHor\xe1rio: 09h00 \nEndere\xe7o: Rua Paulino Corado, 20 - Sala 110 - Jardim Santa Teresa, Jundia\xed - SP\n\nO v\xeddeo do sorteio est\xe1 em nossa p\xe1gina do Linkedin: https://www.linkedin.com/company/iv2-tecnologia-e-sistemas/?viewAsMember=true\n\nVenha aprender como conseguimos turbinar novas aplica\xe7\xf5es do fluig com esta tecnologia!\n\nPor gentileza, confirmar presen\xe7a at\xe9 o dia 05/07.\n\nAbra\xe7os."),window.open("https://api.whatsapp.com/send?phone=55".concat(a.replace(/[(,),\-, ]/g,""),"&text=").concat(t),"_blank")}(e)}},o.a.createElement("div",null,o.a.createElement("div",{className:I.a.contactInital},e.name.substr(0,1).toUpperCase())),o.a.createElement("div",{className:I.a.contactInfoContainer},e.name,o.a.createElement("div",{className:I.a.info},e.company),o.a.createElement("div",{className:I.a.phone},e.phone)),e.givewayParticipant&&o.a.createElement("div",{className:I.a.giveawayNumberContainer},"n\xb0 ",e.giveawayNumber))})),o.a.createElement(i.b,{to:"/contacts/new",className:I.a.fab},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"#fff"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),o.a.createElement(N,{value:{contactsList:a,setContactsList:c}},o.a.createElement(s.b,{path:"/contacts/new",component:j})))},A=a(16),B=a.n(A);var q=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],r=a[1];return o.a.createElement("div",{className:B.a.authContainer},o.a.createElement("form",{onSubmit:function(e){return function(e){return e.preventDefault(),l(c)?(localStorage.setItem("password",c),window.location.reload()):alert("Senha inv\xe1lida")}(e)}},o.a.createElement("input",{type:"text",name:"password",placeholder:"Senha",className:B.a.passwordInput,onChange:function(e){return r(e.target.value.toLocaleLowerCase())},required:!0,autoFocus:!0}),o.a.createElement("button",{type:"submit",className:B.a.passwordSubmitButton},"Entrar")))};var P=function(){var e=l(localStorage.password),t=o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/login",exact:!0,component:q}),o.a.createElement(s.a,{from:"*",to:"/login"})),a=o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/contacts",exact:!0,component:k}),o.a.createElement(s.b,{path:"/contacts/new",exact:!0,component:k}),o.a.createElement(s.a,{from:"*",to:"/contacts"}));return o.a.createElement(i.a,null,e?a:t)};function V(){return(V=Object(p.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(O,"/frontEndVersion"));case 2:t=e.sent,a=t.data.version,localStorage.appVersion!==a&&G(a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function G(e){localStorage.appVersion=e,window.location.reload(!0)}a(70);r.a.render(o.a.createElement(P,null),document.getElementById("root")),function(){V.apply(this,arguments)}()},8:function(e,t,a){e.exports={headerList:"ContactsList_headerList__1AvQX",contactList:"ContactsList_contactList__3qRAh",contactListItem:"ContactsList_contactListItem__14-Ia",contactInital:"ContactsList_contactInital__1uA_h",contactInfoContainer:"ContactsList_contactInfoContainer__3wTgp",info:"ContactsList_info__12lki",phone:"ContactsList_phone__27Nqw",giveawayNumberContainer:"ContactsList_giveawayNumberContainer__3ragW",fab:"ContactsList_fab__b7vxP"}}},[[39,1,2]]]);
//# sourceMappingURL=main.7a13b1ab.chunk.js.map