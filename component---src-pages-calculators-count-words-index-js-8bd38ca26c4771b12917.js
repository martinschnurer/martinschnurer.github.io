(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,n){"use strict";n.r(t);n(83);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(167),c=n(168),u=n(303),s=n.n(u),d=/[\s\.\?]+/,m=function(e){function t(){var t;return(t=e.call(this)||this).computeWords=function(e){return console.log(e.split(" ").length),e.split(d).filter(function(e){return""!==e||" "!==e}).length},t.timeoutFn=function(e){t.setState({words:t.computeWords(e)})},t.textAreaChangeHandler=function(e){var n=e.target.value;clearTimeout(t.delayedProcessor),t.delayedProcessor=setTimeout(function(){return t.timeoutFn(n)},2),t.setState({text:n})},t.state={text:"",words:0},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement(l.a,{withFooter:!1},i.a.createElement("div",null,i.a.createElement(c.a,{title:"Future balance calculator.",description:"Struggling with money? Unclear future? Let's compute your future money balance. Add your income, expenses, expected expenses and let's look what the future balance will look like.",keywords:["money","calculator","expenses","income","future"]}),i.a.createElement("div",null,"Words: ",this.state.words),i.a.createElement("textarea",{className:s.a.textarea,onChange:this.textAreaChangeHandler})))},t}(i.a.PureComponent);t.default=m},159:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(157),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(160),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,n){var a;e.exports=(a=n(164))&&a.default||a},164:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(52),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},165:function(e,t,n){e.exports={root_panel:"layout-module--root_panel--1Gi9h",dark_mode:"layout-module--dark_mode--1pyng",light_mode:"layout-module--light_mode--YP1BH",grid_menu:"layout-module--grid_menu--rxr8d",menu:"layout-module--menu--sgu2b",menu_item:"layout-module--menu_item--2I7Y0",theme_setter:"layout-module--theme_setter--26o3A",body_content:"layout-module--body_content--3585O",inside_content:"layout-module--inside_content--2SmLr"}},166:function(e,t,n){e.exports=n.p+"static/crab-cancer-symbol-df2517047b31779b6dc2798a803afcd4.png"},167:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(159),c=n(158),u=n.n(c),s=n(165),d=n.n(s),m=(n(162),function(e){e.fill;var t=e.onClick;return i.a.createElement("div",{style:{cursor:"pointer"},onClick:t},i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),i.a.createElement("path",{fill:"white",d:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"})))}),p=function(e){e.fill;var t=e.onClick;return i.a.createElement("div",{style:{cursor:"pointer"}},i.a.createElement("svg",{onClick:t,width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"}),i.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})))},h=function(e){var t=e.darkMode,n=e.toggle;return t?i.a.createElement(m,{onClick:n,fill:"white"}):i.a.createElement(p,{onClick:n})},f=n(166),g=n.n(f),y=function(e){function t(){var t;return(t=e.call(this)||this).toggleMode=function(){return t.setState({darkMode:!t.state.darkMode})},t.state={darkMode:!1},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.withFooter,a=void 0===n||n,r=this.state.darkMode?"dark_mode":"light_mode";return i.a.createElement("div",{className:u()(d.a.root_panel,d.a[r])},i.a.createElement("div",{className:d.a.grid_menu},i.a.createElement("div",{className:d.a.menu},i.a.createElement("img",{className:d.a.menu_item,src:g.a}),i.a.createElement("div",{className:d.a.menu_item},i.a.createElement(l.Link,{to:"/"},"Home")),i.a.createElement("div",{className:d.a.menu_item},i.a.createElement(l.Link,{to:"/calculators"},"Calculators"))),i.a.createElement("div",{className:d.a.theme_setter},i.a.createElement(h,{darkMode:this.state.darkMode,toggle:this.toggleMode}))),i.a.createElement("div",{className:d.a.body_content},i.a.createElement("div",{className:d.a.inside_content},i.a.createElement("div",null,t),a&&i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Martin Schnurer"))))},t}(i.a.Component);t.a=y},168:function(e,t,n){"use strict";var a=n(169),r=n(0),o=n.n(r),i=n(4),l=n.n(i),c=n(176),u=n.n(c),s=n(159);function d(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(s.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Very boring blog",description:".",author:"Martin Schnürer"}}}}},303:function(e,t,n){e.exports={container:"styles-module--container--ICAqb",textarea:"styles-module--textarea--1GlGq"}}}]);
//# sourceMappingURL=component---src-pages-calculators-count-words-index-js-8bd38ca26c4771b12917.js.map