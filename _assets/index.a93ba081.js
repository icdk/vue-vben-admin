import{a as e,aX as s,i as l,o,j as t,k as r,w as c,p as a}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.dd5e0426.js";import{a as i}from"./index.4eeb0172.js";import"./RightOutlined.28ca736c.js";import"./useTimeout.ecacd159.js";import"./tsxHelper.de9bad94.js";import"./index.9996551d.js";import"./domUtils.6607e034.js";import"./index.5b29772c.js";import"./animation.ee9e574c.js";import"./useScrollTo.2ce047e1.js";var n=e({name:"TabsDemo",components:{CollapseContainer:i},setup(){const{closeAll:e,closeLeft:l,closeRight:o,closeOther:t,closeCurrent:r,refreshPage:c}=s();return{closeAll:e,closeLeft:l,closeRight:o,closeOther:t,closeCurrent:r,refreshPage:c}}});const m={class:"p-4"},d=a("关闭所有"),p=a("关闭左侧"),u=a("关闭右侧"),f=a("关闭其他"),C=a("关闭当前"),j=a("刷新当前");n.render=function(e,s,a,i,n,k){const h=l("a-input"),_=l("CollapseContainer"),b=l("a-button");return o(),t("div",m,[r(_,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:c((()=>[r(h,{placeholder:"请输入"})])),_:1}),r(_,{class:"mt-4",title:"标签页操作"},{default:c((()=>[r(b,{class:"mr-2",onClick:e.closeAll},{default:c((()=>[d])),_:1},8,["onClick"]),r(b,{class:"mr-2",onClick:e.closeLeft},{default:c((()=>[p])),_:1},8,["onClick"]),r(b,{class:"mr-2",onClick:e.closeRight},{default:c((()=>[u])),_:1},8,["onClick"]),r(b,{class:"mr-2",onClick:e.closeOther},{default:c((()=>[f])),_:1},8,["onClick"]),r(b,{class:"mr-2",onClick:e.closeCurrent},{default:c((()=>[C])),_:1},8,["onClick"]),r(b,{class:"mr-2",onClick:e.refreshPage},{default:c((()=>[j])),_:1},8,["onClick"])])),_:1})])};export default n;