(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{HUFz:function(e,t,r){"use strict";r.r(t);var n=r("YKMj"),o=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),a=function(e,t,r,n){var o,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,r,l):o(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.noFormat={name:"",age:""},t.format={name:"",tel:""},t.rules={name:[{required:!0,message:"名字不能为空"},{min:3,max:5,message:"名字长度在3到5个字符"}],tel:[{required:!0,message:"电话不能为空"},{type:"tel",message:"请输入正确的电话号码"}]},t.qForm={titles:[{value:"Prop"},{value:"Type"},{value:"Required"},{value:"Default"},{value:"Description"}],datas:[{prop:[{value:"model"},{value:"Object"},{value:"Y"},{value:"无"},{value:"动态绑定的值"}]},{prop:[{value:"rules"},{value:"Object"},{value:"N"},{value:"无"},{value:"验证规则"}]}]},t.qInput={titles:[{value:"Prop"},{value:"Type"},{value:"Required"},{value:"Default"},{value:"Description"}],datas:[{prop:[{value:"v-model"},{value:"Any"},{value:"Y"},{value:"无"},{value:"动态绑定的值"}]},{prop:[{value:"type"},{value:"String"},{value:"N"},{value:"text"},{value:"输入框类型"}]},{prop:[{value:"placeholder"},{value:"String"},{value:"N"},{value:""},{value:"输入框提醒文字"}]},{prop:[{value:"fix"},{value:"Number"},{value:"N"},{value:"4"},{value:"默认保留小数位数"}]},{prop:[{value:"prop"},{value:"String"},{value:"N"},{value:"无"},{value:"验证规则下对应属性名"}]},{prop:[{value:"hasBorder"},{value:"Boolean"},{value:"N"},{value:"false"},{value:"是否有全局border"}]},{prop:[{value:"borderBottom"},{value:"Boolean"},{value:"N"},{value:"true"},{value:"是否有下border"}]},{prop:[{value:"borderColor"},{value:"String"},{value:"N"},{value:"#d6d7dc"},{value:"border颜色"}]},{prop:[{value:"color"},{value:"String"},{value:"N"},{value:"无"},{value:"字体颜色"}]},{prop:[{value:"bkColor"},{value:"String"},{value:"N"},{value:"无"},{value:"背景颜色"}]}]},t}return o(t,e),t.prototype.submit1=function(){this.$notice.toast("名字:"+this.noFormat.name+";年龄:"+this.noFormat.age)},t.prototype.submit2=function(){var e=this;this.$refs.myForm2.validate().then(function(t){t&&e.$notice.toast("名字:"+e.format.name+";电话:"+e.format.tel)})},t=a([Object(n.a)({})],t)}(n.d),i=r("KHd+"),u=Object(i.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input"},[r("q-row",{attrs:{position:"fixed",t:"0",l:"0",col:"100",zIndex:"1"}},[r("q-head-bar",{attrs:{bkColor:"deepskyblue",color:"#fff",leftArrow:!0,centerText:"q-form",rightEmpty:!0}})],1),r("q-row",{attrs:{h:"12"}}),r("q-row",{attrs:{pl:"2",pr:"2"}},[r("q-row",{attrs:{tag:"section"}},[r("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"Demo演示",fontSize:"16",borderBottom:!0}}),r("q-row",{attrs:{fontSize:"14",lh:"9",indent:"2",mb:"2"}},[e._v("控制表单的组件有两个,一个"),r("main",[e._v("q-form")]),e._v(",一个"),r("main",[e._v("q-input")]),e._v(",\n这两个组件优势体现在,一个是验证,验证提供了友好的api,不用根据类型一个一个调用事件,\n第二个优势是移动端的键盘类型,通过"),r("main",[e._v("type")]),e._v("传的值可以判断到底是提供数字键盘、字符键盘、搜索键盘\n我们来看几个列子")]),r("q-row",{attrs:{tag:"section"}},[r("q-row",{attrs:{tag:"section"}},[r("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"不需要验证的表单"}}),r("q-form",{ref:"myForm1"},[r("q-row",{attrs:{h:"12",dir:"left",align:"center"}},[r("q-row",{attrs:{w:"15",align:"center",justify:"center"}},[e._v("名字:")]),r("q-input",{attrs:{placeholder:"请输入你的名字"},model:{value:e.noFormat.name,callback:function(t){e.$set(e.noFormat,"name",t)},expression:"noFormat.name"}})],1),r("q-row",{attrs:{h:"12",dir:"left",align:"center"}},[r("q-row",{attrs:{w:"15",align:"center",justify:"center"}},[e._v("年龄:")]),r("q-input",{attrs:{type:"integer",placeholder:"请输入你的年龄"},model:{value:e.noFormat.age,callback:function(t){e.$set(e.noFormat,"age",t)},expression:"noFormat.age"}})],1),r("q-row",{attrs:{h:"12",justify:"flex-end",align:"center"}},[r("q-row",{attrs:{row:"80",col:"40",bkColor:"deepskyblue",radius:20,justify:"center",align:"center"},on:{clicked:e.submit1}},[r("q-col",{attrs:{color:"white"}},[e._v("提交")])],1)],1)],1),r("main",[e._v("template")]),r("q-code",{attrs:{type:"html"}},[e._v('<q-form ref="myForm1">\n  <q-row h=12 dir="left" align="center">\n    <q-row w=15 align="center" justify="center">名字:</q-row>\n    <q-input v-model="noFormat.name" placeholder="请输入你的名字"></q-input>\n  </q-row>\n  <q-row h=12 dir="left" align="center">\n    <q-row w=15 align="center" justify="center">年龄:</q-row>\n    <q-input type="integer" v-model="noFormat.age" placeholder="请输入你的年龄"></q-input>\n  </q-row>\n  <q-row h=12 justify="flex-end" align="center">\n    <q-row\n      row=80 col=40\n      bkColor="deepskyblue"\n      :radius="20"\n      justify="center"\n      align="center"\n      @clicked="submit1">\n      <q-col color="white">提交</q-col>\n    </q-row>\n  </q-row>\n</q-form>')]),r("main",[e._v("javascript")]),r("q-code",[e._v("data() {\n  return {\n    noFormat: {\n      name: '',\n      age: ''\n    }\n  }\n},\nmethods: {\n  submit1() {\n    this.$notice.toast(`名字:${this.noFormat.name};年龄:${this.noFormat.age}`)\n  }\n}")])],1),r("q-row",{attrs:{tag:"section"}},[r("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"需要验证的表单"}}),r("q-form",{ref:"myForm2",attrs:{model:e.format,rules:e.rules}},[r("q-row",{attrs:{h:"12",dir:"left",align:"center"}},[r("q-row",{attrs:{w:"15",align:"center",justify:"center"}},[e._v("名字:")]),r("q-input",{attrs:{prop:"name",placeholder:"名字长度在3到5个字符"},model:{value:e.format.name,callback:function(t){e.$set(e.format,"name",t)},expression:"format.name"}})],1),r("q-row",{attrs:{h:"12",dir:"left",align:"center"}},[r("q-row",{attrs:{w:"15",align:"center",justify:"center"}},[e._v("电话:")]),r("q-input",{attrs:{prop:"tel",type:"tel",placeholder:"请输入你的电话"},model:{value:e.format.tel,callback:function(t){e.$set(e.format,"tel",t)},expression:"format.tel"}})],1),r("q-row",{attrs:{h:"12",justify:"flex-end",align:"center"}},[r("q-row",{attrs:{row:"80",col:"40",bkColor:"deepskyblue",radius:20,justify:"center",align:"center"},on:{clicked:e.submit2}},[r("q-col",{attrs:{color:"white"}},[e._v("提交")])],1)],1)],1),r("main",[e._v("template")]),r("q-code",{attrs:{type:"html"}},[e._v('<q-form ref="myForm2" :model="format" :rules="rules">\n  <q-row h=12 dir="left" align="center">\n    <q-row w=15 align="center" justify="center">名字:</q-row>\n    <q-input\n      prop="name" v-model="format.name" placeholder="名字长度在3到5个字符"></q-input>\n  </q-row>\n  <q-row h=12 dir="left" align="center">\n    <q-row w=15 align="center" justify="center">电话:</q-row>\n    <q-input\n      prop="tel" type="tel"\n      v-model="format.tel" placeholder="请输入你的电话"></q-input>\n  </q-row>\n  <q-row h=12 justify="flex-end" align="center">\n    <q-row\n      row=80 col=40\n      bkColor="deepskyblue"\n      :radius="20"\n      justify="center"\n      align="center"\n      @clicked="submit2">\n      <q-col color="white">提交</q-col>  \n    </q-row>\n  </q-row>\n</q-form>')]),r("main",[e._v("javascript")]),r("q-code",[e._v("data() {\n  return {\n    format: {\n      name: '',\n      tel: ''\n    },\n    rules: {\n      name: [{\n          required: true,\n          message: '名字不能为空'\n        },\n        {\n          min: 3,\n          max: 5,\n          message: '名字长度在3到5个字符'\n        }\n      ],\n      tel: [{\n          required: true,\n          message: '电话不能为空'\n        },\n        {\n          type: 'tel',\n          message: '请输入正确的电话号码'\n        }\n      ]\n    }\n  }\n},\nmethods: {\n  submit2() {\n    let myForm = this.$refs.myForm2\n    myForm.validate().then((bool) => {\n      if (bool) {\n        this.$notice.toast(`名字:${this.format.name};电话:${this.format.tel}`)\n      }\n    })\n  }\n}")])],1)],1)],1),r("q-row",{attrs:{tag:"section"}},[r("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"API一览",fontSize:"16",borderBottom:!0}}),r("q-row",{attrs:{tag:"section"}},[r("q-row",{attrs:{tag:"section"}},[r("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"q-form"}}),r("q-table",{attrs:{tableOptions:e.qForm}})],1),r("q-row",{attrs:{tag:"section"}},[r("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"q-input"}}),r("q-table",{attrs:{tableOptions:e.qInput}})],1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=u.exports}}]);