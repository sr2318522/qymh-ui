(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{gt7p:function(t,o,e){"use strict";e.r(o);var n=e("YKMj"),r=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),a=function(t,o,e,n){var r,a=arguments.length,i=a<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,o,e,n);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(a<3?r(i):a>3?r(o,e,i):r(o,e))||i);return a>3&&i&&Object.defineProperty(o,e,i),i},i=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.curIndex=0,o.tableOptions={titles:[{value:"Prop"},{value:"Type"},{value:"Required"},{value:"Default"},{value:"Description"}],datas:[{prop:[{value:"bkColor"},{value:"String"},{value:"N"},{value:"无"},{value:"背景颜色"}]},{prop:[{value:"borderTop"},{value:"Boolean"},{value:"N"},{value:"false"},{value:"是否有上border"}]},{prop:[{value:"borderBottom"},{value:"Boolean"},{value:"N"},{value:"false"},{value:"是否有下border"}]},{prop:[{value:"borderColor"},{value:"String"},{value:"N"},{value:"#d6d7dc"},{value:"是否有border颜色"}]},{prop:[{value:"tabArr"},{value:"Array"},{value:"Y"},{value:"无"},{value:"tab数组"}]}]},o.tabArr=[{icon:"q-icon icon-newshot",iconColor:"",activeIcon:"q-icon icon-newshotfill",activeIconColor:"#F65A44",text:"订单",textColor:"",activeTextColor:"#F65A44",active:!0},{icon:"q-icon icon-hot",iconColor:"",activeIcon:"q-icon icon-hotfill",activeIconColor:"#F65A44",text:"热门",textColor:"",activeTextColor:"#F65A44",active:!1,detailsMsg:123,detailsMsgColor:"",detailsMsgBkColor:""},{icon:"q-icon icon-people",iconColor:"",activeIcon:"q-icon icon-peoplefill",activeIconColor:"#F65A44",text:"个人",textColor:"",activeTextColor:"#F65A44",active:!1,detailsPoint:!0,detailsPointColor:""}],o}return r(o,t),o.prototype.changeTab=function(t){this.curIndex=t},o=a([Object(n.a)({})],o)}(n.d),l=e("KHd+"),c=Object(l.a)(i,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"tabBar"},[e("q-row",{attrs:{position:"fixed",t:"0",l:"0",col:"100",zIndex:"1"}},[e("q-head-bar",{attrs:{color:"white",bkColor:"deepskyblue",leftArrow:!0,centerText:"tabBar 底部导航",fontSize:"16",rightEmpty:!0}})],1),e("q-row",{attrs:{h:"12"}}),e("q-row",{attrs:{pl:"2",pr:"2"}},[e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"Demo演示",fontSize:"16",borderBottom:!0}}),e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"列子"}}),e("q-row",{attrs:{tag:"section"}},[e("q-row",{attrs:{h:"10",color:"deepskyblue",align:"center",justify:"center"}},[t._v(t._s(t.curIndex))]),e("q-tab-bar",{attrs:{tabArr:t.tabArr,bkColor:"#fafafa"},on:{changeTab:t.changeTab}}),e("main",[t._v("template")]),e("q-code",{attrs:{type:"html"}},[t._v('<q-row\n  h=10\n  color="deepskyblue" \n  align="center"\n  justify="center">{ { curIndex } } </q-row>\n<q-tab-bar\n  :tabArr="tabArr"\n  bkColor="#fafafa"\n  @changeTab="changeTab"></q-tab-bar>')]),e("main",[t._v("javascript")]),e("q-code",[t._v("data() {\n  return {\n    curIndex: 0,\n    tabArr = [{\n        icon: 'q-icon icon-newshot',\n        iconColor: '',\n        activeIcon: 'q-icon icon-newshotfill',\n        activeIconColor: '#F65A44',\n        text: '订单',\n        textColor: '',\n        activeTextColor: '#F65A44',\n        active: true\n      },\n      {\n        icon: 'q-icon icon-hot',\n        iconColor: '',\n        activeIcon: 'q-icon icon-hotfill',\n        activeIconColor: '#F65A44',\n        text: '热门',\n        textColor: '',\n        activeTextColor: '#F65A44',\n        active: false,\n        detailsMsg: 123,\n        detailsMsgColor: '',\n        detailsMsgBkColor: '',\n      },\n      {\n        icon: 'q-icon icon-people',\n        iconColor: '',\n        activeIcon: 'q-icon icon-peoplefill',\n        activeIconColor: '#F65A44',\n        text: '个人',\n        textColor: '',\n        activeTextColor: '#F65A44',\n        active: false,\n        detailsPoint: true,\n        detailsPointColor: ''\n      }\n    ]\n  }\n},\nmethods: {\n  changeTab(index) {\n    this.curIndex = index\n  }\n}")]),e("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[t._v("参数比较多,我们一个一个来解释一下,以下就是tabArr属性的全部api"),e("br"),e("main",[t._v("icon")]),t._v("指icon的class类名"),e("br"),e("main",[t._v("iconColor")]),t._v("指icon未激活下的颜色"),e("br"),e("main",[t._v("activeIcon")]),t._v("指激活状态下的icon的class类名"),e("br"),e("main",[t._v("activeIconColor")]),t._v("指激活状态下的icon的颜色"),e("br"),e("main",[t._v("text")]),t._v("指文字"),e("br"),e("main",[t._v("textColor")]),t._v("指文字颜色"),e("br"),e("main",[t._v("activeTextColor")]),t._v("指激活状态下的文字颜色"),e("br"),e("main",[t._v("active")]),t._v("指当前列有没有被激活"),e("br"),e("main",[t._v("detailsMsg")]),t._v("指当前列侧边的消息"),e("br"),e("main",[t._v("detailsMsgColor")]),t._v("指当前列侧边消息的颜色"),e("br"),e("main",[t._v("detailsMsgBkColor")]),t._v("指当前列侧边消息的背景颜色"),e("br"),e("main",[t._v("detailsPoint")]),t._v("指当前列侧边小点存不存在"),e("br"),e("main",[t._v("detailsPointColor")]),t._v("指当前列侧边小点的颜色")])],1)],1)],1),e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"API一览",fontSize:"16",borderBottom:!0}}),e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"Api"}}),e("q-table",{attrs:{tableOptions:t.tableOptions}})],1),e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"事件回调"}}),e("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[e("main",[t._v("@changeTab")]),t._v("当tab改变的时候触发,\n第一个参数是当前位置的索引")])],1)],1)],1)],1)},[],!1,null,null,null);o.default=c.exports}}]);