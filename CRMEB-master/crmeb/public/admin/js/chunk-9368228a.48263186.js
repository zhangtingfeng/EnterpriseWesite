(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9368228a"],{2180:function(e,t,i){"use strict";var o=i("801a");i.n(o).a},4553:function(e,t,i){"use strict";i.r(t),i("d3b7");var o=i("0e5c"),a=i("c4c8"),n=i("d708"),s=i("c276"),l={name:"vide11o",data:function(){return{fileUrl:n.a.apiBaseURL+"/file/upload",upload:{videoIng:!1},progress:0,videoLink:"",formValidate:{video_link:""},upload_type:"",uploadData:{},header:{}}},created:function(){this.uploadType(),this.getToken()},methods:{delVideo:function(){this.$set(this.formValidate,"video_link","")},uploadType:function(){var e=this;Object(a.I)().then((function(t){e.upload_type=t.data.upload_type}))},handleSuccess:function(e,t,i){200===e.status?(this.formValidate.video_link=e.data.src,this.$Message.success(e.msg)):this.$Message.error(e.msg)},videoSaveToUrl:function(e){var t=this;return Object(o.a)({file:e,pieceSize:3,success:function(e){t.formValidate.video_link=e.file_path,t.progress=100},error:function(e){t.$Message.error(e.msg)},uploading:function(e,i){t.videoIng=!0,e=Math.floor(e/i*100),t.progress=e}}),!1},getToken:function(){this.header["Authori-zation"]="Bearer "+Object(s.d)("token")},beforeUpload:function(){var e=this;return this.uploadData={},new Promise((function(t){e.$nextTick((function(){t(!0)}))}))},zh_uploadFile:function(){this.videoLink?this.formValidate.video_link=this.videoLink:this.$refs.refid.click()},zh_uploadFile_change:function(e){var t=this;if("video/mp4"!==e.target.files[0].type)return t.$Message.error("只能上传mp4文件");Object(a.t)().then((function(i){t.$videoCloud.videoUpload({type:i.data.type,evfile:e,res:i,uploading:function(e,i){t.upload.videoIng=e}}).then((function(e){t.formValidate.video_link=e.url,t.$Message.success("视频上传成功")})).catch((function(e){t.$Message.error(e)}))}))},uploads:function(){this.$emit("getvideo",this.formValidate.video_link)}}};i("2180"),i=i("2877"),i=Object(i.a)(l,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",[t("div",{staticClass:"mt20 ml20"},[t("Input",{staticClass:"perW35",attrs:{placeholder:"请输入视频链接"},model:{value:e.videoLink,callback:function(t){e.videoLink=t},expression:"videoLink"}}),t("input",{ref:"refid",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.zh_uploadFile_change}}),"1"!==e.upload_type||e.videoLink?t("Button",{staticClass:"ml10",attrs:{type:"primary",icon:"ios-cloud-upload-outline"},on:{click:e.zh_uploadFile}},[e._v(e._s(e.videoLink?"确认添加":"上传视频"))]):e._e(),"1"!==e.upload_type||e.videoLink?e._e():t("Upload",{staticClass:"ml10",staticStyle:{display:"inline-block"},attrs:{"show-upload-list":!1,action:e.fileUrl,"before-upload":e.videoSaveToUrl,data:e.uploadData,headers:e.header,multiple:!0}},[t("Button",{attrs:{type:"primary",icon:"ios-cloud-upload-outline"}},[e._v("上传视频")])],1),e.upload.videoIng?t("Progress",{attrs:{percent:e.progress,"stroke-width":5}}):e._e(),e.formValidate.video_link?t("div",{staticClass:"iview-video-style"},[t("video",{staticStyle:{width:"100%",height:"100% !important","border-radius":"10px"},attrs:{src:e.formValidate.video_link,controls:"controls"}},[e._v("\n        您的浏览器不支持 video 标签。\n      ")]),t("div",{staticClass:"mark"}),t("Icon",{staticClass:"iconv",attrs:{type:"ios-trash-outline"},on:{click:e.delVideo}})],1):e._e()],1),t("div",{staticClass:"mt50 ml20"},[t("Button",{attrs:{type:"primary"},on:{click:e.uploads}},[e._v("确认")])],1)])}),[],!1,null,"47d67022",null);t.default=i.exports},"801a":function(e,t,i){}}]);