(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{GsBC:function(e,t,a){"use strict";a.r(t);a("pJf4"),a("gu/5"),a("eoYm");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("9Dj+"),s=a("oMEu"),c=a("iWCf"),i=a.n(c);t.default=function(e){var t=e.pageContext,a=t.posts,n=t.category,c=a.filter((function(e){return e.node.frontmatter.categories.includes(n.name)}));return r.a.createElement(o.a,null,r.a.createElement(s.b,null,r.a.createElement("div",{className:i.a.inside},r.a.createElement("h2",{className:"text-2xl"},"Category: ",n.label),r.a.createElement("hr",{className:"my-5"}),c.map((function(e){return r.a.createElement("div",{key:e.node.fields.slug,className:i.a.post+" p-5 border hover:border-transparent hover:shadow-xl cursor-pointer transform transition-all duration-300 rounded-xl"},r.a.createElement("h3",{className:i.a.title},r.a.createElement(l.Link,{style:{boxShadow:"none"},to:e.node.fields.slug},e.node.frontmatter.title||e.node.fields.slug)),r.a.createElement("small",null,e.node.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.node.excerpt}}))})),0===c.length&&r.a.createElement("h2",{style:{color:"#aaa"}},"Yups...Nothing in here"))))}}}]);
//# sourceMappingURL=component---src-templates-category-tsx-607ce213d831b886e7ec.js.map