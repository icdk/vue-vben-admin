import{d as e,b1 as i,u as t,h as s,o,i as r,w as n,j as l,l as d}from"./index.5c1bb4d0.js";/* empty css              */import{u as p}from"./BasicForm.530d5c20.js";import{u as m}from"./useFullScreen.e9d2f992.js";import{F as c,a}from"./FullscreenOutlined.f12e1d09.js";import"./vendor.3b1829c7.js";import"./index.7514cee0.js";import"./index.e1b77540.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.5abbb4a2.js";import"./isEqual.e04a9f42.js";import"./get.303c69e6.js";import"./_baseProperty.74f89655.js";import"./toInteger.9ae8b221.js";import"./index.432b387e.js";import"./index.3f119691.js";import"./SearchOutlined.d26b6660.js";import"./EyeOutlined.b3a1240e.js";import"./index.cbcc5622.js";import"./CheckOutlined.27cf9f3c.js";import"./DownOutlined.8357fe21.js";import"./index.f0978fda.js";import"./index.fc7e7d11.js";import"./UpOutlined.0d7a1354.js";import"./index.6ed33274.js";import"./RightOutlined.398160ad.js";import"./RedoOutlined.a1eda39b.js";import"./index.f9f109c2.js";import"./EllipsisOutlined.f3945325.js";import"./types.45bd0100.js";import"./Tree.8f213beb.js";import"./util.da2c703c.js";import"./uuid.96bf1684.js";import"./index.de162a79.js";import"./DeleteOutlined.26112945.js";import"./index.1859d917.js";import"./useModal.1bf2067f.js";import"./useTimeout.8048cd3a.js";import"./useWindowSizeFn.6ab574ba.js";import"./ScrollContainer.dde85720.js";import"./index.60103073.js";import"./domUtils.5a9a1f23.js";import"./_stringToArray.18f4ff6c.js";import"./useScrollTo.c6f01bc0.js";import"./index.9617de2a.js";import"./Dropdown.89759272.js";import"./index.88e3d4c7.js";import"./LeftOutlined.e17066af.js";import"./download.ec7c3b7e.js";var u=e({name:"FullScreenSetting",components:{FullscreenExitOutlined:c,FullscreenOutlined:a,Tooltip:i},setup(){const e=p(),{t:i}=t(),{toggleFullscreen:s,isFullscreenRef:o}=m(e.wrapRef);return{handleFullScreen:function(){s()},isFullscreenRef:o,t:i}}});u.render=function(e,i,t,p,m,c){const a=s("FullscreenOutlined"),u=s("FullscreenExitOutlined"),j=s("Tooltip");return o(),r(j,{placement:"top"},{title:n((()=>[l("span",null,d(e.t("component.table.settingFullScreen")),1)])),default:n((()=>[e.isFullscreenRef?(o(),r(u,{key:1,onClick:e.handleFullScreen},null,8,["onClick"])):(o(),r(a,{key:0,onClick:e.handleFullScreen},null,8,["onClick"]))])),_:1})};export default u;