import{a as e,s as n,f as s,i as t,o as a,j as i,w as d,k as r,ac as o,aH as l,m,n as u,x as c,v as f,y as p}from"./index.ef3db6d5.js";import{D as y}from"./index.d6ae3dfa.js";import{M as v}from"./index.209318a5.js";import{s as g}from"./index.f4b13226.js";var k=e({name:"BasicDropdown",components:{[y.name]:y,[v.name]:v,[v.Item.name]:v.Item,[v.Divider.name]:v.Divider,Icon:g},props:{trigger:{type:[Array],default:()=>["contextmenu"]},dropMenuList:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]}},emits:["menuEvent"],setup(e,{emit:t}){const a=n((()=>e.dropMenuList));return{handleClickMenu:function({key:e}){const n=s(a).find((n=>`${n.event}`==`${e}`));t("menuEvent",n)},getMenuList:a}}});const x={class:"ml-1"};k.render=function(e,n,s,p,y,v){const g=t("Icon"),k=t("a-menu-item"),M=t("a-menu-divider"),$=t("a-menu"),b=t("a-dropdown");return a(),i(b,f({trigger:e.trigger},e.$attrs),{overlay:d((()=>[r($,{selectedKeys:e.selectedKeys},{default:d((()=>[(a(!0),i(o,null,l(e.getMenuList,(n=>(a(),i(o,{key:`${n.event}`},[r(k,{onClick:s=>e.handleClickMenu({key:n.event}),disabled:n.disabled},{default:d((()=>[n.icon?(a(),i(g,{key:0,icon:n.icon},null,8,["icon"])):m("v-if",!0),r("span",x,u(n.text),1)])),_:2},1032,["onClick","disabled"]),n.divider?(a(),i(M,{key:`d-${n.event}`})):m("v-if",!0)],64)))),128))])),_:1},8,["selectedKeys"])])),default:d((()=>[r("span",null,[c(e.$slots,"default")])])),_:3},16,["trigger"])},p(k);export{k as s};