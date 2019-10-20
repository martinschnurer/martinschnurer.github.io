(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{175:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),l=a(56),c=a(194),s=a(196),m=a(176),u=a.n(m),d=a(195),p=function(e){var t=e.children,a=e.description,n=e.to;return r.a.createElement("div",{className:u.a.calculator_item},r.a.createElement(l.Link,{to:n,className:u.a.fw},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,t),r.a.createElement("hr",null)),a&&r.a.createElement("div",null,r.a.createElement("p",null,a)))))};p.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,description:o.a.string.isRequired,to:o.a.string.isRequired};var y=function(e){var t=e.location;return r.a.createElement(c.a,{location:t,title:"Calculators",withFooter:!1},r.a.createElement(s.a,{title:"Calculators",description:"Useful apps and calculators. Word counter, money balance prediction, money inflation."}),r.a.createElement(d.a,null,r.a.createElement("div",{className:u.a.calculator_grid},r.a.createElement(p,{to:"/calculators/money_prediction",description:"Do you know how much money will you have in the future? Let's look on that and compute that."},"Future Money"),r.a.createElement(p,{to:"/calculators/count_words",description:"Easy words counter. Copy paste your text, you will see how many words are there."},"Words Counter"),r.a.createElement(p,{to:"/calculators/inflation",description:"This calculator computes how the inflation impacts the value of your money."},"Money Inflation"))))};y.propTypes={location:o.a.shape({}).isRequired},t.default=y},192:function(e,t){e.exports={categories:[{name:"personal",label:"Personal",link:"/category/personal",subcategories:[]},{name:"finance",label:"Finance",link:"/category/finance",subcategories:[{name:"investing",label:"Investing",link:"/category/finance/investing"},{name:"economy",label:"Economy",link:"/category/finance/economy"}]},{name:"programming",label:"Programming",link:"/category/programming",subcategories:[{name:"javascript",label:"Javascript",link:"/category/programming/javascript"},{name:"react",label:"React",link:"/category/programming/react"},{name:"modelling",label:"Modelling",link:"/category/programming/modelling"}]}]}},194:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),o=a.n(i),l=a(190),c=a.n(l),s=a(3),m=a.n(s),u=a(56),d=a(162),p=a.n(d),y=(a(199),a(200),a(192)),g=a.n(y),v=a(163),f=a.n(v),h=function(e){var t=e.link,a=e.children;return o.a.createElement("div",{className:f.a.item},o.a.createElement(u.Link,{to:t},a))},E=function(e){function t(){var t;return(t=e.call(this)||this).state={opened:!1,hoveredOn:null},t}return r()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement("div",{onMouseEnter:function(){return e.setState({opened:!0})},onMouseLeave:function(){return e.setState({opened:!1})},className:c()(f.a.menu_item,f.a.categories)},o.a.createElement("span",{onClick:function(t){return e.setState({opened:!t.opened})}},"Categories"),this.state.opened&&o.a.createElement("div",{className:f.a.dropdown},g.a.categories.map(function(t){var a,n=t.subcategories.length>0;return o.a.createElement("div",{key:t.name,className:f.a.itemWrapper},o.a.createElement("div",{onMouseEnter:function(){return e.setState({hoveredOn:t.name})},className:f.a.item},o.a.createElement(u.Link,{to:t.link,className:f.a.label},t.label),n&&o.a.createElement("div",null,">")),o.a.createElement("div",{className:c()(f.a.subcategoryPanel,(a={},a[f.a.open]=e.state.hoveredOn===t.name,a))},t.subcategories.map(function(e,t){return o.a.createElement(h,{link:e.link,key:e.name||t},e.label)})))})))},t}(o.a.PureComponent),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.styles;return o.a.createElement("div",{className:c()(p.a.root_panel,a),styles:n},o.a.createElement("div",{className:p.a.grid_menu},o.a.createElement("div",{className:c()(p.a.menu,p.a.left_menu)},o.a.createElement("div",{className:p.a.menu_item},o.a.createElement(u.Link,{to:"/",activeClassName:p.a.active},"Blog")),o.a.createElement("div",{className:p.a.menu_item},o.a.createElement(u.Link,{to:"/calculators",activeClassName:p.a.active},"Tools")),o.a.createElement(E,null)),o.a.createElement("div",{className:c()(p.a.menu,p.a.right_menu)},o.a.createElement("div",{className:p.a.menu_item},o.a.createElement(u.Link,{to:"/cv",activeClassName:p.a.active},"CV")))),t)},t}(o.a.PureComponent);b.propTypes={children:m.a.node.isRequired,className:m.a.string,styles:m.a.objectOf(m.a.oneOfType([m.a.number,m.a.string]))},b.defaultProps={className:"",styles:{}};t.a=b},195:function(e,t,a){"use strict";a.d(t,"a",function(){return p});a(26);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),l=a(3),c=a.n(l),s=a(190),m=a.n(s),u=a(164),d=a.n(u),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.style,r=void 0===n?{}:n;return o.a.createElement("div",{className:m()(d.a.body_content,a),style:Object.assign({},r)},o.a.createElement("div",{className:d.a.inside_content},t))},t}(o.a.PureComponent);p.propTypes={children:c.a.node.isRequired,className:c.a.string,style:c.a.objectOf(c.a.oneOfType([c.a.string,c.a.number]))},p.defaultProps={style:{},className:""},t.b=p},196:function(e,t,a){"use strict";var n=a(197),r=a(0),i=a.n(r),o=a(3),l=a.n(o),c=a(203),s=a.n(c),m=a(56);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(m.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | Blog",meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var d="1025518380"},197:function(e){e.exports={data:{site:{siteMetadata:{title:"Martin Schnürer",description:".",author:"Martin Schnürer"}}}}}}]);
//# sourceMappingURL=component---src-pages-calculators-index-jsx-ea3190172188301817b9.js.map