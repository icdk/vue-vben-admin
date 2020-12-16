import{a as s,r as e,h as o,i as t,o as l,j as a,k as i,w as r,p as n}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import"./index.0140268b.js";import"./Trigger.9624f24b.js";import"./omit.2ac92ce2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2d33f44f.js";import"./CheckOutlined.fa54ab74.js";import{s as c}from"./index.e028f2ec.js";import"./colors.11c2fe2a.js";import"./RightOutlined.346767f2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2638ac3e.js";import"./index.b89b2489.js";import"./index.a172b251.js";import"./index.71d835da.js";import"./UpOutlined.8fbbe575.js";import"./index.fe81ccfa.js";import"./index.b3c5c07d.js";import"./index.ced671f3.js";import"./index.03e0e622.js";import"./useDebounce.87ee1be2.js";import"./useEventListener.3f9fc979.js";import"./useBreakpoint.7d12f99a.js";import{C as p}from"./index.8390a561.js";import"./index.504b6a3c.js";import"./tsxHelper.1229783e.js";import"./index.266c5a87.js";import"./index.58cbc055.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:s=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var d=s({components:{BasicForm:c,CollapseContainer:p},setup(){const s=e(null),{createMessage:t}=o();return{formElRef:s,schemas:m,handleSubmit:s=>{t.success("click search,values:"+JSON.stringify(s))},setProps(e){const o=s.value;o&&o.setProps(e)}}}});const u={class:"m-4"},f={class:"mb-4"},b=n("更改labelWidth"),j=n("还原labelWidth"),P=n("更改Size"),C=n("还原Size"),h=n("禁用表单"),k=n("解除禁用"),x=n("紧凑表单"),_=n("还原正常间距"),v=n(" 操作按钮位置 "),B={class:"mb-4"},S=n(" 隐藏操作按钮 "),g=n(" 显示操作按钮 "),w=n(" 隐藏重置按钮 "),O=n(" 显示重置按钮 "),R=n(" 隐藏查询按钮 "),W=n(" 显示查询按钮 "),y=n(" 修改重置按钮 "),z=n(" 修改查询按钮 ");d.render=function(s,e,o,n,c,p){const m=t("a-button"),d=t("BasicForm"),G=t("CollapseContainer");return l(),a("div",u,[i("div",f,[i(m,{onClick:e[1]||(e[1]=e=>s.setProps({labelWidth:150})),class:"mr-2"},{default:r((()=>[b])),_:1}),i(m,{onClick:e[2]||(e[2]=e=>s.setProps({labelWidth:120})),class:"mr-2"},{default:r((()=>[j])),_:1}),i(m,{onClick:e[3]||(e[3]=e=>s.setProps({size:"large"})),class:"mr-2"},{default:r((()=>[P])),_:1}),i(m,{onClick:e[4]||(e[4]=e=>s.setProps({size:"default"})),class:"mr-2"},{default:r((()=>[C])),_:1}),i(m,{onClick:e[5]||(e[5]=e=>s.setProps({disabled:!0})),class:"mr-2"},{default:r((()=>[h])),_:1}),i(m,{onClick:e[6]||(e[6]=e=>s.setProps({disabled:!1})),class:"mr-2"},{default:r((()=>[k])),_:1}),i(m,{onClick:e[7]||(e[7]=e=>s.setProps({compact:!0})),class:"mr-2"},{default:r((()=>[x])),_:1}),i(m,{onClick:e[8]||(e[8]=e=>s.setProps({compact:!1})),class:"mr-2"},{default:r((()=>[_])),_:1}),i(m,{onClick:e[9]||(e[9]=e=>s.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:r((()=>[v])),_:1})]),i("div",B,[i(m,{onClick:e[10]||(e[10]=e=>s.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:r((()=>[S])),_:1}),i(m,{onClick:e[11]||(e[11]=e=>s.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:r((()=>[g])),_:1}),i(m,{onClick:e[12]||(e[12]=e=>s.setProps({showResetButton:!1})),class:"mr-2"},{default:r((()=>[w])),_:1}),i(m,{onClick:e[13]||(e[13]=e=>s.setProps({showResetButton:!0})),class:"mr-2"},{default:r((()=>[O])),_:1}),i(m,{onClick:e[14]||(e[14]=e=>s.setProps({showSubmitButton:!1})),class:"mr-2"},{default:r((()=>[R])),_:1}),i(m,{onClick:e[15]||(e[15]=e=>s.setProps({showSubmitButton:!0})),class:"mr-2"},{default:r((()=>[W])),_:1}),i(m,{onClick:e[16]||(e[16]=e=>s.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:r((()=>[y])),_:1}),i(m,{onClick:e[17]||(e[17]=e=>s.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:r((()=>[z])),_:1})]),i(G,{title:"使用ref调用表单内部函数示例"},{default:r((()=>[i(d,{schemas:s.schemas,ref:"formElRef",labelWidth:100,onSubmit:s.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])};export default d;