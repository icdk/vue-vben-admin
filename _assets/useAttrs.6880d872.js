import{de as s,b as e,ad as t,cn as a}from"./index.ef3db6d5.js";const c=["class","style"],n=/^on[A-Z]/;function r(r={}){const o=a();if(!o)return{};const{excludeListeners:d=!1,excludeKeys:u=[]}=r,i=s({}),l=u.concat(c);return o.attrs=e(o.attrs),t((()=>{const s=(e=o.attrs,Object.keys(e).map((s=>[s,e[s]]))).reduce(((s,[e,t])=>(l.includes(e)||d&&n.test(e)||(s[e]=t),s)),{});var e;i.value=s})),i}export{r as u};