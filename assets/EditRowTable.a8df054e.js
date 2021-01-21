import{_ as e,a as t}from"./index.a51628c3.js";import{o as i}from"./select.22281831.js";import{d as o}from"./table.a0a56e54.js";import{d,r as n,h as a,o as s,i as r,j as l,w as m}from"./index.a566a5ca.js";import{g as p}from"./index.de81c9ed.js";import{u as c}from"./useTable.e4b556f0.js";import"./index.85488c04.js";import"./SearchOutlined.7c3ad112.js";import"./DownOutlined.dd4e6399.js";import"./CheckOutlined.22d125f3.js";import"./index.f6c4400a.js";import"./index.2bf786a7.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.4bfde90d.js";import"./isEqual.ec621c06.js";import"./_baseProperty.74f89655.js";import"./toInteger.baf86ce7.js";import"./index.5274dc7a.js";import"./RightOutlined.91e3265a.js";import"./types.e18f0e7b.js";import"./index.be64ae83.js";import"./LeftOutlined.b219af0e.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.7c972e8a.js";import"./uuid.70d5a034.js";import"./util.1a686b9e.js";import"./EyeOutlined.77d25fed.js";import"./index.954e87ef.js";import"./index.4e27a778.js";import"./index.8d91dadc.js";import"./scrollTo.c9242ea7.js";import"./transButton.fe643f31.js";import"./RightOutlined.b48611f5.js";import"./clickOutside.fb7b2a60.js";import"./domUtils.a46c7224.js";import"./_stringToArray.1cfb153c.js";import"./index.d21f5957.js";import"./index.27065d05.js";import"./UpOutlined.d8022224.js";import"./index.cf22a6d5.js";import"./useSortable.6348db1d.js";import"./index.dcc4c8d5.js";import"./useTimeout.e434fe9c.js";import"./useAttrs.64188c7e.js";import"./useWindowSizeFn.3467e9f6.js";import"./index.adcbe97e.js";import"./index.11164d45.js";import"./useScrollTo.e749e6c6.js";import"./animation.831cbf1f.js";import"./FullscreenOutlined.eb4af258.js";import"./CheckOutlined.42a21925.js";import"./index.ba5d05b1.js";import"./SettingOutlined.74fa68dd.js";import"./useExpose.99213a4b.js";import"./useForm.bcdd98b4.js";import"./index.e7777da2.js";import"./index.ce5f6841.js";import"./colors.51f7f813.js";import"./Tree.cca5e8c3.js";import"./index.585ce7e7.js";import"./index.b77e5e9f.js";import"./download.6d573c3b.js";const u=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:200},{title:"输入框校验",dataIndex:"name1",editRow:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:i},width:200},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var j=d({components:{BasicTable:e,EditTableHeaderIcon:t,TableAction:p},setup(){const e=n(""),[t]=c({title:"可编辑行示例",api:o,columns:u,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function i(t){var i;e.value=t.key,null==(i=t.onEdit)||i.call(t,!0)}function d(t){var i;e.value="",null==(i=t.onEdit)||i.call(t,!1,!0)}async function a(t){var i;await(null==(i=t.onEdit)?void 0:i.call(t,!1,!0))&&(e.value="")}return{registerTable:t,handleEdit:i,createActions:function(t,o){return t.editable?[{label:"保存",onClick:a.bind(null,t,o)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:d.bind(null,t,o)}}]:[{label:"编辑",disabled:!!e.value&&e.value!==t.key,onClick:i.bind(null,t)}]}}}});const b={class:"p-4"};j.render=function(e,t,i,o,d,n){const p=a("TableAction"),c=a("BasicTable");return s(),r("div",b,[l(c,{onRegister:e.registerTable},{action:m((({record:t,column:i})=>[l(p,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default j;