(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-317d4ff6"],{"0cd8":function(t,e,a){"use strict";var n=a("5ca1"),s=a("7b23");n(n.P+n.F*!a("2f21")([].reduce,!0),"Array",{reduce:function(t){return s(this,t,arguments.length,arguments[1],!1)}})},"5f88":function(t,e,a){"use strict";var n=function(t,e){var a=e._c;return a("vs-dropdown",{staticClass:"cursor-pointer",class:e.data.staticClass,attrs:{"vs-trigger-click":""}},[a("small",{staticClass:"flex cursor-pointer"},[a("span",[e._v("Last 7 days")]),a("feather-icon",{staticClass:"ml-1",attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",{staticClass:"w-32"},[a("vs-dropdown-item",{on:{click:function(t){e.listeners.timeDurationChanged&&e.listeners.timeDurationChanged("last-28-days")}}},[e._v("Last 28 days")]),a("vs-dropdown-item",{on:{click:function(t){e.listeners.timeDurationChanged&&e.listeners.timeDurationChanged("last-month")}}},[e._v("Last Month")]),a("vs-dropdown-item",{on:{click:function(t){e.listeners.timeDurationChanged&&e.listeners.timeDurationChanged("last-year")}}},[e._v("Last Year")])],1)],1)},s=[],i=a("2877"),r={},o=Object(i["a"])(r,n,s,!0,null,null,null);e["a"]=o.exports},"7b23":function(t,e,a){var n=a("d8e8"),s=a("4bf8"),i=a("626a"),r=a("9def");t.exports=function(t,e,a,o,l){n(e);var c=s(t),u=i(c),p=r(c.length),d=l?p-1:0,h=l?-1:1;if(a<2)for(;;){if(d in u){o=u[d],d+=h;break}if(d+=h,l?d<0:p<=d)throw TypeError("Reduce of empty array with no initial value")}for(;l?d>=0:p>d;d+=h)d in u&&(o=e(o,u[d],d,c));return o}},acb2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"vx-col w-full mb-base"},[t.salesFinanceChartDataReady?a("sales-finance-highcharts",{attrs:{"sales-finance-data":t.salesFinanceData},on:{filterExpensesByRequestDate:t.filterExpensesByRequestDate}}):t._e()],1),a("div",{staticClass:"vx-col w-full mb-base"},[t.salesExpenseChartDataReady?a("sales-expense-highcharts",{attrs:{"sales-expense-data":t.salesExpenseData}}):t._e()],1)])},s=[],i=(a("1c01"),a("58b2"),a("8e6e"),a("f3e2"),a("d25f"),a("ac6a"),a("456d"),a("28a5"),a("ade3")),r=(a("6d67"),a("5f88")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vx-card",{attrs:{title:"Sales & Finances"}},[a("div",{attrs:{slot:"no-body"},slot:"no-body"},[t.isChartDataReady?a("highcharts",{attrs:{options:t.chartOptions,id:"salesFinanceChart"}}):t._e()],1)])],1)},l=[],c=(a("7f7f"),a("7514"),{name:"SalesFinanceHighcharts",props:{salesFinanceData:{type:Object,required:!0}},data:function(){var t=this;return{isChartDataReady:!1,chartOptions:{chart:{type:"column"},title:{text:""},xAxis:{categories:["Jan","Feb","Mar","Apr","May"],crosshair:!0},yAxis:[{labels:{format:"{value}"},title:{text:"Amount ($)"}},{title:{text:"Quantity (Units)"},labels:{format:"{value} Units"},opposite:!0}],tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{column:{pointPadding:.2,borderWidth:0,cursor:"pointer"}},series:[{name:"Total Sales",data:[49.9,71.5,106.4,129.2,144,176,135.6,148.5,216.4,194.1,95.6,54.4],events:{click:function(e){t.filterExpensesByRequestDate(e.point.category)}}},{name:"Reimbursement",data:[83.6,78.8,98.5,93.4,106,84.5,105,104.3,91.2,83.5,106.6,92.3],events:{click:function(e){t.filterExpensesByRequestDate(e.point.category)}}},{name:"Total Refund",data:[48.9,38.8,39.3,41.4,47,48.3,59,59.6,52.4,65.2,59.3,51.2],events:{click:function(e){t.filterExpensesByRequestDate(e.point.category)}}},{name:"Total Expense",data:[42.4,33.2,34.5,39.7,52.6,75.5,57.4,60.4,47.6,39.1,46.8,51.1],events:{click:function(e){t.filterExpensesByRequestDate(e.point.category)}}},{name:"Quantity",yAxis:1,type:"spline",data:[42.4,33.2,34.5,39.7,52.6,75.5,57.4,60.4,47.6,39.1,46.8,51.1],events:{click:function(e){t.filterExpensesByRequestDate(e.point.category)}}}]}}},mounted:function(){this.chartOptions.xAxis.categories=this.salesFinanceData.salesFinanceDates,this.chartOptions.series.find((function(t){return"Total Sales"===t.name})).data=this.salesFinanceData.totalSales,this.chartOptions.series.find((function(t){return"Reimbursement"===t.name})).data=this.salesFinanceData.reimbursement,this.chartOptions.series.find((function(t){return"Total Refund"===t.name})).data=this.salesFinanceData.refund,this.chartOptions.series.find((function(t){return"Total Expense"===t.name})).data=this.salesFinanceData.totalExpenses,this.chartOptions.series.find((function(t){return"Quantity"===t.name})).data=this.salesFinanceData.itemQuantity,this.isChartDataReady=!0},methods:{filterExpensesByRequestDate:function(t){this.$emit("filterExpensesByRequestDate",t)}}}),u=c,p=a("2877"),d=Object(p["a"])(u,o,l,!1,null,null,null),h=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vx-card",{attrs:{title:"Expenses & Refunds"}},[a("template",{slot:"actions"}),a("div",{attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"vx-col w-full mb-base px-7"},[t.isChartDataReady?a("highcharts",{ref:"salesExpenseChart",attrs:{options:t.chartOptions}}):t._e()],1)])],2)],1)},m=[],y=(a("0cd8"),{name:"SalesExpenseHighcharts",props:{salesExpenseData:{type:Array,required:!0}},mounted:function(){var t=this;this.chartOptions.series[0].data=this.salesExpenseData,this.$nextTick((function(){t.isChartDataReady=!0}))},data:function(){return{isChartDataReady:!1,chartOptions:{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:""},tooltip:{pointFormat:"{series.name} $ <b>{point.y} </b>"},accessibility:{point:{valueSuffix:"$"}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},legend:{enabled:!0,layout:"vertical",align:"right",width:400,verticalAlign:"middle",useHTML:!0,labelFormatter:function(){return'<div style="width:300px;justify-content:space-between;display:flex"><div style="text-align: left;margin:0 5px;display:inline-block">'+this.name+'</div><div class="spacer"></div><div style="; text-align:right;display:inline-block">$'+this.y+"</div></div>"}},series:[{name:" ",colorByPoint:!0,data:[{name:"Chrome",y:61.41},{name:"Internet Explorer",y:11.84},{name:"Firefox",y:10.85},{name:"Edge",y:4.67},{name:"Safari",y:4.18},{name:"Other",y:7.05}]}]}}},computed:{totalExpenses:function(){var t=this.chartOptions.series[0].data.map((function(t){return t.y})),e=t.reduce((function(t,e){return t+e}),0);return e},existedExpenses:function(){var t=this.chartOptions.series[0].data.filter((function(t){return t.y>0}));return t}}}),x=y,D=Object(p["a"])(x,f,m,!1,null,null,null),v=D.exports,b=a("2f62");function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function E(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var O={name:"ExecutiveDashboard",components:{ChangeTimeDurationDropdown:r["a"],SalesFinanceHighcharts:h,SalesExpenseHighcharts:v},data:function(){return{salesFinanceData:{},salesExpenseData:{},salesFinanceChartDataReady:!1,salesExpenseChartDataReady:!1}},mounted:function(){var t=this;this.fetchSalesFinanceData().then((function(e){var a=e.data,n=a.Data.item.map((function(t){return t.date})),s=a.Data.item.map((function(t){return t.totalSales})),i=a.Data.item.map((function(t){return t.reimbursement})),r=a.Data.item.map((function(t){return t.refund})),o=a.Data.item.map((function(t){return t.totalExpenses})),l=a.Data.item.map((function(t){return t.itemQuantity}));t.salesFinanceData={salesFinanceDates:n,totalSales:s,reimbursement:i,refund:r,totalExpenses:o,itemQuantity:l},t.salesFinanceChartDataReady=!0})),this.fetchSalesExpenseData({day:30}).then((function(e){var a=e.data,n=a.Data.item.map((function(t){return t.y=t.amount,t.name=t.type,t}));t.salesExpenseData=n})).then((function(){t.salesExpenseChartDataReady=!0}))},methods:E(E({},Object(b["b"])("executiveDashboard",["fetchSalesFinanceData","fetchSalesExpenseData","filterExpensesWithDate"])),{},{filterExpensesByRequestDate:function(t){var e=this;this.salesExpenseChartDataReady=!1;var a={year:parseInt(t.split("/")[0].split("-")[0]),month:parseInt(t.split("/")[0].split("-")[1])},n={date:a};this.filterExpensesWithDate(n).then((function(t){var a=t.data,n=a.Data.item.map((function(t){return t.y=t.amount,t.name=t.type,t}));e.salesExpenseData=n})).then((function(){e.salesExpenseChartDataReady=!0}))}})},C=O,w=Object(p["a"])(C,n,s,!1,null,null,null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-317d4ff6.a29dd108.js.map