(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{183:function(e,t,a){"use strict";a.r(t);a(34);var n=a(7),i=a.n(n),r=(a(230),a(229),a(77),a(57),a(37),a(0)),s=a.n(r),c=a(566),l=a(565),o=a(194),u=a(190),m=a(173),d=a.n(m),h={JOB:"JOB",LEARNED:"LEARNED",EXPERIENCED:"EXPERIENCED",ACHIEVEMENT:"ACHIEVEMENT",EDUCATION:"EDUCATION",LIFE:"LIFE"},p={JOB:"Job",LEARNED:"Learned",EXPERIENCED:"Experienced",ACHIEVEMENT:"Achievement",EDUCATION:"Education",LIFE:"Life"},E={content:[{title:"Sep 2019 - First airplane flight (My first visit of Spain)",text:"3 things I've touched for the first time - flight with airplane, visited Spain and surfed\n      for the first time. This was actually Kickresume teambuilding - had a great time.",type:h.EXPERIENCED},{title:"Aug 2019 - Started out my personal project named Lucinda",type:h.LIFE},{title:"Jun 2019 - Achieved Master's Degree",text:"I was waiting a lot for this to happen. It was tough path and I'm\n      really happy it is finally over. Now the real life starts",type:h.ACHIEVEMENT},{title:"Feb 2019 - Started working at Kickresume (Till now)",text:"I'm working here as a React developer.",type:h.JOB},{title:"July 2017 - Started working at MyPio (Ends Feb 2018)",text:"I worked here as a Full-stack (React and Lambda) javascript developer. \n      Here I've learned a lot of things about AWS, mainly about Lambda and S3 service.\n      I've learned how to deploy code with Jenkins. Company crashed down due to insufficient finances - \n      As a telecomunicating app it needed third party help to provide services which costs lot of money. \n      Outcome highly exceed income of the company and \"break even\" wasn't anywhere near.\n      ",type:h.JOB},{title:"Jun 2017 - Achieved Bachelor's Degree",text:"I was researching neural networks which had to recognize parts of speech. \n      I used Tensorflow python library and new custom network which helps model to achieve high precision.",type:[h.ACHIEVEMENT,h.EDUCATION]},{title:"Jun 2016 - Found my first IT job",text:"\n        I worked for startup ProfitComputing which aim was to implement physical security systems. \n        Camera monitoring, door locking, alarms, permissions for persons etc. I was working on Javascript here.\n      ",type:[h.JOB,h.ACHIEVEMENT]},{title:"Sep 2014 - Moving to Bratislava, begin study at Slovak Technical University",text:"Faculty of Informatics and Information Technology",type:[h.ACHIEVEMENT,h.EDUCATION]},{title:"Aug 2014 - Acquired driving licence",type:h.ACHIEVEMENT},{title:"July 2014 - Successfuly ends high school",type:[h.ACHIEVEMENT,h.EDUCATION]},{title:"July 2012 - First real alcohol experience",text:"Mixed up whiskey, vodka and wine. \n      Vomitted afterwards. Since this day I haven't drink alcohol for 3 years. (to ~2015)",type:h.EXPERIENCED},{title:"September 2011 Secondary School Gymnasium Srobarova 1 Kosice",text:"High School. Reading and learning stuff before subject begins was not sufficient anymore. My grades got \n        significantly worse .\n      ",type:h.ACHIEVEMENT},{title:"Sep 2001 - Jun 2010",text:"School. Basically reading and learning stuff before the class start. Sometimes I was learning \n      while teacher was testing another classmate because I knew I am probably next on the shot.",type:h.EDUCATION},{title:"2002 Elementary school began - They say it'll be fun",text:"It was fun first 5 minutes. Then I started to cry and I know that I don't want to be there.",type:h.EDUCATION},{title:"1998-2001 Kindergarten",text:"Started to learn my first social skills.",type:h.EDUCATION},{title:"14.7.1995 - 1998: Don't remember anything",text:'Mostly crying every night, making my parent\'s lifes hell. Learn to walk, learn to say "MAMA" and so on. You know that kinda stuff',type:h.LIFE},{title:"14.7.1995 - I was born.",text:"Day full of emotions and full of pain of course. I was successfuly born and the next boy saw the light of the world.",type:h.LIFE}]},f=function(e){var t=e.title,a=e.text;return s.a.createElement("div",{className:d.a.timelineItem},s.a.createElement("div",{className:d.a.titleWithDot},s.a.createElement("div",{className:d.a.circle}),t),s.a.createElement("div",{className:d.a.inside},a))},y=function(e){var t=e.values,a=e.onChange,n=e.onClickAll;return s.a.createElement("div",{className:d.a.filterPanel},s.a.createElement("div",{className:d.a.filterItem,onClick:function(e){return n(!Object.values(t).every(function(e){return e}))}},s.a.createElement("input",{checked:Object.values(t).every(function(e){return e}),type:"checkbox"})," ","Show All"),Object.keys(h).map(function(e){return s.a.createElement("div",{key:e,className:d.a.filterItem,onClick:function(n){return a(e,!t[e])}},s.a.createElement("input",{checked:t[e],type:"checkbox"})," ",p[e])}))},v=function(e){function t(){var t;(t=e.call(this)||this).filterChangeHandler=function(e,a){t.setState(function(t){var n;return{active:Object.assign({},t.active,(n={},n[e]=a,n))}})},t.fiterItem=function(e){var a=t.state.active;return void 0===e.type||(e.type instanceof Array?e.type.some(function(e){return a[e]}):a[e.type])},t.clickAllHandler=function(e){t.setState(function(t){var a=Object.assign({},t.active);return Object.keys(t.active).forEach(function(t){a[t]=e}),{active:a}})};var a=Object.keys(h),n={};return a.forEach(function(e){n[e]=!0}),t.state={active:n},t}return i()(t,e),t.prototype.render=function(){return s.a.createElement(u.a,null,s.a.createElement(o.b,null,s.a.createElement("div",{style:{paddingTop:20}},s.a.createElement(y,{values:this.state.active,onChange:this.filterChangeHandler,onClickAll:this.clickAllHandler}),s.a.createElement("div",{className:d.a.marginBottom},s.a.createElement("div",{className:"text-center"},s.a.createElement("h3",null,"Martin Schnürer"))),s.a.createElement("div",{className:d.a.timeline},s.a.createElement(c.a,null,E.content.filter(this.fiterItem).map(function(e){return s.a.createElement(l.a,{timeout:500,key:e.title,classNames:{enter:d.a.itemEnter,enterActive:d.a.itemEnterActive,exit:d.a.itemExit,exitActive:d.a.itemExitActive}},s.a.createElement(f,{text:e.text,title:e.title}))}))))))},t}(s.a.Component);t.default=v},185:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),i=a.n(n),r=a(4),s=a.n(r),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(187);var o=i.a.createContext({}),u=function(e){return i.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},187:function(e,t,a){var n;e.exports=(n=a(189))&&n.default||n},189:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),s=a.n(r),c=a(55),l=a(2),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},190:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),s=a.n(r),c=a(184),l=a.n(c),o=a(4),u=a.n(o),m=a(185),d=a(156),h=a.n(d),p=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.styles;return s.a.createElement("div",{className:l()(h.a.root_panel,a),styles:n},s.a.createElement("div",{className:h.a.grid_menu},s.a.createElement("div",{className:l()(h.a.menu,h.a.left_menu)},s.a.createElement("div",{className:h.a.menu_item},s.a.createElement(m.a,{to:"/",activeClassName:h.a.active},"Blog")),s.a.createElement("div",{className:h.a.menu_item},s.a.createElement(m.a,{to:"/calculators",activeClassName:h.a.active},"Tools"))),s.a.createElement("div",{className:l()(h.a.menu,h.a.right_menu)},s.a.createElement("div",{className:h.a.menu_item},s.a.createElement(m.a,{to:"/cv",activeClassName:h.a.active},"CV")))),t)},t}(s.a.PureComponent);p.propTypes={children:u.a.node.isRequired,className:u.a.string,styles:u.a.objectOf(u.a.oneOfType([u.a.number,u.a.string]))},p.defaultProps={className:"",styles:{}},t.a=p},194:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(34);var n=a(7),i=a.n(n),r=a(0),s=a.n(r),c=a(4),l=a.n(c),o=a(184),u=a.n(o),m=a(157),d=a.n(m),h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.style,i=void 0===n?{}:n;return s.a.createElement("div",{className:u()(d.a.body_content,a),style:Object.assign({},i)},s.a.createElement("div",{className:d.a.inside_content},t))},t}(s.a.PureComponent);h.propTypes={children:l.a.node.isRequired,className:l.a.string,style:l.a.objectOf(l.a.oneOfType([l.a.string,l.a.number]))},h.defaultProps={style:{},className:""},t.b=h}}]);
//# sourceMappingURL=component---src-pages-cv-jsx-f7934b819b225d940ccb.js.map