import{aV as t,aW as e,d as i,dp as s,dq as a,h as r,o as d,i as o,j as l,l as m,bx as c,m as n}from"./index.7840967b.js";import{D as p}from"./index.de0eec0c.js";import{_ as f}from"./index.6cdf17c3.js";import"./vendor.3b1829c7.js";import"./index.b6c81a9a.js";import"./index.325cf44a.js";import"./RightOutlined.13032d9e.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./isEqual.7dee63f7.js";import"./toInteger.d30ea4bf.js";import"./DownOutlined.ae0ff699.js";/* empty css              */import"./index.106272d7.js";import"./usePageContext.f4681fc6.js";import"./transButton.b7f9ce77.js";import"./ArrowLeftOutlined.2820faef.js";const u=t((()=>e((()=>import("./index.741b3219.js")),["/assets/index.741b3219.js","/assets/index.5ddcb78c.css","/assets/index.7840967b.js","/assets/index.e1e306e9.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css"]))),j=(()=>{const t=[];for(let e=1;e<2e4;e++)t.push({title:"列表项"+e});return t})();var _=i({components:{VScroll:u,Divider:p,PageWrapper:f},setup:()=>({data:j})});const v=c("data-v-b4120884");s("data-v-b4120884");const b=n("基础滚动示例"),h={class:"virtual-scroll-demo-wrap"},x={class:"virtual-scroll-demo__item"},g=n("即使不可见，也预先加载50条数据，防止空白"),w={class:"virtual-scroll-demo-wrap"},D={class:"virtual-scroll-demo__item"};a();const O=v(((t,e,i,s,a,c)=>{const n=r("Divider"),p=r("VScroll"),f=r("PageWrapper");return d(),o(f,{class:"virtual-scroll-demo"},{default:v((()=>[l(n,null,{default:v((()=>[b])),_:1}),l("div",h,[l(p,{itemHeight:41,items:t.data,height:300,width:300},{default:v((({item:t})=>[l("div",x,m(t.title),1)])),_:1},8,["items"])]),l(n,null,{default:v((()=>[g])),_:1}),l("div",w,[l(p,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:v((({item:t})=>[l("div",D,m(t.title),1)])),_:1},8,["items"])])])),_:1})}));_.render=O,_.__scopeId="data-v-b4120884";export default _;