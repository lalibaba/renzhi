(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45ed53d6"],{"01f5":function(e,t,a){"use strict";t["a"]={hireType:[{id:1,value:"正式"},{id:2,value:"非正式"}],subjection:[{id:"1",value:"总部"},{id:"2",value:"分城市"}],workingState:[{id:"1",value:"在职"},{id:"2",value:"离职"}],leaveType:[{id:"1",value:"主动离职"},{id:"2",value:"被动离职"},{id:"3",value:"退休"}],attritionMonth:[{id:"1",value:"离职日本月"},{id:"2",value:"离职日次月"}],informaltype:[{id:"2",value:"实习"},{id:"3",value:"劳务"},{id:"4",value:"顾问"},{id:"5",value:"返聘"},{id:"6",value:"外包"}],highestDegree:[{id:"1",value:"初中"},{id:"2",value:"高中"},{id:"3",value:"中专"},{id:"4",value:"大专"},{id:"5",value:"本科"},{id:"6",value:"硕士"},{id:"7",value:"博士"},{id:"8",value:"其他"}],isOverseas:[{id:"1",value:"中国大陆"},{id:"2",value:"港澳台国外"}],gender:[{id:"1",value:"男"},{id:"2",value:"女"}],maritaStatus:[{id:"1",value:"未婚"},{id:"2",value:"已婚"},{id:"3",value:"离异"}],animalSymbol:[{id:"1",value:"鼠"},{id:"2",value:"牛"},{id:"3",value:"虎"},{id:"4",value:"兔"},{id:"5",value:"龙"},{id:"6",value:"蛇"},{id:"7",value:"马"},{id:"8",value:"羊"},{id:"9",value:"猴"},{id:"10",value:"鸡"},{id:"11",value:"狗"},{id:"12",value:"猪"}],constellation:[{code:1,value:"水瓶座"},{code:2,value:"双鱼座"},{code:3,value:"白羊座"},{code:4,value:"金牛座"},{code:5,value:"双子座"},{code:6,value:"巨蟹座"},{code:7,value:"狮子座"},{code:8,value:"处女座"},{code:9,value:"天秤座"},{code:10,value:"天蝎座"},{code:11,value:"射手座"},{code:12,value:"摩羯座"}],bloodType:[{id:"1",value:"A型"},{id:"2",value:"B型"},{id:"3",value:"O型"},{id:"4",value:"AB型"}],educationType:[{id:"1",value:"统招"},{id:"2",value:"自考"},{id:"3",value:"成考"}],positiveType:[{id:"1",value:"已转正"},{id:"2",value:"未转正"}],contractPeriod:[{id:"1",value:"6月"},{id:"2",value:"12月"},{id:"3",value:"24月"},{id:"4",value:"36月"},{id:"5",value:"其他"}],renewalCount:[{id:1,value:"0次"},{id:2,value:"1次"},{id:3,value:"2次"},{id:4,value:"3次"},{id:5,value:"4次或以上"}],resumeSource:[{id:"1",value:"智联招聘"},{id:"2",value:"拉勾网"},{id:"3",value:"前程无忧"},{id:"4",value:"猎聘网"},{id:"5",value:"校园宣讲"},{id:"6",value:"猎头"},{id:"7",value:"内部推荐"}],hireSourceType:[{id:"1",value:"社招"},{id:"2",value:"校招"}],departments:[{id:"1",value:"总裁办"},{id:"2",value:"研究院"}],stausInfos:[{id:"1",value:"在职"},{id:"2",value:"入职"},{id:"3",value:"离职"}]}},"0e77":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},[a("page-tools",{attrs:{"show-before":!0},scopedSlots:e._u([{key:"before",fn:function(){return[e._v(e._s(e.tipsInfo))]},proxy:!0},{key:"after",fn:function(){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.$router.push("/salarys/setting")}}},[e._v("设置")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.$router.push("/salarys/monthStatement?yearMonth="+e.yearMonth)}}},[e._v(e._s(e.yearMonth)+"报表")])]},proxy:!0}])}),a("el-card",{staticClass:"hr-block"},[a("el-form",{attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"聘用形式:"}},[a("el-checkbox-group",{model:{value:e.formData.approvalsTypeChecks,callback:function(t){e.$set(e.formData,"approvalsTypeChecks",t)},expression:"formData.approvalsTypeChecks"}},e._l(e.approvalsType,(function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.id},on:{change:e.changeParams}},[e._v(e._s(t.value))])})),1)],1),a("el-form-item",{attrs:{label:"员工状态:"}},[a("el-checkbox-group",{model:{value:e.formData.approvalsStateChecks,callback:function(t){e.$set(e.formData,"approvalsStateChecks",t)},expression:"formData.approvalsStateChecks"}},e._l(e.approvalsState,(function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.id},on:{change:e.changeParams}},[e._v(e._s(t.value))])})),1)],1),a("el-form-item",{attrs:{label:"部门:"}},[a("el-checkbox-group",{model:{value:e.formData.departmentChecks,callback:function(t){e.$set(e.formData,"departmentChecks",t)},expression:"formData.departmentChecks"}},e._l(e.departments,(function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.id},on:{change:e.changeParams}},[e._v(e._s(t.name))])})),1)],1)],1)],1),a("el-card",{staticClass:"hr-block"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),a("el-table-column",{attrs:{prop:"username",label:"姓名",width:"100"}}),a("el-table-column",{attrs:{prop:"mobile",label:"手机",width:"130"}}),a("el-table-column",{attrs:{prop:"workNumber",label:"工号",width:"100"}}),a("el-table-column",{attrs:{prop:"formOfEmployment",formatter:e.formatEmployment,width:"100",label:"聘用形式"}}),a("el-table-column",{attrs:{prop:"departmentName",label:"部门",width:"100"}}),a("el-table-column",{attrs:{prop:"timeOfEntry",width:"130",label:"入职时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(t.row.timeOfEntry))+" ")]}}])}),a("el-table-column",{attrs:{label:"工资基数",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.currentBasicSalary+t.row.currentPostWage)+" ")]}}])}),a("el-table-column",{attrs:{label:"津贴方案",width:"100"}},[e._v("通用方案")]),a("el-table-column",{attrs:{label:"操作",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.currentBasicSalary+t.row.currentPostWage>0?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.changeSalary("ChangeSalary",t.row.id)}}},[e._v("调薪")]):a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.fixedSalary("FixedSalary",t.row.id)}}},[e._v("定薪")]),a("el-button",{attrs:{type:"text",size:"mini"}},[a("router-link",{attrs:{to:{path:"/salarys/details/"+e.yearMonth+"/"+t.row.id}}},[e._v("查看")])],1)]}}])})],1),a("el-row",{staticStyle:{height:"50px"},attrs:{type:"flex",justify:"center",align:"middle"}},[a("el-pagination",{attrs:{background:"",layout:"prev,pager,next",total:e.page.total,"current-page":e.page.page,"page-size":e.page.pageSize},on:{"current-change":e.changePage}})],1)],1),a("el-dialog",{attrs:{title:e.topLabel,visible:e.centerDialogVisible,width:"50%",left:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a(e.currentComponent,{tag:"component",attrs:{"user-salary":e.selectedSalaryInfo,"user-id":e.selectUserId},on:{success:e.getSalarysList,onDialogCancel:function(t){e.centerDialogVisible=!1}}})],1)],1)])},l=[],n=a("c7eb"),i=a("5530"),s=a("1da1"),o=(a("7db0"),a("d3b7"),a("25f0"),a("b775"));function u(e){return Object(o["a"])({url:"/salarys/list",data:e,method:"post"})}function c(e){return Object(o["a"])({url:"/salarys/tips/".concat(e)})}function d(){return Object(o["a"])({url:"/salarys/company-settings"})}function p(e){return Object(o["a"])({url:"/salarys/modify/".concat(e)})}function m(e){return Object(o["a"])({url:"/salarys/modify/".concat(e.userId),method:"post",data:e})}function f(e){return Object(o["a"])({url:"/salarys/init/".concat(e.userId),method:"post",data:e})}var b=a("01f5"),v=a("1eef"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"changeSalary"},[a("div",{staticClass:"infoBox"},[e._m(0),a("div",{staticClass:"info"},[a("p",[a("span",{staticClass:"name"},[e._v(e._s(e.user.username))])]),a("p",[a("span",[e._v("部门：")]),e._v(" "+e._s(e.user.departmentName)+" ")]),a("p",[a("span",[e._v("入职时间：")]),e._v(" "+e._s(e._f("formatDate")(e.user.timeOfEntry))+" ")])])]),a("div",[a("el-form",{staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"110px"}},[a("el-form-item",{attrs:{label:"调整基本工资"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{disabled:!0},model:{value:e.userSalary.currentBasicSalary,callback:function(t){e.$set(e.userSalary,"currentBasicSalary",t)},expression:"userSalary.currentBasicSalary"}}),a("span",{staticClass:"Label"},[e._v("->")]),a("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入调整后基本工资",type:"number"},model:{value:e.ruleForm.currentBasicSalary,callback:function(t){e.$set(e.ruleForm,"currentBasicSalary",t)},expression:"ruleForm.currentBasicSalary"}})],1),a("el-form-item",{attrs:{label:"调整岗位工资"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{disabled:!0},model:{value:e.userSalary.currentPostWage,callback:function(t){e.$set(e.userSalary,"currentPostWage",t)},expression:"userSalary.currentPostWage"}}),a("span",{staticClass:"Label"},[e._v("->")]),a("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入调整后岗位工资",type:"number"},model:{value:e.ruleForm.currentPostWage,callback:function(t){e.$set(e.ruleForm,"currentPostWage",t)},expression:"ruleForm.currentPostWage"}})],1),a("el-form-item",{attrs:{label:"工资合计"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{disabled:!0},model:{value:e.computeCurrentTotal,callback:function(t){e.computeCurrentTotal=t},expression:"computeCurrentTotal"}}),a("span",{staticClass:"Label"},[e._v("->")]),a("el-input",{staticStyle:{width:"220px"},attrs:{disabled:!0},model:{value:e.computeChangeTotal,callback:function(t){e.computeChangeTotal=t},expression:"computeChangeTotal"}})],1),a("el-form-item",{attrs:{label:"调整幅度"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{disabled:!0},model:{value:e.computeChangeSize,callback:function(t){e.computeChangeSize=t},expression:"computeChangeSize"}})],1),a("div",{staticClass:"buttones",staticStyle:{"text-align":"center","margin-top":"40px"}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]),a("el-button",{on:{click:e.onClose}},[e._v("关闭")])],1)],1)],1)],1)])},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:a("616f"),alt:""}})])}],y=(a("a9e3"),a("c24f")),S={name:"UsersTableIndex",props:["userSalary","userId"],data:function(){return{user:{},ruleForm:{}}},computed:{computeCurrentTotal:function(){var e=0;null!=this.userSalary.currentBasicSalary&&(e=Number(this.userSalary.currentBasicSalary));var t=0;return null!=this.userSalary.currentPostWage&&(t=Number(this.userSalary.currentPostWage)),e+t},computeChangeTotal:function(){var e=0;null!=this.ruleForm.currentBasicSalary&&(e=Number(this.ruleForm.currentBasicSalary));var t=0;return null!=this.ruleForm.currentPostWage&&(t=Number(this.ruleForm.currentPostWage)),e+t},computeChangeSize:function(){return this.computeChangeTotal-this.computeCurrentTotal}},created:function(){this.getUserDetailById()},methods:{onSubmit:function(){var e=this;return Object(s["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.ruleForm,a.userId=e.userId,t.next=4,m(a);case 4:e.$message({message:"保存成功",type:"success"}),e.$emit("success"),e.onClose();case 7:case"end":return t.stop()}}),t)})))()},onClose:function(){this.ruleForm={},this.$emit("onDialogCancel")},getUserDetailById:function(){var e=this;return Object(s["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(y["a"])(e.userId);case 2:e.user=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}},w=S,x=(a("58a2"),a("2877")),k=Object(x["a"])(w,h,g,!1,null,"51da99c8",null),C=k.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fixedDalary"},[a("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"120px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{label:"当前基本工资"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"当前基本工资",type:"number"},model:{value:e.formLabelAlign.currentBasicSalary,callback:function(t){e.$set(e.formLabelAlign,"currentBasicSalary",t)},expression:"formLabelAlign.currentBasicSalary"}})],1),a("el-form-item",{attrs:{label:"当前岗位工资"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"当前岗位工资",type:"number"},model:{value:e.formLabelAlign.currentPostWage,callback:function(t){e.$set(e.formLabelAlign,"currentPostWage",t)},expression:"formLabelAlign.currentPostWage"}})],1),a("el-form-item",{attrs:{label:"当前工资合计"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"当前工资合计, 自动计算",disabled:!0},model:{value:e.computeCurrentTotal,callback:function(t){e.computeCurrentTotal=t},expression:"computeCurrentTotal"}})],1),a("el-form-item",{attrs:{label:"转正基本工资"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"转正基本工资",type:"number"},model:{value:e.formLabelAlign.correctionOfBasicWages,callback:function(t){e.$set(e.formLabelAlign,"correctionOfBasicWages",t)},expression:"formLabelAlign.correctionOfBasicWages"}})],1),a("el-form-item",{attrs:{label:"转正岗位工资"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"转正岗位工资",type:"number"},model:{value:e.formLabelAlign.turnToPostWages,callback:function(t){e.$set(e.formLabelAlign,"turnToPostWages",t)},expression:"formLabelAlign.turnToPostWages"}})],1),a("el-form-item",{attrs:{label:"转正工资合计"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"当前基本工资, 自动计算",disabled:!0},model:{value:e.computeTurnTotal,callback:function(t){e.computeTurnTotal=t},expression:"computeTurnTotal"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确认")]),a("el-button",{on:{click:e.onClose}},[e._v("关闭")])],1)],1)],1)},O=[],T={name:"UsersTableIndex",props:["userId"],data:function(){return{labelPosition:"left",formLabelAlign:{},turnTotal:0}},computed:{computeCurrentTotal:function(){var e=0;null!=this.formLabelAlign.currentBasicSalary&&(e=Number(this.formLabelAlign.currentBasicSalary));var t=0;return null!=this.formLabelAlign.currentPostWage&&(t=Number(this.formLabelAlign.currentPostWage)),e+t},computeTurnTotal:function(){var e=0;null!=this.formLabelAlign.correctionOfBasicWages&&(e=Number(this.formLabelAlign.correctionOfBasicWages));var t=0;return null!=this.formLabelAlign.turnToPostWages&&(t=Number(this.formLabelAlign.turnToPostWages)),e+t}},methods:{onSubmit:function(){var e=this;return Object(s["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.formLabelAlign.userId=e.userId,a=e.formLabelAlign,t.next=4,f(a);case 4:e.$message.success("定薪成功"),e.$emit("success"),e.onClose();case 7:case"end":return t.stop()}}),t)})))()},onClose:function(){this.formLabelAlign={},this.$emit("onDialogCancel")}}},j=T,L=(a("2899"),Object(x["a"])(j,_,O,!1,null,"c50c3366",null)),P=L.exports,A={name:"UsersTableIndex",components:{ChangeSalary:C,FixedSalary:P},data:function(){return{seeState:"",centerDialogVisible:!1,topLabel:"转正",approvalsType:b["a"].hireType,approvalsState:b["a"].workingState,department:[],subsidyScheme:[],list:[],departments:[],loading:!1,page:{total:0,page:1,pageSize:10},tips:{},yearMonth:"",formData:{approvalsTypeChecks:[],approvalsStateChecks:[],departmentChecks:[]},selectedSalaryInfo:{},selectUserId:null,currentComponent:""}},computed:{tipsInfo:function(){return"本月0：入职 0 离职 0 调薪 0 未定薪 0"}},created:function(){this.getSalarysList(),this.getDepartments()},methods:{formatEmployment:function(e){var t=this.approvalsType.find((function(t){return t.id===e.formOfEmployment.toString()}));return t?t.value:"未知"},getSalarysList:function(){var e=this;return Object(s["a"])(Object(n["a"])().mark((function t(){var a,r,l,s;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:return a=t.sent,e.yearMonth=a.dataMonth,e.loading=!0,t.next=7,u(Object(i["a"])(Object(i["a"])({},e.page),e.formData));case 7:r=t.sent,l=r.rows,s=r.total,e.list=l,e.page.total=s,e.loading=!1;case 13:case"end":return t.stop()}}),t)})))()},getDepartments:function(){var e=this;return Object(s["a"])(Object(n["a"])().mark((function t(){var a,r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(v["c"])();case 2:a=t.sent,r=a.depts,e.departments=r;case 5:case"end":return t.stop()}}),t)})))()},getTips:function(){var e=this;return Object(s["a"])(Object(n["a"])().mark((function t(){var a,r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c();case 2:a=t.sent,r=a.tipsRes,e.tips=r;case 5:case"end":return t.stop()}}),t)})))()},changePage:function(e){this.page.page=e,this.getSalarysList()},changeSalary:function(e,t){var a=this;return Object(s["a"])(Object(n["a"])().mark((function r(){return Object(n["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.topLabel="调薪",a.currentComponent=e,a.centerDialogVisible=!0,a.selectUserId=t,r.next=6,p(t);case 6:a.selectedSalaryInfo=r.sent;case 7:case"end":return r.stop()}}),r)})))()},fixedSalary:function(e){this.topLabel="定薪",this.currentComponent=e,this.centerDialogVisible=!0},changeParams:function(){this.page.page=1,this.getSalarysList()}}},D=A,B=Object(x["a"])(D,r,l,!1,null,null,null);t["default"]=B.exports},2899:function(e,t,a){"use strict";a("f052")},"58a2":function(e,t,a){"use strict";a("befa")},"616f":function(e,t,a){e.exports=a.p+"static/img/img.0615818f.jpeg"},"7db0":function(e,t,a){"use strict";var r=a("23e7"),l=a("b727").find,n=a("44d2"),i="find",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),n(i)},befa:function(e,t,a){},f052:function(e,t,a){}}]);