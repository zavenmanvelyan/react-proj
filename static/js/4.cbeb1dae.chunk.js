(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{284:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__3QSNi",dialogsItems:"Dialogs_dialogsItems__1TSZZ",active:"Dialogs_active__BjKJS",messages:"Dialogs_messages__1Koco",message:"Dialogs_message__1f5fW"}},290:function(e,a,s){"use strict";s.r(a);var t=s(11),l=s(6),n=s(0),i=s.n(n),m=s(25);let o=e=>({isAuth:e.auth.isAuth});var r=s(116),c=s(284),d=s.n(c),g=s(15);var u=e=>{let a="/dialogs/"+e.id;return i.a.createElement("div",{className:d.a.dialog},i.a.createElement(g.b,{to:a},e.name))};var E=e=>i.a.createElement("div",{className:d.a.message},e.message),b=s(78),v=s(117),p=s(29),_=s(55);const h=Object(_.a)(50),f=Object(v.a)({form:"dialogAddMessageForm"})(e=>i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(b.a,{component:p.b,name:"newMessageBody",placeholder:"Enter your message",validate:[_.b,h]})),i.a.createElement("div",null,i.a.createElement("button",null,"Send message"))));var w=e=>{let a=e.dialogsPage,s=a.dialogs.map(e=>i.a.createElement(u,{name:e.name,id:e.id})),t=a.messages.map(e=>i.a.createElement(E,{message:e.message}));if(!e.isAuth)return i.a.createElement(m.a,{to:"/login"});return i.a.createElement("div",{className:d.a.dialogs},i.a.createElement("div",{className:d.a.dialogsItems},s),i.a.createElement("div",{className:d.a.messages},i.a.createElement("div",null,t),i.a.createElement(f,{onSubmit:a=>{e.sendMessage(a.newMessageBody)}})))};a.default=Object(l.d)(Object(t.b)(e=>({dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}),e=>({sendMessage:a=>{e(Object(r.b)(a))}})),e=>{return Object(t.b)(o,{})(class extends i.a.Component{render(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(m.a,{to:"/login"})}})})(w)}}]);
//# sourceMappingURL=4.cbeb1dae.chunk.js.map