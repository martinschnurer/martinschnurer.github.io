(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,n){"use strict";n.r(t);n(81);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(163),c=n(167),l=n(301),s=n.n(l),d=/[\s.?]+/,m=function(e){function t(){var t;return(t=e.call(this)||this).computeWords=function(e){return console.log(e.split(" ").length),e.split(d).filter(function(e){return""!==e||" "!==e}).length},t.timeoutFn=function(e){t.setState({words:t.computeWords(e)})},t.textAreaChangeHandler=function(e){var n=e.target.value;clearTimeout(t.delayedProcessor),t.delayedProcessor=setTimeout(function(){return t.timeoutFn(n)},2),t.setState({text:n})},t.state={text:"",words:0},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement(u.a,{withFooter:!1},i.a.createElement("div",null,i.a.createElement(c.a,{title:"Future balance calculator.",description:"Struggling with money? Unclear future? Let's compute your future money balance. Add your income, expenses, expected expenses and let's look what the future balance will look like.",keywords:["money","calculator","expenses","income","future"]}),i.a.createElement("div",null,"Words: ",this.state.words),i.a.createElement("textarea",{className:s.a.textarea,onChange:this.textAreaChangeHandler})))},t}(i.a.PureComponent);t.default=m},158:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return y}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(157),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(160),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,n){var a;e.exports=(a=n(162))&&a.default||a},162:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(52),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(158),c=n(159),l=n.n(c),s=n(164),d=n.n(s),m=n(165),p=n.n(m),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.withFooter,a=void 0===n||n;return i.a.createElement("div",{className:l()(d.a.root_panel)},i.a.createElement("div",{className:d.a.grid_menu},i.a.createElement("div",{className:d.a.menu},i.a.createElement("img",{className:d.a.menu_item,src:p.a,alt:"menu logo"}),i.a.createElement("div",{className:d.a.menu_item},i.a.createElement(u.Link,{to:"/"},"Home")),i.a.createElement("div",{className:d.a.menu_item},i.a.createElement(u.Link,{to:"/calculators"},"Calculators")))),i.a.createElement("div",{className:d.a.body_content},i.a.createElement("div",{className:d.a.inside_content},i.a.createElement("div",null,t),a&&i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Martin Schnurer"))))},t}(i.a.Component);t.a=y},164:function(e,t,n){e.exports={root_panel:"layout-module--root_panel--1Gi9h",dark_mode:"layout-module--dark_mode--1pyng",light_mode:"layout-module--light_mode--YP1BH",grid_menu:"layout-module--grid_menu--rxr8d",menu:"layout-module--menu--sgu2b",menu_item:"layout-module--menu_item--2I7Y0",theme_setter:"layout-module--theme_setter--26o3A",body_content:"layout-module--body_content--3585O",inside_content:"layout-module--inside_content--2SmLr"}},165:function(e,t,n){e.exports=n.p+"static/crab-cancer-symbol-df2517047b31779b6dc2798a803afcd4.png"},167:function(e,t,n){"use strict";var a=n(168),r=n(0),o=n.n(r),i=n(4),u=n.n(i),c=n(174),l=n.n(c),s=n(158);function d(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,u=e.title;return o.a.createElement(s.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:u},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=d;var m="1025518380"},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Very boring blog",description:".",author:"Martin Schnürer"}}}}},301:function(e,t,n){e.exports={container:"styles-module--container--ICAqb",textarea:"styles-module--textarea--1GlGq"}}}]);
//# sourceMappingURL=component---src-pages-calculators-count-words-index-js-7e1874c3556cd8b44ff4.js.map