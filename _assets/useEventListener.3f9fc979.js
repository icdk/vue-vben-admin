import{r as e,aq as t,O as n,f as o}from"./index.741c7e80.js";import{u as s}from"./useDebounce.87ee1be2.js";function a({el:a=window,name:i,listener:r,options:m,autoRemove:u=!0,isDebounce:v=!0,wait:c=80}){let d=()=>{};const f=e(!1);if(a){const l=e(a),[p]=v?s(r,c):t(r,c),b=c?p:r,w=e=>{f.value=!0,e.removeEventListener(i,b,m)},E=e=>e.addEventListener(i,b,m),j=n(l,((e,t,n)=>{e&&(!o(f)&&E(e),n((()=>{u&&w(e)})))}),{immediate:!0});d=()=>{w(l.value),j()}}return{removeEvent:d}}export{a as u};