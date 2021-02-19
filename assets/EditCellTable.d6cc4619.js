import{_ as e}from"./index.850a2fcb.js";import{o as t}from"./select.c8ff6a6e.js";import{d as i}from"./table.590c2c09.js";import{d as o,h as d,o as n,i as s,j as r}from"./index.7840967b.js";import{u as a}from"./useTable.960fef92.js";import"./index.6fbb1364.js";import"./SearchOutlined.1fb99c16.js";import"./CheckOutlined.f72c5694.js";import"./DownOutlined.ae0ff699.js";import"./BasicForm.3ffdbf8a.js";import"./index.e0e52653.js";import"./index.887ab342.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.05e654d6.js";import"./isEqual.7dee63f7.js";import"./get.e2bcbe96.js";import"./_baseProperty.74f89655.js";import"./toInteger.d30ea4bf.js";import"./index.1ce9a741.js";import"./index.4868b979.js";import"./EyeOutlined.dac8873d.js";import"./index.6de30622.js";import"./index.7076e471.js";import"./UpOutlined.6bb69641.js";import"./index.f8b026f5.js";import"./RightOutlined.13032d9e.js";import"./RedoOutlined.a27aff3b.js";import"./index.325cf44a.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./Tree.d37c809f.js";import"./util.b0718c07.js";/* empty css              */import"./uuid.11608e9f.js";import"./index.cb82d046.js";import"./DeleteOutlined.d1274f99.js";import"./index.176bd308.js";import"./useModal.8f0c71bb.js";import"./useTimeout.8b4166a5.js";import"./useWindowSizeFn.c2452f79.js";import"./ScrollContainer.2e84ada1.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./useScrollTo.7d976049.js";import"./FullscreenOutlined.480b5267.js";import"./index.de0eec0c.js";import"./Dropdown.956e144f.js";import"./index.274e9900.js";import"./LeftOutlined.aecb60b5.js";import"./download.b251e1e8.js";import"./index.79eaffe3.js";import"./DoubleLeftOutlined.b5cc0534.js";import"./DoubleRightOutlined.86eed210.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.b7f9ce77.js";import"./CaretDownFilled.e0971677.js";import"./useForm.fa74c36f.js";import"./useSortable.157fa08b.js";import"./clickOutside.ef1afe0b.js";import"./useExpose.b4029b20.js";const p=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:t},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var m=o({components:{BasicTable:e},setup(){const[e]=a({title:"可编辑单元格示例",api:i,columns:p,showIndexColumn:!1,bordered:!0});return{registerTable:e,handleEditEnd:function({record:e,index:t,key:i,value:o}){},handleEditCancel:function(){}}}});const l={class:"p-4"};m.render=function(e,t,i,o,a,p){const m=d("BasicTable");return n(),s("div",l,[r(m,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])};export default m;