(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d4daca4"],{"48fc":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),border:""}},[a("el-table-column",{attrs:{label:"序号",width:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}])}),a("el-table-column",{attrs:{label:"工号",width:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.num)+" ")]}}])}),a("el-table-column",{attrs:{label:"姓名",width:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),a("el-table-column",{attrs:{label:"年龄",width:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.age)+" ")]}}])}),a("el-table-column",{attrs:{label:"性别",width:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("convertSex")(t.row.sex))+" ")]}}])}),a("el-table-column",{attrs:{label:"科目",width:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.course)+" ")]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pagesize,background:"",layout:"prev, pager, next",total:e.tableData.length},on:{"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:"编辑教师信息",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{autocomplete:"off"},model:{value:e.form.index,callback:function(t){e.$set(e.form,"index",t)},expression:"form.index"}}),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{autocomplete:"off"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}}),a("el-form-item",{attrs:{label:"工号","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",oninput:"value=value.replace(/^\\.+|[^\\d.]/g,'')",placeholder:"请输入8位数字",maxlength:8},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}})],1),a("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",oninput:"value=value.replace(/[^\\u4e00-\\u9fa5]/g, '')",maxlength:6,placeholder:"最大长度6个中文字符"},on:{blur:function(t){e.form.name=t.target.value}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"年龄","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",oninput:"value=value.replace(/^\\.+|[^\\d.]/g,'')",placeholder:"请输入数字",maxlength:2},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),a("el-form-item",{attrs:{label:"性别","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.formsex,callback:function(t){e.formsex=t},expression:"formsex"}},[a("el-radio",{attrs:{label:1}},[e._v("男")]),a("el-radio",{attrs:{label:0}},[e._v("女")])],1)],1),a("el-form-item",{attrs:{label:"科目","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",maxlength:15,placeholder:"最大15位字符串"},model:{value:e.form.course,callback:function(t){e.$set(e.form,"course",t)},expression:"form.course"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleUpdateStudent()}}},[e._v("确 定")])],1)],1)],1)},o=[],r=(a("b0c0"),a("a434"),a("9afb")),l={data:function(){return{currentPage:1,pagesize:15,formLabelWidth:"",sexRadio:"",tableData:[],dialogFormVisible:!1,formsex:0,form:{index:"",id:"",num:"",name:"",age:"",course:""}}},created:function(){this.loadData()},methods:{handleCurrentChange:function(e){this.currentPage=e,console.log(this.currentPage)},handleEdit:function(e,t){this.form.index=e,this.form.id=t.id,this.form.age=t.age,this.formsex=t.sex,this.form.num=t.num,this.form.name=t.name,this.form.course=t.course,this.dialogFormVisible=!0},handleDelete:function(e,t){var a=this,n=t.id;this.$confirm("此操作将永久删除该条数据, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["b"])(n).then((function(t){a.tableData.splice(e,1),a.$message({message:t.message,type:"success"})}))})).catch((function(e){console.log(e),a.$message({type:"info",message:"已取消删除"})}))},loadData:function(){var e=this;Object(r["c"])().then((function(t){e.tableData=t.data.data}))},handleUpdateStudent:function(){var e=this,t=this.form.id,a=this.form.age,n=this.formsex,o=this.form.num,l=this.form.name,i=this.form.course,s={id:t,age:a,sex:n,num:o,name:l,course:i};Object(r["e"])(s).then((function(t){e.dialogFormVisible=!1,e.loadData(),e.$message({message:t.message,type:"success"})}))}},mounted:function(){this.loadData()},filters:{convertSex:function(e){switch(e){case 1:return"男";case 0:return"女"}}}},i=l,s=(a("51c3"),a("2877")),u=Object(s["a"])(i,n,o,!1,null,"881640d0",null);t["default"]=u.exports},"51c3":function(e,t,a){"use strict";a("8109")},8109:function(e,t,a){},"9afb":function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return s}));var n=a("b775");function o(){return Object(n["a"])({url:"/teacher/list",method:"get"})}function r(e){return Object(n["a"])({url:"/teacher/add",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/teacher/update",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/teacher/delete/"+e,method:"post"})}function s(e){return Object(n["a"])({url:"/teacher/search",method:"post",data:e})}},a434:function(e,t,a){"use strict";var n=a("23e7"),o=a("23cb"),r=a("a691"),l=a("50c4"),i=a("7b0b"),s=a("65f0"),u=a("8418"),c=a("1dde"),f=a("ae40"),d=c("splice"),m=f("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,b=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d||!m},{splice:function(e,t){var a,n,c,f,d,m,v=i(this),x=l(v.length),w=o(e,x),_=arguments.length;if(0===_?a=n=0:1===_?(a=0,n=x-w):(a=_-2,n=b(h(r(t),0),x-w)),x+a-n>p)throw TypeError(g);for(c=s(v,n),f=0;f<n;f++)d=w+f,d in v&&u(c,f,v[d]);if(c.length=n,a<n){for(f=w;f<x-n;f++)d=f+n,m=f+a,d in v?v[m]=v[d]:delete v[m];for(f=x;f>x-n+a;f--)delete v[f-1]}else if(a>n)for(f=x-n;f>w;f--)d=f+n-1,m=f+a-1,d in v?v[m]=v[d]:delete v[m];for(f=0;f<a;f++)v[f+w]=arguments[f+2];return v.length=x-n+a,c}})}}]);