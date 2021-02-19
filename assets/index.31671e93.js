import{d as e}from"./ScrollContainer.2e84ada1.js";import{r as t,e as r,a1 as o,a$ as a,d as n,h as s,o as i,i as l,w as d,j as m,m as c}from"./index.7840967b.js";import{_ as p}from"./index.6cdf17c3.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./RightOutlined.13032d9e.js";/* empty css              */import"./useTimeout.8b4166a5.js";import"./useScrollTo.7d976049.js";import"./vendor.3b1829c7.js";import"./index.b6c81a9a.js";import"./index.325cf44a.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./isEqual.7dee63f7.js";import"./toInteger.d30ea4bf.js";import"./DownOutlined.ae0ff699.js";import"./index.106272d7.js";import"./usePageContext.f4681fc6.js";import"./transButton.b7f9ce77.js";import"./ArrowLeftOutlined.2820faef.js";const f=Symbol("watermark-dom");var u=n({components:{CollapseContainer:e,PageWrapper:p},setup(){const e=t(null),{setWatermark:n,clear:s}=function(e=t(document.body)){let n=()=>{};const s=f.toString(),i=()=>{const t=document.getElementById(s);if(t){const o=r(e);o&&o.removeChild(t)}window.removeEventListener("resize",n)},l=t=>{i();const o=document.createElement("canvas");o.width=300,o.height=240;const a=o.getContext("2d");a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(t,o.width/20,o.height));const n=document.createElement("div");n.id=s,n.style.pointerEvents="none",n.style.top="3px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.width=document.documentElement.clientWidth+"px",n.style.height=document.documentElement.clientHeight+"px",n.style.background="url("+o.toDataURL("image/png")+") left top repeat";const l=r(e);return l&&l.appendChild(n),s};return{setWatermark:function(e){l(e),n=()=>{l(e)},window.addEventListener("resize",n),a()&&o((()=>{i()}))},clear:i}}();return{setWatermark:n,clear:s,areaRef:e}}});const j=c(" Create "),g=c(" Clear "),x=c(" Reset ");u.render=function(e,t,r,o,a,n){const c=s("a-button"),p=s("CollapseContainer"),f=s("PageWrapper");return i(),l(f,{title:"水印示例"},{default:d((()=>[m(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d((()=>[m(c,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:d((()=>[j])),_:1}),m(c,{color:"error",class:"mr-2",onClick:e.clear},{default:d((()=>[g])),_:1},8,["onClick"]),m(c,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:d((()=>[x])),_:1})])),_:1})])),_:1})};export default u;