(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{171:function(e,t,a){"use strict";a.r(t);a(38);var n=a(7),r=a.n(n),l=a(0),c=a.n(l),i=a(189),o=a(191),s=a(193),u={title:"Compounding over time",description:""},m=function(e,t){void 0===t&&(t=2);var a=Math.pow(10,t);return Math.round(e*a)/a},d=function(e){function t(){var t;return(t=e.call(this)||this).changeMonthlyInput=function(e){var a=e.target.value;a=a.replace(t.commaRegex,"."),t.setState({monthlyInput:a})},t.changeAverageYield=function(e){var a=e.target.value;a=a.replace(t.commaRegex,"."),t.setState({averageYield:a})},t.computeYear=function(e){var a=t.state,n=a.averageYield,r=a.monthlyInput,l=(+n+100)/100,c=e[e.length-1],i=12*r,o=(c.balance+i)*l,s=c.myTotalInput+i,u=o-s;return e.push({balance:m(o),myTotalInput:m(s),grow:m(u)}),e},t.computeYield=function(){for(var e=t.state,a=e.averageYield,n=e.monthlyInput,r=(+a+100)/100,l=[{balance:m(12*n*r),myTotalInput:m(12*n),grow:m(12*n*r-12*n)}],c=1;c<30;c+=1)l=t.computeYear(l);return l},t.percentFrom=function(e,t){return m(100*e/t)},t.commaRegex=/,/g,t.state={monthlyInput:100,averageYield:5},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state,a=t.averageYield,n=t.monthlyInput;return c.a.createElement(i.a,null,c.a.createElement(o.a,u),c.a.createElement(s.b,null,c.a.createElement("div",{className:"topbottom_margined"},"Average yield in %",c.a.createElement("input",{className:"margin-left",onChange:this.changeAverageYield,value:a})),c.a.createElement("div",null,"Monthly contribution"," ",c.a.createElement("input",{className:"margin-left",onChange:this.changeMonthlyInput,value:n})),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Year"),c.a.createElement("th",null,"Value"),c.a.createElement("th",null,"My total contribution"),c.a.createElement("th",null,"Total Grow"))),this.computeYield().map(function(t,a){return c.a.createElement("tr",null,c.a.createElement("td",null,a," ","Year"),c.a.createElement("td",null,t.balance," ","€"),c.a.createElement("td",null,t.myTotalInput," ","€"," ",c.a.createElement("em",null,"(",e.percentFrom(t.myTotalInput,t.balance)," ","%)")),c.a.createElement("td",null,t.grow," ","€"," ",c.a.createElement("em",null,"(",e.percentFrom(t.grow,t.balance)," ","%)")))}))))},t}(c.a.Component);t.default=d},184:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(33),o=a.n(i);a.d(t,"a",function(){return o.a});a(186);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},186:function(e,t,a){var n;e.exports=(n=a(188))&&n.default||n},188:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},189:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),i=a(183),o=a.n(i),s=a(4),u=a.n(s),m=a(184),d=a(156),p=a.n(d),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.styles;return c.a.createElement("div",{className:o()(p.a.root_panel,a),styles:n},c.a.createElement("div",{className:p.a.grid_menu},c.a.createElement("div",{className:o()(p.a.menu,p.a.left_menu)},c.a.createElement("div",{className:p.a.menu_item},c.a.createElement(m.a,{to:"/",activeClassName:p.a.active},"Home")),c.a.createElement("div",{className:p.a.menu_item},c.a.createElement(m.a,{to:"/calculators",activeClassName:p.a.active},"Tools"))),c.a.createElement("div",{className:o()(p.a.menu,p.a.right_menu)},c.a.createElement("div",{className:p.a.menu_item},c.a.createElement(m.a,{to:"/cv",activeClassName:p.a.active},"CV")))),t)},t}(c.a.PureComponent);g.propTypes={children:u.a.node.isRequired,className:u.a.string,styles:u.a.objectOf(u.a.oneOfType([u.a.number,u.a.string]))},g.defaultProps={className:"",styles:{}},t.a=g},191:function(e,t,a){"use strict";var n=a(192),r=a(0),l=a.n(r),c=a(4),i=a.n(c),o=a(199),s=a.n(o),u=a(184);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title;return l.a.createElement(u.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | Blog",meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=m;var d="1025518380"},192:function(e){e.exports={data:{site:{siteMetadata:{title:"Martin Schnürer",description:".",author:"Martin Schnürer"}}}}},193:function(e,t,a){"use strict";a.d(t,"a",function(){return p});a(34);var n=a(7),r=a.n(n),l=a(0),c=a.n(l),i=a(4),o=a.n(i),s=a(183),u=a.n(s),m=a(157),d=a.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.style,r=void 0===n?{}:n;return c.a.createElement("div",{className:u()(d.a.body_content,a),style:Object.assign({},r)},c.a.createElement("div",{className:d.a.inside_content},t))},t}(c.a.PureComponent);p.propTypes={children:o.a.node.isRequired,className:o.a.string,style:o.a.objectOf(o.a.oneOfType([o.a.string,o.a.number]))},p.defaultProps={style:{},className:""},t.b=p}}]);
//# sourceMappingURL=component---src-pages-calculators-stocksinvest-index-jsx-e92eee5d495aa6194b37.js.map