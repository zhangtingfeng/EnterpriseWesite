(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_phone-index"],{"4b32":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),s=i(n("3f5d")),o=i(n("2f7a")),r=n("e5e8"),c=n("1118"),u=n("26cb"),d=i(n("cf74")),l={mixins:[s.default,d.default],components:{Verify:o.default},data:function(){return{phone:"",captcha:"",isAuto:!1,isShowAuth:!1,key:"",authKey:"",type:0}},computed:(0,u.mapGetters)(["isLogin"]),onLoad:function(t){var e=this;this.isLogin?((0,r.verifyCode)().then((function(t){e.$set(e,"key",t.data.key)})),this.authKey=t.key||"",this.url=t.url||""):(0,c.toLogin)(),this.type=t.type||0},methods:{onLoadFun:function(){},authColse:function(t){this.isShowAuth=t},editPwd:function(){var t=this;return t.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(t.phone)?t.captcha?void(0==this.type?(0,r.bindingUserPhone)({phone:t.phone,captcha:t.captcha}).then((function(e){if(void 0===e.data||!e.data.is_bind)return t.$util.Tips({title:t.$t("绑定成功"),icon:"success"},{tab:5,url:"/pages/users/user_info/index"});uni.showModal({title:t.$t("是否绑定账号"),content:e.msg,confirmText:t.$t("绑定"),success:function(e){if(e.confirm)(0,r.bindingUserPhone)({phone:t.phone,captcha:t.captcha,step:1}).then((function(e){return t.$util.Tips({title:e.msg,icon:"success"},{tab:5,url:"/pages/users/user_info/index"})})).catch((function(e){return t.$util.Tips({title:e})}));else if(e.cancel)return t.$util.Tips({title:t.$t("您已取消绑定！")},{tab:5,url:"/pages/users/user_info/index"})}})})).catch((function(e){return t.$util.Tips({title:e})})):(0,r.updatePhone)({phone:t.phone,captcha:t.captcha}).then((function(e){return t.$util.Tips({title:e.msg,icon:"success"},{tab:5,url:"/pages/users/user_info/index"})})).catch((function(e){return t.$util.Tips({title:e})}))):t.$util.Tips({title:t.$t("请填写验证码")}):t.$util.Tips({title:t.$t("请输入正确的手机号码")}):t.$util.Tips({title:t.$t("请填写手机号码")})},success:function(t){this.$refs.verify.hide();var e=this;(0,r.verifyCode)().then((function(n){(0,r.registerVerify)(e.phone,"reset",n.data.key,"blockPuzzle",t.captchaVerification).then((function(t){e.$util.Tips({title:t.msg}),e.sendCode()})).catch((function(t){return e.$util.Tips({title:t})}))}))},code:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.phone){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:n.$t("请填写手机号码")}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.phone)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:n.$t("请输入正确的手机号码")}));case 5:return t.$refs.verify.show(),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})))()}}};e.default=l},a6e1:function(t,e,n){"use strict";var i=n("dbc9"),a=n.n(i);a.a},aa31:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.editPwd.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"ChangePassword"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"number",placeholder:t.$t("填写手机号码"),"placeholder-class":"placeholder"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:t.$t("填写验证码"),"placeholder-class":"placeholder"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code font-num",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),n("v-uni-button",{staticClass:"confirmBnt bg-color",attrs:{"form-type":"submit"}},[t._v(t._s(t.$t("确认绑定")))])],1)],1),n("Verify",{ref:"verify",attrs:{captchaType:"blockPuzzle",imgSize:{width:"330px",height:"155px"}},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.success.apply(void 0,arguments)}}})],1)},s=[]},dbc9:function(t,e,n){var i=n("fe45");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("512b85ab",i,!0,{sourceMap:!1,shadowMode:!1})},f0d6:function(t,e,n){"use strict";n.r(e);var i=n("4b32"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},f29d:function(t,e,n){"use strict";n.r(e);var i=n("aa31"),a=n("f0d6");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("a6e1");var o,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"bdaf54c2",null,!1,i["a"],o);e["default"]=c.exports},fe45:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-bdaf54c2]{background-color:#fff!important}.ChangePassword .phone[data-v-bdaf54c2]{font-size:%?32?%;font-weight:700;text-align:center;margin-top:%?55?%}.ChangePassword .list[data-v-bdaf54c2]{width:%?580?%;margin:%?53?% auto 0 auto}.ChangePassword .list .item[data-v-bdaf54c2]{width:100%;height:%?110?%;border-bottom:%?2?% solid #f0f0f0}.ChangePassword .list .item uni-input[data-v-bdaf54c2]{width:100%;height:100%;font-size:%?32?%}.ChangePassword .list .item .placeholder[data-v-bdaf54c2]{color:#b9b9bc}.ChangePassword .list .item uni-input.codeIput[data-v-bdaf54c2]{width:%?340?%}.ChangePassword .list .item .code[data-v-bdaf54c2]{font-size:%?32?%;background-color:#fff}.ChangePassword .list .item .code.on[data-v-bdaf54c2]{color:#b9b9bc!important}.ChangePassword .confirmBnt[data-v-bdaf54c2]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?92?% auto 0 auto;text-align:center;line-height:%?90?%}body.?%PAGE?%[data-v-bdaf54c2]{background-color:#fff!important}',""]),t.exports=e}}]);