(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{155:function(e,t,n){"use strict";n.r(t);n(38),n(79),n(57),n(37),n(344),n(211),n(83);var a=n(7),r=n.n(a),l=n(0),o=n.n(l),c=n(4),u=n.n(c),i=n(176),s=n(178),m=n(156),d=n.n(m),h=/[\s.?]+/,p=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getHistogram=function(){var e=t.props,n=e.text,a=e.countWhitespaces,r=n.split("").reduce(function(e,t){return a||" "!==t?(e[t]=t in e?e[t]+1:1,e):e},{});return Object.entries(r).sort(function(e,t){return e[1]<t[1]?1:-1})},t}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Characters histogram"),o.a.createElement("table",null,o.a.createElement("tbody",null,this.getHistogram().map(function(e){return o.a.createElement("tr",{key:e[0]},o.a.createElement("td",null,e[0]),o.a.createElement("td",null,e[1]))}))))},t}(o.a.PureComponent);p.propTypes={text:u.a.string.isRequired,countWhitespaces:u.a.bool},p.defaultProps={countWhitespaces:!1};var f=function(e){var t=e.words,n=void 0===t?0:t,a=e.charCount,r=void 0===a?0:a,l=e.charsWithoutSpaces,c=void 0===l?0:l,u=e.spaces,i=void 0===u?0:u;return o.a.createElement("div",null,o.a.createElement("h1",null,"Stats"),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Words"),o.a.createElement("td",null,n)),o.a.createElement("tr",null,o.a.createElement("td",null,"Characters (With Spaces)"),o.a.createElement("td",null,r)),o.a.createElement("tr",null,o.a.createElement("td",null,"Characters (Without Spaces)"),o.a.createElement("td",null,c)),o.a.createElement("tr",null,o.a.createElement("td",null,"Spaces"),o.a.createElement("td",null,i)))))},E=function(e){var t=e.word,n=e.count;return o.a.createElement("tr",null,o.a.createElement("td",null,t),o.a.createElement("td",null,n))},v=function(e){function t(){var t;return(t=e.call(this)||this).hideAll=function(){return t.setState({showAll:!1})},t.showAll=function(){return t.setState({showAll:!0})},t.toggleShowAll=function(){return t.setState({showAll:!t.state.showAll})},t.howMuchChange=function(e){""===e.target.value&&(e.target.value=0);var n=parseInt(e.target.value);isNaN(n)?t.setState({error:"Set positive natural number (for example 50)"}):t.setState({error:null,howMuchToShow:n})},t.state={howMuchToShow:50,showAll:!1,error:null},t}return r()(t,e),t.prototype.render=function(){var e=this.props.entries;return o.a.createElement("div",null,o.a.createElement("h1",null,"Words Histogram"),o.a.createElement("div",null,"ShowAll",o.a.createElement("input",{type:"checkbox",className:"margin-left",checked:this.state.showAll,onChange:this.toggleShowAll})),!this.state.showAll&&o.a.createElement("div",null,"How much words to show?",o.a.createElement("input",{className:"margin-left",type:"number",onChange:this.howMuchChange,value:0===this.state.howMuchToShow?"":this.state.howMuchToShow})),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement("b",null,"Word")),o.a.createElement("th",null,o.a.createElement("b",null,"Count")))),o.a.createElement("tbody",null,e.slice(0,this.state.howMuchToShow).map(function(e){var t=e[0],n=e[1];return o.a.createElement(E,{word:t,count:n,key:t})}))))},t}(o.a.PureComponent),g=function(e){function t(){var t;return(t=e.call(this)||this).computeWords=function(e){return e.split(h).filter(function(e){return""!==e||" "!==e}).length},t.computeWordsHistogram=function(e){var t=e.split(h).map(function(e){return e.toLowerCase()}).reduce(function(e,t){return e[t]=t in e?e[t]+1:1,e},{});return Object.entries(t).sort(function(e,t){return e[1]<t[1]?1:-1})},t.timeoutFn=function(e){t.setState({words:t.computeWords(e)})},t.textAreaChangeHandler=function(e){var n=e.target.value;clearTimeout(t.delayedProcessor),t.delayedProcessor=setTimeout(function(){return t.timeoutFn(n)},2),t.setState({text:n})},t.charsWithoutSpaces=function(e){return e.replace(/\s/g,"").length},t.state={text:"",words:0},t}return r()(t,e),t.prototype.render=function(){var e=this.charsWithoutSpaces(this.state.text);return o.a.createElement(i.a,{withFooter:!1},o.a.createElement("div",null,o.a.createElement(s.a,{title:"Words Counter",description:"Words counter and characters counter",keywords:["words","counter","histogram"]}),o.a.createElement("div",null,"Paste your text to the input below. "),o.a.createElement("div",null,o.a.createElement("b",null,"Words:")," ",this.state.words),o.a.createElement("textarea",{className:d.a.textarea,onChange:this.textAreaChangeHandler}),o.a.createElement(f,{words:this.state.words,charCount:this.state.text.length,charsWithoutSpaces:e,spaces:this.state.text.length-e}),o.a.createElement(v,{entries:this.computeWordsHistogram(this.state.text)}),o.a.createElement(p,{text:this.state.text})))},t}(o.a.PureComponent);t.default=g},171:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),l=n(4),o=n.n(l),c=n(33),u=n.n(c);n.d(t,"a",function(){return u.a});n(172);var i=r.a.createContext({}),s=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},172:function(e,t,n){var a;e.exports=(a=n(175))&&a.default||a},175:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),l=n(4),o=n.n(l),c=n(55),u=n(2),i=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};i.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=i},176:function(e,t,n){"use strict";var a=n(7),r=n.n(a),l=n(0),o=n.n(l),c=n(171),u=n(170),i=n.n(u),s=n(150),m=n.n(s),d=n(177),h=n.n(d),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.withFooter,a=void 0===n||n;return o.a.createElement("div",{className:i()(m.a.root_panel)},o.a.createElement("div",{className:m.a.grid_menu},o.a.createElement("div",{className:m.a.menu},o.a.createElement("img",{className:m.a.menu_item,src:h.a,alt:"menu logo"}),o.a.createElement("div",{className:m.a.menu_item},o.a.createElement(c.a,{to:"/"},"Home")),o.a.createElement("div",{className:m.a.menu_item},o.a.createElement(c.a,{to:"/calculators"},"Calculators")))),o.a.createElement("div",{className:m.a.body_content},o.a.createElement("div",{className:m.a.inside_content},o.a.createElement("div",null,t),a&&o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Martin Schnurer"))))},t}(o.a.Component);t.a=p},177:function(e,t,n){e.exports=n.p+"static/crab-cancer-symbol-df2517047b31779b6dc2798a803afcd4.png"},178:function(e,t,n){"use strict";var a=n(179),r=n(0),l=n.n(r),o=n(4),c=n.n(o),u=n(185),i=n.n(u),s=n(171);function m(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return l.a.createElement(s.b,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Martin Schnürer",description:".",author:"Martin Schnürer"}}}}},210:function(e,t,n){var a=n(35),r=n(36),l=n(75).f;e.exports=function(e){return function(t){for(var n,o=r(t),c=a(o),u=c.length,i=0,s=[];u>i;)l.call(o,n=c[i++])&&s.push(e?[n,o[n]]:o[n]);return s}}},211:function(e,t,n){"use strict";var a=n(11),r=n(28),l=n(25),o=n(18),c=[].sort,u=[1,2,3];a(a.P+a.F*(o(function(){u.sort(void 0)})||!o(function(){u.sort(null)})||!n(212)(c)),"Array",{sort:function(e){return void 0===e?c.call(l(this)):c.call(l(this),r(e))}})},212:function(e,t,n){"use strict";var a=n(18);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},344:function(e,t,n){var a=n(11),r=n(210)(!0);a(a.S,"Object",{entries:function(e){return r(e)}})}}]);
//# sourceMappingURL=component---src-pages-calculators-count-words-index-js-d7f0bbddfd9e0678e80f.js.map