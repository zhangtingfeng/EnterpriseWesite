(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/news"],{1840:function(t,n,e){"use strict";e.r(n);var a=e("5167"),i=e("2295");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("c395");var u,r=e("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=c.exports},2295:function(t,n,e){"use strict";e.r(n);var a=e("b88e"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},5167:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.isIframe&&!t.itemNew.length?t.$t("暂无新闻，请上传新闻"):null);t.$mp.data=Object.assign({},{$root:{m0:e}})},o=[]},"9bc7":function(t,n,e){},b88e:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("cf74")),i=e("c9cb");function o(t){return t&&t.__esModule?t:{default:t}}var u=getApp(),r={name:"news",props:{dataConfig:{type:Object,default:function(){}}},mixins:[a.default],watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.img=t.imgUrl.url,this.itemNew=t.newList.list,this.isShow=t.isShow.val)}}},data:function(){return{indicatorDots:!1,autoplay:!0,duration:500,img:"",itemNew:[],name:this.$options.name,isIframe:!1,isShow:!0}},created:function(){this.isIframe=u.globalData.isIframe},mounted:function(){},methods:{gopage:function(n){(0,i.goPage)().then((function(e){-1!=n.indexOf("http")||(["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(n),t.navigateTo({url:n}))}))}}};n.default=r}).call(this,e("543d")["default"])},c395:function(t,n,e){"use strict";var a=e("9bc7"),i=e.n(a);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/news-create-component',
    {
        'pages/index/visualization/components/news-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1840"))
        })
    },
    [['pages/index/visualization/components/news-create-component']]
]);