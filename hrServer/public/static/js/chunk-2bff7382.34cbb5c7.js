(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bff7382"],{"0ccb":function(e,t,r){var a=r("e330"),n=r("50c4"),o=r("577e"),i=r("1148"),s=r("1d80"),l=a(i),c=a("".slice),d=Math.ceil,u=function(e){return function(t,r,a){var i,u,p=o(s(t)),f=n(r),m=p.length,h=void 0===a?" ":o(a);return f<=m||""==h?p:(i=f-m,u=l(h,d(i/h.length)),u.length>i&&(u=c(u,0,i)),e?p+u:u+p)}};e.exports={start:u(!1),end:u(!0)}},1276:function(e,t,r){"use strict";var a=r("2ba4"),n=r("c65b"),o=r("e330"),i=r("d784"),s=r("44e7"),l=r("825a"),c=r("1d80"),d=r("4840"),u=r("8aa5"),p=r("50c4"),f=r("577e"),m=r("dc4a"),h=r("4dae"),g=r("14c3"),b=r("9263"),v=r("9f7f"),w=r("d039"),D=v.UNSUPPORTED_Y,x=4294967295,j=Math.min,y=[].push,O=o(/./.exec),k=o(y),_=o("".slice),N=!w((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));i("split",(function(e,t,r){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var o=f(c(this)),i=void 0===r?x:r>>>0;if(0===i)return[];if(void 0===e)return[o];if(!s(e))return n(t,o,e,i);var l,d,u,p=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,v=new RegExp(e.source,m+"g");while(l=n(b,v,o)){if(d=v.lastIndex,d>g&&(k(p,_(o,g,l.index)),l.length>1&&l.index<o.length&&a(y,p,h(l,1)),u=l[0].length,g=d,p.length>=i))break;v.lastIndex===l.index&&v.lastIndex++}return g===o.length?!u&&O(v,"")||k(p,""):k(p,_(o,g)),p.length>i?h(p,0,i):p}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:n(t,this,e,r)}:t,[function(t,r){var a=c(this),i=void 0==t?void 0:m(t,e);return i?n(i,t,a,r):n(o,f(a),t,r)},function(e,a){var n=l(this),i=f(e),s=r(o,n,i,a,o!==t);if(s.done)return s.value;var c=d(n,RegExp),m=n.unicode,h=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(D?"g":"y"),b=new c(D?"^(?:"+n.source+")":n,h),v=void 0===a?x:a>>>0;if(0===v)return[];if(0===i.length)return null===g(b,i)?[i]:[];var w=0,y=0,O=[];while(y<i.length){b.lastIndex=D?0:y;var N,$=g(b,D?_(i,y):i);if(null===$||(N=j(p(b.lastIndex+(D?y:0)),i.length))===w)y=u(i,y,m);else{if(k(O,_(i,w,y)),O.length===v)return O;for(var S=1;S<=$.length-1;S++)if(k(O,$[S]),O.length===v)return O;y=w=N}}return k(O,_(i,w)),O}]}),!N,D)},"4d90":function(e,t,r){"use strict";var a=r("23e7"),n=r("0ccb").start,o=r("9a0c");a({target:"String",proto:!0,forced:o},{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"6f23":function(e,t,r){},"9a0c":function(e,t,r){var a=r("342f");e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(a)},c6a6:function(e,t,r){"use strict";r("6f23")},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("53ca"),r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("d3b7"),r("4d90"),r("1276"),r("159b");function a(e,t){var r=[];return e.forEach((function(n){if(n.pid===t){var o=a(e,n.id);o.length>0&&(n.children=o),r.push(n)}})),r}},fb3b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"departments-container"},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"departments-container"}),r("el-card",{staticClass:"tree-card"},[r("treeTools",{attrs:{"tree-node":e.company,"is-root":!1},on:{addDept:e.addDept}})],1),r("el-tree",{attrs:{data:e.departs,props:e.defaultProps,"default-expand-all":!0},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return r("treeTools",{attrs:{"tree-node":a},on:{addDept:e.addDept,editDept:e.editDept,refreshDepts:e.getDepartments}})}}])}),r("AddDept",{ref:"AddDept",attrs:{dialogvisible:e.showDialog,"tree-node":e.currentNode},on:{"update:dialogvisible":function(t){e.showDialog=t},refreshDepts:e.getDepartments}})],1)},n=[],o=r("c7eb"),i=r("1da1"),s=r("5530"),l=r("ed08"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticStyle:{width:"100%"},attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("el-col",[r("span",[e._v(e._s(e.treeNode.name))])]),r("el-col",{attrs:{span:4}},[r("el-row",{attrs:{type:"flex",justify:"end",align:"middle"}},[r("el-col",[e._v(e._s(e.treeNode.manager))]),r("el-col",[r("el-dropdown",{on:{command:e.handlecommand}},[r("span",[e._v(" 操作"),r("i",{staticClass:"el-icon-arrow-down"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"add"}},[e._v("添加子部门")]),e.isRoot?r("el-dropdown-item",{attrs:{command:"edit"}},[e._v("编辑部门")]):e._e(),e.isRoot?r("el-dropdown-item",{attrs:{command:"del"}},[e._v("删除部门")]):e._e()],1)],1)],1)],1)],1)],1)},d=[],u=r("365c"),p={components:{},props:{treeNode:{type:Object,required:!0},isRoot:{type:Boolean,default:!0}},data:function(){return{}},methods:{handlecommand:function(e){var t=this;"add"===e?this.$emit("addDept",this.treeNode):"edit"===e?this.$emit("editDept",this.treeNode):this.$confirm("确认部门删除","提示",{type:"warning"}).then((function(e){return Object(u["g"])(t.treeNode.id)})).then((function(e){t.$emit("refreshDepts"),t.$message.success("删除成功")}))}}},f=p,m=r("2877"),h=Object(m["a"])(f,c,d,!1,null,"9780d43a",null),g=h.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.showTitle,visible:e.dialogvisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogvisible=t}}},[r("el-form",{ref:"formDept",attrs:{model:e.formData,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"部门名称",prop:"name"}},[r("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50个字符"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),r("el-form-item",{attrs:{label:"部门编码",prop:"code"}},[r("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50个字符"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}})],1),r("el-form-item",{attrs:{label:"部门负责人",prop:"manager"}},[r("el-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择"},on:{focus:e.getEmployeeSimple},model:{value:e.formData.manager,callback:function(t){e.$set(e.formData,"manager",t)},expression:"formData.manager"}},e._l(e.peoples,(function(e){return r("el-option",{key:e.id,attrs:{label:e.username,value:e.username}})})),1)],1),r("el-form-item",{attrs:{prop:"introduce",label:"部门介绍"}},[r("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-300个字符",type:"textarea",rows:3},model:{value:e.formData.introduce,callback:function(t){e.$set(e.formData,"introduce",t)},expression:"formData.introduce"}})],1)],1),r("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[r("el-col",{attrs:{span:6}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnOK}},[e._v("确定")]),r("el-button",{attrs:{size:"small"},on:{click:e.handleClose}},[e._v("取消")])],1)],1)],1)},v=[],w=(r("d3b7"),r("d9e2"),r("b0c0"),r("4de4"),r("99af"),{props:{dialogvisible:{type:Boolean,default:!1},treeNode:{type:Object,default:null}},data:function(){var e=this,t=function(){var t=Object(i["a"])(Object(o["a"])().mark((function t(r,a,n){var i,s,l;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["l"])();case 2:i=t.sent,s=i.depts,l=!1,l=e.formData.id?s.some((function(t){return t.id!==e.treeNode.id&&t.code===a})):s.some((function(e){return e.code===a&&a})),l?n(new Error("组织架构中已经有部门使用".concat(a,"编码"))):n();case 7:case"end":return t.stop()}}),t)})));return function(e,r,a){return t.apply(this,arguments)}}(),r=function(){var t=Object(i["a"])(Object(o["a"])().mark((function t(r,a,n){var i,s,l;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["l"])();case 2:i=t.sent,s=i.depts,l=!1,l=e.formData.id?s.some((function(t){return t.id!==e.treeNode.id&&t.pid===e.treeNode.pid&&t.name===a})):s.filter((function(t){return t.pid===e.treeNode.id})).some((function(e){return e.name===a})),l?n(new Error("同级部门".concat(e.formData.id?"":"下","已经有").concat(a,"的部门了"))):n();case 7:case"end":return t.stop()}}),t)})));return function(e,r,a){return t.apply(this,arguments)}}();return{peoples:[],formData:{name:"",code:"",manager:"",introduce:""},rules:{name:[{required:!0,message:"部门名称不能为空",trigger:"blur"},{min:1,max:50,message:"部门名称要求1-50个字符",trigger:"blur"},{trigger:"blur",validator:r}],code:[{required:!0,message:"部门编码不能为空",trigger:"blur"},{min:1,max:50,message:"部门编码要求1-50个字符",trigger:"blur"},{trigger:"blur",validator:t}],manager:[{required:!0,message:"部门负责人不能为空",trigger:"blur"}],introduce:[{required:!0,message:"部门介绍不能为空",trigger:"blur"},{trigger:"blur",min:1,max:300,message:"部门介绍要求1-50个字符"}]}}},computed:{showTitle:function(){return this.formData.id?"编辑部门":"新增部门"}},methods:{getEmployeeSimple:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["n"])();case 2:e.peoples=t.sent;case 3:case"end":return t.stop()}}),t)})))()},btnOK:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.formDept.validate();case 3:if(e.loading=!0,!e.formData.id){t.next=9;break}return t.next=7,Object(u["w"])(e.formData);case 7:t.next=11;break;case 9:return t.next=11,Object(u["a"])(Object(s["a"])(Object(s["a"])({},e.formData),{},{pid:e.treeNode.id}));case 11:e.$message.success("".concat(e.formData.id?"编辑":"新增","成功")),e.$emit("refreshDepts"),e.handleClose(),t.next=18;break;case 16:t.prev=16,t.t0=t["catch"](0);case 18:return t.prev=18,e.loading=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[0,16,18,21]])})))()},handleClose:function(){this.$emit("update:dialogvisible",!1),this.$refs.formDept.resetFields(),this.formData={name:"",code:"",manager:"",introduce:""}}}}),D=w,x=Object(m["a"])(D,b,v,!1,null,"aabcc3a8",null),j=x.exports,y={name:"Hrsaas1Index",components:{treeTools:g,AddDept:j},data:function(){return{loading:!1,currentNode:{},showDialog:!1,defaultProps:{label:"name"},company:{name:"江苏传智播客教育科技股份有限公司",manager:"负责人",id:""},departs:[{name:"总裁办",manager:"曹操",children:[{name:"董事会",manager:"曹丕"}]},{name:"行政部",manager:"刘备"},{name:"人事部",manager:"孙权"}]}},mounted:function(){},created:function(){this.getDepartments()},methods:{addDept:function(e){this.showDialog=!0,this.currentNode=e},editDept:function(e){this.showDialog=!0,this.currentNode=e,this.$refs.AddDept.formData=Object(s["a"])({},e)},getDepartments:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var r,a,n,i;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(u["l"])();case 3:r=t.sent,a=r.depts,n=r.companyName,i=r.companyManage,e.departs=Object(l["a"])(a,""),e.company={name:n,manager:i,id:""},e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()}}},O=y,k=(r("c6a6"),Object(m["a"])(O,a,n,!1,null,null,null));t["default"]=k.exports}}]);