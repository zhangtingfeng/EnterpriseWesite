(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_money/index"],{2789:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("dbf8"),o=e("910a"),c=e("cff9"),u=e("1118"),a=e("26cb"),r=s(e("cf74"));function s(t){return t&&t.__esModule?t:{default:t}}var h=function(){Promise.all([e.e("common/vendor"),e.e("components/recommend/index")]).then(function(){return resolve(e("8084"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/Authorize").then(function(){return resolve(e("4a3a"))}.bind(null,e)).catch(e.oe)},f=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("4f25"))}.bind(null,e)).catch(e.oe)},d={components:{recommend:h,authorize:l,home:f},mixins:[r.default],data:function(){return{userInfo:{},hostProduct:[],isClose:!1,recharge_switch:0,activity:{},isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&(this.getUserInfo(),this.get_host_product(),this.get_activity())},deep:!0}},onLoad:function(){this.isLogin?(this.getUserInfo(),this.get_host_product(),this.get_activity()):(0,u.toLogin)()},methods:{onLoadFun:function(){this.getUserInfo(),this.get_host_product(),this.get_activity()},authColse:function(t){this.isShowAuth=t},openSubscribe:function(n){t.showLoading({title:this.$t("正在加载")}),(0,o.openRechargeSubscribe)().then((function(e){t.hideLoading(),t.navigateTo({url:n})})).catch((function(){t.hideLoading()}))},getUserInfo:function(){var t=this;(0,c.getUserInfo)().then((function(n){t.$set(t,"userInfo",n.data),t.recharge_switch=n.data.recharge_switch}))},get_activity:function(){var t=this;(0,c.userActivity)().then((function(n){t.$set(t,"activity",n.data)}))},get_host_product:function(){var t=this;t.hotScroll||(0,i.getProductHot)(t.hotPage,t.hotLimit).then((function(n){t.hotPage++,t.hotScroll=n.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(n.data)}))}},onReachBottom:function(){this.get_host_product()}};n.default=d}).call(this,e("543d")["default"])},"64e7":function(t,n,e){"use strict";e.r(n);var i=e("c30b"),o=e("965a");for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);e("7262");var u,a=e("f0c5"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"544736bf",null,!1,i["a"],u);n["default"]=r.exports},"670a":function(t,n,e){"use strict";(function(t){e("d5c5");i(e("66fd"));var n=i(e("64e7"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},7262:function(t,n,e){"use strict";var i=e("f7e7"),o=e.n(i);o.a},"965a":function(t,n,e){"use strict";e.r(n);var i=e("2789"),o=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=o.a},c30b:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$t("总资产(元)")),i=t.recharge_switch?t.$t("充值"):null,o=t.recharge_switch?t.$t("累计充值(元)"):null,c=t.$t("累计消费(元)"),u=t.$t("账单记录"),a=t.$t("消费记录"),r=t.recharge_switch?t.$t("充值记录"):null,s=t.$t("积分中心"),h=t.$t("签到领积分"),l=t.$t("赚积分抵现金"),f=t.$t("领取优惠券"),d=t.$t("满减享优惠"),m=t.$t("最新拼团活动"),_=t.$t("最新的优惠商品上架拼团"),g=t.activity.is_pink?t.$t("立即参与"):null,v=t.activity.is_pink?null:t.$t("已结束"),$=t.$t("当前限时秒杀"),p=t.$t("最新商品秒杀进行中"),b=t.activity.is_seckill?t.$t("立即参与"):null,y=t.activity.is_seckill?null:t.$t("已结束"),w=t.$t("砍价活动"),L=t.$t("呼朋唤友来砍价"),P=t.activity.is_bargin?t.$t("立即参与"):null,I=t.activity.is_bargin?null:t.$t("已结束");t.$mp.data=Object.assign({},{$root:{m0:e,m1:i,m2:o,m3:c,m4:u,m5:a,m6:r,m7:s,m8:h,m9:l,m10:f,m11:d,m12:m,m13:_,m14:g,m15:v,m16:$,m17:p,m18:b,m19:y,m20:w,m21:L,m22:P,m23:I}})},c=[]},f7e7:function(t,n,e){}},[["670a","common/runtime","common/vendor"]]]);