(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.8b68e5f1.svg"},25:function(e,t,a){e.exports=a.p+"static/media/arrow.0bcf257a.svg"},26:function(e,t,a){e.exports=a.p+"static/media/weaves-green.4a2487f3.svg"},27:function(e,t,a){e.exports=a.p+"static/media/weaves-orange.ff68e4e9.svg"},28:function(e,t,a){e.exports=a.p+"static/media/download.f3cc1078.svg"},31:function(e,t,a){e.exports=a(72)},36:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),i=(a(36),a(76)),s=a(74),o=(a(38),a(6)),u=a(77),m=(a(45),a(47),a(49),a(24)),p=a.n(m),d=function(){return r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:p.a,alt:"logo"}))},f=(a(51),function(e){return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress__step"},"\u0428\u0430\u0433 ",e.currentStep," \u0438\u0437 ",e.totalSteps),r.a.createElement("div",{className:"progress__bar"},r.a.createElement("div",{className:"progress__bar-indicator",style:{width:100/e.totalSteps*e.currentStep+"%"}})))}),h=a(7),v=a(8),b=a(11),E=a(9),g=a(10),_=a(5),O=(a(53),a(55),function(e){return r.a.createElement("div",{className:"title"},e.text)}),N=(a(57),function(e){return r.a.createElement("div",{className:"sub-title"},e.text)}),j=(a(59),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={value:"",errorMessage:""},a.inputField=r.a.createRef(),a.handleChange=a.handleChange.bind(Object(_.a)(Object(_.a)(a))),a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"handleChange",value:function(e){var t=this;this.setState({value:e.target.value},function(){t.validate()})}},{key:"validate",value:function(){var e=this,t=this.state.value,a=[],n=this.props.validate;return(n=n.split("|")).forEach(function(n){var r=n.split(":"),l=r[0],c=r[1];"min"===l&&t.length<c&&a.push(e.props.errorMessages.min),"max"===l&&t.length>c&&a.push(e.props.errorMessages.max),"email"===l&&-1===t.indexOf("@")&&a.push(e.props.errorMessages.email)}),this.setState({errorMessage:a}),0===a.length?{id:this.props.id,error:!1,value:t}:{id:this.props.id,error:!0,value:t}}},{key:"label",value:function(){if(""!==this.props.label)return r.a.createElement("label",{htmlFor:this.props.id,className:"input__label"},this.props.label)}},{key:"placeholder",value:function(){return""===this.props.placeholder?null:this.props.placeholder}},{key:"errorInput",value:function(){return this.state.errorMessage.length>0?" input__field--error":""}},{key:"errorText",value:function(){return this.state.errorMessage.length>0?" input__error--active":""}},{key:"render",value:function(){return r.a.createElement("div",{className:"input"},this.label(),r.a.createElement("input",{id:this.props.id,type:"text",value:this.state.value,onChange:this.handleChange,placeholder:this.placeholder(),className:"input__field"+this.errorInput(),ref:this.inputField}),r.a.createElement("div",{className:"input__error"+this.errorText()},this.state.errorMessage[0]))}}]),t}(n.Component));j.defaultProps={label:"",placeholder:""};var S=j,k=(a(61),a(25)),y=a.n(k),w=function(){return r.a.createElement("button",{className:"button"},"\u0414\u0430\u043b\u0435\u0435",r.a.createElement("img",{src:y.a,alt:"arrow",className:"button__arrow","aria-hidden":"true"}))},x=function(e){return{type:"SET_CURRENT_STEP",payload:e}},C=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).nameInput=r.a.createRef(),a.emailInput=r.a.createRef(),a.handleSubmit=a.handleSubmit.bind(Object(_.a)(Object(_.a)(a))),a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=[],n=[];if(["name","email"].forEach(function(e){a.push(t[e+"Input"].current.validate())}),a.forEach(function(e){n.push(e.error)}),-1===n.indexOf(!0)){var r={};a.forEach(function(e){r[e.id]={value:e.value}}),this.props.setName(r.name.value),this.props.setEmail(r.email.value),this.props.setCurrentStep(2)}else for(var l=0;l<a.length;l++)if(!0===a[l].error){this[a[l].id+"Input"].current.inputField.current.focus();break}}},{key:"render",value:function(){return r.a.createElement("div",{className:"step-one"},r.a.createElement(O,{text:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),r.a.createElement(N,{text:"\u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u0431\u044b\u0441\u0442\u0440\u0443\u044e \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u0444\u0440\u0430\u043d\u0448\u0438\u0437\u044b"}),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"step-one__form"},r.a.createElement(S,{id:"name",label:"\u0418\u043c\u044f",placeholder:"\u0410\u0444\u0438\u043d\u0430",validate:"min:2|max:20",errorMessages:{min:"\u0418\u043c\u044f \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435",max:"\u0418\u043c\u044f \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e\u0435"},ref:this.nameInput}),r.a.createElement(S,{id:"email",label:"\u041f\u043e\u0447\u0442\u0430",placeholder:"example@mail.com",validate:"email",errorMessages:{email:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043f\u043e\u0447\u0442\u044b"},ref:this.emailInput}),r.a.createElement(w,null)))}}]),t}(n.Component),M=Object(o.b)(null,function(e){return{setName:function(t){return e(function(e){return{type:"SET_NAME",payload:e}}(t))},setEmail:function(t){return e(function(e){return{type:"SET_EMAIL",payload:e}}(t))},setCurrentStep:function(t){return e(x(t))}}})(C),T=(a(63),a(65),a(26)),I=a.n(T),R=a(27),F=a.n(R),P=a(28),A=a.n(P),U=function(e){return r.a.createElement("div",{className:"pdf"},r.a.createElement("div",{className:"pdf__container"},function(e){switch(e){case"green":return r.a.createElement("div",{className:"pdf__img","aria-hidden":"true"},r.a.createElement("img",{src:I.a,alt:"background"}));case"orange":return r.a.createElement("div",{className:"pdf__img","aria-hidden":"true"},r.a.createElement("img",{src:F.a,alt:"background"}))}}(e.background),r.a.createElement("div",{className:"pdf__badge"},"PDF"),r.a.createElement("div",{className:"pdf__title"},e.title)),r.a.createElement("a",{href:e.link,className:"pdf__link",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:A.a,alt:"download","aria-hidden":"true",className:"pdf__link-img"}),"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"))};U.defaultProps={background:""};var D=U,B=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(_.a)(Object(_.a)(a))),a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.setCurrentStep(3)}},{key:"render",value:function(){return r.a.createElement("form",{className:"step-two",onSubmit:this.handleSubmit},r.a.createElement(O,{text:"\u041f\u0440\u043e\u043c\u043e \u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"}),r.a.createElement(N,{text:"\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u0448\u0438\u043c\u0438 \u043f\u0440\u043e\u043c\u043e-\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430\u043c\u0438 \u0438 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u0437\u0443\u0447\u0438\u0442\u0435 \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u0444\u0440\u0430\u043d\u0448\u0438\u0437\u044b \u0438 \u0432\u0441\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438, \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435"}),r.a.createElement("div",{className:"step-two__pdf-list"},r.a.createElement(D,{background:"green",title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0444\u0440\u0430\u043d\u0448\u0438\u0437\u044b",link:"https://google.com"}),r.a.createElement(D,{background:"orange",title:"\u041f\u043b\u0430\u043d \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0444\u0440\u0430\u043d\u0448\u0438\u0437\u044b",link:"https://youtube.com"})),r.a.createElement(w,null))}}]),t}(n.Component),J=Object(o.b)(null,function(e){return{setCurrentStep:function(t){return e(x(t))}}})(B),L=(a(67),function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"step-three"},r.a.createElement(O,{text:"\u0422\u0430\u0440\u0438\u0444 \u0424\u0440\u0430\u043d\u0448\u0438\u0437\u044b"}),r.a.createElement(N,{text:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0434\u043b\u044f \u0432\u0430\u0441 \u0442\u0430\u0440\u0438\u0444 \u0444\u0440\u0430\u043d\u0448\u0438\u0437\u044b"}))}}]),t}(n.Component)),W=Object(o.b)(function(e){return{user:e.user}})(L),H=function(e){return r.a.createElement("div",{className:"registration-form"},r.a.createElement(d,null),r.a.createElement(f,{currentStep:e.progress.currentStep,totalSteps:e.progress.totalSteps}),r.a.createElement("div",{className:"registration-form__steps"},function(e){switch(e){case 1:return r.a.createElement(M,null);case 2:return r.a.createElement(J,null);case 3:return r.a.createElement(W,null)}}(e.progress.currentStep)))},$=Object(u.a)(Object(o.b)(function(e){return{user:e.user,progress:e.progress}})(function(e){return r.a.createElement("div",{className:"home"},r.a.createElement(H,{progress:e.progress}))})),q=(a(70),a(73)),z=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h1",null,"404"),r.a.createElement("nav",null,r.a.createElement(q.a,{to:"/"},"Home")))},G=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(i.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:$}),r.a.createElement(s.a,{component:z})))},K=a(12),Q=a(13),V={name:"Unknown",email:"Unknown"},X={currentStep:1,totalSteps:10},Y=Object(K.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NAME":return Object(Q.a)({},e,{name:t.payload});case"SET_EMAIL":return Object(Q.a)({},e,{email:t.payload});default:return e}},progress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_STEP":return Object(Q.a)({},e,{currentStep:t.payload});default:return e}}}),Z=Object(K.c)(Y),ee=a(75);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{store:Z},r.a.createElement(ee.a,null,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.30810cb8.chunk.js.map