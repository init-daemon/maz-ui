import{d as D,f as l,e as q,w as z,o as r,c as o,b as d,x as c,G as p,z as y,H as f,af as h,l as k,m as g,s as j}from"./framework.VWXXS9mT.js";import{D as s,w as v,h as Z}from"./theme.GKc-7CSW.js";const w={key:0,class:"m-picker-header__date"},B=D({__name:"MazPickerHeader",props:{modelValue:{type:[String,Object],default:void 0},color:{type:String,required:!0},locale:{type:String,required:!0},noShortcuts:{type:Boolean,required:!0},double:{type:Boolean,required:!0},hasDate:{type:Boolean,required:!0},hasTime:{type:Boolean,required:!0},formatterOptions:{type:Object,required:!0},calendarDate:{type:String,required:!0}},setup(i){const e=i,_=l(()=>{var t;return typeof e.modelValue=="string"?e.modelValue:(t=e.modelValue)==null?void 0:t.start}),m=q("maz-slidevnext"),O=l(()=>e.modelValue&&typeof e.modelValue=="object"?`${e.modelValue.start?s(e.modelValue.start,e.locale,{year:"numeric",timeZone:e.formatterOptions.timeZone}):"..."} - ${e.modelValue.end?s(e.modelValue.end,e.locale,{year:"numeric",timeZone:e.formatterOptions.timeZone}):"..."}`:typeof e.modelValue=="string"?s(e.modelValue,e.locale,{year:"numeric",timeZone:e.formatterOptions.timeZone}):"-"),S=l(()=>e.hasDate?[O.value]:void 0),$=l(()=>{if(e.modelValue&&typeof e.modelValue=="object"&&(e.modelValue.start||e.modelValue.end)){const t=e.noShortcuts&&!e.double?"short":"long";return`${e.modelValue.start?v(s(e.modelValue.start,e.locale,{weekday:t,month:t,day:"numeric",timeZone:e.formatterOptions.timeZone})):"..."} - ${e.modelValue.end?v(s(e.modelValue.end,e.locale,{weekday:t,month:t,day:"numeric",timeZone:e.formatterOptions.timeZone})):"..."}`}else if(typeof e.modelValue=="string")return v(s(e.modelValue,e.locale,{weekday:"long",month:"long",day:"numeric",timeZone:e.formatterOptions.timeZone}));return"-"}),b=l(()=>e.hasDate?[$.value]:void 0),x=l(()=>_.value?s(_.value,e.locale,{timeStyle:"short",timeZone:e.formatterOptions.timeZone,hour12:e.formatterOptions.hour12}):void 0),V=l(()=>e.hasTime?[x.value]:void 0);return z(()=>e.modelValue,(t,u)=>{const a=typeof t=="object"?t.start:t,n=typeof u=="object"?u.start:u;m.value=Z(a).isAfter(n,"date")||Z(a).isSame(n,"date")?"maz-slidevnext":"maz-slidevprev"}),(t,u)=>(r(),o("div",{class:g(["m-picker-header",[`--${i.color}`]])},[i.hasDate?(r(),o("div",w,[d(h,{name:m.value,tag:"div",class:"m-picker-header__year-transition"},{default:c(()=>[(r(!0),o(p,null,f(S.value,(a,n)=>(r(),o("span",{key:`${a}-${n}`,class:"m-picker-header__year-text"},y(a),1))),128))]),_:1},8,["name"]),d(h,{name:m.value,tag:"div",class:"m-picker-header__date-transition"},{default:c(()=>[(r(!0),o(p,null,f(b.value,(a,n)=>(r(),o("span",{key:`${a}-${n}`,class:"m-picker-header__date-text"},y(a),1))),128))]),_:1},8,["name"])])):k("",!0),V.value?(r(),o("div",{key:1,class:g(["m-picker-header__time",{"--has-date":i.hasDate}])},[d(h,{name:m.value,tag:"div",class:"m-picker-header__time-transition"},{default:c(()=>[(r(!0),o(p,null,f(V.value,(a,n)=>(r(),o("span",{key:`${a}-${n}`,class:"m-picker-header__time-text"},y(a),1))),128))]),_:1},8,["name"])],2)):k("",!0)],2))}}),H=j(B,[["__scopeId","data-v-86e5dba0"]]);export{H as default};
