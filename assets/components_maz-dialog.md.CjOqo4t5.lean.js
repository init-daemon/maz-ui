import{e as g,c,a as s,A as n,z as y,b as l,x as a,am as d,X as k,o as E}from"./chunks/framework.CdX9KKBh.js";const A={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),C=d("",3),u=s("p",null," Your content ",-1),B=d("",4),m=s("p",{class:"maz-py-4"}," Scroll ",-1),f=s("p",{class:"maz-py-4"}," Scroll ",-1),b=s("p",{class:"maz-py-4"}," Scroll ",-1),_=s("p",{class:"maz-py-4"}," Scroll ",-1),v=s("p",{class:"maz-py-4"}," Scroll ",-1),q=s("p",{class:"maz-py-4"}," Scroll ",-1),z=s("p",{class:"maz-py-4"}," Scroll ",-1),S=d("",8),x=JSON.parse('{"title":"MazDialog","description":"MazDialog is a standalone dialog component to show important informations to the user or propose specific action. Many options are available. You can hide the header or the footer, full-size layout, differents states etc.","frontmatter":{"title":"MazDialog","description":"MazDialog is a standalone dialog component to show important informations to the user or propose specific action. Many options are available. You can hide the header or the footer, full-size layout, differents states etc."},"headers":[],"relativePath":"components/maz-dialog.md","filePath":"components/maz-dialog.md","lastUpdated":1713471178000}'),M={name:"components/maz-dialog.md"},w=Object.assign(M,{setup(T){const p=g(!1),h=g(!1);return(r,i)=>{const e=k("MazBtn"),o=k("MazDialog",!0),F=k("MazSelect");return E(),c("div",null,[s("h1",A,[n(y(r.$frontmatter.title)+" ",1),D]),s("p",null,y(r.$frontmatter.description),1),C,l(e,{onClick:i[0]||(i[0]=t=>p.value=!0)},{default:a(()=>[n("Open Dialog")]),_:1}),l(o,{modelValue:p.value,"onUpdate:modelValue":i[1]||(i[1]=t=>p.value=t),title:"Dialog Title"},{footer:a(({close:t})=>[l(e,{onClick:t},{default:a(()=>[n(" Confirm ")]),_:2},1032,["onClick"])]),default:a(()=>[u]),_:1},8,["modelValue"]),B,l(e,{onClick:i[2]||(i[2]=t=>h.value=!0)},{default:a(()=>[n("Open Scrollable Dialog")]),_:1}),l(o,{modelValue:h.value,"onUpdate:modelValue":i[4]||(i[4]=t=>h.value=t),title:"Dialog Title","max-height":"400px",scrollable:""},{title:a(()=>[n(" Scrollable Dialog Title ")]),default:a(()=>[m,f,b,_,v,q,z,l(F,{"model-value":1,options:[{value:1,label:1},{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5},{value:6,label:6}]})]),footer:a(()=>[l(e,{onClick:i[3]||(i[3]=t=>h.value=!1)},{default:a(()=>[n(" Confirm ")]),_:1})]),_:1},8,["modelValue"]),S])}}});export{x as __pageData,w as default};