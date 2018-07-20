(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{fvyh:function(e,t,o){"use strict";o.r(t);var l=o("YKMj"),r=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function l(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(l.prototype=o.prototype,new l)}}(),i=function(e,t,o,l){var r,i=arguments.length,n=i<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,o):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,l);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i<3?r(n):i>3?r(t,o,n):r(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n},n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.files=[],t.images=[],t.tableOptions={titles:[{value:"Prop"},{value:"Type"},{value:"Required"},{value:"Default"},{value:"Description"}],datas:[{prop:[{value:"multiple"},{value:"Boolean"},{value:"N"},{value:"true"},{value:"是否允许多文件上传"}]},{prop:[{value:"maxCount"},{value:"Number"},{value:"N"},{value:"3"},{value:"最大上传数量"}]},{prop:[{value:"maxSize"},{value:"Number"},{value:"N"},{value:"4"},{value:"最大上传大小,单位M"}]},{prop:[{value:"value"},{value:"String"},{value:"Y"},{value:"点击上传"},{value:"上传的文字提醒"}]},{prop:[{value:"hasBorder"},{value:"Boolean"},{value:"N"},{value:"true"},{value:"是否有边框"}]},{prop:[{value:"borderColor"},{value:"String"},{value:"N"},{value:"#a1a1a1"},{value:"边框颜色"}]}]},t}return r(t,e),t.prototype.getFiles=function(e){this.files=e.files,this.images=e.images},t.prototype.remove=function(e){var t=this.$refs.myFiles;t.files.splice(e,1),t.images.splice(e,1)},t=i([Object(l.a)({})],t)}(l.d),a=o("KHd+"),s=Object(a.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"files"},[o("q-row",{attrs:{position:"fixed",t:"0",l:"0",col:"100",zIndex:"1"}},[o("q-head-bar",{attrs:{color:"white",bkColor:"deepskyblue",leftArrow:!0,centerText:"q-files",rightEmpty:!0}})],1),o("q-row",{attrs:{h:"12"}}),o("q-row",{attrs:{pl:"2",pr:"2"}},[o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"Demo演示",fontSize:"16",borderBottom:!0}}),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"列子"}}),o("q-row",{attrs:{tag:"section"}},[o("q-row",[o("q-files",{ref:"myFiles",attrs:{color:"#a1a1a1"},on:{getFiles:e.getFiles}})],1),o("q-row",{attrs:{dir:"left",wrap:"wrap"}},e._l(e.images,function(t,l){return o("q-row",{key:l,attrs:{position:"relative"}},[o("q-row",{attrs:{tag:"img",h:"30",w:"30",src:t}}),o("q-row",{attrs:{position:"absolute",align:"center",justify:"center",r:"0",t:"0",w:"5",h:"5",radius:"5",bkColor:"deepskyblue",fontSize:"12",color:"white"},on:{clicked:function(t){e.remove(l)}}},[o("q-col",[e._v("X")])],1)],1)})),o("main",[e._v("template")]),o("q-code",{attrs:{type:"html"}},[e._v('<q-row>\n  <q-files ref="myFiles" @getFiles="getFiles" color="#a1a1a1"></q-files>\n  <q-row\n    position="relative"\n    v-for="(img,index) in images"\n    :key="index")>\n    <q-row tag="img" h=30 w=30:src="img"></q-row>\n    <q-row\n      position="absolute" align="center" justify="center"\n      r=0 t=0 w=5 h=5 radius=5 bkColor="deepskyblue"\n      fontSize="12" color="white" @clicked="remove(index)">\n      <q-col>X</q-col>\n    </q-row>\n  </q-row>\n</q-row>')]),o("main",[e._v("javascript")]),o("q-code",[e._v("data() {\n  return {\n    files: [],\n    images: []\n  }\n},\nmethods: {\n  getFiles(data) {\n    this.files = data.files\n    this.images = data.images\n  },\n  remove(index) {\n    let myFiles = this.$refs.myFiles\n    myFiles.files.splice(index, 1)\n    myFiles.images.splice(index, 1)\n  }\n}")])],1)],1)],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"API一览",fontSize:"16",borderBottom:!0}}),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"Api"}}),o("q-table",{attrs:{tableOptions:e.tableOptions}})],1),o("q-row",{attrs:{tag:"section"}},[o("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"事件回调"}}),o("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[o("main",[e._v("@getFiles")]),e._v("上传文件后返回"),o("br"),e._v("\n有两个参数,第一个是"),o("main",[e._v("files")]),e._v("数组,第二个是图片的"),o("main",[e._v("src")]),e._v("数组")])],1)],1)],1)],1)},[],!1,null,null,null);t.default=s.exports}}]);