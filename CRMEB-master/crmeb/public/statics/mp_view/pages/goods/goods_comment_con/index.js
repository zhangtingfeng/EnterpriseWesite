(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods_comment_con/index"],{"5dbb":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$t("￥")),i=t.__map(t.scoreList,(function(n,e){var i=t.__get_orig(n),o=-1!==n.index?t.$t("星"):null;return{$orig:i,m1:o}})),o=t.$t("商品满足你的期待么？说说你的想法，分享给想买的他们吧"),u=t.pics.length<8?t.$t("上传图片"):null,c=t.$t("立即评价");t.$mp.data=Object.assign({},{$root:{m0:e,l0:i,m2:o,m3:u,m4:c}})},u=[]},"6a4f":function(t,n,e){"use strict";e.r(n);var i=e("5dbb"),o=e("aa04");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("c98c");var c,a=e("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"069efca4",null,!1,i["a"],c);n["default"]=s.exports},aa04:function(t,n,e){"use strict";e.r(n);var i=e("e6ef"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},b0e8:function(t,n,e){"use strict";(function(t){e("d5c5");i(e("66fd"));var n=i(e("6a4f"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},c98c:function(t,n,e){"use strict";var i=e("d560"),o=e.n(i);o.a},d560:function(t,n,e){},e6ef:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("a398"),o=e("1118"),u=e("26cb"),c=a(e("cf74"));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(){e.e("components/Authorize").then(function(){return resolve(e("4a3a"))}.bind(null,e)).catch(e.oe)},r={components:{authorize:s},mixins:[c.default],data:function(){return{pics:[],scoreList:[{name:this.$t("商品质量"),stars:["","","","",""],index:-1},{name:this.$t("服务态度"),stars:["","","","",""],index:-1}],orderId:"",unique:"",productInfo:{},cart_num:0,isAuto:!1,isShowAuth:!1,canvasWidth:"",canvasHeight:"",canvasStatus:!1}},computed:(0,u.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&this.getOrderProduct()},deep:!0}},onLoad:function(t){if(!t.unique||!t.uni)return this.$util.Tips({title:this.$t("缺少参数")},{tab:3,url:1});this.unique=t.unique,this.orderId=t.uni,this.isLogin?this.getOrderProduct():(0,o.toLogin)()},methods:{onLoadFun:function(){this.getOrderProduct()},authColse:function(t){this.isShowAuth=t},getOrderProduct:function(){var t=this;(0,i.orderProduct)(t.unique).then((function(n){t.$set(t,"productInfo",n.data.productInfo),t.cart_num=n.data.cart_num}))},stars:function(t,n){this.scoreList[n].index=t},DelPic:function(t){var n=this;this.pics[t];n.pics.splice(t,1),n.$set(n,"pics",n.pics)},uploadpic:function(){var t=this,n=this;this.canvasStatus=!0,n.$util.uploadImageChange("upload/image",(function(t){n.pics.push(t.data.url)}),(function(n){t.canvasStatus=!1}),(function(n){t.canvasWidth=n.w,t.canvasHeight=n.h}))},formSubmit:function(n){n.detail.formId;var e=n.detail.value,o=this,u=o.scoreList[0].index+1===0?"":o.scoreList[0].index+1,c=o.scoreList[1].index+1===0?"":o.scoreList[1].index+1;if(!e.comment)return o.$util.Tips({title:o.$t("请填写你对宝贝的心得")});e.product_score=u,e.service_score=c,e.pics=o.pics,e.unique=o.unique,t.showLoading({title:o.$t("正在发布评论")}),(0,i.orderComment)(e).then((function(n){if(t.hideLoading(),n.data.to_lottery){var e="/pages/goods/goods_comment_con/lottery_comment?type=4&order_id="+o.orderId+"&date="+Date.parse(new Date);o.$util.Tips({title:o.$t("感谢您的评价"),icon:"success"},e)}else o.$util.Tips({title:o.$t("感谢您的评价"),icon:"success"}),setTimeout((function(n){t.navigateBack()}),1500)})).catch((function(n){return t.hideLoading(),o.$util.Tips({title:n})}))}}};n.default=r}).call(this,e("543d")["default"])}},[["b0e8","common/runtime","common/vendor"]]]);