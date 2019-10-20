(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{172:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var n=a(8),r=a.n(n),i=a(0),o=a.n(i),s=a(3),c=a.n(s),l=a(194),m=a(196),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.location,n=t.site.siteMetadata.title;return o.a.createElement(l.a,{location:a,title:n},o.a.createElement(m.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.PureComponent);u.propTypes={location:c.a.objectOf(c.a.any).isRequired,data:c.a.exact({site:c.a.exact({siteMetadata:c.a.exact({title:c.a.string})})}).isRequired},t.default=u;var p="1097489062"},192:function(e,t){e.exports={categories:[{name:"personal",label:"Personal",link:"/category/personal",subcategories:[]},{name:"finance",label:"Finance",link:"/category/finance",subcategories:[{name:"investing",label:"Investing",link:"/category/finance/investing"},{name:"economy",label:"Economy",link:"/category/finance/economy"}]},{name:"programming",label:"Programming",link:"/category/programming",subcategories:[{name:"javascript",label:"Javascript",link:"/category/programming/javascript"},{name:"react",label:"React",link:"/category/programming/react"},{name:"modelling",label:"Modelling",link:"/category/programming/modelling"}]}]}},194:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),o=a.n(i),s=a(190),c=a.n(s),l=a(3),m=a.n(l),u=a(56),p=a(162),d=a.n(p),g=(a(199),a(200),a(192)),v=a.n(g),y=a(163),f=a.n(y),E=function(e){var t=e.link,a=e.children;return o.a.createElement("div",{className:f.a.item},o.a.createElement(u.Link,{to:t},a))},h=function(e){function t(){var t;return(t=e.call(this)||this).state={opened:!1,hoveredOn:null},t}return r()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement("div",{onMouseEnter:function(){return e.setState({opened:!0})},onMouseLeave:function(){return e.setState({opened:!1})},className:c()(f.a.menu_item,f.a.categories)},o.a.createElement("span",{onClick:function(t){return e.setState({opened:!t.opened})}},"Categories"),this.state.opened&&o.a.createElement("div",{className:f.a.dropdown},v.a.categories.map(function(t){var a,n=t.subcategories.length>0;return o.a.createElement("div",{key:t.name,className:f.a.itemWrapper},o.a.createElement("div",{onMouseEnter:function(){return e.setState({hoveredOn:t.name})},className:f.a.item},o.a.createElement(u.Link,{to:t.link,className:f.a.label},t.label),n&&o.a.createElement("div",null,">")),o.a.createElement("div",{className:c()(f.a.subcategoryPanel,(a={},a[f.a.open]=e.state.hoveredOn===t.name,a))},t.subcategories.map(function(e,t){return o.a.createElement(E,{link:e.link,key:e.name||t},e.label)})))})))},t}(o.a.PureComponent),k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.styles;return o.a.createElement("div",{className:c()(d.a.root_panel,a),styles:n},o.a.createElement("div",{className:d.a.grid_menu},o.a.createElement("div",{className:c()(d.a.menu,d.a.left_menu)},o.a.createElement("div",{className:d.a.menu_item},o.a.createElement(u.Link,{to:"/",activeClassName:d.a.active},"Blog")),o.a.createElement("div",{className:d.a.menu_item},o.a.createElement(u.Link,{to:"/calculators",activeClassName:d.a.active},"Tools")),o.a.createElement(h,null)),o.a.createElement("div",{className:c()(d.a.menu,d.a.right_menu)},o.a.createElement("div",{className:d.a.menu_item},o.a.createElement(u.Link,{to:"/cv",activeClassName:d.a.active},"CV")))),t)},t}(o.a.PureComponent);k.propTypes={children:m.a.node.isRequired,className:m.a.string,styles:m.a.objectOf(m.a.oneOfType([m.a.number,m.a.string]))},k.defaultProps={className:"",styles:{}};t.a=k},196:function(e,t,a){"use strict";var n=a(197),r=a(0),i=a.n(r),o=a(3),s=a.n(o),c=a(203),l=a.n(c),m=a(56);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(m.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | Blog",meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var p="1025518380"},197:function(e){e.exports={data:{site:{siteMetadata:{title:"Martin Schnürer",description:".",author:"Martin Schnürer"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-jsx-82111605d460d221696b.js.map