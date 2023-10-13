import{s as l,a as e,j as $,F as K}from"./styled-components.browser.esm-a0a1784b.js";import{t as J}from"./theme-9f42aa46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const j=l.section`
  @media (max-width: 679px) {
    overflow-x: scroll;
  }
`,H=l.table`
  width: 100%;
  min-width: 270px;
  min-height: 80px;

  font: var(--text-caption);
  text-align: center;

  border: 1px solid #e2e2e2;

  @media (max-width: 679px) {
    overflow-x: scroll;
    border-collapse: collapse;
  }
`,V=l.tbody`
  width: 200px;
`,q=l.thead`
  background-color: #dcf0fa;
`,E=l.tr`
  display: grid;
  grid-template-columns: ${({$columnTemplate:n,$childLength:t})=>n||`repeat(${t}, 1fr)`};
  gap: 10px;

  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  padding: 0 15px;

  &:hover {
    background-color: #eeeeee;
  }
`,G=l.th`
  display: flex;
  justify-content: start;

  padding: 10px 0;

  font: var(--text-caption);
  font-weight: 600;
`,P=l.td`
  display: flex;
  justify-content: start;

  padding: ${n=>n.$dense?"5px 0":"10px 0"};

  @media (max-width: ${J.breakpoint.sm}) {
    font-size: 13px;
  }
`,Q=l.p`
  margin: 15px 0;
`,r=l.button`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
`;function o({columns:n,rows:t,dense:R=!1,columnTemplate:p}){return e(j,{children:$(H,{children:[e(q,{children:e(E,{$columnTemplate:p,$childLength:n.length,children:n.map(m=>e(G,{children:m}))})}),e(V,{children:t.length===0?e(Q,{children:"No Data"}):e(K,{children:t.map((m,U)=>e(E,{$columnTemplate:p,$childLength:n.length,children:Object.entries(m).map(([z,F],W)=>e(P,{$dense:R,children:F},`${z}${W}`))},U))})})]})})}try{o.displayName="Table",o.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"string[]"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"T[]"}},dense:{defaultValue:{value:"false"},description:"",name:"dense",required:!1,type:{name:"boolean"}},columnTemplate:{defaultValue:null,description:"",name:"columnTemplate",required:!1,type:{name:"string"}}}}}catch{}const g=["Id","Name","Age","Gender","Level"],w=["Id","Name","Age","Gender","Level","Region","Enrolled Year","Point"],D=[{id:0,name:"James",age:21,gender:"MALE",level:"silver"},{id:2,name:"Chsua",age:24,gender:"MALE",level:"gold"},{id:4,name:"Wus",age:25,gender:"FEMALE",level:"bronze"},{id:5,name:"Jero",age:23,gender:"MALE",level:"gold"},{id:6,name:"Dazzle",age:21,gender:"MALE",level:"silver"},{id:7,name:"Lookh",age:19,gender:"FEMALE",level:"gold"},{id:8,name:"Jeomxon",age:21,gender:"MALE",level:"bronze"},{id:11,name:"Abel",age:11,gender:"FEMALE",level:"bronze"},{id:13,name:"Chrone",age:30,gender:"MALE",level:"silver"},{id:15,name:"Nero",age:27,gender:"FEMALE",level:"gold"}],O=[{id:0,name:"James",age:21,gender:"MALE",level:"silver",region:"Korea",enrolled_year:2023,point:21},{id:2,name:"Chsua",age:24,gender:"MALE",level:"gold",region:"Korea",enrolled_year:2023,point:21},{id:4,name:"Wus",age:25,gender:"FEMALE",level:"bronze",region:"Korea",enrolled_year:2023,point:21},{id:5,name:"Jero",age:23,gender:"MALE",level:"gold",region:"Korea",enrolled_year:2023,point:21},{id:6,name:"Dazzle",age:21,gender:"MALE",level:"silver",region:"Korea",enrolled_year:2023,point:21},{id:7,name:"Lookh",age:19,gender:"FEMALE",level:"gold",region:"Korea",enrolled_year:2023,point:21},{id:8,name:"Jeomxon",age:21,gender:"MALE",level:"bronze",region:"Korea",enrolled_year:2023,point:21},{id:11,name:"Abel",age:11,gender:"FEMALE",level:"bronze",region:"Korea",enrolled_year:2023,point:21},{id:13,name:"Chrone",age:30,gender:"MALE",level:"silver",region:"Korea",enrolled_year:2023,point:21},{id:15,name:"Very Long Long Long Long Long Name",age:27,gender:"FEMALE",level:"gold",region:"Korea",enrolled_year:2023,point:21}],X=["Id","Name","Age","Gender","Level","Edit","Delete "],Z=[{id:0,name:"James",age:21,gender:"MALE",level:"silver",editButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:2,name:"Chsua",age:24,gender:"MALE",level:"gold",editButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:4,name:"Wus",age:25,gender:"FEMALE",level:"bronze",editButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:5,name:"Jero",age:23,gender:"MALE",level:"gold",editButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:6,name:"Dazzle",age:21,gender:"MALE",level:"silver",editButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:7,name:"Lookh",age:19,gender:"FEMALE",level:"gold",editButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:8,name:"Jeomxon",age:21,gender:"MALE",level:"bronze",editButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:11,name:"Abel",age:11,gender:"FEMALE",level:"bronze",editButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:13,name:"Chrone",age:30,gender:"MALE",level:"silver",editButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:15,name:"Nero",age:27,gender:"FEMALE",level:"gold",editButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(r,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})}],le={component:o},a={render:()=>e(o,{columns:g,rows:D})},d={render:()=>e(o,{columns:w,rows:O,columnTemplate:"1fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr"})},i={render:()=>e(o,{columns:g,rows:D,dense:!0})},c={render:()=>e(o,{columns:w,rows:O})},s={render:()=>e(o,{columns:g,rows:[]})},u={render:()=>e(o,{columns:X,rows:Z})};var M,L,h;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Table<Member> columns={MEMBER_LIST_COLUMN} rows={MEMBER_LIST} />
}`,...(h=(L=a.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var _,B,C;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Table<Member> columns={MEMBER_LIST_MANY_COLUMNS} rows={MEMBER_LIST_MANY_COLUMNS_LIST} columnTemplate='1fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr' />
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var T,v,k;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Table<Member> columns={MEMBER_LIST_COLUMN} rows={MEMBER_LIST} dense />
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var f,b,A;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Table<Member> columns={MEMBER_LIST_MANY_COLUMNS} rows={MEMBER_LIST_MANY_COLUMNS_LIST} />
}`,...(A=(b=c.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var x,N,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Table<Member> columns={MEMBER_LIST_COLUMN} rows={[]} />
}`,...(S=(N=s.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var y,I,Y;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Table<Member> columns={MEMBER_LIST_COLUMN_WITH_BUTTON} rows={MEMBER_LIST_WITH_BUTTON} />
}`,...(Y=(I=u.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};const te=["Default","WithColumnTemplate","Dense","ManyColumns","NoData","WithUserInteraction"];export{a as Default,i as Dense,c as ManyColumns,s as NoData,d as WithColumnTemplate,u as WithUserInteraction,te as __namedExportsOrder,le as default};
//# sourceMappingURL=Table.stories-8eaaf4f0.js.map
