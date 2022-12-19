import{T as e}from"./TableHeader.23d9d43e.js";import{k as a,m as l,r as d,o as s,j as o,s as m,q as t,t as r,z as i,E as n,n as u,F as c,D as p,c as y}from"./vendor.12528a66.js";import"./index.c82e9445.js";const k=i("正常"),h=i("禁用"),x=i("编辑 "),b=i("删除 "),v=i("确认注册"),f=a({setup(a){const f=l({visible:!1,title:""}),g=()=>{_.Form={},f.visible=!0,f.title="新增部门"},_=l({Form:{name:"",superior:"",address:"",status:""},columns:[{title:"Name",dataIndex:"name"},{title:"Salary",dataIndex:"salary"},{title:"Address",dataIndex:"address"},{title:"Status",dataIndex:"status"}],data:[{key:"1",name:"软件开发",salary:23e3,address:"32 Park Road, London",email:"jane.doe@example.com",status:1,children:[{key:"2",name:"研发",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com",children:[{key:"3",name:"前端",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{key:"4",name:"后端",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}]},{key:"5",name:"测试",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"}]},{key:"6",name:"UI设计",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com",status:1},{key:"7",name:"市场营销",salary:22e3,address:"31 Park Road, London",email:"kevin.sandra@example.com"},{key:"8",name:"政务公关",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{key:"9",name:"实施维护",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"},{key:"9",name:"实施维护",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"},{key:"9",name:"实施维护",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"},{key:"9",name:"实施维护",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"},{key:"9",name:"实施维护",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"},{key:"9",name:"实施维护",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"},{key:"9",name:"实施维护",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}]}),V=e=>{},L=async({errors:e})=>{e||setTimeout((()=>{}),1e3)};return(a,l)=>{const P=d("a-table-column"),R=d("a-switch"),w=d("icon-edit"),F=d("a-button"),U=d("icon-delete"),j=d("a-space"),q=d("a-table"),I=d("a-input"),T=d("a-form-item"),S=d("a-option"),C=d("a-select"),z=d("a-form"),A=d("a-modal");return s(),o("div",null,[m(e,{onSearch:V,onDoAdd:g}),m(q,{pagination:!1,columns:t(_).columns,data:t(_).data},{columns:r((()=>[m(P,{title:"部门名称","data-index":"name"}),m(P,{title:"部门编码","data-index":"salary"}),m(P,{title:"部门地址","data-index":"address",width:"200"}),m(P,{title:"状态",width:"100"},{cell:r((({record:e})=>[m(R,{modelValue:e.status,"onUpdate:modelValue":a=>e.status=a,size:"medium","checked-value":1,"unchecked-value":0},{checked:r((()=>[k])),unchecked:r((()=>[h])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),m(P,{title:"操作",width:"100"},{cell:r((({record:e})=>[m(j,null,{default:r((()=>[m(F,{type:"primary",onClick:a=>(e=>{f.visible=!0,_.Form=e,f.title="编辑部门"})(e)},{icon:r((()=>[m(w)])),default:r((()=>[x])),_:2},1032,["onClick"]),m(F,{type:"primary",status:"danger"},{icon:r((()=>[m(U)])),default:r((()=>[b])),_:1})])),_:2},1024)])),_:1})])),_:1},8,["columns","data"]),m(A,{visible:t(f).visible,"onUpdate:visible":l[4]||(l[4]=e=>t(f).visible=e)},{title:r((()=>[i(n(t(f).title),1)])),footer:r((()=>[m(j,null,{default:r((()=>[m(F,{type:"primary","html-type":"submit",onClick:L},{default:r((()=>[v])),_:1})])),_:1})])),default:r((()=>[u("div",null,[m(z,{model:t(_).Form,onSubmit:L},{default:r((()=>[m(T,{field:"name",label:"部门名称",rules:[{required:!0,message:"这是必填的"}],"validate-trigger":["change","input"]},{default:r((()=>[m(I,{modelValue:t(_).Form.name,"onUpdate:modelValue":l[0]||(l[0]=e=>t(_).Form.name=e),placeholder:"请输入部门名称"},null,8,["modelValue"])])),_:1}),m(T,{field:"superior",label:"上级部门",rules:[{required:!0,message:"这是必填的"}],"validate-trigger":["change","input"]},{default:r((()=>[m(C,{modelValue:t(_).Form.superior,"onUpdate:modelValue":l[1]||(l[1]=e=>t(_).Form.superior=e),style:{width:"320px"},placeholder:"请选择上级部门"},{default:r((()=>[(s(!0),o(c,null,p(t(_).sexType,(e=>(s(),y(S,{value:e.value,label:e.label},null,8,["value","label"])))),256))])),_:1},8,["modelValue"])])),_:1}),m(T,{field:"address",label:"部门地址",rules:[{required:!0,message:"这是必填的"}],"validate-trigger":["change","input"]},{default:r((()=>[m(I,{modelValue:t(_).Form.address,"onUpdate:modelValue":l[2]||(l[2]=e=>t(_).Form.address=e),placeholder:"请输入部门地址"},null,8,["modelValue"])])),_:1}),m(T,{field:"status",label:"状态",rules:[{required:!0,message:"这是必填的"}],"validate-trigger":["change","input"]},{default:r((()=>[m(C,{modelValue:t(_).Form.status,"onUpdate:modelValue":l[3]||(l[3]=e=>t(_).Form.status=e),style:{width:"320px"},placeholder:"请选择当前状态"},{default:r((()=>[(s(!0),o(c,null,p(t(_).sexType,(e=>(s(),y(S,{value:e.value,label:e.label},null,8,["value","label"])))),256))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])])),_:1},8,["visible"])])}}});export{f as default};