(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/lottery/grids/index"],{"036d":function(t,e,o){"use strict";o.r(e);var n=o("18c0"),a=o("9910");for(var r in a)"default"!==r&&function(t){o.d(e,t,(function(){return a[t]}))}(r);o("b582");var i,d=o("f0c5"),l=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"492e0a9d",null,!1,n["a"],i);e["default"]=l.exports},"18c0":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,o=(t._self._c,t.lotteryShow&&t.loading?t.$t("恭喜您"):null),n=t.lotteryShow&&t.loading?t.$t("获得"):null,a=t.lotteryShow&&t.loading?t.$t("次"):null,r=t.lotteryShow&&t.loading||t.lotteryShow||!t.loading?null:t.$t("商家暂未上架活动哦");t._isMounted||(t.e0=function(){t.addressModel=!1}),t.$mp.data=Object.assign({},{$root:{m0:o,m1:n,m2:a,m3:r}})},r=[]},"797c":function(t,e,o){},9910:function(t,e,o){"use strict";o.r(e);var n=o("f018"),a=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"9f38":function(t,e,o){"use strict";(function(t){o("d5c5");n(o("66fd"));var e=n(o("036d"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=o,t(e.default)}).call(this,o("543d")["createPage"])},b582:function(t,e,o){"use strict";var n=o("797c"),a=o.n(n);a.a},f018:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("e434"),a=(o("cff9"),o("1118")),r=o("26cb"),i=l(o("cf74")),d=o("d5d8");function l(t){return t&&t.__esModule?t:{default:t}}var c=function(){Promise.all([o.e("common/vendor"),o.e("components/zb-code/zb-code")]).then(function(){return resolve(o("435e"))}.bind(null,o)).catch(o.oe)},s=function(){Promise.all([o.e("common/vendor"),o.e("pages/goods/components/lottery/index")]).then(function(){return resolve(o("6f08"))}.bind(null,o)).catch(o.oe)},u=function(){o.e("pages/goods/lottery/components/showbox").then(function(){return resolve(o("72f5"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("pages/goods/lottery/components/noticeBar").then(function(){return resolve(o("9a8b"))}.bind(null,o)).catch(o.oe)},h=function(){o.e("pages/goods/lottery/components/lotteryAleart").then(function(){return resolve(o("32e8"))}.bind(null,o)).catch(o.oe)},p=function(){Promise.all([o.e("common/vendor"),o.e("pages/goods/lottery/components/userAddress")]).then(function(){return resolve(o("c4a7"))}.bind(null,o)).catch(o.oe)},y=function(){Promise.all([o.e("common/vendor"),o.e("components/home/index")]).then(function(){return resolve(o("4f25"))}.bind(null,o)).catch(o.oe)},m=(getApp(),{components:{gridsLottery:s,showBox:u,noticeBar:f,lotteryAleart:h,userAddress:p,zbCode:c,home:y},mixins:[i.default],data:function(){return{imgHost:d.HTTP_REQUEST_URL,lotteryShow:!0,loading:!1,H5ShareBox:!1,addressModel:!1,lottery_num:0,aleartType:0,aleartStatus:!1,lottery_draw_param:{startIndex:3,totalCount:3,winingIndex:1,speed:100},userList:{type:"user",data:[]},myList:{type:"me",data:[]},htmlData:{type:"html",data:""},prize:[],factor_num:0,id:0,alData:{},type:"",followCode:!1,codeShow:!1,cid:"1",ifShow:!0,val:"",lv:3,onval:!0,loadMake:!0,src:"",codeSrc:"",image:"",is_content:0,is_all_record:0,is_personal_record:0,factor:0}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getLotteryData(this.type)},deep:!0}},onLoad:function(t){this.type=t.type,this.isLogin?this.getLotteryData(this.type):(0,a.toLogin)()},methods:{getLotteryData:function(e){var o=this;t.showLoading({title:this.$t("获取抽奖信息")}),(0,n.getLotteryData)(e).then((function(e){o.loading=!0,o.factor_num=e.data.lottery.factor_num,o.id=e.data.lottery.id,o.image=e.data.lottery.image,o.prize=e.data.lottery.prize,o.lottery_num=e.data.lottery_num,o.htmlData.data=e.data.lottery.content,o.is_content=e.data.lottery.is_content,o.is_personal_record=e.data.lottery.is_personal_record,o.is_all_record=e.data.lottery.is_all_record,o.factor=e.data.lottery.factor,o.userList.data=e.data.all_record,o.myList.data=e.data.user_record,o.prize.push({}),t.hideLoading()})).catch((function(e){t.hideLoading(),o.lotteryShow=!1,o.loading=!0,o.$util.Tips({title:e})}))},closeLottery:function(t){this.aleartStatus=!1,this.getLotteryData(this.type),6===this.alData.type&&(this.addressModel=!0)},getAddress:function(t){var e=this,o=t;o.id=this.alData.lottery_record_id,o.address=t.address.province+t.address.city+t.address.district+t.detail,(0,n.receiveLottery)(o).then((function(t){e.$util.Tips({title:e.$t("领取成功")}),e.addressModel=!1})).catch((function(t){e.$util.Tips({title:t})}))},getWiningIndex:function(t){var e=this;this.aleartType=0;var o=this;(0,n.startLottery)({id:this.id,type:this.type}).then((function(n){if("subscribe"===n.data.code)return o.$set(o,"followCode",!0),void(e.codeSrc=n.data.url);e.prize.forEach((function(o,a){n.data.id===o.id&&(e.alData=n.data,e.lottery_draw_param.winingIndex=a,t(e.lottery_draw_param))}))})).catch((function(t){e.$util.Tips({title:t})}))},luck_draw_finish:function(t){this.aleartType=2,this.aleartStatus=!0},qrR:function(t){this.codeSrc=t}}});e.default=m}).call(this,o("543d")["default"])}},[["9f38","common/runtime","common/vendor"]]]);