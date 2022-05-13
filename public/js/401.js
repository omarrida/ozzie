"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[401,241],{4782:(e,t,r)=>{r.d(t,{s:()=>c,u:()=>s});var n=r(8129),o=r.n(n);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,l=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e){var t=l(e.split("/"),2),r=t[0],n=t[1];return o()("projects.show",{vendor:r,name:n})}function s(e,t,r){var n=l(e.split("/"),2),a=n[0],c=n[1];return o()("".concat(t,".show"),{vendor:a,name:c,id:r})}},5241:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(5166),o={class:"relative z-10 border-t-4 border-indigo bg-white"},l={class:"mx-auto max-w-4xl px-2"},a={class:"flex items-center justify-between"},c=(0,n.createElementVNode)("h1",{class:"flex items-center"},[(0,n.createElementVNode)("span",{class:"text-5xl font-light text-indigo"},"O"),(0,n.createElementVNode)("span",{class:"font-sans text-2xl font-semibold uppercase leading-normal tracking-wide text-black-light"},"zzie")],-1),s=(0,n.createElementVNode)("p",{class:"font-sans font-normal italic leading-normal tracking-tight text-grey-blue-darkest"}," Addressing our open source debt ",-1),i={class:"relative z-0 overflow-x-auto bg-frost font-sans"},d={class:"mx-auto max-w-4xl px-2 pb-6"};const m={name:"Layout",props:{title:{type:String,default:"Ozzie"}},watch:{title:{immediate:!0,handler:function(e){document.title=e}}},render:function(e,t,r,m,u,p){var f=(0,n.resolveComponent)("InertiaLink");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("section",l,[(0,n.createElementVNode)("div",a,[(0,n.createVNode)(f,{href:e.$route("projects.index"),method:"get"},{default:(0,n.withCtx)((function(){return[c]})),_:1},8,["href"]),s])])]),(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",d,[(0,n.renderSlot)(e.$slots,"default")])])])}},u=m},7401:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(5166),o=(0,n.createTextVNode)(" Pull Request "),l={class:"mt-4 flex flex-col text-black-lighter md:flex-row md:items-center"},a=["href","title"],c=(0,n.createElementVNode)("span",{class:"text-indigo"}," Conversation ",-1),s=["href","title"],i=(0,n.createElementVNode)("span",{class:"text-indigo"}," Commits ",-1),d=["href","title"],m=(0,n.createElementVNode)("span",{class:"text-indigo"}," Files changed ",-1);var u=[(0,n.createElementVNode)("svg",{class:"mr-1 inline h-6 w-6",viewBox:"0 0 14 16","aria-hidden":"true"},[(0,n.createElementVNode)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"})],-1)];const p={name:"IconCommit",render:function(e,t,r,o,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("span",null,u)}},f=p;var h=[(0,n.createElementVNode)("svg",{class:"mr-1 inline h-6 w-6",viewBox:"0 0 13 16","aria-hidden":"true"},[(0,n.createElementVNode)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M6 7h2v1H6v2H5V8H3V7h2V5h1v2zm-3 6h5v-1H3v1zM7.5 2L11 5.5V15c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6.5zM10 6L7 3H1v12h9V6zM8.5 0H3v1h5l4 4v8h1V4.5L8.5 0z"})],-1)];const b={name:"IconFileDiff",render:function(e,t,r,o,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("span",null,h)}},g=b;var k=[(0,n.createElementVNode)("svg",{class:"mr-1 inline h-6 w-6",viewBox:"0 0 16 16",width:"128","aria-hidden":"true"},[(0,n.createElementVNode)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z"})],-1)];const x={name:"IconFileDiff",render:function(e,t,r,o,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("span",null,k)}},v=x;const V={components:{GitHubItem:r(5111).Z,IconConversation:v,IconCommit:f,IconFileDiff:g},props:{project:{type:Object,required:!0},issue:{type:Object,required:!0},body:{type:String,required:!0}},methods:{baseUrl:function(e){return e?"".concat(this.issue.html_url,"/").concat(e):this.issue.html_url}},render:function(e,t,r,u,p,f){var h=(0,n.resolveComponent)("IconConversation"),b=(0,n.resolveComponent)("IconCommit"),g=(0,n.resolveComponent)("IconFileDiff"),k=(0,n.resolveComponent)("GitHubItem");return(0,n.openBlock)(),(0,n.createBlock)(k,{project:r.project,issue:r.issue,body:r.body},{"github-item-type":(0,n.withCtx)((function(){return[o]})),"title-extra":(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("a",{href:f.baseUrl(),title:"View the conversation about pull request #".concat(r.issue.number," on GitHub"),target:"_blank",rel:"noopener noreferrer",class:"flex items-center"},[(0,n.createVNode)(h),c],8,a),(0,n.createElementVNode)("a",{href:f.baseUrl("commits"),title:"View the commits of pull request #".concat(r.issue.number," on GitHub"),target:"_blank",rel:"noopener noreferrer",class:"flex items-center md:ml-8"},[(0,n.createVNode)(b),i],8,s),(0,n.createElementVNode)("a",{href:f.baseUrl("files"),title:"View the file diffs for pull request #".concat(r.issue.number," on GitHub"),target:"_blank",rel:"noopener noreferrer",class:"flex items-center md:ml-8"},[(0,n.createVNode)(g),m],8,d)])]})),_:1},8,["project","issue","body"])}},y=V},5547:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(5166),o={class:"mt-2 flex"},l=(0,n.createTextVNode)(" Home "),a={key:0,class:"mx-1"},c={key:2,class:"mx-1"},s={key:3};var i=r(4782);const d={name:"BreadCrumb",props:{project:{type:Object,default:null},issue:{type:Object,default:null}},methods:{ozzieProjectUrl:i.s},render:function(e,t,r,i,d,m){var u=(0,n.resolveComponent)("InertiaLink");return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createVNode)(u,{class:"text-indigo",href:e.$route("projects.index"),method:"get"},{default:(0,n.withCtx)((function(){return[l]})),_:1},8,["href"]),r.project?((0,n.openBlock)(),(0,n.createElementBlock)("span",a,">")):(0,n.createCommentVNode)("",!0),r.project?((0,n.openBlock)(),(0,n.createBlock)(u,{key:1,class:"text-indigo",href:m.ozzieProjectUrl(r.project.packagist_name),method:"get"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(r.project.packagist_name),1)]})),_:1},8,["href"])):(0,n.createCommentVNode)("",!0),r.issue?((0,n.openBlock)(),(0,n.createElementBlock)("span",c,">")):(0,n.createCommentVNode)("",!0),r.issue?((0,n.openBlock)(),(0,n.createElementBlock)("span",s,"#"+(0,n.toDisplayString)(r.issue.number),1)):(0,n.createCommentVNode)("",!0)])}},m=d},4577:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(5166),o={class:"flex table w-full table-auto flex-col border border-grey bg-white"};const l={name:"Card",render:function(e,t,r,l,a,c){return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.renderSlot)(e.$slots,"default")])}},a=l},2121:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(5166),o={class:"mt-6 w-full table-auto border border-grey"},l={class:"border-b-2 border-grey bg-grey-blue-light text-left"},a={key:0,class:"p-4 text-xs font-bold uppercase leading-none tracking-wide text-grey-darkest"},c=(0,n.createElementVNode)("th",{class:"p-4 text-xs font-bold uppercase leading-none tracking-wide text-grey-darkest"}," Debt Score ",-1),s=(0,n.createElementVNode)("th",{class:"hidden p-4 text-xs font-bold uppercase leading-none tracking-wide text-grey-darkest md:table-cell"}," Debt Score Graph ",-1),i=(0,n.createElementVNode)("th",{class:"hidden p-4 text-xs font-bold uppercase leading-none tracking-wide text-grey-darkest md:table-cell"}," Old Prs ",-1),d=(0,n.createElementVNode)("th",{class:"hidden p-4 text-xs font-bold uppercase leading-none tracking-wide text-grey-darkest md:table-cell"}," Old Issues ",-1),m=(0,n.createElementVNode)("th",{class:"hidden p-4 text-xs font-bold uppercase leading-none tracking-wide text-grey-darkest md:table-cell"}," Prs ",-1),u=(0,n.createElementVNode)("th",{class:"hidden p-4 text-xs font-bold uppercase leading-none tracking-wide text-grey-darkest md:table-cell"}," Issues ",-1),p={key:1,class:"hidden p-4 text-xs md:table-cell"},f={class:"divide-y divide-smoke bg-white"},h=["onClick"],b={key:0,class:"p-4"},g={class:"p-4 text-black-lightest"},k={class:"flex items-baseline"},x={class:"hidden p-4 text-black-lightest md:table-cell"},v=["src","alt"],V={class:"hidden p-4 text-black-lightest md:table-cell"},y={class:"hidden p-4 text-black-lightest md:table-cell"},N={class:"hidden p-4 text-black-lightest md:table-cell"},E={class:"hidden p-4 text-black-lightest md:table-cell"},j={key:1,class:"hidden p-4 md:table-cell"},w=["href"];var B=r(4782);const C={name:"DebtTable",props:{projects:{type:Object,required:!0},hacktoberfest:{type:Boolean,default:!1},showProjectName:{type:Boolean,default:!0},linkProjects:{type:Boolean,default:!0}},methods:{debtScoreClass:function(e){return e>5?"bg-red":e>1?"bg-orange":""},ozzieProjectUrl:B.s},render:function(e,t,r,B,C,_){var S=(0,n.resolveComponent)("InertiaLink");return(0,n.openBlock)(),(0,n.createElementBlock)("table",o,[(0,n.createElementVNode)("thead",l,[(0,n.createElementVNode)("tr",null,[r.showProjectName?((0,n.openBlock)(),(0,n.createElementBlock)("th",a," Project Name ")):(0,n.createCommentVNode)("",!0),c,s,i,d,m,u,r.hacktoberfest?((0,n.openBlock)(),(0,n.createElementBlock)("th",p," 🎃 ")):(0,n.createCommentVNode)("",!0)])]),(0,n.createElementVNode)("tbody",f,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.projects.filter((function(e){return e.debt_score>0})),(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:t.id,class:(0,n.normalizeClass)(r.linkProjects?["hover:bg-indigo-hover","cursor-pointer"]:[]),onClick:function(n){return r.linkProjects?e.$inertia.visit(_.ozzieProjectUrl(t.packagist_name)):null}},[r.showProjectName?((0,n.openBlock)(),(0,n.createElementBlock)("td",b,[(0,n.createVNode)(S,{class:"text-indigo no-underline",href:_.ozzieProjectUrl(t.packagist_name),method:"get"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(t.namespace)+"/"+(0,n.toDisplayString)(t.name),1)]})),_:2},1032,["href"])])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("td",g,[(0,n.createElementVNode)("div",k,(0,n.toDisplayString)(t.debt_score),1)]),(0,n.createElementVNode)("td",x,[(0,n.createElementVNode)("img",{src:"data:image/jpeg;base64, ".concat(t.debt_score_graph),alt:"debt score graph for project ".concat(t.namespace,"/").concat(t.name),width:"80",height:"20"},null,8,v)]),(0,n.createElementVNode)("td",V,(0,n.toDisplayString)(t.old_pull_requests_count),1),(0,n.createElementVNode)("td",y,(0,n.toDisplayString)(t.old_issues_count),1),(0,n.createElementVNode)("td",N,(0,n.toDisplayString)(t.pull_requests_count),1),(0,n.createElementVNode)("td",E,(0,n.toDisplayString)(t.issues_count),1),r.hacktoberfest?((0,n.openBlock)(),(0,n.createElementBlock)("td",j,[(0,n.createElementVNode)("a",{class:"-mx-2 p-2 text-indigo no-underline",href:"https://github.com/"+t.namespace+"/"+t.name+"/labels/hacktoberfest",target:"_blank"},(0,n.toDisplayString)(t.hacktoberfest_issues),9,w)])):(0,n.createCommentVNode)("",!0)],10,h)})),128))])])}},_=C},5111:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(5166),o=["href","title"],l={class:"flex flex-col text-2xl text-indigo md:flex-row md:text-3xl"},a={class:"ml-1 text-xl font-thin text-grey-dark md:ml-2 md:text-3xl"},c={class:"mt-1"},s=["href","title"],i={class:"text-grey-blue-dark"},d=["innerHTML"];var m=r(5241),u=r(6722),p=r(4577),f=r(2121);const h={components:{BreadCrumb:r(5547).Z,Card:p.Z,Layout:m.default,ProjectHeader:u.Z,DebtTable:f.Z},props:{project:{type:Object,required:!0},issue:{type:Object,required:!0},body:{type:String,required:!0}},data:function(){return{parsedGitHubItemBody:"",loaded:!1}},render:function(e,t,r,m,u,p){var f=(0,n.resolveComponent)("BreadCrumb"),h=(0,n.resolveComponent)("ProjectHeader"),b=(0,n.resolveComponent)("DebtTable"),g=(0,n.resolveComponent)("Card"),k=(0,n.resolveComponent)("Layout");return(0,n.openBlock)(),(0,n.createBlock)(k,{title:"Ozzie - "+r.project.namespace+"/"+r.project.name+" - #"+r.issue.number},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(f,{project:r.project,issue:r.issue},null,8,["project","issue"]),(0,n.createVNode)(h,{project:r.project,issue:r.issue},null,8,["project","issue"]),(0,n.createVNode)(b,{"show-project-name":!1,projects:[r.project],class:"hidden md:table"},null,8,["projects"]),(0,n.createVNode)(g,{class:"mt-4 px-2 pt-2 md:px-4 md:pt-4"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("a",{href:r.issue.html_url,title:"View #"+r.issue.number+" on GitHub",class:"no-underline","aria-label":"Launch",target:"_blank",rel:"noopener noreferrer"},[(0,n.createElementVNode)("h2",l,[(0,n.createTextVNode)((0,n.toDisplayString)(r.issue.title),1),(0,n.createElementVNode)("span",a,"#"+(0,n.toDisplayString)(r.issue.number),1)])],8,o),(0,n.createElementVNode)("p",c,[(0,n.createElementVNode)("a",{href:"https://github.com/".concat(r.issue.user.login),title:"View ".concat(r.issue.user.login,"'s profile overview on GitHub"),target:"_blank",rel:"noopener noreferrer",class:"text-indigo"},(0,n.toDisplayString)(r.issue.user.login),9,s),(0,n.createElementVNode)("span",i," opened this issue "+(0,n.toDisplayString)(e.$luxon.fromISO(r.issue.created_at).toRelative()),1)]),(0,n.renderSlot)(e.$slots,"title-extra"),(0,n.createElementVNode)("div",{class:"markdown-body my-4",innerHTML:r.body},null,8,d)]})),_:3})]})),_:3},8,["title"])}},b=h},2028:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(5166),o=[(0,n.createElementVNode)("svg",{class:"fill-current inline-block h-5 w-5 text-grey-blue-darkest",height:"32",viewBox:"0 0 16 16",width:"32","aria-hidden":"true"},[(0,n.createElementVNode)("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})],-1),(0,n.createElementVNode)("span",{class:"sr-only"}," Open on GitHub ",-1)];const l={name:"IconGitHub",render:function(e,t,r,l,a,c){return(0,n.openBlock)(),(0,n.createElementBlock)("span",null,o)}},a=l},6722:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(5166),o={class:"md:flex-rows mt-2 flex flex-col justify-between md:mt-6"},l={class:"text-2xl tracking-wide text-black-lightest"},a=["href","title"],c={class:"text-black-lightest"},s=(0,n.createTextVNode)(" Maintained by "),i=["href","title"],d={class:"font-light text-grey-dark md:mt-1"},m={key:0,class:"font-light text-grey-dark"};const u={name:"ProjectHeader",components:{IconGitHub:r(2028).Z},props:{project:{type:Object,required:!0},issue:{type:Object,default:null}},render:function(e,t,r,u,p,f){var h=(0,n.resolveComponent)("IconGitHub");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("h1",l,[(0,n.createElementVNode)("a",{href:"https://github.com/".concat(r.project.namespace,"/").concat(r.project.name),title:"View project ".concat(r.project.namespace,"/").concat(r.project.name," on GitHub"),target:"_blank",class:"hover:text-black",rel:"noopener noreferrer"},[(0,n.createTextVNode)((0,n.toDisplayString)(r.project.namespace)+"/"+(0,n.toDisplayString)(r.project.name),1),(0,n.createVNode)(h,{class:"ml-1"})],8,a)]),(0,n.createElementVNode)("p",c,[s,((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.project.maintainers,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("a",{key:e,href:"https://github.com/".concat(e),title:"View ".concat(e,"'s profile overview on GitHub"),target:"_blank",rel:"noopener noreferrer",class:"text-indigo no-underline"}," @"+(0,n.toDisplayString)(e),9,i)})),128))])]),(0,n.createElementVNode)("p",d," Synced "+(0,n.toDisplayString)(e.$luxon.fromISO(r.project.updated_at).toRelative()),1),r.project.has_downloads?((0,n.openBlock)(),(0,n.createElementBlock)("p",m,(0,n.toDisplayString)((new Intl.NumberFormat).format(r.project.downloads_total))+" downloads ("+(0,n.toDisplayString)((new Intl.NumberFormat).format(r.project.downloads_last_30_days))+" per month) ",1)):(0,n.createCommentVNode)("",!0)],64)}},p=u}}]);