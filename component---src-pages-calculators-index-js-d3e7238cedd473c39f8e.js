(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,a){"use strict";a.r(t);var n=a(179),r=a.n(n),o=a(0),i=a.n(o),c=a(163),l=a(158),u=a(166),s=a(301),d=a.n(s),m=function(e){var t=e.children,a=e.description,n=r()(e,["children","description"]);return i.a.createElement("div",{className:d.a.calculator_item},i.a.createElement(l.Link,{to:n.to,className:d.a.fw},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h3",null,t),i.a.createElement("hr",null)),a&&i.a.createElement("div",null,i.a.createElement("p",null,a)))))};t.default=function(e){var t=e.location;return i.a.createElement(c.a,{location:t,title:"Calculators",withFooter:!1},i.a.createElement(u.a,{title:"Calculators.",description:"List of all calculators I have created over time."}),i.a.createElement("div",{className:d.a.calculator_grid},i.a.createElement(m,{to:"/calculators/money_prediction",description:"Do you know how much money will you have in the future? Let's look on that and compute that."},"Money prediction"),i.a.createElement(m,{to:"/calculators/count_words",description:"Easy words counter. Copy paste your text, you will see how many words are there."},"Words counter")))}},158:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(156),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(159),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},162:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(52),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},163:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(158),l=a(157),u=a.n(l),s=a(164),d=a.n(s),m=a(165),p=a.n(m),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.withFooter,n=void 0===a||a;return i.a.createElement("div",{className:u()(d.a.root_panel)},i.a.createElement("div",{className:d.a.grid_menu},i.a.createElement("div",{className:d.a.menu},i.a.createElement("img",{className:d.a.menu_item,src:p.a,alt:"menu logo"}),i.a.createElement("div",{className:d.a.menu_item},i.a.createElement(c.Link,{to:"/"},"Home")),i.a.createElement("div",{className:d.a.menu_item},i.a.createElement(c.Link,{to:"/calculators"},"Calculators")))),i.a.createElement("div",{className:d.a.body_content},i.a.createElement("div",{className:d.a.inside_content},i.a.createElement("div",null,t),n&&i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Martin Schnurer"))))},t}(i.a.Component);t.a=y},164:function(e,t,a){e.exports={root_panel:"layout-module--root_panel--1Gi9h",dark_mode:"layout-module--dark_mode--1pyng",light_mode:"layout-module--light_mode--YP1BH",grid_menu:"layout-module--grid_menu--rxr8d",menu:"layout-module--menu--sgu2b",menu_item:"layout-module--menu_item--2I7Y0",theme_setter:"layout-module--theme_setter--26o3A",body_content:"layout-module--body_content--3585O",inside_content:"layout-module--inside_content--2SmLr"}},165:function(e,t,a){e.exports=a.p+"static/crab-cancer-symbol-df2517047b31779b6dc2798a803afcd4.png"},166:function(e,t,a){"use strict";var n=a(167),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(174),u=a.n(l),s=a(158);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title;return o.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Very boring blog",description:".",author:"Martin Schnürer"}}}}},301:function(e,t,a){e.exports={fw:"index-module--fw--2RC8t",calculator_grid:"index-module--calculator_grid--1e6st",calculator_item:"index-module--calculator_item--2rNoK",calculatorItem:"index-module--calculator-item--3K3SD"}}}]);
//# sourceMappingURL=component---src-pages-calculators-index-js-d3e7238cedd473c39f8e.js.map