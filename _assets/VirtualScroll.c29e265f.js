let t=document.createElement("style");t.innerHTML=".virtual-scroll-demo-wrap[data-v-7b6e7aa7]{display:flex;margin:0 30%;background:#fff;justify-content:center}.virtual-scroll-demo__item[data-v-7b6e7aa7]{height:40px;padding:0 20px;line-height:40px;border-bottom:1px solid #ddd}",document.head.appendChild(t);import{ao as a,y as e,a as i,cR as s,cS as l,i as d,o,j as r,k as c,n,aR as m,p}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import{D as u}from"./index.46cea309.js";const v=a((()=>import("./index.b796522a.js")));e(v);const h=(()=>{const t=[];for(let a=1;a<2e4;a++)t.push({title:"列表项"+a});return t})();var f=i({components:{VScroll:v,Divider:u},setup:()=>({data:h})});const _=m("data-v-7b6e7aa7");s("data-v-7b6e7aa7");const x={class:"p-4 virtual-scroll-demo"},b=p("基础滚动示例"),g={class:"virtual-scroll-demo-wrap"},j={class:"virtual-scroll-demo__item"},w=p("即使不可见，也预先加载50条数据，防止空白"),y={class:"virtual-scroll-demo-wrap"},D={class:"virtual-scroll-demo__item"};l();const H=_(((t,a,e,i,s,l)=>{const m=d("Divider"),p=d("VScroll");return o(),r("div",x,[c(m,null,{default:_((()=>[b])),_:1}),c("div",g,[c(p,{itemHeight:41,items:t.data,height:300,width:300},{default:_((({item:t})=>[c("div",j,n(t.title),1)])),_:1},8,["items"])]),c(m,null,{default:_((()=>[w])),_:1}),c("div",y,[c(p,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:_((({item:t})=>[c("div",D,n(t.title),1)])),_:1},8,["items"])])])}));f.render=H,f.__scopeId="data-v-7b6e7aa7";export default f;