import{d as e,h as t,o as i,i as r,bx as o,j as s}from"./index.7840967b.js";import{D as a}from"./index.de0eec0c.js";import{D as d}from"./index.2857def9.js";import{_ as m}from"./index.850a2fcb.js";import{_ as n}from"./index.6cdf17c3.js";import{refundSchema as p,refundData as c,personSchema as j,personData as f,refundTableData as l,refundTableSchema as u,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.e5edaf41.js";import{u as g}from"./useTable.960fef92.js";import"./vendor.3b1829c7.js";import"./index.d13306be.js";import"./responsiveObserve.c545f1cc.js";import"./ScrollContainer.2e84ada1.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./RightOutlined.13032d9e.js";/* empty css              */import"./useTimeout.8b4166a5.js";import"./useScrollTo.7d976049.js";import"./get.e2bcbe96.js";import"./index.6fbb1364.js";import"./SearchOutlined.1fb99c16.js";import"./CheckOutlined.f72c5694.js";import"./DownOutlined.ae0ff699.js";import"./BasicForm.3ffdbf8a.js";import"./index.e0e52653.js";import"./index.887ab342.js";import"./findIndex.05e654d6.js";import"./isEqual.7dee63f7.js";import"./_baseProperty.74f89655.js";import"./toInteger.d30ea4bf.js";import"./index.1ce9a741.js";import"./index.4868b979.js";import"./EyeOutlined.dac8873d.js";import"./index.6de30622.js";import"./index.7076e471.js";import"./UpOutlined.6bb69641.js";import"./index.f8b026f5.js";import"./RedoOutlined.a27aff3b.js";import"./index.325cf44a.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./Tree.d37c809f.js";import"./util.b0718c07.js";import"./uuid.11608e9f.js";import"./index.cb82d046.js";import"./DeleteOutlined.d1274f99.js";import"./index.176bd308.js";import"./useModal.8f0c71bb.js";import"./useWindowSizeFn.c2452f79.js";import"./FullscreenOutlined.480b5267.js";import"./Dropdown.956e144f.js";import"./index.274e9900.js";import"./LeftOutlined.aecb60b5.js";import"./download.b251e1e8.js";import"./index.79eaffe3.js";import"./DoubleLeftOutlined.b5cc0534.js";import"./DoubleRightOutlined.86eed210.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.b7f9ce77.js";import"./CaretDownFilled.e0971677.js";import"./useForm.fa74c36f.js";import"./useSortable.157fa08b.js";import"./clickOutside.ef1afe0b.js";import"./useExpose.b4029b20.js";import"./index.b6c81a9a.js";import"./index.106272d7.js";import"./usePageContext.f4681fc6.js";import"./ArrowLeftOutlined.2820faef.js";import"./index.8683bb09.js";import"./isNumeric.2bec345d.js";var h=e({components:{Description:d,BasicTable:m,PageWrapper:n,[a.name]:a},setup(){const[e]=g({title:"退货商品",dataSource:l,columns:u,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,i=0;return e.forEach((e=>{t+=e.t5,i+=e.t6})),[{t1:"总计",t5:t,t6:i}]}}),[t]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:p,refundData:c,personSchema:j,personData:f}}});const O=o("data-v-ada482fc"),D=O(((e,o,a,d,m,n)=>{const p=t("Description"),c=t("a-divider"),j=t("BasicTable"),f=t("PageWrapper");return i(),r(f,{title:"基础详情页",contentBackground:""},{default:O((()=>[s(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),s(c),s(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),s(c),s(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),s(c),s(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=D,h.__scopeId="data-v-ada482fc";export default h;