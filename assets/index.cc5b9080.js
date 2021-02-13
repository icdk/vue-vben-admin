import{a as e}from"./ScrollContainer.dde85720.js";import{d as o,g as n,h as s,o as r,i as a,w as t,j as i,m as l}from"./index.5c1bb4d0.js";import{_ as c}from"./index.c20e0ee6.js";import"./index.60103073.js";import"./domUtils.5a9a1f23.js";import"./_stringToArray.18f4ff6c.js";import"./RightOutlined.398160ad.js";/* empty css              */import"./useTimeout.8048cd3a.js";import"./useScrollTo.c6f01bc0.js";import"./vendor.3b1829c7.js";import"./index.3c579330.js";import"./index.f9f109c2.js";import"./EllipsisOutlined.f3945325.js";import"./types.45bd0100.js";import"./isEqual.e04a9f42.js";import"./toInteger.9ae8b221.js";import"./DownOutlined.8357fe21.js";import"./index.e7f7b3ac.js";import"./usePageContext.70d29e37.js";import"./transButton.1e3620e3.js";import"./ArrowLeftOutlined.b2f7170f.js";var d=o({components:{CollapseContainer:e,PageWrapper:c},setup(){const{createMessage:e,createConfirm:o,createSuccessModal:s,createInfoModal:r,createErrorModal:a,createWarningModal:t,notification:i}=n(),{info:l,success:c,warning:d,error:f}=e;return{infoMsg:l,successMsg:c,warningMsg:d,errorMsg:f,handleLoading:function(){e.loading("Loading...")},handleConfirm:function(e){o({iconType:e,title:"Tip",content:"content message..."})},handleSuccessModal:function(){s({title:"Tip",content:"content message..."})},handleErrorModal:function(){a({title:"Tip",content:"content message..."})},handleWarningModal:function(){t({title:"Tip",content:"content message..."})},handleInfoModal:function(){r({title:"Tip",content:"content message..."})},handleNotify:function(){i.success({message:"Tip",description:"content message..."})}}}});const f=l(" Info "),m=l(" Success "),u=l(" Warning "),g=l(" Error "),p=l(" Loading "),C=l(" Info "),h=l(" Warning "),j=l(" Success "),M=l(" Error "),_=l(" Info "),k=l(" Success "),w=l(" Error "),b=l(" Warning "),x=l(" Success ");d.render=function(e,o,n,l,c,d){const S=s("a-button"),T=s("CollapseContainer"),E=s("PageWrapper");return r(),a(E,{title:"消息示例"},{default:t((()=>[i(T,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Message"},{default:t((()=>[i(S,{onClick:o[1]||(o[1]=o=>e.infoMsg("Info message")),class:"mr-2"},{default:t((()=>[f])),_:1}),i(S,{onClick:o[2]||(o[2]=o=>e.successMsg("Success message")),class:"mr-2",color:"success"},{default:t((()=>[m])),_:1}),i(S,{onClick:o[3]||(o[3]=o=>e.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:t((()=>[u])),_:1}),i(S,{onClick:o[4]||(o[4]=o=>e.errorMsg("Error message")),class:"mr-2",color:"error"},{default:t((()=>[g])),_:1}),i(S,{onClick:e.handleLoading,class:"mr-2",type:"primary"},{default:t((()=>[p])),_:1},8,["onClick"])])),_:1}),i(T,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Comfirm"},{default:t((()=>[i(S,{onClick:o[5]||(o[5]=o=>e.handleConfirm("info")),class:"mr-2"},{default:t((()=>[C])),_:1}),i(S,{onClick:o[6]||(o[6]=o=>e.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:t((()=>[h])),_:1}),i(S,{onClick:o[7]||(o[7]=o=>e.handleConfirm("success")),color:"success",class:"mr-2"},{default:t((()=>[j])),_:1}),i(S,{onClick:o[8]||(o[8]=o=>e.handleConfirm("error")),color:"error",class:"mr-2"},{default:t((()=>[M])),_:1})])),_:1}),i(T,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Modal"},{default:t((()=>[i(S,{onClick:e.handleInfoModal,class:"mr-2"},{default:t((()=>[_])),_:1},8,["onClick"]),i(S,{onClick:e.handleSuccessModal,color:"success",class:"mr-2"},{default:t((()=>[k])),_:1},8,["onClick"]),i(S,{onClick:e.handleErrorModal,color:"error",class:"mr-2"},{default:t((()=>[w])),_:1},8,["onClick"]),i(S,{onClick:e.handleWarningModal,color:"warning",class:"mr-2"},{default:t((()=>[b])),_:1},8,["onClick"])])),_:1}),i(T,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Notification 用法与上面一致"},{default:t((()=>[i(S,{onClick:e.handleNotify,color:"success",class:"mr-2"},{default:t((()=>[x])),_:1},8,["onClick"])])),_:1})])),_:1})};export default d;