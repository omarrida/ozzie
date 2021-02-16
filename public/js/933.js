(self.webpackChunk=self.webpackChunk||[]).push([[933,88,187,273,992],{4933:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});var r=o(5166),a=(0,r.createTextVNode)(" Issue ");const c={components:{GithubItem:o(273).default},props:{project:{type:Object,required:!0},issue:{type:Object,required:!0}},render:function(e,t,o,c,s,n){var l=(0,r.resolveComponent)("GithubItem");return(0,r.openBlock)(),(0,r.createBlock)(l,{project:o.project,issue:o.issue},{"github-item-type":(0,r.withCtx)((function(){return[a]})),_:1},8,["project","issue"])}},s=c},2088:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>u});var r=o(5166),a={class:"bg-white border-t-4 border-indigo relative z-10"},c={class:"max-w-4xl mx-auto px-2"},s={class:"flex justify-between items-center"},n=(0,r.createVNode)("h1",{class:"flex items-center"},[(0,r.createVNode)("span",{class:"font-light text-5xl text-indigo"},"O"),(0,r.createVNode)("span",{class:"uppercase text-2xl leading-normal text-black-light font-semibold font-sans tracking-wide"},"zzie")],-1),l=(0,r.createVNode)("p",{class:"font-sans italic font-normal leading-normal tracking-tight text-grey-blue-darkest"}," Addressing our open source debt ",-1),d={class:"bg-frost font-sans relative overflow-x-auto z-0"},i={class:"max-w-4xl mx-auto px-2 pb-6"};const p={name:"Layout",props:{title:{type:String,default:"Ozzie"}},watch:{title:{immediate:!0,handler:function(e){document.title=e}}},render:function(e,t,o,p,u,m){var k=(0,r.resolveComponent)("InertiaLink");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)("div",a,[(0,r.createVNode)("section",c,[(0,r.createVNode)("div",s,[(0,r.createVNode)(k,{href:e.$route("projects.index"),method:"get"},{default:(0,r.withCtx)((function(){return[n]})),_:1},8,["href"]),l])])]),(0,r.createVNode)("div",d,[(0,r.createVNode)("div",i,[(0,r.renderSlot)(e.$slots,"default")])])])}},u=p},6187:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>i});var r=o(5166),a={class:"flex mt-2"},c=(0,r.createTextVNode)(" Home "),s={key:0,class:"mx-1"},n={key:2,class:"mx-1"},l={key:3};const d={name:"BreadCrumb",props:{project:{type:Object,default:null},issue:{type:Object,default:null}},render:function(e,t,o,d,i,p){var u=(0,r.resolveComponent)("InertiaLink");return(0,r.openBlock)(),(0,r.createBlock)("div",a,[(0,r.createVNode)(u,{class:"text-indigo",href:e.$route("projects.index"),method:"get"},{default:(0,r.withCtx)((function(){return[c]})),_:1},8,["href"]),o.project?((0,r.openBlock)(),(0,r.createBlock)("span",s,">")):(0,r.createCommentVNode)("",!0),o.project?((0,r.openBlock)(),(0,r.createBlock)(u,{key:1,class:"text-indigo",href:e.$route("projects.show",{namespace:o.project.namespace,name:o.project.name}),method:"get"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(o.project.namespace)+"/"+(0,r.toDisplayString)(o.project.name),1)]})),_:1},8,["href"])):(0,r.createCommentVNode)("",!0),o.issue?((0,r.openBlock)(),(0,r.createBlock)("span",n,">")):(0,r.createCommentVNode)("",!0),o.issue?((0,r.openBlock)(),(0,r.createBlock)("span",l,"#"+(0,r.toDisplayString)(o.issue.number),1)):(0,r.createCommentVNode)("",!0)])}},i=d},273:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>f});var r=o(5166),a={class:"text-3xl"},c={class:"ml-2 font-thin text-grey-dark"},s={class:"mt-1"},n={class:"text-grey-blue-dark"},l={key:0,class:"mt-4 markdown-body"},d={key:1,class:"pb-4 text-grey-darker"},i=(0,r.createVNode)("em",null," No description provided. ",-1);var p=o(2088),u=o(3992),m=o(2240),k=o(2752);const b={components:{BreadCrumb:o(6187).default,Card:m.Z,Layout:p.default,ProjectHeader:u.default,DebtTable:k.Z},props:{project:{type:Object,required:!0},issue:{required:!0,type:Object}},data:function(){return{parsedGithubItemBody:"",loaded:!1}},mounted:function(){var e=this,t={headers:{Authorization:"token ".concat(window.githubToken)}},o={text:this.issue.body};this.$http.post("https://api.github.com/markdown",o,t).then((function(t){e.parsedGithubItemBody=t.data,e.loaded=!0}))},render:function(e,t,o,p,u,m){var k=(0,r.resolveComponent)("BreadCrumb"),b=(0,r.resolveComponent)("ProjectHeader"),f=(0,r.resolveComponent)("DebtTable"),h=(0,r.resolveComponent)("Card"),g=(0,r.resolveComponent)("Layout");return(0,r.openBlock)(),(0,r.createBlock)(g,{title:"Ozzie - "+o.project.namespace+"/"+o.project.name+" - #"+o.issue.number},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(k,{project:o.project,issue:o.issue},null,8,["project","issue"]),(0,r.createVNode)(b,{project:o.project,issue:o.issue},null,8,["project","issue"]),(0,r.createVNode)(f,{"show-project-name":!1,projects:[o.project],class:"mt-4"},null,8,["projects"]),(0,r.createVNode)(h,{class:"mt-4 px-4 pt-4"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)("h2",a,[(0,r.createTextVNode)((0,r.toDisplayString)(o.issue.title),1),(0,r.createVNode)("span",c,"#"+(0,r.toDisplayString)(o.issue.number),1)]),(0,r.createVNode)("p",s,[(0,r.createVNode)("a",{class:"font-semibold text-grey-blue-darkest",href:o.issue.user.login,target:"_blank"},(0,r.toDisplayString)(o.issue.user.login),9,["href"]),(0,r.createVNode)("span",n," opened this issue "+(0,r.toDisplayString)(e.$luxon.fromISO(o.issue.created_at).toRelative()),1)]),(0,r.renderSlot)(e.$slots,"title-extra"),u.loaded?((0,r.openBlock)(),(0,r.createBlock)("div",l,[""!==o.issue.body?((0,r.openBlock)(),(0,r.createBlock)("article",{key:0,innerHTML:u.parsedGithubItemBody},null,8,["innerHTML"])):((0,r.openBlock)(),(0,r.createBlock)("div",d,[i]))])):(0,r.createCommentVNode)("",!0)]})),_:3})]})),_:1},8,["title"])}},f=b},3992:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>p});var r=o(5166),a={class:"mt-6 flex justify-between items-center"},c={class:"text-2xl text-black-lightest tracking-wide"},s={class:"text-black-lightest"},n=(0,r.createTextVNode)(" Maintained by "),l={class:"mt-1 text-grey-dark font-light"},d={key:0,class:"text-grey-dark font-light"};const i={name:"ProjectHeader",components:{BreadCrumb:o(6187).default},props:{project:{type:Object,required:!0},issue:{type:Object,default:null}},render:function(e,t,o,i,p,u){return(0,r.openBlock)(),(0,r.createBlock)(r.Fragment,null,[(0,r.createVNode)("div",a,[(0,r.createVNode)("h1",c,(0,r.toDisplayString)(o.project.namespace)+"/"+(0,r.toDisplayString)(o.project.name),1),(0,r.createVNode)("p",s,[n,((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(o.project.maintainers,(function(e){return(0,r.openBlock)(),(0,r.createBlock)("a",{key:e,class:"text-indigo no-underline",href:"https://github.com/".concat(e),target:"_blank"}," @"+(0,r.toDisplayString)(e),9,["href"])})),128))])]),(0,r.createVNode)("p",l," Synced "+(0,r.toDisplayString)(e.$luxon.fromISO(o.project.updated_at).toRelative()),1),o.project.hasDownloads?((0,r.openBlock)(),(0,r.createBlock)("p",d,(0,r.toDisplayString)((new Intl.NumberFormat).format(o.project.downloads_total))+" downloads ("+(0,r.toDisplayString)((new Intl.NumberFormat).format(o.project.downloads_last_30_days))+" per month) ",1)):(0,r.createCommentVNode)("",!0)],64)}},p=i},2240:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(5166),a={class:"table table-auto w-full border border-grey flex flex-col bg-white"};const c={name:"Card",render:function(e,t,o,c,s,n){return(0,r.openBlock)(),(0,r.createBlock)("div",a,[(0,r.renderSlot)(e.$slots,"default")])}},s=c},2752:(e,t,o)=>{"use strict";o.d(t,{Z:()=>v});var r=o(5166),a={class:"table-auto w-full border border-grey"},c={class:"bg-white divide-y divide-smoke"};var s={class:"bg-grey-blue-light border-grey border-b-2 text-left"},n={key:0,class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"},l=(0,r.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Debt Score ",-1),d=(0,r.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Debt Score Graph ",-1),i=(0,r.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Old Prs ",-1),p=(0,r.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Old Issues ",-1),u=(0,r.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Prs ",-1),m=(0,r.createVNode)("th",{class:"text-grey-darkest font-bold uppercase text-xs leading-none tracking-wide p-4"}," Issues ",-1),k={key:1,class:"text-xs p-4"};const b={name:"DebtTableHeader",props:{hacktoberfest:{type:Boolean,default:!1},showProjectName:{type:Boolean,default:!0}},render:function(e,t,o,a,c,b){return(0,r.openBlock)(),(0,r.createBlock)("thead",s,[(0,r.createVNode)("tr",null,[o.showProjectName?((0,r.openBlock)(),(0,r.createBlock)("th",n," Project Name ")):(0,r.createCommentVNode)("",!0),l,d,i,p,u,m,o.hacktoberfest?((0,r.openBlock)(),(0,r.createBlock)("th",k," 🎃 ")):(0,r.createCommentVNode)("",!0)])])}};var f={key:0,class:"p-4"},h={class:"text-black-lightest p-4"},g={class:"text-black-lightest p-4"},x={class:"text-black-lightest p-4"},y={class:"text-black-lightest p-4"},j={class:"text-black-lightest p-4"},N={class:"text-black-lightest p-4"},B={key:1,class:"p-4"};const V={name:"DebtTableRow",props:{project:{type:Object,required:!0},hacktoberfest:{type:Boolean,default:!1},showProjectName:{type:Boolean,default:!0}},render:function(e,t,o,a,c,s){var n=(0,r.resolveComponent)("InertiaLink");return(0,r.openBlock)(),(0,r.createBlock)("tr",null,[o.showProjectName?((0,r.openBlock)(),(0,r.createBlock)("td",f,[(0,r.createVNode)(n,{class:"text-indigo no-underline p-2 -mx-2",href:e.$route("projects.show",{namespace:o.project.namespace,name:o.project.name}),method:"get"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(o.project.namespace)+"/"+(0,r.toDisplayString)(o.project.name),1)]})),_:1},8,["href"])])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("td",h,(0,r.toDisplayString)(o.project.debt_score),1),(0,r.createVNode)("td",g,[(0,r.createVNode)("img",{src:"data:image/jpeg;base64, ".concat(o.project.debt_score_graph)},null,8,["src"])]),(0,r.createVNode)("td",x,(0,r.toDisplayString)(o.project.old_pull_requests_count),1),(0,r.createVNode)("td",y,(0,r.toDisplayString)(o.project.old_issues_count),1),(0,r.createVNode)("td",j,(0,r.toDisplayString)(o.project.pull_requests_count),1),(0,r.createVNode)("td",N,(0,r.toDisplayString)(o.project.issues_count),1),o.hacktoberfest?((0,r.openBlock)(),(0,r.createBlock)("td",B,[(0,r.createVNode)("a",{class:"text-indigo no-underline p-2 -mx-2",href:"https://github.com/"+o.project.namespace+"/"+o.project.name+"/labels/hacktoberfest",target:"_blank"},(0,r.toDisplayString)(o.project.hacktoberfestIssues),9,["href"])])):(0,r.createCommentVNode)("",!0)])}},w={name:"DebtTable",components:{DebtTableHeader:b,DebtTableRow:V},props:{projects:{type:Object,required:!0},hacktoberfest:{type:Boolean,default:!1},showProjectName:{type:Boolean,default:!0}},render:function(e,t,o,s,n,l){var d=(0,r.resolveComponent)("DebtTableHeader"),i=(0,r.resolveComponent)("DebtTableRow");return(0,r.openBlock)(),(0,r.createBlock)("table",a,[(0,r.createVNode)(d,{hacktoberfest:o.hacktoberfest,"show-project-name":o.showProjectName},null,8,["hacktoberfest","show-project-name"]),(0,r.createVNode)("tbody",c,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(o.projects,(function(e){return(0,r.openBlock)(),(0,r.createBlock)(i,{key:e,project:e,hacktoberfest:o.hacktoberfest,"show-project-name":o.showProjectName,class:"hover:bg-frost"},null,8,["project","hacktoberfest","show-project-name"])})),128))])])}},v=w}}]);