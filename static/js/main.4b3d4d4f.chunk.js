(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),A=s(9),a=s.n(A),r=(s(61),s(62),s(15)),i=(s(63),s(2)),o=function(){var e=Object(c.useContext)(Z),t=e.aboutRef,s=e.myProjectsRef,n=e.frameworksRef,A=e.contactRef,a=e.homeRef,o=Object(c.useState)(!1),j=Object(r.a)(o,2),l=j[0],d=j[1],h=Object(c.useRef)();document.addEventListener("scroll",(function(){window.pageYOffset>100?l||d(!0):l&&d(!1)}));var b=function(e){var t=e.current.getBoundingClientRect().top;console.log("PAGE Y FOR ".concat(e.current," is ").concat(t));var s=window.pageYOffset+t-100;window.pageYOffset!==t&&window.scrollTo({top:s,behavior:"smooth"}),e.current.style.boxShadow="0 0 10px white",e.current.style.backgroundColor="rgba(255, 255, 255, 0.1)",e.current.style.transition="0.7s",setTimeout((function(){e.current.style.boxShadow="",e.current.style.backgroundColor=""}),.2*t+500)};return Object(i.jsx)(i.Fragment,{children:l?Object(i.jsx)("header",{className:"headerFixed",children:Object(i.jsxs)("nav",{className:"navFixed",children:[Object(i.jsx)("div",{className:"navOption",onClick:function(){return b(a)},children:"Home"}),Object(i.jsx)("div",{className:"navOption",onClick:function(){return b(t)},children:"About"}),Object(i.jsx)("div",{className:"navOption",onClick:function(){return b(n)},children:"Frameworks"}),Object(i.jsx)("div",{className:"navOption",onClick:function(){return b(s)},children:"My projects"}),Object(i.jsx)("div",{className:"navOption",onClick:function(){return b(A)},children:"Contact"})]})}):Object(i.jsx)("header",{className:"header",children:Object(i.jsxs)("nav",{className:"nav",ref:h,children:[Object(i.jsx)("div",{className:"navOption",onClick:function(){return b(a)},children:"Home"}),Object(i.jsx)("div",{className:"navOption",onClick:function(){return b(t)},children:"About"}),Object(i.jsx)("div",{className:"navOption",onClick:function(){return b(n)},children:"Frameworks"}),Object(i.jsx)("div",{className:"navOption",onClick:function(){return b(s)},children:"My projects"}),Object(i.jsx)("div",{className:"navOption",onClick:function(){return b(A)},children:"Contact"})]})})})},j=(s(65),s.p+"static/media/FreeLancer.927e54ef.svg"),l=function(){return Object(i.jsx)("div",{className:"firstInfo",children:Object(i.jsxs)("div",{className:"firstInfoContent",children:[Object(i.jsxs)("div",{className:"myName",children:["Wiktor ",Object(i.jsx)("br",{}),"K\u0119dzierawski"]}),Object(i.jsxs)("div",{className:"shortAboutMe",children:[Object(i.jsx)("img",{src:j,alt:"FreeLancerSvg"}),Object(i.jsxs)("h2",{children:["I am Junior Full Stack ",Object(i.jsx)("span",{className:"javascript",children:"Javascript"}),"  developer"]}),"I am a young and motivated person for doing amazing things in the future. Coding is something that gives me happiness and satisfaction when the next project is complete."]})]})})},d=s.p+"static/media/FAQ2.170f7502.svg",h=(s(66),s.p+"static/media/mongo.5a0e5e1c.png"),b=s.p+"static/media/nodejs.e5557285.svg",u=function(){var e=Object(c.useContext)(Z),t=e.aboutRef,s=e.frameworksRef;return Object(i.jsx)("div",{className:"secondInfo",children:Object(i.jsxs)("div",{className:"secondInfoContent",children:[Object(i.jsxs)("div",{className:"aboutMe",ref:t,children:[Object(i.jsx)("img",{src:d,alt:"FAQ"}),Object(i.jsx)("p",{className:"aboutMeParagraph",children:"FAQ"}),Object(i.jsxs)("div",{className:"aboutMeText",children:[Object(i.jsxs)("div",{className:"questionAndAnswer",children:[Object(i.jsx)("div",{className:"question",children:"Where are you from?"}),Object(i.jsx)("div",{className:"answer",children:"I am from Poland, and my current location is G\u0142og\xf3w."})]}),Object(i.jsxs)("div",{className:"questionAndAnswer",children:[Object(i.jsx)("div",{className:"question",children:"How old are you?"}),Object(i.jsx)("div",{className:"answer",children:"I born in 2002, now I am 18 year old."})]}),Object(i.jsxs)("div",{className:"questionAndAnswer",children:[Object(i.jsxs)("div",{className:"question",children:["How long are you learing",Object(i.jsx)("span",{className:"javascript",children:" javascript"}),"?"]}),Object(i.jsx)("div",{className:"answer",children:"I started learning where I was 16, and I think it is going well."})]}),Object(i.jsxs)("div",{className:"questionAndAnswer",children:[Object(i.jsx)("div",{className:"question",children:"Why do you like coding?"}),Object(i.jsx)("div",{className:"answer",children:"It is something different,than typical subject in school, so I wanted to try it and now I am here."})]})]})]}),Object(i.jsxs)("div",{className:"mySkills",ref:s,children:[Object(i.jsxs)("h2",{children:["I work with the following"," ",Object(i.jsx)("span",{className:"javascript",children:" javascript"})," frameworks and libraries"]}),Object(i.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(i.jsx)("img",{src:b,alt:""}),Object(i.jsx)("img",{src:"data:image/png;base64,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",style:{paddingTop:"30px"},alt:""}),Object(i.jsx)("img",{src:h,alt:""}),Object(i.jsx)("img",{src:"data:image/png;base64,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",alt:""})]})]})})},O=(s(67),function(){var e=Object(c.useContext)(Z).myProjectsRef;return Object(i.jsx)("div",{className:"myProjectsContainer",children:Object(i.jsxs)("div",{className:"myProjectRef",ref:e,children:[Object(i.jsx)("h2",{children:"Some of my projects"}),Object(i.jsxs)("div",{className:"myProjects",children:[Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("div",{className:"img",children:Object(i.jsx)("a",{href:"https://victorowsky.github.io/watch/#/",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("img",{src:"https://imgur.com/Of1TP3X.png",alt:""})})}),Object(i.jsx)("h3",{className:"projectName",children:"Watch Together"}),Object(i.jsxs)("div",{className:"description",children:["Watch Together, connected with Twitch chat"," ",Object(i.jsx)("img",{style:{width:"28px",boxShadow:"0 0 0"},src:"https://cdn.betterttv.net/emote/5ea3bdb7ce7cbf62fe15ca16/1x",alt:""}),". Store data on MongoDB, and using Socket.io to emit events"]})]}),Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("div",{className:"img",children:Object(i.jsx)("a",{href:"https://victorowsky.github.io/StreamingFamily/#/",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("img",{src:"https://imgur.com/eebZgAK.png",alt:""})})}),Object(i.jsx)("h3",{className:"projectName",children:"Streaming Family"}),Object(i.jsx)("div",{className:"description",children:"Platform where you can find people to share your account, thoughts, and more."})]}),Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("div",{className:"img",children:Object(i.jsx)("a",{href:"https://victorowsky.github.io/playstation5/#/",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("img",{src:"https://imgur.com/Gs4KoBE.png",alt:""})})}),Object(i.jsx)("h3",{className:"projectName",children:"PlayStation 5 Checker"}),Object(i.jsx)("div",{className:"description",children:"When PlayStation 5 was only a legend. There were moments when PlayStation 5 was on stock, so I decided to use my programming skills and check it with Puppeteer."})]})]})]})})}),m=s(108),x=s(115),f=s(111),v=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function w(){var e=v();return Object(i.jsx)("div",{className:e.root,children:Object(i.jsx)(f.a,{})})}var p=Object(m.a)((function(e){return{root:{"& .MuiTextField-root":{color:"white",backgroundColor:"white",boxShadow:"0 0 10px black",borderRadius:"5px"},"& .MuiFormControl-root":{width:"100%"}}}}));function g(e){var t=e.textValue,s=e.setTextValue,c=e.isLoading,n=p();return Object(i.jsxs)("form",{className:n.root,style:{width:"100%"},noValidate:!0,autoComplete:"off",children:[Object(i.jsx)(x.a,{floatingLabelFocusStyle:n.floatingLabelFocusStyle,id:"filled-multiline-static",label:"Message",multiline:!0,rows:4,defaultValue:"Default Value",variant:"filled",value:t,onChange:function(e){s(e.target.value)}}),Object(i.jsx)("div",{style:{position:"relative",top:"-4px"},children:c&&Object(i.jsx)(w,{})})]})}s(71);var N=s.p+"static/media/Contact.ef2a1024.svg",y=s(114),L=Object(m.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function M(e){var t=e.onClick,s=L();return Object(i.jsx)("div",{className:s.root,children:Object(i.jsx)(y.a,{variant:"outlined",color:"primary",onClick:t&&t,children:"Send"})})}var H=s(36),P=s(118),K=s(116);function C(e){return Object(i.jsx)(K.a,Object(H.a)({elevation:6,variant:"filled"},e))}var R=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function S(e){var t=e.setIsSuccess,s=e.isSuccess,c=e.successMessage,n=R(),A=function(e,s){"clickaway"!==s&&t(!1)};return Object(i.jsx)("div",{className:n.root,children:Object(i.jsx)(P.a,{open:s,autoHideDuration:2e3,onClose:A,children:Object(i.jsx)(C,{onClose:A,severity:"success",children:c})})})}function k(e){return Object(i.jsx)(K.a,Object(H.a)({elevation:6,variant:"filled"},e))}var F=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function D(e){var t=e.isError,s=e.setIsError,c=e.errorMessage,n=F(),A=function(e,t){"clickaway"!==t&&s(!1)};return Object(i.jsx)("div",{className:n.root,children:Object(i.jsx)(P.a,{open:t,autoHideDuration:2e3,onClose:A,children:Object(i.jsx)(k,{onClose:A,severity:"error",children:c})})})}var B=function(){var e=Object(c.useContext)(Z).contactRef,t=Object(c.useState)(""),s=Object(r.a)(t,2),n=s[0],A=s[1],a=Object(c.useState)(""),o=Object(r.a)(a,2),j=o[0],l=o[1],d=Object(c.useState)(""),h=Object(r.a)(d,2),b=h[0],u=h[1],O=Object(c.useState)(!1),m=Object(r.a)(O,2),x=m[0],f=m[1],v=Object(c.useState)(""),w=Object(r.a)(v,2),p=w[0],y=w[1],L=Object(c.useState)(!1),H=Object(r.a)(L,2),P=H[0],K=H[1],C=Object(c.useState)(""),R=Object(r.a)(C,2),k=R[0],F=R[1],B=Object(c.useState)(!1),E=Object(r.a)(B,2),G=E[0],V=E[1];return Object(i.jsxs)("div",{className:"contactContainer",children:[Object(i.jsx)("img",{src:N,alt:"Contact"}),Object(i.jsxs)("div",{className:"contact",ref:e,children:[Object(i.jsx)("h2",{children:"Contact with me?"}),Object(i.jsxs)("div",{className:"inputs",children:[Object(i.jsx)("input",{type:"text",placeholder:"Name",value:b,onChange:function(e){return u(e.target.value)}}),Object(i.jsx)("input",{type:"email",placeholder:"Email",value:j,onChange:function(e){return l(e.target.value)}})]}),Object(i.jsx)(g,{textValue:n,setTextValue:A,isLoading:G}),Object(i.jsx)(M,{onClick:function(){n&&j&&b?j.includes("@")?(V(!0),fetch("".concat("https://stormy-refuge-26952.herokuapp.com","/sendMail/").concat(b,"/").concat(j,"/").concat(n)).then((function(e){return e.json()})).then((function(e){f(!0),y(e.message),l(""),u(""),A(""),V(!1)}))):(K(!0),F("Check your email again")):(K(!0),F("Check your details again"))}})]}),Object(i.jsx)(S,{isSuccess:x,setIsSuccess:f,successMessage:p}),Object(i.jsx)(D,{isError:P,setIsError:K,errorMessage:k})]})},Z=n.a.createContext();var E=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),s=Object(c.useRef)(),n=Object(c.useRef)(),A=Object(c.useRef)();return Object(i.jsx)(Z.Provider,{value:{aboutRef:e,myProjectsRef:t,frameworksRef:s,contactRef:A,homeRef:n},children:Object(i.jsxs)("div",{className:"app",ref:n,children:[Object(i.jsx)(o,{}),Object(i.jsx)(l,{}),Object(i.jsx)(u,{}),Object(i.jsx)(O,{}),Object(i.jsx)(B,{})]})})};a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.4b3d4d4f.chunk.js.map