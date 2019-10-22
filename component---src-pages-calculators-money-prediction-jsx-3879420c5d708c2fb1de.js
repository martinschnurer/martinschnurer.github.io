(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{188:function(e,t,a){"use strict";a.r(t);a(241),a(242),a(80),a(58),a(38),a(218),a(26),a(282),a(283);var n=a(8),r=a.n(n),s=a(0),l=a.n(s),o=a(270),i=a(195),c=a(3),u=a.n(c),m={expensesYearlyGrowth:function(e,t,a){var n=e[t];return"number"!=typeof n?new Error("Prop name expensesYearlyGrowth should be number, got "+n):n<0||n>2?new Error("Prop should number between 0 and 2, got "+n):void 0},salaryYearlyGrowth:function(e,t,a){if(void 0===e[t])return null;var n=e[t];return"number"!=typeof n?new Error("Prop name expensesYearlyGrowth should be number, got "+n):n<0||n>2?new Error("Prop should number between 0 and 2, got "+n):void 0},monthSalary:u.a.number.isRequired,monthExpenses:u.a.number,theoreticalExpenses:function(e,t,a){if(void 0===e[t])return null;if("object"!=typeof e[t])throw new Error("prop "+t+" of component "+a+" should be an object");for(var n in e[t])if(e[t][n]<1500&&e[t][n]>9999)return new Error(a+" = Keys should be year");return null},startingPoint:u.a.number,time:u.a.number,changedSalary:function(e,t,a){if(void 0===e[t])return null;for(var n in e[t]){if(e[t][n]<1500&&e[t][n]>9999)return new Error(a+" = Keys should be years");if("number"!=typeof e[t][n])return new Error(a+" is object where keys are years and values are what salary it changed to. Salary needs to be a number")}return null},portfolioDiversity:u.a.shape({cash:u.a.shape({share:u.a.number.isRequired,growth:u.a.number.isRequired}).isRequired,bonds:u.a.shape({share:u.a.number.isRequired,growth:u.a.number.isRequired}).isRequired,stocks:u.a.shape({share:u.a.number.isRequired,growth:u.a.number.isRequired}).isRequired}),retirementRule:u.a.shape({inYear:u.a.number.isRequired,percents:u.a.number.isRequired})},d=a(269),h={top:5,right:30,left:20,bottom:5},p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).getPredictedData=function(e,a){void 0===a&&(a=10);for(var n=t.props,r=n.startingPoint,s=n.monthSalary,l=n.monthExpenses,o=n.theoreticalExpenses,i=n.salaryYearlyGrowth,c=n.expensesYearlyGrowth,u=n.changedSalary,m=n.portfolioDiversity,d=n.retirementRule,h=[{year:e,totalBalance:r,cash:r*(m.cash.share/100),bonds:r*(m.bonds.share/100),stocks:r*(m.stocks.share/100)}],p=s,y=l,g=e+1;g<e+a+1;g+=1){var v=h[h.length-1],E=null!==d&&g>=d.inYear,f=0;E||(f=12*p);var b=0,w=0;E||(b=f*(m.bonds.share/100),w=f*(m.stocks.share/100));var x=v.cash+f-b-w;x-=12*l,x+=v.stocks*m.stocks.dividends,o&&""+g in o&&(x-=o[g]),E&&(x+=v.stocks*d.percents);var N=(v.bonds+b)*(1+m.bonds.growth),k=(v.stocks+w+(E?-v.stocks*d.percents:0))*(1+m.stocks.growth);p*=i,p=Math.round(p),y*=c,y=Math.round(y),void 0!==u[g]&&(p=u[g]);var C=x+N+k;h.push({year:g,totalBalance:Math.floor(C),cash:Math.floor(x),stocks:Math.floor(k),bonds:Math.floor(N),expenseThisYear:12*y})}return h},t}return r()(t,e),t.prototype.render=function(){var e=this.props.time,t=(new Date).getFullYear(),a=this.getPredictedData(t,e);return l.a.createElement(d.g,{width:"100%",height:400},l.a.createElement(d.f,{data:a,margin:h},l.a.createElement(d.i,{dataKey:"year"}),l.a.createElement(d.j,null),l.a.createElement(d.c,{strokeDasharray:"3 3"}),l.a.createElement(d.h,null),l.a.createElement(d.d,null),l.a.createElement(d.e,{dot:!1,type:"monotone",dataKey:"totalBalance",stroke:"#8884d8"}),l.a.createElement(d.e,{dot:!1,type:"monotone",dataKey:"cash",stroke:"red"}),l.a.createElement(d.e,{dot:!1,type:"monotone",dataKey:"stocks",stroke:"orange"}),l.a.createElement(d.e,{dot:!1,type:"monotone",dataKey:"bonds",stroke:"blue"})))},t}(l.a.PureComponent);p.propTypes=m,p.defaultProps={expensesYearlyGrowth:0,salaryYearlyGrowth:0,monthExpenses:0,theoreticalExpenses:0,startingPoint:0,time:15,changedSalary:{},portfolioDiversity:{cash:{share:100,growth:0},bonds:{share:0,growth:.02},stocks:{share:0,growth:.05}},retirementRule:null};var y=p,g=a(200),v=a(197),E=a(221),f=a(179),b=a.n(f),w=a(79),x=a.n(w),N=a(192),k=a.n(N),C=a(180),S=a.n(C),O=function(e){var t=e.children,a=e.className,n=x()(e,["children","className"]);return l.a.createElement("button",Object.assign({type:"button",className:k()(S.a.button,a)},n),t)};O.propTypes={children:u.a.node.isRequired,className:u.a.string},O.defaultProps={className:""};var R=O,Y=a(166),j=a.n(Y);var M={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},P=s.createContext&&s.createContext(M),D=function(){return(D=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},T=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};function q(e){return function(t){return s.createElement(F,D({attr:D({},e.attr)},t),function e(t){return t&&t.map(function(t,a){return s.createElement(t.tag,D({key:a},t.attr),e(t.child))})}(e.child))}}function F(e){var t=function(t){var a,n=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var r=e.attr,l=e.title,o=T(e,["attr","title"]);return s.createElement("svg",D({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:a,style:D({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),l&&s.createElement("title",null,l),e.children)};return void 0!==P?s.createElement(P.Consumer,null,function(e){return t(e)}):t(M)}var G=function(e){return q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(e)};G.displayName="MdClear";var _=function(e){var t=e.onDelete,a=e.id,n=e.year,r=void 0===n?"":n,s=e.expense,o=e.onChange,i=e.minYear,c=e.maxYear;return l.a.createElement("div",{className:j.a.expected_expense},l.a.createElement("span",null,"In"),l.a.createElement("div",{className:j.a.rangerPanel},l.a.createElement("span",null,"year ",r),l.a.createElement(E.a,{onChange:function(e){return o(a,e.target.value,s)},value:r,type:"range",style:{width:"100%"},minstep:1,min:i,max:c,placeholder:"Year"})),l.a.createElement(E.a,{onChange:function(e){return o(a,r,e.target.value)},value:s,placeholder:"Expense"})," ",l.a.createElement("span",{className:j.a.clear_span,role:"presentation",onClick:function(){return t(a)}},l.a.createElement(G,null)))};_.propTypes={onDelete:u.a.func.isRequired,id:u.a.string.isRequired,year:u.a.oneOfType([u.a.string,u.a.number]).isRequired,expense:u.a.oneOfType([u.a.string,u.a.number]).isRequired,onChange:u.a.func.isRequired};var I=_,B=function(e){var t=e.onDelete,a=e.id,n=e.year,r=void 0===n?"":n,s=e.salary,o=e.onChange,i=e.minYear,c=e.maxYear;return l.a.createElement("div",{className:j.a.expected_expense},l.a.createElement("span",null,"In"),l.a.createElement("div",{className:j.a.rangerPanel},l.a.createElement("span",null,"year ",r),l.a.createElement(E.a,{onChange:function(e){return o(a,e.target.value,s)},value:r,type:"range",style:{width:"100%"},minstep:1,min:i,max:c,placeholder:"Year"})),l.a.createElement(E.a,{onChange:function(e){return o(a,r,e.target.value)},value:s,placeholder:"Salary"})," ",l.a.createElement("span",{className:j.a.clear_span,role:"presentation",onClick:function(){return t(a)}},l.a.createElement(G,null)))};B.propTypes={onDelete:u.a.func.isRequired,id:u.a.string.isRequired,year:u.a.oneOfType([u.a.string,u.a.number]).isRequired,salary:u.a.oneOfType([u.a.string,u.a.number]).isRequired,onChange:u.a.func.isRequired};var W=B,H=function(e){function t(){var t;return(t=e.call(this)||this).changeMonthlySalary=function(e){return t.setValueWithCheck("monthlySalary",e)},t.changeMonthlyExpenses=function(e){return t.setValueWithCheck("monthlyExpenses",e)},t.changePredictYears=function(e){return t.setValueWithCheck("predictForYears",e)},t.changeStartingPoint=function(e){return t.setValueWithCheck("startingPoint",e)},t.changeSalaryGrowth=function(e){var a=e.target.value,n=""===a?0:parseFloat(a);if(Number.isNaN(n))return t.setState(function(e){return{error:Object.assign({},e.error,{salaryGrowth:!0})}});var r=Object.assign({},t.state),s=t.state.error;delete s.salaryGrowth,r.error=s,r.salaryGrowth=a,t.setState(r)},t.changeExpensesGrowth=function(e){var a=e.target.value,n=""===a?0:parseFloat(a);if(Number.isNaN(n))return t.setState(function(e){return{error:Object.assign({},e.error,{expensesGrowth:!0})}});var r=Object.assign({},t.state),s=t.state.error;delete s.expensesGrowth,r.error=s,r.expensesGrowth=a,t.setState(r)},t.addExpInput=function(){var e,a=t.state.expectedExpenses,n="\n      "+Math.ceil(1e5*Math.random())+"\n      "+Math.ceil(1e5*Math.random())+"\n    ",r=(new Date).getFullYear();t.setState({expectedExpenses:Object.assign({},a,(e={},e[n]={id:n,expense:0,year:r},e))})},t.addChangeSalaryInput=function(){var e,a=t.state.changedSalary,n=""+Math.ceil(1e5*Math.random())+Math.ceil(1e5*Math.random()),r=(new Date).getFullYear();t.setState({changedSalary:Object.assign({},a,(e={},e[n]={id:n,salary:0,year:r},e))})},t.setValueWithCheck=function(e,a){var n=t.state.error,r=parseInt(a.target.value,10);if(Number.isNaN(r)){var s,l;t.setState(((l={error:Object.assign({},n,(s={},s[e]=!0,s))})[e]=a.target.value,l))}else{var o,i=Object.assign({},n);delete i[e],t.setState(((o={error:i})[e]=r,o))}},t.changeExpectedInputHandler=function(e,a,n){var r,s=t.state.expectedExpenses;t.setState({expectedExpenses:Object.assign({},s,(r={},r[e]={id:e,year:a,expense:n},r))})},t.deleteExpectedInputHandler=function(e){var a=t.state.expectedExpenses,n=Object.assign({},a);delete n[e],t.setState({expectedExpenses:n})},t.salaryChangeDeleteHandler=function(e){var a=t.state.changedSalary,n=Object.assign({},a);delete n[e],t.setState({changedSalary:n})},t.salaryChangeHandler=function(e,a,n){var r,s=t.state.changedSalary;t.setState({changedSalary:Object.assign({},s,(r={},r[e]={id:e,year:a,salary:n},r))})},t.setDiversification=function(e,a,n){t.setState(function(t){var r=t.diversification,s=Object.assign({},r);if("share"===a){n=parseInt(n,10);for(var l=r[e][a],o=n-l,i=["cash","bonds","stocks"].filter(function(t){return t!==e}),c=Math.abs(o),u=o>0?1:-1,m=Math.floor(Math.random()*i.length),d=0;c>0&&d<1e4;)d++,u<0&&s[i[m]].share>=100?m=(m+1)%i.length:u>0&&s[i[m]].share<=0?m=(m+1)%i.length:(s[i[m]].share-=u,c-=Math.abs(u),m=(m+1)%i.length);s[e].share=n}else n=parseFloat(Math.round(1e4*n))/1e4,s[e][a]=n;return{diversification:s}})},t.state={monthlySalary:1e3,monthlyExpenses:700,startingPoint:2e3,salaryGrowth:2,expensesGrowth:2,predictForYears:15,error:{},expectedExpenses:{},changedSalary:{},diversification:{cash:{growth:0,share:100},bonds:{growth:.02,share:0},stocks:{growth:.06,share:0,dividends:.01}},retirementRule:null},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state,a=t.startingPoint,n=t.monthlySalary,r=t.predictForYears,s=t.monthlyExpenses,c=t.error,u=t.expectedExpenses,m=t.salaryGrowth,d=t.expensesGrowth,h=t.changedSalary,p=t.diversification,f=t.retirementRule;return l.a.createElement(i.a,{withFooter:!1},l.a.createElement(g.a,{title:"Future Money Balance Calculator | FIRE Investments And Retirement Calculator",description:"FIRE - retire early calculator. Let's compute your future money balance. Add your income, expenses, expected expenses and let's look what the future balance will look like.",keywords:["money","calculator","expenses","income","future","fire","stocks"]}),l.a.createElement(v.b,null,l.a.createElement("div",{style:{marginTop:20,fontSize:22,marginBottom:10}},"This tool computes theoretical future money balance based on the income, expenses, income growth and one-time expenses (Buy car, house, etc.).",l.a.createElement("br",null),"It is also possible to play with investments thresholds and early retirement planning (FIRE)."),l.a.createElement("div",{style:{paddingTop:20,maxWidth:"100vw"}},l.a.createElement("div",{className:b.a.input_grid},l.a.createElement("div",null,"How much money do you actually have? (This is starting point)"),l.a.createElement(E.a,{value:a,onChange:this.changeStartingPoint})),l.a.createElement("div",{className:b.a.input_grid},l.a.createElement("div",null,"Expected monthly salary (after tax)"),l.a.createElement(E.a,{value:n,onChange:this.changeMonthlySalary})),l.a.createElement("div",{className:b.a.input_grid},l.a.createElement("div",null,"Salary yearly growth (percent)"),l.a.createElement(E.a,{value:m,onChange:this.changeSalaryGrowth})),l.a.createElement("div",{className:b.a.input_grid},l.a.createElement("div",null,"Monthly expenses"),l.a.createElement(E.a,{value:s,onChange:this.changeMonthlyExpenses})),l.a.createElement("div",{className:b.a.input_grid},l.a.createElement("div",null,"Expenses yearly growth (percent)"),l.a.createElement(E.a,{value:d,onChange:this.changeExpensesGrowth})),l.a.createElement("div",{className:b.a.input_grid},l.a.createElement("div",null,"For how much years you want prediction to compute ?"),l.a.createElement(E.a,{value:r,onChange:this.changePredictYears})),l.a.createElement("div",{style:{overflowX:"scroll"}},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:4},"Investments diversification (percent)")),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",{className:"text-center"},"% Diversity"),l.a.createElement("td",{className:"text-center"},"Growth"),l.a.createElement("td",{className:"text-center"},"% Dividends")),l.a.createElement("tr",null,l.a.createElement("td",null,"Cash"),l.a.createElement("td",null,l.a.createElement("div",{className:b.a.tableTd},l.a.createElement("span",null,p.cash.share),l.a.createElement(E.a,{type:"range",min:0,max:100,value:p.cash.share,onChange:function(t){return e.setDiversification("cash","share",t.target.value)}}))),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"Bonds"),l.a.createElement("td",null,l.a.createElement("div",{className:b.a.tableTd},l.a.createElement("span",null,p.bonds.share),l.a.createElement(E.a,{type:"range",min:0,max:100,value:p.bonds.share,onChange:function(t){return e.setDiversification("bonds","share",t.target.value)}}))),l.a.createElement("td",null,l.a.createElement("div",{className:b.a.tableTd},l.a.createElement("span",null,Math.round(100*p.bonds.growth*100)/100,"%"),l.a.createElement(E.a,{type:"range",min:-.1,step:.005,max:.6,value:p.bonds.growth,onChange:function(t){return e.setDiversification("bonds","growth",t.target.value)}})))),l.a.createElement("tr",null,l.a.createElement("td",null,"Stocks"),l.a.createElement("td",null,l.a.createElement("div",{className:b.a.tableTd},l.a.createElement("span",null,p.stocks.share),l.a.createElement(E.a,{type:"range",min:0,max:100,value:p.stocks.share,onChange:function(t){return e.setDiversification("stocks","share",t.target.value)}}))),l.a.createElement("td",null,l.a.createElement("div",{className:b.a.tableTd},l.a.createElement("span",null,Math.round(100*p.stocks.growth*100)/100,"%"),l.a.createElement(E.a,{type:"range",min:-.1,max:.6,step:.005,value:p.stocks.growth,onChange:function(t){return e.setDiversification("stocks","growth",t.target.value)}}))),l.a.createElement("td",null,l.a.createElement("div",{className:b.a.tableTd},l.a.createElement("span",null,Math.round(100*p.stocks.dividends*100)/100,"%"),l.a.createElement(E.a,{type:"range",min:0,max:.1,step:.001,value:p.stocks.dividends,onChange:function(t){return e.setDiversification("stocks","dividends",t.target.value)}}))))))),l.a.createElement("div",{className:b.a.labelAdditional},l.a.createElement("div",null,"Salary changes in future"),l.a.createElement("div",{className:b.a.note},"Unexpectedly higher promotion, lose of job, set salary to retirement support.")),l.a.createElement("div",{style:{marginBottom:15}},Object.entries(h).map(function(t){var a=t[0],n=t[1];return l.a.createElement(W,{id:a,minYear:(new Date).getFullYear(),maxYear:(new Date).getFullYear()+r,key:a,year:n.year,salary:n.salary,onDelete:e.salaryChangeDeleteHandler,onChange:e.salaryChangeHandler})}),l.a.createElement(R,{type:"button",onClick:this.addChangeSalaryInput},"Add Salary Change")),l.a.createElement("hr",null),l.a.createElement("div",{className:b.a.labelAdditional},l.a.createElement("div",null,"One-time expenses"),l.a.createElement("div",{className:b.a.note},"Note that you can also map one-time financial gain, for example inheritance, win lottery and so on with negative number (negative expense). For example -10 000")),l.a.createElement("div",{style:{marginBottom:15}},Object.entries(u).map(function(t){var a=t[0],n=t[1];return l.a.createElement(I,{id:a,minYear:(new Date).getFullYear(),maxYear:(new Date).getFullYear()+r,key:a,year:n.year,expense:n.expense,onDelete:e.deleteExpectedInputHandler,onChange:e.changeExpectedInputHandler})}),l.a.createElement(R,{type:"button",onClick:this.addExpInput},"Add expense")),l.a.createElement("hr",null),l.a.createElement("div",{style:{marginTop:20,marginBottom:20}},"Retire early"," ",l.a.createElement("input",{type:"checkbox",checked:null!==f,onChange:function(t){return e.setState({retirementRule:t.target.checked?{inYear:Math.round((new Date).getFullYear()+5),percents:.04}:null})}}),l.a.createElement("div",null,"When the retirement year come, investing to bonds and stocks will be stopped, you're going to withdraw % of your money from stocks. Read more on ",l.a.createElement("a",{href:"https://www.investopedia.com/terms/f/four-percent-rule.asp",target:"_blank"},"4% rule"),"."),null!==f&&l.a.createElement("div",null,l.a.createElement("div",{className:b.a.retirementRow},l.a.createElement("div",null,"Retire in year"),l.a.createElement("div",null,l.a.createElement("div",{className:"text-center"},f.inYear),l.a.createElement(E.a,{type:"range",min:(new Date).getFullYear()+1,max:(new Date).getFullYear()+r,value:f.inYear,onChange:function(t){return e.setState({retirementRule:Object.assign({},e.state.retirementRule,{inYear:+t.target.value})})}}))),l.a.createElement("div",{className:b.a.retirementRow},l.a.createElement("div",null,"Withdraw from stocks % every year"),l.a.createElement("div",null,l.a.createElement("div",{className:"text-center"},Math.round(100*f.percents),"%"),l.a.createElement(E.a,{type:"range",min:0,step:5e-4,max:1,value:f.percents,onChange:function(t){return e.setState({retirementRule:Object.assign({},e.state.retirementRule,{percents:+t.target.value})})}}))))),l.a.createElement("hr",null),l.a.createElement("div",{style:{paddingTop:20}},0===Object.keys(c).length&&l.a.createElement(y,{salaryYearlyGrowth:1+parseFloat(m||0)/100,monthSalary:n,monthExpenses:s,expensesYearlyGrowth:1+parseFloat(d||0)/100,startingPoint:a,time:r,theoreticalExpenses:Object.values(u).reduce(function(e,t){return e[t.year]=void 0===e[t.year]?+t.expense:+e[t.year]+ +t.expense,e},{}),changedSalary:Object.values(h).reduce(function(e,t){return e[t.year]=void 0===e[t.year]?+t.salary:+e[t.year]+ +t.salary,e},{}),portfolioDiversity:p,retirementRule:f}))),l.a.createElement("div",null,l.a.createElement("h2",null,"Hey! Feature request, ideas or found bugs? ",l.a.createElement("br",null),"Write me down."),l.a.createElement(o.DiscussionEmbed,{shortname:"martinschnurer-net-1",config:{identifier:"calculator-money-prediction",title:"Money balance prediction"}}))))},t}(l.a.PureComponent);t.default=H},194:function(e,t){e.exports={categories:[{name:"personal",label:"Personal",link:"/category/personal"},{name:"finance",label:"Finance",link:"/category/finance"},{name:"programming",label:"Programming",link:"/category/programming"}]}},195:function(e,t,a){"use strict";var n=a(8),r=a.n(n),s=a(0),l=a.n(s),o=a(192),i=a.n(o),c=a(3),u=a.n(c),m=a(56),d=a(162),h=a.n(d),p=(a(199),a(202),a(194)),y=a.n(p),g=a(163),v=a.n(g),E=function(e){function t(){var t;return(t=e.call(this)||this).state={opened:!1,hoveredOn:null},t}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement("div",{onMouseEnter:function(){return e.setState({opened:!0})},onMouseLeave:function(){return e.setState({opened:!1})},className:i()(v.a.menu_item,v.a.categories)},l.a.createElement("span",{onClick:function(t){return e.setState({opened:!t.opened})}},"Categories"),this.state.opened&&l.a.createElement("div",{className:v.a.dropdown},y.a.categories.map(function(t){return l.a.createElement("div",{key:t.name,className:v.a.itemWrapper},l.a.createElement("div",{onMouseEnter:function(){return e.setState({hoveredOn:t.name})},className:v.a.item},l.a.createElement(m.Link,{to:t.link,className:v.a.label},t.label)))})))},t}(l.a.PureComponent),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.styles;return l.a.createElement("div",{className:i()(h.a.root_panel,a),styles:n},l.a.createElement("div",{className:h.a.grid_menu},l.a.createElement("div",{className:i()(h.a.menu,h.a.left_menu)},l.a.createElement("div",{className:h.a.menu_item},l.a.createElement(m.Link,{to:"/",activeClassName:h.a.active},"Blog")),l.a.createElement("div",{className:h.a.menu_item},l.a.createElement(m.Link,{to:"/calculators",activeClassName:h.a.active},"Tools")),l.a.createElement(E,null)),l.a.createElement("div",{className:i()(h.a.menu,h.a.right_menu)},l.a.createElement("div",{className:h.a.menu_item},l.a.createElement(m.Link,{to:"/portfolio",activeClassName:h.a.active},"Portfolio")),l.a.createElement("div",{className:h.a.menu_item},l.a.createElement(m.Link,{to:"/cv",activeClassName:h.a.active},"CV")))),t)},t}(l.a.PureComponent);f.propTypes={children:u.a.node.isRequired,className:u.a.string,styles:u.a.objectOf(u.a.oneOfType([u.a.number,u.a.string]))},f.defaultProps={className:"",styles:{}};t.a=f},197:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(26);var n=a(8),r=a.n(n),s=a(0),l=a.n(s),o=a(3),i=a.n(o),c=a(192),u=a.n(c),m=a(164),d=a.n(m),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.style,r=void 0===n?{}:n;return l.a.createElement("div",{className:u()(d.a.body_content,a),style:Object.assign({},r)},l.a.createElement("div",{className:d.a.inside_content},t))},t}(l.a.PureComponent);h.propTypes={children:i.a.node.isRequired,className:i.a.string,style:i.a.objectOf(i.a.oneOfType([i.a.string,i.a.number]))},h.defaultProps={style:{},className:""},t.b=h},200:function(e,t,a){"use strict";var n=a(201),r=a(0),s=a.n(r),l=a(3),o=a.n(l),i=a(206),c=a.n(i),u=a(56);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return s.a.createElement(u.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | Blog",meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var d="1025518380"},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Martin Schnürer",description:".",author:"Martin Schnürer"}}}}},210:function(e,t,a){var n=a(36),r=a(37),s=a(76).f;e.exports=function(e){return function(t){for(var a,l=r(t),o=n(l),i=o.length,c=0,u=[];i>c;)s.call(l,a=o[c++])&&u.push(e?[a,l[a]]:l[a]);return u}}},218:function(e,t,a){var n=a(12),r=a(210)(!0);n(n.S,"Object",{entries:function(e){return r(e)}})},221:function(e,t,a){"use strict";a(26);var n=a(79),r=a.n(n),s=a(0),l=a.n(s),o=a(3),i=a.n(o),c=a(192),u=a.n(c),m=a(165),d=a.n(m),h=function(e){var t=e.className,a=r()(e,["className"]);return l.a.createElement("input",Object.assign({className:u()(d.a.input,t)},a))};h.propTypes={className:i.a.string},h.defaultProps={className:""},t.a=h},241:function(e,t,a){var n=a(12),r=a(210)(!1);n(n.S,"Object",{values:function(e){return r(e)}})},242:function(e,t,a){var n=a(29),r=a(36);a(243)("keys",function(){return function(e){return r(n(e))}})},243:function(e,t,a){var n=a(12),r=a(22),s=a(19);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],l={};l[e]=t(a),n(n.S+n.F*s(function(){a(1)}),"Object",l)}}}]);
//# sourceMappingURL=component---src-pages-calculators-money-prediction-jsx-3879420c5d708c2fb1de.js.map