(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/integral_goods_list"],{"0f75":function(t,e,i){},"4a60":function(t,e,i){"use strict";i.r(e);var s=i("b0f8"),o=i("69f4");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("6cba");var n,c=i("f0c5"),a=Object(c["a"])(o["default"],s["b"],s["c"],!1,null,"a69b7d26",null,!1,s["a"],n);e["default"]=a.exports},"5ae1":function(t,e,i){"use strict";(function(t){i("d5c5");s(i("66fd"));var e=s(i("4a60"));function s(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"5c6a":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("dbf8"),o=i("f7cb"),r=i("26cb"),n=i("c9cb"),c=h(i("cf74")),a=i("d5d8");function h(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("4f25"))}.bind(null,i)).catch(i.oe)},u=function(){Promise.all([i.e("common/vendor"),i.e("components/recommend/index")]).then(function(){return resolve(i("8084"))}.bind(null,i)).catch(i.oe)},l={computed:(0,r.mapGetters)(["uid"]),components:{recommend:u,home:d},mixins:[c.default],data:function(){return{imgHost:a.HTTP_REQUEST_URL,productList:[],is_switch:!0,where:{store_name:"",priceOrder:"",salesOrder:"",page:1,limit:20},price:0,stock:0,nows:!1,loadend:!1,loading:!1,loadTitle:this.$t("加载更多"),title:"",hostProduct:[],hotPage:1,hotLimit:10,hotScroll:!1}},onLoad:function(t){this.where.cid=t.cid||0,this.$set(this.where,"sid",t.sid||0),this.title=t.title||"",this.$set(this.where,"store_name",t.searchValue||""),this.get_product_list(),this.get_host_product()},methods:{godDetail:function(e){(0,n.goShopDetail)(e,this.uid).then((function(i){t.navigateTo({url:"/pages/points_mall/integral_goods_details?id=".concat(e.id)})}))},Changswitch:function(){var t=this;t.is_switch=!t.is_switch},searchSubmit:function(t){var e=this;e.$set(e.where,"store_name",t.detail.value),e.loadend=!1,e.$set(e.where,"page",1),this.get_product_list(!0)},get_host_product:function(){var t=this;t.hotScroll||(0,s.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))},set_where:function(t){switch(t){case 1:this.where={store_name:"",priceOrder:"",salesOrder:"",page:1,limit:20},this.price=0,this.stock=0;break;case 2:0==this.price?this.price=1:1==this.price?this.price=2:2==this.price&&(this.price=0),this.stock=0;break;case 3:0==this.stock?this.stock=1:1==this.stock?this.stock=2:2==this.stock&&(this.stock=0),this.price=0;break;case 4:this.nows=!this.nows;break}this.loadend=!1,this.$set(this.where,"page",1),this.get_product_list(!0)},setWhere:function(){0==this.price?this.where.priceOrder="":1==this.price?this.where.priceOrder="asc":2==this.price&&(this.where.priceOrder="desc"),0==this.stock?this.where.salesOrder="":1==this.stock?this.where.salesOrder="asc":2==this.stock&&(this.where.salesOrder="desc"),this.where.news=this.nows?1:0},get_product_list:function(t){var e=this;e.setWhere(),e.loadend||e.loading||(!0===t&&e.$set(e,"productList",[]),e.loading=!0,e.loadTitle="",(0,o.getStoreIntegralList)(e.where).then((function(t){var i=t.data,s=e.$util.SplitArray(i,e.productList),o=i.length<e.where.limit;e.loadend=o,e.loading=!1,e.loadTitle=o?e.$t("我也是有底线的"):e.$t("加载更多"),e.$set(e,"productList",s),e.$set(e.where,"page",e.where.page+1)})).catch((function(t){e.loading=!1,e.loadTitle=e.$t("加载更多")})))}},onPullDownRefresh:function(){},onReachBottom:function(){this.productList.length>0?this.get_product_list():this.get_host_product()}};e.default=l}).call(this,i("543d")["default"])},"69f4":function(t,e,i){"use strict";i.r(e);var s=i("5c6a"),o=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,(function(){return s[t]}))}(r);e["default"]=o.a},"6cba":function(t,e,i){"use strict";var s=i("0f75"),o=i.n(s);o.a},b0f8:function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return s}));var o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$t("搜索商品名称")),s=t.$t("默认"),o=t.$t("积分"),r=t.$t("销量"),n=t.$t("积分"),c=t.$t("人兑换"),a=t.$t("兑换"),h=t.__map(t.productList,(function(e,i){var s=t.__get_orig(e),o=e.vip_price&&e.vip_price>0?t.$t("积分"):null;return{$orig:s,m5:o}}));t.$mp.data=Object.assign({},{$root:{m0:i,m1:s,m2:o,m3:r,m4:n,m6:c,m7:a,l0:h}})},r=[]}},[["5ae1","common/runtime","common/vendor"]]]);