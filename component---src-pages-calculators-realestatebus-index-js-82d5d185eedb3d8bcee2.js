(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{170:function(e,t,r){"use strict";r.r(t);var a=r(7),n=r.n(a),o=r(0),s=r.n(o),i=(r(213),r(4)),l=r.n(i),u=r(294),c={top:5,right:30,left:20,bottom:5},p=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).computePredictions=function(){for(var e=t.props.realEstates.sort(function(e,t){return e.price<t.price?-1:1}),r=(new Date).getFullYear(),a=t.props.years,n=[{year:r,balance:t.props.startPoint}],o=t.props.salary,s=0,i=0,l=t.props.startPoint,u=r+1;u<r+a+1;u++){var c=n[n.length-1].balance;c+=12*o,c-=12*t.props.expenses,e.length>0&&e[0].price<c?(c-=e[0].price,o+=e[0].rent-e[0].energies,s+=e[0].rent-e[0].energies,i++,l+=e[0].price-12*o,e.shift()):l+=12*o,n.push({year:u,balance:c,salary:o,rent:s,bought:i,worth:l})}return n},t}return n()(t,e),t.prototype.render=function(){var e=this.computePredictions();return s.a.createElement(u.e,{width:"100%",height:400},s.a.createElement(u.d,{data:e,margin:c},s.a.createElement(u.g,{dataKey:"year"}),s.a.createElement(u.h,{dataKey:this.props.showChart,domain:[0,"auto"]}),s.a.createElement(u.a,{strokeDasharray:"3 3"}),s.a.createElement(u.f,null),s.a.createElement(u.b,null),s.a.createElement(u.c,{type:"monotone",dataKey:this.props.showChart,stroke:"#8884d8"})))},t}(s.a.Component);p.propTypes={realEstates:l.a.arrayOf(l.a.shape({price:l.a.number.isRequired,rent:l.a.number.isRequired})).isRequired,startPoint:l.a.number,salary:l.a.number.isRequired,expenses:l.a.number,years:l.a.number,showChart:l.a.oneOf(["balance","salary","bought","rent","worth"])},p.defaultProps={startPoint:0,expenses:0,years:10,showChart:"balance"};var h=p,f=function(e){function t(){var t;return(t=e.call(this)||this).state={showChart:"balance"},t}return n()(t,e),t.prototype.render=function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("select",{value:this.state.showChart,onChange:function(t){return e.setState({showChart:t.target.value})}},s.a.createElement("option",{value:"balance"},"Balance"),s.a.createElement("option",{value:"salary"},"Salary"),s.a.createElement("option",{value:"bought"},"Bought"),s.a.createElement("option",{value:"rent"},"Rent"),s.a.createElement("option",{value:"worth"},"Total Worth"))),s.a.createElement(h,{realEstates:[{price:5e4,rent:300,energies:100},{price:5e4,rent:300,energies:100},{price:5e4,rent:300,energies:100},{price:1e5,rent:3e3,energies:120}],startPoint:0,salary:2e3,years:20,expenses:350,showChart:this.state.showChart}))},t}(s.a.Component);t.default=f},172:function(e,t,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var s=n.apply(null,a);s&&e.push(s)}else if("object"===o)for(var i in a)r.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},213:function(e,t,r){"use strict";var a=r(11),n=r(28),o=r(26),s=r(18),i=[].sort,l=[1,2,3];a(a.P+a.F*(s(function(){l.sort(void 0)})||!s(function(){l.sort(null)})||!r(214)(i)),"Array",{sort:function(e){return void 0===e?i.call(o(this)):i.call(o(this),n(e))}})},214:function(e,t,r){"use strict";var a=r(18);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-calculators-realestatebus-index-js-82d5d185eedb3d8bcee2.js.map