import{f as e}from"./BasicForm.3ffdbf8a.js";import{u as o}from"./useForm.fa74c36f.js";import{d as t,g as i,h as r,o as s,i as n,bx as p,j as a}from"./index.7840967b.js";import{_ as l}from"./index.6cdf17c3.js";import"./index.e0e52653.js";import"./index.887ab342.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.05e654d6.js";import"./isEqual.7dee63f7.js";import"./get.e2bcbe96.js";import"./_baseProperty.74f89655.js";import"./toInteger.d30ea4bf.js";import"./index.1ce9a741.js";import"./index.4868b979.js";import"./SearchOutlined.1fb99c16.js";import"./EyeOutlined.dac8873d.js";import"./index.6fbb1364.js";import"./CheckOutlined.f72c5694.js";import"./DownOutlined.ae0ff699.js";import"./index.6de30622.js";import"./index.7076e471.js";import"./UpOutlined.6bb69641.js";import"./index.f8b026f5.js";import"./RightOutlined.13032d9e.js";import"./RedoOutlined.a27aff3b.js";import"./index.325cf44a.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./Tree.d37c809f.js";import"./util.b0718c07.js";/* empty css              */import"./uuid.11608e9f.js";import"./index.cb82d046.js";import"./DeleteOutlined.d1274f99.js";import"./index.176bd308.js";import"./useModal.8f0c71bb.js";import"./useTimeout.8b4166a5.js";import"./useWindowSizeFn.c2452f79.js";import"./ScrollContainer.2e84ada1.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./useScrollTo.7d976049.js";import"./FullscreenOutlined.480b5267.js";import"./index.de0eec0c.js";import"./Dropdown.956e144f.js";import"./index.274e9900.js";import"./LeftOutlined.aecb60b5.js";import"./download.b251e1e8.js";import"./index.b6c81a9a.js";import"./index.106272d7.js";import"./usePageContext.f4681fc6.js";import"./transButton.b7f9ce77.js";import"./ArrowLeftOutlined.2820faef.js";const d=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var m=t({components:{BasicForm:e,PageWrapper:l},setup(){const{createMessage:e}=i(),[t,{validate:r,setProps:s}]=o({labelCol:{span:7},wrapperCol:{span:10},schemas:d,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await r(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(o){}}});return{register:t}}});const c=p("data-v-5cbaa0f1"),u=c(((e,o,t,i,p,l)=>{const d=r("BasicForm"),m=r("PageWrapper");return s(),n(m,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:c((()=>[a(d,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));m.render=u,m.__scopeId="data-v-5cbaa0f1";export default m;