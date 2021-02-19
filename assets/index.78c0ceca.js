import{d as e,h as o,o as i,i as t,w as r,j as s,m as n}from"./index.7840967b.js";import{A as a}from"./index.176bd308.js";import{u as d}from"./useModal.8f0c71bb.js";import p from"./Modal1.34d2ef8e.js";import m from"./Modal2.573baab9.js";import l from"./Modal3.917cf1d9.js";import f from"./Modal4.92f9b957.js";import{_ as c}from"./index.6cdf17c3.js";import"./vendor.3b1829c7.js";import"./useTimeout.8b4166a5.js";import"./useWindowSizeFn.c2452f79.js";import"./ScrollContainer.2e84ada1.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./RightOutlined.13032d9e.js";/* empty css              */import"./useScrollTo.7d976049.js";import"./FullscreenOutlined.480b5267.js";import"./isEqual.7dee63f7.js";import"./BasicForm.3ffdbf8a.js";import"./index.e0e52653.js";import"./index.887ab342.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.05e654d6.js";import"./get.e2bcbe96.js";import"./_baseProperty.74f89655.js";import"./toInteger.d30ea4bf.js";import"./index.1ce9a741.js";import"./index.4868b979.js";import"./SearchOutlined.1fb99c16.js";import"./EyeOutlined.dac8873d.js";import"./index.6fbb1364.js";import"./CheckOutlined.f72c5694.js";import"./DownOutlined.ae0ff699.js";import"./index.6de30622.js";import"./index.7076e471.js";import"./UpOutlined.6bb69641.js";import"./index.f8b026f5.js";import"./RedoOutlined.a27aff3b.js";import"./index.325cf44a.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./Tree.d37c809f.js";import"./util.b0718c07.js";import"./uuid.11608e9f.js";import"./index.cb82d046.js";import"./DeleteOutlined.d1274f99.js";import"./index.de0eec0c.js";import"./Dropdown.956e144f.js";import"./index.274e9900.js";import"./LeftOutlined.aecb60b5.js";import"./download.b251e1e8.js";import"./useForm.fa74c36f.js";import"./index.b6c81a9a.js";import"./index.106272d7.js";import"./usePageContext.f4681fc6.js";import"./transButton.b7f9ce77.js";import"./ArrowLeftOutlined.2820faef.js";var j=e({components:{Alert:a,Modal1:p,Modal2:m,Modal3:l,Modal4:f,PageWrapper:c},setup(){const[e,{openModal:o,setModalProps:i}]=d(),[t,{openModal:r}]=d(),[s,{openModal:n}]=d(),[a,{openModal:p}]=d();return{register1:e,openModal1:o,register2:t,openModal2:r,register3:s,openModal3:n,register4:a,openModal4:p,send:function(){p(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=n(" 打开弹窗 默认可以拖动/全屏 "),b=n(" 打开弹窗 "),g=n(" 打开弹窗 "),M=n(" 打开弹窗并传递数据 ");j.render=function(e,n,a,d,p,m){const l=o("Alert"),f=o("a-button"),c=o("Modal1"),j=o("Modal2"),x=o("Modal3"),y=o("Modal4"),O=o("PageWrapper");return i(),t(O,{title:"modal组件使用示例"},{default:r((()=>[s(l,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:r((()=>[u])),_:1},8,["onClick"]),s(l,{message:"内外同时同时显示隐藏","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:e.openModal2},{default:r((()=>[b])),_:1},8,["onClick"]),s(l,{message:"自适应高度","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:e.openModal3},{default:r((()=>[g])),_:1},8,["onClick"]),s(l,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:e.send},{default:r((()=>[M])),_:1},8,["onClick"]),s(c,{onRegister:e.register1},null,8,["onRegister"]),s(j,{onRegister:e.register2},null,8,["onRegister"]),s(x,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default j;