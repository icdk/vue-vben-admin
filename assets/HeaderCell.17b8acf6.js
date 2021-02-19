import{d as e,aV as l,aW as t,aB as s,K as a,h as r,o as n,i,w as o,l as d,k as p,aL as u,m as c}from"./index.7840967b.js";import"./vendor.3b1829c7.js";var m=e({name:"TableHeaderCell",components:{EditTableHeaderCell:l((()=>t((()=>import("./index.850a2fcb.js").then((function(e){return e.E}))),["/assets/index.850a2fcb.js","/assets/index.78ba9d39.css","/assets/index.f8cd4764.css","/assets/index.7840967b.js","/assets/index.e1e306e9.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.6fbb1364.js","/assets/index.af98ed23.css","/assets/SearchOutlined.1fb99c16.js","/assets/CheckOutlined.f72c5694.js","/assets/DownOutlined.ae0ff699.js","/assets/BasicForm.3ffdbf8a.js","/assets/BasicForm.943a02b0.css","/assets/index.e0e52653.js","/assets/index.4f6b9997.css","/assets/index.887ab342.js","/assets/index.0edc9df2.css","/assets/responsiveObserve.c545f1cc.js","/assets/findIndex.05e654d6.js","/assets/isEqual.7dee63f7.js","/assets/get.e2bcbe96.js","/assets/_baseProperty.74f89655.js","/assets/toInteger.d30ea4bf.js","/assets/index.1ce9a741.js","/assets/index.4868b979.js","/assets/index.8260b05e.css","/assets/EyeOutlined.dac8873d.js","/assets/index.6de30622.js","/assets/index.06c7b3c0.css","/assets/index.7076e471.js","/assets/index.0b3eba88.css","/assets/UpOutlined.6bb69641.js","/assets/index.f8b026f5.js","/assets/index.4a4a1593.css","/assets/RightOutlined.13032d9e.js","/assets/RedoOutlined.a27aff3b.js","/assets/index.325cf44a.js","/assets/index.66628971.css","/assets/EllipsisOutlined.56d00ca0.js","/assets/types.dc0f8288.js","/assets/Tree.d37c809f.js","/assets/util.b0718c07.js","/assets/uuid.11608e9f.js","/assets/uuid.0e60e827.css","/assets/index.cb82d046.js","/assets/index.91ad067c.css","/assets/DeleteOutlined.d1274f99.js","/assets/index.176bd308.js","/assets/index.f8b789db.css","/assets/useModal.8f0c71bb.js","/assets/useModal.b1a1b797.css","/assets/useTimeout.8b4166a5.js","/assets/useWindowSizeFn.c2452f79.js","/assets/ScrollContainer.2e84ada1.js","/assets/ScrollContainer.3d4678de.css","/assets/index.8be26ef1.js","/assets/index.121e7eba.css","/assets/domUtils.ea32cfbd.js","/assets/_stringToArray.d1c7a4ab.js","/assets/useScrollTo.7d976049.js","/assets/FullscreenOutlined.480b5267.js","/assets/index.de0eec0c.js","/assets/index.2b38113f.css","/assets/Dropdown.956e144f.js","/assets/index.274e9900.js","/assets/index.5e8b94d8.css","/assets/LeftOutlined.aecb60b5.js","/assets/download.b251e1e8.js","/assets/index.79eaffe3.js","/assets/index.558c7352.css","/assets/DoubleLeftOutlined.b5cc0534.js","/assets/DoubleRightOutlined.86eed210.js","/assets/zh_CN.8094f4d6.js","/assets/scrollTo.c1e0f75f.js","/assets/transButton.b7f9ce77.js","/assets/CaretDownFilled.e0971677.js","/assets/useForm.fa74c36f.js","/assets/useSortable.157fa08b.js","/assets/clickOutside.ef1afe0b.js","/assets/useExpose.b4029b20.js"]))),BasicHelp:l((()=>t((()=>import("./BasicHelp.be58dd1e.js")),["/assets/BasicHelp.be58dd1e.js","/assets/index.f8cd4764.css","/assets/ScrollContainer.2e84ada1.js","/assets/ScrollContainer.3d4678de.css","/assets/index.7840967b.js","/assets/index.e1e306e9.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.8be26ef1.js","/assets/index.121e7eba.css","/assets/domUtils.ea32cfbd.js","/assets/_stringToArray.d1c7a4ab.js","/assets/RightOutlined.13032d9e.js","/assets/useTimeout.8b4166a5.js","/assets/useScrollTo.7d976049.js"])))},props:{column:{type:Object,default:{}}},setup(e){const{prefixCls:l}=s("basic-table-header-cell");return{prefixCls:l,getIsEdit:a((()=>{var l;return!!(null==(l=e.column)?void 0:l.edit)})),getTitle:a((()=>{var l;return null==(l=e.column)?void 0:l.customTitle})),getHelpMessage:a((()=>{var l;return null==(l=e.column)?void 0:l.helpMessage}))}}});const _={key:1};m.render=function(e,l,t,s,a,m){const g=r("EditTableHeaderCell"),b=r("BasicHelp");return n(),i(u,null,[e.getIsEdit?(n(),i(g,{key:0},{default:o((()=>[c(d(e.getTitle),1)])),_:1})):(n(),i("span",_,d(e.getTitle),1)),e.getHelpMessage?(n(),i(b,{key:2,text:e.getHelpMessage,class:`${e.prefixCls}__help`},null,8,["text","class"])):p("",!0)],64)};export default m;