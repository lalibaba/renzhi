(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15db86cc"],{4449:function(e,t,a){"use strict";a("c9e9")},9355:function(e,t,a){"use strict";a("fc8c")},c9e9:function(e,t,a){},eae0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},[a("page-tools",{attrs:{"show-before":!0},scopedSlots:e._u([{key:"before",fn:function(){return[e._v(" 本月"+e._s(e.tips.dateRange)+"：社保在缴 "+e._s(e.tips.socialSecurityCount)+" 公积金在缴 "+e._s(e.tips.providentFundCount)+" 增员 "+e._s(e.tips.newsCount)+" 减员 "+e._s(e.tips.reducesCount)+" 入职 "+e._s(e.tips.worksCount)+" 离职 "+e._s(e.tips.leavesCount)+" ")]},proxy:!0},{key:"after",fn:function(){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.$router.push("/social_securitys/historicalArchiving")}}},[e._v("历史归档")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.$router.push("/social_securitys/monthStatement?yearMonth="+e.yearMonth)}}},[e._v(e._s(e.yearMonth)+"报表")])]},proxy:!0}])}),a("social-tool"),a("el-card",{staticClass:"hr-block"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,"default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),a("el-table-column",{attrs:{prop:"username",label:"姓名",sortable:""}}),a("el-table-column",{attrs:{prop:"mobile",label:"手机",sortable:""}}),a("el-table-column",{attrs:{prop:"workNumber",label:"工号",sortable:""}}),a("el-table-column",{attrs:{prop:"departmentName",label:"部门",sortable:"",width:"180"}}),a("el-table-column",{attrs:{prop:"timeOfEntry",label:"入职时间",sortable:""}}),a("el-table-column",{attrs:{prop:"leaveTime",label:"离职时间",sortable:""}}),a("el-table-column",{attrs:{prop:"participatingInTheCity",label:"社保城市",width:"180"}}),a("el-table-column",{attrs:{prop:"providentFundCity",label:"公积金城市",width:"180"}}),a("el-table-column",{attrs:{prop:"socialSecurityBase",label:"社保基数"}}),a("el-table-column",{attrs:{prop:"providentFundBase",label:"公积金基数"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.$router.push("/social_securitys/detail/"+t.row.id)}}},[e._v("查看详情")])]}}])})],1),a("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",align:"middle",justify:"center"}},[a("el-pagination",{attrs:{total:e.page.total,"current-page":e.page.page,"page-size":e.page.pageSize,layout:"prev, pager, next"},on:{"current-change":e.pageChange}})],1)],1)],1)])},s=[],c=a("5530"),r=a("c7eb"),i=a("1da1"),l=(a("99af"),a("b775"));function o(e){return Object(l["a"])({url:"/social_securitys/list",method:"post",data:e})}function u(){return Object(l["a"])({url:"/social_securitys/settings"})}var p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cont-top-box"},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"部门"}},[a("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:e.departmentChecks,callback:function(t){e.departmentChecks=t},expression:"departmentChecks"}},e._l(e.departmentList,(function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.id},on:{change:e.checkChange}},[e._v(e._s(t.name))])})),1)],1),a("el-form-item",{attrs:{label:"社保城市"}},[a("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:e.socialSecurityChecks,callback:function(t){e.socialSecurityChecks=t},expression:"socialSecurityChecks"}},e._l(e.cityList,(function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.id},on:{change:e.checkChange}},[e._v(e._s(t.name))])})),1)],1),a("el-form-item",{attrs:{label:"公积金城市"}},[a("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:e.providentFundChecks,callback:function(t){e.providentFundChecks=t},expression:"providentFundChecks"}},e._l(e.cityList,(function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.id},on:{change:e.checkChange}},[e._v(e._s(t.name))])})),1)],1)],1)],1)},h=[];function d(){return Object(l["a"])({url:"/sys/city"})}var b=a("1eef"),m={name:"SocialTool",data:function(){return{tips:{},keyword:"",departmentChecks:[],socialSecurityChecks:[],providentFundChecks:[],cityList:[],departmentList:[]}},created:function(){this.getCityList(),this.getDepartments()},methods:{getCityList:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:e.cityList=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getDepartments:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function t(){var a,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["c"])();case 2:a=t.sent,n=a.depts,e.departmentList=n;case 5:case"end":return t.stop()}}),t)})))()},checkChange:function(){var e={departmentChecks:this.departmentChecks,socialSecurityChecks:this.socialSecurityChecks,providentFundChecks:this.providentFundChecks};this.$parent.changeSelectParams&&this.$parent.changeSelectParams(e)}}},f=m,g=(a("4449"),a("2877")),k=Object(g["a"])(f,p,h,!1,null,"592424a2",null),y=k.exports,v={name:"SocialTableIndex",components:{SocialTool:y},data:function(){return{list:[],yearMonth:"",page:{page:1,pageSize:10,total:0},selectParams:{},tips:{},loading:!1}},created:function(){this.getSocialList(),this.getSettings()},methods:{getSettings:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function t(){var a,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:a=t.sent,n=a.dataMonth,e.yearMonth=n;case 5:case"end":return t.stop()}}),t)})))()},goDetail:function(e,t,a){this.$router.push({path:"detail"})},getSocialList:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function t(){var a,n,s;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o(Object(c["a"])(Object(c["a"])({},e.page),e.selectParams));case 3:a=t.sent,n=a.rows,s=a.total,e.list=n,e.page.total=s,t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](0);case 12:return t.prev=12,e.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,10,12,15]])})))()},changeSelectParams:function(e){this.selectParams.departmentChecks=e.departmentChecks,this.selectParams.providentFundChecks=e.providentFundChecks,this.selectParams.socialSecurityChecks=e.socialSecurityChecks,this.page.page=1,this.getSocialList()},pageChange:function(e){this.page.page=e,this.getSocialList()},handleExport:function(){}}},C=v,w=(a("9355"),Object(g["a"])(C,n,s,!1,null,"30d17fe2",null));t["default"]=w.exports},fc8c:function(e,t,a){}}]);