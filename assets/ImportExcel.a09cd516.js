import{I as e}from"./index.f1bc2655.js";import{_ as t}from"./index.850a2fcb.js";import{_ as i}from"./index.6cdf17c3.js";import{d as s,r as o,h as r,o as a,i as d,w as m,j as p,aL as n,aM as c,m as l}from"./index.7840967b.js";import"./vendor.3b1829c7.js";import"./index.6fbb1364.js";import"./SearchOutlined.1fb99c16.js";import"./CheckOutlined.f72c5694.js";import"./DownOutlined.ae0ff699.js";import"./BasicForm.3ffdbf8a.js";import"./index.e0e52653.js";import"./index.887ab342.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.05e654d6.js";import"./isEqual.7dee63f7.js";import"./get.e2bcbe96.js";import"./_baseProperty.74f89655.js";import"./toInteger.d30ea4bf.js";import"./index.1ce9a741.js";import"./index.4868b979.js";import"./EyeOutlined.dac8873d.js";import"./index.6de30622.js";import"./index.7076e471.js";import"./UpOutlined.6bb69641.js";import"./index.f8b026f5.js";import"./RightOutlined.13032d9e.js";import"./RedoOutlined.a27aff3b.js";import"./index.325cf44a.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./Tree.d37c809f.js";import"./util.b0718c07.js";/* empty css              */import"./uuid.11608e9f.js";import"./index.cb82d046.js";import"./DeleteOutlined.d1274f99.js";import"./index.176bd308.js";import"./useModal.8f0c71bb.js";import"./useTimeout.8b4166a5.js";import"./useWindowSizeFn.c2452f79.js";import"./ScrollContainer.2e84ada1.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./useScrollTo.7d976049.js";import"./FullscreenOutlined.480b5267.js";import"./index.de0eec0c.js";import"./Dropdown.956e144f.js";import"./index.274e9900.js";import"./LeftOutlined.aecb60b5.js";import"./download.b251e1e8.js";import"./index.79eaffe3.js";import"./DoubleLeftOutlined.b5cc0534.js";import"./DoubleRightOutlined.86eed210.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.b7f9ce77.js";import"./CaretDownFilled.e0971677.js";import"./useForm.fa74c36f.js";import"./useSortable.157fa08b.js";import"./clickOutside.ef1afe0b.js";import"./useExpose.b4029b20.js";import"./index.b6c81a9a.js";import"./index.106272d7.js";import"./usePageContext.f4681fc6.js";import"./ArrowLeftOutlined.2820faef.js";var j=s({components:{BasicTable:t,ImpExcel:e,PageWrapper:i},setup(){const e=o([]);return{loadDataSuccess:function(t){e.value=[];for(const i of t){const{header:t,results:s,meta:{sheetName:o}}=i,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:s,columns:r})}},tableListRef:e}}});const f=l(" 导入Excel ");j.render=function(e,t,i,s,o,l){const j=r("a-button"),u=r("ImpExcel"),b=r("BasicTable"),x=r("PageWrapper");return a(),d(x,{title:"excel数据导入示例"},{default:m((()=>[p(u,{onSuccess:e.loadDataSuccess},{default:m((()=>[p(j,{class:"m-3"},{default:m((()=>[f])),_:1})])),_:1},8,["onSuccess"]),(a(!0),d(n,null,c(e.tableListRef,((e,t)=>(a(),d(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default j;