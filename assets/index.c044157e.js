import{aV as e,aW as o,d as t,r as l,L as a,e as r,dp as s,dq as d,h as i,o as n,i as c,j as m,bx as u,m as p}from"./index.7840967b.js";import{d as f}from"./ScrollContainer.2e84ada1.js";import{_ as g}from"./index.6cdf17c3.js";import"./vendor.3b1829c7.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./RightOutlined.13032d9e.js";/* empty css              */import"./useTimeout.8b4166a5.js";import"./useScrollTo.7d976049.js";import"./index.b6c81a9a.js";import"./index.325cf44a.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./isEqual.7dee63f7.js";import"./toInteger.d30ea4bf.js";import"./DownOutlined.ae0ff699.js";import"./index.106272d7.js";import"./usePageContext.f4681fc6.js";import"./transButton.b7f9ce77.js";import"./ArrowLeftOutlined.2820faef.js";const b=e((()=>o((()=>import("./index.8354da7e.js")),["/assets/index.8354da7e.js","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.7840967b.js","/assets/index.e1e306e9.css","/assets/download.b251e1e8.js"])));var v=t({components:{CollapseContainer:f,QrCode:b,PageWrapper:g},setup(){const e=l(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:a,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const j=u("data-v-f8968a82");s("data-v-f8968a82");const x={class:"flex flex-wrap"},q=p(" 下载 "),C=m("div",{class:"msg"}," (在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题) ",-1);d();const _=j(((e,o,t,l,a,r)=>{const s=i("QrCode"),d=i("CollapseContainer"),u=i("a-button"),p=i("PageWrapper");return n(),c(p,{title:"二维码组件使用示例"},{default:j((()=>[m("div",x,[m(d,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),m(d,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),m(d,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(d,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),m(d,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(d,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),m(d,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),m(u,{class:"mb-2",type:"primary",onClick:e.download},{default:j((()=>[q])),_:1},8,["onClick"]),C])),_:1}),m(d,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])])),_:1})}));v.render=_,v.__scopeId="data-v-f8968a82";export default v;