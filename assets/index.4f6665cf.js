import{M as e}from"./index.53f5720b.js";import{_ as t}from"./index.6a59b07e.js";import{d as n,r as a,e as o,h as r,o as i,i as s,w as m,j as d,m as l}from"./index.89eaa474.js";import"./index.e2fe5134.js";import"./index.81eb82f3.js";import"./RightOutlined.f6122b3f.js";import"./EllipsisOutlined.d7ec650a.js";import"./types.8ffdb72a.js";import"./isEqual.0bcea136.js";import"./toInteger.e5f6d519.js";import"./DownOutlined.1abeee16.js";/* empty css              */import"./index.7d0c3879.js";import"./usePageContext.43155b53.js";import"./transButton.31c0fca4.js";import"./ArrowLeftOutlined.d2d3a70b.js";import"./vendor.3b1829c7.js";var p=n({components:{MarkDown:e,PageWrapper:t},setup(){const e=a(null),t=a("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const t=o(e);if(!t)return;t.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const u=l(" 黑暗主题 ");p.render=function(e,t,n,a,o,l){const p=r("a-button"),f=r("MarkDown"),c=r("PageWrapper");return i(),s(c,{title:"MarkDown组件示例"},{default:m((()=>[d(p,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:m((()=>[u])),_:1},8,["onClick"]),d(f,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default p;