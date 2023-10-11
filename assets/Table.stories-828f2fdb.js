import{s as r,a as e,j as D,F as O}from"./styled-components.browser.esm-a0a1784b.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const R=r.section`
  @media (max-width: 679px) {
    overflow-x: scroll;
  }
`,U=r.table`
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
`,z=r.tbody`
  width: 200px;

  & > :nth-child(11) {
    margin-top: 20px;
    padding: 3px 0;
    border-radius: 4px;

    background-color: var(--white);

    font-weight: 600;
  }
`,F=r.thead`
  background-color: #dcf0fa;
`,m=r.tr`
  display: grid;
  grid-template-columns: ${o=>`repeat(${o.$childLength}, 1fr)`};
  grid-gap: 10px;

  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  padding: 0 15px;

  &:hover {
    background-color: #deeef6;
  }
`,$=r.th`
  padding: 10px 0;

  font: var(--text-caption);
  font-weight: 600;
`,K=r.td`
  padding: ${o=>o.$dense?"5px 0":"10px 0"};
`,W=r.p`
  margin: 15px 0;
`,n=r.button`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
`;function l({columns:o,rows:g,dense:S=!1}){return e(R,{children:D(U,{children:[e(F,{children:e(m,{$childLength:o.length,children:o.map(s=>e($,{children:s}))})}),e(z,{children:g.length===0?e(W,{children:"No Data"}):e(O,{children:g.map((s,y)=>e(m,{$childLength:o.length,children:Object.entries(s).map(([Y,f],w)=>e(K,{$dense:S,children:f},`${Y}${w}`))},y))})})]})})}try{l.displayName="Table",l.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"string[]"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"T[]"}},dense:{defaultValue:{value:"false"},description:"",name:"dense",required:!1,type:{name:"boolean"}}}}}catch{}const u=["Id","Name","Age","Gender","Level"],J=["Id","Name","Age","Gender","Level","Region","Enrolled Year","Point"],I=[{id:0,name:"James",age:21,gender:"MALE",level:"silver"},{id:2,name:"Chsua",age:24,gender:"MALE",level:"gold"},{id:4,name:"Wus",age:25,gender:"FEMALE",level:"bronze"},{id:5,name:"Jero",age:23,gender:"MALE",level:"gold"},{id:6,name:"Dazzle",age:21,gender:"MALE",level:"silver"},{id:7,name:"Lookh",age:19,gender:"FEMALE",level:"gold"},{id:8,name:"Jeomxon",age:21,gender:"MALE",level:"bronze"},{id:11,name:"Abel",age:11,gender:"FEMALE",level:"bronze"},{id:13,name:"Chrone",age:30,gender:"MALE",level:"silver"},{id:15,name:"Nero",age:27,gender:"FEMALE",level:"gold"}],H=[{id:0,name:"James",age:21,gender:"MALE",level:"silver",region:"Korea",enrolled_year:2023,point:21},{id:2,name:"Chsua",age:24,gender:"MALE",level:"gold",region:"Korea",enrolled_year:2023,point:21},{id:4,name:"Wus",age:25,gender:"FEMALE",level:"bronze",region:"Korea",enrolled_year:2023,point:21},{id:5,name:"Jero",age:23,gender:"MALE",level:"gold",region:"Korea",enrolled_year:2023,point:21},{id:6,name:"Dazzle",age:21,gender:"MALE",level:"silver",region:"Korea",enrolled_year:2023,point:21},{id:7,name:"Lookh",age:19,gender:"FEMALE",level:"gold",region:"Korea",enrolled_year:2023,point:21},{id:8,name:"Jeomxon",age:21,gender:"MALE",level:"bronze",region:"Korea",enrolled_year:2023,point:21},{id:11,name:"Abel",age:11,gender:"FEMALE",level:"bronze",region:"Korea",enrolled_year:2023,point:21},{id:13,name:"Chrone",age:30,gender:"MALE",level:"silver",region:"Korea",enrolled_year:2023,point:21},{id:15,name:"Nero",age:27,gender:"FEMALE",level:"gold",region:"Korea",enrolled_year:2023,point:21}],j=["Id","Name","Age","Gender","Level","Edit","Delete "],q=[{id:0,name:"James",age:21,gender:"MALE",level:"silver",editButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:2,name:"Chsua",age:24,gender:"MALE",level:"gold",editButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:4,name:"Wus",age:25,gender:"FEMALE",level:"bronze",editButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:5,name:"Jero",age:23,gender:"MALE",level:"gold",editButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:6,name:"Dazzle",age:21,gender:"MALE",level:"silver",editButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:7,name:"Lookh",age:19,gender:"FEMALE",level:"gold",editButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:8,name:"Jeomxon",age:21,gender:"MALE",level:"bronze",editButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:11,name:"Abel",age:11,gender:"FEMALE",level:"bronze",editButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:13,name:"Chrone",age:30,gender:"MALE",level:"silver",editButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})},{id:15,name:"Nero",age:27,gender:"FEMALE",level:"gold",editButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Edit"}),deleteButton:e(n,{onClick:()=>alert("You Clicked Button!"),children:"Delete"})}],Q={component:l},t={render:()=>e(l,{columns:u,rows:I})},d={render:()=>e(l,{columns:u,rows:I,dense:!0})},a={render:()=>e(l,{columns:J,rows:H})},i={render:()=>e(l,{columns:u,rows:[]})},c={render:()=>e(l,{columns:j,rows:q})};var p,E,M;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Table<Member> columns={MEMBER_LIST_COLUMN} rows={MEMBER_LIST} />
}`,...(M=(E=t.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var h,L,B;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Table<Member> columns={MEMBER_LIST_COLUMN} rows={MEMBER_LIST} dense />
}`,...(B=(L=d.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var _,C,v;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Table<Member> columns={MEMBER_LIST_MANY_COLUMNS} rows={MEMBER_LIST_MANY_COLUMNS_LIST} />
}`,...(v=(C=a.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var k,T,b;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Table<Member> columns={MEMBER_LIST_COLUMN} rows={[]} />
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var A,x,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Table<Member> columns={MEMBER_LIST_COLUMN_WITH_BUTTON} rows={MEMBER_LIST_WITH_BUTTON} />
}`,...(N=(x=c.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const X=["Default","Dense","ManyColumns","NoData","WithUserInteraction"];export{t as Default,d as Dense,a as ManyColumns,i as NoData,c as WithUserInteraction,X as __namedExportsOrder,Q as default};
//# sourceMappingURL=Table.stories-828f2fdb.js.map
