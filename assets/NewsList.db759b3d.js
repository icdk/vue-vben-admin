import{d as t,dp as s,dq as e,h as i,o as a,i as l,j as n,aL as r,aM as o,l as d,m,bx as c}from"./index.7840967b.js";import{L as p}from"./index.d700151b.js";import"./index.6fbb1364.js";import"./index.79eaffe3.js";import"./index.887ab342.js";import{d as u,_}from"./ScrollContainer.2e84ada1.js";import{h as b}from"./header.d801b988.js";import{n as j}from"./data.aa527d47.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.1fb99c16.js";import"./CheckOutlined.f72c5694.js";import"./DownOutlined.ae0ff699.js";import"./LeftOutlined.aecb60b5.js";import"./RightOutlined.13032d9e.js";import"./DoubleLeftOutlined.b5cc0534.js";import"./DoubleRightOutlined.86eed210.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";/* empty css              */import"./useTimeout.8b4166a5.js";import"./useScrollTo.7d976049.js";var f=t({components:{List:p,ListItem:p.Item,ListItemMeta:p.Item.Meta,CollapseContainer:u,ScrollContainer:_},setup:()=>({newList:j,headerImg:b})});const v=c("data-v-0399ad30");s("data-v-0399ad30");const w={class:"news-list__item-desc"},h={class:"news-list__item-time mb-1"},L={class:"news-list__item-title mb-1"},x={class:"news-list__item-light"},I=m("申请迭代 "),C={class:"news-list__item-light"},g=m("发布 "),O={class:"news-list__item-cnte p-2"},S={class:"news-list__item-cnte__title"},M=n("br",null,null,-1),R=n("br",null,null,-1),T=n("br",null,null,-1);e();const y=v(((t,s,e,c,p,u)=>{const _=i("ListItemMeta"),b=i("ListItem"),j=i("List"),f=i("ScrollContainer"),y=i("CollapseContainer");return a(),l(y,{class:"news-list",title:"动态",canExpan:!1},{default:v((()=>[n(f,null,{default:v((()=>[n(j,null,{default:v((()=>[(a(!0),l(r,null,o(t.newList,(s=>(a(),l(b,{key:s.id,class:"news-list__item"},{default:v((()=>[n(_,null,{avatar:v((()=>[n("img",{src:t.headerImg,class:"news-list__item-avatar"},null,8,["src"])])),description:v((()=>[n("div",w,[n("div",h,d(s.sendTime),1),n("div",L,[n("span",x,d(s.sender)+" ",1),I,n("span",C," "+d(s.title)+" ",1),g]),n("div",O,[n("span",S,d(s.cnteId),1),M,m(" Status: "+d(s.cnteStas)+" ",1),R,m(" Repository: "+d(s.cnteRepo)+" ",1),T])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}));f.render=y,f.__scopeId="data-v-0399ad30";export default f;