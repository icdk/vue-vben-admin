let e=document.createElement("style");e.innerHTML=".vben-setting-select-item[data-v-6110ac28]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-select-item-select[data-v-6110ac28]{width:126px}",document.head.appendChild(e);import{a as t,au as i,s,i as a,o as n,j as d,k as r,n as o,v as l,aS as p}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import{S as m}from"./index.1a9c0d02.js";import"./Trigger.bfe12865.js";import"./omit.973d6ffa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06ba6731.js";import"./CheckOutlined.35bd116b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.dd5e0426.js";import"./index.eb4ddc20.js";import"./index.d1cc2d2c.js";import"./index.4eeb0172.js";import"./index.25ed3e1e.js";import"./RightOutlined.28ca736c.js";import"./SettingOutlined.a5ad0862.js";import"./useTimeout.ecacd159.js";import"./tsxHelper.de9bad94.js";import"./index.9996551d.js";import"./domUtils.6607e034.js";import"./index.5b29772c.js";import"./animation.ee9e574c.js";import"./useScrollTo.2ce047e1.js";import"./useAttrs.6880d872.js";import"./useHeaderSetting.4f8d0f31.js";import{b as c}from"./index.0aa5b45e.js";var u=t({name:"SelectItem",components:{Select:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:t}=i("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const j=p("data-v-6110ac28")(((e,t,i,s,p,m)=>{const c=a("Select");return n(),d("div",{class:e.prefixCls},[r("span",null,o(e.title),1),r(c,l(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));u.render=j,u.__scopeId="data-v-6110ac28";export default u;