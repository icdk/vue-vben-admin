let e=document.createElement("style");e.innerHTML=".step1-form[data-v-686dc77c]{width:450px;margin:0 auto}.step1 h3[data-v-686dc77c]{margin:0 0 12px;font-size:16px;line-height:32px;color:rgba(0,0,0,.45)}.step1 h4[data-v-686dc77c]{margin:0 0 4px;font-size:14px;line-height:22px;color:rgba(0,0,0,.45)}.step1 p[data-v-686dc77c]{color:rgba(0,0,0,.45)}.pay-select[data-v-686dc77c]{width:20%}.pay-input[data-v-686dc77c]{width:70%}",document.head.appendChild(e);import{a as t,cR as a,cS as s,i,o,j as p,k as r,aR as c,p as n}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import"./index.0140268b.js";import"./Trigger.9624f24b.js";import"./omit.2ac92ce2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2d33f44f.js";import"./CheckOutlined.fa54ab74.js";import{s as d}from"./index.e028f2ec.js";import"./colors.11c2fe2a.js";import"./RightOutlined.346767f2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2638ac3e.js";import"./index.b89b2489.js";import"./index.a172b251.js";import"./index.71d835da.js";import"./UpOutlined.8fbbe575.js";import"./index.fe81ccfa.js";import"./index.b3c5c07d.js";import"./index.ced671f3.js";import"./index.03e0e622.js";import"./useDebounce.87ee1be2.js";import"./useEventListener.3f9fc979.js";import"./useBreakpoint.7d12f99a.js";import"./index.504b6a3c.js";import"./tsxHelper.1229783e.js";import"./index.266c5a87.js";import"./index.58cbc055.js";import{u as l}from"./useForm.8e6b95f4.js";import{step1Schemas as m}from"./data.98b65402.js";var u=t({components:{BasicForm:d},emits:["next"],setup(e,{emit:t}){const[a,{validate:s}]=l({labelWidth:100,schemas:m,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const e=await s();t("next",e)}catch(e){}}});return{register:a}}});const f=c("data-v-686dc77c");a("data-v-686dc77c");const j={class:"step1"},x={class:"step1-form"},v=n(" 支付宝 "),b=n(" 银联 "),h=r("h3",null,"说明",-1),g=r("h4",null,"转账到支付宝账户",-1),y=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),_=r("h4",null,"转账到银行卡",-1),w=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);s();const O=f(((e,t,a,s,c,n)=>{const d=i("a-select-option"),l=i("a-select"),m=i("a-input"),u=i("a-input-group"),O=i("BasicForm"),R=i("a-divider");return o(),p("div",j,[r("div",x,[r(O,{onRegister:e.register},{fac:f((({model:e,field:t})=>[r(u,{compact:""},{default:f((()=>[r(l,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:f((()=>[r(d,{value:"zfb"},{default:f((()=>[v])),_:1}),r(d,{value:"yl"},{default:f((()=>[b])),_:1})])),_:2},1032,["value","onUpdate:value"]),r(m,{class:"pay-input",value:e[t],"onUpdate:value":a=>e[t]=a},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),r(R),h,g,y,_,w])}));u.render=O,u.__scopeId="data-v-686dc77c";export default u;