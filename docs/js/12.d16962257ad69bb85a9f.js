(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{RjnA:function(t,e,o){"use strict";o.r(e);var r=o("YKMj"),a=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),l=function(t,e,o,r){var a,l=arguments.length,n=l<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var i=t.length-1;i>=0;i--)(a=t[i])&&(n=(l<3?a(n):l>3?a(e,o,n):a(e,o))||n);return l>3&&n&&Object.defineProperty(e,o,n),n},n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tableOptions={titles:[{value:"Prop"},{value:"Type"},{value:"Required"},{value:"Default"},{value:"Description"}],datas:[{prop:[{value:"radio"},{value:"String"},{value:"Y"},{value:"rect"},{value:"rect:正方形 circle:圆形"}]},{prop:[{value:"hasBorder"},{value:"Boolean"},{value:"N"},{value:"true"},{value:"是否有边框"}]},{prop:[{value:"borderColor"},{value:"String"},{value:"N"},{value:"#a1a1a1"},{value:"border颜色"}]},{prop:[{value:"activeColor"},{value:"String"},{value:"N"},{value:"无"},{value:"激活时的颜色"}]},{prop:[{value:"activeBkColor"},{value:"String"},{value:"N"},{value:"无"},{value:"激活时的背景颜色"}]},{prop:[{value:"activeBorderColor"},{value:"String"},{value:"N"},{value:"transparent"},{value:"激活时的border颜色"}]}]},e}return a(e,t),e.prototype.change=function(t){t?this.$notice.toast("激活"):this.$notice.toast("未激活")},e=l([Object(r.a)({})],e)}(r.d),i=o("KHd+"),c=Object(i.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"radio"},[o("q-row",{attrs:{position:"fixed",t:"0",l:"0",col:"100",zIndex:"1"}},[o("q-head-bar",{attrs:{color:"white",bkColor:"deepskyblue",leftArrow:!0,centerText:"radio 按钮",rightEmpty:!0}})],1),o("q-row",{attrs:{h:"12"}}),o("q-row",{attrs:{pl:"2",pr:"2"}},[o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"Demo演示",fontSize:"16",borderBottom:!0}}),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"列子"}}),o("q-row",{attrs:{tag:"section"}},[o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[t._v("你可以点击下方的列子尝试")]),o("q-radio",{attrs:{ml:"2",type:"rect",activeColor:"#a1a1a1",activeBorderColor:"#a1a1a1"}}),o("q-radio",{attrs:{ml:"2",type:"circle",activeColor:"white",activeBkColor:"#f65a44"}}),o("q-code",{attrs:{type:"html"}},[t._v('<q-radio\n  ml=2\n  type="rect"\n  activeColor="#a1a1a1"\n  activeBorderColor="#a1a1a1">\n</q-radio>\n<q-radio\n  ml=2\n  type="circle"\n  activeColor="white"\n  activeBkColor="#f65a44">\n</q-radio>')])],1)],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"事件回调"}}),o("q-row",{attrs:{tag:"section"}},[o("q-radio",{attrs:{ml:"2",type:"circle",borderColor:"deepskyblue",activeBkColor:"deepskyblue"},on:{change:t.change}}),o("q-row",[o("main",[t._v("template")])]),o("q-code",{attrs:{type:"html"}},[t._v('<q-radio\n  ml=2\n  type="circle"\n  borderColor="deepskyblue"\n  activeBkColor="deepskyblue"\n  @change="change">\n</q-radio>')]),o("main",[t._v("javascript")]),o("q-code",[t._v("methods: {\n  change(bool) {\n    bool ?\n      this.$notice.toast('激活') :\n      this.$notice.toast('未激活')\n  }\n}")])],1)],1)],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"API一览",fontSize:"16",borderBottom:!0}}),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"Api"}}),o("q-table",{attrs:{tableOptions:t.tableOptions}})],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"事件回调"}}),o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[o("main",[t._v("@change")]),t._v(" 激活状态改变的时候触发,第一个参数为当前的激活状态布尔值")])],1)],1)],1)],1)},[],!1,null,null,null);e.default=c.exports}}]);