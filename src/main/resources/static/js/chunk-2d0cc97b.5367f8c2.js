(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc97b"],{"4f1d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"2"}}),a("v-col",[a("v-select",{attrs:{items:t.categories,label:"Category"},on:{change:t.findContents},model:{value:t.search.category,callback:function(e){t.$set(t.search,"category",e)},expression:"search.category"}}),a("v-text-field",{attrs:{label:"Title"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.findContents.apply(null,arguments)}},model:{value:t.search.title,callback:function(e){t.$set(t.search,"title",e)},expression:"search.title"}})],1),a("v-col",{staticClass:"pa-3",attrs:{cols:"3"}},[a("v-btn",{staticClass:"ma-3",attrs:{color:"purple",dark:"",large:"",outlined:""},on:{click:t.resetSearchForm}},[a("v-icon",{attrs:{dark:""}},[t._v("fas fa-trash-restore-alt")])],1),a("br"),a("v-btn",{staticClass:"ma-3",attrs:{color:"purple",dark:"",large:"",outlined:""},on:{click:t.findContents}},[a("v-icon",{attrs:{dark:""}},[t._v("fas fa-search")])],1)],1),a("v-col",{attrs:{cols:"1"}})],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"1"}}),a("v-col",{staticClass:"text-h6",attrs:{"align-self":"center"}},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-icon",t._g(t._b({attrs:{dark:"",large:"",color:"teal"}},"v-icon",r,!1),n),[t._v(" fas fa-newspaper ")]),t._v("   "+t._s(t.numberFormat(t.pager.totalElements))+" ")]}}])},[a("span",[t._v("articles")])])],1),a("v-col",{attrs:{cols:"3"}},[a("v-select",{attrs:{items:t.display,label:"Display"},on:{change:function(e){return t.findContents(1)}},model:{value:t.search.size,callback:function(e){t.$set(t.search,"size",e)},expression:"search.size"}})],1),a("v-col",{attrs:{cols:"1"}},[a("v-btn",{attrs:{fab:"",dark:"",color:"teal"},on:{click:function(e){t.createState=!t.createState}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)],1),a("v-col",{attrs:{cols:"1"}})],1),a("v-row",{staticClass:"text-center pa-3",attrs:{justify:"center"}},[a("v-col",[a("v-simple-table",{staticClass:"rounded-lg",attrs:{"fixed-header":"",height:"100%"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-center rounded-tl-lg",staticStyle:{width:"20%"}},[t._v("Category")]),a("th",{staticClass:"text-center",staticStyle:{width:"70%"}},[t._v("Title")]),a("th",{staticClass:"text-center",staticStyle:{width:"10%"}},[t._v("Delete")])])]),a("tbody",t._l(t.contents,(function(e){return a("tr",[a("td",[a("div",{staticClass:"text-h6",staticStyle:{color:"paleturquoise","font-weight":"bold"}},[t._v(" "+t._s(e.category)+" ")])]),a("td",{staticClass:"text-left"},[a("a",{staticClass:"text-decoration-none",staticStyle:{color:"white","font-weight":"bold"},attrs:{href:e.link,target:"blank"}},[t._v(" "+t._s(e.title)+" ")])]),a("td",[a("v-icon",{on:{click:function(a){return t.deleteBookmark(e.id)}}},[t._v(" fas fa-trash-alt ")])],1)])})),0)]},proxy:!0}])})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("v-pagination",{attrs:{color:"teal",value:t.pager.currentPage,length:t.pager.total,"total-visible":9},on:{input:t.findContents}})],1)],1),t.createState?a("v-sheet",{staticClass:"px-7 pt-7 pb-4 mx-auto text-center d-inline-block",staticStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)","z-index":"999"},attrs:{elevation:"6",rounded:"",color:"blue-grey darken-3",dark:""}},[a("div",{staticClass:"grey--text text--lighten-1 text-body-2 mb-4"},[a("v-select",{attrs:{label:"Category",items:t.categories},model:{value:t.create.category,callback:function(e){t.$set(t.create,"category",e)},expression:"create.category"}}),a("v-text-field",{attrs:{label:"Title"},model:{value:t.create.title,callback:function(e){t.$set(t.create,"title",e)},expression:"create.title"}}),a("v-text-field",{attrs:{label:"Link"},model:{value:t.create.link,callback:function(e){t.$set(t.create,"link",e)},expression:"create.link"}})],1),a("v-btn",{staticClass:"ma-1",attrs:{loading:t.loading,color:"primary",plain:""},on:{click:t.createRequest}},[t._v(" Create ")]),a("v-btn",{staticClass:"ma-1",attrs:{disabled:t.loading,color:"grey",plain:""},on:{click:t.cancelCreate}},[t._v(" Cancel ")])],1):t._e(),t.deleteState?a("v-sheet",{staticClass:"px-7 pt-7 pb-4 mx-auto text-center d-inline-block",staticStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)","z-index":"999"},attrs:{elevation:"6",rounded:"",color:"blue-grey darken-3",dark:""}},[a("div",{staticClass:"grey--text text--lighten-1 text-body-2 mb-4"},[t._v(" Are you sure you want to delete this? ")]),a("v-btn",{staticClass:"ma-1",attrs:{loading:t.loading,color:"error",plain:""},on:{click:t.remove}},[t._v(" Delete ")]),a("v-btn",{staticClass:"ma-1",attrs:{disabled:t.loading,color:"grey",plain:""},on:{click:function(e){t.deleteState=!t.deleteState}}},[t._v(" Cancel ")])],1):t._e()],1)},r=[],s=a("5530"),l=(a("ac1f"),a("5319"),a("d3b7"),a("25f0"),a("841c"),a("caad"),a("2532"),a("9911"),a("bc3a")),o=a.n(l),c=a("2f62"),i={name:"Bookmark",data:function(){return{id:0,deleteState:!1,createState:!1,loading:!1,create:{category:null,title:null,link:null},search:{page:0,size:10,category:"",title:""},contents:{},pager:{currentPage:0,total:0,totalElements:0},categories:["Java","Spring","Gradle","Database","CS","IDE","Javascript","Vue"],display:[10,30,50,100,200]}},mounted:function(){this.findContents()},computed:{numberFormat:function(){return function(t){var e=/\B(?=(\d{3})+(?!\d))/g;return t.toString().replace(e,",")}}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["getCurrentVisitors"])),{},{findContents:function(t){var e=this;void 0!==t&&(this.search.page=t-1);var a="/api/v1/bookmarks";o.a.get(a,{params:this.search}).then((function(t){e.contents=t.data.pages.content,e.getCurrentVisitors(t),e.pager.currentPage=t.data.pages.number+1,e.pager.total=t.data.pages.totalPages,e.pager.totalElements=t.data.pages.totalElements,0===e.search.page&&0===e.pager.total||e.search.page>=e.pager.total&&(e.search.page=e.pager.total-1,e.findContents())})).catch((function(){alert("400, Bad Request!")}))},resetSearchForm:function(){this.search.page=0,this.search.size=10,this.search.category="",this.search.title="",this.findContents(1)},createRequest:function(){var t=this;this.loading=!0;var e="/api/v1/bookmark";o.a.post(e,null,{params:this.create}).then((function(e){e.request.responseURL.includes("login")?window.location.href="/login":(alert("Successes create!"),t.findContents(),t.loading=!1,t.createState=!1)})).catch((function(e){alert("The value must not be empty!"),t.loading=!1,t.createState=!1}))},cancelCreate:function(){this.create.category=null,this.create.title=null,this.create.link=null,this.createState=!this.createState},deleteBookmark:function(t){this.id=t,this.deleteState=!0},remove:function(){var t=this;this.loading=!0;var e="/api/v1/bookmark/"+this.id;o.a.delete(e,{}).then((function(e){alert("Successes delete!"),t.loading=!1,t.deleteState=!1,t.findContents()})).catch((function(t){window.location.href="/login"}))}})},d=i,u=a("2877"),v=a("6544"),f=a.n(v),g=a("8336"),p=a("62ad"),h=a("a523"),b=a("132d"),k=a("891e"),m=a("0fd9"),y=a("b974"),C=a("8dd9"),x=a("1f4f"),S=a("8654"),_=a("3a2f"),w=Object(u["a"])(d,n,r,!1,null,null,null);e["default"]=w.exports;f()(w,{VBtn:g["a"],VCol:p["a"],VContainer:h["a"],VIcon:b["a"],VPagination:k["a"],VRow:m["a"],VSelect:y["a"],VSheet:C["a"],VSimpleTable:x["a"],VTextField:S["a"],VTooltip:_["a"]})}}]);
//# sourceMappingURL=chunk-2d0cc97b.5367f8c2.js.map