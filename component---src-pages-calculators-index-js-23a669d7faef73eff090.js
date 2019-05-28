(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{157:function(e,t,a){"use strict";a.r(t);var n=a(76),r=a.n(n),o=a(0),c=a.n(o),i=a(176),l=a(171),s=a(178),u=a(158),m=a.n(u),d=function(e){var t=e.children,a=e.description,n=r()(e,["children","description"]);return c.a.createElement("div",{className:m.a.calculator_item},c.a.createElement(l.a,{to:n.to,className:m.a.fw},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h3",null,t),c.a.createElement("hr",null)),a&&c.a.createElement("div",null,c.a.createElement("p",null,a)))))};t.default=function(e){var t=e.location;return c.a.createElement(i.a,{location:t,title:"Calculators",withFooter:!1},c.a.createElement(s.a,{title:"Calculators.",description:"List of all calculators I have created over time."}),c.a.createElement("div",{className:m.a.calculator_grid},c.a.createElement(d,{to:"/calculators/money_prediction",description:"Do you know how much money will you have in the future? Let's look on that and compute that."},"Future money"),c.a.createElement(d,{to:"/calculators/count_words",description:"Easy words counter. Copy paste your text, you will see how many words are there."},"Words Counter"),c.a.createElement(d,{to:"/calculators/inflation",description:"This calculator computes how the inflation impacts the value of your money."},"Money inflation")))}},171:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(33),l=a.n(i);a.d(t,"a",function(){return l.a});a(172);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},172:function(e,t,a){var n;e.exports=(n=a(175))&&n.default||n},175:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},176:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),c=a.n(o),i=a(171),l=a(170),s=a.n(l),u=a(150),m=a.n(u),d=a(177),p=a.n(d),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.withFooter,n=void 0===a||a;return c.a.createElement("div",{className:s()(m.a.root_panel)},c.a.createElement("div",{className:m.a.grid_menu},c.a.createElement("div",{className:m.a.menu},c.a.createElement("img",{className:m.a.menu_item,src:p.a,alt:"menu logo"}),c.a.createElement("div",{className:m.a.menu_item},c.a.createElement(i.a,{to:"/"},"Home")),c.a.createElement("div",{className:m.a.menu_item},c.a.createElement(i.a,{to:"/calculators"},"Calculators")))),c.a.createElement("div",{className:m.a.body_content},c.a.createElement("div",{className:m.a.inside_content},c.a.createElement("div",null,t),n&&c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Martin Schnurer"))))},t}(c.a.Component);t.a=f},177:function(e,t,a){e.exports=a.p+"static/crab-cancer-symbol-df2517047b31779b6dc2798a803afcd4.png"},178:function(e,t,a){"use strict";var n=a(179),r=a(0),o=a.n(r),c=a(4),i=a.n(c),l=a(185),s=a.n(l),u=a(171);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title;return o.a.createElement(u.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=m;var d="1025518380"},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Martin Schnürer",description:".",author:"Martin Schnürer"}}}}}}]);
//# sourceMappingURL=component---src-pages-calculators-index-js-23a669d7faef73eff090.js.map