var e=Object.assign;import{u as t,aF as s,d as o,aK as l,K as a,h as n,o as r,i,aL as c,b0 as u,a7 as d,w as p,m as f,l as g,k as b,j as h,r as w,aZ as C,aT as m,a$ as k,e as v,aU as D,cU as x,t as y,cn as $,x as O,bA as B,bx as T,a3 as P,aM as _,a as F,cY as j,bZ as L,cZ as S,cT as H,bX as V}from"./index.12192f00.js";import{D as A}from"./index.6ff6d491.js";import{d as M,_ as N}from"./index.fe2a3406.js";import{A as Z}from"./ArrowLeftOutlined.e1191e7a.js";import{u as I}from"./useAttrs.1da06bfb.js";import{i as K}from"./isEqual.292bb384.js";const{t:R}=t(),U={confirmLoading:s.bool,showCancelBtn:s.bool.def(!0),cancelButtonProps:Object,cancelText:s.string.def(R("common.cancelText")),showOkBtn:s.bool.def(!0),okButtonProps:Object,okText:s.string.def(R("common.okText")),okType:s.string.def("primary"),showFooter:s.bool,footerHeight:{type:[String,Number],default:60}},q=e({isDetail:s.bool,title:s.string.def(""),loadingText:s.string,showDetailBack:s.bool.def(!0),visible:s.bool,loading:s.bool,maskClosable:s.bool.def(!0),getContainer:{type:[Object,String]},scrollOptions:{type:Object,default:null},closeFunc:{type:[Function,Object],default:null},triggerWindowResize:s.bool,destroyOnClose:s.bool},U);var z=o({name:"BasicDrawerFooter",props:e(e({},U),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:s}=l("basic-drawer-footer");return{handleOk:function(){t("ok")},prefixCls:s,handleClose:function(){t("close")},getStyle:a((()=>{const t=`${e.height}`;return{height:t,lineHeight:t}}))}}});z.render=function(e,t,s,o,l,a){const h=n("a-button");return e.showFooter||e.$slots.footer?(r(),i("div",{key:0,class:e.prefixCls,style:e.getStyle},[e.$slots.footer?u(e.$slots,"footer",{key:1}):(r(),i(c,{key:0},[u(e.$slots,"insertFooter"),e.showCancelBtn?(r(),i(h,d({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:p((()=>[f(g(e.cancelText),1)])),_:1},16,["onClick"])):b("",!0),u(e.$slots,"centerFooter"),e.showOkBtn?(r(),i(h,d({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:p((()=>[f(g(e.okText),1)])),_:1},16,["type","onClick","loading"])):b("",!0),u(e.$slots,"appendFooter")],64))],6)):b("",!0)};var E=o({name:"BasicDrawerHeader",components:{BasicTitle:M,ArrowLeftOutlined:Z},props:{isDetail:s.bool,showDetailBack:s.bool,title:s.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:s}=l("basic-drawer-header");return{prefixCls:s,handleClose:function(){t("close")}}}});const W={key:1};E.render=function(e,t,s,o,l,a){const c=n("BasicTitle"),d=n("ArrowLeftOutlined");return e.isDetail?(r(),i("div",{key:1,class:[e.prefixCls,`${e.prefixCls}--detail`]},[h("span",{class:`${e.prefixCls}__twrap`},[e.showDetailBack?(r(),i("span",{key:0,onClick:t[1]||(t[1]=(...t)=>e.handleClose&&e.handleClose(...t))},[h(d,{class:`${e.prefixCls}__back`},null,8,["class"])])):b("",!0),e.title?(r(),i("span",W,g(e.title),1)):b("",!0)],2),h("span",{class:`${e.prefixCls}__toolbar`},[u(e.$slots,"titleToolbar")],2)],2)):(r(),i(c,{key:0,class:e.prefixCls},{default:p((()=>[u(e.$slots,"title"),f(" "+g(e.$slots.title?"":e.title),1)])),_:3},8,["class"]))};var X=o({components:{Drawer:A,ScrollContainer:N,DrawerFooter:z,DrawerHeader:E},inheritAttrs:!1,props:q,emits:["visible-change","ok","close","register"],setup(s,{emit:o}){const n=w(!1),r=I(),i=w(null),{t:c}=t(),{prefixVar:u,prefixCls:d}=l("basic-drawer"),p={setDrawerProps:function(e){i.value=x(v(i)||{},e),Reflect.has(e,"visible")&&(n.value=!!e.visible)},emitVisible:void 0},f=k();f&&o("register",p,f.uid);const g=a((()=>x(y(s),v(i)))),b=a((()=>{const t=e(e(e({placement:"right"},v(r)),v(g)),{visible:v(n)});t.title=void 0;const{isDetail:s,width:o,wrapClassName:l,getContainer:a}=t;if(s){o||(t.width="100%");const e=`${d}__detail`;t.wrapClassName=l?`${l} ${e}`:e,a||(t.getContainer=`.${u}-layout-content`)}return t})),h=a((()=>e(e({},r),v(b)))),B=a((()=>{const{footerHeight:e,showFooter:t}=v(b);return t&&e?$(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),T=a((()=>({position:"relative",height:`calc(100% - ${v(B)})`}))),P=a((()=>{var e;return!!(null==(e=v(b))?void 0:e.loading)}));return C((()=>{n.value=s.visible})),m((()=>n.value),(e=>{O((()=>{var t;o("visible-change",e),f&&(null==(t=p.emitVisible)||t.call(p,e,f.uid))}))})),{onClose:async function(e){const{closeFunc:t}=v(b);if(o("close",e),t&&D(t)){const e=await t();n.value=!e}else n.value=!1},t:c,prefixCls:d,getMergeProps:g,getScrollContentStyle:T,getProps:b,getLoading:P,getBindValues:h,getFooterHeight:B,handleOk:function(){o("ok")}}}});X.render=function(e,t,s,o,l,a){const c=n("DrawerHeader"),f=n("ScrollContainer"),g=n("DrawerFooter"),b=n("Drawer"),w=B("loading");return r(),i(b,d({class:e.prefixCls,onClose:e.onClose},e.getBindValues),T({default:p((()=>[P(h(f,{style:e.getScrollContentStyle,"loading-tip":e.loadingText||e.t("common.loadingText")},{default:p((()=>[u(e.$slots,"default")])),_:3},8,["style","loading-tip"]),[[w,e.getLoading]]),h(g,d(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),T({_:2},[_(Object.keys(e.$slots),(t=>({name:t,fn:p((s=>[u(e.$slots,t,s)]))})))]),1040,["onClose","onOk","height"])])),_:2},[e.$slots.title?void 0:{name:"title",fn:p((()=>[h(c,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:p((()=>[u(e.$slots,"titleToolbar")])),_:1},8,["title","isDetail","showDetailBack","onClose"])]))}]),1040,["class","onClose"])};const Y=F({}),G=F({});function J(){j();const e=w(null),t=w(!1),s=w("");const o=()=>{const t=v(e);return t||H("useDrawer instance is undefined!"),t};return[function(o,l){L((()=>{e.value=null,t.value=null,Y[v(s)]=null})),v(t)&&S()&&o===v(e)||(s.value=l,e.value=o,t.value=!0,o.emitVisible=(e,t)=>{G[t]=e})},{setDrawerProps:e=>{var t;null==(t=o())||t.setDrawerProps(e)},getVisible:a((()=>G[~~v(s)])),openDrawer:(e=!0,t,l=!0)=>{var a;if(null==(a=o())||a.setDrawerProps({visible:e}),!t)return;if(l)return Y[v(s)]=null,void(Y[v(s)]=t);K(y(Y[v(s)]),t)||(Y[v(s)]=t)}}]}const Q=e=>{const t=w(null),s=k(),o=w("");s||H("useDrawerInner instance is undefined!");const l=()=>{const e=v(t);if(e)return e;H("useDrawerInner instance is undefined!")};return C((()=>{const t=Y[v(o)];t&&e&&D(e)&&O((()=>{e(t)}))})),[(e,l)=>{L((()=>{t.value=null})),o.value=l,t.value=e,null==s||s.emit("register",e,l)},{changeLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({loading:e})},changeOkLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({confirmLoading:e})},getVisible:a((()=>G[~~v(o)])),closeDrawer:()=>{var e;null==(e=l())||e.setDrawerProps({visible:!1})},setDrawerProps:e=>{var t;null==(t=l())||t.setDrawerProps(e)}}]};V(X);export{X as _,Q as a,J as u};