import{_ as e,b as i}from"./useModal.8f0c71bb.js";import{f as o}from"./BasicForm.3ffdbf8a.js";import{u as t}from"./useForm.fa74c36f.js";import{d as s,r,h as d,o as m,i as n,w as p,j as a,a7 as l}from"./index.7840967b.js";import"./useTimeout.8b4166a5.js";import"./useWindowSizeFn.c2452f79.js";import"./ScrollContainer.2e84ada1.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./RightOutlined.13032d9e.js";/* empty css              */import"./useScrollTo.7d976049.js";import"./FullscreenOutlined.480b5267.js";import"./isEqual.7dee63f7.js";import"./index.e0e52653.js";import"./index.887ab342.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.05e654d6.js";import"./get.e2bcbe96.js";import"./_baseProperty.74f89655.js";import"./toInteger.d30ea4bf.js";import"./index.1ce9a741.js";import"./index.4868b979.js";import"./SearchOutlined.1fb99c16.js";import"./EyeOutlined.dac8873d.js";import"./index.6fbb1364.js";import"./CheckOutlined.f72c5694.js";import"./DownOutlined.ae0ff699.js";import"./index.6de30622.js";import"./index.7076e471.js";import"./UpOutlined.6bb69641.js";import"./index.f8b026f5.js";import"./RedoOutlined.a27aff3b.js";import"./index.325cf44a.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./Tree.d37c809f.js";import"./util.b0718c07.js";import"./uuid.11608e9f.js";import"./index.cb82d046.js";import"./DeleteOutlined.d1274f99.js";import"./index.176bd308.js";import"./index.de0eec0c.js";import"./Dropdown.956e144f.js";import"./index.274e9900.js";import"./LeftOutlined.aecb60b5.js";import"./download.b251e1e8.js";const j=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var f=s({components:{BasicModal:e,BasicForm:o},setup(){const e=r({}),[o,{}]=t({labelWidth:120,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=i((i=>{e.value={field2:i.data,field1:i.info}}));return{register:s,schemas:j,registerForm:o,model:e}}});f.render=function(e,i,o,t,s,r){const j=d("BasicForm"),f=d("BasicModal");return m(),n(f,l(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:p((()=>[a(j,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default f;