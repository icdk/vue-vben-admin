import{d as e,aF as s,aK as t,K as i,bR as a,h as r,o,i as p,j as n,w as m,b0 as d,aL as l,aM as c,a7 as u,bx as f}from"./index.12192f00.js";import{I as g}from"./index.43f0da41.js";import{_ as j}from"./index.006e14c0.js";import"./vendor.3b1829c7.js";import"./LeftOutlined.72f8a14c.js";import"./RightOutlined.c9c720ac.js";import"./index.459ff6cc.js";import"./index.7aebfa6d.js";import"./EllipsisOutlined.35ffd1d0.js";import"./types.4008733a.js";import"./isEqual.292bb384.js";import"./toInteger.db0f0ea0.js";import"./DownOutlined.dd186a31.js";/* empty css              */import"./index.053639c6.js";import"./usePageContext.6e0d629c.js";import"./transButton.616a14bf.js";import"./ArrowLeftOutlined.e1191e7a.js";var v=e({name:"ImagePreview",components:{Image:g,PreviewGroup:g.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:s}=t("image-preview");return{prefixCls:s,getImageList:i((()=>{const{imageList:s}=e;return s?s.map((e=>a(e)?{src:e,placeholder:!1}:e)):[]}))}}});v.render=function(e,s,t,i,a,g){const j=r("Image"),v=r("PreviewGroup");return o(),p("div",{class:e.prefixCls},[n(v,null,{default:m((()=>[!e.imageList||e.$slots.default?d(e.$slots,"default",{key:0}):(o(!0),p(l,{key:1},c(e.getImageList,(e=>(o(),p(j,u({key:e.src},e),f({_:2},[e.placeholder?{name:"placeholder",fn:m((()=>[n(j,u(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1})],2)};const x=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var h=e({components:{PageWrapper:j,ImagePreview:v},setup:()=>({imgList:x})});h.render=function(e,s,t,i,a,d){const l=r("ImagePreview"),c=r("PageWrapper");return o(),p(c,{title:"图片预览示例"},{default:m((()=>[n(l,{imageList:e.imgList},null,8,["imageList"])])),_:1})};export default h;