(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{159:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),u=a(176),o=a(178),c=a(160),s=a.n(c),m=function(e){function t(){var t;return(t=e.call(this)||this).changeInputValue=function(e){return t.setState({inputValue:e.target.value})},t.changeInflationRate=function(e){return t.setState({inflationRate:e.target.value})},t.changeFutureYear=function(e){return t.setState({futureYear:e.target.value})},t.format=function(e){return Math.round(100*e)/100},t.computeFutureValue=function(){var e=t.state,a=e.inputValue,n=e.inflationRate,r=e.futureYear,i=(new Date).getFullYear(),l=1-n/100;return t.format(a*Math.pow(l,r-i))},t.getErrorMessage=function(){var e=t.state,a=e.inputValue,n=e.inflationRate,r=e.futureYear,i=(new Date).getFullYear();return r<=i?"Write down future year, (more than "+i+")":a?""===n?"Fill in inflation rate, for example 2% (Average is 1-2 %)":n<0?"Inflation rate must be more than 0%":null:"Fill in input value"},t.state={inputValue:1e3,inflationRate:3,futureYear:(new Date).getFullYear()+5,error:null},t}return r()(t,e),t.prototype.render=function(){var e=this.state,t=e.inputValue,a=e.inflationRate,n=e.futureYear,r=(new Date).getFullYear(),i=this.getErrorMessage();return l.a.createElement(u.a,null,l.a.createElement(o.a,{title:"Inflation money calculator",description:"This calculator computes how much your money will be worth in the future.",keywords:["inflation","money","calculator","investing"]}),l.a.createElement("div",null,l.a.createElement("div",{className:"topbottom_margined"},"Inflation is the yearly rate of decreasing monetary values. To see average inflation rates over the years, take a look at this ",l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.usinflationcalculator.com/inflation/historical-inflation-rates"},"page")),l.a.createElement("div",{className:s.a.input_panel},l.a.createElement("div",{className:s.a.input_div},l.a.createElement("span",null,"Value in ",r,": "),l.a.createElement("div",null,l.a.createElement("input",{value:t,onChange:this.changeInputValue}))),l.a.createElement("div",{className:s.a.input_div},l.a.createElement("span",null,"Inflation Rate: "),l.a.createElement("div",null,l.a.createElement("input",{value:a,onChange:this.changeInflationRate}),"%")),l.a.createElement("div",{className:s.a.input_div},l.a.createElement("span",null,"Future year: "),l.a.createElement("div",null,l.a.createElement("input",{value:n,onChange:this.changeFutureYear,placeholder:"2020"})))),i?l.a.createElement("div",{className:"error"},i):l.a.createElement("h2",null,"Your ",t,"€ will be worth ",l.a.createElement("b",null,this.computeFutureValue(),"€")," in ",n)))},t}(l.a.Component);t.default=m},171:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),u=a(33),o=a.n(u);a.d(t,"a",function(){return o.a});a(172);var c=r.a.createContext({}),s=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},172:function(e,t,a){var n;e.exports=(n=a(175))&&n.default||n},175:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),u=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},176:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),u=a(171),o=a(170),c=a.n(o),s=a(150),m=a.n(s),d=a(177),p=a.n(d),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.withFooter,n=void 0===a||a;return l.a.createElement("div",{className:c()(m.a.root_panel)},l.a.createElement("div",{className:m.a.grid_menu},l.a.createElement("div",{className:m.a.menu},l.a.createElement("img",{className:m.a.menu_item,src:p.a,alt:"menu logo"}),l.a.createElement("div",{className:m.a.menu_item},l.a.createElement(u.a,{to:"/"},"Home")),l.a.createElement("div",{className:m.a.menu_item},l.a.createElement(u.a,{to:"/calculators"},"Calculators")))),l.a.createElement("div",{className:m.a.body_content},l.a.createElement("div",{className:m.a.inside_content},l.a.createElement("div",null,t),n&&l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Martin Schnurer"))))},t}(l.a.Component);t.a=f},177:function(e,t,a){e.exports=a.p+"static/crab-cancer-symbol-df2517047b31779b6dc2798a803afcd4.png"},178:function(e,t,a){"use strict";var n=a(179),r=a(0),i=a.n(r),l=a(4),u=a.n(l),o=a(185),c=a.n(o),s=a(171);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,u=e.title;return i.a.createElement(s.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:u,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:u},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=m;var d="1025518380"},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Martin Schnürer",description:".",author:"Martin Schnürer"}}}}}}]);
//# sourceMappingURL=component---src-pages-calculators-inflation-index-js-8e67ed8cbb5baff60db2.js.map