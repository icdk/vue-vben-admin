import{d as e,f as t,dC as a,a1 as s,dD as o,cr as n,cs as r,h as i,o as d,i as l,bz as u,j as p,l as c,m}from"./index.a566a5ca.js";import{A as f}from"./index.585ce7e7.js";import j from"./CurrentPermissionMode.37eccdb9.js";import{_ as R}from"./index.1b767185.js";import"./index.ba5d05b1.js";import"./index.327858b4.js";import"./index.5274dc7a.js";import"./RightOutlined.91e3265a.js";import"./types.e18f0e7b.js";import"./isEqual.ec621c06.js";import"./toInteger.baf86ce7.js";import"./DownOutlined.dd4e6399.js";import"./index.8d91dadc.js";import"./index.726e5344.js";import"./usePageContext.0bdca749.js";import"./transButton.fe643f31.js";var g=e({components:{Alert:f,CurrentPermissionMode:j,PageWrapper:R},setup(){const{changeRole:e}=o();return{userStore:t,RoleEnum:a,isSuper:s((()=>t.getRoleListState.includes(a.SUPER))),isTest:s((()=>t.getRoleListState.includes(a.TEST))),changeRole:e}}});const S=u("data-v-9a73aaae");n("data-v-9a73aaae");const E=m(" 当前角色: "),b={class:"mt-4"},x=m(" 权限切换(请先切换权限模式为前端角色权限模式): ");r();const y=S(((e,t,a,s,o,n)=>{const r=i("CurrentPermissionMode"),u=i("Alert"),f=i("a-button"),j=i("a-button-group"),R=i("PageWrapper");return d(),l(R,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:S((()=>[p(r),p("p",null,[E,p("a",null,c(e.userStore.getRoleListState),1)]),p(u,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),p("div",b,[x,p(j,null,{default:S((()=>[p(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:S((()=>[m(c(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),p(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:S((()=>[m(c(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));g.render=y,g.__scopeId="data-v-9a73aaae";export default g;