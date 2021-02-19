import{_ as e}from"./index.850a2fcb.js";import{d as t,h as i,o,i as n,j as r,w as s,m as d}from"./index.7840967b.js";import{_ as a}from"./BasicForm.3ffdbf8a.js";import{u as l}from"./useTable.960fef92.js";import"./index.6fbb1364.js";import"./SearchOutlined.1fb99c16.js";import"./CheckOutlined.f72c5694.js";import"./DownOutlined.ae0ff699.js";import"./index.e0e52653.js";import"./index.887ab342.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.05e654d6.js";import"./isEqual.7dee63f7.js";import"./get.e2bcbe96.js";import"./_baseProperty.74f89655.js";import"./toInteger.d30ea4bf.js";import"./index.325cf44a.js";import"./RightOutlined.13032d9e.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./index.79eaffe3.js";import"./LeftOutlined.aecb60b5.js";import"./DoubleLeftOutlined.b5cc0534.js";import"./DoubleRightOutlined.86eed210.js";import"./zh_CN.8094f4d6.js";import"./uuid.11608e9f.js";import"./index.cb82d046.js";import"./util.b0718c07.js";import"./DeleteOutlined.d1274f99.js";import"./EyeOutlined.dac8873d.js";import"./Dropdown.956e144f.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.b7f9ce77.js";import"./CaretDownFilled.e0971677.js";import"./useForm.fa74c36f.js";import"./index.4868b979.js";import"./index.7076e471.js";import"./UpOutlined.6bb69641.js";import"./index.f8b026f5.js";import"./useSortable.157fa08b.js";import"./clickOutside.ef1afe0b.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./useTimeout.8b4166a5.js";import"./useWindowSizeFn.c2452f79.js";import"./useModal.8f0c71bb.js";import"./ScrollContainer.2e84ada1.js";import"./index.8be26ef1.js";import"./useScrollTo.7d976049.js";import"./FullscreenOutlined.480b5267.js";import"./index.de0eec0c.js";import"./useExpose.b4029b20.js";import"./index.1ce9a741.js";import"./index.6de30622.js";import"./RedoOutlined.a27aff3b.js";import"./Tree.d37c809f.js";import"./index.176bd308.js";import"./index.274e9900.js";import"./download.b251e1e8.js";const m=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],c=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var p=t({components:{BasicTable:e,TableAction:a},setup(){const[e,{getDataSource:t}]=l({columns:m,showIndexColumn:!1,dataSource:c,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function o(e){var i;if(null==(i=e.onEdit)||i.call(e,!1),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){const e=t(),i={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};e.push(i)},getDataSource:t,handleEditChange:function(e){}}}});const u=d(" 新增成员 ");p.render=function(e,t,d,a,l,m){const c=i("TableAction"),p=i("BasicTable"),j=i("a-button");return o(),n("div",null,[r(p,{onRegister:e.registerTable,onEditChange:e.handleEditChange},{action:s((({record:t,column:i})=>[r(c,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister","onEditChange"]),r(j,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:s((()=>[u])),_:1},8,["onClick"])])};export default p;