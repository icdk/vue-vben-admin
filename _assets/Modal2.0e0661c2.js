import{a as e,i as s,o as t,j as a,w as o,k as l,v as r,p as i}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import{B as d,a as n}from"./index.854d6bdb.js";var c=e({components:{BasicModal:d},setup(){const[e,{closeModal:s,setModalProps:t}]=n();return{register:e,closeModal:s,setModalProps:()=>{t({title:"Modal New Title"})}}}});const p=i("从内部关闭弹窗"),M=i("从内部修改title");c.render=function(e,i,d,n,c,m){const u=s("a-button"),f=s("BasicModal");return t(),a(f,r(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:o((()=>[l(u,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:o((()=>[p])),_:1},8,["onClick"]),l(u,{type:"primary",onClick:e.setModalProps},{default:o((()=>[M])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default c;