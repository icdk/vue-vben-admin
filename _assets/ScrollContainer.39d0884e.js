let r=document.createElement("style");r.innerHTML=".scroll-container{width:100%;height:100%}.scroll-container .scrollbar__wrap{margin-bottom:18px!important;overflow-x:hidden}.scroll-container .scrollbar__view{box-sizing:border-box}",document.head.appendChild(r);import{ao as o,y as t,a as l,r as s,f as a,F as n,i as e,o as c,j as i,w as u,x as p}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import"./animation.d1fd2b17.js";import{u as d}from"./useScrollTo.29e46930.js";const f=o((()=>import("./Scrollbar.3b330375.js")));t(f);var m=l({name:"ScrollContainer",components:{Scrollbar:f},setup(){const r=s(null);return{scrollbarRef:r,scrollTo:function(o,t=500){const l=a(r);l&&n((()=>{const r=a(l.wrap);if(!r)return;const{start:s}=d({el:r,to:o,duration:t});s()}))},scrollBottom:function(){const o=a(r);o&&n((()=>{const r=a(o.wrap);if(!r)return;const t=r.scrollHeight,{start:l}=d({el:r,to:t});l()}))},getScrollWrap:function(){const o=a(r);return o?o.wrap:null}}}});m.render=function(r,o,t,l,s,a){const n=e("Scrollbar");return c(),i(n,{ref:"scrollbarRef",wrapClass:"scrollbar__wrap",viewClass:"scrollbar__view",class:"scroll-container"},{default:u((()=>[p(r.$slots,"default")])),_:3},512)};export default m;