import{d as e,co as t,cp as i,h as s,o,i as a,j as r,bw as n,m as p}from"./index.5c1bb4d0.js";import{a as d}from"./index.cbcc5622.js";import{I as m}from"./index.3f119691.js";import{D as l}from"./index.9617de2a.js";import{_ as c}from"./BasicForm.530d5c20.js";import{u}from"./useForm.7a19d831.js";import{step1Schemas as j}from"./data.2505cb7f.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.d26b6660.js";import"./CheckOutlined.27cf9f3c.js";import"./DownOutlined.8357fe21.js";import"./EyeOutlined.b3a1240e.js";import"./index.7514cee0.js";import"./index.e1b77540.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.5abbb4a2.js";import"./isEqual.e04a9f42.js";import"./get.303c69e6.js";import"./_baseProperty.74f89655.js";import"./toInteger.9ae8b221.js";import"./index.432b387e.js";import"./index.f0978fda.js";import"./index.fc7e7d11.js";import"./UpOutlined.0d7a1354.js";import"./index.6ed33274.js";import"./RightOutlined.398160ad.js";import"./RedoOutlined.a1eda39b.js";import"./index.f9f109c2.js";import"./EllipsisOutlined.f3945325.js";import"./types.45bd0100.js";import"./Tree.8f213beb.js";import"./util.da2c703c.js";/* empty css              */import"./uuid.96bf1684.js";import"./index.de162a79.js";import"./DeleteOutlined.26112945.js";import"./index.1859d917.js";import"./useModal.1bf2067f.js";import"./useTimeout.8048cd3a.js";import"./useWindowSizeFn.6ab574ba.js";import"./ScrollContainer.dde85720.js";import"./index.60103073.js";import"./domUtils.5a9a1f23.js";import"./_stringToArray.18f4ff6c.js";import"./useScrollTo.c6f01bc0.js";import"./FullscreenOutlined.f12e1d09.js";import"./Dropdown.89759272.js";import"./index.88e3d4c7.js";import"./LeftOutlined.e17066af.js";import"./download.ec7c3b7e.js";var f=e({components:{BasicForm:c,[d.name]:d,ASelectOption:d.Option,[m.name]:m,[m.Group.name]:m.Group,[l.name]:l},emits:["next"],setup(e,{emit:t}){const[i,{validate:s}]=u({labelWidth:100,schemas:j,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const e=await s();t("next",e)}catch(e){}}});return{register:i}}});const b=n("data-v-c22ef27a");t("data-v-c22ef27a");const v={class:"step1"},x={class:"step1-form"},O=p(" 支付宝 "),h=p(" 银联 "),y=r("h3",null,"说明",-1),_=r("h4",null,"转账到支付宝账户",-1),g=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),w=r("h4",null,"转账到银行卡",-1),F=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);i();const U=b(((e,t,i,n,p,d)=>{const m=s("a-select-option"),l=s("a-select"),c=s("a-input"),u=s("a-input-group"),j=s("BasicForm"),f=s("a-divider");return o(),a("div",v,[r("div",x,[r(j,{onRegister:e.register},{fac:b((({model:e,field:t})=>[r(u,{compact:""},{default:b((()=>[r(l,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:b((()=>[r(m,{value:"zfb"},{default:b((()=>[O])),_:1}),r(m,{value:"yl"},{default:b((()=>[h])),_:1})])),_:2},1032,["value","onUpdate:value"]),r(c,{class:"pay-input",value:e[t],"onUpdate:value":i=>e[t]=i},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),r(f),y,_,g,w,F])}));f.render=U,f.__scopeId="data-v-c22ef27a";export default f;