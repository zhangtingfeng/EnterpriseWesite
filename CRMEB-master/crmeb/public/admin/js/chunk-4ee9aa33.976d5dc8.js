(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4ee9aa33"],{"792d":function(e,t,a){},"7de5":function(e,t,a){"use strict";a.r(t);var s={name:"clear",data:function(){return{delfromData:{}}},methods:{clearCache:function(){var e=this;this.$modalSure({title:"清除缓存",num:0,url:"system/refresh_cache/cache",method:"get",ids:""}).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))},clearlog:function(){var e=this;this.$modalSure({title:"清除日志",num:0,url:"system/refresh_cache/log",method:"get",ids:""}).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))}}};a("ab9e"),a=a("2877"),a=Object(a.a)(s,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",[t("div",{staticClass:"i-layout-page-header"},[t("div",{staticClass:"i-layout-page-header"},[t("span",{staticClass:"ivu-page-header-title"},[e._v(e._s(e.$route.meta.title))])])]),t("div",{staticClass:"acea-row row-center clear_tit"},[t("Button",{staticClass:"mr20",attrs:{type:"primary"},on:{click:e.clearCache}},[e._v("清除缓存")]),t("Button",{attrs:{type:"primary"},on:{click:e.clearlog}},[e._v("清除日志")])],1)])}),[],!1,null,"1c4ef79c",null);t.default=a.exports},ab9e:function(e,t,a){"use strict";var s=a("792d");a.n(s).a}}]);