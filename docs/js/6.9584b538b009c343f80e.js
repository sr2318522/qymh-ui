(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{x2Yq:function(e,t,o){"use strict";o.r(t);var n=o("YKMj"),r=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),s=function(e,t,o,n){var r,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(s<3?r(i):s>3?r(t,o,i):r(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cookieNow="",t.sessionStorage="",t.localStorage="",t}return r(t,e),t.prototype.setCookie=function(){this.$cookie.set("test","1"),this.$notice.toast("设置成功"),this.cookieNow=document.cookie},t.prototype.deleteCookie=function(){this.$cookie.delete("test"),this.$notice.toast("删除成功"),this.cookieNow=document.cookie},t.prototype.setSessionStorage=function(){this.$storage.set("session","1"),this.$notice.toast("设置成功"),this.sessionStorage="session="+this.$storage.get("session")},t.prototype.deleteSessionStorage=function(){this.$storage.delete("session",1),this.$notice.toast("删除成功"),this.sessionStorage="session="+this.$storage.get("session")},t.prototype.setLocalStorage=function(){this.$storage.set("local","1",!0),this.$notice.toast("设置成功"),this.localStorage="local="+this.$storage.get("local",!0)},t.prototype.deleteLocalStorage=function(){this.$storage.delete("local",!0),this.$notice.toast("删除成功"),this.localStorage="local="+this.$storage.get("local",!0)},t.prototype.beforeRouteEnter=function(e,t,o){o(function(e){e.cookieNow=document.cookie,e.sessionStorage="session="+e.$storage.get("session"),e.localStorage="local="+e.$storage.get("local",!0)})},t=s([Object(n.a)({})],t)}(n.d),l=o("KHd+"),a=Object(l.a)(i,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"storage"},[o("q-row",{attrs:{position:"fixed",t:"0",l:"0",col:"100",zIndex:"1"}},[o("q-head-bar",{attrs:{color:"white",bkColor:"deepskyblue",leftArrow:!0,centerText:"storage 存储",rightEmpty:!0}})],1),o("q-row",{attrs:{h:"12"}}),o("q-row",{attrs:{pl:"2",pr:"2"}},[o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"存储",fontSize:"16",borderBottom:!0}}),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$cookie"}}),o("q-row",{attrs:{tag:"section"}},[o("q-row",{attrs:{h:"12",align:"center"}},[e._v("cookie:"+e._s(e.cookieNow))]),o("q-row",{attrs:{h:"10",align:"center",decoration:"underline",color:"deepskyblue"},on:{clicked:e.setCookie}},[e._v("点击设置cookie")]),o("q-row",{attrs:{h:"10",align:"center",decoration:"underline",color:"deepskyblue"},on:{clicked:e.deleteCookie}},[e._v("点击删除cookie")]),o("main",[e._v("template")]),o("q-code",{attrs:{type:"html"}},[e._v('<q-row h=12 align="center">cookie:{ { cookieNow } }</q-row>\n<q-row h=10 align="center" @clicked="setCookie" decoration="underline" color="deepskyblue">点击设置cookie</q-row>\n<q-row h=10 align="center" @clicked="deleteCookie" decoration="underline" color="deepskyblue">点击删除cookie</q-row>')]),o("main",[e._v("javascript")]),o("q-code",[e._v("data() {\n  return {\n    cookieNow = ''\n  }\n},\nmethods: {\n  setCookie() {\n    this.$cookie.set('test', '1')\n    this.$notice.toast('设置成功')\n    this.cookieNow = document.cookie\n  },\n  deleteCookie() {\n    this.$cookie.delete('test')\n    this.$notice.toast('删除成功')\n    this.cookieNow = document.cookie\n  }\n}")])],1)],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$storage"}}),o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[e._v("设置"),o("main",[e._v("sessionStorage")]),e._v(",你可以设置后刷新本页面此数据将不存在")]),o("q-row",{attrs:{tag:"section"}},[o("q-row",{attrs:{h:"12",align:"center"}},[e._v("cookie:"+e._s(e.sessionStorage))]),o("q-row",{attrs:{h:"10",align:"center",decoration:"underline",color:"deepskyblue"},on:{clicked:e.setSessionStorage}},[e._v("点击设置sessionStorage")]),o("q-row",{attrs:{h:"10",align:"center",decoration:"underline",color:"deepskyblue"},on:{clicked:e.deleteSessionStorage}},[e._v("点击删除sessionStorage")]),o("main",[e._v("template")]),o("q-code",{attrs:{type:"html"}},[e._v('<q-row h=12 align="center">sessionStorage:{ { sessionStorage  } }</q-row>\n<q-row h=10 align="center" @clicked="setSessionStorage" decoration="underline" color="deepskyblue">点击设置sessionStorage</q-row>\n<q-row h=10 align="center" @clicked="deleteSessionStorage" decoration="underline" color="deepskyblue">点击删除sessionStorage</q-row>')]),o("main",[e._v("javascript")]),o("q-code",[e._v("data() {\n  return {\n    sessionStorage = ''\n  }\n},\nmethods: {\n  setSessionStorage() {\n    this.$storage.set('session', '1')\n    this.$notice.toast('设置成功')\n    this.sessionStorage = `session=${this.$storage.get('session')}`\n  },\n  deleteSessionStorage() {\n    this.$storage.delete('session', 1)\n    this.$notice.toast('删除成功')\n    this.sessionStorage = `session=${this.$storage.get('session')}`\n  }\n}")])],1),o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[e._v("设置"),o("main",[e._v("localStorage")]),e._v(",设置后刷新本页面数据仍会存在")]),o("q-row",{attrs:{tag:"section"}},[o("q-row",{attrs:{h:"12",align:"center"}},[e._v("localStorage:"+e._s(e.localStorage))]),o("q-row",{attrs:{h:"10",align:"center",decoration:"underline",color:"deepskyblue"},on:{clicked:e.setLocalStorage}},[e._v("点击设置localStorage")]),o("q-row",{attrs:{h:"10",align:"center",decoration:"underline",color:"deepskyblue"},on:{clicked:e.deleteLocalStorage}},[e._v("点击删除localStorage")]),o("main",[e._v("template")]),o("q-code",{attrs:{type:"html"}},[e._v('<q-row h=12 align="center">localStorage:{ { localStorage } }</q-row>\n<q-row h=10 align="center" @clicked="setLocalStorage" decoration="underline" color="deepskyblue">点击设置localStorage</q-row>\n<q-row h=10 align="center" @clicked="deleteLocalStorage" decoration="underline" color="deepskyblue">点击删除localStorage</q-row>')]),o("main",[e._v("javascript")]),o("q-code",[e._v("data() {\n  return {\n    localStorage: ''\n  }\n},\nmethods: {\n  setLocalStorage() {\n    this.$storage.set('local', '1', true)\n    this.$notice.toast('设置成功')\n    this.localStorage = `local=${this.$storage.get('local',true)}`\n  },\n  deleteLocalStorage() {\n    this.$storage.delete('local', true)\n    this.$notice.toast('删除成功')\n    this.localStorage = `local=${this.$storage.get('local',true)}`\n  }\n}")])],1)],1)],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"API一览",fontSize:"16",borderBottom:!0}}),o("q-row",{attrs:{tag:"section"}},[o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$cookie.set(key,value)"}}),o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[o("main",[e._v("key")]),e._v("键名"),o("br"),o("main",[e._v("value")]),e._v("值"),o("br")])],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$cookie.get(key,value)"}}),o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[o("main",[e._v("value")]),e._v("值"),o("br")])],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$cookie.delete(key)"}}),o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[o("main",[e._v("key")]),e._v("键名"),o("br"),e._v("可以是键名数组同时删除多个cookie")])],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$cookie.deleteAll"}}),o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[e._v("没有参数,直接删除所有cookie")])],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$storage.set(key,value,local)"}}),o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[o("main",[e._v("key")]),e._v("键名"),o("br"),o("main",[e._v("value")]),e._v("值"),o("br"),o("main",[e._v("local")]),e._v("为true时启用"),o("main",[e._v("localStorage")]),e._v(",默认为false")])],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$storage.get(key)"}}),o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[o("main",[e._v("key")]),e._v("键名"),o("br"),o("main",[e._v("local")]),e._v("为true时启用"),o("main",[e._v("localStorage")]),e._v(",默认为false")])],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$storage.delete(key)"}}),o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[o("main",[e._v("key")]),e._v("键名"),o("br"),e._v("可以是键名数组同时删除多个storage\n"),o("main",[e._v("local")]),e._v("为true时启用"),o("main",[e._v("localStorage")]),e._v(",默认为false")])],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$storage.deleteAll(key)"}}),o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[e._v("没有参数,直接删除所有storage\n"),o("main",[e._v("local")]),e._v("为true时启用"),o("main",[e._v("localStorage")]),e._v(",默认为false")])],1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=a.exports}}]);