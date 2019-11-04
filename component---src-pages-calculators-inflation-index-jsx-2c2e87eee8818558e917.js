(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(225),u=a(227),i=a(241),o=a.n(i),c=a(226),s=a(382);var m=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).changeInputValue=function(e){return t.setState({inputValue:e.target.value})},t.changeInflationRate=function(e){return t.setState({inflationRate:e.target.value})},t.changeFutureYear=function(e){return t.setState({futureYear:e.target.value})},t.format=function(e){return Math.round(100*e)/100},t.computeFutureValue=function(){var e=t.state,a=e.inputValue,n=e.inflationRate,r=e.futureYear,l=(new Date).getFullYear(),u=1-n/100;return t.format(a*Math.pow(u,r-l))},t.getErrorMessage=function(){var e=t.state,a=e.inputValue,n=e.inflationRate,r=e.futureYear,l=(new Date).getFullYear();return r<=l?"Write down future year, (more than "+l+")":a?""===n?"Fill in inflation rate, for example 2% (Average is 1-2 %)":n<0?"Inflation rate must be more than 0%":null:"Fill in input value"},t.state={inputValue:1e3,inflationRate:3,futureYear:(new Date).getFullYear()+5},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.state,t=e.inputValue,a=e.inflationRate,n=e.futureYear,i=(new Date).getFullYear(),m=this.getErrorMessage();return r.a.createElement(l.a,null,r.a.createElement(u.a,{title:"Inflation money calculator",description:"This calculator computes how much your money will be worth in the future.",keywords:["inflation","money","calculator","investing"]}),r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"topbottom_margined"},"Inflation is the yearly rate of decreasing monetary values. To see average inflation rates over the years, take a look at this"," ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.usinflationcalculator.com/inflation/historical-inflation-rates"},"page")),r.a.createElement("div",{className:o.a.input_panel},r.a.createElement("div",{className:o.a.input_div},r.a.createElement("span",null,"Value in "+i+":"),r.a.createElement("div",null,r.a.createElement(s.a,{value:t,onChange:this.changeInputValue}))),r.a.createElement("div",{className:o.a.input_div},r.a.createElement("span",null,"Inflation Rate"),r.a.createElement("div",null,r.a.createElement(s.a,{value:a,onChange:this.changeInflationRate}),"%")),r.a.createElement("div",{className:o.a.input_div},r.a.createElement("span",null,"Future year"),r.a.createElement("div",null,r.a.createElement(s.a,{value:n,onChange:this.changeFutureYear,placeholder:"2020"})))),m?r.a.createElement("div",{className:"error"},m):r.a.createElement("h2",null,"Your "+t+"€ will be worth ",r.a.createElement("b",null,this.computeFutureValue(),"€")," in "+n))))},n}(r.a.PureComponent);t.default=m},382:function(e,t,a){"use strict";a(21),a(15),a(8),a(23),a(16);var n=a(0),r=a.n(n),l=a(26),u=a.n(l),i=a(228),o=a.n(i);var c=function(e){var t=e.className,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["className"]);return r.a.createElement("input",Object.assign({className:u()(o.a.input,t)},a))};c.defaultProps={className:""},t.a=c}}]);
//# sourceMappingURL=component---src-pages-calculators-inflation-index-jsx-2c2e87eee8818558e917.js.map