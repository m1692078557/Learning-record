(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43fc6af3"],{"4bb7":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"search-div"},[s("el-form",{attrs:{"label-width":"70px",size:"small"}},[s("el-row",[s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"关键字"}},[s("el-input",{staticStyle:{width:"95%"},attrs:{placeholder:"用户名/姓名/手机号"},model:{value:e.searchObj.keyword,callback:function(t){e.$set(e.searchObj,"keyword",t)},expression:"searchObj.keyword"}})],1)],1),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"操作时间"}},[s("el-date-picker",{staticStyle:{"margin-right":"10px",width:"100%"},attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.createTimes,callback:function(t){e.createTimes=t},expression:"createTimes"}})],1)],1)],1),s("el-row",{staticStyle:{display:"flex"}},[s("el-button",{attrs:{type:"success",icon:"el-icon-plus",size:"mini",disabled:!1===e.$hasBP("bnt.sysUser.add")},on:{click:e.add}},[e._v("添 加")]),s("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:function(t){return e.fetchData()}}},[e._v("搜索")]),s("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetData}},[e._v("重置")])],1)],1)],1),s("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:e.list,stripe:"",border:"","header-cell-style":{"text-align":"center"},"cell-style":{"text-align":"center"}}},[s("el-table-column",{attrs:{label:"序号",width:"70",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s((e.page-1)*e.limit+t.$index+1)+" ")]}}])}),s("el-table-column",{attrs:{prop:"username",label:"用户名"}}),s("el-table-column",{attrs:{prop:"name",label:"姓名"}}),s("el-table-column",{attrs:{prop:"phone",label:"手机"}}),s("el-table-column",{attrs:{prop:"description",label:"岗位"}}),s("el-table-column",{attrs:{prop:"deptId",label:"部门",formatter:e.formatDept}}),s("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-switch",{attrs:{disabled:!1===e.$hasBP("bnt.sysUser.update")},on:{change:function(s){return e.switchStatus(t.row)}},model:{value:1===t.row.status,callback:function(s){e.$set(t.row,"status === 1",s)},expression:"scope.row.status === 1"}})]}}])}),s("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"160"}}),s("el-table-column",{attrs:{label:"操作",width:"230",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini",disabled:!1===e.$hasBP("bnt.sysUser.update"),title:"修改"},on:{click:function(s){return e.edit(t.row.id)}}}),s("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini",disabled:!1===e.$hasBP("bnt.sysUser.remove"),title:"删除"},on:{click:function(s){return e.removeDataById(t.row.id)}}}),s("el-button",{attrs:{type:"warning",icon:"el-icon-baseball",size:"mini",disabled:!1===e.$hasBP("bnt.sysUser.assignRole"),title:"分配角色"},on:{click:function(s){return e.showAssignRole(t.row)}}}),s("el-button",{attrs:{type:"info",icon:"el-icon-refresh",size:"mini",disabled:!1===e.$hasBP("bnt.sysUser.resetPwd"),title:"重置密码"},on:{click:function(s){return e.resetPwd(t.row.id)}}})]}}])})],1),s("el-pagination",{staticStyle:{padding:"30px 0","text-align":"center"},attrs:{"current-page":e.page,total:e.total,"page-size":e.limit,"page-sizes":[5,10,20,30,40,50,100],layout:"sizes, prev, pager, next, jumper, ->, total, slot"},on:{"current-change":e.fetchData,"size-change":e.changeSize}}),s("el-dialog",{attrs:{title:"添加/修改",visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[s("el-form",{ref:"dataForm",staticStyle:{"padding-right":"40px"},attrs:{model:e.sysUser,"label-width":"100px",size:"small"}},[s("el-form-item",{attrs:{label:"用户名",prop:"username"}},[s("el-input",{model:{value:e.sysUser.username,callback:function(t){e.$set(e.sysUser,"username",t)},expression:"sysUser.username"}})],1),e.sysUser.id?e._e():s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{type:"password"},model:{value:e.sysUser.password,callback:function(t){e.$set(e.sysUser,"password",t)},expression:"sysUser.password"}})],1),s("el-form-item",{attrs:{label:"姓名",prop:"name"}},[s("el-input",{model:{value:e.sysUser.name,callback:function(t){e.$set(e.sysUser,"name",t)},expression:"sysUser.name"}})],1),s("el-form-item",{attrs:{label:"手机",prop:"phone"}},[s("el-input",{model:{value:e.sysUser.phone,callback:function(t){e.$set(e.sysUser,"phone",t)},expression:"sysUser.phone"}})],1),s("el-form-item",{attrs:{label:"部门",prop:"deptId"}},[s("el-select",{attrs:{placeholder:"请选择部门"},model:{value:e.sysUser.deptId,callback:function(t){e.$set(e.sysUser,"deptId",t)},expression:"sysUser.deptId"}},e._l(e.deptList,(function(e){return s("el-option",{key:e.deptId,attrs:{value:e.deptId,label:e.name}})})),1)],1),s("el-form-item",{attrs:{label:"岗位",prop:"description"}},[s("el-input",{model:{value:e.sysUser.description,callback:function(t){e.$set(e.sysUser,"description",t)},expression:"sysUser.description"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small",icon:"el-icon-refresh-right"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(t){return e.saveOrUpdate()}}},[e._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"分配角色",visible:e.dialogRoleVisible},on:{"update:visible":function(t){e.dialogRoleVisible=t}}},[s("el-form",{attrs:{"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{attrs:{disabled:"",value:e.sysUser.username}})],1),s("el-form-item",{attrs:{label:"角色列表"}},[s("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),s("div",{staticStyle:{margin:"15px 0"}}),s("el-checkbox-group",{on:{change:e.handleCheckedChange},model:{value:e.userRoleIds,callback:function(t){e.userRoleIds=t},expression:"userRoleIds"}},e._l(e.allRoles,(function(t){return s("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.roleName))])})),1)],1)],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.assignRole}},[e._v("保存")]),s("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogRoleVisible=!1}}},[e._v("取消")])],1)],1)],1)},n=[],i=(s("d3b7"),s("159b"),s("b0c0"),s("d81d"),s("99af"),s("b775")),l="/admin/system/sysUser",o={getPageList:function(e,t,s){return Object(i["a"])({url:"".concat(l,"/").concat(e,"/").concat(t),method:"get",params:s})},getById:function(e){return Object(i["a"])({url:"".concat(l,"/get/").concat(e),method:"get"})},save:function(e){return Object(i["a"])({url:"".concat(l,"/save"),method:"post",data:e})},updateById:function(e){return Object(i["a"])({url:"".concat(l,"/update"),method:"put",data:e})},removeById:function(e){return Object(i["a"])({url:"".concat(l,"/remove/").concat(e),method:"delete"})},updateStatus:function(e,t){return Object(i["a"])({url:"".concat(l,"/updateStatus/").concat(e,"/").concat(t),method:"get"})},resetPwd:function(e){return Object(i["a"])({url:"".concat(l,"/resetPwd/").concat(e),method:"get"})}},r=s("e505"),c=s("c2d0"),u={id:"",username:"",password:"",name:"",phone:"",description:"",status:1},d={data:function(){return{list:null,total:0,page:1,limit:10,searchObj:{},createTimes:[],dialogVisible:!1,sysUser:u,saveBtnDisabled:!1,dialogRoleVisible:!1,allRoles:[],userRoleIds:[],isIndeterminate:!1,checkAll:!1,deptList:[],tableData:[]}},created:function(){this.fetchData(),this.fetchDeptList()},mounted:function(){console.log("sysUser",this.sysUser)},computed:{formatDept:function(){var e={};return this.deptList.forEach((function(t){e[t.deptId]=t.name})),function(t,s){var a=t[s.property];return e[a]}}},methods:{changeSize:function(e){this.limit=e,this.fetchData(1)},fetchData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.page=t,this.createTimes&&2==this.createTimes.length&&(this.searchObj.createTimeBegin=this.createTimes[0],this.searchObj.createTimeEnd=this.createTimes[1]),o.getPageList(this.page,this.limit,this.searchObj).then((function(t){e.list=t.data.records,e.total=t.data.total}))},resetData:function(){this.searchObj={},this.createTimes=[],this.fetchData()},removeDataById:function(e){var t=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return o.removeById(e)})).then((function(e){t.fetchData(t.page),t.$message.success(e.message||"删除成功")})).catch((function(){t.$message.info("取消删除")}))},add:function(){this.dialogVisible=!0,this.sysUser=Object.assign({},u)},edit:function(e){this.dialogVisible=!0,this.fetchDataById(e)},fetchDataById:function(e){var t=this;o.getById(e).then((function(e){t.sysUser=e.data}))},saveOrUpdate:function(){var e=this;this.$refs.dataForm.validate((function(t){t&&(e.saveBtnDisabled=!0,e.sysUser.id?e.updateData():e.saveData())}))},saveData:function(){var e=this;o.save(this.sysUser).then((function(t){e.$message.success("操作成功"),e.dialogVisible=!1,e.fetchData(e.page)}))},updateData:function(){var e=this;o.updateById(this.sysUser).then((function(t){e.$message.success(t.message||"操作成功"),e.dialogVisible=!1,e.fetchData(e.page)}))},showAssignRole:function(e){this.sysUser=e,this.dialogRoleVisible=!0,this.getRoles()},getRoles:function(){var e=this;r["a"].getRoles(this.sysUser.id).then((function(t){var s=t.data,a=s.allRolesList,n=s.assginRoleList;e.allRoles=a,e.userRoleIds=n.map((function(e){return e.id})),e.checkAll=a.length===n.length,e.isIndeterminate=n.length>0&&n.length<a.length}))},handleCheckAllChange:function(e){this.userRoleIds=e?this.allRoles.map((function(e){return e.id})):[],this.isIndeterminate=!1},handleCheckedChange:function(e){var t=this.userRoleIds,s=this.allRoles;this.checkAll=t.length===s.length&&s.length>0,this.isIndeterminate=t.length>0&&t.length<s.length},assignRole:function(){var e=this,t={userId:this.sysUser.id,roleIdList:this.userRoleIds};r["a"].assignRoles(t).then((function(t){e.$message.success(t.message||"分配角色成功"),e.dialogRoleVisible=!1,e.fetchData(e.page)}))},switchStatus:function(e){var t=this;e.status=1===e.status?0:1,o.updateStatus(e.id,e.status).then((function(e){e.code&&(t.$message.success(e.message||"操作成功"),t.dialogVisible=!1,t.fetchData())}))},fetchDeptList:function(e,t,s){var a=this;c["a"].getPageList(this.page,this.limit).then((function(e){a.deptList=e.data.records.map((function(e){return{deptId:e.id,name:e.name}}))}))},resetPwd:function(e){var t=this;o.resetPwd(e).then((function(e){t.$message.success("重置密码成功，默认为123456")}))}}},h=d,p=s("2877"),m=Object(p["a"])(h,a,n,!1,null,null,null);t["default"]=m.exports},c2d0:function(e,t,s){"use strict";s("99af");var a=s("b775"),n="/admin/system/sysDept";t["a"]={getPageList:function(e,t,s){return Object(a["a"])({url:"".concat(n,"/").concat(e,"/").concat(t),method:"get",params:s})},getById:function(e){return Object(a["a"])({url:"".concat(n,"/get/").concat(e),method:"get"})},save:function(e){return Object(a["a"])({url:"".concat(n,"/save"),method:"post",data:e})},updateById:function(e){return Object(a["a"])({url:"".concat(n,"/update"),method:"put",data:e})},removeById:function(e){return Object(a["a"])({url:"".concat(n,"/remove/").concat(e),method:"delete"})},updateStatus:function(e,t){return Object(a["a"])({url:"".concat(n,"/updateStatus/").concat(e,"/").concat(t),method:"get"})}}},e505:function(e,t,s){"use strict";s("99af");var a=s("b775"),n="/admin/system/sysRole";t["a"]={getPageList:function(e,t,s){return Object(a["a"])({url:"".concat(n,"/").concat(e,"/").concat(t),method:"get",params:s})},removeById:function(e){return Object(a["a"])({url:"".concat(n,"/remove/").concat(e),method:"delete"})},save:function(e){return Object(a["a"])({url:"".concat(n,"/save"),method:"post",data:e})},getById:function(e){return Object(a["a"])({url:"".concat(n,"/get/").concat(e),method:"get"})},updateById:function(e){return Object(a["a"])({url:"".concat(n,"/update"),method:"put",data:e})},batchRemove:function(e){return Object(a["a"])({url:"".concat(n,"/batchRemove"),method:"delete",data:e})},getRoles:function(e){return Object(a["a"])({url:"".concat(n,"/toAssign/").concat(e),method:"get"})},assignRoles:function(e){return Object(a["a"])({url:"".concat(n,"/doAssign"),method:"post",data:e})}}}}]);