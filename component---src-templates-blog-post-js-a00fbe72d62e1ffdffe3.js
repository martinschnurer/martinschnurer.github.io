(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});a(33);var n=a(7),r=a.n(n),i=a(0),A=a.n(i),o=a(158),c=a(193),l=a(163),s=a(166),u=a(180),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return console.log(e),A.a.createElement(l.a,{location:this.props.location,title:t},A.a.createElement(s.a,{title:e.frontmatter.title,description:e.excerpt}),A.a.createElement("h1",null,e.frontmatter.title),A.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-.5)})},e.frontmatter.date),A.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),A.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),A.a.createElement(c.a,null),A.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},A.a.createElement("li",null,n&&A.a.createElement(o.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),A.a.createElement("li",null,r&&A.a.createElement(o.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},t}(A.a.Component);t.default=d;var m="2761936148"},158:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),A=a.n(i),o=a(156),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(159),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:A.a.object,query:A.a.string.isRequired,render:A.a.func,children:A.a.func}},159:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},162:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),A=a.n(i),o=a(52),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:A.a.shape({pathname:A.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),A=a.n(i),o=a(158),c=a(157),l=a.n(c),s=a(164),u=a.n(s),d=a(165),m=a.n(d),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.withFooter,n=void 0===a||a;return A.a.createElement("div",{className:l()(u.a.root_panel)},A.a.createElement("div",{className:u.a.grid_menu},A.a.createElement("div",{className:u.a.menu},A.a.createElement("img",{className:u.a.menu_item,src:m.a,alt:"menu logo"}),A.a.createElement("div",{className:u.a.menu_item},A.a.createElement(o.Link,{to:"/"},"Home")),A.a.createElement("div",{className:u.a.menu_item},A.a.createElement(o.Link,{to:"/calculators"},"Calculators")))),A.a.createElement("div",{className:u.a.body_content},A.a.createElement("div",{className:u.a.inside_content},A.a.createElement("div",null,t),n&&A.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Martin Schnurer"))))},t}(A.a.Component);t.a=p},164:function(e,t,a){e.exports={root_panel:"layout-module--root_panel--1Gi9h",dark_mode:"layout-module--dark_mode--1pyng",light_mode:"layout-module--light_mode--YP1BH",grid_menu:"layout-module--grid_menu--rxr8d",menu:"layout-module--menu--sgu2b",menu_item:"layout-module--menu_item--2I7Y0",theme_setter:"layout-module--theme_setter--26o3A",body_content:"layout-module--body_content--3585O",inside_content:"layout-module--inside_content--2SmLr"}},165:function(e,t,a){e.exports=a.p+"static/crab-cancer-symbol-df2517047b31779b6dc2798a803afcd4.png"},166:function(e,t,a){"use strict";var n=a(167),r=a(0),i=a.n(r),A=a(4),o=a.n(A),c=a(174),l=a.n(c),s=a(158);function u(e){var t=e.description,a=e.lang,r=e.meta,A=e.keywords,o=e.title;return i.a.createElement(s.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(A.length>0?{name:"keywords",content:A.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var d="1025518380"},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Very boring blog",description:".",author:"Martin Schnürer"}}}}},180:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var n=a(218),r=a.n(n),i=a(219),A=a.n(i);A.a.overrideThemeStyles=function(){return{html:{width:"100%"},"h1,h2,h3,h4,h5":{fontFamily:["Roboto","sans-serif"].join(","),fontWeight:100,marginTop:o.rhythm(1),breakWords:"break-all"},"a.gatsby-resp-image-link":{boxShadow:"none"},li:{marginBottom:5},".text-center":{textAlign:"center"}}},delete A.a.googleFonts;var o=new r.a(A.a);var c=o.rhythm,l=o.scale},193:function(e,t,a){"use strict";a(216);var n=a(194),r=a(0),i=a.n(r),A=a(158),o=a(217),c=a.n(o),l=a(180),s=a(195),u=a.n(s),d="4007731267";t.a=function(e){var t=e.showWrittenBy,a=void 0===t||t;return i.a.createElement(A.StaticQuery,{query:d,render:function(e){var t=e.site.siteMetadata.author;return i.a.createElement("div",{className:u.a.bio_container,style:{marginBottom:Object(l.a)(1.5)}},i.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(l.a)(.5)},className:u.a.bio_image_style,imgStyle:{borderRadius:"50%"}}),i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},a?"Written by":null," ",i.a.createElement("b",{style:{marginLeft:10}}," ",t),"."))},data:n})}},194:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAaed882iwXFpYygRQ//EAB4QAAIBBAMBAAAAAAAAAAAAAAECAAMEISIRFDEz/9oACAEBAAEFAvItam5IjDXheyzZunwxdmS71rfZoZ//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAeEAABBAEFAAAAAAAAAAAAAAABAAIQESEDIzFhgf/aAAgBAQAGPwJUHZlthoMHTHqBPIW4M9J0/wD/xAAcEAEAAgIDAQAAAAAAAAAAAAABACERMUFRYYH/2gAIAQEAAT8hUCtBMBz07g50TIh17B8Qrp2zj8SgXKWjkekPkd4T9ZsxXP/aAAwDAQACAAMAAAAQwAw8/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHhABAAMAAgIDAAAAAAAAAAAAAQARMSFBcYFRYZH/2gAIAQEAAT8QasBavRBrhiE9L2bdj9SulILwVcVQBPFpRVb3LUFcNic/ksowPSG1GAVgdxMfMGADcKE8fMUC8WhBPcTvP//Z",width:50,height:50,src:"/static/a51e7227677eaa735bced13dee7df263/d2d31/profile-pic.jpg",srcSet:"/static/a51e7227677eaa735bced13dee7df263/d2d31/profile-pic.jpg 1x,\n/static/a51e7227677eaa735bced13dee7df263/0b804/profile-pic.jpg 1.5x,\n/static/a51e7227677eaa735bced13dee7df263/753c3/profile-pic.jpg 2x,\n/static/a51e7227677eaa735bced13dee7df263/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Martin Schnürer",social:{twitter:"MartinSchnurer"}}}}}},195:function(e,t,a){e.exports={bio_container:"bio-module--bio_container--2YZ3J",bio_image_style:"bio-module--bio_image_style--1-bQL"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a00fbe72d62e1ffdffe3.js.map