(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5e75d41e"],{"1cff":function(t,e,n){},"4b65":function(t,e,n){"use strict";n.r(e);var a=n("a069"),s=n("c24f");a={components:{WangEditor:a.a},data:function(){return{ueConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},id:0,agreement:{title:"",content:"",status:1},spinShow:!1}},created:function(){this.memberAgreement()},methods:{getEditorContent:function(t){this.agreement.content=t},memberAgreement:function(){var t=this;this.spinShow=!0,Object(s.r)().then((function(e){t.spinShow=!1;e=e.data;var n=e.title,a=e.content,s=e.status;e=e.id;t.agreement.title=n,t.agreement.content=a,t.agreement.status=s,t.id=e})).catch((function(e){t.$Message.error(e),t.spinShow=!1}))},memberAgreementSave:function(){var t=this;this.$Spin.show(),Object(s.s)(this.id,this.agreement).then((function(e){t.$Spin.hide(),t.$Message.success("保存成功"),t.memberAgreement()})).catch((function(e){t.$Spin.hide(),t.$Message.error(e)}))}}},n("defb"),n=n("2877"),n=Object(n.a)(a,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",[e("div",{staticClass:"i-layout-page-header"},[e("div",{staticClass:"i-layout-page-header"},[e("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("Form",{attrs:{"label-width":80},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormItem",{attrs:{label:"协议名称："}},[e("Input",{model:{value:t.agreement.title,callback:function(e){t.$set(t.agreement,"title",e)},expression:"agreement.title"}})],1),e("FormItem",{attrs:{label:"协议内容："}},[e("WangEditor",{attrs:{content:t.agreement.content},on:{editorContent:t.getEditorContent}})],1),e("FormItem",{attrs:{label:"开启状态："}},[e("i-switch",{attrs:{size:"large","true-value":1,"false-value":0},model:{value:t.agreement.status,callback:function(e){t.$set(t.agreement,"status",e)},expression:"agreement.status"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])],1),e("FormItem",[e("Button",{attrs:{type:"primary"},on:{click:t.memberAgreementSave}},[t._v("保存")])],1)],1),t.spinShow?e("Spin",{attrs:{fix:""}}):t._e()],1)],1)}),[],!1,null,"67db297a",null);e.default=n.exports},defb:function(t,e,n){"use strict";var a=n("1cff");n.n(a).a}}]);