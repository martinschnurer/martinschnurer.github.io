(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{260:function(e,t,n){"use strict";n.r(t);n(7),n(23),n(314),n(14),n(12),n(4);var a=n(0),r=n.n(a),i=(n(65),n(27),n(121));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=n(122);function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n(44);var c=n(81);n(34),n(62);function u(e,t){var n=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(a.isValidElement)(e)?t(e):e}(e)})),n}function p(e,t,n){return null!=n[t]?n[t]:e.props[t]}function d(e,t,n){var r=u(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var a,r=Object.create(null),i=[];for(var s in e)s in t?i.length&&(r[s]=i,i=[]):i.push(s);var o={};for(var l in t){if(r[l])for(a=0;a<r[l].length;a++){var c=r[l][a];o[r[l][a]]=n(c)}o[l]=n(l)}for(a=0;a<i.length;a++)o[i[a]]=n(i[a]);return o}(t,r);return Object.keys(i).forEach((function(s){var o=i[s];if(Object(a.isValidElement)(o)){var l=s in t,c=s in r,u=t[s],d=Object(a.isValidElement)(u)&&!u.props.in;!c||l&&!d?c||!l||d?c&&l&&Object(a.isValidElement)(u)&&(i[s]=Object(a.cloneElement)(o,{onExited:n.bind(null,o),in:u.props.in,exit:p(o,"exit",e),enter:p(o,"enter",e)})):i[s]=Object(a.cloneElement)(o,{in:!1}):i[s]=Object(a.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:p(o,"exit",e),enter:p(o,"enter",e)})}})),i}var h=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},f=function(e){function t(t,n){var a,r=(a=e.call(this,t,n)||this).handleExited.bind(l(l(a)));return a.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},a}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,r=s,u(n.children,(function(e){return Object(a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:p(e,"appear",n),enter:p(e,"enter",n),exit:p(e,"exit",n)})}))):d(e,i,s),firstRender:!1}},n.handleExited=function(e,t){var n=u(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=s({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,a=Object(i.a)(e,["component","childFactory"]),s=this.state.contextValue,o=h(this.state.children).map(n);return delete a.appear,delete a.enter,delete a.exit,null===t?r.a.createElement(c.a.Provider,{value:s},o):r.a.createElement(c.a.Provider,{value:s},r.a.createElement(t,a,o))},t}(r.a.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(e){return e}};var m=f;n(45),n(24);n(114),n(15);function E(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var v=n(264),y=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.remove(a):"string"==typeof n.className?n.className=E(n.className,a):n.setAttribute("class",E(n.className&&n.className.baseVal||"",a)));var n,a}))},g=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){t.removeClasses(e,"exit"),t.addClass(e,n?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=n?"appear":"enter";t.addClass(e,a,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=n?"appear":"enter";t.removeClasses(e,a),t.addClass(e,a,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),t.addClass(e,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){t.addClass(e,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){t.removeClasses(e,"exit"),t.addClass(e,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,a="string"==typeof n,r=a?""+(a&&n?n+"-":"")+e:n[e];return{baseClassName:r,activeClassName:a?r+"-active":n[e+"Active"],doneClassName:a?r+"-done":n[e+"Done"]}},t}Object(o.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var a=this.getClassNames(t)[n+"ClassName"];"appear"===t&&"done"===n&&(a+=" "+this.getClassNames("enter").doneClassName),"active"===n&&e&&e.scrollTop,this.appliedClasses[t][n]=a,function(e,t){e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.add(a):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,a)||("string"==typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a}))}(e,a)},n.removeClasses=function(e,t){var n=this.appliedClasses[t],a=n.base,r=n.active,i=n.done;this.appliedClasses[t]={},a&&y(e,a),r&&y(e,r),i&&y(e,i)},n.render=function(){var e=this.props,t=(e.classNames,Object(i.a)(e,["classNames"]));return r.a.createElement(v.a,s({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(r.a.Component);g.defaultProps={classNames:""},g.propTypes={};var b=g,x=n(235),C=n(234),N=n(255),I=n.n(N),w={JOB:"JOB",LEARNED:"LEARNED",EXPERIENCED:"EXPERIENCED",ACHIEVEMENT:"ACHIEVEMENT",EDUCATION:"EDUCATION",LIFE:"LIFE"},k={JOB:"Job",LEARNED:"Learned",EXPERIENCED:"Experienced",ACHIEVEMENT:"Achievement",EDUCATION:"Education",LIFE:"Life"},A={content:[{title:"Nov 2019 - Left the job",text:"I started working on Lucinda and my other personal things"},{title:"Sep 2019 - First airplane flight (My first visit of Spain)",text:"3 things I've touched for the first time - flight with airplane, visited Spain and surfed\n      for the first time. This was actually Kickresume teambuilding - had a great time.",type:w.EXPERIENCED},{title:"Aug 2019 - Started out my personal project named Lucinda",type:w.LIFE},{title:"Jun 2019 - Achieved Master's Degree",text:"I was waiting a lot for this to happen. It was tough path and I'm\n      really happy it is finally over. Now the real life starts",type:w.ACHIEVEMENT},{title:"Feb 2019 - Started working at Kickresume (Till now)",text:"I'm working here as a React developer.",type:w.JOB},{title:"July 2017 - Started working at MyPio (Ends Feb 2018)",text:"I worked here as a Full-stack (React and Lambda) javascript developer. \n      Here I've learned a lot of things about AWS, mainly about Lambda and S3 service.\n      I've learned how to deploy code with Jenkins. Company crashed down due to insufficient finances - \n      As a telecomunicating app it needed third party help to provide services which costs lot of money. \n      Outcome highly exceed income of the company and \"break even\" wasn't anywhere near.\n      ",type:w.JOB},{title:"Jun 2017 - Achieved Bachelor's Degree",text:"I was researching neural networks which had to recognize parts of speech. \n      I used Tensorflow python library and new custom network which helps model to achieve high precision.",type:[w.ACHIEVEMENT,w.EDUCATION]},{title:"Jun 2016 - Found my first IT job",text:"\n        I worked for startup ProfitComputing which aim was to implement physical security systems. \n        Camera monitoring, door locking, alarms, permissions for persons etc. I was working on Javascript here.\n      ",type:[w.JOB,w.ACHIEVEMENT]},{title:"Sep 2014 - Moving to Bratislava, begin study at Slovak Technical University",text:"Faculty of Informatics and Information Technology",type:[w.ACHIEVEMENT,w.EDUCATION]},{title:"Aug 2014 - Acquired driving licence",type:w.ACHIEVEMENT},{title:"July 2014 - Successfuly ends high school",type:[w.ACHIEVEMENT,w.EDUCATION]},{title:"July 2012 - First real alcohol experience",text:"Mixed up whiskey, vodka and wine. \n      Vomitted afterwards. Since this day I haven't drink alcohol for 3 years. (to ~2015)",type:w.EXPERIENCED},{title:"September 2011 Secondary School Gymnasium Srobarova 1 Kosice",text:"High School. Reading and learning stuff before subject begins was not sufficient anymore. My grades got \n        significantly worse .\n      ",type:w.ACHIEVEMENT},{title:"Sep 2001 - Jun 2010",text:"School. Basically reading and learning stuff before the class start. Sometimes I was learning \n      while teacher was testing another classmate because I knew I am probably next on the shot.",type:w.EDUCATION},{title:"2002 Elementary school began - They say it'll be fun",text:"It was fun first 5 minutes. Then I started to cry and I know that I don't want to be there.",type:w.EDUCATION},{title:"1998-2001 Kindergarten",text:"Started to learn my first social skills.",type:w.EDUCATION},{title:"14.7.1995 - 1998: Don't remember anything",text:'Mostly crying every night, making my parent\'s lifes hell. Learn to walk, learn to say "MAMA" and so on. You know that kinda stuff',type:w.LIFE},{title:"14.7.1995 - I was born.",text:"Day full of emotions and full of pain of course. I was successfuly born and the next boy saw the light of the world.",type:w.LIFE}]};var O=function(e){var t=e.title,n=e.text;return r.a.createElement("div",{className:I.a.timelineItem},r.a.createElement("div",{className:I.a.titleWithDot},r.a.createElement("div",{className:I.a.circle}),t),r.a.createElement("div",{className:I.a.inside},n))},j=function(e){var t=e.values,n=e.onChange,a=e.onClickAll;return r.a.createElement("div",{className:I.a.filterPanel},r.a.createElement("div",{className:I.a.filterItem,onClick:function(e){return a(!Object.values(t).every((function(e){return e})))}},r.a.createElement("input",{checked:Object.values(t).every((function(e){return e})),type:"checkbox"})," ","Show All"),Object.keys(w).map((function(e){return r.a.createElement("div",{key:e,className:I.a.filterItem,onClick:function(a){return n(e,!t[e])}},r.a.createElement("input",{checked:t[e],type:"checkbox"})," ",k[e])})))},T=function(e){var t,n;function a(){var t;(t=e.call(this)||this).filterChangeHandler=function(e,n){t.setState((function(t){var a;return{active:Object.assign({},t.active,(a={},a[e]=n,a))}}))},t.fiterItem=function(e){var n=t.state.active;return void 0===e.type||(e.type instanceof Array?e.type.some((function(e){return n[e]})):n[e.type])},t.clickAllHandler=function(e){t.setState((function(t){var n=Object.assign({},t.active);return Object.keys(t.active).forEach((function(t){n[t]=e})),{active:n}}))};var n=Object.keys(w),a={};return n.forEach((function(e){a[e]=!0})),t.state={active:a},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(C.a,null,r.a.createElement(x.b,null,r.a.createElement("div",{style:{paddingTop:20}},r.a.createElement(j,{values:this.state.active,onChange:this.filterChangeHandler,onClickAll:this.clickAllHandler}),r.a.createElement("div",{className:I.a.marginBottom},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",null,"Martin Schnürer"))),r.a.createElement("div",{className:I.a.timeline},r.a.createElement(m,null,A.content.filter(this.fiterItem).map((function(e){return r.a.createElement(b,{timeout:500,key:e.title,classNames:{enter:I.a.itemEnter,enterActive:I.a.itemEnterActive,exit:I.a.itemExit,exitActive:I.a.itemExitActive}},r.a.createElement(O,{text:e.text,title:e.title}))})))))))},a}(r.a.Component);t.default=T},294:function(e,t,n){var a=n(13),r=n(49),i=n(47),s=n(68).f;e.exports=function(e){return function(t){for(var n,o=i(t),l=r(o),c=l.length,u=0,p=[];c>u;)n=l[u++],a&&!s.call(o,n)||p.push(e?[n,o[n]]:o[n]);return p}}},314:function(e,t,n){var a=n(1),r=n(294)(!1);a(a.S,"Object",{values:function(e){return r(e)}})}}]);
//# sourceMappingURL=component---src-pages-cv-jsx-9468baa88c8e62983058.js.map