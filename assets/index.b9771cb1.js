var e=Object.assign;import{d as t,r as i,a as o,aE as r,dp as s,dq as n,h as p,o as d,i as a,bx as m,j,a3 as c,b8 as f,k as l}from"./index.7840967b.js";import{S as u}from"./index.11200f20.js";import b from"./Step1.05f4af87.js";import x from"./Step2.4872b313.js";import S from"./Step3.57416d3e.js";import{_ as v}from"./index.6cdf17c3.js";import"./vendor.3b1829c7.js";import"./CheckOutlined.f72c5694.js";import"./index.6fbb1364.js";import"./SearchOutlined.1fb99c16.js";import"./DownOutlined.ae0ff699.js";import"./index.4868b979.js";import"./EyeOutlined.dac8873d.js";import"./index.de0eec0c.js";import"./BasicForm.3ffdbf8a.js";import"./index.e0e52653.js";import"./index.887ab342.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.05e654d6.js";import"./isEqual.7dee63f7.js";import"./get.e2bcbe96.js";import"./_baseProperty.74f89655.js";import"./toInteger.d30ea4bf.js";import"./index.1ce9a741.js";import"./index.6de30622.js";import"./index.7076e471.js";import"./UpOutlined.6bb69641.js";import"./index.f8b026f5.js";import"./RightOutlined.13032d9e.js";import"./RedoOutlined.a27aff3b.js";import"./index.325cf44a.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./Tree.d37c809f.js";import"./util.b0718c07.js";/* empty css              */import"./uuid.11608e9f.js";import"./index.cb82d046.js";import"./DeleteOutlined.d1274f99.js";import"./index.176bd308.js";import"./useModal.8f0c71bb.js";import"./useTimeout.8b4166a5.js";import"./useWindowSizeFn.c2452f79.js";import"./ScrollContainer.2e84ada1.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./useScrollTo.7d976049.js";import"./FullscreenOutlined.480b5267.js";import"./Dropdown.956e144f.js";import"./index.274e9900.js";import"./LeftOutlined.aecb60b5.js";import"./download.b251e1e8.js";import"./useForm.fa74c36f.js";import"./data.2505cb7f.js";import"./index.d13306be.js";import"./index.488b64a1.js";import"./index.b6c81a9a.js";import"./index.106272d7.js";import"./usePageContext.f4681fc6.js";import"./transButton.b7f9ce77.js";import"./ArrowLeftOutlined.2820faef.js";var O=t({components:{Step1:b,Step2:x,Step3:S,PageWrapper:v,[u.name]:u,[u.Step.name]:u.Step},setup(){const t=i(0),s=o({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,s.initSetp2=!0},handleStep2Next:function(e){t.value++,s.initSetp3=!0},handleRedo:function(){t.value=0,s.initSetp2=!1,s.initSetp3=!1},handleStepPrev:function(){t.value--}},r(s))}});const h=m("data-v-53523f72");s("data-v-53523f72");const g={class:"step-form-form"},N={class:"mt-5"};n();const P=h(((e,t,i,o,r,s)=>{const n=p("a-step"),m=p("a-steps"),u=p("Step1"),b=p("Step2"),x=p("Step3"),S=p("PageWrapper");return d(),a(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:h((()=>[j("div",g,[j(m,{current:e.current},{default:h((()=>[j(n,{title:"填写转账信息"}),j(n,{title:"确认转账信息"}),j(n,{title:"完成"})])),_:1},8,["current"])]),j("div",N,[c(j(u,{onNext:e.handleStep1Next},null,8,["onNext"]),[[f,0===e.current]]),e.initSetp2?c((d(),a(b,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[f,1===e.current]]):l("",!0),e.initSetp3?c((d(),a(x,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[f,2===e.current]]):l("",!0)])])),_:1})}));O.render=P,O.__scopeId="data-v-53523f72";export default O;