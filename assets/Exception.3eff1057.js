import{d as t,ay as e,r as s,az as a,aA as l,u as n,aB as i,K as r,e as o,aC as u,j as T,a4 as b,aD as c}from"./index.5c1bb4d0.js";import{R as p}from"./index.f961265f.js";import"./vendor.3b1829c7.js";var d=t({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(t){const d=s(new Map),{query:x}=a(),f=c(),E=l(),{t:y}=n(),{prefixCls:_}=i("app-exception-page"),m=r((()=>{const{status:e}=x,{status:s}=t;return Number(e)||s})),O=r((()=>o(d).get(o(m)))),N=y("sys.exception.backLogin"),A=y("sys.exception.backHome");return o(d).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:y("sys.exception.subTitle403"),btnText:t.full?N:A,handler:()=>t.full?f(u.BASE_LOGIN):f()}),o(d).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:y("sys.exception.subTitle404"),btnText:t.full?N:A,handler:()=>t.full?f(u.BASE_LOGIN):f()}),o(d).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:y("sys.exception.subTitle500"),btnText:A,handler:()=>f()}),o(d).set(e.PAGE_NOT_DATA,{title:y("sys.exception.noDataTitle"),subTitle:"",btnText:y("common.redo"),handler:()=>E(),icon:"/assets/no-data.f7e550cc.svg"}),o(d).set(e.NET_WORK_ERROR,{title:y("sys.exception.networkErrorTitle"),subTitle:y("sys.exception.networkErrorSubTitle"),btnText:y("common.redo"),handler:()=>E(),icon:"/assets/net-error.61b7e6df.svg"}),()=>{const{title:e,subTitle:s,btnText:a,icon:l,handler:n,status:i}=o(O)||{};return T(p,{class:_,status:i,title:t.title||e,"sub-title":t.subTitle||s},{extra:()=>a&&T(b,{type:"primary",onClick:n},{default:()=>a}),icon:()=>l?T("img",{src:l},null):null})}}});export default d;