(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{249:function(e,t,a){"use strict";a.r(t);a(15);var n=a(0),l=a.n(n),r=a(230),o=a(232),c=a(231);var u={title:"Compounding over time",description:""},m=function(e,t){void 0===t&&(t=2);var a=Math.pow(10,t);return Math.round(e*a)/a},i=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).changeMonthlyInput=function(e){var a=e.target.value;a=a.replace(t.commaRegex,"."),t.setState({monthlyInput:a})},t.changeAverageYield=function(e){var a=e.target.value;a=a.replace(t.commaRegex,"."),t.setState({averageYield:a})},t.computeYear=function(e){var a=t.state,n=a.averageYield,l=a.monthlyInput,r=(+n+100)/100,o=e[e.length-1],c=12*l,u=(o.balance+c)*r,i=o.myTotalInput+c,p=u-i;return e.push({balance:m(u),myTotalInput:m(i),grow:m(p)}),e},t.computeYield=function(){for(var e=t.state,a=e.averageYield,n=e.monthlyInput,l=(+a+100)/100,r=[{balance:m(12*n*l),myTotalInput:m(12*n),grow:m(12*n*l-12*n)}],o=1;o<30;o+=1)r=t.computeYear(r);return r},t.percentFrom=function(e,t){return m(100*e/t)},t.commaRegex=/,/g,t.state={monthlyInput:100,averageYield:5},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.state,a=t.averageYield,n=t.monthlyInput;return l.a.createElement(r.a,null,l.a.createElement(o.a,u),l.a.createElement(c.b,null,l.a.createElement("div",{className:"topbottom_margined"},"Average yield in %",l.a.createElement("input",{className:"margin-left",onChange:this.changeAverageYield,value:a})),l.a.createElement("div",null,"Monthly contribution"," ",l.a.createElement("input",{className:"margin-left",onChange:this.changeMonthlyInput,value:n})),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Value"),l.a.createElement("th",null,"My total contribution"),l.a.createElement("th",null,"Total Grow"))),this.computeYield().map((function(t,a){return l.a.createElement("tr",null,l.a.createElement("td",null,a," ","Year"),l.a.createElement("td",null,t.balance," ","€"),l.a.createElement("td",null,t.myTotalInput," ","€"," ",l.a.createElement("em",null,"(",e.percentFrom(t.myTotalInput,t.balance)," ","%)")),l.a.createElement("td",null,t.grow," ","€"," ",l.a.createElement("em",null,"(",e.percentFrom(t.grow,t.balance)," ","%)")))})))))},n}(l.a.Component);t.default=i}}]);
//# sourceMappingURL=component---src-pages-calculators-stocksinvest-index-jsx-088c0ac8f5ce50a501c4.js.map