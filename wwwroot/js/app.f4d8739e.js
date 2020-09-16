(function(e){function t(t){for(var s,o,n=t[0],l=t[1],c=t[2],u=0,d=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},i={app:0},r=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var p=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[e._v("Keepr")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==e.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[e._v("Home")])],1),e.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"dashboard"==e.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"dashboard"}}},[e._v("My-Dashboard")])],1):e._e(),e.$auth.isAuthenticated?a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("My Vaults")]),a("div",{staticClass:"dropdown-menu bg-secondary shadow"},e._l(e.vaults,(function(t){return a("router-link",{key:t.id,staticClass:"dropdown-item bg-secondary text-capitalize text-center",attrs:{href:"#",to:{name:"vault",params:{id:t.id}}}},[e._v(e._s(t.name))])})),1)]):e._e()]),a("span",{staticClass:"navbar-text"},[e.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger shadow",on:{click:e.logout}},[e._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:e.login}},[e._v("Login")])])])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("bc3a"),c=a.n(l);c.a.create({baseURL:"https://localhost:5001",withCredentials:!0});var p={name:"Navbar",mounted(){this.$store.dispatch("getMyVaults")},methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: ",this.$auth.user),this.$store.dispatch("getMyVaults"),this.$store.dispatch("getUserId")},async logout(){this.$store.dispatch("resetBearer"),this.$store.state.userId={},await this.$auth.logout({returnTo:window.location.origin})}},computed:{vaults(){return this.$store.state.vaults}}},u=p,d=a("2877"),h=Object(d["a"])(u,o,n,!1,null,null,null),v=h.exports,m=a("335d"),b={name:"App",async beforeCreate(){await Object(m["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer)},components:{Navbar:v}},w=b,g=(a("5c0b"),Object(d["a"])(w,i,r,!1,null,null,null)),f=g.exports,K=a("8c4f"),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home container-fluid"},[a("h1",{staticClass:"row p-3 justify-content-center border-top border-dark"},[e._v("Public Keeps")]),a("div",{staticClass:"row p-3 justify-content-center"},e._l(e.publicKeeps,(function(e){return a("keepCard",{key:e.id,staticClass:"m-2",attrs:{keepData:e}})})),1)])},C=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card p-2 shadow border border-dark",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",staticStyle:{"object-fit":"contain",width:"100%","max-height":"200px"},attrs:{src:e.keepData.img,alt:"Keep Image..."},on:{click:function(t){e.makeActiveKeep(e.keepData.id),e.moveToKeepDetails(e.keepData.id)}}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v(e._s(e.keepData.name))]),a("p",{staticClass:"card-text"},[e._v(e._s(e.keepData.description))]),a("div",{staticClass:"col-12 d-flex justify-content-between"},[a("i",{staticClass:"fa fa-eye p-3"},[e._v(" "+e._s(e.keepData.views))]),a("i",{staticClass:"fa fa-floppy-o p-3"},[e._v(" "+e._s(e.keepData.keeps))]),a("i",{staticClass:"fa fa-share-alt p-3",on:{click:e.editKeep}},[e._v(" "+e._s(e.keepData.shares))])]),a("div",{staticClass:"row justify-content-between px-3 pt-2"},[e.keepData.userId==e.userId?a("button",{staticClass:"btn btn-sm btn-warning shadow",on:{click:function(t){return e.deleteKeep(e.keepData.id)}}},[e._v("Delete")]):e._e(),e.vaultKeepRelationshipData?a("button",{staticClass:"btn btn-sm btn-danger shadow",on:{click:e.deleteVaultKeepRelationship}},[e._v("Delete From Vault")]):e._e(),e.keepData.isPrivate?a("i",{staticClass:"fa fa-lock"},[e._v(" Private")]):e._e()])])])},_=[],V={name:"keepCard",props:["keepData","vaultKeepRelationshipData"],data(){return{}},mounted(){},computed:{userId(){return this.$store.dispatch("getUserId"),this.$store.state.userId}},methods:{makeActiveKeep(e){this.$store.dispatch("getActiveKeep",e),console.log(e)},moveToKeepDetails(e){this.$router.push({name:"keepDetails",params:{id:e}})},deleteKeep(e){this.$store.dispatch("deleteKeep",e)},editKeep(){this.$store.dispatch("editKeep",{id:this.keepData.id,Shares:this.keepData.shares+1,Img:this.keepData.img,Description:this.keepData.description,Name:this.keepData.name,UserId:this.keepData.userId})},deleteVaultKeepRelationship(e){this.$store.dispatch("deleteVaultKeepRelationship",this.vaultKeepRelationshipData)}},components:{}},$=V,j=Object(d["a"])($,k,_,!1,null,"792a116c",null),O=j.exports,D={name:"home",mounted(){this.$store.state.vaultKeeps=[],this.$store.state.vaultKeepRelationships=[],this.$store.dispatch("getMyVaults"),this.$store.dispatch("getPublicKeeps")},computed:{publicKeeps(){return this.$store.state.publicKeeps},vaults(){return this.$store.state.vaults}},methods:{logout(){this.$store.dispatch("logout")}},components:{keepCard:O}},x=D,I=Object(d["a"])(x,y,C,!1,null,null,null),P=I.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard container-fluid"},[a("h1",{staticClass:"row p-3 justify-content-center border-top border-dark"},[e._v("My Vaults")]),a("form",{staticClass:"row justify-content-center align-items-center",on:{submit:function(t){return t.preventDefault(),e.createNewVault(t)}}},[a("div",{staticClass:"col-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"newVaultName"}},[e._v("New Vault Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVaultObject.name,expression:"newVaultObject.name"}],staticClass:"form-control shadow",attrs:{type:"text",id:"newVaultName",placeholder:"New Vault Name..."},domProps:{value:e.newVaultObject.name},on:{input:function(t){t.target.composing||e.$set(e.newVaultObject,"name",t.target.value)}}})])]),a("div",{staticClass:"col-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"newVaultDescription"}},[e._v("New Vault Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVaultObject.description,expression:"newVaultObject.description"}],staticClass:"form-control shadow",attrs:{type:"text",id:"newVaultDescription",placeholder:"New Vault Description..."},domProps:{value:e.newVaultObject.description},on:{input:function(t){t.target.composing||e.$set(e.newVaultObject,"description",t.target.value)}}})])]),a("button",{staticClass:"btn btn-sm btn-primary mt-3 ml-2 shadow",attrs:{type:"submit"}},[e._v("Submit")])]),a("div",{staticClass:"row p-3 justify-content-center"},e._l(e.vaults,(function(t){return a("div",{key:t.id,staticClass:"card shadow border border-dark m-3 col-3"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v(e._s(t.name))]),a("p",{staticClass:"card-text"},[e._v(e._s(t.description))]),a("div",{staticClass:"row justify-content-between"},[a("button",{staticClass:"btn btn-sm btn-primary shadow",on:{click:function(a){return e.goToVault(t.id)}}},[e._v("See Keeps in this Vault")]),a("button",{staticClass:"btn btn-sm btn-danger shadow",on:{click:function(a){return e.deleteVault(t.id)}}},[e._v("Delete")])])])])})),0),a("h1",{staticClass:"row p-3 justify-content-center mt-2 border-top border-dark"},[e._v("My Keeps")]),a("form",{staticClass:"row justify-content-center align-items-center p-3 mb-4",on:{submit:function(t){return t.preventDefault(),e.createNewKeep(t)}}},[a("div",{staticClass:"col-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"newKeepName"}},[e._v("New Keep Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeepObject.name,expression:"newKeepObject.name"}],staticClass:"form-control shadow",attrs:{type:"text",id:"newKeepName",placeholder:"New Keep Name..."},domProps:{value:e.newKeepObject.name},on:{input:function(t){t.target.composing||e.$set(e.newKeepObject,"name",t.target.value)}}})])]),a("div",{staticClass:"col-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"newKeepDescription"}},[e._v("New Keep Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeepObject.description,expression:"newKeepObject.description"}],staticClass:"form-control shadow",attrs:{type:"text",id:"newKeepDescription",placeholder:"New Keep Description..."},domProps:{value:e.newKeepObject.description},on:{input:function(t){t.target.composing||e.$set(e.newKeepObject,"description",t.target.value)}}})])]),a("div",{staticClass:"col-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"newKeepImage"}},[e._v("New Keep Image URL")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeepObject.img,expression:"newKeepObject.img"}],staticClass:"form-control shadow",attrs:{type:"text",id:"newKeepImage",placeholder:"New Keep Image URL..."},domProps:{value:e.newKeepObject.img},on:{input:function(t){t.target.composing||e.$set(e.newKeepObject,"img",t.target.value)}}})])]),a("div",{},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeepObject.isPrivate,expression:"newKeepObject.isPrivate"}],staticClass:"form-check-input shadow",attrs:{type:"checkbox",id:"newKeepPrivateCheck"},domProps:{checked:Array.isArray(e.newKeepObject.isPrivate)?e._i(e.newKeepObject.isPrivate,null)>-1:e.newKeepObject.isPrivate},on:{change:function(t){var a=e.newKeepObject.isPrivate,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);s.checked?o<0&&e.$set(e.newKeepObject,"isPrivate",a.concat([r])):o>-1&&e.$set(e.newKeepObject,"isPrivate",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.newKeepObject,"isPrivate",i)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"newKeepPrivateCheck"}},[e._v("Make Private?")])])]),a("button",{staticClass:"btn btn-sm btn-primary mt-3 ml-3 shadow",attrs:{type:"submit"}},[e._v("Submit")])]),a("div",{staticClass:"row p-3 justify-content-center"},e._l(e.personalKeeps,(function(e){return a("keepCard",{key:e.id,staticClass:"m-2",attrs:{keepData:e}})})),1)])},R=[],M={name:"dashboard",data(){return{newVaultObject:{},newKeepObject:{}}},mounted(){this.$store.state.vaultKeeps=[],this.$store.state.vaultKeepRelationships=[],this.$store.dispatch("getMyVaults"),this.$store.dispatch("getMyKeeps")},computed:{personalKeeps(){return this.$store.state.personalKeeps},vaults(){return this.$store.state.vaults}},methods:{goToVault(e){this.$router.push({name:"vault",params:{id:e}})},createNewVault(){this.$store.dispatch("createNewVault",{name:this.newVaultObject.name,description:this.newVaultObject.description}),this.newVaultObject={}},deleteVault(e){this.$store.dispatch("deleteVault",e)},createNewKeep(){this.$store.dispatch("createNewKeep",{name:this.newKeepObject.name,description:this.newKeepObject.description,img:this.newKeepObject.img,isPrivate:this.newKeepObject.isPrivate}),this.newKeepObject={}}},components:{keepCard:O}},A=M,S=Object(d["a"])(A,N,R,!1,null,null,null),T=S.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"keepDetails container-fluid"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-8 d-flex justify-content-end"},[a("div",{staticClass:"card p-2 shadow border border-dark",staticStyle:{width:"30rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:e.activeKeep.img,alt:"Keep Image..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v(e._s(e.activeKeep.name))]),a("p",{staticClass:"card-text"},[e._v(e._s(e.activeKeep.description))]),a("div",{staticClass:"col-12 d-flex justify-content-between"},[a("i",{staticClass:"fa fa-eye p-3"},[e._v(" "+e._s(e.activeKeep.views))]),a("i",{staticClass:"fa fa-floppy-o p-3"},[e._v(" "+e._s(e.activeKeep.keeps))]),a("i",{staticClass:"fa fa-share-alt p-3"},[e._v(" "+e._s(e.activeKeep.shares))])]),a("div",{staticClass:"row justify-content-between px-3 pt-2"},[e.activeKeep.userId==e.userId?a("button",{staticClass:"btn btn-sm btn-danger shadow",on:{click:function(t){return e.deleteKeep(e.activeKeep.id)}}},[e._v("Delete")]):e._e(),e.activeKeep.isPrivate?a("i",{staticClass:"fa fa-lock"},[e._v(" Private")]):e._e()])])])]),a("div",{staticClass:"col-4 d-flex justify-content-start"},[a("div",{staticClass:"btn-group"},[a("div",{staticClass:"btn-group"},[a("a",{staticClass:"btn btn-secondary btn-lg dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("+ Add this Keep to a Vault")]),a("div",{staticClass:"dropdown-menu bg-secondary shadow"},e._l(e.vaults,(function(t){return a("a",{key:t.id,staticClass:"dropdown-item bg-secondary text-capitalize text-center",attrs:{href:"#"},on:{click:function(a){return e.addToVault(t.id)}}},[e._v(e._s(t.name))])})),0)])])])])])},E=[],G={name:"keepDetails",data(){return{}},mounted(){console.log(this.$store.state.activeKeep)},computed:{userId(){return this.$store.dispatch("getUserId"),this.$store.state.userId},activeKeep(){return this.$store.state.activeKeep},vaults(){return this.$store.state.vaults}},methods:{addToVault(e){this.$store.dispatch("addToVault",{keepId:this.activeKeep.id,vaultId:e}),this.$router.push({name:"vault",params:{id:e}})},deleteKeep(e){this.$store.dispatch("deleteKeep",e),this.$router.push({name:"dashboard"})}},beforeDestroy(){this.$store.state.activeKeep={}},components:{}},B=G,L=Object(d["a"])(B,U,E,!1,null,"641579ab",null),z=L.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vault container-fluid"},[a("h1",{staticClass:"row p-3 justify-content-center border-top border-dark"},[e._v(e._s(e.activeVault.name))]),a("div",{staticClass:"row p-3"},e._l(e.vaultKeeps,(function(t){return a("keepCard",{key:t.vaultKeepId,staticClass:"m-2",attrs:{keepData:t,vaultKeepRelationshipData:e.vaultKeepRelationship}})})),1)])},H=[],J={name:"vault",mounted(){this.$store.dispatch("getVaultKeepRelationships"),this.$store.dispatch("getVaultById",this.$route.params.id),this.$store.dispatch("getVaultKeeps",this.$route.params.id)},computed:{activeVault(){return console.log("THISSSS",this.$store.state.activeVault),this.$store.state.activeVault},vaultKeeps(){return this.$store.state.vaultKeeps},vaultKeepRelationship(){let e=this.$store.state.vaultKeepRelationships.find(e=>e.vaultId==this.$route.params.id);return e}},methods:{},beforeDestroy(){this.$store.state.activeVault={}},components:{keepCard:O}},Q=J,W=Object(d["a"])(Q,F,H,!1,null,null,null),Y=W.exports;s["a"].use(K["a"]);var q=new K["a"]({routes:[{path:"/",name:"home",component:P},{path:"/dashboard",name:"dashboard",component:T,beforeEnter:m["b"]},{path:"/keepDetails",name:"keepDetails",component:z,beforeEnter:m["b"]},{path:"/vaults/:id",name:"vault",component:Y,beforeEnter:m["b"]}]}),X=a("2f62");let Z=window.location.host.includes("localhost")?"https://localhost:5001/":"/";const ee=c.a.create({baseURL:Z+"api/",timeout:5e3,withCredentials:!0});s["a"].use(X["a"]);var te=new X["a"].Store({state:{userId:{},publicKeeps:[],activeKeep:{},personalKeeps:[],vaults:[],activeVault:{},vaultKeeps:[],vaultKeepRelationships:[]},mutations:{setUserId(e,t){e.userId=t},setPublicKeeps(e,t){e.publicKeeps=t},setActiveKeep(e,t){e.activeKeep=t},setPersonalKeeps(e,t){e.personalKeeps=t},setMyVaults(e,t){e.vaults=t},setActiveVault(e,t){e.activeVault=t},setVaultKeeps(e,t){e.vaultKeeps=t},setVaultKeepRelationships(e,t){e.vaultKeepRelationships=t}},actions:{async getUserId({commit:e}){try{let t=await ee.get("keeps/userId");console.log("Got the UserId",t.data),e("setUserId",t.data)}catch(t){console.error(t)}},async getPublicKeeps({commit:e}){try{let t=await ee.get("keeps");console.log("Got all public Keeps",t.data),e("setPublicKeeps",t.data)}catch(t){console.error(t)}},async getActiveKeep({commit:e},t){try{let a=await ee.get("keeps/"+t);console.log("Got the Active Keep",a.data),e("setActiveKeep",a.data)}catch(a){console.error(a)}},async getMyKeeps({commit:e}){try{let t=await ee.get("keeps/user");console.log("Got your personal Keeps",t.data),e("setPersonalKeeps",t.data)}catch(t){console.error(t)}},async createNewKeep({dispatch:e},t){try{let a=await ee.post("keeps",t);console.log("Created Keep:",a.data),e("getMyKeeps")}catch(a){console.error(a)}},async deleteKeep({dispatch:e},t){try{let a=await ee.delete("keeps/"+t);console.log("Deleted Keep",a.data),e("getMyKeeps")}catch(a){console.error(a)}},async editKeep({dispatch:e},t){try{let a=await ee.put("keeps/"+t.id,t);console.log("Edited Keep",a.data),e("getPublicKeeps")}catch(a){console.error(a)}},async getMyVaults({commit:e}){try{let t=await ee.get("vaults/user");console.log("Got Your Vaults",t.data),e("setMyVaults",t.data)}catch(t){console.error(t)}},async getVaultById({commit:e},t){try{let a=await ee.get("vaults/"+t);console.log("Got the Vault by ID",a.data),e("setActiveVault",a.data)}catch(a){console.error(a)}},async getVaultKeeps({commit:e},t){try{let a=await ee.get("vaults/"+t+"/keeps");console.log("Got the VaultKeeps",a.data),e("setVaultKeeps",a.data)}catch(a){console.error(a)}},async getVaultKeepRelationships({commit:e}){try{let t=await ee.get("vaultkeeps");console.log("Got the VaultKeepRelationships",t.data),e("setVaultKeepRelationships",t.data)}catch(t){console.error(t)}},async deleteVaultKeepRelationship({dispatch:e},t){try{let a=await ee.delete("vaultkeeps/"+t.id);console.log("Deleted the VaultKeepRelationships",a.data),e("getVaultKeepRelationships",a.data),e("getVaultKeeps",t.vaultId)}catch(a){console.error(a)}},async addToVault({dispatch:e},t){try{let a=await ee.post("vaultkeeps",t);console.log("vaultKeeps response:",a.data),e("getMyVaults"),e("getVaultKeeps",t.vaultId)}catch(a){console.error(a)}},async createNewVault({dispatch:e},t){try{let a=await ee.post("vaults",t);console.log("Created Vault:",a.data),e("getMyVaults")}catch(a){console.error(a)}},async deleteVault({dispatch:e},t){try{let a=await ee.delete("vaults/"+t);console.log("Deleted Vault",a.data),e("getMyVaults")}catch(a){console.error(a)}},setBearer({},e){ee.defaults.headers.authorization=e},resetBearer(){ee.defaults.headers.authorization=""}}});const ae="dev-24oi1jr4.us.auth0.com",se="https://keepr",ie="k39orFrjm2VLxIze5sIuxsyQC4TMfi6y";s["a"].use(m["a"],{domain:ae,clientId:ie,audience:se,onRedirectCallback:e=>{q.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),new s["a"]({router:q,store:te,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"9c0c":function(e,t,a){}});