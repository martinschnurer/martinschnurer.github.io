(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return v});a(26);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),s=a(56),c=a(270),l=a(195),m=a(200),u=a(227),d=a(171),p=a.n(d),f=a(197),g=function(e){var t=e.data.markdownRemark,a=e.data.site.siteMetadata.title,n=e.pageContext,i=n.previous,o=n.next,d=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{location:d,title:a},r.a.createElement(f.a,null,r.a.createElement("div",{className:p.a.blog_post},r.a.createElement(m.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-.5)})},t.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),r.a.createElement("div",{className:p.a.bottomNavigation},r.a.createElement("div",{className:p.a.navigationLeft},i&&r.a.createElement(s.Link,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),r.a.createElement("div",{className:p.a.navigationRight},o&&r.a.createElement(s.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))),r.a.createElement(f.a,{style:{marginTop:15,marginBottom:25}},r.a.createElement("div",{className:p.a.discuss_box},r.a.createElement(c.DiscussionEmbed,{shortname:"martinschnurer-net-1",config:{identifier:t.id,title:t.frontmatter.title}})))))};g.propTypes={location:o.a.objectOf(o.a.any).isRequired,data:o.a.objectOf(o.a.any).isRequired,pageContext:o.a.objectOf(o.a.any).isRequired},t.default=g;var v="1367984554"},194:function(e,t){e.exports={categories:[{name:"personal",label:"Personal",link:"/category/personal"},{name:"finance",label:"Finance",link:"/category/finance"},{name:"programming",label:"Programming",link:"/category/programming"}]}},195:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),o=a.n(i),s=a(192),c=a.n(s),l=a(3),m=a.n(l),u=a(56),d=a(162),p=a.n(d),f=(a(199),a(202),a(194)),g=a.n(f),v=a(163),y=a.n(v),h=function(e){function t(){var t;return(t=e.call(this)||this).state={opened:!1,hoveredOn:null},t}return r()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement("div",{onMouseEnter:function(){return e.setState({opened:!0})},onMouseLeave:function(){return e.setState({opened:!1})},className:c()(y.a.menu_item,y.a.categories)},o.a.createElement("span",{onClick:function(t){return e.setState({opened:!t.opened})}},"Categories"),this.state.opened&&o.a.createElement("div",{className:y.a.dropdown},g.a.categories.map(function(t){return o.a.createElement("div",{key:t.name,className:y.a.itemWrapper},o.a.createElement("div",{onMouseEnter:function(){return e.setState({hoveredOn:t.name})},className:y.a.item},o.a.createElement(u.Link,{to:t.link,className:y.a.label},t.label)))})))},t}(o.a.PureComponent),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.styles;return o.a.createElement("div",{className:c()(p.a.root_panel,a),styles:n},o.a.createElement("div",{className:p.a.grid_menu},o.a.createElement("div",{className:c()(p.a.menu,p.a.left_menu)},o.a.createElement("div",{className:p.a.menu_item},o.a.createElement(u.Link,{to:"/",activeClassName:p.a.active},"Blog")),o.a.createElement("div",{className:p.a.menu_item},o.a.createElement(u.Link,{to:"/calculators",activeClassName:p.a.active},"Tools")),o.a.createElement(h,null)),o.a.createElement("div",{className:c()(p.a.menu,p.a.right_menu)},o.a.createElement("div",{className:p.a.menu_item},o.a.createElement(u.Link,{to:"/portfolio",activeClassName:p.a.active},"Portfolio")),o.a.createElement("div",{className:p.a.menu_item},o.a.createElement(u.Link,{to:"/cv",activeClassName:p.a.active},"CV")))),t)},t}(o.a.PureComponent);E.propTypes={children:m.a.node.isRequired,className:m.a.string,styles:m.a.objectOf(m.a.oneOfType([m.a.number,m.a.string]))},E.defaultProps={className:"",styles:{}};t.a=E},197:function(e,t,a){"use strict";a.d(t,"a",function(){return p});a(26);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),s=a(3),c=a.n(s),l=a(192),m=a.n(l),u=a(164),d=a.n(u),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.style,r=void 0===n?{}:n;return o.a.createElement("div",{className:m()(d.a.body_content,a),style:Object.assign({},r)},o.a.createElement("div",{className:d.a.inside_content},t))},t}(o.a.PureComponent);p.propTypes={children:c.a.node.isRequired,className:c.a.string,style:c.a.objectOf(c.a.oneOfType([c.a.string,c.a.number]))},p.defaultProps={style:{},className:""},t.b=p},200:function(e,t,a){"use strict";var n=a(201),r=a(0),i=a.n(r),o=a(3),s=a.n(o),c=a(206),l=a.n(c),m=a(56);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(m.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | Blog",meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var d="1025518380"},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Martin Schnürer",description:".",author:"Martin Schnürer"}}}}},227:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var n=a(280),r=a.n(n),i=a(281),o=a.n(i);o.a.overrideThemeStyles=function(){return{html:{width:"100%"},"h1,h2,h3,h4,h5":{fontFamily:["Roboto","sans-serif"].join(","),fontWeight:100,marginTop:s.rhythm(1),breakWords:"break-all"},"a.gatsby-resp-image-link":{boxShadow:"none"},li:{marginBottom:"5px",marginLeft:"15px"},".text-center":{textAlign:"center"}}},delete o.a.googleFonts;var s=new r.a(o.a);var c=s.rhythm,l=s.scale}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-d9fbbb146071d9a145c4.js.map