let a=document.createElement("style");a.innerHTML=".account-center-col[data-v-efaad362]:not(:last-child){padding:0 10px}.account-center-col[data-v-efaad362]:not(:last-child):not(:last-child){border-right:1px dashed #cecece}.account-center-top[data-v-efaad362]{padding:10px;margin:16px 16px 12px;background:#fff;border-radius:3px}.account-center-top__avatar[data-v-efaad362]{text-align:center}.account-center-top__avatar img[data-v-efaad362]{border-radius:50%}.account-center-top__avatar span[data-v-efaad362]{display:block;font-size:20px;font-weight:500}.account-center-top__avatar div[data-v-efaad362]{margin-top:3px;font-size:12px}.account-center-top__detail[data-v-efaad362]{padding-left:20px;margin-top:15px}.account-center-top__team-item[data-v-efaad362]{display:inline-block;padding:4px 24px}.account-center-top__team span[data-v-efaad362]{margin-left:3px}.account-center-bottom[data-v-efaad362]{padding:10px;margin:0 16px 16px;background:#fff;border-radius:3px}",document.head.appendChild(a);import{a as t,cR as e,cS as s,i as o,o as i,j as n,k as c,ad as l,aH as r,aR as d,p,n as f,cW as m}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import"./index.0140268b.js";import"./Trigger.9624f24b.js";import"./omit.2ac92ce2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2d33f44f.js";import"./CheckOutlined.fa54ab74.js";import"./colors.11c2fe2a.js";import"./RightOutlined.346767f2.js";import{T as u}from"./index.76ca49a2.js";import"./UpOutlined.8fbbe575.js";import"./LeftOutlined.3bbf91ca.js";import"./index.20639545.js";import{T as x}from"./index.b3c5c07d.js";import"./index.fce9afc1.js";import"./zh_CN.0242bd16.js";import"./index.6d596f56.js";import{C as _}from"./index.8390a561.js";import{_ as b}from"./header.0299ae16.js";import{I as v}from"./index.266c5a87.js";import{tags as j,teams as g,details as C,achieveList as h}from"./data.ab5f0814.js";import k from"./Application.21701fae.js";import T from"./Article.5b086943.js";import $ from"./Project.e49bb4f3.js";var y=t({components:{CollapseContainer:_,Icon:v,Tag:x,Tabs:u,TabPane:u.TabPane,Article:T,Application:k,Project:$},setup:()=>({prefixCls:"account-center",headerImg:b,tags:j,teams:g,details:C,achieveList:h})});const I=d("data-v-efaad362");e("data-v-efaad362");const O=c("span",null,"Serati Ma",-1),P=c("div",null,"海纳百川，有容乃大",-1);s();const w=I(((a,t,e,s,d,u)=>{const x=o("a-col"),_=o("Icon"),b=o("a-row"),v=o("Tag"),j=o("CollapseContainer"),g=o("TabPane"),C=o("Tabs");return i(),n("div",{class:a.prefixCls},[c(b,{class:`${a.prefixCls}-top`},{default:I((()=>[c(x,{span:9,class:`${a.prefixCls}-col`},{default:I((()=>[c(b,null,{default:I((()=>[c(x,{span:8},{default:I((()=>[c("div",{class:`${a.prefixCls}-top__avatar`},[c("img",{width:"70",src:a.headerImg},null,8,["src"]),O,P],2)])),_:1}),c(x,{span:16},{default:I((()=>[c("div",{class:`${a.prefixCls}-top__detail`},[(i(!0),n(l,null,r(a.details,((a,t)=>(i(),n("p",{key:t},[c(_,{icon:a.icon},null,8,["icon"]),p(" "+f(a.title),1)])))),128))],2)])),_:1})])),_:1})])),_:1},8,["class"]),c(x,{span:7,class:`${a.prefixCls}-col`},{default:I((()=>[c(j,{title:"标签",canExpan:!1},{default:I((()=>[(i(!0),n(l,null,r(a.tags,((a,t)=>(i(),n(v,{key:t,class:"mb-2"},{default:I((()=>[p(f(a),1)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"]),c(x,{span:8,class:`${a.prefixCls}-col`},{default:I((()=>[c(j,{class:`${a.prefixCls}-top__team`,title:"团队",canExpan:!1},{default:I((()=>[(i(!0),n(l,null,r(a.teams,((t,e)=>(i(),n("div",{key:e,class:`${a.prefixCls}-top__team-item`},[c(_,{icon:t.icon,color:t.color},null,8,["icon","color"]),c("span",null,f(t.title),1)],2)))),128))])),_:1},8,["class"])])),_:1},8,["class"])])),_:1},8,["class"]),c("div",{class:`${a.prefixCls}-bottom`},[c(C,null,{default:I((()=>[(i(!0),n(l,null,r(a.achieveList,(a=>(i(),n(g,{key:a.key,tab:a.name},{default:I((()=>[(i(),n(m(a.component)))])),_:2},1032,["tab"])))),128))])),_:1})],2)],2)}));y.render=w,y.__scopeId="data-v-efaad362";export default y;