import{_ as e}from"./index.cbefd1bb.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.252346e9.js";import{d as o,r as s,g as n,e as l,h as a,o as r,i as c,j as d,w as m,m as p}from"./index.5c1bb4d0.js";import{d as u}from"./table.3a657a9a.js";import"./index.cbcc5622.js";import"./SearchOutlined.d26b6660.js";import"./CheckOutlined.27cf9f3c.js";import"./DownOutlined.8357fe21.js";import"./BasicForm.530d5c20.js";import"./index.7514cee0.js";import"./index.e1b77540.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.5abbb4a2.js";import"./isEqual.e04a9f42.js";import"./get.303c69e6.js";import"./_baseProperty.74f89655.js";import"./toInteger.9ae8b221.js";import"./index.432b387e.js";import"./index.3f119691.js";import"./EyeOutlined.b3a1240e.js";import"./index.f0978fda.js";import"./index.fc7e7d11.js";import"./UpOutlined.0d7a1354.js";import"./index.6ed33274.js";import"./RightOutlined.398160ad.js";import"./RedoOutlined.a1eda39b.js";import"./index.f9f109c2.js";import"./EllipsisOutlined.f3945325.js";import"./types.45bd0100.js";import"./Tree.8f213beb.js";import"./util.da2c703c.js";/* empty css              */import"./uuid.96bf1684.js";import"./index.de162a79.js";import"./DeleteOutlined.26112945.js";import"./index.1859d917.js";import"./useModal.1bf2067f.js";import"./useTimeout.8048cd3a.js";import"./useWindowSizeFn.6ab574ba.js";import"./ScrollContainer.dde85720.js";import"./index.60103073.js";import"./domUtils.5a9a1f23.js";import"./_stringToArray.18f4ff6c.js";import"./useScrollTo.c6f01bc0.js";import"./FullscreenOutlined.f12e1d09.js";import"./index.9617de2a.js";import"./Dropdown.89759272.js";import"./index.88e3d4c7.js";import"./LeftOutlined.e17066af.js";import"./download.ec7c3b7e.js";import"./index.683cd56d.js";import"./DoubleLeftOutlined.a70c149c.js";import"./DoubleRightOutlined.d693c189.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.1e3620e3.js";import"./CaretDownFilled.ec9bdc02.js";import"./useForm.7a19d831.js";import"./clickOutside.007172e8.js";import"./useSortable.912f94e2.js";import"./SettingOutlined.bc8af49f.js";import"./useExpose.e74a41b6.js";var f=o({components:{BasicTable:e},setup(){const e=s(null),{createMessage:o}=n();function a(){const t=l(e);if(!t)throw new Error("tableAction is null");return t}return{tableRef:e,api:u,columns:t(),changeLoading:function(){a().setLoading(!0),setTimeout((()=>{a().setLoading(!1)}),1e3)},changeColumns:function(){a().setColumns(i())},reloadTable:function(){a().setColumns(t()),a().reload({page:1})},getColumn:function(){o.info("请在控制台查看！")},getTableData:function(){o.info("请在控制台查看！")},getPagination:function(){o.info("请在控制台查看！")},setPaginationInfo:function(){a().setPagination({current:2}),a().reload()},getSelectRowList:function(){o.info("请在控制台查看！")},getSelectRowKeyList:function(){o.info("请在控制台查看！")},setSelectedRowKeyList:function(){a().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){a().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},g=p(" 还原 "),C=p(" 开启loading "),k=p(" 更改Columns "),x=p(" 获取Columns "),w=p(" 获取表格数据 "),S=p(" 跳转到第2页 "),O={class:"mb-4"},R=p(" 获取选中行 "),_=p(" 获取选中行Key "),y=p(" 设置选中行 "),T=p(" 清空选中行 "),h=p(" 获取分页信息 ");f.render=function(e,t,i,o,s,n){const l=a("a-button"),p=a("BasicTable");return r(),c("div",j,[d("div",b,[d(l,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[g])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[k])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[x])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[S])),_:1},8,["onClick"])]),d("div",O,[d(l,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[R])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[y])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[T])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[h])),_:1},8,["onClick"])]),d(p,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default f;