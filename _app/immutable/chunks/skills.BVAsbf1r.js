import{A as r}from"./assets.BRfTLGO5.js";const u=(o,...s)=>{const a={...o};return Object.keys(a).forEach(t=>{s.includes(t)&&delete a[t]}),a},e=o=>o,m=[e({name:"Programming Languages",slug:"pro-lang"}),e({name:"Frameworks",slug:"framework"}),e({name:"Libraries",slug:"library"}),e({name:"Langauges",slug:"lang"}),e({name:"Databases",slug:"db"}),e({name:"ORMs",slug:"orm"}),e({name:"DevOps",slug:"devops"}),e({name:"Testing",slug:"test"}),e({name:"Dev Tools",slug:"devtools"}),e({name:"Markup & Style",slug:"markup-style"}),e({name:"Design",slug:"design"}),e({name:"Soft Skills",slug:"soft"}),e({name:"Modeling & Analysis Software",slug:"CAD"})],l=o=>{const s=u(o,"category");return o.category&&(s.category=m.find(a=>a.slug===o.category)),s},d=(...o)=>g.filter(s=>o.length===0?!0:o.includes(s.slug)),S=o=>{const s=[],a=[];return g.forEach(t=>{if(o.trim()&&!t.name.toLowerCase().includes(o.trim().toLowerCase()))return;if(!t.category){a.push(t);return}let n=s.find(c=>{var i;return c.category.slug===((i=t.category)==null?void 0:i.slug)});n||(n={items:[],category:t.category},s.push(n)),n.items.push(t)}),a.length!==0&&s.push({category:{name:"Others",slug:"others"},items:a}),s},y="Skills",g=[l({slug:"py",color:"yellow",description:"",logo:r.Python,name:"Python",category:"pro-lang"}),l({slug:"cpp",color:"blue",description:"",logo:r.Cpp,name:"C++",category:"pro-lang"}),l({slug:"Matlab",color:"orange",description:"",logo:r.Matlab,name:"Matlab",category:"pro-lang"}),l({slug:"Solidworks",color:"red",description:"",logo:r.Solidworks,name:"Solidworks",category:"CAD"}),l({slug:"Catia",color:"blue",description:"",logo:r.Catia,name:"Catia",category:"CAD"}),l({slug:"ANSYS",color:"yellow",description:"",logo:r.ANSYS,name:"Ansys",category:"CAD"}),l({slug:"ABAQUS",color:"blue",description:"",logo:r.ABAQUS,name:"Abaqus",category:"CAD"}),l({slug:"Fusion360",color:"orange",description:"",logo:r.Fusion360,name:"Fusion 360",category:"CAD"})],f={title:y,items:g};export{f as S,d as a,S as g};
