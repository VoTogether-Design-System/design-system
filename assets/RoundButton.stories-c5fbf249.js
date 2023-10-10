import{s as $,j as R,F as _,a as o}from"./styled-components.browser.esm-a0a1784b.js";import{t as l}from"./theme-9f42aa46.js";import{G as B}from"./globalStyle-5f7d7f3d.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const r={sm:{button:"30px"},md:{button:"45px"},lg:{button:"60px"}},v=$.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${e=>r[e.size].button};
  height: ${e=>r[e.size].button};
  border-radius: 50%;

  background-color: var(--primary-color);
  color: var(--white);

  cursor: pointer;

  @media (min-width: ${l.breakpoint.md}) {
    width: ${({size:e,isAutoResize:t})=>t&&`calc(${r[e].button} * 1.1)`};
    height: ${({size:e,isAutoResize:t})=>t&&`calc(${r[e].button} * 1.1)`};
  }

  @media (min-width: ${l.breakpoint.lg}) {
    width: ${({size:e,isAutoResize:t})=>t&&`calc(${r[e].button} * 1.2)`};
    height: ${({size:e,isAutoResize:t})=>t&&`calc(${r[e].button} * 1.2)`};
  }
`;function a({size:e="sm",style:t,isAutoResize:g=!1,children:S,...y}){return R(_,{children:[o(B,{}),o(v,{style:t,size:e,isAutoResize:g,"aria-label":"더하기",...y,children:S})]})}try{a.displayName="RoundButton",a.__docgenInfo={description:"",displayName:"RoundButton",props:{size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},isAutoResize:{defaultValue:{value:"false"},description:"",name:"isAutoResize",required:!1,type:{name:"boolean"}}}}}catch{}const V={component:a},n={render:()=>o(a,{size:"sm","aria-label":"글 작성하기",children:"+"})},s={render:()=>o(a,{size:"md","aria-label":"마이너스",children:"-"})},i={render:()=>o(a,{size:"lg","aria-label":""})};var u,d,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <RoundButton size="sm" aria-label="글 작성하기">
      +
    </RoundButton>
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <RoundButton size="md" aria-label="마이너스">
      -
    </RoundButton>
}`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var z,h,f;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <RoundButton size="lg" aria-label="" />
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const A=["SizeS","SizeM","SizeL"];export{i as SizeL,s as SizeM,n as SizeS,A as __namedExportsOrder,V as default};
//# sourceMappingURL=RoundButton.stories-c5fbf249.js.map
