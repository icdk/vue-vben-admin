import{a as i,i as e,o as t,j as o,k as s,w as d,p as r}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import"./index.deb1177b.js";import"./index.1a9c0d02.js";import"./Trigger.bfe12865.js";import"./omit.973d6ffa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06ba6731.js";import"./CheckOutlined.35bd116b.js";import"./index.5586c30e.js";import"./colors.88c331b3.js";import"./index.d6ae3dfa.js";import"./RightOutlined.7f7867ab.js";import"./index.209318a5.js";import"./types.80de9d94.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.dd5e0426.js";import"./_baseFor.f4e5f03f.js";import"./index.5d3f872a.js";import"./index.a172b251.js";import"./index.23afc8d6.js";import"./index.668cd44f.js";import"./UpOutlined.4f317e4e.js";import"./LeftOutlined.760e802a.js";import"./index.2c5ff13d.js";import"./index.1027e3c8.js";import"./index.eb4ddc20.js";import"./index.2cd1edc8.js";import"./index.d958525d.js";import"./zh_CN.0242bd16.js";import"./TableAction.5f18bb1b.js";import"./index.99070219.js";import"./CaretDownFilled.b023be26.js";import"./index.4eeb0172.js";import"./CheckOutlined.952b8817.js";import"./CloseOutlined.c517d8dc.js";import{s as m}from"./EditTableHeaderIcon.d245563b.js";import"./DownOutlined.88faef57.js";import"./FullscreenOutlined.fcc47bab.js";import"./functional.8f7dc448.js";import"./LoadingOutlined.0226bca5.js";import"./RedoOutlined.990d63dc.js";import"./RightOutlined.28ca736c.js";import"./SettingOutlined.a5ad0862.js";import"./useTimeout.ecacd159.js";import"./tsxHelper.de9bad94.js";import"./index.9996551d.js";import"./domUtils.6607e034.js";import"./index.5b29772c.js";import"./animation.ee9e574c.js";import"./useScrollTo.2ce047e1.js";import"./useAttrs.6880d872.js";import"./index.f4b13226.js";import"./index.ff50ff6b.js";import"./useForm.86f9369f.js";import"./index.17c0dda7.js";import"./useWindowSizeFn.4b33812b.js";import"./useFullScreen.b273f378.js";import"./uuid.40269c00.js";import"./useExpose.95c38320.js";import"./index.e63d61cb.js";import{c as a,d as p,a as n,b as j,e as c}from"./data.7596f14f.js";import"./index.94ca2fdc.js";var l=i({components:{BasicTable:m},setup:()=>({aoaToExcel:function(){n({data:j,header:c,filename:"二维数组方式导出excel.xlsx"})},columns:a,data:p})});const f={class:"m-4"},b=r("导出");l.render=function(i,r,m,a,p,n){const j=e("a-button"),c=e("BasicTable");return t(),o("div",f,[s(c,{title:"基础表格",columns:i.columns,dataSource:i.data},{toolbar:d((()=>[s(j,{onClick:i.aoaToExcel},{default:d((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])};export default l;