(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(165),c=a(162),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return i.a.createElement(l.a,{location:this.props.location,title:e},i.a.createElement(c.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(i.a.Component);t.default=u;var s="1097489062"},157:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(154),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(159),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},160:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return u});var n=a(178),r=a.n(n),o=a(179),i=a.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var l=new r.a(i.a);var c=l.rhythm,u=l.scale},162:function(e,t,a){"use strict";var n=a(168),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(180),u=a.n(c),s=a(157);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},165:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=(a(32),a(0)),i=a.n(o),l=a(157),c=a(155),u=a.n(c),s=a(489),d=a(160),m=a(167),p=a.n(m),h=(a(161),function(e){e.fill;var t=e.onClick;return i.a.createElement("div",{style:{cursor:"pointer"},onClick:t},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),i.a.createElement("path",{fill:"white",d:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"})))}),f=function(e){e.fill;var t=e.onClick;return i.a.createElement("div",{style:{cursor:"pointer"}},i.a.createElement("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"}),i.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})))},g=function(e){var t=e.darkMode,a=e.toggle;return t?i.a.createElement(h,{onClick:a,fill:"white"}):i.a.createElement(f,{onClick:a})},y=function(e){e.pathname;var t=e.title;return i.a.createElement("h1",{style:Object.assign({},Object(d.b)(1.4),{marginBottom:Object(d.a)(1.5)})},i.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},t))},v=function(e){function t(){var t;return(t=e.call(this)||this).toggleMode=function(){return t.setState({darkMode:!t.state.darkMode})},t.state={darkMode:!1},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children,n=e.withFooter,r=void 0===n||n,o=this.state.darkMode?"dark_mode":"light_mode";return i.a.createElement(s.a,{fluid:!0,className:u()(p.a.root_panel,p.a[o])},i.a.createElement(s.a,{className:p.a.menu,style:{display:"flex"}},i.a.createElement("div",{style:{display:"flex",flexGrow:1}},i.a.createElement("div",{className:p.a.menu_item},i.a.createElement(l.Link,{to:"/"},"Home")),i.a.createElement("div",{className:p.a.menu_item},i.a.createElement(l.Link,{to:"/calculators"},"Calculators"))),i.a.createElement("div",{className:p.a.theme_setter},i.a.createElement(g,{darkMode:this.state.darkMode,toggle:this.toggleMode}))),i.a.createElement(s.a,{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(d.a)(24),paddingLeft:Object(d.a)(1.5)+" "+Object(d.a)(.75),paddingRight:Object(d.a)(1.5)+" "+Object(d.a)(.75),paddingTop:t?15:30}},t&&i.a.createElement("header",null,i.a.createElement(y,{title:t})),a,r&&i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Martin Schnurer")))},t}(i.a.Component);t.a=v},166:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(52),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},167:function(e,t,a){e.exports={root_panel:"layout-module--root_panel--1Gi9h",dark_mode:"layout-module--dark_mode--1pyng",light_mode:"layout-module--light_mode--YP1BH",menu:"layout-module--menu--sgu2b",menu_item:"layout-module--menu_item--2I7Y0",theme_setter:"layout-module--theme_setter--26o3A"}},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Very boring blog",description:".",author:"Martin Schnürer"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-377979ba74346abacc02.js.map