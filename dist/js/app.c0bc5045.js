(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("md-button",{staticClass:"md-primary md-raised",on:{click:function(e){t.showDialog=!0}}},[t._v("Создать график")]),a("ChartList",{attrs:{data:t.chartsList}}),a("md-dialog",{staticClass:"dialog",attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(e){t.showDialog=e},"update:md-active":function(e){t.showDialog=e}}},[a("md-dialog-title",[t._v("Создать график")]),a("md-dialog-content",[a("md-field",[a("label",{attrs:{for:"chart"}},[t._v("Выберите тип графика")]),a("md-select",{attrs:{name:"chart",id:"chart"},on:{input:function(e){t.dataUrl=""}},model:{value:t.chartType,callback:function(e){t.chartType=e},expression:"chartType"}},[a("md-option",{attrs:{value:"ChartPie"}},[t._v("Pie Chart")]),a("md-option",{attrs:{value:"ChartLine"}},[t._v("Line Chart")])],1)],1),a("md-field",[a("label",{attrs:{for:"data"}},[t._v("Выберите источник данных")]),a("md-select",{attrs:{name:"data",id:"data"},model:{value:t.dataUrl,callback:function(e){t.dataUrl=e},expression:"dataUrl"}},[a("md-option",{attrs:{disabled:"ChartPie"!==t.chartType,value:"https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047"}},[t._v("Pie")]),a("md-option",{attrs:{disabled:"ChartLine"!==t.chartType,value:"https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2"}},[t._v("Line")])],1)],1)],1),a("md-dialog-actions",[a("md-button",{staticClass:"md-primary",on:{click:function(e){t.showDialog=!1}}},[t._v("Закрыть")]),a("md-button",{staticClass:"md-primary md-raised",attrs:{disabled:!t.dataUrl},on:{click:t.fetchChartData}},[t._v("Создать график")])],1),t.isLoading?a("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e()],1)],1)},i=[],o=(a("d3b7"),a("96cf"),a("1da1")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart"},t._l(t.data,(function(t){return a("div",{key:t.id},[a(t.type,{tag:"component",attrs:{data:t.data}})],1)})),0)},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pie"},[a("DxPieChart",{attrs:{"data-source":t.data,palette:"Bright",title:"Pie Chart"},on:{"point-click":function(e){return t.pointClickHandler(e)},"legend-click":function(e){return t.legendClickHandler(e)}}},[a("DxSeries",{attrs:{"argument-field":"Группа","value-field":"Доля"}},[a("DxLabel",{attrs:{visible:!0}},[a("DxConnector",{attrs:{visible:!0,width:1}})],1)],1),a("DxSize",{attrs:{width:500}}),a("DxExport",{attrs:{enabled:!0}})],1)],1)},d=[],u=a("89cf"),p=a.n(u),f={name:"ChartPie",props:{data:Array},components:{DxPieChart:p.a,DxSize:u["DxSize"],DxSeries:u["DxSeries"],DxLabel:u["DxLabel"],DxConnector:u["DxConnector"],DxExport:u["DxExport"]},methods:{pointClickHandler:function(t){this.toggleVisibility(t.target)},legendClickHandler:function(t){var e=t.target,a=t.component.getAllSeries()[0].getPointsByArg(e)[0];this.toggleVisibility(a)},toggleVisibility:function(t){t.isVisible()?t.hide():t.show()}}},h=f,m=(a("a613"),a("2877")),x=Object(m["a"])(h,c,d,!1,null,"db5a8278",null),b=x.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("DxChart",{attrs:{id:"chart","data-source":t.data,palette:"Violet"}},[a("DxCommonSeriesSettings",{attrs:{type:"line","argument-field":"Дата"}}),a("DxSeries",{attrs:{name:"Процент","value-field":"Процент"}}),a("DxMargin",{attrs:{bottom:20}}),a("DxArgumentAxis",{attrs:{"value-margins-enabled":!1,"discrete-axis-division-mode":"crossLabels"}},[a("DxGrid",{attrs:{visible:!0}})],1),a("DxLegend",{attrs:{"vertical-alignment":"bottom","horizontal-alignment":"center","item-text-position":"bottom"}}),a("DxExport",{attrs:{enabled:!0}}),a("DxTitle",{attrs:{text:"Line Chart"}},[a("DxSubtitle",{attrs:{text:"Percentage-to-month ratio"}})],1),a("DxTooltip",{attrs:{enabled:!0}})],1)},D=[],v=a("5660"),y={name:"ChartLine",props:{data:Array},components:{DxChart:v["DxChart"],DxSeries:v["DxSeries"],DxArgumentAxis:v["DxArgumentAxis"],DxCommonSeriesSettings:v["DxCommonSeriesSettings"],DxExport:v["DxExport"],DxGrid:v["DxGrid"],DxMargin:v["DxMargin"],DxLegend:v["DxLegend"],DxTitle:v["DxTitle"],DxSubtitle:v["DxSubtitle"],DxTooltip:v["DxTooltip"]}},C=y,_=(a("9ae5"),Object(m["a"])(C,g,D,!1,null,"0bc779cb",null)),L=_.exports,w={name:"ChartList",components:{ChartLine:L,ChartPie:b},props:{data:{type:Array,required:!0}}},S=w,P=Object(m["a"])(S,s,l,!1,null,"be360418",null),k=P.exports,O={name:"App",components:{ChartList:k},data:function(){return{showDialog:!1,chartType:"ChartPie",dataUrl:"",isLoading:!1,chartsList:[]}},methods:{fetchChartData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.chartType,r=t.dataUrl,t.isLoading=!0,e.next=4,fetch(r).then((function(t){return t.json()})).then((function(e){t.chartsList.unshift({type:a,data:e,id:+t.chartsList.length+1})}));case 4:t.isLoading=!1,t.showDialog=!1;case 6:case"end":return e.stop()}}),e)})))()}}},T=O,j=(a("034f"),Object(m["a"])(T,n,i,!1,null,null,null)),A=j.exports,E=a("43f9"),M=a.n(E);a("483b"),a("aeed"),a("51de"),a("e094");r["default"].config.errorHandler=function(t){0},r["default"].use(M.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(A)}}).$mount("#app")},"7a41":function(t,e,a){},"85ec":function(t,e,a){},"9ae5":function(t,e,a){"use strict";a("7a41")},a613:function(t,e,a){"use strict";a("ba67")},ba67:function(t,e,a){}});
//# sourceMappingURL=app.c0bc5045.js.map