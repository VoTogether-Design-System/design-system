import{c as _,s as $,j as f,a as r}from"./styled-components.browser.esm-a0a1784b.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const o={sm:"10px",md:"15px",lg:"30px"},h=_`
to {
  transform: translate(0, -15px);
}
`,x=$.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > :nth-child(2) {
    animation-delay: 0.1s;
    margin: 0 ${e=>o[e.$size]};
  }

  & > :nth-child(3) {
    animation-delay: 0.2s;
  }
`,t=$.div`
  width: ${e=>o[e.$size]};
  height: ${e=>o[e.$size]};
  border-radius: 50%;

  background-color: #747474;

  animation: ${h} 0.5s ease-in-out infinite alternate;
`;function n({size:e}){return f(x,{$size:e,"aria-label":"로딩 중입니다.",children:[r(t,{$size:e}),r(t,{$size:e}),r(t,{$size:e})]})}try{n.displayName="LoadingSpinner",n.__docgenInfo={description:"",displayName:"LoadingSpinner",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const j={component:n},a={render:()=>r(n,{size:"sm"})},s={render:()=>r(n,{size:"md"})},i={render:()=>r(n,{size:"lg"})};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <LoadingSpinner size="sm" />
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,l,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <LoadingSpinner size="md" />
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,z,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <LoadingSpinner size="lg" />
}`,...(S=(z=i.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const b=["SizeS","SizeM","SizeL"];export{i as SizeL,s as SizeM,a as SizeS,b as __namedExportsOrder,j as default};
//# sourceMappingURL=LoadingSpinner.stories-a2217641.js.map
